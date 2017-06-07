webpackJsonp([16],{

/***/ 1021:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(682);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("597c912c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-db2ac992\",\"scoped\":false,\"hasInlineConfig\":true}!./widgets.css", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-db2ac992\",\"scoped\":false,\"hasInlineConfig\":true}!./widgets.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1022:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(683);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("55ba3eb6", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-db2ac992\",\"scoped\":false,\"hasInlineConfig\":true}!./animate.min.css", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-db2ac992\",\"scoped\":false,\"hasInlineConfig\":true}!./animate.min.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1023:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(684);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("70c38828", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-db2ac992\",\"scoped\":false,\"hasInlineConfig\":true}!./ihover.min.css", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-db2ac992\",\"scoped\":false,\"hasInlineConfig\":true}!./ihover.min.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1024:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(685);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("1bf508f0", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../../node_modules/css-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-db2ac992\",\"scoped\":true,\"hasInlineConfig\":true}!./swiper.min.css", function() {
     var newContent = require("!!../../../../../../../../node_modules/css-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-db2ac992\",\"scoped\":true,\"hasInlineConfig\":true}!./swiper.min.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(1024)
__webpack_require__(1023)
__webpack_require__(1022)
__webpack_require__(1021)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(447),
  /* template */
  __webpack_require__(871),
  /* scopeId */
  "data-v-db2ac992",
  /* cssModules */
  null
)
Component.options.__file = "/home/vagrant/Sites/vue_workflows/laravel/resources/assets/js/components/components/widgets.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] widgets.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-db2ac992", Component.options)
  } else {
    hotAPI.reload("data-v-db2ac992", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 263:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: /home/vagrant/Sites/vue_workflows/laravel/node_modules/mozjpeg/vendor/cjpeg: 1: /home/vagrant/Sites/vue_workflows/laravel/node_modules/mozjpeg/vendor/cjpeg: Syntax error: word unexpected (expecting \")\")\n\n    at Promise.all.then.arr (/home/vagrant/Sites/vue_workflows/laravel/node_modules/execa/index.js:201:11)\n    at process._tickCallback (internal/process/next_tick.js:109:7)");

/***/ }),

/***/ 265:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: /home/vagrant/Sites/vue_workflows/laravel/node_modules/mozjpeg/vendor/cjpeg: 1: /home/vagrant/Sites/vue_workflows/laravel/node_modules/mozjpeg/vendor/cjpeg: Syntax error: word unexpected (expecting \")\")\n\n    at Promise.all.then.arr (/home/vagrant/Sites/vue_workflows/laravel/node_modules/execa/index.js:201:11)\n    at process._tickCallback (internal/process/next_tick.js:109:7)");

/***/ }),

/***/ 266:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: /home/vagrant/Sites/vue_workflows/laravel/node_modules/mozjpeg/vendor/cjpeg: 1: /home/vagrant/Sites/vue_workflows/laravel/node_modules/mozjpeg/vendor/cjpeg: Syntax error: word unexpected (expecting \")\")\n\n    at Promise.all.then.arr (/home/vagrant/Sites/vue_workflows/laravel/node_modules/execa/index.js:201:11)\n    at process._tickCallback (internal/process/next_tick.js:109:7)");

/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 *
 * jquery.sparkline.js
 *
 * v2.1.2
 * (c) Splunk, Inc
 * Contact: Gareth Watts (gareth@splunk.com)
 * http://omnipotent.net/jquery.sparkline/
 *
 * Generates inline sparkline charts from data supplied either to the method
 * or inline in HTML
 *
 * Compatible with Internet Explorer 6.0+ and modern browsers equipped with the canvas tag
 * (Firefox 2.0+, Safari, Opera, etc)
 *
 * License: New BSD License
 *
 * Copyright (c) 2012, Splunk Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 *     * Redistributions of source code must retain the above copyright notice,
 *       this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright notice,
 *       this list of conditions and the following disclaimer in the documentation
 *       and/or other materials provided with the distribution.
 *     * Neither the name of Splunk Inc nor the names of its contributors may
 *       be used to endorse or promote products derived from this software without
 *       specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
 * OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT
 * SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT
 * OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 *
 * Usage:
 *  $(selector).sparkline(values, options)
 *
 * If values is undefined or set to 'html' then the data values are read from the specified tag:
 *   <p>Sparkline: <span class="sparkline">1,4,6,6,8,5,3,5</span></p>
 *   $('.sparkline').sparkline();
 * There must be no spaces in the enclosed data set
 *
 * Otherwise values must be an array of numbers or null values
 *    <p>Sparkline: <span id="sparkline1">This text replaced if the browser is compatible</span></p>
 *    $('#sparkline1').sparkline([1,4,6,6,8,5,3,5])
 *    $('#sparkline2').sparkline([1,4,6,null,null,5,3,5])
 *
 * Values can also be specified in an HTML comment, or as a values attribute:
 *    <p>Sparkline: <span class="sparkline"><!--1,4,6,6,8,5,3,5 --></span></p>
 *    <p>Sparkline: <span class="sparkline" values="1,4,6,6,8,5,3,5"></span></p>
 *    $('.sparkline').sparkline();
 *
 * For line charts, x values can also be specified:
 *   <p>Sparkline: <span class="sparkline">1:1,2.7:4,3.4:6,5:6,6:8,8.7:5,9:3,10:5</span></p>
 *    $('#sparkline1').sparkline([ [1,1], [2.7,4], [3.4,6], [5,6], [6,8], [8.7,5], [9,3], [10,5] ])
 *
 * By default, options should be passed in as teh second argument to the sparkline function:
 *   $('.sparkline').sparkline([1,2,3,4], {type: 'bar'})
 *
 * Options can also be set by passing them on the tag itself.  This feature is disabled by default though
 * as there's a slight performance overhead:
 *   $('.sparkline').sparkline([1,2,3,4], {enableTagOptions: true})
 *   <p>Sparkline: <span class="sparkline" sparkType="bar" sparkBarColor="red">loading</span></p>
 * Prefix all options supplied as tag attribute with "spark" (configurable by setting tagOptionPrefix)
 *
 * Supported options:
 *   lineColor - Color of the line used for the chart
 *   fillColor - Color used to fill in the chart - Set to '' or false for a transparent chart
 *   width - Width of the chart - Defaults to 3 times the number of values in pixels
 *   height - Height of the chart - Defaults to the height of the containing element
 *   chartRangeMin - Specify the minimum value to use for the Y range of the chart - Defaults to the minimum value supplied
 *   chartRangeMax - Specify the maximum value to use for the Y range of the chart - Defaults to the maximum value supplied
 *   chartRangeClip - Clip out of range values to the max/min specified by chartRangeMin and chartRangeMax
 *   chartRangeMinX - Specify the minimum value to use for the X range of the chart - Defaults to the minimum value supplied
 *   chartRangeMaxX - Specify the maximum value to use for the X range of the chart - Defaults to the maximum value supplied
 *   composite - If true then don't erase any existing chart attached to the tag, but draw
 *           another chart over the top - Note that width and height are ignored if an
 *           existing chart is detected.
 *   tagValuesAttribute - Name of tag attribute to check for data values - Defaults to 'values'
 *   enableTagOptions - Whether to check tags for sparkline options
 *   tagOptionPrefix - Prefix used for options supplied as tag attributes - Defaults to 'spark'
 *   disableHiddenCheck - If set to true, then the plugin will assume that charts will never be drawn into a
 *           hidden dom element, avoding a browser reflow
 *   disableInteraction - If set to true then all mouseover/click interaction behaviour will be disabled,
 *       making the plugin perform much like it did in 1.x
 *   disableTooltips - If set to true then tooltips will be disabled - Defaults to false (tooltips enabled)
 *   disableHighlight - If set to true then highlighting of selected chart elements on mouseover will be disabled
 *       defaults to false (highlights enabled)
 *   highlightLighten - Factor to lighten/darken highlighted chart values by - Defaults to 1.4 for a 40% increase
 *   tooltipContainer - Specify which DOM element the tooltip should be rendered into - defaults to document.body
 *   tooltipClassname - Optional CSS classname to apply to tooltips - If not specified then a default style will be applied
 *   tooltipOffsetX - How many pixels away from the mouse pointer to render the tooltip on the X axis
 *   tooltipOffsetY - How many pixels away from the mouse pointer to render the tooltip on the r axis
 *   tooltipFormatter  - Optional callback that allows you to override the HTML displayed in the tooltip
 *       callback is given arguments of (sparkline, options, fields)
 *   tooltipChartTitle - If specified then the tooltip uses the string specified by this setting as a title
 *   tooltipFormat - A format string or SPFormat object  (or an array thereof for multiple entries)
 *       to control the format of the tooltip
 *   tooltipPrefix - A string to prepend to each field displayed in a tooltip
 *   tooltipSuffix - A string to append to each field displayed in a tooltip
 *   tooltipSkipNull - If true then null values will not have a tooltip displayed (defaults to true)
 *   tooltipValueLookups - An object or range map to map field values to tooltip strings
 *       (eg. to map -1 to "Lost", 0 to "Draw", and 1 to "Win")
 *   numberFormatter - Optional callback for formatting numbers in tooltips
 *   numberDigitGroupSep - Character to use for group separator in numbers "1,234" - Defaults to ","
 *   numberDecimalMark - Character to use for the decimal point when formatting numbers - Defaults to "."
 *   numberDigitGroupCount - Number of digits between group separator - Defaults to 3
 *
 * There are 7 types of sparkline, selected by supplying a "type" option of 'line' (default),
 * 'bar', 'tristate', 'bullet', 'discrete', 'pie' or 'box'
 *    line - Line chart.  Options:
 *       spotColor - Set to '' to not end each line in a circular spot
 *       minSpotColor - If set, color of spot at minimum value
 *       maxSpotColor - If set, color of spot at maximum value
 *       spotRadius - Radius in pixels
 *       lineWidth - Width of line in pixels
 *       normalRangeMin
 *       normalRangeMax - If set draws a filled horizontal bar between these two values marking the "normal"
 *                      or expected range of values
 *       normalRangeColor - Color to use for the above bar
 *       drawNormalOnTop - Draw the normal range above the chart fill color if true
 *       defaultPixelsPerValue - Defaults to 3 pixels of width for each value in the chart
 *       highlightSpotColor - The color to use for drawing a highlight spot on mouseover - Set to null to disable
 *       highlightLineColor - The color to use for drawing a highlight line on mouseover - Set to null to disable
 *       valueSpots - Specify which points to draw spots on, and in which color.  Accepts a range map
 *
 *   bar - Bar chart.  Options:
 *       barColor - Color of bars for postive values
 *       negBarColor - Color of bars for negative values
 *       zeroColor - Color of bars with zero values
 *       nullColor - Color of bars with null values - Defaults to omitting the bar entirely
 *       barWidth - Width of bars in pixels
 *       colorMap - Optional mappnig of values to colors to override the *BarColor values above
 *                  can be an Array of values to control the color of individual bars or a range map
 *                  to specify colors for individual ranges of values
 *       barSpacing - Gap between bars in pixels
 *       zeroAxis - Centers the y-axis around zero if true
 *
 *   tristate - Charts values of win (>0), lose (<0) or draw (=0)
 *       posBarColor - Color of win values
 *       negBarColor - Color of lose values
 *       zeroBarColor - Color of draw values
 *       barWidth - Width of bars in pixels
 *       barSpacing - Gap between bars in pixels
 *       colorMap - Optional mappnig of values to colors to override the *BarColor values above
 *                  can be an Array of values to control the color of individual bars or a range map
 *                  to specify colors for individual ranges of values
 *
 *   discrete - Options:
 *       lineHeight - Height of each line in pixels - Defaults to 30% of the graph height
 *       thesholdValue - Values less than this value will be drawn using thresholdColor instead of lineColor
 *       thresholdColor
 *
 *   bullet - Values for bullet graphs msut be in the order: target, performance, range1, range2, range3, ...
 *       options:
 *       targetColor - The color of the vertical target marker
 *       targetWidth - The width of the target marker in pixels
 *       performanceColor - The color of the performance measure horizontal bar
 *       rangeColors - Colors to use for each qualitative range background color
 *
 *   pie - Pie chart. Options:
 *       sliceColors - An array of colors to use for pie slices
 *       offset - Angle in degrees to offset the first slice - Try -90 or +90
 *       borderWidth - Width of border to draw around the pie chart, in pixels - Defaults to 0 (no border)
 *       borderColor - Color to use for the pie chart border - Defaults to #000
 *
 *   box - Box plot. Options:
 *       raw - Set to true to supply pre-computed plot points as values
 *             values should be: low_outlier, low_whisker, q1, median, q3, high_whisker, high_outlier
 *             When set to false you can supply any number of values and the box plot will
 *             be computed for you.  Default is false.
 *       showOutliers - Set to true (default) to display outliers as circles
 *       outlierIQR - Interquartile range used to determine outliers.  Default 1.5
 *       boxLineColor - Outline color of the box
 *       boxFillColor - Fill color for the box
 *       whiskerColor - Line color used for whiskers
 *       outlierLineColor - Outline color of outlier circles
 *       outlierFillColor - Fill color of the outlier circles
 *       spotRadius - Radius of outlier circles
 *       medianColor - Line color of the median line
 *       target - Draw a target cross hair at the supplied value (default undefined)
 *
 *
 *
 *   Examples:
 *   $('#sparkline1').sparkline(myvalues, { lineColor: '#f00', fillColor: false });
 *   $('.barsparks').sparkline('html', { type:'bar', height:'40px', barWidth:5 });
 *   $('#tristate').sparkline([1,1,-1,1,0,0,-1], { type:'tristate' }):
 *   $('#discrete').sparkline([1,3,4,5,5,3,4,5], { type:'discrete' });
 *   $('#bullet').sparkline([10,12,12,9,7], { type:'bullet' });
 *   $('#pie').sparkline([1,1,2], { type:'pie' });
 */

/*jslint regexp: true, browser: true, jquery: true, white: true, nomen: false, plusplus: false, maxerr: 500, indent: 4 */

(function (document, Math, undefined) {
	// performance/minified-size optimization
	(function (factory) {
		if (true) {
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (jQuery && !jQuery.fn.sparkline) {
			factory(jQuery);
		}
	})(function ($) {
		'use strict';

		var UNSET_OPTION = {},
		    getDefaults,
		    createClass,
		    SPFormat,
		    clipval,
		    quartile,
		    normalizeValue,
		    normalizeValues,
		    remove,
		    isNumber,
		    all,
		    sum,
		    addCSS,
		    ensureArray,
		    formatNumber,
		    RangeMap,
		    MouseHandler,
		    Tooltip,
		    barHighlightMixin,
		    line,
		    bar,
		    tristate,
		    discrete,
		    bullet,
		    pie,
		    box,
		    defaultStyles,
		    initStyles,
		    VShape,
		    VCanvas_base,
		    VCanvas_canvas,
		    VCanvas_vml,
		    pending,
		    shapeCount = 0;

		/**
   * Default configuration settings
   */
		getDefaults = function getDefaults() {
			return {
				// Settings common to most/all chart types
				common: {
					type: 'line',
					lineColor: '#00f',
					fillColor: '#cdf',
					defaultPixelsPerValue: 3,
					width: 'auto',
					height: 'auto',
					composite: false,
					tagValuesAttribute: 'values',
					tagOptionsPrefix: 'spark',
					enableTagOptions: false,
					enableHighlight: true,
					highlightLighten: 1.1,
					tooltipSkipNull: true,
					tooltipPrefix: '',
					tooltipSuffix: '',
					disableHiddenCheck: false,
					numberFormatter: false,
					numberDigitGroupCount: 3,
					numberDigitGroupSep: ',',
					numberDecimalMark: '.',
					disableTooltips: false,
					disableInteraction: false
				},
				// Defaults for line charts
				line: {
					spotColor: '#f80',
					highlightSpotColor: '#5f5',
					highlightLineColor: '#f22',
					spotRadius: 1.5,
					minSpotColor: '#f80',
					maxSpotColor: '#f80',
					lineWidth: 1,
					normalRangeMin: undefined,
					normalRangeMax: undefined,
					normalRangeColor: '#ccc',
					drawNormalOnTop: false,
					chartRangeMin: undefined,
					chartRangeMax: undefined,
					chartRangeMinX: undefined,
					chartRangeMaxX: undefined,
					tooltipFormat: new SPFormat('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{y}}{{suffix}}')
				},
				// Defaults for bar charts
				bar: {
					barColor: '#3366cc',
					negBarColor: '#f44',
					stackedBarColor: ['#3366cc', '#dc3912', '#ff9900', '#109618', '#66aa00', '#dd4477', '#0099c6', '#990099'],
					zeroColor: undefined,
					nullColor: undefined,
					zeroAxis: true,
					barWidth: 4,
					barSpacing: 1,
					chartRangeMax: undefined,
					chartRangeMin: undefined,
					chartRangeClip: false,
					colorMap: undefined,
					tooltipFormat: new SPFormat('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{value}}{{suffix}}')
				},
				// Defaults for tristate charts
				tristate: {
					barWidth: 4,
					barSpacing: 1,
					posBarColor: '#6f6',
					negBarColor: '#f44',
					zeroBarColor: '#999',
					colorMap: {},
					tooltipFormat: new SPFormat('<span style="color: {{color}}">&#9679;</span> {{value:map}}'),
					tooltipValueLookups: { map: { '-1': 'Loss', '0': 'Draw', '1': 'Win' } }
				},
				// Defaults for discrete charts
				discrete: {
					lineHeight: 'auto',
					thresholdColor: undefined,
					thresholdValue: 0,
					chartRangeMax: undefined,
					chartRangeMin: undefined,
					chartRangeClip: false,
					tooltipFormat: new SPFormat('{{prefix}}{{value}}{{suffix}}')
				},
				// Defaults for bullet charts
				bullet: {
					targetColor: '#f33',
					targetWidth: 3, // width of the target bar in pixels
					performanceColor: '#33f',
					rangeColors: ['#d3dafe', '#a8b6ff', '#7f94ff'],
					base: undefined, // set this to a number to change the base start number
					tooltipFormat: new SPFormat('{{fieldkey:fields}} - {{value}}'),
					tooltipValueLookups: { fields: { r: 'Range', p: 'Performance', t: 'Target' } }
				},
				// Defaults for pie charts
				pie: {
					offset: 0,
					sliceColors: ['#3366cc', '#dc3912', '#ff9900', '#109618', '#66aa00', '#dd4477', '#0099c6', '#990099'],
					borderWidth: 0,
					borderColor: '#000',
					tooltipFormat: new SPFormat('<span style="color: {{color}}">&#9679;</span> {{value}} ({{percent.1}}%)')
				},
				// Defaults for box plots
				box: {
					raw: false,
					boxLineColor: '#000',
					boxFillColor: '#cdf',
					whiskerColor: '#000',
					outlierLineColor: '#333',
					outlierFillColor: '#fff',
					medianColor: '#f00',
					showOutliers: true,
					outlierIQR: 1.5,
					spotRadius: 1.5,
					target: undefined,
					targetColor: '#4a2',
					chartRangeMax: undefined,
					chartRangeMin: undefined,
					tooltipFormat: new SPFormat('{{field:fields}}: {{value}}'),
					tooltipFormatFieldlistKey: 'field',
					tooltipValueLookups: { fields: { lq: 'Lower Quartile', med: 'Median',
							uq: 'Upper Quartile', lo: 'Left Outlier', ro: 'Right Outlier',
							lw: 'Left Whisker', rw: 'Right Whisker' } }
				}
			};
		};

		// You can have tooltips use a css class other than jqstooltip by specifying tooltipClassname
		// tooltip modified by westilian:jaman
		defaultStyles = '.jqstooltip { ' + 'position: absolute;' + 'left: 30px;' + 'top: 0px;' + 'display: block;' + 'visibility: hidden;' + 'background: rgb(0, 0, 0) transparent;' + 'background-color: rgba(0,0,0,0.6);' + 'filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);' + '-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)";' + 'color: white;' + 'font: 10px arial, san serif;' + 'text-align: left;' + 'white-space: nowrap;' + 'border: 0px solid white;' + 'border-radius: 3px;' + '-webkit-border-radius: 3px;' + 'z-index: 10000;' + '}' + '.jqsfield { ' + 'color: white;' + 'padding: 5px 5px 5px 5px;' + 'font: 10px arial, san serif;' + 'text-align: left;' + '}';

		/**
   * Utilities
   */

		createClass = function createClass() /* [baseclass, [mixin, ...]], definition */{
			var Class, args;
			Class = function Class() {
				this.init.apply(this, arguments);
			};
			if (arguments.length > 1) {
				if (arguments[0]) {
					Class.prototype = $.extend(new arguments[0](), arguments[arguments.length - 1]);
					Class._super = arguments[0].prototype;
				} else {
					Class.prototype = arguments[arguments.length - 1];
				}
				if (arguments.length > 2) {
					args = Array.prototype.slice.call(arguments, 1, -1);
					args.unshift(Class.prototype);
					$.extend.apply($, args);
				}
			} else {
				Class.prototype = arguments[0];
			}
			Class.prototype.cls = Class;
			return Class;
		};

		/**
   * Wraps a format string for tooltips
   * {{x}}
   * {{x.2}
     * {{x:months}}
     */
		$.SPFormatClass = SPFormat = createClass({
			fre: /\{\{([\w.]+?)(:(.+?))?\}\}/g,
			precre: /(\w+)\.(\d+)/,

			init: function init(format, fclass) {
				this.format = format;
				this.fclass = fclass;
			},

			render: function render(fieldset, lookups, options) {
				var self = this,
				    fields = fieldset,
				    match,
				    token,
				    lookupkey,
				    fieldvalue,
				    prec;
				return this.format.replace(this.fre, function () {
					var lookup;
					token = arguments[1];
					lookupkey = arguments[3];
					match = self.precre.exec(token);
					if (match) {
						prec = match[2];
						token = match[1];
					} else {
						prec = false;
					}
					fieldvalue = fields[token];
					if (fieldvalue === undefined) {
						return '';
					}
					if (lookupkey && lookups && lookups[lookupkey]) {
						lookup = lookups[lookupkey];
						if (lookup.get) {
							// RangeMap
							return lookups[lookupkey].get(fieldvalue) || fieldvalue;
						} else {
							return lookups[lookupkey][fieldvalue] || fieldvalue;
						}
					}
					if (isNumber(fieldvalue)) {
						if (options.get('numberFormatter')) {
							fieldvalue = options.get('numberFormatter')(fieldvalue);
						} else {
							fieldvalue = formatNumber(fieldvalue, prec, options.get('numberDigitGroupCount'), options.get('numberDigitGroupSep'), options.get('numberDecimalMark'));
						}
					}
					return fieldvalue;
				});
			}
		});

		// convience method to avoid needing the new operator
		$.spformat = function (format, fclass) {
			return new SPFormat(format, fclass);
		};

		clipval = function clipval(val, min, max) {
			if (val < min) {
				return min;
			}
			if (val > max) {
				return max;
			}
			return val;
		};

		quartile = function quartile(values, q) {
			var vl;
			if (q === 2) {
				vl = Math.floor(values.length / 2);
				return values.length % 2 ? values[vl] : (values[vl - 1] + values[vl]) / 2;
			} else {
				if (values.length % 2) {
					// odd
					vl = (values.length * q + q) / 4;
					return vl % 1 ? (values[Math.floor(vl)] + values[Math.floor(vl) - 1]) / 2 : values[vl - 1];
				} else {
					//even
					vl = (values.length * q + 2) / 4;
					return vl % 1 ? (values[Math.floor(vl)] + values[Math.floor(vl) - 1]) / 2 : values[vl - 1];
				}
			}
		};

		normalizeValue = function normalizeValue(val) {
			var nf;
			switch (val) {
				case 'undefined':
					val = undefined;
					break;
				case 'null':
					val = null;
					break;
				case 'true':
					val = true;
					break;
				case 'false':
					val = false;
					break;
				default:
					nf = parseFloat(val);
					if (val == nf) {
						val = nf;
					}
			}
			return val;
		};

		normalizeValues = function normalizeValues(vals) {
			var i,
			    result = [];
			for (i = vals.length; i--;) {
				result[i] = normalizeValue(vals[i]);
			}
			return result;
		};

		remove = function remove(vals, filter) {
			var i,
			    vl,
			    result = [];
			for (i = 0, vl = vals.length; i < vl; i++) {
				if (vals[i] !== filter) {
					result.push(vals[i]);
				}
			}
			return result;
		};

		isNumber = function isNumber(num) {
			return !isNaN(parseFloat(num)) && isFinite(num);
		};

		formatNumber = function formatNumber(num, prec, groupsize, groupsep, decsep) {
			var p, i;
			num = (prec === false ? parseFloat(num).toString() : num.toFixed(prec)).split('');
			p = (p = $.inArray('.', num)) < 0 ? num.length : p;
			if (p < num.length) {
				num[p] = decsep;
			}
			for (i = p - groupsize; i > 0; i -= groupsize) {
				num.splice(i, 0, groupsep);
			}
			return num.join('');
		};

		// determine if all values of an array match a value
		// returns true if the array is empty
		all = function all(val, arr, ignoreNull) {
			var i;
			for (i = arr.length; i--;) {
				if (ignoreNull && arr[i] === null) continue;
				if (arr[i] !== val) {
					return false;
				}
			}
			return true;
		};

		// sums the numeric values in an array, ignoring other values
		sum = function sum(vals) {
			var total = 0,
			    i;
			for (i = vals.length; i--;) {
				total += typeof vals[i] === 'number' ? vals[i] : 0;
			}
			return total;
		};

		ensureArray = function ensureArray(val) {
			return $.isArray(val) ? val : [val];
		};

		// http://paulirish.com/2008/bookmarklet-inject-new-css-rules/
		addCSS = function addCSS(css) {
			var tag;
			//if ('\v' == 'v') /* ie only */ {
			if (document.createStyleSheet) {
				document.createStyleSheet().cssText = css;
			} else {
				tag = document.createElement('style');
				tag.type = 'text/css';
				document.getElementsByTagName('head')[0].appendChild(tag);
				tag[typeof document.body.style.WebkitAppearance == 'string' ? /* webkit only */'innerText' : 'innerHTML'] = css;
			}
		};

		// Provide a cross-browser interface to a few simple drawing primitives
		$.fn.simpledraw = function (width, height, useExisting, interact) {
			var target, mhandler;
			if (useExisting && (target = this.data('_jqs_vcanvas'))) {
				return target;
			}

			if ($.fn.sparkline.canvas === false) {
				// We've already determined that neither Canvas nor VML are available
				return false;
			} else if ($.fn.sparkline.canvas === undefined) {
				// No function defined yet -- need to see if we support Canvas or VML
				var el = document.createElement('canvas');
				if (!!(el.getContext && el.getContext('2d'))) {
					// Canvas is available
					$.fn.sparkline.canvas = function (width, height, target, interact) {
						return new VCanvas_canvas(width, height, target, interact);
					};
				} else if (document.namespaces && !document.namespaces.v) {
					// VML is available
					document.namespaces.add('v', 'urn:schemas-microsoft-com:vml', '#default#VML');
					$.fn.sparkline.canvas = function (width, height, target, interact) {
						return new VCanvas_vml(width, height, target);
					};
				} else {
					// Neither Canvas nor VML are available
					$.fn.sparkline.canvas = false;
					return false;
				}
			}

			if (width === undefined) {
				width = $(this).innerWidth();
			}
			if (height === undefined) {
				height = $(this).innerHeight();
			}

			target = $.fn.sparkline.canvas(width, height, this, interact);

			mhandler = $(this).data('_jqs_mhandler');
			if (mhandler) {
				mhandler.registerCanvas(target);
			}
			return target;
		};

		$.fn.cleardraw = function () {
			var target = this.data('_jqs_vcanvas');
			if (target) {
				target.reset();
			}
		};

		$.RangeMapClass = RangeMap = createClass({
			init: function init(map) {
				var key,
				    range,
				    rangelist = [];
				for (key in map) {
					if (map.hasOwnProperty(key) && typeof key === 'string' && key.indexOf(':') > -1) {
						range = key.split(':');
						range[0] = range[0].length === 0 ? -Infinity : parseFloat(range[0]);
						range[1] = range[1].length === 0 ? Infinity : parseFloat(range[1]);
						range[2] = map[key];
						rangelist.push(range);
					}
				}
				this.map = map;
				this.rangelist = rangelist || false;
			},

			get: function get(value) {
				var rangelist = this.rangelist,
				    i,
				    range,
				    result;
				if ((result = this.map[value]) !== undefined) {
					return result;
				}
				if (rangelist) {
					for (i = rangelist.length; i--;) {
						range = rangelist[i];
						if (range[0] <= value && range[1] >= value) {
							return range[2];
						}
					}
				}
				return undefined;
			}
		});

		// Convenience function
		$.range_map = function (map) {
			return new RangeMap(map);
		};

		MouseHandler = createClass({
			init: function init(el, options) {
				var $el = $(el);
				this.$el = $el;
				this.options = options;
				this.currentPageX = 0;
				this.currentPageY = 0;
				this.el = el;
				this.splist = [];
				this.tooltip = null;
				this.over = false;
				this.displayTooltips = !options.get('disableTooltips');
				this.highlightEnabled = !options.get('disableHighlight');
			},

			registerSparkline: function registerSparkline(sp) {
				this.splist.push(sp);
				if (this.over) {
					this.updateDisplay();
				}
			},

			registerCanvas: function registerCanvas(canvas) {
				var $canvas = $(canvas.canvas);
				this.canvas = canvas;
				this.$canvas = $canvas;
				$canvas.mouseenter($.proxy(this.mouseenter, this));
				$canvas.mouseleave($.proxy(this.mouseleave, this));
				$canvas.click($.proxy(this.mouseclick, this));
			},

			reset: function reset(removeTooltip) {
				this.splist = [];
				if (this.tooltip && removeTooltip) {
					this.tooltip.remove();
					this.tooltip = undefined;
				}
			},

			mouseclick: function mouseclick(e) {
				var clickEvent = $.Event('sparklineClick');
				clickEvent.originalEvent = e;
				clickEvent.sparklines = this.splist;
				this.$el.trigger(clickEvent);
			},

			mouseenter: function mouseenter(e) {
				$(document.body).unbind('mousemove.jqs');
				$(document.body).bind('mousemove.jqs', $.proxy(this.mousemove, this));
				this.over = true;
				this.currentPageX = e.pageX;
				this.currentPageY = e.pageY;
				this.currentEl = e.target;
				if (!this.tooltip && this.displayTooltips) {
					this.tooltip = new Tooltip(this.options);
					this.tooltip.updatePosition(e.pageX, e.pageY);
				}
				this.updateDisplay();
			},

			mouseleave: function mouseleave() {
				$(document.body).unbind('mousemove.jqs');
				var splist = this.splist,
				    spcount = splist.length,
				    needsRefresh = false,
				    sp,
				    i;
				this.over = false;
				this.currentEl = null;

				if (this.tooltip) {
					this.tooltip.remove();
					this.tooltip = null;
				}

				for (i = 0; i < spcount; i++) {
					sp = splist[i];
					if (sp.clearRegionHighlight()) {
						needsRefresh = true;
					}
				}

				if (needsRefresh) {
					this.canvas.render();
				}
			},

			mousemove: function mousemove(e) {
				this.currentPageX = e.pageX;
				this.currentPageY = e.pageY;
				this.currentEl = e.target;
				if (this.tooltip) {
					this.tooltip.updatePosition(e.pageX, e.pageY);
				}
				this.updateDisplay();
			},

			updateDisplay: function updateDisplay() {
				var splist = this.splist,
				    spcount = splist.length,
				    needsRefresh = false,
				    offset = this.$canvas.offset(),
				    localX = this.currentPageX - offset.left,
				    localY = this.currentPageY - offset.top,
				    tooltiphtml,
				    sp,
				    i,
				    result,
				    changeEvent;
				if (!this.over) {
					return;
				}
				for (i = 0; i < spcount; i++) {
					sp = splist[i];
					result = sp.setRegionHighlight(this.currentEl, localX, localY);
					if (result) {
						needsRefresh = true;
					}
				}
				if (needsRefresh) {
					changeEvent = $.Event('sparklineRegionChange');
					changeEvent.sparklines = this.splist;
					this.$el.trigger(changeEvent);
					if (this.tooltip) {
						tooltiphtml = '';
						for (i = 0; i < spcount; i++) {
							sp = splist[i];
							tooltiphtml += sp.getCurrentRegionTooltip();
						}
						this.tooltip.setContent(tooltiphtml);
					}
					if (!this.disableHighlight) {
						this.canvas.render();
					}
				}
				if (result === null) {
					this.mouseleave();
				}
			}
		});

		Tooltip = createClass({
			sizeStyle: 'position: static !important;' + 'display: block !important;' + 'visibility: hidden !important;' + 'float: left !important;',

			init: function init(options) {
				var tooltipClassname = options.get('tooltipClassname', 'jqstooltip'),
				    sizetipStyle = this.sizeStyle,
				    offset;
				this.container = options.get('tooltipContainer') || document.body;
				this.tooltipOffsetX = options.get('tooltipOffsetX', 10);
				this.tooltipOffsetY = options.get('tooltipOffsetY', 12);
				// remove any previous lingering tooltip
				$('#jqssizetip').remove();
				$('#jqstooltip').remove();
				this.sizetip = $('<div/>', {
					id: 'jqssizetip',
					style: sizetipStyle,
					'class': tooltipClassname
				});
				this.tooltip = $('<div/>', {
					id: 'jqstooltip',
					'class': tooltipClassname
				}).appendTo(this.container);
				// account for the container's location
				offset = this.tooltip.offset();
				this.offsetLeft = offset.left;
				this.offsetTop = offset.top;
				this.hidden = true;
				$(window).unbind('resize.jqs scroll.jqs');
				$(window).bind('resize.jqs scroll.jqs', $.proxy(this.updateWindowDims, this));
				this.updateWindowDims();
			},

			updateWindowDims: function updateWindowDims() {
				this.scrollTop = $(window).scrollTop();
				this.scrollLeft = $(window).scrollLeft();
				this.scrollRight = this.scrollLeft + $(window).width();
				this.updatePosition();
			},

			getSize: function getSize(content) {
				this.sizetip.html(content).appendTo(this.container);
				this.width = this.sizetip.width() + 1;
				this.height = this.sizetip.height();
				this.sizetip.remove();
			},

			setContent: function setContent(content) {
				if (!content) {
					this.tooltip.css('visibility', 'hidden');
					this.hidden = true;
					return;
				}
				this.getSize(content);
				this.tooltip.html(content).css({
					'width': this.width,
					'height': this.height,
					'visibility': 'visible'
				});
				if (this.hidden) {
					this.hidden = false;
					this.updatePosition();
				}
			},

			updatePosition: function updatePosition(x, y) {
				if (x === undefined) {
					if (this.mousex === undefined) {
						return;
					}
					x = this.mousex - this.offsetLeft;
					y = this.mousey - this.offsetTop;
				} else {
					this.mousex = x = x - this.offsetLeft;
					this.mousey = y = y - this.offsetTop;
				}
				if (!this.height || !this.width || this.hidden) {
					return;
				}

				y -= this.height + this.tooltipOffsetY;
				x += this.tooltipOffsetX;

				if (y < this.scrollTop) {
					y = this.scrollTop;
				}
				if (x < this.scrollLeft) {
					x = this.scrollLeft;
				} else if (x + this.width > this.scrollRight) {
					x = this.scrollRight - this.width;
				}

				this.tooltip.css({
					'left': x,
					'top': y
				});
			},

			remove: function remove() {
				this.tooltip.remove();
				this.sizetip.remove();
				this.sizetip = this.tooltip = undefined;
				$(window).unbind('resize.jqs scroll.jqs');
			}
		});

		initStyles = function initStyles() {
			addCSS(defaultStyles);
		};

		$(initStyles);

		pending = [];
		$.fn.sparkline = function (userValues, userOptions) {
			return this.each(function () {
				var options = new $.fn.sparkline.options(this, userOptions),
				    $this = $(this),
				    render,
				    i;
				render = function render() {
					var values, width, height, tmp, mhandler, sp, vals;
					if (userValues === 'html' || userValues === undefined) {
						vals = this.getAttribute(options.get('tagValuesAttribute'));
						if (vals === undefined || vals === null) {
							vals = $this.html();
						}
						values = vals.replace(/(^\s*<!--)|(-->\s*$)|\s+/g, '').split(',');
					} else {
						values = userValues;
					}

					width = options.get('width') === 'auto' ? values.length * options.get('defaultPixelsPerValue') : options.get('width');
					if (options.get('height') === 'auto') {
						if (!options.get('composite') || !$.data(this, '_jqs_vcanvas')) {
							// must be a better way to get the line height
							tmp = document.createElement('span');
							tmp.innerHTML = 'a';
							$this.html(tmp);
							height = $(tmp).innerHeight() || $(tmp).height();
							$(tmp).remove();
							tmp = null;
						}
					} else {
						height = options.get('height');
					}

					if (!options.get('disableInteraction')) {
						mhandler = $.data(this, '_jqs_mhandler');
						if (!mhandler) {
							mhandler = new MouseHandler(this, options);
							$.data(this, '_jqs_mhandler', mhandler);
						} else if (!options.get('composite')) {
							mhandler.reset();
						}
					} else {
						mhandler = false;
					}

					if (options.get('composite') && !$.data(this, '_jqs_vcanvas')) {
						if (!$.data(this, '_jqs_errnotify')) {
							alert('Attempted to attach a composite sparkline to an element with no existing sparkline');
							$.data(this, '_jqs_errnotify', true);
						}
						return;
					}

					sp = new $.fn.sparkline[options.get('type')](this, values, options, width, height);

					sp.render();

					if (mhandler) {
						mhandler.registerSparkline(sp);
					}
				};
				if ($(this).html() && !options.get('disableHiddenCheck') && $(this).is(':hidden') || !$(this).parents('body').length) {
					if (!options.get('composite') && $.data(this, '_jqs_pending')) {
						// remove any existing references to the element
						for (i = pending.length; i; i--) {
							if (pending[i - 1][0] == this) {
								pending.splice(i - 1, 1);
							}
						}
					}
					pending.push([this, render]);
					$.data(this, '_jqs_pending', true);
				} else {
					render.call(this);
				}
			});
		};

		$.fn.sparkline.defaults = getDefaults();

		$.sparkline_display_visible = function () {
			var el, i, pl;
			var done = [];
			for (i = 0, pl = pending.length; i < pl; i++) {
				el = pending[i][0];
				if ($(el).is(':visible') && !$(el).parents().is(':hidden')) {
					pending[i][1].call(el);
					$.data(pending[i][0], '_jqs_pending', false);
					done.push(i);
				} else if (!$(el).closest('html').length && !$.data(el, '_jqs_pending')) {
					// element has been inserted and removed from the DOM
					// If it was not yet inserted into the dom then the .data request
					// will return true.
					// removing from the dom causes the data to be removed.
					$.data(pending[i][0], '_jqs_pending', false);
					done.push(i);
				}
			}
			for (i = done.length; i; i--) {
				pending.splice(done[i - 1], 1);
			}
		};

		/**
   * User option handler
   */
		$.fn.sparkline.options = createClass({
			init: function init(tag, userOptions) {
				var extendedOptions, defaults, base, tagOptionType;
				this.userOptions = userOptions = userOptions || {};
				this.tag = tag;
				this.tagValCache = {};
				defaults = $.fn.sparkline.defaults;
				base = defaults.common;
				this.tagOptionsPrefix = userOptions.enableTagOptions && (userOptions.tagOptionsPrefix || base.tagOptionsPrefix);

				tagOptionType = this.getTagSetting('type');
				if (tagOptionType === UNSET_OPTION) {
					extendedOptions = defaults[userOptions.type || base.type];
				} else {
					extendedOptions = defaults[tagOptionType];
				}
				this.mergedOptions = $.extend({}, base, extendedOptions, userOptions);
			},

			getTagSetting: function getTagSetting(key) {
				var prefix = this.tagOptionsPrefix,
				    val,
				    i,
				    pairs,
				    keyval;
				if (prefix === false || prefix === undefined) {
					return UNSET_OPTION;
				}
				if (this.tagValCache.hasOwnProperty(key)) {
					val = this.tagValCache.key;
				} else {
					val = this.tag.getAttribute(prefix + key);
					if (val === undefined || val === null) {
						val = UNSET_OPTION;
					} else if (val.substr(0, 1) === '[') {
						val = val.substr(1, val.length - 2).split(',');
						for (i = val.length; i--;) {
							val[i] = normalizeValue(val[i].replace(/(^\s*)|(\s*$)/g, ''));
						}
					} else if (val.substr(0, 1) === '{') {
						pairs = val.substr(1, val.length - 2).split(',');
						val = {};
						for (i = pairs.length; i--;) {
							keyval = pairs[i].split(':', 2);
							val[keyval[0].replace(/(^\s*)|(\s*$)/g, '')] = normalizeValue(keyval[1].replace(/(^\s*)|(\s*$)/g, ''));
						}
					} else {
						val = normalizeValue(val);
					}
					this.tagValCache.key = val;
				}
				return val;
			},

			get: function get(key, defaultval) {
				var tagOption = this.getTagSetting(key),
				    result;
				if (tagOption !== UNSET_OPTION) {
					return tagOption;
				}
				return (result = this.mergedOptions[key]) === undefined ? defaultval : result;
			}
		});

		$.fn.sparkline._base = createClass({
			disabled: false,

			init: function init(el, values, options, width, height) {
				this.el = el;
				this.$el = $(el);
				this.values = values;
				this.options = options;
				this.width = width;
				this.height = height;
				this.currentRegion = undefined;
			},

			/**
    * Setup the canvas
    */
			initTarget: function initTarget() {
				var interactive = !this.options.get('disableInteraction');
				if (!(this.target = this.$el.simpledraw(this.width, this.height, this.options.get('composite'), interactive))) {
					this.disabled = true;
				} else {
					this.canvasWidth = this.target.pixelWidth;
					this.canvasHeight = this.target.pixelHeight;
				}
			},

			/**
    * Actually render the chart to the canvas
    */
			render: function render() {
				if (this.disabled) {
					this.el.innerHTML = '';
					return false;
				}
				return true;
			},

			/**
    * Return a region id for a given x/y co-ordinate
    */
			getRegion: function getRegion(x, y) {},

			/**
    * Highlight an item based on the moused-over x,y co-ordinate
    */
			setRegionHighlight: function setRegionHighlight(el, x, y) {
				var currentRegion = this.currentRegion,
				    highlightEnabled = !this.options.get('disableHighlight'),
				    newRegion;
				if (x > this.canvasWidth || y > this.canvasHeight || x < 0 || y < 0) {
					return null;
				}
				newRegion = this.getRegion(el, x, y);
				if (currentRegion !== newRegion) {
					if (currentRegion !== undefined && highlightEnabled) {
						this.removeHighlight();
					}
					this.currentRegion = newRegion;
					if (newRegion !== undefined && highlightEnabled) {
						this.renderHighlight();
					}
					return true;
				}
				return false;
			},

			/**
    * Reset any currently highlighted item
    */
			clearRegionHighlight: function clearRegionHighlight() {
				if (this.currentRegion !== undefined) {
					this.removeHighlight();
					this.currentRegion = undefined;
					return true;
				}
				return false;
			},

			renderHighlight: function renderHighlight() {
				this.changeHighlight(true);
			},

			removeHighlight: function removeHighlight() {
				this.changeHighlight(false);
			},

			changeHighlight: function changeHighlight(highlight) {},

			/**
    * Fetch the HTML to display as a tooltip
    */
			getCurrentRegionTooltip: function getCurrentRegionTooltip() {
				var options = this.options,
				    header = '',
				    entries = [],
				    fields,
				    formats,
				    formatlen,
				    fclass,
				    text,
				    i,
				    showFields,
				    showFieldsKey,
				    newFields,
				    fv,
				    formatter,
				    format,
				    fieldlen,
				    j;
				if (this.currentRegion === undefined) {
					return '';
				}
				fields = this.getCurrentRegionFields();
				formatter = options.get('tooltipFormatter');
				if (formatter) {
					return formatter(this, options, fields);
				}
				if (options.get('tooltipChartTitle')) {
					header += '<div class="jqs jqstitle">' + options.get('tooltipChartTitle') + '</div>\n';
				}
				formats = this.options.get('tooltipFormat');
				if (!formats) {
					return '';
				}
				if (!$.isArray(formats)) {
					formats = [formats];
				}
				if (!$.isArray(fields)) {
					fields = [fields];
				}
				showFields = this.options.get('tooltipFormatFieldlist');
				showFieldsKey = this.options.get('tooltipFormatFieldlistKey');
				if (showFields && showFieldsKey) {
					// user-selected ordering of fields
					newFields = [];
					for (i = fields.length; i--;) {
						fv = fields[i][showFieldsKey];
						if ((j = $.inArray(fv, showFields)) != -1) {
							newFields[j] = fields[i];
						}
					}
					fields = newFields;
				}
				formatlen = formats.length;
				fieldlen = fields.length;
				for (i = 0; i < formatlen; i++) {
					format = formats[i];
					if (typeof format === 'string') {
						format = new SPFormat(format);
					}
					fclass = format.fclass || 'jqsfield';
					for (j = 0; j < fieldlen; j++) {
						if (!fields[j].isNull || !options.get('tooltipSkipNull')) {
							$.extend(fields[j], {
								prefix: options.get('tooltipPrefix'),
								suffix: options.get('tooltipSuffix')
							});
							text = format.render(fields[j], options.get('tooltipValueLookups'), options);
							entries.push('<div class="' + fclass + '">' + text + '</div>');
						}
					}
				}
				if (entries.length) {
					return header + entries.join('\n');
				}
				return '';
			},

			getCurrentRegionFields: function getCurrentRegionFields() {},

			calcHighlightColor: function calcHighlightColor(color, options) {
				var highlightColor = options.get('highlightColor'),
				    lighten = options.get('highlightLighten'),
				    parse,
				    mult,
				    rgbnew,
				    i;
				if (highlightColor) {
					return highlightColor;
				}
				if (lighten) {
					// extract RGB values
					parse = /^#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(color) || /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(color);
					if (parse) {
						rgbnew = [];
						mult = color.length === 4 ? 16 : 1;
						for (i = 0; i < 3; i++) {
							rgbnew[i] = clipval(Math.round(parseInt(parse[i + 1], 16) * mult * lighten), 0, 255);
						}
						return 'rgb(' + rgbnew.join(',') + ')';
					}
				}
				return color;
			}

		});

		barHighlightMixin = {
			changeHighlight: function changeHighlight(highlight) {
				var currentRegion = this.currentRegion,
				    target = this.target,
				    shapeids = this.regionShapes[currentRegion],
				    newShapes;
				// will be null if the region value was null
				if (shapeids) {
					newShapes = this.renderRegion(currentRegion, highlight);
					if ($.isArray(newShapes) || $.isArray(shapeids)) {
						target.replaceWithShapes(shapeids, newShapes);
						this.regionShapes[currentRegion] = $.map(newShapes, function (newShape) {
							return newShape.id;
						});
					} else {
						target.replaceWithShape(shapeids, newShapes);
						this.regionShapes[currentRegion] = newShapes.id;
					}
				}
			},

			render: function render() {
				var values = this.values,
				    target = this.target,
				    regionShapes = this.regionShapes,
				    shapes,
				    ids,
				    i,
				    j;

				if (!this.cls._super.render.call(this)) {
					return;
				}
				for (i = values.length; i--;) {
					shapes = this.renderRegion(i);
					if (shapes) {
						if ($.isArray(shapes)) {
							ids = [];
							for (j = shapes.length; j--;) {
								shapes[j].append();
								ids.push(shapes[j].id);
							}
							regionShapes[i] = ids;
						} else {
							shapes.append();
							regionShapes[i] = shapes.id; // store just the shapeid
						}
					} else {
						// null value
						regionShapes[i] = null;
					}
				}
				target.render();
			}
		};

		/**
   * Line charts
   */
		$.fn.sparkline.line = line = createClass($.fn.sparkline._base, {
			type: 'line',

			init: function init(el, values, options, width, height) {
				line._super.init.call(this, el, values, options, width, height);
				this.vertices = [];
				this.regionMap = [];
				this.xvalues = [];
				this.yvalues = [];
				this.yminmax = [];
				this.hightlightSpotId = null;
				this.lastShapeId = null;
				this.initTarget();
			},

			getRegion: function getRegion(el, x, y) {
				var i,
				    regionMap = this.regionMap; // maps regions to value positions
				for (i = regionMap.length; i--;) {
					if (regionMap[i] !== null && x >= regionMap[i][0] && x <= regionMap[i][1]) {
						return regionMap[i][2];
					}
				}
				return undefined;
			},

			getCurrentRegionFields: function getCurrentRegionFields() {
				var currentRegion = this.currentRegion;
				return {
					isNull: this.yvalues[currentRegion] === null,
					x: this.xvalues[currentRegion],
					y: this.yvalues[currentRegion],
					color: this.options.get('lineColor'),
					fillColor: this.options.get('fillColor'),
					offset: currentRegion
				};
			},

			renderHighlight: function renderHighlight() {
				var currentRegion = this.currentRegion,
				    target = this.target,
				    vertex = this.vertices[currentRegion],
				    options = this.options,
				    spotRadius = options.get('spotRadius'),
				    highlightSpotColor = options.get('highlightSpotColor'),
				    highlightLineColor = options.get('highlightLineColor'),
				    highlightSpot,
				    highlightLine;

				if (!vertex) {
					return;
				}
				if (spotRadius && highlightSpotColor) {
					highlightSpot = target.drawCircle(vertex[0], vertex[1], spotRadius, undefined, highlightSpotColor);
					this.highlightSpotId = highlightSpot.id;
					target.insertAfterShape(this.lastShapeId, highlightSpot);
				}
				if (highlightLineColor) {
					highlightLine = target.drawLine(vertex[0], this.canvasTop, vertex[0], this.canvasTop + this.canvasHeight, highlightLineColor);
					this.highlightLineId = highlightLine.id;
					target.insertAfterShape(this.lastShapeId, highlightLine);
				}
			},

			removeHighlight: function removeHighlight() {
				var target = this.target;
				if (this.highlightSpotId) {
					target.removeShapeId(this.highlightSpotId);
					this.highlightSpotId = null;
				}
				if (this.highlightLineId) {
					target.removeShapeId(this.highlightLineId);
					this.highlightLineId = null;
				}
			},

			scanValues: function scanValues() {
				var values = this.values,
				    valcount = values.length,
				    xvalues = this.xvalues,
				    yvalues = this.yvalues,
				    yminmax = this.yminmax,
				    i,
				    val,
				    isStr,
				    isArray,
				    sp;
				for (i = 0; i < valcount; i++) {
					val = values[i];
					isStr = typeof values[i] === 'string';
					isArray = _typeof(values[i]) === 'object' && values[i] instanceof Array;
					sp = isStr && values[i].split(':');
					if (isStr && sp.length === 2) {
						// x:y
						xvalues.push(Number(sp[0]));
						yvalues.push(Number(sp[1]));
						yminmax.push(Number(sp[1]));
					} else if (isArray) {
						xvalues.push(val[0]);
						yvalues.push(val[1]);
						yminmax.push(val[1]);
					} else {
						xvalues.push(i);
						if (values[i] === null || values[i] === 'null') {
							yvalues.push(null);
						} else {
							yvalues.push(Number(val));
							yminmax.push(Number(val));
						}
					}
				}
				if (this.options.get('xvalues')) {
					xvalues = this.options.get('xvalues');
				}

				this.maxy = this.maxyorg = Math.max.apply(Math, yminmax);
				this.miny = this.minyorg = Math.min.apply(Math, yminmax);

				this.maxx = Math.max.apply(Math, xvalues);
				this.minx = Math.min.apply(Math, xvalues);

				this.xvalues = xvalues;
				this.yvalues = yvalues;
				this.yminmax = yminmax;
			},

			processRangeOptions: function processRangeOptions() {
				var options = this.options,
				    normalRangeMin = options.get('normalRangeMin'),
				    normalRangeMax = options.get('normalRangeMax');

				if (normalRangeMin !== undefined) {
					if (normalRangeMin < this.miny) {
						this.miny = normalRangeMin;
					}
					if (normalRangeMax > this.maxy) {
						this.maxy = normalRangeMax;
					}
				}
				if (options.get('chartRangeMin') !== undefined && (options.get('chartRangeClip') || options.get('chartRangeMin') < this.miny)) {
					this.miny = options.get('chartRangeMin');
				}
				if (options.get('chartRangeMax') !== undefined && (options.get('chartRangeClip') || options.get('chartRangeMax') > this.maxy)) {
					this.maxy = options.get('chartRangeMax');
				}
				if (options.get('chartRangeMinX') !== undefined && (options.get('chartRangeClipX') || options.get('chartRangeMinX') < this.minx)) {
					this.minx = options.get('chartRangeMinX');
				}
				if (options.get('chartRangeMaxX') !== undefined && (options.get('chartRangeClipX') || options.get('chartRangeMaxX') > this.maxx)) {
					this.maxx = options.get('chartRangeMaxX');
				}
			},

			drawNormalRange: function drawNormalRange(canvasLeft, canvasTop, canvasHeight, canvasWidth, rangey) {
				var normalRangeMin = this.options.get('normalRangeMin'),
				    normalRangeMax = this.options.get('normalRangeMax'),
				    ytop = canvasTop + Math.round(canvasHeight - canvasHeight * ((normalRangeMax - this.miny) / rangey)),
				    height = Math.round(canvasHeight * (normalRangeMax - normalRangeMin) / rangey);
				this.target.drawRect(canvasLeft, ytop, canvasWidth, height, undefined, this.options.get('normalRangeColor')).append();
			},

			render: function render() {
				var options = this.options,
				    target = this.target,
				    canvasWidth = this.canvasWidth,
				    canvasHeight = this.canvasHeight,
				    vertices = this.vertices,
				    spotRadius = options.get('spotRadius'),
				    regionMap = this.regionMap,
				    rangex,
				    rangey,
				    yvallast,
				    canvasTop,
				    canvasLeft,
				    vertex,
				    path,
				    paths,
				    x,
				    y,
				    xnext,
				    xpos,
				    xposnext,
				    last,
				    next,
				    yvalcount,
				    lineShapes,
				    fillShapes,
				    plen,
				    valueSpots,
				    hlSpotsEnabled,
				    color,
				    xvalues,
				    yvalues,
				    i;

				if (!line._super.render.call(this)) {
					return;
				}

				this.scanValues();
				this.processRangeOptions();

				xvalues = this.xvalues;
				yvalues = this.yvalues;

				if (!this.yminmax.length || this.yvalues.length < 2) {
					// empty or all null valuess
					return;
				}

				canvasTop = canvasLeft = 0;

				rangex = this.maxx - this.minx === 0 ? 1 : this.maxx - this.minx;
				rangey = this.maxy - this.miny === 0 ? 1 : this.maxy - this.miny;
				yvallast = this.yvalues.length - 1;

				if (spotRadius && (canvasWidth < spotRadius * 4 || canvasHeight < spotRadius * 4)) {
					spotRadius = 0;
				}
				if (spotRadius) {
					// adjust the canvas size as required so that spots will fit
					hlSpotsEnabled = options.get('highlightSpotColor') && !options.get('disableInteraction');
					if (hlSpotsEnabled || options.get('minSpotColor') || options.get('spotColor') && yvalues[yvallast] === this.miny) {
						canvasHeight -= Math.ceil(spotRadius);
					}
					if (hlSpotsEnabled || options.get('maxSpotColor') || options.get('spotColor') && yvalues[yvallast] === this.maxy) {
						canvasHeight -= Math.ceil(spotRadius);
						canvasTop += Math.ceil(spotRadius);
					}
					if (hlSpotsEnabled || (options.get('minSpotColor') || options.get('maxSpotColor')) && (yvalues[0] === this.miny || yvalues[0] === this.maxy)) {
						canvasLeft += Math.ceil(spotRadius);
						canvasWidth -= Math.ceil(spotRadius);
					}
					if (hlSpotsEnabled || options.get('spotColor') || options.get('minSpotColor') || options.get('maxSpotColor') && (yvalues[yvallast] === this.miny || yvalues[yvallast] === this.maxy)) {
						canvasWidth -= Math.ceil(spotRadius);
					}
				}

				canvasHeight--;

				if (options.get('normalRangeMin') !== undefined && !options.get('drawNormalOnTop')) {
					this.drawNormalRange(canvasLeft, canvasTop, canvasHeight, canvasWidth, rangey);
				}

				path = [];
				paths = [path];
				last = next = null;
				yvalcount = yvalues.length;
				for (i = 0; i < yvalcount; i++) {
					x = xvalues[i];
					xnext = xvalues[i + 1];
					y = yvalues[i];
					xpos = canvasLeft + Math.round((x - this.minx) * (canvasWidth / rangex));
					xposnext = i < yvalcount - 1 ? canvasLeft + Math.round((xnext - this.minx) * (canvasWidth / rangex)) : canvasWidth;
					next = xpos + (xposnext - xpos) / 2;
					regionMap[i] = [last || 0, next, i];
					last = next;
					if (y === null) {
						if (i) {
							if (yvalues[i - 1] !== null) {
								path = [];
								paths.push(path);
							}
							vertices.push(null);
						}
					} else {
						if (y < this.miny) {
							y = this.miny;
						}
						if (y > this.maxy) {
							y = this.maxy;
						}
						if (!path.length) {
							// previous value was null
							path.push([xpos, canvasTop + canvasHeight]);
						}
						vertex = [xpos, canvasTop + Math.round(canvasHeight - canvasHeight * ((y - this.miny) / rangey))];
						path.push(vertex);
						vertices.push(vertex);
					}
				}

				lineShapes = [];
				fillShapes = [];
				plen = paths.length;
				for (i = 0; i < plen; i++) {
					path = paths[i];
					if (path.length) {
						if (options.get('fillColor')) {
							path.push([path[path.length - 1][0], canvasTop + canvasHeight]);
							fillShapes.push(path.slice(0));
							path.pop();
						}
						// if there's only a single point in this path, then we want to display it
						// as a vertical line which means we keep path[0]  as is
						if (path.length > 2) {
							// else we want the first value
							path[0] = [path[0][0], path[1][1]];
						}
						lineShapes.push(path);
					}
				}

				// draw the fill first, then optionally the normal range, then the line on top of that
				plen = fillShapes.length;
				for (i = 0; i < plen; i++) {
					target.drawShape(fillShapes[i], options.get('fillColor'), options.get('fillColor')).append();
				}

				if (options.get('normalRangeMin') !== undefined && options.get('drawNormalOnTop')) {
					this.drawNormalRange(canvasLeft, canvasTop, canvasHeight, canvasWidth, rangey);
				}

				plen = lineShapes.length;
				for (i = 0; i < plen; i++) {
					target.drawShape(lineShapes[i], options.get('lineColor'), undefined, options.get('lineWidth')).append();
				}

				if (spotRadius && options.get('valueSpots')) {
					valueSpots = options.get('valueSpots');
					if (valueSpots.get === undefined) {
						valueSpots = new RangeMap(valueSpots);
					}
					for (i = 0; i < yvalcount; i++) {
						color = valueSpots.get(yvalues[i]);
						if (color) {
							target.drawCircle(canvasLeft + Math.round((xvalues[i] - this.minx) * (canvasWidth / rangex)), canvasTop + Math.round(canvasHeight - canvasHeight * ((yvalues[i] - this.miny) / rangey)), spotRadius, undefined, color).append();
						}
					}
				}
				if (spotRadius && options.get('spotColor') && yvalues[yvallast] !== null) {
					target.drawCircle(canvasLeft + Math.round((xvalues[xvalues.length - 1] - this.minx) * (canvasWidth / rangex)), canvasTop + Math.round(canvasHeight - canvasHeight * ((yvalues[yvallast] - this.miny) / rangey)), spotRadius, undefined, options.get('spotColor')).append();
				}
				if (this.maxy !== this.minyorg) {
					if (spotRadius && options.get('minSpotColor')) {
						x = xvalues[$.inArray(this.minyorg, yvalues)];
						target.drawCircle(canvasLeft + Math.round((x - this.minx) * (canvasWidth / rangex)), canvasTop + Math.round(canvasHeight - canvasHeight * ((this.minyorg - this.miny) / rangey)), spotRadius, undefined, options.get('minSpotColor')).append();
					}
					if (spotRadius && options.get('maxSpotColor')) {
						x = xvalues[$.inArray(this.maxyorg, yvalues)];
						target.drawCircle(canvasLeft + Math.round((x - this.minx) * (canvasWidth / rangex)), canvasTop + Math.round(canvasHeight - canvasHeight * ((this.maxyorg - this.miny) / rangey)), spotRadius, undefined, options.get('maxSpotColor')).append();
					}
				}

				this.lastShapeId = target.getLastShapeId();
				this.canvasTop = canvasTop;
				target.render();
			}
		});

		/**
   * Bar charts
   */
		$.fn.sparkline.bar = bar = createClass($.fn.sparkline._base, barHighlightMixin, {
			type: 'bar',

			init: function init(el, values, options, width, height) {
				var barWidth = parseInt(options.get('barWidth'), 10),
				    barSpacing = parseInt(options.get('barSpacing'), 10),
				    chartRangeMin = options.get('chartRangeMin'),
				    chartRangeMax = options.get('chartRangeMax'),
				    chartRangeClip = options.get('chartRangeClip'),
				    stackMin = Infinity,
				    stackMax = -Infinity,
				    isStackString,
				    groupMin,
				    groupMax,
				    stackRanges,
				    numValues,
				    i,
				    vlen,
				    range,
				    zeroAxis,
				    xaxisOffset,
				    min,
				    max,
				    clipMin,
				    clipMax,
				    stacked,
				    vlist,
				    j,
				    slen,
				    svals,
				    val,
				    yoffset,
				    yMaxCalc,
				    canvasHeightEf;
				bar._super.init.call(this, el, values, options, width, height);

				// scan values to determine whether to stack bars
				for (i = 0, vlen = values.length; i < vlen; i++) {
					val = values[i];
					isStackString = typeof val === 'string' && val.indexOf(':') > -1;
					if (isStackString || $.isArray(val)) {
						stacked = true;
						if (isStackString) {
							val = values[i] = normalizeValues(val.split(':'));
						}
						val = remove(val, null); // min/max will treat null as zero
						groupMin = Math.min.apply(Math, val);
						groupMax = Math.max.apply(Math, val);
						if (groupMin < stackMin) {
							stackMin = groupMin;
						}
						if (groupMax > stackMax) {
							stackMax = groupMax;
						}
					}
				}

				this.stacked = stacked;
				this.regionShapes = {};
				this.barWidth = barWidth;
				this.barSpacing = barSpacing;
				this.totalBarWidth = barWidth + barSpacing;
				this.width = width = values.length * barWidth + (values.length - 1) * barSpacing;

				this.initTarget();

				if (chartRangeClip) {
					clipMin = chartRangeMin === undefined ? -Infinity : chartRangeMin;
					clipMax = chartRangeMax === undefined ? Infinity : chartRangeMax;
				}

				numValues = [];
				stackRanges = stacked ? [] : numValues;
				var stackTotals = [];
				var stackRangesNeg = [];
				for (i = 0, vlen = values.length; i < vlen; i++) {
					if (stacked) {
						vlist = values[i];
						values[i] = svals = [];
						stackTotals[i] = 0;
						stackRanges[i] = stackRangesNeg[i] = 0;
						for (j = 0, slen = vlist.length; j < slen; j++) {
							val = svals[j] = chartRangeClip ? clipval(vlist[j], clipMin, clipMax) : vlist[j];
							if (val !== null) {
								if (val > 0) {
									stackTotals[i] += val;
								}
								if (stackMin < 0 && stackMax > 0) {
									if (val < 0) {
										stackRangesNeg[i] += Math.abs(val);
									} else {
										stackRanges[i] += val;
									}
								} else {
									stackRanges[i] += Math.abs(val - (val < 0 ? stackMax : stackMin));
								}
								numValues.push(val);
							}
						}
					} else {
						val = chartRangeClip ? clipval(values[i], clipMin, clipMax) : values[i];
						val = values[i] = normalizeValue(val);
						if (val !== null) {
							numValues.push(val);
						}
					}
				}
				this.max = max = Math.max.apply(Math, numValues);
				this.min = min = Math.min.apply(Math, numValues);
				this.stackMax = stackMax = stacked ? Math.max.apply(Math, stackTotals) : max;
				this.stackMin = stackMin = stacked ? Math.min.apply(Math, numValues) : min;

				if (options.get('chartRangeMin') !== undefined && (options.get('chartRangeClip') || options.get('chartRangeMin') < min)) {
					min = options.get('chartRangeMin');
				}
				if (options.get('chartRangeMax') !== undefined && (options.get('chartRangeClip') || options.get('chartRangeMax') > max)) {
					max = options.get('chartRangeMax');
				}

				this.zeroAxis = zeroAxis = options.get('zeroAxis', true);
				if (min <= 0 && max >= 0 && zeroAxis) {
					xaxisOffset = 0;
				} else if (zeroAxis == false) {
					xaxisOffset = min;
				} else if (min > 0) {
					xaxisOffset = min;
				} else {
					xaxisOffset = max;
				}
				this.xaxisOffset = xaxisOffset;

				range = stacked ? Math.max.apply(Math, stackRanges) + Math.max.apply(Math, stackRangesNeg) : max - min;

				// as we plot zero/min values a single pixel line, we add a pixel to all other
				// values - Reduce the effective canvas size to suit
				this.canvasHeightEf = zeroAxis && min < 0 ? this.canvasHeight - 2 : this.canvasHeight - 1;

				if (min < xaxisOffset) {
					yMaxCalc = stacked && max >= 0 ? stackMax : max;
					yoffset = (yMaxCalc - xaxisOffset) / range * this.canvasHeight;
					if (yoffset !== Math.ceil(yoffset)) {
						this.canvasHeightEf -= 2;
						yoffset = Math.ceil(yoffset);
					}
				} else {
					yoffset = this.canvasHeight;
				}
				this.yoffset = yoffset;

				if ($.isArray(options.get('colorMap'))) {
					this.colorMapByIndex = options.get('colorMap');
					this.colorMapByValue = null;
				} else {
					this.colorMapByIndex = null;
					this.colorMapByValue = options.get('colorMap');
					if (this.colorMapByValue && this.colorMapByValue.get === undefined) {
						this.colorMapByValue = new RangeMap(this.colorMapByValue);
					}
				}

				this.range = range;
			},

			getRegion: function getRegion(el, x, y) {
				var result = Math.floor(x / this.totalBarWidth);
				return result < 0 || result >= this.values.length ? undefined : result;
			},

			getCurrentRegionFields: function getCurrentRegionFields() {
				var currentRegion = this.currentRegion,
				    values = ensureArray(this.values[currentRegion]),
				    result = [],
				    value,
				    i;
				for (i = values.length; i--;) {
					value = values[i];
					result.push({
						isNull: value === null,
						value: value,
						color: this.calcColor(i, value, currentRegion),
						offset: currentRegion
					});
				}
				return result;
			},

			calcColor: function calcColor(stacknum, value, valuenum) {
				var colorMapByIndex = this.colorMapByIndex,
				    colorMapByValue = this.colorMapByValue,
				    options = this.options,
				    color,
				    newColor;
				if (this.stacked) {
					color = options.get('stackedBarColor');
				} else {
					color = value < 0 ? options.get('negBarColor') : options.get('barColor');
				}
				if (value === 0 && options.get('zeroColor') !== undefined) {
					color = options.get('zeroColor');
				}
				if (colorMapByValue && (newColor = colorMapByValue.get(value))) {
					color = newColor;
				} else if (colorMapByIndex && colorMapByIndex.length > valuenum) {
					color = colorMapByIndex[valuenum];
				}
				return $.isArray(color) ? color[stacknum % color.length] : color;
			},

			/**
    * Render bar(s) for a region
    */
			renderRegion: function renderRegion(valuenum, highlight) {
				var vals = this.values[valuenum],
				    options = this.options,
				    xaxisOffset = this.xaxisOffset,
				    result = [],
				    range = this.range,
				    stacked = this.stacked,
				    target = this.target,
				    x = valuenum * this.totalBarWidth,
				    canvasHeightEf = this.canvasHeightEf,
				    yoffset = this.yoffset,
				    y,
				    height,
				    color,
				    isNull,
				    yoffsetNeg,
				    i,
				    valcount,
				    val,
				    minPlotted,
				    allMin;

				vals = $.isArray(vals) ? vals : [vals];
				valcount = vals.length;
				val = vals[0];
				isNull = all(null, vals);
				allMin = all(xaxisOffset, vals, true);

				if (isNull) {
					if (options.get('nullColor')) {
						color = highlight ? options.get('nullColor') : this.calcHighlightColor(options.get('nullColor'), options);
						y = yoffset > 0 ? yoffset - 1 : yoffset;
						return target.drawRect(x, y, this.barWidth - 1, 0, color, color);
					} else {
						return undefined;
					}
				}
				yoffsetNeg = yoffset;
				for (i = 0; i < valcount; i++) {
					val = vals[i];

					if (stacked && val === xaxisOffset) {
						if (!allMin || minPlotted) {
							continue;
						}
						minPlotted = true;
					}

					if (range > 0) {
						height = Math.floor(canvasHeightEf * (Math.abs(val - xaxisOffset) / range)) + 1;
					} else {
						height = 1;
					}
					if (val < xaxisOffset || val === xaxisOffset && yoffset === 0) {
						y = yoffsetNeg;
						yoffsetNeg += height;
					} else {
						y = yoffset - height;
						yoffset -= height;
					}
					color = this.calcColor(i, val, valuenum);
					if (highlight) {
						color = this.calcHighlightColor(color, options);
					}
					result.push(target.drawRect(x, y, this.barWidth - 1, height - 1, color, color));
				}
				if (result.length === 1) {
					return result[0];
				}
				return result;
			}
		});

		/**
   * Tristate charts
   */
		$.fn.sparkline.tristate = tristate = createClass($.fn.sparkline._base, barHighlightMixin, {
			type: 'tristate',

			init: function init(el, values, options, width, height) {
				var barWidth = parseInt(options.get('barWidth'), 10),
				    barSpacing = parseInt(options.get('barSpacing'), 10);
				tristate._super.init.call(this, el, values, options, width, height);

				this.regionShapes = {};
				this.barWidth = barWidth;
				this.barSpacing = barSpacing;
				this.totalBarWidth = barWidth + barSpacing;
				this.values = $.map(values, Number);
				this.width = width = values.length * barWidth + (values.length - 1) * barSpacing;

				if ($.isArray(options.get('colorMap'))) {
					this.colorMapByIndex = options.get('colorMap');
					this.colorMapByValue = null;
				} else {
					this.colorMapByIndex = null;
					this.colorMapByValue = options.get('colorMap');
					if (this.colorMapByValue && this.colorMapByValue.get === undefined) {
						this.colorMapByValue = new RangeMap(this.colorMapByValue);
					}
				}
				this.initTarget();
			},

			getRegion: function getRegion(el, x, y) {
				return Math.floor(x / this.totalBarWidth);
			},

			getCurrentRegionFields: function getCurrentRegionFields() {
				var currentRegion = this.currentRegion;
				return {
					isNull: this.values[currentRegion] === undefined,
					value: this.values[currentRegion],
					color: this.calcColor(this.values[currentRegion], currentRegion),
					offset: currentRegion
				};
			},

			calcColor: function calcColor(value, valuenum) {
				var values = this.values,
				    options = this.options,
				    colorMapByIndex = this.colorMapByIndex,
				    colorMapByValue = this.colorMapByValue,
				    color,
				    newColor;

				if (colorMapByValue && (newColor = colorMapByValue.get(value))) {
					color = newColor;
				} else if (colorMapByIndex && colorMapByIndex.length > valuenum) {
					color = colorMapByIndex[valuenum];
				} else if (values[valuenum] < 0) {
					color = options.get('negBarColor');
				} else if (values[valuenum] > 0) {
					color = options.get('posBarColor');
				} else {
					color = options.get('zeroBarColor');
				}
				return color;
			},

			renderRegion: function renderRegion(valuenum, highlight) {
				var values = this.values,
				    options = this.options,
				    target = this.target,
				    canvasHeight,
				    height,
				    halfHeight,
				    x,
				    y,
				    color;

				canvasHeight = target.pixelHeight;
				halfHeight = Math.round(canvasHeight / 2);

				x = valuenum * this.totalBarWidth;
				if (values[valuenum] < 0) {
					y = halfHeight;
					height = halfHeight - 1;
				} else if (values[valuenum] > 0) {
					y = 0;
					height = halfHeight - 1;
				} else {
					y = halfHeight - 1;
					height = 2;
				}
				color = this.calcColor(values[valuenum], valuenum);
				if (color === null) {
					return;
				}
				if (highlight) {
					color = this.calcHighlightColor(color, options);
				}
				return target.drawRect(x, y, this.barWidth - 1, height - 1, color, color);
			}
		});

		/**
   * Discrete charts
   */
		$.fn.sparkline.discrete = discrete = createClass($.fn.sparkline._base, barHighlightMixin, {
			type: 'discrete',

			init: function init(el, values, options, width, height) {
				discrete._super.init.call(this, el, values, options, width, height);

				this.regionShapes = {};
				this.values = values = $.map(values, Number);
				this.min = Math.min.apply(Math, values);
				this.max = Math.max.apply(Math, values);
				this.range = this.max - this.min;
				this.width = width = options.get('width') === 'auto' ? values.length * 2 : this.width;
				this.interval = Math.floor(width / values.length);
				this.itemWidth = width / values.length;
				if (options.get('chartRangeMin') !== undefined && (options.get('chartRangeClip') || options.get('chartRangeMin') < this.min)) {
					this.min = options.get('chartRangeMin');
				}
				if (options.get('chartRangeMax') !== undefined && (options.get('chartRangeClip') || options.get('chartRangeMax') > this.max)) {
					this.max = options.get('chartRangeMax');
				}
				this.initTarget();
				if (this.target) {
					this.lineHeight = options.get('lineHeight') === 'auto' ? Math.round(this.canvasHeight * 0.3) : options.get('lineHeight');
				}
			},

			getRegion: function getRegion(el, x, y) {
				return Math.floor(x / this.itemWidth);
			},

			getCurrentRegionFields: function getCurrentRegionFields() {
				var currentRegion = this.currentRegion;
				return {
					isNull: this.values[currentRegion] === undefined,
					value: this.values[currentRegion],
					offset: currentRegion
				};
			},

			renderRegion: function renderRegion(valuenum, highlight) {
				var values = this.values,
				    options = this.options,
				    min = this.min,
				    max = this.max,
				    range = this.range,
				    interval = this.interval,
				    target = this.target,
				    canvasHeight = this.canvasHeight,
				    lineHeight = this.lineHeight,
				    pheight = canvasHeight - lineHeight,
				    ytop,
				    val,
				    color,
				    x;

				val = clipval(values[valuenum], min, max);
				x = valuenum * interval;
				ytop = Math.round(pheight - pheight * ((val - min) / range));
				color = options.get('thresholdColor') && val < options.get('thresholdValue') ? options.get('thresholdColor') : options.get('lineColor');
				if (highlight) {
					color = this.calcHighlightColor(color, options);
				}
				return target.drawLine(x, ytop, x, ytop + lineHeight, color);
			}
		});

		/**
   * Bullet charts
   */
		$.fn.sparkline.bullet = bullet = createClass($.fn.sparkline._base, {
			type: 'bullet',

			init: function init(el, values, options, width, height) {
				var min, max, vals;
				bullet._super.init.call(this, el, values, options, width, height);

				// values: target, performance, range1, range2, range3
				this.values = values = normalizeValues(values);
				// target or performance could be null
				vals = values.slice();
				vals[0] = vals[0] === null ? vals[2] : vals[0];
				vals[1] = values[1] === null ? vals[2] : vals[1];
				min = Math.min.apply(Math, values);
				max = Math.max.apply(Math, values);
				if (options.get('base') === undefined) {
					min = min < 0 ? min : 0;
				} else {
					min = options.get('base');
				}
				this.min = min;
				this.max = max;
				this.range = max - min;
				this.shapes = {};
				this.valueShapes = {};
				this.regiondata = {};
				this.width = width = options.get('width') === 'auto' ? '4.0em' : width;
				this.target = this.$el.simpledraw(width, height, options.get('composite'));
				if (!values.length) {
					this.disabled = true;
				}
				this.initTarget();
			},

			getRegion: function getRegion(el, x, y) {
				var shapeid = this.target.getShapeAt(el, x, y);
				return shapeid !== undefined && this.shapes[shapeid] !== undefined ? this.shapes[shapeid] : undefined;
			},

			getCurrentRegionFields: function getCurrentRegionFields() {
				var currentRegion = this.currentRegion;
				return {
					fieldkey: currentRegion.substr(0, 1),
					value: this.values[currentRegion.substr(1)],
					region: currentRegion
				};
			},

			changeHighlight: function changeHighlight(highlight) {
				var currentRegion = this.currentRegion,
				    shapeid = this.valueShapes[currentRegion],
				    shape;
				delete this.shapes[shapeid];
				switch (currentRegion.substr(0, 1)) {
					case 'r':
						shape = this.renderRange(currentRegion.substr(1), highlight);
						break;
					case 'p':
						shape = this.renderPerformance(highlight);
						break;
					case 't':
						shape = this.renderTarget(highlight);
						break;
				}
				this.valueShapes[currentRegion] = shape.id;
				this.shapes[shape.id] = currentRegion;
				this.target.replaceWithShape(shapeid, shape);
			},

			renderRange: function renderRange(rn, highlight) {
				var rangeval = this.values[rn],
				    rangewidth = Math.round(this.canvasWidth * ((rangeval - this.min) / this.range)),
				    color = this.options.get('rangeColors')[rn - 2];
				if (highlight) {
					color = this.calcHighlightColor(color, this.options);
				}
				return this.target.drawRect(0, 0, rangewidth - 1, this.canvasHeight - 1, color, color);
			},

			renderPerformance: function renderPerformance(highlight) {
				var perfval = this.values[1],
				    perfwidth = Math.round(this.canvasWidth * ((perfval - this.min) / this.range)),
				    color = this.options.get('performanceColor');
				if (highlight) {
					color = this.calcHighlightColor(color, this.options);
				}
				return this.target.drawRect(0, Math.round(this.canvasHeight * 0.3), perfwidth - 1, Math.round(this.canvasHeight * 0.4) - 1, color, color);
			},

			renderTarget: function renderTarget(highlight) {
				var targetval = this.values[0],
				    x = Math.round(this.canvasWidth * ((targetval - this.min) / this.range) - this.options.get('targetWidth') / 2),
				    targettop = Math.round(this.canvasHeight * 0.10),
				    targetheight = this.canvasHeight - targettop * 2,
				    color = this.options.get('targetColor');
				if (highlight) {
					color = this.calcHighlightColor(color, this.options);
				}
				return this.target.drawRect(x, targettop, this.options.get('targetWidth') - 1, targetheight - 1, color, color);
			},

			render: function render() {
				var vlen = this.values.length,
				    target = this.target,
				    i,
				    shape;
				if (!bullet._super.render.call(this)) {
					return;
				}
				for (i = 2; i < vlen; i++) {
					shape = this.renderRange(i).append();
					this.shapes[shape.id] = 'r' + i;
					this.valueShapes['r' + i] = shape.id;
				}
				if (this.values[1] !== null) {
					shape = this.renderPerformance().append();
					this.shapes[shape.id] = 'p1';
					this.valueShapes.p1 = shape.id;
				}
				if (this.values[0] !== null) {
					shape = this.renderTarget().append();
					this.shapes[shape.id] = 't0';
					this.valueShapes.t0 = shape.id;
				}
				target.render();
			}
		});

		/**
   * Pie charts
   */
		$.fn.sparkline.pie = pie = createClass($.fn.sparkline._base, {
			type: 'pie',

			init: function init(el, values, options, width, height) {
				var total = 0,
				    i;

				pie._super.init.call(this, el, values, options, width, height);

				this.shapes = {}; // map shape ids to value offsets
				this.valueShapes = {}; // maps value offsets to shape ids
				this.values = values = $.map(values, Number);

				if (options.get('width') === 'auto') {
					this.width = this.height;
				}

				if (values.length > 0) {
					for (i = values.length; i--;) {
						total += values[i];
					}
				}
				this.total = total;
				this.initTarget();
				this.radius = Math.floor(Math.min(this.canvasWidth, this.canvasHeight) / 2);
			},

			getRegion: function getRegion(el, x, y) {
				var shapeid = this.target.getShapeAt(el, x, y);
				return shapeid !== undefined && this.shapes[shapeid] !== undefined ? this.shapes[shapeid] : undefined;
			},

			getCurrentRegionFields: function getCurrentRegionFields() {
				var currentRegion = this.currentRegion;
				return {
					isNull: this.values[currentRegion] === undefined,
					value: this.values[currentRegion],
					percent: this.values[currentRegion] / this.total * 100,
					color: this.options.get('sliceColors')[currentRegion % this.options.get('sliceColors').length],
					offset: currentRegion
				};
			},

			changeHighlight: function changeHighlight(highlight) {
				var currentRegion = this.currentRegion,
				    newslice = this.renderSlice(currentRegion, highlight),
				    shapeid = this.valueShapes[currentRegion];
				delete this.shapes[shapeid];
				this.target.replaceWithShape(shapeid, newslice);
				this.valueShapes[currentRegion] = newslice.id;
				this.shapes[newslice.id] = currentRegion;
			},

			renderSlice: function renderSlice(valuenum, highlight) {
				var target = this.target,
				    options = this.options,
				    radius = this.radius,
				    borderWidth = options.get('borderWidth'),
				    offset = options.get('offset'),
				    circle = 2 * Math.PI,
				    values = this.values,
				    total = this.total,
				    next = offset ? 2 * Math.PI * (offset / 360) : 0,
				    start,
				    end,
				    i,
				    vlen,
				    color;

				vlen = values.length;
				for (i = 0; i < vlen; i++) {
					start = next;
					end = next;
					if (total > 0) {
						// avoid divide by zero
						end = next + circle * (values[i] / total);
					}
					if (valuenum === i) {
						color = options.get('sliceColors')[i % options.get('sliceColors').length];
						if (highlight) {
							color = this.calcHighlightColor(color, options);
						}

						return target.drawPieSlice(radius, radius, radius - borderWidth, start, end, undefined, color);
					}
					next = end;
				}
			},

			render: function render() {
				var target = this.target,
				    values = this.values,
				    options = this.options,
				    radius = this.radius,
				    borderWidth = options.get('borderWidth'),
				    shape,
				    i;

				if (!pie._super.render.call(this)) {
					return;
				}
				if (borderWidth) {
					target.drawCircle(radius, radius, Math.floor(radius - borderWidth / 2), options.get('borderColor'), undefined, borderWidth).append();
				}
				for (i = values.length; i--;) {
					if (values[i]) {
						// don't render zero values
						shape = this.renderSlice(i).append();
						this.valueShapes[i] = shape.id; // store just the shapeid
						this.shapes[shape.id] = i;
					}
				}
				target.render();
			}
		});

		/**
   * Box plots
   */
		$.fn.sparkline.box = box = createClass($.fn.sparkline._base, {
			type: 'box',

			init: function init(el, values, options, width, height) {
				box._super.init.call(this, el, values, options, width, height);
				this.values = $.map(values, Number);
				this.width = options.get('width') === 'auto' ? '4.0em' : width;
				this.initTarget();
				if (!this.values.length) {
					this.disabled = 1;
				}
			},

			/**
    * Simulate a single region
    */
			getRegion: function getRegion() {
				return 1;
			},

			getCurrentRegionFields: function getCurrentRegionFields() {
				var result = [{ field: 'lq', value: this.quartiles[0] }, { field: 'med', value: this.quartiles[1] }, { field: 'uq', value: this.quartiles[2] }];
				if (this.loutlier !== undefined) {
					result.push({ field: 'lo', value: this.loutlier });
				}
				if (this.routlier !== undefined) {
					result.push({ field: 'ro', value: this.routlier });
				}
				if (this.lwhisker !== undefined) {
					result.push({ field: 'lw', value: this.lwhisker });
				}
				if (this.rwhisker !== undefined) {
					result.push({ field: 'rw', value: this.rwhisker });
				}
				return result;
			},

			render: function render() {
				var target = this.target,
				    values = this.values,
				    vlen = values.length,
				    options = this.options,
				    canvasWidth = this.canvasWidth,
				    canvasHeight = this.canvasHeight,
				    minValue = options.get('chartRangeMin') === undefined ? Math.min.apply(Math, values) : options.get('chartRangeMin'),
				    maxValue = options.get('chartRangeMax') === undefined ? Math.max.apply(Math, values) : options.get('chartRangeMax'),
				    canvasLeft = 0,
				    lwhisker,
				    loutlier,
				    iqr,
				    q1,
				    q2,
				    q3,
				    rwhisker,
				    routlier,
				    i,
				    size,
				    unitSize;

				if (!box._super.render.call(this)) {
					return;
				}

				if (options.get('raw')) {
					if (options.get('showOutliers') && values.length > 5) {
						loutlier = values[0];
						lwhisker = values[1];
						q1 = values[2];
						q2 = values[3];
						q3 = values[4];
						rwhisker = values[5];
						routlier = values[6];
					} else {
						lwhisker = values[0];
						q1 = values[1];
						q2 = values[2];
						q3 = values[3];
						rwhisker = values[4];
					}
				} else {
					values.sort(function (a, b) {
						return a - b;
					});
					q1 = quartile(values, 1);
					q2 = quartile(values, 2);
					q3 = quartile(values, 3);
					iqr = q3 - q1;
					if (options.get('showOutliers')) {
						lwhisker = rwhisker = undefined;
						for (i = 0; i < vlen; i++) {
							if (lwhisker === undefined && values[i] > q1 - iqr * options.get('outlierIQR')) {
								lwhisker = values[i];
							}
							if (values[i] < q3 + iqr * options.get('outlierIQR')) {
								rwhisker = values[i];
							}
						}
						loutlier = values[0];
						routlier = values[vlen - 1];
					} else {
						lwhisker = values[0];
						rwhisker = values[vlen - 1];
					}
				}
				this.quartiles = [q1, q2, q3];
				this.lwhisker = lwhisker;
				this.rwhisker = rwhisker;
				this.loutlier = loutlier;
				this.routlier = routlier;

				unitSize = canvasWidth / (maxValue - minValue + 1);
				if (options.get('showOutliers')) {
					canvasLeft = Math.ceil(options.get('spotRadius'));
					canvasWidth -= 2 * Math.ceil(options.get('spotRadius'));
					unitSize = canvasWidth / (maxValue - minValue + 1);
					if (loutlier < lwhisker) {
						target.drawCircle((loutlier - minValue) * unitSize + canvasLeft, canvasHeight / 2, options.get('spotRadius'), options.get('outlierLineColor'), options.get('outlierFillColor')).append();
					}
					if (routlier > rwhisker) {
						target.drawCircle((routlier - minValue) * unitSize + canvasLeft, canvasHeight / 2, options.get('spotRadius'), options.get('outlierLineColor'), options.get('outlierFillColor')).append();
					}
				}

				// box
				target.drawRect(Math.round((q1 - minValue) * unitSize + canvasLeft), Math.round(canvasHeight * 0.1), Math.round((q3 - q1) * unitSize), Math.round(canvasHeight * 0.8), options.get('boxLineColor'), options.get('boxFillColor')).append();
				// left whisker
				target.drawLine(Math.round((lwhisker - minValue) * unitSize + canvasLeft), Math.round(canvasHeight / 2), Math.round((q1 - minValue) * unitSize + canvasLeft), Math.round(canvasHeight / 2), options.get('lineColor')).append();
				target.drawLine(Math.round((lwhisker - minValue) * unitSize + canvasLeft), Math.round(canvasHeight / 4), Math.round((lwhisker - minValue) * unitSize + canvasLeft), Math.round(canvasHeight - canvasHeight / 4), options.get('whiskerColor')).append();
				// right whisker
				target.drawLine(Math.round((rwhisker - minValue) * unitSize + canvasLeft), Math.round(canvasHeight / 2), Math.round((q3 - minValue) * unitSize + canvasLeft), Math.round(canvasHeight / 2), options.get('lineColor')).append();
				target.drawLine(Math.round((rwhisker - minValue) * unitSize + canvasLeft), Math.round(canvasHeight / 4), Math.round((rwhisker - minValue) * unitSize + canvasLeft), Math.round(canvasHeight - canvasHeight / 4), options.get('whiskerColor')).append();
				// median line
				target.drawLine(Math.round((q2 - minValue) * unitSize + canvasLeft), Math.round(canvasHeight * 0.1), Math.round((q2 - minValue) * unitSize + canvasLeft), Math.round(canvasHeight * 0.9), options.get('medianColor')).append();
				if (options.get('target')) {
					size = Math.ceil(options.get('spotRadius'));
					target.drawLine(Math.round((options.get('target') - minValue) * unitSize + canvasLeft), Math.round(canvasHeight / 2 - size), Math.round((options.get('target') - minValue) * unitSize + canvasLeft), Math.round(canvasHeight / 2 + size), options.get('targetColor')).append();
					target.drawLine(Math.round((options.get('target') - minValue) * unitSize + canvasLeft - size), Math.round(canvasHeight / 2), Math.round((options.get('target') - minValue) * unitSize + canvasLeft + size), Math.round(canvasHeight / 2), options.get('targetColor')).append();
				}
				target.render();
			}
		});

		// Setup a very simple "virtual canvas" to make drawing the few shapes we need easier
		// This is accessible as $(foo).simpledraw()

		VShape = createClass({
			init: function init(target, id, type, args) {
				this.target = target;
				this.id = id;
				this.type = type;
				this.args = args;
			},
			append: function append() {
				this.target.appendShape(this);
				return this;
			}
		});

		VCanvas_base = createClass({
			_pxregex: /(\d+)(px)?\s*$/i,

			init: function init(width, height, target) {
				if (!width) {
					return;
				}
				this.width = width;
				this.height = height;
				this.target = target;
				this.lastShapeId = null;
				if (target[0]) {
					target = target[0];
				}
				$.data(target, '_jqs_vcanvas', this);
			},

			drawLine: function drawLine(x1, y1, x2, y2, lineColor, lineWidth) {
				return this.drawShape([[x1, y1], [x2, y2]], lineColor, lineWidth);
			},

			drawShape: function drawShape(path, lineColor, fillColor, lineWidth) {
				return this._genShape('Shape', [path, lineColor, fillColor, lineWidth]);
			},

			drawCircle: function drawCircle(x, y, radius, lineColor, fillColor, lineWidth) {
				return this._genShape('Circle', [x, y, radius, lineColor, fillColor, lineWidth]);
			},

			drawPieSlice: function drawPieSlice(x, y, radius, startAngle, endAngle, lineColor, fillColor) {
				return this._genShape('PieSlice', [x, y, radius, startAngle, endAngle, lineColor, fillColor]);
			},

			drawRect: function drawRect(x, y, width, height, lineColor, fillColor) {
				return this._genShape('Rect', [x, y, width, height, lineColor, fillColor]);
			},

			getElement: function getElement() {
				return this.canvas;
			},

			/**
    * Return the most recently inserted shape id
    */
			getLastShapeId: function getLastShapeId() {
				return this.lastShapeId;
			},

			/**
    * Clear and reset the canvas
    */
			reset: function reset() {
				alert('reset not implemented');
			},

			_insert: function _insert(el, target) {
				$(target).html(el);
			},

			/**
    * Calculate the pixel dimensions of the canvas
    */
			_calculatePixelDims: function _calculatePixelDims(width, height, canvas) {
				// XXX This should probably be a configurable option
				var match;
				match = this._pxregex.exec(height);
				if (match) {
					this.pixelHeight = match[1];
				} else {
					this.pixelHeight = $(canvas).height();
				}
				match = this._pxregex.exec(width);
				if (match) {
					this.pixelWidth = match[1];
				} else {
					this.pixelWidth = $(canvas).width();
				}
			},

			/**
    * Generate a shape object and id for later rendering
    */
			_genShape: function _genShape(shapetype, shapeargs) {
				var id = shapeCount++;
				shapeargs.unshift(id);
				return new VShape(this, id, shapetype, shapeargs);
			},

			/**
    * Add a shape to the end of the render queue
    */
			appendShape: function appendShape(shape) {
				alert('appendShape not implemented');
			},

			/**
    * Replace one shape with another
    */
			replaceWithShape: function replaceWithShape(shapeid, shape) {
				alert('replaceWithShape not implemented');
			},

			/**
    * Insert one shape after another in the render queue
    */
			insertAfterShape: function insertAfterShape(shapeid, shape) {
				alert('insertAfterShape not implemented');
			},

			/**
    * Remove a shape from the queue
    */
			removeShapeId: function removeShapeId(shapeid) {
				alert('removeShapeId not implemented');
			},

			/**
    * Find a shape at the specified x/y co-ordinates
    */
			getShapeAt: function getShapeAt(el, x, y) {
				alert('getShapeAt not implemented');
			},

			/**
    * Render all queued shapes onto the canvas
    */
			render: function render() {
				alert('render not implemented');
			}
		});

		VCanvas_canvas = createClass(VCanvas_base, {
			init: function init(width, height, target, interact) {
				VCanvas_canvas._super.init.call(this, width, height, target);
				this.canvas = document.createElement('canvas');
				if (target[0]) {
					target = target[0];
				}
				$.data(target, '_jqs_vcanvas', this);
				$(this.canvas).css({ display: 'inline-block', width: width, height: height, verticalAlign: 'top' });
				this._insert(this.canvas, target);
				this._calculatePixelDims(width, height, this.canvas);
				this.canvas.width = this.pixelWidth;
				this.canvas.height = this.pixelHeight;
				this.interact = interact;
				this.shapes = {};
				this.shapeseq = [];
				this.currentTargetShapeId = undefined;
				$(this.canvas).css({ width: this.pixelWidth, height: this.pixelHeight });
			},

			_getContext: function _getContext(lineColor, fillColor, lineWidth) {
				var context = this.canvas.getContext('2d');
				if (lineColor !== undefined) {
					context.strokeStyle = lineColor;
				}
				context.lineWidth = lineWidth === undefined ? 1 : lineWidth;
				if (fillColor !== undefined) {
					context.fillStyle = fillColor;
				}
				return context;
			},

			reset: function reset() {
				var context = this._getContext();
				context.clearRect(0, 0, this.pixelWidth, this.pixelHeight);
				this.shapes = {};
				this.shapeseq = [];
				this.currentTargetShapeId = undefined;
			},

			_drawShape: function _drawShape(shapeid, path, lineColor, fillColor, lineWidth) {
				var context = this._getContext(lineColor, fillColor, lineWidth),
				    i,
				    plen;
				context.beginPath();
				context.moveTo(path[0][0] + 0.5, path[0][1] + 0.5);
				for (i = 1, plen = path.length; i < plen; i++) {
					context.lineTo(path[i][0] + 0.5, path[i][1] + 0.5); // the 0.5 offset gives us crisp pixel-width lines
				}
				if (lineColor !== undefined) {
					context.stroke();
				}
				if (fillColor !== undefined) {
					context.fill();
				}
				if (this.targetX !== undefined && this.targetY !== undefined && context.isPointInPath(this.targetX, this.targetY)) {
					this.currentTargetShapeId = shapeid;
				}
			},

			_drawCircle: function _drawCircle(shapeid, x, y, radius, lineColor, fillColor, lineWidth) {
				var context = this._getContext(lineColor, fillColor, lineWidth);
				context.beginPath();
				context.arc(x, y, radius, 0, 2 * Math.PI, false);
				if (this.targetX !== undefined && this.targetY !== undefined && context.isPointInPath(this.targetX, this.targetY)) {
					this.currentTargetShapeId = shapeid;
				}
				if (lineColor !== undefined) {
					context.stroke();
				}
				if (fillColor !== undefined) {
					context.fill();
				}
			},

			_drawPieSlice: function _drawPieSlice(shapeid, x, y, radius, startAngle, endAngle, lineColor, fillColor) {
				var context = this._getContext(lineColor, fillColor);
				context.beginPath();
				context.moveTo(x, y);
				context.arc(x, y, radius, startAngle, endAngle, false);
				context.lineTo(x, y);
				context.closePath();
				if (lineColor !== undefined) {
					context.stroke();
				}
				if (fillColor) {
					context.fill();
				}
				if (this.targetX !== undefined && this.targetY !== undefined && context.isPointInPath(this.targetX, this.targetY)) {
					this.currentTargetShapeId = shapeid;
				}
			},

			_drawRect: function _drawRect(shapeid, x, y, width, height, lineColor, fillColor) {
				return this._drawShape(shapeid, [[x, y], [x + width, y], [x + width, y + height], [x, y + height], [x, y]], lineColor, fillColor);
			},

			appendShape: function appendShape(shape) {
				this.shapes[shape.id] = shape;
				this.shapeseq.push(shape.id);
				this.lastShapeId = shape.id;
				return shape.id;
			},

			replaceWithShape: function replaceWithShape(shapeid, shape) {
				var shapeseq = this.shapeseq,
				    i;
				this.shapes[shape.id] = shape;
				for (i = shapeseq.length; i--;) {
					if (shapeseq[i] == shapeid) {
						shapeseq[i] = shape.id;
					}
				}
				delete this.shapes[shapeid];
			},

			replaceWithShapes: function replaceWithShapes(shapeids, shapes) {
				var shapeseq = this.shapeseq,
				    shapemap = {},
				    sid,
				    i,
				    first;

				for (i = shapeids.length; i--;) {
					shapemap[shapeids[i]] = true;
				}
				for (i = shapeseq.length; i--;) {
					sid = shapeseq[i];
					if (shapemap[sid]) {
						shapeseq.splice(i, 1);
						delete this.shapes[sid];
						first = i;
					}
				}
				for (i = shapes.length; i--;) {
					shapeseq.splice(first, 0, shapes[i].id);
					this.shapes[shapes[i].id] = shapes[i];
				}
			},

			insertAfterShape: function insertAfterShape(shapeid, shape) {
				var shapeseq = this.shapeseq,
				    i;
				for (i = shapeseq.length; i--;) {
					if (shapeseq[i] === shapeid) {
						shapeseq.splice(i + 1, 0, shape.id);
						this.shapes[shape.id] = shape;
						return;
					}
				}
			},

			removeShapeId: function removeShapeId(shapeid) {
				var shapeseq = this.shapeseq,
				    i;
				for (i = shapeseq.length; i--;) {
					if (shapeseq[i] === shapeid) {
						shapeseq.splice(i, 1);
						break;
					}
				}
				delete this.shapes[shapeid];
			},

			getShapeAt: function getShapeAt(el, x, y) {
				this.targetX = x;
				this.targetY = y;
				this.render();
				return this.currentTargetShapeId;
			},

			render: function render() {
				var shapeseq = this.shapeseq,
				    shapes = this.shapes,
				    shapeCount = shapeseq.length,
				    context = this._getContext(),
				    shapeid,
				    shape,
				    i;
				context.clearRect(0, 0, this.pixelWidth, this.pixelHeight);
				for (i = 0; i < shapeCount; i++) {
					shapeid = shapeseq[i];
					shape = shapes[shapeid];
					this['_draw' + shape.type].apply(this, shape.args);
				}
				if (!this.interact) {
					// not interactive so no need to keep the shapes array
					this.shapes = {};
					this.shapeseq = [];
				}
			}

		});

		VCanvas_vml = createClass(VCanvas_base, {
			init: function init(width, height, target) {
				var groupel;
				VCanvas_vml._super.init.call(this, width, height, target);
				if (target[0]) {
					target = target[0];
				}
				$.data(target, '_jqs_vcanvas', this);
				this.canvas = document.createElement('span');
				$(this.canvas).css({ display: 'inline-block', position: 'relative', overflow: 'hidden', width: width, height: height, margin: '0px', padding: '0px', verticalAlign: 'top' });
				this._insert(this.canvas, target);
				this._calculatePixelDims(width, height, this.canvas);
				this.canvas.width = this.pixelWidth;
				this.canvas.height = this.pixelHeight;
				groupel = '<v:group coordorigin="0 0" coordsize="' + this.pixelWidth + ' ' + this.pixelHeight + '"' + ' style="position:absolute;top:0;left:0;width:' + this.pixelWidth + 'px;height=' + this.pixelHeight + 'px;"></v:group>';
				this.canvas.insertAdjacentHTML('beforeEnd', groupel);
				this.group = $(this.canvas).children()[0];
				this.rendered = false;
				this.prerender = '';
			},

			_drawShape: function _drawShape(shapeid, path, lineColor, fillColor, lineWidth) {
				var vpath = [],
				    initial,
				    stroke,
				    fill,
				    closed,
				    vel,
				    plen,
				    i;
				for (i = 0, plen = path.length; i < plen; i++) {
					vpath[i] = '' + path[i][0] + ',' + path[i][1];
				}
				initial = vpath.splice(0, 1);
				lineWidth = lineWidth === undefined ? 1 : lineWidth;
				stroke = lineColor === undefined ? ' stroked="false" ' : ' strokeWeight="' + lineWidth + 'px" strokeColor="' + lineColor + '" ';
				fill = fillColor === undefined ? ' filled="false"' : ' fillColor="' + fillColor + '" filled="true" ';
				closed = vpath[0] === vpath[vpath.length - 1] ? 'x ' : '';
				vel = '<v:shape coordorigin="0 0" coordsize="' + this.pixelWidth + ' ' + this.pixelHeight + '" ' + ' id="jqsshape' + shapeid + '" ' + stroke + fill + ' style="position:absolute;left:0px;top:0px;height:' + this.pixelHeight + 'px;width:' + this.pixelWidth + 'px;padding:0px;margin:0px;" ' + ' path="m ' + initial + ' l ' + vpath.join(', ') + ' ' + closed + 'e">' + ' </v:shape>';
				return vel;
			},

			_drawCircle: function _drawCircle(shapeid, x, y, radius, lineColor, fillColor, lineWidth) {
				var stroke, fill, vel;
				x -= radius;
				y -= radius;
				stroke = lineColor === undefined ? ' stroked="false" ' : ' strokeWeight="' + lineWidth + 'px" strokeColor="' + lineColor + '" ';
				fill = fillColor === undefined ? ' filled="false"' : ' fillColor="' + fillColor + '" filled="true" ';
				vel = '<v:oval ' + ' id="jqsshape' + shapeid + '" ' + stroke + fill + ' style="position:absolute;top:' + y + 'px; left:' + x + 'px; width:' + radius * 2 + 'px; height:' + radius * 2 + 'px"></v:oval>';
				return vel;
			},

			_drawPieSlice: function _drawPieSlice(shapeid, x, y, radius, startAngle, endAngle, lineColor, fillColor) {
				var vpath, startx, starty, endx, endy, stroke, fill, vel;
				if (startAngle === endAngle) {
					return ''; // VML seems to have problem when start angle equals end angle.
				}
				if (endAngle - startAngle === 2 * Math.PI) {
					startAngle = 0.0; // VML seems to have a problem when drawing a full circle that doesn't start 0
					endAngle = 2 * Math.PI;
				}

				startx = x + Math.round(Math.cos(startAngle) * radius);
				starty = y + Math.round(Math.sin(startAngle) * radius);
				endx = x + Math.round(Math.cos(endAngle) * radius);
				endy = y + Math.round(Math.sin(endAngle) * radius);

				if (startx === endx && starty === endy) {
					if (endAngle - startAngle < Math.PI) {
						// Prevent very small slices from being mistaken as a whole pie
						return '';
					}
					// essentially going to be the entire circle, so ignore startAngle
					startx = endx = x + radius;
					starty = endy = y;
				}

				if (startx === endx && starty === endy && endAngle - startAngle < Math.PI) {
					return '';
				}

				vpath = [x - radius, y - radius, x + radius, y + radius, startx, starty, endx, endy];
				stroke = lineColor === undefined ? ' stroked="false" ' : ' strokeWeight="1px" strokeColor="' + lineColor + '" ';
				fill = fillColor === undefined ? ' filled="false"' : ' fillColor="' + fillColor + '" filled="true" ';
				vel = '<v:shape coordorigin="0 0" coordsize="' + this.pixelWidth + ' ' + this.pixelHeight + '" ' + ' id="jqsshape' + shapeid + '" ' + stroke + fill + ' style="position:absolute;left:0px;top:0px;height:' + this.pixelHeight + 'px;width:' + this.pixelWidth + 'px;padding:0px;margin:0px;" ' + ' path="m ' + x + ',' + y + ' wa ' + vpath.join(', ') + ' x e">' + ' </v:shape>';
				return vel;
			},

			_drawRect: function _drawRect(shapeid, x, y, width, height, lineColor, fillColor) {
				return this._drawShape(shapeid, [[x, y], [x, y + height], [x + width, y + height], [x + width, y], [x, y]], lineColor, fillColor);
			},

			reset: function reset() {
				this.group.innerHTML = '';
			},

			appendShape: function appendShape(shape) {
				var vel = this['_draw' + shape.type].apply(this, shape.args);
				if (this.rendered) {
					this.group.insertAdjacentHTML('beforeEnd', vel);
				} else {
					this.prerender += vel;
				}
				this.lastShapeId = shape.id;
				return shape.id;
			},

			replaceWithShape: function replaceWithShape(shapeid, shape) {
				var existing = $('#jqsshape' + shapeid),
				    vel = this['_draw' + shape.type].apply(this, shape.args);
				existing[0].outerHTML = vel;
			},

			replaceWithShapes: function replaceWithShapes(shapeids, shapes) {
				// replace the first shapeid with all the new shapes then toast the remaining old shapes
				var existing = $('#jqsshape' + shapeids[0]),
				    replace = '',
				    slen = shapes.length,
				    i;
				for (i = 0; i < slen; i++) {
					replace += this['_draw' + shapes[i].type].apply(this, shapes[i].args);
				}
				existing[0].outerHTML = replace;
				for (i = 1; i < shapeids.length; i++) {
					$('#jqsshape' + shapeids[i]).remove();
				}
			},

			insertAfterShape: function insertAfterShape(shapeid, shape) {
				var existing = $('#jqsshape' + shapeid),
				    vel = this['_draw' + shape.type].apply(this, shape.args);
				existing[0].insertAdjacentHTML('afterEnd', vel);
			},

			removeShapeId: function removeShapeId(shapeid) {
				var existing = $('#jqsshape' + shapeid);
				this.group.removeChild(existing[0]);
			},

			getShapeAt: function getShapeAt(el, x, y) {
				var shapeid = el.id.substr(8);
				return shapeid;
			},

			render: function render() {
				if (!this.rendered) {
					// batch the intial render into a single repaint
					this.group.innerHTML = this.prerender;
					this.rendered = true;
				}
			}
		});
	});
})(document, Math);

/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (e) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    e(jQuery);
  }
})(function (e) {
  "use strict";
  var t = {},
      n = Math.max,
      r = Math.min;t.c = {};t.c.d = e(document);t.c.t = function (e) {
    return e.originalEvent.touches.length - 1;
  };t.o = function () {
    var n = this;this.o = null;this.$ = null;this.i = null;this.g = null;this.v = null;this.cv = null;this.x = 0;this.y = 0;this.w = 0;this.h = 0;this.$c = null;this.c = null;this.t = 0;this.isInit = false;this.fgColor = null;this.pColor = null;this.dH = null;this.cH = null;this.eH = null;this.rH = null;this.scale = 1;this.relative = false;this.relativeWidth = false;this.relativeHeight = false;this.$div = null;this.run = function () {
      var t = function t(e, _t) {
        var r;for (r in _t) {
          n.o[r] = _t[r];
        }n._carve().init();n._configure()._draw();
      };if (this.$.data("kontroled")) return;this.$.data("kontroled", true);this.extend();this.o = e.extend({ min: this.$.data("min") !== undefined ? this.$.data("min") : 0, max: this.$.data("max") !== undefined ? this.$.data("max") : 100, stopper: true, readOnly: this.$.data("readonly") || this.$.attr("readonly") === "readonly", cursor: this.$.data("cursor") === true && 30 || this.$.data("cursor") || 0, thickness: this.$.data("thickness") && Math.max(Math.min(this.$.data("thickness"), 1), .01) || .35, lineCap: this.$.data("linecap") || "butt", width: this.$.data("width") || 200, height: this.$.data("height") || 200, displayInput: this.$.data("displayinput") == null || this.$.data("displayinput"), displayPrevious: this.$.data("displayprevious"), fgColor: this.$.data("fgcolor") || "#87CEEB", inputColor: this.$.data("inputcolor"), font: this.$.data("font") || "Arial", fontWeight: this.$.data("font-weight") || "bold", inline: false, step: this.$.data("step") || 1, rotation: this.$.data("rotation"), draw: null, change: null, cancel: null, release: null, format: function format(e) {
          return e;
        }, parse: function parse(e) {
          return parseFloat(e);
        } }, this.o);this.o.flip = this.o.rotation === "anticlockwise" || this.o.rotation === "acw";if (!this.o.inputColor) {
        this.o.inputColor = this.o.fgColor;
      }if (this.$.is("fieldset")) {
        this.v = {};this.i = this.$.find("input");this.i.each(function (t) {
          var r = e(this);n.i[t] = r;n.v[t] = n.o.parse(r.val());r.bind("change blur", function () {
            var e = {};e[t] = r.val();n.val(n._validate(e));
          });
        });this.$.find("legend").remove();
      } else {
        this.i = this.$;this.v = this.o.parse(this.$.val());this.v === "" && (this.v = this.o.min);this.$.bind("change blur", function () {
          n.val(n._validate(n.o.parse(n.$.val())));
        });
      }!this.o.displayInput && this.$.hide();this.$c = e(document.createElement("canvas")).attr({ width: this.o.width, height: this.o.height });this.$div = e('<div style="' + (this.o.inline ? "display:inline;" : "") + "width:" + this.o.width + "px;height:" + this.o.height + "px;" + '"></div>');this.$.wrap(this.$div).before(this.$c);this.$div = this.$.parent();if (typeof G_vmlCanvasManager !== "undefined") {
        G_vmlCanvasManager.initElement(this.$c[0]);
      }this.c = this.$c[0].getContext ? this.$c[0].getContext("2d") : null;if (!this.c) {
        throw { name: "CanvasNotSupportedException", message: "Canvas not supported. Please use excanvas on IE8.0.", toString: function toString() {
            return this.name + ": " + this.message;
          } };
      }this.scale = (window.devicePixelRatio || 1) / (this.c.webkitBackingStorePixelRatio || this.c.mozBackingStorePixelRatio || this.c.msBackingStorePixelRatio || this.c.oBackingStorePixelRatio || this.c.backingStorePixelRatio || 1);this.relativeWidth = this.o.width % 1 !== 0 && this.o.width.indexOf("%");this.relativeHeight = this.o.height % 1 !== 0 && this.o.height.indexOf("%");this.relative = this.relativeWidth || this.relativeHeight;this._carve();if (this.v instanceof Object) {
        this.cv = {};this.copy(this.v, this.cv);
      } else {
        this.cv = this.v;
      }this.$.bind("configure", t).parent().bind("configure", t);this._listen()._configure()._xy().init();this.isInit = true;this.$.val(this.o.format(this.v));this._draw();return this;
    };this._carve = function () {
      if (this.relative) {
        var e = this.relativeWidth ? this.$div.parent().width() * parseInt(this.o.width) / 100 : this.$div.parent().width(),
            t = this.relativeHeight ? this.$div.parent().height() * parseInt(this.o.height) / 100 : this.$div.parent().height();this.w = this.h = Math.min(e, t);
      } else {
        this.w = this.o.width;this.h = this.o.height;
      }this.$div.css({ width: this.w + "px", height: this.h + "px" });this.$c.attr({ width: this.w, height: this.h });if (this.scale !== 1) {
        this.$c[0].width = this.$c[0].width * this.scale;this.$c[0].height = this.$c[0].height * this.scale;this.$c.width(this.w);this.$c.height(this.h);
      }return this;
    };this._draw = function () {
      var e = true;n.g = n.c;n.clear();n.dH && (e = n.dH());e !== false && n.draw();
    };this._touch = function (e) {
      var r = function r(e) {
        var t = n.xy2val(e.originalEvent.touches[n.t].pageX, e.originalEvent.touches[n.t].pageY);if (t == n.cv) return;if (n.cH && n.cH(t) === false) return;n.change(n._validate(t));n._draw();
      };this.t = t.c.t(e);r(e);t.c.d.bind("touchmove.k", r).bind("touchend.k", function () {
        t.c.d.unbind("touchmove.k touchend.k");n.val(n.cv);
      });return this;
    };this._mouse = function (e) {
      var r = function r(e) {
        var t = n.xy2val(e.pageX, e.pageY);if (t == n.cv) return;if (n.cH && n.cH(t) === false) return;n.change(n._validate(t));n._draw();
      };r(e);t.c.d.bind("mousemove.k", r).bind("keyup.k", function (e) {
        if (e.keyCode === 27) {
          t.c.d.unbind("mouseup.k mousemove.k keyup.k");if (n.eH && n.eH() === false) return;n.cancel();
        }
      }).bind("mouseup.k", function (e) {
        t.c.d.unbind("mousemove.k mouseup.k keyup.k");n.val(n.cv);
      });return this;
    };this._xy = function () {
      var e = this.$c.offset();this.x = e.left;this.y = e.top;return this;
    };this._listen = function () {
      if (!this.o.readOnly) {
        this.$c.bind("mousedown", function (e) {
          e.preventDefault();n._xy()._mouse(e);
        }).bind("touchstart", function (e) {
          e.preventDefault();n._xy()._touch(e);
        });this.listen();
      } else {
        this.$.attr("readonly", "readonly");
      }if (this.relative) {
        e(window).resize(function () {
          n._carve().init();n._draw();
        });
      }return this;
    };this._configure = function () {
      if (this.o.draw) this.dH = this.o.draw;if (this.o.change) this.cH = this.o.change;if (this.o.cancel) this.eH = this.o.cancel;if (this.o.release) this.rH = this.o.release;if (this.o.displayPrevious) {
        this.pColor = this.h2rgba(this.o.fgColor, "0.4");this.fgColor = this.h2rgba(this.o.fgColor, "0.6");
      } else {
        this.fgColor = this.o.fgColor;
      }return this;
    };this._clear = function () {
      this.$c[0].width = this.$c[0].width;
    };this._validate = function (e) {
      var t = ~~((e < 0 ? -.5 : .5) + e / this.o.step) * this.o.step;return Math.round(t * 100) / 100;
    };this.listen = function () {};this.extend = function () {};this.init = function () {};this.change = function (e) {};this.val = function (e) {};this.xy2val = function (e, t) {};this.draw = function () {};this.clear = function () {
      this._clear();
    };this.h2rgba = function (e, t) {
      var n;e = e.substring(1, 7);n = [parseInt(e.substring(0, 2), 16), parseInt(e.substring(2, 4), 16), parseInt(e.substring(4, 6), 16)];return "rgba(" + n[0] + "," + n[1] + "," + n[2] + "," + t + ")";
    };this.copy = function (e, t) {
      for (var n in e) {
        t[n] = e[n];
      }
    };
  };t.Dial = function () {
    t.o.call(this);this.startAngle = null;this.xy = null;this.radius = null;this.lineWidth = null;this.cursorExt = null;this.w2 = null;this.PI2 = 2 * Math.PI;this.extend = function () {
      this.o = e.extend({ bgColor: this.$.data("bgcolor") || "#EEEEEE", angleOffset: this.$.data("angleoffset") || 0, angleArc: this.$.data("anglearc") || 360, inline: true }, this.o);
    };this.val = function (e, t) {
      if (null != e) {
        e = this.o.parse(e);if (t !== false && e != this.v && this.rH && this.rH(e) === false) {
          return;
        }this.cv = this.o.stopper ? n(r(e, this.o.max), this.o.min) : e;this.v = this.cv;this.$.val(this.o.format(this.v));this._draw();
      } else {
        return this.v;
      }
    };this.xy2val = function (e, t) {
      var i, s;i = Math.atan2(e - (this.x + this.w2), -(t - this.y - this.w2)) - this.angleOffset;if (this.o.flip) {
        i = this.angleArc - i - this.PI2;
      }if (this.angleArc != this.PI2 && i < 0 && i > -.5) {
        i = 0;
      } else if (i < 0) {
        i += this.PI2;
      }s = i * (this.o.max - this.o.min) / this.angleArc + this.o.min;this.o.stopper && (s = n(r(s, this.o.max), this.o.min));return s;
    };this.listen = function () {
      var t = this,
          i,
          s,
          o = function o(e) {
        e.preventDefault();var o = e.originalEvent,
            u = o.detail || o.wheelDeltaX,
            a = o.detail || o.wheelDeltaY,
            f = t._validate(t.o.parse(t.$.val())) + (u > 0 || a > 0 ? t.o.step : u < 0 || a < 0 ? -t.o.step : 0);f = n(r(f, t.o.max), t.o.min);t.val(f, false);if (t.rH) {
          clearTimeout(i);i = setTimeout(function () {
            t.rH(f);i = null;
          }, 100);if (!s) {
            s = setTimeout(function () {
              if (i) t.rH(f);s = null;
            }, 200);
          }
        }
      },
          u,
          a,
          f = 1,
          l = { 37: -t.o.step, 38: t.o.step, 39: t.o.step, 40: -t.o.step };this.$.bind("keydown", function (i) {
        var s = i.keyCode;if (s >= 96 && s <= 105) {
          s = i.keyCode = s - 48;
        }u = parseInt(String.fromCharCode(s));if (isNaN(u)) {
          s !== 13 && s !== 8 && s !== 9 && s !== 189 && (s !== 190 || t.$.val().match(/\./)) && i.preventDefault();if (e.inArray(s, [37, 38, 39, 40]) > -1) {
            i.preventDefault();var o = t.o.parse(t.$.val()) + l[s] * f;t.o.stopper && (o = n(r(o, t.o.max), t.o.min));t.change(t._validate(o));t._draw();a = window.setTimeout(function () {
              f *= 2;
            }, 30);
          }
        }
      }).bind("keyup", function (e) {
        if (isNaN(u)) {
          if (a) {
            window.clearTimeout(a);a = null;f = 1;t.val(t.$.val());
          }
        } else {
          t.$.val() > t.o.max && t.$.val(t.o.max) || t.$.val() < t.o.min && t.$.val(t.o.min);
        }
      });this.$c.bind("mousewheel DOMMouseScroll", o);this.$.bind("mousewheel DOMMouseScroll", o);
    };this.init = function () {
      if (this.v < this.o.min || this.v > this.o.max) {
        this.v = this.o.min;
      }this.$.val(this.v);this.w2 = this.w / 2;this.cursorExt = this.o.cursor / 100;this.xy = this.w2 * this.scale;this.lineWidth = this.xy * this.o.thickness;this.lineCap = this.o.lineCap;this.radius = this.xy - this.lineWidth / 2;this.o.angleOffset && (this.o.angleOffset = isNaN(this.o.angleOffset) ? 0 : this.o.angleOffset);this.o.angleArc && (this.o.angleArc = isNaN(this.o.angleArc) ? this.PI2 : this.o.angleArc);this.angleOffset = this.o.angleOffset * Math.PI / 180;this.angleArc = this.o.angleArc * Math.PI / 180;this.startAngle = 1.5 * Math.PI + this.angleOffset;this.endAngle = 1.5 * Math.PI + this.angleOffset + this.angleArc;var e = n(String(Math.abs(this.o.max)).length, String(Math.abs(this.o.min)).length, 2) + 2;this.o.displayInput && this.i.css({ width: (this.w / 2 + 4 >> 0) + "px", height: (this.w / 3 >> 0) + "px", position: "absolute", "vertical-align": "middle", "margin-top": (this.w / 3 >> 0) + "px", "margin-left": "-" + (this.w * 3 / 4 + 2 >> 0) + "px", border: 0, background: "none", font: this.o.fontWeight + " " + (this.w / e >> 0) + "px " + this.o.font, "text-align": "center", color: this.o.inputColor || this.o.fgColor, padding: "0px", "-webkit-appearance": "none" }) || this.i.css({ width: "0px", visibility: "hidden" });
    };this.change = function (e) {
      this.cv = e;this.$.val(this.o.format(e));
    };this.angle = function (e) {
      return (e - this.o.min) * this.angleArc / (this.o.max - this.o.min);
    };this.arc = function (e) {
      var t, n;e = this.angle(e);if (this.o.flip) {
        t = this.endAngle + 1e-5;n = t - e - 1e-5;
      } else {
        t = this.startAngle - 1e-5;n = t + e + 1e-5;
      }this.o.cursor && (t = n - this.cursorExt) && (n = n + this.cursorExt);return { s: t, e: n, d: this.o.flip && !this.o.cursor };
    };this.draw = function () {
      var e = this.g,
          t = this.arc(this.cv),
          n,
          r = 1;e.lineWidth = this.lineWidth;e.lineCap = this.lineCap;if (this.o.bgColor !== "none") {
        e.beginPath();e.strokeStyle = this.o.bgColor;e.arc(this.xy, this.xy, this.radius, this.endAngle - 1e-5, this.startAngle + 1e-5, true);e.stroke();
      }if (this.o.displayPrevious) {
        n = this.arc(this.v);e.beginPath();e.strokeStyle = this.pColor;e.arc(this.xy, this.xy, this.radius, n.s, n.e, n.d);e.stroke();r = this.cv == this.v;
      }e.beginPath();e.strokeStyle = r ? this.o.fgColor : this.fgColor;e.arc(this.xy, this.xy, this.radius, t.s, t.e, t.d);e.stroke();
    };this.cancel = function () {
      this.val(this.v);
    };
  };e.fn.dial = e.fn.knob = function (n) {
    return this.each(function () {
      var r = new t.Dial();r.o = n;r.$ = e(this);r.run();
    }).parent();
  };
});

/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery, __webpack_provided_window_dot_jQuery) {var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Swiper 3.4.2
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * 
 * http://www.idangero.us/swiper/
 * 
 * Copyright 2017, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 * 
 * Licensed under MIT
 * 
 * Released on: March 10, 2017
 */
!function () {
  "use strict";
  var e,
      a = function a(s, i) {
    function r(e) {
      return Math.floor(e);
    }function n() {
      var e = T.params.autoplay,
          a = T.slides.eq(T.activeIndex);a.attr("data-swiper-autoplay") && (e = a.attr("data-swiper-autoplay") || T.params.autoplay), T.autoplayTimeoutId = setTimeout(function () {
        T.params.loop ? (T.fixLoop(), T._slideNext(), T.emit("onAutoplay", T)) : T.isEnd ? i.autoplayStopOnLast ? T.stopAutoplay() : (T._slideTo(0), T.emit("onAutoplay", T)) : (T._slideNext(), T.emit("onAutoplay", T));
      }, e);
    }function o(a, t) {
      var s = e(a.target);if (!s.is(t)) if ("string" == typeof t) s = s.parents(t);else if (t.nodeType) {
        var i;return s.parents().each(function (e, a) {
          a === t && (i = t);
        }), i ? t : void 0;
      }if (0 !== s.length) return s[0];
    }function l(e, a) {
      a = a || {};var t = window.MutationObserver || window.WebkitMutationObserver,
          s = new t(function (e) {
        e.forEach(function (e) {
          T.onResize(!0), T.emit("onObserverUpdate", T, e);
        });
      });s.observe(e, { attributes: void 0 === a.attributes || a.attributes, childList: void 0 === a.childList || a.childList, characterData: void 0 === a.characterData || a.characterData }), T.observers.push(s);
    }function p(e) {
      e.originalEvent && (e = e.originalEvent);var a = e.keyCode || e.charCode;if (!T.params.allowSwipeToNext && (T.isHorizontal() && 39 === a || !T.isHorizontal() && 40 === a)) return !1;if (!T.params.allowSwipeToPrev && (T.isHorizontal() && 37 === a || !T.isHorizontal() && 38 === a)) return !1;if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
        if (37 === a || 39 === a || 38 === a || 40 === a) {
          var t = !1;if (T.container.parents("." + T.params.slideClass).length > 0 && 0 === T.container.parents("." + T.params.slideActiveClass).length) return;var s = { left: window.pageXOffset, top: window.pageYOffset },
              i = window.innerWidth,
              r = window.innerHeight,
              n = T.container.offset();T.rtl && (n.left = n.left - T.container[0].scrollLeft);for (var o = [[n.left, n.top], [n.left + T.width, n.top], [n.left, n.top + T.height], [n.left + T.width, n.top + T.height]], l = 0; l < o.length; l++) {
            var p = o[l];p[0] >= s.left && p[0] <= s.left + i && p[1] >= s.top && p[1] <= s.top + r && (t = !0);
          }if (!t) return;
        }T.isHorizontal() ? (37 !== a && 39 !== a || (e.preventDefault ? e.preventDefault() : e.returnValue = !1), (39 === a && !T.rtl || 37 === a && T.rtl) && T.slideNext(), (37 === a && !T.rtl || 39 === a && T.rtl) && T.slidePrev()) : (38 !== a && 40 !== a || (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 40 === a && T.slideNext(), 38 === a && T.slidePrev()), T.emit("onKeyPress", T, a);
      }
    }function d(e) {
      var a = 0,
          t = 0,
          s = 0,
          i = 0;return "detail" in e && (t = e.detail), "wheelDelta" in e && (t = -e.wheelDelta / 120), "wheelDeltaY" in e && (t = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (a = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (a = t, t = 0), s = 10 * a, i = 10 * t, "deltaY" in e && (i = e.deltaY), "deltaX" in e && (s = e.deltaX), (s || i) && e.deltaMode && (1 === e.deltaMode ? (s *= 40, i *= 40) : (s *= 800, i *= 800)), s && !a && (a = s < 1 ? -1 : 1), i && !t && (t = i < 1 ? -1 : 1), { spinX: a, spinY: t, pixelX: s, pixelY: i };
    }function u(e) {
      e.originalEvent && (e = e.originalEvent);var a = 0,
          t = T.rtl ? -1 : 1,
          s = d(e);if (T.params.mousewheelForceToAxis) {
        if (T.isHorizontal()) {
          if (!(Math.abs(s.pixelX) > Math.abs(s.pixelY))) return;a = s.pixelX * t;
        } else {
          if (!(Math.abs(s.pixelY) > Math.abs(s.pixelX))) return;a = s.pixelY;
        }
      } else a = Math.abs(s.pixelX) > Math.abs(s.pixelY) ? -s.pixelX * t : -s.pixelY;if (0 !== a) {
        if (T.params.mousewheelInvert && (a = -a), T.params.freeMode) {
          var i = T.getWrapperTranslate() + a * T.params.mousewheelSensitivity,
              r = T.isBeginning,
              n = T.isEnd;if (i >= T.minTranslate() && (i = T.minTranslate()), i <= T.maxTranslate() && (i = T.maxTranslate()), T.setWrapperTransition(0), T.setWrapperTranslate(i), T.updateProgress(), T.updateActiveIndex(), (!r && T.isBeginning || !n && T.isEnd) && T.updateClasses(), T.params.freeModeSticky ? (clearTimeout(T.mousewheel.timeout), T.mousewheel.timeout = setTimeout(function () {
            T.slideReset();
          }, 300)) : T.params.lazyLoading && T.lazy && T.lazy.load(), T.emit("onScroll", T, e), T.params.autoplay && T.params.autoplayDisableOnInteraction && T.stopAutoplay(), 0 === i || i === T.maxTranslate()) return;
        } else {
          if (new window.Date().getTime() - T.mousewheel.lastScrollTime > 60) if (a < 0) {
            if (T.isEnd && !T.params.loop || T.animating) {
              if (T.params.mousewheelReleaseOnEdges) return !0;
            } else T.slideNext(), T.emit("onScroll", T, e);
          } else if (T.isBeginning && !T.params.loop || T.animating) {
            if (T.params.mousewheelReleaseOnEdges) return !0;
          } else T.slidePrev(), T.emit("onScroll", T, e);T.mousewheel.lastScrollTime = new window.Date().getTime();
        }return e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1;
      }
    }function c(a, t) {
      a = e(a);var s,
          i,
          r,
          n = T.rtl ? -1 : 1;s = a.attr("data-swiper-parallax") || "0", i = a.attr("data-swiper-parallax-x"), r = a.attr("data-swiper-parallax-y"), i || r ? (i = i || "0", r = r || "0") : T.isHorizontal() ? (i = s, r = "0") : (r = s, i = "0"), i = i.indexOf("%") >= 0 ? parseInt(i, 10) * t * n + "%" : i * t * n + "px", r = r.indexOf("%") >= 0 ? parseInt(r, 10) * t + "%" : r * t + "px", a.transform("translate3d(" + i + ", " + r + ",0px)");
    }function m(e) {
      return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e), e;
    }if (!(this instanceof a)) return new a(s, i);var h = { direction: "horizontal", touchEventsTarget: "container", initialSlide: 0, speed: 300, autoplay: !1, autoplayDisableOnInteraction: !0, autoplayStopOnLast: !1, iOSEdgeSwipeDetection: !1, iOSEdgeSwipeThreshold: 20, freeMode: !1, freeModeMomentum: !0, freeModeMomentumRatio: 1, freeModeMomentumBounce: !0, freeModeMomentumBounceRatio: 1, freeModeMomentumVelocityRatio: 1, freeModeSticky: !1, freeModeMinimumVelocity: .02, autoHeight: !1, setWrapperSize: !1, virtualTranslate: !1, effect: "slide", coverflow: { rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0 }, flip: { slideShadows: !0, limitRotation: !0 }, cube: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94 }, fade: { crossFade: !1 }, parallax: !1, zoom: !1, zoomMax: 3, zoomMin: 1, zoomToggle: !0, scrollbar: null, scrollbarHide: !0, scrollbarDraggable: !1, scrollbarSnapOnRelease: !1, keyboardControl: !1, mousewheelControl: !1, mousewheelReleaseOnEdges: !1, mousewheelInvert: !1, mousewheelForceToAxis: !1, mousewheelSensitivity: 1, mousewheelEventsTarged: "container", hashnav: !1, hashnavWatchState: !1, history: !1, replaceState: !1, breakpoints: void 0, spaceBetween: 0, slidesPerView: 1, slidesPerColumn: 1, slidesPerColumnFill: "column", slidesPerGroup: 1, centeredSlides: !1, slidesOffsetBefore: 0, slidesOffsetAfter: 0, roundLengths: !1, touchRatio: 1, touchAngle: 45, simulateTouch: !0, shortSwipes: !0, longSwipes: !0, longSwipesRatio: .5, longSwipesMs: 300, followFinger: !0, onlyExternal: !1, threshold: 0, touchMoveStopPropagation: !0, touchReleaseOnEdges: !1, uniqueNavElements: !0, pagination: null, paginationElement: "span", paginationClickable: !1, paginationHide: !1, paginationBulletRender: null, paginationProgressRender: null, paginationFractionRender: null, paginationCustomRender: null, paginationType: "bullets", resistance: !0, resistanceRatio: .85, nextButton: null, prevButton: null, watchSlidesProgress: !1, watchSlidesVisibility: !1, grabCursor: !1, preventClicks: !0, preventClicksPropagation: !0, slideToClickedSlide: !1, lazyLoading: !1, lazyLoadingInPrevNext: !1, lazyLoadingInPrevNextAmount: 1, lazyLoadingOnTransitionStart: !1, preloadImages: !0, updateOnImagesReady: !0, loop: !1, loopAdditionalSlides: 0, loopedSlides: null, control: void 0, controlInverse: !1, controlBy: "slide", normalizeSlideIndex: !0, allowSwipeToPrev: !0, allowSwipeToNext: !0, swipeHandler: null, noSwiping: !0, noSwipingClass: "swiper-no-swiping", passiveListeners: !0, containerModifierClass: "swiper-container-", slideClass: "swiper-slide", slideActiveClass: "swiper-slide-active", slideDuplicateActiveClass: "swiper-slide-duplicate-active", slideVisibleClass: "swiper-slide-visible", slideDuplicateClass: "swiper-slide-duplicate", slideNextClass: "swiper-slide-next", slideDuplicateNextClass: "swiper-slide-duplicate-next", slidePrevClass: "swiper-slide-prev", slideDuplicatePrevClass: "swiper-slide-duplicate-prev", wrapperClass: "swiper-wrapper", bulletClass: "swiper-pagination-bullet", bulletActiveClass: "swiper-pagination-bullet-active", buttonDisabledClass: "swiper-button-disabled", paginationCurrentClass: "swiper-pagination-current", paginationTotalClass: "swiper-pagination-total", paginationHiddenClass: "swiper-pagination-hidden", paginationProgressbarClass: "swiper-pagination-progressbar", paginationClickableClass: "swiper-pagination-clickable", paginationModifierClass: "swiper-pagination-", lazyLoadingClass: "swiper-lazy", lazyStatusLoadingClass: "swiper-lazy-loading", lazyStatusLoadedClass: "swiper-lazy-loaded", lazyPreloaderClass: "swiper-lazy-preloader", notificationClass: "swiper-notification", preloaderClass: "preloader", zoomContainerClass: "swiper-zoom-container", observer: !1, observeParents: !1, a11y: !1, prevSlideMessage: "Previous slide", nextSlideMessage: "Next slide", firstSlideMessage: "This is the first slide", lastSlideMessage: "This is the last slide", paginationBulletMessage: "Go to slide {{index}}", runCallbacksOnInit: !0 },
        g = i && i.virtualTranslate;i = i || {};var f = {};for (var v in i) {
      if ("object" != _typeof(i[v]) || null === i[v] || i[v].nodeType || i[v] === window || i[v] === document || void 0 !== t && i[v] instanceof t || "undefined" != typeof jQuery && i[v] instanceof jQuery) f[v] = i[v];else {
        f[v] = {};for (var w in i[v]) {
          f[v][w] = i[v][w];
        }
      }
    }for (var y in h) {
      if (void 0 === i[y]) i[y] = h[y];else if ("object" == _typeof(i[y])) for (var x in h[y]) {
        void 0 === i[y][x] && (i[y][x] = h[y][x]);
      }
    }var T = this;if (T.params = i, T.originalParams = f, T.classNames = [], void 0 !== e && void 0 !== t && (e = t), (void 0 !== e || (e = void 0 === t ? window.Dom7 || window.Zepto || __webpack_provided_window_dot_jQuery : t)) && (T.$ = e, T.currentBreakpoint = void 0, T.getActiveBreakpoint = function () {
      if (!T.params.breakpoints) return !1;var e,
          a = !1,
          t = [];for (e in T.params.breakpoints) {
        T.params.breakpoints.hasOwnProperty(e) && t.push(e);
      }t.sort(function (e, a) {
        return parseInt(e, 10) > parseInt(a, 10);
      });for (var s = 0; s < t.length; s++) {
        (e = t[s]) >= window.innerWidth && !a && (a = e);
      }return a || "max";
    }, T.setBreakpoint = function () {
      var e = T.getActiveBreakpoint();if (e && T.currentBreakpoint !== e) {
        var a = e in T.params.breakpoints ? T.params.breakpoints[e] : T.originalParams,
            t = T.params.loop && a.slidesPerView !== T.params.slidesPerView;for (var s in a) {
          T.params[s] = a[s];
        }T.currentBreakpoint = e, t && T.destroyLoop && T.reLoop(!0);
      }
    }, T.params.breakpoints && T.setBreakpoint(), T.container = e(s), 0 !== T.container.length)) {
      if (T.container.length > 1) {
        var b = [];return T.container.each(function () {
          b.push(new a(this, i));
        }), b;
      }T.container[0].swiper = T, T.container.data("swiper", T), T.classNames.push(T.params.containerModifierClass + T.params.direction), T.params.freeMode && T.classNames.push(T.params.containerModifierClass + "free-mode"), T.support.flexbox || (T.classNames.push(T.params.containerModifierClass + "no-flexbox"), T.params.slidesPerColumn = 1), T.params.autoHeight && T.classNames.push(T.params.containerModifierClass + "autoheight"), (T.params.parallax || T.params.watchSlidesVisibility) && (T.params.watchSlidesProgress = !0), T.params.touchReleaseOnEdges && (T.params.resistanceRatio = 0), ["cube", "coverflow", "flip"].indexOf(T.params.effect) >= 0 && (T.support.transforms3d ? (T.params.watchSlidesProgress = !0, T.classNames.push(T.params.containerModifierClass + "3d")) : T.params.effect = "slide"), "slide" !== T.params.effect && T.classNames.push(T.params.containerModifierClass + T.params.effect), "cube" === T.params.effect && (T.params.resistanceRatio = 0, T.params.slidesPerView = 1, T.params.slidesPerColumn = 1, T.params.slidesPerGroup = 1, T.params.centeredSlides = !1, T.params.spaceBetween = 0, T.params.virtualTranslate = !0), "fade" !== T.params.effect && "flip" !== T.params.effect || (T.params.slidesPerView = 1, T.params.slidesPerColumn = 1, T.params.slidesPerGroup = 1, T.params.watchSlidesProgress = !0, T.params.spaceBetween = 0, void 0 === g && (T.params.virtualTranslate = !0)), T.params.grabCursor && T.support.touch && (T.params.grabCursor = !1), T.wrapper = T.container.children("." + T.params.wrapperClass), T.params.pagination && (T.paginationContainer = e(T.params.pagination), T.params.uniqueNavElements && "string" == typeof T.params.pagination && T.paginationContainer.length > 1 && 1 === T.container.find(T.params.pagination).length && (T.paginationContainer = T.container.find(T.params.pagination)), "bullets" === T.params.paginationType && T.params.paginationClickable ? T.paginationContainer.addClass(T.params.paginationModifierClass + "clickable") : T.params.paginationClickable = !1, T.paginationContainer.addClass(T.params.paginationModifierClass + T.params.paginationType)), (T.params.nextButton || T.params.prevButton) && (T.params.nextButton && (T.nextButton = e(T.params.nextButton), T.params.uniqueNavElements && "string" == typeof T.params.nextButton && T.nextButton.length > 1 && 1 === T.container.find(T.params.nextButton).length && (T.nextButton = T.container.find(T.params.nextButton))), T.params.prevButton && (T.prevButton = e(T.params.prevButton), T.params.uniqueNavElements && "string" == typeof T.params.prevButton && T.prevButton.length > 1 && 1 === T.container.find(T.params.prevButton).length && (T.prevButton = T.container.find(T.params.prevButton)))), T.isHorizontal = function () {
        return "horizontal" === T.params.direction;
      }, T.rtl = T.isHorizontal() && ("rtl" === T.container[0].dir.toLowerCase() || "rtl" === T.container.css("direction")), T.rtl && T.classNames.push(T.params.containerModifierClass + "rtl"), T.rtl && (T.wrongRTL = "-webkit-box" === T.wrapper.css("display")), T.params.slidesPerColumn > 1 && T.classNames.push(T.params.containerModifierClass + "multirow"), T.device.android && T.classNames.push(T.params.containerModifierClass + "android"), T.container.addClass(T.classNames.join(" ")), T.translate = 0, T.progress = 0, T.velocity = 0, T.lockSwipeToNext = function () {
        T.params.allowSwipeToNext = !1, T.params.allowSwipeToPrev === !1 && T.params.grabCursor && T.unsetGrabCursor();
      }, T.lockSwipeToPrev = function () {
        T.params.allowSwipeToPrev = !1, T.params.allowSwipeToNext === !1 && T.params.grabCursor && T.unsetGrabCursor();
      }, T.lockSwipes = function () {
        T.params.allowSwipeToNext = T.params.allowSwipeToPrev = !1, T.params.grabCursor && T.unsetGrabCursor();
      }, T.unlockSwipeToNext = function () {
        T.params.allowSwipeToNext = !0, T.params.allowSwipeToPrev === !0 && T.params.grabCursor && T.setGrabCursor();
      }, T.unlockSwipeToPrev = function () {
        T.params.allowSwipeToPrev = !0, T.params.allowSwipeToNext === !0 && T.params.grabCursor && T.setGrabCursor();
      }, T.unlockSwipes = function () {
        T.params.allowSwipeToNext = T.params.allowSwipeToPrev = !0, T.params.grabCursor && T.setGrabCursor();
      }, T.setGrabCursor = function (e) {
        T.container[0].style.cursor = "move", T.container[0].style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", T.container[0].style.cursor = e ? "-moz-grabbin" : "-moz-grab", T.container[0].style.cursor = e ? "grabbing" : "grab";
      }, T.unsetGrabCursor = function () {
        T.container[0].style.cursor = "";
      }, T.params.grabCursor && T.setGrabCursor(), T.imagesToLoad = [], T.imagesLoaded = 0, T.loadImage = function (e, a, t, s, i, r) {
        function n() {
          r && r();
        }var o;e.complete && i ? n() : a ? (o = new window.Image(), o.onload = n, o.onerror = n, s && (o.sizes = s), t && (o.srcset = t), a && (o.src = a)) : n();
      }, T.preloadImages = function () {
        function e() {
          void 0 !== T && null !== T && T && (void 0 !== T.imagesLoaded && T.imagesLoaded++, T.imagesLoaded === T.imagesToLoad.length && (T.params.updateOnImagesReady && T.update(), T.emit("onImagesReady", T)));
        }T.imagesToLoad = T.container.find("img");for (var a = 0; a < T.imagesToLoad.length; a++) {
          T.loadImage(T.imagesToLoad[a], T.imagesToLoad[a].currentSrc || T.imagesToLoad[a].getAttribute("src"), T.imagesToLoad[a].srcset || T.imagesToLoad[a].getAttribute("srcset"), T.imagesToLoad[a].sizes || T.imagesToLoad[a].getAttribute("sizes"), !0, e);
        }
      }, T.autoplayTimeoutId = void 0, T.autoplaying = !1, T.autoplayPaused = !1, T.startAutoplay = function () {
        return void 0 === T.autoplayTimeoutId && !!T.params.autoplay && !T.autoplaying && (T.autoplaying = !0, T.emit("onAutoplayStart", T), void n());
      }, T.stopAutoplay = function (e) {
        T.autoplayTimeoutId && (T.autoplayTimeoutId && clearTimeout(T.autoplayTimeoutId), T.autoplaying = !1, T.autoplayTimeoutId = void 0, T.emit("onAutoplayStop", T));
      }, T.pauseAutoplay = function (e) {
        T.autoplayPaused || (T.autoplayTimeoutId && clearTimeout(T.autoplayTimeoutId), T.autoplayPaused = !0, 0 === e ? (T.autoplayPaused = !1, n()) : T.wrapper.transitionEnd(function () {
          T && (T.autoplayPaused = !1, T.autoplaying ? n() : T.stopAutoplay());
        }));
      }, T.minTranslate = function () {
        return -T.snapGrid[0];
      }, T.maxTranslate = function () {
        return -T.snapGrid[T.snapGrid.length - 1];
      }, T.updateAutoHeight = function () {
        var e,
            a = [],
            t = 0;if ("auto" !== T.params.slidesPerView && T.params.slidesPerView > 1) for (e = 0; e < Math.ceil(T.params.slidesPerView); e++) {
          var s = T.activeIndex + e;if (s > T.slides.length) break;a.push(T.slides.eq(s)[0]);
        } else a.push(T.slides.eq(T.activeIndex)[0]);for (e = 0; e < a.length; e++) {
          if (void 0 !== a[e]) {
            var i = a[e].offsetHeight;t = i > t ? i : t;
          }
        }t && T.wrapper.css("height", t + "px");
      }, T.updateContainerSize = function () {
        var e, a;e = void 0 !== T.params.width ? T.params.width : T.container[0].clientWidth, a = void 0 !== T.params.height ? T.params.height : T.container[0].clientHeight, 0 === e && T.isHorizontal() || 0 === a && !T.isHorizontal() || (e = e - parseInt(T.container.css("padding-left"), 10) - parseInt(T.container.css("padding-right"), 10), a = a - parseInt(T.container.css("padding-top"), 10) - parseInt(T.container.css("padding-bottom"), 10), T.width = e, T.height = a, T.size = T.isHorizontal() ? T.width : T.height);
      }, T.updateSlidesSize = function () {
        T.slides = T.wrapper.children("." + T.params.slideClass), T.snapGrid = [], T.slidesGrid = [], T.slidesSizesGrid = [];var e,
            a = T.params.spaceBetween,
            t = -T.params.slidesOffsetBefore,
            s = 0,
            i = 0;if (void 0 !== T.size) {
          "string" == typeof a && a.indexOf("%") >= 0 && (a = parseFloat(a.replace("%", "")) / 100 * T.size), T.virtualSize = -a, T.rtl ? T.slides.css({ marginLeft: "", marginTop: "" }) : T.slides.css({ marginRight: "", marginBottom: "" });var n;T.params.slidesPerColumn > 1 && (n = Math.floor(T.slides.length / T.params.slidesPerColumn) === T.slides.length / T.params.slidesPerColumn ? T.slides.length : Math.ceil(T.slides.length / T.params.slidesPerColumn) * T.params.slidesPerColumn, "auto" !== T.params.slidesPerView && "row" === T.params.slidesPerColumnFill && (n = Math.max(n, T.params.slidesPerView * T.params.slidesPerColumn)));var o,
              l = T.params.slidesPerColumn,
              p = n / l,
              d = p - (T.params.slidesPerColumn * p - T.slides.length);for (e = 0; e < T.slides.length; e++) {
            o = 0;var u = T.slides.eq(e);if (T.params.slidesPerColumn > 1) {
              var c, m, h;"column" === T.params.slidesPerColumnFill ? (m = Math.floor(e / l), h = e - m * l, (m > d || m === d && h === l - 1) && ++h >= l && (h = 0, m++), c = m + h * n / l, u.css({ "-webkit-box-ordinal-group": c, "-moz-box-ordinal-group": c, "-ms-flex-order": c, "-webkit-order": c, order: c })) : (h = Math.floor(e / p), m = e - h * p), u.css("margin-" + (T.isHorizontal() ? "top" : "left"), 0 !== h && T.params.spaceBetween && T.params.spaceBetween + "px").attr("data-swiper-column", m).attr("data-swiper-row", h);
            }"none" !== u.css("display") && ("auto" === T.params.slidesPerView ? (o = T.isHorizontal() ? u.outerWidth(!0) : u.outerHeight(!0), T.params.roundLengths && (o = r(o))) : (o = (T.size - (T.params.slidesPerView - 1) * a) / T.params.slidesPerView, T.params.roundLengths && (o = r(o)), T.isHorizontal() ? T.slides[e].style.width = o + "px" : T.slides[e].style.height = o + "px"), T.slides[e].swiperSlideSize = o, T.slidesSizesGrid.push(o), T.params.centeredSlides ? (t = t + o / 2 + s / 2 + a, 0 === s && 0 !== e && (t = t - T.size / 2 - a), 0 === e && (t = t - T.size / 2 - a), Math.abs(t) < .001 && (t = 0), i % T.params.slidesPerGroup == 0 && T.snapGrid.push(t), T.slidesGrid.push(t)) : (i % T.params.slidesPerGroup == 0 && T.snapGrid.push(t), T.slidesGrid.push(t), t = t + o + a), T.virtualSize += o + a, s = o, i++);
          }T.virtualSize = Math.max(T.virtualSize, T.size) + T.params.slidesOffsetAfter;var g;if (T.rtl && T.wrongRTL && ("slide" === T.params.effect || "coverflow" === T.params.effect) && T.wrapper.css({ width: T.virtualSize + T.params.spaceBetween + "px" }), T.support.flexbox && !T.params.setWrapperSize || (T.isHorizontal() ? T.wrapper.css({ width: T.virtualSize + T.params.spaceBetween + "px" }) : T.wrapper.css({ height: T.virtualSize + T.params.spaceBetween + "px" })), T.params.slidesPerColumn > 1 && (T.virtualSize = (o + T.params.spaceBetween) * n, T.virtualSize = Math.ceil(T.virtualSize / T.params.slidesPerColumn) - T.params.spaceBetween, T.isHorizontal() ? T.wrapper.css({ width: T.virtualSize + T.params.spaceBetween + "px" }) : T.wrapper.css({ height: T.virtualSize + T.params.spaceBetween + "px" }), T.params.centeredSlides)) {
            for (g = [], e = 0; e < T.snapGrid.length; e++) {
              T.snapGrid[e] < T.virtualSize + T.snapGrid[0] && g.push(T.snapGrid[e]);
            }T.snapGrid = g;
          }if (!T.params.centeredSlides) {
            for (g = [], e = 0; e < T.snapGrid.length; e++) {
              T.snapGrid[e] <= T.virtualSize - T.size && g.push(T.snapGrid[e]);
            }T.snapGrid = g, Math.floor(T.virtualSize - T.size) - Math.floor(T.snapGrid[T.snapGrid.length - 1]) > 1 && T.snapGrid.push(T.virtualSize - T.size);
          }0 === T.snapGrid.length && (T.snapGrid = [0]), 0 !== T.params.spaceBetween && (T.isHorizontal() ? T.rtl ? T.slides.css({ marginLeft: a + "px" }) : T.slides.css({ marginRight: a + "px" }) : T.slides.css({ marginBottom: a + "px" })), T.params.watchSlidesProgress && T.updateSlidesOffset();
        }
      }, T.updateSlidesOffset = function () {
        for (var e = 0; e < T.slides.length; e++) {
          T.slides[e].swiperSlideOffset = T.isHorizontal() ? T.slides[e].offsetLeft : T.slides[e].offsetTop;
        }
      }, T.currentSlidesPerView = function () {
        var e,
            a,
            t = 1;if (T.params.centeredSlides) {
          var s,
              i = T.slides[T.activeIndex].swiperSlideSize;for (e = T.activeIndex + 1; e < T.slides.length; e++) {
            T.slides[e] && !s && (i += T.slides[e].swiperSlideSize, t++, i > T.size && (s = !0));
          }for (a = T.activeIndex - 1; a >= 0; a--) {
            T.slides[a] && !s && (i += T.slides[a].swiperSlideSize, t++, i > T.size && (s = !0));
          }
        } else for (e = T.activeIndex + 1; e < T.slides.length; e++) {
          T.slidesGrid[e] - T.slidesGrid[T.activeIndex] < T.size && t++;
        }return t;
      }, T.updateSlidesProgress = function (e) {
        if (void 0 === e && (e = T.translate || 0), 0 !== T.slides.length) {
          void 0 === T.slides[0].swiperSlideOffset && T.updateSlidesOffset();var a = -e;T.rtl && (a = e), T.slides.removeClass(T.params.slideVisibleClass);for (var t = 0; t < T.slides.length; t++) {
            var s = T.slides[t],
                i = (a + (T.params.centeredSlides ? T.minTranslate() : 0) - s.swiperSlideOffset) / (s.swiperSlideSize + T.params.spaceBetween);if (T.params.watchSlidesVisibility) {
              var r = -(a - s.swiperSlideOffset),
                  n = r + T.slidesSizesGrid[t];(r >= 0 && r < T.size || n > 0 && n <= T.size || r <= 0 && n >= T.size) && T.slides.eq(t).addClass(T.params.slideVisibleClass);
            }s.progress = T.rtl ? -i : i;
          }
        }
      }, T.updateProgress = function (e) {
        void 0 === e && (e = T.translate || 0);var a = T.maxTranslate() - T.minTranslate(),
            t = T.isBeginning,
            s = T.isEnd;0 === a ? (T.progress = 0, T.isBeginning = T.isEnd = !0) : (T.progress = (e - T.minTranslate()) / a, T.isBeginning = T.progress <= 0, T.isEnd = T.progress >= 1), T.isBeginning && !t && T.emit("onReachBeginning", T), T.isEnd && !s && T.emit("onReachEnd", T), T.params.watchSlidesProgress && T.updateSlidesProgress(e), T.emit("onProgress", T, T.progress);
      }, T.updateActiveIndex = function () {
        var e,
            a,
            t,
            s = T.rtl ? T.translate : -T.translate;for (a = 0; a < T.slidesGrid.length; a++) {
          void 0 !== T.slidesGrid[a + 1] ? s >= T.slidesGrid[a] && s < T.slidesGrid[a + 1] - (T.slidesGrid[a + 1] - T.slidesGrid[a]) / 2 ? e = a : s >= T.slidesGrid[a] && s < T.slidesGrid[a + 1] && (e = a + 1) : s >= T.slidesGrid[a] && (e = a);
        }T.params.normalizeSlideIndex && (e < 0 || void 0 === e) && (e = 0), t = Math.floor(e / T.params.slidesPerGroup), t >= T.snapGrid.length && (t = T.snapGrid.length - 1), e !== T.activeIndex && (T.snapIndex = t, T.previousIndex = T.activeIndex, T.activeIndex = e, T.updateClasses(), T.updateRealIndex());
      }, T.updateRealIndex = function () {
        T.realIndex = parseInt(T.slides.eq(T.activeIndex).attr("data-swiper-slide-index") || T.activeIndex, 10);
      }, T.updateClasses = function () {
        T.slides.removeClass(T.params.slideActiveClass + " " + T.params.slideNextClass + " " + T.params.slidePrevClass + " " + T.params.slideDuplicateActiveClass + " " + T.params.slideDuplicateNextClass + " " + T.params.slideDuplicatePrevClass);var a = T.slides.eq(T.activeIndex);a.addClass(T.params.slideActiveClass), i.loop && (a.hasClass(T.params.slideDuplicateClass) ? T.wrapper.children("." + T.params.slideClass + ":not(." + T.params.slideDuplicateClass + ')[data-swiper-slide-index="' + T.realIndex + '"]').addClass(T.params.slideDuplicateActiveClass) : T.wrapper.children("." + T.params.slideClass + "." + T.params.slideDuplicateClass + '[data-swiper-slide-index="' + T.realIndex + '"]').addClass(T.params.slideDuplicateActiveClass));var t = a.next("." + T.params.slideClass).addClass(T.params.slideNextClass);T.params.loop && 0 === t.length && (t = T.slides.eq(0), t.addClass(T.params.slideNextClass));var s = a.prev("." + T.params.slideClass).addClass(T.params.slidePrevClass);if (T.params.loop && 0 === s.length && (s = T.slides.eq(-1), s.addClass(T.params.slidePrevClass)), i.loop && (t.hasClass(T.params.slideDuplicateClass) ? T.wrapper.children("." + T.params.slideClass + ":not(." + T.params.slideDuplicateClass + ')[data-swiper-slide-index="' + t.attr("data-swiper-slide-index") + '"]').addClass(T.params.slideDuplicateNextClass) : T.wrapper.children("." + T.params.slideClass + "." + T.params.slideDuplicateClass + '[data-swiper-slide-index="' + t.attr("data-swiper-slide-index") + '"]').addClass(T.params.slideDuplicateNextClass), s.hasClass(T.params.slideDuplicateClass) ? T.wrapper.children("." + T.params.slideClass + ":not(." + T.params.slideDuplicateClass + ')[data-swiper-slide-index="' + s.attr("data-swiper-slide-index") + '"]').addClass(T.params.slideDuplicatePrevClass) : T.wrapper.children("." + T.params.slideClass + "." + T.params.slideDuplicateClass + '[data-swiper-slide-index="' + s.attr("data-swiper-slide-index") + '"]').addClass(T.params.slideDuplicatePrevClass)), T.paginationContainer && T.paginationContainer.length > 0) {
          var r,
              n = T.params.loop ? Math.ceil((T.slides.length - 2 * T.loopedSlides) / T.params.slidesPerGroup) : T.snapGrid.length;if (T.params.loop ? (r = Math.ceil((T.activeIndex - T.loopedSlides) / T.params.slidesPerGroup), r > T.slides.length - 1 - 2 * T.loopedSlides && (r -= T.slides.length - 2 * T.loopedSlides), r > n - 1 && (r -= n), r < 0 && "bullets" !== T.params.paginationType && (r = n + r)) : r = void 0 !== T.snapIndex ? T.snapIndex : T.activeIndex || 0, "bullets" === T.params.paginationType && T.bullets && T.bullets.length > 0 && (T.bullets.removeClass(T.params.bulletActiveClass), T.paginationContainer.length > 1 ? T.bullets.each(function () {
            e(this).index() === r && e(this).addClass(T.params.bulletActiveClass);
          }) : T.bullets.eq(r).addClass(T.params.bulletActiveClass)), "fraction" === T.params.paginationType && (T.paginationContainer.find("." + T.params.paginationCurrentClass).text(r + 1), T.paginationContainer.find("." + T.params.paginationTotalClass).text(n)), "progress" === T.params.paginationType) {
            var o = (r + 1) / n,
                l = o,
                p = 1;T.isHorizontal() || (p = o, l = 1), T.paginationContainer.find("." + T.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + l + ") scaleY(" + p + ")").transition(T.params.speed);
          }"custom" === T.params.paginationType && T.params.paginationCustomRender && (T.paginationContainer.html(T.params.paginationCustomRender(T, r + 1, n)), T.emit("onPaginationRendered", T, T.paginationContainer[0]));
        }T.params.loop || (T.params.prevButton && T.prevButton && T.prevButton.length > 0 && (T.isBeginning ? (T.prevButton.addClass(T.params.buttonDisabledClass), T.params.a11y && T.a11y && T.a11y.disable(T.prevButton)) : (T.prevButton.removeClass(T.params.buttonDisabledClass), T.params.a11y && T.a11y && T.a11y.enable(T.prevButton))), T.params.nextButton && T.nextButton && T.nextButton.length > 0 && (T.isEnd ? (T.nextButton.addClass(T.params.buttonDisabledClass), T.params.a11y && T.a11y && T.a11y.disable(T.nextButton)) : (T.nextButton.removeClass(T.params.buttonDisabledClass), T.params.a11y && T.a11y && T.a11y.enable(T.nextButton))));
      }, T.updatePagination = function () {
        if (T.params.pagination && T.paginationContainer && T.paginationContainer.length > 0) {
          var e = "";if ("bullets" === T.params.paginationType) {
            for (var a = T.params.loop ? Math.ceil((T.slides.length - 2 * T.loopedSlides) / T.params.slidesPerGroup) : T.snapGrid.length, t = 0; t < a; t++) {
              e += T.params.paginationBulletRender ? T.params.paginationBulletRender(T, t, T.params.bulletClass) : "<" + T.params.paginationElement + ' class="' + T.params.bulletClass + '"></' + T.params.paginationElement + ">";
            }T.paginationContainer.html(e), T.bullets = T.paginationContainer.find("." + T.params.bulletClass), T.params.paginationClickable && T.params.a11y && T.a11y && T.a11y.initPagination();
          }"fraction" === T.params.paginationType && (e = T.params.paginationFractionRender ? T.params.paginationFractionRender(T, T.params.paginationCurrentClass, T.params.paginationTotalClass) : '<span class="' + T.params.paginationCurrentClass + '"></span> / <span class="' + T.params.paginationTotalClass + '"></span>', T.paginationContainer.html(e)), "progress" === T.params.paginationType && (e = T.params.paginationProgressRender ? T.params.paginationProgressRender(T, T.params.paginationProgressbarClass) : '<span class="' + T.params.paginationProgressbarClass + '"></span>', T.paginationContainer.html(e)), "custom" !== T.params.paginationType && T.emit("onPaginationRendered", T, T.paginationContainer[0]);
        }
      }, T.update = function (e) {
        function a() {
          T.rtl, T.translate;t = Math.min(Math.max(T.translate, T.maxTranslate()), T.minTranslate()), T.setWrapperTranslate(t), T.updateActiveIndex(), T.updateClasses();
        }if (T) {
          T.updateContainerSize(), T.updateSlidesSize(), T.updateProgress(), T.updatePagination(), T.updateClasses(), T.params.scrollbar && T.scrollbar && T.scrollbar.set();var t;if (e) {
            T.controller && T.controller.spline && (T.controller.spline = void 0), T.params.freeMode ? (a(), T.params.autoHeight && T.updateAutoHeight()) : (("auto" === T.params.slidesPerView || T.params.slidesPerView > 1) && T.isEnd && !T.params.centeredSlides ? T.slideTo(T.slides.length - 1, 0, !1, !0) : T.slideTo(T.activeIndex, 0, !1, !0)) || a();
          } else T.params.autoHeight && T.updateAutoHeight();
        }
      }, T.onResize = function (e) {
        T.params.onBeforeResize && T.params.onBeforeResize(T), T.params.breakpoints && T.setBreakpoint();var a = T.params.allowSwipeToPrev,
            t = T.params.allowSwipeToNext;T.params.allowSwipeToPrev = T.params.allowSwipeToNext = !0, T.updateContainerSize(), T.updateSlidesSize(), ("auto" === T.params.slidesPerView || T.params.freeMode || e) && T.updatePagination(), T.params.scrollbar && T.scrollbar && T.scrollbar.set(), T.controller && T.controller.spline && (T.controller.spline = void 0);var s = !1;if (T.params.freeMode) {
          var i = Math.min(Math.max(T.translate, T.maxTranslate()), T.minTranslate());T.setWrapperTranslate(i), T.updateActiveIndex(), T.updateClasses(), T.params.autoHeight && T.updateAutoHeight();
        } else T.updateClasses(), s = ("auto" === T.params.slidesPerView || T.params.slidesPerView > 1) && T.isEnd && !T.params.centeredSlides ? T.slideTo(T.slides.length - 1, 0, !1, !0) : T.slideTo(T.activeIndex, 0, !1, !0);T.params.lazyLoading && !s && T.lazy && T.lazy.load(), T.params.allowSwipeToPrev = a, T.params.allowSwipeToNext = t, T.params.onAfterResize && T.params.onAfterResize(T);
      }, T.touchEventsDesktop = { start: "mousedown", move: "mousemove", end: "mouseup" }, window.navigator.pointerEnabled ? T.touchEventsDesktop = { start: "pointerdown", move: "pointermove", end: "pointerup" } : window.navigator.msPointerEnabled && (T.touchEventsDesktop = { start: "MSPointerDown", move: "MSPointerMove", end: "MSPointerUp" }), T.touchEvents = { start: T.support.touch || !T.params.simulateTouch ? "touchstart" : T.touchEventsDesktop.start, move: T.support.touch || !T.params.simulateTouch ? "touchmove" : T.touchEventsDesktop.move, end: T.support.touch || !T.params.simulateTouch ? "touchend" : T.touchEventsDesktop.end }, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === T.params.touchEventsTarget ? T.container : T.wrapper).addClass("swiper-wp8-" + T.params.direction), T.initEvents = function (e) {
        var a = e ? "off" : "on",
            t = e ? "removeEventListener" : "addEventListener",
            s = "container" === T.params.touchEventsTarget ? T.container[0] : T.wrapper[0],
            r = T.support.touch ? s : document,
            n = !!T.params.nested;if (T.browser.ie) s[t](T.touchEvents.start, T.onTouchStart, !1), r[t](T.touchEvents.move, T.onTouchMove, n), r[t](T.touchEvents.end, T.onTouchEnd, !1);else {
          if (T.support.touch) {
            var o = !("touchstart" !== T.touchEvents.start || !T.support.passiveListener || !T.params.passiveListeners) && { passive: !0, capture: !1 };s[t](T.touchEvents.start, T.onTouchStart, o), s[t](T.touchEvents.move, T.onTouchMove, n), s[t](T.touchEvents.end, T.onTouchEnd, o);
          }(i.simulateTouch && !T.device.ios && !T.device.android || i.simulateTouch && !T.support.touch && T.device.ios) && (s[t]("mousedown", T.onTouchStart, !1), document[t]("mousemove", T.onTouchMove, n), document[t]("mouseup", T.onTouchEnd, !1));
        }window[t]("resize", T.onResize), T.params.nextButton && T.nextButton && T.nextButton.length > 0 && (T.nextButton[a]("click", T.onClickNext), T.params.a11y && T.a11y && T.nextButton[a]("keydown", T.a11y.onEnterKey)), T.params.prevButton && T.prevButton && T.prevButton.length > 0 && (T.prevButton[a]("click", T.onClickPrev), T.params.a11y && T.a11y && T.prevButton[a]("keydown", T.a11y.onEnterKey)), T.params.pagination && T.params.paginationClickable && (T.paginationContainer[a]("click", "." + T.params.bulletClass, T.onClickIndex), T.params.a11y && T.a11y && T.paginationContainer[a]("keydown", "." + T.params.bulletClass, T.a11y.onEnterKey)), (T.params.preventClicks || T.params.preventClicksPropagation) && s[t]("click", T.preventClicks, !0);
      }, T.attachEvents = function () {
        T.initEvents();
      }, T.detachEvents = function () {
        T.initEvents(!0);
      }, T.allowClick = !0, T.preventClicks = function (e) {
        T.allowClick || (T.params.preventClicks && e.preventDefault(), T.params.preventClicksPropagation && T.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
      }, T.onClickNext = function (e) {
        e.preventDefault(), T.isEnd && !T.params.loop || T.slideNext();
      }, T.onClickPrev = function (e) {
        e.preventDefault(), T.isBeginning && !T.params.loop || T.slidePrev();
      }, T.onClickIndex = function (a) {
        a.preventDefault();var t = e(this).index() * T.params.slidesPerGroup;T.params.loop && (t += T.loopedSlides), T.slideTo(t);
      }, T.updateClickedSlide = function (a) {
        var t = o(a, "." + T.params.slideClass),
            s = !1;if (t) for (var i = 0; i < T.slides.length; i++) {
          T.slides[i] === t && (s = !0);
        }if (!t || !s) return T.clickedSlide = void 0, void (T.clickedIndex = void 0);if (T.clickedSlide = t, T.clickedIndex = e(t).index(), T.params.slideToClickedSlide && void 0 !== T.clickedIndex && T.clickedIndex !== T.activeIndex) {
          var r,
              n = T.clickedIndex,
              l = "auto" === T.params.slidesPerView ? T.currentSlidesPerView() : T.params.slidesPerView;if (T.params.loop) {
            if (T.animating) return;r = parseInt(e(T.clickedSlide).attr("data-swiper-slide-index"), 10), T.params.centeredSlides ? n < T.loopedSlides - l / 2 || n > T.slides.length - T.loopedSlides + l / 2 ? (T.fixLoop(), n = T.wrapper.children("." + T.params.slideClass + '[data-swiper-slide-index="' + r + '"]:not(.' + T.params.slideDuplicateClass + ")").eq(0).index(), setTimeout(function () {
              T.slideTo(n);
            }, 0)) : T.slideTo(n) : n > T.slides.length - l ? (T.fixLoop(), n = T.wrapper.children("." + T.params.slideClass + '[data-swiper-slide-index="' + r + '"]:not(.' + T.params.slideDuplicateClass + ")").eq(0).index(), setTimeout(function () {
              T.slideTo(n);
            }, 0)) : T.slideTo(n);
          } else T.slideTo(n);
        }
      };var S,
          C,
          z,
          M,
          E,
          P,
          I,
          k,
          L,
          D,
          B = "input, select, textarea, button, video",
          H = Date.now(),
          G = [];T.animating = !1, T.touches = { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 };var X, A;T.onTouchStart = function (a) {
        if (a.originalEvent && (a = a.originalEvent), (X = "touchstart" === a.type) || !("which" in a) || 3 !== a.which) {
          if (T.params.noSwiping && o(a, "." + T.params.noSwipingClass)) return void (T.allowClick = !0);if (!T.params.swipeHandler || o(a, T.params.swipeHandler)) {
            var t = T.touches.currentX = "touchstart" === a.type ? a.targetTouches[0].pageX : a.pageX,
                s = T.touches.currentY = "touchstart" === a.type ? a.targetTouches[0].pageY : a.pageY;if (!(T.device.ios && T.params.iOSEdgeSwipeDetection && t <= T.params.iOSEdgeSwipeThreshold)) {
              if (S = !0, C = !1, z = !0, E = void 0, A = void 0, T.touches.startX = t, T.touches.startY = s, M = Date.now(), T.allowClick = !0, T.updateContainerSize(), T.swipeDirection = void 0, T.params.threshold > 0 && (k = !1), "touchstart" !== a.type) {
                var i = !0;e(a.target).is(B) && (i = !1), document.activeElement && e(document.activeElement).is(B) && document.activeElement.blur(), i && a.preventDefault();
              }T.emit("onTouchStart", T, a);
            }
          }
        }
      }, T.onTouchMove = function (a) {
        if (a.originalEvent && (a = a.originalEvent), !X || "mousemove" !== a.type) {
          if (a.preventedByNestedSwiper) return T.touches.startX = "touchmove" === a.type ? a.targetTouches[0].pageX : a.pageX, void (T.touches.startY = "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY);if (T.params.onlyExternal) return T.allowClick = !1, void (S && (T.touches.startX = T.touches.currentX = "touchmove" === a.type ? a.targetTouches[0].pageX : a.pageX, T.touches.startY = T.touches.currentY = "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY, M = Date.now()));if (X && T.params.touchReleaseOnEdges && !T.params.loop) if (T.isHorizontal()) {
            if (T.touches.currentX < T.touches.startX && T.translate <= T.maxTranslate() || T.touches.currentX > T.touches.startX && T.translate >= T.minTranslate()) return;
          } else if (T.touches.currentY < T.touches.startY && T.translate <= T.maxTranslate() || T.touches.currentY > T.touches.startY && T.translate >= T.minTranslate()) return;if (X && document.activeElement && a.target === document.activeElement && e(a.target).is(B)) return C = !0, void (T.allowClick = !1);if (z && T.emit("onTouchMove", T, a), !(a.targetTouches && a.targetTouches.length > 1)) {
            if (T.touches.currentX = "touchmove" === a.type ? a.targetTouches[0].pageX : a.pageX, T.touches.currentY = "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY, void 0 === E) {
              var t;T.isHorizontal() && T.touches.currentY === T.touches.startY || !T.isHorizontal() && T.touches.currentX === T.touches.startX ? E = !1 : (t = 180 * Math.atan2(Math.abs(T.touches.currentY - T.touches.startY), Math.abs(T.touches.currentX - T.touches.startX)) / Math.PI, E = T.isHorizontal() ? t > T.params.touchAngle : 90 - t > T.params.touchAngle);
            }if (E && T.emit("onTouchMoveOpposite", T, a), void 0 === A && (T.touches.currentX === T.touches.startX && T.touches.currentY === T.touches.startY || (A = !0)), S) {
              if (E) return void (S = !1);if (A) {
                T.allowClick = !1, T.emit("onSliderMove", T, a), a.preventDefault(), T.params.touchMoveStopPropagation && !T.params.nested && a.stopPropagation(), C || (i.loop && T.fixLoop(), I = T.getWrapperTranslate(), T.setWrapperTransition(0), T.animating && T.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), T.params.autoplay && T.autoplaying && (T.params.autoplayDisableOnInteraction ? T.stopAutoplay() : T.pauseAutoplay()), D = !1, !T.params.grabCursor || T.params.allowSwipeToNext !== !0 && T.params.allowSwipeToPrev !== !0 || T.setGrabCursor(!0)), C = !0;var s = T.touches.diff = T.isHorizontal() ? T.touches.currentX - T.touches.startX : T.touches.currentY - T.touches.startY;s *= T.params.touchRatio, T.rtl && (s = -s), T.swipeDirection = s > 0 ? "prev" : "next", P = s + I;var r = !0;if (s > 0 && P > T.minTranslate() ? (r = !1, T.params.resistance && (P = T.minTranslate() - 1 + Math.pow(-T.minTranslate() + I + s, T.params.resistanceRatio))) : s < 0 && P < T.maxTranslate() && (r = !1, T.params.resistance && (P = T.maxTranslate() + 1 - Math.pow(T.maxTranslate() - I - s, T.params.resistanceRatio))), r && (a.preventedByNestedSwiper = !0), !T.params.allowSwipeToNext && "next" === T.swipeDirection && P < I && (P = I), !T.params.allowSwipeToPrev && "prev" === T.swipeDirection && P > I && (P = I), T.params.threshold > 0) {
                  if (!(Math.abs(s) > T.params.threshold || k)) return void (P = I);if (!k) return k = !0, T.touches.startX = T.touches.currentX, T.touches.startY = T.touches.currentY, P = I, void (T.touches.diff = T.isHorizontal() ? T.touches.currentX - T.touches.startX : T.touches.currentY - T.touches.startY);
                }T.params.followFinger && ((T.params.freeMode || T.params.watchSlidesProgress) && T.updateActiveIndex(), T.params.freeMode && (0 === G.length && G.push({ position: T.touches[T.isHorizontal() ? "startX" : "startY"], time: M }), G.push({ position: T.touches[T.isHorizontal() ? "currentX" : "currentY"], time: new window.Date().getTime() })), T.updateProgress(P), T.setWrapperTranslate(P));
              }
            }
          }
        }
      }, T.onTouchEnd = function (a) {
        if (a.originalEvent && (a = a.originalEvent), z && T.emit("onTouchEnd", T, a), z = !1, S) {
          T.params.grabCursor && C && S && (T.params.allowSwipeToNext === !0 || T.params.allowSwipeToPrev === !0) && T.setGrabCursor(!1);var t = Date.now(),
              s = t - M;if (T.allowClick && (T.updateClickedSlide(a), T.emit("onTap", T, a), s < 300 && t - H > 300 && (L && clearTimeout(L), L = setTimeout(function () {
            T && (T.params.paginationHide && T.paginationContainer.length > 0 && !e(a.target).hasClass(T.params.bulletClass) && T.paginationContainer.toggleClass(T.params.paginationHiddenClass), T.emit("onClick", T, a));
          }, 300)), s < 300 && t - H < 300 && (L && clearTimeout(L), T.emit("onDoubleTap", T, a))), H = Date.now(), setTimeout(function () {
            T && (T.allowClick = !0);
          }, 0), !S || !C || !T.swipeDirection || 0 === T.touches.diff || P === I) return void (S = C = !1);S = C = !1;var i;if (i = T.params.followFinger ? T.rtl ? T.translate : -T.translate : -P, T.params.freeMode) {
            if (i < -T.minTranslate()) return void T.slideTo(T.activeIndex);if (i > -T.maxTranslate()) return void (T.slides.length < T.snapGrid.length ? T.slideTo(T.snapGrid.length - 1) : T.slideTo(T.slides.length - 1));if (T.params.freeModeMomentum) {
              if (G.length > 1) {
                var r = G.pop(),
                    n = G.pop(),
                    o = r.position - n.position,
                    l = r.time - n.time;T.velocity = o / l, T.velocity = T.velocity / 2, Math.abs(T.velocity) < T.params.freeModeMinimumVelocity && (T.velocity = 0), (l > 150 || new window.Date().getTime() - r.time > 300) && (T.velocity = 0);
              } else T.velocity = 0;T.velocity = T.velocity * T.params.freeModeMomentumVelocityRatio, G.length = 0;var p = 1e3 * T.params.freeModeMomentumRatio,
                  d = T.velocity * p,
                  u = T.translate + d;T.rtl && (u = -u);var c,
                  m = !1,
                  h = 20 * Math.abs(T.velocity) * T.params.freeModeMomentumBounceRatio;if (u < T.maxTranslate()) T.params.freeModeMomentumBounce ? (u + T.maxTranslate() < -h && (u = T.maxTranslate() - h), c = T.maxTranslate(), m = !0, D = !0) : u = T.maxTranslate();else if (u > T.minTranslate()) T.params.freeModeMomentumBounce ? (u - T.minTranslate() > h && (u = T.minTranslate() + h), c = T.minTranslate(), m = !0, D = !0) : u = T.minTranslate();else if (T.params.freeModeSticky) {
                var g,
                    f = 0;for (f = 0; f < T.snapGrid.length; f += 1) {
                  if (T.snapGrid[f] > -u) {
                    g = f;break;
                  }
                }u = Math.abs(T.snapGrid[g] - u) < Math.abs(T.snapGrid[g - 1] - u) || "next" === T.swipeDirection ? T.snapGrid[g] : T.snapGrid[g - 1], T.rtl || (u = -u);
              }if (0 !== T.velocity) p = T.rtl ? Math.abs((-u - T.translate) / T.velocity) : Math.abs((u - T.translate) / T.velocity);else if (T.params.freeModeSticky) return void T.slideReset();T.params.freeModeMomentumBounce && m ? (T.updateProgress(c), T.setWrapperTransition(p), T.setWrapperTranslate(u), T.onTransitionStart(), T.animating = !0, T.wrapper.transitionEnd(function () {
                T && D && (T.emit("onMomentumBounce", T), T.setWrapperTransition(T.params.speed), T.setWrapperTranslate(c), T.wrapper.transitionEnd(function () {
                  T && T.onTransitionEnd();
                }));
              })) : T.velocity ? (T.updateProgress(u), T.setWrapperTransition(p), T.setWrapperTranslate(u), T.onTransitionStart(), T.animating || (T.animating = !0, T.wrapper.transitionEnd(function () {
                T && T.onTransitionEnd();
              }))) : T.updateProgress(u), T.updateActiveIndex();
            }return void ((!T.params.freeModeMomentum || s >= T.params.longSwipesMs) && (T.updateProgress(), T.updateActiveIndex()));
          }var v,
              w = 0,
              y = T.slidesSizesGrid[0];for (v = 0; v < T.slidesGrid.length; v += T.params.slidesPerGroup) {
            void 0 !== T.slidesGrid[v + T.params.slidesPerGroup] ? i >= T.slidesGrid[v] && i < T.slidesGrid[v + T.params.slidesPerGroup] && (w = v, y = T.slidesGrid[v + T.params.slidesPerGroup] - T.slidesGrid[v]) : i >= T.slidesGrid[v] && (w = v, y = T.slidesGrid[T.slidesGrid.length - 1] - T.slidesGrid[T.slidesGrid.length - 2]);
          }var x = (i - T.slidesGrid[w]) / y;if (s > T.params.longSwipesMs) {
            if (!T.params.longSwipes) return void T.slideTo(T.activeIndex);"next" === T.swipeDirection && (x >= T.params.longSwipesRatio ? T.slideTo(w + T.params.slidesPerGroup) : T.slideTo(w)), "prev" === T.swipeDirection && (x > 1 - T.params.longSwipesRatio ? T.slideTo(w + T.params.slidesPerGroup) : T.slideTo(w));
          } else {
            if (!T.params.shortSwipes) return void T.slideTo(T.activeIndex);"next" === T.swipeDirection && T.slideTo(w + T.params.slidesPerGroup), "prev" === T.swipeDirection && T.slideTo(w);
          }
        }
      }, T._slideTo = function (e, a) {
        return T.slideTo(e, a, !0, !0);
      }, T.slideTo = function (e, a, t, s) {
        void 0 === t && (t = !0), void 0 === e && (e = 0), e < 0 && (e = 0), T.snapIndex = Math.floor(e / T.params.slidesPerGroup), T.snapIndex >= T.snapGrid.length && (T.snapIndex = T.snapGrid.length - 1);var i = -T.snapGrid[T.snapIndex];if (T.params.autoplay && T.autoplaying && (s || !T.params.autoplayDisableOnInteraction ? T.pauseAutoplay(a) : T.stopAutoplay()), T.updateProgress(i), T.params.normalizeSlideIndex) for (var r = 0; r < T.slidesGrid.length; r++) {
          -Math.floor(100 * i) >= Math.floor(100 * T.slidesGrid[r]) && (e = r);
        }return !(!T.params.allowSwipeToNext && i < T.translate && i < T.minTranslate()) && !(!T.params.allowSwipeToPrev && i > T.translate && i > T.maxTranslate() && (T.activeIndex || 0) !== e) && (void 0 === a && (a = T.params.speed), T.previousIndex = T.activeIndex || 0, T.activeIndex = e, T.updateRealIndex(), T.rtl && -i === T.translate || !T.rtl && i === T.translate ? (T.params.autoHeight && T.updateAutoHeight(), T.updateClasses(), "slide" !== T.params.effect && T.setWrapperTranslate(i), !1) : (T.updateClasses(), T.onTransitionStart(t), 0 === a || T.browser.lteIE9 ? (T.setWrapperTranslate(i), T.setWrapperTransition(0), T.onTransitionEnd(t)) : (T.setWrapperTranslate(i), T.setWrapperTransition(a), T.animating || (T.animating = !0, T.wrapper.transitionEnd(function () {
          T && T.onTransitionEnd(t);
        }))), !0));
      }, T.onTransitionStart = function (e) {
        void 0 === e && (e = !0), T.params.autoHeight && T.updateAutoHeight(), T.lazy && T.lazy.onTransitionStart(), e && (T.emit("onTransitionStart", T), T.activeIndex !== T.previousIndex && (T.emit("onSlideChangeStart", T), T.activeIndex > T.previousIndex ? T.emit("onSlideNextStart", T) : T.emit("onSlidePrevStart", T)));
      }, T.onTransitionEnd = function (e) {
        T.animating = !1, T.setWrapperTransition(0), void 0 === e && (e = !0), T.lazy && T.lazy.onTransitionEnd(), e && (T.emit("onTransitionEnd", T), T.activeIndex !== T.previousIndex && (T.emit("onSlideChangeEnd", T), T.activeIndex > T.previousIndex ? T.emit("onSlideNextEnd", T) : T.emit("onSlidePrevEnd", T))), T.params.history && T.history && T.history.setHistory(T.params.history, T.activeIndex), T.params.hashnav && T.hashnav && T.hashnav.setHash();
      }, T.slideNext = function (e, a, t) {
        if (T.params.loop) {
          if (T.animating) return !1;T.fixLoop();T.container[0].clientLeft;return T.slideTo(T.activeIndex + T.params.slidesPerGroup, a, e, t);
        }return T.slideTo(T.activeIndex + T.params.slidesPerGroup, a, e, t);
      }, T._slideNext = function (e) {
        return T.slideNext(!0, e, !0);
      }, T.slidePrev = function (e, a, t) {
        if (T.params.loop) {
          if (T.animating) return !1;T.fixLoop();T.container[0].clientLeft;return T.slideTo(T.activeIndex - 1, a, e, t);
        }return T.slideTo(T.activeIndex - 1, a, e, t);
      }, T._slidePrev = function (e) {
        return T.slidePrev(!0, e, !0);
      }, T.slideReset = function (e, a, t) {
        return T.slideTo(T.activeIndex, a, e);
      }, T.disableTouchControl = function () {
        return T.params.onlyExternal = !0, !0;
      }, T.enableTouchControl = function () {
        return T.params.onlyExternal = !1, !0;
      }, T.setWrapperTransition = function (e, a) {
        T.wrapper.transition(e), "slide" !== T.params.effect && T.effects[T.params.effect] && T.effects[T.params.effect].setTransition(e), T.params.parallax && T.parallax && T.parallax.setTransition(e), T.params.scrollbar && T.scrollbar && T.scrollbar.setTransition(e), T.params.control && T.controller && T.controller.setTransition(e, a), T.emit("onSetTransition", T, e);
      }, T.setWrapperTranslate = function (e, a, t) {
        var s = 0,
            i = 0;T.isHorizontal() ? s = T.rtl ? -e : e : i = e, T.params.roundLengths && (s = r(s), i = r(i)), T.params.virtualTranslate || (T.support.transforms3d ? T.wrapper.transform("translate3d(" + s + "px, " + i + "px, 0px)") : T.wrapper.transform("translate(" + s + "px, " + i + "px)")), T.translate = T.isHorizontal() ? s : i;var n,
            o = T.maxTranslate() - T.minTranslate();n = 0 === o ? 0 : (e - T.minTranslate()) / o, n !== T.progress && T.updateProgress(e), a && T.updateActiveIndex(), "slide" !== T.params.effect && T.effects[T.params.effect] && T.effects[T.params.effect].setTranslate(T.translate), T.params.parallax && T.parallax && T.parallax.setTranslate(T.translate), T.params.scrollbar && T.scrollbar && T.scrollbar.setTranslate(T.translate), T.params.control && T.controller && T.controller.setTranslate(T.translate, t), T.emit("onSetTranslate", T, T.translate);
      }, T.getTranslate = function (e, a) {
        var t, s, i, r;return void 0 === a && (a = "x"), T.params.virtualTranslate ? T.rtl ? -T.translate : T.translate : (i = window.getComputedStyle(e, null), window.WebKitCSSMatrix ? (s = i.transform || i.webkitTransform, s.split(",").length > 6 && (s = s.split(", ").map(function (e) {
          return e.replace(",", ".");
        }).join(", ")), r = new window.WebKitCSSMatrix("none" === s ? "" : s)) : (r = i.MozTransform || i.OTransform || i.MsTransform || i.msTransform || i.transform || i.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), t = r.toString().split(",")), "x" === a && (s = window.WebKitCSSMatrix ? r.m41 : 16 === t.length ? parseFloat(t[12]) : parseFloat(t[4])), "y" === a && (s = window.WebKitCSSMatrix ? r.m42 : 16 === t.length ? parseFloat(t[13]) : parseFloat(t[5])), T.rtl && s && (s = -s), s || 0);
      }, T.getWrapperTranslate = function (e) {
        return void 0 === e && (e = T.isHorizontal() ? "x" : "y"), T.getTranslate(T.wrapper[0], e);
      }, T.observers = [], T.initObservers = function () {
        if (T.params.observeParents) for (var e = T.container.parents(), a = 0; a < e.length; a++) {
          l(e[a]);
        }l(T.container[0], { childList: !1 }), l(T.wrapper[0], { attributes: !1 });
      }, T.disconnectObservers = function () {
        for (var e = 0; e < T.observers.length; e++) {
          T.observers[e].disconnect();
        }T.observers = [];
      }, T.createLoop = function () {
        T.wrapper.children("." + T.params.slideClass + "." + T.params.slideDuplicateClass).remove();var a = T.wrapper.children("." + T.params.slideClass);"auto" !== T.params.slidesPerView || T.params.loopedSlides || (T.params.loopedSlides = a.length), T.loopedSlides = parseInt(T.params.loopedSlides || T.params.slidesPerView, 10), T.loopedSlides = T.loopedSlides + T.params.loopAdditionalSlides, T.loopedSlides > a.length && (T.loopedSlides = a.length);var t,
            s = [],
            i = [];for (a.each(function (t, r) {
          var n = e(this);t < T.loopedSlides && i.push(r), t < a.length && t >= a.length - T.loopedSlides && s.push(r), n.attr("data-swiper-slide-index", t);
        }), t = 0; t < i.length; t++) {
          T.wrapper.append(e(i[t].cloneNode(!0)).addClass(T.params.slideDuplicateClass));
        }for (t = s.length - 1; t >= 0; t--) {
          T.wrapper.prepend(e(s[t].cloneNode(!0)).addClass(T.params.slideDuplicateClass));
        }
      }, T.destroyLoop = function () {
        T.wrapper.children("." + T.params.slideClass + "." + T.params.slideDuplicateClass).remove(), T.slides.removeAttr("data-swiper-slide-index");
      }, T.reLoop = function (e) {
        var a = T.activeIndex - T.loopedSlides;T.destroyLoop(), T.createLoop(), T.updateSlidesSize(), e && T.slideTo(a + T.loopedSlides, 0, !1);
      }, T.fixLoop = function () {
        var e;T.activeIndex < T.loopedSlides ? (e = T.slides.length - 3 * T.loopedSlides + T.activeIndex, e += T.loopedSlides, T.slideTo(e, 0, !1, !0)) : ("auto" === T.params.slidesPerView && T.activeIndex >= 2 * T.loopedSlides || T.activeIndex > T.slides.length - 2 * T.params.slidesPerView) && (e = -T.slides.length + T.activeIndex + T.loopedSlides, e += T.loopedSlides, T.slideTo(e, 0, !1, !0));
      }, T.appendSlide = function (e) {
        if (T.params.loop && T.destroyLoop(), "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e.length) for (var a = 0; a < e.length; a++) {
          e[a] && T.wrapper.append(e[a]);
        } else T.wrapper.append(e);T.params.loop && T.createLoop(), T.params.observer && T.support.observer || T.update(!0);
      }, T.prependSlide = function (e) {
        T.params.loop && T.destroyLoop();var a = T.activeIndex + 1;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e.length) {
          for (var t = 0; t < e.length; t++) {
            e[t] && T.wrapper.prepend(e[t]);
          }a = T.activeIndex + e.length;
        } else T.wrapper.prepend(e);T.params.loop && T.createLoop(), T.params.observer && T.support.observer || T.update(!0), T.slideTo(a, 0, !1);
      }, T.removeSlide = function (e) {
        T.params.loop && (T.destroyLoop(), T.slides = T.wrapper.children("." + T.params.slideClass));var a,
            t = T.activeIndex;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e.length) {
          for (var s = 0; s < e.length; s++) {
            a = e[s], T.slides[a] && T.slides.eq(a).remove(), a < t && t--;
          }t = Math.max(t, 0);
        } else a = e, T.slides[a] && T.slides.eq(a).remove(), a < t && t--, t = Math.max(t, 0);T.params.loop && T.createLoop(), T.params.observer && T.support.observer || T.update(!0), T.params.loop ? T.slideTo(t + T.loopedSlides, 0, !1) : T.slideTo(t, 0, !1);
      }, T.removeAllSlides = function () {
        for (var e = [], a = 0; a < T.slides.length; a++) {
          e.push(a);
        }T.removeSlide(e);
      }, T.effects = { fade: { setTranslate: function setTranslate() {
            for (var e = 0; e < T.slides.length; e++) {
              var a = T.slides.eq(e),
                  t = a[0].swiperSlideOffset,
                  s = -t;T.params.virtualTranslate || (s -= T.translate);var i = 0;T.isHorizontal() || (i = s, s = 0);var r = T.params.fade.crossFade ? Math.max(1 - Math.abs(a[0].progress), 0) : 1 + Math.min(Math.max(a[0].progress, -1), 0);a.css({ opacity: r }).transform("translate3d(" + s + "px, " + i + "px, 0px)");
            }
          }, setTransition: function setTransition(e) {
            if (T.slides.transition(e), T.params.virtualTranslate && 0 !== e) {
              var a = !1;T.slides.transitionEnd(function () {
                if (!a && T) {
                  a = !0, T.animating = !1;for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], t = 0; t < e.length; t++) {
                    T.wrapper.trigger(e[t]);
                  }
                }
              });
            }
          } }, flip: { setTranslate: function setTranslate() {
            for (var a = 0; a < T.slides.length; a++) {
              var t = T.slides.eq(a),
                  s = t[0].progress;T.params.flip.limitRotation && (s = Math.max(Math.min(t[0].progress, 1), -1));var i = t[0].swiperSlideOffset,
                  r = -180 * s,
                  n = r,
                  o = 0,
                  l = -i,
                  p = 0;if (T.isHorizontal() ? T.rtl && (n = -n) : (p = l, l = 0, o = -n, n = 0), t[0].style.zIndex = -Math.abs(Math.round(s)) + T.slides.length, T.params.flip.slideShadows) {
                var d = T.isHorizontal() ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"),
                    u = T.isHorizontal() ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");0 === d.length && (d = e('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "left" : "top") + '"></div>'), t.append(d)), 0 === u.length && (u = e('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "right" : "bottom") + '"></div>'), t.append(u)), d.length && (d[0].style.opacity = Math.max(-s, 0)), u.length && (u[0].style.opacity = Math.max(s, 0));
              }t.transform("translate3d(" + l + "px, " + p + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)");
            }
          }, setTransition: function setTransition(a) {
            if (T.slides.transition(a).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(a), T.params.virtualTranslate && 0 !== a) {
              var t = !1;T.slides.eq(T.activeIndex).transitionEnd(function () {
                if (!t && T && e(this).hasClass(T.params.slideActiveClass)) {
                  t = !0, T.animating = !1;for (var a = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], s = 0; s < a.length; s++) {
                    T.wrapper.trigger(a[s]);
                  }
                }
              });
            }
          } }, cube: { setTranslate: function setTranslate() {
            var a,
                t = 0;T.params.cube.shadow && (T.isHorizontal() ? (a = T.wrapper.find(".swiper-cube-shadow"), 0 === a.length && (a = e('<div class="swiper-cube-shadow"></div>'), T.wrapper.append(a)), a.css({ height: T.width + "px" })) : (a = T.container.find(".swiper-cube-shadow"), 0 === a.length && (a = e('<div class="swiper-cube-shadow"></div>'), T.container.append(a))));for (var s = 0; s < T.slides.length; s++) {
              var i = T.slides.eq(s),
                  r = 90 * s,
                  n = Math.floor(r / 360);T.rtl && (r = -r, n = Math.floor(-r / 360));var o = Math.max(Math.min(i[0].progress, 1), -1),
                  l = 0,
                  p = 0,
                  d = 0;s % 4 == 0 ? (l = 4 * -n * T.size, d = 0) : (s - 1) % 4 == 0 ? (l = 0, d = 4 * -n * T.size) : (s - 2) % 4 == 0 ? (l = T.size + 4 * n * T.size, d = T.size) : (s - 3) % 4 == 0 && (l = -T.size, d = 3 * T.size + 4 * T.size * n), T.rtl && (l = -l), T.isHorizontal() || (p = l, l = 0);var u = "rotateX(" + (T.isHorizontal() ? 0 : -r) + "deg) rotateY(" + (T.isHorizontal() ? r : 0) + "deg) translate3d(" + l + "px, " + p + "px, " + d + "px)";if (o <= 1 && o > -1 && (t = 90 * s + 90 * o, T.rtl && (t = 90 * -s - 90 * o)), i.transform(u), T.params.cube.slideShadows) {
                var c = T.isHorizontal() ? i.find(".swiper-slide-shadow-left") : i.find(".swiper-slide-shadow-top"),
                    m = T.isHorizontal() ? i.find(".swiper-slide-shadow-right") : i.find(".swiper-slide-shadow-bottom");0 === c.length && (c = e('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "left" : "top") + '"></div>'), i.append(c)), 0 === m.length && (m = e('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "right" : "bottom") + '"></div>'), i.append(m)), c.length && (c[0].style.opacity = Math.max(-o, 0)), m.length && (m[0].style.opacity = Math.max(o, 0));
              }
            }if (T.wrapper.css({ "-webkit-transform-origin": "50% 50% -" + T.size / 2 + "px", "-moz-transform-origin": "50% 50% -" + T.size / 2 + "px", "-ms-transform-origin": "50% 50% -" + T.size / 2 + "px", "transform-origin": "50% 50% -" + T.size / 2 + "px" }), T.params.cube.shadow) if (T.isHorizontal()) a.transform("translate3d(0px, " + (T.width / 2 + T.params.cube.shadowOffset) + "px, " + -T.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + T.params.cube.shadowScale + ")");else {
              var h = Math.abs(t) - 90 * Math.floor(Math.abs(t) / 90),
                  g = 1.5 - (Math.sin(2 * h * Math.PI / 360) / 2 + Math.cos(2 * h * Math.PI / 360) / 2),
                  f = T.params.cube.shadowScale,
                  v = T.params.cube.shadowScale / g,
                  w = T.params.cube.shadowOffset;a.transform("scale3d(" + f + ", 1, " + v + ") translate3d(0px, " + (T.height / 2 + w) + "px, " + -T.height / 2 / v + "px) rotateX(-90deg)");
            }var y = T.isSafari || T.isUiWebView ? -T.size / 2 : 0;T.wrapper.transform("translate3d(0px,0," + y + "px) rotateX(" + (T.isHorizontal() ? 0 : t) + "deg) rotateY(" + (T.isHorizontal() ? -t : 0) + "deg)");
          }, setTransition: function setTransition(e) {
            T.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), T.params.cube.shadow && !T.isHorizontal() && T.container.find(".swiper-cube-shadow").transition(e);
          } }, coverflow: { setTranslate: function setTranslate() {
            for (var a = T.translate, t = T.isHorizontal() ? -a + T.width / 2 : -a + T.height / 2, s = T.isHorizontal() ? T.params.coverflow.rotate : -T.params.coverflow.rotate, i = T.params.coverflow.depth, r = 0, n = T.slides.length; r < n; r++) {
              var o = T.slides.eq(r),
                  l = T.slidesSizesGrid[r],
                  p = o[0].swiperSlideOffset,
                  d = (t - p - l / 2) / l * T.params.coverflow.modifier,
                  u = T.isHorizontal() ? s * d : 0,
                  c = T.isHorizontal() ? 0 : s * d,
                  m = -i * Math.abs(d),
                  h = T.isHorizontal() ? 0 : T.params.coverflow.stretch * d,
                  g = T.isHorizontal() ? T.params.coverflow.stretch * d : 0;Math.abs(g) < .001 && (g = 0), Math.abs(h) < .001 && (h = 0), Math.abs(m) < .001 && (m = 0), Math.abs(u) < .001 && (u = 0), Math.abs(c) < .001 && (c = 0);var f = "translate3d(" + g + "px," + h + "px," + m + "px)  rotateX(" + c + "deg) rotateY(" + u + "deg)";if (o.transform(f), o[0].style.zIndex = 1 - Math.abs(Math.round(d)), T.params.coverflow.slideShadows) {
                var v = T.isHorizontal() ? o.find(".swiper-slide-shadow-left") : o.find(".swiper-slide-shadow-top"),
                    w = T.isHorizontal() ? o.find(".swiper-slide-shadow-right") : o.find(".swiper-slide-shadow-bottom");0 === v.length && (v = e('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "left" : "top") + '"></div>'), o.append(v)), 0 === w.length && (w = e('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "right" : "bottom") + '"></div>'), o.append(w)), v.length && (v[0].style.opacity = d > 0 ? d : 0), w.length && (w[0].style.opacity = -d > 0 ? -d : 0);
              }
            }if (T.browser.ie) {
              T.wrapper[0].style.perspectiveOrigin = t + "px 50%";
            }
          }, setTransition: function setTransition(e) {
            T.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
          } } }, T.lazy = { initialImageLoaded: !1, loadImageInSlide: function loadImageInSlide(a, t) {
          if (void 0 !== a && (void 0 === t && (t = !0), 0 !== T.slides.length)) {
            var s = T.slides.eq(a),
                i = s.find("." + T.params.lazyLoadingClass + ":not(." + T.params.lazyStatusLoadedClass + "):not(." + T.params.lazyStatusLoadingClass + ")");!s.hasClass(T.params.lazyLoadingClass) || s.hasClass(T.params.lazyStatusLoadedClass) || s.hasClass(T.params.lazyStatusLoadingClass) || (i = i.add(s[0])), 0 !== i.length && i.each(function () {
              var a = e(this);a.addClass(T.params.lazyStatusLoadingClass);var i = a.attr("data-background"),
                  r = a.attr("data-src"),
                  n = a.attr("data-srcset"),
                  o = a.attr("data-sizes");T.loadImage(a[0], r || i, n, o, !1, function () {
                if (void 0 !== T && null !== T && T) {
                  if (i ? (a.css("background-image", 'url("' + i + '")'), a.removeAttr("data-background")) : (n && (a.attr("srcset", n), a.removeAttr("data-srcset")), o && (a.attr("sizes", o), a.removeAttr("data-sizes")), r && (a.attr("src", r), a.removeAttr("data-src"))), a.addClass(T.params.lazyStatusLoadedClass).removeClass(T.params.lazyStatusLoadingClass), s.find("." + T.params.lazyPreloaderClass + ", ." + T.params.preloaderClass).remove(), T.params.loop && t) {
                    var e = s.attr("data-swiper-slide-index");if (s.hasClass(T.params.slideDuplicateClass)) {
                      var l = T.wrapper.children('[data-swiper-slide-index="' + e + '"]:not(.' + T.params.slideDuplicateClass + ")");T.lazy.loadImageInSlide(l.index(), !1);
                    } else {
                      var p = T.wrapper.children("." + T.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');T.lazy.loadImageInSlide(p.index(), !1);
                    }
                  }T.emit("onLazyImageReady", T, s[0], a[0]);
                }
              }), T.emit("onLazyImageLoad", T, s[0], a[0]);
            });
          }
        }, load: function load() {
          var a,
              t = T.params.slidesPerView;if ("auto" === t && (t = 0), T.lazy.initialImageLoaded || (T.lazy.initialImageLoaded = !0), T.params.watchSlidesVisibility) T.wrapper.children("." + T.params.slideVisibleClass).each(function () {
            T.lazy.loadImageInSlide(e(this).index());
          });else if (t > 1) for (a = T.activeIndex; a < T.activeIndex + t; a++) {
            T.slides[a] && T.lazy.loadImageInSlide(a);
          } else T.lazy.loadImageInSlide(T.activeIndex);if (T.params.lazyLoadingInPrevNext) if (t > 1 || T.params.lazyLoadingInPrevNextAmount && T.params.lazyLoadingInPrevNextAmount > 1) {
            var s = T.params.lazyLoadingInPrevNextAmount,
                i = t,
                r = Math.min(T.activeIndex + i + Math.max(s, i), T.slides.length),
                n = Math.max(T.activeIndex - Math.max(i, s), 0);for (a = T.activeIndex + t; a < r; a++) {
              T.slides[a] && T.lazy.loadImageInSlide(a);
            }for (a = n; a < T.activeIndex; a++) {
              T.slides[a] && T.lazy.loadImageInSlide(a);
            }
          } else {
            var o = T.wrapper.children("." + T.params.slideNextClass);o.length > 0 && T.lazy.loadImageInSlide(o.index());var l = T.wrapper.children("." + T.params.slidePrevClass);l.length > 0 && T.lazy.loadImageInSlide(l.index());
          }
        }, onTransitionStart: function onTransitionStart() {
          T.params.lazyLoading && (T.params.lazyLoadingOnTransitionStart || !T.params.lazyLoadingOnTransitionStart && !T.lazy.initialImageLoaded) && T.lazy.load();
        }, onTransitionEnd: function onTransitionEnd() {
          T.params.lazyLoading && !T.params.lazyLoadingOnTransitionStart && T.lazy.load();
        } }, T.scrollbar = { isTouched: !1, setDragPosition: function setDragPosition(e) {
          var a = T.scrollbar,
              t = T.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY,
              s = t - a.track.offset()[T.isHorizontal() ? "left" : "top"] - a.dragSize / 2,
              i = -T.minTranslate() * a.moveDivider,
              r = -T.maxTranslate() * a.moveDivider;s < i ? s = i : s > r && (s = r), s = -s / a.moveDivider, T.updateProgress(s), T.setWrapperTranslate(s, !0);
        }, dragStart: function dragStart(e) {
          var a = T.scrollbar;a.isTouched = !0, e.preventDefault(), e.stopPropagation(), a.setDragPosition(e), clearTimeout(a.dragTimeout), a.track.transition(0), T.params.scrollbarHide && a.track.css("opacity", 1), T.wrapper.transition(100), a.drag.transition(100), T.emit("onScrollbarDragStart", T);
        }, dragMove: function dragMove(e) {
          var a = T.scrollbar;a.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, a.setDragPosition(e), T.wrapper.transition(0), a.track.transition(0), a.drag.transition(0), T.emit("onScrollbarDragMove", T));
        }, dragEnd: function dragEnd(e) {
          var a = T.scrollbar;a.isTouched && (a.isTouched = !1, T.params.scrollbarHide && (clearTimeout(a.dragTimeout), a.dragTimeout = setTimeout(function () {
            a.track.css("opacity", 0), a.track.transition(400);
          }, 1e3)), T.emit("onScrollbarDragEnd", T), T.params.scrollbarSnapOnRelease && T.slideReset());
        }, draggableEvents: function () {
          return T.params.simulateTouch !== !1 || T.support.touch ? T.touchEvents : T.touchEventsDesktop;
        }(), enableDraggable: function enableDraggable() {
          var a = T.scrollbar,
              t = T.support.touch ? a.track : document;e(a.track).on(a.draggableEvents.start, a.dragStart), e(t).on(a.draggableEvents.move, a.dragMove), e(t).on(a.draggableEvents.end, a.dragEnd);
        }, disableDraggable: function disableDraggable() {
          var a = T.scrollbar,
              t = T.support.touch ? a.track : document;e(a.track).off(a.draggableEvents.start, a.dragStart), e(t).off(a.draggableEvents.move, a.dragMove), e(t).off(a.draggableEvents.end, a.dragEnd);
        }, set: function set() {
          if (T.params.scrollbar) {
            var a = T.scrollbar;a.track = e(T.params.scrollbar), T.params.uniqueNavElements && "string" == typeof T.params.scrollbar && a.track.length > 1 && 1 === T.container.find(T.params.scrollbar).length && (a.track = T.container.find(T.params.scrollbar)), a.drag = a.track.find(".swiper-scrollbar-drag"), 0 === a.drag.length && (a.drag = e('<div class="swiper-scrollbar-drag"></div>'), a.track.append(a.drag)), a.drag[0].style.width = "", a.drag[0].style.height = "", a.trackSize = T.isHorizontal() ? a.track[0].offsetWidth : a.track[0].offsetHeight, a.divider = T.size / T.virtualSize, a.moveDivider = a.divider * (a.trackSize / T.size), a.dragSize = a.trackSize * a.divider, T.isHorizontal() ? a.drag[0].style.width = a.dragSize + "px" : a.drag[0].style.height = a.dragSize + "px", a.divider >= 1 ? a.track[0].style.display = "none" : a.track[0].style.display = "", T.params.scrollbarHide && (a.track[0].style.opacity = 0);
          }
        }, setTranslate: function setTranslate() {
          if (T.params.scrollbar) {
            var e,
                a = T.scrollbar,
                t = (T.translate, a.dragSize);e = (a.trackSize - a.dragSize) * T.progress, T.rtl && T.isHorizontal() ? (e = -e, e > 0 ? (t = a.dragSize - e, e = 0) : -e + a.dragSize > a.trackSize && (t = a.trackSize + e)) : e < 0 ? (t = a.dragSize + e, e = 0) : e + a.dragSize > a.trackSize && (t = a.trackSize - e), T.isHorizontal() ? (T.support.transforms3d ? a.drag.transform("translate3d(" + e + "px, 0, 0)") : a.drag.transform("translateX(" + e + "px)"), a.drag[0].style.width = t + "px") : (T.support.transforms3d ? a.drag.transform("translate3d(0px, " + e + "px, 0)") : a.drag.transform("translateY(" + e + "px)"), a.drag[0].style.height = t + "px"), T.params.scrollbarHide && (clearTimeout(a.timeout), a.track[0].style.opacity = 1, a.timeout = setTimeout(function () {
              a.track[0].style.opacity = 0, a.track.transition(400);
            }, 1e3));
          }
        }, setTransition: function setTransition(e) {
          T.params.scrollbar && T.scrollbar.drag.transition(e);
        } }, T.controller = { LinearSpline: function LinearSpline(e, a) {
          var t = function () {
            var e, a, t;return function (s, i) {
              for (a = -1, e = s.length; e - a > 1;) {
                s[t = e + a >> 1] <= i ? a = t : e = t;
              }return e;
            };
          }();this.x = e, this.y = a, this.lastIndex = e.length - 1;var s, i;this.x.length;this.interpolate = function (e) {
            return e ? (i = t(this.x, e), s = i - 1, (e - this.x[s]) * (this.y[i] - this.y[s]) / (this.x[i] - this.x[s]) + this.y[s]) : 0;
          };
        }, getInterpolateFunction: function getInterpolateFunction(e) {
          T.controller.spline || (T.controller.spline = T.params.loop ? new T.controller.LinearSpline(T.slidesGrid, e.slidesGrid) : new T.controller.LinearSpline(T.snapGrid, e.snapGrid));
        }, setTranslate: function setTranslate(e, t) {
          function s(a) {
            e = a.rtl && "horizontal" === a.params.direction ? -T.translate : T.translate, "slide" === T.params.controlBy && (T.controller.getInterpolateFunction(a), r = -T.controller.spline.interpolate(-e)), r && "container" !== T.params.controlBy || (i = (a.maxTranslate() - a.minTranslate()) / (T.maxTranslate() - T.minTranslate()), r = (e - T.minTranslate()) * i + a.minTranslate()), T.params.controlInverse && (r = a.maxTranslate() - r), a.updateProgress(r), a.setWrapperTranslate(r, !1, T), a.updateActiveIndex();
          }var i,
              r,
              n = T.params.control;if (Array.isArray(n)) for (var o = 0; o < n.length; o++) {
            n[o] !== t && n[o] instanceof a && s(n[o]);
          } else n instanceof a && t !== n && s(n);
        }, setTransition: function setTransition(e, t) {
          function s(a) {
            a.setWrapperTransition(e, T), 0 !== e && (a.onTransitionStart(), a.wrapper.transitionEnd(function () {
              r && (a.params.loop && "slide" === T.params.controlBy && a.fixLoop(), a.onTransitionEnd());
            }));
          }var i,
              r = T.params.control;if (Array.isArray(r)) for (i = 0; i < r.length; i++) {
            r[i] !== t && r[i] instanceof a && s(r[i]);
          } else r instanceof a && t !== r && s(r);
        } }, T.hashnav = { onHashCange: function onHashCange(e, a) {
          var t = document.location.hash.replace("#", "");t !== T.slides.eq(T.activeIndex).attr("data-hash") && T.slideTo(T.wrapper.children("." + T.params.slideClass + '[data-hash="' + t + '"]').index());
        }, attachEvents: function attachEvents(a) {
          var t = a ? "off" : "on";e(window)[t]("hashchange", T.hashnav.onHashCange);
        }, setHash: function setHash() {
          if (T.hashnav.initialized && T.params.hashnav) if (T.params.replaceState && window.history && window.history.replaceState) window.history.replaceState(null, null, "#" + T.slides.eq(T.activeIndex).attr("data-hash") || "");else {
            var e = T.slides.eq(T.activeIndex),
                a = e.attr("data-hash") || e.attr("data-history");document.location.hash = a || "";
          }
        }, init: function init() {
          if (T.params.hashnav && !T.params.history) {
            T.hashnav.initialized = !0;var e = document.location.hash.replace("#", "");if (e) for (var a = 0, t = T.slides.length; a < t; a++) {
              var s = T.slides.eq(a),
                  i = s.attr("data-hash") || s.attr("data-history");if (i === e && !s.hasClass(T.params.slideDuplicateClass)) {
                var r = s.index();T.slideTo(r, 0, T.params.runCallbacksOnInit, !0);
              }
            }T.params.hashnavWatchState && T.hashnav.attachEvents();
          }
        }, destroy: function destroy() {
          T.params.hashnavWatchState && T.hashnav.attachEvents(!0);
        } }, T.history = { init: function init() {
          if (T.params.history) {
            if (!window.history || !window.history.pushState) return T.params.history = !1, void (T.params.hashnav = !0);T.history.initialized = !0, this.paths = this.getPathValues(), (this.paths.key || this.paths.value) && (this.scrollToSlide(0, this.paths.value, T.params.runCallbacksOnInit), T.params.replaceState || window.addEventListener("popstate", this.setHistoryPopState));
          }
        }, setHistoryPopState: function setHistoryPopState() {
          T.history.paths = T.history.getPathValues(), T.history.scrollToSlide(T.params.speed, T.history.paths.value, !1);
        }, getPathValues: function getPathValues() {
          var e = window.location.pathname.slice(1).split("/"),
              a = e.length;return { key: e[a - 2], value: e[a - 1] };
        }, setHistory: function setHistory(e, a) {
          if (T.history.initialized && T.params.history) {
            var t = T.slides.eq(a),
                s = this.slugify(t.attr("data-history"));window.location.pathname.includes(e) || (s = e + "/" + s), T.params.replaceState ? window.history.replaceState(null, null, s) : window.history.pushState(null, null, s);
          }
        }, slugify: function slugify(e) {
          return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
        }, scrollToSlide: function scrollToSlide(e, a, t) {
          if (a) for (var s = 0, i = T.slides.length; s < i; s++) {
            var r = T.slides.eq(s),
                n = this.slugify(r.attr("data-history"));if (n === a && !r.hasClass(T.params.slideDuplicateClass)) {
              var o = r.index();T.slideTo(o, e, t);
            }
          } else T.slideTo(0, e, t);
        } }, T.disableKeyboardControl = function () {
        T.params.keyboardControl = !1, e(document).off("keydown", p);
      }, T.enableKeyboardControl = function () {
        T.params.keyboardControl = !0, e(document).on("keydown", p);
      }, T.mousewheel = { event: !1, lastScrollTime: new window.Date().getTime() }, T.params.mousewheelControl && (T.mousewheel.event = navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function () {
        var e = "onwheel" in document;if (!e) {
          var a = document.createElement("div");a.setAttribute("onwheel", "return;"), e = "function" == typeof a.onwheel;
        }return !e && document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== !0 && (e = document.implementation.hasFeature("Events.wheel", "3.0")), e;
      }() ? "wheel" : "mousewheel"), T.disableMousewheelControl = function () {
        if (!T.mousewheel.event) return !1;var a = T.container;return "container" !== T.params.mousewheelEventsTarged && (a = e(T.params.mousewheelEventsTarged)), a.off(T.mousewheel.event, u), T.params.mousewheelControl = !1, !0;
      }, T.enableMousewheelControl = function () {
        if (!T.mousewheel.event) return !1;var a = T.container;return "container" !== T.params.mousewheelEventsTarged && (a = e(T.params.mousewheelEventsTarged)), a.on(T.mousewheel.event, u), T.params.mousewheelControl = !0, !0;
      }, T.parallax = { setTranslate: function setTranslate() {
          T.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
            c(this, T.progress);
          }), T.slides.each(function () {
            var a = e(this);a.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
              c(this, Math.min(Math.max(a[0].progress, -1), 1));
            });
          });
        }, setTransition: function setTransition(a) {
          void 0 === a && (a = T.params.speed), T.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
            var t = e(this),
                s = parseInt(t.attr("data-swiper-parallax-duration"), 10) || a;0 === a && (s = 0), t.transition(s);
          });
        } }, T.zoom = { scale: 1, currentScale: 1, isScaling: !1, gesture: { slide: void 0, slideWidth: void 0, slideHeight: void 0, image: void 0, imageWrap: void 0, zoomMax: T.params.zoomMax }, image: { isTouched: void 0, isMoved: void 0, currentX: void 0, currentY: void 0, minX: void 0, minY: void 0, maxX: void 0, maxY: void 0, width: void 0, height: void 0, startX: void 0, startY: void 0, touchesStart: {}, touchesCurrent: {} }, velocity: { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 }, getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
          if (e.targetTouches.length < 2) return 1;var a = e.targetTouches[0].pageX,
              t = e.targetTouches[0].pageY,
              s = e.targetTouches[1].pageX,
              i = e.targetTouches[1].pageY;return Math.sqrt(Math.pow(s - a, 2) + Math.pow(i - t, 2));
        }, onGestureStart: function onGestureStart(a) {
          var t = T.zoom;if (!T.support.gestures) {
            if ("touchstart" !== a.type || "touchstart" === a.type && a.targetTouches.length < 2) return;t.gesture.scaleStart = t.getDistanceBetweenTouches(a);
          }if (!(t.gesture.slide && t.gesture.slide.length || (t.gesture.slide = e(this), 0 === t.gesture.slide.length && (t.gesture.slide = T.slides.eq(T.activeIndex)), t.gesture.image = t.gesture.slide.find("img, svg, canvas"), t.gesture.imageWrap = t.gesture.image.parent("." + T.params.zoomContainerClass), t.gesture.zoomMax = t.gesture.imageWrap.attr("data-swiper-zoom") || T.params.zoomMax, 0 !== t.gesture.imageWrap.length))) return void (t.gesture.image = void 0);t.gesture.image.transition(0), t.isScaling = !0;
        }, onGestureChange: function onGestureChange(e) {
          var a = T.zoom;if (!T.support.gestures) {
            if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;a.gesture.scaleMove = a.getDistanceBetweenTouches(e);
          }a.gesture.image && 0 !== a.gesture.image.length && (T.support.gestures ? a.scale = e.scale * a.currentScale : a.scale = a.gesture.scaleMove / a.gesture.scaleStart * a.currentScale, a.scale > a.gesture.zoomMax && (a.scale = a.gesture.zoomMax - 1 + Math.pow(a.scale - a.gesture.zoomMax + 1, .5)), a.scale < T.params.zoomMin && (a.scale = T.params.zoomMin + 1 - Math.pow(T.params.zoomMin - a.scale + 1, .5)), a.gesture.image.transform("translate3d(0,0,0) scale(" + a.scale + ")"));
        }, onGestureEnd: function onGestureEnd(e) {
          var a = T.zoom;!T.support.gestures && ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2) || a.gesture.image && 0 !== a.gesture.image.length && (a.scale = Math.max(Math.min(a.scale, a.gesture.zoomMax), T.params.zoomMin), a.gesture.image.transition(T.params.speed).transform("translate3d(0,0,0) scale(" + a.scale + ")"), a.currentScale = a.scale, a.isScaling = !1, 1 === a.scale && (a.gesture.slide = void 0));
        }, onTouchStart: function onTouchStart(e, a) {
          var t = e.zoom;t.gesture.image && 0 !== t.gesture.image.length && (t.image.isTouched || ("android" === e.device.os && a.preventDefault(), t.image.isTouched = !0, t.image.touchesStart.x = "touchstart" === a.type ? a.targetTouches[0].pageX : a.pageX, t.image.touchesStart.y = "touchstart" === a.type ? a.targetTouches[0].pageY : a.pageY));
        }, onTouchMove: function onTouchMove(e) {
          var a = T.zoom;if (a.gesture.image && 0 !== a.gesture.image.length && (T.allowClick = !1, a.image.isTouched && a.gesture.slide)) {
            a.image.isMoved || (a.image.width = a.gesture.image[0].offsetWidth, a.image.height = a.gesture.image[0].offsetHeight, a.image.startX = T.getTranslate(a.gesture.imageWrap[0], "x") || 0, a.image.startY = T.getTranslate(a.gesture.imageWrap[0], "y") || 0, a.gesture.slideWidth = a.gesture.slide[0].offsetWidth, a.gesture.slideHeight = a.gesture.slide[0].offsetHeight, a.gesture.imageWrap.transition(0), T.rtl && (a.image.startX = -a.image.startX), T.rtl && (a.image.startY = -a.image.startY));var t = a.image.width * a.scale,
                s = a.image.height * a.scale;if (!(t < a.gesture.slideWidth && s < a.gesture.slideHeight)) {
              if (a.image.minX = Math.min(a.gesture.slideWidth / 2 - t / 2, 0), a.image.maxX = -a.image.minX, a.image.minY = Math.min(a.gesture.slideHeight / 2 - s / 2, 0), a.image.maxY = -a.image.minY, a.image.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, a.image.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !a.image.isMoved && !a.isScaling) {
                if (T.isHorizontal() && Math.floor(a.image.minX) === Math.floor(a.image.startX) && a.image.touchesCurrent.x < a.image.touchesStart.x || Math.floor(a.image.maxX) === Math.floor(a.image.startX) && a.image.touchesCurrent.x > a.image.touchesStart.x) return void (a.image.isTouched = !1);if (!T.isHorizontal() && Math.floor(a.image.minY) === Math.floor(a.image.startY) && a.image.touchesCurrent.y < a.image.touchesStart.y || Math.floor(a.image.maxY) === Math.floor(a.image.startY) && a.image.touchesCurrent.y > a.image.touchesStart.y) return void (a.image.isTouched = !1);
              }e.preventDefault(), e.stopPropagation(), a.image.isMoved = !0, a.image.currentX = a.image.touchesCurrent.x - a.image.touchesStart.x + a.image.startX, a.image.currentY = a.image.touchesCurrent.y - a.image.touchesStart.y + a.image.startY, a.image.currentX < a.image.minX && (a.image.currentX = a.image.minX + 1 - Math.pow(a.image.minX - a.image.currentX + 1, .8)), a.image.currentX > a.image.maxX && (a.image.currentX = a.image.maxX - 1 + Math.pow(a.image.currentX - a.image.maxX + 1, .8)), a.image.currentY < a.image.minY && (a.image.currentY = a.image.minY + 1 - Math.pow(a.image.minY - a.image.currentY + 1, .8)), a.image.currentY > a.image.maxY && (a.image.currentY = a.image.maxY - 1 + Math.pow(a.image.currentY - a.image.maxY + 1, .8)), a.velocity.prevPositionX || (a.velocity.prevPositionX = a.image.touchesCurrent.x), a.velocity.prevPositionY || (a.velocity.prevPositionY = a.image.touchesCurrent.y), a.velocity.prevTime || (a.velocity.prevTime = Date.now()), a.velocity.x = (a.image.touchesCurrent.x - a.velocity.prevPositionX) / (Date.now() - a.velocity.prevTime) / 2, a.velocity.y = (a.image.touchesCurrent.y - a.velocity.prevPositionY) / (Date.now() - a.velocity.prevTime) / 2, Math.abs(a.image.touchesCurrent.x - a.velocity.prevPositionX) < 2 && (a.velocity.x = 0), Math.abs(a.image.touchesCurrent.y - a.velocity.prevPositionY) < 2 && (a.velocity.y = 0), a.velocity.prevPositionX = a.image.touchesCurrent.x, a.velocity.prevPositionY = a.image.touchesCurrent.y, a.velocity.prevTime = Date.now(), a.gesture.imageWrap.transform("translate3d(" + a.image.currentX + "px, " + a.image.currentY + "px,0)");
            }
          }
        }, onTouchEnd: function onTouchEnd(e, a) {
          var t = e.zoom;if (t.gesture.image && 0 !== t.gesture.image.length) {
            if (!t.image.isTouched || !t.image.isMoved) return t.image.isTouched = !1, void (t.image.isMoved = !1);t.image.isTouched = !1, t.image.isMoved = !1;var s = 300,
                i = 300,
                r = t.velocity.x * s,
                n = t.image.currentX + r,
                o = t.velocity.y * i,
                l = t.image.currentY + o;0 !== t.velocity.x && (s = Math.abs((n - t.image.currentX) / t.velocity.x)), 0 !== t.velocity.y && (i = Math.abs((l - t.image.currentY) / t.velocity.y));var p = Math.max(s, i);t.image.currentX = n, t.image.currentY = l;var d = t.image.width * t.scale,
                u = t.image.height * t.scale;t.image.minX = Math.min(t.gesture.slideWidth / 2 - d / 2, 0), t.image.maxX = -t.image.minX, t.image.minY = Math.min(t.gesture.slideHeight / 2 - u / 2, 0), t.image.maxY = -t.image.minY, t.image.currentX = Math.max(Math.min(t.image.currentX, t.image.maxX), t.image.minX), t.image.currentY = Math.max(Math.min(t.image.currentY, t.image.maxY), t.image.minY), t.gesture.imageWrap.transition(p).transform("translate3d(" + t.image.currentX + "px, " + t.image.currentY + "px,0)");
          }
        }, onTransitionEnd: function onTransitionEnd(e) {
          var a = e.zoom;a.gesture.slide && e.previousIndex !== e.activeIndex && (a.gesture.image.transform("translate3d(0,0,0) scale(1)"), a.gesture.imageWrap.transform("translate3d(0,0,0)"), a.gesture.slide = a.gesture.image = a.gesture.imageWrap = void 0, a.scale = a.currentScale = 1);
        }, toggleZoom: function toggleZoom(a, t) {
          var s = a.zoom;if (s.gesture.slide || (s.gesture.slide = a.clickedSlide ? e(a.clickedSlide) : a.slides.eq(a.activeIndex), s.gesture.image = s.gesture.slide.find("img, svg, canvas"), s.gesture.imageWrap = s.gesture.image.parent("." + a.params.zoomContainerClass)), s.gesture.image && 0 !== s.gesture.image.length) {
            var i, r, n, o, l, p, d, u, c, m, h, g, f, v, w, y, x, T;void 0 === s.image.touchesStart.x && t ? (i = "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX, r = "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY) : (i = s.image.touchesStart.x, r = s.image.touchesStart.y), s.scale && 1 !== s.scale ? (s.scale = s.currentScale = 1, s.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"), s.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"), s.gesture.slide = void 0) : (s.scale = s.currentScale = s.gesture.imageWrap.attr("data-swiper-zoom") || a.params.zoomMax, t ? (x = s.gesture.slide[0].offsetWidth, T = s.gesture.slide[0].offsetHeight, n = s.gesture.slide.offset().left, o = s.gesture.slide.offset().top, l = n + x / 2 - i, p = o + T / 2 - r, c = s.gesture.image[0].offsetWidth, m = s.gesture.image[0].offsetHeight, h = c * s.scale, g = m * s.scale, f = Math.min(x / 2 - h / 2, 0), v = Math.min(T / 2 - g / 2, 0), w = -f, y = -v, d = l * s.scale, u = p * s.scale, d < f && (d = f), d > w && (d = w), u < v && (u = v), u > y && (u = y)) : (d = 0, u = 0), s.gesture.imageWrap.transition(300).transform("translate3d(" + d + "px, " + u + "px,0)"), s.gesture.image.transition(300).transform("translate3d(0,0,0) scale(" + s.scale + ")"));
          }
        }, attachEvents: function attachEvents(a) {
          var t = a ? "off" : "on";if (T.params.zoom) {
            var s = (T.slides, !("touchstart" !== T.touchEvents.start || !T.support.passiveListener || !T.params.passiveListeners) && { passive: !0, capture: !1 });T.support.gestures ? (T.slides[t]("gesturestart", T.zoom.onGestureStart, s), T.slides[t]("gesturechange", T.zoom.onGestureChange, s), T.slides[t]("gestureend", T.zoom.onGestureEnd, s)) : "touchstart" === T.touchEvents.start && (T.slides[t](T.touchEvents.start, T.zoom.onGestureStart, s), T.slides[t](T.touchEvents.move, T.zoom.onGestureChange, s), T.slides[t](T.touchEvents.end, T.zoom.onGestureEnd, s)), T[t]("touchStart", T.zoom.onTouchStart), T.slides.each(function (a, s) {
              e(s).find("." + T.params.zoomContainerClass).length > 0 && e(s)[t](T.touchEvents.move, T.zoom.onTouchMove);
            }), T[t]("touchEnd", T.zoom.onTouchEnd), T[t]("transitionEnd", T.zoom.onTransitionEnd), T.params.zoomToggle && T.on("doubleTap", T.zoom.toggleZoom);
          }
        }, init: function init() {
          T.zoom.attachEvents();
        }, destroy: function destroy() {
          T.zoom.attachEvents(!0);
        } }, T._plugins = [];for (var Y in T.plugins) {
        var O = T.plugins[Y](T, T.params[Y]);O && T._plugins.push(O);
      }return T.callPlugins = function (e) {
        for (var a = 0; a < T._plugins.length; a++) {
          e in T._plugins[a] && T._plugins[a][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
        }
      }, T.emitterEventListeners = {}, T.emit = function (e) {
        T.params[e] && T.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);var a;if (T.emitterEventListeners[e]) for (a = 0; a < T.emitterEventListeners[e].length; a++) {
          T.emitterEventListeners[e][a](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
        }T.callPlugins && T.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
      }, T.on = function (e, a) {
        return e = m(e), T.emitterEventListeners[e] || (T.emitterEventListeners[e] = []), T.emitterEventListeners[e].push(a), T;
      }, T.off = function (e, a) {
        var t;if (e = m(e), void 0 === a) return T.emitterEventListeners[e] = [], T;if (T.emitterEventListeners[e] && 0 !== T.emitterEventListeners[e].length) {
          for (t = 0; t < T.emitterEventListeners[e].length; t++) {
            T.emitterEventListeners[e][t] === a && T.emitterEventListeners[e].splice(t, 1);
          }return T;
        }
      }, T.once = function (e, a) {
        e = m(e);var t = function t() {
          a(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), T.off(e, t);
        };return T.on(e, t), T;
      }, T.a11y = { makeFocusable: function makeFocusable(e) {
          return e.attr("tabIndex", "0"), e;
        }, addRole: function addRole(e, a) {
          return e.attr("role", a), e;
        }, addLabel: function addLabel(e, a) {
          return e.attr("aria-label", a), e;
        }, disable: function disable(e) {
          return e.attr("aria-disabled", !0), e;
        }, enable: function enable(e) {
          return e.attr("aria-disabled", !1), e;
        }, onEnterKey: function onEnterKey(a) {
          13 === a.keyCode && (e(a.target).is(T.params.nextButton) ? (T.onClickNext(a), T.isEnd ? T.a11y.notify(T.params.lastSlideMessage) : T.a11y.notify(T.params.nextSlideMessage)) : e(a.target).is(T.params.prevButton) && (T.onClickPrev(a), T.isBeginning ? T.a11y.notify(T.params.firstSlideMessage) : T.a11y.notify(T.params.prevSlideMessage)), e(a.target).is("." + T.params.bulletClass) && e(a.target)[0].click());
        }, liveRegion: e('<span class="' + T.params.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>'), notify: function notify(e) {
          var a = T.a11y.liveRegion;0 !== a.length && (a.html(""), a.html(e));
        }, init: function init() {
          T.params.nextButton && T.nextButton && T.nextButton.length > 0 && (T.a11y.makeFocusable(T.nextButton), T.a11y.addRole(T.nextButton, "button"), T.a11y.addLabel(T.nextButton, T.params.nextSlideMessage)), T.params.prevButton && T.prevButton && T.prevButton.length > 0 && (T.a11y.makeFocusable(T.prevButton), T.a11y.addRole(T.prevButton, "button"), T.a11y.addLabel(T.prevButton, T.params.prevSlideMessage)), e(T.container).append(T.a11y.liveRegion);
        }, initPagination: function initPagination() {
          T.params.pagination && T.params.paginationClickable && T.bullets && T.bullets.length && T.bullets.each(function () {
            var a = e(this);T.a11y.makeFocusable(a), T.a11y.addRole(a, "button"), T.a11y.addLabel(a, T.params.paginationBulletMessage.replace(/{{index}}/, a.index() + 1));
          });
        }, destroy: function destroy() {
          T.a11y.liveRegion && T.a11y.liveRegion.length > 0 && T.a11y.liveRegion.remove();
        } }, T.init = function () {
        T.params.loop && T.createLoop(), T.updateContainerSize(), T.updateSlidesSize(), T.updatePagination(), T.params.scrollbar && T.scrollbar && (T.scrollbar.set(), T.params.scrollbarDraggable && T.scrollbar.enableDraggable()), "slide" !== T.params.effect && T.effects[T.params.effect] && (T.params.loop || T.updateProgress(), T.effects[T.params.effect].setTranslate()), T.params.loop ? T.slideTo(T.params.initialSlide + T.loopedSlides, 0, T.params.runCallbacksOnInit) : (T.slideTo(T.params.initialSlide, 0, T.params.runCallbacksOnInit), 0 === T.params.initialSlide && (T.parallax && T.params.parallax && T.parallax.setTranslate(), T.lazy && T.params.lazyLoading && (T.lazy.load(), T.lazy.initialImageLoaded = !0))), T.attachEvents(), T.params.observer && T.support.observer && T.initObservers(), T.params.preloadImages && !T.params.lazyLoading && T.preloadImages(), T.params.zoom && T.zoom && T.zoom.init(), T.params.autoplay && T.startAutoplay(), T.params.keyboardControl && T.enableKeyboardControl && T.enableKeyboardControl(), T.params.mousewheelControl && T.enableMousewheelControl && T.enableMousewheelControl(), T.params.hashnavReplaceState && (T.params.replaceState = T.params.hashnavReplaceState), T.params.history && T.history && T.history.init(), T.params.hashnav && T.hashnav && T.hashnav.init(), T.params.a11y && T.a11y && T.a11y.init(), T.emit("onInit", T);
      }, T.cleanupStyles = function () {
        T.container.removeClass(T.classNames.join(" ")).removeAttr("style"), T.wrapper.removeAttr("style"), T.slides && T.slides.length && T.slides.removeClass([T.params.slideVisibleClass, T.params.slideActiveClass, T.params.slideNextClass, T.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"), T.paginationContainer && T.paginationContainer.length && T.paginationContainer.removeClass(T.params.paginationHiddenClass), T.bullets && T.bullets.length && T.bullets.removeClass(T.params.bulletActiveClass), T.params.prevButton && e(T.params.prevButton).removeClass(T.params.buttonDisabledClass), T.params.nextButton && e(T.params.nextButton).removeClass(T.params.buttonDisabledClass), T.params.scrollbar && T.scrollbar && (T.scrollbar.track && T.scrollbar.track.length && T.scrollbar.track.removeAttr("style"), T.scrollbar.drag && T.scrollbar.drag.length && T.scrollbar.drag.removeAttr("style"));
      }, T.destroy = function (e, a) {
        T.detachEvents(), T.stopAutoplay(), T.params.scrollbar && T.scrollbar && T.params.scrollbarDraggable && T.scrollbar.disableDraggable(), T.params.loop && T.destroyLoop(), a && T.cleanupStyles(), T.disconnectObservers(), T.params.zoom && T.zoom && T.zoom.destroy(), T.params.keyboardControl && T.disableKeyboardControl && T.disableKeyboardControl(), T.params.mousewheelControl && T.disableMousewheelControl && T.disableMousewheelControl(), T.params.a11y && T.a11y && T.a11y.destroy(), T.params.history && !T.params.replaceState && window.removeEventListener("popstate", T.history.setHistoryPopState), T.params.hashnav && T.hashnav && T.hashnav.destroy(), T.emit("onDestroy"), e !== !1 && (T = null);
      }, T.init(), T;
    }
  };a.prototype = { isSafari: function () {
      var e = window.navigator.userAgent.toLowerCase();return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0;
    }(), isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent), isArray: function isArray(e) {
      return "[object Array]" === Object.prototype.toString.apply(e);
    }, browser: { ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled, ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1, lteIE9: function () {
        var e = document.createElement("div");return e.innerHTML = "<!--[if lte IE 9]><i></i><![endif]-->", 1 === e.getElementsByTagName("i").length;
      }() }, device: function () {
      var e = window.navigator.userAgent,
          a = e.match(/(Android);?[\s\/]+([\d.]+)?/),
          t = e.match(/(iPad).*OS\s([\d_]+)/),
          s = e.match(/(iPod)(.*OS\s([\d_]+))?/),
          i = !t && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);return { ios: t || i || s, android: a };
    }(), support: { touch: window.Modernizr && Modernizr.touch === !0 || function () {
        return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
      }(), transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function () {
        var e = document.createElement("div").style;return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e;
      }(), flexbox: function () {
        for (var e = document.createElement("div").style, a = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), t = 0; t < a.length; t++) {
          if (a[t] in e) return !0;
        }
      }(), observer: function () {
        return "MutationObserver" in window || "WebkitMutationObserver" in window;
      }(), passiveListener: function () {
        var e = !1;try {
          var a = Object.defineProperty({}, "passive", { get: function get() {
              e = !0;
            } });window.addEventListener("testPassiveListener", null, a);
        } catch (e) {}return e;
      }(), gestures: function () {
        return "ongesturestart" in window;
      }() }, plugins: {} };for (var t = function () {
    var e = function e(_e) {
      var a = this,
          t = 0;for (t = 0; t < _e.length; t++) {
        a[t] = _e[t];
      }return a.length = _e.length, this;
    },
        a = function a(_a, t) {
      var s = [],
          i = 0;if (_a && !t && _a instanceof e) return _a;if (_a) if ("string" == typeof _a) {
        var r,
            n,
            o = _a.trim();if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
          var l = "div";for (0 === o.indexOf("<li") && (l = "ul"), 0 === o.indexOf("<tr") && (l = "tbody"), 0 !== o.indexOf("<td") && 0 !== o.indexOf("<th") || (l = "tr"), 0 === o.indexOf("<tbody") && (l = "table"), 0 === o.indexOf("<option") && (l = "select"), n = document.createElement(l), n.innerHTML = _a, i = 0; i < n.childNodes.length; i++) {
            s.push(n.childNodes[i]);
          }
        } else for (r = t || "#" !== _a[0] || _a.match(/[ .<>:~]/) ? (t || document).querySelectorAll(_a) : [document.getElementById(_a.split("#")[1])], i = 0; i < r.length; i++) {
          r[i] && s.push(r[i]);
        }
      } else if (_a.nodeType || _a === window || _a === document) s.push(_a);else if (_a.length > 0 && _a[0].nodeType) for (i = 0; i < _a.length; i++) {
        s.push(_a[i]);
      }return new e(s);
    };return e.prototype = { addClass: function addClass(e) {
        if (void 0 === e) return this;for (var a = e.split(" "), t = 0; t < a.length; t++) {
          for (var s = 0; s < this.length; s++) {
            this[s].classList.add(a[t]);
          }
        }return this;
      }, removeClass: function removeClass(e) {
        for (var a = e.split(" "), t = 0; t < a.length; t++) {
          for (var s = 0; s < this.length; s++) {
            this[s].classList.remove(a[t]);
          }
        }return this;
      }, hasClass: function hasClass(e) {
        return !!this[0] && this[0].classList.contains(e);
      }, toggleClass: function toggleClass(e) {
        for (var a = e.split(" "), t = 0; t < a.length; t++) {
          for (var s = 0; s < this.length; s++) {
            this[s].classList.toggle(a[t]);
          }
        }return this;
      }, attr: function attr(e, a) {
        if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;for (var t = 0; t < this.length; t++) {
          if (2 === arguments.length) this[t].setAttribute(e, a);else for (var s in e) {
            this[t][s] = e[s], this[t].setAttribute(s, e[s]);
          }
        }return this;
      }, removeAttr: function removeAttr(e) {
        for (var a = 0; a < this.length; a++) {
          this[a].removeAttribute(e);
        }return this;
      }, data: function data(e, a) {
        if (void 0 !== a) {
          for (var t = 0; t < this.length; t++) {
            var s = this[t];s.dom7ElementDataStorage || (s.dom7ElementDataStorage = {}), s.dom7ElementDataStorage[e] = a;
          }return this;
        }if (this[0]) {
          var i = this[0].getAttribute("data-" + e);return i ? i : this[0].dom7ElementDataStorage && (e in this[0].dom7ElementDataStorage) ? this[0].dom7ElementDataStorage[e] : void 0;
        }
      }, transform: function transform(e) {
        for (var a = 0; a < this.length; a++) {
          var t = this[a].style;t.webkitTransform = t.MsTransform = t.msTransform = t.MozTransform = t.OTransform = t.transform = e;
        }return this;
      }, transition: function transition(e) {
        "string" != typeof e && (e += "ms");for (var a = 0; a < this.length; a++) {
          var t = this[a].style;t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = e;
        }return this;
      }, on: function on(e, t, s, i) {
        function r(e) {
          var i = e.target;if (a(i).is(t)) s.call(i, e);else for (var r = a(i).parents(), n = 0; n < r.length; n++) {
            a(r[n]).is(t) && s.call(r[n], e);
          }
        }var n,
            o,
            l = e.split(" ");for (n = 0; n < this.length; n++) {
          if ("function" == typeof t || t === !1) for ("function" == typeof t && (s = arguments[1], i = arguments[2] || !1), o = 0; o < l.length; o++) {
            this[n].addEventListener(l[o], s, i);
          } else for (o = 0; o < l.length; o++) {
            this[n].dom7LiveListeners || (this[n].dom7LiveListeners = []), this[n].dom7LiveListeners.push({ listener: s, liveListener: r }), this[n].addEventListener(l[o], r, i);
          }
        }return this;
      }, off: function off(e, a, t, s) {
        for (var i = e.split(" "), r = 0; r < i.length; r++) {
          for (var n = 0; n < this.length; n++) {
            if ("function" == typeof a || a === !1) "function" == typeof a && (t = arguments[1], s = arguments[2] || !1), this[n].removeEventListener(i[r], t, s);else if (this[n].dom7LiveListeners) for (var o = 0; o < this[n].dom7LiveListeners.length; o++) {
              this[n].dom7LiveListeners[o].listener === t && this[n].removeEventListener(i[r], this[n].dom7LiveListeners[o].liveListener, s);
            }
          }
        }return this;
      }, once: function once(e, a, t, s) {
        function i(n) {
          t(n), r.off(e, a, i, s);
        }var r = this;"function" == typeof a && (a = !1, t = arguments[1], s = arguments[2]), r.on(e, a, i, s);
      }, trigger: function trigger(e, a) {
        for (var t = 0; t < this.length; t++) {
          var s;try {
            s = new window.CustomEvent(e, { detail: a, bubbles: !0, cancelable: !0 });
          } catch (t) {
            s = document.createEvent("Event"), s.initEvent(e, !0, !0), s.detail = a;
          }this[t].dispatchEvent(s);
        }return this;
      }, transitionEnd: function transitionEnd(e) {
        function a(r) {
          if (r.target === this) for (e.call(this, r), t = 0; t < s.length; t++) {
            i.off(s[t], a);
          }
        }var t,
            s = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
            i = this;if (e) for (t = 0; t < s.length; t++) {
          i.on(s[t], a);
        }return this;
      }, width: function width() {
        return this[0] === window ? window.innerWidth : this.length > 0 ? parseFloat(this.css("width")) : null;
      }, outerWidth: function outerWidth(e) {
        return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null;
      }, height: function height() {
        return this[0] === window ? window.innerHeight : this.length > 0 ? parseFloat(this.css("height")) : null;
      }, outerHeight: function outerHeight(e) {
        return this.length > 0 ? e ? this[0].offsetHeight + parseFloat(this.css("margin-top")) + parseFloat(this.css("margin-bottom")) : this[0].offsetHeight : null;
      }, offset: function offset() {
        if (this.length > 0) {
          var e = this[0],
              a = e.getBoundingClientRect(),
              t = document.body,
              s = e.clientTop || t.clientTop || 0,
              i = e.clientLeft || t.clientLeft || 0,
              r = window.pageYOffset || e.scrollTop,
              n = window.pageXOffset || e.scrollLeft;return { top: a.top + r - s, left: a.left + n - i };
        }return null;
      }, css: function css(e, a) {
        var t;if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (t = 0; t < this.length; t++) {
              for (var s in e) {
                this[t].style[s] = e[s];
              }
            }return this;
          }if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(e);
        }if (2 === arguments.length && "string" == typeof e) {
          for (t = 0; t < this.length; t++) {
            this[t].style[e] = a;
          }return this;
        }return this;
      }, each: function each(e) {
        for (var a = 0; a < this.length; a++) {
          e.call(this[a], a, this[a]);
        }return this;
      }, html: function html(e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;for (var a = 0; a < this.length; a++) {
          this[a].innerHTML = e;
        }return this;
      }, text: function text(e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;for (var a = 0; a < this.length; a++) {
          this[a].textContent = e;
        }return this;
      }, is: function is(t) {
        if (!this[0]) return !1;var s, i;if ("string" == typeof t) {
          var r = this[0];if (r === document) return t === document;if (r === window) return t === window;if (r.matches) return r.matches(t);if (r.webkitMatchesSelector) return r.webkitMatchesSelector(t);if (r.mozMatchesSelector) return r.mozMatchesSelector(t);if (r.msMatchesSelector) return r.msMatchesSelector(t);for (s = a(t), i = 0; i < s.length; i++) {
            if (s[i] === this[0]) return !0;
          }return !1;
        }if (t === document) return this[0] === document;if (t === window) return this[0] === window;if (t.nodeType || t instanceof e) {
          for (s = t.nodeType ? [t] : t, i = 0; i < s.length; i++) {
            if (s[i] === this[0]) return !0;
          }return !1;
        }return !1;
      }, index: function index() {
        if (this[0]) {
          for (var e = this[0], a = 0; null !== (e = e.previousSibling);) {
            1 === e.nodeType && a++;
          }return a;
        }
      }, eq: function eq(a) {
        if (void 0 === a) return this;var t,
            s = this.length;return a > s - 1 ? new e([]) : a < 0 ? (t = s + a, new e(t < 0 ? [] : [this[t]])) : new e([this[a]]);
      }, append: function append(a) {
        var t, s;for (t = 0; t < this.length; t++) {
          if ("string" == typeof a) {
            var i = document.createElement("div");for (i.innerHTML = a; i.firstChild;) {
              this[t].appendChild(i.firstChild);
            }
          } else if (a instanceof e) for (s = 0; s < a.length; s++) {
            this[t].appendChild(a[s]);
          } else this[t].appendChild(a);
        }return this;
      }, prepend: function prepend(a) {
        var t, s;for (t = 0; t < this.length; t++) {
          if ("string" == typeof a) {
            var i = document.createElement("div");for (i.innerHTML = a, s = i.childNodes.length - 1; s >= 0; s--) {
              this[t].insertBefore(i.childNodes[s], this[t].childNodes[0]);
            }
          } else if (a instanceof e) for (s = 0; s < a.length; s++) {
            this[t].insertBefore(a[s], this[t].childNodes[0]);
          } else this[t].insertBefore(a, this[t].childNodes[0]);
        }return this;
      }, insertBefore: function insertBefore(e) {
        for (var t = a(e), s = 0; s < this.length; s++) {
          if (1 === t.length) t[0].parentNode.insertBefore(this[s], t[0]);else if (t.length > 1) for (var i = 0; i < t.length; i++) {
            t[i].parentNode.insertBefore(this[s].cloneNode(!0), t[i]);
          }
        }
      }, insertAfter: function insertAfter(e) {
        for (var t = a(e), s = 0; s < this.length; s++) {
          if (1 === t.length) t[0].parentNode.insertBefore(this[s], t[0].nextSibling);else if (t.length > 1) for (var i = 0; i < t.length; i++) {
            t[i].parentNode.insertBefore(this[s].cloneNode(!0), t[i].nextSibling);
          }
        }
      }, next: function next(t) {
        return new e(this.length > 0 ? t ? this[0].nextElementSibling && a(this[0].nextElementSibling).is(t) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : []);
      }, nextAll: function nextAll(t) {
        var s = [],
            i = this[0];if (!i) return new e([]);for (; i.nextElementSibling;) {
          var r = i.nextElementSibling;t ? a(r).is(t) && s.push(r) : s.push(r), i = r;
        }return new e(s);
      }, prev: function prev(t) {
        return new e(this.length > 0 ? t ? this[0].previousElementSibling && a(this[0].previousElementSibling).is(t) ? [this[0].previousElementSibling] : [] : this[0].previousElementSibling ? [this[0].previousElementSibling] : [] : []);
      }, prevAll: function prevAll(t) {
        var s = [],
            i = this[0];if (!i) return new e([]);for (; i.previousElementSibling;) {
          var r = i.previousElementSibling;t ? a(r).is(t) && s.push(r) : s.push(r), i = r;
        }return new e(s);
      }, parent: function parent(e) {
        for (var t = [], s = 0; s < this.length; s++) {
          e ? a(this[s].parentNode).is(e) && t.push(this[s].parentNode) : t.push(this[s].parentNode);
        }return a(a.unique(t));
      }, parents: function parents(e) {
        for (var t = [], s = 0; s < this.length; s++) {
          for (var i = this[s].parentNode; i;) {
            e ? a(i).is(e) && t.push(i) : t.push(i), i = i.parentNode;
          }
        }return a(a.unique(t));
      }, find: function find(a) {
        for (var t = [], s = 0; s < this.length; s++) {
          for (var i = this[s].querySelectorAll(a), r = 0; r < i.length; r++) {
            t.push(i[r]);
          }
        }return new e(t);
      }, children: function children(t) {
        for (var s = [], i = 0; i < this.length; i++) {
          for (var r = this[i].childNodes, n = 0; n < r.length; n++) {
            t ? 1 === r[n].nodeType && a(r[n]).is(t) && s.push(r[n]) : 1 === r[n].nodeType && s.push(r[n]);
          }
        }return new e(a.unique(s));
      }, remove: function remove() {
        for (var e = 0; e < this.length; e++) {
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        }return this;
      }, add: function add() {
        var e,
            t,
            s = this;for (e = 0; e < arguments.length; e++) {
          var i = a(arguments[e]);for (t = 0; t < i.length; t++) {
            s[s.length] = i[t], s.length++;
          }
        }return s;
      } }, a.fn = e.prototype, a.unique = function (e) {
      for (var a = [], t = 0; t < e.length; t++) {
        a.indexOf(e[t]) === -1 && a.push(e[t]);
      }return a;
    }, a;
  }(), s = ["jQuery", "Zepto", "Dom7"], i = 0; i < s.length; i++) {
    window[s[i]] && function (e) {
      e.fn.swiper = function (t) {
        var s;return e(this).each(function () {
          var e = new a(this, t);s || (s = e);
        }), s;
      };
    }(window[s[i]]);
  }var r;r = void 0 === t ? window.Dom7 || window.Zepto || __webpack_provided_window_dot_jQuery : t, r && ("transitionEnd" in r.fn || (r.fn.transitionEnd = function (e) {
    function a(r) {
      if (r.target === this) for (e.call(this, r), t = 0; t < s.length; t++) {
        i.off(s[t], a);
      }
    }var t,
        s = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
        i = this;if (e) for (t = 0; t < s.length; t++) {
      i.on(s[t], a);
    }return this;
  }), "transform" in r.fn || (r.fn.transform = function (e) {
    for (var a = 0; a < this.length; a++) {
      var t = this[a].style;t.webkitTransform = t.MsTransform = t.msTransform = t.MozTransform = t.OTransform = t.transform = e;
    }return this;
  }), "transition" in r.fn || (r.fn.transition = function (e) {
    "string" != typeof e && (e += "ms");for (var a = 0; a < this.length; a++) {
      var t = this[a].style;t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = e;
    }return this;
  }), "outerWidth" in r.fn || (r.fn.outerWidth = function (e) {
    return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null;
  })), window.Swiper = a;
}(),  true ? module.exports = window.Swiper : "function" == typeof define && define.amd && define([], function () {
  "use strict";
  return window.Swiper;
});
//# sourceMappingURL=maps/swiper.min.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(0)))

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vendors_swiper_dist_js_swiper_min_js__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vendors_swiper_dist_js_swiper_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vendors_swiper_dist_js_swiper_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vendors_jquery_knob_dist_jquery_knob_min_js__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vendors_jquery_knob_dist_jquery_knob_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__vendors_jquery_knob_dist_jquery_knob_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_js_custom_js_sparkline_jquery_flot_spline_js__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_js_custom_js_sparkline_jquery_flot_spline_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__assets_js_custom_js_sparkline_jquery_flot_spline_js__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: "widgets",
    mounted: function mounted() {
        "use strict";

        $(document).ready(function () {
            var options = {
                useEasing: true,
                useGrouping: true,
                decimal: '.',
                prefix: '',
                suffix: ''
            };

            //sparkline charts

            $("#sparkline2").sparkline([6, 7, 8, 6, 4, 7, 10, 12, 7, 6, 9, 12], {
                type: 'bar',
                width: '100%',
                barWidth: '15%',
                height: '135',
                barColor: '#66ccff',
                negBarColor: '#fff'
            });
            // knob animated code
            $('.knob').val(0).trigger('change').delay(2000);
            var myKnob = $(".knob").knob({
                'min': 0,
                'max': 100,
                'readOnly': true
            });
            var tmr = self.setInterval(function () {
                myDelay();
            }, 450);
            var m = 0;

            function myDelay() {
                m += 10;
                switch (m) {
                    case 80:
                        window.clearInterval(tmr);
                        break;
                }
                $('.knob').val(m).trigger('change');
            }

            // swiper
            function swiper_rotate() {
                var swiper = new Swiper('.swiper_content', {
                    centeredSlides: true,
                    autoplay: 4500,
                    speed: 1050,
                    effect: 'fade',
                    loop: true,
                    autoplayDisableOnInteraction: false
                });
            }

            swiper_rotate();
            $("[data-toggle='offcanvas']").click(function (e) {
                swiper_rotate();
            });
            // swiper ends
            // animation
            $(".careers-item").on('mouseenter', function () {
                $(this).find(".hover-rotate").css({
                    "margin-left": "0"
                }).removeClass("fa-5x");
                $(this).find(".hover-rotate").css({
                    "padding": "10px"
                }).addClass("fa-3x animated zoomIn");
            }).on('mouseleave', function () {
                $(this).find(".hover-rotate").css("margin", "auto").addClass("fa-5x animated zoomIn");
                $(this).find(".hover-rotate").css("padding", "0px").removeClass("fa-3x animated zoomIn");
            });
        });
    },
    destroyed: function destroyed() {}
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 682:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
exports.push([module.i, "\n.img_space, .img_widget {\r\n    border-radius : 50%;\n}\n.img_space {\r\n    margin-left      : -120px;\r\n    width            : 155px;\r\n    height           : 155px;\r\n    padding          : 5px;\r\n    background-color : #EBF1F6;\n}\n.fa-stack {\r\n    margin-left : 20px;\n}\n.faceb {\r\n    color : #6699cc;\n}\n.googleplus {\r\n    color : #ff6666;\n}\n.tweet {\r\n    color : #66ccff;\n}\n.flick {\r\n    color : #ccc;\n}\n.youtube {\r\n    color : #ff6666;\n}\n.text-dark {\r\n    color : #797979;\n}\n.m-b-0 {\r\n    margin-bottom : 0;\n}\n.card-box {\r\n    padding               : 16px;\r\n    border                : 1px solid rgba(54, 64, 74, 0.19);\r\n    border-radius         : 3px;\r\n    -moz-border-radius    : 3px;\r\n    background-clip       : padding-box;\r\n    margin-bottom         : 20px;\r\n    background-color      : #ffffff;\n}\r\n/*========= second widget code ===============*/\n.widget-bg-color-icon .bg-icon-info {\r\n    background-color : rgba(185, 209, 287, 1);\r\n    border           : 1px solid #6699cc;\n}\n.widget-bg-color-icon .bg-icon {\r\n    height                : 80px;\r\n    width                 : 80px;\r\n    text-align            : center;\r\n    border-radius         : 50%;\r\n    -moz-border-radius    : 50%;\r\n    background-clip       : padding-box;\n}\n.widget-bg-color-icon .bg-icon i {\r\n    font-size   : 32px;\r\n    line-height : 80px;\n}\n.border_success {\r\n    border : 1px solid #66cc99;\n}\n.m-r-5 {\r\n    margin-right : 5px;\n}\n.border_danger {\r\n    border : 1px solid rgba(255, 163, 163, 1);\n}\r\n/*======= list box one css ===========*/\n.slider-content .post-info {\r\n    background-color           : #ffffff;\r\n    padding                    : 20px;\r\n    border-bottom-left-radius  : 4px;\r\n    border-bottom-right-radius : 4px;\n}\n.carousel {\r\n    position : relative;\n}\n.text-muted {\r\n    color : #DCDCDC;\n}\n.slider-content.m-b-20 {\r\n    margin-bottom : 20px;\r\n    border: 1px solid rgba(54, 64, 74, 0.19);\r\n    border-radius: 3px;\n}\n.panel-widget .panel-heading {\r\n    border-bottom    : 0;\r\n    background-color : #ffffff;\n}\r\n/*===== third widget code =========*/\n.profile-widget .bg-profile {\r\n    height : 125px;\n}\n.bg-custom1 {\r\n    background-color : #418AC9;\n}\n.profile-widget .img-thumbnail {\r\n    margin-top : -42px;\r\n    border     : none;\n}\n.img-circle {\r\n    border-radius : 50%;\n}\n.p-0 {\r\n    padding : 0;\n}\n.p-t-b-20 {\r\n    padding : 20px 0;\n}\n.p-b-10 {\r\n    padding-bottom : 10px;\n}\n.m-t-20 {\r\n    margin-top : 20px;\n}\n.social_icons {\r\n    font-size : 20px;\n}\r\n/*===== image photographer=====*/\n.img_alt {\r\n    width  : 65px;\r\n    height : auto;\r\n    float  : left;\r\n    border : 8px solid #fff;\n}\n.nav_border > li > a {\r\n    border-bottom : 1px solid #eee;\r\n    padding       : 10px 2px;\r\n    line-height   : 20px;\n}\n.panel-heading.stat {\r\n    background-color : #f0ad4e;\r\n    color            : #fff;\n}\n.user-username {\r\n    margin-left : 75px;\n}\n.user-po {\r\n    margin-left : 75px;\n}\r\n/*======= featured widget ===========*/\n.fa.pull-left {\r\n    margin-right : 5px;\n}\n.padding-right-small {\r\n    padding-right : 8px;\n}\n.padding-top-small {\r\n    padding-top : 12px;\n}\n.padding-bottom {\r\n    padding-bottom : 16px;\n}\n.p-b-0 {\r\n    padding-bottom : 0;\n}\n.ih-item.square {\r\n    width : 100%;\n}\n.ih-item.square img {\r\n    height : 202px;\n}\n.ih-item.square.effect1.colored .info {\r\n    background : #66ccff;\n}\n.ih-item.square.effect1.top_to_bottom .info p {\r\n    color     : #fff;\r\n    font-size : 13px;\n}\n.list-group-item {\r\n    padding : 12px 15px;\n}\n.panel-widget .careers-item {\r\n    height : 100px;\n}", ""]);

/***/ }),

/***/ 683:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
exports.push([module.i, "\n@charset \"UTF-8\";\n\n/*!\n * animate.css -http://daneden.me/animate\n * Version - 3.5.1\n * Licensed under the MIT license - http://opensource.org/licenses/MIT\n *\n * Copyright (c) 2016 Daniel Eden\n */\n.animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both\n}\n.animated.infinite{-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite\n}\n.animated.hinge{-webkit-animation-duration:2s;animation-duration:2s\n}\n.animated.bounceIn,.animated.bounceOut,.animated.flipOutX,.animated.flipOutY{-webkit-animation-duration:.75s;animation-duration:.75s\n}\n@-webkit-keyframes bounce{\n0%,20%,53%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1);-webkit-transform:translateZ(0);transform:translateZ(0)\n}\n40%,43%{-webkit-transform:translate3d(0,-30px,0);transform:translate3d(0,-30px,0)\n}\n40%,43%,70%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06)\n}\n70%{-webkit-transform:translate3d(0,-15px,0);transform:translate3d(0,-15px,0)\n}\n90%{-webkit-transform:translate3d(0,-4px,0);transform:translate3d(0,-4px,0)\n}\n}\n@keyframes bounce{\n0%,20%,53%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1);-webkit-transform:translateZ(0);transform:translateZ(0)\n}\n40%,43%{-webkit-transform:translate3d(0,-30px,0);transform:translate3d(0,-30px,0)\n}\n40%,43%,70%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06)\n}\n70%{-webkit-transform:translate3d(0,-15px,0);transform:translate3d(0,-15px,0)\n}\n90%{-webkit-transform:translate3d(0,-4px,0);transform:translate3d(0,-4px,0)\n}\n}\n.bounce{-webkit-animation-name:bounce;animation-name:bounce;-webkit-transform-origin:center bottom;transform-origin:center bottom\n}\n@-webkit-keyframes flash{\n0%,50%,to{opacity:1\n}\n25%,75%{opacity:0\n}\n}\n@keyframes flash{\n0%,50%,to{opacity:1\n}\n25%,75%{opacity:0\n}\n}\n.flash{-webkit-animation-name:flash;animation-name:flash\n}\n@-webkit-keyframes pulse{\n0%{-webkit-transform:scaleX(1);transform:scaleX(1)\n}\n50%{-webkit-transform:scale3d(1.05,1.05,1.05);transform:scale3d(1.05,1.05,1.05)\n}\nto{-webkit-transform:scaleX(1);transform:scaleX(1)\n}\n}\n@keyframes pulse{\n0%{-webkit-transform:scaleX(1);transform:scaleX(1)\n}\n50%{-webkit-transform:scale3d(1.05,1.05,1.05);transform:scale3d(1.05,1.05,1.05)\n}\nto{-webkit-transform:scaleX(1);transform:scaleX(1)\n}\n}\n.pulse{-webkit-animation-name:pulse;animation-name:pulse\n}\n@-webkit-keyframes rubberBand{\n0%{-webkit-transform:scaleX(1);transform:scaleX(1)\n}\n30%{-webkit-transform:scale3d(1.25,.75,1);transform:scale3d(1.25,.75,1)\n}\n40%{-webkit-transform:scale3d(.75,1.25,1);transform:scale3d(.75,1.25,1)\n}\n50%{-webkit-transform:scale3d(1.15,.85,1);transform:scale3d(1.15,.85,1)\n}\n65%{-webkit-transform:scale3d(.95,1.05,1);transform:scale3d(.95,1.05,1)\n}\n75%{-webkit-transform:scale3d(1.05,.95,1);transform:scale3d(1.05,.95,1)\n}\nto{-webkit-transform:scaleX(1);transform:scaleX(1)\n}\n}\n@keyframes rubberBand{\n0%{-webkit-transform:scaleX(1);transform:scaleX(1)\n}\n30%{-webkit-transform:scale3d(1.25,.75,1);transform:scale3d(1.25,.75,1)\n}\n40%{-webkit-transform:scale3d(.75,1.25,1);transform:scale3d(.75,1.25,1)\n}\n50%{-webkit-transform:scale3d(1.15,.85,1);transform:scale3d(1.15,.85,1)\n}\n65%{-webkit-transform:scale3d(.95,1.05,1);transform:scale3d(.95,1.05,1)\n}\n75%{-webkit-transform:scale3d(1.05,.95,1);transform:scale3d(1.05,.95,1)\n}\nto{-webkit-transform:scaleX(1);transform:scaleX(1)\n}\n}\n.rubberBand{-webkit-animation-name:rubberBand;animation-name:rubberBand\n}\n@-webkit-keyframes shake{\n0%,to{-webkit-transform:translateZ(0);transform:translateZ(0)\n}\n10%,30%,50%,70%,90%{-webkit-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0)\n}\n20%,40%,60%,80%{-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)\n}\n}\n@keyframes shake{\n0%,to{-webkit-transform:translateZ(0);transform:translateZ(0)\n}\n10%,30%,50%,70%,90%{-webkit-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0)\n}\n20%,40%,60%,80%{-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)\n}\n}\n.shake{-webkit-animation-name:shake;animation-name:shake\n}\n@-webkit-keyframes headShake{\n0%{-webkit-transform:translateX(0);transform:translateX(0)\n}\n6.5%{-webkit-transform:translateX(-6px) rotateY(-9deg);transform:translateX(-6px) rotateY(-9deg)\n}\n18.5%{-webkit-transform:translateX(5px) rotateY(7deg);transform:translateX(5px) rotateY(7deg)\n}\n31.5%{-webkit-transform:translateX(-3px) rotateY(-5deg);transform:translateX(-3px) rotateY(-5deg)\n}\n43.5%{-webkit-transform:translateX(2px) rotateY(3deg);transform:translateX(2px) rotateY(3deg)\n}\n50%{-webkit-transform:translateX(0);transform:translateX(0)\n}\n}\n@keyframes headShake{\n0%{-webkit-transform:translateX(0);transform:translateX(0)\n}\n6.5%{-webkit-transform:translateX(-6px) rotateY(-9deg);transform:translateX(-6px) rotateY(-9deg)\n}\n18.5%{-webkit-transform:translateX(5px) rotateY(7deg);transform:translateX(5px) rotateY(7deg)\n}\n31.5%{-webkit-transform:translateX(-3px) rotateY(-5deg);transform:translateX(-3px) rotateY(-5deg)\n}\n43.5%{-webkit-transform:translateX(2px) rotateY(3deg);transform:translateX(2px) rotateY(3deg)\n}\n50%{-webkit-transform:translateX(0);transform:translateX(0)\n}\n}\n.headShake{-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-name:headShake;animation-name:headShake\n}\n@-webkit-keyframes swing{\n20%{-webkit-transform:rotate(15deg);transform:rotate(15deg)\n}\n40%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)\n}\n60%{-webkit-transform:rotate(5deg);transform:rotate(5deg)\n}\n80%{-webkit-transform:rotate(-5deg);transform:rotate(-5deg)\n}\nto{-webkit-transform:rotate(0deg);transform:rotate(0deg)\n}\n}\n@keyframes swing{\n20%{-webkit-transform:rotate(15deg);transform:rotate(15deg)\n}\n40%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)\n}\n60%{-webkit-transform:rotate(5deg);transform:rotate(5deg)\n}\n80%{-webkit-transform:rotate(-5deg);transform:rotate(-5deg)\n}\nto{-webkit-transform:rotate(0deg);transform:rotate(0deg)\n}\n}\n.swing{-webkit-transform-origin:top center;transform-origin:top center;-webkit-animation-name:swing;animation-name:swing\n}\n@-webkit-keyframes tada{\n0%{-webkit-transform:scaleX(1);transform:scaleX(1)\n}\n10%,20%{-webkit-transform:scale3d(.9,.9,.9) rotate(-3deg);transform:scale3d(.9,.9,.9) rotate(-3deg)\n}\n30%,50%,70%,90%{-webkit-transform:scale3d(1.1,1.1,1.1) rotate(3deg);transform:scale3d(1.1,1.1,1.1) rotate(3deg)\n}\n40%,60%,80%{-webkit-transform:scale3d(1.1,1.1,1.1) rotate(-3deg);transform:scale3d(1.1,1.1,1.1) rotate(-3deg)\n}\nto{-webkit-transform:scaleX(1);transform:scaleX(1)\n}\n}\n@keyframes tada{\n0%{-webkit-transform:scaleX(1);transform:scaleX(1)\n}\n10%,20%{-webkit-transform:scale3d(.9,.9,.9) rotate(-3deg);transform:scale3d(.9,.9,.9) rotate(-3deg)\n}\n30%,50%,70%,90%{-webkit-transform:scale3d(1.1,1.1,1.1) rotate(3deg);transform:scale3d(1.1,1.1,1.1) rotate(3deg)\n}\n40%,60%,80%{-webkit-transform:scale3d(1.1,1.1,1.1) rotate(-3deg);transform:scale3d(1.1,1.1,1.1) rotate(-3deg)\n}\nto{-webkit-transform:scaleX(1);transform:scaleX(1)\n}\n}\n.tada{-webkit-animation-name:tada;animation-name:tada\n}\n@-webkit-keyframes wobble{\n0%{-webkit-transform:none;transform:none\n}\n15%{-webkit-transform:translate3d(-25%,0,0) rotate(-5deg);transform:translate3d(-25%,0,0) rotate(-5deg)\n}\n30%{-webkit-transform:translate3d(20%,0,0) rotate(3deg);transform:translate3d(20%,0,0) rotate(3deg)\n}\n45%{-webkit-transform:translate3d(-15%,0,0) rotate(-3deg);transform:translate3d(-15%,0,0) rotate(-3deg)\n}\n60%{-webkit-transform:translate3d(10%,0,0) rotate(2deg);transform:translate3d(10%,0,0) rotate(2deg)\n}\n75%{-webkit-transform:translate3d(-5%,0,0) rotate(-1deg);transform:translate3d(-5%,0,0) rotate(-1deg)\n}\nto{-webkit-transform:none;transform:none\n}\n}\n@keyframes wobble{\n0%{-webkit-transform:none;transform:none\n}\n15%{-webkit-transform:translate3d(-25%,0,0) rotate(-5deg);transform:translate3d(-25%,0,0) rotate(-5deg)\n}\n30%{-webkit-transform:translate3d(20%,0,0) rotate(3deg);transform:translate3d(20%,0,0) rotate(3deg)\n}\n45%{-webkit-transform:translate3d(-15%,0,0) rotate(-3deg);transform:translate3d(-15%,0,0) rotate(-3deg)\n}\n60%{-webkit-transform:translate3d(10%,0,0) rotate(2deg);transform:translate3d(10%,0,0) rotate(2deg)\n}\n75%{-webkit-transform:translate3d(-5%,0,0) rotate(-1deg);transform:translate3d(-5%,0,0) rotate(-1deg)\n}\nto{-webkit-transform:none;transform:none\n}\n}\n.wobble{-webkit-animation-name:wobble;animation-name:wobble\n}\n@-webkit-keyframes jello{\n0%,11.1%,to{-webkit-transform:none;transform:none\n}\n22.2%{-webkit-transform:skewX(-12.5deg) skewY(-12.5deg);transform:skewX(-12.5deg) skewY(-12.5deg)\n}\n33.3%{-webkit-transform:skewX(6.25deg) skewY(6.25deg);transform:skewX(6.25deg) skewY(6.25deg)\n}\n44.4%{-webkit-transform:skewX(-3.125deg) skewY(-3.125deg);transform:skewX(-3.125deg) skewY(-3.125deg)\n}\n55.5%{-webkit-transform:skewX(1.5625deg) skewY(1.5625deg);transform:skewX(1.5625deg) skewY(1.5625deg)\n}\n66.6%{-webkit-transform:skewX(-.78125deg) skewY(-.78125deg);transform:skewX(-.78125deg) skewY(-.78125deg)\n}\n77.7%{-webkit-transform:skewX(.390625deg) skewY(.390625deg);transform:skewX(.390625deg) skewY(.390625deg)\n}\n88.8%{-webkit-transform:skewX(-.1953125deg) skewY(-.1953125deg);transform:skewX(-.1953125deg) skewY(-.1953125deg)\n}\n}\n@keyframes jello{\n0%,11.1%,to{-webkit-transform:none;transform:none\n}\n22.2%{-webkit-transform:skewX(-12.5deg) skewY(-12.5deg);transform:skewX(-12.5deg) skewY(-12.5deg)\n}\n33.3%{-webkit-transform:skewX(6.25deg) skewY(6.25deg);transform:skewX(6.25deg) skewY(6.25deg)\n}\n44.4%{-webkit-transform:skewX(-3.125deg) skewY(-3.125deg);transform:skewX(-3.125deg) skewY(-3.125deg)\n}\n55.5%{-webkit-transform:skewX(1.5625deg) skewY(1.5625deg);transform:skewX(1.5625deg) skewY(1.5625deg)\n}\n66.6%{-webkit-transform:skewX(-.78125deg) skewY(-.78125deg);transform:skewX(-.78125deg) skewY(-.78125deg)\n}\n77.7%{-webkit-transform:skewX(.390625deg) skewY(.390625deg);transform:skewX(.390625deg) skewY(.390625deg)\n}\n88.8%{-webkit-transform:skewX(-.1953125deg) skewY(-.1953125deg);transform:skewX(-.1953125deg) skewY(-.1953125deg)\n}\n}\n.jello{-webkit-animation-name:jello;animation-name:jello;-webkit-transform-origin:center;transform-origin:center\n}\n@-webkit-keyframes bounceIn{\n0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)\n}\n0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)\n}\n20%{-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)\n}\n40%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)\n}\n60%{opacity:1;-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)\n}\n80%{-webkit-transform:scale3d(.97,.97,.97);transform:scale3d(.97,.97,.97)\n}\nto{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)\n}\n}\n@keyframes bounceIn{\n0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)\n}\n0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)\n}\n20%{-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)\n}\n40%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)\n}\n60%{opacity:1;-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)\n}\n80%{-webkit-transform:scale3d(.97,.97,.97);transform:scale3d(.97,.97,.97)\n}\nto{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)\n}\n}\n.bounceIn{-webkit-animation-name:bounceIn;animation-name:bounceIn\n}\n@-webkit-keyframes bounceInDown{\n0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)\n}\n0%{opacity:0;-webkit-transform:translate3d(0,-3000px,0);transform:translate3d(0,-3000px,0)\n}\n60%{opacity:1;-webkit-transform:translate3d(0,25px,0);transform:translate3d(0,25px,0)\n}\n75%{-webkit-transform:translate3d(0,-10px,0);transform:translate3d(0,-10px,0)\n}\n90%{-webkit-transform:translate3d(0,5px,0);transform:translate3d(0,5px,0)\n}\nto{-webkit-transform:none;transform:none\n}\n}\n@keyframes bounceInDown{\n0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)\n}\n0%{opacity:0;-webkit-transform:translate3d(0,-3000px,0);transform:translate3d(0,-3000px,0)\n}\n60%{opacity:1;-webkit-transform:translate3d(0,25px,0);transform:translate3d(0,25px,0)\n}\n75%{-webkit-transform:translate3d(0,-10px,0);transform:translate3d(0,-10px,0)\n}\n90%{-webkit-transform:translate3d(0,5px,0);transform:translate3d(0,5px,0)\n}\nto{-webkit-transform:none;transform:none\n}\n}\n.bounceInDown{-webkit-animation-name:bounceInDown;animation-name:bounceInDown\n}\n@-webkit-keyframes bounceInLeft{\n0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)\n}\n0%{opacity:0;-webkit-transform:translate3d(-3000px,0,0);transform:translate3d(-3000px,0,0)\n}\n60%{opacity:1;-webkit-transform:translate3d(25px,0,0);transform:translate3d(25px,0,0)\n}\n75%{-webkit-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0)\n}\n90%{-webkit-transform:translate3d(5px,0,0);transform:translate3d(5px,0,0)\n}\nto{-webkit-transform:none;transform:none\n}\n}\n@keyframes bounceInLeft{\n0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)\n}\n0%{opacity:0;-webkit-transform:translate3d(-3000px,0,0);transform:translate3d(-3000px,0,0)\n}\n60%{opacity:1;-webkit-transform:translate3d(25px,0,0);transform:translate3d(25px,0,0)\n}\n75%{-webkit-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0)\n}\n90%{-webkit-transform:translate3d(5px,0,0);transform:translate3d(5px,0,0)\n}\nto{-webkit-transform:none;transform:none\n}\n}\n.bounceInLeft{-webkit-animation-name:bounceInLeft;animation-name:bounceInLeft\n}\n@-webkit-keyframes bounceInRight{\n0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)\n}\n0%{opacity:0;-webkit-transform:translate3d(3000px,0,0);transform:translate3d(3000px,0,0)\n}\n60%{opacity:1;-webkit-transform:translate3d(-25px,0,0);transform:translate3d(-25px,0,0)\n}\n75%{-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)\n}\n90%{-webkit-transform:translate3d(-5px,0,0);transform:translate3d(-5px,0,0)\n}\nto{-webkit-transform:none;transform:none\n}\n}\n@keyframes bounceInRight{\n0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)\n}\n0%{opacity:0;-webkit-transform:translate3d(3000px,0,0);transform:translate3d(3000px,0,0)\n}\n60%{opacity:1;-webkit-transform:translate3d(-25px,0,0);transform:translate3d(-25px,0,0)\n}\n75%{-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)\n}\n90%{-webkit-transform:translate3d(-5px,0,0);transform:translate3d(-5px,0,0)\n}\nto{-webkit-transform:none;transform:none\n}\n}\n.bounceInRight{-webkit-animation-name:bounceInRight;animation-name:bounceInRight\n}\n@-webkit-keyframes bounceInUp{\n0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)\n}\n0%{opacity:0;-webkit-transform:translate3d(0,3000px,0);transform:translate3d(0,3000px,0)\n}\n60%{opacity:1;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)\n}\n75%{-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)\n}\n90%{-webkit-transform:translate3d(0,-5px,0);transform:translate3d(0,-5px,0)\n}\nto{-webkit-transform:translateZ(0);transform:translateZ(0)\n}\n}\n@keyframes bounceInUp{\n0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)\n}\n0%{opacity:0;-webkit-transform:translate3d(0,3000px,0);transform:translate3d(0,3000px,0)\n}\n60%{opacity:1;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)\n}\n75%{-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)\n}\n90%{-webkit-transform:translate3d(0,-5px,0);transform:translate3d(0,-5px,0)\n}\nto{-webkit-transform:translateZ(0);transform:translateZ(0)\n}\n}\n.bounceInUp{-webkit-animation-name:bounceInUp;animation-name:bounceInUp\n}\n@-webkit-keyframes bounceOut{\n20%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)\n}\n50%,55%{opacity:1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)\n}\nto{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)\n}\n}\n@keyframes bounceOut{\n20%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)\n}\n50%,55%{opacity:1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)\n}\nto{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)\n}\n}\n.bounceOut{-webkit-animation-name:bounceOut;animation-name:bounceOut\n}\n@-webkit-keyframes bounceOutDown{\n20%{-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)\n}\n40%,45%{opacity:1;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)\n}\nto{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)\n}\n}\n@keyframes bounceOutDown{\n20%{-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)\n}\n40%,45%{opacity:1;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)\n}\nto{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)\n}\n}\n.bounceOutDown{-webkit-animation-name:bounceOutDown;animation-name:bounceOutDown\n}\n@-webkit-keyframes bounceOutLeft{\n20%{opacity:1;-webkit-transform:translate3d(20px,0,0);transform:translate3d(20px,0,0)\n}\nto{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)\n}\n}\n@keyframes bounceOutLeft{\n20%{opacity:1;-webkit-transform:translate3d(20px,0,0);transform:translate3d(20px,0,0)\n}\nto{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)\n}\n}\n.bounceOutLeft{-webkit-animation-name:bounceOutLeft;animation-name:bounceOutLeft\n}\n@-webkit-keyframes bounceOutRight{\n20%{opacity:1;-webkit-transform:translate3d(-20px,0,0);transform:translate3d(-20px,0,0)\n}\nto{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)\n}\n}\n@keyframes bounceOutRight{\n20%{opacity:1;-webkit-transform:translate3d(-20px,0,0);transform:translate3d(-20px,0,0)\n}\nto{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)\n}\n}\n.bounceOutRight{-webkit-animation-name:bounceOutRight;animation-name:bounceOutRight\n}\n@-webkit-keyframes bounceOutUp{\n20%{-webkit-transform:translate3d(0,-10px,0);transform:translate3d(0,-10px,0)\n}\n40%,45%{opacity:1;-webkit-transform:translate3d(0,20px,0);transform:translate3d(0,20px,0)\n}\nto{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)\n}\n}\n@keyframes bounceOutUp{\n20%{-webkit-transform:translate3d(0,-10px,0);transform:translate3d(0,-10px,0)\n}\n40%,45%{opacity:1;-webkit-transform:translate3d(0,20px,0);transform:translate3d(0,20px,0)\n}\nto{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)\n}\n}\n.bounceOutUp{-webkit-animation-name:bounceOutUp;animation-name:bounceOutUp\n}\n@-webkit-keyframes fadeIn{\n0%{opacity:0\n}\nto{opacity:1\n}\n}\n@keyframes fadeIn{\n0%{opacity:0\n}\nto{opacity:1\n}\n}\n.fadeIn{-webkit-animation-name:fadeIn;animation-name:fadeIn\n}\n@-webkit-keyframes fadeInDown{\n0%{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)\n}\nto{opacity:1;-webkit-transform:none;transform:none\n}\n}\n@keyframes fadeInDown{\n0%{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)\n}\nto{opacity:1;-webkit-transform:none;transform:none\n}\n}\n.fadeInDown{-webkit-animation-name:fadeInDown;animation-name:fadeInDown\n}\n@-webkit-keyframes fadeInDownBig{\n0%{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)\n}\nto{opacity:1;-webkit-transform:none;transform:none\n}\n}\n@keyframes fadeInDownBig{\n0%{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)\n}\nto{opacity:1;-webkit-transform:none;transform:none\n}\n}\n.fadeInDownBig{-webkit-animation-name:fadeInDownBig;animation-name:fadeInDownBig\n}\n@-webkit-keyframes fadeInLeft{\n0%{opacity:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)\n}\nto{opacity:1;-webkit-transform:none;transform:none\n}\n}\n@keyframes fadeInLeft{\n0%{opacity:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)\n}\nto{opacity:1;-webkit-transform:none;transform:none\n}\n}\n.fadeInLeft{-webkit-animation-name:fadeInLeft;animation-name:fadeInLeft\n}\n@-webkit-keyframes fadeInLeftBig{\n0%{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)\n}\nto{opacity:1;-webkit-transform:none;transform:none\n}\n}\n@keyframes fadeInLeftBig{\n0%{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)\n}\nto{opacity:1;-webkit-transform:none;transform:none\n}\n}\n.fadeInLeftBig{-webkit-animation-name:fadeInLeftBig;animation-name:fadeInLeftBig\n}\n@-webkit-keyframes fadeInRight{\n0%{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)\n}\nto{opacity:1;-webkit-transform:none;transform:none\n}\n}\n@keyframes fadeInRight{\n0%{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)\n}\nto{opacity:1;-webkit-transform:none;transform:none\n}\n}\n.fadeInRight{-webkit-animation-name:fadeInRight;animation-name:fadeInRight\n}\n@-webkit-keyframes fadeInRightBig{\n0%{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)\n}\nto{opacity:1;-webkit-transform:none;transform:none\n}\n}\n@keyframes fadeInRightBig{\n0%{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)\n}\nto{opacity:1;-webkit-transform:none;transform:none\n}\n}\n.fadeInRightBig{-webkit-animation-name:fadeInRightBig;animation-name:fadeInRightBig\n}\n@-webkit-keyframes fadeInUp{\n0%{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)\n}\nto{opacity:1;-webkit-transform:none;transform:none\n}\n}\n@keyframes fadeInUp{\n0%{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)\n}\nto{opacity:1;-webkit-transform:none;transform:none\n}\n}\n.fadeInUp{-webkit-animation-name:fadeInUp;animation-name:fadeInUp\n}\n@-webkit-keyframes fadeInUpBig{\n0%{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)\n}\nto{opacity:1;-webkit-transform:none;transform:none\n}\n}\n@keyframes fadeInUpBig{\n0%{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)\n}\nto{opacity:1;-webkit-transform:none;transform:none\n}\n}\n.fadeInUpBig{-webkit-animation-name:fadeInUpBig;animation-name:fadeInUpBig\n}\n@-webkit-keyframes fadeOut{\n0%{opacity:1\n}\nto{opacity:0\n}\n}\n@keyframes fadeOut{\n0%{opacity:1\n}\nto{opacity:0\n}\n}\n.fadeOut{-webkit-animation-name:fadeOut;animation-name:fadeOut\n}\n@-webkit-keyframes fadeOutDown{\n0%{opacity:1\n}\nto{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)\n}\n}\n@keyframes fadeOutDown{\n0%{opacity:1\n}\nto{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)\n}\n}\n.fadeOutDown{-webkit-animation-name:fadeOutDown;animation-name:fadeOutDown\n}\n@-webkit-keyframes fadeOutDownBig{\n0%{opacity:1\n}\nto{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)\n}\n}\n@keyframes fadeOutDownBig{\n0%{opacity:1\n}\nto{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)\n}\n}\n.fadeOutDownBig{-webkit-animation-name:fadeOutDownBig;animation-name:fadeOutDownBig\n}\n@-webkit-keyframes fadeOutLeft{\n0%{opacity:1\n}\nto{opacity:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)\n}\n}\n@keyframes fadeOutLeft{\n0%{opacity:1\n}\nto{opacity:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)\n}\n}\n.fadeOutLeft{-webkit-animation-name:fadeOutLeft;animation-name:fadeOutLeft\n}\n@-webkit-keyframes fadeOutLeftBig{\n0%{opacity:1\n}\nto{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)\n}\n}\n@keyframes fadeOutLeftBig{\n0%{opacity:1\n}\nto{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)\n}\n}\n.fadeOutLeftBig{-webkit-animation-name:fadeOutLeftBig;animation-name:fadeOutLeftBig\n}\n@-webkit-keyframes fadeOutRight{\n0%{opacity:1\n}\nto{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)\n}\n}\n@keyframes fadeOutRight{\n0%{opacity:1\n}\nto{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)\n}\n}\n.fadeOutRight{-webkit-animation-name:fadeOutRight;animation-name:fadeOutRight\n}\n@-webkit-keyframes fadeOutRightBig{\n0%{opacity:1\n}\nto{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)\n}\n}\n@keyframes fadeOutRightBig{\n0%{opacity:1\n}\nto{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)\n}\n}\n.fadeOutRightBig{-webkit-animation-name:fadeOutRightBig;animation-name:fadeOutRightBig\n}\n@-webkit-keyframes fadeOutUp{\n0%{opacity:1\n}\nto{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)\n}\n}\n@keyframes fadeOutUp{\n0%{opacity:1\n}\nto{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)\n}\n}\n.fadeOutUp{-webkit-animation-name:fadeOutUp;animation-name:fadeOutUp\n}\n@-webkit-keyframes fadeOutUpBig{\n0%{opacity:1\n}\nto{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)\n}\n}\n@keyframes fadeOutUpBig{\n0%{opacity:1\n}\nto{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)\n}\n}\n.fadeOutUpBig{-webkit-animation-name:fadeOutUpBig;animation-name:fadeOutUpBig\n}\n@-webkit-keyframes flip{\n0%{-webkit-transform:perspective(400px) rotateY(-1turn);transform:perspective(400px) rotateY(-1turn)\n}\n0%,40%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out\n}\n40%{-webkit-transform:perspective(400px) translateZ(150px) rotateY(-190deg);transform:perspective(400px) translateZ(150px) rotateY(-190deg)\n}\n50%{-webkit-transform:perspective(400px) translateZ(150px) rotateY(-170deg);transform:perspective(400px) translateZ(150px) rotateY(-170deg)\n}\n50%,80%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in\n}\n80%{-webkit-transform:perspective(400px) scale3d(.95,.95,.95);transform:perspective(400px) scale3d(.95,.95,.95)\n}\nto{-webkit-transform:perspective(400px);transform:perspective(400px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in\n}\n}\n@keyframes flip{\n0%{-webkit-transform:perspective(400px) rotateY(-1turn);transform:perspective(400px) rotateY(-1turn)\n}\n0%,40%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out\n}\n40%{-webkit-transform:perspective(400px) translateZ(150px) rotateY(-190deg);transform:perspective(400px) translateZ(150px) rotateY(-190deg)\n}\n50%{-webkit-transform:perspective(400px) translateZ(150px) rotateY(-170deg);transform:perspective(400px) translateZ(150px) rotateY(-170deg)\n}\n50%,80%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in\n}\n80%{-webkit-transform:perspective(400px) scale3d(.95,.95,.95);transform:perspective(400px) scale3d(.95,.95,.95)\n}\nto{-webkit-transform:perspective(400px);transform:perspective(400px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in\n}\n}\n.animated.flip{-webkit-backface-visibility:visible;backface-visibility:visible;-webkit-animation-name:flip;animation-name:flip\n}\n@-webkit-keyframes flipInX{\n0%{-webkit-transform:perspective(400px) rotateX(90deg);transform:perspective(400px) rotateX(90deg);opacity:0\n}\n0%,40%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in\n}\n40%{-webkit-transform:perspective(400px) rotateX(-20deg);transform:perspective(400px) rotateX(-20deg)\n}\n60%{-webkit-transform:perspective(400px) rotateX(10deg);transform:perspective(400px) rotateX(10deg);opacity:1\n}\n80%{-webkit-transform:perspective(400px) rotateX(-5deg);transform:perspective(400px) rotateX(-5deg)\n}\nto{-webkit-transform:perspective(400px);transform:perspective(400px)\n}\n}\n@keyframes flipInX{\n0%{-webkit-transform:perspective(400px) rotateX(90deg);transform:perspective(400px) rotateX(90deg);opacity:0\n}\n0%,40%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in\n}\n40%{-webkit-transform:perspective(400px) rotateX(-20deg);transform:perspective(400px) rotateX(-20deg)\n}\n60%{-webkit-transform:perspective(400px) rotateX(10deg);transform:perspective(400px) rotateX(10deg);opacity:1\n}\n80%{-webkit-transform:perspective(400px) rotateX(-5deg);transform:perspective(400px) rotateX(-5deg)\n}\nto{-webkit-transform:perspective(400px);transform:perspective(400px)\n}\n}\n.flipInX{-webkit-backface-visibility:visible!important;backface-visibility:visible!important;-webkit-animation-name:flipInX;animation-name:flipInX\n}\n@-webkit-keyframes flipInY{\n0%{-webkit-transform:perspective(400px) rotateY(90deg);transform:perspective(400px) rotateY(90deg);opacity:0\n}\n0%,40%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in\n}\n40%{-webkit-transform:perspective(400px) rotateY(-20deg);transform:perspective(400px) rotateY(-20deg)\n}\n60%{-webkit-transform:perspective(400px) rotateY(10deg);transform:perspective(400px) rotateY(10deg);opacity:1\n}\n80%{-webkit-transform:perspective(400px) rotateY(-5deg);transform:perspective(400px) rotateY(-5deg)\n}\nto{-webkit-transform:perspective(400px);transform:perspective(400px)\n}\n}\n@keyframes flipInY{\n0%{-webkit-transform:perspective(400px) rotateY(90deg);transform:perspective(400px) rotateY(90deg);opacity:0\n}\n0%,40%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in\n}\n40%{-webkit-transform:perspective(400px) rotateY(-20deg);transform:perspective(400px) rotateY(-20deg)\n}\n60%{-webkit-transform:perspective(400px) rotateY(10deg);transform:perspective(400px) rotateY(10deg);opacity:1\n}\n80%{-webkit-transform:perspective(400px) rotateY(-5deg);transform:perspective(400px) rotateY(-5deg)\n}\nto{-webkit-transform:perspective(400px);transform:perspective(400px)\n}\n}\n.flipInY{-webkit-backface-visibility:visible!important;backface-visibility:visible!important;-webkit-animation-name:flipInY;animation-name:flipInY\n}\n@-webkit-keyframes flipOutX{\n0%{-webkit-transform:perspective(400px);transform:perspective(400px)\n}\n30%{-webkit-transform:perspective(400px) rotateX(-20deg);transform:perspective(400px) rotateX(-20deg);opacity:1\n}\nto{-webkit-transform:perspective(400px) rotateX(90deg);transform:perspective(400px) rotateX(90deg);opacity:0\n}\n}\n@keyframes flipOutX{\n0%{-webkit-transform:perspective(400px);transform:perspective(400px)\n}\n30%{-webkit-transform:perspective(400px) rotateX(-20deg);transform:perspective(400px) rotateX(-20deg);opacity:1\n}\nto{-webkit-transform:perspective(400px) rotateX(90deg);transform:perspective(400px) rotateX(90deg);opacity:0\n}\n}\n.flipOutX{-webkit-animation-name:flipOutX;animation-name:flipOutX;-webkit-backface-visibility:visible!important;backface-visibility:visible!important\n}\n@-webkit-keyframes flipOutY{\n0%{-webkit-transform:perspective(400px);transform:perspective(400px)\n}\n30%{-webkit-transform:perspective(400px) rotateY(-15deg);transform:perspective(400px) rotateY(-15deg);opacity:1\n}\nto{-webkit-transform:perspective(400px) rotateY(90deg);transform:perspective(400px) rotateY(90deg);opacity:0\n}\n}\n@keyframes flipOutY{\n0%{-webkit-transform:perspective(400px);transform:perspective(400px)\n}\n30%{-webkit-transform:perspective(400px) rotateY(-15deg);transform:perspective(400px) rotateY(-15deg);opacity:1\n}\nto{-webkit-transform:perspective(400px) rotateY(90deg);transform:perspective(400px) rotateY(90deg);opacity:0\n}\n}\n.flipOutY{-webkit-backface-visibility:visible!important;backface-visibility:visible!important;-webkit-animation-name:flipOutY;animation-name:flipOutY\n}\n@-webkit-keyframes lightSpeedIn{\n0%{-webkit-transform:translate3d(100%,0,0) skewX(-30deg);transform:translate3d(100%,0,0) skewX(-30deg);opacity:0\n}\n60%{-webkit-transform:skewX(20deg);transform:skewX(20deg)\n}\n60%,80%{opacity:1\n}\n80%{-webkit-transform:skewX(-5deg);transform:skewX(-5deg)\n}\nto{-webkit-transform:none;transform:none;opacity:1\n}\n}\n@keyframes lightSpeedIn{\n0%{-webkit-transform:translate3d(100%,0,0) skewX(-30deg);transform:translate3d(100%,0,0) skewX(-30deg);opacity:0\n}\n60%{-webkit-transform:skewX(20deg);transform:skewX(20deg)\n}\n60%,80%{opacity:1\n}\n80%{-webkit-transform:skewX(-5deg);transform:skewX(-5deg)\n}\nto{-webkit-transform:none;transform:none;opacity:1\n}\n}\n.lightSpeedIn{-webkit-animation-name:lightSpeedIn;animation-name:lightSpeedIn;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out\n}\n@-webkit-keyframes lightSpeedOut{\n0%{opacity:1\n}\nto{-webkit-transform:translate3d(100%,0,0) skewX(30deg);transform:translate3d(100%,0,0) skewX(30deg);opacity:0\n}\n}\n@keyframes lightSpeedOut{\n0%{opacity:1\n}\nto{-webkit-transform:translate3d(100%,0,0) skewX(30deg);transform:translate3d(100%,0,0) skewX(30deg);opacity:0\n}\n}\n.lightSpeedOut{-webkit-animation-name:lightSpeedOut;animation-name:lightSpeedOut;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in\n}\n@-webkit-keyframes rotateIn{\n0%{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:rotate(-200deg);transform:rotate(-200deg);opacity:0\n}\n0%,to{-webkit-transform-origin:center\n}\nto{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:none;transform:none;opacity:1\n}\n}\n@keyframes rotateIn{\n0%{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:rotate(-200deg);transform:rotate(-200deg);opacity:0\n}\n0%,to{-webkit-transform-origin:center\n}\nto{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:none;transform:none;opacity:1\n}\n}\n.rotateIn{-webkit-animation-name:rotateIn;animation-name:rotateIn\n}\n@-webkit-keyframes rotateInDownLeft{\n0%{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0\n}\n0%,to{-webkit-transform-origin:left bottom\n}\nto{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:none;transform:none;opacity:1\n}\n}\n@keyframes rotateInDownLeft{\n0%{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0\n}\n0%,to{-webkit-transform-origin:left bottom\n}\nto{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:none;transform:none;opacity:1\n}\n}\n.rotateInDownLeft{-webkit-animation-name:rotateInDownLeft;animation-name:rotateInDownLeft\n}\n@-webkit-keyframes rotateInDownRight{\n0%{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0\n}\n0%,to{-webkit-transform-origin:right bottom\n}\nto{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:none;transform:none;opacity:1\n}\n}\n@keyframes rotateInDownRight{\n0%{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0\n}\n0%,to{-webkit-transform-origin:right bottom\n}\nto{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:none;transform:none;opacity:1\n}\n}\n.rotateInDownRight{-webkit-animation-name:rotateInDownRight;animation-name:rotateInDownRight\n}\n@-webkit-keyframes rotateInUpLeft{\n0%{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0\n}\n0%,to{-webkit-transform-origin:left bottom\n}\nto{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:none;transform:none;opacity:1\n}\n}\n@keyframes rotateInUpLeft{\n0%{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0\n}\n0%,to{-webkit-transform-origin:left bottom\n}\nto{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:none;transform:none;opacity:1\n}\n}\n.rotateInUpLeft{-webkit-animation-name:rotateInUpLeft;animation-name:rotateInUpLeft\n}\n@-webkit-keyframes rotateInUpRight{\n0%{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);opacity:0\n}\n0%,to{-webkit-transform-origin:right bottom\n}\nto{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:none;transform:none;opacity:1\n}\n}\n@keyframes rotateInUpRight{\n0%{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);opacity:0\n}\n0%,to{-webkit-transform-origin:right bottom\n}\nto{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:none;transform:none;opacity:1\n}\n}\n.rotateInUpRight{-webkit-animation-name:rotateInUpRight;animation-name:rotateInUpRight\n}\n@-webkit-keyframes rotateOut{\n0%{-webkit-transform-origin:center;transform-origin:center;opacity:1\n}\n0%,to{-webkit-transform-origin:center\n}\nto{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:rotate(200deg);transform:rotate(200deg);opacity:0\n}\n}\n@keyframes rotateOut{\n0%{-webkit-transform-origin:center;transform-origin:center;opacity:1\n}\n0%,to{-webkit-transform-origin:center\n}\nto{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:rotate(200deg);transform:rotate(200deg);opacity:0\n}\n}\n.rotateOut{-webkit-animation-name:rotateOut;animation-name:rotateOut\n}\n@-webkit-keyframes rotateOutDownLeft{\n0%{-webkit-transform-origin:left bottom;transform-origin:left bottom;opacity:1\n}\n0%,to{-webkit-transform-origin:left bottom\n}\nto{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0\n}\n}\n@keyframes rotateOutDownLeft{\n0%{-webkit-transform-origin:left bottom;transform-origin:left bottom;opacity:1\n}\n0%,to{-webkit-transform-origin:left bottom\n}\nto{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0\n}\n}\n.rotateOutDownLeft{-webkit-animation-name:rotateOutDownLeft;animation-name:rotateOutDownLeft\n}\n@-webkit-keyframes rotateOutDownRight{\n0%{-webkit-transform-origin:right bottom;transform-origin:right bottom;opacity:1\n}\n0%,to{-webkit-transform-origin:right bottom\n}\nto{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0\n}\n}\n@keyframes rotateOutDownRight{\n0%{-webkit-transform-origin:right bottom;transform-origin:right bottom;opacity:1\n}\n0%,to{-webkit-transform-origin:right bottom\n}\nto{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0\n}\n}\n.rotateOutDownRight{-webkit-animation-name:rotateOutDownRight;animation-name:rotateOutDownRight\n}\n@-webkit-keyframes rotateOutUpLeft{\n0%{-webkit-transform-origin:left bottom;transform-origin:left bottom;opacity:1\n}\n0%,to{-webkit-transform-origin:left bottom\n}\nto{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0\n}\n}\n@keyframes rotateOutUpLeft{\n0%{-webkit-transform-origin:left bottom;transform-origin:left bottom;opacity:1\n}\n0%,to{-webkit-transform-origin:left bottom\n}\nto{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0\n}\n}\n.rotateOutUpLeft{-webkit-animation-name:rotateOutUpLeft;animation-name:rotateOutUpLeft\n}\n@-webkit-keyframes rotateOutUpRight{\n0%{-webkit-transform-origin:right bottom;transform-origin:right bottom;opacity:1\n}\n0%,to{-webkit-transform-origin:right bottom\n}\nto{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate(90deg);transform:rotate(90deg);opacity:0\n}\n}\n@keyframes rotateOutUpRight{\n0%{-webkit-transform-origin:right bottom;transform-origin:right bottom;opacity:1\n}\n0%,to{-webkit-transform-origin:right bottom\n}\nto{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate(90deg);transform:rotate(90deg);opacity:0\n}\n}\n.rotateOutUpRight{-webkit-animation-name:rotateOutUpRight;animation-name:rotateOutUpRight\n}\n@-webkit-keyframes hinge{\n0%{-webkit-transform-origin:top left;transform-origin:top left\n}\n0%,20%,60%{-webkit-transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out\n}\n20%,60%{-webkit-transform:rotate(80deg);transform:rotate(80deg);-webkit-transform-origin:top left;transform-origin:top left\n}\n40%,80%{-webkit-transform:rotate(60deg);transform:rotate(60deg);-webkit-transform-origin:top left;transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;opacity:1\n}\nto{-webkit-transform:translate3d(0,700px,0);transform:translate3d(0,700px,0);opacity:0\n}\n}\n@keyframes hinge{\n0%{-webkit-transform-origin:top left;transform-origin:top left\n}\n0%,20%,60%{-webkit-transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out\n}\n20%,60%{-webkit-transform:rotate(80deg);transform:rotate(80deg);-webkit-transform-origin:top left;transform-origin:top left\n}\n40%,80%{-webkit-transform:rotate(60deg);transform:rotate(60deg);-webkit-transform-origin:top left;transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;opacity:1\n}\nto{-webkit-transform:translate3d(0,700px,0);transform:translate3d(0,700px,0);opacity:0\n}\n}\n.hinge{-webkit-animation-name:hinge;animation-name:hinge\n}\n@-webkit-keyframes rollIn{\n0%{opacity:0;-webkit-transform:translate3d(-100%,0,0) rotate(-120deg);transform:translate3d(-100%,0,0) rotate(-120deg)\n}\nto{opacity:1;-webkit-transform:none;transform:none\n}\n}\n@keyframes rollIn{\n0%{opacity:0;-webkit-transform:translate3d(-100%,0,0) rotate(-120deg);transform:translate3d(-100%,0,0) rotate(-120deg)\n}\nto{opacity:1;-webkit-transform:none;transform:none\n}\n}\n.rollIn{-webkit-animation-name:rollIn;animation-name:rollIn\n}\n@-webkit-keyframes rollOut{\n0%{opacity:1\n}\nto{opacity:0;-webkit-transform:translate3d(100%,0,0) rotate(120deg);transform:translate3d(100%,0,0) rotate(120deg)\n}\n}\n@keyframes rollOut{\n0%{opacity:1\n}\nto{opacity:0;-webkit-transform:translate3d(100%,0,0) rotate(120deg);transform:translate3d(100%,0,0) rotate(120deg)\n}\n}\n.rollOut{-webkit-animation-name:rollOut;animation-name:rollOut\n}\n@-webkit-keyframes zoomIn{\n0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)\n}\n50%{opacity:1\n}\n}\n@keyframes zoomIn{\n0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)\n}\n50%{opacity:1\n}\n}\n.zoomIn{-webkit-animation-name:zoomIn;animation-name:zoomIn\n}\n@-webkit-keyframes zoomInDown{\n0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0);transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)\n}\n60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,60px,0);transform:scale3d(.475,.475,.475) translate3d(0,60px,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)\n}\n}\n@keyframes zoomInDown{\n0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0);transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)\n}\n60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,60px,0);transform:scale3d(.475,.475,.475) translate3d(0,60px,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)\n}\n}\n.zoomInDown{-webkit-animation-name:zoomInDown;animation-name:zoomInDown\n}\n@-webkit-keyframes zoomInLeft{\n0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)\n}\n60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(10px,0,0);transform:scale3d(.475,.475,.475) translate3d(10px,0,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)\n}\n}\n@keyframes zoomInLeft{\n0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)\n}\n60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(10px,0,0);transform:scale3d(.475,.475,.475) translate3d(10px,0,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)\n}\n}\n.zoomInLeft{-webkit-animation-name:zoomInLeft;animation-name:zoomInLeft\n}\n@-webkit-keyframes zoomInRight{\n0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(1000px,0,0);transform:scale3d(.1,.1,.1) translate3d(1000px,0,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)\n}\n60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(-10px,0,0);transform:scale3d(.475,.475,.475) translate3d(-10px,0,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)\n}\n}\n@keyframes zoomInRight{\n0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(1000px,0,0);transform:scale3d(.1,.1,.1) translate3d(1000px,0,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)\n}\n60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(-10px,0,0);transform:scale3d(.475,.475,.475) translate3d(-10px,0,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)\n}\n}\n.zoomInRight{-webkit-animation-name:zoomInRight;animation-name:zoomInRight\n}\n@-webkit-keyframes zoomInUp{\n0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,1000px,0);transform:scale3d(.1,.1,.1) translate3d(0,1000px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)\n}\n60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)\n}\n}\n@keyframes zoomInUp{\n0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,1000px,0);transform:scale3d(.1,.1,.1) translate3d(0,1000px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)\n}\n60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)\n}\n}\n.zoomInUp{-webkit-animation-name:zoomInUp;animation-name:zoomInUp\n}\n@-webkit-keyframes zoomOut{\n0%{opacity:1\n}\n50%{-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)\n}\n50%,to{opacity:0\n}\n}\n@keyframes zoomOut{\n0%{opacity:1\n}\n50%{-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)\n}\n50%,to{opacity:0\n}\n}\n.zoomOut{-webkit-animation-name:zoomOut;animation-name:zoomOut\n}\n@-webkit-keyframes zoomOutDown{\n40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)\n}\nto{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,2000px,0);transform:scale3d(.1,.1,.1) translate3d(0,2000px,0);-webkit-transform-origin:center bottom;transform-origin:center bottom;-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)\n}\n}\n@keyframes zoomOutDown{\n40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)\n}\nto{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,2000px,0);transform:scale3d(.1,.1,.1) translate3d(0,2000px,0);-webkit-transform-origin:center bottom;transform-origin:center bottom;-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)\n}\n}\n.zoomOutDown{-webkit-animation-name:zoomOutDown;animation-name:zoomOutDown\n}\n@-webkit-keyframes zoomOutLeft{\n40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(42px,0,0);transform:scale3d(.475,.475,.475) translate3d(42px,0,0)\n}\nto{opacity:0;-webkit-transform:scale(.1) translate3d(-2000px,0,0);transform:scale(.1) translate3d(-2000px,0,0);-webkit-transform-origin:left center;transform-origin:left center\n}\n}\n@keyframes zoomOutLeft{\n40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(42px,0,0);transform:scale3d(.475,.475,.475) translate3d(42px,0,0)\n}\nto{opacity:0;-webkit-transform:scale(.1) translate3d(-2000px,0,0);transform:scale(.1) translate3d(-2000px,0,0);-webkit-transform-origin:left center;transform-origin:left center\n}\n}\n.zoomOutLeft{-webkit-animation-name:zoomOutLeft;animation-name:zoomOutLeft\n}\n@-webkit-keyframes zoomOutRight{\n40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(-42px,0,0);transform:scale3d(.475,.475,.475) translate3d(-42px,0,0)\n}\nto{opacity:0;-webkit-transform:scale(.1) translate3d(2000px,0,0);transform:scale(.1) translate3d(2000px,0,0);-webkit-transform-origin:right center;transform-origin:right center\n}\n}\n@keyframes zoomOutRight{\n40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(-42px,0,0);transform:scale3d(.475,.475,.475) translate3d(-42px,0,0)\n}\nto{opacity:0;-webkit-transform:scale(.1) translate3d(2000px,0,0);transform:scale(.1) translate3d(2000px,0,0);-webkit-transform-origin:right center;transform-origin:right center\n}\n}\n.zoomOutRight{-webkit-animation-name:zoomOutRight;animation-name:zoomOutRight\n}\n@-webkit-keyframes zoomOutUp{\n40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,60px,0);transform:scale3d(.475,.475,.475) translate3d(0,60px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)\n}\nto{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0);transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0);-webkit-transform-origin:center bottom;transform-origin:center bottom;-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)\n}\n}\n@keyframes zoomOutUp{\n40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,60px,0);transform:scale3d(.475,.475,.475) translate3d(0,60px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)\n}\nto{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0);transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0);-webkit-transform-origin:center bottom;transform-origin:center bottom;-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)\n}\n}\n.zoomOutUp{-webkit-animation-name:zoomOutUp;animation-name:zoomOutUp\n}\n@-webkit-keyframes slideInDown{\n0%{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);visibility:visible\n}\nto{-webkit-transform:translateZ(0);transform:translateZ(0)\n}\n}\n@keyframes slideInDown{\n0%{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);visibility:visible\n}\nto{-webkit-transform:translateZ(0);transform:translateZ(0)\n}\n}\n.slideInDown{-webkit-animation-name:slideInDown;animation-name:slideInDown\n}\n@-webkit-keyframes slideInLeft{\n0%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);visibility:visible\n}\nto{-webkit-transform:translateZ(0);transform:translateZ(0)\n}\n}\n@keyframes slideInLeft{\n0%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);visibility:visible\n}\nto{-webkit-transform:translateZ(0);transform:translateZ(0)\n}\n}\n.slideInLeft{-webkit-animation-name:slideInLeft;animation-name:slideInLeft\n}\n@-webkit-keyframes slideInRight{\n0%{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);visibility:visible\n}\nto{-webkit-transform:translateZ(0);transform:translateZ(0)\n}\n}\n@keyframes slideInRight{\n0%{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);visibility:visible\n}\nto{-webkit-transform:translateZ(0);transform:translateZ(0)\n}\n}\n.slideInRight{-webkit-animation-name:slideInRight;animation-name:slideInRight\n}\n@-webkit-keyframes slideInUp{\n0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible\n}\nto{-webkit-transform:translateZ(0);transform:translateZ(0)\n}\n}\n@keyframes slideInUp{\n0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible\n}\nto{-webkit-transform:translateZ(0);transform:translateZ(0)\n}\n}\n.slideInUp{-webkit-animation-name:slideInUp;animation-name:slideInUp\n}\n@-webkit-keyframes slideOutDown{\n0%{-webkit-transform:translateZ(0);transform:translateZ(0)\n}\nto{visibility:hidden;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)\n}\n}\n@keyframes slideOutDown{\n0%{-webkit-transform:translateZ(0);transform:translateZ(0)\n}\nto{visibility:hidden;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)\n}\n}\n.slideOutDown{-webkit-animation-name:slideOutDown;animation-name:slideOutDown\n}\n@-webkit-keyframes slideOutLeft{\n0%{-webkit-transform:translateZ(0);transform:translateZ(0)\n}\nto{visibility:hidden;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)\n}\n}\n@keyframes slideOutLeft{\n0%{-webkit-transform:translateZ(0);transform:translateZ(0)\n}\nto{visibility:hidden;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)\n}\n}\n.slideOutLeft{-webkit-animation-name:slideOutLeft;animation-name:slideOutLeft\n}\n@-webkit-keyframes slideOutRight{\n0%{-webkit-transform:translateZ(0);transform:translateZ(0)\n}\nto{visibility:hidden;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)\n}\n}\n@keyframes slideOutRight{\n0%{-webkit-transform:translateZ(0);transform:translateZ(0)\n}\nto{visibility:hidden;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)\n}\n}\n.slideOutRight{-webkit-animation-name:slideOutRight;animation-name:slideOutRight\n}\n@-webkit-keyframes slideOutUp{\n0%{-webkit-transform:translateZ(0);transform:translateZ(0)\n}\nto{visibility:hidden;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)\n}\n}\n@keyframes slideOutUp{\n0%{-webkit-transform:translateZ(0);transform:translateZ(0)\n}\nto{visibility:hidden;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)\n}\n}\n.slideOutUp{-webkit-animation-name:slideOutUp;animation-name:slideOutUp\n}", ""]);

/***/ }),

/***/ 684:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
exports.push([module.i, "\n.ih-item{position:relative;transition:all 0.35s ease-in-out\n}\n.ih-item,.ih-item *{box-sizing:border-box\n}\n.ih-item a{color:#333\n}\n.ih-item a:hover{text-decoration:none\n}\n.ih-item img{width:100%;height:100%\n}\n.ih-item.circle{position:relative;width:220px;height:220px;border-radius:50%\n}\n.ih-item.circle .img{position:relative;width:220px;height:220px;border-radius:50%\n}\n.ih-item.circle .img:before{position:absolute;display:block;content:'';width:100%;height:100%;border-radius:50%;box-shadow:inset 0 0 0 16px rgba(255,255,255,0.6),0 1px 2px rgba(0,0,0,0.3);transition:all 0.35s ease-in-out\n}\n.ih-item.circle .img img{border-radius:50%\n}\n.ih-item.circle .info{position:absolute;top:0;bottom:0;left:0;right:0;text-align:center;border-radius:50%;-webkit-backface-visibility:hidden;backface-visibility:hidden\n}\n.ih-item.square{position:relative;width:316px;height:216px;border:8px solid #fff;box-shadow:1px 1px 3px rgba(0,0,0,0.3)\n}\n.ih-item.square .info{position:absolute;top:0;bottom:0;left:0;right:0;text-align:center;-webkit-backface-visibility:hidden;backface-visibility:hidden\n}\n.ih-item.circle.effect1 .spinner{width:230px;height:230px;border:10px solid #ecab18;border-right-color:#1ad280;border-bottom-color:#1ad280;border-radius:50%;transition:all 0.8s ease-in-out\n}\n.ih-item.circle.effect1 .img{position:absolute;top:10px;bottom:0;left:10px;right:0;width:auto;height:auto\n}\n.ih-item.circle.effect1 .img:before{display:none\n}\n.ih-item.circle.effect1.colored .info{background:#1a4a72;background:rgba(26,74,114,0.6)\n}\n.ih-item.circle.effect1 .info{top:10px;bottom:0;left:10px;right:0;background:#333;background:rgba(0,0,0,0.6);opacity:0;transition:all 0.8s ease-in-out\n}\n.ih-item.circle.effect1 .info h3{color:#fff;text-transform:uppercase;position:relative;letter-spacing:2px;font-size:22px;margin:0 30px;padding:55px 0 0 0;height:110px;text-shadow:0 0 1px #fff,0 1px 2px rgba(0,0,0,0.3)\n}\n.ih-item.circle.effect1 .info p{color:#bbb;padding:10px 5px;font-style:italic;margin:0 30px;font-size:12px;border-top:1px solid rgba(255,255,255,0.5)\n}\n.ih-item.circle.effect1 a:hover .spinner{-webkit-transform:rotate(180deg);transform:rotate(180deg)\n}\n.ih-item.circle.effect1 a:hover .info{opacity:1\n}\n.ih-item.circle.effect2 .img{opacity:1;-webkit-transform:scale(1);transform:scale(1);transition:all 0.35s ease-in-out\n}\n.ih-item.circle.effect2.colored .info{background:#1a4a72;background:rgba(26,74,114,0.6)\n}\n.ih-item.circle.effect2 .info{background:#333;background:rgba(0,0,0,0.6);opacity:0;pointer-events:none;transition:all 0.35s ease-in-out\n}\n.ih-item.circle.effect2 .info h3{color:#fff;text-transform:uppercase;position:relative;letter-spacing:2px;font-size:22px;margin:0 30px;padding:55px 0 0 0;height:110px;text-shadow:0 0 1px #fff,0 1px 2px rgba(0,0,0,0.3)\n}\n.ih-item.circle.effect2 .info p{color:#bbb;padding:10px 5px;font-style:italic;margin:0 30px;font-size:12px;border-top:1px solid rgba(255,255,255,0.5)\n}\n.ih-item.circle.effect2.left_to_right .info{-webkit-transform:translateX(-100%);transform:translateX(-100%)\n}\n.ih-item.circle.effect2.left_to_right a:hover .img{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)\n}\n.ih-item.circle.effect2.left_to_right a:hover .info{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)\n}\n.ih-item.circle.effect2.right_to_left .info{-webkit-transform:translateX(100%);transform:translateX(100%)\n}\n.ih-item.circle.effect2.right_to_left a:hover .img{-webkit-transform:rotate(90deg);transform:rotate(90deg)\n}\n.ih-item.circle.effect2.right_to_left a:hover .info{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)\n}\n.ih-item.circle.effect2.top_to_bottom .info{-webkit-transform:translateY(-100%);transform:translateY(-100%)\n}\n.ih-item.circle.effect2.top_to_bottom a:hover .img{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)\n}\n.ih-item.circle.effect2.top_to_bottom a:hover .info{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)\n}\n.ih-item.circle.effect2.bottom_to_top .info{-webkit-transform:translateY(100%);transform:translateY(100%)\n}\n.ih-item.circle.effect2.bottom_to_top a:hover .img{-webkit-transform:rotate(90deg);transform:rotate(90deg)\n}\n.ih-item.circle.effect2.bottom_to_top a:hover .info{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)\n}\n.ih-item.circle.effect3 .img{z-index:11;transition:all 0.35s ease-in-out\n}\n.ih-item.circle.effect3.colored .info{background:#1a4a72\n}\n.ih-item.circle.effect3 .info{background:#333;opacity:0;pointer-events:none;transition:all 0.35s ease-in-out\n}\n.ih-item.circle.effect3 .info h3{color:#fff;text-transform:uppercase;position:relative;letter-spacing:2px;font-size:22px;margin:0 30px;padding:55px 0 0 0;height:110px;text-shadow:0 0 1px #fff,0 1px 2px rgba(0,0,0,0.3)\n}\n.ih-item.circle.effect3 .info p{color:#bbb;padding:10px 5px;font-style:italic;margin:0 30px;font-size:12px;border-top:1px solid rgba(255,255,255,0.5)\n}\n.ih-item.circle.effect3.left_to_right .img{-webkit-transform:scale(1) translateX(0);transform:scale(1) translateX(0)\n}\n.ih-item.circle.effect3.left_to_right .info{-webkit-transform:translateX(-100%);transform:translateX(-100%)\n}\n.ih-item.circle.effect3.left_to_right a:hover .img{-webkit-transform:scale(0.5) translateX(100%);transform:scale(0.5) translateX(100%)\n}\n.ih-item.circle.effect3.left_to_right a:hover .info{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)\n}\n.ih-item.circle.effect3.right_to_left .img{-webkit-transform:scale(1) translateX(0);transform:scale(1) translateX(0)\n}\n.ih-item.circle.effect3.right_to_left .info{-webkit-transform:translateX(100%);transform:translateX(100%)\n}\n.ih-item.circle.effect3.right_to_left a:hover .img{-webkit-transform:scale(0.5) translateX(-100%);transform:scale(0.5) translateX(-100%)\n}\n.ih-item.circle.effect3.right_to_left a:hover .info{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)\n}\n.ih-item.circle.effect3.top_to_bottom .img{-webkit-transform:scale(1) translateY(0);transform:scale(1) translateY(0)\n}\n.ih-item.circle.effect3.top_to_bottom .info{-webkit-transform:translateY(-100%);transform:translateY(-100%)\n}\n.ih-item.circle.effect3.top_to_bottom a:hover .img{-webkit-transform:scale(0.5) translateY(100%);transform:scale(0.5) translateY(100%)\n}\n.ih-item.circle.effect3.top_to_bottom a:hover .info{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)\n}\n.ih-item.circle.effect3.bottom_to_top .img{-webkit-transform:scale(1) translateY(0);transform:scale(1) translateY(0)\n}\n.ih-item.circle.effect3.bottom_to_top .info{-webkit-transform:translateY(100%);transform:translateY(100%)\n}\n.ih-item.circle.effect3.bottom_to_top a:hover .img{-webkit-transform:scale(0.5) translateY(-100%);transform:scale(0.5) translateY(-100%)\n}\n.ih-item.circle.effect3.bottom_to_top a:hover .info{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)\n}\n.ih-item.circle.effect4 .img{opacity:1;transition:all 0.4s ease-in-out\n}\n.ih-item.circle.effect4.colored .info{background:#1a4a72\n}\n.ih-item.circle.effect4 .info{background:#333;opacity:0;visibility:hidden;pointer-events:none;transition:all 0.35s ease\n}\n.ih-item.circle.effect4 .info h3{color:#fff;text-transform:uppercase;position:relative;letter-spacing:2px;font-size:22px;margin:0 30px;padding:55px 0 0 0;height:110px;text-shadow:0 0 1px #fff,0 1px 2px rgba(0,0,0,0.3)\n}\n.ih-item.circle.effect4 .info p{color:#bbb;padding:10px 5px;font-style:italic;margin:0 30px;font-size:12px;border-top:1px solid rgba(255,255,255,0.5);transition:all 0.35s ease-in-out\n}\n.ih-item.circle.effect4 a:hover .img{opacity:0;pointer-events:none\n}\n.ih-item.circle.effect4 a:hover .info{visibility:visible;opacity:1\n}\n.ih-item.circle.effect4.left_to_right .img{-webkit-transform:translateX(0);transform:translateX(0)\n}\n.ih-item.circle.effect4.left_to_right .info{-webkit-transform:translateX(-100%);transform:translateX(-100%)\n}\n.ih-item.circle.effect4.left_to_right a:hover .img{-webkit-transform:translateX(100%);transform:translateX(100%)\n}\n.ih-item.circle.effect4.left_to_right a:hover .info{-webkit-transform:translateX(0);transform:translateX(0)\n}\n.ih-item.circle.effect4.right_to_left .img{-webkit-transform:translateX(0);transform:translateX(0)\n}\n.ih-item.circle.effect4.right_to_left .info{-webkit-transform:translateX(100%);transform:translateX(100%)\n}\n.ih-item.circle.effect4.right_to_left a:hover .img{-webkit-transform:translateX(-100%);transform:translateX(-100%)\n}\n.ih-item.circle.effect4.right_to_left a:hover .info{-webkit-transform:translateX(0);transform:translateX(0)\n}\n.ih-item.circle.effect4.top_to_bottom .img{-webkit-transform:translateY(0);transform:translateY(0)\n}\n.ih-item.circle.effect4.top_to_bottom .info{-webkit-transform:translateY(100%);transform:translateY(100%)\n}\n.ih-item.circle.effect4.top_to_bottom a:hover .img{-webkit-transform:translateY(-100%);transform:translateY(-100%)\n}\n.ih-item.circle.effect4.top_to_bottom a:hover .info{-webkit-transform:translateY(0);transform:translateY(0)\n}\n.ih-item.circle.effect4.bottom_to_top .img{-webkit-transform:translateY(0);transform:translateY(0)\n}\n.ih-item.circle.effect4.bottom_to_top .info{-webkit-transform:translateY(-100%);transform:translateY(-100%)\n}\n.ih-item.circle.effect4.bottom_to_top a:hover .img{-webkit-transform:translateY(100%);transform:translateY(100%)\n}\n.ih-item.circle.effect4.bottom_to_top a:hover .info{-webkit-transform:translateY(0);transform:translateY(0)\n}\n.ih-item.circle.effect5{-webkit-perspective:900px;perspective:900px\n}\n.ih-item.circle.effect5.colored .info .info-back{background:#1a4a72;background:rgba(26,74,114,0.6)\n}\n.ih-item.circle.effect5 .info{transition:all 0.35s ease-in-out;-webkit-transform-style:preserve-3d;transform-style:preserve-3d\n}\n.ih-item.circle.effect5 .info .info-back{visibility:hidden;border-radius:50%;width:100%;height:100%;background:#333;background:rgba(0,0,0,0.6);-webkit-transform:rotate3d(0, 1, 0, 180deg);transform:rotate3d(0, 1, 0, 180deg);-webkit-backface-visibility:hidden;backface-visibility:hidden\n}\n.ih-item.circle.effect5 .info h3{color:#fff;text-transform:uppercase;position:relative;letter-spacing:2px;font-size:22px;margin:0 30px;padding:55px 0 0 0;height:110px;text-shadow:0 0 1px #fff,0 1px 2px rgba(0,0,0,0.3)\n}\n.ih-item.circle.effect5 .info p{color:#bbb;padding:10px 5px;font-style:italic;margin:0 30px;font-size:12px;border-top:1px solid rgba(255,255,255,0.5)\n}\n.ih-item.circle.effect5 a:hover .info{-webkit-transform:rotate3d(0, 1, 0, -180deg);transform:rotate3d(0, 1, 0, -180deg)\n}\n.ih-item.circle.effect5 a:hover .info .info-back{visibility:visible\n}\n.ih-item.circle.effect6 .img{opacity:1;-webkit-transform:scale(1);transform:scale(1);transition:all 0.35s ease-in-out\n}\n.ih-item.circle.effect6.colored .info{background:#1a4a72\n}\n.ih-item.circle.effect6 .info{background:#333;opacity:0;transition:all 0.35s ease-in-out\n}\n.ih-item.circle.effect6 .info h3{color:#fff;text-transform:uppercase;position:relative;letter-spacing:2px;font-size:22px;margin:0 30px;padding:55px 0 0 0;height:110px;text-shadow:0 0 1px #fff,0 1px 2px rgba(0,0,0,0.3)\n}\n.ih-item.circle.effect6 .info p{color:#bbb;padding:10px 5px;font-style:italic;margin:0 30px;font-size:12px;border-top:1px solid rgba(255,255,255,0.5)\n}\n.ih-item.circle.effect6.scale_up .info{-webkit-transform:scale(0.5);transform:scale(0.5)\n}\n.ih-item.circle.effect6.scale_up a:hover .img{opacity:0;-webkit-transform:scale(1.5);transform:scale(1.5)\n}\n.ih-item.circle.effect6.scale_up a:hover .info{opacity:1;-webkit-transform:scale(1);transform:scale(1)\n}\n.ih-item.circle.effect6.scale_down .info{-webkit-transform:scale(1.5);transform:scale(1.5)\n}\n.ih-item.circle.effect6.scale_down a:hover .img{opacity:0;-webkit-transform:scale(0.5);transform:scale(0.5)\n}\n.ih-item.circle.effect6.scale_down a:hover .info{opacity:1;-webkit-transform:scale(1);transform:scale(1)\n}\n.ih-item.circle.effect6.scale_down_up .info{-webkit-transform:scale(0.5);transform:scale(0.5);transition:all 0.35s ease-in-out 0.2s\n}\n.ih-item.circle.effect6.scale_down_up a:hover .img{opacity:0;-webkit-transform:scale(0.5);transform:scale(0.5)\n}\n.ih-item.circle.effect6.scale_down_up a:hover .info{opacity:1;-webkit-transform:scale(1);transform:scale(1)\n}\n.ih-item.circle.effect7 .img{opacity:1;-webkit-transform:scale(1);transform:scale(1);transition:all 0.35s ease-out\n}\n.ih-item.circle.effect7.colored .info{background:#1a4a72\n}\n.ih-item.circle.effect7 .info{background:#333;opacity:0;visibility:hidden;pointer-events:none;transition:all 0.35s ease 0.2s\n}\n.ih-item.circle.effect7 .info h3{color:#fff;text-transform:uppercase;position:relative;letter-spacing:2px;font-size:22px;margin:0 30px;padding:55px 0 0 0;height:110px;text-shadow:0 0 1px #fff,0 1px 2px rgba(0,0,0,0.3)\n}\n.ih-item.circle.effect7 .info p{color:#bbb;padding:10px 5px;font-style:italic;margin:0 30px;font-size:12px;border-top:1px solid rgba(255,255,255,0.5)\n}\n.ih-item.circle.effect7 a:hover .img{opacity:0;-webkit-transform:scale(0.5);transform:scale(0.5)\n}\n.ih-item.circle.effect7 a:hover .info{visibility:visible;opacity:1\n}\n.ih-item.circle.effect7.left_to_right .info{-webkit-transform:translateX(-100%);transform:translateX(-100%)\n}\n.ih-item.circle.effect7.left_to_right a:hover .info{-webkit-transform:translateX(0);transform:translateX(0)\n}\n.ih-item.circle.effect7.right_to_left .info{-webkit-transform:translateX(100%);transform:translateX(100%)\n}\n.ih-item.circle.effect7.right_to_left a:hover .info{-webkit-transform:translateX(0);transform:translateX(0)\n}\n.ih-item.circle.effect7.top_to_bottom .info{-webkit-transform:translateY(100%);transform:translateY(100%)\n}\n.ih-item.circle.effect7.top_to_bottom a:hover .info{-webkit-transform:translateY(0);transform:translateY(0)\n}\n.ih-item.circle.effect7.bottom_to_top .info{-webkit-transform:translateY(-100%);transform:translateY(-100%)\n}\n.ih-item.circle.effect7.bottom_to_top a:hover .info{-webkit-transform:translateY(0);transform:translateY(0)\n}\n.ih-item.circle.effect8.colored .info{background:#1a4a72\n}\n.ih-item.circle.effect8 .img-container{-webkit-transform:scale(1);transform:scale(1);transition:all 0.3s ease-in-out\n}\n.ih-item.circle.effect8 .img-container .img{opacity:1;transition:all 0.3s ease-in-out 0.3s\n}\n.ih-item.circle.effect8 .info-container{position:absolute;top:0;bottom:0;left:0;right:0;text-align:center;border-radius:50%;opacity:0;pointer-events:none;transition:all 0.3s ease-in-out 0.3s\n}\n.ih-item.circle.effect8 .info{width:100%;height:100%;background:#333;pointer-events:none;-webkit-transform:scale(0.5);transform:scale(0.5);transition:all 0.35s ease-in-out 0.6s\n}\n.ih-item.circle.effect8 .info h3{color:#fff;text-transform:uppercase;letter-spacing:2px;font-size:22px;margin:0 30px;padding:45px 0 0 0;height:140px;text-shadow:0 0 1px #fff,0 1px 2px rgba(0,0,0,0.3)\n}\n.ih-item.circle.effect8 .info p{color:#bbb;padding:10px 5px;font-style:italic;margin:0 30px;font-size:12px;border-top:1px solid rgba(255,255,255,0.5)\n}\n.ih-item.circle.effect8 a:hover .img-container{pointer-events:none;-webkit-transform:scale(0.5);transform:scale(0.5)\n}\n.ih-item.circle.effect8 a:hover .img-container .img{opacity:0;pointer-events:none\n}\n.ih-item.circle.effect8 a:hover .info-container{opacity:1\n}\n.ih-item.circle.effect8 a:hover .info-container .info{-webkit-transform:scale(1);transform:scale(1)\n}\n.ih-item.circle.effect8.left_to_right .img-container .img{-webkit-transform:translateX(0);transform:translateX(0)\n}\n.ih-item.circle.effect8.left_to_right .info-container{-webkit-transform:translateX(100%);transform:translateX(100%)\n}\n.ih-item.circle.effect8.left_to_right a:hover .img-container .img{-webkit-transform:translateX(-100%);transform:translateX(-100%)\n}\n.ih-item.circle.effect8.left_to_right a:hover .info-container{-webkit-transform:translateX(0);transform:translateX(0)\n}\n.ih-item.circle.effect8.right_to_left .img-container .img{-webkit-transform:translateX(0);transform:translateX(0)\n}\n.ih-item.circle.effect8.right_to_left .info-container{-webkit-transform:translateX(-100%);transform:translateX(-100%)\n}\n.ih-item.circle.effect8.right_to_left a:hover .img-container .img{-webkit-transform:translateX(100%);transform:translateX(100%)\n}\n.ih-item.circle.effect8.right_to_left a:hover .info-container{-webkit-transform:translateX(0);transform:translateX(0)\n}\n.ih-item.circle.effect8.top_to_bottom .img-container .img{-webkit-transform:translateY(0);transform:translateY(0)\n}\n.ih-item.circle.effect8.top_to_bottom .info-container{-webkit-transform:translateY(-100%);transform:translateY(-100%)\n}\n.ih-item.circle.effect8.top_to_bottom a:hover .img-container .img{-webkit-transform:translateY(100%);transform:translateY(100%)\n}\n.ih-item.circle.effect8.top_to_bottom a:hover .info-container{-webkit-transform:translateY(0);transform:translateY(0)\n}\n.ih-item.circle.effect8.bottom_to_top .img-container .img{-webkit-transform:translateY(0);transform:translateY(0)\n}\n.ih-item.circle.effect8.bottom_to_top .info-container{-webkit-transform:translateY(100%);transform:translateY(100%)\n}\n.ih-item.circle.effect8.bottom_to_top a:hover .img-container .img{-webkit-transform:translateY(-100%);transform:translateY(-100%)\n}\n.ih-item.circle.effect8.bottom_to_top a:hover .info-container{-webkit-transform:translateY(0);transform:translateY(0)\n}\n.ih-item.circle.effect9 .img{opacity:1;transition:all 0.35s ease-out\n}\n.ih-item.circle.effect9.colored .info{background:#1a4a72\n}\n.ih-item.circle.effect9 .info{background:#333;opacity:0;visibility:hidden;pointer-events:none;-webkit-transform:scale(0.5);transform:scale(0.5);transition:all 0.35s ease 0.2s\n}\n.ih-item.circle.effect9 .info h3{color:#fff;text-transform:uppercase;position:relative;letter-spacing:2px;font-size:22px;margin:0 30px;padding:55px 0 0 0;height:110px;text-shadow:0 0 1px #fff,0 1px 2px rgba(0,0,0,0.3)\n}\n.ih-item.circle.effect9 .info p{color:#bbb;padding:10px 5px;font-style:italic;margin:0 30px;font-size:12px;border-top:1px solid rgba(255,255,255,0.5)\n}\n.ih-item.circle.effect9 a:hover .img{opacity:0;pointer-events:none;-webkit-transform:scale(0.5);transform:scale(0.5)\n}\n.ih-item.circle.effect9 a:hover .info{visibility:visible;opacity:1;-webkit-transform:scale(1);transform:scale(1)\n}\n.ih-item.circle.effect9.left_to_right .img{-webkit-transform:translateX(0) rotate(0);transform:translateX(0) rotate(0)\n}\n.ih-item.circle.effect9.left_to_right a:hover .img{-webkit-transform:translateX(100%) rotate(180deg);transform:translateX(100%) rotate(180deg)\n}\n.ih-item.circle.effect9.right_to_left .img{-webkit-transform:translateX(0) rotate(0);transform:translateX(0) rotate(0)\n}\n.ih-item.circle.effect9.right_to_left a:hover .img{-webkit-transform:translateX(-100%) rotate(-180deg);transform:translateX(-100%) rotate(-180deg)\n}\n.ih-item.circle.effect9.top_to_bottom .img{-webkit-transform:translateY(0);transform:translateY(0)\n}\n.ih-item.circle.effect9.top_to_bottom a:hover .img{-webkit-transform:translateY(-100%);transform:translateY(-100%)\n}\n.ih-item.circle.effect9.bottom_to_top .img{-webkit-transform:translateY(0);transform:translateY(0)\n}\n.ih-item.circle.effect9.bottom_to_top a:hover .img{-webkit-transform:translateY(100%);transform:translateY(100%)\n}\n.ih-item.circle.effect10 .img{z-index:11;-webkit-transform:scale(1);transform:scale(1);transition:all 0.35s ease-in-out\n}\n.ih-item.circle.effect10.colored .info{background:#1a4a72\n}\n.ih-item.circle.effect10 .info{background:#333;opacity:0;-webkit-transform:scale(0);transform:scale(0);transition:all 0.35s ease-in-out\n}\n.ih-item.circle.effect10 .info h3{color:#fff;text-transform:uppercase;position:relative;letter-spacing:2px;font-size:22px;text-shadow:0 0 1px #fff,0 1px 2px rgba(0,0,0,0.3)\n}\n.ih-item.circle.effect10 .info p{color:#bbb;font-style:italic;font-size:12px;border-top:1px solid rgba(255,255,255,0.5)\n}\n.ih-item.circle.effect10 a:hover .info{visibility:visible;opacity:1;-webkit-transform:scale(1);transform:scale(1)\n}\n.ih-item.circle.effect10.top_to_bottom .info h3{margin:0 30px;padding:25px 0 0 0;height:78px\n}\n.ih-item.circle.effect10.top_to_bottom .info p{margin:0 30px;padding:5px\n}\n.ih-item.circle.effect10.top_to_bottom a:hover .img{-webkit-transform:translateY(50px) scale(0.5);transform:translateY(50px) scale(0.5)\n}\n.ih-item.circle.effect10.bottom_to_top .info h3{margin:95px 30px 0;padding:25px 0 0 0;height:78px\n}\n.ih-item.circle.effect10.bottom_to_top .info p{margin:0 30px;padding:5px\n}\n.ih-item.circle.effect10.bottom_to_top a:hover .img{-webkit-transform:translateY(-50px) scale(0.5);transform:translateY(-50px) scale(0.5)\n}\n.ih-item.circle.effect11{-webkit-perspective:900px;perspective:900px\n}\n.ih-item.circle.effect11 .img{opacity:1;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transition:all 0.35s ease-in-out\n}\n.ih-item.circle.effect11.colored .info{background:#1a4a72\n}\n.ih-item.circle.effect11 .info{background:#333;opacity:0;visibility:hidden;transition:all 0.35s ease 0.35s\n}\n.ih-item.circle.effect11 .info h3{color:#fff;text-transform:uppercase;position:relative;letter-spacing:2px;font-size:22px;margin:0 30px;padding:55px 0 0 0;height:110px;text-shadow:0 0 1px #fff,0 1px 2px rgba(0,0,0,0.3)\n}\n.ih-item.circle.effect11 .info p{color:#bbb;padding:10px 5px;font-style:italic;margin:0 30px;font-size:12px;border-top:1px solid rgba(255,255,255,0.5)\n}\n.ih-item.circle.effect11 a:hover .img{opacity:0\n}\n.ih-item.circle.effect11 a:hover .info{visibility:visible;opacity:1\n}\n.ih-item.circle.effect11.left_to_right .img{-webkit-transform:translateZ(0) rotateY(0);transform:translateZ(0) rotateY(0)\n}\n.ih-item.circle.effect11.left_to_right .info{-webkit-transform:translateZ(-1000px) rotateY(-90deg);transform:translateZ(-1000px) rotateY(-90deg)\n}\n.ih-item.circle.effect11.left_to_right a:hover .img{-webkit-transform:translateZ(-1000px) rotateY(90deg);transform:translateZ(-1000px) rotateY(90deg)\n}\n.ih-item.circle.effect11.left_to_right a:hover .info{-webkit-transform:translateZ(0) rotateY(0);transform:translateZ(0) rotateY(0)\n}\n.ih-item.circle.effect11.right_to_left .img{-webkit-transform:translateZ(0) rotateY(0);transform:translateZ(0) rotateY(0)\n}\n.ih-item.circle.effect11.right_to_left .info{-webkit-transform:translateZ(-1000px) rotateY(90deg);transform:translateZ(-1000px) rotateY(90deg)\n}\n.ih-item.circle.effect11.right_to_left a:hover .img{-webkit-transform:translateZ(-1000px) rotateY(-90deg);transform:translateZ(-1000px) rotateY(-90deg)\n}\n.ih-item.circle.effect11.right_to_left a:hover .info{-webkit-transform:translateZ(0) rotateY(0);transform:translateZ(0) rotateY(0)\n}\n.ih-item.circle.effect11.top_to_bottom .img{-webkit-transform:translateZ(0) rotateX(0);transform:translateZ(0) rotateX(0)\n}\n.ih-item.circle.effect11.top_to_bottom .info{-webkit-transform:translateZ(-1000px) rotateX(90deg);transform:translateZ(-1000px) rotateX(90deg)\n}\n.ih-item.circle.effect11.top_to_bottom a:hover .img{-webkit-transform:translateZ(-1000px) rotateX(-90deg);transform:translateZ(-1000px) rotateX(-90deg)\n}\n.ih-item.circle.effect11.top_to_bottom a:hover .info{-webkit-transform:translateZ(0) rotateX(0);transform:translateZ(0) rotateX(0)\n}\n.ih-item.circle.effect11.bottom_to_top .img{-webkit-transform:translateZ(0) rotateX(0);transform:translateZ(0) rotateX(0)\n}\n.ih-item.circle.effect11.bottom_to_top .info{-webkit-transform:translateZ(-1000px) rotateX(-90deg);transform:translateZ(-1000px) rotateX(-90deg)\n}\n.ih-item.circle.effect11.bottom_to_top a:hover .img{-webkit-transform:translateZ(-1000px) rotateX(90deg);transform:translateZ(-1000px) rotateX(90deg)\n}\n.ih-item.circle.effect11.bottom_to_top a:hover .info{-webkit-transform:translateZ(0) rotateX(0);transform:translateZ(0) rotateX(0)\n}\n.ih-item.circle.effect12 .img{opacity:1;transition:all 0.35s ease-in-out\n}\n.ih-item.circle.effect12.colored .info{background:#1a4a72\n}\n.ih-item.circle.effect12 .info{background:#333;opacity:0;visibility:hidden;pointer-events:none;-webkit-transform:scale(0.5);transform:scale(0.5);transition:all 0.35s ease-in-out\n}\n.ih-item.circle.effect12 .info h3{color:#fff;text-transform:uppercase;position:relative;letter-spacing:2px;font-size:22px;margin:0 30px;padding:55px 0 0 0;height:110px;text-shadow:0 0 1px #fff,0 1px 2px rgba(0,0,0,0.3)\n}\n.ih-item.circle.effect12 .info p{color:#bbb;padding:10px 5px;font-style:italic;margin:0 30px;font-size:12px;border-top:1px solid rgba(255,255,255,0.5)\n}\n.ih-item.circle.effect12 a:hover .img{opacity:0;pointer-events:none\n}\n.ih-item.circle.effect12 a:hover .info{opacity:1;visibility:visible\n}\n.ih-item.circle.effect12.left_to_right .img{-webkit-transform:translateX(0) rotate(0);transform:translateX(0) rotate(0)\n}\n.ih-item.circle.effect12.left_to_right .info{-webkit-transform:translateX(100%) rotate(180deg);transform:translateX(100%) rotate(180deg)\n}\n.ih-item.circle.effect12.left_to_right a:hover .img{-webkit-transform:translateX(100%) rotate(180deg);transform:translateX(100%) rotate(180deg)\n}\n.ih-item.circle.effect12.left_to_right a:hover .info{-webkit-transform:translateX(0) rotate(0);transform:translateX(0) rotate(0);transition-delay:0.4s\n}\n.ih-item.circle.effect12.right_to_left .img{-webkit-transform:translateX(0) rotate(0);transform:translateX(0) rotate(0)\n}\n.ih-item.circle.effect12.right_to_left .info{-webkit-transform:translateX(-100%) rotate(-180deg);transform:translateX(-100%) rotate(-180deg)\n}\n.ih-item.circle.effect12.right_to_left a:hover .img{-webkit-transform:translateX(-100%) rotate(-180deg);transform:translateX(-100%) rotate(-180deg)\n}\n.ih-item.circle.effect12.right_to_left a:hover .info{-webkit-transform:translateX(0) rotate(0);transform:translateX(0) rotate(0);transition-delay:0.4s\n}\n.ih-item.circle.effect12.top_to_bottom .img{-webkit-transform:translateY(0) rotate(0);transform:translateY(0) rotate(0)\n}\n.ih-item.circle.effect12.top_to_bottom .info{-webkit-transform:translateY(-100%) rotate(-180deg);transform:translateY(-100%) rotate(-180deg)\n}\n.ih-item.circle.effect12.top_to_bottom a:hover .img{-webkit-transform:translateY(-100%) rotate(-180deg);transform:translateY(-100%) rotate(-180deg)\n}\n.ih-item.circle.effect12.top_to_bottom a:hover .info{-webkit-transform:translateY(0) rotate(0);transform:translateY(0) rotate(0);transition-delay:0.4s\n}\n.ih-item.circle.effect12.bottom_to_top .img{-webkit-transform:translateY(0) rotate(0);transform:translateY(0) rotate(0)\n}\n.ih-item.circle.effect12.bottom_to_top .info{-webkit-transform:translateY(100%) rotate(180deg);transform:translateY(100%) rotate(180deg)\n}\n.ih-item.circle.effect12.bottom_to_top a:hover .img{-webkit-transform:translateY(100%) rotate(180deg);transform:translateY(100%) rotate(180deg)\n}\n.ih-item.circle.effect12.bottom_to_top a:hover .info{-webkit-transform:translateY(0) rotate(0);transform:translateY(0) rotate(0);transition-delay:0.4s\n}\n.ih-item.circle.effect13.colored .info{background:#1a4a72;background:rgba(26,74,114,0.6)\n}\n.ih-item.circle.effect13 .info{background:#333;background:rgba(0,0,0,0.6);opacity:0;pointer-events:none;transition:all 0.35s ease-in-out\n}\n.ih-item.circle.effect13 .info h3{visibility:hidden;color:#fff;text-transform:uppercase;position:relative;letter-spacing:2px;font-size:22px;margin:0 30px;padding:55px 0 0 0;height:110px;text-shadow:0 0 1px #fff,0 1px 2px rgba(0,0,0,0.3);transition:all 0.35s ease-in-out\n}\n.ih-item.circle.effect13 .info p{visibility:hidden;color:#bbb;padding:10px 5px;font-style:italic;margin:0 30px;font-size:12px;border-top:1px solid rgba(255,255,255,0.5);transition:all 0.35s ease-in-out\n}\n.ih-item.circle.effect13 a:hover .info{opacity:1\n}\n.ih-item.circle.effect13 a:hover h3{visibility:visible\n}\n.ih-item.circle.effect13 a:hover p{visibility:visible\n}\n.ih-item.circle.effect13.from_left_and_right .info h3{-webkit-transform:translateX(-100%);transform:translateX(-100%)\n}\n.ih-item.circle.effect13.from_left_and_right .info p{-webkit-transform:translateX(100%);transform:translateX(100%)\n}\n.ih-item.circle.effect13.from_left_and_right a:hover h3{-webkit-transform:translateX(0);transform:translateX(0)\n}\n.ih-item.circle.effect13.from_left_and_right a:hover p{-webkit-transform:translateX(0);transform:translateX(0)\n}\n.ih-item.circle.effect13.top_to_bottom .info h3{-webkit-transform:translateY(-100%);transform:translateY(-100%)\n}\n.ih-item.circle.effect13.top_to_bottom .info p{-webkit-transform:translateY(-100%);transform:translateY(-100%)\n}\n.ih-item.circle.effect13.top_to_bottom a:hover h3{-webkit-transform:translateY(0);transform:translateY(0)\n}\n.ih-item.circle.effect13.top_to_bottom a:hover p{-webkit-transform:translateY(0);transform:translateY(0)\n}\n.ih-item.circle.effect13.bottom_to_top .info h3{-webkit-transform:translateY(100%);transform:translateY(100%)\n}\n.ih-item.circle.effect13.bottom_to_top .info p{-webkit-transform:translateY(100%);transform:translateY(100%)\n}\n.ih-item.circle.effect13.bottom_to_top a:hover h3{-webkit-transform:translateY(0);transform:translateY(0)\n}\n.ih-item.circle.effect13.bottom_to_top a:hover p{-webkit-transform:translateY(0);transform:translateY(0)\n}\n.ih-item.circle.effect14{-webkit-perspective:900px;perspective:900px\n}\n.ih-item.circle.effect14 .img{visibility:visible;opacity:1;transition:all 0.4s ease-out\n}\n.ih-item.circle.effect14.colored .info{background:#1a4a72\n}\n.ih-item.circle.effect14 .info{background:#333;opacity:0;visibility:hidden;transition:all 0.35s ease-in-out 0.3s\n}\n.ih-item.circle.effect14 .info h3{color:#fff;text-transform:uppercase;position:relative;letter-spacing:2px;font-size:22px;margin:0 30px;padding:55px 0 0 0;height:110px;text-shadow:0 0 1px #fff,0 1px 2px rgba(0,0,0,0.3)\n}\n.ih-item.circle.effect14 .info p{color:#bbb;padding:10px 5px;font-style:italic;margin:0 30px;font-size:12px;border-top:1px solid rgba(255,255,255,0.5)\n}\n.ih-item.circle.effect14 a:hover .img{opacity:0;visibility:hidden\n}\n.ih-item.circle.effect14 a:hover .info{visibility:visible;opacity:1\n}\n.ih-item.circle.effect14.left_to_right .img{-webkit-transform:rotateY(0);transform:rotateY(0);-webkit-transform-origin:100% 50%;transform-origin:100% 50%\n}\n.ih-item.circle.effect14.left_to_right .info{-webkit-transform:rotateY(90deg);transform:rotateY(90deg);-webkit-transform-origin:0% 50%;transform-origin:0% 50%\n}\n.ih-item.circle.effect14.left_to_right a:hover .img{-webkit-transform:rotateY(-90deg);transform:rotateY(-90deg)\n}\n.ih-item.circle.effect14.left_to_right a:hover .info{-webkit-transform:rotateY(0);transform:rotateY(0)\n}\n.ih-item.circle.effect14.right_to_left .img{-webkit-transform:rotateY(0);transform:rotateY(0);-webkit-transform-origin:0% 50%;transform-origin:0% 50%\n}\n.ih-item.circle.effect14.right_to_left .info{-webkit-transform:rotateY(-90deg);transform:rotateY(-90deg);-webkit-transform-origin:100% 50%;transform-origin:100% 50%\n}\n.ih-item.circle.effect14.right_to_left a:hover .img{-webkit-transform:rotateY(90deg);transform:rotateY(90deg)\n}\n.ih-item.circle.effect14.right_to_left a:hover .info{-webkit-transform:rotateY(0);transform:rotateY(0)\n}\n.ih-item.circle.effect14.top_to_bottom .img{-webkit-transform:rotateX(0);transform:rotateX(0);-webkit-transform-origin:50% 100%;transform-origin:50% 100%\n}\n.ih-item.circle.effect14.top_to_bottom .info{-webkit-transform:rotateX(-90deg);transform:rotateX(-90deg);-webkit-transform-origin:50% 0;transform-origin:50% 0\n}\n.ih-item.circle.effect14.top_to_bottom a:hover .img{-webkit-transform:rotateX(90deg);transform:rotateX(90deg)\n}\n.ih-item.circle.effect14.top_to_bottom a:hover .info{-webkit-transform:rotateX(0);transform:rotateX(0)\n}\n.ih-item.circle.effect14.bottom_to_top .img{-webkit-transform:rotateX(0);transform:rotateX(0);-webkit-transform-origin:50% 0;transform-origin:50% 0\n}\n.ih-item.circle.effect14.bottom_to_top .info{-webkit-transform:rotateX(90deg);transform:rotateX(90deg);-webkit-transform-origin:50% 100%;transform-origin:50% 100%\n}\n.ih-item.circle.effect14.bottom_to_top a:hover .img{-webkit-transform:rotateX(-90deg);transform:rotateX(-90deg)\n}\n.ih-item.circle.effect14.bottom_to_top a:hover .info{-webkit-transform:rotateX(0);transform:rotateX(0)\n}\n.ih-item.circle.effect15 .img{opacity:1;visibility:visible;-webkit-transform:scale(1) rotate(0);transform:scale(1) rotate(0);transition:all 0.35s ease-in-out\n}\n.ih-item.circle.effect15.colored .info{background:#1a4a72\n}\n.ih-item.circle.effect15 .info{background:#333;opacity:0;visibility:hidden;-webkit-transform:scale(0.5) rotate(-720deg);transform:scale(0.5) rotate(-720deg);transition:all 0.35s ease-in-out 0.3s\n}\n.ih-item.circle.effect15 .info h3{color:#fff;text-transform:uppercase;position:relative;letter-spacing:2px;font-size:22px;margin:0 30px;padding:55px 0 0 0;height:110px;text-shadow:0 0 1px #fff,0 1px 2px rgba(0,0,0,0.3)\n}\n.ih-item.circle.effect15 .info p{color:#bbb;padding:10px 5px;font-style:italic;margin:0 30px;font-size:12px;border-top:1px solid rgba(255,255,255,0.5)\n}\n.ih-item.circle.effect15 a:hover .img{opacity:0;visibility:hidden;-webkit-transform:scale(0.5) rotate(720deg);transform:scale(0.5) rotate(720deg)\n}\n.ih-item.circle.effect15 a:hover .info{opacity:1;visibility:visible;-webkit-transform:scale(1) rotate(0);transform:scale(1) rotate(0)\n}\n.ih-item.circle.effect16 .img{z-index:11;transition:all 0.35s ease-in-out\n}\n.ih-item.circle.effect16.colored .info{background:#1a4a72\n}\n.ih-item.circle.effect16 .info{background:#333;transition:all 0.35s ease-in-out\n}\n.ih-item.circle.effect16 .info h3{color:#fff;text-transform:uppercase;position:relative;letter-spacing:2px;font-size:22px;margin:0 30px;padding:55px 0 0 0;height:110px;text-shadow:0 0 1px #fff,0 1px 2px rgba(0,0,0,0.3)\n}\n.ih-item.circle.effect16 .info p{color:#bbb;padding:10px 5px;font-style:italic;margin:0 30px;font-size:12px;border-top:1px solid rgba(255,255,255,0.5);transition:all 0.35s ease-in-out\n}\n.ih-item.circle.effect16.left_to_right .img{-webkit-transform-origin:95% 40%;transform-origin:95% 40%\n}\n.ih-item.circle.effect16.left_to_right .img:after{content:'';width:8px;height:8px;position:absolute;border-radius:50%;top:40%;left:95%;margin:-4px 0 0 -4px;background:rgba(0,0,0,0.8);box-shadow:0 0 1px rgba(255,255,255,0.9)\n}\n.ih-item.circle.effect16.left_to_right a:hover .img{-webkit-transform:rotate(-120deg);transform:rotate(-120deg)\n}\n.ih-item.circle.effect16.right_to_left .img{-webkit-transform-origin:5% 40%;transform-origin:5% 40%\n}\n.ih-item.circle.effect16.right_to_left .img:after{content:'';width:8px;height:8px;position:absolute;border-radius:50%;top:40%;left:5%;margin:-4px 0 0 -4px;background:rgba(0,0,0,0.8);box-shadow:0 0 1px rgba(255,255,255,0.9)\n}\n.ih-item.circle.effect16.right_to_left a:hover .img{-webkit-transform:rotate(120deg);transform:rotate(120deg)\n}\n.ih-item.circle.effect17 .info{opacity:0;-webkit-transform:scale(0);transform:scale(0);transition:all 0.35s ease-in-out\n}\n.ih-item.circle.effect17 .info h3{color:#fff;text-transform:uppercase;position:relative;letter-spacing:2px;font-size:22px;margin:0 30px;padding:55px 0 0 0;height:110px;text-shadow:0 0 1px #fff,0 1px 2px rgba(0,0,0,0.3)\n}\n.ih-item.circle.effect17 .info p{color:#bbb;padding:10px 5px;font-style:italic;margin:0 30px;font-size:12px;border-top:1px solid rgba(255,255,255,0.5);opacity:0;transition:all 0.35s ease-in-out\n}\n.ih-item.circle.effect17 a:hover .img:before{box-shadow:inset 0 0 0 110px #333,inset 0 0 0 16px rgba(255,255,255,0.8),0 1px 2px rgba(0,0,0,0.1);box-shadow:inset 0 0 0 110px rgba(0,0,0,0.6),inset 0 0 0 16px rgba(255,255,255,0.8),0 1px 2px rgba(0,0,0,0.1)\n}\n.ih-item.circle.effect17 a:hover .info{opacity:1;-webkit-transform:scale(1);transform:scale(1)\n}\n.ih-item.circle.effect17 a:hover .info p{opacity:1\n}\n.ih-item.circle.effect17.colored a:hover .img:before{box-shadow:inset 0 0 0 110px #1a4a72,inset 0 0 0 16px rgba(255,255,255,0.8),0 1px 2px rgba(0,0,0,0.1);box-shadow:inset 0 0 0 110px rgba(26,74,114,0.6),inset 0 0 0 16px rgba(255,255,255,0.8),0 1px 2px rgba(0,0,0,0.1)\n}\n.ih-item.circle.effect18{-webkit-perspective:900px;perspective:900px\n}\n.ih-item.circle.effect18 .img{z-index:11;transition:all 0.5s ease-in-out\n}\n.ih-item.circle.effect18.colored .info .info-back{background:#1a4a72\n}\n.ih-item.circle.effect18 .info{-webkit-transform-style:preserve-3d;transform-style:preserve-3d\n}\n.ih-item.circle.effect18 .info .info-back{opacity:1;border-radius:50%;width:100%;height:100%;background:#333\n}\n.ih-item.circle.effect18 .info h3{color:#fff;text-transform:uppercase;position:relative;letter-spacing:2px;font-size:22px;margin:0 30px;padding:55px 0 0 0;height:110px;text-shadow:0 0 1px #fff,0 1px 2px rgba(0,0,0,0.3)\n}\n.ih-item.circle.effect18 .info p{color:#bbb;padding:10px 5px;font-style:italic;margin:0 30px;font-size:12px;border-top:1px solid rgba(255,255,255,0.5)\n}\n.ih-item.circle.effect18.bottom_to_top .img{-webkit-transform-origin:50% 0;transform-origin:50% 0\n}\n.ih-item.circle.effect18.bottom_to_top a:hover .img{-webkit-transform:rotate3d(1, 0, 0, 180deg);transform:rotate3d(1, 0, 0, 180deg)\n}\n.ih-item.circle.effect18.top_to_bottom .img{-webkit-transform-origin:50% 100%;transform-origin:50% 100%\n}\n.ih-item.circle.effect18.top_to_bottom a:hover .img{-webkit-transform:rotate3d(1, 0, 0, -180deg);transform:rotate3d(1, 0, 0, -180deg)\n}\n.ih-item.circle.effect18.left_to_right .img{-webkit-transform-origin:100% 50%;transform-origin:100% 50%\n}\n.ih-item.circle.effect18.left_to_right a:hover .img{-webkit-transform:rotate3d(0, 1, 0, 180deg);transform:rotate3d(0, 1, 0, 180deg)\n}\n.ih-item.circle.effect18.right_to_left .img{-webkit-transform-origin:0% 50%;transform-origin:0% 50%\n}\n.ih-item.circle.effect18.right_to_left a:hover .img{-webkit-transform:rotate3d(0, 1, 0, -180deg);transform:rotate3d(0, 1, 0, -180deg)\n}\n.ih-item.circle.effect19.colored .info{background:#1a4a72;background:rgba(26,74,114,0.6)\n}\n.ih-item.circle.effect19 .info{background:#333;background:rgba(0,0,0,0.6);opacity:0;-webkit-transform:scale(0);transform:scale(0);transition:all 0.35s ease-in-out\n}\n.ih-item.circle.effect19 .info h3{color:#fff;text-transform:uppercase;letter-spacing:2px;font-size:22px;margin:0 30px;padding:45px 0 0 0;height:140px;text-shadow:0 0 1px #fff,0 1px 2px rgba(0,0,0,0.3)\n}\n.ih-item.circle.effect19 .info p{color:#bbb;padding:10px 5px;font-style:italic;margin:0 30px;font-size:12px;border-top:1px solid rgba(255,255,255,0.5)\n}\n.ih-item.circle.effect19 a:hover .info{opacity:1;-webkit-transform:scale(1);transform:scale(1)\n}\n.ih-item.circle.effect20{-webkit-perspective:900px;perspective:900px\n}\n.ih-item.circle.effect20 .img{transition:all 0.35s linear;-webkit-transform-origin:50% 0%;transform-origin:50% 0%\n}\n.ih-item.circle.effect20.colored .info .info-back{background:#1a4a72\n}\n.ih-item.circle.effect20 .info{-webkit-transform-style:preserve-3d;transform-style:preserve-3d\n}\n.ih-item.circle.effect20 .info .info-back{opacity:1;visibility:hidden;border-radius:50%;width:100%;height:100%;background:#333;transition:all 0.35s linear;-webkit-transform-origin:50% 0%;transform-origin:50% 0%;-webkit-backface-visibility:hidden;backface-visibility:hidden\n}\n.ih-item.circle.effect20 .info h3{color:#fff;text-transform:uppercase;position:relative;letter-spacing:2px;font-size:22px;margin:0 30px;padding:55px 0 0 0;height:110px;text-shadow:0 0 1px #fff,0 1px 2px rgba(0,0,0,0.3)\n}\n.ih-item.circle.effect20 .info p{color:#bbb;padding:10px 5px;font-style:italic;margin:0 30px;font-size:12px;border-top:1px solid rgba(255,255,255,0.5)\n}\n.ih-item.circle.effect20 a:hover .img{opacity:0\n}\n.ih-item.circle.effect20 a:hover .info .info-back{opacity:1;visibility:visible\n}\n.ih-item.circle.effect20.top_to_bottom .info .info-back{-webkit-transform:translate3d(0, 0, -220px) rotate3d(1, 0, 0, 90deg);transform:translate3d(0, 0, -220px) rotate3d(1, 0, 0, 90deg)\n}\n.ih-item.circle.effect20.top_to_bottom a:hover .img{-webkit-transform:translate3d(0, 280px, 0) rotate3d(1, 0, 0, -90deg);transform:translate3d(0, 280px, 0) rotate3d(1, 0, 0, -90deg)\n}\n.ih-item.circle.effect20.top_to_bottom a:hover .info .info-back{-webkit-transform:rotate3d(1, 0, 0, 0deg);transform:rotate3d(1, 0, 0, 0deg)\n}\n.ih-item.circle.effect20.bottom_to_top .info .info-back{-webkit-transform:translate3d(0, 280px, 0) rotate3d(1, 0, 0, -90deg);transform:translate3d(0, 280px, 0) rotate3d(1, 0, 0, -90deg)\n}\n.ih-item.circle.effect20.bottom_to_top a:hover .img{-webkit-transform:translate3d(0, 0, -220px) rotate3d(1, 0, 0, 90deg);transform:translate3d(0, 0, -220px) rotate3d(1, 0, 0, 90deg)\n}\n.ih-item.circle.effect20.bottom_to_top a:hover .info .info-back{-webkit-transform:rotate3d(1, 0, 0, 0deg);transform:rotate3d(1, 0, 0, 0deg)\n}\n.ih-item.square.effect1{overflow:hidden\n}\n.ih-item.square.effect1.colored .info{background:#1a4a72\n}\n.ih-item.square.effect1 .img{z-index:11;position:absolute;transition:all 0.35s ease-in-out;-webkit-transform:scale(1);transform:scale(1)\n}\n.ih-item.square.effect1 .info{background:#333;visibility:hidden;opacity:0;-webkit-transform:scale(0);transform:scale(0);transition:all 0.35s ease-in-out\n}\n.ih-item.square.effect1 a:hover .info{visibility:visible;opacity:1;-webkit-transform:scale(1);transform:scale(1)\n}\n.ih-item.square.effect1.left_and_right .info h3{position:absolute;top:12px;left:12px;text-transform:uppercase;color:#fff;text-align:center;font-size:17px;margin:0\n}\n.ih-item.square.effect1.left_and_right .info p{position:absolute;right:12px;bottom:12px;margin:0;font-style:italic;font-size:12px;color:#bbb\n}\n.ih-item.square.effect1.left_and_right a:hover .img{-webkit-transform:scale(0.6);transform:scale(0.6)\n}\n.ih-item.square.effect1.top_to_bottom .info h3{text-transform:uppercase;color:#fff;text-align:center;font-size:17px;padding:10px 10px 0 4px;margin:10px 0 0 0\n}\n.ih-item.square.effect1.top_to_bottom .info p{font-style:italic;font-size:12px;color:#bbb;padding:5px;text-align:center\n}\n.ih-item.square.effect1.top_to_bottom a:hover .img{-webkit-transform:translateY(30px) scale(0.6);transform:translateY(30px) scale(0.6)\n}\n.ih-item.square.effect1.bottom_to_top .info h3{text-transform:uppercase;color:#fff;text-align:center;font-size:17px;padding:10px 10px 0 4px;margin:134px 0 0 0\n}\n.ih-item.square.effect1.bottom_to_top .info p{font-style:italic;font-size:12px;color:#bbb;padding:5px;text-align:center\n}\n.ih-item.square.effect1.bottom_to_top a:hover .img{-webkit-transform:translateY(-30px) scale(0.6);transform:translateY(-30px) scale(0.6)\n}\n.ih-item.square.effect2{overflow:hidden\n}\n.ih-item.square.effect2.colored .info{background:#1a4a72\n}\n.ih-item.square.effect2.colored .info h3{background:rgba(12,34,52,0.6)\n}\n.ih-item.square.effect2 .img{opacity:1;transition:all 0.5s ease-in-out;-webkit-transform:rotate(0deg) scale(1);transform:rotate(0deg) scale(1)\n}\n.ih-item.square.effect2 .info{background:#333;visibility:hidden;transition:all 0.35s 0.3s ease-in-out\n}\n.ih-item.square.effect2 .info h3{text-transform:uppercase;color:#fff;text-align:center;font-size:17px;padding:10px;background:#111;margin:30px 0 0 0;-webkit-transform:translateY(-200px);transform:translateY(-200px);transition:all 0.35s 0.6s ease-in-out\n}\n.ih-item.square.effect2 .info p{font-style:italic;font-size:12px;position:relative;color:#bbb;padding:20px 20px 20px;text-align:center;-webkit-transform:translateY(-200px);transform:translateY(-200px);transition:all 0.35s 0.5s linear\n}\n.ih-item.square.effect2 a:hover .img{-webkit-transform:rotate(720deg) scale(0);transform:rotate(720deg) scale(0);opacity:0\n}\n.ih-item.square.effect2 a:hover .info{visibility:visible\n}\n.ih-item.square.effect2 a:hover .info h3,.ih-item.square.effect2 a:hover .info p{-webkit-transform:translateY(0);transform:translateY(0)\n}\n.ih-item.square.effect3{overflow:hidden\n}\n.ih-item.square.effect3.colored .info{background:#1a4a72\n}\n.ih-item.square.effect3 .img{-webkit-transform:translateY(0);transform:translateY(0);transition:all 0.35s ease-in-out\n}\n.ih-item.square.effect3 .info{height:65px;background:#333;opacity:0;transition:all 0.35s ease-in-out\n}\n.ih-item.square.effect3 .info h3{text-transform:uppercase;color:#fff;text-align:center;font-size:17px;padding:10px 10px 0 4px;margin:4px 0 0 0\n}\n.ih-item.square.effect3 .info p{font-style:italic;font-size:12px;position:relative;color:#bbb;padding:5px;text-align:center\n}\n.ih-item.square.effect3 a:hover .info{visibility:visible;opacity:1\n}\n.ih-item.square.effect3.bottom_to_top .info{top:auto;-webkit-transform:translateY(100%);transform:translateY(100%)\n}\n.ih-item.square.effect3.bottom_to_top a:hover .img{-webkit-transform:translateY(-50px);transform:translateY(-50px)\n}\n.ih-item.square.effect3.bottom_to_top a:hover .info{-webkit-transform:translateY(0);transform:translateY(0)\n}\n.ih-item.square.effect3.top_to_bottom .info{bottom:auto;-webkit-transform:translateY(-100%);transform:translateY(-100%)\n}\n.ih-item.square.effect3.top_to_bottom a:hover .img{-webkit-transform:translateY(50px);transform:translateY(50px)\n}\n.ih-item.square.effect3.top_to_bottom a:hover .info{-webkit-transform:translateY(0);transform:translateY(0)\n}\n.ih-item.square.effect4{overflow:hidden;position:relative\n}\n.ih-item.square.effect4.colored .info{background:rgba(12,34,52,0.6)\n}\n.ih-item.square.effect4.colored .mask1,.ih-item.square.effect4.colored .mask2{background:#1a4a72;background:rgba(26,74,114,0.6)\n}\n.ih-item.square.effect4 .img{transition:all 0.35s ease-in-out\n}\n.ih-item.square.effect4 .mask1,.ih-item.square.effect4 .mask2{position:absolute;background:#333;background:rgba(0,0,0,0.6);height:361px;width:361px;transition:all 0.35s ease-in-out\n}\n.ih-item.square.effect4 .mask1{left:auto;right:0;top:0;-webkit-transform:rotate(56.5deg) translateX(-180px);transform:rotate(56.5deg) translateX(-180px);-webkit-transform-origin:100% 0%;transform-origin:100% 0%\n}\n.ih-item.square.effect4 .mask2{top:auto;bottom:0;left:0;-webkit-transform:rotate(56.5deg) translateX(180px);transform:rotate(56.5deg) translateX(180px);-webkit-transform-origin:0% 100%;transform-origin:0% 100%\n}\n.ih-item.square.effect4 .info{background:#111;height:0;visibility:hidden;width:361px;-webkit-transform:rotate(-33.5deg) translate(-112px, 166px);transform:rotate(-33.5deg) translate(-112px, 166px);-webkit-transform-origin:0% 100%;transform-origin:0% 100%;transition:all 0.35s ease-in-out 0.35s\n}\n.ih-item.square.effect4 .info h3{text-transform:uppercase;color:#fff;text-align:center;font-size:17px;padding:10px;background:transparent;margin-top:5px;border-bottom:1px solid rgba(255,255,255,0.2);opacity:0;transition:all 0.35s ease-in-out 0.35s\n}\n.ih-item.square.effect4 .info p{font-style:italic;font-size:12px;position:relative;color:#bbb;padding:20px 20px 20px;text-align:center;opacity:0;transition:all 0.35s ease-in-out 0.35s\n}\n.ih-item.square.effect4 a:hover .mask1{-webkit-transform:rotate(56.5deg) translateX(1px);transform:rotate(56.5deg) translateX(1px)\n}\n.ih-item.square.effect4 a:hover .mask2{-webkit-transform:rotate(56.5deg) translateX(-1px);transform:rotate(56.5deg) translateX(-1px)\n}\n.ih-item.square.effect4 a:hover .info{width:300px;height:120px;visibility:visible;top:40px;-webkit-transform:rotate(0deg) translate(0, 0);transform:rotate(0deg) translate(0, 0)\n}\n.ih-item.square.effect4 a:hover .info h3,.ih-item.square.effect4 a:hover .info p{opacity:1\n}\n.ih-item.square.effect5.colored .info{background:#1a4a72\n}\n.ih-item.square.effect5.colored .info h3{background:rgba(12,34,52,0.6)\n}\n.ih-item.square.effect5 .img{transition:all 0.35s ease-in-out;-webkit-transform:scale(1);transform:scale(1)\n}\n.ih-item.square.effect5 .info{background:#333;opacity:0;transition:all 0.35s ease-in-out\n}\n.ih-item.square.effect5 .info h3{text-transform:uppercase;color:#fff;text-align:center;font-size:17px;padding:10px;background:#111;margin:30px 0 0 0\n}\n.ih-item.square.effect5 .info p{font-style:italic;font-size:12px;position:relative;color:#bbb;padding:20px 20px 20px;text-align:center\n}\n.ih-item.square.effect5 a:hover .img{-webkit-transform:scale(0);transform:scale(0);transition-delay:0\n}\n.ih-item.square.effect5 a:hover .info{visibility:visible;opacity:1;-webkit-transform:scale(1) rotate(0deg);transform:scale(1) rotate(0deg);transition-delay:0.3s\n}\n.ih-item.square.effect5.left_to_right .info{-webkit-transform:scale(0) rotate(-180deg);transform:scale(0) rotate(-180deg)\n}\n.ih-item.square.effect5.right_to_left .info{-webkit-transform:scale(0) rotate(180deg);transform:scale(0) rotate(180deg)\n}\n.ih-item.square.effect6{overflow:hidden\n}\n.ih-item.square.effect6.colored .info{background:#1a4a72;background:rgba(26,74,114,0.6)\n}\n.ih-item.square.effect6.colored .info h3{background:rgba(12,34,52,0.6)\n}\n.ih-item.square.effect6 .img{transition:all 0.35s ease-in-out;-webkit-transform:scale(1);transform:scale(1)\n}\n.ih-item.square.effect6 .info{background:#333;background:rgba(0,0,0,0.6);visibility:hidden;opacity:0;transition:all 0.35s ease-in-out\n}\n.ih-item.square.effect6 .info h3{text-transform:uppercase;color:#fff;text-align:center;font-size:17px;padding:10px;background:#111;margin:30px 0 0 0;transition:all 0.35s ease-in-out\n}\n.ih-item.square.effect6 .info p{font-style:italic;font-size:12px;position:relative;color:#bbb;padding:20px 20px 20px;text-align:center;transition:all 0.35s 0.1s linear\n}\n.ih-item.square.effect6 a:hover .img{-webkit-transform:scale(1.2);transform:scale(1.2)\n}\n.ih-item.square.effect6 a:hover .info{visibility:visible;opacity:1\n}\n.ih-item.square.effect6.from_top_and_bottom .info h3{-webkit-transform:translateY(-100%);transform:translateY(-100%)\n}\n.ih-item.square.effect6.from_top_and_bottom .info p{-webkit-transform:translateY(100%);transform:translateY(100%)\n}\n.ih-item.square.effect6.from_top_and_bottom a:hover .info h3,.ih-item.square.effect6.from_top_and_bottom a:hover .info p{-webkit-transform:translateY(0);transform:translateY(0)\n}\n.ih-item.square.effect6.from_left_and_right .info h3{-webkit-transform:translateX(-100%);transform:translateX(-100%)\n}\n.ih-item.square.effect6.from_left_and_right .info p{-webkit-transform:translateX(100%);transform:translateX(100%)\n}\n.ih-item.square.effect6.from_left_and_right a:hover .info h3,.ih-item.square.effect6.from_left_and_right a:hover .info p{-webkit-transform:translateX(0);transform:translateX(0)\n}\n.ih-item.square.effect6.top_to_bottom .info h3{-webkit-transform:translateY(-100%);transform:translateY(-100%)\n}\n.ih-item.square.effect6.top_to_bottom .info p{-webkit-transform:translateY(-100%);transform:translateY(-100%)\n}\n.ih-item.square.effect6.top_to_bottom a:hover .info h3,.ih-item.square.effect6.top_to_bottom a:hover .info p{-webkit-transform:translateY(0);transform:translateY(0)\n}\n.ih-item.square.effect6.bottom_to_top .info h3{-webkit-transform:translateY(100%);transform:translateY(100%)\n}\n.ih-item.square.effect6.bottom_to_top .info p{-webkit-transform:translateY(100%);transform:translateY(100%)\n}\n.ih-item.square.effect6.bottom_to_top a:hover .info h3,.ih-item.square.effect6.bottom_to_top a:hover .info p{-webkit-transform:translateY(0);transform:translateY(0)\n}\n.ih-item.square.effect7{overflow:hidden\n}\n.ih-item.square.effect7.colored .info{background:#1a4a72;background:rgba(26,74,114,0.6)\n}\n.ih-item.square.effect7.colored .info h3{background:rgba(12,34,52,0.6)\n}\n.ih-item.square.effect7 .img{transition:all 0.35s ease-in-out;-webkit-transform:scale(1);transform:scale(1)\n}\n.ih-item.square.effect7 .info{background:#333;background:rgba(0,0,0,0.6);visibility:hidden;opacity:0;transition:all 0.35s ease-in-out\n}\n.ih-item.square.effect7 .info h3{text-transform:uppercase;color:#fff;text-align:center;font-size:17px;padding:10px;background:#111;margin:30px 0 0 0;-webkit-transform:scale(4);transform:scale(4);transition:all 0.35s 0.1s ease-in-out\n}\n.ih-item.square.effect7 .info p{font-style:italic;font-size:12px;position:relative;color:#bbb;padding:20px 20px 20px;text-align:center;-webkit-transform:scale(5);transform:scale(5);transition:all 0.35s 0.3s linear\n}\n.ih-item.square.effect7 a:hover .img{-webkit-transform:scale(1.2);transform:scale(1.2)\n}\n.ih-item.square.effect7 a:hover .info{visibility:visible;opacity:1\n}\n.ih-item.square.effect7 a:hover .info h3,.ih-item.square.effect7 a:hover .info p{-webkit-transform:scale(1);transform:scale(1)\n}\n.ih-item.square.effect8{overflow:hidden\n}\n.ih-item.square.effect8.colored .info{background:#1a4a72\n}\n.ih-item.square.effect8.colored .info h3{background:rgba(12,34,52,0.6)\n}\n.ih-item.square.effect8 .img{opacity:1;transition:all 0.35s ease-in-out\n}\n.ih-item.square.effect8 .info{background:#333;visibility:hidden;opacity:0;transition:all 0.35s ease-in-out\n}\n.ih-item.square.effect8 .info h3{text-transform:uppercase;color:#fff;text-align:center;font-size:17px;padding:10px;background:#111;margin:30px 0 0 0;transition:all 0.35s 0.1s ease-in-out\n}\n.ih-item.square.effect8 .info p{font-style:italic;font-size:12px;position:relative;color:#bbb;padding:20px 20px 20px;text-align:center;transition:all 0.35s 0.15s linear\n}\n.ih-item.square.effect8 a:hover .img{opacity:0\n}\n.ih-item.square.effect8 a:hover .info{visibility:visible;opacity:1\n}\n.ih-item.square.effect8.scale_up .img{-webkit-transform:scale(1);transform:scale(1)\n}\n.ih-item.square.effect8.scale_up .info{-webkit-transform:scale(0);transform:scale(0)\n}\n.ih-item.square.effect8.scale_up .info h3,.ih-item.square.effect8.scale_up .info p{-webkit-transform:scale(0);transform:scale(0)\n}\n.ih-item.square.effect8.scale_up a:hover .img{-webkit-transform:scale(5);transform:scale(5)\n}\n.ih-item.square.effect8.scale_up a:hover .info{-webkit-transform:scale(1);transform:scale(1)\n}\n.ih-item.square.effect8.scale_up a:hover .info h3,.ih-item.square.effect8.scale_up a:hover .info p{-webkit-transform:scale(1);transform:scale(1)\n}\n.ih-item.square.effect8.scale_down .img{-webkit-transform:scale(1);transform:scale(1)\n}\n.ih-item.square.effect8.scale_down .info{-webkit-transform:scale(5);transform:scale(5)\n}\n.ih-item.square.effect8.scale_down .info h3,.ih-item.square.effect8.scale_down .info p{-webkit-transform:scale(5);transform:scale(5)\n}\n.ih-item.square.effect8.scale_down a:hover .img{-webkit-transform:scale(0.5);transform:scale(0.5)\n}\n.ih-item.square.effect8.scale_down a:hover .info{-webkit-transform:scale(1);transform:scale(1)\n}\n.ih-item.square.effect8.scale_down a:hover .info h3,.ih-item.square.effect8.scale_down a:hover .info p{-webkit-transform:scale(1);transform:scale(1)\n}\n.ih-item.square.effect9{-webkit-perspective:900px;perspective:900px\n}\n.ih-item.square.effect9.colored .info .info-back{background:#1a4a72\n}\n.ih-item.square.effect9.colored .info h3{background:rgba(12,34,52,0.6)\n}\n.ih-item.square.effect9 .img{position:relative;z-index:11;transition:all 0.5s ease-in-out\n}\n.ih-item.square.effect9 .info{z-index:0;-webkit-transform-style:preserve-3d;transform-style:preserve-3d\n}\n.ih-item.square.effect9 .info .info-back{opacity:1;width:100%;height:100%;padding-top:30px;background:#333\n}\n.ih-item.square.effect9 .info h3{text-transform:uppercase;color:#fff;text-align:center;font-size:17px;padding:10px;background:#111;margin:0\n}\n.ih-item.square.effect9 .info p{font-style:italic;font-size:12px;position:relative;color:#bbb;padding:20px 20px 20px;text-align:center\n}\n.ih-item.square.effect9.left_to_right .img{-webkit-transform-origin:100% 50%;transform-origin:100% 50%\n}\n.ih-item.square.effect9.left_to_right a:hover .img{-webkit-transform:rotate3d(0, 1, 0, 180deg);transform:rotate3d(0, 1, 0, 180deg)\n}\n.ih-item.square.effect9.right_to_left .img{-webkit-transform-origin:0% 50%;transform-origin:0% 50%\n}\n.ih-item.square.effect9.right_to_left a:hover .img{-webkit-transform:rotate3d(0, 1, 0, -180deg);transform:rotate3d(0, 1, 0, -180deg)\n}\n.ih-item.square.effect9.top_to_bottom .img{-webkit-transform-origin:50% 100%;transform-origin:50% 100%\n}\n.ih-item.square.effect9.top_to_bottom a:hover .img{-webkit-transform:rotate3d(1, 0, 0, -180deg);transform:rotate3d(1, 0, 0, -180deg)\n}\n.ih-item.square.effect9.bottom_to_top .img{-webkit-transform-origin:50% 0;transform-origin:50% 0\n}\n.ih-item.square.effect9.bottom_to_top a:hover .img{-webkit-transform:rotate3d(1, 0, 0, 180deg);transform:rotate3d(1, 0, 0, 180deg)\n}\n.ih-item.square.effect10{overflow:hidden\n}\n.ih-item.square.effect10.colored .info{background:#1a4a72\n}\n.ih-item.square.effect10.colored .info h3{background:rgba(12,34,52,0.6)\n}\n.ih-item.square.effect10 .img{transition:all 0.35s ease-in-out\n}\n.ih-item.square.effect10 .info{background:#333;visibility:hidden;opacity:0;transition:all 0.35s ease-in-out\n}\n.ih-item.square.effect10 .info h3{text-transform:uppercase;color:#fff;text-align:center;font-size:17px;padding:10px;background:#111;margin:30px 0 0 0\n}\n.ih-item.square.effect10 .info p{font-style:italic;font-size:12px;position:relative;color:#bbb;padding:20px 20px 20px;text-align:center\n}\n.ih-item.square.effect10 a:hover .info{visibility:visible;opacity:1\n}\n.ih-item.square.effect10.left_to_right .img{-webkit-transform:translateX(0);transform:translateX(0)\n}\n.ih-item.square.effect10.left_to_right .info{-webkit-transform:translateX(-100%);transform:translateX(-100%)\n}\n.ih-item.square.effect10.left_to_right a:hover .img{-webkit-transform:translateX(100%);transform:translateX(100%)\n}\n.ih-item.square.effect10.left_to_right a:hover .info{-webkit-transform:translateX(0);transform:translateX(0)\n}\n.ih-item.square.effect10.right_to_left .img{-webkit-transform:translateX(0);transform:translateX(0)\n}\n.ih-item.square.effect10.right_to_left .info{-webkit-transform:translateX(100%);transform:translateX(100%)\n}\n.ih-item.square.effect10.right_to_left a:hover .img{-webkit-transform:translateX(-100%);transform:translateX(-100%)\n}\n.ih-item.square.effect10.right_to_left a:hover .info{-webkit-transform:translateX(0);transform:translateX(0)\n}\n.ih-item.square.effect10.top_to_bottom .img{-webkit-transform:translateY(0);transform:translateY(0)\n}\n.ih-item.square.effect10.top_to_bottom .info{-webkit-transform:translateY(-100%);transform:translateY(-100%)\n}\n.ih-item.square.effect10.top_to_bottom a:hover .img{-webkit-transform:translateY(100%);transform:translateY(100%)\n}\n.ih-item.square.effect10.top_to_bottom a:hover .info{-webkit-transform:translateY(0);transform:translateY(0)\n}\n.ih-item.square.effect10.bottom_to_top .img{-webkit-transform:translateY(0);transform:translateY(0)\n}\n.ih-item.square.effect10.bottom_to_top .info{-webkit-transform:translateY(100%);transform:translateY(100%)\n}\n.ih-item.square.effect10.bottom_to_top a:hover .img{-webkit-transform:translateY(-100%);transform:translateY(-100%)\n}\n.ih-item.square.effect10.bottom_to_top a:hover .info{-webkit-transform:translateY(0);transform:translateY(0)\n}\n.ih-item.square.effect11{overflow:hidden\n}\n.ih-item.square.effect11.colored .info{background:#1a4a72\n}\n.ih-item.square.effect11.colored .info h3{background:rgba(12,34,52,0.6)\n}\n.ih-item.square.effect11 .img{opacity:1;-webkit-transform:scale(1);transform:scale(1);transition:all 0.35s ease-in-out\n}\n.ih-item.square.effect11 .info{background:#333;visibility:hidden;opacity:0;transition:all 0.35s ease 0.2s\n}\n.ih-item.square.effect11 .info h3{text-transform:uppercase;color:#fff;text-align:center;font-size:17px;padding:10px;background:#111;margin:30px 0 0 0\n}\n.ih-item.square.effect11 .info p{font-style:italic;font-size:12px;position:relative;color:#bbb;padding:20px 20px 20px;text-align:center\n}\n.ih-item.square.effect11 a:hover .img{opacity:0;-webkit-transform:scale(0.5);transform:scale(0.5)\n}\n.ih-item.square.effect11 a:hover .info{visibility:visible;opacity:1\n}\n.ih-item.square.effect11.left_to_right .info{-webkit-transform:translateX(-100%);transform:translateX(-100%)\n}\n.ih-item.square.effect11.left_to_right a:hover .info{-webkit-transform:translateX(0);transform:translateX(0)\n}\n.ih-item.square.effect11.right_to_left .info{-webkit-transform:translateX(100%);transform:translateX(100%)\n}\n.ih-item.square.effect11.right_to_left a:hover .info{-webkit-transform:translateX(0);transform:translateX(0)\n}\n.ih-item.square.effect11.top_to_bottom .info{-webkit-transform:translateY(-100%);transform:translateY(-100%)\n}\n.ih-item.square.effect11.top_to_bottom a:hover .info{-webkit-transform:translateY(0);transform:translateY(0)\n}\n.ih-item.square.effect11.bottom_to_top .info{-webkit-transform:translateY(100%);transform:translateY(100%)\n}\n.ih-item.square.effect11.bottom_to_top a:hover .info{-webkit-transform:translateY(0);transform:translateY(0)\n}\n.ih-item.square.effect12{overflow:hidden\n}\n.ih-item.square.effect12.colored .info{background:#1a4a72;background:rgba(26,74,114,0.6)\n}\n.ih-item.square.effect12.colored .info h3{background:rgba(12,34,52,0.6)\n}\n.ih-item.square.effect12 .img{transition:all 0.35s ease-in\n}\n.ih-item.square.effect12 .info{background:#333;background:rgba(0,0,0,0.6);visibility:hidden;opacity:0;transition:all 0.35s ease-in\n}\n.ih-item.square.effect12 .info h3{text-transform:uppercase;color:#fff;text-align:center;font-size:17px;padding:10px;background:#111;margin:30px 0 0 0;transition:all 0.35s ease-in\n}\n.ih-item.square.effect12 .info p{font-style:italic;font-size:12px;position:relative;color:#bbb;padding:20px 20px 20px;text-align:center;transition:all 0.35s ease-in\n}\n.ih-item.square.effect12 a:hover .info{visibility:visible;opacity:1;transition-delay:0.2s\n}\n.ih-item.square.effect12 a:hover .info h3{transition-delay:0.3s\n}\n.ih-item.square.effect12 a:hover .info p{transition-delay:0.25s\n}\n.ih-item.square.effect12.left_to_right .info{-webkit-transform:translate(-460px, -100px) rotate(-180deg);transform:translate(-460px, -100px) rotate(-180deg)\n}\n.ih-item.square.effect12.left_to_right .info h3{-webkit-transform:translateY(-100px);transform:translateY(-100px)\n}\n.ih-item.square.effect12.left_to_right .info p{-webkit-transform:translateX(-300px) rotate(-90deg);transform:translateX(-300px) rotate(-90deg)\n}\n.ih-item.square.effect12.left_to_right a:hover .info{-webkit-transform:translate(0px, 0px);transform:translate(0px, 0px)\n}\n.ih-item.square.effect12.left_to_right a:hover .info h3{-webkit-transform:translateY(0px);transform:translateY(0px)\n}\n.ih-item.square.effect12.left_to_right a:hover .info p{-webkit-transform:translateX(0px) rotate(0deg);transform:translateX(0px) rotate(0deg)\n}\n.ih-item.square.effect12.right_to_left .info{-webkit-transform:translate(460px, -100px) rotate(180deg);transform:translate(460px, -100px) rotate(180deg)\n}\n.ih-item.square.effect12.right_to_left .info h3{-webkit-transform:translateY(-100px);transform:translateY(-100px)\n}\n.ih-item.square.effect12.right_to_left .info p{-webkit-transform:translateX(300px) rotate(90deg);transform:translateX(300px) rotate(90deg)\n}\n.ih-item.square.effect12.right_to_left a:hover .info{-webkit-transform:translate(0px, 0px);transform:translate(0px, 0px)\n}\n.ih-item.square.effect12.right_to_left a:hover .info h3{-webkit-transform:translateY(0px);transform:translateY(0px)\n}\n.ih-item.square.effect12.right_to_left a:hover .info p{-webkit-transform:translateX(0px) rotate(0deg);transform:translateX(0px) rotate(0deg)\n}\n.ih-item.square.effect12.top_to_bottom .info{-webkit-transform:translate(-265px, -145px) rotate(-45deg);transform:translate(-265px, -145px) rotate(-45deg)\n}\n.ih-item.square.effect12.top_to_bottom .info h3{-webkit-transform:translate(200px, -200px);transform:translate(200px, -200px)\n}\n.ih-item.square.effect12.top_to_bottom .info p{-webkit-transform:translate(200px, -200px);transform:translate(200px, -200px)\n}\n.ih-item.square.effect12.top_to_bottom a:hover .info{-webkit-transform:translate(0px, 0px);transform:translate(0px, 0px);transition-delay:0.2s\n}\n.ih-item.square.effect12.top_to_bottom a:hover .info h3{-webkit-transform:translate(0px, 0px);transform:translate(0px, 0px);transition-delay:0.3s\n}\n.ih-item.square.effect12.top_to_bottom a:hover .info p{-webkit-transform:translate(0px, 0px);transform:translate(0px, 0px);transition-delay:0.4s\n}\n.ih-item.square.effect12.bottom_to_top .info{-webkit-transform:translate(265px, 145px) rotate(45deg);transform:translate(265px, 145px) rotate(45deg)\n}\n.ih-item.square.effect12.bottom_to_top .info h3{-webkit-transform:translate(200px, -200px);transform:translate(200px, -200px)\n}\n.ih-item.square.effect12.bottom_to_top .info p{-webkit-transform:translate(-200px, 200px);transform:translate(-200px, 200px)\n}\n.ih-item.square.effect12.bottom_to_top a:hover .info{-webkit-transform:translate(0px, 0px);transform:translate(0px, 0px);transition-delay:0.2s\n}\n.ih-item.square.effect12.bottom_to_top a:hover .info h3{-webkit-transform:translate(0px, 0px);transform:translate(0px, 0px);transition-delay:0.3s\n}\n.ih-item.square.effect12.bottom_to_top a:hover .info p{-webkit-transform:translate(0px, 0px);transform:translate(0px, 0px);transition-delay:0.4s\n}\n.ih-item.square.effect13{overflow:hidden\n}\n.ih-item.square.effect13.colored .info{background:#1a4a72;background:rgba(26,74,114,0.6)\n}\n.ih-item.square.effect13.colored .info h3{background:rgba(12,34,52,0.6)\n}\n.ih-item.square.effect13 .img{transition:all 0.35s ease-in-out;-webkit-transform:scale(1);transform:scale(1)\n}\n.ih-item.square.effect13 .info{background:#333;background:rgba(0,0,0,0.6);visibility:hidden;opacity:0;pointer-events:none;transition:all 0.35s ease-in-out\n}\n.ih-item.square.effect13 .info h3{text-transform:uppercase;color:#fff;text-align:center;font-size:17px;padding:10px;background:#111;margin:30px 0 0 0\n}\n.ih-item.square.effect13 .info p{font-style:italic;font-size:12px;position:relative;color:#bbb;padding:20px 20px 20px;text-align:center\n}\n.ih-item.square.effect13 a:hover .img{-webkit-transform:scale(1.2);transform:scale(1.2)\n}\n.ih-item.square.effect13 a:hover .info{visibility:visible;opacity:1\n}\n.ih-item.square.effect13.left_to_right .info{-webkit-transform:translateX(-100%);transform:translateX(-100%)\n}\n.ih-item.square.effect13.left_to_right a:hover .info{-webkit-transform:translateX(0);transform:translateX(0)\n}\n.ih-item.square.effect13.right_to_left .info{-webkit-transform:translateX(100%);transform:translateX(100%)\n}\n.ih-item.square.effect13.right_to_left a:hover .info{-webkit-transform:translateX(0);transform:translateX(0)\n}\n.ih-item.square.effect13.top_to_bottom .info{-webkit-transform:translateY(-100%);transform:translateY(-100%)\n}\n.ih-item.square.effect13.top_to_bottom a:hover .info{-webkit-transform:translateY(0);transform:translateY(0)\n}\n.ih-item.square.effect13.bottom_to_top .info{-webkit-transform:translateY(100%);transform:translateY(100%)\n}\n.ih-item.square.effect13.bottom_to_top a:hover .info{-webkit-transform:translateY(0);transform:translateY(0)\n}\n.ih-item.square.effect14.colored .info{background:#1a4a72\n}\n.ih-item.square.effect14.colored .info h3{background:rgba(12,34,52,0.6)\n}\n.ih-item.square.effect14 .img{opacity:1;transition:all 0.35s ease-in-out\n}\n.ih-item.square.effect14 .info{background:#333;visibility:hidden;opacity:0;pointer-events:none;-webkit-transform:scale(0.5);transform:scale(0.5);transition:all 0.35s ease 0.2s\n}\n.ih-item.square.effect14 .info h3{text-transform:uppercase;color:#fff;text-align:center;font-size:17px;padding:10px;background:#111;margin:30px 0 0 0\n}\n.ih-item.square.effect14 .info p{font-style:italic;font-size:12px;position:relative;color:#bbb;padding:20px 20px 20px;text-align:center\n}\n.ih-item.square.effect14 a:hover .img{opacity:0;pointer-events:none;-webkit-transform:scale(0.5);transform:scale(0.5)\n}\n.ih-item.square.effect14 a:hover .info{visibility:visible;opacity:1;-webkit-transform:scale(1);transform:scale(1)\n}\n.ih-item.square.effect14.left_to_right .img{-webkit-transform:translateX(0) rotate(0);transform:translateX(0) rotate(0)\n}\n.ih-item.square.effect14.left_to_right a:hover .img{-webkit-transform:translateX(100%) rotate(180deg);transform:translateX(100%) rotate(180deg)\n}\n.ih-item.square.effect14.right_to_left .img{-webkit-transform:translateX(0) rotate(0);transform:translateX(0) rotate(0)\n}\n.ih-item.square.effect14.right_to_left a:hover .img{-webkit-transform:translateX(-100%) rotate(-180deg);transform:translateX(-100%) rotate(-180deg)\n}\n.ih-item.square.effect14.top_to_bottom .img{-webkit-transform:translateY(0);transform:translateY(0)\n}\n.ih-item.square.effect14.top_to_bottom a:hover .img{-webkit-transform:translateY(-100%);transform:translateY(-100%)\n}\n.ih-item.square.effect14.bottom_to_top .img{-webkit-transform:translateY(0);transform:translateY(0)\n}\n.ih-item.square.effect14.bottom_to_top a:hover .img{-webkit-transform:translateY(100%);transform:translateY(100%)\n}\n.ih-item.square.effect15{overflow:hidden;-webkit-perspective:900px;perspective:900px\n}\n.ih-item.square.effect15.colored .info{background:#1a4a72\n}\n.ih-item.square.effect15 .img{opacity:1;transition:all 0.4s ease-in-out\n}\n.ih-item.square.effect15 .info{background:#333;opacity:0;transition:all 0.35s ease-in-out 0.3s\n}\n.ih-item.square.effect15 .info h3{text-transform:uppercase;color:#fff;text-align:center;font-size:17px;padding:10px;background:#111;margin:30px 0 0 0\n}\n.ih-item.square.effect15 .info p{font-style:italic;font-size:12px;position:relative;color:#bbb;padding:20px 20px 20px;text-align:center\n}\n.ih-item.square.effect15 a:hover .img{opacity:0;visibility:hidden\n}\n.ih-item.square.effect15 a:hover .info{visibility:visible;opacity:1\n}\n.ih-item.square.effect15.left_to_right .img{-webkit-transform:rotateY(0);transform:rotateY(0);-webkit-transform-origin:100% 50%;transform-origin:100% 50%\n}\n.ih-item.square.effect15.left_to_right .info{-webkit-transform:rotateY(90deg);transform:rotateY(90deg);-webkit-transform-origin:0% 50%;transform-origin:0% 50%\n}\n.ih-item.square.effect15.left_to_right a:hover .img{-webkit-transform:rotateY(-90deg);transform:rotateY(-90deg)\n}\n.ih-item.square.effect15.left_to_right a:hover .info{-webkit-transform:rotateY(0);transform:rotateY(0)\n}\n.ih-item.square.effect15.right_to_left .img{-webkit-transform:rotateY(0);transform:rotateY(0);-webkit-transform-origin:0% 50%;transform-origin:0% 50%\n}\n.ih-item.square.effect15.right_to_left .info{-webkit-transform:rotateY(-90deg);transform:rotateY(-90deg);-webkit-transform-origin:100% 50%;transform-origin:100% 50%\n}\n.ih-item.square.effect15.right_to_left a:hover .img{-webkit-transform:rotateY(90deg);transform:rotateY(90deg)\n}\n.ih-item.square.effect15.right_to_left a:hover .info{-webkit-transform:rotateY(0);transform:rotateY(0)\n}\n.ih-item.square.effect15.top_to_bottom .img{-webkit-transform:rotateX(0);transform:rotateX(0);-webkit-transform-origin:50% 100%;transform-origin:50% 100%\n}\n.ih-item.square.effect15.top_to_bottom .info{-webkit-transform:rotateX(-90deg);transform:rotateX(-90deg);-webkit-transform-origin:50% 0;transform-origin:50% 0\n}\n.ih-item.square.effect15.top_to_bottom a:hover .img{-webkit-transform:rotateX(90deg);transform:rotateX(90deg)\n}\n.ih-item.square.effect15.top_to_bottom a:hover .info{-webkit-transform:rotateX(0);transform:rotateX(0)\n}\n.ih-item.square.effect15.bottom_to_top .img{-webkit-transform:rotateX(0);transform:rotateX(0);-webkit-transform-origin:50% 0;transform-origin:50% 0\n}\n.ih-item.square.effect15.bottom_to_top .info{-webkit-transform:rotateX(90deg);transform:rotateX(90deg);-webkit-transform-origin:50% 100%;transform-origin:50% 100%\n}\n.ih-item.square.effect15.bottom_to_top a:hover .img{-webkit-transform:rotateX(-90deg);transform:rotateX(-90deg)\n}\n.ih-item.square.effect15.bottom_to_top a:hover .info{-webkit-transform:rotateX(0);transform:rotateX(0)\n}\n", ""]);

/***/ }),

/***/ 685:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
exports.push([module.i, "/**\n * Swiper 3.4.2\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * \n * http://www.idangero.us/swiper/\n * \n * Copyright 2017, Vladimir Kharlampidi\n * The iDangero.us\n * http://www.idangero.us/\n * \n * Licensed under MIT\n * \n * Released on: March 10, 2017\n */\n.swiper-container[data-v-db2ac992]{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;z-index:1\n}\n.swiper-container-no-flexbox .swiper-slide[data-v-db2ac992]{float:left\n}\n.swiper-container-vertical>.swiper-wrapper[data-v-db2ac992]{-webkit-box-orient:vertical;-ms-flex-direction:column;flex-direction:column\n}\n.swiper-wrapper[data-v-db2ac992]{position:relative;width:100%;height:100%;z-index:1;display:-webkit-box;display:-ms-flexbox;display:flex;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;box-sizing:content-box\n}\n.swiper-container-android .swiper-slide[data-v-db2ac992],.swiper-wrapper[data-v-db2ac992]{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)\n}\n.swiper-container-multirow>.swiper-wrapper[data-v-db2ac992]{-webkit-box-lines:multiple;-moz-box-lines:multiple;-ms-flex-wrap:wrap;flex-wrap:wrap\n}\n.swiper-container-free-mode>.swiper-wrapper[data-v-db2ac992]{transition-timing-function:ease-out;margin:0 auto\n}\n.swiper-slide[data-v-db2ac992]{-webkit-flex-shrink:0;-ms-flex:0 0 auto;-ms-flex-negative:0;flex-shrink:0;width:100%;height:100%;position:relative\n}\n.swiper-container-autoheight[data-v-db2ac992],.swiper-container-autoheight .swiper-slide[data-v-db2ac992]{height:auto\n}\n.swiper-container-autoheight .swiper-wrapper[data-v-db2ac992]{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;transition-property:height,-webkit-transform;transition-property:transform,height;transition-property:transform,height,-webkit-transform\n}\n.swiper-container .swiper-notification[data-v-db2ac992]{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000\n}\n.swiper-wp8-horizontal[data-v-db2ac992]{-ms-touch-action:pan-y;touch-action:pan-y\n}\n.swiper-wp8-vertical[data-v-db2ac992]{-ms-touch-action:pan-x;touch-action:pan-x\n}\n.swiper-button-next[data-v-db2ac992],.swiper-button-prev[data-v-db2ac992]{position:absolute;top:50%;width:27px;height:44px;margin-top:-22px;z-index:10;cursor:pointer;background-size:27px 44px;background-position:center;background-repeat:no-repeat\n}\n.swiper-button-next.swiper-button-disabled[data-v-db2ac992],.swiper-button-prev.swiper-button-disabled[data-v-db2ac992]{opacity:.35;cursor:auto;pointer-events:none\n}\n.swiper-button-prev[data-v-db2ac992],.swiper-container-rtl .swiper-button-next[data-v-db2ac992]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");left:10px;right:auto\n}\n.swiper-button-prev.swiper-button-black[data-v-db2ac992],.swiper-container-rtl .swiper-button-next.swiper-button-black[data-v-db2ac992]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\")\n}\n.swiper-button-prev.swiper-button-white[data-v-db2ac992],.swiper-container-rtl .swiper-button-next.swiper-button-white[data-v-db2ac992]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\")\n}\n.swiper-button-next[data-v-db2ac992],.swiper-container-rtl .swiper-button-prev[data-v-db2ac992]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");right:10px;left:auto\n}\n.swiper-button-next.swiper-button-black[data-v-db2ac992],.swiper-container-rtl .swiper-button-prev.swiper-button-black[data-v-db2ac992]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\")\n}\n.swiper-button-next.swiper-button-white[data-v-db2ac992],.swiper-container-rtl .swiper-button-prev.swiper-button-white[data-v-db2ac992]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\")\n}\n.swiper-pagination[data-v-db2ac992]{position:absolute;text-align:center;transition:.3s;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);z-index:10\n}\n.swiper-pagination.swiper-pagination-hidden[data-v-db2ac992]{opacity:0\n}\n.swiper-container-horizontal>.swiper-pagination-bullets[data-v-db2ac992],.swiper-pagination-custom[data-v-db2ac992],.swiper-pagination-fraction[data-v-db2ac992]{bottom:10px;left:0;width:100%\n}\n.swiper-pagination-bullet[data-v-db2ac992]{width:8px;height:8px;display:inline-block;border-radius:100%;background:#000;opacity:.2\n}\nbutton.swiper-pagination-bullet[data-v-db2ac992]{border:none;margin:0;padding:0;box-shadow:none;-moz-appearance:none;-ms-appearance:none;-webkit-appearance:none;appearance:none\n}\n.swiper-pagination-clickable .swiper-pagination-bullet[data-v-db2ac992]{cursor:pointer\n}\n.swiper-pagination-white .swiper-pagination-bullet[data-v-db2ac992]{background:#fff\n}\n.swiper-pagination-bullet-active[data-v-db2ac992]{opacity:1;background:#007aff\n}\n.swiper-pagination-white .swiper-pagination-bullet-active[data-v-db2ac992]{background:#fff\n}\n.swiper-pagination-black .swiper-pagination-bullet-active[data-v-db2ac992]{background:#000\n}\n.swiper-container-vertical>.swiper-pagination-bullets[data-v-db2ac992]{right:10px;top:50%;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)\n}\n.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet[data-v-db2ac992]{margin:5px 0;display:block\n}\n.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet[data-v-db2ac992]{margin:0 5px\n}\n.swiper-pagination-progress[data-v-db2ac992]{background:rgba(0,0,0,.25);position:absolute\n}\n.swiper-pagination-progress .swiper-pagination-progressbar[data-v-db2ac992]{background:#007aff;position:absolute;left:0;top:0;width:100%;height:100%;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:left top;transform-origin:left top\n}\n.swiper-container-rtl .swiper-pagination-progress .swiper-pagination-progressbar[data-v-db2ac992]{-webkit-transform-origin:right top;transform-origin:right top\n}\n.swiper-container-horizontal>.swiper-pagination-progress[data-v-db2ac992]{width:100%;height:4px;left:0;top:0\n}\n.swiper-container-vertical>.swiper-pagination-progress[data-v-db2ac992]{width:4px;height:100%;left:0;top:0\n}\n.swiper-pagination-progress.swiper-pagination-white[data-v-db2ac992]{background:rgba(255,255,255,.5)\n}\n.swiper-pagination-progress.swiper-pagination-white .swiper-pagination-progressbar[data-v-db2ac992]{background:#fff\n}\n.swiper-pagination-progress.swiper-pagination-black .swiper-pagination-progressbar[data-v-db2ac992]{background:#000\n}\n.swiper-container-3d[data-v-db2ac992]{-webkit-perspective:1200px;-o-perspective:1200px;perspective:1200px\n}\n.swiper-container-3d .swiper-cube-shadow[data-v-db2ac992],.swiper-container-3d .swiper-slide[data-v-db2ac992],.swiper-container-3d .swiper-slide-shadow-bottom[data-v-db2ac992],.swiper-container-3d .swiper-slide-shadow-left[data-v-db2ac992],.swiper-container-3d .swiper-slide-shadow-right[data-v-db2ac992],.swiper-container-3d .swiper-slide-shadow-top[data-v-db2ac992],.swiper-container-3d .swiper-wrapper[data-v-db2ac992]{-webkit-transform-style:preserve-3d;transform-style:preserve-3d\n}\n.swiper-container-3d .swiper-slide-shadow-bottom[data-v-db2ac992],.swiper-container-3d .swiper-slide-shadow-left[data-v-db2ac992],.swiper-container-3d .swiper-slide-shadow-right[data-v-db2ac992],.swiper-container-3d .swiper-slide-shadow-top[data-v-db2ac992]{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10\n}\n.swiper-container-3d .swiper-slide-shadow-left[data-v-db2ac992]{background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))\n}\n.swiper-container-3d .swiper-slide-shadow-right[data-v-db2ac992]{background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))\n}\n.swiper-container-3d .swiper-slide-shadow-top[data-v-db2ac992]{background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))\n}\n.swiper-container-3d .swiper-slide-shadow-bottom[data-v-db2ac992]{background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))\n}\n.swiper-container-coverflow .swiper-wrapper[data-v-db2ac992],.swiper-container-flip .swiper-wrapper[data-v-db2ac992]{-ms-perspective:1200px\n}\n.swiper-container-cube[data-v-db2ac992],.swiper-container-flip[data-v-db2ac992]{overflow:visible\n}\n.swiper-container-cube .swiper-slide[data-v-db2ac992],.swiper-container-flip .swiper-slide[data-v-db2ac992]{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1\n}\n.swiper-container-cube .swiper-slide .swiper-slide[data-v-db2ac992],.swiper-container-flip .swiper-slide .swiper-slide[data-v-db2ac992]{pointer-events:none\n}\n.swiper-container-cube .swiper-slide-active[data-v-db2ac992],.swiper-container-cube .swiper-slide-active .swiper-slide-active[data-v-db2ac992],.swiper-container-flip .swiper-slide-active[data-v-db2ac992],.swiper-container-flip .swiper-slide-active .swiper-slide-active[data-v-db2ac992]{pointer-events:auto\n}\n.swiper-container-cube .swiper-slide-shadow-bottom[data-v-db2ac992],.swiper-container-cube .swiper-slide-shadow-left[data-v-db2ac992],.swiper-container-cube .swiper-slide-shadow-right[data-v-db2ac992],.swiper-container-cube .swiper-slide-shadow-top[data-v-db2ac992],.swiper-container-flip .swiper-slide-shadow-bottom[data-v-db2ac992],.swiper-container-flip .swiper-slide-shadow-left[data-v-db2ac992],.swiper-container-flip .swiper-slide-shadow-right[data-v-db2ac992],.swiper-container-flip .swiper-slide-shadow-top[data-v-db2ac992]{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden\n}\n.swiper-container-cube .swiper-slide[data-v-db2ac992]{visibility:hidden;-webkit-transform-origin:0 0;transform-origin:0 0;width:100%;height:100%\n}\n.swiper-container-cube.swiper-container-rtl .swiper-slide[data-v-db2ac992]{-webkit-transform-origin:100% 0;transform-origin:100% 0\n}\n.swiper-container-cube .swiper-slide-active[data-v-db2ac992],.swiper-container-cube .swiper-slide-next[data-v-db2ac992],.swiper-container-cube .swiper-slide-next+.swiper-slide[data-v-db2ac992],.swiper-container-cube .swiper-slide-prev[data-v-db2ac992]{pointer-events:auto;visibility:visible\n}\n.swiper-container-cube .swiper-cube-shadow[data-v-db2ac992]{position:absolute;left:0;bottom:0;width:100%;height:100%;background:#000;opacity:.6;-webkit-filter:blur(50px);filter:blur(50px);z-index:0\n}\n.swiper-container-fade.swiper-container-free-mode .swiper-slide[data-v-db2ac992]{transition-timing-function:ease-out\n}\n.swiper-container-fade .swiper-slide[data-v-db2ac992]{pointer-events:none;transition-property:opacity\n}\n.swiper-container-fade .swiper-slide .swiper-slide[data-v-db2ac992]{pointer-events:none\n}\n.swiper-container-fade .swiper-slide-active[data-v-db2ac992],.swiper-container-fade .swiper-slide-active .swiper-slide-active[data-v-db2ac992]{pointer-events:auto\n}\n.swiper-zoom-container[data-v-db2ac992]{width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center\n}\n.swiper-zoom-container>canvas[data-v-db2ac992],.swiper-zoom-container>img[data-v-db2ac992],.swiper-zoom-container>svg[data-v-db2ac992]{max-width:100%;max-height:100%;-o-object-fit:contain;object-fit:contain\n}\n.swiper-scrollbar[data-v-db2ac992]{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)\n}\n.swiper-container-horizontal>.swiper-scrollbar[data-v-db2ac992]{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%\n}\n.swiper-container-vertical>.swiper-scrollbar[data-v-db2ac992]{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%\n}\n.swiper-scrollbar-drag[data-v-db2ac992]{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0\n}\n.swiper-scrollbar-cursor-drag[data-v-db2ac992]{cursor:move\n}\n.swiper-lazy-preloader[data-v-db2ac992]{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:swiper-preloader-spin 1s steps(12,end) infinite;animation:swiper-preloader-spin 1s steps(12,end) infinite\n}\n.swiper-lazy-preloader[data-v-db2ac992]:after{display:block;content:\"\";width:100%;height:100%;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%236c6c6c'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");background-position:50%;background-size:100%;background-repeat:no-repeat\n}\n.swiper-lazy-preloader-white[data-v-db2ac992]:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%23fff'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\")\n}\n@-webkit-keyframes swiper-preloader-spin{\n100%{-webkit-transform:rotate(360deg)\n}\n}\n@keyframes swiper-preloader-spin{\n100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)\n}\n}", ""]);

/***/ }),

/***/ 745:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: /home/vagrant/Sites/vue_workflows/laravel/node_modules/mozjpeg/vendor/cjpeg: 1: /home/vagrant/Sites/vue_workflows/laravel/node_modules/mozjpeg/vendor/cjpeg: Syntax error: word unexpected (expecting \")\")\n\n    at Promise.all.then.arr (/home/vagrant/Sites/vue_workflows/laravel/node_modules/execa/index.js:201:11)\n    at process._tickCallback (internal/process/next_tick.js:109:7)");

/***/ }),

/***/ 871:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-6 col-md-6 col-lg-3"
  }, [_c('div', {
    staticClass: "widget-bg-color-icon card-box"
  }, [_c('div', {
    staticClass: "bg-icon bg-warning pull-left"
  }, [_c('i', {
    staticClass: "ti-eye text-white"
  })]), _vm._v(" "), _c('div', {
    staticClass: "text-right"
  }, [_c('h3', {
    staticClass: "text-dark"
  }, [_c('b', {
    attrs: {
      "id": "widget_count1"
    }
  }, [_vm._v("2652")])]), _vm._v(" "), _c('p', [_vm._v("Visitors")])]), _vm._v(" "), _c('div', {
    staticClass: "clearfix"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 col-md-6 col-lg-3"
  }, [_c('div', {
    staticClass: "widget-bg-color-icon card-box border_success"
  }, [_c('div', {
    staticClass: "bg-icon pull-left"
  }, [_c('i', {
    staticClass: "ti-pie-chart text-success"
  })]), _vm._v(" "), _c('div', {
    staticClass: "text-right"
  }, [_c('h3', {
    staticClass: "text-success"
  }, [_c('b', {
    attrs: {
      "id": "widget_count3"
    }
  }, [_vm._v("3251")])]), _vm._v(" "), _c('p', [_vm._v("Sales status")])]), _vm._v(" "), _c('div', {
    staticClass: "clearfix"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 col-md-6 col-lg-3"
  }, [_c('div', {
    staticClass: "widget-bg-color-icon card-box"
  }, [_c('div', {
    staticClass: "bg-icon bg-icon-info pull-left"
  }, [_c('i', {
    staticClass: "ti-cup text-primary"
  })]), _vm._v(" "), _c('div', {
    staticClass: "text-right"
  }, [_c('h3', {
    staticClass: "text-dark"
  }, [_c('b', {
    attrs: {
      "id": "widget_count2"
    }
  }, [_vm._v("7698")])]), _vm._v(" "), _c('p', {
    staticClass: "text-primary"
  }, [_vm._v("Income status")])]), _vm._v(" "), _c('div', {
    staticClass: "clearfix"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 col-md-6 col-lg-3"
  }, [_c('div', {
    staticClass: "widget-bg-color-icon card-box border_danger"
  }, [_c('div', {
    staticClass: "text-center"
  }, [_c('h3', {
    staticClass: "text-danger"
  }, [_c('b', {
    attrs: {
      "id": "widget_count4"
    }
  }, [_vm._v("4358")])]), _vm._v(" "), _c('p', [_vm._v("Total sales:"), _c('span', {
    staticClass: "text-success"
  }, [_vm._v(" 3251")]), _c('span', {
    staticClass: "pull-right"
  }, [_c('i', {
    staticClass: "ti-angle-double-down text-danger m-r-5"
  }), _vm._v("7.85%")])])]), _vm._v(" "), _c('div', {
    staticClass: "clearfix"
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "row m-t-10"
  }, [_c('div', {
    staticClass: "col-md-4"
  }, [_c('div', {
    staticClass: "slider-content m-b-20"
  }, [_c('div', {
    staticClass: "cover-wrapper"
  }, [_c('div', {
    staticClass: "carousel slide",
    attrs: {
      "id": "slider-clear",
      "data-ride": "carousel"
    }
  }, [_c('ol', {
    staticClass: "carousel-indicators m-b-0"
  }, [_c('li', {
    attrs: {
      "data-target": "#slider-clear",
      "data-slide-to": "0"
    }
  }), _vm._v(" "), _c('li', {
    staticClass: "active",
    attrs: {
      "data-target": "#slider-clear",
      "data-slide-to": "1"
    }
  }), _vm._v(" "), _c('li', {
    attrs: {
      "data-target": "#slider-clear",
      "data-slide-to": "2"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "carousel-inner",
    attrs: {
      "role": "listbox"
    }
  }, [_c('div', {
    staticClass: "item"
  }, [_c('img', {
    staticClass: "img-responsive",
    attrs: {
      "alt": "Clear-img",
      "src": "/static/img/gallery/full/35.jpg"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "item active"
  }, [_c('img', {
    staticClass: "img-responsive",
    attrs: {
      "alt": "Clear-img",
      "src": "/static/img/gallery/full/36.jpg"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "item"
  }, [_c('img', {
    staticClass: "img-responsive",
    attrs: {
      "alt": "Clear-img",
      "src": "/static/img/gallery/full/37.jpg"
    }
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "post-info"
  }, [_c('div', {
    staticClass: "date"
  }, [_c('span', {
    staticClass: "day"
  }, [_vm._v("22")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('span', {
    staticClass: "month"
  }, [_vm._v("Mar")])]), _vm._v(" "), _c('div', {
    staticClass: "meta-container"
  }, [_c('a', {
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_c('h4', {
    staticClass: "m-t-0"
  }, [_vm._v("Beautiful Cover Image Post")])]), _vm._v(" "), _c('div', {
    staticClass: "font-13"
  }, [_c('span', {
    staticClass: "meta"
  }, [_vm._v("Posted by John Doe in "), _c('a', {
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_c('b', [_vm._v("Web Design")])])])])]), _vm._v(" "), _c('p', {
    staticClass: "m-b-0"
  }, [_vm._v("\n                        Nunc nec dui vitae urna cursus lacinia. In venenatis eget justo in dictum. Vestibulum auctor raesent quisnm.\n                    ")]), _vm._v(" "), _c('div', {
    staticClass: "row m-t-10"
  }, [_c('div', {
    staticClass: "col-xs-6"
  }, [_c('div', {
    staticClass: "m-t-10 blog-widget-action"
  }, [_c('a', {
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_c('i', {
    staticClass: "ti-heart"
  }), _vm._v(" "), _c('span', [_vm._v("28")])]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_c('i', {
    staticClass: "ti-comment-alt"
  }), _vm._v(" "), _c('span', [_vm._v("46")])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-6 text-right"
  }, [_c('a', {
    staticClass: "btn btn-sm waves-effect btn-default",
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_vm._v("Read More")])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-4"
  }, [_c('div', {
    staticClass: "panel panel-widget"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('h4', {
    staticClass: "panel-title"
  }, [_vm._v("Total Revenue")])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    staticClass: "widget-chart text-center"
  }, [_c('div', {
    attrs: {
      "id": "sparkline2"
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "panel panel-widget"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('h4', {
    staticClass: "panel-title"
  }, [_vm._v("Today Sales")])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    staticClass: "widget-chart text-center"
  }, [_c('input', {
    staticClass: "knob",
    attrs: {
      "type": "text",
      "data-width": "135",
      "data-height": "135",
      "data-linecap": "round",
      "data-fgColor": "#6699cc",
      "data-skin": "tron",
      "data-angleOffset": "180",
      "data-thickness": ".15"
    }
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-4"
  }, [_c('div', {
    staticClass: "card-box p-0"
  }, [_c('div', {
    staticClass: "profile-widget text-center"
  }, [_c('div', {
    staticClass: "bg-custom1 bg-profile"
  }), _vm._v(" "), _c('img', {
    staticClass: "thumb-lg img-circle img-thumbnail",
    attrs: {
      "src": __webpack_require__(745),
      "alt": "img",
      "height": "95",
      "width": "95"
    }
  }), _vm._v(" "), _c('h4', [_vm._v("Addison")]), _vm._v(" "), _c('p', [_c('i', {
    staticClass: "ti-location-pin"
  }), _vm._v(" London")]), _vm._v(" "), _c('a', {
    staticClass: "btn btn-sm btn-success m-t-20",
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_vm._v("Follow")]), _vm._v(" "), _c('a', {
    staticClass: "btn btn-sm btn-info m-t-20",
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_vm._v("Send message")]), _vm._v(" "), _c('div', {}, [_c('p', {
    staticClass: "m-t-20 clearfix p-10"
  }, [_vm._v("It has survived not only five centuries, but also the leap into electronic typesetting.")]), _vm._v(" "), _c('div', {
    staticClass: "social_icons p-10 text-white bg-custom1"
  }, [_c('i', {
    staticClass: "ti-facebook",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" "), _c('i', {
    staticClass: "ti-twitter",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" "), _c('i', {
    staticClass: "ti-google",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" "), _c('i', {
    staticClass: "ti-youtube",
    attrs: {
      "aria-hidden": "true"
    }
  })])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row m-t-10"
  }, [_c('div', {
    staticClass: "col-md-4"
  }, [_c('div', {
    staticClass: "panel panel-widget"
  }, [_c('div', {
    staticClass: "panel-heading stat"
  }, [_c('div', {
    staticClass: "panel-title"
  }, [_c('img', {
    staticClass: "img-circle img_alt",
    attrs: {
      "src": __webpack_require__(265),
      "alt": "User Avatar",
      "height": "85",
      "width": "85"
    }
  })]), _vm._v(" "), _c('h3', {
    staticClass: "user-username"
  }, [_vm._v("Toby Adey")]), _vm._v(" "), _c('h5', {
    staticClass: "user-po"
  }, [_vm._v(" Developer")])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('ul', {
    staticClass: "nav nav-stacked nav_border"
  }, [_c('li', [_c('a', {
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_vm._v("Projects "), _c('span', {
    staticClass: "pull-right badge "
  }, [_vm._v("31")])])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_vm._v("Tasks "), _c('span', {
    staticClass: "pull-right badge "
  }, [_vm._v("5")])])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_vm._v("Completed Projects "), _c('span', {
    staticClass: "pull-right badge "
  }, [_vm._v("12")])])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_vm._v("Followers "), _c('span', {
    staticClass: "pull-right badge "
  }, [_vm._v("58")])])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_vm._v("Progress "), _c('span', {
    staticClass: "pull-right badge "
  }, [_vm._v("75")])])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_vm._v("Upcoming "), _c('span', {
    staticClass: "pull-right badge "
  }, [_vm._v("157")])])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_vm._v("Others "), _c('span', {
    staticClass: "pull-right badge "
  }, [_vm._v("842")])])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_vm._v("Extra "), _c('span', {
    staticClass: "pull-right badge "
  }, [_vm._v("545")])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-4"
  }, [_c('div', {
    staticClass: "panel panel-widget"
  }, [_c('div', {
    staticClass: "panel-heading p-0"
  }, [_c('div', {
    staticClass: "siwper-container swiper_content"
  }, [_c('div', {
    staticClass: "swiper-wrapper"
  }, [_c('div', {
    staticClass: "swiper-slide slide-1"
  }, [_c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": "/static/img/gallery/full/35.jpg",
      "alt": "img"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "swiper-slide slide-2"
  }, [_c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": "/static/img/gallery/full/36.jpg",
      "alt": "img"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "swiper-slide slide-3"
  }, [_c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": "/static/img/gallery/full/37.jpg",
      "alt": "img"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "swiper-slide slide-4"
  }, [_c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": "/static/img/gallery/full/38.jpg",
      "alt": "img"
    }
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body text-justify"
  }, [_c('p', [_vm._v("It is a long established fact that a reader will be distracted by the readable content of a page.\n                    ")]), _vm._v(" "), _c('p', [_vm._v("The point of using Lorem Ipsum is that it has a more-or-less normal distribution.\n                    ")]), _vm._v(" "), _c('p', [_vm._v("Lorem Ipsum is therefore more -or-less always free from repetition.")]), _vm._v(" "), _c('p', [_vm._v("It is a long established fact that a reader will be distracted by the readable content of a page. The point of using that it has distribution.\n                    ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-4"
  }, [_c('div', {
    staticClass: "widget"
  }, [_c('ul', {
    staticClass: "list-group"
  }, [_c('li', {
    staticClass: "list-group-item"
  }, [_c('i', {
    staticClass: "fa-2x padding-top-small padding-bottom padding-right-small fa ti-layers-alt pull-left text-primary"
  }), _vm._v(" "), _c('h4', [_vm._v("More Features")]), _vm._v(" "), _c('p', [_vm._v("This is the kind of thing you really need.")])]), _vm._v(" "), _c('li', {
    staticClass: "list-group-item"
  }, [_c('i', {
    staticClass: "fa-2x padding-top-small padding-bottom padding-right-small fa ti-server pull-left text-primary"
  }), _vm._v(" "), _c('h4', [_vm._v("Unlimited Users")]), _vm._v(" "), _c('p', [_vm._v("This is the kind of thing you really need.")])]), _vm._v(" "), _c('li', {
    staticClass: "list-group-item"
  }, [_c('i', {
    staticClass: "fa-2x padding-top-small padding-bottom padding-right-small fa ti-cup pull-left text-primary"
  }), _vm._v(" "), _c('h4', [_vm._v("Custom Database")]), _vm._v(" "), _c('p', [_vm._v("This is the kind of thing you really need.")])]), _vm._v(" "), _c('li', {
    staticClass: "list-group-item"
  }, [_c('i', {
    staticClass: "fa-2x padding-top-small padding-bottom padding-right-small fa ti-bookmark-alt pull-left text-primary"
  }), _vm._v(" "), _c('h4', [_vm._v("Enhanced Reporting")]), _vm._v(" "), _c('p', [_vm._v("This is the kind of thing you really need.")])]), _vm._v(" "), _c('li', {
    staticClass: "list-group-item"
  }, [_c('i', {
    staticClass: "fa-2x padding-top-small padding-bottom padding-right-small fa ti-medall-alt pull-left text-primary"
  }), _vm._v(" "), _c('h4', [_vm._v("Enterprise Features")]), _vm._v(" "), _c('p', [_vm._v("This is the kind of thing you really need.")])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row m-t-10"
  }, [_c('div', {
    staticClass: "col-md-4"
  }, [_c('div', {
    staticClass: "card-box p-0"
  }, [_c('div', {
    staticClass: "profile-widget text-center"
  }, [_c('div', {
    staticClass: "bg-info bg-profile"
  }), _vm._v(" "), _c('img', {
    staticClass: "thumb-lg img-circle img-thumbnail",
    attrs: {
      "src": __webpack_require__(263),
      "alt": "img",
      "height": "95",
      "width": "95"
    }
  }), _vm._v(" "), _c('h4', [_vm._v("Awesome Gallery")]), _vm._v(" "), _c('p', [_vm._v("1 Photo")]), _vm._v(" "), _c('div', {
    attrs: {
      "id": "lightgallery"
    }
  }, [_c('div', {
    staticClass: "social_icons p-10 text-white"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "ih-item square colored effect1 top_to_bottom"
  }, [_c('a', {
    attrs: {
      "href": "javascript:;"
    }
  }, [_c('div', {
    staticClass: "img"
  }, [_c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": "/static/img/gallery/full/35.jpg",
      "alt": "img"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "info text-justify"
  }, [_c('h4', {
    staticClass: "text-white"
  }, [_vm._v("Clear Nature")])])])])])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-4"
  }, [_c('div', {
    staticClass: "panel panel-widget"
  }, [_c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    staticClass: "col-xs-3"
  }, [_c('i', {
    staticClass: "fa-2x padding-top-small padding-bottom padding-right-small fa ti-facebook pull-left text-primary"
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-3"
  }, [_c('i', {
    staticClass: "fa-2x padding-top-small padding-bottom padding-right-small fa ti-google pull-left text-danger"
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-3"
  }, [_c('i', {
    staticClass: "fa-2x padding-top-small padding-bottom padding-right-small fa ti-twitter-alt pull-left text-info"
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-3"
  }, [_c('i', {
    staticClass: "fa-2x padding-top-small padding-bottom padding-right-small fa ti-linkedin pull-left text-primary"
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "panel panel-widget"
  }, [_c('div', {
    staticClass: "panel-heading text-center"
  }, [_c('img', {
    staticClass: "thumb-lg img-thumbnail img-circle",
    attrs: {
      "src": __webpack_require__(266),
      "alt": ""
    }
  }), _vm._v(" "), _c('h4', {
    staticClass: "text-center"
  }, [_c('strong', [_vm._v("Alex Cooper")])])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body p-b-0"
  }, [_c('div', {
    staticClass: "bg-custom1  p-t-b-20 text-center row"
  }, [_c('div', {
    staticClass: "col-xs-4"
  }, [_c('h4', {
    staticClass: "text-white"
  }, [_vm._v("782")]), _vm._v(" "), _c('p', {
    staticClass: "text-white"
  }, [_vm._v("Followers")])]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-4"
  }, [_c('h4', {
    staticClass: "text-white"
  }, [_vm._v("834")]), _vm._v(" "), _c('p', {
    staticClass: "text-white"
  }, [_vm._v("Following")])]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-4"
  }, [_c('h4', {
    staticClass: "text-white"
  }, [_vm._v("2907")]), _vm._v(" "), _c('p', {
    staticClass: "text-white"
  }, [_vm._v("Likes")])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-4"
  }, [_c('div', {
    staticClass: "panel panel-widget"
  }, [_c('div', {
    staticClass: "panel-body bg-primary text-center careers-item"
  }, [_c('div', [_c('i', {
    staticClass: "fa-5x fa ti-user hover-rotate text-white"
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "panel panel-widget"
  }, [_c('div', {
    staticClass: "panel-body bg-warning text-center careers-item"
  }, [_c('div', [_c('i', {
    staticClass: "fa-5x fa ti-bookmark-alt hover-rotate text-white"
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "panel panel-widget"
  }, [_c('div', {
    staticClass: "panel-body bg-info text-center careers-item"
  }, [_c('div', [_c('i', {
    staticClass: "fa-5x fa ti-medall hover-rotate text-white"
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "panel panel-widget"
  }, [_c('div', {
    staticClass: "panel-body bg-success text-center careers-item"
  }, [_c('div', [_c('i', {
    staticClass: "fa-5x fa ti-bell hover-rotate text-white"
  })])])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-db2ac992", module.exports)
  }
}

/***/ })

});