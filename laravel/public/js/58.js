webpackJsonp([58],{

/***/ 1034:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(696);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("2d86d244", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-ef4a00da\",\"scoped\":false,\"hasInlineConfig\":true}!./nestable.css", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-ef4a00da\",\"scoped\":false,\"hasInlineConfig\":true}!./nestable.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(1034)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(423),
  /* template */
  __webpack_require__(876),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/vagrant/Sites/vue_workflows/laravel/resources/assets/js/components/components/nestable_list.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] nestable_list.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ef4a00da", Component.options)
  } else {
    hotAPI.reload("data-v-ef4a00da", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vendors_nestable_list_jquery_nestable_js__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vendors_nestable_list_jquery_nestable_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vendors_nestable_list_jquery_nestable_js__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: "nestable_list",
    mounted: function mounted() {
        'use strict';

        $(document).ready(function () {
            var updateOutput = function updateOutput(e) {
                var list = e.length ? e : $(e.target),
                    output = list.data('output');
                if (window.JSON) {
                    output.val(window.JSON.stringify(list.nestable('serialize'))); //, null, 2));
                } else {
                    output.val('JSON browser support required for this demo.');
                }
            };
            // activate Nestable for list 1
            $('#nestable_list_1').nestable({
                group: 1
            }).on('change', updateOutput);

            // activate Nestable for list 2
            $('#nestable_list_2').nestable({
                group: 1
            }).on('change', updateOutput);

            // output initial serialised data
            updateOutput($('#nestable_list_1').data('output', $('#nestable_list_1_output')));
            updateOutput($('#nestable_list_2').data('output', $('#nestable_list_2_output')));

            $('#nestable_list_menu').on('click', function (e) {
                var target = $(e.target),
                    action = target.data('action');
                if (action === 'expand-all') {
                    $('.dd').nestable('expandAll');
                }
                if (action === 'collapse-all') {
                    $('.dd').nestable('collapseAll');
                }
            });

            $('#nestable_list_3').nestable();
        });
    },
    destroyed: function destroyed() {}
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 488:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery) {/*!
 * Nestable jQuery Plugin - Copyright (c) 2012 David Bushell - http://dbushell.com/
 * Dual-licensed under the BSD or MIT licenses
 */
;(function ($, window, document, undefined) {
    var hasTouch = 'ontouchstart' in document;

    /**
     * Detect CSS pointer-events property
     * events are normally disabled on the dragging element to avoid conflicts
     * https://github.com/ausi/Feature-detection-technique-for-pointer-events/blob/master/modernizr-pointerevents.js
     */
    var hasPointerEvents = function () {
        var el = document.createElement('div'),
            docEl = document.documentElement;
        if (!('pointerEvents' in el.style)) {
            return false;
        }
        el.style.pointerEvents = 'auto';
        el.style.pointerEvents = 'x';
        docEl.appendChild(el);
        var supports = window.getComputedStyle && window.getComputedStyle(el, '').pointerEvents === 'auto';
        docEl.removeChild(el);
        return !!supports;
    }();

    var defaults = {
        listNodeName: 'ol',
        itemNodeName: 'li',
        rootClass: 'dd',
        listClass: 'dd-list',
        itemClass: 'dd-item',
        dragClass: 'dd-dragel',
        handleClass: 'dd-handle',
        collapsedClass: 'dd-collapsed',
        placeClass: 'dd-placeholder',
        noDragClass: 'dd-nodrag',
        emptyClass: 'dd-empty',
        expandBtnHTML: '<button data-action="expand" type="button">Expand</button>',
        collapseBtnHTML: '<button data-action="collapse" type="button">Collapse</button>',
        group: 0,
        maxDepth: 5,
        threshold: 20
    };

    function Plugin(element, options) {
        this.w = $(document);
        this.el = $(element);
        this.options = $.extend({}, defaults, options);
        this.init();
    }

    Plugin.prototype = {

        init: function init() {
            var list = this;

            list.reset();

            list.el.data('nestable-group', this.options.group);

            list.placeEl = $('<div class="' + list.options.placeClass + '"/>');

            $.each(this.el.find(list.options.itemNodeName), function (k, el) {
                list.setParent($(el));
            });

            list.el.on('click', 'button', function (e) {
                if (list.dragEl) {
                    return;
                }
                var target = $(e.currentTarget),
                    action = target.data('action'),
                    item = target.parent(list.options.itemNodeName);
                if (action === 'collapse') {
                    list.collapseItem(item);
                }
                if (action === 'expand') {
                    list.expandItem(item);
                }
            });

            var onStartEvent = function onStartEvent(e) {
                var handle = $(e.target);
                if (!handle.hasClass(list.options.handleClass)) {
                    if (handle.closest('.' + list.options.noDragClass).length) {
                        return;
                    }
                    handle = handle.closest('.' + list.options.handleClass);
                }

                if (!handle.length || list.dragEl) {
                    return;
                }

                list.isTouch = /^touch/.test(e.type);
                if (list.isTouch && e.touches.length !== 1) {
                    return;
                }

                e.preventDefault();
                list.dragStart(e.touches ? e.touches[0] : e);
            };

            var onMoveEvent = function onMoveEvent(e) {
                if (list.dragEl) {
                    e.preventDefault();
                    list.dragMove(e.touches ? e.touches[0] : e);
                }
            };

            var onEndEvent = function onEndEvent(e) {
                if (list.dragEl) {
                    e.preventDefault();
                    list.dragStop(e.touches ? e.touches[0] : e);
                }
            };

            if (hasTouch) {
                list.el[0].addEventListener('touchstart', onStartEvent, false);
                window.addEventListener('touchmove', onMoveEvent, false);
                window.addEventListener('touchend', onEndEvent, false);
                window.addEventListener('touchcancel', onEndEvent, false);
            }

            list.el.on('mousedown', onStartEvent);
            list.w.on('mousemove', onMoveEvent);
            list.w.on('mouseup', onEndEvent);
        },

        serialize: function serialize() {
            var data,
                depth = 0,
                list = this;
            step = function (_step) {
                function step(_x, _x2) {
                    return _step.apply(this, arguments);
                }

                step.toString = function () {
                    return _step.toString();
                };

                return step;
            }(function (level, depth) {
                var array = [],
                    items = level.children(list.options.itemNodeName);
                items.each(function () {
                    var li = $(this),
                        item = $.extend({}, li.data()),
                        sub = li.children(list.options.listNodeName);
                    if (sub.length) {
                        item.children = step(sub, depth + 1);
                    }
                    array.push(item);
                });
                return array;
            });
            data = step(list.el.find(list.options.listNodeName).first(), depth);
            return data;
        },

        serialise: function serialise() {
            return this.serialize();
        },

        reset: function reset() {
            this.mouse = {
                offsetX: 0,
                offsetY: 0,
                startX: 0,
                startY: 0,
                lastX: 0,
                lastY: 0,
                nowX: 0,
                nowY: 0,
                distX: 0,
                distY: 0,
                dirAx: 0,
                dirX: 0,
                dirY: 0,
                lastDirX: 0,
                lastDirY: 0,
                distAxX: 0,
                distAxY: 0
            };
            this.isTouch = false;
            this.moving = false;
            this.dragEl = null;
            this.dragRootEl = null;
            this.dragDepth = 0;
            this.hasNewRoot = false;
            this.pointEl = null;
        },

        expandItem: function expandItem(li) {
            li.removeClass(this.options.collapsedClass);
            li.children('[data-action="expand"]').hide();
            li.children('[data-action="collapse"]').show();
            li.children(this.options.listNodeName).show();
        },

        collapseItem: function collapseItem(li) {
            var lists = li.children(this.options.listNodeName);
            if (lists.length) {
                li.addClass(this.options.collapsedClass);
                li.children('[data-action="collapse"]').hide();
                li.children('[data-action="expand"]').show();
                li.children(this.options.listNodeName).hide();
            }
        },

        expandAll: function expandAll() {
            var list = this;
            list.el.find(list.options.itemNodeName).each(function () {
                list.expandItem($(this));
            });
        },

        collapseAll: function collapseAll() {
            var list = this;
            list.el.find(list.options.itemNodeName).each(function () {
                list.collapseItem($(this));
            });
        },

        setParent: function setParent(li) {
            if (li.children(this.options.listNodeName).length) {
                li.prepend($(this.options.expandBtnHTML));
                li.prepend($(this.options.collapseBtnHTML));
            }
            li.children('[data-action="expand"]').hide();
        },

        unsetParent: function unsetParent(li) {
            li.removeClass(this.options.collapsedClass);
            li.children('[data-action]').remove();
            li.children(this.options.listNodeName).remove();
        },

        dragStart: function dragStart(e) {
            var mouse = this.mouse,
                target = $(e.target),
                dragItem = target.closest(this.options.itemNodeName);

            this.placeEl.css('height', dragItem.height());

            mouse.offsetX = e.offsetX !== undefined ? e.offsetX : e.pageX - target.offset().left;
            mouse.offsetY = e.offsetY !== undefined ? e.offsetY : e.pageY - target.offset().top;
            mouse.startX = mouse.lastX = e.pageX;
            mouse.startY = mouse.lastY = e.pageY;

            this.dragRootEl = this.el;

            this.dragEl = $(document.createElement(this.options.listNodeName)).addClass(this.options.listClass + ' ' + this.options.dragClass);
            this.dragEl.css('width', dragItem.width());

            dragItem.after(this.placeEl);
            dragItem[0].parentNode.removeChild(dragItem[0]);
            dragItem.appendTo(this.dragEl);

            $(document.body).append(this.dragEl);
            this.dragEl.css({
                'left': e.pageX - mouse.offsetX,
                'top': e.pageY - mouse.offsetY
            });
            // total depth of dragging item
            var i,
                depth,
                items = this.dragEl.find(this.options.itemNodeName);
            for (i = 0; i < items.length; i++) {
                depth = $(items[i]).parents(this.options.listNodeName).length;
                if (depth > this.dragDepth) {
                    this.dragDepth = depth;
                }
            }
        },

        dragStop: function dragStop(e) {
            var el = this.dragEl.children(this.options.itemNodeName).first();
            el[0].parentNode.removeChild(el[0]);
            this.placeEl.replaceWith(el);

            this.dragEl.remove();
            this.el.trigger('change');
            if (this.hasNewRoot) {
                this.dragRootEl.trigger('change');
            }
            this.reset();
        },

        dragMove: function dragMove(e) {
            var list,
                parent,
                prev,
                next,
                depth,
                opt = this.options,
                mouse = this.mouse;

            this.dragEl.css({
                'left': e.pageX - mouse.offsetX,
                'top': e.pageY - mouse.offsetY
            });

            // mouse position last events
            mouse.lastX = mouse.nowX;
            mouse.lastY = mouse.nowY;
            // mouse position this events
            mouse.nowX = e.pageX;
            mouse.nowY = e.pageY;
            // distance mouse moved between events
            mouse.distX = mouse.nowX - mouse.lastX;
            mouse.distY = mouse.nowY - mouse.lastY;
            // direction mouse was moving
            mouse.lastDirX = mouse.dirX;
            mouse.lastDirY = mouse.dirY;
            // direction mouse is now moving (on both axis)
            mouse.dirX = mouse.distX === 0 ? 0 : mouse.distX > 0 ? 1 : -1;
            mouse.dirY = mouse.distY === 0 ? 0 : mouse.distY > 0 ? 1 : -1;
            // axis mouse is now moving on
            var newAx = Math.abs(mouse.distX) > Math.abs(mouse.distY) ? 1 : 0;

            // do nothing on first move
            if (!mouse.moving) {
                mouse.dirAx = newAx;
                mouse.moving = true;
                return;
            }

            // calc distance moved on this axis (and direction)
            if (mouse.dirAx !== newAx) {
                mouse.distAxX = 0;
                mouse.distAxY = 0;
            } else {
                mouse.distAxX += Math.abs(mouse.distX);
                if (mouse.dirX !== 0 && mouse.dirX !== mouse.lastDirX) {
                    mouse.distAxX = 0;
                }
                mouse.distAxY += Math.abs(mouse.distY);
                if (mouse.dirY !== 0 && mouse.dirY !== mouse.lastDirY) {
                    mouse.distAxY = 0;
                }
            }
            mouse.dirAx = newAx;

            /**
             * move horizontal
             */
            if (mouse.dirAx && mouse.distAxX >= opt.threshold) {
                // reset move distance on x-axis for new phase
                mouse.distAxX = 0;
                prev = this.placeEl.prev(opt.itemNodeName);
                // increase horizontal level if previous sibling exists and is not collapsed
                if (mouse.distX > 0 && prev.length && !prev.hasClass(opt.collapsedClass)) {
                    // cannot increase level when item above is collapsed
                    list = prev.find(opt.listNodeName).last();
                    // check if depth limit has reached
                    depth = this.placeEl.parents(opt.listNodeName).length;
                    if (depth + this.dragDepth <= opt.maxDepth) {
                        // create new sub-level if one doesn't exist
                        if (!list.length) {
                            list = $('<' + opt.listNodeName + '/>').addClass(opt.listClass);
                            list.append(this.placeEl);
                            prev.append(list);
                            this.setParent(prev);
                        } else {
                            // else append to next level up
                            list = prev.children(opt.listNodeName).last();
                            list.append(this.placeEl);
                        }
                    }
                }
                // decrease horizontal level
                if (mouse.distX < 0) {
                    // we can't decrease a level if an item preceeds the current one
                    next = this.placeEl.next(opt.itemNodeName);
                    if (!next.length) {
                        parent = this.placeEl.parent();
                        this.placeEl.closest(opt.itemNodeName).after(this.placeEl);
                        if (!parent.children().length) {
                            this.unsetParent(parent.parent());
                        }
                    }
                }
            }

            var isEmpty = false;

            // find list item under cursor
            if (!hasPointerEvents) {
                this.dragEl[0].style.visibility = 'hidden';
            }
            this.pointEl = $(document.elementFromPoint(e.pageX - document.body.scrollLeft, e.pageY - (window.pageYOffset || document.documentElement.scrollTop)));
            if (!hasPointerEvents) {
                this.dragEl[0].style.visibility = 'visible';
            }
            if (this.pointEl.hasClass(opt.handleClass)) {
                this.pointEl = this.pointEl.parent(opt.itemNodeName);
            }
            if (this.pointEl.hasClass(opt.emptyClass)) {
                isEmpty = true;
            } else if (!this.pointEl.length || !this.pointEl.hasClass(opt.itemClass)) {
                return;
            }

            // find parent list of item under cursor
            var pointElRoot = this.pointEl.closest('.' + opt.rootClass),
                isNewRoot = this.dragRootEl.data('nestable-id') !== pointElRoot.data('nestable-id');

            /**
             * move vertical
             */
            if (!mouse.dirAx || isNewRoot || isEmpty) {
                // check if groups match if dragging over new root
                if (isNewRoot && opt.group !== pointElRoot.data('nestable-group')) {
                    return;
                }
                // check depth limit
                depth = this.dragDepth - 1 + this.pointEl.parents(opt.listNodeName).length;
                if (depth > opt.maxDepth) {
                    return;
                }
                var before = e.pageY < this.pointEl.offset().top + this.pointEl.height() / 2;
                parent = this.placeEl.parent();
                // if empty create new list to replace empty placeholder
                if (isEmpty) {
                    list = $(document.createElement(opt.listNodeName)).addClass(opt.listClass);
                    list.append(this.placeEl);
                    this.pointEl.replaceWith(list);
                } else if (before) {
                    this.pointEl.before(this.placeEl);
                } else {
                    this.pointEl.after(this.placeEl);
                }
                if (!parent.children().length) {
                    this.unsetParent(parent.parent());
                }
                if (!this.dragRootEl.find(opt.itemNodeName).length) {
                    this.dragRootEl.append('<div class="' + opt.emptyClass + '"/>');
                }
                // parent root list has changed
                if (isNewRoot) {
                    this.dragRootEl = pointElRoot;
                    this.hasNewRoot = this.el[0] !== this.dragRootEl[0];
                }
            }
        }

    };

    $.fn.nestable = function (params) {
        var lists = this,
            retval = this;

        lists.each(function () {
            var plugin = $(this).data("nestable");

            if (!plugin) {
                $(this).data("nestable", new Plugin(this, params));
                $(this).data("nestable-id", new Date().getTime());
            } else {
                if (typeof params === 'string' && typeof plugin[params] === 'function') {
                    retval = plugin[params]();
                }
            }
        });

        return retval || lists;
    };
})(__webpack_provided_window_dot_jQuery || window.Zepto, window, document);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 696:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
exports.push([module.i, "\n.grid1 {\r\n    padding          : 50px 0;\r\n    background-color : #fafafa;\r\n    border           : 1px solid #ccc;\r\n    margin-top       : 20px;\r\n    margin-left      : 10px;\r\n    text-align       : center;\r\n    width            : 100%;\r\n    cursor           : move;\r\n    border-radius    : 5px;\n}\n#sortable2 li,\r\n#sortable3 li {\r\n    padding          : 5px;\r\n    padding-left     : 15px;\r\n    background-color : #fafafa;\r\n    border           : 1px solid #ccc;\r\n    width            : 100%;\r\n    cursor           : move;\r\n    margin-top       : 10px;\r\n    list-style       : none;\r\n    border-radius    : 4px;\n}\nul#sortable3,\r\nul#sortable2 {\r\n    padding-left : 0;\r\n    list-style   : none;\r\n    min-height   : 60px;\n}\nli.highlight {\r\n    background-color : #F89A14 !important;\n}\r\n/**\r\n * Nestable\r\n */\n.dd-list {\r\n    display    : block;\r\n    position   : relative;\r\n    margin     : 0;\r\n    padding    : 0;\r\n    list-style : none;\n}\n.dd-list .dd-list {\r\n    padding-left : 30px;\n}\n.dd-collapsed .dd-list {\r\n    display : none;\n}\n.dd-item,\r\n.dd-empty,\r\n.dd-placeholder {\r\n    display     : block;\r\n    position    : relative;\r\n    margin      : 0;\r\n    padding     : 0;\r\n    min-height  : 20px;\r\n    font-size   : 13px;\r\n    line-height : 20px;\n}\n.dd-handle {\r\n    display               : block;\r\n    height                : 30px;\r\n    margin                : 5px 0;\r\n    cursor                : move;\r\n    padding               : 5px 10px;\r\n    color                 : #333;\r\n    text-decoration       : none;\r\n    font-weight           : 400;\r\n    border                : 1px solid #ccc;\r\n    background            : #fafafa;\r\n    border-radius         : 3px;\r\n    box-sizing            : border-box;\r\n    -moz-box-sizing       : border-box;\n}\n.dd-handle:hover {\r\n    color      : #2ea8e5;\r\n    background : #fff;\n}\n.dd-item > button {\r\n    display     : block;\r\n    position    : relative;\r\n    cursor      : pointer;\r\n    float       : left;\r\n    width       : 25px;\r\n    height      : 20px;\r\n    margin      : 7px 0;\r\n    padding     : 0;\r\n    text-indent : 100%;\r\n    white-space : nowrap;\r\n    overflow    : hidden;\r\n    border      : 0;\r\n    background  : transparent;\r\n    font-size   : 10px;\r\n    line-height : 1;\r\n    text-align  : center;\r\n    font-weight : bold;\n}\n.dd-item > button:before {\r\n    content     : '\\f067';\r\n    display     : block;\r\n    position    : absolute;\r\n    width       : 100%;\r\n    text-align  : center;\r\n    text-indent : 0;\r\n    font-family : 'FontAwesome'\n}\n.dd-item > button[data-action=\"collapse\"]:before {\r\n    content : '\\f068';\n}\n.dd-placeholder,\r\n.dd-empty {\r\n    margin          : 5px 0;\r\n    padding         : 0;\r\n    min-height      : 30px;\r\n    background      : #f2fbff;\r\n    border          : 1px dashed #b6bcbf;\r\n    box-sizing      : border-box;\r\n    -moz-box-sizing : border-box;\n}\n.dd-empty {\r\n    border              : 1px dashed #bbb;\r\n    min-height          : 100px;\r\n    background-color    : #e5e5e5;\r\n    background-size     : 60px 60px;\r\n    background-position : 0 0, 30px 30px;\n}\n.dd-dragel {\r\n    position       : absolute;\r\n    pointer-events : none;\r\n    z-index        : 9999;\n}\n.dd-dragel > .dd-item .dd-handle {\r\n    margin-top : 0;\n}\n.dd-dragel .dd-handle {\r\n    box-shadow         : 2px 4px 6px 0 rgba(0, 0, 0, .1);\n}\n.dd-hover > .dd-handle {\r\n    background : #2ea8e5 !important;\n}\r\n/**\r\n * Nestable Draggable Handles\r\n */\n.dd3-content {\r\n    display               : block;\r\n    height                : 30px;\r\n    margin                : 5px 0;\r\n    padding               : 5px 10px 5px 40px;\r\n    color                 : #333;\r\n    text-decoration       : none;\r\n    font-weight           : 400;\r\n    border                : 1px solid #ccc;\r\n    background            : #fafafa;\r\n    border-radius         : 3px;\r\n    box-sizing            : border-box;\r\n    -moz-box-sizing       : border-box;\n}\n.dd3-content:hover {\r\n    color      : #2ea8e5;\r\n    background : #fff;\n}\n.dd-dragel > .dd3-item > .dd3-content {\r\n    margin : 0;\n}\n.dd3-item > button {\r\n    margin-left : 30px;\n}\n.dd3-handle {\r\n    position                   : absolute;\r\n    margin                     : 0;\r\n    left                       : 0;\r\n    top                        : 0;\r\n    cursor                     : move;\r\n    width                      : 30px;\r\n    text-indent                : 100%;\r\n    white-space                : nowrap;\r\n    overflow                   : hidden;\r\n    border                     : 1px solid #aaa;\r\n    background                 : #ddd;\r\n    border-top-right-radius    : 0;\r\n    border-bottom-right-radius : 0;\n}\n.dd3-handle:before {\r\n    content     : '≡';\r\n    display     : block;\r\n    position    : absolute;\r\n    left        : 0;\r\n    top         : 3px;\r\n    width       : 100%;\r\n    text-align  : center;\r\n    text-indent : 0;\r\n    color       : #fff;\r\n    font-size   : 20px;\r\n    font-weight : normal;\n}\n.dd3-handle:hover {\r\n    background : #ddd;\n}\r\n", ""]);

/***/ }),

/***/ 876:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "row"
  }, [_c('div', [_c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticStyle: {
      "margin-bottom": "10px !important"
    },
    attrs: {
      "id": "nestable_list_menu"
    }
  }, [_c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "type": "button",
      "data-action": "expand-all"
    }
  }, [_vm._v("\n                        [+] Expand All\n                    ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-warning",
    attrs: {
      "type": "button",
      "data-action": "collapse-all"
    }
  }, [_vm._v("\n                        [-] Collapse All\n                    ")])])])]), _vm._v(" "), _c('div', [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "panel "
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_c('i', {
    staticClass: "ti-list"
  }), _vm._v(" Nestable List 1\n                            ")])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body "
  }, [_c('div', {
    staticClass: "dd",
    attrs: {
      "id": "nestable_list_1"
    }
  }, [_c('ol', {
    staticClass: "dd-list"
  }, [_c('li', {
    staticClass: "dd-item",
    attrs: {
      "data-id": "1"
    }
  }, [_c('div', {
    staticClass: "dd-handle"
  }, [_vm._v("Item 1")])]), _vm._v(" "), _c('li', {
    staticClass: "dd-item",
    attrs: {
      "data-id": "2"
    }
  }, [_c('div', {
    staticClass: "dd-handle"
  }, [_vm._v("Item 2")]), _vm._v(" "), _c('ol', {
    staticClass: "dd-list"
  }, [_c('li', {
    staticClass: "dd-item",
    attrs: {
      "data-id": "3"
    }
  }, [_c('div', {
    staticClass: "dd-handle"
  }, [_vm._v("Item 3")])]), _vm._v(" "), _c('li', {
    staticClass: "dd-item",
    attrs: {
      "data-id": "4"
    }
  }, [_c('div', {
    staticClass: "dd-handle"
  }, [_vm._v("Item 4")])]), _vm._v(" "), _c('li', {
    staticClass: "dd-item",
    attrs: {
      "data-id": "5"
    }
  }, [_c('div', {
    staticClass: "dd-handle"
  }, [_vm._v("Item 5")]), _vm._v(" "), _c('ol', {
    staticClass: "dd-list"
  }, [_c('li', {
    staticClass: "dd-item",
    attrs: {
      "data-id": "6"
    }
  }, [_c('div', {
    staticClass: "dd-handle"
  }, [_vm._v("Item 6")])]), _vm._v(" "), _c('li', {
    staticClass: "dd-item",
    attrs: {
      "data-id": "7"
    }
  }, [_c('div', {
    staticClass: "dd-handle"
  }, [_vm._v("Item 7")])]), _vm._v(" "), _c('li', {
    staticClass: "dd-item",
    attrs: {
      "data-id": "8"
    }
  }, [_c('div', {
    staticClass: "dd-handle"
  }, [_vm._v("Item 8")])])])]), _vm._v(" "), _c('li', {
    staticClass: "dd-item",
    attrs: {
      "data-id": "9"
    }
  }, [_c('div', {
    staticClass: "dd-handle"
  }, [_vm._v("Item 9")])]), _vm._v(" "), _c('li', {
    staticClass: "dd-item",
    attrs: {
      "data-id": "10"
    }
  }, [_c('div', {
    staticClass: "dd-handle"
  }, [_vm._v("Item 10")])])])]), _vm._v(" "), _c('li', {
    staticClass: "dd-item",
    attrs: {
      "data-id": "11"
    }
  }, [_c('div', {
    staticClass: "dd-handle"
  }, [_vm._v("Item 11")])]), _vm._v(" "), _c('li', {
    staticClass: "dd-item",
    attrs: {
      "data-id": "12"
    }
  }, [_c('div', {
    staticClass: "dd-handle"
  }, [_vm._v("Item 12")])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "panel "
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_c('i', {
    staticClass: "ti-list"
  }), _vm._v(" Nestable List 2\n                            ")])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    staticClass: "dd",
    attrs: {
      "id": "nestable_list_2"
    }
  }, [_c('ol', {
    staticClass: "dd-list"
  }, [_c('li', {
    staticClass: "dd-item",
    attrs: {
      "data-id": "13"
    }
  }, [_c('div', {
    staticClass: "dd-handle"
  }, [_vm._v("Item 13")])]), _vm._v(" "), _c('li', {
    staticClass: "dd-item",
    attrs: {
      "data-id": "14"
    }
  }, [_c('div', {
    staticClass: "dd-handle"
  }, [_vm._v("Item 14")])]), _vm._v(" "), _c('li', {
    staticClass: "dd-item",
    attrs: {
      "data-id": "15"
    }
  }, [_c('div', {
    staticClass: "dd-handle"
  }, [_vm._v("Item 15")]), _vm._v(" "), _c('ol', {
    staticClass: "dd-list"
  }, [_c('li', {
    staticClass: "dd-item",
    attrs: {
      "data-id": "16"
    }
  }, [_c('div', {
    staticClass: "dd-handle"
  }, [_vm._v("Item 16")])]), _vm._v(" "), _c('li', {
    staticClass: "dd-item",
    attrs: {
      "data-id": "17"
    }
  }, [_c('div', {
    staticClass: "dd-handle"
  }, [_vm._v("Item 17")])]), _vm._v(" "), _c('li', {
    staticClass: "dd-item",
    attrs: {
      "data-id": "18"
    }
  }, [_c('div', {
    staticClass: "dd-handle"
  }, [_vm._v("Item 18")])])])])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "panel "
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_c('i', {
    staticClass: "ti-list-ol"
  }), _vm._v(" Nestable List 3\n                        ")])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    staticClass: "dd",
    attrs: {
      "id": "nestable_list_3"
    }
  }, [_c('ol', {
    staticClass: "dd-list"
  }, [_c('li', {
    staticClass: "dd-item dd3-item",
    attrs: {
      "data-id": "13"
    }
  }, [_c('div', {
    staticClass: "dd-handle dd3-handle"
  }), _vm._v(" "), _c('div', {
    staticClass: "dd3-content"
  }, [_vm._v("Item 13")])]), _vm._v(" "), _c('li', {
    staticClass: "dd-item dd3-item",
    attrs: {
      "data-id": "14"
    }
  }, [_c('div', {
    staticClass: "dd-handle dd3-handle"
  }), _vm._v(" "), _c('div', {
    staticClass: "dd3-content"
  }, [_vm._v("Item 14")])]), _vm._v(" "), _c('li', {
    staticClass: "dd-item dd3-item",
    attrs: {
      "data-id": "15"
    }
  }, [_c('div', {
    staticClass: "dd-handle dd3-handle"
  }), _vm._v(" "), _c('div', {
    staticClass: "dd3-content"
  }, [_vm._v("Item 15")]), _vm._v(" "), _c('ol', {
    staticClass: "dd-list"
  }, [_c('li', {
    staticClass: "dd-item dd3-item",
    attrs: {
      "data-id": "16"
    }
  }, [_c('div', {
    staticClass: "dd-handle dd3-handle"
  }), _vm._v(" "), _c('div', {
    staticClass: "dd3-content"
  }, [_vm._v("Item 16")])]), _vm._v(" "), _c('li', {
    staticClass: "dd-item dd3-item",
    attrs: {
      "data-id": "17"
    }
  }, [_c('div', {
    staticClass: "dd-handle dd3-handle"
  }), _vm._v(" "), _c('div', {
    staticClass: "dd3-content"
  }, [_vm._v("Item 17")])]), _vm._v(" "), _c('li', {
    staticClass: "dd-item dd3-item",
    attrs: {
      "data-id": "18"
    }
  }, [_c('div', {
    staticClass: "dd-handle dd3-handle"
  }), _vm._v(" "), _c('div', {
    staticClass: "dd3-content"
  }, [_vm._v("Item 18")])])])])])])])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-ef4a00da", module.exports)
  }
}

/***/ })

});