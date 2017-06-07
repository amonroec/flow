webpackJsonp([34],{

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(987)
__webpack_require__(986)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(424),
  /* template */
  __webpack_require__(848),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/vagrant/Sites/vue_workflows/laravel/resources/assets/js/components/components/nvd3_charts.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] nvd3_charts.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-605fbf05", Component.options)
  } else {
    hotAPI.reload("data-v-605fbf05", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* nvd3 version 1.8.5 (https://github.com/novus/nvd3) 2016-12-01 */

!function () {
  var a = {};a.dev = !1, a.tooltip = a.tooltip || {}, a.utils = a.utils || {}, a.models = a.models || {}, a.charts = {}, a.logs = {}, a.dom = {}, "undefined" != typeof module && "undefined" != typeof exports && "undefined" == typeof d3 && (d3 = __webpack_require__(293)), a.dispatch = d3.dispatch("render_start", "render_end"), Function.prototype.bind || (Function.prototype.bind = function (a) {
    if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var b = Array.prototype.slice.call(arguments, 1),
        c = this,
        d = function d() {},
        e = function e() {
      return c.apply(this instanceof d && a ? this : a, b.concat(Array.prototype.slice.call(arguments)));
    };return d.prototype = this.prototype, e.prototype = new d(), e;
  }), a.dev && (a.dispatch.on("render_start", function (b) {
    a.logs.startTime = +new Date();
  }), a.dispatch.on("render_end", function (b) {
    a.logs.endTime = +new Date(), a.logs.totalTime = a.logs.endTime - a.logs.startTime, a.log("total", a.logs.totalTime);
  })), a.log = function () {
    if (a.dev && window.console && console.log && console.log.apply) console.log.apply(console, arguments);else if (a.dev && window.console && "function" == typeof console.log && Function.prototype.bind) {
      var b = Function.prototype.bind.call(console.log, console);b.apply(console, arguments);
    }return arguments[arguments.length - 1];
  }, a.deprecated = function (a, b) {
    console && console.warn && console.warn("nvd3 warning: `" + a + "` has been deprecated. ", b || "");
  }, a.render = function (b) {
    b = b || 1, a.render.active = !0, a.dispatch.render_start();var c = function c() {
      for (var d, e, f = 0; b > f && (e = a.render.queue[f]); f++) {
        d = e.generate(), _typeof(e.callback) == (typeof Function === "undefined" ? "undefined" : _typeof(Function)) && e.callback(d);
      }a.render.queue.splice(0, f), a.render.queue.length ? setTimeout(c) : (a.dispatch.render_end(), a.render.active = !1);
    };setTimeout(c);
  }, a.render.active = !1, a.render.queue = [], a.addGraph = function (b) {
    _typeof(arguments[0]) == (typeof Function === "undefined" ? "undefined" : _typeof(Function)) && (b = { generate: arguments[0], callback: arguments[1] }), a.render.queue.push(b), a.render.active || a.render();
  }, "undefined" != typeof module && "undefined" != typeof exports && (module.exports = a), "undefined" != typeof window && (window.nv = a), a.dom.write = function (a) {
    return void 0 !== window.fastdom ? fastdom.mutate(a) : a();
  }, a.dom.read = function (a) {
    return void 0 !== window.fastdom ? fastdom.measure(a) : a();
  }, a.interactiveGuideline = function () {
    "use strict";
    function b(l) {
      l.each(function (l) {
        function m() {
          var a = d3.mouse(this),
              d = a[0],
              e = a[1],
              h = !0,
              i = !1;if (k && (d = d3.event.offsetX, e = d3.event.offsetY, "svg" !== d3.event.target.tagName && (h = !1), d3.event.target.className.baseVal.match("nv-legend") && (i = !0)), h && (d -= c.left, e -= c.top), "mouseout" === d3.event.type || 0 > d || 0 > e || d > o || e > p || d3.event.relatedTarget && void 0 === d3.event.relatedTarget.ownerSVGElement || i) {
            if (k && d3.event.relatedTarget && void 0 === d3.event.relatedTarget.ownerSVGElement && (void 0 === d3.event.relatedTarget.className || d3.event.relatedTarget.className.match(j.nvPointerEventsClass))) return;return g.elementMouseout({ mouseX: d, mouseY: e }), b.renderGuideLine(null), void j.hidden(!0);
          }j.hidden(!1);var l = "function" == typeof f.rangeBands,
              m = void 0;if (l) {
            var n = d3.bisect(f.range(), d) - 1;if (!(f.range()[n] + f.rangeBand() >= d)) return g.elementMouseout({ mouseX: d, mouseY: e }), b.renderGuideLine(null), void j.hidden(!0);m = f.domain()[d3.bisect(f.range(), d) - 1];
          } else m = f.invert(d);g.elementMousemove({ mouseX: d, mouseY: e, pointXValue: m }), "dblclick" === d3.event.type && g.elementDblclick({ mouseX: d, mouseY: e, pointXValue: m }), "click" === d3.event.type && g.elementClick({ mouseX: d, mouseY: e, pointXValue: m }), "mousedown" === d3.event.type && g.elementMouseDown({ mouseX: d, mouseY: e, pointXValue: m }), "mouseup" === d3.event.type && g.elementMouseUp({ mouseX: d, mouseY: e, pointXValue: m });
        }var n = d3.select(this),
            o = d || 960,
            p = e || 400,
            q = n.selectAll("g.nv-wrap.nv-interactiveLineLayer").data([l]),
            r = q.enter().append("g").attr("class", " nv-wrap nv-interactiveLineLayer");r.append("g").attr("class", "nv-interactiveGuideLine"), i && (i.on("touchmove", m).on("mousemove", m, !0).on("mouseout", m, !0).on("mousedown", m, !0).on("mouseup", m, !0).on("dblclick", m).on("click", m), b.guideLine = null, b.renderGuideLine = function (c) {
          h && (b.guideLine && b.guideLine.attr("x1") === c || a.dom.write(function () {
            var b = q.select(".nv-interactiveGuideLine").selectAll("line").data(null != c ? [a.utils.NaNtoZero(c)] : [], String);b.enter().append("line").attr("class", "nv-guideline").attr("x1", function (a) {
              return a;
            }).attr("x2", function (a) {
              return a;
            }).attr("y1", p).attr("y2", 0), b.exit().remove();
          }));
        });
      });
    }var c = { left: 0, top: 0 },
        d = null,
        e = null,
        f = d3.scale.linear(),
        g = d3.dispatch("elementMousemove", "elementMouseout", "elementClick", "elementDblclick", "elementMouseDown", "elementMouseUp"),
        h = !0,
        i = null,
        j = a.models.tooltip(),
        k = window.ActiveXObject;return j.duration(0).hideDelay(0).hidden(!1), b.dispatch = g, b.tooltip = j, b.margin = function (a) {
      return arguments.length ? (c.top = "undefined" != typeof a.top ? a.top : c.top, c.left = "undefined" != typeof a.left ? a.left : c.left, b) : c;
    }, b.width = function (a) {
      return arguments.length ? (d = a, b) : d;
    }, b.height = function (a) {
      return arguments.length ? (e = a, b) : e;
    }, b.xScale = function (a) {
      return arguments.length ? (f = a, b) : f;
    }, b.showGuideLine = function (a) {
      return arguments.length ? (h = a, b) : h;
    }, b.svgContainer = function (a) {
      return arguments.length ? (i = a, b) : i;
    }, b;
  }, a.interactiveBisect = function (a, b, c) {
    "use strict";
    if (!(a instanceof Array)) return null;var d;d = "function" != typeof c ? function (a) {
      return a.x;
    } : c;var e = function e(a, b) {
      return d(a) - b;
    },
        f = d3.bisector(e).left,
        g = d3.max([0, f(a, b) - 1]),
        h = d(a[g]);if ("undefined" == typeof h && (h = g), h === b) return g;var i = d3.min([g + 1, a.length - 1]),
        j = d(a[i]);return "undefined" == typeof j && (j = i), Math.abs(j - b) >= Math.abs(h - b) ? g : i;
  }, a.nearestValueIndex = function (a, b, c) {
    "use strict";
    var d = 1 / 0,
        e = null;return a.forEach(function (a, f) {
      var g = Math.abs(b - a);null != a && d >= g && c > g && (d = g, e = f);
    }), e;
  }, a.models.tooltip = function () {
    "use strict";
    function b() {
      if (!l || !l.node()) {
        var a = [1];l = d3.select(document.body).select("#" + d).data(a), l.enter().append("div").attr("class", "nvtooltip " + (i ? i : "xy-tooltip")).attr("id", d).style("top", 0).style("left", 0).style("opacity", 0).style("position", "fixed").selectAll("div, table, td, tr").classed(q, !0).classed(q, !0), l.exit().remove();
      }
    }function c() {
      return n && w(e) ? (a.dom.write(function () {
        b();var a = u(e);a && (l.node().innerHTML = a), y();
      }), c) : void 0;
    }var d = "nvtooltip-" + Math.floor(1e5 * Math.random()),
        e = null,
        f = "w",
        g = 25,
        h = 0,
        i = null,
        j = !0,
        k = 200,
        l = null,
        m = { left: null, top: null },
        n = !0,
        o = 100,
        p = !0,
        q = "nv-pointer-events-none",
        r = function r(a, b) {
      return a;
    },
        s = function s(a) {
      return a;
    },
        t = function t(a, b) {
      return a;
    },
        u = function u(a) {
      if (null === a) return "";var b = d3.select(document.createElement("table"));if (p) {
        var c = b.selectAll("thead").data([a]).enter().append("thead");c.append("tr").append("td").attr("colspan", 3).append("strong").classed("x-value", !0).html(s(a.value));
      }var d = b.selectAll("tbody").data([a]).enter().append("tbody"),
          e = d.selectAll("tr").data(function (a) {
        return a.series;
      }).enter().append("tr").classed("highlight", function (a) {
        return a.highlight;
      });e.append("td").classed("legend-color-guide", !0).append("div").style("background-color", function (a) {
        return a.color;
      }), e.append("td").classed("key", !0).classed("total", function (a) {
        return !!a.total;
      }).html(function (a, b) {
        return t(a.key, b);
      }), e.append("td").classed("value", !0).html(function (a, b) {
        return r(a.value, b);
      }), e.filter(function (a, b) {
        return void 0 !== a.percent;
      }).append("td").classed("percent", !0).html(function (a, b) {
        return "(" + d3.format("%")(a.percent) + ")";
      }), e.selectAll("td").each(function (a) {
        if (a.highlight) {
          var b = d3.scale.linear().domain([0, 1]).range(["#fff", a.color]),
              c = .6;d3.select(this).style("border-bottom-color", b(c)).style("border-top-color", b(c));
        }
      });var f = b.node().outerHTML;return void 0 !== a.footer && (f += "<div class='footer'>" + a.footer + "</div>"), f;
    },
        v = function v() {
      var a = { left: null !== d3.event ? d3.event.clientX : 0, top: null !== d3.event ? d3.event.clientY : 0 };if ("none" != getComputedStyle(document.body).transform) {
        var b = document.body.getBoundingClientRect();a.left -= b.left, a.top -= b.top;
      }return a;
    },
        w = function w(b) {
      if (b && b.series) {
        if (a.utils.isArray(b.series)) return !0;if (a.utils.isObject(b.series)) return b.series = [b.series], !0;
      }return !1;
    },
        x = function x(a) {
      var b,
          c,
          d,
          e = l.node().offsetHeight,
          h = l.node().offsetWidth,
          i = document.documentElement.clientWidth,
          j = document.documentElement.clientHeight;switch (f) {case "e":
          b = -h - g, c = -(e / 2), a.left + b < 0 && (b = g), (d = a.top + c) < 0 && (c -= d), (d = a.top + c + e) > j && (c -= d - j);break;case "w":
          b = g, c = -(e / 2), a.left + b + h > i && (b = -h - g), (d = a.top + c) < 0 && (c -= d), (d = a.top + c + e) > j && (c -= d - j);break;case "n":
          b = -(h / 2) - 5, c = g, a.top + c + e > j && (c = -e - g), (d = a.left + b) < 0 && (b -= d), (d = a.left + b + h) > i && (b -= d - i);break;case "s":
          b = -(h / 2), c = -e - g, a.top + c < 0 && (c = g), (d = a.left + b) < 0 && (b -= d), (d = a.left + b + h) > i && (b -= d - i);break;case "center":
          b = -(h / 2), c = -(e / 2);break;default:
          b = 0, c = 0;}return { left: b, top: c };
    },
        y = function y() {
      a.dom.read(function () {
        var a = v(),
            b = x(a),
            c = a.left + b.left,
            d = a.top + b.top;if (j) l.interrupt().transition().delay(k).duration(0).style("opacity", 0);else {
          var e = "translate(" + m.left + "px, " + m.top + "px)",
              f = "translate(" + Math.round(c) + "px, " + Math.round(d) + "px)",
              g = d3.interpolateString(e, f),
              h = l.style("opacity") < .1;l.interrupt().transition().duration(h ? 0 : o).styleTween("transform", function (a) {
            return g;
          }, "important").styleTween("-webkit-transform", function (a) {
            return g;
          }).style("-ms-transform", f).style("opacity", 1);
        }m.left = c, m.top = d;
      });
    };return c.nvPointerEventsClass = q, c.options = a.utils.optionsFunc.bind(c), c._options = Object.create({}, { duration: { get: function get() {
          return o;
        }, set: function set(a) {
          o = a;
        } }, gravity: { get: function get() {
          return f;
        }, set: function set(a) {
          f = a;
        } }, distance: { get: function get() {
          return g;
        }, set: function set(a) {
          g = a;
        } }, snapDistance: { get: function get() {
          return h;
        }, set: function set(a) {
          h = a;
        } }, classes: { get: function get() {
          return i;
        }, set: function set(a) {
          i = a;
        } }, enabled: { get: function get() {
          return n;
        }, set: function set(a) {
          n = a;
        } }, hideDelay: { get: function get() {
          return k;
        }, set: function set(a) {
          k = a;
        } }, contentGenerator: { get: function get() {
          return u;
        }, set: function set(a) {
          u = a;
        } }, valueFormatter: { get: function get() {
          return r;
        }, set: function set(a) {
          r = a;
        } }, headerFormatter: { get: function get() {
          return s;
        }, set: function set(a) {
          s = a;
        } }, keyFormatter: { get: function get() {
          return t;
        }, set: function set(a) {
          t = a;
        } }, headerEnabled: { get: function get() {
          return p;
        }, set: function set(a) {
          p = a;
        } }, position: { get: function get() {
          return v;
        }, set: function set(a) {
          v = a;
        } }, chartContainer: { get: function get() {
          return document.body;
        }, set: function set(b) {
          a.deprecated("chartContainer", "feature removed after 1.8.3");
        } }, fixedTop: { get: function get() {
          return null;
        }, set: function set(b) {
          a.deprecated("fixedTop", "feature removed after 1.8.1");
        } }, offset: { get: function get() {
          return { left: 0, top: 0 };
        }, set: function set(b) {
          a.deprecated("offset", "use chart.tooltip.distance() instead");
        } }, hidden: { get: function get() {
          return j;
        }, set: function set(a) {
          j != a && (j = !!a, c());
        } }, data: { get: function get() {
          return e;
        }, set: function set(a) {
          a.point && (a.value = a.point.x, a.series = a.series || {}, a.series.value = a.point.y, a.series.color = a.point.color || a.series.color), e = a;
        } }, node: { get: function get() {
          return l.node();
        }, set: function set(a) {} }, id: { get: function get() {
          return d;
        }, set: function set(a) {} } }), a.utils.initOptions(c), c;
  }, a.utils.windowSize = function () {
    var a = { width: 640, height: 480 };return window.innerWidth && window.innerHeight ? (a.width = window.innerWidth, a.height = window.innerHeight, a) : "CSS1Compat" == document.compatMode && document.documentElement && document.documentElement.offsetWidth ? (a.width = document.documentElement.offsetWidth, a.height = document.documentElement.offsetHeight, a) : document.body && document.body.offsetWidth ? (a.width = document.body.offsetWidth, a.height = document.body.offsetHeight, a) : a;
  }, a.utils.isArray = Array.isArray, a.utils.isObject = function (a) {
    return null !== a && "object" == (typeof a === "undefined" ? "undefined" : _typeof(a));
  }, a.utils.isFunction = function (a) {
    return "function" == typeof a;
  }, a.utils.isDate = function (a) {
    return "[object Date]" === toString.call(a);
  }, a.utils.isNumber = function (a) {
    return !isNaN(a) && "number" == typeof a;
  }, a.utils.windowResize = function (b) {
    return window.addEventListener ? window.addEventListener("resize", b) : a.log("ERROR: Failed to bind to window.resize with: ", b), { callback: b, clear: function clear() {
        window.removeEventListener("resize", b);
      } };
  }, a.utils.getColor = function (b) {
    if (void 0 === b) return a.utils.defaultColor();if (a.utils.isArray(b)) {
      var c = d3.scale.ordinal().range(b);return function (a, b) {
        var d = void 0 === b ? a : b;return a.color || c(d);
      };
    }return b;
  }, a.utils.defaultColor = function () {
    return a.utils.getColor(d3.scale.category20().range());
  }, a.utils.customTheme = function (b, c, d) {
    c = c || function (a) {
      return a.key;
    }, d = d || d3.scale.category20().range();var e = d.length;return function (f, g) {
      var h = c(f);return a.utils.isFunction(b[h]) ? b[h]() : void 0 !== b[h] ? b[h] : (e || (e = d.length), e -= 1, d[e]);
    };
  }, a.utils.pjax = function (b, c) {
    var d = function d(_d) {
      d3.html(_d, function (d) {
        var e = d3.select(c).node();e.parentNode.replaceChild(d3.select(d).select(c).node(), e), a.utils.pjax(b, c);
      });
    };d3.selectAll(b).on("click", function () {
      history.pushState(this.href, this.textContent, this.href), d(this.href), d3.event.preventDefault();
    }), d3.select(window).on("popstate", function () {
      d3.event.state && d(d3.event.state);
    });
  }, a.utils.calcApproxTextWidth = function (b) {
    if (a.utils.isFunction(b.style) && a.utils.isFunction(b.text)) {
      var c = parseInt(b.style("font-size").replace("px", ""), 10),
          d = b.text().length;return a.utils.NaNtoZero(d * c * .5);
    }return 0;
  }, a.utils.NaNtoZero = function (b) {
    return !a.utils.isNumber(b) || isNaN(b) || null === b || b === 1 / 0 || b === -(1 / 0) ? 0 : b;
  }, d3.selection.prototype.watchTransition = function (a) {
    var b = [this].concat([].slice.call(arguments, 1));return a.transition.apply(a, b);
  }, a.utils.renderWatch = function (b, c) {
    if (!(this instanceof a.utils.renderWatch)) return new a.utils.renderWatch(b, c);var d = void 0 !== c ? c : 250,
        e = [],
        f = this;this.models = function (a) {
      return a = [].slice.call(arguments, 0), a.forEach(function (a) {
        a.__rendered = !1, function (a) {
          a.dispatch.on("renderEnd", function (b) {
            a.__rendered = !0, f.renderEnd("model");
          });
        }(a), e.indexOf(a) < 0 && e.push(a);
      }), this;
    }, this.reset = function (a) {
      void 0 !== a && (d = a), e = [];
    }, this.transition = function (a, b, c) {
      if (b = arguments.length > 1 ? [].slice.call(arguments, 1) : [], c = b.length > 1 ? b.pop() : void 0 !== d ? d : 250, a.__rendered = !1, e.indexOf(a) < 0 && e.push(a), 0 === c) return a.__rendered = !0, a.delay = function () {
        return this;
      }, a.duration = function () {
        return this;
      }, a;0 === a.length ? a.__rendered = !0 : a.every(function (a) {
        return !a.length;
      }) ? a.__rendered = !0 : a.__rendered = !1;var g = 0;return a.transition().duration(c).each(function () {
        ++g;
      }).each("end", function (c, d) {
        0 === --g && (a.__rendered = !0, f.renderEnd.apply(this, b));
      });
    }, this.renderEnd = function () {
      e.every(function (a) {
        return a.__rendered;
      }) && (e.forEach(function (a) {
        a.__rendered = !1;
      }), b.renderEnd.apply(this, arguments));
    };
  }, a.utils.deepExtend = function (b) {
    var c = arguments.length > 1 ? [].slice.call(arguments, 1) : [];c.forEach(function (c) {
      for (var d in c) {
        var e = a.utils.isArray(b[d]),
            f = a.utils.isObject(b[d]),
            g = a.utils.isObject(c[d]);f && !e && g ? a.utils.deepExtend(b[d], c[d]) : b[d] = c[d];
      }
    });
  }, a.utils.state = function () {
    if (!(this instanceof a.utils.state)) return new a.utils.state();var b = {},
        c = function c() {},
        d = function d() {
      return {};
    },
        e = null,
        f = null;this.dispatch = d3.dispatch("change", "set"), this.dispatch.on("set", function (a) {
      c(a, !0);
    }), this.getter = function (a) {
      return d = a, this;
    }, this.setter = function (a, b) {
      return b || (b = function b() {}), c = function c(_c, d) {
        a(_c), d && b();
      }, this;
    }, this.init = function (b) {
      e = e || {}, a.utils.deepExtend(e, b);
    };var g = function g() {
      var a = d();if (JSON.stringify(a) === JSON.stringify(b)) return !1;for (var c in a) {
        void 0 === b[c] && (b[c] = {}), b[c] = a[c], f = !0;
      }return !0;
    };this.update = function () {
      e && (c(e, !1), e = null), g.call(this) && this.dispatch.change(b);
    };
  }, a.utils.optionsFunc = function (b) {
    return b && d3.map(b).forEach(function (b, c) {
      a.utils.isFunction(this[b]) && this[b](c);
    }.bind(this)), this;
  }, a.utils.calcTicksX = function (b, c) {
    var d = 1,
        e = 0;for (e; e < c.length; e += 1) {
      var f = c[e] && c[e].values ? c[e].values.length : 0;d = f > d ? f : d;
    }return a.log("Requested number of ticks: ", b), a.log("Calculated max values to be: ", d), b = b > d ? b = d - 1 : b, b = 1 > b ? 1 : b, b = Math.floor(b), a.log("Calculating tick count as: ", b), b;
  }, a.utils.calcTicksY = function (b, c) {
    return a.utils.calcTicksX(b, c);
  }, a.utils.initOption = function (a, b) {
    a._calls && a._calls[b] ? a[b] = a._calls[b] : (a[b] = function (c) {
      return arguments.length ? (a._overrides[b] = !0, a._options[b] = c, a) : a._options[b];
    }, a["_" + b] = function (c) {
      return arguments.length ? (a._overrides[b] || (a._options[b] = c), a) : a._options[b];
    });
  }, a.utils.initOptions = function (b) {
    b._overrides = b._overrides || {};var c = Object.getOwnPropertyNames(b._options || {}),
        d = Object.getOwnPropertyNames(b._calls || {});c = c.concat(d);for (var e in c) {
      a.utils.initOption(b, c[e]);
    }
  }, a.utils.inheritOptionsD3 = function (a, b, c) {
    a._d3options = c.concat(a._d3options || []), c.unshift(b), c.unshift(a), d3.rebind.apply(this, c);
  }, a.utils.arrayUnique = function (a) {
    return a.sort().filter(function (b, c) {
      return !c || b != a[c - 1];
    });
  }, a.utils.symbolMap = d3.map(), a.utils.symbol = function () {
    function b(b, e) {
      var f = c.call(this, b, e),
          g = d.call(this, b, e);return -1 !== d3.svg.symbolTypes.indexOf(f) ? d3.svg.symbol().type(f).size(g)() : a.utils.symbolMap.get(f)(g);
    }var c,
        d = 64;return b.type = function (a) {
      return arguments.length ? (c = d3.functor(a), b) : c;
    }, b.size = function (a) {
      return arguments.length ? (d = d3.functor(a), b) : d;
    }, b;
  }, a.utils.inheritOptions = function (b, c) {
    var d = Object.getOwnPropertyNames(c._options || {}),
        e = Object.getOwnPropertyNames(c._calls || {}),
        f = c._inherited || [],
        g = c._d3options || [],
        h = d.concat(e).concat(f).concat(g);h.unshift(c), h.unshift(b), d3.rebind.apply(this, h), b._inherited = a.utils.arrayUnique(d.concat(e).concat(f).concat(d).concat(b._inherited || [])), b._d3options = a.utils.arrayUnique(g.concat(b._d3options || []));
  }, a.utils.initSVG = function (a) {
    a.classed({ "nvd3-svg": !0 });
  }, a.utils.sanitizeHeight = function (a, b) {
    return a || parseInt(b.style("height"), 10) || 400;
  }, a.utils.sanitizeWidth = function (a, b) {
    return a || parseInt(b.style("width"), 10) || 960;
  }, a.utils.availableHeight = function (b, c, d) {
    return Math.max(0, a.utils.sanitizeHeight(b, c) - d.top - d.bottom);
  }, a.utils.availableWidth = function (b, c, d) {
    return Math.max(0, a.utils.sanitizeWidth(b, c) - d.left - d.right);
  }, a.utils.noData = function (b, c) {
    var d = b.options(),
        e = d.margin(),
        f = d.noData(),
        g = null == f ? ["No Data Available."] : [f],
        h = a.utils.availableHeight(null, c, e),
        i = a.utils.availableWidth(null, c, e),
        j = e.left + i / 2,
        k = e.top + h / 2;c.selectAll("g").remove();var l = c.selectAll(".nv-noData").data(g);l.enter().append("text").attr("class", "nvd3 nv-noData").attr("dy", "-.7em").style("text-anchor", "middle"), l.attr("x", j).attr("y", k).text(function (a) {
      return a;
    });
  }, a.utils.wrapTicks = function (a, b) {
    a.each(function () {
      for (var a, c = d3.select(this), d = c.text().split(/\s+/).reverse(), e = [], f = 0, g = 1.1, h = c.attr("y"), i = parseFloat(c.attr("dy")), j = c.text(null).append("tspan").attr("x", 0).attr("y", h).attr("dy", i + "em"); a = d.pop();) {
        e.push(a), j.text(e.join(" ")), j.node().getComputedTextLength() > b && (e.pop(), j.text(e.join(" ")), e = [a], j = c.append("tspan").attr("x", 0).attr("y", h).attr("dy", ++f * g + i + "em").text(a));
      }
    });
  }, a.utils.arrayEquals = function (b, c) {
    if (b === c) return !0;if (!b || !c) return !1;if (b.length != c.length) return !1;for (var d = 0, e = b.length; e > d; d++) {
      if (b[d] instanceof Array && c[d] instanceof Array) {
        if (!a.arrayEquals(b[d], c[d])) return !1;
      } else if (b[d] != c[d]) return !1;
    }return !0;
  }, a.models.axis = function () {
    "use strict";
    function b(g) {
      return t.reset(), g.each(function (b) {
        var g = d3.select(this);a.utils.initSVG(g);var q = g.selectAll("g.nv-wrap.nv-axis").data([b]),
            r = q.enter().append("g").attr("class", "nvd3 nv-wrap nv-axis"),
            u = (r.append("g"), q.select("g"));null !== n ? c.ticks(n) : ("top" == c.orient() || "bottom" == c.orient()) && c.ticks(Math.abs(d.range()[1] - d.range()[0]) / 100), u.watchTransition(t, "axis").call(c), s = s || c.scale();var v = c.tickFormat();null == v && (v = s.tickFormat());var w = u.selectAll("text.nv-axislabel").data([h || null]);w.exit().remove(), void 0 !== p && u.selectAll("g").select("text").style("font-size", p);var x, y, z;switch (c.orient()) {case "top":
            w.enter().append("text").attr("class", "nv-axislabel"), z = 0, 1 === d.range().length ? z = m ? 2 * d.range()[0] + d.rangeBand() : 0 : 2 === d.range().length ? z = m ? d.range()[0] + d.range()[1] + d.rangeBand() : d.range()[1] : d.range().length > 2 && (z = d.range()[d.range().length - 1] + (d.range()[1] - d.range()[0])), w.attr("text-anchor", "middle").attr("y", 0).attr("x", z / 2), i && (y = q.selectAll("g.nv-axisMaxMin").data(d.domain()), y.enter().append("g").attr("class", function (a, b) {
              return ["nv-axisMaxMin", "nv-axisMaxMin-x", 0 == b ? "nv-axisMin-x" : "nv-axisMax-x"].join(" ");
            }).append("text"), y.exit().remove(), y.attr("transform", function (b, c) {
              return "translate(" + a.utils.NaNtoZero(d(b)) + ",0)";
            }).select("text").attr("dy", "-0.5em").attr("y", -c.tickPadding()).attr("text-anchor", "middle").text(function (a, b) {
              var c = v(a);return ("" + c).match("NaN") ? "" : c;
            }), y.watchTransition(t, "min-max top").attr("transform", function (b, c) {
              return "translate(" + a.utils.NaNtoZero(d.range()[c]) + ",0)";
            }));break;case "bottom":
            x = o + 36;var A = 30,
                B = 0,
                C = u.selectAll("g").select("text"),
                D = "";if (j % 360) {
              C.attr("transform", ""), C.each(function (a, b) {
                var c = this.getBoundingClientRect(),
                    d = c.width;B = c.height, d > A && (A = d);
              }), D = "rotate(" + j + " 0," + (B / 2 + c.tickPadding()) + ")";var E = Math.abs(Math.sin(j * Math.PI / 180));x = (E ? E * A : A) + 30, C.attr("transform", D).style("text-anchor", j % 360 > 0 ? "start" : "end");
            } else l ? C.attr("transform", function (a, b) {
              return "translate(0," + (b % 2 == 0 ? "0" : "12") + ")";
            }) : C.attr("transform", "translate(0,0)");w.enter().append("text").attr("class", "nv-axislabel"), z = 0, 1 === d.range().length ? z = m ? 2 * d.range()[0] + d.rangeBand() : 0 : 2 === d.range().length ? z = m ? d.range()[0] + d.range()[1] + d.rangeBand() : d.range()[1] : d.range().length > 2 && (z = d.range()[d.range().length - 1] + (d.range()[1] - d.range()[0])), w.attr("text-anchor", "middle").attr("y", x).attr("x", z / 2), i && (y = q.selectAll("g.nv-axisMaxMin").data([d.domain()[0], d.domain()[d.domain().length - 1]]), y.enter().append("g").attr("class", function (a, b) {
              return ["nv-axisMaxMin", "nv-axisMaxMin-x", 0 == b ? "nv-axisMin-x" : "nv-axisMax-x"].join(" ");
            }).append("text"), y.exit().remove(), y.attr("transform", function (b, c) {
              return "translate(" + a.utils.NaNtoZero(d(b) + (m ? d.rangeBand() / 2 : 0)) + ",0)";
            }).select("text").attr("dy", ".71em").attr("y", c.tickPadding()).attr("transform", D).style("text-anchor", j ? j % 360 > 0 ? "start" : "end" : "middle").text(function (a, b) {
              var c = v(a);return ("" + c).match("NaN") ? "" : c;
            }), y.watchTransition(t, "min-max bottom").attr("transform", function (b, c) {
              return "translate(" + a.utils.NaNtoZero(d(b) + (m ? d.rangeBand() / 2 : 0)) + ",0)";
            }));break;case "right":
            w.enter().append("text").attr("class", "nv-axislabel"), w.style("text-anchor", k ? "middle" : "begin").attr("transform", k ? "rotate(90)" : "").attr("y", k ? -Math.max(e.right, f) + 12 - (o || 0) : -10).attr("x", k ? d3.max(d.range()) / 2 : c.tickPadding()), i && (y = q.selectAll("g.nv-axisMaxMin").data(d.domain()), y.enter().append("g").attr("class", function (a, b) {
              return ["nv-axisMaxMin", "nv-axisMaxMin-y", 0 == b ? "nv-axisMin-y" : "nv-axisMax-y"].join(" ");
            }).append("text").style("opacity", 0), y.exit().remove(), y.attr("transform", function (b, c) {
              return "translate(0," + a.utils.NaNtoZero(d(b)) + ")";
            }).select("text").attr("dy", ".32em").attr("y", 0).attr("x", c.tickPadding()).style("text-anchor", "start").text(function (a, b) {
              var c = v(a);return ("" + c).match("NaN") ? "" : c;
            }), y.watchTransition(t, "min-max right").attr("transform", function (b, c) {
              return "translate(0," + a.utils.NaNtoZero(d.range()[c]) + ")";
            }).select("text").style("opacity", 1));break;case "left":
            w.enter().append("text").attr("class", "nv-axislabel"), w.style("text-anchor", k ? "middle" : "end").attr("transform", k ? "rotate(-90)" : "").attr("y", k ? -Math.max(e.left, f) + 25 - (o || 0) : -10).attr("x", k ? -d3.max(d.range()) / 2 : -c.tickPadding()), i && (y = q.selectAll("g.nv-axisMaxMin").data(d.domain()), y.enter().append("g").attr("class", function (a, b) {
              return ["nv-axisMaxMin", "nv-axisMaxMin-y", 0 == b ? "nv-axisMin-y" : "nv-axisMax-y"].join(" ");
            }).append("text").style("opacity", 0), y.exit().remove(), y.attr("transform", function (b, c) {
              return "translate(0," + a.utils.NaNtoZero(s(b)) + ")";
            }).select("text").attr("dy", ".32em").attr("y", 0).attr("x", -c.tickPadding()).attr("text-anchor", "end").text(function (a, b) {
              var c = v(a);return ("" + c).match("NaN") ? "" : c;
            }), y.watchTransition(t, "min-max right").attr("transform", function (b, c) {
              return "translate(0," + a.utils.NaNtoZero(d.range()[c]) + ")";
            }).select("text").style("opacity", 1));}if (w.text(function (a) {
          return a;
        }), !i || "left" !== c.orient() && "right" !== c.orient() || (u.selectAll("g").each(function (a, b) {
          d3.select(this).select("text").attr("opacity", 1), (d(a) < d.range()[1] + 10 || d(a) > d.range()[0] - 10) && ((a > 1e-10 || -1e-10 > a) && d3.select(this).attr("opacity", 0), d3.select(this).select("text").attr("opacity", 0));
        }), d.domain()[0] == d.domain()[1] && 0 == d.domain()[0] && q.selectAll("g.nv-axisMaxMin").style("opacity", function (a, b) {
          return b ? 0 : 1;
        })), i && ("top" === c.orient() || "bottom" === c.orient())) {
          var F = [];q.selectAll("g.nv-axisMaxMin").each(function (a, b) {
            try {
              b ? F.push(d(a) - this.getBoundingClientRect().width - 4) : F.push(d(a) + this.getBoundingClientRect().width + 4);
            } catch (c) {
              b ? F.push(d(a) - 4) : F.push(d(a) + 4);
            }
          }), u.selectAll("g").each(function (a, b) {
            (d(a) < F[0] || d(a) > F[1]) && (a > 1e-10 || -1e-10 > a ? d3.select(this).remove() : d3.select(this).select("text").remove());
          });
        }u.selectAll(".tick").filter(function (a) {
          return !parseFloat(Math.round(1e5 * a) / 1e6) && void 0 !== a;
        }).classed("zero", !0), s = d.copy();
      }), t.renderEnd("axis immediate"), b;
    }var c = d3.svg.axis(),
        d = d3.scale.linear(),
        e = { top: 0, right: 0, bottom: 0, left: 0 },
        f = 75,
        g = 60,
        h = null,
        i = !0,
        j = 0,
        k = !0,
        l = !1,
        m = !1,
        n = null,
        o = 0,
        p = void 0,
        q = 250,
        r = d3.dispatch("renderEnd");c.scale(d).orient("bottom").tickFormat(function (a) {
      return a;
    });var s,
        t = a.utils.renderWatch(r, q);return b.axis = c, b.dispatch = r, b.options = a.utils.optionsFunc.bind(b), b._options = Object.create({}, { axisLabelDistance: { get: function get() {
          return o;
        }, set: function set(a) {
          o = a;
        } }, staggerLabels: { get: function get() {
          return l;
        }, set: function set(a) {
          l = a;
        } }, rotateLabels: { get: function get() {
          return j;
        }, set: function set(a) {
          j = a;
        } }, rotateYLabel: { get: function get() {
          return k;
        }, set: function set(a) {
          k = a;
        } }, showMaxMin: { get: function get() {
          return i;
        }, set: function set(a) {
          i = a;
        } }, axisLabel: { get: function get() {
          return h;
        }, set: function set(a) {
          h = a;
        } }, height: { get: function get() {
          return g;
        }, set: function set(a) {
          g = a;
        } }, ticks: { get: function get() {
          return n;
        }, set: function set(a) {
          n = a;
        } }, width: { get: function get() {
          return f;
        }, set: function set(a) {
          f = a;
        } }, fontSize: { get: function get() {
          return p;
        }, set: function set(a) {
          p = a;
        } }, margin: { get: function get() {
          return e;
        }, set: function set(a) {
          e.top = void 0 !== a.top ? a.top : e.top, e.right = void 0 !== a.right ? a.right : e.right, e.bottom = void 0 !== a.bottom ? a.bottom : e.bottom, e.left = void 0 !== a.left ? a.left : e.left;
        } }, duration: { get: function get() {
          return q;
        }, set: function set(a) {
          q = a, t.reset(q);
        } }, scale: { get: function get() {
          return d;
        }, set: function set(e) {
          d = e, c.scale(d), m = "function" == typeof d.rangeBands, a.utils.inheritOptionsD3(b, d, ["domain", "range", "rangeBand", "rangeBands"]);
        } } }), a.utils.initOptions(b), a.utils.inheritOptionsD3(b, c, ["orient", "tickValues", "tickSubdivide", "tickSize", "tickPadding", "tickFormat"]), a.utils.inheritOptionsD3(b, d, ["domain", "range", "rangeBand", "rangeBands"]), b;
  }, a.models.boxPlot = function () {
    "use strict";
    function b(l) {
      return E.reset(), l.each(function (b) {
        var l = j - i.left - i.right,
            F = k - i.top - i.bottom;A = d3.select(this), a.utils.initSVG(A), m.domain(c || b.map(function (a, b) {
          return o(a, b);
        })).rangeBands(d || [0, l], .1);var G = [];if (!e) {
          var H,
              I,
              J = [];b.forEach(function (a, b) {
            var c = p(a),
                d = r(a),
                e = s(a),
                f = t(a),
                g = v(a);g && g.forEach(function (a, b) {
              J.push(w(a, b, void 0));
            }), e && J.push(e), c && J.push(c), d && J.push(d), f && J.push(f);
          }), H = d3.min(J), I = d3.max(J), G = [H, I];
        }n.domain(e || G), n.range(f || [F, 0]), g = g || m, h = h || n.copy().range([n(0), n(0)]);var K = A.selectAll("g.nv-wrap").data([b]);K.enter().append("g").attr("class", "nvd3 nv-wrap");K.attr("transform", "translate(" + i.left + "," + i.top + ")");var L = K.selectAll(".nv-boxplot").data(function (a) {
          return a;
        }),
            M = L.enter().append("g").style("stroke-opacity", 1e-6).style("fill-opacity", 1e-6);L.attr("class", "nv-boxplot").attr("transform", function (a, b, c) {
          return "translate(" + (m(o(a, b)) + .05 * m.rangeBand()) + ", 0)";
        }).classed("hover", function (a) {
          return a.hover;
        }), L.watchTransition(E, "nv-boxplot: boxplots").style("stroke-opacity", 1).style("fill-opacity", .75).delay(function (a, c) {
          return c * C / b.length;
        }).attr("transform", function (a, b) {
          return "translate(" + (m(o(a, b)) + .05 * m.rangeBand()) + ", 0)";
        }), L.exit().remove(), M.each(function (a, b) {
          var c = d3.select(this);[s, t].forEach(function (d) {
            if (void 0 !== d(a) && null !== d(a)) {
              var e = d === s ? "low" : "high";c.append("line").style("stroke", u(a) || z(a, b)).attr("class", "nv-boxplot-whisker nv-boxplot-" + e), c.append("line").style("stroke", u(a) || z(a, b)).attr("class", "nv-boxplot-tick nv-boxplot-" + e);
            }
          });
        });var N = function N() {
          return null === D ? .9 * m.rangeBand() : Math.min(75, .9 * m.rangeBand());
        },
            O = function O() {
          return .45 * m.rangeBand() - N() / 2;
        },
            P = function P() {
          return .45 * m.rangeBand() + N() / 2;
        };[s, t].forEach(function (a) {
          var b = a === s ? "low" : "high",
              c = a === s ? p : r;L.select("line.nv-boxplot-whisker.nv-boxplot-" + b).watchTransition(E, "nv-boxplot: boxplots").attr("x1", .45 * m.rangeBand()).attr("y1", function (b, c) {
            return n(a(b));
          }).attr("x2", .45 * m.rangeBand()).attr("y2", function (a, b) {
            return n(c(a));
          }), L.select("line.nv-boxplot-tick.nv-boxplot-" + b).watchTransition(E, "nv-boxplot: boxplots").attr("x1", O).attr("y1", function (b, c) {
            return n(a(b));
          }).attr("x2", P).attr("y2", function (b, c) {
            return n(a(b));
          });
        }), [s, t].forEach(function (a) {
          var b = a === s ? "low" : "high";M.selectAll(".nv-boxplot-" + b).on("mouseover", function (b, c, d) {
            d3.select(this).classed("hover", !0), B.elementMouseover({ series: { key: a(b), color: u(b) || z(b, d) }, e: d3.event });
          }).on("mouseout", function (b, c, d) {
            d3.select(this).classed("hover", !1), B.elementMouseout({ series: { key: a(b), color: u(b) || z(b, d) }, e: d3.event });
          }).on("mousemove", function (a, b) {
            B.elementMousemove({ e: d3.event });
          });
        }), M.append("rect").attr("class", "nv-boxplot-box").on("mouseover", function (a, b) {
          d3.select(this).classed("hover", !0), B.elementMouseover({ key: o(a), value: o(a), series: [{ key: "Q3", value: r(a), color: u(a) || z(a, b) }, { key: "Q2", value: q(a), color: u(a) || z(a, b) }, { key: "Q1", value: p(a), color: u(a) || z(a, b) }], data: a, index: b, e: d3.event });
        }).on("mouseout", function (a, b) {
          d3.select(this).classed("hover", !1), B.elementMouseout({ key: o(a), value: o(a), series: [{ key: "Q3", value: r(a), color: u(a) || z(a, b) }, { key: "Q2", value: q(a), color: u(a) || z(a, b) }, { key: "Q1", value: p(a), color: u(a) || z(a, b) }], data: a, index: b, e: d3.event });
        }).on("mousemove", function (a, b) {
          B.elementMousemove({ e: d3.event });
        }), L.select("rect.nv-boxplot-box").watchTransition(E, "nv-boxplot: boxes").attr("y", function (a, b) {
          return n(r(a));
        }).attr("width", N).attr("x", O).attr("height", function (a, b) {
          return Math.abs(n(r(a)) - n(p(a))) || 1;
        }).style("fill", function (a, b) {
          return u(a) || z(a, b);
        }).style("stroke", function (a, b) {
          return u(a) || z(a, b);
        }), M.append("line").attr("class", "nv-boxplot-median"), L.select("line.nv-boxplot-median").watchTransition(E, "nv-boxplot: boxplots line").attr("x1", O).attr("y1", function (a, b) {
          return n(q(a));
        }).attr("x2", P).attr("y2", function (a, b) {
          return n(q(a));
        });var Q = L.selectAll(".nv-boxplot-outlier").data(function (a) {
          return v(a) || [];
        });Q.enter().append("circle").style("fill", function (a, b, c) {
          return y(a, b, c) || z(a, c);
        }).style("stroke", function (a, b, c) {
          return y(a, b, c) || z(a, c);
        }).style("z-index", 9e3).on("mouseover", function (a, b, c) {
          d3.select(this).classed("hover", !0), B.elementMouseover({ series: { key: x(a, b, c), color: y(a, b, c) || z(a, c) }, e: d3.event });
        }).on("mouseout", function (a, b, c) {
          d3.select(this).classed("hover", !1), B.elementMouseout({ series: { key: x(a, b, c), color: y(a, b, c) || z(a, c) }, e: d3.event });
        }).on("mousemove", function (a, b) {
          B.elementMousemove({ e: d3.event });
        }), Q.attr("class", "nv-boxplot-outlier"), Q.watchTransition(E, "nv-boxplot: nv-boxplot-outlier").attr("cx", .45 * m.rangeBand()).attr("cy", function (a, b, c) {
          return n(w(a, b, c));
        }).attr("r", "3"), Q.exit().remove(), g = m.copy(), h = n.copy();
      }), E.renderEnd("nv-boxplot immediate"), b;
    }var c,
        d,
        e,
        f,
        g,
        h,
        i = { top: 0, right: 0, bottom: 0, left: 0 },
        j = 960,
        k = 500,
        l = Math.floor(1e4 * Math.random()),
        m = d3.scale.ordinal(),
        n = d3.scale.linear(),
        o = function o(a) {
      return a.label;
    },
        p = function p(a) {
      return a.values.Q1;
    },
        q = function q(a) {
      return a.values.Q2;
    },
        r = function r(a) {
      return a.values.Q3;
    },
        s = function s(a) {
      return a.values.whisker_low;
    },
        t = function t(a) {
      return a.values.whisker_high;
    },
        u = function u(a) {
      return a.color;
    },
        v = function v(a) {
      return a.values.outliers;
    },
        w = function w(a, b, c) {
      return a;
    },
        x = function x(a, b, c) {
      return a;
    },
        y = function y(a, b, c) {
      return void 0;
    },
        z = a.utils.defaultColor(),
        A = null,
        B = d3.dispatch("elementMouseover", "elementMouseout", "elementMousemove", "renderEnd"),
        C = 250,
        D = null,
        E = a.utils.renderWatch(B, C);return b.dispatch = B, b.options = a.utils.optionsFunc.bind(b), b._options = Object.create({}, { width: { get: function get() {
          return j;
        }, set: function set(a) {
          j = a;
        } }, height: { get: function get() {
          return k;
        }, set: function set(a) {
          k = a;
        } }, maxBoxWidth: { get: function get() {
          return D;
        }, set: function set(a) {
          D = a;
        } }, x: { get: function get() {
          return o;
        }, set: function set(a) {
          o = a;
        } }, q1: { get: function get() {
          return p;
        }, set: function set(a) {
          p = a;
        } }, q2: { get: function get() {
          return q;
        }, set: function set(a) {
          q = a;
        } }, q3: { get: function get() {
          return r;
        }, set: function set(a) {
          r = a;
        } }, wl: { get: function get() {
          return s;
        }, set: function set(a) {
          s = a;
        } }, wh: { get: function get() {
          return t;
        }, set: function set(a) {
          t = a;
        } }, itemColor: { get: function get() {
          return u;
        }, set: function set(a) {
          u = a;
        } }, outliers: { get: function get() {
          return v;
        }, set: function set(a) {
          v = a;
        } }, outlierValue: { get: function get() {
          return w;
        }, set: function set(a) {
          w = a;
        } }, outlierLabel: { get: function get() {
          return x;
        }, set: function set(a) {
          x = a;
        } }, outlierColor: { get: function get() {
          return y;
        }, set: function set(a) {
          y = a;
        } }, xScale: { get: function get() {
          return m;
        }, set: function set(a) {
          m = a;
        } }, yScale: { get: function get() {
          return n;
        }, set: function set(a) {
          n = a;
        } }, xDomain: { get: function get() {
          return c;
        }, set: function set(a) {
          c = a;
        } }, yDomain: { get: function get() {
          return e;
        }, set: function set(a) {
          e = a;
        } }, xRange: { get: function get() {
          return d;
        }, set: function set(a) {
          d = a;
        } }, yRange: { get: function get() {
          return f;
        }, set: function set(a) {
          f = a;
        } }, id: { get: function get() {
          return l;
        }, set: function set(a) {
          l = a;
        } }, y: { get: function get() {
          return console.warn("BoxPlot 'y' chart option is deprecated. Please use model overrides instead."), {};
        }, set: function set(a) {
          console.warn("BoxPlot 'y' chart option is deprecated. Please use model overrides instead.");
        } }, margin: { get: function get() {
          return i;
        }, set: function set(a) {
          i.top = void 0 !== a.top ? a.top : i.top, i.right = void 0 !== a.right ? a.right : i.right, i.bottom = void 0 !== a.bottom ? a.bottom : i.bottom, i.left = void 0 !== a.left ? a.left : i.left;
        } }, color: { get: function get() {
          return z;
        }, set: function set(b) {
          z = a.utils.getColor(b);
        } }, duration: { get: function get() {
          return C;
        }, set: function set(a) {
          C = a, E.reset(C);
        } } }), a.utils.initOptions(b), b;
  }, a.models.boxPlotChart = function () {
    "use strict";
    function b(k) {
      return t.reset(), t.models(e), l && t.models(f), m && t.models(g), k.each(function (k) {
        var p = d3.select(this);a.utils.initSVG(p);var t = (i || parseInt(p.style("width")) || 960) - h.left - h.right,
            u = (j || parseInt(p.style("height")) || 400) - h.top - h.bottom;if (b.update = function () {
          r.beforeUpdate(), p.transition().duration(s).call(b);
        }, b.container = this, !k || !k.length) {
          var v = p.selectAll(".nv-noData").data([q]);return v.enter().append("text").attr("class", "nvd3 nv-noData").attr("dy", "-.7em").style("text-anchor", "middle"), v.attr("x", h.left + t / 2).attr("y", h.top + u / 2).text(function (a) {
            return a;
          }), b;
        }p.selectAll(".nv-noData").remove(), c = e.xScale(), d = e.yScale().clamp(!0);var w = p.selectAll("g.nv-wrap.nv-boxPlotWithAxes").data([k]),
            x = w.enter().append("g").attr("class", "nvd3 nv-wrap nv-boxPlotWithAxes").append("g"),
            y = x.append("defs"),
            z = w.select("g");x.append("g").attr("class", "nv-x nv-axis"), x.append("g").attr("class", "nv-y nv-axis").append("g").attr("class", "nv-zeroLine").append("line"), x.append("g").attr("class", "nv-barsWrap"), z.attr("transform", "translate(" + h.left + "," + h.top + ")"), n && z.select(".nv-y.nv-axis").attr("transform", "translate(" + t + ",0)"), e.width(t).height(u);var A = z.select(".nv-barsWrap").datum(k.filter(function (a) {
          return !a.disabled;
        }));if (A.transition().call(e), y.append("clipPath").attr("id", "nv-x-label-clip-" + e.id()).append("rect"), z.select("#nv-x-label-clip-" + e.id() + " rect").attr("width", c.rangeBand() * (o ? 2 : 1)).attr("height", 16).attr("x", -c.rangeBand() / (o ? 1 : 2)), l) {
          f.scale(c).ticks(a.utils.calcTicksX(t / 100, k)).tickSize(-u, 0), z.select(".nv-x.nv-axis").attr("transform", "translate(0," + d.range()[0] + ")"), z.select(".nv-x.nv-axis").call(f);var B = z.select(".nv-x.nv-axis").selectAll("g");o && B.selectAll("text").attr("transform", function (a, b, c) {
            return "translate(0," + (c % 2 === 0 ? "5" : "17") + ")";
          });
        }m && (g.scale(d).ticks(Math.floor(u / 36)).tickSize(-t, 0), z.select(".nv-y.nv-axis").call(g)), z.select(".nv-zeroLine line").attr("x1", 0).attr("x2", t).attr("y1", d(0)).attr("y2", d(0));
      }), t.renderEnd("nv-boxplot chart immediate"), b;
    }var c,
        d,
        e = a.models.boxPlot(),
        f = a.models.axis(),
        g = a.models.axis(),
        h = { top: 15, right: 10, bottom: 50, left: 60 },
        i = null,
        j = null,
        k = a.utils.getColor(),
        l = !0,
        m = !0,
        n = !1,
        o = !1,
        p = a.models.tooltip(),
        q = "No Data Available.",
        r = d3.dispatch("beforeUpdate", "renderEnd"),
        s = 250;f.orient("bottom").showMaxMin(!1).tickFormat(function (a) {
      return a;
    }), g.orient(n ? "right" : "left").tickFormat(d3.format(",.1f")), p.duration(0);var t = a.utils.renderWatch(r, s);return e.dispatch.on("elementMouseover.tooltip", function (a) {
      p.data(a).hidden(!1);
    }), e.dispatch.on("elementMouseout.tooltip", function (a) {
      p.data(a).hidden(!0);
    }), e.dispatch.on("elementMousemove.tooltip", function (a) {
      p();
    }), b.dispatch = r, b.boxplot = e, b.xAxis = f, b.yAxis = g, b.tooltip = p, b.options = a.utils.optionsFunc.bind(b), b._options = Object.create({}, { width: { get: function get() {
          return i;
        }, set: function set(a) {
          i = a;
        } }, height: { get: function get() {
          return j;
        }, set: function set(a) {
          j = a;
        } }, staggerLabels: { get: function get() {
          return o;
        }, set: function set(a) {
          o = a;
        } }, showXAxis: { get: function get() {
          return l;
        }, set: function set(a) {
          l = a;
        } }, showYAxis: { get: function get() {
          return m;
        }, set: function set(a) {
          m = a;
        } }, tooltipContent: { get: function get() {
          return p;
        }, set: function set(a) {
          p = a;
        } }, noData: { get: function get() {
          return q;
        }, set: function set(a) {
          q = a;
        } }, margin: { get: function get() {
          return h;
        }, set: function set(a) {
          h.top = void 0 !== a.top ? a.top : h.top, h.right = void 0 !== a.right ? a.right : h.right, h.bottom = void 0 !== a.bottom ? a.bottom : h.bottom, h.left = void 0 !== a.left ? a.left : h.left;
        } }, duration: { get: function get() {
          return s;
        }, set: function set(a) {
          s = a, t.reset(s), e.duration(s), f.duration(s), g.duration(s);
        } }, color: { get: function get() {
          return k;
        }, set: function set(b) {
          k = a.utils.getColor(b), e.color(k);
        } }, rightAlignYAxis: { get: function get() {
          return n;
        }, set: function set(a) {
          n = a, g.orient(a ? "right" : "left");
        } } }), a.utils.inheritOptions(b, e), a.utils.initOptions(b), b;
  }, a.models.bullet = function () {
    "use strict";
    function b(a, b) {
      var c = a.slice();a.sort(function (a, d) {
        var e = c.indexOf(a),
            f = c.indexOf(d);return d3.descending(b[e], b[f]);
      });
    }function c(e) {
      return e.each(function (c, e) {
        var s = p - d.left - d.right,
            y = q - d.top - d.bottom;r = d3.select(this), a.utils.initSVG(r);var z = g.call(this, c, e).slice(),
            A = h.call(this, c, e).slice(),
            B = i.call(this, c, e).slice(),
            C = j.call(this, c, e).slice(),
            D = k.call(this, c, e).slice(),
            E = l.call(this, c, e).slice(),
            F = m.call(this, c, e).slice(),
            G = n.call(this, c, e).slice();b(D, z), b(E, A), b(F, B), b(G, C), z.sort(d3.descending), A.sort(d3.descending), B.sort(d3.descending), C.sort(d3.descending);var H = d3.scale.linear().domain(d3.extent(d3.merge([o, z]))).range(f ? [s, 0] : [0, s]);this.__chart__ || d3.scale.linear().domain([0, 1 / 0]).range(H.range());this.__chart__ = H;for (var I = (d3.min(z), d3.max(z), z[1], r.selectAll("g.nv-wrap.nv-bullet").data([c])), J = I.enter().append("g").attr("class", "nvd3 nv-wrap nv-bullet"), K = J.append("g"), L = I.select("g"), e = 0, M = z.length; M > e; e++) {
          var N = "nv-range nv-range" + e;2 >= e && (N = N + " nv-range" + w[e]), K.append("rect").attr("class", N);
        }K.append("rect").attr("class", "nv-measure"), I.attr("transform", "translate(" + d.left + "," + d.top + ")");for (var O = function O(a) {
          return Math.abs(H(a) - H(0));
        }, P = function P(a) {
          return H(0 > a ? a : 0);
        }, e = 0, M = z.length; M > e; e++) {
          var Q = z[e];L.select("rect.nv-range" + e).datum(Q).attr("height", y).transition().duration(x).attr("width", O(Q)).attr("x", P(Q));
        }L.select("rect.nv-measure").style("fill", t).attr("height", y / 3).attr("y", y / 3).on("mouseover", function () {
          u.elementMouseover({ value: C[0], label: G[0] || "Current", color: d3.select(this).style("fill") });
        }).on("mousemove", function () {
          u.elementMousemove({ value: C[0], label: G[0] || "Current", color: d3.select(this).style("fill") });
        }).on("mouseout", function () {
          u.elementMouseout({ value: C[0], label: G[0] || "Current", color: d3.select(this).style("fill") });
        }).transition().duration(x).attr("width", 0 > C ? H(0) - H(C[0]) : H(C[0]) - H(0)).attr("x", P(C));var R = y / 6,
            S = A.map(function (a, b) {
          return { value: a, label: E[b] };
        });K.selectAll("path.nv-markerTriangle").data(S).enter().append("path").attr("class", "nv-markerTriangle").attr("d", "M0," + R + "L" + R + "," + -R + " " + -R + "," + -R + "Z").on("mouseover", function (a) {
          u.elementMouseover({ value: a.value, label: a.label || "Previous", color: d3.select(this).style("fill"), pos: [H(a.value), y / 2] });
        }).on("mousemove", function (a) {
          u.elementMousemove({ value: a.value, label: a.label || "Previous", color: d3.select(this).style("fill") });
        }).on("mouseout", function (a, b) {
          u.elementMouseout({ value: a.value, label: a.label || "Previous", color: d3.select(this).style("fill") });
        }), L.selectAll("path.nv-markerTriangle").data(S).transition().duration(x).attr("transform", function (a) {
          return "translate(" + H(a.value) + "," + y / 2 + ")";
        });var T = B.map(function (a, b) {
          return { value: a, label: F[b] };
        });K.selectAll("line.nv-markerLine").data(T).enter().append("line").attr("cursor", "").attr("class", "nv-markerLine").attr("x1", function (a) {
          return H(a.value);
        }).attr("y1", "2").attr("x2", function (a) {
          return H(a.value);
        }).attr("y2", y - 2).on("mouseover", function (a) {
          u.elementMouseover({ value: a.value, label: a.label || "Previous", color: d3.select(this).style("fill"), pos: [H(a.value), y / 2] });
        }).on("mousemove", function (a) {
          u.elementMousemove({ value: a.value, label: a.label || "Previous", color: d3.select(this).style("fill") });
        }).on("mouseout", function (a, b) {
          u.elementMouseout({ value: a.value, label: a.label || "Previous", color: d3.select(this).style("fill") });
        }), L.selectAll("line.nv-markerLine").data(T).transition().duration(x).attr("x1", function (a) {
          return H(a.value);
        }).attr("x2", function (a) {
          return H(a.value);
        }), I.selectAll(".nv-range").on("mouseover", function (a, b) {
          var c = D[b] || v[b];u.elementMouseover({ value: a, label: c, color: d3.select(this).style("fill") });
        }).on("mousemove", function () {
          u.elementMousemove({ value: C[0], label: G[0] || "Previous", color: d3.select(this).style("fill") });
        }).on("mouseout", function (a, b) {
          var c = D[b] || v[b];u.elementMouseout({ value: a, label: c, color: d3.select(this).style("fill") });
        });
      }), c;
    }var d = { top: 0, right: 0, bottom: 0, left: 0 },
        e = "left",
        f = !1,
        g = function g(a) {
      return a.ranges;
    },
        h = function h(a) {
      return a.markers ? a.markers : [];
    },
        i = function i(a) {
      return a.markerLines ? a.markerLines : [0];
    },
        j = function j(a) {
      return a.measures;
    },
        k = function k(a) {
      return a.rangeLabels ? a.rangeLabels : [];
    },
        l = function l(a) {
      return a.markerLabels ? a.markerLabels : [];
    },
        m = function m(a) {
      return a.markerLineLabels ? a.markerLineLabels : [];
    },
        n = function n(a) {
      return a.measureLabels ? a.measureLabels : [];
    },
        o = [0],
        p = 380,
        q = 30,
        r = null,
        s = null,
        t = a.utils.getColor(["#1f77b4"]),
        u = d3.dispatch("elementMouseover", "elementMouseout", "elementMousemove"),
        v = ["Maximum", "Mean", "Minimum"],
        w = ["Max", "Avg", "Min"],
        x = 1e3;return c.dispatch = u, c.options = a.utils.optionsFunc.bind(c), c._options = Object.create({}, { ranges: { get: function get() {
          return g;
        }, set: function set(a) {
          g = a;
        } }, markers: { get: function get() {
          return h;
        }, set: function set(a) {
          h = a;
        } }, measures: { get: function get() {
          return j;
        }, set: function set(a) {
          j = a;
        } }, forceX: { get: function get() {
          return o;
        }, set: function set(a) {
          o = a;
        } }, width: { get: function get() {
          return p;
        }, set: function set(a) {
          p = a;
        } }, height: { get: function get() {
          return q;
        }, set: function set(a) {
          q = a;
        } }, tickFormat: { get: function get() {
          return s;
        }, set: function set(a) {
          s = a;
        } }, duration: { get: function get() {
          return x;
        }, set: function set(a) {
          x = a;
        } }, margin: { get: function get() {
          return d;
        }, set: function set(a) {
          d.top = void 0 !== a.top ? a.top : d.top, d.right = void 0 !== a.right ? a.right : d.right, d.bottom = void 0 !== a.bottom ? a.bottom : d.bottom, d.left = void 0 !== a.left ? a.left : d.left;
        } }, orient: { get: function get() {
          return e;
        }, set: function set(a) {
          e = a, f = "right" == e || "bottom" == e;
        } }, color: { get: function get() {
          return t;
        }, set: function set(b) {
          t = a.utils.getColor(b);
        } } }), a.utils.initOptions(c), c;
  }, a.models.bulletChart = function () {
    "use strict";
    function b(d) {
      return d.each(function (e, o) {
        var p = d3.select(this);a.utils.initSVG(p);var q = a.utils.availableWidth(k, p, g),
            r = l - g.top - g.bottom;if (b.update = function () {
          b(d);
        }, b.container = this, !e || !h.call(this, e, o)) return a.utils.noData(b, p), b;p.selectAll(".nv-noData").remove();var s = h.call(this, e, o).slice().sort(d3.descending),
            t = i.call(this, e, o).slice().sort(d3.descending),
            u = j.call(this, e, o).slice().sort(d3.descending),
            v = p.selectAll("g.nv-wrap.nv-bulletChart").data([e]),
            w = v.enter().append("g").attr("class", "nvd3 nv-wrap nv-bulletChart"),
            x = w.append("g"),
            y = v.select("g");x.append("g").attr("class", "nv-bulletWrap"), x.append("g").attr("class", "nv-titles"), v.attr("transform", "translate(" + g.left + "," + g.top + ")");var z = d3.scale.linear().domain([0, Math.max(s[0], t[0] || 0, u[0])]).range(f ? [q, 0] : [0, q]),
            A = this.__chart__ || d3.scale.linear().domain([0, 1 / 0]).range(z.range());this.__chart__ = z;var B = x.select(".nv-titles").append("g").attr("text-anchor", "end").attr("transform", "translate(-6," + (l - g.top - g.bottom) / 2 + ")");B.append("text").attr("class", "nv-title").text(function (a) {
          return a.title;
        }), B.append("text").attr("class", "nv-subtitle").attr("dy", "1em").text(function (a) {
          return a.subtitle;
        }), c.width(q).height(r);var C = y.select(".nv-bulletWrap");d3.transition(C).call(c);var D = m || z.tickFormat(q / 100),
            E = y.selectAll("g.nv-tick").data(z.ticks(n ? n : q / 50), function (a) {
          return this.textContent || D(a);
        }),
            F = E.enter().append("g").attr("class", "nv-tick").attr("transform", function (a) {
          return "translate(" + A(a) + ",0)";
        }).style("opacity", 1e-6);F.append("line").attr("y1", r).attr("y2", 7 * r / 6), F.append("text").attr("text-anchor", "middle").attr("dy", "1em").attr("y", 7 * r / 6).text(D);var G = d3.transition(E).transition().duration(c.duration()).attr("transform", function (a) {
          return "translate(" + z(a) + ",0)";
        }).style("opacity", 1);G.select("line").attr("y1", r).attr("y2", 7 * r / 6), G.select("text").attr("y", 7 * r / 6), d3.transition(E.exit()).transition().duration(c.duration()).attr("transform", function (a) {
          return "translate(" + z(a) + ",0)";
        }).style("opacity", 1e-6).remove();
      }), d3.timer.flush(), b;
    }var c = a.models.bullet(),
        d = a.models.tooltip(),
        e = "left",
        f = !1,
        g = { top: 5, right: 40, bottom: 20, left: 120 },
        h = function h(a) {
      return a.ranges;
    },
        i = function i(a) {
      return a.markers ? a.markers : [];
    },
        j = function j(a) {
      return a.measures;
    },
        k = null,
        l = 55,
        m = null,
        n = null,
        o = null,
        p = d3.dispatch();return d.duration(0).headerEnabled(!1), c.dispatch.on("elementMouseover.tooltip", function (a) {
      a.series = { key: a.label, value: a.value, color: a.color }, d.data(a).hidden(!1);
    }), c.dispatch.on("elementMouseout.tooltip", function (a) {
      d.hidden(!0);
    }), c.dispatch.on("elementMousemove.tooltip", function (a) {
      d();
    }), b.bullet = c, b.dispatch = p, b.tooltip = d, b.options = a.utils.optionsFunc.bind(b), b._options = Object.create({}, { ranges: { get: function get() {
          return h;
        }, set: function set(a) {
          h = a;
        } }, markers: { get: function get() {
          return i;
        }, set: function set(a) {
          i = a;
        } }, measures: { get: function get() {
          return j;
        }, set: function set(a) {
          j = a;
        } }, width: { get: function get() {
          return k;
        }, set: function set(a) {
          k = a;
        } }, height: { get: function get() {
          return l;
        }, set: function set(a) {
          l = a;
        } }, tickFormat: { get: function get() {
          return m;
        }, set: function set(a) {
          m = a;
        } }, ticks: { get: function get() {
          return n;
        }, set: function set(a) {
          n = a;
        } }, noData: { get: function get() {
          return o;
        }, set: function set(a) {
          o = a;
        } }, margin: { get: function get() {
          return g;
        }, set: function set(a) {
          g.top = void 0 !== a.top ? a.top : g.top, g.right = void 0 !== a.right ? a.right : g.right, g.bottom = void 0 !== a.bottom ? a.bottom : g.bottom, g.left = void 0 !== a.left ? a.left : g.left;
        } }, orient: { get: function get() {
          return e;
        }, set: function set(a) {
          e = a, f = "right" == e || "bottom" == e;
        } } }), a.utils.inheritOptions(b, c), a.utils.initOptions(b), b;
  }, a.models.candlestickBar = function () {
    "use strict";
    function b(x) {
      return x.each(function (b) {
        c = d3.select(this);var x = a.utils.availableWidth(i, c, h),
            y = a.utils.availableHeight(j, c, h);a.utils.initSVG(c);var A = x / b[0].values.length * .45;l.domain(d || d3.extent(b[0].values.map(n).concat(t))), v ? l.range(f || [.5 * x / b[0].values.length, x * (b[0].values.length - .5) / b[0].values.length]) : l.range(f || [5 + A / 2, x - A / 2 - 5]), m.domain(e || [d3.min(b[0].values.map(s).concat(u)), d3.max(b[0].values.map(r).concat(u))]).range(g || [y, 0]), l.domain()[0] === l.domain()[1] && (l.domain()[0] ? l.domain([l.domain()[0] - .01 * l.domain()[0], l.domain()[1] + .01 * l.domain()[1]]) : l.domain([-1, 1])), m.domain()[0] === m.domain()[1] && (m.domain()[0] ? m.domain([m.domain()[0] + .01 * m.domain()[0], m.domain()[1] - .01 * m.domain()[1]]) : m.domain([-1, 1]));var B = d3.select(this).selectAll("g.nv-wrap.nv-candlestickBar").data([b[0].values]),
            C = B.enter().append("g").attr("class", "nvd3 nv-wrap nv-candlestickBar"),
            D = C.append("defs"),
            E = C.append("g"),
            F = B.select("g");E.append("g").attr("class", "nv-ticks"), B.attr("transform", "translate(" + h.left + "," + h.top + ")"), c.on("click", function (a, b) {
          z.chartClick({ data: a, index: b, pos: d3.event, id: k });
        }), D.append("clipPath").attr("id", "nv-chart-clip-path-" + k).append("rect"), B.select("#nv-chart-clip-path-" + k + " rect").attr("width", x).attr("height", y), F.attr("clip-path", w ? "url(#nv-chart-clip-path-" + k + ")" : "");var G = B.select(".nv-ticks").selectAll(".nv-tick").data(function (a) {
          return a;
        });G.exit().remove();var H = G.enter().append("g");G.attr("class", function (a, b, c) {
          return (p(a, b) > q(a, b) ? "nv-tick negative" : "nv-tick positive") + " nv-tick-" + c + "-" + b;
        });H.append("line").attr("class", "nv-candlestick-lines").attr("transform", function (a, b) {
          return "translate(" + l(n(a, b)) + ",0)";
        }).attr("x1", 0).attr("y1", function (a, b) {
          return m(r(a, b));
        }).attr("x2", 0).attr("y2", function (a, b) {
          return m(s(a, b));
        }), H.append("rect").attr("class", "nv-candlestick-rects nv-bars").attr("transform", function (a, b) {
          return "translate(" + (l(n(a, b)) - A / 2) + "," + (m(o(a, b)) - (p(a, b) > q(a, b) ? m(q(a, b)) - m(p(a, b)) : 0)) + ")";
        }).attr("x", 0).attr("y", 0).attr("width", A).attr("height", function (a, b) {
          var c = p(a, b),
              d = q(a, b);return c > d ? m(d) - m(c) : m(c) - m(d);
        });G.select(".nv-candlestick-lines").transition().attr("transform", function (a, b) {
          return "translate(" + l(n(a, b)) + ",0)";
        }).attr("x1", 0).attr("y1", function (a, b) {
          return m(r(a, b));
        }).attr("x2", 0).attr("y2", function (a, b) {
          return m(s(a, b));
        }), G.select(".nv-candlestick-rects").transition().attr("transform", function (a, b) {
          return "translate(" + (l(n(a, b)) - A / 2) + "," + (m(o(a, b)) - (p(a, b) > q(a, b) ? m(q(a, b)) - m(p(a, b)) : 0)) + ")";
        }).attr("x", 0).attr("y", 0).attr("width", A).attr("height", function (a, b) {
          var c = p(a, b),
              d = q(a, b);return c > d ? m(d) - m(c) : m(c) - m(d);
        });
      }), b;
    }var c,
        d,
        e,
        f,
        g,
        h = { top: 0, right: 0, bottom: 0, left: 0 },
        i = null,
        j = null,
        k = Math.floor(1e4 * Math.random()),
        l = d3.scale.linear(),
        m = d3.scale.linear(),
        n = function n(a) {
      return a.x;
    },
        o = function o(a) {
      return a.y;
    },
        p = function p(a) {
      return a.open;
    },
        q = function q(a) {
      return a.close;
    },
        r = function r(a) {
      return a.high;
    },
        s = function s(a) {
      return a.low;
    },
        t = [],
        u = [],
        v = !1,
        w = !0,
        x = a.utils.defaultColor(),
        y = !1,
        z = d3.dispatch("stateChange", "changeState", "renderEnd", "chartClick", "elementClick", "elementDblClick", "elementMouseover", "elementMouseout", "elementMousemove");return b.highlightPoint = function (a, d) {
      b.clearHighlights(), c.select(".nv-candlestickBar .nv-tick-0-" + a).classed("hover", d);
    }, b.clearHighlights = function () {
      c.select(".nv-candlestickBar .nv-tick.hover").classed("hover", !1);
    }, b.dispatch = z, b.options = a.utils.optionsFunc.bind(b), b._options = Object.create({}, { width: { get: function get() {
          return i;
        }, set: function set(a) {
          i = a;
        } }, height: { get: function get() {
          return j;
        }, set: function set(a) {
          j = a;
        } }, xScale: { get: function get() {
          return l;
        }, set: function set(a) {
          l = a;
        } }, yScale: { get: function get() {
          return m;
        }, set: function set(a) {
          m = a;
        } }, xDomain: { get: function get() {
          return d;
        }, set: function set(a) {
          d = a;
        } }, yDomain: { get: function get() {
          return e;
        }, set: function set(a) {
          e = a;
        } }, xRange: { get: function get() {
          return f;
        }, set: function set(a) {
          f = a;
        } }, yRange: { get: function get() {
          return g;
        }, set: function set(a) {
          g = a;
        } }, forceX: { get: function get() {
          return t;
        }, set: function set(a) {
          t = a;
        } }, forceY: { get: function get() {
          return u;
        }, set: function set(a) {
          u = a;
        } }, padData: { get: function get() {
          return v;
        }, set: function set(a) {
          v = a;
        } }, clipEdge: { get: function get() {
          return w;
        }, set: function set(a) {
          w = a;
        } }, id: { get: function get() {
          return k;
        }, set: function set(a) {
          k = a;
        } }, interactive: { get: function get() {
          return y;
        }, set: function set(a) {
          y = a;
        } }, x: { get: function get() {
          return n;
        }, set: function set(a) {
          n = a;
        } }, y: { get: function get() {
          return o;
        }, set: function set(a) {
          o = a;
        } }, open: { get: function get() {
          return p();
        }, set: function set(a) {
          p = a;
        } }, close: { get: function get() {
          return q();
        }, set: function set(a) {
          q = a;
        } }, high: { get: function get() {
          return r;
        }, set: function set(a) {
          r = a;
        } }, low: { get: function get() {
          return s;
        }, set: function set(a) {
          s = a;
        } }, margin: { get: function get() {
          return h;
        }, set: function set(a) {
          h.top = void 0 != a.top ? a.top : h.top, h.right = void 0 != a.right ? a.right : h.right, h.bottom = void 0 != a.bottom ? a.bottom : h.bottom, h.left = void 0 != a.left ? a.left : h.left;
        } }, color: { get: function get() {
          return x;
        }, set: function set(b) {
          x = a.utils.getColor(b);
        } } }), a.utils.initOptions(b), b;
  }, a.models.cumulativeLineChart = function () {
    "use strict";
    function b(l) {
      return I.reset(), I.models(f), s && I.models(g), t && I.models(h), l.each(function (l) {
        function B(a, c) {
          d3.select(b.container).style("cursor", "ew-resize");
        }function F(a, b) {
          H.x = d3.event.x, H.i = Math.round(G.invert(H.x)), L();
        }function I(a, c) {
          d3.select(b.container).style("cursor", "auto"), z.index = H.i, D.stateChange(z);
        }function L() {
          ba.data([H]);var a = b.duration();b.duration(0), b.update(), b.duration(a);
        }var M = d3.select(this);a.utils.initSVG(M), M.classed("nv-chart-" + y, !0);var N = a.utils.availableWidth(p, M, m),
            O = a.utils.availableHeight(q, M, m);if (b.update = function () {
          0 === E ? M.call(b) : M.transition().duration(E).call(b);
        }, b.container = this, z.setter(K(l), b.update).getter(J(l)).update(), z.disabled = l.map(function (a) {
          return !!a.disabled;
        }), !A) {
          var P;A = {};for (P in z) {
            z[P] instanceof Array ? A[P] = z[P].slice(0) : A[P] = z[P];
          }
        }var Q = d3.behavior.drag().on("dragstart", B).on("drag", F).on("dragend", I);if (!(l && l.length && l.filter(function (a) {
          return a.values.length;
        }).length)) return a.utils.noData(b, M), b;if (M.selectAll(".nv-noData").remove(), d = f.xScale(), e = f.yScale(), x) f.yDomain(null);else {
          var R = l.filter(function (a) {
            return !a.disabled;
          }).map(function (a, b) {
            var c = d3.extent(a.values, f.y());return c[0] < -.95 && (c[0] = -.95), [(c[0] - c[1]) / (1 + c[1]), (c[1] - c[0]) / (1 + c[0])];
          }),
              S = [d3.min(R, function (a) {
            return a[0];
          }), d3.max(R, function (a) {
            return a[1];
          })];f.yDomain(S);
        }G.domain([0, l[0].values.length - 1]).range([0, N]).clamp(!0);var l = c(H.i, l),
            T = w ? "none" : "all",
            U = M.selectAll("g.nv-wrap.nv-cumulativeLine").data([l]),
            V = U.enter().append("g").attr("class", "nvd3 nv-wrap nv-cumulativeLine").append("g"),
            W = U.select("g");if (V.append("g").attr("class", "nv-interactive"), V.append("g").attr("class", "nv-x nv-axis").style("pointer-events", "none"), V.append("g").attr("class", "nv-y nv-axis"), V.append("g").attr("class", "nv-background"), V.append("g").attr("class", "nv-linesWrap").style("pointer-events", T), V.append("g").attr("class", "nv-avgLinesWrap").style("pointer-events", "none"), V.append("g").attr("class", "nv-legendWrap"), V.append("g").attr("class", "nv-controlsWrap"), r ? (i.width(N), W.select(".nv-legendWrap").datum(l).call(i), n || i.height() === m.top || (m.top = i.height(), O = a.utils.availableHeight(q, M, m)), W.select(".nv-legendWrap").attr("transform", "translate(0," + -m.top + ")")) : W.select(".nv-legendWrap").selectAll("*").remove(), v) {
          var X = [{ key: "Re-scale y-axis", disabled: !x }];j.width(140).color(["#444", "#444", "#444"]).rightAlign(!1).margin({ top: 5, right: 0, bottom: 5, left: 20 }), W.select(".nv-controlsWrap").datum(X).attr("transform", "translate(0," + -m.top + ")").call(j);
        } else W.select(".nv-controlsWrap").selectAll("*").remove();U.attr("transform", "translate(" + m.left + "," + m.top + ")"), u && W.select(".nv-y.nv-axis").attr("transform", "translate(" + N + ",0)");var Y = l.filter(function (a) {
          return a.tempDisabled;
        });U.select(".tempDisabled").remove(), Y.length && U.append("text").attr("class", "tempDisabled").attr("x", N / 2).attr("y", "-.71em").style("text-anchor", "end").text(Y.map(function (a) {
          return a.key;
        }).join(", ") + " values cannot be calculated for this time period."), w && (k.width(N).height(O).margin({ left: m.left, top: m.top }).svgContainer(M).xScale(d), U.select(".nv-interactive").call(k)), V.select(".nv-background").append("rect"), W.select(".nv-background rect").attr("width", N).attr("height", O), f.y(function (a) {
          return a.display.y;
        }).width(N).height(O).color(l.map(function (a, b) {
          return a.color || o(a, b);
        }).filter(function (a, b) {
          return !l[b].disabled && !l[b].tempDisabled;
        }));var Z = W.select(".nv-linesWrap").datum(l.filter(function (a) {
          return !a.disabled && !a.tempDisabled;
        }));Z.call(f), l.forEach(function (a, b) {
          a.seriesIndex = b;
        });var $ = l.filter(function (a) {
          return !a.disabled && !!C(a);
        }),
            _ = W.select(".nv-avgLinesWrap").selectAll("line").data($, function (a) {
          return a.key;
        }),
            aa = function aa(a) {
          var b = e(C(a));return 0 > b ? 0 : b > O ? O : b;
        };_.enter().append("line").style("stroke-width", 2).style("stroke-dasharray", "10,10").style("stroke", function (a, b) {
          return f.color()(a, a.seriesIndex);
        }).attr("x1", 0).attr("x2", N).attr("y1", aa).attr("y2", aa), _.style("stroke-opacity", function (a) {
          var b = e(C(a));return 0 > b || b > O ? 0 : 1;
        }).attr("x1", 0).attr("x2", N).attr("y1", aa).attr("y2", aa), _.exit().remove();var ba = Z.selectAll(".nv-indexLine").data([H]);ba.enter().append("rect").attr("class", "nv-indexLine").attr("width", 3).attr("x", -2).attr("fill", "red").attr("fill-opacity", .5).style("pointer-events", "all").call(Q), ba.attr("transform", function (a) {
          return "translate(" + G(a.i) + ",0)";
        }).attr("height", O), s && (g.scale(d)._ticks(a.utils.calcTicksX(N / 70, l)).tickSize(-O, 0), W.select(".nv-x.nv-axis").attr("transform", "translate(0," + e.range()[0] + ")"), W.select(".nv-x.nv-axis").call(g)), t && (h.scale(e)._ticks(a.utils.calcTicksY(O / 36, l)).tickSize(-N, 0), W.select(".nv-y.nv-axis").call(h)), W.select(".nv-background rect").on("click", function () {
          H.x = d3.mouse(this)[0], H.i = Math.round(G.invert(H.x)), z.index = H.i, D.stateChange(z), L();
        }), f.dispatch.on("elementClick", function (a) {
          H.i = a.pointIndex, H.x = G(H.i), z.index = H.i, D.stateChange(z), L();
        }), j.dispatch.on("legendClick", function (a, c) {
          a.disabled = !a.disabled, x = !a.disabled, z.rescaleY = x, D.stateChange(z), b.update();
        }), i.dispatch.on("stateChange", function (a) {
          for (var c in a) {
            z[c] = a[c];
          }D.stateChange(z), b.update();
        }), k.dispatch.on("elementMousemove", function (c) {
          f.clearHighlights();var d,
              e,
              i,
              j = [];if (l.filter(function (a, b) {
            return a.seriesIndex = b, !a.disabled;
          }).forEach(function (g, h) {
            e = a.interactiveBisect(g.values, c.pointXValue, b.x()), f.highlightPoint(h, e, !0);var k = g.values[e];"undefined" != typeof k && ("undefined" == typeof d && (d = k), "undefined" == typeof i && (i = b.xScale()(b.x()(k, e))), j.push({ key: g.key, value: b.y()(k, e), color: o(g, g.seriesIndex) }));
          }), j.length > 2) {
            var m = b.yScale().invert(c.mouseY),
                n = Math.abs(b.yScale().domain()[0] - b.yScale().domain()[1]),
                p = .03 * n,
                q = a.nearestValueIndex(j.map(function (a) {
              return a.value;
            }), m, p);null !== q && (j[q].highlight = !0);
          }var r = g.tickFormat()(b.x()(d, e), e);k.tooltip.valueFormatter(function (a, b) {
            return h.tickFormat()(a);
          }).data({ value: r, series: j })(), k.renderGuideLine(i);
        }), k.dispatch.on("elementMouseout", function (a) {
          f.clearHighlights();
        }), D.on("changeState", function (a) {
          "undefined" != typeof a.disabled && (l.forEach(function (b, c) {
            b.disabled = a.disabled[c];
          }), z.disabled = a.disabled), "undefined" != typeof a.index && (H.i = a.index, H.x = G(H.i), z.index = a.index, ba.data([H])), "undefined" != typeof a.rescaleY && (x = a.rescaleY), b.update();
        });
      }), I.renderEnd("cumulativeLineChart immediate"), b;
    }function c(a, b) {
      return L || (L = f.y()), b.map(function (b, c) {
        if (!b.values) return b;var d = b.values[a];if (null == d) return b;var e = L(d, a);return -.95 > e && !F ? (b.tempDisabled = !0, b) : (b.tempDisabled = !1, b.values = b.values.map(function (a, b) {
          return a.display = { y: (L(a, b) - e) / (1 + e) }, a;
        }), b);
      });
    }var d,
        e,
        f = a.models.line(),
        g = a.models.axis(),
        h = a.models.axis(),
        i = a.models.legend(),
        j = a.models.legend(),
        k = a.interactiveGuideline(),
        l = a.models.tooltip(),
        m = { top: 30, right: 30, bottom: 50, left: 60 },
        n = null,
        o = a.utils.defaultColor(),
        p = null,
        q = null,
        r = !0,
        s = !0,
        t = !0,
        u = !1,
        v = !0,
        w = !1,
        x = !0,
        y = f.id(),
        z = a.utils.state(),
        A = null,
        B = null,
        C = function C(a) {
      return a.average;
    },
        D = d3.dispatch("stateChange", "changeState", "renderEnd"),
        E = 250,
        F = !1;z.index = 0, z.rescaleY = x, g.orient("bottom").tickPadding(7), h.orient(u ? "right" : "left"), l.valueFormatter(function (a, b) {
      return h.tickFormat()(a, b);
    }).headerFormatter(function (a, b) {
      return g.tickFormat()(a, b);
    }), j.updateState(!1);var G = d3.scale.linear(),
        H = { i: 0, x: 0 },
        I = a.utils.renderWatch(D, E),
        J = function J(a) {
      return function () {
        return { active: a.map(function (a) {
            return !a.disabled;
          }), index: H.i, rescaleY: x };
      };
    },
        K = function K(a) {
      return function (b) {
        void 0 !== b.index && (H.i = b.index), void 0 !== b.rescaleY && (x = b.rescaleY), void 0 !== b.active && a.forEach(function (a, c) {
          a.disabled = !b.active[c];
        });
      };
    };f.dispatch.on("elementMouseover.tooltip", function (a) {
      var c = { x: b.x()(a.point), y: b.y()(a.point), color: a.point.color };a.point = c, l.data(a).hidden(!1);
    }), f.dispatch.on("elementMouseout.tooltip", function (a) {
      l.hidden(!0);
    });var L = null;return b.dispatch = D, b.lines = f, b.legend = i, b.controls = j, b.xAxis = g, b.yAxis = h, b.interactiveLayer = k, b.state = z, b.tooltip = l, b.options = a.utils.optionsFunc.bind(b), b._options = Object.create({}, { width: { get: function get() {
          return p;
        }, set: function set(a) {
          p = a;
        } }, height: { get: function get() {
          return q;
        }, set: function set(a) {
          q = a;
        } }, rescaleY: { get: function get() {
          return x;
        }, set: function set(a) {
          x = a;
        } }, showControls: { get: function get() {
          return v;
        }, set: function set(a) {
          v = a;
        } }, showLegend: { get: function get() {
          return r;
        }, set: function set(a) {
          r = a;
        } }, average: { get: function get() {
          return C;
        }, set: function set(a) {
          C = a;
        } }, defaultState: { get: function get() {
          return A;
        }, set: function set(a) {
          A = a;
        } }, noData: { get: function get() {
          return B;
        }, set: function set(a) {
          B = a;
        } }, showXAxis: { get: function get() {
          return s;
        }, set: function set(a) {
          s = a;
        } }, showYAxis: { get: function get() {
          return t;
        }, set: function set(a) {
          t = a;
        } }, noErrorCheck: { get: function get() {
          return F;
        }, set: function set(a) {
          F = a;
        } }, margin: { get: function get() {
          return m;
        }, set: function set(a) {
          void 0 !== a.top && (m.top = a.top, n = a.top), m.right = void 0 !== a.right ? a.right : m.right, m.bottom = void 0 !== a.bottom ? a.bottom : m.bottom, m.left = void 0 !== a.left ? a.left : m.left;
        } }, color: { get: function get() {
          return o;
        }, set: function set(b) {
          o = a.utils.getColor(b), i.color(o);
        } }, useInteractiveGuideline: { get: function get() {
          return w;
        }, set: function set(a) {
          w = a, a === !0 && (b.interactive(!1), b.useVoronoi(!1));
        } }, rightAlignYAxis: { get: function get() {
          return u;
        }, set: function set(a) {
          u = a, h.orient(a ? "right" : "left");
        } }, duration: { get: function get() {
          return E;
        }, set: function set(a) {
          E = a, f.duration(E), g.duration(E), h.duration(E), I.reset(E);
        } } }), a.utils.inheritOptions(b, f), a.utils.initOptions(b), b;
  }, a.models.discreteBar = function () {
    "use strict";
    function b(m) {
      return y.reset(), m.each(function (b) {
        var m = k - j.left - j.right,
            x = l - j.top - j.bottom;c = d3.select(this), a.utils.initSVG(c), b.forEach(function (a, b) {
          a.values.forEach(function (a) {
            a.series = b;
          });
        });var z = d && e ? [] : b.map(function (a) {
          return a.values.map(function (a, b) {
            return { x: p(a, b), y: q(a, b), y0: a.y0 };
          });
        });n.domain(d || d3.merge(z).map(function (a) {
          return a.x;
        })).rangeBands(f || [0, m], .1), o.domain(e || d3.extent(d3.merge(z).map(function (a) {
          return a.y;
        }).concat(r))), t ? o.range(g || [x - (o.domain()[0] < 0 ? 12 : 0), o.domain()[1] > 0 ? 12 : 0]) : o.range(g || [x, 0]), h = h || n, i = i || o.copy().range([o(0), o(0)]);var A = c.selectAll("g.nv-wrap.nv-discretebar").data([b]),
            B = A.enter().append("g").attr("class", "nvd3 nv-wrap nv-discretebar"),
            C = B.append("g");A.select("g");C.append("g").attr("class", "nv-groups"), A.attr("transform", "translate(" + j.left + "," + j.top + ")");var D = A.select(".nv-groups").selectAll(".nv-group").data(function (a) {
          return a;
        }, function (a) {
          return a.key;
        });D.enter().append("g").style("stroke-opacity", 1e-6).style("fill-opacity", 1e-6), D.exit().watchTransition(y, "discreteBar: exit groups").style("stroke-opacity", 1e-6).style("fill-opacity", 1e-6).remove(), D.attr("class", function (a, b) {
          return "nv-group nv-series-" + b;
        }).classed("hover", function (a) {
          return a.hover;
        }), D.watchTransition(y, "discreteBar: groups").style("stroke-opacity", 1).style("fill-opacity", .75);var E = D.selectAll("g.nv-bar").data(function (a) {
          return a.values;
        });E.exit().remove();var F = E.enter().append("g").attr("transform", function (a, b, c) {
          return "translate(" + (n(p(a, b)) + .05 * n.rangeBand()) + ", " + o(0) + ")";
        }).on("mouseover", function (a, b) {
          d3.select(this).classed("hover", !0), v.elementMouseover({ data: a, index: b, color: d3.select(this).style("fill") });
        }).on("mouseout", function (a, b) {
          d3.select(this).classed("hover", !1), v.elementMouseout({ data: a, index: b, color: d3.select(this).style("fill") });
        }).on("mousemove", function (a, b) {
          v.elementMousemove({ data: a, index: b, color: d3.select(this).style("fill") });
        }).on("click", function (a, b) {
          var c = this;v.elementClick({ data: a, index: b, color: d3.select(this).style("fill"), event: d3.event, element: c }), d3.event.stopPropagation();
        }).on("dblclick", function (a, b) {
          v.elementDblClick({ data: a, index: b, color: d3.select(this).style("fill") }), d3.event.stopPropagation();
        });F.append("rect").attr("height", 0).attr("width", .9 * n.rangeBand() / b.length), t ? (F.append("text").attr("text-anchor", "middle"), E.select("text").text(function (a, b) {
          return u(q(a, b));
        }).watchTransition(y, "discreteBar: bars text").attr("x", .9 * n.rangeBand() / 2).attr("y", function (a, b) {
          return q(a, b) < 0 ? o(q(a, b)) - o(0) + 12 : -4;
        })) : E.selectAll("text").remove(), E.attr("class", function (a, b) {
          return q(a, b) < 0 ? "nv-bar negative" : "nv-bar positive";
        }).style("fill", function (a, b) {
          return a.color || s(a, b);
        }).style("stroke", function (a, b) {
          return a.color || s(a, b);
        }).select("rect").attr("class", w).watchTransition(y, "discreteBar: bars rect").attr("width", .9 * n.rangeBand() / b.length), E.watchTransition(y, "discreteBar: bars").attr("transform", function (a, b) {
          var c = n(p(a, b)) + .05 * n.rangeBand(),
              d = q(a, b) < 0 ? o(0) : o(0) - o(q(a, b)) < 1 ? o(0) - 1 : o(q(a, b));return "translate(" + c + ", " + d + ")";
        }).select("rect").attr("height", function (a, b) {
          return Math.max(Math.abs(o(q(a, b)) - o(0)), 1);
        }), h = n.copy(), i = o.copy();
      }), y.renderEnd("discreteBar immediate"), b;
    }var c,
        d,
        e,
        f,
        g,
        h,
        i,
        j = { top: 0, right: 0, bottom: 0, left: 0 },
        k = 960,
        l = 500,
        m = Math.floor(1e4 * Math.random()),
        n = d3.scale.ordinal(),
        o = d3.scale.linear(),
        p = function p(a) {
      return a.x;
    },
        q = function q(a) {
      return a.y;
    },
        r = [0],
        s = a.utils.defaultColor(),
        t = !1,
        u = d3.format(",.2f"),
        v = d3.dispatch("chartClick", "elementClick", "elementDblClick", "elementMouseover", "elementMouseout", "elementMousemove", "renderEnd"),
        w = "discreteBar",
        x = 250,
        y = a.utils.renderWatch(v, x);return b.dispatch = v, b.options = a.utils.optionsFunc.bind(b), b._options = Object.create({}, { width: { get: function get() {
          return k;
        }, set: function set(a) {
          k = a;
        } }, height: { get: function get() {
          return l;
        }, set: function set(a) {
          l = a;
        } }, forceY: { get: function get() {
          return r;
        }, set: function set(a) {
          r = a;
        } }, showValues: { get: function get() {
          return t;
        }, set: function set(a) {
          t = a;
        } }, x: { get: function get() {
          return p;
        }, set: function set(a) {
          p = a;
        } }, y: { get: function get() {
          return q;
        }, set: function set(a) {
          q = a;
        } }, xScale: { get: function get() {
          return n;
        }, set: function set(a) {
          n = a;
        } }, yScale: { get: function get() {
          return o;
        }, set: function set(a) {
          o = a;
        } }, xDomain: { get: function get() {
          return d;
        }, set: function set(a) {
          d = a;
        } }, yDomain: { get: function get() {
          return e;
        }, set: function set(a) {
          e = a;
        } }, xRange: { get: function get() {
          return f;
        }, set: function set(a) {
          f = a;
        } }, yRange: { get: function get() {
          return g;
        }, set: function set(a) {
          g = a;
        } }, valueFormat: { get: function get() {
          return u;
        }, set: function set(a) {
          u = a;
        } }, id: { get: function get() {
          return m;
        }, set: function set(a) {
          m = a;
        } }, rectClass: { get: function get() {
          return w;
        }, set: function set(a) {
          w = a;
        } }, margin: { get: function get() {
          return j;
        }, set: function set(a) {
          j.top = void 0 !== a.top ? a.top : j.top, j.right = void 0 !== a.right ? a.right : j.right, j.bottom = void 0 !== a.bottom ? a.bottom : j.bottom, j.left = void 0 !== a.left ? a.left : j.left;
        } }, color: { get: function get() {
          return s;
        }, set: function set(b) {
          s = a.utils.getColor(b);
        } }, duration: { get: function get() {
          return x;
        }, set: function set(a) {
          x = a, y.reset(x);
        } } }), a.utils.initOptions(b), b;
  }, a.models.discreteBarChart = function () {
    "use strict";
    function b(i) {
      return y.reset(), y.models(e), p && y.models(f), q && y.models(g), i.each(function (i) {
        var n = d3.select(this);a.utils.initSVG(n);var v = a.utils.availableWidth(l, n, j),
            y = a.utils.availableHeight(m, n, j);if (b.update = function () {
          w.beforeUpdate(), n.transition().duration(x).call(b);
        }, b.container = this, !(i && i.length && i.filter(function (a) {
          return a.values.length;
        }).length)) return a.utils.noData(b, n), b;n.selectAll(".nv-noData").remove(), c = e.xScale(), d = e.yScale().clamp(!0);var z = n.selectAll("g.nv-wrap.nv-discreteBarWithAxes").data([i]),
            A = z.enter().append("g").attr("class", "nvd3 nv-wrap nv-discreteBarWithAxes").append("g"),
            B = A.append("defs"),
            C = z.select("g");A.append("g").attr("class", "nv-x nv-axis"), A.append("g").attr("class", "nv-y nv-axis").append("g").attr("class", "nv-zeroLine").append("line"), A.append("g").attr("class", "nv-barsWrap"), A.append("g").attr("class", "nv-legendWrap"), C.attr("transform", "translate(" + j.left + "," + j.top + ")"), o ? (h.width(v), C.select(".nv-legendWrap").datum(i).call(h), k || h.height() === j.top || (j.top = h.height(), y = a.utils.availableHeight(m, n, j)), z.select(".nv-legendWrap").attr("transform", "translate(0," + -j.top + ")")) : C.select(".nv-legendWrap").selectAll("*").remove(), r && C.select(".nv-y.nv-axis").attr("transform", "translate(" + v + ",0)"), e.width(v).height(y);var D = C.select(".nv-barsWrap").datum(i.filter(function (a) {
          return !a.disabled;
        }));if (D.transition().call(e), B.append("clipPath").attr("id", "nv-x-label-clip-" + e.id()).append("rect"), C.select("#nv-x-label-clip-" + e.id() + " rect").attr("width", c.rangeBand() * (s ? 2 : 1)).attr("height", 16).attr("x", -c.rangeBand() / (s ? 1 : 2)), p) {
          f.scale(c)._ticks(a.utils.calcTicksX(v / 100, i)).tickSize(-y, 0), C.select(".nv-x.nv-axis").attr("transform", "translate(0," + (d.range()[0] + (e.showValues() && d.domain()[0] < 0 ? 16 : 0)) + ")"), C.select(".nv-x.nv-axis").call(f);var E = C.select(".nv-x.nv-axis").selectAll("g");s && E.selectAll("text").attr("transform", function (a, b, c) {
            return "translate(0," + (c % 2 == 0 ? "5" : "17") + ")";
          }), u && E.selectAll(".tick text").attr("transform", "rotate(" + u + " 0,0)").style("text-anchor", u > 0 ? "start" : "end"), t && C.selectAll(".tick text").call(a.utils.wrapTicks, b.xAxis.rangeBand());
        }q && (g.scale(d)._ticks(a.utils.calcTicksY(y / 36, i)).tickSize(-v, 0), C.select(".nv-y.nv-axis").call(g)), C.select(".nv-zeroLine line").attr("x1", 0).attr("x2", r ? -v : v).attr("y1", d(0)).attr("y2", d(0));
      }), y.renderEnd("discreteBar chart immediate"), b;
    }var c,
        d,
        e = a.models.discreteBar(),
        f = a.models.axis(),
        g = a.models.axis(),
        h = a.models.legend(),
        i = a.models.tooltip(),
        j = { top: 15, right: 10, bottom: 50, left: 60 },
        k = null,
        l = null,
        m = null,
        n = a.utils.getColor(),
        o = !1,
        p = !0,
        q = !0,
        r = !1,
        s = !1,
        t = !1,
        u = 0,
        v = null,
        w = d3.dispatch("beforeUpdate", "renderEnd"),
        x = 250;f.orient("bottom").showMaxMin(!1).tickFormat(function (a) {
      return a;
    }), g.orient(r ? "right" : "left").tickFormat(d3.format(",.1f")), i.duration(0).headerEnabled(!1).valueFormatter(function (a, b) {
      return g.tickFormat()(a, b);
    }).keyFormatter(function (a, b) {
      return f.tickFormat()(a, b);
    });var y = a.utils.renderWatch(w, x);return e.dispatch.on("elementMouseover.tooltip", function (a) {
      a.series = { key: b.x()(a.data), value: b.y()(a.data), color: a.color }, i.data(a).hidden(!1);
    }), e.dispatch.on("elementMouseout.tooltip", function (a) {
      i.hidden(!0);
    }), e.dispatch.on("elementMousemove.tooltip", function (a) {
      i();
    }), b.dispatch = w, b.discretebar = e, b.legend = h, b.xAxis = f, b.yAxis = g, b.tooltip = i, b.options = a.utils.optionsFunc.bind(b), b._options = Object.create({}, { width: { get: function get() {
          return l;
        }, set: function set(a) {
          l = a;
        } }, height: { get: function get() {
          return m;
        }, set: function set(a) {
          m = a;
        } }, showLegend: { get: function get() {
          return o;
        }, set: function set(a) {
          o = a;
        } }, staggerLabels: { get: function get() {
          return s;
        }, set: function set(a) {
          s = a;
        } }, rotateLabels: { get: function get() {
          return u;
        }, set: function set(a) {
          u = a;
        } }, wrapLabels: { get: function get() {
          return t;
        }, set: function set(a) {
          t = !!a;
        } }, showXAxis: { get: function get() {
          return p;
        }, set: function set(a) {
          p = a;
        } }, showYAxis: { get: function get() {
          return q;
        }, set: function set(a) {
          q = a;
        } }, noData: { get: function get() {
          return v;
        }, set: function set(a) {
          v = a;
        } }, margin: { get: function get() {
          return j;
        }, set: function set(a) {
          void 0 !== a.top && (j.top = a.top, k = a.top), j.right = void 0 !== a.right ? a.right : j.right, j.bottom = void 0 !== a.bottom ? a.bottom : j.bottom, j.left = void 0 !== a.left ? a.left : j.left;
        } }, duration: { get: function get() {
          return x;
        }, set: function set(a) {
          x = a, y.reset(x), e.duration(x), f.duration(x), g.duration(x);
        } }, color: { get: function get() {
          return n;
        }, set: function set(b) {
          n = a.utils.getColor(b), e.color(n), h.color(n);
        } }, rightAlignYAxis: { get: function get() {
          return r;
        }, set: function set(a) {
          r = a, g.orient(a ? "right" : "left");
        } } }), a.utils.inheritOptions(b, e), a.utils.initOptions(b), b;
  }, a.models.distribution = function () {
    "use strict";
    function b(k) {
      return m.reset(), k.each(function (b) {
        var k = (e - ("x" === g ? d.left + d.right : d.top + d.bottom), "x" == g ? "y" : "x"),
            l = d3.select(this);a.utils.initSVG(l), c = c || j;var n = l.selectAll("g.nv-distribution").data([b]),
            o = n.enter().append("g").attr("class", "nvd3 nv-distribution"),
            p = (o.append("g"), n.select("g"));n.attr("transform", "translate(" + d.left + "," + d.top + ")");var q = p.selectAll("g.nv-dist").data(function (a) {
          return a;
        }, function (a) {
          return a.key;
        });q.enter().append("g"), q.attr("class", function (a, b) {
          return "nv-dist nv-series-" + b;
        }).style("stroke", function (a, b) {
          return i(a, b);
        });var r = q.selectAll("line.nv-dist" + g).data(function (a) {
          return a.values;
        });r.enter().append("line").attr(g + "1", function (a, b) {
          return c(h(a, b));
        }).attr(g + "2", function (a, b) {
          return c(h(a, b));
        }), m.transition(q.exit().selectAll("line.nv-dist" + g), "dist exit").attr(g + "1", function (a, b) {
          return j(h(a, b));
        }).attr(g + "2", function (a, b) {
          return j(h(a, b));
        }).style("stroke-opacity", 0).remove(), r.attr("class", function (a, b) {
          return "nv-dist" + g + " nv-dist" + g + "-" + b;
        }).attr(k + "1", 0).attr(k + "2", f), m.transition(r, "dist").attr(g + "1", function (a, b) {
          return j(h(a, b));
        }).attr(g + "2", function (a, b) {
          return j(h(a, b));
        }), c = j.copy();
      }), m.renderEnd("distribution immediate"), b;
    }var c,
        d = { top: 0, right: 0, bottom: 0, left: 0 },
        e = 400,
        f = 8,
        g = "x",
        h = function h(a) {
      return a[g];
    },
        i = a.utils.defaultColor(),
        j = d3.scale.linear(),
        k = 250,
        l = d3.dispatch("renderEnd"),
        m = a.utils.renderWatch(l, k);return b.options = a.utils.optionsFunc.bind(b), b.dispatch = l, b.margin = function (a) {
      return arguments.length ? (d.top = "undefined" != typeof a.top ? a.top : d.top, d.right = "undefined" != typeof a.right ? a.right : d.right, d.bottom = "undefined" != typeof a.bottom ? a.bottom : d.bottom, d.left = "undefined" != typeof a.left ? a.left : d.left, b) : d;
    }, b.width = function (a) {
      return arguments.length ? (e = a, b) : e;
    }, b.axis = function (a) {
      return arguments.length ? (g = a, b) : g;
    }, b.size = function (a) {
      return arguments.length ? (f = a, b) : f;
    }, b.getData = function (a) {
      return arguments.length ? (h = d3.functor(a), b) : h;
    }, b.scale = function (a) {
      return arguments.length ? (j = a, b) : j;
    }, b.color = function (c) {
      return arguments.length ? (i = a.utils.getColor(c), b) : i;
    }, b.duration = function (a) {
      return arguments.length ? (k = a, m.reset(k), b) : k;
    }, b;
  }, a.models.focus = function (b) {
    "use strict";
    function c(u) {
      return t.reset(), t.models(b), m && t.models(f), n && t.models(g), u.each(function (t) {
        function u(a) {
          var b = +("e" == a),
              c = b ? 1 : -1,
              d = z / 3;return "M" + .5 * c + "," + d + "A6,6 0 0 " + b + " " + 6.5 * c + "," + (d + 6) + "V" + (2 * d - 6) + "A6,6 0 0 " + b + " " + .5 * c + "," + 2 * d + "ZM" + 2.5 * c + "," + (d + 8) + "V" + (2 * d - 8) + "M" + 4.5 * c + "," + (d + 8) + "V" + (2 * d - 8);
        }function v() {
          h.empty() || h.extent(p), E.data([h.empty() ? d.domain() : p]).each(function (a, b) {
            var c = d(a[0]) - d.range()[0],
                e = y - d(a[1]);d3.select(this).select(".left").attr("width", 0 > c ? 0 : c), d3.select(this).select(".right").attr("x", d(a[1])).attr("width", 0 > e ? 0 : e);
          });
        }function w(a) {
          p = h.empty() ? null : h.extent();var b = h.empty() ? d.domain() : h.extent();r.brush({ extent: b, brush: h }), v(), a && r.onBrush(b);
        }var x = d3.select(this);a.utils.initSVG(x);var y = a.utils.availableWidth(k, x, i),
            z = l - i.top - i.bottom;c.update = function () {
          0 === q ? x.call(c) : x.transition().duration(q).call(c);
        }, c.container = this, d = b.xScale(), e = b.yScale();var A = x.selectAll("g.nv-focus").data([t]),
            B = A.enter().append("g").attr("class", "nvd3 nv-focus").append("g"),
            C = A.select("g");A.attr("transform", "translate(" + i.left + "," + i.top + ")"), B.append("g").attr("class", "nv-background").append("rect"), B.append("g").attr("class", "nv-x nv-axis"), B.append("g").attr("class", "nv-y nv-axis"), B.append("g").attr("class", "nv-contentWrap"), B.append("g").attr("class", "nv-brushBackground"), B.append("g").attr("class", "nv-x nv-brush"), o && C.select(".nv-y.nv-axis").attr("transform", "translate(" + y + ",0)"), C.select(".nv-background rect").attr("width", y).attr("height", z), b.width(y).height(z).color(t.map(function (a, b) {
          return a.color || j(a, b);
        }).filter(function (a, b) {
          return !t[b].disabled;
        }));var D = C.select(".nv-contentWrap").datum(t.filter(function (a) {
          return !a.disabled;
        }));d3.transition(D).call(b), h.x(d).on("brush", function () {
          w(s);
        }), h.on("brushend", function () {
          s || r.onBrush(h.empty() ? d.domain() : h.extent());
        }), p && h.extent(p);var E = C.select(".nv-brushBackground").selectAll("g").data([p || h.extent()]),
            F = E.enter().append("g");F.append("rect").attr("class", "left").attr("x", 0).attr("y", 0).attr("height", z), F.append("rect").attr("class", "right").attr("x", 0).attr("y", 0).attr("height", z);var G = C.select(".nv-x.nv-brush").call(h);G.selectAll("rect").attr("height", z), G.selectAll(".resize").append("path").attr("d", u), w(!0), C.select(".nv-background rect").attr("width", y).attr("height", z), m && (f.scale(d)._ticks(a.utils.calcTicksX(y / 100, t)).tickSize(-z, 0), C.select(".nv-x.nv-axis").attr("transform", "translate(0," + e.range()[0] + ")"), d3.transition(C.select(".nv-x.nv-axis")).call(f)), n && (g.scale(e)._ticks(a.utils.calcTicksY(z / 36, t)).tickSize(-y, 0), d3.transition(C.select(".nv-y.nv-axis")).call(g)), C.select(".nv-x.nv-axis").attr("transform", "translate(0," + e.range()[0] + ")");
      }), t.renderEnd("focus immediate"), c;
    }var d,
        e,
        b = b || a.models.line(),
        f = a.models.axis(),
        g = a.models.axis(),
        h = d3.svg.brush(),
        i = { top: 10, right: 0, bottom: 30, left: 0 },
        j = a.utils.defaultColor(),
        k = null,
        l = 70,
        m = !0,
        n = !1,
        o = !1,
        p = null,
        q = 250,
        r = d3.dispatch("brush", "onBrush", "renderEnd"),
        s = !0;b.interactive(!1), b.pointActive(function (a) {
      return !1;
    });var t = a.utils.renderWatch(r, q);return c.dispatch = r, c.content = b, c.brush = h, c.xAxis = f, c.yAxis = g, c.options = a.utils.optionsFunc.bind(c), c._options = Object.create({}, { width: { get: function get() {
          return k;
        }, set: function set(a) {
          k = a;
        } }, height: { get: function get() {
          return l;
        }, set: function set(a) {
          l = a;
        } }, showXAxis: { get: function get() {
          return m;
        }, set: function set(a) {
          m = a;
        } }, showYAxis: { get: function get() {
          return n;
        }, set: function set(a) {
          n = a;
        } }, brushExtent: { get: function get() {
          return p;
        }, set: function set(a) {
          p = a;
        } }, syncBrushing: { get: function get() {
          return s;
        }, set: function set(a) {
          s = a;
        } }, margin: { get: function get() {
          return i;
        }, set: function set(a) {
          i.top = void 0 !== a.top ? a.top : i.top, i.right = void 0 !== a.right ? a.right : i.right, i.bottom = void 0 !== a.bottom ? a.bottom : i.bottom, i.left = void 0 !== a.left ? a.left : i.left;
        } }, duration: { get: function get() {
          return q;
        }, set: function set(a) {
          q = a, t.reset(q), b.duration(q), f.duration(q), g.duration(q);
        } }, color: { get: function get() {
          return j;
        }, set: function set(c) {
          j = a.utils.getColor(c), b.color(j);
        } }, interpolate: { get: function get() {
          return b.interpolate();
        }, set: function set(a) {
          b.interpolate(a);
        } }, xTickFormat: { get: function get() {
          return f.tickFormat();
        }, set: function set(a) {
          f.tickFormat(a);
        } }, yTickFormat: { get: function get() {
          return g.tickFormat();
        }, set: function set(a) {
          g.tickFormat(a);
        } }, x: { get: function get() {
          return b.x();
        }, set: function set(a) {
          b.x(a);
        } }, y: { get: function get() {
          return b.y();
        }, set: function set(a) {
          b.y(a);
        } }, rightAlignYAxis: { get: function get() {
          return o;
        }, set: function set(a) {
          o = a, g.orient(o ? "right" : "left");
        } } }), a.utils.inheritOptions(c, b), a.utils.initOptions(c), c;
  }, a.models.forceDirectedGraph = function () {
    "use strict";
    function b(g) {
      return u.reset(), g.each(function (g) {
        f = d3.select(this), a.utils.initSVG(f);var j = a.utils.availableWidth(d, f, c),
            u = a.utils.availableHeight(e, f, c);if (f.attr("width", j).attr("height", u), !(g && g.links && g.nodes)) return a.utils.noData(b, f), b;f.selectAll(".nv-noData").remove(), f.selectAll("*").remove();var v = new Set();g.nodes.forEach(function (a) {
          var b = Object.keys(a);b.forEach(function (a) {
            v.add(a);
          });
        });var w = d3.layout.force().nodes(g.nodes).links(g.links).size([j, u]).linkStrength(k).friction(l).linkDistance(m).charge(n).gravity(o).theta(p).alpha(q).start(),
            x = f.selectAll(".link").data(g.links).enter().append("line").attr("class", "nv-force-link").style("stroke-width", function (a) {
          return Math.sqrt(a.value);
        }),
            y = f.selectAll(".node").data(g.nodes).enter().append("g").attr("class", "nv-force-node").call(w.drag);y.append("circle").attr("r", r).style("fill", function (a) {
          return h(a);
        }).on("mouseover", function (a) {
          f.select(".nv-series-" + a.seriesIndex + " .nv-distx-" + a.pointIndex).attr("y1", a.py), f.select(".nv-series-" + a.seriesIndex + " .nv-disty-" + a.pointIndex).attr("x2", a.px);var b = h(a);a.series = [], v.forEach(function (c) {
            a.series.push({ color: b, key: c, value: a[c] });
          }), i.data(a).hidden(!1);
        }).on("mouseout", function (a) {
          i.hidden(!0);
        }), i.headerFormatter(function (a) {
          return "Node";
        }), t(x), s(y), w.on("tick", function () {
          x.attr("x1", function (a) {
            return a.source.x;
          }).attr("y1", function (a) {
            return a.source.y;
          }).attr("x2", function (a) {
            return a.target.x;
          }).attr("y2", function (a) {
            return a.target.y;
          }), y.attr("transform", function (a) {
            return "translate(" + a.x + ", " + a.y + ")";
          });
        });
      }), b;
    }var c = { top: 2, right: 0, bottom: 2, left: 0 },
        d = 400,
        e = 32,
        f = null,
        g = d3.dispatch("renderEnd"),
        h = a.utils.getColor(["#000"]),
        i = a.models.tooltip(),
        j = null,
        k = .1,
        l = .9,
        m = 30,
        n = -120,
        o = .1,
        p = .8,
        q = .1,
        r = 5,
        s = function s(a) {},
        t = function t(a) {},
        u = a.utils.renderWatch(g);return b.options = a.utils.optionsFunc.bind(b), b._options = Object.create({}, { width: { get: function get() {
          return d;
        }, set: function set(a) {
          d = a;
        } }, height: { get: function get() {
          return e;
        }, set: function set(a) {
          e = a;
        } }, linkStrength: { get: function get() {
          return k;
        }, set: function set(a) {
          k = a;
        } }, friction: { get: function get() {
          return l;
        }, set: function set(a) {
          l = a;
        } }, linkDist: { get: function get() {
          return m;
        }, set: function set(a) {
          m = a;
        } }, charge: { get: function get() {
          return n;
        }, set: function set(a) {
          n = a;
        } }, gravity: { get: function get() {
          return o;
        }, set: function set(a) {
          o = a;
        } }, theta: { get: function get() {
          return p;
        }, set: function set(a) {
          p = a;
        } }, alpha: { get: function get() {
          return q;
        }, set: function set(a) {
          q = a;
        } }, radius: { get: function get() {
          return r;
        }, set: function set(a) {
          r = a;
        } }, x: { get: function get() {
          return getX;
        }, set: function set(a) {
          getX = d3.functor(a);
        } }, y: { get: function get() {
          return getY;
        }, set: function set(a) {
          getY = d3.functor(a);
        } }, margin: { get: function get() {
          return c;
        }, set: function set(a) {
          c.top = void 0 !== a.top ? a.top : c.top, c.right = void 0 !== a.right ? a.right : c.right, c.bottom = void 0 !== a.bottom ? a.bottom : c.bottom, c.left = void 0 !== a.left ? a.left : c.left;
        } }, color: { get: function get() {
          return h;
        }, set: function set(b) {
          h = a.utils.getColor(b);
        } }, noData: { get: function get() {
          return j;
        }, set: function set(a) {
          j = a;
        } }, nodeExtras: { get: function get() {
          return s;
        }, set: function set(a) {
          s = a;
        } }, linkExtras: { get: function get() {
          return t;
        }, set: function set(a) {
          t = a;
        } } }), b.dispatch = g, b.tooltip = i, a.utils.initOptions(b), b;
  }, a.models.furiousLegend = function () {
    "use strict";
    function b(r) {
      function s(a, b) {
        return "furious" != q ? "#000" : o ? a.disengaged ? h(a, b) : "#fff" : o ? void 0 : a.disabled ? h(a, b) : "#fff";
      }function t(a, b) {
        return o && "furious" == q ? a.disengaged ? "#fff" : h(a, b) : a.disabled ? "#fff" : h(a, b);
      }return r.each(function (b) {
        var r = d - c.left - c.right,
            u = d3.select(this);a.utils.initSVG(u);var v = u.selectAll("g.nv-legend").data([b]),
            w = (v.enter().append("g").attr("class", "nvd3 nv-legend").append("g"), v.select("g"));v.attr("transform", "translate(" + c.left + "," + c.top + ")");var x,
            y = w.selectAll(".nv-series").data(function (a) {
          return "furious" != q ? a : a.filter(function (a) {
            return o ? !0 : !a.disengaged;
          });
        }),
            z = y.enter().append("g").attr("class", "nv-series");if ("classic" == q) z.append("circle").style("stroke-width", 2).attr("class", "nv-legend-symbol").attr("r", 5), x = y.select("circle");else if ("furious" == q) {
          z.append("rect").style("stroke-width", 2).attr("class", "nv-legend-symbol").attr("rx", 3).attr("ry", 3), x = y.select("rect"), z.append("g").attr("class", "nv-check-box").property("innerHTML", '<path d="M0.5,5 L22.5,5 L22.5,26.5 L0.5,26.5 L0.5,5 Z" class="nv-box"></path><path d="M5.5,12.8618467 L11.9185089,19.2803556 L31,0.198864511" class="nv-check"></path>').attr("transform", "translate(-10,-8)scale(0.5)");var A = y.select(".nv-check-box");A.each(function (a, b) {
            d3.select(this).selectAll("path").attr("stroke", s(a, b));
          });
        }z.append("text").attr("text-anchor", "start").attr("class", "nv-legend-text").attr("dy", ".32em").attr("dx", "8");var B = y.select("text.nv-legend-text");y.on("mouseover", function (a, b) {
          p.legendMouseover(a, b);
        }).on("mouseout", function (a, b) {
          p.legendMouseout(a, b);
        }).on("click", function (a, b) {
          p.legendClick(a, b);var c = y.data();if (m) {
            if ("classic" == q) n ? (c.forEach(function (a) {
              a.disabled = !0;
            }), a.disabled = !1) : (a.disabled = !a.disabled, c.every(function (a) {
              return a.disabled;
            }) && c.forEach(function (a) {
              a.disabled = !1;
            }));else if ("furious" == q) if (o) a.disengaged = !a.disengaged, a.userDisabled = void 0 == a.userDisabled ? !!a.disabled : a.userDisabled, a.disabled = a.disengaged || a.userDisabled;else if (!o) {
              a.disabled = !a.disabled, a.userDisabled = a.disabled;var d = c.filter(function (a) {
                return !a.disengaged;
              });d.every(function (a) {
                return a.userDisabled;
              }) && c.forEach(function (a) {
                a.disabled = a.userDisabled = !1;
              });
            }p.stateChange({ disabled: c.map(function (a) {
                return !!a.disabled;
              }), disengaged: c.map(function (a) {
                return !!a.disengaged;
              }) });
          }
        }).on("dblclick", function (a, b) {
          if (("furious" != q || !o) && (p.legendDblclick(a, b), m)) {
            var c = y.data();c.forEach(function (a) {
              a.disabled = !0, "furious" == q && (a.userDisabled = a.disabled);
            }), a.disabled = !1, "furious" == q && (a.userDisabled = a.disabled), p.stateChange({ disabled: c.map(function (a) {
                return !!a.disabled;
              }) });
          }
        }), y.classed("nv-disabled", function (a) {
          return a.userDisabled;
        }), y.exit().remove(), B.attr("fill", s).text(function (a) {
          return g(f(a));
        });var C;switch (q) {case "furious":
            C = 23;break;case "classic":
            C = 20;}if (j) {
          var D = [];y.each(function (b, c) {
            var d;if (g(f(b)) && g(f(b)).length > i) {
              var e = g(f(b)).substring(0, i);d = d3.select(this).select("text").text(e + "..."), d3.select(this).append("svg:title").text(g(f(b)));
            } else d = d3.select(this).select("text");var h;try {
              if (h = d.node().getComputedTextLength(), 0 >= h) throw Error();
            } catch (j) {
              h = a.utils.calcApproxTextWidth(d);
            }D.push(h + k);
          });for (var E = 0, F = 0, G = []; r > F && E < D.length;) {
            G[E] = D[E], F += D[E++];
          }for (0 === E && (E = 1); F > r && E > 1;) {
            G = [], E--;for (var H = 0; H < D.length; H++) {
              D[H] > (G[H % E] || 0) && (G[H % E] = D[H]);
            }F = G.reduce(function (a, b, c, d) {
              return a + b;
            });
          }for (var I = [], J = 0, K = 0; E > J; J++) {
            I[J] = K, K += G[J];
          }y.attr("transform", function (a, b) {
            return "translate(" + I[b % E] + "," + (5 + Math.floor(b / E) * C) + ")";
          }), l ? w.attr("transform", "translate(" + (d - c.right - F) + "," + c.top + ")") : w.attr("transform", "translate(0," + c.top + ")"), e = c.top + c.bottom + Math.ceil(D.length / E) * C;
        } else {
          var L,
              M = 5,
              N = 5,
              O = 0;y.attr("transform", function (a, b) {
            var e = d3.select(this).select("text").node().getComputedTextLength() + k;return L = N, d < c.left + c.right + L + e && (N = L = 5, M += C), N += e, N > O && (O = N), "translate(" + L + "," + M + ")";
          }), w.attr("transform", "translate(" + (d - c.right - O) + "," + c.top + ")"), e = c.top + c.bottom + M + 15;
        }"furious" == q && x.attr("width", function (a, b) {
          return B[0][b].getComputedTextLength() + 27;
        }).attr("height", 18).attr("y", -9).attr("x", -15), x.style("fill", t).style("stroke", function (a, b) {
          return a.color || h(a, b);
        });
      }), b;
    }var c = { top: 5, right: 0, bottom: 5, left: 0 },
        d = 400,
        e = 20,
        f = function f(a) {
      return a.key;
    },
        g = function g(a) {
      return a;
    },
        h = a.utils.getColor(),
        i = 20,
        j = !0,
        k = 28,
        l = !0,
        m = !0,
        n = !1,
        o = !1,
        p = d3.dispatch("legendClick", "legendDblclick", "legendMouseover", "legendMouseout", "stateChange"),
        q = "classic";return b.dispatch = p, b.options = a.utils.optionsFunc.bind(b), b._options = Object.create({}, { width: { get: function get() {
          return d;
        }, set: function set(a) {
          d = a;
        } }, height: { get: function get() {
          return e;
        }, set: function set(a) {
          e = a;
        } }, key: { get: function get() {
          return f;
        }, set: function set(a) {
          f = a;
        } }, keyFormatter: { get: function get() {
          return g;
        }, set: function set(a) {
          g = a;
        } }, align: { get: function get() {
          return j;
        }, set: function set(a) {
          j = a;
        } }, rightAlign: { get: function get() {
          return l;
        }, set: function set(a) {
          l = a;
        } }, maxKeyLength: { get: function get() {
          return i;
        }, set: function set(a) {
          i = a;
        } }, padding: { get: function get() {
          return k;
        }, set: function set(a) {
          k = a;
        } }, updateState: { get: function get() {
          return m;
        }, set: function set(a) {
          m = a;
        } }, radioButtonMode: { get: function get() {
          return n;
        }, set: function set(a) {
          n = a;
        } }, expanded: { get: function get() {
          return o;
        }, set: function set(a) {
          o = a;
        } }, vers: { get: function get() {
          return q;
        }, set: function set(a) {
          q = a;
        } }, margin: { get: function get() {
          return c;
        }, set: function set(a) {
          c.top = void 0 !== a.top ? a.top : c.top, c.right = void 0 !== a.right ? a.right : c.right, c.bottom = void 0 !== a.bottom ? a.bottom : c.bottom, c.left = void 0 !== a.left ? a.left : c.left;
        } }, color: { get: function get() {
          return h;
        }, set: function set(b) {
          h = a.utils.getColor(b);
        } } }), a.utils.initOptions(b), b;
  }, a.models.historicalBar = function () {
    "use strict";
    function b(x) {
      return x.each(function (b) {
        w.reset(), k = d3.select(this);var x = a.utils.availableWidth(h, k, g),
            y = a.utils.availableHeight(i, k, g);a.utils.initSVG(k), l.domain(c || d3.extent(b[0].values.map(n).concat(p))), r ? l.range(e || [.5 * x / b[0].values.length, x * (b[0].values.length - .5) / b[0].values.length]) : l.range(e || [0, x]), m.domain(d || d3.extent(b[0].values.map(o).concat(q))).range(f || [y, 0]), l.domain()[0] === l.domain()[1] && (l.domain()[0] ? l.domain([l.domain()[0] - .01 * l.domain()[0], l.domain()[1] + .01 * l.domain()[1]]) : l.domain([-1, 1])), m.domain()[0] === m.domain()[1] && (m.domain()[0] ? m.domain([m.domain()[0] + .01 * m.domain()[0], m.domain()[1] - .01 * m.domain()[1]]) : m.domain([-1, 1]));var z = k.selectAll("g.nv-wrap.nv-historicalBar-" + j).data([b[0].values]),
            A = z.enter().append("g").attr("class", "nvd3 nv-wrap nv-historicalBar-" + j),
            B = A.append("defs"),
            C = A.append("g"),
            D = z.select("g");C.append("g").attr("class", "nv-bars"), z.attr("transform", "translate(" + g.left + "," + g.top + ")"), k.on("click", function (a, b) {
          u.chartClick({ data: a, index: b, pos: d3.event, id: j });
        }), B.append("clipPath").attr("id", "nv-chart-clip-path-" + j).append("rect"), z.select("#nv-chart-clip-path-" + j + " rect").attr("width", x).attr("height", y), D.attr("clip-path", s ? "url(#nv-chart-clip-path-" + j + ")" : "");var E = z.select(".nv-bars").selectAll(".nv-bar").data(function (a) {
          return a;
        }, function (a, b) {
          return n(a, b);
        });E.exit().remove(), E.enter().append("rect").attr("x", 0).attr("y", function (b, c) {
          return a.utils.NaNtoZero(m(Math.max(0, o(b, c))));
        }).attr("height", function (b, c) {
          return a.utils.NaNtoZero(Math.abs(m(o(b, c)) - m(0)));
        }).attr("transform", function (a, c) {
          return "translate(" + (l(n(a, c)) - x / b[0].values.length * .45) + ",0)";
        }).on("mouseover", function (a, b) {
          v && (d3.select(this).classed("hover", !0), u.elementMouseover({ data: a, index: b, color: d3.select(this).style("fill") }));
        }).on("mouseout", function (a, b) {
          v && (d3.select(this).classed("hover", !1), u.elementMouseout({ data: a, index: b, color: d3.select(this).style("fill") }));
        }).on("mousemove", function (a, b) {
          v && u.elementMousemove({ data: a, index: b, color: d3.select(this).style("fill") });
        }).on("click", function (a, b) {
          if (v) {
            var c = this;u.elementClick({ data: a, index: b, color: d3.select(this).style("fill"), event: d3.event, element: c }), d3.event.stopPropagation();
          }
        }).on("dblclick", function (a, b) {
          v && (u.elementDblClick({ data: a, index: b, color: d3.select(this).style("fill") }), d3.event.stopPropagation());
        }), E.attr("fill", function (a, b) {
          return t(a, b);
        }).attr("class", function (a, b, c) {
          return (o(a, b) < 0 ? "nv-bar negative" : "nv-bar positive") + " nv-bar-" + c + "-" + b;
        }).watchTransition(w, "bars").attr("transform", function (a, c) {
          return "translate(" + (l(n(a, c)) - x / b[0].values.length * .45) + ",0)";
        }).attr("width", x / b[0].values.length * .9), E.watchTransition(w, "bars").attr("y", function (b, c) {
          var d = o(b, c) < 0 ? m(0) : m(0) - m(o(b, c)) < 1 ? m(0) - 1 : m(o(b, c));return a.utils.NaNtoZero(d);
        }).attr("height", function (b, c) {
          return a.utils.NaNtoZero(Math.max(Math.abs(m(o(b, c)) - m(0)), 1));
        });
      }), w.renderEnd("historicalBar immediate"), b;
    }var c,
        d,
        e,
        f,
        g = { top: 0, right: 0, bottom: 0, left: 0 },
        h = null,
        i = null,
        j = Math.floor(1e4 * Math.random()),
        k = null,
        l = d3.scale.linear(),
        m = d3.scale.linear(),
        n = function n(a) {
      return a.x;
    },
        o = function o(a) {
      return a.y;
    },
        p = [],
        q = [0],
        r = !1,
        s = !0,
        t = a.utils.defaultColor(),
        u = d3.dispatch("chartClick", "elementClick", "elementDblClick", "elementMouseover", "elementMouseout", "elementMousemove", "renderEnd"),
        v = !0,
        w = a.utils.renderWatch(u, 0);return b.highlightPoint = function (a, b) {
      k.select(".nv-bars .nv-bar-0-" + a).classed("hover", b);
    }, b.clearHighlights = function () {
      k.select(".nv-bars .nv-bar.hover").classed("hover", !1);
    }, b.dispatch = u, b.options = a.utils.optionsFunc.bind(b), b._options = Object.create({}, { width: { get: function get() {
          return h;
        }, set: function set(a) {
          h = a;
        } }, height: { get: function get() {
          return i;
        }, set: function set(a) {
          i = a;
        } }, forceX: { get: function get() {
          return p;
        }, set: function set(a) {
          p = a;
        } }, forceY: { get: function get() {
          return q;
        }, set: function set(a) {
          q = a;
        } }, padData: { get: function get() {
          return r;
        }, set: function set(a) {
          r = a;
        } }, x: { get: function get() {
          return n;
        }, set: function set(a) {
          n = a;
        } }, y: { get: function get() {
          return o;
        }, set: function set(a) {
          o = a;
        } }, xScale: { get: function get() {
          return l;
        }, set: function set(a) {
          l = a;
        } }, yScale: { get: function get() {
          return m;
        }, set: function set(a) {
          m = a;
        } }, xDomain: { get: function get() {
          return c;
        }, set: function set(a) {
          c = a;
        } }, yDomain: { get: function get() {
          return d;
        }, set: function set(a) {
          d = a;
        } }, xRange: { get: function get() {
          return e;
        }, set: function set(a) {
          e = a;
        } }, yRange: { get: function get() {
          return f;
        }, set: function set(a) {
          f = a;
        } }, clipEdge: { get: function get() {
          return s;
        }, set: function set(a) {
          s = a;
        } }, id: { get: function get() {
          return j;
        }, set: function set(a) {
          j = a;
        } }, interactive: { get: function get() {
          return v;
        }, set: function set(a) {
          v = a;
        } }, margin: { get: function get() {
          return g;
        }, set: function set(a) {
          g.top = void 0 !== a.top ? a.top : g.top, g.right = void 0 !== a.right ? a.right : g.right, g.bottom = void 0 !== a.bottom ? a.bottom : g.bottom, g.left = void 0 !== a.left ? a.left : g.left;
        } }, color: { get: function get() {
          return t;
        }, set: function set(b) {
          t = a.utils.getColor(b);
        } } }), a.utils.initOptions(b), b;
  }, a.models.historicalBarChart = function (b) {
    "use strict";
    function c(b) {
      return b.each(function (k) {
        A.reset(), A.models(f), r && A.models(g), s && A.models(h);var x = d3.select(this);a.utils.initSVG(x);var B = a.utils.availableWidth(o, x, l),
            C = a.utils.availableHeight(p, x, l);if (c.update = function () {
          x.transition().duration(z).call(c);
        }, c.container = this, v.disabled = k.map(function (a) {
          return !!a.disabled;
        }), !w) {
          var D;w = {};for (D in v) {
            v[D] instanceof Array ? w[D] = v[D].slice(0) : w[D] = v[D];
          }
        }if (!(k && k.length && k.filter(function (a) {
          return a.values.length;
        }).length)) return a.utils.noData(c, x), c;x.selectAll(".nv-noData").remove(), d = f.xScale(), e = f.yScale();var E = x.selectAll("g.nv-wrap.nv-historicalBarChart").data([k]),
            F = E.enter().append("g").attr("class", "nvd3 nv-wrap nv-historicalBarChart").append("g"),
            G = E.select("g");F.append("g").attr("class", "nv-x nv-axis"), F.append("g").attr("class", "nv-y nv-axis"), F.append("g").attr("class", "nv-barsWrap"), F.append("g").attr("class", "nv-legendWrap"), F.append("g").attr("class", "nv-interactive"), q ? (i.width(B), G.select(".nv-legendWrap").datum(k).call(i), m || i.height() === l.top || (l.top = i.height(), C = a.utils.availableHeight(p, x, l)), E.select(".nv-legendWrap").attr("transform", "translate(0," + -l.top + ")")) : G.select(".nv-legendWrap").selectAll("*").remove(), E.attr("transform", "translate(" + l.left + "," + l.top + ")"), t && G.select(".nv-y.nv-axis").attr("transform", "translate(" + B + ",0)"), u && (j.width(B).height(C).margin({ left: l.left, top: l.top }).svgContainer(x).xScale(d), E.select(".nv-interactive").call(j)), f.width(B).height(C).color(k.map(function (a, b) {
          return a.color || n(a, b);
        }).filter(function (a, b) {
          return !k[b].disabled;
        }));var H = G.select(".nv-barsWrap").datum(k.filter(function (a) {
          return !a.disabled;
        }));H.transition().call(f), r && (g.scale(d)._ticks(a.utils.calcTicksX(B / 100, k)).tickSize(-C, 0), G.select(".nv-x.nv-axis").attr("transform", "translate(0," + e.range()[0] + ")"), G.select(".nv-x.nv-axis").transition().call(g)), s && (h.scale(e)._ticks(a.utils.calcTicksY(C / 36, k)).tickSize(-B, 0), G.select(".nv-y.nv-axis").transition().call(h)), j.dispatch.on("elementMousemove", function (b) {
          f.clearHighlights();var d,
              e,
              i,
              l = [];k.filter(function (a, b) {
            return a.seriesIndex = b, !a.disabled;
          }).forEach(function (g, h) {
            e = a.interactiveBisect(g.values, b.pointXValue, c.x()), f.highlightPoint(e, !0);var j = g.values[e];void 0 !== j && (void 0 === d && (d = j), void 0 === i && (i = c.xScale()(c.x()(j, e))), l.push({ key: g.key, value: c.y()(j, e), color: n(g, g.seriesIndex), data: g.values[e] }));
          });var m = g.tickFormat()(c.x()(d, e));j.tooltip.valueFormatter(function (a, b) {
            return h.tickFormat()(a);
          }).data({ value: m, index: e, series: l })(), j.renderGuideLine(i);
        }), j.dispatch.on("elementMouseout", function (a) {
          y.tooltipHide(), f.clearHighlights();
        }), i.dispatch.on("legendClick", function (a, d) {
          a.disabled = !a.disabled, k.filter(function (a) {
            return !a.disabled;
          }).length || k.map(function (a) {
            return a.disabled = !1, E.selectAll(".nv-series").classed("disabled", !1), a;
          }), v.disabled = k.map(function (a) {
            return !!a.disabled;
          }), y.stateChange(v), b.transition().call(c);
        }), i.dispatch.on("legendDblclick", function (a) {
          k.forEach(function (a) {
            a.disabled = !0;
          }), a.disabled = !1, v.disabled = k.map(function (a) {
            return !!a.disabled;
          }), y.stateChange(v), c.update();
        }), y.on("changeState", function (a) {
          "undefined" != typeof a.disabled && (k.forEach(function (b, c) {
            b.disabled = a.disabled[c];
          }), v.disabled = a.disabled), c.update();
        });
      }), A.renderEnd("historicalBarChart immediate"), c;
    }var d,
        e,
        f = b || a.models.historicalBar(),
        g = a.models.axis(),
        h = a.models.axis(),
        i = a.models.legend(),
        j = a.interactiveGuideline(),
        k = a.models.tooltip(),
        l = { top: 30, right: 90, bottom: 50, left: 90 },
        m = null,
        n = a.utils.defaultColor(),
        o = null,
        p = null,
        q = !1,
        r = !0,
        s = !0,
        t = !1,
        u = !1,
        v = {},
        w = null,
        x = null,
        y = d3.dispatch("tooltipHide", "stateChange", "changeState", "renderEnd"),
        z = 250;g.orient("bottom").tickPadding(7), h.orient(t ? "right" : "left"), k.duration(0).headerEnabled(!1).valueFormatter(function (a, b) {
      return h.tickFormat()(a, b);
    }).headerFormatter(function (a, b) {
      return g.tickFormat()(a, b);
    });var A = a.utils.renderWatch(y, 0);return f.dispatch.on("elementMouseover.tooltip", function (a) {
      a.series = { key: c.x()(a.data), value: c.y()(a.data), color: a.color }, k.data(a).hidden(!1);
    }), f.dispatch.on("elementMouseout.tooltip", function (a) {
      k.hidden(!0);
    }), f.dispatch.on("elementMousemove.tooltip", function (a) {
      k();
    }), c.dispatch = y, c.bars = f, c.legend = i, c.xAxis = g, c.yAxis = h, c.interactiveLayer = j, c.tooltip = k, c.options = a.utils.optionsFunc.bind(c), c._options = Object.create({}, { width: { get: function get() {
          return o;
        }, set: function set(a) {
          o = a;
        } }, height: { get: function get() {
          return p;
        }, set: function set(a) {
          p = a;
        } }, showLegend: { get: function get() {
          return q;
        }, set: function set(a) {
          q = a;
        } }, showXAxis: { get: function get() {
          return r;
        }, set: function set(a) {
          r = a;
        } }, showYAxis: { get: function get() {
          return s;
        }, set: function set(a) {
          s = a;
        } }, defaultState: { get: function get() {
          return w;
        }, set: function set(a) {
          w = a;
        } }, noData: { get: function get() {
          return x;
        }, set: function set(a) {
          x = a;
        } }, margin: { get: function get() {
          return l;
        }, set: function set(a) {
          void 0 !== a.top && (l.top = a.top, m = a.top), l.right = void 0 !== a.right ? a.right : l.right, l.bottom = void 0 !== a.bottom ? a.bottom : l.bottom, l.left = void 0 !== a.left ? a.left : l.left;
        } }, color: { get: function get() {
          return n;
        }, set: function set(b) {
          n = a.utils.getColor(b), i.color(n), f.color(n);
        } }, duration: { get: function get() {
          return z;
        }, set: function set(a) {
          z = a, A.reset(z), h.duration(z), g.duration(z);
        } }, rightAlignYAxis: { get: function get() {
          return t;
        }, set: function set(a) {
          t = a, h.orient(a ? "right" : "left");
        } }, useInteractiveGuideline: { get: function get() {
          return u;
        }, set: function set(a) {
          u = a, a === !0 && c.interactive(!1);
        } } }), a.utils.inheritOptions(c, f), a.utils.initOptions(c), c;
  }, a.models.ohlcBarChart = function () {
    var b = a.models.historicalBarChart(a.models.ohlcBar());return b.useInteractiveGuideline(!0), b.interactiveLayer.tooltip.contentGenerator(function (a) {
      var c = a.series[0].data,
          d = c.open < c.close ? "2ca02c" : "d62728";return '<h3 style="color: #' + d + '">' + a.value + "</h3><table><tr><td>open:</td><td>" + b.yAxis.tickFormat()(c.open) + "</td></tr><tr><td>close:</td><td>" + b.yAxis.tickFormat()(c.close) + "</td></tr><tr><td>high</td><td>" + b.yAxis.tickFormat()(c.high) + "</td></tr><tr><td>low:</td><td>" + b.yAxis.tickFormat()(c.low) + "</td></tr></table>";
    }), b;
  }, a.models.candlestickBarChart = function () {
    var b = a.models.historicalBarChart(a.models.candlestickBar());return b.useInteractiveGuideline(!0), b.interactiveLayer.tooltip.contentGenerator(function (a) {
      var c = a.series[0].data,
          d = c.open < c.close ? "2ca02c" : "d62728";return '<h3 style="color: #' + d + '">' + a.value + "</h3><table><tr><td>open:</td><td>" + b.yAxis.tickFormat()(c.open) + "</td></tr><tr><td>close:</td><td>" + b.yAxis.tickFormat()(c.close) + "</td></tr><tr><td>high</td><td>" + b.yAxis.tickFormat()(c.high) + "</td></tr><tr><td>low:</td><td>" + b.yAxis.tickFormat()(c.low) + "</td></tr></table>";
    }), b;
  }, a.models.legend = function () {
    "use strict";
    function b(r) {
      function s(a, b) {
        return "furious" != q ? "#000" : o ? a.disengaged ? "#000" : "#fff" : o ? void 0 : (a.color || (a.color = h(a, b)), a.disabled ? a.color : "#fff");
      }function t(a, b) {
        return o && "furious" == q && a.disengaged ? "#eee" : a.color || h(a, b);
      }function u(a, b) {
        return o && "furious" == q ? 1 : a.disabled ? 0 : 1;
      }return r.each(function (b) {
        var h = d - c.left - c.right,
            r = d3.select(this);a.utils.initSVG(r);var v = r.selectAll("g.nv-legend").data([b]),
            w = v.enter().append("g").attr("class", "nvd3 nv-legend").append("g"),
            x = v.select("g");l ? v.attr("transform", "translate(" + -c.right + "," + c.top + ")") : v.attr("transform", "translate(" + c.left + "," + c.top + ")");var y,
            z,
            A = x.selectAll(".nv-series").data(function (a) {
          return "furious" != q ? a : a.filter(function (a) {
            return o ? !0 : !a.disengaged;
          });
        }),
            B = A.enter().append("g").attr("class", "nv-series");switch (q) {case "furious":
            z = 23;break;case "classic":
            z = 20;}if ("classic" == q) B.append("circle").style("stroke-width", 2).attr("class", "nv-legend-symbol").attr("r", 5), y = A.select(".nv-legend-symbol");else if ("furious" == q) {
          B.append("rect").style("stroke-width", 2).attr("class", "nv-legend-symbol").attr("rx", 3).attr("ry", 3), y = A.select(".nv-legend-symbol"), B.append("g").attr("class", "nv-check-box").property("innerHTML", '<path d="M0.5,5 L22.5,5 L22.5,26.5 L0.5,26.5 L0.5,5 Z" class="nv-box"></path><path d="M5.5,12.8618467 L11.9185089,19.2803556 L31,0.198864511" class="nv-check"></path>').attr("transform", "translate(-10,-8)scale(0.5)");var C = A.select(".nv-check-box");C.each(function (a, b) {
            d3.select(this).selectAll("path").attr("stroke", s(a, b));
          });
        }B.append("text").attr("text-anchor", "start").attr("class", "nv-legend-text").attr("dy", ".32em").attr("dx", "8");var D = A.select("text.nv-legend-text");A.on("mouseover", function (a, b) {
          p.legendMouseover(a, b);
        }).on("mouseout", function (a, b) {
          p.legendMouseout(a, b);
        }).on("click", function (a, b) {
          p.legendClick(a, b);var c = A.data();if (m) {
            if ("classic" == q) n ? (c.forEach(function (a) {
              a.disabled = !0;
            }), a.disabled = !1) : (a.disabled = !a.disabled, c.every(function (a) {
              return a.disabled;
            }) && c.forEach(function (a) {
              a.disabled = !1;
            }));else if ("furious" == q) if (o) a.disengaged = !a.disengaged, a.userDisabled = void 0 == a.userDisabled ? !!a.disabled : a.userDisabled, a.disabled = a.disengaged || a.userDisabled;else if (!o) {
              a.disabled = !a.disabled, a.userDisabled = a.disabled;var d = c.filter(function (a) {
                return !a.disengaged;
              });d.every(function (a) {
                return a.userDisabled;
              }) && c.forEach(function (a) {
                a.disabled = a.userDisabled = !1;
              });
            }p.stateChange({ disabled: c.map(function (a) {
                return !!a.disabled;
              }), disengaged: c.map(function (a) {
                return !!a.disengaged;
              }) });
          }
        }).on("dblclick", function (a, b) {
          if (("furious" != q || !o) && (p.legendDblclick(a, b), m)) {
            var c = A.data();c.forEach(function (a) {
              a.disabled = !0, "furious" == q && (a.userDisabled = a.disabled);
            }), a.disabled = !1, "furious" == q && (a.userDisabled = a.disabled), p.stateChange({ disabled: c.map(function (a) {
                return !!a.disabled;
              }) });
          }
        }), A.classed("nv-disabled", function (a) {
          return a.userDisabled;
        }), A.exit().remove(), D.attr("fill", s).text(function (a) {
          return g(f(a));
        });var E = 0;if (j) {
          var F = [];A.each(function (b, c) {
            var d;if (g(f(b)) && g(f(b)).length > i) {
              var e = g(f(b)).substring(0, i);d = d3.select(this).select("text").text(e + "..."), d3.select(this).append("svg:title").text(g(f(b)));
            } else d = d3.select(this).select("text");var h;try {
              if (h = d.node().getComputedTextLength(), 0 >= h) throw Error();
            } catch (j) {
              h = a.utils.calcApproxTextWidth(d);
            }F.push(h + k);
          });var G = 0,
              H = [];for (E = 0; h > E && G < F.length;) {
            H[G] = F[G], E += F[G++];
          }for (0 === G && (G = 1); E > h && G > 1;) {
            H = [], G--;for (var I = 0; I < F.length; I++) {
              F[I] > (H[I % G] || 0) && (H[I % G] = F[I]);
            }E = H.reduce(function (a, b, c, d) {
              return a + b;
            });
          }for (var J = [], K = 0, L = 0; G > K; K++) {
            J[K] = L, L += H[K];
          }A.attr("transform", function (a, b) {
            return "translate(" + J[b % G] + "," + (5 + Math.floor(b / G) * z) + ")";
          }), l ? x.attr("transform", "translate(" + (d - c.right - E) + "," + c.top + ")") : x.attr("transform", "translate(0," + c.top + ")"), e = c.top + c.bottom + Math.ceil(F.length / G) * z;
        } else {
          var M,
              N = 5,
              O = 5,
              P = 0;A.attr("transform", function (a, b) {
            var e = d3.select(this).select("text").node().getComputedTextLength() + k;return M = O, d < c.left + c.right + M + e && (O = M = 5, N += z), O += e, O > P && (P = O), M + P > E && (E = M + P), "translate(" + M + "," + N + ")";
          }), x.attr("transform", "translate(" + (d - c.right - P) + "," + c.top + ")"), e = c.top + c.bottom + N + 15;
        }if ("furious" == q) {
          y.attr("width", function (a, b) {
            return D[0][b].getComputedTextLength() + 27;
          }).attr("height", 18).attr("y", -9).attr("x", -15), w.insert("rect", ":first-child").attr("class", "nv-legend-bg").attr("fill", "#eee").attr("opacity", 0);var Q = x.select(".nv-legend-bg");Q.transition().duration(300).attr("x", -z).attr("width", E + z - 12).attr("height", e + 10).attr("y", -c.top - 10).attr("opacity", o ? 1 : 0);
        }y.style("fill", t).style("fill-opacity", u).style("stroke", t);
      }), b;
    }var c = { top: 5, right: 0, bottom: 5, left: 0 },
        d = 400,
        e = 20,
        f = function f(a) {
      return a.key;
    },
        g = function g(a) {
      return a;
    },
        h = a.utils.getColor(),
        i = 20,
        j = !0,
        k = 32,
        l = !0,
        m = !0,
        n = !1,
        o = !1,
        p = d3.dispatch("legendClick", "legendDblclick", "legendMouseover", "legendMouseout", "stateChange"),
        q = "classic";return b.dispatch = p, b.options = a.utils.optionsFunc.bind(b), b._options = Object.create({}, { width: { get: function get() {
          return d;
        }, set: function set(a) {
          d = a;
        } }, height: { get: function get() {
          return e;
        }, set: function set(a) {
          e = a;
        } }, key: { get: function get() {
          return f;
        }, set: function set(a) {
          f = a;
        } }, keyFormatter: { get: function get() {
          return g;
        }, set: function set(a) {
          g = a;
        } }, align: { get: function get() {
          return j;
        }, set: function set(a) {
          j = a;
        } }, maxKeyLength: { get: function get() {
          return i;
        }, set: function set(a) {
          i = a;
        } }, rightAlign: { get: function get() {
          return l;
        }, set: function set(a) {
          l = a;
        } }, padding: { get: function get() {
          return k;
        }, set: function set(a) {
          k = a;
        } }, updateState: { get: function get() {
          return m;
        }, set: function set(a) {
          m = a;
        } }, radioButtonMode: { get: function get() {
          return n;
        }, set: function set(a) {
          n = a;
        } }, expanded: { get: function get() {
          return o;
        }, set: function set(a) {
          o = a;
        } }, vers: { get: function get() {
          return q;
        }, set: function set(a) {
          q = a;
        } }, margin: { get: function get() {
          return c;
        }, set: function set(a) {
          c.top = void 0 !== a.top ? a.top : c.top, c.right = void 0 !== a.right ? a.right : c.right, c.bottom = void 0 !== a.bottom ? a.bottom : c.bottom, c.left = void 0 !== a.left ? a.left : c.left;
        } }, color: { get: function get() {
          return h;
        }, set: function set(b) {
          h = a.utils.getColor(b);
        } } }), a.utils.initOptions(b), b;
  }, a.models.line = function () {
    "use strict";
    function b(r) {
      return v.reset(), v.models(e), r.each(function (b) {
        i = d3.select(this);var r = a.utils.availableWidth(g, i, f),
            s = a.utils.availableHeight(h, i, f);a.utils.initSVG(i), c = e.xScale(), d = e.yScale(), t = t || c, u = u || d;var w = i.selectAll("g.nv-wrap.nv-line").data([b]),
            x = w.enter().append("g").attr("class", "nvd3 nv-wrap nv-line"),
            y = x.append("defs"),
            z = x.append("g"),
            A = w.select("g");z.append("g").attr("class", "nv-groups"), z.append("g").attr("class", "nv-scatterWrap"), w.attr("transform", "translate(" + f.left + "," + f.top + ")"), e.width(r).height(s);var B = w.select(".nv-scatterWrap");B.call(e), y.append("clipPath").attr("id", "nv-edge-clip-" + e.id()).append("rect"), w.select("#nv-edge-clip-" + e.id() + " rect").attr("width", r).attr("height", s > 0 ? s : 0), A.attr("clip-path", p ? "url(#nv-edge-clip-" + e.id() + ")" : ""), B.attr("clip-path", p ? "url(#nv-edge-clip-" + e.id() + ")" : "");var C = w.select(".nv-groups").selectAll(".nv-group").data(function (a) {
          return a;
        }, function (a) {
          return a.key;
        });C.enter().append("g").style("stroke-opacity", 1e-6).style("stroke-width", function (a) {
          return a.strokeWidth || j;
        }).style("fill-opacity", 1e-6), C.exit().remove(), C.attr("class", function (a, b) {
          return (a.classed || "") + " nv-group nv-series-" + b;
        }).classed("hover", function (a) {
          return a.hover;
        }).style("fill", function (a, b) {
          return k(a, b);
        }).style("stroke", function (a, b) {
          return k(a, b);
        }), C.watchTransition(v, "line: groups").style("stroke-opacity", 1).style("fill-opacity", function (a) {
          return a.fillOpacity || .5;
        });var D = C.selectAll("path.nv-area").data(function (a) {
          return o(a) ? [a] : [];
        });D.enter().append("path").attr("class", "nv-area").attr("d", function (b) {
          return d3.svg.area().interpolate(q).defined(n).x(function (b, c) {
            return a.utils.NaNtoZero(t(l(b, c)));
          }).y0(function (b, c) {
            return a.utils.NaNtoZero(u(m(b, c)));
          }).y1(function (a, b) {
            return u(d.domain()[0] <= 0 ? d.domain()[1] >= 0 ? 0 : d.domain()[1] : d.domain()[0]);
          }).apply(this, [b.values]);
        }), C.exit().selectAll("path.nv-area").remove(), D.watchTransition(v, "line: areaPaths").attr("d", function (b) {
          return d3.svg.area().interpolate(q).defined(n).x(function (b, d) {
            return a.utils.NaNtoZero(c(l(b, d)));
          }).y0(function (b, c) {
            return a.utils.NaNtoZero(d(m(b, c)));
          }).y1(function (a, b) {
            return d(d.domain()[0] <= 0 ? d.domain()[1] >= 0 ? 0 : d.domain()[1] : d.domain()[0]);
          }).apply(this, [b.values]);
        });var E = C.selectAll("path.nv-line").data(function (a) {
          return [a.values];
        });E.enter().append("path").attr("class", "nv-line").attr("d", d3.svg.line().interpolate(q).defined(n).x(function (b, c) {
          return a.utils.NaNtoZero(t(l(b, c)));
        }).y(function (b, c) {
          return a.utils.NaNtoZero(u(m(b, c)));
        })), E.watchTransition(v, "line: linePaths").attr("d", d3.svg.line().interpolate(q).defined(n).x(function (b, d) {
          return a.utils.NaNtoZero(c(l(b, d)));
        }).y(function (b, c) {
          return a.utils.NaNtoZero(d(m(b, c)));
        })), t = c.copy(), u = d.copy();
      }), v.renderEnd("line immediate"), b;
    }var c,
        d,
        e = a.models.scatter(),
        f = { top: 0, right: 0, bottom: 0, left: 0 },
        g = 960,
        h = 500,
        i = null,
        j = 1.5,
        k = a.utils.defaultColor(),
        l = function l(a) {
      return a.x;
    },
        m = function m(a) {
      return a.y;
    },
        n = function n(a, b) {
      return !isNaN(m(a, b)) && null !== m(a, b);
    },
        o = function o(a) {
      return a.area;
    },
        p = !1,
        q = "linear",
        r = 250,
        s = d3.dispatch("elementClick", "elementMouseover", "elementMouseout", "renderEnd");e.pointSize(16).pointDomain([16, 256]);var t,
        u,
        v = a.utils.renderWatch(s, r);return b.dispatch = s, b.scatter = e, e.dispatch.on("elementClick", function () {
      s.elementClick.apply(this, arguments);
    }), e.dispatch.on("elementMouseover", function () {
      s.elementMouseover.apply(this, arguments);
    }), e.dispatch.on("elementMouseout", function () {
      s.elementMouseout.apply(this, arguments);
    }), b.options = a.utils.optionsFunc.bind(b), b._options = Object.create({}, { width: { get: function get() {
          return g;
        }, set: function set(a) {
          g = a;
        } }, height: { get: function get() {
          return h;
        }, set: function set(a) {
          h = a;
        } }, defined: { get: function get() {
          return n;
        }, set: function set(a) {
          n = a;
        } }, interpolate: { get: function get() {
          return q;
        }, set: function set(a) {
          q = a;
        } }, clipEdge: { get: function get() {
          return p;
        }, set: function set(a) {
          p = a;
        } }, margin: { get: function get() {
          return f;
        }, set: function set(a) {
          f.top = void 0 !== a.top ? a.top : f.top, f.right = void 0 !== a.right ? a.right : f.right, f.bottom = void 0 !== a.bottom ? a.bottom : f.bottom, f.left = void 0 !== a.left ? a.left : f.left;
        } }, duration: { get: function get() {
          return r;
        }, set: function set(a) {
          r = a, v.reset(r), e.duration(r);
        } }, isArea: { get: function get() {
          return o;
        }, set: function set(a) {
          o = d3.functor(a);
        } }, x: { get: function get() {
          return l;
        }, set: function set(a) {
          l = a, e.x(a);
        } }, y: { get: function get() {
          return m;
        }, set: function set(a) {
          m = a, e.y(a);
        } }, color: { get: function get() {
          return k;
        }, set: function set(b) {
          k = a.utils.getColor(b), e.color(k);
        } } }), a.utils.inheritOptions(b, e), a.utils.initOptions(b), b;
  }, a.models.lineChart = function () {
    "use strict";
    function b(j) {
      return C.reset(), C.models(e), s && C.models(f), t && C.models(g), j.each(function (j) {
        function z() {
          s && M.select(".nv-focus .nv-x.nv-axis").transition().duration(B).call(f);
        }function C() {
          t && M.select(".nv-focus .nv-y.nv-axis").transition().duration(B).call(g);
        }function F(a) {
          var b = M.select(".nv-focus .nv-linesWrap").datum(j.filter(function (a) {
            return !a.disabled;
          }).map(function (b, c) {
            return { key: b.key, area: b.area, classed: b.classed, values: b.values.filter(function (b, c) {
                return e.x()(b, c) >= a[0] && e.x()(b, c) <= a[1];
              }), disableTooltip: b.disableTooltip };
          }));b.transition().duration(B).call(e), z(), C();
        }var G = d3.select(this);a.utils.initSVG(G);var H = a.utils.availableWidth(o, G, l),
            I = a.utils.availableHeight(p, G, l) - (w ? k.height() : 0);if (b.update = function () {
          0 === B ? G.call(b) : G.transition().duration(B).call(b);
        }, b.container = this, x.setter(E(j), b.update).getter(D(j)).update(), x.disabled = j.map(function (a) {
          return !!a.disabled;
        }), !y) {
          var J;y = {};for (J in x) {
            x[J] instanceof Array ? y[J] = x[J].slice(0) : y[J] = x[J];
          }
        }if (!(j && j.length && j.filter(function (a) {
          return a.values.length;
        }).length)) return a.utils.noData(b, G), b;G.selectAll(".nv-noData").remove(), k.dispatch.on("onBrush", function (a) {
          F(a);
        }), c = e.xScale(), d = e.yScale();var K = G.selectAll("g.nv-wrap.nv-lineChart").data([j]),
            L = K.enter().append("g").attr("class", "nvd3 nv-wrap nv-lineChart").append("g"),
            M = K.select("g");L.append("g").attr("class", "nv-legendWrap");var N = L.append("g").attr("class", "nv-focus");N.append("g").attr("class", "nv-background").append("rect"), N.append("g").attr("class", "nv-x nv-axis"), N.append("g").attr("class", "nv-y nv-axis"), N.append("g").attr("class", "nv-linesWrap"), N.append("g").attr("class", "nv-interactive");L.append("g").attr("class", "nv-focusWrap");q ? (h.width(H), M.select(".nv-legendWrap").datum(j).call(h), "bottom" === r ? K.select(".nv-legendWrap").attr("transform", "translate(0," + I + ")") : "top" === r && (m || h.height() === l.top || (l.top = h.height(), I = a.utils.availableHeight(p, G, l) - (w ? k.height() : 0)), K.select(".nv-legendWrap").attr("transform", "translate(0," + -l.top + ")"))) : M.select(".nv-legendWrap").selectAll("*").remove(), K.attr("transform", "translate(" + l.left + "," + l.top + ")"), u && M.select(".nv-y.nv-axis").attr("transform", "translate(" + H + ",0)"), v && (i.width(H).height(I).margin({ left: l.left, top: l.top }).svgContainer(G).xScale(c), K.select(".nv-interactive").call(i)), M.select(".nv-focus .nv-background rect").attr("width", H).attr("height", I), e.width(H).height(I).color(j.map(function (a, b) {
          return a.color || n(a, b);
        }).filter(function (a, b) {
          return !j[b].disabled;
        }));var O = M.select(".nv-linesWrap").datum(j.filter(function (a) {
          return !a.disabled;
        }));if (s && f.scale(c)._ticks(a.utils.calcTicksX(H / 100, j)).tickSize(-I, 0), t && g.scale(d)._ticks(a.utils.calcTicksY(I / 36, j)).tickSize(-H, 0), M.select(".nv-focus .nv-x.nv-axis").attr("transform", "translate(0," + I + ")"), w) {
          k.width(H), M.select(".nv-focusWrap").attr("transform", "translate(0," + (I + l.bottom + k.margin().top) + ")").datum(j.filter(function (a) {
            return !a.disabled;
          })).call(k);var P = k.brush.empty() ? k.xDomain() : k.brush.extent();null !== P && F(P);
        } else O.call(e), z(), C();h.dispatch.on("stateChange", function (a) {
          for (var c in a) {
            x[c] = a[c];
          }A.stateChange(x), b.update();
        }), i.dispatch.on("elementMousemove", function (d) {
          e.clearHighlights();var f,
              h,
              l,
              m = [];if (j.filter(function (a, b) {
            return a.seriesIndex = b, !a.disabled && !a.disableTooltip;
          }).forEach(function (g, i) {
            var j = w ? k.brush.empty() ? k.xScale().domain() : k.brush.extent() : c.domain(),
                o = g.values.filter(function (a, b) {
              return j[0] <= j[1] ? e.x()(a, b) >= j[0] && e.x()(a, b) <= j[1] : e.x()(a, b) >= j[1] && e.x()(a, b) <= j[0];
            });h = a.interactiveBisect(o, d.pointXValue, e.x());var p = o[h],
                q = b.y()(p, h);null !== q && e.highlightPoint(i, h, !0), void 0 !== p && (void 0 === f && (f = p), void 0 === l && (l = b.xScale()(b.x()(p, h))), m.push({ key: g.key, value: q, color: n(g, g.seriesIndex), data: p }));
          }), m.length > 2) {
            var o = b.yScale().invert(d.mouseY),
                p = Math.abs(b.yScale().domain()[0] - b.yScale().domain()[1]),
                q = .03 * p,
                r = a.nearestValueIndex(m.map(function (a) {
              return a.value;
            }), o, q);null !== r && (m[r].highlight = !0);
          }var s = function s(a, b) {
            return null == a ? "N/A" : g.tickFormat()(a);
          };i.tooltip.valueFormatter(i.tooltip.valueFormatter() || s).data({ value: b.x()(f, h), index: h, series: m })(), i.renderGuideLine(l);
        }), i.dispatch.on("elementClick", function (c) {
          var d,
              f = [];j.filter(function (a, b) {
            return a.seriesIndex = b, !a.disabled;
          }).forEach(function (e) {
            var g = a.interactiveBisect(e.values, c.pointXValue, b.x()),
                h = e.values[g];if ("undefined" != typeof h) {
              "undefined" == typeof d && (d = b.xScale()(b.x()(h, g)));var i = b.yScale()(b.y()(h, g));f.push({ point: h, pointIndex: g, pos: [d, i], seriesIndex: e.seriesIndex, series: e });
            }
          }), e.dispatch.elementClick(f);
        }), i.dispatch.on("elementMouseout", function (a) {
          e.clearHighlights();
        }), A.on("changeState", function (a) {
          "undefined" != typeof a.disabled && j.length === a.disabled.length && (j.forEach(function (b, c) {
            b.disabled = a.disabled[c];
          }), x.disabled = a.disabled), b.update();
        });
      }), C.renderEnd("lineChart immediate"), b;
    }var c,
        d,
        e = a.models.line(),
        f = a.models.axis(),
        g = a.models.axis(),
        h = a.models.legend(),
        i = a.interactiveGuideline(),
        j = a.models.tooltip(),
        k = a.models.focus(a.models.line()),
        l = { top: 30, right: 20, bottom: 50, left: 60 },
        m = null,
        n = a.utils.defaultColor(),
        o = null,
        p = null,
        q = !0,
        r = "top",
        s = !0,
        t = !0,
        u = !1,
        v = !1,
        w = !1,
        x = a.utils.state(),
        y = null,
        z = null,
        A = d3.dispatch("tooltipShow", "tooltipHide", "stateChange", "changeState", "renderEnd"),
        B = 250;f.orient("bottom").tickPadding(7), g.orient(u ? "right" : "left"), e.clipEdge(!0).duration(0), j.valueFormatter(function (a, b) {
      return g.tickFormat()(a, b);
    }).headerFormatter(function (a, b) {
      return f.tickFormat()(a, b);
    }), i.tooltip.valueFormatter(function (a, b) {
      return g.tickFormat()(a, b);
    }).headerFormatter(function (a, b) {
      return f.tickFormat()(a, b);
    });var C = a.utils.renderWatch(A, B),
        D = function D(a) {
      return function () {
        return { active: a.map(function (a) {
            return !a.disabled;
          }) };
      };
    },
        E = function E(a) {
      return function (b) {
        void 0 !== b.active && a.forEach(function (a, c) {
          a.disabled = !b.active[c];
        });
      };
    };return e.dispatch.on("elementMouseover.tooltip", function (a) {
      a.series.disableTooltip || j.data(a).hidden(!1);
    }), e.dispatch.on("elementMouseout.tooltip", function (a) {
      j.hidden(!0);
    }), b.dispatch = A, b.lines = e, b.legend = h, b.focus = k, b.xAxis = f, b.x2Axis = k.xAxis, b.yAxis = g, b.y2Axis = k.yAxis, b.interactiveLayer = i, b.tooltip = j, b.state = x, b.dispatch = A, b.options = a.utils.optionsFunc.bind(b), b._options = Object.create({}, { width: { get: function get() {
          return o;
        }, set: function set(a) {
          o = a;
        } }, height: { get: function get() {
          return p;
        }, set: function set(a) {
          p = a;
        } }, showLegend: { get: function get() {
          return q;
        }, set: function set(a) {
          q = a;
        } }, legendPosition: { get: function get() {
          return r;
        }, set: function set(a) {
          r = a;
        } }, showXAxis: { get: function get() {
          return s;
        }, set: function set(a) {
          s = a;
        } }, showYAxis: { get: function get() {
          return t;
        }, set: function set(a) {
          t = a;
        } }, defaultState: { get: function get() {
          return y;
        }, set: function set(a) {
          y = a;
        } }, noData: { get: function get() {
          return z;
        }, set: function set(a) {
          z = a;
        } }, focusEnable: { get: function get() {
          return w;
        }, set: function set(a) {
          w = a;
        } }, focusHeight: { get: function get() {
          return k.height();
        }, set: function set(a) {
          k.height(a);
        } }, focusShowAxisX: { get: function get() {
          return k.showXAxis();
        }, set: function set(a) {
          k.showXAxis(a);
        } }, focusShowAxisY: { get: function get() {
          return k.showYAxis();
        }, set: function set(a) {
          k.showYAxis(a);
        } }, brushExtent: { get: function get() {
          return k.brushExtent();
        }, set: function set(a) {
          k.brushExtent(a);
        } }, focusMargin: { get: function get() {
          return k.margin;
        }, set: function set(a) {
          void 0 !== a.top && (l.top = a.top, m = a.top), k.margin.right = void 0 !== a.right ? a.right : k.margin.right, k.margin.bottom = void 0 !== a.bottom ? a.bottom : k.margin.bottom, k.margin.left = void 0 !== a.left ? a.left : k.margin.left;
        } }, margin: { get: function get() {
          return l;
        }, set: function set(a) {
          l.top = void 0 !== a.top ? a.top : l.top, l.right = void 0 !== a.right ? a.right : l.right, l.bottom = void 0 !== a.bottom ? a.bottom : l.bottom, l.left = void 0 !== a.left ? a.left : l.left;
        } }, duration: { get: function get() {
          return B;
        }, set: function set(a) {
          B = a, C.reset(B), e.duration(B), k.duration(B), f.duration(B), g.duration(B);
        } }, color: { get: function get() {
          return n;
        }, set: function set(b) {
          n = a.utils.getColor(b), h.color(n), e.color(n), k.color(n);
        } }, interpolate: { get: function get() {
          return e.interpolate();
        }, set: function set(a) {
          e.interpolate(a), k.interpolate(a);
        } }, xTickFormat: { get: function get() {
          return f.tickFormat();
        }, set: function set(a) {
          f.tickFormat(a), k.xTickFormat(a);
        } }, yTickFormat: { get: function get() {
          return g.tickFormat();
        }, set: function set(a) {
          g.tickFormat(a), k.yTickFormat(a);
        } }, x: { get: function get() {
          return e.x();
        }, set: function set(a) {
          e.x(a), k.x(a);
        } }, y: { get: function get() {
          return e.y();
        }, set: function set(a) {
          e.y(a), k.y(a);
        } }, rightAlignYAxis: { get: function get() {
          return u;
        }, set: function set(a) {
          u = a, g.orient(u ? "right" : "left");
        } }, useInteractiveGuideline: { get: function get() {
          return v;
        }, set: function set(a) {
          v = a, v && (e.interactive(!1), e.useVoronoi(!1));
        } } }), a.utils.inheritOptions(b, e), a.utils.initOptions(b), b;
  }, a.models.lineWithFocusChart = function () {
    return a.models.lineChart().margin({ bottom: 30 }).focusEnable(!0);
  }, a.models.linePlusBarChart = function () {
    "use strict";
    function b(v) {
      return v.each(function (v) {
        function K(a) {
          var b = +("e" == a),
              c = b ? 1 : -1,
              d = $ / 3;return "M" + .5 * c + "," + d + "A6,6 0 0 " + b + " " + 6.5 * c + "," + (d + 6) + "V" + (2 * d - 6) + "A6,6 0 0 " + b + " " + .5 * c + "," + 2 * d + "ZM" + 2.5 * c + "," + (d + 8) + "V" + (2 * d - 8) + "M" + 4.5 * c + "," + (d + 8) + "V" + (2 * d - 8);
        }function S() {
          u.empty() || u.extent(J), na.data([u.empty() ? e.domain() : J]).each(function (a, b) {
            var c = e(a[0]) - e.range()[0],
                d = e.range()[1] - e(a[1]);d3.select(this).select(".left").attr("width", 0 > c ? 0 : c), d3.select(this).select(".right").attr("x", e(a[1])).attr("width", 0 > d ? 0 : d);
          });
        }function T() {
          J = u.empty() ? null : u.extent(), c = u.empty() ? e.domain() : u.extent(), L.brush({ extent: c, brush: u }), S(), l.width(Y).height(Z).color(v.map(function (a, b) {
            return a.color || D(a, b);
          }).filter(function (a, b) {
            return !v[b].disabled && v[b].bar;
          })), j.width(Y).height(Z).color(v.map(function (a, b) {
            return a.color || D(a, b);
          }).filter(function (a, b) {
            return !v[b].disabled && !v[b].bar;
          }));var b = ga.select(".nv-focus .nv-barsWrap").datum(aa.length ? aa.map(function (a, b) {
            return { key: a.key, values: a.values.filter(function (a, b) {
                return l.x()(a, b) >= c[0] && l.x()(a, b) <= c[1];
              }) };
          }) : [{ values: [] }]),
              h = ga.select(".nv-focus .nv-linesWrap").datum(W(ba) ? [{ values: [] }] : ba.filter(function (a) {
            return !a.disabled;
          }).map(function (a, b) {
            return { area: a.area, fillOpacity: a.fillOpacity, strokeWidth: a.strokeWidth, key: a.key, values: a.values.filter(function (a, b) {
                return j.x()(a, b) >= c[0] && j.x()(a, b) <= c[1];
              }) };
          }));d = aa.length && !R ? l.xScale() : j.xScale(), n.scale(d)._ticks(a.utils.calcTicksX(Y / 100, v)).tickSize(-Z, 0), n.domain([Math.ceil(c[0]), Math.floor(c[1])]), ga.select(".nv-x.nv-axis").transition().duration(M).call(n), b.transition().duration(M).call(l), h.transition().duration(M).call(j), ga.select(".nv-focus .nv-x.nv-axis").attr("transform", "translate(0," + f.range()[0] + ")"), p.scale(f)._ticks(a.utils.calcTicksY(Z / 36, v)).tickSize(-Y, 0), q.scale(g)._ticks(a.utils.calcTicksY(Z / 36, v)), R ? q.tickSize(ba.length ? 0 : -Y, 0) : q.tickSize(aa.length ? 0 : -Y, 0);var i = aa.length ? 1 : 0,
              k = ba.length && !W(ba) ? 1 : 0,
              m = R ? k : i,
              o = R ? i : k;ga.select(".nv-focus .nv-y1.nv-axis").style("opacity", m), ga.select(".nv-focus .nv-y2.nv-axis").style("opacity", o).attr("transform", "translate(" + d.range()[1] + ",0)"), ga.select(".nv-focus .nv-y1.nv-axis").transition().duration(M).call(p), ga.select(".nv-focus .nv-y2.nv-axis").transition().duration(M).call(q);
        }var X = d3.select(this);a.utils.initSVG(X);var Y = a.utils.availableWidth(z, X, w),
            Z = a.utils.availableHeight(A, X, w) - (F ? I : 0),
            $ = I - y.top - y.bottom;if (b.update = function () {
          X.transition().duration(M).call(b);
        }, b.container = this, N.setter(V(v), b.update).getter(U(v)).update(), N.disabled = v.map(function (a) {
          return !!a.disabled;
        }), !O) {
          var _;O = {};for (_ in N) {
            N[_] instanceof Array ? O[_] = N[_].slice(0) : O[_] = N[_];
          }
        }if (!(v && v.length && v.filter(function (a) {
          return a.values.length;
        }).length)) return a.utils.noData(b, X), b;X.selectAll(".nv-noData").remove();var aa = v.filter(function (a) {
          return !a.disabled && a.bar;
        }),
            ba = v.filter(function (a) {
          return !a.bar;
        });d = aa.length && !R ? l.xScale() : j.xScale(), e = o.scale(), f = R ? j.yScale() : l.yScale(), g = R ? l.yScale() : j.yScale(), h = R ? k.yScale() : m.yScale(), i = R ? m.yScale() : k.yScale();var ca = v.filter(function (a) {
          return !a.disabled && (R ? !a.bar : a.bar);
        }).map(function (a) {
          return a.values.map(function (a, b) {
            return { x: B(a, b), y: C(a, b) };
          });
        }),
            da = v.filter(function (a) {
          return !a.disabled && (R ? a.bar : !a.bar);
        }).map(function (a) {
          return a.values.map(function (a, b) {
            return { x: B(a, b), y: C(a, b) };
          });
        });d.range([0, Y]), e.domain(d3.extent(d3.merge(ca.concat(da)), function (a) {
          return a.x;
        })).range([0, Y]);var ea = X.selectAll("g.nv-wrap.nv-linePlusBar").data([v]),
            fa = ea.enter().append("g").attr("class", "nvd3 nv-wrap nv-linePlusBar").append("g"),
            ga = ea.select("g");fa.append("g").attr("class", "nv-legendWrap");var ha = fa.append("g").attr("class", "nv-focus");ha.append("g").attr("class", "nv-x nv-axis"), ha.append("g").attr("class", "nv-y1 nv-axis"), ha.append("g").attr("class", "nv-y2 nv-axis"), ha.append("g").attr("class", "nv-barsWrap"), ha.append("g").attr("class", "nv-linesWrap");var ia = fa.append("g").attr("class", "nv-context");if (ia.append("g").attr("class", "nv-x nv-axis"), ia.append("g").attr("class", "nv-y1 nv-axis"), ia.append("g").attr("class", "nv-y2 nv-axis"), ia.append("g").attr("class", "nv-barsWrap"), ia.append("g").attr("class", "nv-linesWrap"), ia.append("g").attr("class", "nv-brushBackground"), ia.append("g").attr("class", "nv-x nv-brush"), E) {
          var ja = t.align() ? Y / 2 : Y,
              ka = t.align() ? ja : 0;t.width(ja), ga.select(".nv-legendWrap").datum(v.map(function (a) {
            return a.originalKey = void 0 === a.originalKey ? a.key : a.originalKey, R ? a.key = a.originalKey + (a.bar ? Q : P) : a.key = a.originalKey + (a.bar ? P : Q), a;
          })).call(t), x || t.height() === w.top || (w.top = t.height(), Z = a.utils.availableHeight(A, X, w) - I), ga.select(".nv-legendWrap").attr("transform", "translate(" + ka + "," + -w.top + ")");
        } else ga.select(".nv-legendWrap").selectAll("*").remove();ea.attr("transform", "translate(" + w.left + "," + w.top + ")"), ga.select(".nv-context").style("display", F ? "initial" : "none"), m.width(Y).height($).color(v.map(function (a, b) {
          return a.color || D(a, b);
        }).filter(function (a, b) {
          return !v[b].disabled && v[b].bar;
        })), k.width(Y).height($).color(v.map(function (a, b) {
          return a.color || D(a, b);
        }).filter(function (a, b) {
          return !v[b].disabled && !v[b].bar;
        }));var la = ga.select(".nv-context .nv-barsWrap").datum(aa.length ? aa : [{ values: [] }]),
            ma = ga.select(".nv-context .nv-linesWrap").datum(W(ba) ? [{ values: [] }] : ba.filter(function (a) {
          return !a.disabled;
        }));ga.select(".nv-context").attr("transform", "translate(0," + (Z + w.bottom + y.top) + ")"), la.transition().call(m), ma.transition().call(k), H && (o._ticks(a.utils.calcTicksX(Y / 100, v)).tickSize(-$, 0), ga.select(".nv-context .nv-x.nv-axis").attr("transform", "translate(0," + h.range()[0] + ")"), ga.select(".nv-context .nv-x.nv-axis").transition().call(o)), G && (r.scale(h)._ticks($ / 36).tickSize(-Y, 0), s.scale(i)._ticks($ / 36).tickSize(aa.length ? 0 : -Y, 0), ga.select(".nv-context .nv-y3.nv-axis").style("opacity", aa.length ? 1 : 0).attr("transform", "translate(0," + e.range()[0] + ")"), ga.select(".nv-context .nv-y2.nv-axis").style("opacity", ba.length ? 1 : 0).attr("transform", "translate(" + e.range()[1] + ",0)"), ga.select(".nv-context .nv-y1.nv-axis").transition().call(r), ga.select(".nv-context .nv-y2.nv-axis").transition().call(s)), u.x(e).on("brush", T), J && u.extent(J);var na = ga.select(".nv-brushBackground").selectAll("g").data([J || u.extent()]),
            oa = na.enter().append("g");oa.append("rect").attr("class", "left").attr("x", 0).attr("y", 0).attr("height", $), oa.append("rect").attr("class", "right").attr("x", 0).attr("y", 0).attr("height", $);var pa = ga.select(".nv-x.nv-brush").call(u);pa.selectAll("rect").attr("height", $), pa.selectAll(".resize").append("path").attr("d", K), t.dispatch.on("stateChange", function (a) {
          for (var c in a) {
            N[c] = a[c];
          }L.stateChange(N), b.update();
        }), L.on("changeState", function (a) {
          "undefined" != typeof a.disabled && (v.forEach(function (b, c) {
            b.disabled = a.disabled[c];
          }), N.disabled = a.disabled), b.update();
        }), T();
      }), b;
    }var c,
        d,
        e,
        f,
        g,
        h,
        i,
        j = a.models.line(),
        k = a.models.line(),
        l = a.models.historicalBar(),
        m = a.models.historicalBar(),
        n = a.models.axis(),
        o = a.models.axis(),
        p = a.models.axis(),
        q = a.models.axis(),
        r = a.models.axis(),
        s = a.models.axis(),
        t = a.models.legend(),
        u = d3.svg.brush(),
        v = a.models.tooltip(),
        w = { top: 30, right: 30, bottom: 30, left: 60 },
        x = null,
        y = { top: 0, right: 30, bottom: 20, left: 60 },
        z = null,
        A = null,
        B = function B(a) {
      return a.x;
    },
        C = function C(a) {
      return a.y;
    },
        D = a.utils.defaultColor(),
        E = !0,
        F = !0,
        G = !1,
        H = !0,
        I = 50,
        J = null,
        K = null,
        L = d3.dispatch("brush", "stateChange", "changeState"),
        M = 0,
        N = a.utils.state(),
        O = null,
        P = " (left axis)",
        Q = " (right axis)",
        R = !1;j.clipEdge(!0), k.interactive(!1), k.pointActive(function (a) {
      return !1;
    }), n.orient("bottom").tickPadding(5), p.orient("left"), q.orient("right"), o.orient("bottom").tickPadding(5), r.orient("left"), s.orient("right"), v.headerEnabled(!0).headerFormatter(function (a, b) {
      return n.tickFormat()(a, b);
    });var S = function S() {
      return R ? { main: q, focus: s } : { main: p, focus: r };
    },
        T = function T() {
      return R ? { main: p, focus: r } : { main: q, focus: s };
    },
        U = function U(a) {
      return function () {
        return { active: a.map(function (a) {
            return !a.disabled;
          }) };
      };
    },
        V = function V(a) {
      return function (b) {
        void 0 !== b.active && a.forEach(function (a, c) {
          a.disabled = !b.active[c];
        });
      };
    },
        W = function W(a) {
      return a.every(function (a) {
        return a.disabled;
      });
    };return j.dispatch.on("elementMouseover.tooltip", function (a) {
      v.duration(100).valueFormatter(function (a, b) {
        return T().main.tickFormat()(a, b);
      }).data(a).hidden(!1);
    }), j.dispatch.on("elementMouseout.tooltip", function (a) {
      v.hidden(!0);
    }), l.dispatch.on("elementMouseover.tooltip", function (a) {
      a.value = b.x()(a.data), a.series = { value: b.y()(a.data), color: a.color }, v.duration(0).valueFormatter(function (a, b) {
        return S().main.tickFormat()(a, b);
      }).data(a).hidden(!1);
    }), l.dispatch.on("elementMouseout.tooltip", function (a) {
      v.hidden(!0);
    }), l.dispatch.on("elementMousemove.tooltip", function (a) {
      v();
    }), b.dispatch = L, b.legend = t, b.lines = j, b.lines2 = k, b.bars = l, b.bars2 = m, b.xAxis = n, b.x2Axis = o, b.y1Axis = p, b.y2Axis = q, b.y3Axis = r, b.y4Axis = s, b.tooltip = v, b.options = a.utils.optionsFunc.bind(b), b._options = Object.create({}, { width: { get: function get() {
          return z;
        }, set: function set(a) {
          z = a;
        } }, height: { get: function get() {
          return A;
        }, set: function set(a) {
          A = a;
        } }, showLegend: { get: function get() {
          return E;
        }, set: function set(a) {
          E = a;
        } }, brushExtent: { get: function get() {
          return J;
        }, set: function set(a) {
          J = a;
        } }, noData: { get: function get() {
          return K;
        }, set: function set(a) {
          K = a;
        } }, focusEnable: { get: function get() {
          return F;
        }, set: function set(a) {
          F = a;
        } }, focusHeight: { get: function get() {
          return I;
        }, set: function set(a) {
          I = a;
        } }, focusShowAxisX: { get: function get() {
          return H;
        }, set: function set(a) {
          H = a;
        } }, focusShowAxisY: { get: function get() {
          return G;
        }, set: function set(a) {
          G = a;
        } }, legendLeftAxisHint: { get: function get() {
          return P;
        }, set: function set(a) {
          P = a;
        } }, legendRightAxisHint: { get: function get() {
          return Q;
        }, set: function set(a) {
          Q = a;
        } }, margin: { get: function get() {
          return w;
        }, set: function set(a) {
          void 0 !== a.top && (w.top = a.top, x = a.top), w.right = void 0 !== a.right ? a.right : w.right, w.bottom = void 0 !== a.bottom ? a.bottom : w.bottom, w.left = void 0 !== a.left ? a.left : w.left;
        } }, focusMargin: { get: function get() {
          return y;
        }, set: function set(a) {
          y.top = void 0 !== a.top ? a.top : y.top, y.right = void 0 !== a.right ? a.right : y.right, y.bottom = void 0 !== a.bottom ? a.bottom : y.bottom, y.left = void 0 !== a.left ? a.left : y.left;
        } }, duration: { get: function get() {
          return M;
        }, set: function set(a) {
          M = a;
        } }, color: { get: function get() {
          return D;
        }, set: function set(b) {
          D = a.utils.getColor(b), t.color(D);
        } }, x: { get: function get() {
          return B;
        }, set: function set(a) {
          B = a, j.x(a), k.x(a), l.x(a), m.x(a);
        } }, y: { get: function get() {
          return C;
        }, set: function set(a) {
          C = a, j.y(a), k.y(a), l.y(a), m.y(a);
        } }, switchYAxisOrder: { get: function get() {
          return R;
        }, set: function set(a) {
          if (R !== a) {
            var b = p;p = q, q = b;var c = r;r = s, s = c;
          }R = a, p.orient("left"), q.orient("right"), r.orient("left"), s.orient("right");
        } } }), a.utils.inheritOptions(b, j), a.utils.initOptions(b), b;
  }, a.models.multiBar = function () {
    "use strict";
    function b(F) {
      return D.reset(), F.each(function (b) {
        var F = k - j.left - j.right,
            G = l - j.top - j.bottom;p = d3.select(this), a.utils.initSVG(p);var H = 0;if (x && b.length && (x = [{ values: b[0].values.map(function (a) {
            return { x: a.x, y: 0, series: a.series, size: .01 };
          }) }]), u) {
          var I = d3.layout.stack().offset(v).values(function (a) {
            return a.values;
          }).y(r)(!b.length && x ? x : b);I.forEach(function (a, c) {
            a.nonStackable ? (b[c].nonStackableSeries = H++, I[c] = b[c]) : c > 0 && I[c - 1].nonStackable && I[c].values.map(function (a, b) {
              a.y0 -= I[c - 1].values[b].y, a.y1 = a.y0 + a.y;
            });
          }), b = I;
        }b.forEach(function (a, b) {
          a.values.forEach(function (c) {
            c.series = b, c.key = a.key;
          });
        }), u && b.length > 0 && b[0].values.map(function (a, c) {
          var d = 0,
              e = 0;b.map(function (a, f) {
            if (!b[f].nonStackable) {
              var g = a.values[c];g.size = Math.abs(g.y), g.y < 0 ? (g.y1 = e, e -= g.size) : (g.y1 = g.size + d, d += g.size);
            }
          });
        });var J = d && e ? [] : b.map(function (a, b) {
          return a.values.map(function (a, c) {
            return { x: q(a, c), y: r(a, c), y0: a.y0, y1: a.y1, idx: b };
          });
        });m.domain(d || d3.merge(J).map(function (a) {
          return a.x;
        })).rangeBands(f || [0, F], A), n.domain(e || d3.extent(d3.merge(J).map(function (a) {
          var c = a.y;return u && !b[a.idx].nonStackable && (c = a.y > 0 ? a.y1 : a.y1 + a.y), c;
        }).concat(s))).range(g || [G, 0]), m.domain()[0] === m.domain()[1] && (m.domain()[0] ? m.domain([m.domain()[0] - .01 * m.domain()[0], m.domain()[1] + .01 * m.domain()[1]]) : m.domain([-1, 1])), n.domain()[0] === n.domain()[1] && (n.domain()[0] ? n.domain([n.domain()[0] + .01 * n.domain()[0], n.domain()[1] - .01 * n.domain()[1]]) : n.domain([-1, 1])), h = h || m, i = i || n;var K = p.selectAll("g.nv-wrap.nv-multibar").data([b]),
            L = K.enter().append("g").attr("class", "nvd3 nv-wrap nv-multibar"),
            M = L.append("defs"),
            N = L.append("g"),
            O = K.select("g");N.append("g").attr("class", "nv-groups"), K.attr("transform", "translate(" + j.left + "," + j.top + ")"), M.append("clipPath").attr("id", "nv-edge-clip-" + o).append("rect"), K.select("#nv-edge-clip-" + o + " rect").attr("width", F).attr("height", G), O.attr("clip-path", t ? "url(#nv-edge-clip-" + o + ")" : "");var P = K.select(".nv-groups").selectAll(".nv-group").data(function (a) {
          return a;
        }, function (a, b) {
          return b;
        });P.enter().append("g").style("stroke-opacity", 1e-6).style("fill-opacity", 1e-6);var Q = D.transition(P.exit().selectAll("rect.nv-bar"), "multibarExit", Math.min(100, z)).attr("y", function (a, c, d) {
          var e = i(0) || 0;return u && b[a.series] && !b[a.series].nonStackable && (e = i(a.y0)), e;
        }).attr("height", 0).remove();Q.delay && Q.delay(function (a, b) {
          var c = b * (z / (E + 1)) - b;return c;
        }), P.attr("class", function (a, b) {
          return "nv-group nv-series-" + b;
        }).classed("hover", function (a) {
          return a.hover;
        }).style("fill", function (a, b) {
          return w(a, b);
        }).style("stroke", function (a, b) {
          return w(a, b);
        }), P.style("stroke-opacity", 1).style("fill-opacity", B);var R = P.selectAll("rect.nv-bar").data(function (a) {
          return x && !b.length ? x.values : a.values;
        });R.exit().remove();R.enter().append("rect").attr("class", function (a, b) {
          return r(a, b) < 0 ? "nv-bar negative" : "nv-bar positive";
        }).attr("x", function (a, c, d) {
          return u && !b[d].nonStackable ? 0 : d * m.rangeBand() / b.length;
        }).attr("y", function (a, c, d) {
          return i(u && !b[d].nonStackable ? a.y0 : 0) || 0;
        }).attr("height", 0).attr("width", function (a, c, d) {
          return m.rangeBand() / (u && !b[d].nonStackable ? 1 : b.length);
        }).attr("transform", function (a, b) {
          return "translate(" + m(q(a, b)) + ",0)";
        });R.style("fill", function (a, b, c) {
          return w(a, c, b);
        }).style("stroke", function (a, b, c) {
          return w(a, c, b);
        }).on("mouseover", function (a, b) {
          d3.select(this).classed("hover", !0), C.elementMouseover({ data: a, index: b, color: d3.select(this).style("fill") });
        }).on("mouseout", function (a, b) {
          d3.select(this).classed("hover", !1), C.elementMouseout({ data: a, index: b, color: d3.select(this).style("fill") });
        }).on("mousemove", function (a, b) {
          C.elementMousemove({ data: a, index: b, color: d3.select(this).style("fill") });
        }).on("click", function (a, b) {
          var c = this;C.elementClick({ data: a, index: b, color: d3.select(this).style("fill"), event: d3.event, element: c }), d3.event.stopPropagation();
        }).on("dblclick", function (a, b) {
          C.elementDblClick({ data: a, index: b, color: d3.select(this).style("fill") }), d3.event.stopPropagation();
        }), R.attr("class", function (a, b) {
          return r(a, b) < 0 ? "nv-bar negative" : "nv-bar positive";
        }).attr("transform", function (a, b) {
          return "translate(" + m(q(a, b)) + ",0)";
        }), y && (c || (c = b.map(function () {
          return !0;
        })), R.style("fill", function (a, b, d) {
          return d3.rgb(y(a, b)).darker(c.map(function (a, b) {
            return b;
          }).filter(function (a, b) {
            return !c[b];
          })[d]).toString();
        }).style("stroke", function (a, b, d) {
          return d3.rgb(y(a, b)).darker(c.map(function (a, b) {
            return b;
          }).filter(function (a, b) {
            return !c[b];
          })[d]).toString();
        }));var S = R.watchTransition(D, "multibar", Math.min(250, z)).delay(function (a, c) {
          return c * z / b[0].values.length;
        });u ? S.attr("y", function (a, c, d) {
          var e = 0;return e = b[d].nonStackable ? r(a, c) < 0 ? n(0) : n(0) - n(r(a, c)) < -1 ? n(0) - 1 : n(r(a, c)) || 0 : n(a.y1);
        }).attr("height", function (a, c, d) {
          return b[d].nonStackable ? Math.max(Math.abs(n(r(a, c)) - n(0)), 0) || 0 : Math.max(Math.abs(n(a.y + a.y0) - n(a.y0)), 0);
        }).attr("x", function (a, c, d) {
          var e = 0;return b[d].nonStackable && (e = a.series * m.rangeBand() / b.length, b.length !== H && (e = b[d].nonStackableSeries * m.rangeBand() / (2 * H))), e;
        }).attr("width", function (a, c, d) {
          if (b[d].nonStackable) {
            var e = m.rangeBand() / H;return b.length !== H && (e = m.rangeBand() / (2 * H)), e;
          }return m.rangeBand();
        }) : S.attr("x", function (a, c) {
          return a.series * m.rangeBand() / b.length;
        }).attr("width", m.rangeBand() / b.length).attr("y", function (a, b) {
          return r(a, b) < 0 ? n(0) : n(0) - n(r(a, b)) < 1 ? n(0) - 1 : n(r(a, b)) || 0;
        }).attr("height", function (a, b) {
          return Math.max(Math.abs(n(r(a, b)) - n(0)), 1) || 0;
        }), h = m.copy(), i = n.copy(), b[0] && b[0].values && (E = b[0].values.length);
      }), D.renderEnd("multibar immediate"), b;
    }var c,
        d,
        e,
        f,
        g,
        h,
        i,
        j = { top: 0, right: 0, bottom: 0, left: 0 },
        k = 960,
        l = 500,
        m = d3.scale.ordinal(),
        n = d3.scale.linear(),
        o = Math.floor(1e4 * Math.random()),
        p = null,
        q = function q(a) {
      return a.x;
    },
        r = function r(a) {
      return a.y;
    },
        s = [0],
        t = !0,
        u = !1,
        v = "zero",
        w = a.utils.defaultColor(),
        x = !1,
        y = null,
        z = 500,
        A = .1,
        B = .75,
        C = d3.dispatch("chartClick", "elementClick", "elementDblClick", "elementMouseover", "elementMouseout", "elementMousemove", "renderEnd"),
        D = a.utils.renderWatch(C, z),
        E = 0;return b.dispatch = C, b.options = a.utils.optionsFunc.bind(b), b._options = Object.create({}, { width: { get: function get() {
          return k;
        }, set: function set(a) {
          k = a;
        } }, height: { get: function get() {
          return l;
        }, set: function set(a) {
          l = a;
        } }, x: { get: function get() {
          return q;
        }, set: function set(a) {
          q = a;
        } }, y: { get: function get() {
          return r;
        }, set: function set(a) {
          r = a;
        } }, xScale: { get: function get() {
          return m;
        }, set: function set(a) {
          m = a;
        } }, yScale: { get: function get() {
          return n;
        }, set: function set(a) {
          n = a;
        } }, xDomain: { get: function get() {
          return d;
        }, set: function set(a) {
          d = a;
        } }, yDomain: { get: function get() {
          return e;
        }, set: function set(a) {
          e = a;
        } }, xRange: { get: function get() {
          return f;
        }, set: function set(a) {
          f = a;
        } }, yRange: { get: function get() {
          return g;
        }, set: function set(a) {
          g = a;
        } }, forceY: { get: function get() {
          return s;
        }, set: function set(a) {
          s = a;
        } }, stacked: { get: function get() {
          return u;
        }, set: function set(a) {
          u = a;
        } }, stackOffset: { get: function get() {
          return v;
        }, set: function set(a) {
          v = a;
        } }, clipEdge: { get: function get() {
          return t;
        }, set: function set(a) {
          t = a;
        } }, disabled: { get: function get() {
          return c;
        }, set: function set(a) {
          c = a;
        } }, id: { get: function get() {
          return o;
        }, set: function set(a) {
          o = a;
        } }, hideable: { get: function get() {
          return x;
        }, set: function set(a) {
          x = a;
        } }, groupSpacing: { get: function get() {
          return A;
        }, set: function set(a) {
          A = a;
        } }, fillOpacity: { get: function get() {
          return B;
        }, set: function set(a) {
          B = a;
        } }, margin: { get: function get() {
          return j;
        }, set: function set(a) {
          j.top = void 0 !== a.top ? a.top : j.top, j.right = void 0 !== a.right ? a.right : j.right, j.bottom = void 0 !== a.bottom ? a.bottom : j.bottom, j.left = void 0 !== a.left ? a.left : j.left;
        } }, duration: { get: function get() {
          return z;
        }, set: function set(a) {
          z = a, D.reset(z);
        } }, color: { get: function get() {
          return w;
        }, set: function set(b) {
          w = a.utils.getColor(b);
        } }, barColor: { get: function get() {
          return y;
        }, set: function set(b) {
          y = b ? a.utils.getColor(b) : null;
        } } }), a.utils.initOptions(b), b;
  }, a.models.multiBarChart = function () {
    "use strict";
    function b(C) {
      return H.reset(), H.models(e), t && H.models(f), u && H.models(g), C.each(function (C) {
        var H = d3.select(this);a.utils.initSVG(H);var L = a.utils.availableWidth(n, H, l),
            M = a.utils.availableHeight(o, H, l);if (b.update = function () {
          0 === F ? H.call(b) : H.transition().duration(F).call(b);
        }, b.container = this, A.setter(K(C), b.update).getter(J(C)).update(), A.disabled = C.map(function (a) {
          return !!a.disabled;
        }), !B) {
          var N;B = {};for (N in A) {
            A[N] instanceof Array ? B[N] = A[N].slice(0) : B[N] = A[N];
          }
        }if (!(C && C.length && C.filter(function (a) {
          return a.values.length;
        }).length)) return a.utils.noData(b, H), b;H.selectAll(".nv-noData").remove(), c = e.xScale(), d = e.yScale();var O = H.selectAll("g.nv-wrap.nv-multiBarWithLegend").data([C]),
            P = O.enter().append("g").attr("class", "nvd3 nv-wrap nv-multiBarWithLegend").append("g"),
            Q = O.select("g");if (P.append("g").attr("class", "nv-x nv-axis"), P.append("g").attr("class", "nv-y nv-axis"), P.append("g").attr("class", "nv-barsWrap"), P.append("g").attr("class", "nv-legendWrap"), P.append("g").attr("class", "nv-controlsWrap"), P.append("g").attr("class", "nv-interactive"), s ? (i.width(L - E()), Q.select(".nv-legendWrap").datum(C).call(i), m || i.height() === l.top || (l.top = i.height(), M = a.utils.availableHeight(o, H, l)), Q.select(".nv-legendWrap").attr("transform", "translate(" + E() + "," + -l.top + ")")) : Q.select(".nv-legendWrap").selectAll("*").remove(), q) {
          var R = [{ key: r.grouped || "Grouped", disabled: e.stacked() }, { key: r.stacked || "Stacked", disabled: !e.stacked() }];j.width(E()).color(["#444", "#444", "#444"]), Q.select(".nv-controlsWrap").datum(R).attr("transform", "translate(0," + -l.top + ")").call(j);
        } else Q.select(".nv-controlsWrap").selectAll("*").remove();O.attr("transform", "translate(" + l.left + "," + l.top + ")"), v && Q.select(".nv-y.nv-axis").attr("transform", "translate(" + L + ",0)"), e.disabled(C.map(function (a) {
          return a.disabled;
        })).width(L).height(M).color(C.map(function (a, b) {
          return a.color || p(a, b);
        }).filter(function (a, b) {
          return !C[b].disabled;
        }));var S = Q.select(".nv-barsWrap").datum(C.filter(function (a) {
          return !a.disabled;
        }));if (S.call(e), t) {
          f.scale(c)._ticks(a.utils.calcTicksX(L / 100, C)).tickSize(-M, 0), Q.select(".nv-x.nv-axis").attr("transform", "translate(0," + d.range()[0] + ")"), Q.select(".nv-x.nv-axis").call(f);var T = Q.select(".nv-x.nv-axis > g").selectAll("g");if (T.selectAll("line, text").style("opacity", 1), x) {
            var U = function U(a, b) {
              return "translate(" + a + "," + b + ")";
            },
                V = 5,
                W = 17;T.selectAll("text").attr("transform", function (a, b, c) {
              return U(0, c % 2 == 0 ? V : W);
            });var X = d3.selectAll(".nv-x.nv-axis .nv-wrap g g text")[0].length;Q.selectAll(".nv-x.nv-axis .nv-axisMaxMin text").attr("transform", function (a, b) {
              return U(0, 0 === b || X % 2 !== 0 ? W : V);
            });
          }y && Q.selectAll(".tick text").call(a.utils.wrapTicks, b.xAxis.rangeBand()), w && T.filter(function (a, b) {
            return b % Math.ceil(C[0].values.length / (L / 100)) !== 0;
          }).selectAll("text, line").style("opacity", 0), z && T.selectAll(".tick text").attr("transform", "rotate(" + z + " 0,0)").style("text-anchor", z > 0 ? "start" : "end"), Q.select(".nv-x.nv-axis").selectAll("g.nv-axisMaxMin text").style("opacity", 1);
        }u && (g.scale(d)._ticks(a.utils.calcTicksY(M / 36, C)).tickSize(-L, 0), Q.select(".nv-y.nv-axis").call(g)), G && (h.width(L).height(M).margin({ left: l.left, top: l.top }).svgContainer(H).xScale(c), O.select(".nv-interactive").call(h)), i.dispatch.on("stateChange", function (a) {
          for (var c in a) {
            A[c] = a[c];
          }D.stateChange(A), b.update();
        }), j.dispatch.on("legendClick", function (a, c) {
          if (a.disabled) {
            switch (R = R.map(function (a) {
              return a.disabled = !0, a;
            }), a.disabled = !1, a.key) {case "Grouped":case r.grouped:
                e.stacked(!1);break;case "Stacked":case r.stacked:
                e.stacked(!0);}A.stacked = e.stacked(), D.stateChange(A), b.update();
          }
        }), D.on("changeState", function (a) {
          "undefined" != typeof a.disabled && (C.forEach(function (b, c) {
            b.disabled = a.disabled[c];
          }), A.disabled = a.disabled), "undefined" != typeof a.stacked && (e.stacked(a.stacked), A.stacked = a.stacked, I = a.stacked), b.update();
        }), G ? (h.dispatch.on("elementMousemove", function (a) {
          if (void 0 != a.pointXValue) {
            var d,
                e,
                f,
                g,
                i = [];C.filter(function (a, b) {
              return a.seriesIndex = b, !a.disabled;
            }).forEach(function (h, j) {
              e = c.domain().indexOf(a.pointXValue);var k = h.values[e];void 0 !== k && (g = k.x, void 0 === d && (d = k), void 0 === f && (f = a.mouseX), i.push({ key: h.key, value: b.y()(k, e), color: p(h, h.seriesIndex), data: h.values[e] }));
            }), h.tooltip.data({ value: g, index: e, series: i })(), h.renderGuideLine(f);
          }
        }), h.dispatch.on("elementMouseout", function (a) {
          h.tooltip.hidden(!0);
        })) : (e.dispatch.on("elementMouseover.tooltip", function (a) {
          a.value = b.x()(a.data), a.series = { key: a.data.key, value: b.y()(a.data), color: a.color }, k.data(a).hidden(!1);
        }), e.dispatch.on("elementMouseout.tooltip", function (a) {
          k.hidden(!0);
        }), e.dispatch.on("elementMousemove.tooltip", function (a) {
          k();
        }));
      }), H.renderEnd("multibarchart immediate"), b;
    }var c,
        d,
        e = a.models.multiBar(),
        f = a.models.axis(),
        g = a.models.axis(),
        h = a.interactiveGuideline(),
        i = a.models.legend(),
        j = a.models.legend(),
        k = a.models.tooltip(),
        l = { top: 30, right: 20, bottom: 50, left: 60 },
        m = null,
        n = null,
        o = null,
        p = a.utils.defaultColor(),
        q = !0,
        r = {},
        s = !0,
        t = !0,
        u = !0,
        v = !1,
        w = !0,
        x = !1,
        y = !1,
        z = 0,
        A = a.utils.state(),
        B = null,
        C = null,
        D = d3.dispatch("stateChange", "changeState", "renderEnd"),
        E = function E() {
      return q ? 180 : 0;
    },
        F = 250,
        G = !1;A.stacked = !1, e.stacked(!1), f.orient("bottom").tickPadding(7).showMaxMin(!1).tickFormat(function (a) {
      return a;
    }), g.orient(v ? "right" : "left").tickFormat(d3.format(",.1f")), k.duration(0).valueFormatter(function (a, b) {
      return g.tickFormat()(a, b);
    }).headerFormatter(function (a, b) {
      return f.tickFormat()(a, b);
    }), h.tooltip.valueFormatter(function (a, b) {
      return null == a ? "N/A" : g.tickFormat()(a, b);
    }).headerFormatter(function (a, b) {
      return f.tickFormat()(a, b);
    }), h.tooltip.valueFormatter(function (a, b) {
      return null == a ? "N/A" : g.tickFormat()(a, b);
    }).headerFormatter(function (a, b) {
      return f.tickFormat()(a, b);
    }), h.tooltip.duration(0).valueFormatter(function (a, b) {
      return g.tickFormat()(a, b);
    }).headerFormatter(function (a, b) {
      return f.tickFormat()(a, b);
    }), j.updateState(!1);var H = a.utils.renderWatch(D),
        I = !1,
        J = function J(a) {
      return function () {
        return { active: a.map(function (a) {
            return !a.disabled;
          }), stacked: I };
      };
    },
        K = function K(a) {
      return function (b) {
        void 0 !== b.stacked && (I = b.stacked), void 0 !== b.active && a.forEach(function (a, c) {
          a.disabled = !b.active[c];
        });
      };
    };return b.dispatch = D, b.multibar = e, b.legend = i, b.controls = j, b.xAxis = f, b.yAxis = g, b.state = A, b.tooltip = k, b.interactiveLayer = h, b.options = a.utils.optionsFunc.bind(b), b._options = Object.create({}, { width: { get: function get() {
          return n;
        }, set: function set(a) {
          n = a;
        } }, height: { get: function get() {
          return o;
        }, set: function set(a) {
          o = a;
        } }, showLegend: { get: function get() {
          return s;
        }, set: function set(a) {
          s = a;
        } }, showControls: { get: function get() {
          return q;
        }, set: function set(a) {
          q = a;
        } }, controlLabels: { get: function get() {
          return r;
        }, set: function set(a) {
          r = a;
        } }, showXAxis: { get: function get() {
          return t;
        }, set: function set(a) {
          t = a;
        } }, showYAxis: { get: function get() {
          return u;
        }, set: function set(a) {
          u = a;
        } }, defaultState: { get: function get() {
          return B;
        }, set: function set(a) {
          B = a;
        } }, noData: { get: function get() {
          return C;
        }, set: function set(a) {
          C = a;
        } }, reduceXTicks: { get: function get() {
          return w;
        }, set: function set(a) {
          w = a;
        } }, rotateLabels: { get: function get() {
          return z;
        }, set: function set(a) {
          z = a;
        } }, staggerLabels: { get: function get() {
          return x;
        }, set: function set(a) {
          x = a;
        } }, wrapLabels: { get: function get() {
          return y;
        }, set: function set(a) {
          y = !!a;
        } }, margin: { get: function get() {
          return l;
        }, set: function set(a) {
          void 0 !== a.top && (l.top = a.top, m = a.top), l.right = void 0 !== a.right ? a.right : l.right, l.bottom = void 0 !== a.bottom ? a.bottom : l.bottom, l.left = void 0 !== a.left ? a.left : l.left;
        } }, duration: { get: function get() {
          return F;
        }, set: function set(a) {
          F = a, e.duration(F), f.duration(F), g.duration(F), H.reset(F);
        } }, color: { get: function get() {
          return p;
        }, set: function set(b) {
          p = a.utils.getColor(b), i.color(p);
        } }, rightAlignYAxis: { get: function get() {
          return v;
        }, set: function set(a) {
          v = a, g.orient(v ? "right" : "left");
        } }, useInteractiveGuideline: { get: function get() {
          return G;
        }, set: function set(a) {
          G = a;
        } }, barColor: { get: function get() {
          return e.barColor;
        }, set: function set(a) {
          e.barColor(a), i.color(function (a, b) {
            return d3.rgb("#ccc").darker(1.5 * b).toString();
          });
        } } }), a.utils.inheritOptions(b, e), a.utils.initOptions(b), b;
  }, a.models.multiBarHorizontal = function () {
    "use strict";
    function b(m) {
      return F.reset(), m.each(function (b) {
        var m = k - j.left - j.right,
            D = l - j.top - j.bottom;n = d3.select(this), a.utils.initSVG(n), w && (b = d3.layout.stack().offset("zero").values(function (a) {
          return a.values;
        }).y(r)(b)), b.forEach(function (a, b) {
          a.values.forEach(function (c) {
            c.series = b, c.key = a.key;
          });
        }), w && b[0].values.map(function (a, c) {
          var d = 0,
              e = 0;b.map(function (a) {
            var b = a.values[c];b.size = Math.abs(b.y), b.y < 0 ? (b.y1 = e - b.size, e -= b.size) : (b.y1 = d, d += b.size);
          });
        });var G = d && e ? [] : b.map(function (a) {
          return a.values.map(function (a, b) {
            return { x: q(a, b), y: r(a, b), y0: a.y0, y1: a.y1 };
          });
        });o.domain(d || d3.merge(G).map(function (a) {
          return a.x;
        })).rangeBands(f || [0, D], A), p.domain(e || d3.extent(d3.merge(G).map(function (a) {
          return w ? a.y > 0 ? a.y1 + a.y : a.y1 : a.y;
        }).concat(t))), x && !w ? p.range(g || [p.domain()[0] < 0 ? z : 0, m - (p.domain()[1] > 0 ? z : 0)]) : p.range(g || [0, m]), h = h || o, i = i || d3.scale.linear().domain(p.domain()).range([p(0), p(0)]);var H = d3.select(this).selectAll("g.nv-wrap.nv-multibarHorizontal").data([b]),
            I = H.enter().append("g").attr("class", "nvd3 nv-wrap nv-multibarHorizontal"),
            J = (I.append("defs"), I.append("g"));H.select("g");J.append("g").attr("class", "nv-groups"), H.attr("transform", "translate(" + j.left + "," + j.top + ")");var K = H.select(".nv-groups").selectAll(".nv-group").data(function (a) {
          return a;
        }, function (a, b) {
          return b;
        });K.enter().append("g").style("stroke-opacity", 1e-6).style("fill-opacity", 1e-6), K.exit().watchTransition(F, "multibarhorizontal: exit groups").style("stroke-opacity", 1e-6).style("fill-opacity", 1e-6).remove(), K.attr("class", function (a, b) {
          return "nv-group nv-series-" + b;
        }).classed("hover", function (a) {
          return a.hover;
        }).style("fill", function (a, b) {
          return u(a, b);
        }).style("stroke", function (a, b) {
          return u(a, b);
        }), K.watchTransition(F, "multibarhorizontal: groups").style("stroke-opacity", 1).style("fill-opacity", B);var L = K.selectAll("g.nv-bar").data(function (a) {
          return a.values;
        });L.exit().remove();var M = L.enter().append("g").attr("transform", function (a, c, d) {
          return "translate(" + i(w ? a.y0 : 0) + "," + (w ? 0 : d * o.rangeBand() / b.length + o(q(a, c))) + ")";
        });M.append("rect").attr("width", 0).attr("height", o.rangeBand() / (w ? 1 : b.length)), L.on("mouseover", function (a, b) {
          d3.select(this).classed("hover", !0), E.elementMouseover({ data: a, index: b, color: d3.select(this).style("fill") });
        }).on("mouseout", function (a, b) {
          d3.select(this).classed("hover", !1), E.elementMouseout({ data: a, index: b, color: d3.select(this).style("fill") });
        }).on("mouseout", function (a, b) {
          E.elementMouseout({ data: a, index: b, color: d3.select(this).style("fill") });
        }).on("mousemove", function (a, b) {
          E.elementMousemove({ data: a, index: b, color: d3.select(this).style("fill") });
        }).on("click", function (a, b) {
          var c = this;E.elementClick({ data: a, index: b, color: d3.select(this).style("fill"), event: d3.event, element: c }), d3.event.stopPropagation();
        }).on("dblclick", function (a, b) {
          E.elementDblClick({ data: a, index: b, color: d3.select(this).style("fill") }), d3.event.stopPropagation();
        }), s(b[0], 0) && (M.append("polyline"), L.select("polyline").attr("fill", "none").attr("points", function (a, c) {
          var d = s(a, c),
              e = .8 * o.rangeBand() / (2 * (w ? 1 : b.length));d = d.length ? d : [-Math.abs(d), Math.abs(d)], d = d.map(function (a) {
            return p(a) - p(0);
          });var f = [[d[0], -e], [d[0], e], [d[0], 0], [d[1], 0], [d[1], -e], [d[1], e]];return f.map(function (a) {
            return a.join(",");
          }).join(" ");
        }).attr("transform", function (a, c) {
          var d = o.rangeBand() / (2 * (w ? 1 : b.length));return "translate(" + (r(a, c) < 0 ? 0 : p(r(a, c)) - p(0)) + ", " + d + ")";
        })), M.append("text"), x && !w ? (L.select("text").attr("text-anchor", function (a, b) {
          return r(a, b) < 0 ? "end" : "start";
        }).attr("y", o.rangeBand() / (2 * b.length)).attr("dy", ".32em").text(function (a, b) {
          var c = C(r(a, b)),
              d = s(a, b);return void 0 === d ? c : d.length ? c + "+" + C(Math.abs(d[1])) + "-" + C(Math.abs(d[0])) : c + "±" + C(Math.abs(d));
        }), L.watchTransition(F, "multibarhorizontal: bars").select("text").attr("x", function (a, b) {
          return r(a, b) < 0 ? -4 : p(r(a, b)) - p(0) + 4;
        })) : L.selectAll("text").text(""), y && !w ? (M.append("text").classed("nv-bar-label", !0), L.select("text.nv-bar-label").attr("text-anchor", function (a, b) {
          return r(a, b) < 0 ? "start" : "end";
        }).attr("y", o.rangeBand() / (2 * b.length)).attr("dy", ".32em").text(function (a, b) {
          return q(a, b);
        }), L.watchTransition(F, "multibarhorizontal: bars").select("text.nv-bar-label").attr("x", function (a, b) {
          return r(a, b) < 0 ? p(0) - p(r(a, b)) + 4 : -4;
        })) : L.selectAll("text.nv-bar-label").text(""), L.attr("class", function (a, b) {
          return r(a, b) < 0 ? "nv-bar negative" : "nv-bar positive";
        }), v && (c || (c = b.map(function () {
          return !0;
        })), L.style("fill", function (a, b, d) {
          return d3.rgb(v(a, b)).darker(c.map(function (a, b) {
            return b;
          }).filter(function (a, b) {
            return !c[b];
          })[d]).toString();
        }).style("stroke", function (a, b, d) {
          return d3.rgb(v(a, b)).darker(c.map(function (a, b) {
            return b;
          }).filter(function (a, b) {
            return !c[b];
          })[d]).toString();
        })), w ? L.watchTransition(F, "multibarhorizontal: bars").attr("transform", function (a, b) {
          return "translate(" + p(a.y1) + "," + o(q(a, b)) + ")";
        }).select("rect").attr("width", function (a, b) {
          return Math.abs(p(r(a, b) + a.y0) - p(a.y0)) || 0;
        }).attr("height", o.rangeBand()) : L.watchTransition(F, "multibarhorizontal: bars").attr("transform", function (a, c) {
          return "translate(" + p(r(a, c) < 0 ? r(a, c) : 0) + "," + (a.series * o.rangeBand() / b.length + o(q(a, c))) + ")";
        }).select("rect").attr("height", o.rangeBand() / b.length).attr("width", function (a, b) {
          return Math.max(Math.abs(p(r(a, b)) - p(0)), 1) || 0;
        }), h = o.copy(), i = p.copy();
      }), F.renderEnd("multibarHorizontal immediate"), b;
    }var c,
        d,
        e,
        f,
        g,
        h,
        i,
        j = { top: 0, right: 0, bottom: 0, left: 0 },
        k = 960,
        l = 500,
        m = Math.floor(1e4 * Math.random()),
        n = null,
        o = d3.scale.ordinal(),
        p = d3.scale.linear(),
        q = function q(a) {
      return a.x;
    },
        r = function r(a) {
      return a.y;
    },
        s = function s(a) {
      return a.yErr;
    },
        t = [0],
        u = a.utils.defaultColor(),
        v = null,
        w = !1,
        x = !1,
        y = !1,
        z = 60,
        A = .1,
        B = .75,
        C = d3.format(",.2f"),
        D = 250,
        E = d3.dispatch("chartClick", "elementClick", "elementDblClick", "elementMouseover", "elementMouseout", "elementMousemove", "renderEnd"),
        F = a.utils.renderWatch(E, D);return b.dispatch = E, b.options = a.utils.optionsFunc.bind(b), b._options = Object.create({}, { width: { get: function get() {
          return k;
        }, set: function set(a) {
          k = a;
        } }, height: { get: function get() {
          return l;
        }, set: function set(a) {
          l = a;
        } }, x: { get: function get() {
          return q;
        }, set: function set(a) {
          q = a;
        } }, y: { get: function get() {
          return r;
        }, set: function set(a) {
          r = a;
        } }, yErr: { get: function get() {
          return s;
        }, set: function set(a) {
          s = a;
        } }, xScale: { get: function get() {
          return o;
        }, set: function set(a) {
          o = a;
        } }, yScale: { get: function get() {
          return p;
        }, set: function set(a) {
          p = a;
        } }, xDomain: { get: function get() {
          return d;
        }, set: function set(a) {
          d = a;
        } }, yDomain: { get: function get() {
          return e;
        }, set: function set(a) {
          e = a;
        } }, xRange: { get: function get() {
          return f;
        }, set: function set(a) {
          f = a;
        } }, yRange: { get: function get() {
          return g;
        }, set: function set(a) {
          g = a;
        } }, forceY: { get: function get() {
          return t;
        }, set: function set(a) {
          t = a;
        } }, stacked: { get: function get() {
          return w;
        }, set: function set(a) {
          w = a;
        } }, showValues: { get: function get() {
          return x;
        }, set: function set(a) {
          x = a;
        } }, disabled: { get: function get() {
          return c;
        }, set: function set(a) {
          c = a;
        } }, id: { get: function get() {
          return m;
        }, set: function set(a) {
          m = a;
        } }, valueFormat: { get: function get() {
          return C;
        }, set: function set(a) {
          C = a;
        } }, valuePadding: { get: function get() {
          return z;
        }, set: function set(a) {
          z = a;
        } }, groupSpacing: { get: function get() {
          return A;
        }, set: function set(a) {
          A = a;
        } }, fillOpacity: { get: function get() {
          return B;
        }, set: function set(a) {
          B = a;
        } }, margin: { get: function get() {
          return j;
        }, set: function set(a) {
          j.top = void 0 !== a.top ? a.top : j.top, j.right = void 0 !== a.right ? a.right : j.right, j.bottom = void 0 !== a.bottom ? a.bottom : j.bottom, j.left = void 0 !== a.left ? a.left : j.left;
        } }, duration: { get: function get() {
          return D;
        }, set: function set(a) {
          D = a, F.reset(D);
        } }, color: { get: function get() {
          return u;
        }, set: function set(b) {
          u = a.utils.getColor(b);
        } }, barColor: { get: function get() {
          return v;
        }, set: function set(b) {
          v = b ? a.utils.getColor(b) : null;
        } } }), a.utils.initOptions(b), b;
  }, a.models.multiBarHorizontalChart = function () {
    "use strict";
    function b(j) {
      return D.reset(), D.models(e), s && D.models(f), t && D.models(g), j.each(function (j) {
        var x = d3.select(this);a.utils.initSVG(x);var D = a.utils.availableWidth(m, x, k),
            E = a.utils.availableHeight(n, x, k);if (b.update = function () {
          x.transition().duration(A).call(b);
        }, b.container = this, u = e.stacked(), v.setter(C(j), b.update).getter(B(j)).update(), v.disabled = j.map(function (a) {
          return !!a.disabled;
        }), !w) {
          var F;w = {};for (F in v) {
            v[F] instanceof Array ? w[F] = v[F].slice(0) : w[F] = v[F];
          }
        }if (!(j && j.length && j.filter(function (a) {
          return a.values.length;
        }).length)) return a.utils.noData(b, x), b;x.selectAll(".nv-noData").remove(), c = e.xScale(), d = e.yScale().clamp(!0);var G = x.selectAll("g.nv-wrap.nv-multiBarHorizontalChart").data([j]),
            H = G.enter().append("g").attr("class", "nvd3 nv-wrap nv-multiBarHorizontalChart").append("g"),
            I = G.select("g");if (H.append("g").attr("class", "nv-x nv-axis"), H.append("g").attr("class", "nv-y nv-axis").append("g").attr("class", "nv-zeroLine").append("line"), H.append("g").attr("class", "nv-barsWrap"), H.append("g").attr("class", "nv-legendWrap"), H.append("g").attr("class", "nv-controlsWrap"), r ? (h.width(D - z()), I.select(".nv-legendWrap").datum(j).call(h), l || h.height() === k.top || (k.top = h.height(), E = a.utils.availableHeight(n, x, k)), I.select(".nv-legendWrap").attr("transform", "translate(" + z() + "," + -k.top + ")")) : I.select(".nv-legendWrap").selectAll("*").remove(), p) {
          var J = [{ key: q.grouped || "Grouped", disabled: e.stacked() }, { key: q.stacked || "Stacked", disabled: !e.stacked() }];i.width(z()).color(["#444", "#444", "#444"]), I.select(".nv-controlsWrap").datum(J).attr("transform", "translate(0," + -k.top + ")").call(i);
        } else I.select(".nv-controlsWrap").selectAll("*").remove();G.attr("transform", "translate(" + k.left + "," + k.top + ")"), e.disabled(j.map(function (a) {
          return a.disabled;
        })).width(D).height(E).color(j.map(function (a, b) {
          return a.color || o(a, b);
        }).filter(function (a, b) {
          return !j[b].disabled;
        }));var K = I.select(".nv-barsWrap").datum(j.filter(function (a) {
          return !a.disabled;
        }));if (K.transition().call(e), s) {
          f.scale(c)._ticks(a.utils.calcTicksY(E / 24, j)).tickSize(-D, 0), I.select(".nv-x.nv-axis").call(f);var L = I.select(".nv-x.nv-axis").selectAll("g");L.selectAll("line, text");
        }t && (g.scale(d)._ticks(a.utils.calcTicksX(D / 100, j)).tickSize(-E, 0), I.select(".nv-y.nv-axis").attr("transform", "translate(0," + E + ")"), I.select(".nv-y.nv-axis").call(g)), I.select(".nv-zeroLine line").attr("x1", d(0)).attr("x2", d(0)).attr("y1", 0).attr("y2", -E), h.dispatch.on("stateChange", function (a) {
          for (var c in a) {
            v[c] = a[c];
          }y.stateChange(v), b.update();
        }), i.dispatch.on("legendClick", function (a, c) {
          if (a.disabled) {
            switch (J = J.map(function (a) {
              return a.disabled = !0, a;
            }), a.disabled = !1, a.key) {case "Grouped":case q.grouped:
                e.stacked(!1);break;case "Stacked":case q.stacked:
                e.stacked(!0);}v.stacked = e.stacked(), y.stateChange(v), u = e.stacked(), b.update();
          }
        }), y.on("changeState", function (a) {
          "undefined" != typeof a.disabled && (j.forEach(function (b, c) {
            b.disabled = a.disabled[c];
          }), v.disabled = a.disabled), "undefined" != typeof a.stacked && (e.stacked(a.stacked), v.stacked = a.stacked, u = a.stacked), b.update();
        });
      }), D.renderEnd("multibar horizontal chart immediate"), b;
    }var c,
        d,
        e = a.models.multiBarHorizontal(),
        f = a.models.axis(),
        g = a.models.axis(),
        h = a.models.legend().height(30),
        i = a.models.legend().height(30),
        j = a.models.tooltip(),
        k = { top: 30, right: 20, bottom: 50, left: 60 },
        l = null,
        m = null,
        n = null,
        o = a.utils.defaultColor(),
        p = !0,
        q = {},
        r = !0,
        s = !0,
        t = !0,
        u = !1,
        v = a.utils.state(),
        w = null,
        x = null,
        y = d3.dispatch("stateChange", "changeState", "renderEnd"),
        z = function z() {
      return p ? 180 : 0;
    },
        A = 250;v.stacked = !1, e.stacked(u), f.orient("left").tickPadding(5).showMaxMin(!1).tickFormat(function (a) {
      return a;
    }), g.orient("bottom").tickFormat(d3.format(",.1f")), j.duration(0).valueFormatter(function (a, b) {
      return g.tickFormat()(a, b);
    }).headerFormatter(function (a, b) {
      return f.tickFormat()(a, b);
    }), i.updateState(!1);var B = function B(a) {
      return function () {
        return { active: a.map(function (a) {
            return !a.disabled;
          }), stacked: u };
      };
    },
        C = function C(a) {
      return function (b) {
        void 0 !== b.stacked && (u = b.stacked), void 0 !== b.active && a.forEach(function (a, c) {
          a.disabled = !b.active[c];
        });
      };
    },
        D = a.utils.renderWatch(y, A);return e.dispatch.on("elementMouseover.tooltip", function (a) {
      a.value = b.x()(a.data), a.series = { key: a.data.key, value: b.y()(a.data), color: a.color }, j.data(a).hidden(!1);
    }), e.dispatch.on("elementMouseout.tooltip", function (a) {
      j.hidden(!0);
    }), e.dispatch.on("elementMousemove.tooltip", function (a) {
      j();
    }), b.dispatch = y, b.multibar = e, b.legend = h, b.controls = i, b.xAxis = f, b.yAxis = g, b.state = v, b.tooltip = j, b.options = a.utils.optionsFunc.bind(b), b._options = Object.create({}, { width: { get: function get() {
          return m;
        }, set: function set(a) {
          m = a;
        } }, height: { get: function get() {
          return n;
        }, set: function set(a) {
          n = a;
        } }, showLegend: { get: function get() {
          return r;
        }, set: function set(a) {
          r = a;
        } }, showControls: { get: function get() {
          return p;
        }, set: function set(a) {
          p = a;
        } }, controlLabels: { get: function get() {
          return q;
        }, set: function set(a) {
          q = a;
        } }, showXAxis: { get: function get() {
          return s;
        }, set: function set(a) {
          s = a;
        } }, showYAxis: { get: function get() {
          return t;
        }, set: function set(a) {
          t = a;
        } }, defaultState: { get: function get() {
          return w;
        }, set: function set(a) {
          w = a;
        } }, noData: { get: function get() {
          return x;
        }, set: function set(a) {
          x = a;
        } }, margin: { get: function get() {
          return k;
        }, set: function set(a) {
          void 0 !== a.top && (k.top = a.top, l = a.top), k.right = void 0 !== a.right ? a.right : k.right, k.bottom = void 0 !== a.bottom ? a.bottom : k.bottom, k.left = void 0 !== a.left ? a.left : k.left;
        } }, duration: { get: function get() {
          return A;
        }, set: function set(a) {
          A = a, D.reset(A), e.duration(A), f.duration(A), g.duration(A);
        } }, color: { get: function get() {
          return o;
        }, set: function set(b) {
          o = a.utils.getColor(b), h.color(o);
        } }, barColor: { get: function get() {
          return e.barColor;
        }, set: function set(a) {
          e.barColor(a), h.color(function (a, b) {
            return d3.rgb("#ccc").darker(1.5 * b).toString();
          });
        } } }), a.utils.inheritOptions(b, e), a.utils.initOptions(b), b;
  }, a.models.multiChart = function () {
    "use strict";
    function b(k) {
      return k.each(function (k) {
        function o(a) {
          var b = 2 === k[a.seriesIndex].yAxis ? G : F;a.value = a.point.x, a.series = { value: a.point.y, color: a.point.color, key: a.series.key }, I.duration(0).headerFormatter(function (a, b) {
            return E.tickFormat()(a, b);
          }).valueFormatter(function (a, c) {
            return b.tickFormat()(a, c);
          }).data(a).hidden(!1);
        }function s(a) {
          var b = 2 === k[a.seriesIndex].yAxis ? G : F;a.value = a.point.x, a.series = { value: a.point.y, color: a.point.color, key: a.series.key }, I.duration(100).headerFormatter(function (a, b) {
            return E.tickFormat()(a, b);
          }).valueFormatter(function (a, c) {
            return b.tickFormat()(a, c);
          }).data(a).hidden(!1);
        }function J(a) {
          var b = 2 === k[a.seriesIndex].yAxis ? G : F;a.point.x = C.x()(a.point), a.point.y = C.y()(a.point), I.duration(0).headerFormatter(function (a, b) {
            return E.tickFormat()(a, b);
          }).valueFormatter(function (a, c) {
            return b.tickFormat()(a, c);
          }).data(a).hidden(!1);
        }function L(a) {
          var b = 2 === k[a.data.series].yAxis ? G : F;a.value = A.x()(a.data), a.series = { value: A.y()(a.data), color: a.color, key: a.data.key }, I.duration(0).headerFormatter(function (a, b) {
            return E.tickFormat()(a, b);
          }).valueFormatter(function (a, c) {
            return b.tickFormat()(a, c);
          }).data(a).hidden(!1);
        }function M() {
          for (var a = 0, b = K.length; b > a; a++) {
            var c = K[a];try {
              c.clearHighlights();
            } catch (d) {}
          }
        }function N(a, b, c) {
          for (var d = 0, e = K.length; e > d; d++) {
            var f = K[d];try {
              f.highlightPoint(a, b, c);
            } catch (g) {}
          }
        }var O = d3.select(this);a.utils.initSVG(O), b.update = function () {
          O.transition().call(b);
        }, b.container = this;var P = a.utils.availableWidth(h, O, e),
            Q = a.utils.availableHeight(i, O, e),
            R = k.filter(function (a) {
          return "line" == a.type && 1 == a.yAxis;
        }),
            S = k.filter(function (a) {
          return "line" == a.type && 2 == a.yAxis;
        }),
            T = k.filter(function (a) {
          return "scatter" == a.type && 1 == a.yAxis;
        }),
            U = k.filter(function (a) {
          return "scatter" == a.type && 2 == a.yAxis;
        }),
            V = k.filter(function (a) {
          return "bar" == a.type && 1 == a.yAxis;
        }),
            W = k.filter(function (a) {
          return "bar" == a.type && 2 == a.yAxis;
        }),
            X = k.filter(function (a) {
          return "area" == a.type && 1 == a.yAxis;
        }),
            Y = k.filter(function (a) {
          return "area" == a.type && 2 == a.yAxis;
        });if (!(k && k.length && k.filter(function (a) {
          return a.values.length;
        }).length)) return a.utils.noData(b, O), b;O.selectAll(".nv-noData").remove();var Z = k.filter(function (a) {
          return !a.disabled && 1 == a.yAxis;
        }).map(function (a) {
          return a.values.map(function (a, b) {
            return { x: l(a), y: m(a) };
          });
        }),
            $ = k.filter(function (a) {
          return !a.disabled && 2 == a.yAxis;
        }).map(function (a) {
          return a.values.map(function (a, b) {
            return { x: l(a), y: m(a) };
          });
        });t.domain(d3.extent(d3.merge(Z.concat($)), function (a) {
          return a.x;
        })).range([0, P]);var _ = O.selectAll("g.wrap.multiChart").data([k]),
            aa = _.enter().append("g").attr("class", "wrap nvd3 multiChart").append("g");aa.append("g").attr("class", "nv-x nv-axis"), aa.append("g").attr("class", "nv-y1 nv-axis"), aa.append("g").attr("class", "nv-y2 nv-axis"), aa.append("g").attr("class", "stack1Wrap"), aa.append("g").attr("class", "stack2Wrap"), aa.append("g").attr("class", "bars1Wrap"), aa.append("g").attr("class", "bars2Wrap"), aa.append("g").attr("class", "scatters1Wrap"), aa.append("g").attr("class", "scatters2Wrap"), aa.append("g").attr("class", "lines1Wrap"), aa.append("g").attr("class", "lines2Wrap"), aa.append("g").attr("class", "legendWrap"), aa.append("g").attr("class", "nv-interactive");var ba = _.select("g"),
            ca = k.map(function (a, b) {
          return k[b].color || g(a, b);
        });if (j) {
          var da = H.align() ? P / 2 : P,
              ea = H.align() ? da : 0;H.width(da), H.color(ca), ba.select(".legendWrap").datum(k.map(function (a) {
            return a.originalKey = void 0 === a.originalKey ? a.key : a.originalKey, a.key = a.originalKey + (1 == a.yAxis ? "" : r), a;
          })).call(H), f || H.height() === e.top || (e.top = H.height(), Q = a.utils.availableHeight(i, O, e)), ba.select(".legendWrap").attr("transform", "translate(" + ea + "," + -e.top + ")");
        } else ba.select(".legendWrap").selectAll("*").remove();w.width(P).height(Q).interpolate(n).color(ca.filter(function (a, b) {
          return !k[b].disabled && 1 == k[b].yAxis && "line" == k[b].type;
        })), x.width(P).height(Q).interpolate(n).color(ca.filter(function (a, b) {
          return !k[b].disabled && 2 == k[b].yAxis && "line" == k[b].type;
        })), y.width(P).height(Q).color(ca.filter(function (a, b) {
          return !k[b].disabled && 1 == k[b].yAxis && "scatter" == k[b].type;
        })), z.width(P).height(Q).color(ca.filter(function (a, b) {
          return !k[b].disabled && 2 == k[b].yAxis && "scatter" == k[b].type;
        })), A.width(P).height(Q).color(ca.filter(function (a, b) {
          return !k[b].disabled && 1 == k[b].yAxis && "bar" == k[b].type;
        })), B.width(P).height(Q).color(ca.filter(function (a, b) {
          return !k[b].disabled && 2 == k[b].yAxis && "bar" == k[b].type;
        })), C.width(P).height(Q).interpolate(n).color(ca.filter(function (a, b) {
          return !k[b].disabled && 1 == k[b].yAxis && "area" == k[b].type;
        })), D.width(P).height(Q).interpolate(n).color(ca.filter(function (a, b) {
          return !k[b].disabled && 2 == k[b].yAxis && "area" == k[b].type;
        })), ba.attr("transform", "translate(" + e.left + "," + e.top + ")");var fa = ba.select(".lines1Wrap").datum(R.filter(function (a) {
          return !a.disabled;
        })),
            ga = ba.select(".scatters1Wrap").datum(T.filter(function (a) {
          return !a.disabled;
        })),
            ha = ba.select(".bars1Wrap").datum(V.filter(function (a) {
          return !a.disabled;
        })),
            ia = ba.select(".stack1Wrap").datum(X.filter(function (a) {
          return !a.disabled;
        })),
            ja = ba.select(".lines2Wrap").datum(S.filter(function (a) {
          return !a.disabled;
        })),
            ka = ba.select(".scatters2Wrap").datum(U.filter(function (a) {
          return !a.disabled;
        })),
            la = ba.select(".bars2Wrap").datum(W.filter(function (a) {
          return !a.disabled;
        })),
            ma = ba.select(".stack2Wrap").datum(Y.filter(function (a) {
          return !a.disabled;
        })),
            na = X.length ? X.map(function (a) {
          return a.values;
        }).reduce(function (a, b) {
          return a.map(function (a, c) {
            return { x: a.x, y: a.y + b[c].y };
          });
        }).concat([{ x: 0, y: 0 }]) : [],
            oa = Y.length ? Y.map(function (a) {
          return a.values;
        }).reduce(function (a, b) {
          return a.map(function (a, c) {
            return { x: a.x, y: a.y + b[c].y };
          });
        }).concat([{ x: 0, y: 0 }]) : [];u.domain(c || d3.extent(d3.merge(Z).concat(na), function (a) {
          return a.y;
        })).range([0, Q]), v.domain(d || d3.extent(d3.merge($).concat(oa), function (a) {
          return a.y;
        })).range([0, Q]), w.yDomain(u.domain()), y.yDomain(u.domain()), A.yDomain(u.domain()), C.yDomain(u.domain()), x.yDomain(v.domain()), z.yDomain(v.domain()), B.yDomain(v.domain()), D.yDomain(v.domain()), X.length && d3.transition(ia).call(C), Y.length && d3.transition(ma).call(D), V.length && d3.transition(ha).call(A), W.length && d3.transition(la).call(B), R.length && d3.transition(fa).call(w), S.length && d3.transition(ja).call(x), T.length && d3.transition(ga).call(y), U.length && d3.transition(ka).call(z), E._ticks(a.utils.calcTicksX(P / 100, k)).tickSize(-Q, 0), ba.select(".nv-x.nv-axis").attr("transform", "translate(0," + Q + ")"), d3.transition(ba.select(".nv-x.nv-axis")).call(E), F._ticks(a.utils.calcTicksY(Q / 36, k)).tickSize(-P, 0), d3.transition(ba.select(".nv-y1.nv-axis")).call(F), G._ticks(a.utils.calcTicksY(Q / 36, k)).tickSize(-P, 0), d3.transition(ba.select(".nv-y2.nv-axis")).call(G), ba.select(".nv-y1.nv-axis").classed("nv-disabled", Z.length ? !1 : !0).attr("transform", "translate(" + t.range()[0] + ",0)"), ba.select(".nv-y2.nv-axis").classed("nv-disabled", $.length ? !1 : !0).attr("transform", "translate(" + t.range()[1] + ",0)"), H.dispatch.on("stateChange", function (a) {
          b.update();
        }), q && (p.width(P).height(Q).margin({ left: e.left, top: e.top }).svgContainer(O).xScale(t), _.select(".nv-interactive").call(p)), q ? (p.dispatch.on("elementMousemove", function (c) {
          M();var d,
              e,
              f,
              h = [];k.filter(function (a, b) {
            return a.seriesIndex = b, !a.disabled;
          }).forEach(function (i, j) {
            var k = t.domain(),
                l = i.values.filter(function (a, c) {
              return b.x()(a, c) >= k[0] && b.x()(a, c) <= k[1];
            });e = a.interactiveBisect(l, c.pointXValue, b.x());var m = l[e],
                n = b.y()(m, e);null !== n && N(j, e, !0), void 0 !== m && (void 0 === d && (d = m), void 0 === f && (f = t(b.x()(m, e))), h.push({ key: i.key, value: n, color: g(i, i.seriesIndex), data: m, yAxis: 2 == i.yAxis ? G : F }));
          });var i = function i(a, b) {
            var c = h[b].yAxis;return null == a ? "N/A" : c.tickFormat()(a);
          };p.tooltip.headerFormatter(function (a, b) {
            return E.tickFormat()(a, b);
          }).valueFormatter(p.tooltip.valueFormatter() || i).data({ value: b.x()(d, e), index: e, series: h })(), p.renderGuideLine(f);
        }), p.dispatch.on("elementMouseout", function (a) {
          M();
        })) : (w.dispatch.on("elementMouseover.tooltip", o), x.dispatch.on("elementMouseover.tooltip", o), w.dispatch.on("elementMouseout.tooltip", function (a) {
          I.hidden(!0);
        }), x.dispatch.on("elementMouseout.tooltip", function (a) {
          I.hidden(!0);
        }), y.dispatch.on("elementMouseover.tooltip", s), z.dispatch.on("elementMouseover.tooltip", s), y.dispatch.on("elementMouseout.tooltip", function (a) {
          I.hidden(!0);
        }), z.dispatch.on("elementMouseout.tooltip", function (a) {
          I.hidden(!0);
        }), C.dispatch.on("elementMouseover.tooltip", J), D.dispatch.on("elementMouseover.tooltip", J), C.dispatch.on("elementMouseout.tooltip", function (a) {
          I.hidden(!0);
        }), D.dispatch.on("elementMouseout.tooltip", function (a) {
          I.hidden(!0);
        }), A.dispatch.on("elementMouseover.tooltip", L), B.dispatch.on("elementMouseover.tooltip", L), A.dispatch.on("elementMouseout.tooltip", function (a) {
          I.hidden(!0);
        }), B.dispatch.on("elementMouseout.tooltip", function (a) {
          I.hidden(!0);
        }), A.dispatch.on("elementMousemove.tooltip", function (a) {
          I();
        }), B.dispatch.on("elementMousemove.tooltip", function (a) {
          I();
        }));
      }), b;
    }var c,
        d,
        e = { top: 30, right: 20, bottom: 50, left: 60 },
        f = null,
        g = a.utils.defaultColor(),
        h = null,
        i = null,
        j = !0,
        k = null,
        l = function l(a) {
      return a.x;
    },
        m = function m(a) {
      return a.y;
    },
        n = "linear",
        o = !0,
        p = a.interactiveGuideline(),
        q = !1,
        r = " (right axis)",
        s = 250,
        t = d3.scale.linear(),
        u = d3.scale.linear(),
        v = d3.scale.linear(),
        w = a.models.line().yScale(u).duration(s),
        x = a.models.line().yScale(v).duration(s),
        y = a.models.scatter().yScale(u).duration(s),
        z = a.models.scatter().yScale(v).duration(s),
        A = a.models.multiBar().stacked(!1).yScale(u).duration(s),
        B = a.models.multiBar().stacked(!1).yScale(v).duration(s),
        C = a.models.stackedArea().yScale(u).duration(s),
        D = a.models.stackedArea().yScale(v).duration(s),
        E = a.models.axis().scale(t).orient("bottom").tickPadding(5).duration(s),
        F = a.models.axis().scale(u).orient("left").duration(s),
        G = a.models.axis().scale(v).orient("right").duration(s),
        H = a.models.legend().height(30),
        I = a.models.tooltip(),
        J = d3.dispatch(),
        K = [w, x, y, z, A, B, C, D];return b.dispatch = J, b.legend = H, b.lines1 = w, b.lines2 = x, b.scatters1 = y, b.scatters2 = z, b.bars1 = A, b.bars2 = B, b.stack1 = C, b.stack2 = D, b.xAxis = E, b.yAxis1 = F, b.yAxis2 = G, b.tooltip = I, b.interactiveLayer = p, b.options = a.utils.optionsFunc.bind(b), b._options = Object.create({}, { width: { get: function get() {
          return h;
        }, set: function set(a) {
          h = a;
        } }, height: { get: function get() {
          return i;
        }, set: function set(a) {
          i = a;
        } }, showLegend: { get: function get() {
          return j;
        }, set: function set(a) {
          j = a;
        } }, yDomain1: { get: function get() {
          return c;
        }, set: function set(a) {
          c = a;
        } }, yDomain2: { get: function get() {
          return d;
        }, set: function set(a) {
          d = a;
        } }, noData: { get: function get() {
          return k;
        }, set: function set(a) {
          k = a;
        } }, interpolate: { get: function get() {
          return n;
        }, set: function set(a) {
          n = a;
        } }, legendRightAxisHint: { get: function get() {
          return r;
        }, set: function set(a) {
          r = a;
        } }, margin: { get: function get() {
          return e;
        }, set: function set(a) {
          void 0 !== a.top && (e.top = a.top, f = a.top), e.right = void 0 !== a.right ? a.right : e.right, e.bottom = void 0 !== a.bottom ? a.bottom : e.bottom, e.left = void 0 !== a.left ? a.left : e.left;
        } }, color: { get: function get() {
          return g;
        }, set: function set(b) {
          g = a.utils.getColor(b);
        } }, x: { get: function get() {
          return l;
        }, set: function set(a) {
          l = a, w.x(a), x.x(a), y.x(a), z.x(a), A.x(a), B.x(a), C.x(a), D.x(a);
        } }, y: { get: function get() {
          return m;
        }, set: function set(a) {
          m = a, w.y(a), x.y(a), y.y(a), z.y(a), C.y(a), D.y(a), A.y(a), B.y(a);
        } }, useVoronoi: { get: function get() {
          return o;
        }, set: function set(a) {
          o = a, w.useVoronoi(a), x.useVoronoi(a), C.useVoronoi(a), D.useVoronoi(a);
        } }, useInteractiveGuideline: { get: function get() {
          return q;
        }, set: function set(a) {
          q = a, q && (w.interactive(!1), w.useVoronoi(!1), x.interactive(!1), x.useVoronoi(!1), C.interactive(!1), C.useVoronoi(!1), D.interactive(!1), D.useVoronoi(!1), y.interactive(!1), z.interactive(!1));
        } }, duration: { get: function get() {
          return s;
        }, set: function set(a) {
          s = a, [w, x, C, D, y, z, E, F, G].forEach(function (a) {
            a.duration(s);
          });
        } } }), a.utils.initOptions(b), b;
  }, a.models.ohlcBar = function () {
    "use strict";
    function b(y) {
      return y.each(function (b) {
        k = d3.select(this);var y = a.utils.availableWidth(h, k, g),
            A = a.utils.availableHeight(i, k, g);a.utils.initSVG(k);var B = y / b[0].values.length * .9;l.domain(c || d3.extent(b[0].values.map(n).concat(t))), v ? l.range(e || [.5 * y / b[0].values.length, y * (b[0].values.length - .5) / b[0].values.length]) : l.range(e || [5 + B / 2, y - B / 2 - 5]), m.domain(d || [d3.min(b[0].values.map(s).concat(u)), d3.max(b[0].values.map(r).concat(u))]).range(f || [A, 0]), l.domain()[0] === l.domain()[1] && (l.domain()[0] ? l.domain([l.domain()[0] - .01 * l.domain()[0], l.domain()[1] + .01 * l.domain()[1]]) : l.domain([-1, 1])), m.domain()[0] === m.domain()[1] && (m.domain()[0] ? m.domain([m.domain()[0] + .01 * m.domain()[0], m.domain()[1] - .01 * m.domain()[1]]) : m.domain([-1, 1]));var C = d3.select(this).selectAll("g.nv-wrap.nv-ohlcBar").data([b[0].values]),
            D = C.enter().append("g").attr("class", "nvd3 nv-wrap nv-ohlcBar"),
            E = D.append("defs"),
            F = D.append("g"),
            G = C.select("g");F.append("g").attr("class", "nv-ticks"), C.attr("transform", "translate(" + g.left + "," + g.top + ")"), k.on("click", function (a, b) {
          z.chartClick({ data: a, index: b, pos: d3.event, id: j });
        }), E.append("clipPath").attr("id", "nv-chart-clip-path-" + j).append("rect"), C.select("#nv-chart-clip-path-" + j + " rect").attr("width", y).attr("height", A), G.attr("clip-path", w ? "url(#nv-chart-clip-path-" + j + ")" : "");var H = C.select(".nv-ticks").selectAll(".nv-tick").data(function (a) {
          return a;
        });H.exit().remove(), H.enter().append("path").attr("class", function (a, b, c) {
          return (p(a, b) > q(a, b) ? "nv-tick negative" : "nv-tick positive") + " nv-tick-" + c + "-" + b;
        }).attr("d", function (a, b) {
          return "m0,0l0," + (m(p(a, b)) - m(r(a, b))) + "l" + -B / 2 + ",0l" + B / 2 + ",0l0," + (m(s(a, b)) - m(p(a, b))) + "l0," + (m(q(a, b)) - m(s(a, b))) + "l" + B / 2 + ",0l" + -B / 2 + ",0z";
        }).attr("transform", function (a, b) {
          return "translate(" + l(n(a, b)) + "," + m(r(a, b)) + ")";
        }).attr("fill", function (a, b) {
          return x[0];
        }).attr("stroke", function (a, b) {
          return x[0];
        }).attr("x", 0).attr("y", function (a, b) {
          return m(Math.max(0, o(a, b)));
        }).attr("height", function (a, b) {
          return Math.abs(m(o(a, b)) - m(0));
        }), H.attr("class", function (a, b, c) {
          return (p(a, b) > q(a, b) ? "nv-tick negative" : "nv-tick positive") + " nv-tick-" + c + "-" + b;
        }), d3.transition(H).attr("transform", function (a, b) {
          return "translate(" + l(n(a, b)) + "," + m(r(a, b)) + ")";
        }).attr("d", function (a, c) {
          var d = y / b[0].values.length * .9;return "m0,0l0," + (m(p(a, c)) - m(r(a, c))) + "l" + -d / 2 + ",0l" + d / 2 + ",0l0," + (m(s(a, c)) - m(p(a, c))) + "l0," + (m(q(a, c)) - m(s(a, c))) + "l" + d / 2 + ",0l" + -d / 2 + ",0z";
        });
      }), b;
    }var c,
        d,
        e,
        f,
        g = { top: 0, right: 0, bottom: 0, left: 0 },
        h = null,
        i = null,
        j = Math.floor(1e4 * Math.random()),
        k = null,
        l = d3.scale.linear(),
        m = d3.scale.linear(),
        n = function n(a) {
      return a.x;
    },
        o = function o(a) {
      return a.y;
    },
        p = function p(a) {
      return a.open;
    },
        q = function q(a) {
      return a.close;
    },
        r = function r(a) {
      return a.high;
    },
        s = function s(a) {
      return a.low;
    },
        t = [],
        u = [],
        v = !1,
        w = !0,
        x = a.utils.defaultColor(),
        y = !1,
        z = d3.dispatch("stateChange", "changeState", "renderEnd", "chartClick", "elementClick", "elementDblClick", "elementMouseover", "elementMouseout", "elementMousemove");return b.highlightPoint = function (a, c) {
      b.clearHighlights(), k.select(".nv-ohlcBar .nv-tick-0-" + a).classed("hover", c);
    }, b.clearHighlights = function () {
      k.select(".nv-ohlcBar .nv-tick.hover").classed("hover", !1);
    }, b.dispatch = z, b.options = a.utils.optionsFunc.bind(b), b._options = Object.create({}, { width: { get: function get() {
          return h;
        }, set: function set(a) {
          h = a;
        } }, height: { get: function get() {
          return i;
        }, set: function set(a) {
          i = a;
        } }, xScale: { get: function get() {
          return l;
        }, set: function set(a) {
          l = a;
        } }, yScale: { get: function get() {
          return m;
        }, set: function set(a) {
          m = a;
        } }, xDomain: { get: function get() {
          return c;
        }, set: function set(a) {
          c = a;
        } }, yDomain: { get: function get() {
          return d;
        }, set: function set(a) {
          d = a;
        } }, xRange: { get: function get() {
          return e;
        }, set: function set(a) {
          e = a;
        } }, yRange: { get: function get() {
          return f;
        }, set: function set(a) {
          f = a;
        } }, forceX: { get: function get() {
          return t;
        }, set: function set(a) {
          t = a;
        } }, forceY: { get: function get() {
          return u;
        }, set: function set(a) {
          u = a;
        } }, padData: { get: function get() {
          return v;
        }, set: function set(a) {
          v = a;
        } }, clipEdge: { get: function get() {
          return w;
        }, set: function set(a) {
          w = a;
        } }, id: { get: function get() {
          return j;
        }, set: function set(a) {
          j = a;
        } }, interactive: { get: function get() {
          return y;
        }, set: function set(a) {
          y = a;
        } }, x: { get: function get() {
          return n;
        }, set: function set(a) {
          n = a;
        } }, y: { get: function get() {
          return o;
        }, set: function set(a) {
          o = a;
        } }, open: { get: function get() {
          return p();
        }, set: function set(a) {
          p = a;
        } }, close: { get: function get() {
          return q();
        }, set: function set(a) {
          q = a;
        } }, high: { get: function get() {
          return r;
        }, set: function set(a) {
          r = a;
        } }, low: { get: function get() {
          return s;
        }, set: function set(a) {
          s = a;
        } }, margin: { get: function get() {
          return g;
        }, set: function set(a) {
          g.top = void 0 != a.top ? a.top : g.top, g.right = void 0 != a.right ? a.right : g.right, g.bottom = void 0 != a.bottom ? a.bottom : g.bottom, g.left = void 0 != a.left ? a.left : g.left;
        } }, color: { get: function get() {
          return x;
        }, set: function set(b) {
          x = a.utils.getColor(b);
        } } }), a.utils.initOptions(b), b;
  }, a.models.parallelCoordinates = function () {
    "use strict";
    function b(B) {
      return A.reset(), B.each(function (b) {
        function A(a) {
          return x(o.map(function (b) {
            if (isNaN(a.values[b.key]) || isNaN(parseFloat(a.values[b.key])) || O) {
              var c = l[b.key].domain(),
                  d = l[b.key].range(),
                  e = c[0] - (c[1] - c[0]) / 9;if (v.indexOf(b.key) < 0) {
                var f = d3.scale.linear().domain([e, c[1]]).range([j - 12, d[1]]);l[b.key].brush.y(f), v.push(b.key);
              }if (isNaN(a.values[b.key]) || isNaN(parseFloat(a.values[b.key]))) return [k(b.key), l[b.key](e)];
            }return void 0 !== U && (v.length > 0 || O ? (U.style("display", "inline"), V.style("display", "inline")) : (U.style("display", "none"), V.style("display", "none"))), [k(b.key), l[b.key](a.values[b.key])];
          }));
        }function B(a) {
          s.forEach(function (b) {
            var c = l[b.dimension].brush.y().domain();b.hasOnlyNaN && (b.extent[1] = (l[b.dimension].domain()[1] - c[0]) * (b.extent[1] - b.extent[0]) / (N[b.dimension] - b.extent[0]) + c[0]), b.hasNaN && (b.extent[0] = c[0]), a && l[b.dimension].brush.extent(b.extent);
          }), e.select(".nv-brushBackground").each(function (a) {
            d3.select(this).call(l[a.key].brush);
          }).selectAll("rect").attr("x", -8).attr("width", 16), F();
        }function C() {
          q === !1 && (q = !0, B(!0));
        }function D() {
          $ = p.filter(function (a) {
            return !l[a].brush.empty();
          }), _ = $.map(function (a) {
            return l[a].brush.extent();
          }), s = [], $.forEach(function (a, b) {
            s[b] = { dimension: a, extent: _[b], hasNaN: !1, hasOnlyNaN: !1 };
          }), t = [], c.style("display", function (a) {
            var b = $.every(function (b, c) {
              return (isNaN(a.values[b]) || isNaN(parseFloat(a.values[b]))) && _[c][0] == l[b].brush.y().domain()[0] ? !0 : _[c][0] <= a.values[b] && a.values[b] <= _[c][1] && !isNaN(parseFloat(a.values[b]));
            });return b && t.push(a), b ? null : "none";
          }), F(), z.brush({ filters: s, active: t });
        }function E() {
          var a = $.length > 0 ? !0 : !1;s.forEach(function (a) {
            a.extent[0] === l[a.dimension].brush.y().domain()[0] && v.indexOf(a.dimension) >= 0 && (a.hasNaN = !0), a.extent[1] < l[a.dimension].domain()[0] && (a.hasOnlyNaN = !0);
          }), z.brushEnd(t, a);
        }function F() {
          e.select(".nv-axis").each(function (a, b) {
            var c = s.filter(function (b) {
              return b.dimension == a.key;
            });P[a.key] = l[a.key].domain(), 0 != c.length && q && (P[a.key] = [], c[0].extent[1] > l[a.key].domain()[0] && (P[a.key] = [c[0].extent[1]]), c[0].extent[0] >= l[a.key].domain()[0] && P[a.key].push(c[0].extent[0])), d3.select(this).call(y.scale(l[a.key]).tickFormat(a.format).tickValues(P[a.key]));
          });
        }function G(a) {
          u[a.key] = this.parentNode.__origin__ = k(a.key), d.attr("visibility", "hidden");
        }function H(a) {
          u[a.key] = Math.min(i, Math.max(0, this.parentNode.__origin__ += d3.event.x)), c.attr("d", A), o.sort(function (a, b) {
            return J(a.key) - J(b.key);
          }), o.forEach(function (a, b) {
            return a.currentPosition = b;
          }), k.domain(o.map(function (a) {
            return a.key;
          })), e.attr("transform", function (a) {
            return "translate(" + J(a.key) + ")";
          });
        }function I(a, b) {
          delete this.parentNode.__origin__, delete u[a.key], d3.select(this.parentNode).attr("transform", "translate(" + k(a.key) + ")"), c.attr("d", A), d.attr("d", A).attr("visibility", null), z.dimensionsOrder(o);
        }function J(a) {
          var b = u[a];return null == b ? k(a) : b;
        }var K = d3.select(this);if (i = a.utils.availableWidth(g, K, f), j = a.utils.availableHeight(h, K, f), a.utils.initSVG(K), void 0 === b[0].values) {
          var L = [];b.forEach(function (a) {
            var b = {},
                c = Object.keys(a);c.forEach(function (c) {
              "name" !== c && (b[c] = a[c]);
            }), L.push({ key: a.name, values: b });
          }), b = L;
        }var M = b.map(function (a) {
          return a.values;
        });0 === t.length && (t = b), p = n.sort(function (a, b) {
          return a.currentPosition - b.currentPosition;
        }).map(function (a) {
          return a.key;
        }), o = n.filter(function (a) {
          return !a.disabled;
        }), k.rangePoints([0, i], 1).domain(o.map(function (a) {
          return a.key;
        }));var N = {},
            O = !1,
            P = [];p.forEach(function (a) {
          var b = d3.extent(M, function (b) {
            return +b[a];
          }),
              c = b[0],
              d = b[1],
              e = !1;(isNaN(c) || isNaN(d)) && (e = !0, c = 0, d = 0), c === d && (c -= 1, d += 1);var f = s.filter(function (b) {
            return b.dimension == a;
          });0 !== f.length && (e ? (c = l[a].domain()[0], d = l[a].domain()[1]) : !f[0].hasOnlyNaN && q ? (c = c > f[0].extent[0] ? f[0].extent[0] : c, d = d < f[0].extent[1] ? f[0].extent[1] : d) : f[0].hasNaN && (d = d < f[0].extent[1] ? f[0].extent[1] : d, N[a] = l[a].domain()[1], O = !0)), l[a] = d3.scale.linear().domain([c, d]).range([.9 * (j - 12), 0]), v = [], l[a].brush = d3.svg.brush().y(l[a]).on("brushstart", C).on("brush", D).on("brushend", E);
        });var Q = K.selectAll("g.nv-wrap.nv-parallelCoordinates").data([b]),
            R = Q.enter().append("g").attr("class", "nvd3 nv-wrap nv-parallelCoordinates"),
            S = R.append("g"),
            T = Q.select("g");S.append("g").attr("class", "nv-parallelCoordinates background"), S.append("g").attr("class", "nv-parallelCoordinates foreground"), S.append("g").attr("class", "nv-parallelCoordinates missingValuesline"), Q.attr("transform", "translate(" + f.left + "," + f.top + ")"), x.interpolate("cardinal").tension(w), y.orient("left");var U,
            V,
            W = d3.behavior.drag().on("dragstart", G).on("drag", H).on("dragend", I),
            X = k.range()[1] - k.range()[0];if (X = isNaN(X) ? k.range()[0] : X, !isNaN(X)) {
          var Y = [0 + X / 2, j - 12, i - X / 2, j - 12];U = Q.select(".missingValuesline").selectAll("line").data([Y]), U.enter().append("line"), U.exit().remove(), U.attr("x1", function (a) {
            return a[0];
          }).attr("y1", function (a) {
            return a[1];
          }).attr("x2", function (a) {
            return a[2];
          }).attr("y2", function (a) {
            return a[3];
          }), V = Q.select(".missingValuesline").selectAll("text").data([m]), V.append("text").data([m]), V.enter().append("text"), V.exit().remove(), V.attr("y", j).attr("x", i - 92 - X / 2).text(function (a) {
            return a;
          });
        }d = Q.select(".background").selectAll("path").data(b), d.enter().append("path"), d.exit().remove(), d.attr("d", A), c = Q.select(".foreground").selectAll("path").data(b), c.enter().append("path"), c.exit().remove(), c.attr("d", A).style("stroke-width", function (a, b) {
          return isNaN(a.strokeWidth) && (a.strokeWidth = 1), a.strokeWidth;
        }).attr("stroke", function (a, b) {
          return a.color || r(a, b);
        }), c.on("mouseover", function (a, b) {
          d3.select(this).classed("hover", !0).style("stroke-width", a.strokeWidth + 2 + "px").style("stroke-opacity", 1), z.elementMouseover({ label: a.name, color: a.color || r(a, b), values: a.values, dimensions: o });
        }), c.on("mouseout", function (a, b) {
          d3.select(this).classed("hover", !1).style("stroke-width", a.strokeWidth + "px").style("stroke-opacity", .7), z.elementMouseout({ label: a.name, index: b });
        }), c.on("mousemove", function (a, b) {
          z.elementMousemove();
        }), c.on("click", function (a) {
          z.elementClick({ id: a.id });
        }), e = T.selectAll(".dimension").data(o);var Z = e.enter().append("g").attr("class", "nv-parallelCoordinates dimension");e.attr("transform", function (a) {
          return "translate(" + k(a.key) + ",0)";
        }), Z.append("g").attr("class", "nv-axis"), Z.append("text").attr("class", "nv-label").style("cursor", "move").attr("dy", "-1em").attr("text-anchor", "middle").on("mouseover", function (a, b) {
          z.elementMouseover({ label: a.tooltip || a.key, color: a.color });
        }).on("mouseout", function (a, b) {
          z.elementMouseout({ label: a.tooltip });
        }).on("mousemove", function (a, b) {
          z.elementMousemove();
        }).call(W), Z.append("g").attr("class", "nv-brushBackground"), e.exit().remove(), e.select(".nv-label").text(function (a) {
          return a.key;
        }), B(q);var $ = p.filter(function (a) {
          return !l[a].brush.empty();
        }),
            _ = $.map(function (a) {
          return l[a].brush.extent();
        }),
            aa = t.slice(0);t = [], c.style("display", function (a) {
          var b = $.every(function (b, c) {
            return (isNaN(a.values[b]) || isNaN(parseFloat(a.values[b]))) && _[c][0] == l[b].brush.y().domain()[0] ? !0 : _[c][0] <= a.values[b] && a.values[b] <= _[c][1] && !isNaN(parseFloat(a.values[b]));
          });return b && t.push(a), b ? null : "none";
        }), (s.length > 0 || !a.utils.arrayEquals(t, aa)) && z.activeChanged(t);
      }), b;
    }var c,
        d,
        e,
        f = { top: 30, right: 0, bottom: 10, left: 0 },
        g = null,
        h = null,
        i = null,
        j = null,
        k = d3.scale.ordinal(),
        l = {},
        m = "undefined values",
        n = [],
        o = [],
        p = [],
        q = !0,
        r = a.utils.defaultColor(),
        s = [],
        t = [],
        u = [],
        v = [],
        w = 1,
        x = d3.svg.line(),
        y = d3.svg.axis(),
        z = d3.dispatch("brushstart", "brush", "brushEnd", "dimensionsOrder", "stateChange", "elementClick", "elementMouseover", "elementMouseout", "elementMousemove", "renderEnd", "activeChanged"),
        A = a.utils.renderWatch(z);return b.dispatch = z, b.options = a.utils.optionsFunc.bind(b), b._options = Object.create({}, { width: { get: function get() {
          return g;
        }, set: function set(a) {
          g = a;
        } }, height: { get: function get() {
          return h;
        }, set: function set(a) {
          h = a;
        } }, dimensionData: { get: function get() {
          return n;
        }, set: function set(a) {
          n = a;
        } }, displayBrush: { get: function get() {
          return q;
        }, set: function set(a) {
          q = a;
        } }, filters: { get: function get() {
          return s;
        }, set: function set(a) {
          s = a;
        } }, active: { get: function get() {
          return t;
        }, set: function set(a) {
          t = a;
        } }, lineTension: { get: function get() {
          return w;
        }, set: function set(a) {
          w = a;
        } }, undefinedValuesLabel: { get: function get() {
          return m;
        }, set: function set(a) {
          m = a;
        } }, dimensions: { get: function get() {
          return n.map(function (a) {
            return a.key;
          });
        }, set: function set(b) {
          a.deprecated("dimensions", "use dimensionData instead"), 0 === n.length ? b.forEach(function (a) {
            n.push({ key: a });
          }) : b.forEach(function (a, b) {
            n[b].key = a;
          });
        } }, dimensionNames: { get: function get() {
          return n.map(function (a) {
            return a.key;
          });
        }, set: function set(b) {
          a.deprecated("dimensionNames", "use dimensionData instead"), p = [], 0 === n.length ? b.forEach(function (a) {
            n.push({ key: a });
          }) : b.forEach(function (a, b) {
            n[b].key = a;
          });
        } }, dimensionFormats: { get: function get() {
          return n.map(function (a) {
            return a.format;
          });
        }, set: function set(b) {
          a.deprecated("dimensionFormats", "use dimensionData instead"), 0 === n.length ? b.forEach(function (a) {
            n.push({ format: a });
          }) : b.forEach(function (a, b) {
            n[b].format = a;
          });
        } }, margin: { get: function get() {
          return f;
        }, set: function set(a) {
          f.top = void 0 !== a.top ? a.top : f.top, f.right = void 0 !== a.right ? a.right : f.right, f.bottom = void 0 !== a.bottom ? a.bottom : f.bottom, f.left = void 0 !== a.left ? a.left : f.left;
        } }, color: { get: function get() {
          return r;
        }, set: function set(b) {
          r = a.utils.getColor(b);
        } } }), a.utils.initOptions(b), b;
  }, a.models.parallelCoordinatesChart = function () {
    "use strict";
    function b(e) {
      return s.reset(), s.models(c), e.each(function (e) {
        var k = d3.select(this);a.utils.initSVG(k);var p = a.utils.availableWidth(h, k, f),
            q = a.utils.availableHeight(i, k, f);if (b.update = function () {
          k.call(b);
        }, b.container = this, l.setter(u(m), b.update).getter(t(m)).update(), l.disabled = m.map(function (a) {
          return !!a.disabled;
        }), m = m.map(function (a) {
          return a.disabled = !!a.disabled, a;
        }), m.forEach(function (a, b) {
          a.originalPosition = isNaN(a.originalPosition) ? b : a.originalPosition, a.currentPosition = isNaN(a.currentPosition) ? b : a.currentPosition;
        }), !o) {
          var s;o = {};for (s in l) {
            l[s] instanceof Array ? o[s] = l[s].slice(0) : o[s] = l[s];
          }
        }if (!e || !e.length) return a.utils.noData(b, k), b;k.selectAll(".nv-noData").remove();var v = k.selectAll("g.nv-wrap.nv-parallelCoordinatesChart").data([e]),
            w = v.enter().append("g").attr("class", "nvd3 nv-wrap nv-parallelCoordinatesChart").append("g"),
            x = v.select("g");w.append("g").attr("class", "nv-parallelCoordinatesWrap"), w.append("g").attr("class", "nv-legendWrap"), x.select("rect").attr("width", p).attr("height", q > 0 ? q : 0), j ? (d.width(p).color(function (a) {
          return "rgb(188,190,192)";
        }), x.select(".nv-legendWrap").datum(m.sort(function (a, b) {
          return a.originalPosition - b.originalPosition;
        })).call(d), g || d.height() === f.top || (f.top = d.height(), q = a.utils.availableHeight(i, k, f)), v.select(".nv-legendWrap").attr("transform", "translate( 0 ," + -f.top + ")")) : x.select(".nv-legendWrap").selectAll("*").remove(), v.attr("transform", "translate(" + f.left + "," + f.top + ")"), c.width(p).height(q).dimensionData(m).displayBrush(n);var y = x.select(".nv-parallelCoordinatesWrap ").datum(e);y.transition().call(c), c.dispatch.on("brushEnd", function (a, b) {
          b ? (n = !0, r.brushEnd(a)) : n = !1;
        }), d.dispatch.on("stateChange", function (a) {
          for (var c in a) {
            l[c] = a[c];
          }r.stateChange(l), b.update();
        }), c.dispatch.on("dimensionsOrder", function (a) {
          m.sort(function (a, b) {
            return a.currentPosition - b.currentPosition;
          });var b = !1;m.forEach(function (a, c) {
            a.currentPosition = c, a.currentPosition !== a.originalPosition && (b = !0);
          }), r.dimensionsOrder(m, b);
        }), r.on("changeState", function (a) {
          "undefined" != typeof a.disabled && (m.forEach(function (b, c) {
            b.disabled = a.disabled[c];
          }), l.disabled = a.disabled), b.update();
        });
      }), s.renderEnd("parraleleCoordinateChart immediate"), b;
    }var c = a.models.parallelCoordinates(),
        d = a.models.legend(),
        e = a.models.tooltip(),
        f = (a.models.tooltip(), { top: 0, right: 0, bottom: 0, left: 0 }),
        g = null,
        h = null,
        i = null,
        j = !0,
        k = a.utils.defaultColor(),
        l = a.utils.state(),
        m = [],
        n = !0,
        o = null,
        p = null,
        q = "undefined",
        r = d3.dispatch("dimensionsOrder", "brushEnd", "stateChange", "changeState", "renderEnd"),
        s = a.utils.renderWatch(r),
        t = function t(a) {
      return function () {
        return { active: a.map(function (a) {
            return !a.disabled;
          }) };
      };
    },
        u = function u(a) {
      return function (b) {
        void 0 !== b.active && a.forEach(function (a, c) {
          a.disabled = !b.active[c];
        });
      };
    };return e.contentGenerator(function (a) {
      var b = '<table><thead><tr><td class="legend-color-guide"><div style="background-color:' + a.color + '"></div></td><td><strong>' + a.key + "</strong></td></tr></thead>";return 0 !== a.series.length && (b += '<tbody><tr><td height ="10px"></td></tr>', a.series.forEach(function (a) {
        b = b + '<tr><td class="legend-color-guide"><div style="background-color:' + a.color + '"></div></td><td class="key">' + a.key + '</td><td class="value">' + a.value + "</td></tr>";
      }), b += "</tbody>"), b += "</table>";
    }), c.dispatch.on("elementMouseover.tooltip", function (a) {
      var b = { key: a.label, color: a.color, series: [] };a.values && (Object.keys(a.values).forEach(function (c) {
        var d = a.dimensions.filter(function (a) {
          return a.key === c;
        })[0];if (d) {
          var e;e = isNaN(a.values[c]) || isNaN(parseFloat(a.values[c])) ? q : d.format(a.values[c]), b.series.push({ idx: d.currentPosition, key: c, value: e, color: d.color });
        }
      }), b.series.sort(function (a, b) {
        return a.idx - b.idx;
      })), e.data(b).hidden(!1);
    }), c.dispatch.on("elementMouseout.tooltip", function (a) {
      e.hidden(!0);
    }), c.dispatch.on("elementMousemove.tooltip", function () {
      e();
    }), b.dispatch = r, b.parallelCoordinates = c, b.legend = d, b.tooltip = e, b.options = a.utils.optionsFunc.bind(b), b._options = Object.create({}, { width: { get: function get() {
          return h;
        }, set: function set(a) {
          h = a;
        } }, height: { get: function get() {
          return i;
        }, set: function set(a) {
          i = a;
        } }, showLegend: { get: function get() {
          return j;
        }, set: function set(a) {
          j = a;
        } }, defaultState: { get: function get() {
          return o;
        }, set: function set(a) {
          o = a;
        } }, dimensionData: { get: function get() {
          return m;
        }, set: function set(a) {
          m = a;
        } }, displayBrush: { get: function get() {
          return n;
        }, set: function set(a) {
          n = a;
        } }, noData: { get: function get() {
          return p;
        }, set: function set(a) {
          p = a;
        } }, nanValue: { get: function get() {
          return q;
        }, set: function set(a) {
          q = a;
        } }, margin: { get: function get() {
          return f;
        }, set: function set(a) {
          void 0 !== a.top && (f.top = a.top, g = a.top), f.right = void 0 !== a.right ? a.right : f.right, f.bottom = void 0 !== a.bottom ? a.bottom : f.bottom, f.left = void 0 !== a.left ? a.left : f.left;
        } }, color: { get: function get() {
          return k;
        }, set: function set(b) {
          k = a.utils.getColor(b), d.color(k), c.color(k);
        } } }), a.utils.inheritOptions(b, c), a.utils.initOptions(b), b;
  }, a.models.pie = function () {
    "use strict";
    function b(F) {
      return E.reset(), F.each(function (b) {
        function F(a, b) {
          a.endAngle = isNaN(a.endAngle) ? 0 : a.endAngle, a.startAngle = isNaN(a.startAngle) ? 0 : a.startAngle, p || (a.innerRadius = 0);var c = d3.interpolate(this._current, a);return this._current = c(0), function (a) {
            return C[b](c(a));
          };
        }var G = d - c.left - c.right,
            H = e - c.top - c.bottom,
            I = Math.min(G, H) / 2,
            J = [],
            K = [];if (i = d3.select(this), 0 === A.length) for (var L = I - I / 5, M = y * I, N = 0; N < b[0].length; N++) {
          J.push(L), K.push(M);
        } else r ? (J = A.map(function (a) {
          return (a.outer - a.outer / 5) * I;
        }), K = A.map(function (a) {
          return (a.inner - a.inner / 5) * I;
        }), y = d3.min(A.map(function (a) {
          return a.inner - a.inner / 5;
        }))) : (J = A.map(function (a) {
          return a.outer * I;
        }), K = A.map(function (a) {
          return a.inner * I;
        }), y = d3.min(A.map(function (a) {
          return a.inner;
        })));a.utils.initSVG(i);var O = i.selectAll(".nv-wrap.nv-pie").data(b),
            P = O.enter().append("g").attr("class", "nvd3 nv-wrap nv-pie nv-chart-" + h),
            Q = P.append("g"),
            R = O.select("g"),
            S = Q.append("g").attr("class", "nv-pie");Q.append("g").attr("class", "nv-pieLabels"), O.attr("transform", "translate(" + c.left + "," + c.top + ")"), R.select(".nv-pie").attr("transform", "translate(" + G / 2 + "," + H / 2 + ")"), R.select(".nv-pieLabels").attr("transform", "translate(" + G / 2 + "," + H / 2 + ")"), i.on("click", function (a, b) {
          B.chartClick({ data: a, index: b, pos: d3.event, id: h });
        }), C = [], D = [];for (var N = 0; N < b[0].length; N++) {
          var T = d3.svg.arc().outerRadius(J[N]),
              U = d3.svg.arc().outerRadius(J[N] + 5);u !== !1 && (T.startAngle(u), U.startAngle(u)), w !== !1 && (T.endAngle(w), U.endAngle(w)), p && (T.innerRadius(K[N]), U.innerRadius(K[N])), T.cornerRadius && x && (T.cornerRadius(x), U.cornerRadius(x)), C.push(T), D.push(U);
        }var V = d3.layout.pie().sort(null).value(function (a) {
          return a.disabled ? 0 : g(a);
        });V.padAngle && v && V.padAngle(v), p && q && (S.append("text").attr("class", "nv-pie-title"), O.select(".nv-pie-title").style("text-anchor", "middle").text(function (a) {
          return q;
        }).style("font-size", Math.min(G, H) * y * 2 / (q.length + 2) + "px").attr("dy", "0.35em").attr("transform", function (a, b) {
          return "translate(0, " + s + ")";
        }));var W = O.select(".nv-pie").selectAll(".nv-slice").data(V),
            X = O.select(".nv-pieLabels").selectAll(".nv-label").data(V);W.exit().remove(), X.exit().remove();var Y = W.enter().append("g");Y.attr("class", "nv-slice"), Y.on("mouseover", function (a, b) {
          d3.select(this).classed("hover", !0), r && d3.select(this).select("path").transition().duration(70).attr("d", D[b]), B.elementMouseover({ data: a.data, index: b, color: d3.select(this).style("fill"), percent: (a.endAngle - a.startAngle) / (2 * Math.PI) });
        }), Y.on("mouseout", function (a, b) {
          d3.select(this).classed("hover", !1), r && d3.select(this).select("path").transition().duration(50).attr("d", C[b]), B.elementMouseout({ data: a.data, index: b });
        }), Y.on("mousemove", function (a, b) {
          B.elementMousemove({ data: a.data, index: b });
        }), Y.on("click", function (a, b) {
          var c = this;B.elementClick({ data: a.data, index: b, color: d3.select(this).style("fill"), event: d3.event, element: c });
        }), Y.on("dblclick", function (a, b) {
          B.elementDblClick({ data: a.data, index: b, color: d3.select(this).style("fill") });
        }), W.attr("fill", function (a, b) {
          return j(a.data, b);
        }), W.attr("stroke", function (a, b) {
          return j(a.data, b);
        });Y.append("path").each(function (a) {
          this._current = a;
        });if (W.select("path").transition().duration(z).attr("d", function (a, b) {
          return C[b](a);
        }).attrTween("d", F), l) {
          for (var Z = [], N = 0; N < b[0].length; N++) {
            Z.push(C[N]), m ? p && (Z[N] = d3.svg.arc().outerRadius(C[N].outerRadius()), u !== !1 && Z[N].startAngle(u), w !== !1 && Z[N].endAngle(w)) : p || Z[N].innerRadius(0);
          }X.enter().append("g").classed("nv-label", !0).each(function (a, b) {
            var c = d3.select(this);c.attr("transform", function (a, b) {
              if (t) {
                a.outerRadius = J[b] + 10, a.innerRadius = J[b] + 15;var c = (a.startAngle + a.endAngle) / 2 * (180 / Math.PI);return (a.startAngle + a.endAngle) / 2 < Math.PI ? c -= 90 : c += 90, "translate(" + Z[b].centroid(a) + ") rotate(" + c + ")";
              }return a.outerRadius = I + 10, a.innerRadius = I + 15, "translate(" + Z[b].centroid(a) + ")";
            }), c.append("rect").style("stroke", "#fff").style("fill", "#fff").attr("rx", 3).attr("ry", 3), c.append("text").style("text-anchor", t ? (a.startAngle + a.endAngle) / 2 < Math.PI ? "start" : "end" : "middle").style("fill", "#000");
          });var $ = {},
              _ = 14,
              aa = 140,
              ba = function ba(a) {
            return Math.floor(a[0] / aa) * aa + "," + Math.floor(a[1] / _) * _;
          },
              ca = function ca(a) {
            return (a.endAngle - a.startAngle) / (2 * Math.PI);
          };X.watchTransition(E, "pie labels").attr("transform", function (a, b) {
            if (t) {
              a.outerRadius = J[b] + 10, a.innerRadius = J[b] + 15;var c = (a.startAngle + a.endAngle) / 2 * (180 / Math.PI);return (a.startAngle + a.endAngle) / 2 < Math.PI ? c -= 90 : c += 90, "translate(" + Z[b].centroid(a) + ") rotate(" + c + ")";
            }a.outerRadius = I + 10, a.innerRadius = I + 15;var d = Z[b].centroid(a),
                e = ca(a);if (a.value && e >= o) {
              var f = ba(d);$[f] && (d[1] -= _), $[ba(d)] = !0;
            }return "translate(" + d + ")";
          }), X.select(".nv-label text").style("text-anchor", function (a, b) {
            return t ? (a.startAngle + a.endAngle) / 2 < Math.PI ? "start" : "end" : "middle";
          }).text(function (a, b) {
            var c = ca(a),
                d = "";if (!a.value || o > c) return "";if ("function" == typeof n) d = n(a, b, { key: f(a.data), value: g(a.data), percent: k(c) });else switch (n) {case "key":
                d = f(a.data);break;case "value":
                d = k(g(a.data));break;case "percent":
                d = d3.format("%")(c);}return d;
          });
        }
      }), E.renderEnd("pie immediate"), b;
    }var c = { top: 0, right: 0, bottom: 0, left: 0 },
        d = 500,
        e = 500,
        f = function f(a) {
      return a.x;
    },
        g = function g(a) {
      return a.y;
    },
        h = Math.floor(1e4 * Math.random()),
        i = null,
        j = a.utils.defaultColor(),
        k = d3.format(",.2f"),
        l = !0,
        m = !1,
        n = "key",
        o = .02,
        p = !1,
        q = !1,
        r = !0,
        s = 0,
        t = !1,
        u = !1,
        v = !1,
        w = !1,
        x = 0,
        y = .5,
        z = 250,
        A = [],
        B = d3.dispatch("chartClick", "elementClick", "elementDblClick", "elementMouseover", "elementMouseout", "elementMousemove", "renderEnd"),
        C = [],
        D = [],
        E = a.utils.renderWatch(B);return b.dispatch = B, b.options = a.utils.optionsFunc.bind(b), b._options = Object.create({}, { arcsRadius: { get: function get() {
          return A;
        }, set: function set(a) {
          A = a;
        } }, width: { get: function get() {
          return d;
        }, set: function set(a) {
          d = a;
        } }, height: { get: function get() {
          return e;
        }, set: function set(a) {
          e = a;
        } }, showLabels: { get: function get() {
          return l;
        }, set: function set(a) {
          l = a;
        } }, title: { get: function get() {
          return q;
        }, set: function set(a) {
          q = a;
        } }, titleOffset: { get: function get() {
          return s;
        }, set: function set(a) {
          s = a;
        } }, labelThreshold: { get: function get() {
          return o;
        }, set: function set(a) {
          o = a;
        } }, valueFormat: { get: function get() {
          return k;
        }, set: function set(a) {
          k = a;
        } }, x: { get: function get() {
          return f;
        }, set: function set(a) {
          f = a;
        } }, id: { get: function get() {
          return h;
        }, set: function set(a) {
          h = a;
        } }, endAngle: { get: function get() {
          return w;
        }, set: function set(a) {
          w = a;
        } }, startAngle: { get: function get() {
          return u;
        }, set: function set(a) {
          u = a;
        } }, padAngle: { get: function get() {
          return v;
        }, set: function set(a) {
          v = a;
        } }, cornerRadius: { get: function get() {
          return x;
        }, set: function set(a) {
          x = a;
        } }, donutRatio: { get: function get() {
          return y;
        }, set: function set(a) {
          y = a;
        } }, labelsOutside: { get: function get() {
          return m;
        }, set: function set(a) {
          m = a;
        } }, labelSunbeamLayout: { get: function get() {
          return t;
        }, set: function set(a) {
          t = a;
        } }, donut: { get: function get() {
          return p;
        }, set: function set(a) {
          p = a;
        } }, growOnHover: { get: function get() {
          return r;
        }, set: function set(a) {
          r = a;
        } }, pieLabelsOutside: { get: function get() {
          return m;
        }, set: function set(b) {
          m = b, a.deprecated("pieLabelsOutside", "use labelsOutside instead");
        } }, donutLabelsOutside: { get: function get() {
          return m;
        }, set: function set(b) {
          m = b, a.deprecated("donutLabelsOutside", "use labelsOutside instead");
        } }, labelFormat: { get: function get() {
          return k;
        }, set: function set(b) {
          k = b, a.deprecated("labelFormat", "use valueFormat instead");
        } }, margin: { get: function get() {
          return c;
        }, set: function set(a) {
          c.top = "undefined" != typeof a.top ? a.top : c.top, c.right = "undefined" != typeof a.right ? a.right : c.right, c.bottom = "undefined" != typeof a.bottom ? a.bottom : c.bottom, c.left = "undefined" != typeof a.left ? a.left : c.left;
        } }, duration: { get: function get() {
          return z;
        }, set: function set(a) {
          z = a, E.reset(z);
        } }, y: { get: function get() {
          return g;
        }, set: function set(a) {
          g = d3.functor(a);
        } }, color: { get: function get() {
          return j;
        }, set: function set(b) {
          j = a.utils.getColor(b);
        } }, labelType: { get: function get() {
          return n;
        }, set: function set(a) {
          n = a || "key";
        } } }), a.utils.initOptions(b), b;
  }, a.models.pieChart = function () {
    "use strict";
    function b(e) {
      return s.reset(), s.models(c), e.each(function (e) {
        var j = d3.select(this);a.utils.initSVG(j);var m = a.utils.availableWidth(h, j, f),
            p = a.utils.availableHeight(i, j, f);if (b.update = function () {
          j.transition().call(b);
        }, b.container = this, n.setter(u(e), b.update).getter(t(e)).update(), n.disabled = e.map(function (a) {
          return !!a.disabled;
        }), !o) {
          var q;o = {};for (q in n) {
            n[q] instanceof Array ? o[q] = n[q].slice(0) : o[q] = n[q];
          }
        }if (!e || !e.length) return a.utils.noData(b, j), b;j.selectAll(".nv-noData").remove();var s = j.selectAll("g.nv-wrap.nv-pieChart").data([e]),
            v = s.enter().append("g").attr("class", "nvd3 nv-wrap nv-pieChart").append("g"),
            w = s.select("g");
        if (v.append("g").attr("class", "nv-pieWrap"), v.append("g").attr("class", "nv-legendWrap"), k) {
          if ("top" === l) d.width(m).key(c.x()), s.select(".nv-legendWrap").datum(e).call(d), g || d.height() === f.top || (f.top = d.height(), p = a.utils.availableHeight(i, j, f)), s.select(".nv-legendWrap").attr("transform", "translate(0," + -f.top + ")");else if ("right" === l) {
            var x = a.models.legend().width();x > m / 2 && (x = m / 2), d.height(p).key(c.x()), d.width(x), m -= d.width(), s.select(".nv-legendWrap").datum(e).call(d).attr("transform", "translate(" + m + ",0)");
          }
        } else w.select(".nv-legendWrap").selectAll("*").remove();s.attr("transform", "translate(" + f.left + "," + f.top + ")"), c.width(m).height(p);var y = w.select(".nv-pieWrap").datum([e]);d3.transition(y).call(c), d.dispatch.on("stateChange", function (a) {
          for (var c in a) {
            n[c] = a[c];
          }r.stateChange(n), b.update();
        }), r.on("changeState", function (a) {
          "undefined" != typeof a.disabled && (e.forEach(function (b, c) {
            b.disabled = a.disabled[c];
          }), n.disabled = a.disabled), b.update();
        });
      }), s.renderEnd("pieChart immediate"), b;
    }var c = a.models.pie(),
        d = a.models.legend(),
        e = a.models.tooltip(),
        f = { top: 30, right: 20, bottom: 20, left: 20 },
        g = null,
        h = null,
        i = null,
        j = !1,
        k = !0,
        l = "top",
        m = a.utils.defaultColor(),
        n = a.utils.state(),
        o = null,
        p = null,
        q = 250,
        r = d3.dispatch("stateChange", "changeState", "renderEnd");e.duration(0).headerEnabled(!1).valueFormatter(function (a, b) {
      return c.valueFormat()(a, b);
    });var s = a.utils.renderWatch(r),
        t = function t(a) {
      return function () {
        return { active: a.map(function (a) {
            return !a.disabled;
          }) };
      };
    },
        u = function u(a) {
      return function (b) {
        void 0 !== b.active && a.forEach(function (a, c) {
          a.disabled = !b.active[c];
        });
      };
    };return c.dispatch.on("elementMouseover.tooltip", function (a) {
      a.series = { key: b.x()(a.data), value: b.y()(a.data), color: a.color, percent: a.percent }, j || (delete a.percent, delete a.series.percent), e.data(a).hidden(!1);
    }), c.dispatch.on("elementMouseout.tooltip", function (a) {
      e.hidden(!0);
    }), c.dispatch.on("elementMousemove.tooltip", function (a) {
      e();
    }), b.legend = d, b.dispatch = r, b.pie = c, b.tooltip = e, b.options = a.utils.optionsFunc.bind(b), b._options = Object.create({}, { width: { get: function get() {
          return h;
        }, set: function set(a) {
          h = a;
        } }, height: { get: function get() {
          return i;
        }, set: function set(a) {
          i = a;
        } }, noData: { get: function get() {
          return p;
        }, set: function set(a) {
          p = a;
        } }, showTooltipPercent: { get: function get() {
          return j;
        }, set: function set(a) {
          j = a;
        } }, showLegend: { get: function get() {
          return k;
        }, set: function set(a) {
          k = a;
        } }, legendPosition: { get: function get() {
          return l;
        }, set: function set(a) {
          l = a;
        } }, defaultState: { get: function get() {
          return o;
        }, set: function set(a) {
          o = a;
        } }, color: { get: function get() {
          return m;
        }, set: function set(a) {
          m = a, d.color(m), c.color(m);
        } }, duration: { get: function get() {
          return q;
        }, set: function set(a) {
          q = a, s.reset(q), c.duration(q);
        } }, margin: { get: function get() {
          return f;
        }, set: function set(a) {
          void 0 !== a.top && (f.top = a.top, g = a.top), f.right = void 0 !== a.right ? a.right : f.right, f.bottom = void 0 !== a.bottom ? a.bottom : f.bottom, f.left = void 0 !== a.left ? a.left : f.left;
        } } }), a.utils.inheritOptions(b, c), a.utils.initOptions(b), b;
  }, a.models.sankey = function () {
    "use strict";
    function b() {
      n.forEach(function (a) {
        a.sourceLinks = [], a.targetLinks = [];
      }), o.forEach(function (a) {
        var b = a.source,
            c = a.target;"number" == typeof b && (b = a.source = n[a.source]), "number" == typeof c && (c = a.target = n[a.target]), b.sourceLinks.push(a), c.targetLinks.push(a);
      });
    }function c() {
      n.forEach(function (a) {
        a.value = Math.max(d3.sum(a.sourceLinks, i), d3.sum(a.targetLinks, i));
      });
    }function d() {
      for (var a, b = n, c = 0; b.length && c < n.length;) {
        a = [], b.forEach(function (b) {
          b.x = c, b.dx = k, b.sourceLinks.forEach(function (b) {
            a.indexOf(b.target) < 0 && a.push(b.target);
          });
        }), b = a, ++c;
      }p && e(c), f((m[0] - k) / (c - 1));
    }function e(a) {
      n.forEach(function (b) {
        b.sourceLinks.length || (b.x = a - 1);
      });
    }function f(a) {
      n.forEach(function (b) {
        b.x *= a;
      });
    }function g(a) {
      function b() {
        var a = d3.min(g, function (a) {
          return (m[1] - (a.length - 1) * l) / d3.sum(a, i);
        });g.forEach(function (b) {
          b.forEach(function (b, c) {
            b.y = c, b.dy = b.value * a;
          });
        }), o.forEach(function (b) {
          b.dy = b.value * a;
        });
      }function c(a) {
        function b(a) {
          return (a.source.y + a.sy + a.dy / 2) * a.value;
        }g.forEach(function (c, d) {
          c.forEach(function (c) {
            if (c.targetLinks.length) {
              var d = d3.sum(c.targetLinks, b) / d3.sum(c.targetLinks, i);c.y += (d - t(c)) * a;
            }
          });
        });
      }function d(a) {
        function b(a) {
          return (a.target.y + a.ty + a.dy / 2) * a.value;
        }g.slice().reverse().forEach(function (c) {
          c.forEach(function (c) {
            if (c.sourceLinks.length) {
              var d = d3.sum(c.sourceLinks, b) / d3.sum(c.sourceLinks, i);c.y += (d - t(c)) * a;
            }
          });
        });
      }function e() {
        g.forEach(function (a) {
          var b,
              c,
              d,
              e = 0,
              g = a.length;for (a.sort(f), d = 0; g > d; ++d) {
            b = a[d], c = e - b.y, c > 0 && (b.y += c), e = b.y + b.dy + l;
          }if (c = e - l - m[1], c > 0) for (e = b.y -= c, d = g - 2; d >= 0; --d) {
            b = a[d], c = b.y + b.dy + l - e, c > 0 && (b.y -= c), e = b.y;
          }
        });
      }function f(a, b) {
        return a.y - b.y;
      }var g = d3.nest().key(function (a) {
        return a.x;
      }).sortKeys(d3.ascending).entries(n).map(function (a) {
        return a.values;
      });b(), e(), h();for (var j = 1; a > 0; --a) {
        d(j *= .99), e(), h(), c(j), e(), h();
      }
    }function h() {
      function a(a, b) {
        return a.source.y - b.source.y;
      }function b(a, b) {
        return a.target.y - b.target.y;
      }n.forEach(function (c) {
        c.sourceLinks.sort(b), c.targetLinks.sort(a);
      }), n.forEach(function (a) {
        var b = 0,
            c = 0;a.sourceLinks.forEach(function (a) {
          a.sy = b, b += a.dy;
        }), a.targetLinks.forEach(function (a) {
          a.ty = c, c += a.dy;
        });
      });
    }function i(a) {
      return a.value;
    }var j = {},
        k = 24,
        l = 8,
        m = [1, 1],
        n = [],
        o = [],
        p = !0,
        q = function q(a) {
      b(), c(), d(), g(a);
    },
        r = function r() {
      h();
    },
        s = function s() {
      function a(a) {
        var c = a.source.x + a.source.dx,
            d = a.target.x,
            e = d3.interpolateNumber(c, d),
            f = e(b),
            g = e(1 - b),
            h = a.source.y + a.sy + a.dy / 2,
            i = a.target.y + a.ty + a.dy / 2,
            j = "M" + c + "," + h + "C" + f + "," + h + " " + g + "," + i + " " + d + "," + i;return j;
      }var b = .5;return a.curvature = function (c) {
        return arguments.length ? (b = +c, a) : b;
      }, a;
    },
        t = function t(a) {
      return a.y + a.dy / 2;
    };return j.options = a.utils.optionsFunc.bind(j), j._options = Object.create({}, { nodeWidth: { get: function get() {
          return k;
        }, set: function set(a) {
          k = +a;
        } }, nodePadding: { get: function get() {
          return l;
        }, set: function set(a) {
          l = a;
        } }, nodes: { get: function get() {
          return n;
        }, set: function set(a) {
          n = a;
        } }, links: { get: function get() {
          return o;
        }, set: function set(a) {
          o = a;
        } }, size: { get: function get() {
          return m;
        }, set: function set(a) {
          m = a;
        } }, sinksRight: { get: function get() {
          return p;
        }, set: function set(a) {
          p = a;
        } }, layout: { get: function get() {
          q(32);
        }, set: function set(a) {
          q(a);
        } }, relayout: { get: function get() {
          r();
        }, set: function set(a) {} }, center: { get: function get() {
          return t();
        }, set: function set(a) {
          "function" == typeof a && (t = a);
        } }, link: { get: function get() {
          return s();
        }, set: function set(a) {
          return "function" == typeof a && (s = a), s();
        } } }), a.utils.initOptions(j), j;
  }, a.models.sankeyChart = function () {
    "use strict";
    function b(a) {
      return a.each(function (b) {
        function c(a) {
          d3.select(this).attr("transform", "translate(" + a.x + "," + (a.y = Math.max(0, Math.min(f - a.dy, d3.event.y))) + ")"), d.relayout(), t.attr("d", s);
        }var i = { nodes: [{ node: 1, name: "Test 1" }, { node: 2, name: "Test 2" }, { node: 3, name: "Test 3" }, { node: 4, name: "Test 4" }, { node: 5, name: "Test 5" }, { node: 6, name: "Test 6" }], links: [{ source: 0, target: 1, value: 2295 }, { source: 0, target: 5, value: 1199 }, { source: 1, target: 2, value: 1119 }, { source: 1, target: 5, value: 1176 }, { source: 2, target: 3, value: 487 }, { source: 2, target: 5, value: 632 }, { source: 3, target: 4, value: 301 }, { source: 3, target: 5, value: 186 }] },
            k = !1,
            l = !1;if (("object" == _typeof(b.nodes) && b.nodes.length) >= 0 && ("object" == _typeof(b.links) && b.links.length) >= 0 && (k = !0), b.nodes && b.nodes.length > 0 && b.links && b.links.length > 0 && (l = !0), !k) return console.error("NVD3 Sankey chart error:", "invalid data format for", b), console.info("Valid data format is: ", i, JSON.stringify(i)), r(a, "Error loading chart, data is invalid"), !1;if (!l) return r(a, "No data available"), !1;var m = a.append("svg").attr("width", e).attr("height", f).append("g").attr("class", "nvd3 nv-wrap nv-sankeyChart");d.nodeWidth(g).nodePadding(h).size([e, f]);var s = d.link();d.nodes(b.nodes).links(b.links).layout(32).center(j);var t = m.append("g").selectAll(".link").data(b.links).enter().append("path").attr("class", "link").attr("d", s).style("stroke-width", function (a) {
          return Math.max(1, a.dy);
        }).sort(function (a, b) {
          return b.dy - a.dy;
        });t.append("title").text(n);var u = m.append("g").selectAll(".node").data(b.nodes).enter().append("g").attr("class", "node").attr("transform", function (a) {
          return "translate(" + a.x + "," + a.y + ")";
        }).call(d3.behavior.drag().origin(function (a) {
          return a;
        }).on("dragstart", function () {
          this.parentNode.appendChild(this);
        }).on("drag", c));u.append("rect").attr("height", function (a) {
          return a.dy;
        }).attr("width", d.nodeWidth()).style("fill", o).style("stroke", p).append("title").text(q), u.append("text").attr("x", -6).attr("y", function (a) {
          return a.dy / 2;
        }).attr("dy", ".35em").attr("text-anchor", "end").attr("transform", null).text(function (a) {
          return a.name;
        }).filter(function (a) {
          return a.x < e / 2;
        }).attr("x", 6 + d.nodeWidth()).attr("text-anchor", "start");
      }), b;
    }var c = { top: 5, right: 0, bottom: 5, left: 0 },
        d = a.models.sankey(),
        e = 600,
        f = 400,
        g = 36,
        h = 40,
        i = "units",
        j = void 0,
        k = d3.format(",.0f"),
        l = function l(a) {
      return k(a) + " " + i;
    },
        m = d3.scale.category20(),
        n = function n(a) {
      return a.source.name + " → " + a.target.name + "\n" + l(a.value);
    },
        o = function o(a) {
      return a.color = m(a.name.replace(/ .*/, ""));
    },
        p = function p(a) {
      return d3.rgb(a.color).darker(2);
    },
        q = function q(a) {
      return a.name + "\n" + l(a.value);
    },
        r = function r(a, b) {
      a.append("text").attr("x", 0).attr("y", 0).attr("class", "nvd3-sankey-chart-error").attr("text-anchor", "middle").text(b);
    };return b.options = a.utils.optionsFunc.bind(b), b._options = Object.create({}, { units: { get: function get() {
          return i;
        }, set: function set(a) {
          i = a;
        } }, width: { get: function get() {
          return e;
        }, set: function set(a) {
          e = a;
        } }, height: { get: function get() {
          return f;
        }, set: function set(a) {
          f = a;
        } }, format: { get: function get() {
          return l;
        }, set: function set(a) {
          l = a;
        } }, linkTitle: { get: function get() {
          return n;
        }, set: function set(a) {
          n = a;
        } }, nodeWidth: { get: function get() {
          return g;
        }, set: function set(a) {
          g = a;
        } }, nodePadding: { get: function get() {
          return h;
        }, set: function set(a) {
          h = a;
        } }, center: { get: function get() {
          return j;
        }, set: function set(a) {
          j = a;
        } }, margin: { get: function get() {
          return c;
        }, set: function set(a) {
          c.top = void 0 !== a.top ? a.top : c.top, c.right = void 0 !== a.right ? a.right : c.right, c.bottom = void 0 !== a.bottom ? a.bottom : c.bottom, c.left = void 0 !== a.left ? a.left : c.left;
        } }, nodeStyle: { get: function get() {
          return {};
        }, set: function set(a) {
          o = void 0 !== a.fillColor ? a.fillColor : o, p = void 0 !== a.strokeColor ? a.strokeColor : p, q = void 0 !== a.title ? a.title : q;
        } } }), a.utils.initOptions(b), b;
  }, a.models.scatter = function () {
    "use strict";
    function b(a) {
      var b, c;return b = a[0].series + ":" + a[1], c = Z[b] = Z[b] || {};
    }function c(a) {
      var b;b = a[0].series + ":" + a[1], delete Z[b];
    }function d(a) {
      var c,
          d,
          e,
          f = b(a),
          g = !1;for (c = 1; c < arguments.length; c += 2) {
        d = arguments[c], e = arguments[c + 1](a[0], a[1]), f[d] === e && f.hasOwnProperty(d) || (f[d] = e, g = !0);
      }return g;
    }function e(b) {
      return X.reset(), b.each(function (b) {
        function T() {
          if (W = !1, !C) return !1;if (S === !0) {
            var c = d3.merge(b.map(function (b, c) {
              return b.values.map(function (b, d) {
                var e = v(b, d),
                    f = w(b, d);return [a.utils.NaNtoZero(s(e)) + 1e-4 * Math.random(), a.utils.NaNtoZero(t(f)) + 1e-4 * Math.random(), c, d, b];
              }).filter(function (a, b) {
                return D(a[4], b);
              });
            }));if (0 == c.length) return !1;c.length < 3 && (c.push([s.range()[0] - 20, t.range()[0] - 20, null, null]), c.push([s.range()[1] + 20, t.range()[1] + 20, null, null]), c.push([s.range()[0] - 20, t.range()[0] + 20, null, null]), c.push([s.range()[1] + 20, t.range()[1] - 20, null, null]));var d = d3.geom.polygon([[-10, -10], [-10, n + 10], [m + 10, n + 10], [m + 10, -10]]),
                e = d3.geom.voronoi(c).map(function (a, b) {
              return { data: d.clip(a), series: c[b][2], point: c[b][3] };
            });ea.select(".nv-point-paths").selectAll("path").remove();var f = ea.select(".nv-point-paths").selectAll("path").data(e),
                g = f.enter().append("svg:path").attr("d", function (a) {
              return a && a.data && 0 !== a.data.length ? "M" + a.data.join(",") + "Z" : "M 0 0";
            }).attr("id", function (a, b) {
              return "nv-path-" + b;
            }).attr("clip-path", function (a, b) {
              return "url(#nv-clip-" + q + "-" + b + ")";
            });if (I && g.style("fill", d3.rgb(230, 230, 230)).style("fill-opacity", .4).style("stroke-opacity", 1).style("stroke", d3.rgb(200, 200, 200)), H) {
              ea.select(".nv-point-clips").selectAll("*").remove();var h = ea.select(".nv-point-clips").selectAll("clipPath").data(c);h.enter().append("svg:clipPath").attr("id", function (a, b) {
                return "nv-clip-" + q + "-" + b;
              }).append("svg:circle").attr("cx", function (a) {
                return a[0];
              }).attr("cy", function (a) {
                return a[1];
              }).attr("r", J);
            }var i = function i(a, c, d) {
              if (W) return 0;var e = b[c.series];if (void 0 !== e) {
                var f = e.values[c.point];f.color = o(e, c.series), f.x = v(f), f.y = w(f);var g = r.node().getBoundingClientRect(),
                    h = window.pageYOffset || document.documentElement.scrollTop,
                    i = window.pageXOffset || document.documentElement.scrollLeft,
                    j = { left: s(v(f, c.point)) + g.left + i + l.left + 10, top: t(w(f, c.point)) + g.top + h + l.top + 10 };d({ point: f, series: e, pos: j, relativePos: [s(v(f, c.point)) + l.left, t(w(f, c.point)) + l.top], seriesIndex: c.series, pointIndex: c.point, event: d3.event, element: a });
              }
            };f.on("click", function (a) {
              i(this, a, R.elementClick);
            }).on("dblclick", function (a) {
              i(this, a, R.elementDblClick);
            }).on("mouseover", function (a) {
              i(this, a, R.elementMouseover);
            }).on("mouseout", function (a, b) {
              i(this, a, R.elementMouseout);
            });
          } else ea.select(".nv-groups").selectAll(".nv-group").selectAll(".nv-point").on("click", function (a, c) {
            if (W || !b[a.series]) return 0;var d = b[a.series],
                e = d.values[c],
                f = this;R.elementClick({ point: e, series: d, pos: [s(v(e, c)) + l.left, t(w(e, c)) + l.top], relativePos: [s(v(e, c)) + l.left, t(w(e, c)) + l.top], seriesIndex: a.series, pointIndex: c, event: d3.event, element: f });
          }).on("dblclick", function (a, c) {
            if (W || !b[a.series]) return 0;var d = b[a.series],
                e = d.values[c];R.elementDblClick({ point: e, series: d, pos: [s(v(e, c)) + l.left, t(w(e, c)) + l.top], relativePos: [s(v(e, c)) + l.left, t(w(e, c)) + l.top], seriesIndex: a.series, pointIndex: c });
          }).on("mouseover", function (a, c) {
            if (W || !b[a.series]) return 0;var d = b[a.series],
                e = d.values[c];R.elementMouseover({ point: e, series: d, pos: [s(v(e, c)) + l.left, t(w(e, c)) + l.top], relativePos: [s(v(e, c)) + l.left, t(w(e, c)) + l.top], seriesIndex: a.series, pointIndex: c, color: o(a, c) });
          }).on("mouseout", function (a, c) {
            if (W || !b[a.series]) return 0;var d = b[a.series],
                e = d.values[c];R.elementMouseout({ point: e, series: d, pos: [s(v(e, c)) + l.left, t(w(e, c)) + l.top], relativePos: [s(v(e, c)) + l.left, t(w(e, c)) + l.top], seriesIndex: a.series, pointIndex: c, color: o(a, c) });
          });
        }r = d3.select(this);var Z = a.utils.availableWidth(m, r, l),
            $ = a.utils.availableHeight(n, r, l);a.utils.initSVG(r), b.forEach(function (a, b) {
          a.values.forEach(function (a) {
            a.series = b;
          });
        });var _ = e.yScale().name === d3.scale.log().name ? !0 : !1,
            aa = K && L && O ? [] : d3.merge(b.map(function (a) {
          return a.values.map(function (a, b) {
            return { x: v(a, b), y: w(a, b), size: x(a, b) };
          });
        }));if (s.domain(K || d3.extent(aa.map(function (a) {
          return a.x;
        }).concat(z))), E && b[0] ? s.range(M || [(Z * F + Z) / (2 * b[0].values.length), Z - Z * (1 + F) / (2 * b[0].values.length)]) : s.range(M || [0, Z]), _) {
          var ba = d3.min(aa.map(function (a) {
            return 0 !== a.y ? a.y : void 0;
          }));t.clamp(!0).domain(L || d3.extent(aa.map(function (a) {
            return 0 !== a.y ? a.y : .1 * ba;
          }).concat(A))).range(N || [$, 0]);
        } else t.domain(L || d3.extent(aa.map(function (a) {
          return a.y;
        }).concat(A))).range(N || [$, 0]);u.domain(O || d3.extent(aa.map(function (a) {
          return a.size;
        }).concat(B))).range(P || Y), Q = s.domain()[0] === s.domain()[1] || t.domain()[0] === t.domain()[1], s.domain()[0] === s.domain()[1] && (s.domain()[0] ? s.domain([s.domain()[0] - .01 * s.domain()[0], s.domain()[1] + .01 * s.domain()[1]]) : s.domain([-1, 1])), t.domain()[0] === t.domain()[1] && (t.domain()[0] ? t.domain([t.domain()[0] - .01 * t.domain()[0], t.domain()[1] + .01 * t.domain()[1]]) : t.domain([-1, 1])), isNaN(s.domain()[0]) && s.domain([-1, 1]), isNaN(t.domain()[0]) && t.domain([-1, 1]), f = f || s, g = g || t, h = h || u;var ca = s(1) !== f(1) || t(1) !== g(1) || u(1) !== h(1);i = i || m, j = j || n;var da = i !== m || j !== n,
            ea = r.selectAll("g.nv-wrap.nv-scatter").data([b]),
            fa = ea.enter().append("g").attr("class", "nvd3 nv-wrap nv-scatter nv-chart-" + q),
            ga = fa.append("defs"),
            ha = fa.append("g"),
            ia = ea.select("g");ea.classed("nv-single-point", Q), ha.append("g").attr("class", "nv-groups"), ha.append("g").attr("class", "nv-point-paths"), fa.append("g").attr("class", "nv-point-clips"), ea.attr("transform", "translate(" + l.left + "," + l.top + ")"), ga.append("clipPath").attr("id", "nv-edge-clip-" + q).append("rect").attr("transform", "translate( -10, -10)"), ea.select("#nv-edge-clip-" + q + " rect").attr("width", Z + 20).attr("height", $ > 0 ? $ + 20 : 0), ia.attr("clip-path", G ? "url(#nv-edge-clip-" + q + ")" : ""), W = !0;var ja = ea.select(".nv-groups").selectAll(".nv-group").data(function (a) {
          return a;
        }, function (a) {
          return a.key;
        });ja.enter().append("g").style("stroke-opacity", 1e-6).style("fill-opacity", 1e-6), ja.exit().remove(), ja.attr("class", function (a, b) {
          return (a.classed || "") + " nv-group nv-series-" + b;
        }).classed("nv-noninteractive", !C).classed("hover", function (a) {
          return a.hover;
        }), ja.watchTransition(X, "scatter: groups").style("fill", function (a, b) {
          return o(a, b);
        }).style("stroke", function (a, b) {
          return a.pointBorderColor || p || o(a, b);
        }).style("stroke-opacity", 1).style("fill-opacity", .5);var ka = ja.selectAll("path.nv-point").data(function (a) {
          return a.values.map(function (a, b) {
            return [a, b];
          }).filter(function (a, b) {
            return D(a[0], b);
          });
        });if (ka.enter().append("path").attr("class", function (a) {
          return "nv-point nv-point-" + a[1];
        }).style("fill", function (a) {
          return a.color;
        }).style("stroke", function (a) {
          return a.color;
        }).attr("transform", function (b) {
          return "translate(" + a.utils.NaNtoZero(f(v(b[0], b[1]))) + "," + a.utils.NaNtoZero(g(w(b[0], b[1]))) + ")";
        }).attr("d", a.utils.symbol().type(function (a) {
          return y(a[0]);
        }).size(function (a) {
          return u(x(a[0], a[1]));
        })), ka.exit().each(c).remove(), ja.exit().selectAll("path.nv-point").watchTransition(X, "scatter exit").attr("transform", function (b) {
          return "translate(" + a.utils.NaNtoZero(s(v(b[0], b[1]))) + "," + a.utils.NaNtoZero(t(w(b[0], b[1]))) + ")";
        }).remove(), ka.filter(function (a) {
          return ca || da || d(a, "x", v, "y", w);
        }).watchTransition(X, "scatter points").attr("transform", function (b) {
          return "translate(" + a.utils.NaNtoZero(s(v(b[0], b[1]))) + "," + a.utils.NaNtoZero(t(w(b[0], b[1]))) + ")";
        }), ka.filter(function (a) {
          return ca || da || d(a, "shape", y, "size", x);
        }).watchTransition(X, "scatter points").attr("d", a.utils.symbol().type(function (a) {
          return y(a[0]);
        }).size(function (a) {
          return u(x(a[0], a[1]));
        })), V) {
          var la = ja.selectAll(".nv-label").data(function (a) {
            return a.values.map(function (a, b) {
              return [a, b];
            }).filter(function (a, b) {
              return D(a[0], b);
            });
          });la.enter().append("text").style("fill", function (a, b) {
            return a.color;
          }).style("stroke-opacity", 0).style("fill-opacity", 1).attr("transform", function (b) {
            var c = a.utils.NaNtoZero(f(v(b[0], b[1]))) + Math.sqrt(u(x(b[0], b[1])) / Math.PI) + 2;return "translate(" + c + "," + a.utils.NaNtoZero(g(w(b[0], b[1]))) + ")";
          }).text(function (a, b) {
            return a[0].label;
          }), la.exit().remove(), ja.exit().selectAll("path.nv-label").watchTransition(X, "scatter exit").attr("transform", function (b) {
            var c = a.utils.NaNtoZero(s(v(b[0], b[1]))) + Math.sqrt(u(x(b[0], b[1])) / Math.PI) + 2;return "translate(" + c + "," + a.utils.NaNtoZero(t(w(b[0], b[1]))) + ")";
          }).remove(), la.each(function (a) {
            d3.select(this).classed("nv-label", !0).classed("nv-label-" + a[1], !1).classed("hover", !1);
          }), la.watchTransition(X, "scatter labels").attr("transform", function (b) {
            var c = a.utils.NaNtoZero(s(v(b[0], b[1]))) + Math.sqrt(u(x(b[0], b[1])) / Math.PI) + 2;return "translate(" + c + "," + a.utils.NaNtoZero(t(w(b[0], b[1]))) + ")";
          });
        }U ? (clearTimeout(k), k = setTimeout(T, U)) : T(), f = s.copy(), g = t.copy(), h = u.copy(), i = m, j = n;
      }), X.renderEnd("scatter immediate"), e;
    }var f,
        g,
        h,
        i,
        j,
        k,
        l = { top: 0, right: 0, bottom: 0, left: 0 },
        m = null,
        n = null,
        o = a.utils.defaultColor(),
        p = null,
        q = Math.floor(1e5 * Math.random()),
        r = null,
        s = d3.scale.linear(),
        t = d3.scale.linear(),
        u = d3.scale.linear(),
        v = function v(a) {
      return a.x;
    },
        w = function w(a) {
      return a.y;
    },
        x = function x(a) {
      return a.size || 1;
    },
        y = function y(a) {
      return a.shape || "circle";
    },
        z = [],
        A = [],
        B = [],
        C = !0,
        D = function D(a) {
      return !a.notActive;
    },
        E = !1,
        F = .1,
        G = !1,
        H = !0,
        I = !1,
        J = function J() {
      return 25;
    },
        K = null,
        L = null,
        M = null,
        N = null,
        O = null,
        P = null,
        Q = !1,
        R = d3.dispatch("elementClick", "elementDblClick", "elementMouseover", "elementMouseout", "renderEnd"),
        S = !0,
        T = 250,
        U = 300,
        V = !1,
        W = !1,
        X = a.utils.renderWatch(R, T),
        Y = [16, 256],
        Z = {};return e.dispatch = R, e.options = a.utils.optionsFunc.bind(e), e._calls = new function () {
      this.clearHighlights = function () {
        return a.dom.write(function () {
          r.selectAll(".nv-point.hover").classed("hover", !1);
        }), null;
      }, this.highlightPoint = function (b, c, d) {
        a.dom.write(function () {
          r.select(".nv-groups").selectAll(".nv-series-" + b).selectAll(".nv-point-" + c).classed("hover", d);
        });
      };
    }(), R.on("elementMouseover.point", function (a) {
      C && e._calls.highlightPoint(a.seriesIndex, a.pointIndex, !0);
    }), R.on("elementMouseout.point", function (a) {
      C && e._calls.highlightPoint(a.seriesIndex, a.pointIndex, !1);
    }), e._options = Object.create({}, { width: { get: function get() {
          return m;
        }, set: function set(a) {
          m = a;
        } }, height: { get: function get() {
          return n;
        }, set: function set(a) {
          n = a;
        } }, xScale: { get: function get() {
          return s;
        }, set: function set(a) {
          s = a;
        } }, yScale: { get: function get() {
          return t;
        }, set: function set(a) {
          t = a;
        } }, pointScale: { get: function get() {
          return u;
        }, set: function set(a) {
          u = a;
        } }, xDomain: { get: function get() {
          return K;
        }, set: function set(a) {
          K = a;
        } }, yDomain: { get: function get() {
          return L;
        }, set: function set(a) {
          L = a;
        } }, pointDomain: { get: function get() {
          return O;
        }, set: function set(a) {
          O = a;
        } }, xRange: { get: function get() {
          return M;
        }, set: function set(a) {
          M = a;
        } }, yRange: { get: function get() {
          return N;
        }, set: function set(a) {
          N = a;
        } }, pointRange: { get: function get() {
          return P;
        }, set: function set(a) {
          P = a;
        } }, forceX: { get: function get() {
          return z;
        }, set: function set(a) {
          z = a;
        } }, forceY: { get: function get() {
          return A;
        }, set: function set(a) {
          A = a;
        } }, forcePoint: { get: function get() {
          return B;
        }, set: function set(a) {
          B = a;
        } }, interactive: { get: function get() {
          return C;
        }, set: function set(a) {
          C = a;
        } }, pointActive: { get: function get() {
          return D;
        }, set: function set(a) {
          D = a;
        } }, padDataOuter: { get: function get() {
          return F;
        }, set: function set(a) {
          F = a;
        } }, padData: { get: function get() {
          return E;
        }, set: function set(a) {
          E = a;
        } }, clipEdge: { get: function get() {
          return G;
        }, set: function set(a) {
          G = a;
        } }, clipVoronoi: { get: function get() {
          return H;
        }, set: function set(a) {
          H = a;
        } }, clipRadius: { get: function get() {
          return J;
        }, set: function set(a) {
          J = a;
        } }, showVoronoi: { get: function get() {
          return I;
        }, set: function set(a) {
          I = a;
        } }, id: { get: function get() {
          return q;
        }, set: function set(a) {
          q = a;
        } }, interactiveUpdateDelay: { get: function get() {
          return U;
        }, set: function set(a) {
          U = a;
        } }, showLabels: { get: function get() {
          return V;
        }, set: function set(a) {
          V = a;
        } }, pointBorderColor: { get: function get() {
          return p;
        }, set: function set(a) {
          p = a;
        } }, x: { get: function get() {
          return v;
        }, set: function set(a) {
          v = d3.functor(a);
        } }, y: { get: function get() {
          return w;
        }, set: function set(a) {
          w = d3.functor(a);
        } }, pointSize: { get: function get() {
          return x;
        }, set: function set(a) {
          x = d3.functor(a);
        } }, pointShape: { get: function get() {
          return y;
        }, set: function set(a) {
          y = d3.functor(a);
        } }, margin: { get: function get() {
          return l;
        }, set: function set(a) {
          l.top = void 0 !== a.top ? a.top : l.top, l.right = void 0 !== a.right ? a.right : l.right, l.bottom = void 0 !== a.bottom ? a.bottom : l.bottom, l.left = void 0 !== a.left ? a.left : l.left;
        } }, duration: { get: function get() {
          return T;
        }, set: function set(a) {
          T = a, X.reset(T);
        } }, color: { get: function get() {
          return o;
        }, set: function set(b) {
          o = a.utils.getColor(b);
        } }, useVoronoi: { get: function get() {
          return S;
        }, set: function set(a) {
          S = a, S === !1 && (H = !1);
        } } }), a.utils.initOptions(e), e;
  }, a.models.scatterChart = function () {
    "use strict";
    function b(A) {
      return F.reset(), F.models(c), u && F.models(d), v && F.models(e), r && F.models(g), s && F.models(h), A.each(function (A) {
        n = d3.select(this), a.utils.initSVG(n);var I = a.utils.availableWidth(l, n, j),
            J = a.utils.availableHeight(m, n, j);if (b.update = function () {
          0 === B ? n.call(b) : n.transition().duration(B).call(b);
        }, b.container = this, x.setter(H(A), b.update).getter(G(A)).update(), x.disabled = A.map(function (a) {
          return !!a.disabled;
        }), !y) {
          var K;y = {};for (K in x) {
            x[K] instanceof Array ? y[K] = x[K].slice(0) : y[K] = x[K];
          }
        }if (!(A && A.length && A.filter(function (a) {
          return a.values.length;
        }).length)) return a.utils.noData(b, n), F.renderEnd("scatter immediate"), b;n.selectAll(".nv-noData").remove(), p = c.xScale(), q = c.yScale();var L = n.selectAll("g.nv-wrap.nv-scatterChart").data([A]),
            M = L.enter().append("g").attr("class", "nvd3 nv-wrap nv-scatterChart nv-chart-" + c.id()),
            N = M.append("g"),
            O = L.select("g");if (N.append("rect").attr("class", "nvd3 nv-background").style("pointer-events", "none"), N.append("g").attr("class", "nv-x nv-axis"), N.append("g").attr("class", "nv-y nv-axis"), N.append("g").attr("class", "nv-scatterWrap"), N.append("g").attr("class", "nv-regressionLinesWrap"), N.append("g").attr("class", "nv-distWrap"), N.append("g").attr("class", "nv-legendWrap"), w && O.select(".nv-y.nv-axis").attr("transform", "translate(" + I + ",0)"), t) {
          var P = I;f.width(P), L.select(".nv-legendWrap").datum(A).call(f), k || f.height() === j.top || (j.top = f.height(), J = a.utils.availableHeight(m, n, j)), L.select(".nv-legendWrap").attr("transform", "translate(0," + -j.top + ")");
        } else O.select(".nv-legendWrap").selectAll("*").remove();L.attr("transform", "translate(" + j.left + "," + j.top + ")"), c.width(I).height(J).color(A.map(function (a, b) {
          return a.color = a.color || o(a, b), a.color;
        }).filter(function (a, b) {
          return !A[b].disabled;
        })).showLabels(C), L.select(".nv-scatterWrap").datum(A.filter(function (a) {
          return !a.disabled;
        })).call(c), L.select(".nv-regressionLinesWrap").attr("clip-path", "url(#nv-edge-clip-" + c.id() + ")");var Q = L.select(".nv-regressionLinesWrap").selectAll(".nv-regLines").data(function (a) {
          return a;
        });Q.enter().append("g").attr("class", "nv-regLines");var R = Q.selectAll(".nv-regLine").data(function (a) {
          return [a];
        });R.enter().append("line").attr("class", "nv-regLine").style("stroke-opacity", 0), R.filter(function (a) {
          return a.intercept && a.slope;
        }).watchTransition(F, "scatterPlusLineChart: regline").attr("x1", p.range()[0]).attr("x2", p.range()[1]).attr("y1", function (a, b) {
          return q(p.domain()[0] * a.slope + a.intercept);
        }).attr("y2", function (a, b) {
          return q(p.domain()[1] * a.slope + a.intercept);
        }).style("stroke", function (a, b, c) {
          return o(a, c);
        }).style("stroke-opacity", function (a, b) {
          return a.disabled || "undefined" == typeof a.slope || "undefined" == typeof a.intercept ? 0 : 1;
        }), u && (d.scale(p)._ticks(a.utils.calcTicksX(I / 100, A)).tickSize(-J, 0), O.select(".nv-x.nv-axis").attr("transform", "translate(0," + q.range()[0] + ")").call(d)), v && (e.scale(q)._ticks(a.utils.calcTicksY(J / 36, A)).tickSize(-I, 0), O.select(".nv-y.nv-axis").call(e)), r && (g.getData(c.x()).scale(p).width(I).color(A.map(function (a, b) {
          return a.color || o(a, b);
        }).filter(function (a, b) {
          return !A[b].disabled;
        })), N.select(".nv-distWrap").append("g").attr("class", "nv-distributionX"), O.select(".nv-distributionX").attr("transform", "translate(0," + q.range()[0] + ")").datum(A.filter(function (a) {
          return !a.disabled;
        })).call(g)), s && (h.getData(c.y()).scale(q).width(J).color(A.map(function (a, b) {
          return a.color || o(a, b);
        }).filter(function (a, b) {
          return !A[b].disabled;
        })), N.select(".nv-distWrap").append("g").attr("class", "nv-distributionY"), O.select(".nv-distributionY").attr("transform", "translate(" + (w ? I : -h.size()) + ",0)").datum(A.filter(function (a) {
          return !a.disabled;
        })).call(h)), f.dispatch.on("stateChange", function (a) {
          for (var c in a) {
            x[c] = a[c];
          }z.stateChange(x), b.update();
        }), z.on("changeState", function (a) {
          "undefined" != typeof a.disabled && (A.forEach(function (b, c) {
            b.disabled = a.disabled[c];
          }), x.disabled = a.disabled), b.update();
        }), c.dispatch.on("elementMouseout.tooltip", function (a) {
          i.hidden(!0), n.select(".nv-chart-" + c.id() + " .nv-series-" + a.seriesIndex + " .nv-distx-" + a.pointIndex).attr("y1", 0), n.select(".nv-chart-" + c.id() + " .nv-series-" + a.seriesIndex + " .nv-disty-" + a.pointIndex).attr("x2", h.size());
        }), c.dispatch.on("elementMouseover.tooltip", function (a) {
          n.select(".nv-series-" + a.seriesIndex + " .nv-distx-" + a.pointIndex).attr("y1", a.relativePos[1] - J), n.select(".nv-series-" + a.seriesIndex + " .nv-disty-" + a.pointIndex).attr("x2", a.relativePos[0] + g.size()), i.data(a).hidden(!1);
        }), D = p.copy(), E = q.copy();
      }), F.renderEnd("scatter with line immediate"), b;
    }var c = a.models.scatter(),
        d = a.models.axis(),
        e = a.models.axis(),
        f = a.models.legend(),
        g = a.models.distribution(),
        h = a.models.distribution(),
        i = a.models.tooltip(),
        j = { top: 30, right: 20, bottom: 50, left: 75 },
        k = null,
        l = null,
        m = null,
        n = null,
        o = a.utils.defaultColor(),
        p = c.xScale(),
        q = c.yScale(),
        r = !1,
        s = !1,
        t = !0,
        u = !0,
        v = !0,
        w = !1,
        x = a.utils.state(),
        y = null,
        z = d3.dispatch("stateChange", "changeState", "renderEnd"),
        A = null,
        B = 250,
        C = !1;c.xScale(p).yScale(q), d.orient("bottom").tickPadding(10), e.orient(w ? "right" : "left").tickPadding(10), g.axis("x"), h.axis("y"), i.headerFormatter(function (a, b) {
      return d.tickFormat()(a, b);
    }).valueFormatter(function (a, b) {
      return e.tickFormat()(a, b);
    });var D,
        E,
        F = a.utils.renderWatch(z, B),
        G = function G(a) {
      return function () {
        return { active: a.map(function (a) {
            return !a.disabled;
          }) };
      };
    },
        H = function H(a) {
      return function (b) {
        void 0 !== b.active && a.forEach(function (a, c) {
          a.disabled = !b.active[c];
        });
      };
    };return b.dispatch = z, b.scatter = c, b.legend = f, b.xAxis = d, b.yAxis = e, b.distX = g, b.distY = h, b.tooltip = i, b.options = a.utils.optionsFunc.bind(b), b._options = Object.create({}, { width: { get: function get() {
          return l;
        }, set: function set(a) {
          l = a;
        } }, height: { get: function get() {
          return m;
        }, set: function set(a) {
          m = a;
        } }, container: { get: function get() {
          return n;
        }, set: function set(a) {
          n = a;
        } }, showDistX: { get: function get() {
          return r;
        }, set: function set(a) {
          r = a;
        } }, showDistY: { get: function get() {
          return s;
        }, set: function set(a) {
          s = a;
        } }, showLegend: { get: function get() {
          return t;
        }, set: function set(a) {
          t = a;
        } }, showXAxis: { get: function get() {
          return u;
        }, set: function set(a) {
          u = a;
        } }, showYAxis: { get: function get() {
          return v;
        }, set: function set(a) {
          v = a;
        } }, defaultState: { get: function get() {
          return y;
        }, set: function set(a) {
          y = a;
        } }, noData: { get: function get() {
          return A;
        }, set: function set(a) {
          A = a;
        } }, duration: { get: function get() {
          return B;
        }, set: function set(a) {
          B = a;
        } }, showLabels: { get: function get() {
          return C;
        }, set: function set(a) {
          C = a;
        } }, margin: { get: function get() {
          return j;
        }, set: function set(a) {
          void 0 !== a.top && (j.top = a.top, k = a.top), j.right = void 0 !== a.right ? a.right : j.right, j.bottom = void 0 !== a.bottom ? a.bottom : j.bottom, j.left = void 0 !== a.left ? a.left : j.left;
        } }, rightAlignYAxis: { get: function get() {
          return w;
        }, set: function set(a) {
          w = a, e.orient(a ? "right" : "left");
        } }, color: { get: function get() {
          return o;
        }, set: function set(b) {
          o = a.utils.getColor(b), f.color(o), g.color(o), h.color(o);
        } } }), a.utils.inheritOptions(b, c), a.utils.initOptions(b), b;
  }, a.models.sparkline = function () {
    "use strict";
    function b(k) {
      return t.reset(), k.each(function (b) {
        var k = h - g.left - g.right,
            s = i - g.top - g.bottom;j = d3.select(this), a.utils.initSVG(j), l.domain(c || d3.extent(b, n)).range(e || [0, k]), m.domain(d || d3.extent(b, o)).range(f || [s, 0]);var t = j.selectAll("g.nv-wrap.nv-sparkline").data([b]),
            u = t.enter().append("g").attr("class", "nvd3 nv-wrap nv-sparkline");u.append("g"), t.select("g");t.attr("transform", "translate(" + g.left + "," + g.top + ")");var v = t.selectAll("path").data(function (a) {
          return [a];
        });v.enter().append("path"), v.exit().remove(), v.style("stroke", function (a, b) {
          return a.color || p(a, b);
        }).attr("d", d3.svg.line().x(function (a, b) {
          return l(n(a, b));
        }).y(function (a, b) {
          return m(o(a, b));
        }));var w = t.selectAll("circle.nv-point").data(function (a) {
          function b(b) {
            if (-1 != b) {
              var c = a[b];return c.pointIndex = b, c;
            }return null;
          }var c = a.map(function (a, b) {
            return o(a, b);
          }),
              d = b(c.lastIndexOf(m.domain()[1])),
              e = b(c.indexOf(m.domain()[0])),
              f = b(c.length - 1);return [q ? e : null, q ? d : null, r ? f : null].filter(function (a) {
            return null != a;
          });
        });w.enter().append("circle"), w.exit().remove(), w.attr("cx", function (a, b) {
          return l(n(a, a.pointIndex));
        }).attr("cy", function (a, b) {
          return m(o(a, a.pointIndex));
        }).attr("r", 2).attr("class", function (a, b) {
          return n(a, a.pointIndex) == l.domain()[1] ? "nv-point nv-currentValue" : o(a, a.pointIndex) == m.domain()[0] ? "nv-point nv-minValue" : "nv-point nv-maxValue";
        });
      }), t.renderEnd("sparkline immediate"), b;
    }var c,
        d,
        e,
        f,
        g = { top: 2, right: 0, bottom: 2, left: 0 },
        h = 400,
        i = 32,
        j = null,
        k = !0,
        l = d3.scale.linear(),
        m = d3.scale.linear(),
        n = function n(a) {
      return a.x;
    },
        o = function o(a) {
      return a.y;
    },
        p = a.utils.getColor(["#000"]),
        q = !0,
        r = !0,
        s = d3.dispatch("renderEnd"),
        t = a.utils.renderWatch(s);return b.options = a.utils.optionsFunc.bind(b), b._options = Object.create({}, { width: { get: function get() {
          return h;
        }, set: function set(a) {
          h = a;
        } }, height: { get: function get() {
          return i;
        }, set: function set(a) {
          i = a;
        } }, xDomain: { get: function get() {
          return c;
        }, set: function set(a) {
          c = a;
        } }, yDomain: { get: function get() {
          return d;
        }, set: function set(a) {
          d = a;
        } }, xRange: { get: function get() {
          return e;
        }, set: function set(a) {
          e = a;
        } }, yRange: { get: function get() {
          return f;
        }, set: function set(a) {
          f = a;
        } }, xScale: { get: function get() {
          return l;
        }, set: function set(a) {
          l = a;
        } }, yScale: { get: function get() {
          return m;
        }, set: function set(a) {
          m = a;
        } }, animate: { get: function get() {
          return k;
        }, set: function set(a) {
          k = a;
        } }, showMinMaxPoints: { get: function get() {
          return q;
        }, set: function set(a) {
          q = a;
        } }, showCurrentPoint: { get: function get() {
          return r;
        }, set: function set(a) {
          r = a;
        } }, x: { get: function get() {
          return n;
        }, set: function set(a) {
          n = d3.functor(a);
        } }, y: { get: function get() {
          return o;
        }, set: function set(a) {
          o = d3.functor(a);
        } }, margin: { get: function get() {
          return g;
        }, set: function set(a) {
          g.top = void 0 !== a.top ? a.top : g.top, g.right = void 0 !== a.right ? a.right : g.right, g.bottom = void 0 !== a.bottom ? a.bottom : g.bottom, g.left = void 0 !== a.left ? a.left : g.left;
        } }, color: { get: function get() {
          return p;
        }, set: function set(b) {
          p = a.utils.getColor(b);
        } } }), b.dispatch = s, a.utils.initOptions(b), b;
  }, a.models.sparklinePlus = function () {
    "use strict";
    function b(p) {
      return r.reset(), r.models(e), p.each(function (p) {
        function q() {
          if (!j) {
            var a = z.selectAll(".nv-hoverValue").data(i),
                b = a.enter().append("g").attr("class", "nv-hoverValue").style("stroke-opacity", 0).style("fill-opacity", 0);a.exit().transition().duration(250).style("stroke-opacity", 0).style("fill-opacity", 0).remove(), a.attr("transform", function (a) {
              return "translate(" + c(e.x()(p[a], a)) + ",0)";
            }).transition().duration(250).style("stroke-opacity", 1).style("fill-opacity", 1), i.length && (b.append("line").attr("x1", 0).attr("y1", -f.top).attr("x2", 0).attr("y2", u), b.append("text").attr("class", "nv-xValue").attr("x", -6).attr("y", -f.top).attr("text-anchor", "end").attr("dy", ".9em"), z.select(".nv-hoverValue .nv-xValue").text(k(e.x()(p[i[0]], i[0]))), b.append("text").attr("class", "nv-yValue").attr("x", 6).attr("y", -f.top).attr("text-anchor", "start").attr("dy", ".9em"), z.select(".nv-hoverValue .nv-yValue").text(l(e.y()(p[i[0]], i[0]))));
          }
        }function r() {
          function a(a, b) {
            for (var c = Math.abs(e.x()(a[0], 0) - b), d = 0, f = 0; f < a.length; f++) {
              Math.abs(e.x()(a[f], f) - b) < c && (c = Math.abs(e.x()(a[f], f) - b), d = f);
            }return d;
          }if (!j) {
            var b = d3.mouse(this)[0] - f.left;i = [a(p, Math.round(c.invert(b)))], q();
          }
        }var s = d3.select(this);a.utils.initSVG(s);var t = a.utils.availableWidth(g, s, f),
            u = a.utils.availableHeight(h, s, f);if (b.update = function () {
          s.call(b);
        }, b.container = this, !p || !p.length) return a.utils.noData(b, s), b;s.selectAll(".nv-noData").remove();var v = e.y()(p[p.length - 1], p.length - 1);c = e.xScale(), d = e.yScale();var w = s.selectAll("g.nv-wrap.nv-sparklineplus").data([p]),
            x = w.enter().append("g").attr("class", "nvd3 nv-wrap nv-sparklineplus"),
            y = x.append("g"),
            z = w.select("g");y.append("g").attr("class", "nv-sparklineWrap"), y.append("g").attr("class", "nv-valueWrap"), y.append("g").attr("class", "nv-hoverArea"), w.attr("transform", "translate(" + f.left + "," + f.top + ")");var A = z.select(".nv-sparklineWrap");if (e.width(t).height(u), A.call(e), m) {
          var B = z.select(".nv-valueWrap"),
              C = B.selectAll(".nv-currentValue").data([v]);C.enter().append("text").attr("class", "nv-currentValue").attr("dx", o ? -8 : 8).attr("dy", ".9em").style("text-anchor", o ? "end" : "start"), C.attr("x", t + (o ? f.right : 0)).attr("y", n ? function (a) {
            return d(a);
          } : 0).style("fill", e.color()(p[p.length - 1], p.length - 1)).text(l(v));
        }y.select(".nv-hoverArea").append("rect").on("mousemove", r).on("click", function () {
          j = !j;
        }).on("mouseout", function () {
          i = [], q();
        }), z.select(".nv-hoverArea rect").attr("transform", function (a) {
          return "translate(" + -f.left + "," + -f.top + ")";
        }).attr("width", t + f.left + f.right).attr("height", u + f.top);
      }), r.renderEnd("sparklinePlus immediate"), b;
    }var c,
        d,
        e = a.models.sparkline(),
        f = { top: 15, right: 100, bottom: 10, left: 50 },
        g = null,
        h = null,
        i = [],
        j = !1,
        k = d3.format(",r"),
        l = d3.format(",.2f"),
        m = !0,
        n = !0,
        o = !1,
        p = null,
        q = d3.dispatch("renderEnd"),
        r = a.utils.renderWatch(q);return b.dispatch = q, b.sparkline = e, b.options = a.utils.optionsFunc.bind(b), b._options = Object.create({}, { width: { get: function get() {
          return g;
        }, set: function set(a) {
          g = a;
        } }, height: { get: function get() {
          return h;
        }, set: function set(a) {
          h = a;
        } }, xTickFormat: { get: function get() {
          return k;
        }, set: function set(a) {
          k = a;
        } }, yTickFormat: { get: function get() {
          return l;
        }, set: function set(a) {
          l = a;
        } }, showLastValue: { get: function get() {
          return m;
        }, set: function set(a) {
          m = a;
        } }, alignValue: { get: function get() {
          return n;
        }, set: function set(a) {
          n = a;
        } }, rightAlignValue: { get: function get() {
          return o;
        }, set: function set(a) {
          o = a;
        } }, noData: { get: function get() {
          return p;
        }, set: function set(a) {
          p = a;
        } }, margin: { get: function get() {
          return f;
        }, set: function set(a) {
          f.top = void 0 !== a.top ? a.top : f.top, f.right = void 0 !== a.right ? a.right : f.right, f.bottom = void 0 !== a.bottom ? a.bottom : f.bottom, f.left = void 0 !== a.left ? a.left : f.left;
        } } }), a.utils.inheritOptions(b, e), a.utils.initOptions(b), b;
  }, a.models.stackedArea = function () {
    "use strict";
    function b(n) {
      return v.reset(), v.models(s), n.each(function (n) {
        var t = f - e.left - e.right,
            w = g - e.top - e.bottom;j = d3.select(this), a.utils.initSVG(j), c = s.xScale(), d = s.yScale();var x = n;n.forEach(function (a, b) {
          a.seriesIndex = b, a.values = a.values.map(function (a, c) {
            return a.index = c, a.seriesIndex = b, a;
          });
        });var y = n.filter(function (a) {
          return !a.disabled;
        });n = d3.layout.stack().order(p).offset(o).values(function (a) {
          return a.values;
        }).x(k).y(l).out(function (a, b, c) {
          a.display = { y: c, y0: b };
        })(y);var z = j.selectAll("g.nv-wrap.nv-stackedarea").data([n]),
            A = z.enter().append("g").attr("class", "nvd3 nv-wrap nv-stackedarea"),
            B = A.append("defs"),
            C = A.append("g"),
            D = z.select("g");C.append("g").attr("class", "nv-areaWrap"), C.append("g").attr("class", "nv-scatterWrap"), z.attr("transform", "translate(" + e.left + "," + e.top + ")"), 0 == s.forceY().length && s.forceY().push(0), s.width(t).height(w).x(k).y(function (a) {
          return void 0 !== a.display ? a.display.y + a.display.y0 : void 0;
        }).color(n.map(function (a, b) {
          return a.color = a.color || h(a, a.seriesIndex), a.color;
        }));var E = D.select(".nv-scatterWrap").datum(n);E.call(s), B.append("clipPath").attr("id", "nv-edge-clip-" + i).append("rect"), z.select("#nv-edge-clip-" + i + " rect").attr("width", t).attr("height", w), D.attr("clip-path", r ? "url(#nv-edge-clip-" + i + ")" : "");var F = d3.svg.area().defined(m).x(function (a, b) {
          return c(k(a, b));
        }).y0(function (a) {
          return d(a.display.y0);
        }).y1(function (a) {
          return d(a.display.y + a.display.y0);
        }).interpolate(q),
            G = d3.svg.area().defined(m).x(function (a, b) {
          return c(k(a, b));
        }).y0(function (a) {
          return d(a.display.y0);
        }).y1(function (a) {
          return d(a.display.y0);
        }),
            H = D.select(".nv-areaWrap").selectAll("path.nv-area").data(function (a) {
          return a;
        });H.enter().append("path").attr("class", function (a, b) {
          return "nv-area nv-area-" + b;
        }).attr("d", function (a, b) {
          return G(a.values, a.seriesIndex);
        }).on("mouseover", function (a, b) {
          d3.select(this).classed("hover", !0), u.areaMouseover({ point: a, series: a.key, pos: [d3.event.pageX, d3.event.pageY], seriesIndex: a.seriesIndex });
        }).on("mouseout", function (a, b) {
          d3.select(this).classed("hover", !1), u.areaMouseout({ point: a, series: a.key, pos: [d3.event.pageX, d3.event.pageY], seriesIndex: a.seriesIndex });
        }).on("click", function (a, b) {
          d3.select(this).classed("hover", !1), u.areaClick({ point: a, series: a.key, pos: [d3.event.pageX, d3.event.pageY], seriesIndex: a.seriesIndex });
        }), H.exit().remove(), H.style("fill", function (a, b) {
          return a.color || h(a, a.seriesIndex);
        }).style("stroke", function (a, b) {
          return a.color || h(a, a.seriesIndex);
        }), H.watchTransition(v, "stackedArea path").attr("d", function (a, b) {
          return F(a.values, b);
        }), s.dispatch.on("elementMouseover.area", function (a) {
          D.select(".nv-chart-" + i + " .nv-area-" + a.seriesIndex).classed("hover", !0);
        }), s.dispatch.on("elementMouseout.area", function (a) {
          D.select(".nv-chart-" + i + " .nv-area-" + a.seriesIndex).classed("hover", !1);
        }), b.d3_stackedOffset_stackPercent = function (a) {
          var b,
              c,
              d,
              e = a.length,
              f = a[0].length,
              g = [];for (c = 0; f > c; ++c) {
            for (b = 0, d = 0; b < x.length; b++) {
              d += l(x[b].values[c]);
            }if (d) for (b = 0; e > b; b++) {
              a[b][c][1] /= d;
            } else for (b = 0; e > b; b++) {
              a[b][c][1] = 0;
            }
          }for (c = 0; f > c; ++c) {
            g[c] = 0;
          }return g;
        };
      }), v.renderEnd("stackedArea immediate"), b;
    }var c,
        d,
        e = { top: 0, right: 0, bottom: 0, left: 0 },
        f = 960,
        g = 500,
        h = a.utils.defaultColor(),
        i = Math.floor(1e5 * Math.random()),
        j = null,
        k = function k(a) {
      return a.x;
    },
        l = function l(a) {
      return a.y;
    },
        m = function m(a, b) {
      return !isNaN(l(a, b)) && null !== l(a, b);
    },
        n = "stack",
        o = "zero",
        p = "default",
        q = "linear",
        r = !1,
        s = a.models.scatter(),
        t = 250,
        u = d3.dispatch("areaClick", "areaMouseover", "areaMouseout", "renderEnd", "elementClick", "elementMouseover", "elementMouseout");s.pointSize(2.2).pointDomain([2.2, 2.2]);var v = a.utils.renderWatch(u, t);return b.dispatch = u, b.scatter = s, s.dispatch.on("elementClick", function () {
      u.elementClick.apply(this, arguments);
    }), s.dispatch.on("elementMouseover", function () {
      u.elementMouseover.apply(this, arguments);
    }), s.dispatch.on("elementMouseout", function () {
      u.elementMouseout.apply(this, arguments);
    }), b.interpolate = function (a) {
      return arguments.length ? (q = a, b) : q;
    }, b.duration = function (a) {
      return arguments.length ? (t = a, v.reset(t), s.duration(t), b) : t;
    }, b.dispatch = u, b.scatter = s, b.options = a.utils.optionsFunc.bind(b), b._options = Object.create({}, { width: { get: function get() {
          return f;
        }, set: function set(a) {
          f = a;
        } }, height: { get: function get() {
          return g;
        }, set: function set(a) {
          g = a;
        } }, defined: { get: function get() {
          return m;
        }, set: function set(a) {
          m = a;
        } }, clipEdge: { get: function get() {
          return r;
        }, set: function set(a) {
          r = a;
        } }, offset: { get: function get() {
          return o;
        }, set: function set(a) {
          o = a;
        } }, order: { get: function get() {
          return p;
        }, set: function set(a) {
          p = a;
        } }, interpolate: { get: function get() {
          return q;
        }, set: function set(a) {
          q = a;
        } }, x: { get: function get() {
          return k;
        }, set: function set(a) {
          k = d3.functor(a);
        } }, y: { get: function get() {
          return l;
        }, set: function set(a) {
          l = d3.functor(a);
        } }, margin: { get: function get() {
          return e;
        }, set: function set(a) {
          e.top = void 0 !== a.top ? a.top : e.top, e.right = void 0 !== a.right ? a.right : e.right, e.bottom = void 0 !== a.bottom ? a.bottom : e.bottom, e.left = void 0 !== a.left ? a.left : e.left;
        } }, color: { get: function get() {
          return h;
        }, set: function set(b) {
          h = a.utils.getColor(b);
        } }, style: { get: function get() {
          return n;
        }, set: function set(a) {
          switch (n = a) {case "stack":
              b.offset("zero"), b.order("default");break;case "stream":
              b.offset("wiggle"), b.order("inside-out");break;case "stream-center":
              b.offset("silhouette"), b.order("inside-out");break;case "expand":
              b.offset("expand"), b.order("default");break;case "stack_percent":
              b.offset(b.d3_stackedOffset_stackPercent), b.order("default");}
        } }, duration: { get: function get() {
          return t;
        }, set: function set(a) {
          t = a, v.reset(t), s.duration(t);
        } } }), a.utils.inheritOptions(b, s), a.utils.initOptions(b), b;
  }, a.models.stackedAreaChart = function () {
    "use strict";
    function b(k) {
      return L.reset(), L.models(e), u && L.models(f), v && L.models(g), k.each(function (k) {
        function D() {
          u && X.select(".nv-focus .nv-x.nv-axis").attr("transform", "translate(0," + T + ")").transition().duration(I).call(f);
        }function L() {
          if (v) {
            if ("expand" === e.style() || "stack_percent" === e.style()) {
              var a = g.tickFormat();J && a === P || (J = a), g.tickFormat(P);
            } else J && (g.tickFormat(J), J = null);X.select(".nv-focus .nv-y.nv-axis").transition().duration(0).call(g);
          }
        }function Q(a) {
          var b = X.select(".nv-focus .nv-stackedWrap").datum(k.filter(function (a) {
            return !a.disabled;
          }).map(function (b, c) {
            return { key: b.key, area: b.area, classed: b.classed, values: b.values.filter(function (b, c) {
                return e.x()(b, c) >= a[0] && e.x()(b, c) <= a[1];
              }), disableTooltip: b.disableTooltip };
          }));b.transition().duration(I).call(e), D(), L();
        }var R = d3.select(this);a.utils.initSVG(R);var S = a.utils.availableWidth(o, R, m),
            T = a.utils.availableHeight(p, R, m) - (x ? l.height() : 0);if (b.update = function () {
          R.transition().duration(I).call(b);
        }, b.container = this, B.setter(O(k), b.update).getter(N(k)).update(), B.disabled = k.map(function (a) {
          return !!a.disabled;
        }), !C) {
          var U;C = {};for (U in B) {
            B[U] instanceof Array ? C[U] = B[U].slice(0) : C[U] = B[U];
          }
        }if (!(k && k.length && k.filter(function (a) {
          return a.values.length;
        }).length)) return a.utils.noData(b, R), b;R.selectAll(".nv-noData").remove(), c = e.xScale(), d = e.yScale();var V = R.selectAll("g.nv-wrap.nv-stackedAreaChart").data([k]),
            W = V.enter().append("g").attr("class", "nvd3 nv-wrap nv-stackedAreaChart").append("g"),
            X = V.select("g");W.append("g").attr("class", "nv-legendWrap"), W.append("g").attr("class", "nv-controlsWrap");var Y = W.append("g").attr("class", "nv-focus");Y.append("g").attr("class", "nv-background").append("rect"), Y.append("g").attr("class", "nv-x nv-axis"), Y.append("g").attr("class", "nv-y nv-axis"), Y.append("g").attr("class", "nv-stackedWrap"), Y.append("g").attr("class", "nv-interactive");W.append("g").attr("class", "nv-focusWrap");if (s) {
          var Z = r && "top" === t ? S - F : S;if (h.width(Z), X.select(".nv-legendWrap").datum(k).call(h), "bottom" === t) {
            var $ = (u ? 12 : 0) + 10;m.bottom = Math.max(h.height() + $, m.bottom), T = a.utils.availableHeight(p, R, m) - (x ? l.height() : 0);var _ = T + $;X.select(".nv-legendWrap").attr("transform", "translate(0," + _ + ")");
          } else "top" === t && (n || m.top == h.height() || (m.top = h.height(), T = a.utils.availableHeight(p, R, m) - (x ? l.height() : 0)), X.select(".nv-legendWrap").attr("transform", "translate(" + (S - Z) + "," + -m.top + ")"));
        } else X.select(".nv-legendWrap").selectAll("*").remove();if (r) {
          var aa = [{ key: H.stacked || "Stacked", metaKey: "Stacked", disabled: "stack" != e.style(), style: "stack" }, { key: H.stream || "Stream", metaKey: "Stream", disabled: "stream" != e.style(), style: "stream" }, { key: H.expanded || "Expanded", metaKey: "Expanded", disabled: "expand" != e.style(), style: "expand" }, { key: H.stack_percent || "Stack %", metaKey: "Stack_Percent", disabled: "stack_percent" != e.style(), style: "stack_percent" }];F = G.length / 3 * 260, aa = aa.filter(function (a) {
            return -1 !== G.indexOf(a.metaKey);
          }), i.width(F).color(["#444", "#444", "#444"]), X.select(".nv-controlsWrap").datum(aa).call(i);var ba = Math.max(i.height(), s && "top" === t ? h.height() : 0);m.top != ba && (m.top = ba, T = a.utils.availableHeight(p, R, m) - (x ? l.height() : 0)), X.select(".nv-controlsWrap").attr("transform", "translate(0," + -m.top + ")");
        } else X.select(".nv-controlsWrap").selectAll("*").remove();V.attr("transform", "translate(" + m.left + "," + m.top + ")"), w && X.select(".nv-y.nv-axis").attr("transform", "translate(" + S + ",0)"), y && (j.width(S).height(T).margin({ left: m.left, top: m.top }).svgContainer(R).xScale(c), V.select(".nv-interactive").call(j)), X.select(".nv-focus .nv-background rect").attr("width", S).attr("height", T), e.width(S).height(T).color(k.map(function (a, b) {
          return a.color || q(a, b);
        }).filter(function (a, b) {
          return !k[b].disabled;
        }));var ca = X.select(".nv-focus .nv-stackedWrap").datum(k.filter(function (a) {
          return !a.disabled;
        }));if (u && f.scale(c)._ticks(a.utils.calcTicksX(S / 100, k)).tickSize(-T, 0), v) {
          var da;da = "wiggle" === e.offset() ? 0 : a.utils.calcTicksY(T / 36, k), g.scale(d)._ticks(da).tickSize(-S, 0);
        }if (x) {
          l.width(S), X.select(".nv-focusWrap").attr("transform", "translate(0," + (T + m.bottom + l.margin().top) + ")").datum(k.filter(function (a) {
            return !a.disabled;
          })).call(l);var ea = l.brush.empty() ? l.xDomain() : l.brush.extent();null !== ea && Q(ea);
        } else ca.transition().call(e), D(), L();e.dispatch.on("areaClick.toggle", function (a) {
          1 === k.filter(function (a) {
            return !a.disabled;
          }).length ? k.forEach(function (a) {
            a.disabled = !1;
          }) : k.forEach(function (b, c) {
            b.disabled = c != a.seriesIndex;
          }), B.disabled = k.map(function (a) {
            return !!a.disabled;
          }), E.stateChange(B), b.update();
        }), h.dispatch.on("stateChange", function (a) {
          for (var c in a) {
            B[c] = a[c];
          }E.stateChange(B), b.update();
        }), i.dispatch.on("legendClick", function (a, c) {
          a.disabled && (aa = aa.map(function (a) {
            return a.disabled = !0, a;
          }), a.disabled = !1, e.style(a.style), B.style = e.style(), E.stateChange(B), b.update());
        }), j.dispatch.on("elementMousemove", function (c) {
          e.clearHighlights();var d,
              f,
              g,
              h = [],
              i = 0,
              l = !0;if (k.filter(function (a, b) {
            return a.seriesIndex = b, !a.disabled;
          }).forEach(function (j, k) {
            f = a.interactiveBisect(j.values, c.pointXValue, b.x());var m = j.values[f],
                n = b.y()(m, f);if (null != n && e.highlightPoint(k, f, !0), "undefined" != typeof m) {
              "undefined" == typeof d && (d = m), "undefined" == typeof g && (g = b.xScale()(b.x()(m, f)));var o = "expand" == e.style() ? m.display.y : b.y()(m, f);h.push({ key: j.key, value: o, color: q(j, j.seriesIndex), point: m }), z && "expand" != e.style() && null != o && (i += o, l = !1);
            }
          }), h.reverse(), h.length > 2) {
            var m = b.yScale().invert(c.mouseY),
                n = null;h.forEach(function (a, b) {
              m = Math.abs(m);var c = Math.abs(a.point.display.y0),
                  d = Math.abs(a.point.display.y);return m >= c && d + c >= m ? void (n = b) : void 0;
            }), null != n && (h[n].highlight = !0);
          }z && "expand" != e.style() && h.length >= 2 && !l && h.push({ key: A, value: i, total: !0 });var o = b.x()(d, f),
              p = j.tooltip.valueFormatter();"expand" === e.style() || "stack_percent" === e.style() ? (K || (K = p), p = d3.format(".1%")) : K && (p = K, K = null), j.tooltip.valueFormatter(p).data({ value: o, series: h })(), j.renderGuideLine(g);
        }), j.dispatch.on("elementMouseout", function (a) {
          e.clearHighlights();
        }), l.dispatch.on("onBrush", function (a) {
          Q(a);
        }), E.on("changeState", function (a) {
          "undefined" != typeof a.disabled && k.length === a.disabled.length && (k.forEach(function (b, c) {
            b.disabled = a.disabled[c];
          }), B.disabled = a.disabled), "undefined" != typeof a.style && (e.style(a.style), M = a.style), b.update();
        });
      }), L.renderEnd("stacked Area chart immediate"), b;
    }var c,
        d,
        e = a.models.stackedArea(),
        f = a.models.axis(),
        g = a.models.axis(),
        h = a.models.legend(),
        i = a.models.legend(),
        j = a.interactiveGuideline(),
        k = a.models.tooltip(),
        l = a.models.focus(a.models.stackedArea()),
        m = { top: 10, right: 25, bottom: 50, left: 60 },
        n = null,
        o = null,
        p = null,
        q = a.utils.defaultColor(),
        r = !0,
        s = !0,
        t = "top",
        u = !0,
        v = !0,
        w = !1,
        x = !1,
        y = !1,
        z = !0,
        A = "TOTAL",
        B = a.utils.state(),
        C = null,
        D = null,
        E = d3.dispatch("stateChange", "changeState", "renderEnd"),
        F = 250,
        G = ["Stacked", "Stream", "Expanded"],
        H = {},
        I = 250;B.style = e.style(), f.orient("bottom").tickPadding(7), g.orient(w ? "right" : "left"), k.headerFormatter(function (a, b) {
      return f.tickFormat()(a, b);
    }).valueFormatter(function (a, b) {
      return g.tickFormat()(a, b);
    }), j.tooltip.headerFormatter(function (a, b) {
      return f.tickFormat()(a, b);
    }).valueFormatter(function (a, b) {
      return null == a ? "N/A" : g.tickFormat()(a, b);
    });var J = null,
        K = null;i.updateState(!1);var L = a.utils.renderWatch(E),
        M = e.style(),
        N = function N(a) {
      return function () {
        return { active: a.map(function (a) {
            return !a.disabled;
          }), style: e.style() };
      };
    },
        O = function O(a) {
      return function (b) {
        void 0 !== b.style && (M = b.style), void 0 !== b.active && a.forEach(function (a, c) {
          a.disabled = !b.active[c];
        });
      };
    },
        P = d3.format("%");return e.dispatch.on("elementMouseover.tooltip", function (a) {
      a.point.x = e.x()(a.point), a.point.y = e.y()(a.point), k.data(a).hidden(!1);
    }), e.dispatch.on("elementMouseout.tooltip", function (a) {
      k.hidden(!0);
    }), b.dispatch = E, b.stacked = e, b.legend = h, b.controls = i, b.xAxis = f, b.x2Axis = l.xAxis, b.yAxis = g, b.y2Axis = l.yAxis, b.interactiveLayer = j, b.tooltip = k, b.focus = l, b.dispatch = E, b.options = a.utils.optionsFunc.bind(b), b._options = Object.create({}, { width: { get: function get() {
          return o;
        }, set: function set(a) {
          o = a;
        } }, height: { get: function get() {
          return p;
        }, set: function set(a) {
          p = a;
        } }, showLegend: { get: function get() {
          return s;
        }, set: function set(a) {
          s = a;
        } }, legendPosition: { get: function get() {
          return t;
        }, set: function set(a) {
          t = a;
        } }, showXAxis: { get: function get() {
          return u;
        }, set: function set(a) {
          u = a;
        } }, showYAxis: { get: function get() {
          return v;
        }, set: function set(a) {
          v = a;
        } }, defaultState: { get: function get() {
          return C;
        }, set: function set(a) {
          C = a;
        } }, noData: { get: function get() {
          return D;
        }, set: function set(a) {
          D = a;
        } }, showControls: { get: function get() {
          return r;
        }, set: function set(a) {
          r = a;
        } }, controlLabels: { get: function get() {
          return H;
        }, set: function set(a) {
          H = a;
        } }, controlOptions: { get: function get() {
          return G;
        }, set: function set(a) {
          G = a;
        } }, showTotalInTooltip: { get: function get() {
          return z;
        }, set: function set(a) {
          z = a;
        } }, totalLabel: { get: function get() {
          return A;
        }, set: function set(a) {
          A = a;
        } }, focusEnable: { get: function get() {
          return x;
        }, set: function set(a) {
          x = a;
        } }, focusHeight: { get: function get() {
          return l.height();
        }, set: function set(a) {
          l.height(a);
        } }, brushExtent: { get: function get() {
          return l.brushExtent();
        }, set: function set(a) {
          l.brushExtent(a);
        } }, margin: { get: function get() {
          return m;
        }, set: function set(a) {
          void 0 !== a.top && (m.top = a.top, n = a.top), m.right = void 0 !== a.right ? a.right : m.right, m.bottom = void 0 !== a.bottom ? a.bottom : m.bottom, m.left = void 0 !== a.left ? a.left : m.left;
        } }, focusMargin: { get: function get() {
          return l.margin;
        }, set: function set(a) {
          l.margin.top = void 0 !== a.top ? a.top : l.margin.top, l.margin.right = void 0 !== a.right ? a.right : l.margin.right, l.margin.bottom = void 0 !== a.bottom ? a.bottom : l.margin.bottom, l.margin.left = void 0 !== a.left ? a.left : l.margin.left;
        } }, duration: { get: function get() {
          return I;
        }, set: function set(a) {
          I = a, L.reset(I), e.duration(I), f.duration(I), g.duration(I);
        } }, color: { get: function get() {
          return q;
        }, set: function set(b) {
          q = a.utils.getColor(b), h.color(q), e.color(q), l.color(q);
        } }, x: { get: function get() {
          return e.x();
        }, set: function set(a) {
          e.x(a), l.x(a);
        } }, y: { get: function get() {
          return e.y();
        }, set: function set(a) {
          e.y(a), l.y(a);
        } }, rightAlignYAxis: { get: function get() {
          return w;
        }, set: function set(a) {
          w = a, g.orient(w ? "right" : "left");
        } }, useInteractiveGuideline: { get: function get() {
          return y;
        }, set: function set(a) {
          y = !!a, b.interactive(!a), b.useVoronoi(!a), e.scatter.interactive(!a);
        } } }), a.utils.inheritOptions(b, e), a.utils.initOptions(b), b;
  }, a.models.stackedAreaWithFocusChart = function () {
    return a.models.stackedAreaChart().margin({ bottom: 30 }).focusEnable(!0);
  }, a.models.sunburst = function () {
    "use strict";
    function b(a) {
      var b = c(a);return b > 90 ? 180 : 0;
    }function c(a) {
      var b = Math.max(0, Math.min(2 * Math.PI, F(a.x))),
          c = Math.max(0, Math.min(2 * Math.PI, F(a.x + a.dx))),
          d = (b + c) / 2 * (180 / Math.PI) - 90;return d;
    }function d(a) {
      var b = Math.max(0, Math.min(2 * Math.PI, F(a.x))),
          c = Math.max(0, Math.min(2 * Math.PI, F(a.x + a.dx)));return (c - b) / (2 * Math.PI);
    }function e(a) {
      var b = Math.max(0, Math.min(2 * Math.PI, F(a.x))),
          c = Math.max(0, Math.min(2 * Math.PI, F(a.x + a.dx))),
          d = c - b;return d > z;
    }function f(a, b) {
      var c = d3.interpolate(F.domain(), [l.x, l.x + l.dx]),
          d = d3.interpolate(G.domain(), [l.y, 1]),
          e = d3.interpolate(G.range(), [l.y ? 20 : 0, o]);return 0 === b ? function () {
        return J(a);
      } : function (b) {
        return F.domain(c(b)), G.domain(d(b)).range(e(b)), J(a);
      };
    }function g(a) {
      var b = d3.interpolate({ x: a.x0, dx: a.dx0, y: a.y0, dy: a.dy0 }, a);return function (c) {
        var d = b(c);return a.x0 = d.x, a.dx0 = d.dx, a.y0 = d.y, a.dy0 = d.dy, J(d);
      };
    }function h(a) {
      var b = B(a);I[b] || (I[b] = {});var c = I[b];c.dx = a.dx, c.x = a.x, c.dy = a.dy, c.y = a.y;
    }function i(a) {
      a.forEach(function (a) {
        var b = B(a),
            c = I[b];c ? (a.dx0 = c.dx, a.x0 = c.x, a.dy0 = c.dy, a.y0 = c.y) : (a.dx0 = a.dx, a.x0 = a.x, a.dy0 = a.dy, a.y0 = a.y), h(a);
      });
    }function j(a) {
      var d = v.selectAll("text"),
          g = v.selectAll("path");d.transition().attr("opacity", 0), l = a, g.transition().duration(D).attrTween("d", f).each("end", function (d) {
        if (d.x >= a.x && d.x < a.x + a.dx && d.depth >= a.depth) {
          var f = d3.select(this.parentNode),
              g = f.select("text");g.transition().duration(D).text(function (a) {
            return y(a);
          }).attr("opacity", function (a) {
            return e(a) ? 1 : 0;
          }).attr("transform", function () {
            var e = this.getBBox().width;if (0 === d.depth) return "translate(" + e / 2 * -1 + ",0)";if (d.depth === a.depth) return "translate(" + (G(d.y) + 5) + ",0)";var f = c(d),
                g = b(d);return 0 === g ? "rotate(" + f + ")translate(" + (G(d.y) + 5) + ",0)" : "rotate(" + f + ")translate(" + (G(d.y) + e + 5) + ",0)rotate(" + g + ")";
          });
        }
      });
    }function k(f) {
      return K.reset(), f.each(function (f) {
        v = d3.select(this), m = a.utils.availableWidth(q, v, p), n = a.utils.availableHeight(r, v, p), o = Math.min(m, n) / 2, G.range([0, o]);var h = v.select("g.nvd3.nv-wrap.nv-sunburst");h[0][0] ? h.attr("transform", "translate(" + (m / 2 + p.left + p.right) + "," + (n / 2 + p.top + p.bottom) + ")") : h = v.append("g").attr("class", "nvd3 nv-wrap nv-sunburst nv-chart-" + u).attr("transform", "translate(" + (m / 2 + p.left + p.right) + "," + (n / 2 + p.top + p.bottom) + ")"), v.on("click", function (a, b) {
          E.chartClick({ data: a, index: b, pos: d3.event, id: u });
        }), H.value(t[s] || t.count);var k = H.nodes(f[0]).reverse();i(k);var l = h.selectAll(".arc-container").data(k, B),
            z = l.enter().append("g").attr("class", "arc-container");z.append("path").attr("d", J).style("fill", function (a) {
          return a.color ? a.color : w(C ? (a.children ? a : a.parent).name : a.name);
        }).style("stroke", "#FFF").on("click", function (a, b) {
          j(a), E.elementClick({ data: a, index: b });
        }).on("mouseover", function (a, b) {
          d3.select(this).classed("hover", !0).style("opacity", .8), E.elementMouseover({ data: a, color: d3.select(this).style("fill"), percent: d(a) });
        }).on("mouseout", function (a, b) {
          d3.select(this).classed("hover", !1).style("opacity", 1), E.elementMouseout({ data: a });
        }).on("mousemove", function (a, b) {
          E.elementMousemove({ data: a });
        }), l.each(function (a) {
          d3.select(this).select("path").transition().duration(D).attrTween("d", g);
        }), x && (l.selectAll("text").remove(), l.append("text").text(function (a) {
          return y(a);
        }).transition().duration(D).attr("opacity", function (a) {
          return e(a) ? 1 : 0;
        }).attr("transform", function (a) {
          var d = this.getBBox().width;if (0 === a.depth) return "rotate(0)translate(" + d / 2 * -1 + ",0)";var e = c(a),
              f = b(a);return 0 === f ? "rotate(" + e + ")translate(" + (G(a.y) + 5) + ",0)" : "rotate(" + e + ")translate(" + (G(a.y) + d + 5) + ",0)rotate(" + f + ")";
        })), j(k[k.length - 1]), l.exit().transition().duration(D).attr("opacity", 0).each("end", function (a) {
          var b = B(a);I[b] = void 0;
        }).remove();
      }), K.renderEnd("sunburst immediate"), k;
    }var l,
        m,
        n,
        o,
        p = { top: 0, right: 0, bottom: 0, left: 0 },
        q = 600,
        r = 600,
        s = "count",
        t = { count: function count(a) {
        return 1;
      }, value: function value(a) {
        return a.value || a.size;
      }, size: function size(a) {
        return a.value || a.size;
      } },
        u = Math.floor(1e4 * Math.random()),
        v = null,
        w = a.utils.defaultColor(),
        x = !1,
        y = function y(a) {
      return "count" === s ? a.name + " #" + a.value : a.name + " " + (a.value || a.size);
    },
        z = .02,
        A = function A(a, b) {
      return a.name > b.name;
    },
        B = function B(a, b) {
      return a.name;
    },
        C = !0,
        D = 500,
        E = d3.dispatch("chartClick", "elementClick", "elementDblClick", "elementMousemove", "elementMouseover", "elementMouseout", "renderEnd"),
        F = d3.scale.linear().range([0, 2 * Math.PI]),
        G = d3.scale.sqrt(),
        H = d3.layout.partition().sort(A),
        I = {},
        J = d3.svg.arc().startAngle(function (a) {
      return Math.max(0, Math.min(2 * Math.PI, F(a.x)));
    }).endAngle(function (a) {
      return Math.max(0, Math.min(2 * Math.PI, F(a.x + a.dx)));
    }).innerRadius(function (a) {
      return Math.max(0, G(a.y));
    }).outerRadius(function (a) {
      return Math.max(0, G(a.y + a.dy));
    }),
        K = a.utils.renderWatch(E);return k.dispatch = E, k.options = a.utils.optionsFunc.bind(k), k._options = Object.create({}, { width: { get: function get() {
          return q;
        }, set: function set(a) {
          q = a;
        } }, height: { get: function get() {
          return r;
        }, set: function set(a) {
          r = a;
        } }, mode: { get: function get() {
          return s;
        }, set: function set(a) {
          s = a;
        } }, id: { get: function get() {
          return u;
        }, set: function set(a) {
          u = a;
        } }, duration: { get: function get() {
          return D;
        }, set: function set(a) {
          D = a;
        } }, groupColorByParent: { get: function get() {
          return C;
        }, set: function set(a) {
          C = !!a;
        } }, showLabels: { get: function get() {
          return x;
        }, set: function set(a) {
          x = !!a;
        } }, labelFormat: { get: function get() {
          return y;
        }, set: function set(a) {
          y = a;
        } }, labelThreshold: { get: function get() {
          return z;
        }, set: function set(a) {
          z = a;
        } }, sort: { get: function get() {
          return A;
        }, set: function set(a) {
          A = a;
        } }, key: { get: function get() {
          return B;
        }, set: function set(a) {
          B = a;
        } }, margin: { get: function get() {
          return p;
        }, set: function set(a) {
          p.top = void 0 != a.top ? a.top : p.top, p.right = void 0 != a.right ? a.right : p.right, p.bottom = void 0 != a.bottom ? a.bottom : p.bottom, p.left = void 0 != a.left ? a.left : p.left;
        } }, color: { get: function get() {
          return w;
        }, set: function set(b) {
          w = a.utils.getColor(b);
        } } }), a.utils.initOptions(k), k;
  }, a.models.sunburstChart = function () {
    "use strict";
    function b(d) {
      return n.reset(), n.models(c), d.each(function (d) {
        var h = d3.select(this);a.utils.initSVG(h);var i = a.utils.availableWidth(f, h, e),
            j = a.utils.availableHeight(g, h, e);return b.update = function () {
          0 === l ? h.call(b) : h.transition().duration(l).call(b);
        }, b.container = h, d && d.length ? (h.selectAll(".nv-noData").remove(), c.width(i).height(j).margin(e), void h.call(c)) : (a.utils.noData(b, h), b);
      }), n.renderEnd("sunburstChart immediate"), b;
    }var c = a.models.sunburst(),
        d = a.models.tooltip(),
        e = { top: 30, right: 20, bottom: 20, left: 20 },
        f = null,
        g = null,
        h = a.utils.defaultColor(),
        i = !1,
        j = (Math.round(1e5 * Math.random()), null),
        k = null,
        l = 250,
        m = d3.dispatch("stateChange", "changeState", "renderEnd"),
        n = a.utils.renderWatch(m);return d.duration(0).headerEnabled(!1).valueFormatter(function (a) {
      return a;
    }), c.dispatch.on("elementMouseover.tooltip", function (a) {
      a.series = { key: a.data.name, value: a.data.value || a.data.size, color: a.color, percent: a.percent }, i || (delete a.percent, delete a.series.percent), d.data(a).hidden(!1);
    }), c.dispatch.on("elementMouseout.tooltip", function (a) {
      d.hidden(!0);
    }), c.dispatch.on("elementMousemove.tooltip", function (a) {
      d();
    }), b.dispatch = m, b.sunburst = c, b.tooltip = d, b.options = a.utils.optionsFunc.bind(b), b._options = Object.create({}, { noData: { get: function get() {
          return k;
        }, set: function set(a) {
          k = a;
        } }, defaultState: { get: function get() {
          return j;
        }, set: function set(a) {
          j = a;
        } }, showTooltipPercent: { get: function get() {
          return i;
        }, set: function set(a) {
          i = a;
        } }, color: { get: function get() {
          return h;
        }, set: function set(a) {
          h = a, c.color(h);
        } }, duration: { get: function get() {
          return l;
        }, set: function set(a) {
          l = a, n.reset(l), c.duration(l);
        } }, margin: { get: function get() {
          return e;
        }, set: function set(a) {
          e.top = void 0 !== a.top ? a.top : e.top, e.right = void 0 !== a.right ? a.right : e.right, e.bottom = void 0 !== a.bottom ? a.bottom : e.bottom, e.left = void 0 !== a.left ? a.left : e.left, c.margin(e);
        } } }), a.utils.inheritOptions(b, c), a.utils.initOptions(b), b;
  }, a.version = "1.8.5";
}();
//# sourceMappingURL=nv.d3.min.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;!function() {
  var d3 = {
    version: "3.5.17"
  };
  var d3_arraySlice = [].slice, d3_array = function(list) {
    return d3_arraySlice.call(list);
  };
  var d3_document = this.document;
  function d3_documentElement(node) {
    return node && (node.ownerDocument || node.document || node).documentElement;
  }
  function d3_window(node) {
    return node && (node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView);
  }
  if (d3_document) {
    try {
      d3_array(d3_document.documentElement.childNodes)[0].nodeType;
    } catch (e) {
      d3_array = function(list) {
        var i = list.length, array = new Array(i);
        while (i--) array[i] = list[i];
        return array;
      };
    }
  }
  if (!Date.now) Date.now = function() {
    return +new Date();
  };
  if (d3_document) {
    try {
      d3_document.createElement("DIV").style.setProperty("opacity", 0, "");
    } catch (error) {
      var d3_element_prototype = this.Element.prototype, d3_element_setAttribute = d3_element_prototype.setAttribute, d3_element_setAttributeNS = d3_element_prototype.setAttributeNS, d3_style_prototype = this.CSSStyleDeclaration.prototype, d3_style_setProperty = d3_style_prototype.setProperty;
      d3_element_prototype.setAttribute = function(name, value) {
        d3_element_setAttribute.call(this, name, value + "");
      };
      d3_element_prototype.setAttributeNS = function(space, local, value) {
        d3_element_setAttributeNS.call(this, space, local, value + "");
      };
      d3_style_prototype.setProperty = function(name, value, priority) {
        d3_style_setProperty.call(this, name, value + "", priority);
      };
    }
  }
  d3.ascending = d3_ascending;
  function d3_ascending(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
  }
  d3.descending = function(a, b) {
    return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
  };
  d3.min = function(array, f) {
    var i = -1, n = array.length, a, b;
    if (arguments.length === 1) {
      while (++i < n) if ((b = array[i]) != null && b >= b) {
        a = b;
        break;
      }
      while (++i < n) if ((b = array[i]) != null && a > b) a = b;
    } else {
      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b >= b) {
        a = b;
        break;
      }
      while (++i < n) if ((b = f.call(array, array[i], i)) != null && a > b) a = b;
    }
    return a;
  };
  d3.max = function(array, f) {
    var i = -1, n = array.length, a, b;
    if (arguments.length === 1) {
      while (++i < n) if ((b = array[i]) != null && b >= b) {
        a = b;
        break;
      }
      while (++i < n) if ((b = array[i]) != null && b > a) a = b;
    } else {
      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b >= b) {
        a = b;
        break;
      }
      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b > a) a = b;
    }
    return a;
  };
  d3.extent = function(array, f) {
    var i = -1, n = array.length, a, b, c;
    if (arguments.length === 1) {
      while (++i < n) if ((b = array[i]) != null && b >= b) {
        a = c = b;
        break;
      }
      while (++i < n) if ((b = array[i]) != null) {
        if (a > b) a = b;
        if (c < b) c = b;
      }
    } else {
      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b >= b) {
        a = c = b;
        break;
      }
      while (++i < n) if ((b = f.call(array, array[i], i)) != null) {
        if (a > b) a = b;
        if (c < b) c = b;
      }
    }
    return [ a, c ];
  };
  function d3_number(x) {
    return x === null ? NaN : +x;
  }
  function d3_numeric(x) {
    return !isNaN(x);
  }
  d3.sum = function(array, f) {
    var s = 0, n = array.length, a, i = -1;
    if (arguments.length === 1) {
      while (++i < n) if (d3_numeric(a = +array[i])) s += a;
    } else {
      while (++i < n) if (d3_numeric(a = +f.call(array, array[i], i))) s += a;
    }
    return s;
  };
  d3.mean = function(array, f) {
    var s = 0, n = array.length, a, i = -1, j = n;
    if (arguments.length === 1) {
      while (++i < n) if (d3_numeric(a = d3_number(array[i]))) s += a; else --j;
    } else {
      while (++i < n) if (d3_numeric(a = d3_number(f.call(array, array[i], i)))) s += a; else --j;
    }
    if (j) return s / j;
  };
  d3.quantile = function(values, p) {
    var H = (values.length - 1) * p + 1, h = Math.floor(H), v = +values[h - 1], e = H - h;
    return e ? v + e * (values[h] - v) : v;
  };
  d3.median = function(array, f) {
    var numbers = [], n = array.length, a, i = -1;
    if (arguments.length === 1) {
      while (++i < n) if (d3_numeric(a = d3_number(array[i]))) numbers.push(a);
    } else {
      while (++i < n) if (d3_numeric(a = d3_number(f.call(array, array[i], i)))) numbers.push(a);
    }
    if (numbers.length) return d3.quantile(numbers.sort(d3_ascending), .5);
  };
  d3.variance = function(array, f) {
    var n = array.length, m = 0, a, d, s = 0, i = -1, j = 0;
    if (arguments.length === 1) {
      while (++i < n) {
        if (d3_numeric(a = d3_number(array[i]))) {
          d = a - m;
          m += d / ++j;
          s += d * (a - m);
        }
      }
    } else {
      while (++i < n) {
        if (d3_numeric(a = d3_number(f.call(array, array[i], i)))) {
          d = a - m;
          m += d / ++j;
          s += d * (a - m);
        }
      }
    }
    if (j > 1) return s / (j - 1);
  };
  d3.deviation = function() {
    var v = d3.variance.apply(this, arguments);
    return v ? Math.sqrt(v) : v;
  };
  function d3_bisector(compare) {
    return {
      left: function(a, x, lo, hi) {
        if (arguments.length < 3) lo = 0;
        if (arguments.length < 4) hi = a.length;
        while (lo < hi) {
          var mid = lo + hi >>> 1;
          if (compare(a[mid], x) < 0) lo = mid + 1; else hi = mid;
        }
        return lo;
      },
      right: function(a, x, lo, hi) {
        if (arguments.length < 3) lo = 0;
        if (arguments.length < 4) hi = a.length;
        while (lo < hi) {
          var mid = lo + hi >>> 1;
          if (compare(a[mid], x) > 0) hi = mid; else lo = mid + 1;
        }
        return lo;
      }
    };
  }
  var d3_bisect = d3_bisector(d3_ascending);
  d3.bisectLeft = d3_bisect.left;
  d3.bisect = d3.bisectRight = d3_bisect.right;
  d3.bisector = function(f) {
    return d3_bisector(f.length === 1 ? function(d, x) {
      return d3_ascending(f(d), x);
    } : f);
  };
  d3.shuffle = function(array, i0, i1) {
    if ((m = arguments.length) < 3) {
      i1 = array.length;
      if (m < 2) i0 = 0;
    }
    var m = i1 - i0, t, i;
    while (m) {
      i = Math.random() * m-- | 0;
      t = array[m + i0], array[m + i0] = array[i + i0], array[i + i0] = t;
    }
    return array;
  };
  d3.permute = function(array, indexes) {
    var i = indexes.length, permutes = new Array(i);
    while (i--) permutes[i] = array[indexes[i]];
    return permutes;
  };
  d3.pairs = function(array) {
    var i = 0, n = array.length - 1, p0, p1 = array[0], pairs = new Array(n < 0 ? 0 : n);
    while (i < n) pairs[i] = [ p0 = p1, p1 = array[++i] ];
    return pairs;
  };
  d3.transpose = function(matrix) {
    if (!(n = matrix.length)) return [];
    for (var i = -1, m = d3.min(matrix, d3_transposeLength), transpose = new Array(m); ++i < m; ) {
      for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n; ) {
        row[j] = matrix[j][i];
      }
    }
    return transpose;
  };
  function d3_transposeLength(d) {
    return d.length;
  }
  d3.zip = function() {
    return d3.transpose(arguments);
  };
  d3.keys = function(map) {
    var keys = [];
    for (var key in map) keys.push(key);
    return keys;
  };
  d3.values = function(map) {
    var values = [];
    for (var key in map) values.push(map[key]);
    return values;
  };
  d3.entries = function(map) {
    var entries = [];
    for (var key in map) entries.push({
      key: key,
      value: map[key]
    });
    return entries;
  };
  d3.merge = function(arrays) {
    var n = arrays.length, m, i = -1, j = 0, merged, array;
    while (++i < n) j += arrays[i].length;
    merged = new Array(j);
    while (--n >= 0) {
      array = arrays[n];
      m = array.length;
      while (--m >= 0) {
        merged[--j] = array[m];
      }
    }
    return merged;
  };
  var abs = Math.abs;
  d3.range = function(start, stop, step) {
    if (arguments.length < 3) {
      step = 1;
      if (arguments.length < 2) {
        stop = start;
        start = 0;
      }
    }
    if ((stop - start) / step === Infinity) throw new Error("infinite range");
    var range = [], k = d3_range_integerScale(abs(step)), i = -1, j;
    start *= k, stop *= k, step *= k;
    if (step < 0) while ((j = start + step * ++i) > stop) range.push(j / k); else while ((j = start + step * ++i) < stop) range.push(j / k);
    return range;
  };
  function d3_range_integerScale(x) {
    var k = 1;
    while (x * k % 1) k *= 10;
    return k;
  }
  function d3_class(ctor, properties) {
    for (var key in properties) {
      Object.defineProperty(ctor.prototype, key, {
        value: properties[key],
        enumerable: false
      });
    }
  }
  d3.map = function(object, f) {
    var map = new d3_Map();
    if (object instanceof d3_Map) {
      object.forEach(function(key, value) {
        map.set(key, value);
      });
    } else if (Array.isArray(object)) {
      var i = -1, n = object.length, o;
      if (arguments.length === 1) while (++i < n) map.set(i, object[i]); else while (++i < n) map.set(f.call(object, o = object[i], i), o);
    } else {
      for (var key in object) map.set(key, object[key]);
    }
    return map;
  };
  function d3_Map() {
    this._ = Object.create(null);
  }
  var d3_map_proto = "__proto__", d3_map_zero = "\x00";
  d3_class(d3_Map, {
    has: d3_map_has,
    get: function(key) {
      return this._[d3_map_escape(key)];
    },
    set: function(key, value) {
      return this._[d3_map_escape(key)] = value;
    },
    remove: d3_map_remove,
    keys: d3_map_keys,
    values: function() {
      var values = [];
      for (var key in this._) values.push(this._[key]);
      return values;
    },
    entries: function() {
      var entries = [];
      for (var key in this._) entries.push({
        key: d3_map_unescape(key),
        value: this._[key]
      });
      return entries;
    },
    size: d3_map_size,
    empty: d3_map_empty,
    forEach: function(f) {
      for (var key in this._) f.call(this, d3_map_unescape(key), this._[key]);
    }
  });
  function d3_map_escape(key) {
    return (key += "") === d3_map_proto || key[0] === d3_map_zero ? d3_map_zero + key : key;
  }
  function d3_map_unescape(key) {
    return (key += "")[0] === d3_map_zero ? key.slice(1) : key;
  }
  function d3_map_has(key) {
    return d3_map_escape(key) in this._;
  }
  function d3_map_remove(key) {
    return (key = d3_map_escape(key)) in this._ && delete this._[key];
  }
  function d3_map_keys() {
    var keys = [];
    for (var key in this._) keys.push(d3_map_unescape(key));
    return keys;
  }
  function d3_map_size() {
    var size = 0;
    for (var key in this._) ++size;
    return size;
  }
  function d3_map_empty() {
    for (var key in this._) return false;
    return true;
  }
  d3.nest = function() {
    var nest = {}, keys = [], sortKeys = [], sortValues, rollup;
    function map(mapType, array, depth) {
      if (depth >= keys.length) return rollup ? rollup.call(nest, array) : sortValues ? array.sort(sortValues) : array;
      var i = -1, n = array.length, key = keys[depth++], keyValue, object, setter, valuesByKey = new d3_Map(), values;
      while (++i < n) {
        if (values = valuesByKey.get(keyValue = key(object = array[i]))) {
          values.push(object);
        } else {
          valuesByKey.set(keyValue, [ object ]);
        }
      }
      if (mapType) {
        object = mapType();
        setter = function(keyValue, values) {
          object.set(keyValue, map(mapType, values, depth));
        };
      } else {
        object = {};
        setter = function(keyValue, values) {
          object[keyValue] = map(mapType, values, depth);
        };
      }
      valuesByKey.forEach(setter);
      return object;
    }
    function entries(map, depth) {
      if (depth >= keys.length) return map;
      var array = [], sortKey = sortKeys[depth++];
      map.forEach(function(key, keyMap) {
        array.push({
          key: key,
          values: entries(keyMap, depth)
        });
      });
      return sortKey ? array.sort(function(a, b) {
        return sortKey(a.key, b.key);
      }) : array;
    }
    nest.map = function(array, mapType) {
      return map(mapType, array, 0);
    };
    nest.entries = function(array) {
      return entries(map(d3.map, array, 0), 0);
    };
    nest.key = function(d) {
      keys.push(d);
      return nest;
    };
    nest.sortKeys = function(order) {
      sortKeys[keys.length - 1] = order;
      return nest;
    };
    nest.sortValues = function(order) {
      sortValues = order;
      return nest;
    };
    nest.rollup = function(f) {
      rollup = f;
      return nest;
    };
    return nest;
  };
  d3.set = function(array) {
    var set = new d3_Set();
    if (array) for (var i = 0, n = array.length; i < n; ++i) set.add(array[i]);
    return set;
  };
  function d3_Set() {
    this._ = Object.create(null);
  }
  d3_class(d3_Set, {
    has: d3_map_has,
    add: function(key) {
      this._[d3_map_escape(key += "")] = true;
      return key;
    },
    remove: d3_map_remove,
    values: d3_map_keys,
    size: d3_map_size,
    empty: d3_map_empty,
    forEach: function(f) {
      for (var key in this._) f.call(this, d3_map_unescape(key));
    }
  });
  d3.behavior = {};
  function d3_identity(d) {
    return d;
  }
  d3.rebind = function(target, source) {
    var i = 1, n = arguments.length, method;
    while (++i < n) target[method = arguments[i]] = d3_rebind(target, source, source[method]);
    return target;
  };
  function d3_rebind(target, source, method) {
    return function() {
      var value = method.apply(source, arguments);
      return value === source ? target : value;
    };
  }
  function d3_vendorSymbol(object, name) {
    if (name in object) return name;
    name = name.charAt(0).toUpperCase() + name.slice(1);
    for (var i = 0, n = d3_vendorPrefixes.length; i < n; ++i) {
      var prefixName = d3_vendorPrefixes[i] + name;
      if (prefixName in object) return prefixName;
    }
  }
  var d3_vendorPrefixes = [ "webkit", "ms", "moz", "Moz", "o", "O" ];
  function d3_noop() {}
  d3.dispatch = function() {
    var dispatch = new d3_dispatch(), i = -1, n = arguments.length;
    while (++i < n) dispatch[arguments[i]] = d3_dispatch_event(dispatch);
    return dispatch;
  };
  function d3_dispatch() {}
  d3_dispatch.prototype.on = function(type, listener) {
    var i = type.indexOf("."), name = "";
    if (i >= 0) {
      name = type.slice(i + 1);
      type = type.slice(0, i);
    }
    if (type) return arguments.length < 2 ? this[type].on(name) : this[type].on(name, listener);
    if (arguments.length === 2) {
      if (listener == null) for (type in this) {
        if (this.hasOwnProperty(type)) this[type].on(name, null);
      }
      return this;
    }
  };
  function d3_dispatch_event(dispatch) {
    var listeners = [], listenerByName = new d3_Map();
    function event() {
      var z = listeners, i = -1, n = z.length, l;
      while (++i < n) if (l = z[i].on) l.apply(this, arguments);
      return dispatch;
    }
    event.on = function(name, listener) {
      var l = listenerByName.get(name), i;
      if (arguments.length < 2) return l && l.on;
      if (l) {
        l.on = null;
        listeners = listeners.slice(0, i = listeners.indexOf(l)).concat(listeners.slice(i + 1));
        listenerByName.remove(name);
      }
      if (listener) listeners.push(listenerByName.set(name, {
        on: listener
      }));
      return dispatch;
    };
    return event;
  }
  d3.event = null;
  function d3_eventPreventDefault() {
    d3.event.preventDefault();
  }
  function d3_eventSource() {
    var e = d3.event, s;
    while (s = e.sourceEvent) e = s;
    return e;
  }
  function d3_eventDispatch(target) {
    var dispatch = new d3_dispatch(), i = 0, n = arguments.length;
    while (++i < n) dispatch[arguments[i]] = d3_dispatch_event(dispatch);
    dispatch.of = function(thiz, argumentz) {
      return function(e1) {
        try {
          var e0 = e1.sourceEvent = d3.event;
          e1.target = target;
          d3.event = e1;
          dispatch[e1.type].apply(thiz, argumentz);
        } finally {
          d3.event = e0;
        }
      };
    };
    return dispatch;
  }
  d3.requote = function(s) {
    return s.replace(d3_requote_re, "\\$&");
  };
  var d3_requote_re = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
  var d3_subclass = {}.__proto__ ? function(object, prototype) {
    object.__proto__ = prototype;
  } : function(object, prototype) {
    for (var property in prototype) object[property] = prototype[property];
  };
  function d3_selection(groups) {
    d3_subclass(groups, d3_selectionPrototype);
    return groups;
  }
  var d3_select = function(s, n) {
    return n.querySelector(s);
  }, d3_selectAll = function(s, n) {
    return n.querySelectorAll(s);
  }, d3_selectMatches = function(n, s) {
    var d3_selectMatcher = n.matches || n[d3_vendorSymbol(n, "matchesSelector")];
    d3_selectMatches = function(n, s) {
      return d3_selectMatcher.call(n, s);
    };
    return d3_selectMatches(n, s);
  };
  if (typeof Sizzle === "function") {
    d3_select = function(s, n) {
      return Sizzle(s, n)[0] || null;
    };
    d3_selectAll = Sizzle;
    d3_selectMatches = Sizzle.matchesSelector;
  }
  d3.selection = function() {
    return d3.select(d3_document.documentElement);
  };
  var d3_selectionPrototype = d3.selection.prototype = [];
  d3_selectionPrototype.select = function(selector) {
    var subgroups = [], subgroup, subnode, group, node;
    selector = d3_selection_selector(selector);
    for (var j = -1, m = this.length; ++j < m; ) {
      subgroups.push(subgroup = []);
      subgroup.parentNode = (group = this[j]).parentNode;
      for (var i = -1, n = group.length; ++i < n; ) {
        if (node = group[i]) {
          subgroup.push(subnode = selector.call(node, node.__data__, i, j));
          if (subnode && "__data__" in node) subnode.__data__ = node.__data__;
        } else {
          subgroup.push(null);
        }
      }
    }
    return d3_selection(subgroups);
  };
  function d3_selection_selector(selector) {
    return typeof selector === "function" ? selector : function() {
      return d3_select(selector, this);
    };
  }
  d3_selectionPrototype.selectAll = function(selector) {
    var subgroups = [], subgroup, node;
    selector = d3_selection_selectorAll(selector);
    for (var j = -1, m = this.length; ++j < m; ) {
      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
        if (node = group[i]) {
          subgroups.push(subgroup = d3_array(selector.call(node, node.__data__, i, j)));
          subgroup.parentNode = node;
        }
      }
    }
    return d3_selection(subgroups);
  };
  function d3_selection_selectorAll(selector) {
    return typeof selector === "function" ? selector : function() {
      return d3_selectAll(selector, this);
    };
  }
  var d3_nsXhtml = "http://www.w3.org/1999/xhtml";
  var d3_nsPrefix = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: d3_nsXhtml,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
  };
  d3.ns = {
    prefix: d3_nsPrefix,
    qualify: function(name) {
      var i = name.indexOf(":"), prefix = name;
      if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
      return d3_nsPrefix.hasOwnProperty(prefix) ? {
        space: d3_nsPrefix[prefix],
        local: name
      } : name;
    }
  };
  d3_selectionPrototype.attr = function(name, value) {
    if (arguments.length < 2) {
      if (typeof name === "string") {
        var node = this.node();
        name = d3.ns.qualify(name);
        return name.local ? node.getAttributeNS(name.space, name.local) : node.getAttribute(name);
      }
      for (value in name) this.each(d3_selection_attr(value, name[value]));
      return this;
    }
    return this.each(d3_selection_attr(name, value));
  };
  function d3_selection_attr(name, value) {
    name = d3.ns.qualify(name);
    function attrNull() {
      this.removeAttribute(name);
    }
    function attrNullNS() {
      this.removeAttributeNS(name.space, name.local);
    }
    function attrConstant() {
      this.setAttribute(name, value);
    }
    function attrConstantNS() {
      this.setAttributeNS(name.space, name.local, value);
    }
    function attrFunction() {
      var x = value.apply(this, arguments);
      if (x == null) this.removeAttribute(name); else this.setAttribute(name, x);
    }
    function attrFunctionNS() {
      var x = value.apply(this, arguments);
      if (x == null) this.removeAttributeNS(name.space, name.local); else this.setAttributeNS(name.space, name.local, x);
    }
    return value == null ? name.local ? attrNullNS : attrNull : typeof value === "function" ? name.local ? attrFunctionNS : attrFunction : name.local ? attrConstantNS : attrConstant;
  }
  function d3_collapse(s) {
    return s.trim().replace(/\s+/g, " ");
  }
  d3_selectionPrototype.classed = function(name, value) {
    if (arguments.length < 2) {
      if (typeof name === "string") {
        var node = this.node(), n = (name = d3_selection_classes(name)).length, i = -1;
        if (value = node.classList) {
          while (++i < n) if (!value.contains(name[i])) return false;
        } else {
          value = node.getAttribute("class");
          while (++i < n) if (!d3_selection_classedRe(name[i]).test(value)) return false;
        }
        return true;
      }
      for (value in name) this.each(d3_selection_classed(value, name[value]));
      return this;
    }
    return this.each(d3_selection_classed(name, value));
  };
  function d3_selection_classedRe(name) {
    return new RegExp("(?:^|\\s+)" + d3.requote(name) + "(?:\\s+|$)", "g");
  }
  function d3_selection_classes(name) {
    return (name + "").trim().split(/^|\s+/);
  }
  function d3_selection_classed(name, value) {
    name = d3_selection_classes(name).map(d3_selection_classedName);
    var n = name.length;
    function classedConstant() {
      var i = -1;
      while (++i < n) name[i](this, value);
    }
    function classedFunction() {
      var i = -1, x = value.apply(this, arguments);
      while (++i < n) name[i](this, x);
    }
    return typeof value === "function" ? classedFunction : classedConstant;
  }
  function d3_selection_classedName(name) {
    var re = d3_selection_classedRe(name);
    return function(node, value) {
      if (c = node.classList) return value ? c.add(name) : c.remove(name);
      var c = node.getAttribute("class") || "";
      if (value) {
        re.lastIndex = 0;
        if (!re.test(c)) node.setAttribute("class", d3_collapse(c + " " + name));
      } else {
        node.setAttribute("class", d3_collapse(c.replace(re, " ")));
      }
    };
  }
  d3_selectionPrototype.style = function(name, value, priority) {
    var n = arguments.length;
    if (n < 3) {
      if (typeof name !== "string") {
        if (n < 2) value = "";
        for (priority in name) this.each(d3_selection_style(priority, name[priority], value));
        return this;
      }
      if (n < 2) {
        var node = this.node();
        return d3_window(node).getComputedStyle(node, null).getPropertyValue(name);
      }
      priority = "";
    }
    return this.each(d3_selection_style(name, value, priority));
  };
  function d3_selection_style(name, value, priority) {
    function styleNull() {
      this.style.removeProperty(name);
    }
    function styleConstant() {
      this.style.setProperty(name, value, priority);
    }
    function styleFunction() {
      var x = value.apply(this, arguments);
      if (x == null) this.style.removeProperty(name); else this.style.setProperty(name, x, priority);
    }
    return value == null ? styleNull : typeof value === "function" ? styleFunction : styleConstant;
  }
  d3_selectionPrototype.property = function(name, value) {
    if (arguments.length < 2) {
      if (typeof name === "string") return this.node()[name];
      for (value in name) this.each(d3_selection_property(value, name[value]));
      return this;
    }
    return this.each(d3_selection_property(name, value));
  };
  function d3_selection_property(name, value) {
    function propertyNull() {
      delete this[name];
    }
    function propertyConstant() {
      this[name] = value;
    }
    function propertyFunction() {
      var x = value.apply(this, arguments);
      if (x == null) delete this[name]; else this[name] = x;
    }
    return value == null ? propertyNull : typeof value === "function" ? propertyFunction : propertyConstant;
  }
  d3_selectionPrototype.text = function(value) {
    return arguments.length ? this.each(typeof value === "function" ? function() {
      var v = value.apply(this, arguments);
      this.textContent = v == null ? "" : v;
    } : value == null ? function() {
      this.textContent = "";
    } : function() {
      this.textContent = value;
    }) : this.node().textContent;
  };
  d3_selectionPrototype.html = function(value) {
    return arguments.length ? this.each(typeof value === "function" ? function() {
      var v = value.apply(this, arguments);
      this.innerHTML = v == null ? "" : v;
    } : value == null ? function() {
      this.innerHTML = "";
    } : function() {
      this.innerHTML = value;
    }) : this.node().innerHTML;
  };
  d3_selectionPrototype.append = function(name) {
    name = d3_selection_creator(name);
    return this.select(function() {
      return this.appendChild(name.apply(this, arguments));
    });
  };
  function d3_selection_creator(name) {
    function create() {
      var document = this.ownerDocument, namespace = this.namespaceURI;
      return namespace === d3_nsXhtml && document.documentElement.namespaceURI === d3_nsXhtml ? document.createElement(name) : document.createElementNS(namespace, name);
    }
    function createNS() {
      return this.ownerDocument.createElementNS(name.space, name.local);
    }
    return typeof name === "function" ? name : (name = d3.ns.qualify(name)).local ? createNS : create;
  }
  d3_selectionPrototype.insert = function(name, before) {
    name = d3_selection_creator(name);
    before = d3_selection_selector(before);
    return this.select(function() {
      return this.insertBefore(name.apply(this, arguments), before.apply(this, arguments) || null);
    });
  };
  d3_selectionPrototype.remove = function() {
    return this.each(d3_selectionRemove);
  };
  function d3_selectionRemove() {
    var parent = this.parentNode;
    if (parent) parent.removeChild(this);
  }
  d3_selectionPrototype.data = function(value, key) {
    var i = -1, n = this.length, group, node;
    if (!arguments.length) {
      value = new Array(n = (group = this[0]).length);
      while (++i < n) {
        if (node = group[i]) {
          value[i] = node.__data__;
        }
      }
      return value;
    }
    function bind(group, groupData) {
      var i, n = group.length, m = groupData.length, n0 = Math.min(n, m), updateNodes = new Array(m), enterNodes = new Array(m), exitNodes = new Array(n), node, nodeData;
      if (key) {
        var nodeByKeyValue = new d3_Map(), keyValues = new Array(n), keyValue;
        for (i = -1; ++i < n; ) {
          if (node = group[i]) {
            if (nodeByKeyValue.has(keyValue = key.call(node, node.__data__, i))) {
              exitNodes[i] = node;
            } else {
              nodeByKeyValue.set(keyValue, node);
            }
            keyValues[i] = keyValue;
          }
        }
        for (i = -1; ++i < m; ) {
          if (!(node = nodeByKeyValue.get(keyValue = key.call(groupData, nodeData = groupData[i], i)))) {
            enterNodes[i] = d3_selection_dataNode(nodeData);
          } else if (node !== true) {
            updateNodes[i] = node;
            node.__data__ = nodeData;
          }
          nodeByKeyValue.set(keyValue, true);
        }
        for (i = -1; ++i < n; ) {
          if (i in keyValues && nodeByKeyValue.get(keyValues[i]) !== true) {
            exitNodes[i] = group[i];
          }
        }
      } else {
        for (i = -1; ++i < n0; ) {
          node = group[i];
          nodeData = groupData[i];
          if (node) {
            node.__data__ = nodeData;
            updateNodes[i] = node;
          } else {
            enterNodes[i] = d3_selection_dataNode(nodeData);
          }
        }
        for (;i < m; ++i) {
          enterNodes[i] = d3_selection_dataNode(groupData[i]);
        }
        for (;i < n; ++i) {
          exitNodes[i] = group[i];
        }
      }
      enterNodes.update = updateNodes;
      enterNodes.parentNode = updateNodes.parentNode = exitNodes.parentNode = group.parentNode;
      enter.push(enterNodes);
      update.push(updateNodes);
      exit.push(exitNodes);
    }
    var enter = d3_selection_enter([]), update = d3_selection([]), exit = d3_selection([]);
    if (typeof value === "function") {
      while (++i < n) {
        bind(group = this[i], value.call(group, group.parentNode.__data__, i));
      }
    } else {
      while (++i < n) {
        bind(group = this[i], value);
      }
    }
    update.enter = function() {
      return enter;
    };
    update.exit = function() {
      return exit;
    };
    return update;
  };
  function d3_selection_dataNode(data) {
    return {
      __data__: data
    };
  }
  d3_selectionPrototype.datum = function(value) {
    return arguments.length ? this.property("__data__", value) : this.property("__data__");
  };
  d3_selectionPrototype.filter = function(filter) {
    var subgroups = [], subgroup, group, node;
    if (typeof filter !== "function") filter = d3_selection_filter(filter);
    for (var j = 0, m = this.length; j < m; j++) {
      subgroups.push(subgroup = []);
      subgroup.parentNode = (group = this[j]).parentNode;
      for (var i = 0, n = group.length; i < n; i++) {
        if ((node = group[i]) && filter.call(node, node.__data__, i, j)) {
          subgroup.push(node);
        }
      }
    }
    return d3_selection(subgroups);
  };
  function d3_selection_filter(selector) {
    return function() {
      return d3_selectMatches(this, selector);
    };
  }
  d3_selectionPrototype.order = function() {
    for (var j = -1, m = this.length; ++j < m; ) {
      for (var group = this[j], i = group.length - 1, next = group[i], node; --i >= 0; ) {
        if (node = group[i]) {
          if (next && next !== node.nextSibling) next.parentNode.insertBefore(node, next);
          next = node;
        }
      }
    }
    return this;
  };
  d3_selectionPrototype.sort = function(comparator) {
    comparator = d3_selection_sortComparator.apply(this, arguments);
    for (var j = -1, m = this.length; ++j < m; ) this[j].sort(comparator);
    return this.order();
  };
  function d3_selection_sortComparator(comparator) {
    if (!arguments.length) comparator = d3_ascending;
    return function(a, b) {
      return a && b ? comparator(a.__data__, b.__data__) : !a - !b;
    };
  }
  d3_selectionPrototype.each = function(callback) {
    return d3_selection_each(this, function(node, i, j) {
      callback.call(node, node.__data__, i, j);
    });
  };
  function d3_selection_each(groups, callback) {
    for (var j = 0, m = groups.length; j < m; j++) {
      for (var group = groups[j], i = 0, n = group.length, node; i < n; i++) {
        if (node = group[i]) callback(node, i, j);
      }
    }
    return groups;
  }
  d3_selectionPrototype.call = function(callback) {
    var args = d3_array(arguments);
    callback.apply(args[0] = this, args);
    return this;
  };
  d3_selectionPrototype.empty = function() {
    return !this.node();
  };
  d3_selectionPrototype.node = function() {
    for (var j = 0, m = this.length; j < m; j++) {
      for (var group = this[j], i = 0, n = group.length; i < n; i++) {
        var node = group[i];
        if (node) return node;
      }
    }
    return null;
  };
  d3_selectionPrototype.size = function() {
    var n = 0;
    d3_selection_each(this, function() {
      ++n;
    });
    return n;
  };
  function d3_selection_enter(selection) {
    d3_subclass(selection, d3_selection_enterPrototype);
    return selection;
  }
  var d3_selection_enterPrototype = [];
  d3.selection.enter = d3_selection_enter;
  d3.selection.enter.prototype = d3_selection_enterPrototype;
  d3_selection_enterPrototype.append = d3_selectionPrototype.append;
  d3_selection_enterPrototype.empty = d3_selectionPrototype.empty;
  d3_selection_enterPrototype.node = d3_selectionPrototype.node;
  d3_selection_enterPrototype.call = d3_selectionPrototype.call;
  d3_selection_enterPrototype.size = d3_selectionPrototype.size;
  d3_selection_enterPrototype.select = function(selector) {
    var subgroups = [], subgroup, subnode, upgroup, group, node;
    for (var j = -1, m = this.length; ++j < m; ) {
      upgroup = (group = this[j]).update;
      subgroups.push(subgroup = []);
      subgroup.parentNode = group.parentNode;
      for (var i = -1, n = group.length; ++i < n; ) {
        if (node = group[i]) {
          subgroup.push(upgroup[i] = subnode = selector.call(group.parentNode, node.__data__, i, j));
          subnode.__data__ = node.__data__;
        } else {
          subgroup.push(null);
        }
      }
    }
    return d3_selection(subgroups);
  };
  d3_selection_enterPrototype.insert = function(name, before) {
    if (arguments.length < 2) before = d3_selection_enterInsertBefore(this);
    return d3_selectionPrototype.insert.call(this, name, before);
  };
  function d3_selection_enterInsertBefore(enter) {
    var i0, j0;
    return function(d, i, j) {
      var group = enter[j].update, n = group.length, node;
      if (j != j0) j0 = j, i0 = 0;
      if (i >= i0) i0 = i + 1;
      while (!(node = group[i0]) && ++i0 < n) ;
      return node;
    };
  }
  d3.select = function(node) {
    var group;
    if (typeof node === "string") {
      group = [ d3_select(node, d3_document) ];
      group.parentNode = d3_document.documentElement;
    } else {
      group = [ node ];
      group.parentNode = d3_documentElement(node);
    }
    return d3_selection([ group ]);
  };
  d3.selectAll = function(nodes) {
    var group;
    if (typeof nodes === "string") {
      group = d3_array(d3_selectAll(nodes, d3_document));
      group.parentNode = d3_document.documentElement;
    } else {
      group = d3_array(nodes);
      group.parentNode = null;
    }
    return d3_selection([ group ]);
  };
  d3_selectionPrototype.on = function(type, listener, capture) {
    var n = arguments.length;
    if (n < 3) {
      if (typeof type !== "string") {
        if (n < 2) listener = false;
        for (capture in type) this.each(d3_selection_on(capture, type[capture], listener));
        return this;
      }
      if (n < 2) return (n = this.node()["__on" + type]) && n._;
      capture = false;
    }
    return this.each(d3_selection_on(type, listener, capture));
  };
  function d3_selection_on(type, listener, capture) {
    var name = "__on" + type, i = type.indexOf("."), wrap = d3_selection_onListener;
    if (i > 0) type = type.slice(0, i);
    var filter = d3_selection_onFilters.get(type);
    if (filter) type = filter, wrap = d3_selection_onFilter;
    function onRemove() {
      var l = this[name];
      if (l) {
        this.removeEventListener(type, l, l.$);
        delete this[name];
      }
    }
    function onAdd() {
      var l = wrap(listener, d3_array(arguments));
      onRemove.call(this);
      this.addEventListener(type, this[name] = l, l.$ = capture);
      l._ = listener;
    }
    function removeAll() {
      var re = new RegExp("^__on([^.]+)" + d3.requote(type) + "$"), match;
      for (var name in this) {
        if (match = name.match(re)) {
          var l = this[name];
          this.removeEventListener(match[1], l, l.$);
          delete this[name];
        }
      }
    }
    return i ? listener ? onAdd : onRemove : listener ? d3_noop : removeAll;
  }
  var d3_selection_onFilters = d3.map({
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  });
  if (d3_document) {
    d3_selection_onFilters.forEach(function(k) {
      if ("on" + k in d3_document) d3_selection_onFilters.remove(k);
    });
  }
  function d3_selection_onListener(listener, argumentz) {
    return function(e) {
      var o = d3.event;
      d3.event = e;
      argumentz[0] = this.__data__;
      try {
        listener.apply(this, argumentz);
      } finally {
        d3.event = o;
      }
    };
  }
  function d3_selection_onFilter(listener, argumentz) {
    var l = d3_selection_onListener(listener, argumentz);
    return function(e) {
      var target = this, related = e.relatedTarget;
      if (!related || related !== target && !(related.compareDocumentPosition(target) & 8)) {
        l.call(target, e);
      }
    };
  }
  var d3_event_dragSelect, d3_event_dragId = 0;
  function d3_event_dragSuppress(node) {
    var name = ".dragsuppress-" + ++d3_event_dragId, click = "click" + name, w = d3.select(d3_window(node)).on("touchmove" + name, d3_eventPreventDefault).on("dragstart" + name, d3_eventPreventDefault).on("selectstart" + name, d3_eventPreventDefault);
    if (d3_event_dragSelect == null) {
      d3_event_dragSelect = "onselectstart" in node ? false : d3_vendorSymbol(node.style, "userSelect");
    }
    if (d3_event_dragSelect) {
      var style = d3_documentElement(node).style, select = style[d3_event_dragSelect];
      style[d3_event_dragSelect] = "none";
    }
    return function(suppressClick) {
      w.on(name, null);
      if (d3_event_dragSelect) style[d3_event_dragSelect] = select;
      if (suppressClick) {
        var off = function() {
          w.on(click, null);
        };
        w.on(click, function() {
          d3_eventPreventDefault();
          off();
        }, true);
        setTimeout(off, 0);
      }
    };
  }
  d3.mouse = function(container) {
    return d3_mousePoint(container, d3_eventSource());
  };
  var d3_mouse_bug44083 = this.navigator && /WebKit/.test(this.navigator.userAgent) ? -1 : 0;
  function d3_mousePoint(container, e) {
    if (e.changedTouches) e = e.changedTouches[0];
    var svg = container.ownerSVGElement || container;
    if (svg.createSVGPoint) {
      var point = svg.createSVGPoint();
      if (d3_mouse_bug44083 < 0) {
        var window = d3_window(container);
        if (window.scrollX || window.scrollY) {
          svg = d3.select("body").append("svg").style({
            position: "absolute",
            top: 0,
            left: 0,
            margin: 0,
            padding: 0,
            border: "none"
          }, "important");
          var ctm = svg[0][0].getScreenCTM();
          d3_mouse_bug44083 = !(ctm.f || ctm.e);
          svg.remove();
        }
      }
      if (d3_mouse_bug44083) point.x = e.pageX, point.y = e.pageY; else point.x = e.clientX, 
      point.y = e.clientY;
      point = point.matrixTransform(container.getScreenCTM().inverse());
      return [ point.x, point.y ];
    }
    var rect = container.getBoundingClientRect();
    return [ e.clientX - rect.left - container.clientLeft, e.clientY - rect.top - container.clientTop ];
  }
  d3.touch = function(container, touches, identifier) {
    if (arguments.length < 3) identifier = touches, touches = d3_eventSource().changedTouches;
    if (touches) for (var i = 0, n = touches.length, touch; i < n; ++i) {
      if ((touch = touches[i]).identifier === identifier) {
        return d3_mousePoint(container, touch);
      }
    }
  };
  d3.behavior.drag = function() {
    var event = d3_eventDispatch(drag, "drag", "dragstart", "dragend"), origin = null, mousedown = dragstart(d3_noop, d3.mouse, d3_window, "mousemove", "mouseup"), touchstart = dragstart(d3_behavior_dragTouchId, d3.touch, d3_identity, "touchmove", "touchend");
    function drag() {
      this.on("mousedown.drag", mousedown).on("touchstart.drag", touchstart);
    }
    function dragstart(id, position, subject, move, end) {
      return function() {
        var that = this, target = d3.event.target.correspondingElement || d3.event.target, parent = that.parentNode, dispatch = event.of(that, arguments), dragged = 0, dragId = id(), dragName = ".drag" + (dragId == null ? "" : "-" + dragId), dragOffset, dragSubject = d3.select(subject(target)).on(move + dragName, moved).on(end + dragName, ended), dragRestore = d3_event_dragSuppress(target), position0 = position(parent, dragId);
        if (origin) {
          dragOffset = origin.apply(that, arguments);
          dragOffset = [ dragOffset.x - position0[0], dragOffset.y - position0[1] ];
        } else {
          dragOffset = [ 0, 0 ];
        }
        dispatch({
          type: "dragstart"
        });
        function moved() {
          var position1 = position(parent, dragId), dx, dy;
          if (!position1) return;
          dx = position1[0] - position0[0];
          dy = position1[1] - position0[1];
          dragged |= dx | dy;
          position0 = position1;
          dispatch({
            type: "drag",
            x: position1[0] + dragOffset[0],
            y: position1[1] + dragOffset[1],
            dx: dx,
            dy: dy
          });
        }
        function ended() {
          if (!position(parent, dragId)) return;
          dragSubject.on(move + dragName, null).on(end + dragName, null);
          dragRestore(dragged);
          dispatch({
            type: "dragend"
          });
        }
      };
    }
    drag.origin = function(x) {
      if (!arguments.length) return origin;
      origin = x;
      return drag;
    };
    return d3.rebind(drag, event, "on");
  };
  function d3_behavior_dragTouchId() {
    return d3.event.changedTouches[0].identifier;
  }
  d3.touches = function(container, touches) {
    if (arguments.length < 2) touches = d3_eventSource().touches;
    return touches ? d3_array(touches).map(function(touch) {
      var point = d3_mousePoint(container, touch);
      point.identifier = touch.identifier;
      return point;
    }) : [];
  };
  var ε = 1e-6, ε2 = ε * ε, π = Math.PI, τ = 2 * π, τε = τ - ε, halfπ = π / 2, d3_radians = π / 180, d3_degrees = 180 / π;
  function d3_sgn(x) {
    return x > 0 ? 1 : x < 0 ? -1 : 0;
  }
  function d3_cross2d(a, b, c) {
    return (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
  }
  function d3_acos(x) {
    return x > 1 ? 0 : x < -1 ? π : Math.acos(x);
  }
  function d3_asin(x) {
    return x > 1 ? halfπ : x < -1 ? -halfπ : Math.asin(x);
  }
  function d3_sinh(x) {
    return ((x = Math.exp(x)) - 1 / x) / 2;
  }
  function d3_cosh(x) {
    return ((x = Math.exp(x)) + 1 / x) / 2;
  }
  function d3_tanh(x) {
    return ((x = Math.exp(2 * x)) - 1) / (x + 1);
  }
  function d3_haversin(x) {
    return (x = Math.sin(x / 2)) * x;
  }
  var ρ = Math.SQRT2, ρ2 = 2, ρ4 = 4;
  d3.interpolateZoom = function(p0, p1) {
    var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, i, S;
    if (d2 < ε2) {
      S = Math.log(w1 / w0) / ρ;
      i = function(t) {
        return [ ux0 + t * dx, uy0 + t * dy, w0 * Math.exp(ρ * t * S) ];
      };
    } else {
      var d1 = Math.sqrt(d2), b0 = (w1 * w1 - w0 * w0 + ρ4 * d2) / (2 * w0 * ρ2 * d1), b1 = (w1 * w1 - w0 * w0 - ρ4 * d2) / (2 * w1 * ρ2 * d1), r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
      S = (r1 - r0) / ρ;
      i = function(t) {
        var s = t * S, coshr0 = d3_cosh(r0), u = w0 / (ρ2 * d1) * (coshr0 * d3_tanh(ρ * s + r0) - d3_sinh(r0));
        return [ ux0 + u * dx, uy0 + u * dy, w0 * coshr0 / d3_cosh(ρ * s + r0) ];
      };
    }
    i.duration = S * 1e3;
    return i;
  };
  d3.behavior.zoom = function() {
    var view = {
      x: 0,
      y: 0,
      k: 1
    }, translate0, center0, center, size = [ 960, 500 ], scaleExtent = d3_behavior_zoomInfinity, duration = 250, zooming = 0, mousedown = "mousedown.zoom", mousemove = "mousemove.zoom", mouseup = "mouseup.zoom", mousewheelTimer, touchstart = "touchstart.zoom", touchtime, event = d3_eventDispatch(zoom, "zoomstart", "zoom", "zoomend"), x0, x1, y0, y1;
    if (!d3_behavior_zoomWheel) {
      d3_behavior_zoomWheel = "onwheel" in d3_document ? (d3_behavior_zoomDelta = function() {
        return -d3.event.deltaY * (d3.event.deltaMode ? 120 : 1);
      }, "wheel") : "onmousewheel" in d3_document ? (d3_behavior_zoomDelta = function() {
        return d3.event.wheelDelta;
      }, "mousewheel") : (d3_behavior_zoomDelta = function() {
        return -d3.event.detail;
      }, "MozMousePixelScroll");
    }
    function zoom(g) {
      g.on(mousedown, mousedowned).on(d3_behavior_zoomWheel + ".zoom", mousewheeled).on("dblclick.zoom", dblclicked).on(touchstart, touchstarted);
    }
    zoom.event = function(g) {
      g.each(function() {
        var dispatch = event.of(this, arguments), view1 = view;
        if (d3_transitionInheritId) {
          d3.select(this).transition().each("start.zoom", function() {
            view = this.__chart__ || {
              x: 0,
              y: 0,
              k: 1
            };
            zoomstarted(dispatch);
          }).tween("zoom:zoom", function() {
            var dx = size[0], dy = size[1], cx = center0 ? center0[0] : dx / 2, cy = center0 ? center0[1] : dy / 2, i = d3.interpolateZoom([ (cx - view.x) / view.k, (cy - view.y) / view.k, dx / view.k ], [ (cx - view1.x) / view1.k, (cy - view1.y) / view1.k, dx / view1.k ]);
            return function(t) {
              var l = i(t), k = dx / l[2];
              this.__chart__ = view = {
                x: cx - l[0] * k,
                y: cy - l[1] * k,
                k: k
              };
              zoomed(dispatch);
            };
          }).each("interrupt.zoom", function() {
            zoomended(dispatch);
          }).each("end.zoom", function() {
            zoomended(dispatch);
          });
        } else {
          this.__chart__ = view;
          zoomstarted(dispatch);
          zoomed(dispatch);
          zoomended(dispatch);
        }
      });
    };
    zoom.translate = function(_) {
      if (!arguments.length) return [ view.x, view.y ];
      view = {
        x: +_[0],
        y: +_[1],
        k: view.k
      };
      rescale();
      return zoom;
    };
    zoom.scale = function(_) {
      if (!arguments.length) return view.k;
      view = {
        x: view.x,
        y: view.y,
        k: null
      };
      scaleTo(+_);
      rescale();
      return zoom;
    };
    zoom.scaleExtent = function(_) {
      if (!arguments.length) return scaleExtent;
      scaleExtent = _ == null ? d3_behavior_zoomInfinity : [ +_[0], +_[1] ];
      return zoom;
    };
    zoom.center = function(_) {
      if (!arguments.length) return center;
      center = _ && [ +_[0], +_[1] ];
      return zoom;
    };
    zoom.size = function(_) {
      if (!arguments.length) return size;
      size = _ && [ +_[0], +_[1] ];
      return zoom;
    };
    zoom.duration = function(_) {
      if (!arguments.length) return duration;
      duration = +_;
      return zoom;
    };
    zoom.x = function(z) {
      if (!arguments.length) return x1;
      x1 = z;
      x0 = z.copy();
      view = {
        x: 0,
        y: 0,
        k: 1
      };
      return zoom;
    };
    zoom.y = function(z) {
      if (!arguments.length) return y1;
      y1 = z;
      y0 = z.copy();
      view = {
        x: 0,
        y: 0,
        k: 1
      };
      return zoom;
    };
    function location(p) {
      return [ (p[0] - view.x) / view.k, (p[1] - view.y) / view.k ];
    }
    function point(l) {
      return [ l[0] * view.k + view.x, l[1] * view.k + view.y ];
    }
    function scaleTo(s) {
      view.k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], s));
    }
    function translateTo(p, l) {
      l = point(l);
      view.x += p[0] - l[0];
      view.y += p[1] - l[1];
    }
    function zoomTo(that, p, l, k) {
      that.__chart__ = {
        x: view.x,
        y: view.y,
        k: view.k
      };
      scaleTo(Math.pow(2, k));
      translateTo(center0 = p, l);
      that = d3.select(that);
      if (duration > 0) that = that.transition().duration(duration);
      that.call(zoom.event);
    }
    function rescale() {
      if (x1) x1.domain(x0.range().map(function(x) {
        return (x - view.x) / view.k;
      }).map(x0.invert));
      if (y1) y1.domain(y0.range().map(function(y) {
        return (y - view.y) / view.k;
      }).map(y0.invert));
    }
    function zoomstarted(dispatch) {
      if (!zooming++) dispatch({
        type: "zoomstart"
      });
    }
    function zoomed(dispatch) {
      rescale();
      dispatch({
        type: "zoom",
        scale: view.k,
        translate: [ view.x, view.y ]
      });
    }
    function zoomended(dispatch) {
      if (!--zooming) dispatch({
        type: "zoomend"
      }), center0 = null;
    }
    function mousedowned() {
      var that = this, dispatch = event.of(that, arguments), dragged = 0, subject = d3.select(d3_window(that)).on(mousemove, moved).on(mouseup, ended), location0 = location(d3.mouse(that)), dragRestore = d3_event_dragSuppress(that);
      d3_selection_interrupt.call(that);
      zoomstarted(dispatch);
      function moved() {
        dragged = 1;
        translateTo(d3.mouse(that), location0);
        zoomed(dispatch);
      }
      function ended() {
        subject.on(mousemove, null).on(mouseup, null);
        dragRestore(dragged);
        zoomended(dispatch);
      }
    }
    function touchstarted() {
      var that = this, dispatch = event.of(that, arguments), locations0 = {}, distance0 = 0, scale0, zoomName = ".zoom-" + d3.event.changedTouches[0].identifier, touchmove = "touchmove" + zoomName, touchend = "touchend" + zoomName, targets = [], subject = d3.select(that), dragRestore = d3_event_dragSuppress(that);
      started();
      zoomstarted(dispatch);
      subject.on(mousedown, null).on(touchstart, started);
      function relocate() {
        var touches = d3.touches(that);
        scale0 = view.k;
        touches.forEach(function(t) {
          if (t.identifier in locations0) locations0[t.identifier] = location(t);
        });
        return touches;
      }
      function started() {
        var target = d3.event.target;
        d3.select(target).on(touchmove, moved).on(touchend, ended);
        targets.push(target);
        var changed = d3.event.changedTouches;
        for (var i = 0, n = changed.length; i < n; ++i) {
          locations0[changed[i].identifier] = null;
        }
        var touches = relocate(), now = Date.now();
        if (touches.length === 1) {
          if (now - touchtime < 500) {
            var p = touches[0];
            zoomTo(that, p, locations0[p.identifier], Math.floor(Math.log(view.k) / Math.LN2) + 1);
            d3_eventPreventDefault();
          }
          touchtime = now;
        } else if (touches.length > 1) {
          var p = touches[0], q = touches[1], dx = p[0] - q[0], dy = p[1] - q[1];
          distance0 = dx * dx + dy * dy;
        }
      }
      function moved() {
        var touches = d3.touches(that), p0, l0, p1, l1;
        d3_selection_interrupt.call(that);
        for (var i = 0, n = touches.length; i < n; ++i, l1 = null) {
          p1 = touches[i];
          if (l1 = locations0[p1.identifier]) {
            if (l0) break;
            p0 = p1, l0 = l1;
          }
        }
        if (l1) {
          var distance1 = (distance1 = p1[0] - p0[0]) * distance1 + (distance1 = p1[1] - p0[1]) * distance1, scale1 = distance0 && Math.sqrt(distance1 / distance0);
          p0 = [ (p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2 ];
          l0 = [ (l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2 ];
          scaleTo(scale1 * scale0);
        }
        touchtime = null;
        translateTo(p0, l0);
        zoomed(dispatch);
      }
      function ended() {
        if (d3.event.touches.length) {
          var changed = d3.event.changedTouches;
          for (var i = 0, n = changed.length; i < n; ++i) {
            delete locations0[changed[i].identifier];
          }
          for (var identifier in locations0) {
            return void relocate();
          }
        }
        d3.selectAll(targets).on(zoomName, null);
        subject.on(mousedown, mousedowned).on(touchstart, touchstarted);
        dragRestore();
        zoomended(dispatch);
      }
    }
    function mousewheeled() {
      var dispatch = event.of(this, arguments);
      if (mousewheelTimer) clearTimeout(mousewheelTimer); else d3_selection_interrupt.call(this), 
      translate0 = location(center0 = center || d3.mouse(this)), zoomstarted(dispatch);
      mousewheelTimer = setTimeout(function() {
        mousewheelTimer = null;
        zoomended(dispatch);
      }, 50);
      d3_eventPreventDefault();
      scaleTo(Math.pow(2, d3_behavior_zoomDelta() * .002) * view.k);
      translateTo(center0, translate0);
      zoomed(dispatch);
    }
    function dblclicked() {
      var p = d3.mouse(this), k = Math.log(view.k) / Math.LN2;
      zoomTo(this, p, location(p), d3.event.shiftKey ? Math.ceil(k) - 1 : Math.floor(k) + 1);
    }
    return d3.rebind(zoom, event, "on");
  };
  var d3_behavior_zoomInfinity = [ 0, Infinity ], d3_behavior_zoomDelta, d3_behavior_zoomWheel;
  d3.color = d3_color;
  function d3_color() {}
  d3_color.prototype.toString = function() {
    return this.rgb() + "";
  };
  d3.hsl = d3_hsl;
  function d3_hsl(h, s, l) {
    return this instanceof d3_hsl ? void (this.h = +h, this.s = +s, this.l = +l) : arguments.length < 2 ? h instanceof d3_hsl ? new d3_hsl(h.h, h.s, h.l) : d3_rgb_parse("" + h, d3_rgb_hsl, d3_hsl) : new d3_hsl(h, s, l);
  }
  var d3_hslPrototype = d3_hsl.prototype = new d3_color();
  d3_hslPrototype.brighter = function(k) {
    k = Math.pow(.7, arguments.length ? k : 1);
    return new d3_hsl(this.h, this.s, this.l / k);
  };
  d3_hslPrototype.darker = function(k) {
    k = Math.pow(.7, arguments.length ? k : 1);
    return new d3_hsl(this.h, this.s, k * this.l);
  };
  d3_hslPrototype.rgb = function() {
    return d3_hsl_rgb(this.h, this.s, this.l);
  };
  function d3_hsl_rgb(h, s, l) {
    var m1, m2;
    h = isNaN(h) ? 0 : (h %= 360) < 0 ? h + 360 : h;
    s = isNaN(s) ? 0 : s < 0 ? 0 : s > 1 ? 1 : s;
    l = l < 0 ? 0 : l > 1 ? 1 : l;
    m2 = l <= .5 ? l * (1 + s) : l + s - l * s;
    m1 = 2 * l - m2;
    function v(h) {
      if (h > 360) h -= 360; else if (h < 0) h += 360;
      if (h < 60) return m1 + (m2 - m1) * h / 60;
      if (h < 180) return m2;
      if (h < 240) return m1 + (m2 - m1) * (240 - h) / 60;
      return m1;
    }
    function vv(h) {
      return Math.round(v(h) * 255);
    }
    return new d3_rgb(vv(h + 120), vv(h), vv(h - 120));
  }
  d3.hcl = d3_hcl;
  function d3_hcl(h, c, l) {
    return this instanceof d3_hcl ? void (this.h = +h, this.c = +c, this.l = +l) : arguments.length < 2 ? h instanceof d3_hcl ? new d3_hcl(h.h, h.c, h.l) : h instanceof d3_lab ? d3_lab_hcl(h.l, h.a, h.b) : d3_lab_hcl((h = d3_rgb_lab((h = d3.rgb(h)).r, h.g, h.b)).l, h.a, h.b) : new d3_hcl(h, c, l);
  }
  var d3_hclPrototype = d3_hcl.prototype = new d3_color();
  d3_hclPrototype.brighter = function(k) {
    return new d3_hcl(this.h, this.c, Math.min(100, this.l + d3_lab_K * (arguments.length ? k : 1)));
  };
  d3_hclPrototype.darker = function(k) {
    return new d3_hcl(this.h, this.c, Math.max(0, this.l - d3_lab_K * (arguments.length ? k : 1)));
  };
  d3_hclPrototype.rgb = function() {
    return d3_hcl_lab(this.h, this.c, this.l).rgb();
  };
  function d3_hcl_lab(h, c, l) {
    if (isNaN(h)) h = 0;
    if (isNaN(c)) c = 0;
    return new d3_lab(l, Math.cos(h *= d3_radians) * c, Math.sin(h) * c);
  }
  d3.lab = d3_lab;
  function d3_lab(l, a, b) {
    return this instanceof d3_lab ? void (this.l = +l, this.a = +a, this.b = +b) : arguments.length < 2 ? l instanceof d3_lab ? new d3_lab(l.l, l.a, l.b) : l instanceof d3_hcl ? d3_hcl_lab(l.h, l.c, l.l) : d3_rgb_lab((l = d3_rgb(l)).r, l.g, l.b) : new d3_lab(l, a, b);
  }
  var d3_lab_K = 18;
  var d3_lab_X = .95047, d3_lab_Y = 1, d3_lab_Z = 1.08883;
  var d3_labPrototype = d3_lab.prototype = new d3_color();
  d3_labPrototype.brighter = function(k) {
    return new d3_lab(Math.min(100, this.l + d3_lab_K * (arguments.length ? k : 1)), this.a, this.b);
  };
  d3_labPrototype.darker = function(k) {
    return new d3_lab(Math.max(0, this.l - d3_lab_K * (arguments.length ? k : 1)), this.a, this.b);
  };
  d3_labPrototype.rgb = function() {
    return d3_lab_rgb(this.l, this.a, this.b);
  };
  function d3_lab_rgb(l, a, b) {
    var y = (l + 16) / 116, x = y + a / 500, z = y - b / 200;
    x = d3_lab_xyz(x) * d3_lab_X;
    y = d3_lab_xyz(y) * d3_lab_Y;
    z = d3_lab_xyz(z) * d3_lab_Z;
    return new d3_rgb(d3_xyz_rgb(3.2404542 * x - 1.5371385 * y - .4985314 * z), d3_xyz_rgb(-.969266 * x + 1.8760108 * y + .041556 * z), d3_xyz_rgb(.0556434 * x - .2040259 * y + 1.0572252 * z));
  }
  function d3_lab_hcl(l, a, b) {
    return l > 0 ? new d3_hcl(Math.atan2(b, a) * d3_degrees, Math.sqrt(a * a + b * b), l) : new d3_hcl(NaN, NaN, l);
  }
  function d3_lab_xyz(x) {
    return x > .206893034 ? x * x * x : (x - 4 / 29) / 7.787037;
  }
  function d3_xyz_lab(x) {
    return x > .008856 ? Math.pow(x, 1 / 3) : 7.787037 * x + 4 / 29;
  }
  function d3_xyz_rgb(r) {
    return Math.round(255 * (r <= .00304 ? 12.92 * r : 1.055 * Math.pow(r, 1 / 2.4) - .055));
  }
  d3.rgb = d3_rgb;
  function d3_rgb(r, g, b) {
    return this instanceof d3_rgb ? void (this.r = ~~r, this.g = ~~g, this.b = ~~b) : arguments.length < 2 ? r instanceof d3_rgb ? new d3_rgb(r.r, r.g, r.b) : d3_rgb_parse("" + r, d3_rgb, d3_hsl_rgb) : new d3_rgb(r, g, b);
  }
  function d3_rgbNumber(value) {
    return new d3_rgb(value >> 16, value >> 8 & 255, value & 255);
  }
  function d3_rgbString(value) {
    return d3_rgbNumber(value) + "";
  }
  var d3_rgbPrototype = d3_rgb.prototype = new d3_color();
  d3_rgbPrototype.brighter = function(k) {
    k = Math.pow(.7, arguments.length ? k : 1);
    var r = this.r, g = this.g, b = this.b, i = 30;
    if (!r && !g && !b) return new d3_rgb(i, i, i);
    if (r && r < i) r = i;
    if (g && g < i) g = i;
    if (b && b < i) b = i;
    return new d3_rgb(Math.min(255, r / k), Math.min(255, g / k), Math.min(255, b / k));
  };
  d3_rgbPrototype.darker = function(k) {
    k = Math.pow(.7, arguments.length ? k : 1);
    return new d3_rgb(k * this.r, k * this.g, k * this.b);
  };
  d3_rgbPrototype.hsl = function() {
    return d3_rgb_hsl(this.r, this.g, this.b);
  };
  d3_rgbPrototype.toString = function() {
    return "#" + d3_rgb_hex(this.r) + d3_rgb_hex(this.g) + d3_rgb_hex(this.b);
  };
  function d3_rgb_hex(v) {
    return v < 16 ? "0" + Math.max(0, v).toString(16) : Math.min(255, v).toString(16);
  }
  function d3_rgb_parse(format, rgb, hsl) {
    var r = 0, g = 0, b = 0, m1, m2, color;
    m1 = /([a-z]+)\((.*)\)/.exec(format = format.toLowerCase());
    if (m1) {
      m2 = m1[2].split(",");
      switch (m1[1]) {
       case "hsl":
        {
          return hsl(parseFloat(m2[0]), parseFloat(m2[1]) / 100, parseFloat(m2[2]) / 100);
        }

       case "rgb":
        {
          return rgb(d3_rgb_parseNumber(m2[0]), d3_rgb_parseNumber(m2[1]), d3_rgb_parseNumber(m2[2]));
        }
      }
    }
    if (color = d3_rgb_names.get(format)) {
      return rgb(color.r, color.g, color.b);
    }
    if (format != null && format.charAt(0) === "#" && !isNaN(color = parseInt(format.slice(1), 16))) {
      if (format.length === 4) {
        r = (color & 3840) >> 4;
        r = r >> 4 | r;
        g = color & 240;
        g = g >> 4 | g;
        b = color & 15;
        b = b << 4 | b;
      } else if (format.length === 7) {
        r = (color & 16711680) >> 16;
        g = (color & 65280) >> 8;
        b = color & 255;
      }
    }
    return rgb(r, g, b);
  }
  function d3_rgb_hsl(r, g, b) {
    var min = Math.min(r /= 255, g /= 255, b /= 255), max = Math.max(r, g, b), d = max - min, h, s, l = (max + min) / 2;
    if (d) {
      s = l < .5 ? d / (max + min) : d / (2 - max - min);
      if (r == max) h = (g - b) / d + (g < b ? 6 : 0); else if (g == max) h = (b - r) / d + 2; else h = (r - g) / d + 4;
      h *= 60;
    } else {
      h = NaN;
      s = l > 0 && l < 1 ? 0 : h;
    }
    return new d3_hsl(h, s, l);
  }
  function d3_rgb_lab(r, g, b) {
    r = d3_rgb_xyz(r);
    g = d3_rgb_xyz(g);
    b = d3_rgb_xyz(b);
    var x = d3_xyz_lab((.4124564 * r + .3575761 * g + .1804375 * b) / d3_lab_X), y = d3_xyz_lab((.2126729 * r + .7151522 * g + .072175 * b) / d3_lab_Y), z = d3_xyz_lab((.0193339 * r + .119192 * g + .9503041 * b) / d3_lab_Z);
    return d3_lab(116 * y - 16, 500 * (x - y), 200 * (y - z));
  }
  function d3_rgb_xyz(r) {
    return (r /= 255) <= .04045 ? r / 12.92 : Math.pow((r + .055) / 1.055, 2.4);
  }
  function d3_rgb_parseNumber(c) {
    var f = parseFloat(c);
    return c.charAt(c.length - 1) === "%" ? Math.round(f * 2.55) : f;
  }
  var d3_rgb_names = d3.map({
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
  });
  d3_rgb_names.forEach(function(key, value) {
    d3_rgb_names.set(key, d3_rgbNumber(value));
  });
  function d3_functor(v) {
    return typeof v === "function" ? v : function() {
      return v;
    };
  }
  d3.functor = d3_functor;
  d3.xhr = d3_xhrType(d3_identity);
  function d3_xhrType(response) {
    return function(url, mimeType, callback) {
      if (arguments.length === 2 && typeof mimeType === "function") callback = mimeType, 
      mimeType = null;
      return d3_xhr(url, mimeType, response, callback);
    };
  }
  function d3_xhr(url, mimeType, response, callback) {
    var xhr = {}, dispatch = d3.dispatch("beforesend", "progress", "load", "error"), headers = {}, request = new XMLHttpRequest(), responseType = null;
    if (this.XDomainRequest && !("withCredentials" in request) && /^(http(s)?:)?\/\//.test(url)) request = new XDomainRequest();
    "onload" in request ? request.onload = request.onerror = respond : request.onreadystatechange = function() {
      request.readyState > 3 && respond();
    };
    function respond() {
      var status = request.status, result;
      if (!status && d3_xhrHasResponse(request) || status >= 200 && status < 300 || status === 304) {
        try {
          result = response.call(xhr, request);
        } catch (e) {
          dispatch.error.call(xhr, e);
          return;
        }
        dispatch.load.call(xhr, result);
      } else {
        dispatch.error.call(xhr, request);
      }
    }
    request.onprogress = function(event) {
      var o = d3.event;
      d3.event = event;
      try {
        dispatch.progress.call(xhr, request);
      } finally {
        d3.event = o;
      }
    };
    xhr.header = function(name, value) {
      name = (name + "").toLowerCase();
      if (arguments.length < 2) return headers[name];
      if (value == null) delete headers[name]; else headers[name] = value + "";
      return xhr;
    };
    xhr.mimeType = function(value) {
      if (!arguments.length) return mimeType;
      mimeType = value == null ? null : value + "";
      return xhr;
    };
    xhr.responseType = function(value) {
      if (!arguments.length) return responseType;
      responseType = value;
      return xhr;
    };
    xhr.response = function(value) {
      response = value;
      return xhr;
    };
    [ "get", "post" ].forEach(function(method) {
      xhr[method] = function() {
        return xhr.send.apply(xhr, [ method ].concat(d3_array(arguments)));
      };
    });
    xhr.send = function(method, data, callback) {
      if (arguments.length === 2 && typeof data === "function") callback = data, data = null;
      request.open(method, url, true);
      if (mimeType != null && !("accept" in headers)) headers["accept"] = mimeType + ",*/*";
      if (request.setRequestHeader) for (var name in headers) request.setRequestHeader(name, headers[name]);
      if (mimeType != null && request.overrideMimeType) request.overrideMimeType(mimeType);
      if (responseType != null) request.responseType = responseType;
      if (callback != null) xhr.on("error", callback).on("load", function(request) {
        callback(null, request);
      });
      dispatch.beforesend.call(xhr, request);
      request.send(data == null ? null : data);
      return xhr;
    };
    xhr.abort = function() {
      request.abort();
      return xhr;
    };
    d3.rebind(xhr, dispatch, "on");
    return callback == null ? xhr : xhr.get(d3_xhr_fixCallback(callback));
  }
  function d3_xhr_fixCallback(callback) {
    return callback.length === 1 ? function(error, request) {
      callback(error == null ? request : null);
    } : callback;
  }
  function d3_xhrHasResponse(request) {
    var type = request.responseType;
    return type && type !== "text" ? request.response : request.responseText;
  }
  d3.dsv = function(delimiter, mimeType) {
    var reFormat = new RegExp('["' + delimiter + "\n]"), delimiterCode = delimiter.charCodeAt(0);
    function dsv(url, row, callback) {
      if (arguments.length < 3) callback = row, row = null;
      var xhr = d3_xhr(url, mimeType, row == null ? response : typedResponse(row), callback);
      xhr.row = function(_) {
        return arguments.length ? xhr.response((row = _) == null ? response : typedResponse(_)) : row;
      };
      return xhr;
    }
    function response(request) {
      return dsv.parse(request.responseText);
    }
    function typedResponse(f) {
      return function(request) {
        return dsv.parse(request.responseText, f);
      };
    }
    dsv.parse = function(text, f) {
      var o;
      return dsv.parseRows(text, function(row, i) {
        if (o) return o(row, i - 1);
        var a = new Function("d", "return {" + row.map(function(name, i) {
          return JSON.stringify(name) + ": d[" + i + "]";
        }).join(",") + "}");
        o = f ? function(row, i) {
          return f(a(row), i);
        } : a;
      });
    };
    dsv.parseRows = function(text, f) {
      var EOL = {}, EOF = {}, rows = [], N = text.length, I = 0, n = 0, t, eol;
      function token() {
        if (I >= N) return EOF;
        if (eol) return eol = false, EOL;
        var j = I;
        if (text.charCodeAt(j) === 34) {
          var i = j;
          while (i++ < N) {
            if (text.charCodeAt(i) === 34) {
              if (text.charCodeAt(i + 1) !== 34) break;
              ++i;
            }
          }
          I = i + 2;
          var c = text.charCodeAt(i + 1);
          if (c === 13) {
            eol = true;
            if (text.charCodeAt(i + 2) === 10) ++I;
          } else if (c === 10) {
            eol = true;
          }
          return text.slice(j + 1, i).replace(/""/g, '"');
        }
        while (I < N) {
          var c = text.charCodeAt(I++), k = 1;
          if (c === 10) eol = true; else if (c === 13) {
            eol = true;
            if (text.charCodeAt(I) === 10) ++I, ++k;
          } else if (c !== delimiterCode) continue;
          return text.slice(j, I - k);
        }
        return text.slice(j);
      }
      while ((t = token()) !== EOF) {
        var a = [];
        while (t !== EOL && t !== EOF) {
          a.push(t);
          t = token();
        }
        if (f && (a = f(a, n++)) == null) continue;
        rows.push(a);
      }
      return rows;
    };
    dsv.format = function(rows) {
      if (Array.isArray(rows[0])) return dsv.formatRows(rows);
      var fieldSet = new d3_Set(), fields = [];
      rows.forEach(function(row) {
        for (var field in row) {
          if (!fieldSet.has(field)) {
            fields.push(fieldSet.add(field));
          }
        }
      });
      return [ fields.map(formatValue).join(delimiter) ].concat(rows.map(function(row) {
        return fields.map(function(field) {
          return formatValue(row[field]);
        }).join(delimiter);
      })).join("\n");
    };
    dsv.formatRows = function(rows) {
      return rows.map(formatRow).join("\n");
    };
    function formatRow(row) {
      return row.map(formatValue).join(delimiter);
    }
    function formatValue(text) {
      return reFormat.test(text) ? '"' + text.replace(/\"/g, '""') + '"' : text;
    }
    return dsv;
  };
  d3.csv = d3.dsv(",", "text/csv");
  d3.tsv = d3.dsv("	", "text/tab-separated-values");
  var d3_timer_queueHead, d3_timer_queueTail, d3_timer_interval, d3_timer_timeout, d3_timer_frame = this[d3_vendorSymbol(this, "requestAnimationFrame")] || function(callback) {
    setTimeout(callback, 17);
  };
  d3.timer = function() {
    d3_timer.apply(this, arguments);
  };
  function d3_timer(callback, delay, then) {
    var n = arguments.length;
    if (n < 2) delay = 0;
    if (n < 3) then = Date.now();
    var time = then + delay, timer = {
      c: callback,
      t: time,
      n: null
    };
    if (d3_timer_queueTail) d3_timer_queueTail.n = timer; else d3_timer_queueHead = timer;
    d3_timer_queueTail = timer;
    if (!d3_timer_interval) {
      d3_timer_timeout = clearTimeout(d3_timer_timeout);
      d3_timer_interval = 1;
      d3_timer_frame(d3_timer_step);
    }
    return timer;
  }
  function d3_timer_step() {
    var now = d3_timer_mark(), delay = d3_timer_sweep() - now;
    if (delay > 24) {
      if (isFinite(delay)) {
        clearTimeout(d3_timer_timeout);
        d3_timer_timeout = setTimeout(d3_timer_step, delay);
      }
      d3_timer_interval = 0;
    } else {
      d3_timer_interval = 1;
      d3_timer_frame(d3_timer_step);
    }
  }
  d3.timer.flush = function() {
    d3_timer_mark();
    d3_timer_sweep();
  };
  function d3_timer_mark() {
    var now = Date.now(), timer = d3_timer_queueHead;
    while (timer) {
      if (now >= timer.t && timer.c(now - timer.t)) timer.c = null;
      timer = timer.n;
    }
    return now;
  }
  function d3_timer_sweep() {
    var t0, t1 = d3_timer_queueHead, time = Infinity;
    while (t1) {
      if (t1.c) {
        if (t1.t < time) time = t1.t;
        t1 = (t0 = t1).n;
      } else {
        t1 = t0 ? t0.n = t1.n : d3_timer_queueHead = t1.n;
      }
    }
    d3_timer_queueTail = t0;
    return time;
  }
  function d3_format_precision(x, p) {
    return p - (x ? Math.ceil(Math.log(x) / Math.LN10) : 1);
  }
  d3.round = function(x, n) {
    return n ? Math.round(x * (n = Math.pow(10, n))) / n : Math.round(x);
  };
  var d3_formatPrefixes = [ "y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y" ].map(d3_formatPrefix);
  d3.formatPrefix = function(value, precision) {
    var i = 0;
    if (value = +value) {
      if (value < 0) value *= -1;
      if (precision) value = d3.round(value, d3_format_precision(value, precision));
      i = 1 + Math.floor(1e-12 + Math.log(value) / Math.LN10);
      i = Math.max(-24, Math.min(24, Math.floor((i - 1) / 3) * 3));
    }
    return d3_formatPrefixes[8 + i / 3];
  };
  function d3_formatPrefix(d, i) {
    var k = Math.pow(10, abs(8 - i) * 3);
    return {
      scale: i > 8 ? function(d) {
        return d / k;
      } : function(d) {
        return d * k;
      },
      symbol: d
    };
  }
  function d3_locale_numberFormat(locale) {
    var locale_decimal = locale.decimal, locale_thousands = locale.thousands, locale_grouping = locale.grouping, locale_currency = locale.currency, formatGroup = locale_grouping && locale_thousands ? function(value, width) {
      var i = value.length, t = [], j = 0, g = locale_grouping[0], length = 0;
      while (i > 0 && g > 0) {
        if (length + g + 1 > width) g = Math.max(1, width - length);
        t.push(value.substring(i -= g, i + g));
        if ((length += g + 1) > width) break;
        g = locale_grouping[j = (j + 1) % locale_grouping.length];
      }
      return t.reverse().join(locale_thousands);
    } : d3_identity;
    return function(specifier) {
      var match = d3_format_re.exec(specifier), fill = match[1] || " ", align = match[2] || ">", sign = match[3] || "-", symbol = match[4] || "", zfill = match[5], width = +match[6], comma = match[7], precision = match[8], type = match[9], scale = 1, prefix = "", suffix = "", integer = false, exponent = true;
      if (precision) precision = +precision.substring(1);
      if (zfill || fill === "0" && align === "=") {
        zfill = fill = "0";
        align = "=";
      }
      switch (type) {
       case "n":
        comma = true;
        type = "g";
        break;

       case "%":
        scale = 100;
        suffix = "%";
        type = "f";
        break;

       case "p":
        scale = 100;
        suffix = "%";
        type = "r";
        break;

       case "b":
       case "o":
       case "x":
       case "X":
        if (symbol === "#") prefix = "0" + type.toLowerCase();

       case "c":
        exponent = false;

       case "d":
        integer = true;
        precision = 0;
        break;

       case "s":
        scale = -1;
        type = "r";
        break;
      }
      if (symbol === "$") prefix = locale_currency[0], suffix = locale_currency[1];
      if (type == "r" && !precision) type = "g";
      if (precision != null) {
        if (type == "g") precision = Math.max(1, Math.min(21, precision)); else if (type == "e" || type == "f") precision = Math.max(0, Math.min(20, precision));
      }
      type = d3_format_types.get(type) || d3_format_typeDefault;
      var zcomma = zfill && comma;
      return function(value) {
        var fullSuffix = suffix;
        if (integer && value % 1) return "";
        var negative = value < 0 || value === 0 && 1 / value < 0 ? (value = -value, "-") : sign === "-" ? "" : sign;
        if (scale < 0) {
          var unit = d3.formatPrefix(value, precision);
          value = unit.scale(value);
          fullSuffix = unit.symbol + suffix;
        } else {
          value *= scale;
        }
        value = type(value, precision);
        var i = value.lastIndexOf("."), before, after;
        if (i < 0) {
          var j = exponent ? value.lastIndexOf("e") : -1;
          if (j < 0) before = value, after = ""; else before = value.substring(0, j), after = value.substring(j);
        } else {
          before = value.substring(0, i);
          after = locale_decimal + value.substring(i + 1);
        }
        if (!zfill && comma) before = formatGroup(before, Infinity);
        var length = prefix.length + before.length + after.length + (zcomma ? 0 : negative.length), padding = length < width ? new Array(length = width - length + 1).join(fill) : "";
        if (zcomma) before = formatGroup(padding + before, padding.length ? width - after.length : Infinity);
        negative += prefix;
        value = before + after;
        return (align === "<" ? negative + value + padding : align === ">" ? padding + negative + value : align === "^" ? padding.substring(0, length >>= 1) + negative + value + padding.substring(length) : negative + (zcomma ? value : padding + value)) + fullSuffix;
      };
    };
  }
  var d3_format_re = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i;
  var d3_format_types = d3.map({
    b: function(x) {
      return x.toString(2);
    },
    c: function(x) {
      return String.fromCharCode(x);
    },
    o: function(x) {
      return x.toString(8);
    },
    x: function(x) {
      return x.toString(16);
    },
    X: function(x) {
      return x.toString(16).toUpperCase();
    },
    g: function(x, p) {
      return x.toPrecision(p);
    },
    e: function(x, p) {
      return x.toExponential(p);
    },
    f: function(x, p) {
      return x.toFixed(p);
    },
    r: function(x, p) {
      return (x = d3.round(x, d3_format_precision(x, p))).toFixed(Math.max(0, Math.min(20, d3_format_precision(x * (1 + 1e-15), p))));
    }
  });
  function d3_format_typeDefault(x) {
    return x + "";
  }
  var d3_time = d3.time = {}, d3_date = Date;
  function d3_date_utc() {
    this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0]);
  }
  d3_date_utc.prototype = {
    getDate: function() {
      return this._.getUTCDate();
    },
    getDay: function() {
      return this._.getUTCDay();
    },
    getFullYear: function() {
      return this._.getUTCFullYear();
    },
    getHours: function() {
      return this._.getUTCHours();
    },
    getMilliseconds: function() {
      return this._.getUTCMilliseconds();
    },
    getMinutes: function() {
      return this._.getUTCMinutes();
    },
    getMonth: function() {
      return this._.getUTCMonth();
    },
    getSeconds: function() {
      return this._.getUTCSeconds();
    },
    getTime: function() {
      return this._.getTime();
    },
    getTimezoneOffset: function() {
      return 0;
    },
    valueOf: function() {
      return this._.valueOf();
    },
    setDate: function() {
      d3_time_prototype.setUTCDate.apply(this._, arguments);
    },
    setDay: function() {
      d3_time_prototype.setUTCDay.apply(this._, arguments);
    },
    setFullYear: function() {
      d3_time_prototype.setUTCFullYear.apply(this._, arguments);
    },
    setHours: function() {
      d3_time_prototype.setUTCHours.apply(this._, arguments);
    },
    setMilliseconds: function() {
      d3_time_prototype.setUTCMilliseconds.apply(this._, arguments);
    },
    setMinutes: function() {
      d3_time_prototype.setUTCMinutes.apply(this._, arguments);
    },
    setMonth: function() {
      d3_time_prototype.setUTCMonth.apply(this._, arguments);
    },
    setSeconds: function() {
      d3_time_prototype.setUTCSeconds.apply(this._, arguments);
    },
    setTime: function() {
      d3_time_prototype.setTime.apply(this._, arguments);
    }
  };
  var d3_time_prototype = Date.prototype;
  function d3_time_interval(local, step, number) {
    function round(date) {
      var d0 = local(date), d1 = offset(d0, 1);
      return date - d0 < d1 - date ? d0 : d1;
    }
    function ceil(date) {
      step(date = local(new d3_date(date - 1)), 1);
      return date;
    }
    function offset(date, k) {
      step(date = new d3_date(+date), k);
      return date;
    }
    function range(t0, t1, dt) {
      var time = ceil(t0), times = [];
      if (dt > 1) {
        while (time < t1) {
          if (!(number(time) % dt)) times.push(new Date(+time));
          step(time, 1);
        }
      } else {
        while (time < t1) times.push(new Date(+time)), step(time, 1);
      }
      return times;
    }
    function range_utc(t0, t1, dt) {
      try {
        d3_date = d3_date_utc;
        var utc = new d3_date_utc();
        utc._ = t0;
        return range(utc, t1, dt);
      } finally {
        d3_date = Date;
      }
    }
    local.floor = local;
    local.round = round;
    local.ceil = ceil;
    local.offset = offset;
    local.range = range;
    var utc = local.utc = d3_time_interval_utc(local);
    utc.floor = utc;
    utc.round = d3_time_interval_utc(round);
    utc.ceil = d3_time_interval_utc(ceil);
    utc.offset = d3_time_interval_utc(offset);
    utc.range = range_utc;
    return local;
  }
  function d3_time_interval_utc(method) {
    return function(date, k) {
      try {
        d3_date = d3_date_utc;
        var utc = new d3_date_utc();
        utc._ = date;
        return method(utc, k)._;
      } finally {
        d3_date = Date;
      }
    };
  }
  d3_time.year = d3_time_interval(function(date) {
    date = d3_time.day(date);
    date.setMonth(0, 1);
    return date;
  }, function(date, offset) {
    date.setFullYear(date.getFullYear() + offset);
  }, function(date) {
    return date.getFullYear();
  });
  d3_time.years = d3_time.year.range;
  d3_time.years.utc = d3_time.year.utc.range;
  d3_time.day = d3_time_interval(function(date) {
    var day = new d3_date(2e3, 0);
    day.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
    return day;
  }, function(date, offset) {
    date.setDate(date.getDate() + offset);
  }, function(date) {
    return date.getDate() - 1;
  });
  d3_time.days = d3_time.day.range;
  d3_time.days.utc = d3_time.day.utc.range;
  d3_time.dayOfYear = function(date) {
    var year = d3_time.year(date);
    return Math.floor((date - year - (date.getTimezoneOffset() - year.getTimezoneOffset()) * 6e4) / 864e5);
  };
  [ "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday" ].forEach(function(day, i) {
    i = 7 - i;
    var interval = d3_time[day] = d3_time_interval(function(date) {
      (date = d3_time.day(date)).setDate(date.getDate() - (date.getDay() + i) % 7);
      return date;
    }, function(date, offset) {
      date.setDate(date.getDate() + Math.floor(offset) * 7);
    }, function(date) {
      var day = d3_time.year(date).getDay();
      return Math.floor((d3_time.dayOfYear(date) + (day + i) % 7) / 7) - (day !== i);
    });
    d3_time[day + "s"] = interval.range;
    d3_time[day + "s"].utc = interval.utc.range;
    d3_time[day + "OfYear"] = function(date) {
      var day = d3_time.year(date).getDay();
      return Math.floor((d3_time.dayOfYear(date) + (day + i) % 7) / 7);
    };
  });
  d3_time.week = d3_time.sunday;
  d3_time.weeks = d3_time.sunday.range;
  d3_time.weeks.utc = d3_time.sunday.utc.range;
  d3_time.weekOfYear = d3_time.sundayOfYear;
  function d3_locale_timeFormat(locale) {
    var locale_dateTime = locale.dateTime, locale_date = locale.date, locale_time = locale.time, locale_periods = locale.periods, locale_days = locale.days, locale_shortDays = locale.shortDays, locale_months = locale.months, locale_shortMonths = locale.shortMonths;
    function d3_time_format(template) {
      var n = template.length;
      function format(date) {
        var string = [], i = -1, j = 0, c, p, f;
        while (++i < n) {
          if (template.charCodeAt(i) === 37) {
            string.push(template.slice(j, i));
            if ((p = d3_time_formatPads[c = template.charAt(++i)]) != null) c = template.charAt(++i);
            if (f = d3_time_formats[c]) c = f(date, p == null ? c === "e" ? " " : "0" : p);
            string.push(c);
            j = i + 1;
          }
        }
        string.push(template.slice(j, i));
        return string.join("");
      }
      format.parse = function(string) {
        var d = {
          y: 1900,
          m: 0,
          d: 1,
          H: 0,
          M: 0,
          S: 0,
          L: 0,
          Z: null
        }, i = d3_time_parse(d, template, string, 0);
        if (i != string.length) return null;
        if ("p" in d) d.H = d.H % 12 + d.p * 12;
        var localZ = d.Z != null && d3_date !== d3_date_utc, date = new (localZ ? d3_date_utc : d3_date)();
        if ("j" in d) date.setFullYear(d.y, 0, d.j); else if ("W" in d || "U" in d) {
          if (!("w" in d)) d.w = "W" in d ? 1 : 0;
          date.setFullYear(d.y, 0, 1);
          date.setFullYear(d.y, 0, "W" in d ? (d.w + 6) % 7 + d.W * 7 - (date.getDay() + 5) % 7 : d.w + d.U * 7 - (date.getDay() + 6) % 7);
        } else date.setFullYear(d.y, d.m, d.d);
        date.setHours(d.H + (d.Z / 100 | 0), d.M + d.Z % 100, d.S, d.L);
        return localZ ? date._ : date;
      };
      format.toString = function() {
        return template;
      };
      return format;
    }
    function d3_time_parse(date, template, string, j) {
      var c, p, t, i = 0, n = template.length, m = string.length;
      while (i < n) {
        if (j >= m) return -1;
        c = template.charCodeAt(i++);
        if (c === 37) {
          t = template.charAt(i++);
          p = d3_time_parsers[t in d3_time_formatPads ? template.charAt(i++) : t];
          if (!p || (j = p(date, string, j)) < 0) return -1;
        } else if (c != string.charCodeAt(j++)) {
          return -1;
        }
      }
      return j;
    }
    d3_time_format.utc = function(template) {
      var local = d3_time_format(template);
      function format(date) {
        try {
          d3_date = d3_date_utc;
          var utc = new d3_date();
          utc._ = date;
          return local(utc);
        } finally {
          d3_date = Date;
        }
      }
      format.parse = function(string) {
        try {
          d3_date = d3_date_utc;
          var date = local.parse(string);
          return date && date._;
        } finally {
          d3_date = Date;
        }
      };
      format.toString = local.toString;
      return format;
    };
    d3_time_format.multi = d3_time_format.utc.multi = d3_time_formatMulti;
    var d3_time_periodLookup = d3.map(), d3_time_dayRe = d3_time_formatRe(locale_days), d3_time_dayLookup = d3_time_formatLookup(locale_days), d3_time_dayAbbrevRe = d3_time_formatRe(locale_shortDays), d3_time_dayAbbrevLookup = d3_time_formatLookup(locale_shortDays), d3_time_monthRe = d3_time_formatRe(locale_months), d3_time_monthLookup = d3_time_formatLookup(locale_months), d3_time_monthAbbrevRe = d3_time_formatRe(locale_shortMonths), d3_time_monthAbbrevLookup = d3_time_formatLookup(locale_shortMonths);
    locale_periods.forEach(function(p, i) {
      d3_time_periodLookup.set(p.toLowerCase(), i);
    });
    var d3_time_formats = {
      a: function(d) {
        return locale_shortDays[d.getDay()];
      },
      A: function(d) {
        return locale_days[d.getDay()];
      },
      b: function(d) {
        return locale_shortMonths[d.getMonth()];
      },
      B: function(d) {
        return locale_months[d.getMonth()];
      },
      c: d3_time_format(locale_dateTime),
      d: function(d, p) {
        return d3_time_formatPad(d.getDate(), p, 2);
      },
      e: function(d, p) {
        return d3_time_formatPad(d.getDate(), p, 2);
      },
      H: function(d, p) {
        return d3_time_formatPad(d.getHours(), p, 2);
      },
      I: function(d, p) {
        return d3_time_formatPad(d.getHours() % 12 || 12, p, 2);
      },
      j: function(d, p) {
        return d3_time_formatPad(1 + d3_time.dayOfYear(d), p, 3);
      },
      L: function(d, p) {
        return d3_time_formatPad(d.getMilliseconds(), p, 3);
      },
      m: function(d, p) {
        return d3_time_formatPad(d.getMonth() + 1, p, 2);
      },
      M: function(d, p) {
        return d3_time_formatPad(d.getMinutes(), p, 2);
      },
      p: function(d) {
        return locale_periods[+(d.getHours() >= 12)];
      },
      S: function(d, p) {
        return d3_time_formatPad(d.getSeconds(), p, 2);
      },
      U: function(d, p) {
        return d3_time_formatPad(d3_time.sundayOfYear(d), p, 2);
      },
      w: function(d) {
        return d.getDay();
      },
      W: function(d, p) {
        return d3_time_formatPad(d3_time.mondayOfYear(d), p, 2);
      },
      x: d3_time_format(locale_date),
      X: d3_time_format(locale_time),
      y: function(d, p) {
        return d3_time_formatPad(d.getFullYear() % 100, p, 2);
      },
      Y: function(d, p) {
        return d3_time_formatPad(d.getFullYear() % 1e4, p, 4);
      },
      Z: d3_time_zone,
      "%": function() {
        return "%";
      }
    };
    var d3_time_parsers = {
      a: d3_time_parseWeekdayAbbrev,
      A: d3_time_parseWeekday,
      b: d3_time_parseMonthAbbrev,
      B: d3_time_parseMonth,
      c: d3_time_parseLocaleFull,
      d: d3_time_parseDay,
      e: d3_time_parseDay,
      H: d3_time_parseHour24,
      I: d3_time_parseHour24,
      j: d3_time_parseDayOfYear,
      L: d3_time_parseMilliseconds,
      m: d3_time_parseMonthNumber,
      M: d3_time_parseMinutes,
      p: d3_time_parseAmPm,
      S: d3_time_parseSeconds,
      U: d3_time_parseWeekNumberSunday,
      w: d3_time_parseWeekdayNumber,
      W: d3_time_parseWeekNumberMonday,
      x: d3_time_parseLocaleDate,
      X: d3_time_parseLocaleTime,
      y: d3_time_parseYear,
      Y: d3_time_parseFullYear,
      Z: d3_time_parseZone,
      "%": d3_time_parseLiteralPercent
    };
    function d3_time_parseWeekdayAbbrev(date, string, i) {
      d3_time_dayAbbrevRe.lastIndex = 0;
      var n = d3_time_dayAbbrevRe.exec(string.slice(i));
      return n ? (date.w = d3_time_dayAbbrevLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function d3_time_parseWeekday(date, string, i) {
      d3_time_dayRe.lastIndex = 0;
      var n = d3_time_dayRe.exec(string.slice(i));
      return n ? (date.w = d3_time_dayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function d3_time_parseMonthAbbrev(date, string, i) {
      d3_time_monthAbbrevRe.lastIndex = 0;
      var n = d3_time_monthAbbrevRe.exec(string.slice(i));
      return n ? (date.m = d3_time_monthAbbrevLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function d3_time_parseMonth(date, string, i) {
      d3_time_monthRe.lastIndex = 0;
      var n = d3_time_monthRe.exec(string.slice(i));
      return n ? (date.m = d3_time_monthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function d3_time_parseLocaleFull(date, string, i) {
      return d3_time_parse(date, d3_time_formats.c.toString(), string, i);
    }
    function d3_time_parseLocaleDate(date, string, i) {
      return d3_time_parse(date, d3_time_formats.x.toString(), string, i);
    }
    function d3_time_parseLocaleTime(date, string, i) {
      return d3_time_parse(date, d3_time_formats.X.toString(), string, i);
    }
    function d3_time_parseAmPm(date, string, i) {
      var n = d3_time_periodLookup.get(string.slice(i, i += 2).toLowerCase());
      return n == null ? -1 : (date.p = n, i);
    }
    return d3_time_format;
  }
  var d3_time_formatPads = {
    "-": "",
    _: " ",
    "0": "0"
  }, d3_time_numberRe = /^\s*\d+/, d3_time_percentRe = /^%/;
  function d3_time_formatPad(value, fill, width) {
    var sign = value < 0 ? "-" : "", string = (sign ? -value : value) + "", length = string.length;
    return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
  }
  function d3_time_formatRe(names) {
    return new RegExp("^(?:" + names.map(d3.requote).join("|") + ")", "i");
  }
  function d3_time_formatLookup(names) {
    var map = new d3_Map(), i = -1, n = names.length;
    while (++i < n) map.set(names[i].toLowerCase(), i);
    return map;
  }
  function d3_time_parseWeekdayNumber(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 1));
    return n ? (date.w = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseWeekNumberSunday(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i));
    return n ? (date.U = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseWeekNumberMonday(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i));
    return n ? (date.W = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseFullYear(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 4));
    return n ? (date.y = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseYear(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
    return n ? (date.y = d3_time_expandYear(+n[0]), i + n[0].length) : -1;
  }
  function d3_time_parseZone(date, string, i) {
    return /^[+-]\d{4}$/.test(string = string.slice(i, i + 5)) ? (date.Z = -string, 
    i + 5) : -1;
  }
  function d3_time_expandYear(d) {
    return d + (d > 68 ? 1900 : 2e3);
  }
  function d3_time_parseMonthNumber(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
    return n ? (date.m = n[0] - 1, i + n[0].length) : -1;
  }
  function d3_time_parseDay(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
    return n ? (date.d = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseDayOfYear(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 3));
    return n ? (date.j = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseHour24(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
    return n ? (date.H = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseMinutes(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
    return n ? (date.M = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseSeconds(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
    return n ? (date.S = +n[0], i + n[0].length) : -1;
  }
  function d3_time_parseMilliseconds(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 3));
    return n ? (date.L = +n[0], i + n[0].length) : -1;
  }
  function d3_time_zone(d) {
    var z = d.getTimezoneOffset(), zs = z > 0 ? "-" : "+", zh = abs(z) / 60 | 0, zm = abs(z) % 60;
    return zs + d3_time_formatPad(zh, "0", 2) + d3_time_formatPad(zm, "0", 2);
  }
  function d3_time_parseLiteralPercent(date, string, i) {
    d3_time_percentRe.lastIndex = 0;
    var n = d3_time_percentRe.exec(string.slice(i, i + 1));
    return n ? i + n[0].length : -1;
  }
  function d3_time_formatMulti(formats) {
    var n = formats.length, i = -1;
    while (++i < n) formats[i][0] = this(formats[i][0]);
    return function(date) {
      var i = 0, f = formats[i];
      while (!f[1](date)) f = formats[++i];
      return f[0](date);
    };
  }
  d3.locale = function(locale) {
    return {
      numberFormat: d3_locale_numberFormat(locale),
      timeFormat: d3_locale_timeFormat(locale)
    };
  };
  var d3_locale_enUS = d3.locale({
    decimal: ".",
    thousands: ",",
    grouping: [ 3 ],
    currency: [ "$", "" ],
    dateTime: "%a %b %e %X %Y",
    date: "%m/%d/%Y",
    time: "%H:%M:%S",
    periods: [ "AM", "PM" ],
    days: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
    shortDays: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
    months: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
    shortMonths: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]
  });
  d3.format = d3_locale_enUS.numberFormat;
  d3.geo = {};
  function d3_adder() {}
  d3_adder.prototype = {
    s: 0,
    t: 0,
    add: function(y) {
      d3_adderSum(y, this.t, d3_adderTemp);
      d3_adderSum(d3_adderTemp.s, this.s, this);
      if (this.s) this.t += d3_adderTemp.t; else this.s = d3_adderTemp.t;
    },
    reset: function() {
      this.s = this.t = 0;
    },
    valueOf: function() {
      return this.s;
    }
  };
  var d3_adderTemp = new d3_adder();
  function d3_adderSum(a, b, o) {
    var x = o.s = a + b, bv = x - a, av = x - bv;
    o.t = a - av + (b - bv);
  }
  d3.geo.stream = function(object, listener) {
    if (object && d3_geo_streamObjectType.hasOwnProperty(object.type)) {
      d3_geo_streamObjectType[object.type](object, listener);
    } else {
      d3_geo_streamGeometry(object, listener);
    }
  };
  function d3_geo_streamGeometry(geometry, listener) {
    if (geometry && d3_geo_streamGeometryType.hasOwnProperty(geometry.type)) {
      d3_geo_streamGeometryType[geometry.type](geometry, listener);
    }
  }
  var d3_geo_streamObjectType = {
    Feature: function(feature, listener) {
      d3_geo_streamGeometry(feature.geometry, listener);
    },
    FeatureCollection: function(object, listener) {
      var features = object.features, i = -1, n = features.length;
      while (++i < n) d3_geo_streamGeometry(features[i].geometry, listener);
    }
  };
  var d3_geo_streamGeometryType = {
    Sphere: function(object, listener) {
      listener.sphere();
    },
    Point: function(object, listener) {
      object = object.coordinates;
      listener.point(object[0], object[1], object[2]);
    },
    MultiPoint: function(object, listener) {
      var coordinates = object.coordinates, i = -1, n = coordinates.length;
      while (++i < n) object = coordinates[i], listener.point(object[0], object[1], object[2]);
    },
    LineString: function(object, listener) {
      d3_geo_streamLine(object.coordinates, listener, 0);
    },
    MultiLineString: function(object, listener) {
      var coordinates = object.coordinates, i = -1, n = coordinates.length;
      while (++i < n) d3_geo_streamLine(coordinates[i], listener, 0);
    },
    Polygon: function(object, listener) {
      d3_geo_streamPolygon(object.coordinates, listener);
    },
    MultiPolygon: function(object, listener) {
      var coordinates = object.coordinates, i = -1, n = coordinates.length;
      while (++i < n) d3_geo_streamPolygon(coordinates[i], listener);
    },
    GeometryCollection: function(object, listener) {
      var geometries = object.geometries, i = -1, n = geometries.length;
      while (++i < n) d3_geo_streamGeometry(geometries[i], listener);
    }
  };
  function d3_geo_streamLine(coordinates, listener, closed) {
    var i = -1, n = coordinates.length - closed, coordinate;
    listener.lineStart();
    while (++i < n) coordinate = coordinates[i], listener.point(coordinate[0], coordinate[1], coordinate[2]);
    listener.lineEnd();
  }
  function d3_geo_streamPolygon(coordinates, listener) {
    var i = -1, n = coordinates.length;
    listener.polygonStart();
    while (++i < n) d3_geo_streamLine(coordinates[i], listener, 1);
    listener.polygonEnd();
  }
  d3.geo.area = function(object) {
    d3_geo_areaSum = 0;
    d3.geo.stream(object, d3_geo_area);
    return d3_geo_areaSum;
  };
  var d3_geo_areaSum, d3_geo_areaRingSum = new d3_adder();
  var d3_geo_area = {
    sphere: function() {
      d3_geo_areaSum += 4 * π;
    },
    point: d3_noop,
    lineStart: d3_noop,
    lineEnd: d3_noop,
    polygonStart: function() {
      d3_geo_areaRingSum.reset();
      d3_geo_area.lineStart = d3_geo_areaRingStart;
    },
    polygonEnd: function() {
      var area = 2 * d3_geo_areaRingSum;
      d3_geo_areaSum += area < 0 ? 4 * π + area : area;
      d3_geo_area.lineStart = d3_geo_area.lineEnd = d3_geo_area.point = d3_noop;
    }
  };
  function d3_geo_areaRingStart() {
    var λ00, φ00, λ0, cosφ0, sinφ0;
    d3_geo_area.point = function(λ, φ) {
      d3_geo_area.point = nextPoint;
      λ0 = (λ00 = λ) * d3_radians, cosφ0 = Math.cos(φ = (φ00 = φ) * d3_radians / 2 + π / 4), 
      sinφ0 = Math.sin(φ);
    };
    function nextPoint(λ, φ) {
      λ *= d3_radians;
      φ = φ * d3_radians / 2 + π / 4;
      var dλ = λ - λ0, sdλ = dλ >= 0 ? 1 : -1, adλ = sdλ * dλ, cosφ = Math.cos(φ), sinφ = Math.sin(φ), k = sinφ0 * sinφ, u = cosφ0 * cosφ + k * Math.cos(adλ), v = k * sdλ * Math.sin(adλ);
      d3_geo_areaRingSum.add(Math.atan2(v, u));
      λ0 = λ, cosφ0 = cosφ, sinφ0 = sinφ;
    }
    d3_geo_area.lineEnd = function() {
      nextPoint(λ00, φ00);
    };
  }
  function d3_geo_cartesian(spherical) {
    var λ = spherical[0], φ = spherical[1], cosφ = Math.cos(φ);
    return [ cosφ * Math.cos(λ), cosφ * Math.sin(λ), Math.sin(φ) ];
  }
  function d3_geo_cartesianDot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  }
  function d3_geo_cartesianCross(a, b) {
    return [ a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0] ];
  }
  function d3_geo_cartesianAdd(a, b) {
    a[0] += b[0];
    a[1] += b[1];
    a[2] += b[2];
  }
  function d3_geo_cartesianScale(vector, k) {
    return [ vector[0] * k, vector[1] * k, vector[2] * k ];
  }
  function d3_geo_cartesianNormalize(d) {
    var l = Math.sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
    d[0] /= l;
    d[1] /= l;
    d[2] /= l;
  }
  function d3_geo_spherical(cartesian) {
    return [ Math.atan2(cartesian[1], cartesian[0]), d3_asin(cartesian[2]) ];
  }
  function d3_geo_sphericalEqual(a, b) {
    return abs(a[0] - b[0]) < ε && abs(a[1] - b[1]) < ε;
  }
  d3.geo.bounds = function() {
    var λ0, φ0, λ1, φ1, λ_, λ__, φ__, p0, dλSum, ranges, range;
    var bound = {
      point: point,
      lineStart: lineStart,
      lineEnd: lineEnd,
      polygonStart: function() {
        bound.point = ringPoint;
        bound.lineStart = ringStart;
        bound.lineEnd = ringEnd;
        dλSum = 0;
        d3_geo_area.polygonStart();
      },
      polygonEnd: function() {
        d3_geo_area.polygonEnd();
        bound.point = point;
        bound.lineStart = lineStart;
        bound.lineEnd = lineEnd;
        if (d3_geo_areaRingSum < 0) λ0 = -(λ1 = 180), φ0 = -(φ1 = 90); else if (dλSum > ε) φ1 = 90; else if (dλSum < -ε) φ0 = -90;
        range[0] = λ0, range[1] = λ1;
      }
    };
    function point(λ, φ) {
      ranges.push(range = [ λ0 = λ, λ1 = λ ]);
      if (φ < φ0) φ0 = φ;
      if (φ > φ1) φ1 = φ;
    }
    function linePoint(λ, φ) {
      var p = d3_geo_cartesian([ λ * d3_radians, φ * d3_radians ]);
      if (p0) {
        var normal = d3_geo_cartesianCross(p0, p), equatorial = [ normal[1], -normal[0], 0 ], inflection = d3_geo_cartesianCross(equatorial, normal);
        d3_geo_cartesianNormalize(inflection);
        inflection = d3_geo_spherical(inflection);
        var dλ = λ - λ_, s = dλ > 0 ? 1 : -1, λi = inflection[0] * d3_degrees * s, antimeridian = abs(dλ) > 180;
        if (antimeridian ^ (s * λ_ < λi && λi < s * λ)) {
          var φi = inflection[1] * d3_degrees;
          if (φi > φ1) φ1 = φi;
        } else if (λi = (λi + 360) % 360 - 180, antimeridian ^ (s * λ_ < λi && λi < s * λ)) {
          var φi = -inflection[1] * d3_degrees;
          if (φi < φ0) φ0 = φi;
        } else {
          if (φ < φ0) φ0 = φ;
          if (φ > φ1) φ1 = φ;
        }
        if (antimeridian) {
          if (λ < λ_) {
            if (angle(λ0, λ) > angle(λ0, λ1)) λ1 = λ;
          } else {
            if (angle(λ, λ1) > angle(λ0, λ1)) λ0 = λ;
          }
        } else {
          if (λ1 >= λ0) {
            if (λ < λ0) λ0 = λ;
            if (λ > λ1) λ1 = λ;
          } else {
            if (λ > λ_) {
              if (angle(λ0, λ) > angle(λ0, λ1)) λ1 = λ;
            } else {
              if (angle(λ, λ1) > angle(λ0, λ1)) λ0 = λ;
            }
          }
        }
      } else {
        point(λ, φ);
      }
      p0 = p, λ_ = λ;
    }
    function lineStart() {
      bound.point = linePoint;
    }
    function lineEnd() {
      range[0] = λ0, range[1] = λ1;
      bound.point = point;
      p0 = null;
    }
    function ringPoint(λ, φ) {
      if (p0) {
        var dλ = λ - λ_;
        dλSum += abs(dλ) > 180 ? dλ + (dλ > 0 ? 360 : -360) : dλ;
      } else λ__ = λ, φ__ = φ;
      d3_geo_area.point(λ, φ);
      linePoint(λ, φ);
    }
    function ringStart() {
      d3_geo_area.lineStart();
    }
    function ringEnd() {
      ringPoint(λ__, φ__);
      d3_geo_area.lineEnd();
      if (abs(dλSum) > ε) λ0 = -(λ1 = 180);
      range[0] = λ0, range[1] = λ1;
      p0 = null;
    }
    function angle(λ0, λ1) {
      return (λ1 -= λ0) < 0 ? λ1 + 360 : λ1;
    }
    function compareRanges(a, b) {
      return a[0] - b[0];
    }
    function withinRange(x, range) {
      return range[0] <= range[1] ? range[0] <= x && x <= range[1] : x < range[0] || range[1] < x;
    }
    return function(feature) {
      φ1 = λ1 = -(λ0 = φ0 = Infinity);
      ranges = [];
      d3.geo.stream(feature, bound);
      var n = ranges.length;
      if (n) {
        ranges.sort(compareRanges);
        for (var i = 1, a = ranges[0], b, merged = [ a ]; i < n; ++i) {
          b = ranges[i];
          if (withinRange(b[0], a) || withinRange(b[1], a)) {
            if (angle(a[0], b[1]) > angle(a[0], a[1])) a[1] = b[1];
            if (angle(b[0], a[1]) > angle(a[0], a[1])) a[0] = b[0];
          } else {
            merged.push(a = b);
          }
        }
        var best = -Infinity, dλ;
        for (var n = merged.length - 1, i = 0, a = merged[n], b; i <= n; a = b, ++i) {
          b = merged[i];
          if ((dλ = angle(a[1], b[0])) > best) best = dλ, λ0 = b[0], λ1 = a[1];
        }
      }
      ranges = range = null;
      return λ0 === Infinity || φ0 === Infinity ? [ [ NaN, NaN ], [ NaN, NaN ] ] : [ [ λ0, φ0 ], [ λ1, φ1 ] ];
    };
  }();
  d3.geo.centroid = function(object) {
    d3_geo_centroidW0 = d3_geo_centroidW1 = d3_geo_centroidX0 = d3_geo_centroidY0 = d3_geo_centroidZ0 = d3_geo_centroidX1 = d3_geo_centroidY1 = d3_geo_centroidZ1 = d3_geo_centroidX2 = d3_geo_centroidY2 = d3_geo_centroidZ2 = 0;
    d3.geo.stream(object, d3_geo_centroid);
    var x = d3_geo_centroidX2, y = d3_geo_centroidY2, z = d3_geo_centroidZ2, m = x * x + y * y + z * z;
    if (m < ε2) {
      x = d3_geo_centroidX1, y = d3_geo_centroidY1, z = d3_geo_centroidZ1;
      if (d3_geo_centroidW1 < ε) x = d3_geo_centroidX0, y = d3_geo_centroidY0, z = d3_geo_centroidZ0;
      m = x * x + y * y + z * z;
      if (m < ε2) return [ NaN, NaN ];
    }
    return [ Math.atan2(y, x) * d3_degrees, d3_asin(z / Math.sqrt(m)) * d3_degrees ];
  };
  var d3_geo_centroidW0, d3_geo_centroidW1, d3_geo_centroidX0, d3_geo_centroidY0, d3_geo_centroidZ0, d3_geo_centroidX1, d3_geo_centroidY1, d3_geo_centroidZ1, d3_geo_centroidX2, d3_geo_centroidY2, d3_geo_centroidZ2;
  var d3_geo_centroid = {
    sphere: d3_noop,
    point: d3_geo_centroidPoint,
    lineStart: d3_geo_centroidLineStart,
    lineEnd: d3_geo_centroidLineEnd,
    polygonStart: function() {
      d3_geo_centroid.lineStart = d3_geo_centroidRingStart;
    },
    polygonEnd: function() {
      d3_geo_centroid.lineStart = d3_geo_centroidLineStart;
    }
  };
  function d3_geo_centroidPoint(λ, φ) {
    λ *= d3_radians;
    var cosφ = Math.cos(φ *= d3_radians);
    d3_geo_centroidPointXYZ(cosφ * Math.cos(λ), cosφ * Math.sin(λ), Math.sin(φ));
  }
  function d3_geo_centroidPointXYZ(x, y, z) {
    ++d3_geo_centroidW0;
    d3_geo_centroidX0 += (x - d3_geo_centroidX0) / d3_geo_centroidW0;
    d3_geo_centroidY0 += (y - d3_geo_centroidY0) / d3_geo_centroidW0;
    d3_geo_centroidZ0 += (z - d3_geo_centroidZ0) / d3_geo_centroidW0;
  }
  function d3_geo_centroidLineStart() {
    var x0, y0, z0;
    d3_geo_centroid.point = function(λ, φ) {
      λ *= d3_radians;
      var cosφ = Math.cos(φ *= d3_radians);
      x0 = cosφ * Math.cos(λ);
      y0 = cosφ * Math.sin(λ);
      z0 = Math.sin(φ);
      d3_geo_centroid.point = nextPoint;
      d3_geo_centroidPointXYZ(x0, y0, z0);
    };
    function nextPoint(λ, φ) {
      λ *= d3_radians;
      var cosφ = Math.cos(φ *= d3_radians), x = cosφ * Math.cos(λ), y = cosφ * Math.sin(λ), z = Math.sin(φ), w = Math.atan2(Math.sqrt((w = y0 * z - z0 * y) * w + (w = z0 * x - x0 * z) * w + (w = x0 * y - y0 * x) * w), x0 * x + y0 * y + z0 * z);
      d3_geo_centroidW1 += w;
      d3_geo_centroidX1 += w * (x0 + (x0 = x));
      d3_geo_centroidY1 += w * (y0 + (y0 = y));
      d3_geo_centroidZ1 += w * (z0 + (z0 = z));
      d3_geo_centroidPointXYZ(x0, y0, z0);
    }
  }
  function d3_geo_centroidLineEnd() {
    d3_geo_centroid.point = d3_geo_centroidPoint;
  }
  function d3_geo_centroidRingStart() {
    var λ00, φ00, x0, y0, z0;
    d3_geo_centroid.point = function(λ, φ) {
      λ00 = λ, φ00 = φ;
      d3_geo_centroid.point = nextPoint;
      λ *= d3_radians;
      var cosφ = Math.cos(φ *= d3_radians);
      x0 = cosφ * Math.cos(λ);
      y0 = cosφ * Math.sin(λ);
      z0 = Math.sin(φ);
      d3_geo_centroidPointXYZ(x0, y0, z0);
    };
    d3_geo_centroid.lineEnd = function() {
      nextPoint(λ00, φ00);
      d3_geo_centroid.lineEnd = d3_geo_centroidLineEnd;
      d3_geo_centroid.point = d3_geo_centroidPoint;
    };
    function nextPoint(λ, φ) {
      λ *= d3_radians;
      var cosφ = Math.cos(φ *= d3_radians), x = cosφ * Math.cos(λ), y = cosφ * Math.sin(λ), z = Math.sin(φ), cx = y0 * z - z0 * y, cy = z0 * x - x0 * z, cz = x0 * y - y0 * x, m = Math.sqrt(cx * cx + cy * cy + cz * cz), u = x0 * x + y0 * y + z0 * z, v = m && -d3_acos(u) / m, w = Math.atan2(m, u);
      d3_geo_centroidX2 += v * cx;
      d3_geo_centroidY2 += v * cy;
      d3_geo_centroidZ2 += v * cz;
      d3_geo_centroidW1 += w;
      d3_geo_centroidX1 += w * (x0 + (x0 = x));
      d3_geo_centroidY1 += w * (y0 + (y0 = y));
      d3_geo_centroidZ1 += w * (z0 + (z0 = z));
      d3_geo_centroidPointXYZ(x0, y0, z0);
    }
  }
  function d3_geo_compose(a, b) {
    function compose(x, y) {
      return x = a(x, y), b(x[0], x[1]);
    }
    if (a.invert && b.invert) compose.invert = function(x, y) {
      return x = b.invert(x, y), x && a.invert(x[0], x[1]);
    };
    return compose;
  }
  function d3_true() {
    return true;
  }
  function d3_geo_clipPolygon(segments, compare, clipStartInside, interpolate, listener) {
    var subject = [], clip = [];
    segments.forEach(function(segment) {
      if ((n = segment.length - 1) <= 0) return;
      var n, p0 = segment[0], p1 = segment[n];
      if (d3_geo_sphericalEqual(p0, p1)) {
        listener.lineStart();
        for (var i = 0; i < n; ++i) listener.point((p0 = segment[i])[0], p0[1]);
        listener.lineEnd();
        return;
      }
      var a = new d3_geo_clipPolygonIntersection(p0, segment, null, true), b = new d3_geo_clipPolygonIntersection(p0, null, a, false);
      a.o = b;
      subject.push(a);
      clip.push(b);
      a = new d3_geo_clipPolygonIntersection(p1, segment, null, false);
      b = new d3_geo_clipPolygonIntersection(p1, null, a, true);
      a.o = b;
      subject.push(a);
      clip.push(b);
    });
    clip.sort(compare);
    d3_geo_clipPolygonLinkCircular(subject);
    d3_geo_clipPolygonLinkCircular(clip);
    if (!subject.length) return;
    for (var i = 0, entry = clipStartInside, n = clip.length; i < n; ++i) {
      clip[i].e = entry = !entry;
    }
    var start = subject[0], points, point;
    while (1) {
      var current = start, isSubject = true;
      while (current.v) if ((current = current.n) === start) return;
      points = current.z;
      listener.lineStart();
      do {
        current.v = current.o.v = true;
        if (current.e) {
          if (isSubject) {
            for (var i = 0, n = points.length; i < n; ++i) listener.point((point = points[i])[0], point[1]);
          } else {
            interpolate(current.x, current.n.x, 1, listener);
          }
          current = current.n;
        } else {
          if (isSubject) {
            points = current.p.z;
            for (var i = points.length - 1; i >= 0; --i) listener.point((point = points[i])[0], point[1]);
          } else {
            interpolate(current.x, current.p.x, -1, listener);
          }
          current = current.p;
        }
        current = current.o;
        points = current.z;
        isSubject = !isSubject;
      } while (!current.v);
      listener.lineEnd();
    }
  }
  function d3_geo_clipPolygonLinkCircular(array) {
    if (!(n = array.length)) return;
    var n, i = 0, a = array[0], b;
    while (++i < n) {
      a.n = b = array[i];
      b.p = a;
      a = b;
    }
    a.n = b = array[0];
    b.p = a;
  }
  function d3_geo_clipPolygonIntersection(point, points, other, entry) {
    this.x = point;
    this.z = points;
    this.o = other;
    this.e = entry;
    this.v = false;
    this.n = this.p = null;
  }
  function d3_geo_clip(pointVisible, clipLine, interpolate, clipStart) {
    return function(rotate, listener) {
      var line = clipLine(listener), rotatedClipStart = rotate.invert(clipStart[0], clipStart[1]);
      var clip = {
        point: point,
        lineStart: lineStart,
        lineEnd: lineEnd,
        polygonStart: function() {
          clip.point = pointRing;
          clip.lineStart = ringStart;
          clip.lineEnd = ringEnd;
          segments = [];
          polygon = [];
        },
        polygonEnd: function() {
          clip.point = point;
          clip.lineStart = lineStart;
          clip.lineEnd = lineEnd;
          segments = d3.merge(segments);
          var clipStartInside = d3_geo_pointInPolygon(rotatedClipStart, polygon);
          if (segments.length) {
            if (!polygonStarted) listener.polygonStart(), polygonStarted = true;
            d3_geo_clipPolygon(segments, d3_geo_clipSort, clipStartInside, interpolate, listener);
          } else if (clipStartInside) {
            if (!polygonStarted) listener.polygonStart(), polygonStarted = true;
            listener.lineStart();
            interpolate(null, null, 1, listener);
            listener.lineEnd();
          }
          if (polygonStarted) listener.polygonEnd(), polygonStarted = false;
          segments = polygon = null;
        },
        sphere: function() {
          listener.polygonStart();
          listener.lineStart();
          interpolate(null, null, 1, listener);
          listener.lineEnd();
          listener.polygonEnd();
        }
      };
      function point(λ, φ) {
        var point = rotate(λ, φ);
        if (pointVisible(λ = point[0], φ = point[1])) listener.point(λ, φ);
      }
      function pointLine(λ, φ) {
        var point = rotate(λ, φ);
        line.point(point[0], point[1]);
      }
      function lineStart() {
        clip.point = pointLine;
        line.lineStart();
      }
      function lineEnd() {
        clip.point = point;
        line.lineEnd();
      }
      var segments;
      var buffer = d3_geo_clipBufferListener(), ringListener = clipLine(buffer), polygonStarted = false, polygon, ring;
      function pointRing(λ, φ) {
        ring.push([ λ, φ ]);
        var point = rotate(λ, φ);
        ringListener.point(point[0], point[1]);
      }
      function ringStart() {
        ringListener.lineStart();
        ring = [];
      }
      function ringEnd() {
        pointRing(ring[0][0], ring[0][1]);
        ringListener.lineEnd();
        var clean = ringListener.clean(), ringSegments = buffer.buffer(), segment, n = ringSegments.length;
        ring.pop();
        polygon.push(ring);
        ring = null;
        if (!n) return;
        if (clean & 1) {
          segment = ringSegments[0];
          var n = segment.length - 1, i = -1, point;
          if (n > 0) {
            if (!polygonStarted) listener.polygonStart(), polygonStarted = true;
            listener.lineStart();
            while (++i < n) listener.point((point = segment[i])[0], point[1]);
            listener.lineEnd();
          }
          return;
        }
        if (n > 1 && clean & 2) ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));
        segments.push(ringSegments.filter(d3_geo_clipSegmentLength1));
      }
      return clip;
    };
  }
  function d3_geo_clipSegmentLength1(segment) {
    return segment.length > 1;
  }
  function d3_geo_clipBufferListener() {
    var lines = [], line;
    return {
      lineStart: function() {
        lines.push(line = []);
      },
      point: function(λ, φ) {
        line.push([ λ, φ ]);
      },
      lineEnd: d3_noop,
      buffer: function() {
        var buffer = lines;
        lines = [];
        line = null;
        return buffer;
      },
      rejoin: function() {
        if (lines.length > 1) lines.push(lines.pop().concat(lines.shift()));
      }
    };
  }
  function d3_geo_clipSort(a, b) {
    return ((a = a.x)[0] < 0 ? a[1] - halfπ - ε : halfπ - a[1]) - ((b = b.x)[0] < 0 ? b[1] - halfπ - ε : halfπ - b[1]);
  }
  var d3_geo_clipAntimeridian = d3_geo_clip(d3_true, d3_geo_clipAntimeridianLine, d3_geo_clipAntimeridianInterpolate, [ -π, -π / 2 ]);
  function d3_geo_clipAntimeridianLine(listener) {
    var λ0 = NaN, φ0 = NaN, sλ0 = NaN, clean;
    return {
      lineStart: function() {
        listener.lineStart();
        clean = 1;
      },
      point: function(λ1, φ1) {
        var sλ1 = λ1 > 0 ? π : -π, dλ = abs(λ1 - λ0);
        if (abs(dλ - π) < ε) {
          listener.point(λ0, φ0 = (φ0 + φ1) / 2 > 0 ? halfπ : -halfπ);
          listener.point(sλ0, φ0);
          listener.lineEnd();
          listener.lineStart();
          listener.point(sλ1, φ0);
          listener.point(λ1, φ0);
          clean = 0;
        } else if (sλ0 !== sλ1 && dλ >= π) {
          if (abs(λ0 - sλ0) < ε) λ0 -= sλ0 * ε;
          if (abs(λ1 - sλ1) < ε) λ1 -= sλ1 * ε;
          φ0 = d3_geo_clipAntimeridianIntersect(λ0, φ0, λ1, φ1);
          listener.point(sλ0, φ0);
          listener.lineEnd();
          listener.lineStart();
          listener.point(sλ1, φ0);
          clean = 0;
        }
        listener.point(λ0 = λ1, φ0 = φ1);
        sλ0 = sλ1;
      },
      lineEnd: function() {
        listener.lineEnd();
        λ0 = φ0 = NaN;
      },
      clean: function() {
        return 2 - clean;
      }
    };
  }
  function d3_geo_clipAntimeridianIntersect(λ0, φ0, λ1, φ1) {
    var cosφ0, cosφ1, sinλ0_λ1 = Math.sin(λ0 - λ1);
    return abs(sinλ0_λ1) > ε ? Math.atan((Math.sin(φ0) * (cosφ1 = Math.cos(φ1)) * Math.sin(λ1) - Math.sin(φ1) * (cosφ0 = Math.cos(φ0)) * Math.sin(λ0)) / (cosφ0 * cosφ1 * sinλ0_λ1)) : (φ0 + φ1) / 2;
  }
  function d3_geo_clipAntimeridianInterpolate(from, to, direction, listener) {
    var φ;
    if (from == null) {
      φ = direction * halfπ;
      listener.point(-π, φ);
      listener.point(0, φ);
      listener.point(π, φ);
      listener.point(π, 0);
      listener.point(π, -φ);
      listener.point(0, -φ);
      listener.point(-π, -φ);
      listener.point(-π, 0);
      listener.point(-π, φ);
    } else if (abs(from[0] - to[0]) > ε) {
      var s = from[0] < to[0] ? π : -π;
      φ = direction * s / 2;
      listener.point(-s, φ);
      listener.point(0, φ);
      listener.point(s, φ);
    } else {
      listener.point(to[0], to[1]);
    }
  }
  function d3_geo_pointInPolygon(point, polygon) {
    var meridian = point[0], parallel = point[1], meridianNormal = [ Math.sin(meridian), -Math.cos(meridian), 0 ], polarAngle = 0, winding = 0;
    d3_geo_areaRingSum.reset();
    for (var i = 0, n = polygon.length; i < n; ++i) {
      var ring = polygon[i], m = ring.length;
      if (!m) continue;
      var point0 = ring[0], λ0 = point0[0], φ0 = point0[1] / 2 + π / 4, sinφ0 = Math.sin(φ0), cosφ0 = Math.cos(φ0), j = 1;
      while (true) {
        if (j === m) j = 0;
        point = ring[j];
        var λ = point[0], φ = point[1] / 2 + π / 4, sinφ = Math.sin(φ), cosφ = Math.cos(φ), dλ = λ - λ0, sdλ = dλ >= 0 ? 1 : -1, adλ = sdλ * dλ, antimeridian = adλ > π, k = sinφ0 * sinφ;
        d3_geo_areaRingSum.add(Math.atan2(k * sdλ * Math.sin(adλ), cosφ0 * cosφ + k * Math.cos(adλ)));
        polarAngle += antimeridian ? dλ + sdλ * τ : dλ;
        if (antimeridian ^ λ0 >= meridian ^ λ >= meridian) {
          var arc = d3_geo_cartesianCross(d3_geo_cartesian(point0), d3_geo_cartesian(point));
          d3_geo_cartesianNormalize(arc);
          var intersection = d3_geo_cartesianCross(meridianNormal, arc);
          d3_geo_cartesianNormalize(intersection);
          var φarc = (antimeridian ^ dλ >= 0 ? -1 : 1) * d3_asin(intersection[2]);
          if (parallel > φarc || parallel === φarc && (arc[0] || arc[1])) {
            winding += antimeridian ^ dλ >= 0 ? 1 : -1;
          }
        }
        if (!j++) break;
        λ0 = λ, sinφ0 = sinφ, cosφ0 = cosφ, point0 = point;
      }
    }
    return (polarAngle < -ε || polarAngle < ε && d3_geo_areaRingSum < -ε) ^ winding & 1;
  }
  function d3_geo_clipCircle(radius) {
    var cr = Math.cos(radius), smallRadius = cr > 0, notHemisphere = abs(cr) > ε, interpolate = d3_geo_circleInterpolate(radius, 6 * d3_radians);
    return d3_geo_clip(visible, clipLine, interpolate, smallRadius ? [ 0, -radius ] : [ -π, radius - π ]);
    function visible(λ, φ) {
      return Math.cos(λ) * Math.cos(φ) > cr;
    }
    function clipLine(listener) {
      var point0, c0, v0, v00, clean;
      return {
        lineStart: function() {
          v00 = v0 = false;
          clean = 1;
        },
        point: function(λ, φ) {
          var point1 = [ λ, φ ], point2, v = visible(λ, φ), c = smallRadius ? v ? 0 : code(λ, φ) : v ? code(λ + (λ < 0 ? π : -π), φ) : 0;
          if (!point0 && (v00 = v0 = v)) listener.lineStart();
          if (v !== v0) {
            point2 = intersect(point0, point1);
            if (d3_geo_sphericalEqual(point0, point2) || d3_geo_sphericalEqual(point1, point2)) {
              point1[0] += ε;
              point1[1] += ε;
              v = visible(point1[0], point1[1]);
            }
          }
          if (v !== v0) {
            clean = 0;
            if (v) {
              listener.lineStart();
              point2 = intersect(point1, point0);
              listener.point(point2[0], point2[1]);
            } else {
              point2 = intersect(point0, point1);
              listener.point(point2[0], point2[1]);
              listener.lineEnd();
            }
            point0 = point2;
          } else if (notHemisphere && point0 && smallRadius ^ v) {
            var t;
            if (!(c & c0) && (t = intersect(point1, point0, true))) {
              clean = 0;
              if (smallRadius) {
                listener.lineStart();
                listener.point(t[0][0], t[0][1]);
                listener.point(t[1][0], t[1][1]);
                listener.lineEnd();
              } else {
                listener.point(t[1][0], t[1][1]);
                listener.lineEnd();
                listener.lineStart();
                listener.point(t[0][0], t[0][1]);
              }
            }
          }
          if (v && (!point0 || !d3_geo_sphericalEqual(point0, point1))) {
            listener.point(point1[0], point1[1]);
          }
          point0 = point1, v0 = v, c0 = c;
        },
        lineEnd: function() {
          if (v0) listener.lineEnd();
          point0 = null;
        },
        clean: function() {
          return clean | (v00 && v0) << 1;
        }
      };
    }
    function intersect(a, b, two) {
      var pa = d3_geo_cartesian(a), pb = d3_geo_cartesian(b);
      var n1 = [ 1, 0, 0 ], n2 = d3_geo_cartesianCross(pa, pb), n2n2 = d3_geo_cartesianDot(n2, n2), n1n2 = n2[0], determinant = n2n2 - n1n2 * n1n2;
      if (!determinant) return !two && a;
      var c1 = cr * n2n2 / determinant, c2 = -cr * n1n2 / determinant, n1xn2 = d3_geo_cartesianCross(n1, n2), A = d3_geo_cartesianScale(n1, c1), B = d3_geo_cartesianScale(n2, c2);
      d3_geo_cartesianAdd(A, B);
      var u = n1xn2, w = d3_geo_cartesianDot(A, u), uu = d3_geo_cartesianDot(u, u), t2 = w * w - uu * (d3_geo_cartesianDot(A, A) - 1);
      if (t2 < 0) return;
      var t = Math.sqrt(t2), q = d3_geo_cartesianScale(u, (-w - t) / uu);
      d3_geo_cartesianAdd(q, A);
      q = d3_geo_spherical(q);
      if (!two) return q;
      var λ0 = a[0], λ1 = b[0], φ0 = a[1], φ1 = b[1], z;
      if (λ1 < λ0) z = λ0, λ0 = λ1, λ1 = z;
      var δλ = λ1 - λ0, polar = abs(δλ - π) < ε, meridian = polar || δλ < ε;
      if (!polar && φ1 < φ0) z = φ0, φ0 = φ1, φ1 = z;
      if (meridian ? polar ? φ0 + φ1 > 0 ^ q[1] < (abs(q[0] - λ0) < ε ? φ0 : φ1) : φ0 <= q[1] && q[1] <= φ1 : δλ > π ^ (λ0 <= q[0] && q[0] <= λ1)) {
        var q1 = d3_geo_cartesianScale(u, (-w + t) / uu);
        d3_geo_cartesianAdd(q1, A);
        return [ q, d3_geo_spherical(q1) ];
      }
    }
    function code(λ, φ) {
      var r = smallRadius ? radius : π - radius, code = 0;
      if (λ < -r) code |= 1; else if (λ > r) code |= 2;
      if (φ < -r) code |= 4; else if (φ > r) code |= 8;
      return code;
    }
  }
  function d3_geom_clipLine(x0, y0, x1, y1) {
    return function(line) {
      var a = line.a, b = line.b, ax = a.x, ay = a.y, bx = b.x, by = b.y, t0 = 0, t1 = 1, dx = bx - ax, dy = by - ay, r;
      r = x0 - ax;
      if (!dx && r > 0) return;
      r /= dx;
      if (dx < 0) {
        if (r < t0) return;
        if (r < t1) t1 = r;
      } else if (dx > 0) {
        if (r > t1) return;
        if (r > t0) t0 = r;
      }
      r = x1 - ax;
      if (!dx && r < 0) return;
      r /= dx;
      if (dx < 0) {
        if (r > t1) return;
        if (r > t0) t0 = r;
      } else if (dx > 0) {
        if (r < t0) return;
        if (r < t1) t1 = r;
      }
      r = y0 - ay;
      if (!dy && r > 0) return;
      r /= dy;
      if (dy < 0) {
        if (r < t0) return;
        if (r < t1) t1 = r;
      } else if (dy > 0) {
        if (r > t1) return;
        if (r > t0) t0 = r;
      }
      r = y1 - ay;
      if (!dy && r < 0) return;
      r /= dy;
      if (dy < 0) {
        if (r > t1) return;
        if (r > t0) t0 = r;
      } else if (dy > 0) {
        if (r < t0) return;
        if (r < t1) t1 = r;
      }
      if (t0 > 0) line.a = {
        x: ax + t0 * dx,
        y: ay + t0 * dy
      };
      if (t1 < 1) line.b = {
        x: ax + t1 * dx,
        y: ay + t1 * dy
      };
      return line;
    };
  }
  var d3_geo_clipExtentMAX = 1e9;
  d3.geo.clipExtent = function() {
    var x0, y0, x1, y1, stream, clip, clipExtent = {
      stream: function(output) {
        if (stream) stream.valid = false;
        stream = clip(output);
        stream.valid = true;
        return stream;
      },
      extent: function(_) {
        if (!arguments.length) return [ [ x0, y0 ], [ x1, y1 ] ];
        clip = d3_geo_clipExtent(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]);
        if (stream) stream.valid = false, stream = null;
        return clipExtent;
      }
    };
    return clipExtent.extent([ [ 0, 0 ], [ 960, 500 ] ]);
  };
  function d3_geo_clipExtent(x0, y0, x1, y1) {
    return function(listener) {
      var listener_ = listener, bufferListener = d3_geo_clipBufferListener(), clipLine = d3_geom_clipLine(x0, y0, x1, y1), segments, polygon, ring;
      var clip = {
        point: point,
        lineStart: lineStart,
        lineEnd: lineEnd,
        polygonStart: function() {
          listener = bufferListener;
          segments = [];
          polygon = [];
          clean = true;
        },
        polygonEnd: function() {
          listener = listener_;
          segments = d3.merge(segments);
          var clipStartInside = insidePolygon([ x0, y1 ]), inside = clean && clipStartInside, visible = segments.length;
          if (inside || visible) {
            listener.polygonStart();
            if (inside) {
              listener.lineStart();
              interpolate(null, null, 1, listener);
              listener.lineEnd();
            }
            if (visible) {
              d3_geo_clipPolygon(segments, compare, clipStartInside, interpolate, listener);
            }
            listener.polygonEnd();
          }
          segments = polygon = ring = null;
        }
      };
      function insidePolygon(p) {
        var wn = 0, n = polygon.length, y = p[1];
        for (var i = 0; i < n; ++i) {
          for (var j = 1, v = polygon[i], m = v.length, a = v[0], b; j < m; ++j) {
            b = v[j];
            if (a[1] <= y) {
              if (b[1] > y && d3_cross2d(a, b, p) > 0) ++wn;
            } else {
              if (b[1] <= y && d3_cross2d(a, b, p) < 0) --wn;
            }
            a = b;
          }
        }
        return wn !== 0;
      }
      function interpolate(from, to, direction, listener) {
        var a = 0, a1 = 0;
        if (from == null || (a = corner(from, direction)) !== (a1 = corner(to, direction)) || comparePoints(from, to) < 0 ^ direction > 0) {
          do {
            listener.point(a === 0 || a === 3 ? x0 : x1, a > 1 ? y1 : y0);
          } while ((a = (a + direction + 4) % 4) !== a1);
        } else {
          listener.point(to[0], to[1]);
        }
      }
      function pointVisible(x, y) {
        return x0 <= x && x <= x1 && y0 <= y && y <= y1;
      }
      function point(x, y) {
        if (pointVisible(x, y)) listener.point(x, y);
      }
      var x__, y__, v__, x_, y_, v_, first, clean;
      function lineStart() {
        clip.point = linePoint;
        if (polygon) polygon.push(ring = []);
        first = true;
        v_ = false;
        x_ = y_ = NaN;
      }
      function lineEnd() {
        if (segments) {
          linePoint(x__, y__);
          if (v__ && v_) bufferListener.rejoin();
          segments.push(bufferListener.buffer());
        }
        clip.point = point;
        if (v_) listener.lineEnd();
      }
      function linePoint(x, y) {
        x = Math.max(-d3_geo_clipExtentMAX, Math.min(d3_geo_clipExtentMAX, x));
        y = Math.max(-d3_geo_clipExtentMAX, Math.min(d3_geo_clipExtentMAX, y));
        var v = pointVisible(x, y);
        if (polygon) ring.push([ x, y ]);
        if (first) {
          x__ = x, y__ = y, v__ = v;
          first = false;
          if (v) {
            listener.lineStart();
            listener.point(x, y);
          }
        } else {
          if (v && v_) listener.point(x, y); else {
            var l = {
              a: {
                x: x_,
                y: y_
              },
              b: {
                x: x,
                y: y
              }
            };
            if (clipLine(l)) {
              if (!v_) {
                listener.lineStart();
                listener.point(l.a.x, l.a.y);
              }
              listener.point(l.b.x, l.b.y);
              if (!v) listener.lineEnd();
              clean = false;
            } else if (v) {
              listener.lineStart();
              listener.point(x, y);
              clean = false;
            }
          }
        }
        x_ = x, y_ = y, v_ = v;
      }
      return clip;
    };
    function corner(p, direction) {
      return abs(p[0] - x0) < ε ? direction > 0 ? 0 : 3 : abs(p[0] - x1) < ε ? direction > 0 ? 2 : 1 : abs(p[1] - y0) < ε ? direction > 0 ? 1 : 0 : direction > 0 ? 3 : 2;
    }
    function compare(a, b) {
      return comparePoints(a.x, b.x);
    }
    function comparePoints(a, b) {
      var ca = corner(a, 1), cb = corner(b, 1);
      return ca !== cb ? ca - cb : ca === 0 ? b[1] - a[1] : ca === 1 ? a[0] - b[0] : ca === 2 ? a[1] - b[1] : b[0] - a[0];
    }
  }
  function d3_geo_conic(projectAt) {
    var φ0 = 0, φ1 = π / 3, m = d3_geo_projectionMutator(projectAt), p = m(φ0, φ1);
    p.parallels = function(_) {
      if (!arguments.length) return [ φ0 / π * 180, φ1 / π * 180 ];
      return m(φ0 = _[0] * π / 180, φ1 = _[1] * π / 180);
    };
    return p;
  }
  function d3_geo_conicEqualArea(φ0, φ1) {
    var sinφ0 = Math.sin(φ0), n = (sinφ0 + Math.sin(φ1)) / 2, C = 1 + sinφ0 * (2 * n - sinφ0), ρ0 = Math.sqrt(C) / n;
    function forward(λ, φ) {
      var ρ = Math.sqrt(C - 2 * n * Math.sin(φ)) / n;
      return [ ρ * Math.sin(λ *= n), ρ0 - ρ * Math.cos(λ) ];
    }
    forward.invert = function(x, y) {
      var ρ0_y = ρ0 - y;
      return [ Math.atan2(x, ρ0_y) / n, d3_asin((C - (x * x + ρ0_y * ρ0_y) * n * n) / (2 * n)) ];
    };
    return forward;
  }
  (d3.geo.conicEqualArea = function() {
    return d3_geo_conic(d3_geo_conicEqualArea);
  }).raw = d3_geo_conicEqualArea;
  d3.geo.albers = function() {
    return d3.geo.conicEqualArea().rotate([ 96, 0 ]).center([ -.6, 38.7 ]).parallels([ 29.5, 45.5 ]).scale(1070);
  };
  d3.geo.albersUsa = function() {
    var lower48 = d3.geo.albers();
    var alaska = d3.geo.conicEqualArea().rotate([ 154, 0 ]).center([ -2, 58.5 ]).parallels([ 55, 65 ]);
    var hawaii = d3.geo.conicEqualArea().rotate([ 157, 0 ]).center([ -3, 19.9 ]).parallels([ 8, 18 ]);
    var point, pointStream = {
      point: function(x, y) {
        point = [ x, y ];
      }
    }, lower48Point, alaskaPoint, hawaiiPoint;
    function albersUsa(coordinates) {
      var x = coordinates[0], y = coordinates[1];
      point = null;
      (lower48Point(x, y), point) || (alaskaPoint(x, y), point) || hawaiiPoint(x, y);
      return point;
    }
    albersUsa.invert = function(coordinates) {
      var k = lower48.scale(), t = lower48.translate(), x = (coordinates[0] - t[0]) / k, y = (coordinates[1] - t[1]) / k;
      return (y >= .12 && y < .234 && x >= -.425 && x < -.214 ? alaska : y >= .166 && y < .234 && x >= -.214 && x < -.115 ? hawaii : lower48).invert(coordinates);
    };
    albersUsa.stream = function(stream) {
      var lower48Stream = lower48.stream(stream), alaskaStream = alaska.stream(stream), hawaiiStream = hawaii.stream(stream);
      return {
        point: function(x, y) {
          lower48Stream.point(x, y);
          alaskaStream.point(x, y);
          hawaiiStream.point(x, y);
        },
        sphere: function() {
          lower48Stream.sphere();
          alaskaStream.sphere();
          hawaiiStream.sphere();
        },
        lineStart: function() {
          lower48Stream.lineStart();
          alaskaStream.lineStart();
          hawaiiStream.lineStart();
        },
        lineEnd: function() {
          lower48Stream.lineEnd();
          alaskaStream.lineEnd();
          hawaiiStream.lineEnd();
        },
        polygonStart: function() {
          lower48Stream.polygonStart();
          alaskaStream.polygonStart();
          hawaiiStream.polygonStart();
        },
        polygonEnd: function() {
          lower48Stream.polygonEnd();
          alaskaStream.polygonEnd();
          hawaiiStream.polygonEnd();
        }
      };
    };
    albersUsa.precision = function(_) {
      if (!arguments.length) return lower48.precision();
      lower48.precision(_);
      alaska.precision(_);
      hawaii.precision(_);
      return albersUsa;
    };
    albersUsa.scale = function(_) {
      if (!arguments.length) return lower48.scale();
      lower48.scale(_);
      alaska.scale(_ * .35);
      hawaii.scale(_);
      return albersUsa.translate(lower48.translate());
    };
    albersUsa.translate = function(_) {
      if (!arguments.length) return lower48.translate();
      var k = lower48.scale(), x = +_[0], y = +_[1];
      lower48Point = lower48.translate(_).clipExtent([ [ x - .455 * k, y - .238 * k ], [ x + .455 * k, y + .238 * k ] ]).stream(pointStream).point;
      alaskaPoint = alaska.translate([ x - .307 * k, y + .201 * k ]).clipExtent([ [ x - .425 * k + ε, y + .12 * k + ε ], [ x - .214 * k - ε, y + .234 * k - ε ] ]).stream(pointStream).point;
      hawaiiPoint = hawaii.translate([ x - .205 * k, y + .212 * k ]).clipExtent([ [ x - .214 * k + ε, y + .166 * k + ε ], [ x - .115 * k - ε, y + .234 * k - ε ] ]).stream(pointStream).point;
      return albersUsa;
    };
    return albersUsa.scale(1070);
  };
  var d3_geo_pathAreaSum, d3_geo_pathAreaPolygon, d3_geo_pathArea = {
    point: d3_noop,
    lineStart: d3_noop,
    lineEnd: d3_noop,
    polygonStart: function() {
      d3_geo_pathAreaPolygon = 0;
      d3_geo_pathArea.lineStart = d3_geo_pathAreaRingStart;
    },
    polygonEnd: function() {
      d3_geo_pathArea.lineStart = d3_geo_pathArea.lineEnd = d3_geo_pathArea.point = d3_noop;
      d3_geo_pathAreaSum += abs(d3_geo_pathAreaPolygon / 2);
    }
  };
  function d3_geo_pathAreaRingStart() {
    var x00, y00, x0, y0;
    d3_geo_pathArea.point = function(x, y) {
      d3_geo_pathArea.point = nextPoint;
      x00 = x0 = x, y00 = y0 = y;
    };
    function nextPoint(x, y) {
      d3_geo_pathAreaPolygon += y0 * x - x0 * y;
      x0 = x, y0 = y;
    }
    d3_geo_pathArea.lineEnd = function() {
      nextPoint(x00, y00);
    };
  }
  var d3_geo_pathBoundsX0, d3_geo_pathBoundsY0, d3_geo_pathBoundsX1, d3_geo_pathBoundsY1;
  var d3_geo_pathBounds = {
    point: d3_geo_pathBoundsPoint,
    lineStart: d3_noop,
    lineEnd: d3_noop,
    polygonStart: d3_noop,
    polygonEnd: d3_noop
  };
  function d3_geo_pathBoundsPoint(x, y) {
    if (x < d3_geo_pathBoundsX0) d3_geo_pathBoundsX0 = x;
    if (x > d3_geo_pathBoundsX1) d3_geo_pathBoundsX1 = x;
    if (y < d3_geo_pathBoundsY0) d3_geo_pathBoundsY0 = y;
    if (y > d3_geo_pathBoundsY1) d3_geo_pathBoundsY1 = y;
  }
  function d3_geo_pathBuffer() {
    var pointCircle = d3_geo_pathBufferCircle(4.5), buffer = [];
    var stream = {
      point: point,
      lineStart: function() {
        stream.point = pointLineStart;
      },
      lineEnd: lineEnd,
      polygonStart: function() {
        stream.lineEnd = lineEndPolygon;
      },
      polygonEnd: function() {
        stream.lineEnd = lineEnd;
        stream.point = point;
      },
      pointRadius: function(_) {
        pointCircle = d3_geo_pathBufferCircle(_);
        return stream;
      },
      result: function() {
        if (buffer.length) {
          var result = buffer.join("");
          buffer = [];
          return result;
        }
      }
    };
    function point(x, y) {
      buffer.push("M", x, ",", y, pointCircle);
    }
    function pointLineStart(x, y) {
      buffer.push("M", x, ",", y);
      stream.point = pointLine;
    }
    function pointLine(x, y) {
      buffer.push("L", x, ",", y);
    }
    function lineEnd() {
      stream.point = point;
    }
    function lineEndPolygon() {
      buffer.push("Z");
    }
    return stream;
  }
  function d3_geo_pathBufferCircle(radius) {
    return "m0," + radius + "a" + radius + "," + radius + " 0 1,1 0," + -2 * radius + "a" + radius + "," + radius + " 0 1,1 0," + 2 * radius + "z";
  }
  var d3_geo_pathCentroid = {
    point: d3_geo_pathCentroidPoint,
    lineStart: d3_geo_pathCentroidLineStart,
    lineEnd: d3_geo_pathCentroidLineEnd,
    polygonStart: function() {
      d3_geo_pathCentroid.lineStart = d3_geo_pathCentroidRingStart;
    },
    polygonEnd: function() {
      d3_geo_pathCentroid.point = d3_geo_pathCentroidPoint;
      d3_geo_pathCentroid.lineStart = d3_geo_pathCentroidLineStart;
      d3_geo_pathCentroid.lineEnd = d3_geo_pathCentroidLineEnd;
    }
  };
  function d3_geo_pathCentroidPoint(x, y) {
    d3_geo_centroidX0 += x;
    d3_geo_centroidY0 += y;
    ++d3_geo_centroidZ0;
  }
  function d3_geo_pathCentroidLineStart() {
    var x0, y0;
    d3_geo_pathCentroid.point = function(x, y) {
      d3_geo_pathCentroid.point = nextPoint;
      d3_geo_pathCentroidPoint(x0 = x, y0 = y);
    };
    function nextPoint(x, y) {
      var dx = x - x0, dy = y - y0, z = Math.sqrt(dx * dx + dy * dy);
      d3_geo_centroidX1 += z * (x0 + x) / 2;
      d3_geo_centroidY1 += z * (y0 + y) / 2;
      d3_geo_centroidZ1 += z;
      d3_geo_pathCentroidPoint(x0 = x, y0 = y);
    }
  }
  function d3_geo_pathCentroidLineEnd() {
    d3_geo_pathCentroid.point = d3_geo_pathCentroidPoint;
  }
  function d3_geo_pathCentroidRingStart() {
    var x00, y00, x0, y0;
    d3_geo_pathCentroid.point = function(x, y) {
      d3_geo_pathCentroid.point = nextPoint;
      d3_geo_pathCentroidPoint(x00 = x0 = x, y00 = y0 = y);
    };
    function nextPoint(x, y) {
      var dx = x - x0, dy = y - y0, z = Math.sqrt(dx * dx + dy * dy);
      d3_geo_centroidX1 += z * (x0 + x) / 2;
      d3_geo_centroidY1 += z * (y0 + y) / 2;
      d3_geo_centroidZ1 += z;
      z = y0 * x - x0 * y;
      d3_geo_centroidX2 += z * (x0 + x);
      d3_geo_centroidY2 += z * (y0 + y);
      d3_geo_centroidZ2 += z * 3;
      d3_geo_pathCentroidPoint(x0 = x, y0 = y);
    }
    d3_geo_pathCentroid.lineEnd = function() {
      nextPoint(x00, y00);
    };
  }
  function d3_geo_pathContext(context) {
    var pointRadius = 4.5;
    var stream = {
      point: point,
      lineStart: function() {
        stream.point = pointLineStart;
      },
      lineEnd: lineEnd,
      polygonStart: function() {
        stream.lineEnd = lineEndPolygon;
      },
      polygonEnd: function() {
        stream.lineEnd = lineEnd;
        stream.point = point;
      },
      pointRadius: function(_) {
        pointRadius = _;
        return stream;
      },
      result: d3_noop
    };
    function point(x, y) {
      context.moveTo(x + pointRadius, y);
      context.arc(x, y, pointRadius, 0, τ);
    }
    function pointLineStart(x, y) {
      context.moveTo(x, y);
      stream.point = pointLine;
    }
    function pointLine(x, y) {
      context.lineTo(x, y);
    }
    function lineEnd() {
      stream.point = point;
    }
    function lineEndPolygon() {
      context.closePath();
    }
    return stream;
  }
  function d3_geo_resample(project) {
    var δ2 = .5, cosMinDistance = Math.cos(30 * d3_radians), maxDepth = 16;
    function resample(stream) {
      return (maxDepth ? resampleRecursive : resampleNone)(stream);
    }
    function resampleNone(stream) {
      return d3_geo_transformPoint(stream, function(x, y) {
        x = project(x, y);
        stream.point(x[0], x[1]);
      });
    }
    function resampleRecursive(stream) {
      var λ00, φ00, x00, y00, a00, b00, c00, λ0, x0, y0, a0, b0, c0;
      var resample = {
        point: point,
        lineStart: lineStart,
        lineEnd: lineEnd,
        polygonStart: function() {
          stream.polygonStart();
          resample.lineStart = ringStart;
        },
        polygonEnd: function() {
          stream.polygonEnd();
          resample.lineStart = lineStart;
        }
      };
      function point(x, y) {
        x = project(x, y);
        stream.point(x[0], x[1]);
      }
      function lineStart() {
        x0 = NaN;
        resample.point = linePoint;
        stream.lineStart();
      }
      function linePoint(λ, φ) {
        var c = d3_geo_cartesian([ λ, φ ]), p = project(λ, φ);
        resampleLineTo(x0, y0, λ0, a0, b0, c0, x0 = p[0], y0 = p[1], λ0 = λ, a0 = c[0], b0 = c[1], c0 = c[2], maxDepth, stream);
        stream.point(x0, y0);
      }
      function lineEnd() {
        resample.point = point;
        stream.lineEnd();
      }
      function ringStart() {
        lineStart();
        resample.point = ringPoint;
        resample.lineEnd = ringEnd;
      }
      function ringPoint(λ, φ) {
        linePoint(λ00 = λ, φ00 = φ), x00 = x0, y00 = y0, a00 = a0, b00 = b0, c00 = c0;
        resample.point = linePoint;
      }
      function ringEnd() {
        resampleLineTo(x0, y0, λ0, a0, b0, c0, x00, y00, λ00, a00, b00, c00, maxDepth, stream);
        resample.lineEnd = lineEnd;
        lineEnd();
      }
      return resample;
    }
    function resampleLineTo(x0, y0, λ0, a0, b0, c0, x1, y1, λ1, a1, b1, c1, depth, stream) {
      var dx = x1 - x0, dy = y1 - y0, d2 = dx * dx + dy * dy;
      if (d2 > 4 * δ2 && depth--) {
        var a = a0 + a1, b = b0 + b1, c = c0 + c1, m = Math.sqrt(a * a + b * b + c * c), φ2 = Math.asin(c /= m), λ2 = abs(abs(c) - 1) < ε || abs(λ0 - λ1) < ε ? (λ0 + λ1) / 2 : Math.atan2(b, a), p = project(λ2, φ2), x2 = p[0], y2 = p[1], dx2 = x2 - x0, dy2 = y2 - y0, dz = dy * dx2 - dx * dy2;
        if (dz * dz / d2 > δ2 || abs((dx * dx2 + dy * dy2) / d2 - .5) > .3 || a0 * a1 + b0 * b1 + c0 * c1 < cosMinDistance) {
          resampleLineTo(x0, y0, λ0, a0, b0, c0, x2, y2, λ2, a /= m, b /= m, c, depth, stream);
          stream.point(x2, y2);
          resampleLineTo(x2, y2, λ2, a, b, c, x1, y1, λ1, a1, b1, c1, depth, stream);
        }
      }
    }
    resample.precision = function(_) {
      if (!arguments.length) return Math.sqrt(δ2);
      maxDepth = (δ2 = _ * _) > 0 && 16;
      return resample;
    };
    return resample;
  }
  d3.geo.path = function() {
    var pointRadius = 4.5, projection, context, projectStream, contextStream, cacheStream;
    function path(object) {
      if (object) {
        if (typeof pointRadius === "function") contextStream.pointRadius(+pointRadius.apply(this, arguments));
        if (!cacheStream || !cacheStream.valid) cacheStream = projectStream(contextStream);
        d3.geo.stream(object, cacheStream);
      }
      return contextStream.result();
    }
    path.area = function(object) {
      d3_geo_pathAreaSum = 0;
      d3.geo.stream(object, projectStream(d3_geo_pathArea));
      return d3_geo_pathAreaSum;
    };
    path.centroid = function(object) {
      d3_geo_centroidX0 = d3_geo_centroidY0 = d3_geo_centroidZ0 = d3_geo_centroidX1 = d3_geo_centroidY1 = d3_geo_centroidZ1 = d3_geo_centroidX2 = d3_geo_centroidY2 = d3_geo_centroidZ2 = 0;
      d3.geo.stream(object, projectStream(d3_geo_pathCentroid));
      return d3_geo_centroidZ2 ? [ d3_geo_centroidX2 / d3_geo_centroidZ2, d3_geo_centroidY2 / d3_geo_centroidZ2 ] : d3_geo_centroidZ1 ? [ d3_geo_centroidX1 / d3_geo_centroidZ1, d3_geo_centroidY1 / d3_geo_centroidZ1 ] : d3_geo_centroidZ0 ? [ d3_geo_centroidX0 / d3_geo_centroidZ0, d3_geo_centroidY0 / d3_geo_centroidZ0 ] : [ NaN, NaN ];
    };
    path.bounds = function(object) {
      d3_geo_pathBoundsX1 = d3_geo_pathBoundsY1 = -(d3_geo_pathBoundsX0 = d3_geo_pathBoundsY0 = Infinity);
      d3.geo.stream(object, projectStream(d3_geo_pathBounds));
      return [ [ d3_geo_pathBoundsX0, d3_geo_pathBoundsY0 ], [ d3_geo_pathBoundsX1, d3_geo_pathBoundsY1 ] ];
    };
    path.projection = function(_) {
      if (!arguments.length) return projection;
      projectStream = (projection = _) ? _.stream || d3_geo_pathProjectStream(_) : d3_identity;
      return reset();
    };
    path.context = function(_) {
      if (!arguments.length) return context;
      contextStream = (context = _) == null ? new d3_geo_pathBuffer() : new d3_geo_pathContext(_);
      if (typeof pointRadius !== "function") contextStream.pointRadius(pointRadius);
      return reset();
    };
    path.pointRadius = function(_) {
      if (!arguments.length) return pointRadius;
      pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
      return path;
    };
    function reset() {
      cacheStream = null;
      return path;
    }
    return path.projection(d3.geo.albersUsa()).context(null);
  };
  function d3_geo_pathProjectStream(project) {
    var resample = d3_geo_resample(function(x, y) {
      return project([ x * d3_degrees, y * d3_degrees ]);
    });
    return function(stream) {
      return d3_geo_projectionRadians(resample(stream));
    };
  }
  d3.geo.transform = function(methods) {
    return {
      stream: function(stream) {
        var transform = new d3_geo_transform(stream);
        for (var k in methods) transform[k] = methods[k];
        return transform;
      }
    };
  };
  function d3_geo_transform(stream) {
    this.stream = stream;
  }
  d3_geo_transform.prototype = {
    point: function(x, y) {
      this.stream.point(x, y);
    },
    sphere: function() {
      this.stream.sphere();
    },
    lineStart: function() {
      this.stream.lineStart();
    },
    lineEnd: function() {
      this.stream.lineEnd();
    },
    polygonStart: function() {
      this.stream.polygonStart();
    },
    polygonEnd: function() {
      this.stream.polygonEnd();
    }
  };
  function d3_geo_transformPoint(stream, point) {
    return {
      point: point,
      sphere: function() {
        stream.sphere();
      },
      lineStart: function() {
        stream.lineStart();
      },
      lineEnd: function() {
        stream.lineEnd();
      },
      polygonStart: function() {
        stream.polygonStart();
      },
      polygonEnd: function() {
        stream.polygonEnd();
      }
    };
  }
  d3.geo.projection = d3_geo_projection;
  d3.geo.projectionMutator = d3_geo_projectionMutator;
  function d3_geo_projection(project) {
    return d3_geo_projectionMutator(function() {
      return project;
    })();
  }
  function d3_geo_projectionMutator(projectAt) {
    var project, rotate, projectRotate, projectResample = d3_geo_resample(function(x, y) {
      x = project(x, y);
      return [ x[0] * k + δx, δy - x[1] * k ];
    }), k = 150, x = 480, y = 250, λ = 0, φ = 0, δλ = 0, δφ = 0, δγ = 0, δx, δy, preclip = d3_geo_clipAntimeridian, postclip = d3_identity, clipAngle = null, clipExtent = null, stream;
    function projection(point) {
      point = projectRotate(point[0] * d3_radians, point[1] * d3_radians);
      return [ point[0] * k + δx, δy - point[1] * k ];
    }
    function invert(point) {
      point = projectRotate.invert((point[0] - δx) / k, (δy - point[1]) / k);
      return point && [ point[0] * d3_degrees, point[1] * d3_degrees ];
    }
    projection.stream = function(output) {
      if (stream) stream.valid = false;
      stream = d3_geo_projectionRadians(preclip(rotate, projectResample(postclip(output))));
      stream.valid = true;
      return stream;
    };
    projection.clipAngle = function(_) {
      if (!arguments.length) return clipAngle;
      preclip = _ == null ? (clipAngle = _, d3_geo_clipAntimeridian) : d3_geo_clipCircle((clipAngle = +_) * d3_radians);
      return invalidate();
    };
    projection.clipExtent = function(_) {
      if (!arguments.length) return clipExtent;
      clipExtent = _;
      postclip = _ ? d3_geo_clipExtent(_[0][0], _[0][1], _[1][0], _[1][1]) : d3_identity;
      return invalidate();
    };
    projection.scale = function(_) {
      if (!arguments.length) return k;
      k = +_;
      return reset();
    };
    projection.translate = function(_) {
      if (!arguments.length) return [ x, y ];
      x = +_[0];
      y = +_[1];
      return reset();
    };
    projection.center = function(_) {
      if (!arguments.length) return [ λ * d3_degrees, φ * d3_degrees ];
      λ = _[0] % 360 * d3_radians;
      φ = _[1] % 360 * d3_radians;
      return reset();
    };
    projection.rotate = function(_) {
      if (!arguments.length) return [ δλ * d3_degrees, δφ * d3_degrees, δγ * d3_degrees ];
      δλ = _[0] % 360 * d3_radians;
      δφ = _[1] % 360 * d3_radians;
      δγ = _.length > 2 ? _[2] % 360 * d3_radians : 0;
      return reset();
    };
    d3.rebind(projection, projectResample, "precision");
    function reset() {
      projectRotate = d3_geo_compose(rotate = d3_geo_rotation(δλ, δφ, δγ), project);
      var center = project(λ, φ);
      δx = x - center[0] * k;
      δy = y + center[1] * k;
      return invalidate();
    }
    function invalidate() {
      if (stream) stream.valid = false, stream = null;
      return projection;
    }
    return function() {
      project = projectAt.apply(this, arguments);
      projection.invert = project.invert && invert;
      return reset();
    };
  }
  function d3_geo_projectionRadians(stream) {
    return d3_geo_transformPoint(stream, function(x, y) {
      stream.point(x * d3_radians, y * d3_radians);
    });
  }
  function d3_geo_equirectangular(λ, φ) {
    return [ λ, φ ];
  }
  (d3.geo.equirectangular = function() {
    return d3_geo_projection(d3_geo_equirectangular);
  }).raw = d3_geo_equirectangular.invert = d3_geo_equirectangular;
  d3.geo.rotation = function(rotate) {
    rotate = d3_geo_rotation(rotate[0] % 360 * d3_radians, rotate[1] * d3_radians, rotate.length > 2 ? rotate[2] * d3_radians : 0);
    function forward(coordinates) {
      coordinates = rotate(coordinates[0] * d3_radians, coordinates[1] * d3_radians);
      return coordinates[0] *= d3_degrees, coordinates[1] *= d3_degrees, coordinates;
    }
    forward.invert = function(coordinates) {
      coordinates = rotate.invert(coordinates[0] * d3_radians, coordinates[1] * d3_radians);
      return coordinates[0] *= d3_degrees, coordinates[1] *= d3_degrees, coordinates;
    };
    return forward;
  };
  function d3_geo_identityRotation(λ, φ) {
    return [ λ > π ? λ - τ : λ < -π ? λ + τ : λ, φ ];
  }
  d3_geo_identityRotation.invert = d3_geo_equirectangular;
  function d3_geo_rotation(δλ, δφ, δγ) {
    return δλ ? δφ || δγ ? d3_geo_compose(d3_geo_rotationλ(δλ), d3_geo_rotationφγ(δφ, δγ)) : d3_geo_rotationλ(δλ) : δφ || δγ ? d3_geo_rotationφγ(δφ, δγ) : d3_geo_identityRotation;
  }
  function d3_geo_forwardRotationλ(δλ) {
    return function(λ, φ) {
      return λ += δλ, [ λ > π ? λ - τ : λ < -π ? λ + τ : λ, φ ];
    };
  }
  function d3_geo_rotationλ(δλ) {
    var rotation = d3_geo_forwardRotationλ(δλ);
    rotation.invert = d3_geo_forwardRotationλ(-δλ);
    return rotation;
  }
  function d3_geo_rotationφγ(δφ, δγ) {
    var cosδφ = Math.cos(δφ), sinδφ = Math.sin(δφ), cosδγ = Math.cos(δγ), sinδγ = Math.sin(δγ);
    function rotation(λ, φ) {
      var cosφ = Math.cos(φ), x = Math.cos(λ) * cosφ, y = Math.sin(λ) * cosφ, z = Math.sin(φ), k = z * cosδφ + x * sinδφ;
      return [ Math.atan2(y * cosδγ - k * sinδγ, x * cosδφ - z * sinδφ), d3_asin(k * cosδγ + y * sinδγ) ];
    }
    rotation.invert = function(λ, φ) {
      var cosφ = Math.cos(φ), x = Math.cos(λ) * cosφ, y = Math.sin(λ) * cosφ, z = Math.sin(φ), k = z * cosδγ - y * sinδγ;
      return [ Math.atan2(y * cosδγ + z * sinδγ, x * cosδφ + k * sinδφ), d3_asin(k * cosδφ - x * sinδφ) ];
    };
    return rotation;
  }
  d3.geo.circle = function() {
    var origin = [ 0, 0 ], angle, precision = 6, interpolate;
    function circle() {
      var center = typeof origin === "function" ? origin.apply(this, arguments) : origin, rotate = d3_geo_rotation(-center[0] * d3_radians, -center[1] * d3_radians, 0).invert, ring = [];
      interpolate(null, null, 1, {
        point: function(x, y) {
          ring.push(x = rotate(x, y));
          x[0] *= d3_degrees, x[1] *= d3_degrees;
        }
      });
      return {
        type: "Polygon",
        coordinates: [ ring ]
      };
    }
    circle.origin = function(x) {
      if (!arguments.length) return origin;
      origin = x;
      return circle;
    };
    circle.angle = function(x) {
      if (!arguments.length) return angle;
      interpolate = d3_geo_circleInterpolate((angle = +x) * d3_radians, precision * d3_radians);
      return circle;
    };
    circle.precision = function(_) {
      if (!arguments.length) return precision;
      interpolate = d3_geo_circleInterpolate(angle * d3_radians, (precision = +_) * d3_radians);
      return circle;
    };
    return circle.angle(90);
  };
  function d3_geo_circleInterpolate(radius, precision) {
    var cr = Math.cos(radius), sr = Math.sin(radius);
    return function(from, to, direction, listener) {
      var step = direction * precision;
      if (from != null) {
        from = d3_geo_circleAngle(cr, from);
        to = d3_geo_circleAngle(cr, to);
        if (direction > 0 ? from < to : from > to) from += direction * τ;
      } else {
        from = radius + direction * τ;
        to = radius - .5 * step;
      }
      for (var point, t = from; direction > 0 ? t > to : t < to; t -= step) {
        listener.point((point = d3_geo_spherical([ cr, -sr * Math.cos(t), -sr * Math.sin(t) ]))[0], point[1]);
      }
    };
  }
  function d3_geo_circleAngle(cr, point) {
    var a = d3_geo_cartesian(point);
    a[0] -= cr;
    d3_geo_cartesianNormalize(a);
    var angle = d3_acos(-a[1]);
    return ((-a[2] < 0 ? -angle : angle) + 2 * Math.PI - ε) % (2 * Math.PI);
  }
  d3.geo.distance = function(a, b) {
    var Δλ = (b[0] - a[0]) * d3_radians, φ0 = a[1] * d3_radians, φ1 = b[1] * d3_radians, sinΔλ = Math.sin(Δλ), cosΔλ = Math.cos(Δλ), sinφ0 = Math.sin(φ0), cosφ0 = Math.cos(φ0), sinφ1 = Math.sin(φ1), cosφ1 = Math.cos(φ1), t;
    return Math.atan2(Math.sqrt((t = cosφ1 * sinΔλ) * t + (t = cosφ0 * sinφ1 - sinφ0 * cosφ1 * cosΔλ) * t), sinφ0 * sinφ1 + cosφ0 * cosφ1 * cosΔλ);
  };
  d3.geo.graticule = function() {
    var x1, x0, X1, X0, y1, y0, Y1, Y0, dx = 10, dy = dx, DX = 90, DY = 360, x, y, X, Y, precision = 2.5;
    function graticule() {
      return {
        type: "MultiLineString",
        coordinates: lines()
      };
    }
    function lines() {
      return d3.range(Math.ceil(X0 / DX) * DX, X1, DX).map(X).concat(d3.range(Math.ceil(Y0 / DY) * DY, Y1, DY).map(Y)).concat(d3.range(Math.ceil(x0 / dx) * dx, x1, dx).filter(function(x) {
        return abs(x % DX) > ε;
      }).map(x)).concat(d3.range(Math.ceil(y0 / dy) * dy, y1, dy).filter(function(y) {
        return abs(y % DY) > ε;
      }).map(y));
    }
    graticule.lines = function() {
      return lines().map(function(coordinates) {
        return {
          type: "LineString",
          coordinates: coordinates
        };
      });
    };
    graticule.outline = function() {
      return {
        type: "Polygon",
        coordinates: [ X(X0).concat(Y(Y1).slice(1), X(X1).reverse().slice(1), Y(Y0).reverse().slice(1)) ]
      };
    };
    graticule.extent = function(_) {
      if (!arguments.length) return graticule.minorExtent();
      return graticule.majorExtent(_).minorExtent(_);
    };
    graticule.majorExtent = function(_) {
      if (!arguments.length) return [ [ X0, Y0 ], [ X1, Y1 ] ];
      X0 = +_[0][0], X1 = +_[1][0];
      Y0 = +_[0][1], Y1 = +_[1][1];
      if (X0 > X1) _ = X0, X0 = X1, X1 = _;
      if (Y0 > Y1) _ = Y0, Y0 = Y1, Y1 = _;
      return graticule.precision(precision);
    };
    graticule.minorExtent = function(_) {
      if (!arguments.length) return [ [ x0, y0 ], [ x1, y1 ] ];
      x0 = +_[0][0], x1 = +_[1][0];
      y0 = +_[0][1], y1 = +_[1][1];
      if (x0 > x1) _ = x0, x0 = x1, x1 = _;
      if (y0 > y1) _ = y0, y0 = y1, y1 = _;
      return graticule.precision(precision);
    };
    graticule.step = function(_) {
      if (!arguments.length) return graticule.minorStep();
      return graticule.majorStep(_).minorStep(_);
    };
    graticule.majorStep = function(_) {
      if (!arguments.length) return [ DX, DY ];
      DX = +_[0], DY = +_[1];
      return graticule;
    };
    graticule.minorStep = function(_) {
      if (!arguments.length) return [ dx, dy ];
      dx = +_[0], dy = +_[1];
      return graticule;
    };
    graticule.precision = function(_) {
      if (!arguments.length) return precision;
      precision = +_;
      x = d3_geo_graticuleX(y0, y1, 90);
      y = d3_geo_graticuleY(x0, x1, precision);
      X = d3_geo_graticuleX(Y0, Y1, 90);
      Y = d3_geo_graticuleY(X0, X1, precision);
      return graticule;
    };
    return graticule.majorExtent([ [ -180, -90 + ε ], [ 180, 90 - ε ] ]).minorExtent([ [ -180, -80 - ε ], [ 180, 80 + ε ] ]);
  };
  function d3_geo_graticuleX(y0, y1, dy) {
    var y = d3.range(y0, y1 - ε, dy).concat(y1);
    return function(x) {
      return y.map(function(y) {
        return [ x, y ];
      });
    };
  }
  function d3_geo_graticuleY(x0, x1, dx) {
    var x = d3.range(x0, x1 - ε, dx).concat(x1);
    return function(y) {
      return x.map(function(x) {
        return [ x, y ];
      });
    };
  }
  function d3_source(d) {
    return d.source;
  }
  function d3_target(d) {
    return d.target;
  }
  d3.geo.greatArc = function() {
    var source = d3_source, source_, target = d3_target, target_;
    function greatArc() {
      return {
        type: "LineString",
        coordinates: [ source_ || source.apply(this, arguments), target_ || target.apply(this, arguments) ]
      };
    }
    greatArc.distance = function() {
      return d3.geo.distance(source_ || source.apply(this, arguments), target_ || target.apply(this, arguments));
    };
    greatArc.source = function(_) {
      if (!arguments.length) return source;
      source = _, source_ = typeof _ === "function" ? null : _;
      return greatArc;
    };
    greatArc.target = function(_) {
      if (!arguments.length) return target;
      target = _, target_ = typeof _ === "function" ? null : _;
      return greatArc;
    };
    greatArc.precision = function() {
      return arguments.length ? greatArc : 0;
    };
    return greatArc;
  };
  d3.geo.interpolate = function(source, target) {
    return d3_geo_interpolate(source[0] * d3_radians, source[1] * d3_radians, target[0] * d3_radians, target[1] * d3_radians);
  };
  function d3_geo_interpolate(x0, y0, x1, y1) {
    var cy0 = Math.cos(y0), sy0 = Math.sin(y0), cy1 = Math.cos(y1), sy1 = Math.sin(y1), kx0 = cy0 * Math.cos(x0), ky0 = cy0 * Math.sin(x0), kx1 = cy1 * Math.cos(x1), ky1 = cy1 * Math.sin(x1), d = 2 * Math.asin(Math.sqrt(d3_haversin(y1 - y0) + cy0 * cy1 * d3_haversin(x1 - x0))), k = 1 / Math.sin(d);
    var interpolate = d ? function(t) {
      var B = Math.sin(t *= d) * k, A = Math.sin(d - t) * k, x = A * kx0 + B * kx1, y = A * ky0 + B * ky1, z = A * sy0 + B * sy1;
      return [ Math.atan2(y, x) * d3_degrees, Math.atan2(z, Math.sqrt(x * x + y * y)) * d3_degrees ];
    } : function() {
      return [ x0 * d3_degrees, y0 * d3_degrees ];
    };
    interpolate.distance = d;
    return interpolate;
  }
  d3.geo.length = function(object) {
    d3_geo_lengthSum = 0;
    d3.geo.stream(object, d3_geo_length);
    return d3_geo_lengthSum;
  };
  var d3_geo_lengthSum;
  var d3_geo_length = {
    sphere: d3_noop,
    point: d3_noop,
    lineStart: d3_geo_lengthLineStart,
    lineEnd: d3_noop,
    polygonStart: d3_noop,
    polygonEnd: d3_noop
  };
  function d3_geo_lengthLineStart() {
    var λ0, sinφ0, cosφ0;
    d3_geo_length.point = function(λ, φ) {
      λ0 = λ * d3_radians, sinφ0 = Math.sin(φ *= d3_radians), cosφ0 = Math.cos(φ);
      d3_geo_length.point = nextPoint;
    };
    d3_geo_length.lineEnd = function() {
      d3_geo_length.point = d3_geo_length.lineEnd = d3_noop;
    };
    function nextPoint(λ, φ) {
      var sinφ = Math.sin(φ *= d3_radians), cosφ = Math.cos(φ), t = abs((λ *= d3_radians) - λ0), cosΔλ = Math.cos(t);
      d3_geo_lengthSum += Math.atan2(Math.sqrt((t = cosφ * Math.sin(t)) * t + (t = cosφ0 * sinφ - sinφ0 * cosφ * cosΔλ) * t), sinφ0 * sinφ + cosφ0 * cosφ * cosΔλ);
      λ0 = λ, sinφ0 = sinφ, cosφ0 = cosφ;
    }
  }
  function d3_geo_azimuthal(scale, angle) {
    function azimuthal(λ, φ) {
      var cosλ = Math.cos(λ), cosφ = Math.cos(φ), k = scale(cosλ * cosφ);
      return [ k * cosφ * Math.sin(λ), k * Math.sin(φ) ];
    }
    azimuthal.invert = function(x, y) {
      var ρ = Math.sqrt(x * x + y * y), c = angle(ρ), sinc = Math.sin(c), cosc = Math.cos(c);
      return [ Math.atan2(x * sinc, ρ * cosc), Math.asin(ρ && y * sinc / ρ) ];
    };
    return azimuthal;
  }
  var d3_geo_azimuthalEqualArea = d3_geo_azimuthal(function(cosλcosφ) {
    return Math.sqrt(2 / (1 + cosλcosφ));
  }, function(ρ) {
    return 2 * Math.asin(ρ / 2);
  });
  (d3.geo.azimuthalEqualArea = function() {
    return d3_geo_projection(d3_geo_azimuthalEqualArea);
  }).raw = d3_geo_azimuthalEqualArea;
  var d3_geo_azimuthalEquidistant = d3_geo_azimuthal(function(cosλcosφ) {
    var c = Math.acos(cosλcosφ);
    return c && c / Math.sin(c);
  }, d3_identity);
  (d3.geo.azimuthalEquidistant = function() {
    return d3_geo_projection(d3_geo_azimuthalEquidistant);
  }).raw = d3_geo_azimuthalEquidistant;
  function d3_geo_conicConformal(φ0, φ1) {
    var cosφ0 = Math.cos(φ0), t = function(φ) {
      return Math.tan(π / 4 + φ / 2);
    }, n = φ0 === φ1 ? Math.sin(φ0) : Math.log(cosφ0 / Math.cos(φ1)) / Math.log(t(φ1) / t(φ0)), F = cosφ0 * Math.pow(t(φ0), n) / n;
    if (!n) return d3_geo_mercator;
    function forward(λ, φ) {
      if (F > 0) {
        if (φ < -halfπ + ε) φ = -halfπ + ε;
      } else {
        if (φ > halfπ - ε) φ = halfπ - ε;
      }
      var ρ = F / Math.pow(t(φ), n);
      return [ ρ * Math.sin(n * λ), F - ρ * Math.cos(n * λ) ];
    }
    forward.invert = function(x, y) {
      var ρ0_y = F - y, ρ = d3_sgn(n) * Math.sqrt(x * x + ρ0_y * ρ0_y);
      return [ Math.atan2(x, ρ0_y) / n, 2 * Math.atan(Math.pow(F / ρ, 1 / n)) - halfπ ];
    };
    return forward;
  }
  (d3.geo.conicConformal = function() {
    return d3_geo_conic(d3_geo_conicConformal);
  }).raw = d3_geo_conicConformal;
  function d3_geo_conicEquidistant(φ0, φ1) {
    var cosφ0 = Math.cos(φ0), n = φ0 === φ1 ? Math.sin(φ0) : (cosφ0 - Math.cos(φ1)) / (φ1 - φ0), G = cosφ0 / n + φ0;
    if (abs(n) < ε) return d3_geo_equirectangular;
    function forward(λ, φ) {
      var ρ = G - φ;
      return [ ρ * Math.sin(n * λ), G - ρ * Math.cos(n * λ) ];
    }
    forward.invert = function(x, y) {
      var ρ0_y = G - y;
      return [ Math.atan2(x, ρ0_y) / n, G - d3_sgn(n) * Math.sqrt(x * x + ρ0_y * ρ0_y) ];
    };
    return forward;
  }
  (d3.geo.conicEquidistant = function() {
    return d3_geo_conic(d3_geo_conicEquidistant);
  }).raw = d3_geo_conicEquidistant;
  var d3_geo_gnomonic = d3_geo_azimuthal(function(cosλcosφ) {
    return 1 / cosλcosφ;
  }, Math.atan);
  (d3.geo.gnomonic = function() {
    return d3_geo_projection(d3_geo_gnomonic);
  }).raw = d3_geo_gnomonic;
  function d3_geo_mercator(λ, φ) {
    return [ λ, Math.log(Math.tan(π / 4 + φ / 2)) ];
  }
  d3_geo_mercator.invert = function(x, y) {
    return [ x, 2 * Math.atan(Math.exp(y)) - halfπ ];
  };
  function d3_geo_mercatorProjection(project) {
    var m = d3_geo_projection(project), scale = m.scale, translate = m.translate, clipExtent = m.clipExtent, clipAuto;
    m.scale = function() {
      var v = scale.apply(m, arguments);
      return v === m ? clipAuto ? m.clipExtent(null) : m : v;
    };
    m.translate = function() {
      var v = translate.apply(m, arguments);
      return v === m ? clipAuto ? m.clipExtent(null) : m : v;
    };
    m.clipExtent = function(_) {
      var v = clipExtent.apply(m, arguments);
      if (v === m) {
        if (clipAuto = _ == null) {
          var k = π * scale(), t = translate();
          clipExtent([ [ t[0] - k, t[1] - k ], [ t[0] + k, t[1] + k ] ]);
        }
      } else if (clipAuto) {
        v = null;
      }
      return v;
    };
    return m.clipExtent(null);
  }
  (d3.geo.mercator = function() {
    return d3_geo_mercatorProjection(d3_geo_mercator);
  }).raw = d3_geo_mercator;
  var d3_geo_orthographic = d3_geo_azimuthal(function() {
    return 1;
  }, Math.asin);
  (d3.geo.orthographic = function() {
    return d3_geo_projection(d3_geo_orthographic);
  }).raw = d3_geo_orthographic;
  var d3_geo_stereographic = d3_geo_azimuthal(function(cosλcosφ) {
    return 1 / (1 + cosλcosφ);
  }, function(ρ) {
    return 2 * Math.atan(ρ);
  });
  (d3.geo.stereographic = function() {
    return d3_geo_projection(d3_geo_stereographic);
  }).raw = d3_geo_stereographic;
  function d3_geo_transverseMercator(λ, φ) {
    return [ Math.log(Math.tan(π / 4 + φ / 2)), -λ ];
  }
  d3_geo_transverseMercator.invert = function(x, y) {
    return [ -y, 2 * Math.atan(Math.exp(x)) - halfπ ];
  };
  (d3.geo.transverseMercator = function() {
    var projection = d3_geo_mercatorProjection(d3_geo_transverseMercator), center = projection.center, rotate = projection.rotate;
    projection.center = function(_) {
      return _ ? center([ -_[1], _[0] ]) : (_ = center(), [ _[1], -_[0] ]);
    };
    projection.rotate = function(_) {
      return _ ? rotate([ _[0], _[1], _.length > 2 ? _[2] + 90 : 90 ]) : (_ = rotate(), 
      [ _[0], _[1], _[2] - 90 ]);
    };
    return rotate([ 0, 0, 90 ]);
  }).raw = d3_geo_transverseMercator;
  d3.geom = {};
  function d3_geom_pointX(d) {
    return d[0];
  }
  function d3_geom_pointY(d) {
    return d[1];
  }
  d3.geom.hull = function(vertices) {
    var x = d3_geom_pointX, y = d3_geom_pointY;
    if (arguments.length) return hull(vertices);
    function hull(data) {
      if (data.length < 3) return [];
      var fx = d3_functor(x), fy = d3_functor(y), i, n = data.length, points = [], flippedPoints = [];
      for (i = 0; i < n; i++) {
        points.push([ +fx.call(this, data[i], i), +fy.call(this, data[i], i), i ]);
      }
      points.sort(d3_geom_hullOrder);
      for (i = 0; i < n; i++) flippedPoints.push([ points[i][0], -points[i][1] ]);
      var upper = d3_geom_hullUpper(points), lower = d3_geom_hullUpper(flippedPoints);
      var skipLeft = lower[0] === upper[0], skipRight = lower[lower.length - 1] === upper[upper.length - 1], polygon = [];
      for (i = upper.length - 1; i >= 0; --i) polygon.push(data[points[upper[i]][2]]);
      for (i = +skipLeft; i < lower.length - skipRight; ++i) polygon.push(data[points[lower[i]][2]]);
      return polygon;
    }
    hull.x = function(_) {
      return arguments.length ? (x = _, hull) : x;
    };
    hull.y = function(_) {
      return arguments.length ? (y = _, hull) : y;
    };
    return hull;
  };
  function d3_geom_hullUpper(points) {
    var n = points.length, hull = [ 0, 1 ], hs = 2;
    for (var i = 2; i < n; i++) {
      while (hs > 1 && d3_cross2d(points[hull[hs - 2]], points[hull[hs - 1]], points[i]) <= 0) --hs;
      hull[hs++] = i;
    }
    return hull.slice(0, hs);
  }
  function d3_geom_hullOrder(a, b) {
    return a[0] - b[0] || a[1] - b[1];
  }
  d3.geom.polygon = function(coordinates) {
    d3_subclass(coordinates, d3_geom_polygonPrototype);
    return coordinates;
  };
  var d3_geom_polygonPrototype = d3.geom.polygon.prototype = [];
  d3_geom_polygonPrototype.area = function() {
    var i = -1, n = this.length, a, b = this[n - 1], area = 0;
    while (++i < n) {
      a = b;
      b = this[i];
      area += a[1] * b[0] - a[0] * b[1];
    }
    return area * .5;
  };
  d3_geom_polygonPrototype.centroid = function(k) {
    var i = -1, n = this.length, x = 0, y = 0, a, b = this[n - 1], c;
    if (!arguments.length) k = -1 / (6 * this.area());
    while (++i < n) {
      a = b;
      b = this[i];
      c = a[0] * b[1] - b[0] * a[1];
      x += (a[0] + b[0]) * c;
      y += (a[1] + b[1]) * c;
    }
    return [ x * k, y * k ];
  };
  d3_geom_polygonPrototype.clip = function(subject) {
    var input, closed = d3_geom_polygonClosed(subject), i = -1, n = this.length - d3_geom_polygonClosed(this), j, m, a = this[n - 1], b, c, d;
    while (++i < n) {
      input = subject.slice();
      subject.length = 0;
      b = this[i];
      c = input[(m = input.length - closed) - 1];
      j = -1;
      while (++j < m) {
        d = input[j];
        if (d3_geom_polygonInside(d, a, b)) {
          if (!d3_geom_polygonInside(c, a, b)) {
            subject.push(d3_geom_polygonIntersect(c, d, a, b));
          }
          subject.push(d);
        } else if (d3_geom_polygonInside(c, a, b)) {
          subject.push(d3_geom_polygonIntersect(c, d, a, b));
        }
        c = d;
      }
      if (closed) subject.push(subject[0]);
      a = b;
    }
    return subject;
  };
  function d3_geom_polygonInside(p, a, b) {
    return (b[0] - a[0]) * (p[1] - a[1]) < (b[1] - a[1]) * (p[0] - a[0]);
  }
  function d3_geom_polygonIntersect(c, d, a, b) {
    var x1 = c[0], x3 = a[0], x21 = d[0] - x1, x43 = b[0] - x3, y1 = c[1], y3 = a[1], y21 = d[1] - y1, y43 = b[1] - y3, ua = (x43 * (y1 - y3) - y43 * (x1 - x3)) / (y43 * x21 - x43 * y21);
    return [ x1 + ua * x21, y1 + ua * y21 ];
  }
  function d3_geom_polygonClosed(coordinates) {
    var a = coordinates[0], b = coordinates[coordinates.length - 1];
    return !(a[0] - b[0] || a[1] - b[1]);
  }
  var d3_geom_voronoiEdges, d3_geom_voronoiCells, d3_geom_voronoiBeaches, d3_geom_voronoiBeachPool = [], d3_geom_voronoiFirstCircle, d3_geom_voronoiCircles, d3_geom_voronoiCirclePool = [];
  function d3_geom_voronoiBeach() {
    d3_geom_voronoiRedBlackNode(this);
    this.edge = this.site = this.circle = null;
  }
  function d3_geom_voronoiCreateBeach(site) {
    var beach = d3_geom_voronoiBeachPool.pop() || new d3_geom_voronoiBeach();
    beach.site = site;
    return beach;
  }
  function d3_geom_voronoiDetachBeach(beach) {
    d3_geom_voronoiDetachCircle(beach);
    d3_geom_voronoiBeaches.remove(beach);
    d3_geom_voronoiBeachPool.push(beach);
    d3_geom_voronoiRedBlackNode(beach);
  }
  function d3_geom_voronoiRemoveBeach(beach) {
    var circle = beach.circle, x = circle.x, y = circle.cy, vertex = {
      x: x,
      y: y
    }, previous = beach.P, next = beach.N, disappearing = [ beach ];
    d3_geom_voronoiDetachBeach(beach);
    var lArc = previous;
    while (lArc.circle && abs(x - lArc.circle.x) < ε && abs(y - lArc.circle.cy) < ε) {
      previous = lArc.P;
      disappearing.unshift(lArc);
      d3_geom_voronoiDetachBeach(lArc);
      lArc = previous;
    }
    disappearing.unshift(lArc);
    d3_geom_voronoiDetachCircle(lArc);
    var rArc = next;
    while (rArc.circle && abs(x - rArc.circle.x) < ε && abs(y - rArc.circle.cy) < ε) {
      next = rArc.N;
      disappearing.push(rArc);
      d3_geom_voronoiDetachBeach(rArc);
      rArc = next;
    }
    disappearing.push(rArc);
    d3_geom_voronoiDetachCircle(rArc);
    var nArcs = disappearing.length, iArc;
    for (iArc = 1; iArc < nArcs; ++iArc) {
      rArc = disappearing[iArc];
      lArc = disappearing[iArc - 1];
      d3_geom_voronoiSetEdgeEnd(rArc.edge, lArc.site, rArc.site, vertex);
    }
    lArc = disappearing[0];
    rArc = disappearing[nArcs - 1];
    rArc.edge = d3_geom_voronoiCreateEdge(lArc.site, rArc.site, null, vertex);
    d3_geom_voronoiAttachCircle(lArc);
    d3_geom_voronoiAttachCircle(rArc);
  }
  function d3_geom_voronoiAddBeach(site) {
    var x = site.x, directrix = site.y, lArc, rArc, dxl, dxr, node = d3_geom_voronoiBeaches._;
    while (node) {
      dxl = d3_geom_voronoiLeftBreakPoint(node, directrix) - x;
      if (dxl > ε) node = node.L; else {
        dxr = x - d3_geom_voronoiRightBreakPoint(node, directrix);
        if (dxr > ε) {
          if (!node.R) {
            lArc = node;
            break;
          }
          node = node.R;
        } else {
          if (dxl > -ε) {
            lArc = node.P;
            rArc = node;
          } else if (dxr > -ε) {
            lArc = node;
            rArc = node.N;
          } else {
            lArc = rArc = node;
          }
          break;
        }
      }
    }
    var newArc = d3_geom_voronoiCreateBeach(site);
    d3_geom_voronoiBeaches.insert(lArc, newArc);
    if (!lArc && !rArc) return;
    if (lArc === rArc) {
      d3_geom_voronoiDetachCircle(lArc);
      rArc = d3_geom_voronoiCreateBeach(lArc.site);
      d3_geom_voronoiBeaches.insert(newArc, rArc);
      newArc.edge = rArc.edge = d3_geom_voronoiCreateEdge(lArc.site, newArc.site);
      d3_geom_voronoiAttachCircle(lArc);
      d3_geom_voronoiAttachCircle(rArc);
      return;
    }
    if (!rArc) {
      newArc.edge = d3_geom_voronoiCreateEdge(lArc.site, newArc.site);
      return;
    }
    d3_geom_voronoiDetachCircle(lArc);
    d3_geom_voronoiDetachCircle(rArc);
    var lSite = lArc.site, ax = lSite.x, ay = lSite.y, bx = site.x - ax, by = site.y - ay, rSite = rArc.site, cx = rSite.x - ax, cy = rSite.y - ay, d = 2 * (bx * cy - by * cx), hb = bx * bx + by * by, hc = cx * cx + cy * cy, vertex = {
      x: (cy * hb - by * hc) / d + ax,
      y: (bx * hc - cx * hb) / d + ay
    };
    d3_geom_voronoiSetEdgeEnd(rArc.edge, lSite, rSite, vertex);
    newArc.edge = d3_geom_voronoiCreateEdge(lSite, site, null, vertex);
    rArc.edge = d3_geom_voronoiCreateEdge(site, rSite, null, vertex);
    d3_geom_voronoiAttachCircle(lArc);
    d3_geom_voronoiAttachCircle(rArc);
  }
  function d3_geom_voronoiLeftBreakPoint(arc, directrix) {
    var site = arc.site, rfocx = site.x, rfocy = site.y, pby2 = rfocy - directrix;
    if (!pby2) return rfocx;
    var lArc = arc.P;
    if (!lArc) return -Infinity;
    site = lArc.site;
    var lfocx = site.x, lfocy = site.y, plby2 = lfocy - directrix;
    if (!plby2) return lfocx;
    var hl = lfocx - rfocx, aby2 = 1 / pby2 - 1 / plby2, b = hl / plby2;
    if (aby2) return (-b + Math.sqrt(b * b - 2 * aby2 * (hl * hl / (-2 * plby2) - lfocy + plby2 / 2 + rfocy - pby2 / 2))) / aby2 + rfocx;
    return (rfocx + lfocx) / 2;
  }
  function d3_geom_voronoiRightBreakPoint(arc, directrix) {
    var rArc = arc.N;
    if (rArc) return d3_geom_voronoiLeftBreakPoint(rArc, directrix);
    var site = arc.site;
    return site.y === directrix ? site.x : Infinity;
  }
  function d3_geom_voronoiCell(site) {
    this.site = site;
    this.edges = [];
  }
  d3_geom_voronoiCell.prototype.prepare = function() {
    var halfEdges = this.edges, iHalfEdge = halfEdges.length, edge;
    while (iHalfEdge--) {
      edge = halfEdges[iHalfEdge].edge;
      if (!edge.b || !edge.a) halfEdges.splice(iHalfEdge, 1);
    }
    halfEdges.sort(d3_geom_voronoiHalfEdgeOrder);
    return halfEdges.length;
  };
  function d3_geom_voronoiCloseCells(extent) {
    var x0 = extent[0][0], x1 = extent[1][0], y0 = extent[0][1], y1 = extent[1][1], x2, y2, x3, y3, cells = d3_geom_voronoiCells, iCell = cells.length, cell, iHalfEdge, halfEdges, nHalfEdges, start, end;
    while (iCell--) {
      cell = cells[iCell];
      if (!cell || !cell.prepare()) continue;
      halfEdges = cell.edges;
      nHalfEdges = halfEdges.length;
      iHalfEdge = 0;
      while (iHalfEdge < nHalfEdges) {
        end = halfEdges[iHalfEdge].end(), x3 = end.x, y3 = end.y;
        start = halfEdges[++iHalfEdge % nHalfEdges].start(), x2 = start.x, y2 = start.y;
        if (abs(x3 - x2) > ε || abs(y3 - y2) > ε) {
          halfEdges.splice(iHalfEdge, 0, new d3_geom_voronoiHalfEdge(d3_geom_voronoiCreateBorderEdge(cell.site, end, abs(x3 - x0) < ε && y1 - y3 > ε ? {
            x: x0,
            y: abs(x2 - x0) < ε ? y2 : y1
          } : abs(y3 - y1) < ε && x1 - x3 > ε ? {
            x: abs(y2 - y1) < ε ? x2 : x1,
            y: y1
          } : abs(x3 - x1) < ε && y3 - y0 > ε ? {
            x: x1,
            y: abs(x2 - x1) < ε ? y2 : y0
          } : abs(y3 - y0) < ε && x3 - x0 > ε ? {
            x: abs(y2 - y0) < ε ? x2 : x0,
            y: y0
          } : null), cell.site, null));
          ++nHalfEdges;
        }
      }
    }
  }
  function d3_geom_voronoiHalfEdgeOrder(a, b) {
    return b.angle - a.angle;
  }
  function d3_geom_voronoiCircle() {
    d3_geom_voronoiRedBlackNode(this);
    this.x = this.y = this.arc = this.site = this.cy = null;
  }
  function d3_geom_voronoiAttachCircle(arc) {
    var lArc = arc.P, rArc = arc.N;
    if (!lArc || !rArc) return;
    var lSite = lArc.site, cSite = arc.site, rSite = rArc.site;
    if (lSite === rSite) return;
    var bx = cSite.x, by = cSite.y, ax = lSite.x - bx, ay = lSite.y - by, cx = rSite.x - bx, cy = rSite.y - by;
    var d = 2 * (ax * cy - ay * cx);
    if (d >= -ε2) return;
    var ha = ax * ax + ay * ay, hc = cx * cx + cy * cy, x = (cy * ha - ay * hc) / d, y = (ax * hc - cx * ha) / d, cy = y + by;
    var circle = d3_geom_voronoiCirclePool.pop() || new d3_geom_voronoiCircle();
    circle.arc = arc;
    circle.site = cSite;
    circle.x = x + bx;
    circle.y = cy + Math.sqrt(x * x + y * y);
    circle.cy = cy;
    arc.circle = circle;
    var before = null, node = d3_geom_voronoiCircles._;
    while (node) {
      if (circle.y < node.y || circle.y === node.y && circle.x <= node.x) {
        if (node.L) node = node.L; else {
          before = node.P;
          break;
        }
      } else {
        if (node.R) node = node.R; else {
          before = node;
          break;
        }
      }
    }
    d3_geom_voronoiCircles.insert(before, circle);
    if (!before) d3_geom_voronoiFirstCircle = circle;
  }
  function d3_geom_voronoiDetachCircle(arc) {
    var circle = arc.circle;
    if (circle) {
      if (!circle.P) d3_geom_voronoiFirstCircle = circle.N;
      d3_geom_voronoiCircles.remove(circle);
      d3_geom_voronoiCirclePool.push(circle);
      d3_geom_voronoiRedBlackNode(circle);
      arc.circle = null;
    }
  }
  function d3_geom_voronoiClipEdges(extent) {
    var edges = d3_geom_voronoiEdges, clip = d3_geom_clipLine(extent[0][0], extent[0][1], extent[1][0], extent[1][1]), i = edges.length, e;
    while (i--) {
      e = edges[i];
      if (!d3_geom_voronoiConnectEdge(e, extent) || !clip(e) || abs(e.a.x - e.b.x) < ε && abs(e.a.y - e.b.y) < ε) {
        e.a = e.b = null;
        edges.splice(i, 1);
      }
    }
  }
  function d3_geom_voronoiConnectEdge(edge, extent) {
    var vb = edge.b;
    if (vb) return true;
    var va = edge.a, x0 = extent[0][0], x1 = extent[1][0], y0 = extent[0][1], y1 = extent[1][1], lSite = edge.l, rSite = edge.r, lx = lSite.x, ly = lSite.y, rx = rSite.x, ry = rSite.y, fx = (lx + rx) / 2, fy = (ly + ry) / 2, fm, fb;
    if (ry === ly) {
      if (fx < x0 || fx >= x1) return;
      if (lx > rx) {
        if (!va) va = {
          x: fx,
          y: y0
        }; else if (va.y >= y1) return;
        vb = {
          x: fx,
          y: y1
        };
      } else {
        if (!va) va = {
          x: fx,
          y: y1
        }; else if (va.y < y0) return;
        vb = {
          x: fx,
          y: y0
        };
      }
    } else {
      fm = (lx - rx) / (ry - ly);
      fb = fy - fm * fx;
      if (fm < -1 || fm > 1) {
        if (lx > rx) {
          if (!va) va = {
            x: (y0 - fb) / fm,
            y: y0
          }; else if (va.y >= y1) return;
          vb = {
            x: (y1 - fb) / fm,
            y: y1
          };
        } else {
          if (!va) va = {
            x: (y1 - fb) / fm,
            y: y1
          }; else if (va.y < y0) return;
          vb = {
            x: (y0 - fb) / fm,
            y: y0
          };
        }
      } else {
        if (ly < ry) {
          if (!va) va = {
            x: x0,
            y: fm * x0 + fb
          }; else if (va.x >= x1) return;
          vb = {
            x: x1,
            y: fm * x1 + fb
          };
        } else {
          if (!va) va = {
            x: x1,
            y: fm * x1 + fb
          }; else if (va.x < x0) return;
          vb = {
            x: x0,
            y: fm * x0 + fb
          };
        }
      }
    }
    edge.a = va;
    edge.b = vb;
    return true;
  }
  function d3_geom_voronoiEdge(lSite, rSite) {
    this.l = lSite;
    this.r = rSite;
    this.a = this.b = null;
  }
  function d3_geom_voronoiCreateEdge(lSite, rSite, va, vb) {
    var edge = new d3_geom_voronoiEdge(lSite, rSite);
    d3_geom_voronoiEdges.push(edge);
    if (va) d3_geom_voronoiSetEdgeEnd(edge, lSite, rSite, va);
    if (vb) d3_geom_voronoiSetEdgeEnd(edge, rSite, lSite, vb);
    d3_geom_voronoiCells[lSite.i].edges.push(new d3_geom_voronoiHalfEdge(edge, lSite, rSite));
    d3_geom_voronoiCells[rSite.i].edges.push(new d3_geom_voronoiHalfEdge(edge, rSite, lSite));
    return edge;
  }
  function d3_geom_voronoiCreateBorderEdge(lSite, va, vb) {
    var edge = new d3_geom_voronoiEdge(lSite, null);
    edge.a = va;
    edge.b = vb;
    d3_geom_voronoiEdges.push(edge);
    return edge;
  }
  function d3_geom_voronoiSetEdgeEnd(edge, lSite, rSite, vertex) {
    if (!edge.a && !edge.b) {
      edge.a = vertex;
      edge.l = lSite;
      edge.r = rSite;
    } else if (edge.l === rSite) {
      edge.b = vertex;
    } else {
      edge.a = vertex;
    }
  }
  function d3_geom_voronoiHalfEdge(edge, lSite, rSite) {
    var va = edge.a, vb = edge.b;
    this.edge = edge;
    this.site = lSite;
    this.angle = rSite ? Math.atan2(rSite.y - lSite.y, rSite.x - lSite.x) : edge.l === lSite ? Math.atan2(vb.x - va.x, va.y - vb.y) : Math.atan2(va.x - vb.x, vb.y - va.y);
  }
  d3_geom_voronoiHalfEdge.prototype = {
    start: function() {
      return this.edge.l === this.site ? this.edge.a : this.edge.b;
    },
    end: function() {
      return this.edge.l === this.site ? this.edge.b : this.edge.a;
    }
  };
  function d3_geom_voronoiRedBlackTree() {
    this._ = null;
  }
  function d3_geom_voronoiRedBlackNode(node) {
    node.U = node.C = node.L = node.R = node.P = node.N = null;
  }
  d3_geom_voronoiRedBlackTree.prototype = {
    insert: function(after, node) {
      var parent, grandpa, uncle;
      if (after) {
        node.P = after;
        node.N = after.N;
        if (after.N) after.N.P = node;
        after.N = node;
        if (after.R) {
          after = after.R;
          while (after.L) after = after.L;
          after.L = node;
        } else {
          after.R = node;
        }
        parent = after;
      } else if (this._) {
        after = d3_geom_voronoiRedBlackFirst(this._);
        node.P = null;
        node.N = after;
        after.P = after.L = node;
        parent = after;
      } else {
        node.P = node.N = null;
        this._ = node;
        parent = null;
      }
      node.L = node.R = null;
      node.U = parent;
      node.C = true;
      after = node;
      while (parent && parent.C) {
        grandpa = parent.U;
        if (parent === grandpa.L) {
          uncle = grandpa.R;
          if (uncle && uncle.C) {
            parent.C = uncle.C = false;
            grandpa.C = true;
            after = grandpa;
          } else {
            if (after === parent.R) {
              d3_geom_voronoiRedBlackRotateLeft(this, parent);
              after = parent;
              parent = after.U;
            }
            parent.C = false;
            grandpa.C = true;
            d3_geom_voronoiRedBlackRotateRight(this, grandpa);
          }
        } else {
          uncle = grandpa.L;
          if (uncle && uncle.C) {
            parent.C = uncle.C = false;
            grandpa.C = true;
            after = grandpa;
          } else {
            if (after === parent.L) {
              d3_geom_voronoiRedBlackRotateRight(this, parent);
              after = parent;
              parent = after.U;
            }
            parent.C = false;
            grandpa.C = true;
            d3_geom_voronoiRedBlackRotateLeft(this, grandpa);
          }
        }
        parent = after.U;
      }
      this._.C = false;
    },
    remove: function(node) {
      if (node.N) node.N.P = node.P;
      if (node.P) node.P.N = node.N;
      node.N = node.P = null;
      var parent = node.U, sibling, left = node.L, right = node.R, next, red;
      if (!left) next = right; else if (!right) next = left; else next = d3_geom_voronoiRedBlackFirst(right);
      if (parent) {
        if (parent.L === node) parent.L = next; else parent.R = next;
      } else {
        this._ = next;
      }
      if (left && right) {
        red = next.C;
        next.C = node.C;
        next.L = left;
        left.U = next;
        if (next !== right) {
          parent = next.U;
          next.U = node.U;
          node = next.R;
          parent.L = node;
          next.R = right;
          right.U = next;
        } else {
          next.U = parent;
          parent = next;
          node = next.R;
        }
      } else {
        red = node.C;
        node = next;
      }
      if (node) node.U = parent;
      if (red) return;
      if (node && node.C) {
        node.C = false;
        return;
      }
      do {
        if (node === this._) break;
        if (node === parent.L) {
          sibling = parent.R;
          if (sibling.C) {
            sibling.C = false;
            parent.C = true;
            d3_geom_voronoiRedBlackRotateLeft(this, parent);
            sibling = parent.R;
          }
          if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
            if (!sibling.R || !sibling.R.C) {
              sibling.L.C = false;
              sibling.C = true;
              d3_geom_voronoiRedBlackRotateRight(this, sibling);
              sibling = parent.R;
            }
            sibling.C = parent.C;
            parent.C = sibling.R.C = false;
            d3_geom_voronoiRedBlackRotateLeft(this, parent);
            node = this._;
            break;
          }
        } else {
          sibling = parent.L;
          if (sibling.C) {
            sibling.C = false;
            parent.C = true;
            d3_geom_voronoiRedBlackRotateRight(this, parent);
            sibling = parent.L;
          }
          if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
            if (!sibling.L || !sibling.L.C) {
              sibling.R.C = false;
              sibling.C = true;
              d3_geom_voronoiRedBlackRotateLeft(this, sibling);
              sibling = parent.L;
            }
            sibling.C = parent.C;
            parent.C = sibling.L.C = false;
            d3_geom_voronoiRedBlackRotateRight(this, parent);
            node = this._;
            break;
          }
        }
        sibling.C = true;
        node = parent;
        parent = parent.U;
      } while (!node.C);
      if (node) node.C = false;
    }
  };
  function d3_geom_voronoiRedBlackRotateLeft(tree, node) {
    var p = node, q = node.R, parent = p.U;
    if (parent) {
      if (parent.L === p) parent.L = q; else parent.R = q;
    } else {
      tree._ = q;
    }
    q.U = parent;
    p.U = q;
    p.R = q.L;
    if (p.R) p.R.U = p;
    q.L = p;
  }
  function d3_geom_voronoiRedBlackRotateRight(tree, node) {
    var p = node, q = node.L, parent = p.U;
    if (parent) {
      if (parent.L === p) parent.L = q; else parent.R = q;
    } else {
      tree._ = q;
    }
    q.U = parent;
    p.U = q;
    p.L = q.R;
    if (p.L) p.L.U = p;
    q.R = p;
  }
  function d3_geom_voronoiRedBlackFirst(node) {
    while (node.L) node = node.L;
    return node;
  }
  function d3_geom_voronoi(sites, bbox) {
    var site = sites.sort(d3_geom_voronoiVertexOrder).pop(), x0, y0, circle;
    d3_geom_voronoiEdges = [];
    d3_geom_voronoiCells = new Array(sites.length);
    d3_geom_voronoiBeaches = new d3_geom_voronoiRedBlackTree();
    d3_geom_voronoiCircles = new d3_geom_voronoiRedBlackTree();
    while (true) {
      circle = d3_geom_voronoiFirstCircle;
      if (site && (!circle || site.y < circle.y || site.y === circle.y && site.x < circle.x)) {
        if (site.x !== x0 || site.y !== y0) {
          d3_geom_voronoiCells[site.i] = new d3_geom_voronoiCell(site);
          d3_geom_voronoiAddBeach(site);
          x0 = site.x, y0 = site.y;
        }
        site = sites.pop();
      } else if (circle) {
        d3_geom_voronoiRemoveBeach(circle.arc);
      } else {
        break;
      }
    }
    if (bbox) d3_geom_voronoiClipEdges(bbox), d3_geom_voronoiCloseCells(bbox);
    var diagram = {
      cells: d3_geom_voronoiCells,
      edges: d3_geom_voronoiEdges
    };
    d3_geom_voronoiBeaches = d3_geom_voronoiCircles = d3_geom_voronoiEdges = d3_geom_voronoiCells = null;
    return diagram;
  }
  function d3_geom_voronoiVertexOrder(a, b) {
    return b.y - a.y || b.x - a.x;
  }
  d3.geom.voronoi = function(points) {
    var x = d3_geom_pointX, y = d3_geom_pointY, fx = x, fy = y, clipExtent = d3_geom_voronoiClipExtent;
    if (points) return voronoi(points);
    function voronoi(data) {
      var polygons = new Array(data.length), x0 = clipExtent[0][0], y0 = clipExtent[0][1], x1 = clipExtent[1][0], y1 = clipExtent[1][1];
      d3_geom_voronoi(sites(data), clipExtent).cells.forEach(function(cell, i) {
        var edges = cell.edges, site = cell.site, polygon = polygons[i] = edges.length ? edges.map(function(e) {
          var s = e.start();
          return [ s.x, s.y ];
        }) : site.x >= x0 && site.x <= x1 && site.y >= y0 && site.y <= y1 ? [ [ x0, y1 ], [ x1, y1 ], [ x1, y0 ], [ x0, y0 ] ] : [];
        polygon.point = data[i];
      });
      return polygons;
    }
    function sites(data) {
      return data.map(function(d, i) {
        return {
          x: Math.round(fx(d, i) / ε) * ε,
          y: Math.round(fy(d, i) / ε) * ε,
          i: i
        };
      });
    }
    voronoi.links = function(data) {
      return d3_geom_voronoi(sites(data)).edges.filter(function(edge) {
        return edge.l && edge.r;
      }).map(function(edge) {
        return {
          source: data[edge.l.i],
          target: data[edge.r.i]
        };
      });
    };
    voronoi.triangles = function(data) {
      var triangles = [];
      d3_geom_voronoi(sites(data)).cells.forEach(function(cell, i) {
        var site = cell.site, edges = cell.edges.sort(d3_geom_voronoiHalfEdgeOrder), j = -1, m = edges.length, e0, s0, e1 = edges[m - 1].edge, s1 = e1.l === site ? e1.r : e1.l;
        while (++j < m) {
          e0 = e1;
          s0 = s1;
          e1 = edges[j].edge;
          s1 = e1.l === site ? e1.r : e1.l;
          if (i < s0.i && i < s1.i && d3_geom_voronoiTriangleArea(site, s0, s1) < 0) {
            triangles.push([ data[i], data[s0.i], data[s1.i] ]);
          }
        }
      });
      return triangles;
    };
    voronoi.x = function(_) {
      return arguments.length ? (fx = d3_functor(x = _), voronoi) : x;
    };
    voronoi.y = function(_) {
      return arguments.length ? (fy = d3_functor(y = _), voronoi) : y;
    };
    voronoi.clipExtent = function(_) {
      if (!arguments.length) return clipExtent === d3_geom_voronoiClipExtent ? null : clipExtent;
      clipExtent = _ == null ? d3_geom_voronoiClipExtent : _;
      return voronoi;
    };
    voronoi.size = function(_) {
      if (!arguments.length) return clipExtent === d3_geom_voronoiClipExtent ? null : clipExtent && clipExtent[1];
      return voronoi.clipExtent(_ && [ [ 0, 0 ], _ ]);
    };
    return voronoi;
  };
  var d3_geom_voronoiClipExtent = [ [ -1e6, -1e6 ], [ 1e6, 1e6 ] ];
  function d3_geom_voronoiTriangleArea(a, b, c) {
    return (a.x - c.x) * (b.y - a.y) - (a.x - b.x) * (c.y - a.y);
  }
  d3.geom.delaunay = function(vertices) {
    return d3.geom.voronoi().triangles(vertices);
  };
  d3.geom.quadtree = function(points, x1, y1, x2, y2) {
    var x = d3_geom_pointX, y = d3_geom_pointY, compat;
    if (compat = arguments.length) {
      x = d3_geom_quadtreeCompatX;
      y = d3_geom_quadtreeCompatY;
      if (compat === 3) {
        y2 = y1;
        x2 = x1;
        y1 = x1 = 0;
      }
      return quadtree(points);
    }
    function quadtree(data) {
      var d, fx = d3_functor(x), fy = d3_functor(y), xs, ys, i, n, x1_, y1_, x2_, y2_;
      if (x1 != null) {
        x1_ = x1, y1_ = y1, x2_ = x2, y2_ = y2;
      } else {
        x2_ = y2_ = -(x1_ = y1_ = Infinity);
        xs = [], ys = [];
        n = data.length;
        if (compat) for (i = 0; i < n; ++i) {
          d = data[i];
          if (d.x < x1_) x1_ = d.x;
          if (d.y < y1_) y1_ = d.y;
          if (d.x > x2_) x2_ = d.x;
          if (d.y > y2_) y2_ = d.y;
          xs.push(d.x);
          ys.push(d.y);
        } else for (i = 0; i < n; ++i) {
          var x_ = +fx(d = data[i], i), y_ = +fy(d, i);
          if (x_ < x1_) x1_ = x_;
          if (y_ < y1_) y1_ = y_;
          if (x_ > x2_) x2_ = x_;
          if (y_ > y2_) y2_ = y_;
          xs.push(x_);
          ys.push(y_);
        }
      }
      var dx = x2_ - x1_, dy = y2_ - y1_;
      if (dx > dy) y2_ = y1_ + dx; else x2_ = x1_ + dy;
      function insert(n, d, x, y, x1, y1, x2, y2) {
        if (isNaN(x) || isNaN(y)) return;
        if (n.leaf) {
          var nx = n.x, ny = n.y;
          if (nx != null) {
            if (abs(nx - x) + abs(ny - y) < .01) {
              insertChild(n, d, x, y, x1, y1, x2, y2);
            } else {
              var nPoint = n.point;
              n.x = n.y = n.point = null;
              insertChild(n, nPoint, nx, ny, x1, y1, x2, y2);
              insertChild(n, d, x, y, x1, y1, x2, y2);
            }
          } else {
            n.x = x, n.y = y, n.point = d;
          }
        } else {
          insertChild(n, d, x, y, x1, y1, x2, y2);
        }
      }
      function insertChild(n, d, x, y, x1, y1, x2, y2) {
        var xm = (x1 + x2) * .5, ym = (y1 + y2) * .5, right = x >= xm, below = y >= ym, i = below << 1 | right;
        n.leaf = false;
        n = n.nodes[i] || (n.nodes[i] = d3_geom_quadtreeNode());
        if (right) x1 = xm; else x2 = xm;
        if (below) y1 = ym; else y2 = ym;
        insert(n, d, x, y, x1, y1, x2, y2);
      }
      var root = d3_geom_quadtreeNode();
      root.add = function(d) {
        insert(root, d, +fx(d, ++i), +fy(d, i), x1_, y1_, x2_, y2_);
      };
      root.visit = function(f) {
        d3_geom_quadtreeVisit(f, root, x1_, y1_, x2_, y2_);
      };
      root.find = function(point) {
        return d3_geom_quadtreeFind(root, point[0], point[1], x1_, y1_, x2_, y2_);
      };
      i = -1;
      if (x1 == null) {
        while (++i < n) {
          insert(root, data[i], xs[i], ys[i], x1_, y1_, x2_, y2_);
        }
        --i;
      } else data.forEach(root.add);
      xs = ys = data = d = null;
      return root;
    }
    quadtree.x = function(_) {
      return arguments.length ? (x = _, quadtree) : x;
    };
    quadtree.y = function(_) {
      return arguments.length ? (y = _, quadtree) : y;
    };
    quadtree.extent = function(_) {
      if (!arguments.length) return x1 == null ? null : [ [ x1, y1 ], [ x2, y2 ] ];
      if (_ == null) x1 = y1 = x2 = y2 = null; else x1 = +_[0][0], y1 = +_[0][1], x2 = +_[1][0], 
      y2 = +_[1][1];
      return quadtree;
    };
    quadtree.size = function(_) {
      if (!arguments.length) return x1 == null ? null : [ x2 - x1, y2 - y1 ];
      if (_ == null) x1 = y1 = x2 = y2 = null; else x1 = y1 = 0, x2 = +_[0], y2 = +_[1];
      return quadtree;
    };
    return quadtree;
  };
  function d3_geom_quadtreeCompatX(d) {
    return d.x;
  }
  function d3_geom_quadtreeCompatY(d) {
    return d.y;
  }
  function d3_geom_quadtreeNode() {
    return {
      leaf: true,
      nodes: [],
      point: null,
      x: null,
      y: null
    };
  }
  function d3_geom_quadtreeVisit(f, node, x1, y1, x2, y2) {
    if (!f(node, x1, y1, x2, y2)) {
      var sx = (x1 + x2) * .5, sy = (y1 + y2) * .5, children = node.nodes;
      if (children[0]) d3_geom_quadtreeVisit(f, children[0], x1, y1, sx, sy);
      if (children[1]) d3_geom_quadtreeVisit(f, children[1], sx, y1, x2, sy);
      if (children[2]) d3_geom_quadtreeVisit(f, children[2], x1, sy, sx, y2);
      if (children[3]) d3_geom_quadtreeVisit(f, children[3], sx, sy, x2, y2);
    }
  }
  function d3_geom_quadtreeFind(root, x, y, x0, y0, x3, y3) {
    var minDistance2 = Infinity, closestPoint;
    (function find(node, x1, y1, x2, y2) {
      if (x1 > x3 || y1 > y3 || x2 < x0 || y2 < y0) return;
      if (point = node.point) {
        var point, dx = x - node.x, dy = y - node.y, distance2 = dx * dx + dy * dy;
        if (distance2 < minDistance2) {
          var distance = Math.sqrt(minDistance2 = distance2);
          x0 = x - distance, y0 = y - distance;
          x3 = x + distance, y3 = y + distance;
          closestPoint = point;
        }
      }
      var children = node.nodes, xm = (x1 + x2) * .5, ym = (y1 + y2) * .5, right = x >= xm, below = y >= ym;
      for (var i = below << 1 | right, j = i + 4; i < j; ++i) {
        if (node = children[i & 3]) switch (i & 3) {
         case 0:
          find(node, x1, y1, xm, ym);
          break;

         case 1:
          find(node, xm, y1, x2, ym);
          break;

         case 2:
          find(node, x1, ym, xm, y2);
          break;

         case 3:
          find(node, xm, ym, x2, y2);
          break;
        }
      }
    })(root, x0, y0, x3, y3);
    return closestPoint;
  }
  d3.interpolateRgb = d3_interpolateRgb;
  function d3_interpolateRgb(a, b) {
    a = d3.rgb(a);
    b = d3.rgb(b);
    var ar = a.r, ag = a.g, ab = a.b, br = b.r - ar, bg = b.g - ag, bb = b.b - ab;
    return function(t) {
      return "#" + d3_rgb_hex(Math.round(ar + br * t)) + d3_rgb_hex(Math.round(ag + bg * t)) + d3_rgb_hex(Math.round(ab + bb * t));
    };
  }
  d3.interpolateObject = d3_interpolateObject;
  function d3_interpolateObject(a, b) {
    var i = {}, c = {}, k;
    for (k in a) {
      if (k in b) {
        i[k] = d3_interpolate(a[k], b[k]);
      } else {
        c[k] = a[k];
      }
    }
    for (k in b) {
      if (!(k in a)) {
        c[k] = b[k];
      }
    }
    return function(t) {
      for (k in i) c[k] = i[k](t);
      return c;
    };
  }
  d3.interpolateNumber = d3_interpolateNumber;
  function d3_interpolateNumber(a, b) {
    a = +a, b = +b;
    return function(t) {
      return a * (1 - t) + b * t;
    };
  }
  d3.interpolateString = d3_interpolateString;
  function d3_interpolateString(a, b) {
    var bi = d3_interpolate_numberA.lastIndex = d3_interpolate_numberB.lastIndex = 0, am, bm, bs, i = -1, s = [], q = [];
    a = a + "", b = b + "";
    while ((am = d3_interpolate_numberA.exec(a)) && (bm = d3_interpolate_numberB.exec(b))) {
      if ((bs = bm.index) > bi) {
        bs = b.slice(bi, bs);
        if (s[i]) s[i] += bs; else s[++i] = bs;
      }
      if ((am = am[0]) === (bm = bm[0])) {
        if (s[i]) s[i] += bm; else s[++i] = bm;
      } else {
        s[++i] = null;
        q.push({
          i: i,
          x: d3_interpolateNumber(am, bm)
        });
      }
      bi = d3_interpolate_numberB.lastIndex;
    }
    if (bi < b.length) {
      bs = b.slice(bi);
      if (s[i]) s[i] += bs; else s[++i] = bs;
    }
    return s.length < 2 ? q[0] ? (b = q[0].x, function(t) {
      return b(t) + "";
    }) : function() {
      return b;
    } : (b = q.length, function(t) {
      for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    });
  }
  var d3_interpolate_numberA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, d3_interpolate_numberB = new RegExp(d3_interpolate_numberA.source, "g");
  d3.interpolate = d3_interpolate;
  function d3_interpolate(a, b) {
    var i = d3.interpolators.length, f;
    while (--i >= 0 && !(f = d3.interpolators[i](a, b))) ;
    return f;
  }
  d3.interpolators = [ function(a, b) {
    var t = typeof b;
    return (t === "string" ? d3_rgb_names.has(b.toLowerCase()) || /^(#|rgb\(|hsl\()/i.test(b) ? d3_interpolateRgb : d3_interpolateString : b instanceof d3_color ? d3_interpolateRgb : Array.isArray(b) ? d3_interpolateArray : t === "object" && isNaN(b) ? d3_interpolateObject : d3_interpolateNumber)(a, b);
  } ];
  d3.interpolateArray = d3_interpolateArray;
  function d3_interpolateArray(a, b) {
    var x = [], c = [], na = a.length, nb = b.length, n0 = Math.min(a.length, b.length), i;
    for (i = 0; i < n0; ++i) x.push(d3_interpolate(a[i], b[i]));
    for (;i < na; ++i) c[i] = a[i];
    for (;i < nb; ++i) c[i] = b[i];
    return function(t) {
      for (i = 0; i < n0; ++i) c[i] = x[i](t);
      return c;
    };
  }
  var d3_ease_default = function() {
    return d3_identity;
  };
  var d3_ease = d3.map({
    linear: d3_ease_default,
    poly: d3_ease_poly,
    quad: function() {
      return d3_ease_quad;
    },
    cubic: function() {
      return d3_ease_cubic;
    },
    sin: function() {
      return d3_ease_sin;
    },
    exp: function() {
      return d3_ease_exp;
    },
    circle: function() {
      return d3_ease_circle;
    },
    elastic: d3_ease_elastic,
    back: d3_ease_back,
    bounce: function() {
      return d3_ease_bounce;
    }
  });
  var d3_ease_mode = d3.map({
    "in": d3_identity,
    out: d3_ease_reverse,
    "in-out": d3_ease_reflect,
    "out-in": function(f) {
      return d3_ease_reflect(d3_ease_reverse(f));
    }
  });
  d3.ease = function(name) {
    var i = name.indexOf("-"), t = i >= 0 ? name.slice(0, i) : name, m = i >= 0 ? name.slice(i + 1) : "in";
    t = d3_ease.get(t) || d3_ease_default;
    m = d3_ease_mode.get(m) || d3_identity;
    return d3_ease_clamp(m(t.apply(null, d3_arraySlice.call(arguments, 1))));
  };
  function d3_ease_clamp(f) {
    return function(t) {
      return t <= 0 ? 0 : t >= 1 ? 1 : f(t);
    };
  }
  function d3_ease_reverse(f) {
    return function(t) {
      return 1 - f(1 - t);
    };
  }
  function d3_ease_reflect(f) {
    return function(t) {
      return .5 * (t < .5 ? f(2 * t) : 2 - f(2 - 2 * t));
    };
  }
  function d3_ease_quad(t) {
    return t * t;
  }
  function d3_ease_cubic(t) {
    return t * t * t;
  }
  function d3_ease_cubicInOut(t) {
    if (t <= 0) return 0;
    if (t >= 1) return 1;
    var t2 = t * t, t3 = t2 * t;
    return 4 * (t < .5 ? t3 : 3 * (t - t2) + t3 - .75);
  }
  function d3_ease_poly(e) {
    return function(t) {
      return Math.pow(t, e);
    };
  }
  function d3_ease_sin(t) {
    return 1 - Math.cos(t * halfπ);
  }
  function d3_ease_exp(t) {
    return Math.pow(2, 10 * (t - 1));
  }
  function d3_ease_circle(t) {
    return 1 - Math.sqrt(1 - t * t);
  }
  function d3_ease_elastic(a, p) {
    var s;
    if (arguments.length < 2) p = .45;
    if (arguments.length) s = p / τ * Math.asin(1 / a); else a = 1, s = p / 4;
    return function(t) {
      return 1 + a * Math.pow(2, -10 * t) * Math.sin((t - s) * τ / p);
    };
  }
  function d3_ease_back(s) {
    if (!s) s = 1.70158;
    return function(t) {
      return t * t * ((s + 1) * t - s);
    };
  }
  function d3_ease_bounce(t) {
    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
  }
  d3.interpolateHcl = d3_interpolateHcl;
  function d3_interpolateHcl(a, b) {
    a = d3.hcl(a);
    b = d3.hcl(b);
    var ah = a.h, ac = a.c, al = a.l, bh = b.h - ah, bc = b.c - ac, bl = b.l - al;
    if (isNaN(bc)) bc = 0, ac = isNaN(ac) ? b.c : ac;
    if (isNaN(bh)) bh = 0, ah = isNaN(ah) ? b.h : ah; else if (bh > 180) bh -= 360; else if (bh < -180) bh += 360;
    return function(t) {
      return d3_hcl_lab(ah + bh * t, ac + bc * t, al + bl * t) + "";
    };
  }
  d3.interpolateHsl = d3_interpolateHsl;
  function d3_interpolateHsl(a, b) {
    a = d3.hsl(a);
    b = d3.hsl(b);
    var ah = a.h, as = a.s, al = a.l, bh = b.h - ah, bs = b.s - as, bl = b.l - al;
    if (isNaN(bs)) bs = 0, as = isNaN(as) ? b.s : as;
    if (isNaN(bh)) bh = 0, ah = isNaN(ah) ? b.h : ah; else if (bh > 180) bh -= 360; else if (bh < -180) bh += 360;
    return function(t) {
      return d3_hsl_rgb(ah + bh * t, as + bs * t, al + bl * t) + "";
    };
  }
  d3.interpolateLab = d3_interpolateLab;
  function d3_interpolateLab(a, b) {
    a = d3.lab(a);
    b = d3.lab(b);
    var al = a.l, aa = a.a, ab = a.b, bl = b.l - al, ba = b.a - aa, bb = b.b - ab;
    return function(t) {
      return d3_lab_rgb(al + bl * t, aa + ba * t, ab + bb * t) + "";
    };
  }
  d3.interpolateRound = d3_interpolateRound;
  function d3_interpolateRound(a, b) {
    b -= a;
    return function(t) {
      return Math.round(a + b * t);
    };
  }
  d3.transform = function(string) {
    var g = d3_document.createElementNS(d3.ns.prefix.svg, "g");
    return (d3.transform = function(string) {
      if (string != null) {
        g.setAttribute("transform", string);
        var t = g.transform.baseVal.consolidate();
      }
      return new d3_transform(t ? t.matrix : d3_transformIdentity);
    })(string);
  };
  function d3_transform(m) {
    var r0 = [ m.a, m.b ], r1 = [ m.c, m.d ], kx = d3_transformNormalize(r0), kz = d3_transformDot(r0, r1), ky = d3_transformNormalize(d3_transformCombine(r1, r0, -kz)) || 0;
    if (r0[0] * r1[1] < r1[0] * r0[1]) {
      r0[0] *= -1;
      r0[1] *= -1;
      kx *= -1;
      kz *= -1;
    }
    this.rotate = (kx ? Math.atan2(r0[1], r0[0]) : Math.atan2(-r1[0], r1[1])) * d3_degrees;
    this.translate = [ m.e, m.f ];
    this.scale = [ kx, ky ];
    this.skew = ky ? Math.atan2(kz, ky) * d3_degrees : 0;
  }
  d3_transform.prototype.toString = function() {
    return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")";
  };
  function d3_transformDot(a, b) {
    return a[0] * b[0] + a[1] * b[1];
  }
  function d3_transformNormalize(a) {
    var k = Math.sqrt(d3_transformDot(a, a));
    if (k) {
      a[0] /= k;
      a[1] /= k;
    }
    return k;
  }
  function d3_transformCombine(a, b, k) {
    a[0] += k * b[0];
    a[1] += k * b[1];
    return a;
  }
  var d3_transformIdentity = {
    a: 1,
    b: 0,
    c: 0,
    d: 1,
    e: 0,
    f: 0
  };
  d3.interpolateTransform = d3_interpolateTransform;
  function d3_interpolateTransformPop(s) {
    return s.length ? s.pop() + "," : "";
  }
  function d3_interpolateTranslate(ta, tb, s, q) {
    if (ta[0] !== tb[0] || ta[1] !== tb[1]) {
      var i = s.push("translate(", null, ",", null, ")");
      q.push({
        i: i - 4,
        x: d3_interpolateNumber(ta[0], tb[0])
      }, {
        i: i - 2,
        x: d3_interpolateNumber(ta[1], tb[1])
      });
    } else if (tb[0] || tb[1]) {
      s.push("translate(" + tb + ")");
    }
  }
  function d3_interpolateRotate(ra, rb, s, q) {
    if (ra !== rb) {
      if (ra - rb > 180) rb += 360; else if (rb - ra > 180) ra += 360;
      q.push({
        i: s.push(d3_interpolateTransformPop(s) + "rotate(", null, ")") - 2,
        x: d3_interpolateNumber(ra, rb)
      });
    } else if (rb) {
      s.push(d3_interpolateTransformPop(s) + "rotate(" + rb + ")");
    }
  }
  function d3_interpolateSkew(wa, wb, s, q) {
    if (wa !== wb) {
      q.push({
        i: s.push(d3_interpolateTransformPop(s) + "skewX(", null, ")") - 2,
        x: d3_interpolateNumber(wa, wb)
      });
    } else if (wb) {
      s.push(d3_interpolateTransformPop(s) + "skewX(" + wb + ")");
    }
  }
  function d3_interpolateScale(ka, kb, s, q) {
    if (ka[0] !== kb[0] || ka[1] !== kb[1]) {
      var i = s.push(d3_interpolateTransformPop(s) + "scale(", null, ",", null, ")");
      q.push({
        i: i - 4,
        x: d3_interpolateNumber(ka[0], kb[0])
      }, {
        i: i - 2,
        x: d3_interpolateNumber(ka[1], kb[1])
      });
    } else if (kb[0] !== 1 || kb[1] !== 1) {
      s.push(d3_interpolateTransformPop(s) + "scale(" + kb + ")");
    }
  }
  function d3_interpolateTransform(a, b) {
    var s = [], q = [];
    a = d3.transform(a), b = d3.transform(b);
    d3_interpolateTranslate(a.translate, b.translate, s, q);
    d3_interpolateRotate(a.rotate, b.rotate, s, q);
    d3_interpolateSkew(a.skew, b.skew, s, q);
    d3_interpolateScale(a.scale, b.scale, s, q);
    a = b = null;
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  }
  function d3_uninterpolateNumber(a, b) {
    b = (b -= a = +a) || 1 / b;
    return function(x) {
      return (x - a) / b;
    };
  }
  function d3_uninterpolateClamp(a, b) {
    b = (b -= a = +a) || 1 / b;
    return function(x) {
      return Math.max(0, Math.min(1, (x - a) / b));
    };
  }
  d3.layout = {};
  d3.layout.bundle = function() {
    return function(links) {
      var paths = [], i = -1, n = links.length;
      while (++i < n) paths.push(d3_layout_bundlePath(links[i]));
      return paths;
    };
  };
  function d3_layout_bundlePath(link) {
    var start = link.source, end = link.target, lca = d3_layout_bundleLeastCommonAncestor(start, end), points = [ start ];
    while (start !== lca) {
      start = start.parent;
      points.push(start);
    }
    var k = points.length;
    while (end !== lca) {
      points.splice(k, 0, end);
      end = end.parent;
    }
    return points;
  }
  function d3_layout_bundleAncestors(node) {
    var ancestors = [], parent = node.parent;
    while (parent != null) {
      ancestors.push(node);
      node = parent;
      parent = parent.parent;
    }
    ancestors.push(node);
    return ancestors;
  }
  function d3_layout_bundleLeastCommonAncestor(a, b) {
    if (a === b) return a;
    var aNodes = d3_layout_bundleAncestors(a), bNodes = d3_layout_bundleAncestors(b), aNode = aNodes.pop(), bNode = bNodes.pop(), sharedNode = null;
    while (aNode === bNode) {
      sharedNode = aNode;
      aNode = aNodes.pop();
      bNode = bNodes.pop();
    }
    return sharedNode;
  }
  d3.layout.chord = function() {
    var chord = {}, chords, groups, matrix, n, padding = 0, sortGroups, sortSubgroups, sortChords;
    function relayout() {
      var subgroups = {}, groupSums = [], groupIndex = d3.range(n), subgroupIndex = [], k, x, x0, i, j;
      chords = [];
      groups = [];
      k = 0, i = -1;
      while (++i < n) {
        x = 0, j = -1;
        while (++j < n) {
          x += matrix[i][j];
        }
        groupSums.push(x);
        subgroupIndex.push(d3.range(n));
        k += x;
      }
      if (sortGroups) {
        groupIndex.sort(function(a, b) {
          return sortGroups(groupSums[a], groupSums[b]);
        });
      }
      if (sortSubgroups) {
        subgroupIndex.forEach(function(d, i) {
          d.sort(function(a, b) {
            return sortSubgroups(matrix[i][a], matrix[i][b]);
          });
        });
      }
      k = (τ - padding * n) / k;
      x = 0, i = -1;
      while (++i < n) {
        x0 = x, j = -1;
        while (++j < n) {
          var di = groupIndex[i], dj = subgroupIndex[di][j], v = matrix[di][dj], a0 = x, a1 = x += v * k;
          subgroups[di + "-" + dj] = {
            index: di,
            subindex: dj,
            startAngle: a0,
            endAngle: a1,
            value: v
          };
        }
        groups[di] = {
          index: di,
          startAngle: x0,
          endAngle: x,
          value: groupSums[di]
        };
        x += padding;
      }
      i = -1;
      while (++i < n) {
        j = i - 1;
        while (++j < n) {
          var source = subgroups[i + "-" + j], target = subgroups[j + "-" + i];
          if (source.value || target.value) {
            chords.push(source.value < target.value ? {
              source: target,
              target: source
            } : {
              source: source,
              target: target
            });
          }
        }
      }
      if (sortChords) resort();
    }
    function resort() {
      chords.sort(function(a, b) {
        return sortChords((a.source.value + a.target.value) / 2, (b.source.value + b.target.value) / 2);
      });
    }
    chord.matrix = function(x) {
      if (!arguments.length) return matrix;
      n = (matrix = x) && matrix.length;
      chords = groups = null;
      return chord;
    };
    chord.padding = function(x) {
      if (!arguments.length) return padding;
      padding = x;
      chords = groups = null;
      return chord;
    };
    chord.sortGroups = function(x) {
      if (!arguments.length) return sortGroups;
      sortGroups = x;
      chords = groups = null;
      return chord;
    };
    chord.sortSubgroups = function(x) {
      if (!arguments.length) return sortSubgroups;
      sortSubgroups = x;
      chords = null;
      return chord;
    };
    chord.sortChords = function(x) {
      if (!arguments.length) return sortChords;
      sortChords = x;
      if (chords) resort();
      return chord;
    };
    chord.chords = function() {
      if (!chords) relayout();
      return chords;
    };
    chord.groups = function() {
      if (!groups) relayout();
      return groups;
    };
    return chord;
  };
  d3.layout.force = function() {
    var force = {}, event = d3.dispatch("start", "tick", "end"), timer, size = [ 1, 1 ], drag, alpha, friction = .9, linkDistance = d3_layout_forceLinkDistance, linkStrength = d3_layout_forceLinkStrength, charge = -30, chargeDistance2 = d3_layout_forceChargeDistance2, gravity = .1, theta2 = .64, nodes = [], links = [], distances, strengths, charges;
    function repulse(node) {
      return function(quad, x1, _, x2) {
        if (quad.point !== node) {
          var dx = quad.cx - node.x, dy = quad.cy - node.y, dw = x2 - x1, dn = dx * dx + dy * dy;
          if (dw * dw / theta2 < dn) {
            if (dn < chargeDistance2) {
              var k = quad.charge / dn;
              node.px -= dx * k;
              node.py -= dy * k;
            }
            return true;
          }
          if (quad.point && dn && dn < chargeDistance2) {
            var k = quad.pointCharge / dn;
            node.px -= dx * k;
            node.py -= dy * k;
          }
        }
        return !quad.charge;
      };
    }
    force.tick = function() {
      if ((alpha *= .99) < .005) {
        timer = null;
        event.end({
          type: "end",
          alpha: alpha = 0
        });
        return true;
      }
      var n = nodes.length, m = links.length, q, i, o, s, t, l, k, x, y;
      for (i = 0; i < m; ++i) {
        o = links[i];
        s = o.source;
        t = o.target;
        x = t.x - s.x;
        y = t.y - s.y;
        if (l = x * x + y * y) {
          l = alpha * strengths[i] * ((l = Math.sqrt(l)) - distances[i]) / l;
          x *= l;
          y *= l;
          t.x -= x * (k = s.weight + t.weight ? s.weight / (s.weight + t.weight) : .5);
          t.y -= y * k;
          s.x += x * (k = 1 - k);
          s.y += y * k;
        }
      }
      if (k = alpha * gravity) {
        x = size[0] / 2;
        y = size[1] / 2;
        i = -1;
        if (k) while (++i < n) {
          o = nodes[i];
          o.x += (x - o.x) * k;
          o.y += (y - o.y) * k;
        }
      }
      if (charge) {
        d3_layout_forceAccumulate(q = d3.geom.quadtree(nodes), alpha, charges);
        i = -1;
        while (++i < n) {
          if (!(o = nodes[i]).fixed) {
            q.visit(repulse(o));
          }
        }
      }
      i = -1;
      while (++i < n) {
        o = nodes[i];
        if (o.fixed) {
          o.x = o.px;
          o.y = o.py;
        } else {
          o.x -= (o.px - (o.px = o.x)) * friction;
          o.y -= (o.py - (o.py = o.y)) * friction;
        }
      }
      event.tick({
        type: "tick",
        alpha: alpha
      });
    };
    force.nodes = function(x) {
      if (!arguments.length) return nodes;
      nodes = x;
      return force;
    };
    force.links = function(x) {
      if (!arguments.length) return links;
      links = x;
      return force;
    };
    force.size = function(x) {
      if (!arguments.length) return size;
      size = x;
      return force;
    };
    force.linkDistance = function(x) {
      if (!arguments.length) return linkDistance;
      linkDistance = typeof x === "function" ? x : +x;
      return force;
    };
    force.distance = force.linkDistance;
    force.linkStrength = function(x) {
      if (!arguments.length) return linkStrength;
      linkStrength = typeof x === "function" ? x : +x;
      return force;
    };
    force.friction = function(x) {
      if (!arguments.length) return friction;
      friction = +x;
      return force;
    };
    force.charge = function(x) {
      if (!arguments.length) return charge;
      charge = typeof x === "function" ? x : +x;
      return force;
    };
    force.chargeDistance = function(x) {
      if (!arguments.length) return Math.sqrt(chargeDistance2);
      chargeDistance2 = x * x;
      return force;
    };
    force.gravity = function(x) {
      if (!arguments.length) return gravity;
      gravity = +x;
      return force;
    };
    force.theta = function(x) {
      if (!arguments.length) return Math.sqrt(theta2);
      theta2 = x * x;
      return force;
    };
    force.alpha = function(x) {
      if (!arguments.length) return alpha;
      x = +x;
      if (alpha) {
        if (x > 0) {
          alpha = x;
        } else {
          timer.c = null, timer.t = NaN, timer = null;
          event.end({
            type: "end",
            alpha: alpha = 0
          });
        }
      } else if (x > 0) {
        event.start({
          type: "start",
          alpha: alpha = x
        });
        timer = d3_timer(force.tick);
      }
      return force;
    };
    force.start = function() {
      var i, n = nodes.length, m = links.length, w = size[0], h = size[1], neighbors, o;
      for (i = 0; i < n; ++i) {
        (o = nodes[i]).index = i;
        o.weight = 0;
      }
      for (i = 0; i < m; ++i) {
        o = links[i];
        if (typeof o.source == "number") o.source = nodes[o.source];
        if (typeof o.target == "number") o.target = nodes[o.target];
        ++o.source.weight;
        ++o.target.weight;
      }
      for (i = 0; i < n; ++i) {
        o = nodes[i];
        if (isNaN(o.x)) o.x = position("x", w);
        if (isNaN(o.y)) o.y = position("y", h);
        if (isNaN(o.px)) o.px = o.x;
        if (isNaN(o.py)) o.py = o.y;
      }
      distances = [];
      if (typeof linkDistance === "function") for (i = 0; i < m; ++i) distances[i] = +linkDistance.call(this, links[i], i); else for (i = 0; i < m; ++i) distances[i] = linkDistance;
      strengths = [];
      if (typeof linkStrength === "function") for (i = 0; i < m; ++i) strengths[i] = +linkStrength.call(this, links[i], i); else for (i = 0; i < m; ++i) strengths[i] = linkStrength;
      charges = [];
      if (typeof charge === "function") for (i = 0; i < n; ++i) charges[i] = +charge.call(this, nodes[i], i); else for (i = 0; i < n; ++i) charges[i] = charge;
      function position(dimension, size) {
        if (!neighbors) {
          neighbors = new Array(n);
          for (j = 0; j < n; ++j) {
            neighbors[j] = [];
          }
          for (j = 0; j < m; ++j) {
            var o = links[j];
            neighbors[o.source.index].push(o.target);
            neighbors[o.target.index].push(o.source);
          }
        }
        var candidates = neighbors[i], j = -1, l = candidates.length, x;
        while (++j < l) if (!isNaN(x = candidates[j][dimension])) return x;
        return Math.random() * size;
      }
      return force.resume();
    };
    force.resume = function() {
      return force.alpha(.1);
    };
    force.stop = function() {
      return force.alpha(0);
    };
    force.drag = function() {
      if (!drag) drag = d3.behavior.drag().origin(d3_identity).on("dragstart.force", d3_layout_forceDragstart).on("drag.force", dragmove).on("dragend.force", d3_layout_forceDragend);
      if (!arguments.length) return drag;
      this.on("mouseover.force", d3_layout_forceMouseover).on("mouseout.force", d3_layout_forceMouseout).call(drag);
    };
    function dragmove(d) {
      d.px = d3.event.x, d.py = d3.event.y;
      force.resume();
    }
    return d3.rebind(force, event, "on");
  };
  function d3_layout_forceDragstart(d) {
    d.fixed |= 2;
  }
  function d3_layout_forceDragend(d) {
    d.fixed &= ~6;
  }
  function d3_layout_forceMouseover(d) {
    d.fixed |= 4;
    d.px = d.x, d.py = d.y;
  }
  function d3_layout_forceMouseout(d) {
    d.fixed &= ~4;
  }
  function d3_layout_forceAccumulate(quad, alpha, charges) {
    var cx = 0, cy = 0;
    quad.charge = 0;
    if (!quad.leaf) {
      var nodes = quad.nodes, n = nodes.length, i = -1, c;
      while (++i < n) {
        c = nodes[i];
        if (c == null) continue;
        d3_layout_forceAccumulate(c, alpha, charges);
        quad.charge += c.charge;
        cx += c.charge * c.cx;
        cy += c.charge * c.cy;
      }
    }
    if (quad.point) {
      if (!quad.leaf) {
        quad.point.x += Math.random() - .5;
        quad.point.y += Math.random() - .5;
      }
      var k = alpha * charges[quad.point.index];
      quad.charge += quad.pointCharge = k;
      cx += k * quad.point.x;
      cy += k * quad.point.y;
    }
    quad.cx = cx / quad.charge;
    quad.cy = cy / quad.charge;
  }
  var d3_layout_forceLinkDistance = 20, d3_layout_forceLinkStrength = 1, d3_layout_forceChargeDistance2 = Infinity;
  d3.layout.hierarchy = function() {
    var sort = d3_layout_hierarchySort, children = d3_layout_hierarchyChildren, value = d3_layout_hierarchyValue;
    function hierarchy(root) {
      var stack = [ root ], nodes = [], node;
      root.depth = 0;
      while ((node = stack.pop()) != null) {
        nodes.push(node);
        if ((childs = children.call(hierarchy, node, node.depth)) && (n = childs.length)) {
          var n, childs, child;
          while (--n >= 0) {
            stack.push(child = childs[n]);
            child.parent = node;
            child.depth = node.depth + 1;
          }
          if (value) node.value = 0;
          node.children = childs;
        } else {
          if (value) node.value = +value.call(hierarchy, node, node.depth) || 0;
          delete node.children;
        }
      }
      d3_layout_hierarchyVisitAfter(root, function(node) {
        var childs, parent;
        if (sort && (childs = node.children)) childs.sort(sort);
        if (value && (parent = node.parent)) parent.value += node.value;
      });
      return nodes;
    }
    hierarchy.sort = function(x) {
      if (!arguments.length) return sort;
      sort = x;
      return hierarchy;
    };
    hierarchy.children = function(x) {
      if (!arguments.length) return children;
      children = x;
      return hierarchy;
    };
    hierarchy.value = function(x) {
      if (!arguments.length) return value;
      value = x;
      return hierarchy;
    };
    hierarchy.revalue = function(root) {
      if (value) {
        d3_layout_hierarchyVisitBefore(root, function(node) {
          if (node.children) node.value = 0;
        });
        d3_layout_hierarchyVisitAfter(root, function(node) {
          var parent;
          if (!node.children) node.value = +value.call(hierarchy, node, node.depth) || 0;
          if (parent = node.parent) parent.value += node.value;
        });
      }
      return root;
    };
    return hierarchy;
  };
  function d3_layout_hierarchyRebind(object, hierarchy) {
    d3.rebind(object, hierarchy, "sort", "children", "value");
    object.nodes = object;
    object.links = d3_layout_hierarchyLinks;
    return object;
  }
  function d3_layout_hierarchyVisitBefore(node, callback) {
    var nodes = [ node ];
    while ((node = nodes.pop()) != null) {
      callback(node);
      if ((children = node.children) && (n = children.length)) {
        var n, children;
        while (--n >= 0) nodes.push(children[n]);
      }
    }
  }
  function d3_layout_hierarchyVisitAfter(node, callback) {
    var nodes = [ node ], nodes2 = [];
    while ((node = nodes.pop()) != null) {
      nodes2.push(node);
      if ((children = node.children) && (n = children.length)) {
        var i = -1, n, children;
        while (++i < n) nodes.push(children[i]);
      }
    }
    while ((node = nodes2.pop()) != null) {
      callback(node);
    }
  }
  function d3_layout_hierarchyChildren(d) {
    return d.children;
  }
  function d3_layout_hierarchyValue(d) {
    return d.value;
  }
  function d3_layout_hierarchySort(a, b) {
    return b.value - a.value;
  }
  function d3_layout_hierarchyLinks(nodes) {
    return d3.merge(nodes.map(function(parent) {
      return (parent.children || []).map(function(child) {
        return {
          source: parent,
          target: child
        };
      });
    }));
  }
  d3.layout.partition = function() {
    var hierarchy = d3.layout.hierarchy(), size = [ 1, 1 ];
    function position(node, x, dx, dy) {
      var children = node.children;
      node.x = x;
      node.y = node.depth * dy;
      node.dx = dx;
      node.dy = dy;
      if (children && (n = children.length)) {
        var i = -1, n, c, d;
        dx = node.value ? dx / node.value : 0;
        while (++i < n) {
          position(c = children[i], x, d = c.value * dx, dy);
          x += d;
        }
      }
    }
    function depth(node) {
      var children = node.children, d = 0;
      if (children && (n = children.length)) {
        var i = -1, n;
        while (++i < n) d = Math.max(d, depth(children[i]));
      }
      return 1 + d;
    }
    function partition(d, i) {
      var nodes = hierarchy.call(this, d, i);
      position(nodes[0], 0, size[0], size[1] / depth(nodes[0]));
      return nodes;
    }
    partition.size = function(x) {
      if (!arguments.length) return size;
      size = x;
      return partition;
    };
    return d3_layout_hierarchyRebind(partition, hierarchy);
  };
  d3.layout.pie = function() {
    var value = Number, sort = d3_layout_pieSortByValue, startAngle = 0, endAngle = τ, padAngle = 0;
    function pie(data) {
      var n = data.length, values = data.map(function(d, i) {
        return +value.call(pie, d, i);
      }), a = +(typeof startAngle === "function" ? startAngle.apply(this, arguments) : startAngle), da = (typeof endAngle === "function" ? endAngle.apply(this, arguments) : endAngle) - a, p = Math.min(Math.abs(da) / n, +(typeof padAngle === "function" ? padAngle.apply(this, arguments) : padAngle)), pa = p * (da < 0 ? -1 : 1), sum = d3.sum(values), k = sum ? (da - n * pa) / sum : 0, index = d3.range(n), arcs = [], v;
      if (sort != null) index.sort(sort === d3_layout_pieSortByValue ? function(i, j) {
        return values[j] - values[i];
      } : function(i, j) {
        return sort(data[i], data[j]);
      });
      index.forEach(function(i) {
        arcs[i] = {
          data: data[i],
          value: v = values[i],
          startAngle: a,
          endAngle: a += v * k + pa,
          padAngle: p
        };
      });
      return arcs;
    }
    pie.value = function(_) {
      if (!arguments.length) return value;
      value = _;
      return pie;
    };
    pie.sort = function(_) {
      if (!arguments.length) return sort;
      sort = _;
      return pie;
    };
    pie.startAngle = function(_) {
      if (!arguments.length) return startAngle;
      startAngle = _;
      return pie;
    };
    pie.endAngle = function(_) {
      if (!arguments.length) return endAngle;
      endAngle = _;
      return pie;
    };
    pie.padAngle = function(_) {
      if (!arguments.length) return padAngle;
      padAngle = _;
      return pie;
    };
    return pie;
  };
  var d3_layout_pieSortByValue = {};
  d3.layout.stack = function() {
    var values = d3_identity, order = d3_layout_stackOrderDefault, offset = d3_layout_stackOffsetZero, out = d3_layout_stackOut, x = d3_layout_stackX, y = d3_layout_stackY;
    function stack(data, index) {
      if (!(n = data.length)) return data;
      var series = data.map(function(d, i) {
        return values.call(stack, d, i);
      });
      var points = series.map(function(d) {
        return d.map(function(v, i) {
          return [ x.call(stack, v, i), y.call(stack, v, i) ];
        });
      });
      var orders = order.call(stack, points, index);
      series = d3.permute(series, orders);
      points = d3.permute(points, orders);
      var offsets = offset.call(stack, points, index);
      var m = series[0].length, n, i, j, o;
      for (j = 0; j < m; ++j) {
        out.call(stack, series[0][j], o = offsets[j], points[0][j][1]);
        for (i = 1; i < n; ++i) {
          out.call(stack, series[i][j], o += points[i - 1][j][1], points[i][j][1]);
        }
      }
      return data;
    }
    stack.values = function(x) {
      if (!arguments.length) return values;
      values = x;
      return stack;
    };
    stack.order = function(x) {
      if (!arguments.length) return order;
      order = typeof x === "function" ? x : d3_layout_stackOrders.get(x) || d3_layout_stackOrderDefault;
      return stack;
    };
    stack.offset = function(x) {
      if (!arguments.length) return offset;
      offset = typeof x === "function" ? x : d3_layout_stackOffsets.get(x) || d3_layout_stackOffsetZero;
      return stack;
    };
    stack.x = function(z) {
      if (!arguments.length) return x;
      x = z;
      return stack;
    };
    stack.y = function(z) {
      if (!arguments.length) return y;
      y = z;
      return stack;
    };
    stack.out = function(z) {
      if (!arguments.length) return out;
      out = z;
      return stack;
    };
    return stack;
  };
  function d3_layout_stackX(d) {
    return d.x;
  }
  function d3_layout_stackY(d) {
    return d.y;
  }
  function d3_layout_stackOut(d, y0, y) {
    d.y0 = y0;
    d.y = y;
  }
  var d3_layout_stackOrders = d3.map({
    "inside-out": function(data) {
      var n = data.length, i, j, max = data.map(d3_layout_stackMaxIndex), sums = data.map(d3_layout_stackReduceSum), index = d3.range(n).sort(function(a, b) {
        return max[a] - max[b];
      }), top = 0, bottom = 0, tops = [], bottoms = [];
      for (i = 0; i < n; ++i) {
        j = index[i];
        if (top < bottom) {
          top += sums[j];
          tops.push(j);
        } else {
          bottom += sums[j];
          bottoms.push(j);
        }
      }
      return bottoms.reverse().concat(tops);
    },
    reverse: function(data) {
      return d3.range(data.length).reverse();
    },
    "default": d3_layout_stackOrderDefault
  });
  var d3_layout_stackOffsets = d3.map({
    silhouette: function(data) {
      var n = data.length, m = data[0].length, sums = [], max = 0, i, j, o, y0 = [];
      for (j = 0; j < m; ++j) {
        for (i = 0, o = 0; i < n; i++) o += data[i][j][1];
        if (o > max) max = o;
        sums.push(o);
      }
      for (j = 0; j < m; ++j) {
        y0[j] = (max - sums[j]) / 2;
      }
      return y0;
    },
    wiggle: function(data) {
      var n = data.length, x = data[0], m = x.length, i, j, k, s1, s2, s3, dx, o, o0, y0 = [];
      y0[0] = o = o0 = 0;
      for (j = 1; j < m; ++j) {
        for (i = 0, s1 = 0; i < n; ++i) s1 += data[i][j][1];
        for (i = 0, s2 = 0, dx = x[j][0] - x[j - 1][0]; i < n; ++i) {
          for (k = 0, s3 = (data[i][j][1] - data[i][j - 1][1]) / (2 * dx); k < i; ++k) {
            s3 += (data[k][j][1] - data[k][j - 1][1]) / dx;
          }
          s2 += s3 * data[i][j][1];
        }
        y0[j] = o -= s1 ? s2 / s1 * dx : 0;
        if (o < o0) o0 = o;
      }
      for (j = 0; j < m; ++j) y0[j] -= o0;
      return y0;
    },
    expand: function(data) {
      var n = data.length, m = data[0].length, k = 1 / n, i, j, o, y0 = [];
      for (j = 0; j < m; ++j) {
        for (i = 0, o = 0; i < n; i++) o += data[i][j][1];
        if (o) for (i = 0; i < n; i++) data[i][j][1] /= o; else for (i = 0; i < n; i++) data[i][j][1] = k;
      }
      for (j = 0; j < m; ++j) y0[j] = 0;
      return y0;
    },
    zero: d3_layout_stackOffsetZero
  });
  function d3_layout_stackOrderDefault(data) {
    return d3.range(data.length);
  }
  function d3_layout_stackOffsetZero(data) {
    var j = -1, m = data[0].length, y0 = [];
    while (++j < m) y0[j] = 0;
    return y0;
  }
  function d3_layout_stackMaxIndex(array) {
    var i = 1, j = 0, v = array[0][1], k, n = array.length;
    for (;i < n; ++i) {
      if ((k = array[i][1]) > v) {
        j = i;
        v = k;
      }
    }
    return j;
  }
  function d3_layout_stackReduceSum(d) {
    return d.reduce(d3_layout_stackSum, 0);
  }
  function d3_layout_stackSum(p, d) {
    return p + d[1];
  }
  d3.layout.histogram = function() {
    var frequency = true, valuer = Number, ranger = d3_layout_histogramRange, binner = d3_layout_histogramBinSturges;
    function histogram(data, i) {
      var bins = [], values = data.map(valuer, this), range = ranger.call(this, values, i), thresholds = binner.call(this, range, values, i), bin, i = -1, n = values.length, m = thresholds.length - 1, k = frequency ? 1 : 1 / n, x;
      while (++i < m) {
        bin = bins[i] = [];
        bin.dx = thresholds[i + 1] - (bin.x = thresholds[i]);
        bin.y = 0;
      }
      if (m > 0) {
        i = -1;
        while (++i < n) {
          x = values[i];
          if (x >= range[0] && x <= range[1]) {
            bin = bins[d3.bisect(thresholds, x, 1, m) - 1];
            bin.y += k;
            bin.push(data[i]);
          }
        }
      }
      return bins;
    }
    histogram.value = function(x) {
      if (!arguments.length) return valuer;
      valuer = x;
      return histogram;
    };
    histogram.range = function(x) {
      if (!arguments.length) return ranger;
      ranger = d3_functor(x);
      return histogram;
    };
    histogram.bins = function(x) {
      if (!arguments.length) return binner;
      binner = typeof x === "number" ? function(range) {
        return d3_layout_histogramBinFixed(range, x);
      } : d3_functor(x);
      return histogram;
    };
    histogram.frequency = function(x) {
      if (!arguments.length) return frequency;
      frequency = !!x;
      return histogram;
    };
    return histogram;
  };
  function d3_layout_histogramBinSturges(range, values) {
    return d3_layout_histogramBinFixed(range, Math.ceil(Math.log(values.length) / Math.LN2 + 1));
  }
  function d3_layout_histogramBinFixed(range, n) {
    var x = -1, b = +range[0], m = (range[1] - b) / n, f = [];
    while (++x <= n) f[x] = m * x + b;
    return f;
  }
  function d3_layout_histogramRange(values) {
    return [ d3.min(values), d3.max(values) ];
  }
  d3.layout.pack = function() {
    var hierarchy = d3.layout.hierarchy().sort(d3_layout_packSort), padding = 0, size = [ 1, 1 ], radius;
    function pack(d, i) {
      var nodes = hierarchy.call(this, d, i), root = nodes[0], w = size[0], h = size[1], r = radius == null ? Math.sqrt : typeof radius === "function" ? radius : function() {
        return radius;
      };
      root.x = root.y = 0;
      d3_layout_hierarchyVisitAfter(root, function(d) {
        d.r = +r(d.value);
      });
      d3_layout_hierarchyVisitAfter(root, d3_layout_packSiblings);
      if (padding) {
        var dr = padding * (radius ? 1 : Math.max(2 * root.r / w, 2 * root.r / h)) / 2;
        d3_layout_hierarchyVisitAfter(root, function(d) {
          d.r += dr;
        });
        d3_layout_hierarchyVisitAfter(root, d3_layout_packSiblings);
        d3_layout_hierarchyVisitAfter(root, function(d) {
          d.r -= dr;
        });
      }
      d3_layout_packTransform(root, w / 2, h / 2, radius ? 1 : 1 / Math.max(2 * root.r / w, 2 * root.r / h));
      return nodes;
    }
    pack.size = function(_) {
      if (!arguments.length) return size;
      size = _;
      return pack;
    };
    pack.radius = function(_) {
      if (!arguments.length) return radius;
      radius = _ == null || typeof _ === "function" ? _ : +_;
      return pack;
    };
    pack.padding = function(_) {
      if (!arguments.length) return padding;
      padding = +_;
      return pack;
    };
    return d3_layout_hierarchyRebind(pack, hierarchy);
  };
  function d3_layout_packSort(a, b) {
    return a.value - b.value;
  }
  function d3_layout_packInsert(a, b) {
    var c = a._pack_next;
    a._pack_next = b;
    b._pack_prev = a;
    b._pack_next = c;
    c._pack_prev = b;
  }
  function d3_layout_packSplice(a, b) {
    a._pack_next = b;
    b._pack_prev = a;
  }
  function d3_layout_packIntersects(a, b) {
    var dx = b.x - a.x, dy = b.y - a.y, dr = a.r + b.r;
    return .999 * dr * dr > dx * dx + dy * dy;
  }
  function d3_layout_packSiblings(node) {
    if (!(nodes = node.children) || !(n = nodes.length)) return;
    var nodes, xMin = Infinity, xMax = -Infinity, yMin = Infinity, yMax = -Infinity, a, b, c, i, j, k, n;
    function bound(node) {
      xMin = Math.min(node.x - node.r, xMin);
      xMax = Math.max(node.x + node.r, xMax);
      yMin = Math.min(node.y - node.r, yMin);
      yMax = Math.max(node.y + node.r, yMax);
    }
    nodes.forEach(d3_layout_packLink);
    a = nodes[0];
    a.x = -a.r;
    a.y = 0;
    bound(a);
    if (n > 1) {
      b = nodes[1];
      b.x = b.r;
      b.y = 0;
      bound(b);
      if (n > 2) {
        c = nodes[2];
        d3_layout_packPlace(a, b, c);
        bound(c);
        d3_layout_packInsert(a, c);
        a._pack_prev = c;
        d3_layout_packInsert(c, b);
        b = a._pack_next;
        for (i = 3; i < n; i++) {
          d3_layout_packPlace(a, b, c = nodes[i]);
          var isect = 0, s1 = 1, s2 = 1;
          for (j = b._pack_next; j !== b; j = j._pack_next, s1++) {
            if (d3_layout_packIntersects(j, c)) {
              isect = 1;
              break;
            }
          }
          if (isect == 1) {
            for (k = a._pack_prev; k !== j._pack_prev; k = k._pack_prev, s2++) {
              if (d3_layout_packIntersects(k, c)) {
                break;
              }
            }
          }
          if (isect) {
            if (s1 < s2 || s1 == s2 && b.r < a.r) d3_layout_packSplice(a, b = j); else d3_layout_packSplice(a = k, b);
            i--;
          } else {
            d3_layout_packInsert(a, c);
            b = c;
            bound(c);
          }
        }
      }
    }
    var cx = (xMin + xMax) / 2, cy = (yMin + yMax) / 2, cr = 0;
    for (i = 0; i < n; i++) {
      c = nodes[i];
      c.x -= cx;
      c.y -= cy;
      cr = Math.max(cr, c.r + Math.sqrt(c.x * c.x + c.y * c.y));
    }
    node.r = cr;
    nodes.forEach(d3_layout_packUnlink);
  }
  function d3_layout_packLink(node) {
    node._pack_next = node._pack_prev = node;
  }
  function d3_layout_packUnlink(node) {
    delete node._pack_next;
    delete node._pack_prev;
  }
  function d3_layout_packTransform(node, x, y, k) {
    var children = node.children;
    node.x = x += k * node.x;
    node.y = y += k * node.y;
    node.r *= k;
    if (children) {
      var i = -1, n = children.length;
      while (++i < n) d3_layout_packTransform(children[i], x, y, k);
    }
  }
  function d3_layout_packPlace(a, b, c) {
    var db = a.r + c.r, dx = b.x - a.x, dy = b.y - a.y;
    if (db && (dx || dy)) {
      var da = b.r + c.r, dc = dx * dx + dy * dy;
      da *= da;
      db *= db;
      var x = .5 + (db - da) / (2 * dc), y = Math.sqrt(Math.max(0, 2 * da * (db + dc) - (db -= dc) * db - da * da)) / (2 * dc);
      c.x = a.x + x * dx + y * dy;
      c.y = a.y + x * dy - y * dx;
    } else {
      c.x = a.x + db;
      c.y = a.y;
    }
  }
  d3.layout.tree = function() {
    var hierarchy = d3.layout.hierarchy().sort(null).value(null), separation = d3_layout_treeSeparation, size = [ 1, 1 ], nodeSize = null;
    function tree(d, i) {
      var nodes = hierarchy.call(this, d, i), root0 = nodes[0], root1 = wrapTree(root0);
      d3_layout_hierarchyVisitAfter(root1, firstWalk), root1.parent.m = -root1.z;
      d3_layout_hierarchyVisitBefore(root1, secondWalk);
      if (nodeSize) d3_layout_hierarchyVisitBefore(root0, sizeNode); else {
        var left = root0, right = root0, bottom = root0;
        d3_layout_hierarchyVisitBefore(root0, function(node) {
          if (node.x < left.x) left = node;
          if (node.x > right.x) right = node;
          if (node.depth > bottom.depth) bottom = node;
        });
        var tx = separation(left, right) / 2 - left.x, kx = size[0] / (right.x + separation(right, left) / 2 + tx), ky = size[1] / (bottom.depth || 1);
        d3_layout_hierarchyVisitBefore(root0, function(node) {
          node.x = (node.x + tx) * kx;
          node.y = node.depth * ky;
        });
      }
      return nodes;
    }
    function wrapTree(root0) {
      var root1 = {
        A: null,
        children: [ root0 ]
      }, queue = [ root1 ], node1;
      while ((node1 = queue.pop()) != null) {
        for (var children = node1.children, child, i = 0, n = children.length; i < n; ++i) {
          queue.push((children[i] = child = {
            _: children[i],
            parent: node1,
            children: (child = children[i].children) && child.slice() || [],
            A: null,
            a: null,
            z: 0,
            m: 0,
            c: 0,
            s: 0,
            t: null,
            i: i
          }).a = child);
        }
      }
      return root1.children[0];
    }
    function firstWalk(v) {
      var children = v.children, siblings = v.parent.children, w = v.i ? siblings[v.i - 1] : null;
      if (children.length) {
        d3_layout_treeShift(v);
        var midpoint = (children[0].z + children[children.length - 1].z) / 2;
        if (w) {
          v.z = w.z + separation(v._, w._);
          v.m = v.z - midpoint;
        } else {
          v.z = midpoint;
        }
      } else if (w) {
        v.z = w.z + separation(v._, w._);
      }
      v.parent.A = apportion(v, w, v.parent.A || siblings[0]);
    }
    function secondWalk(v) {
      v._.x = v.z + v.parent.m;
      v.m += v.parent.m;
    }
    function apportion(v, w, ancestor) {
      if (w) {
        var vip = v, vop = v, vim = w, vom = vip.parent.children[0], sip = vip.m, sop = vop.m, sim = vim.m, som = vom.m, shift;
        while (vim = d3_layout_treeRight(vim), vip = d3_layout_treeLeft(vip), vim && vip) {
          vom = d3_layout_treeLeft(vom);
          vop = d3_layout_treeRight(vop);
          vop.a = v;
          shift = vim.z + sim - vip.z - sip + separation(vim._, vip._);
          if (shift > 0) {
            d3_layout_treeMove(d3_layout_treeAncestor(vim, v, ancestor), v, shift);
            sip += shift;
            sop += shift;
          }
          sim += vim.m;
          sip += vip.m;
          som += vom.m;
          sop += vop.m;
        }
        if (vim && !d3_layout_treeRight(vop)) {
          vop.t = vim;
          vop.m += sim - sop;
        }
        if (vip && !d3_layout_treeLeft(vom)) {
          vom.t = vip;
          vom.m += sip - som;
          ancestor = v;
        }
      }
      return ancestor;
    }
    function sizeNode(node) {
      node.x *= size[0];
      node.y = node.depth * size[1];
    }
    tree.separation = function(x) {
      if (!arguments.length) return separation;
      separation = x;
      return tree;
    };
    tree.size = function(x) {
      if (!arguments.length) return nodeSize ? null : size;
      nodeSize = (size = x) == null ? sizeNode : null;
      return tree;
    };
    tree.nodeSize = function(x) {
      if (!arguments.length) return nodeSize ? size : null;
      nodeSize = (size = x) == null ? null : sizeNode;
      return tree;
    };
    return d3_layout_hierarchyRebind(tree, hierarchy);
  };
  function d3_layout_treeSeparation(a, b) {
    return a.parent == b.parent ? 1 : 2;
  }
  function d3_layout_treeLeft(v) {
    var children = v.children;
    return children.length ? children[0] : v.t;
  }
  function d3_layout_treeRight(v) {
    var children = v.children, n;
    return (n = children.length) ? children[n - 1] : v.t;
  }
  function d3_layout_treeMove(wm, wp, shift) {
    var change = shift / (wp.i - wm.i);
    wp.c -= change;
    wp.s += shift;
    wm.c += change;
    wp.z += shift;
    wp.m += shift;
  }
  function d3_layout_treeShift(v) {
    var shift = 0, change = 0, children = v.children, i = children.length, w;
    while (--i >= 0) {
      w = children[i];
      w.z += shift;
      w.m += shift;
      shift += w.s + (change += w.c);
    }
  }
  function d3_layout_treeAncestor(vim, v, ancestor) {
    return vim.a.parent === v.parent ? vim.a : ancestor;
  }
  d3.layout.cluster = function() {
    var hierarchy = d3.layout.hierarchy().sort(null).value(null), separation = d3_layout_treeSeparation, size = [ 1, 1 ], nodeSize = false;
    function cluster(d, i) {
      var nodes = hierarchy.call(this, d, i), root = nodes[0], previousNode, x = 0;
      d3_layout_hierarchyVisitAfter(root, function(node) {
        var children = node.children;
        if (children && children.length) {
          node.x = d3_layout_clusterX(children);
          node.y = d3_layout_clusterY(children);
        } else {
          node.x = previousNode ? x += separation(node, previousNode) : 0;
          node.y = 0;
          previousNode = node;
        }
      });
      var left = d3_layout_clusterLeft(root), right = d3_layout_clusterRight(root), x0 = left.x - separation(left, right) / 2, x1 = right.x + separation(right, left) / 2;
      d3_layout_hierarchyVisitAfter(root, nodeSize ? function(node) {
        node.x = (node.x - root.x) * size[0];
        node.y = (root.y - node.y) * size[1];
      } : function(node) {
        node.x = (node.x - x0) / (x1 - x0) * size[0];
        node.y = (1 - (root.y ? node.y / root.y : 1)) * size[1];
      });
      return nodes;
    }
    cluster.separation = function(x) {
      if (!arguments.length) return separation;
      separation = x;
      return cluster;
    };
    cluster.size = function(x) {
      if (!arguments.length) return nodeSize ? null : size;
      nodeSize = (size = x) == null;
      return cluster;
    };
    cluster.nodeSize = function(x) {
      if (!arguments.length) return nodeSize ? size : null;
      nodeSize = (size = x) != null;
      return cluster;
    };
    return d3_layout_hierarchyRebind(cluster, hierarchy);
  };
  function d3_layout_clusterY(children) {
    return 1 + d3.max(children, function(child) {
      return child.y;
    });
  }
  function d3_layout_clusterX(children) {
    return children.reduce(function(x, child) {
      return x + child.x;
    }, 0) / children.length;
  }
  function d3_layout_clusterLeft(node) {
    var children = node.children;
    return children && children.length ? d3_layout_clusterLeft(children[0]) : node;
  }
  function d3_layout_clusterRight(node) {
    var children = node.children, n;
    return children && (n = children.length) ? d3_layout_clusterRight(children[n - 1]) : node;
  }
  d3.layout.treemap = function() {
    var hierarchy = d3.layout.hierarchy(), round = Math.round, size = [ 1, 1 ], padding = null, pad = d3_layout_treemapPadNull, sticky = false, stickies, mode = "squarify", ratio = .5 * (1 + Math.sqrt(5));
    function scale(children, k) {
      var i = -1, n = children.length, child, area;
      while (++i < n) {
        area = (child = children[i]).value * (k < 0 ? 0 : k);
        child.area = isNaN(area) || area <= 0 ? 0 : area;
      }
    }
    function squarify(node) {
      var children = node.children;
      if (children && children.length) {
        var rect = pad(node), row = [], remaining = children.slice(), child, best = Infinity, score, u = mode === "slice" ? rect.dx : mode === "dice" ? rect.dy : mode === "slice-dice" ? node.depth & 1 ? rect.dy : rect.dx : Math.min(rect.dx, rect.dy), n;
        scale(remaining, rect.dx * rect.dy / node.value);
        row.area = 0;
        while ((n = remaining.length) > 0) {
          row.push(child = remaining[n - 1]);
          row.area += child.area;
          if (mode !== "squarify" || (score = worst(row, u)) <= best) {
            remaining.pop();
            best = score;
          } else {
            row.area -= row.pop().area;
            position(row, u, rect, false);
            u = Math.min(rect.dx, rect.dy);
            row.length = row.area = 0;
            best = Infinity;
          }
        }
        if (row.length) {
          position(row, u, rect, true);
          row.length = row.area = 0;
        }
        children.forEach(squarify);
      }
    }
    function stickify(node) {
      var children = node.children;
      if (children && children.length) {
        var rect = pad(node), remaining = children.slice(), child, row = [];
        scale(remaining, rect.dx * rect.dy / node.value);
        row.area = 0;
        while (child = remaining.pop()) {
          row.push(child);
          row.area += child.area;
          if (child.z != null) {
            position(row, child.z ? rect.dx : rect.dy, rect, !remaining.length);
            row.length = row.area = 0;
          }
        }
        children.forEach(stickify);
      }
    }
    function worst(row, u) {
      var s = row.area, r, rmax = 0, rmin = Infinity, i = -1, n = row.length;
      while (++i < n) {
        if (!(r = row[i].area)) continue;
        if (r < rmin) rmin = r;
        if (r > rmax) rmax = r;
      }
      s *= s;
      u *= u;
      return s ? Math.max(u * rmax * ratio / s, s / (u * rmin * ratio)) : Infinity;
    }
    function position(row, u, rect, flush) {
      var i = -1, n = row.length, x = rect.x, y = rect.y, v = u ? round(row.area / u) : 0, o;
      if (u == rect.dx) {
        if (flush || v > rect.dy) v = rect.dy;
        while (++i < n) {
          o = row[i];
          o.x = x;
          o.y = y;
          o.dy = v;
          x += o.dx = Math.min(rect.x + rect.dx - x, v ? round(o.area / v) : 0);
        }
        o.z = true;
        o.dx += rect.x + rect.dx - x;
        rect.y += v;
        rect.dy -= v;
      } else {
        if (flush || v > rect.dx) v = rect.dx;
        while (++i < n) {
          o = row[i];
          o.x = x;
          o.y = y;
          o.dx = v;
          y += o.dy = Math.min(rect.y + rect.dy - y, v ? round(o.area / v) : 0);
        }
        o.z = false;
        o.dy += rect.y + rect.dy - y;
        rect.x += v;
        rect.dx -= v;
      }
    }
    function treemap(d) {
      var nodes = stickies || hierarchy(d), root = nodes[0];
      root.x = root.y = 0;
      if (root.value) root.dx = size[0], root.dy = size[1]; else root.dx = root.dy = 0;
      if (stickies) hierarchy.revalue(root);
      scale([ root ], root.dx * root.dy / root.value);
      (stickies ? stickify : squarify)(root);
      if (sticky) stickies = nodes;
      return nodes;
    }
    treemap.size = function(x) {
      if (!arguments.length) return size;
      size = x;
      return treemap;
    };
    treemap.padding = function(x) {
      if (!arguments.length) return padding;
      function padFunction(node) {
        var p = x.call(treemap, node, node.depth);
        return p == null ? d3_layout_treemapPadNull(node) : d3_layout_treemapPad(node, typeof p === "number" ? [ p, p, p, p ] : p);
      }
      function padConstant(node) {
        return d3_layout_treemapPad(node, x);
      }
      var type;
      pad = (padding = x) == null ? d3_layout_treemapPadNull : (type = typeof x) === "function" ? padFunction : type === "number" ? (x = [ x, x, x, x ], 
      padConstant) : padConstant;
      return treemap;
    };
    treemap.round = function(x) {
      if (!arguments.length) return round != Number;
      round = x ? Math.round : Number;
      return treemap;
    };
    treemap.sticky = function(x) {
      if (!arguments.length) return sticky;
      sticky = x;
      stickies = null;
      return treemap;
    };
    treemap.ratio = function(x) {
      if (!arguments.length) return ratio;
      ratio = x;
      return treemap;
    };
    treemap.mode = function(x) {
      if (!arguments.length) return mode;
      mode = x + "";
      return treemap;
    };
    return d3_layout_hierarchyRebind(treemap, hierarchy);
  };
  function d3_layout_treemapPadNull(node) {
    return {
      x: node.x,
      y: node.y,
      dx: node.dx,
      dy: node.dy
    };
  }
  function d3_layout_treemapPad(node, padding) {
    var x = node.x + padding[3], y = node.y + padding[0], dx = node.dx - padding[1] - padding[3], dy = node.dy - padding[0] - padding[2];
    if (dx < 0) {
      x += dx / 2;
      dx = 0;
    }
    if (dy < 0) {
      y += dy / 2;
      dy = 0;
    }
    return {
      x: x,
      y: y,
      dx: dx,
      dy: dy
    };
  }
  d3.random = {
    normal: function(µ, σ) {
      var n = arguments.length;
      if (n < 2) σ = 1;
      if (n < 1) µ = 0;
      return function() {
        var x, y, r;
        do {
          x = Math.random() * 2 - 1;
          y = Math.random() * 2 - 1;
          r = x * x + y * y;
        } while (!r || r > 1);
        return µ + σ * x * Math.sqrt(-2 * Math.log(r) / r);
      };
    },
    logNormal: function() {
      var random = d3.random.normal.apply(d3, arguments);
      return function() {
        return Math.exp(random());
      };
    },
    bates: function(m) {
      var random = d3.random.irwinHall(m);
      return function() {
        return random() / m;
      };
    },
    irwinHall: function(m) {
      return function() {
        for (var s = 0, j = 0; j < m; j++) s += Math.random();
        return s;
      };
    }
  };
  d3.scale = {};
  function d3_scaleExtent(domain) {
    var start = domain[0], stop = domain[domain.length - 1];
    return start < stop ? [ start, stop ] : [ stop, start ];
  }
  function d3_scaleRange(scale) {
    return scale.rangeExtent ? scale.rangeExtent() : d3_scaleExtent(scale.range());
  }
  function d3_scale_bilinear(domain, range, uninterpolate, interpolate) {
    var u = uninterpolate(domain[0], domain[1]), i = interpolate(range[0], range[1]);
    return function(x) {
      return i(u(x));
    };
  }
  function d3_scale_nice(domain, nice) {
    var i0 = 0, i1 = domain.length - 1, x0 = domain[i0], x1 = domain[i1], dx;
    if (x1 < x0) {
      dx = i0, i0 = i1, i1 = dx;
      dx = x0, x0 = x1, x1 = dx;
    }
    domain[i0] = nice.floor(x0);
    domain[i1] = nice.ceil(x1);
    return domain;
  }
  function d3_scale_niceStep(step) {
    return step ? {
      floor: function(x) {
        return Math.floor(x / step) * step;
      },
      ceil: function(x) {
        return Math.ceil(x / step) * step;
      }
    } : d3_scale_niceIdentity;
  }
  var d3_scale_niceIdentity = {
    floor: d3_identity,
    ceil: d3_identity
  };
  function d3_scale_polylinear(domain, range, uninterpolate, interpolate) {
    var u = [], i = [], j = 0, k = Math.min(domain.length, range.length) - 1;
    if (domain[k] < domain[0]) {
      domain = domain.slice().reverse();
      range = range.slice().reverse();
    }
    while (++j <= k) {
      u.push(uninterpolate(domain[j - 1], domain[j]));
      i.push(interpolate(range[j - 1], range[j]));
    }
    return function(x) {
      var j = d3.bisect(domain, x, 1, k) - 1;
      return i[j](u[j](x));
    };
  }
  d3.scale.linear = function() {
    return d3_scale_linear([ 0, 1 ], [ 0, 1 ], d3_interpolate, false);
  };
  function d3_scale_linear(domain, range, interpolate, clamp) {
    var output, input;
    function rescale() {
      var linear = Math.min(domain.length, range.length) > 2 ? d3_scale_polylinear : d3_scale_bilinear, uninterpolate = clamp ? d3_uninterpolateClamp : d3_uninterpolateNumber;
      output = linear(domain, range, uninterpolate, interpolate);
      input = linear(range, domain, uninterpolate, d3_interpolate);
      return scale;
    }
    function scale(x) {
      return output(x);
    }
    scale.invert = function(y) {
      return input(y);
    };
    scale.domain = function(x) {
      if (!arguments.length) return domain;
      domain = x.map(Number);
      return rescale();
    };
    scale.range = function(x) {
      if (!arguments.length) return range;
      range = x;
      return rescale();
    };
    scale.rangeRound = function(x) {
      return scale.range(x).interpolate(d3_interpolateRound);
    };
    scale.clamp = function(x) {
      if (!arguments.length) return clamp;
      clamp = x;
      return rescale();
    };
    scale.interpolate = function(x) {
      if (!arguments.length) return interpolate;
      interpolate = x;
      return rescale();
    };
    scale.ticks = function(m) {
      return d3_scale_linearTicks(domain, m);
    };
    scale.tickFormat = function(m, format) {
      return d3_scale_linearTickFormat(domain, m, format);
    };
    scale.nice = function(m) {
      d3_scale_linearNice(domain, m);
      return rescale();
    };
    scale.copy = function() {
      return d3_scale_linear(domain, range, interpolate, clamp);
    };
    return rescale();
  }
  function d3_scale_linearRebind(scale, linear) {
    return d3.rebind(scale, linear, "range", "rangeRound", "interpolate", "clamp");
  }
  function d3_scale_linearNice(domain, m) {
    d3_scale_nice(domain, d3_scale_niceStep(d3_scale_linearTickRange(domain, m)[2]));
    d3_scale_nice(domain, d3_scale_niceStep(d3_scale_linearTickRange(domain, m)[2]));
    return domain;
  }
  function d3_scale_linearTickRange(domain, m) {
    if (m == null) m = 10;
    var extent = d3_scaleExtent(domain), span = extent[1] - extent[0], step = Math.pow(10, Math.floor(Math.log(span / m) / Math.LN10)), err = m / span * step;
    if (err <= .15) step *= 10; else if (err <= .35) step *= 5; else if (err <= .75) step *= 2;
    extent[0] = Math.ceil(extent[0] / step) * step;
    extent[1] = Math.floor(extent[1] / step) * step + step * .5;
    extent[2] = step;
    return extent;
  }
  function d3_scale_linearTicks(domain, m) {
    return d3.range.apply(d3, d3_scale_linearTickRange(domain, m));
  }
  function d3_scale_linearTickFormat(domain, m, format) {
    var range = d3_scale_linearTickRange(domain, m);
    if (format) {
      var match = d3_format_re.exec(format);
      match.shift();
      if (match[8] === "s") {
        var prefix = d3.formatPrefix(Math.max(abs(range[0]), abs(range[1])));
        if (!match[7]) match[7] = "." + d3_scale_linearPrecision(prefix.scale(range[2]));
        match[8] = "f";
        format = d3.format(match.join(""));
        return function(d) {
          return format(prefix.scale(d)) + prefix.symbol;
        };
      }
      if (!match[7]) match[7] = "." + d3_scale_linearFormatPrecision(match[8], range);
      format = match.join("");
    } else {
      format = ",." + d3_scale_linearPrecision(range[2]) + "f";
    }
    return d3.format(format);
  }
  var d3_scale_linearFormatSignificant = {
    s: 1,
    g: 1,
    p: 1,
    r: 1,
    e: 1
  };
  function d3_scale_linearPrecision(value) {
    return -Math.floor(Math.log(value) / Math.LN10 + .01);
  }
  function d3_scale_linearFormatPrecision(type, range) {
    var p = d3_scale_linearPrecision(range[2]);
    return type in d3_scale_linearFormatSignificant ? Math.abs(p - d3_scale_linearPrecision(Math.max(abs(range[0]), abs(range[1])))) + +(type !== "e") : p - (type === "%") * 2;
  }
  d3.scale.log = function() {
    return d3_scale_log(d3.scale.linear().domain([ 0, 1 ]), 10, true, [ 1, 10 ]);
  };
  function d3_scale_log(linear, base, positive, domain) {
    function log(x) {
      return (positive ? Math.log(x < 0 ? 0 : x) : -Math.log(x > 0 ? 0 : -x)) / Math.log(base);
    }
    function pow(x) {
      return positive ? Math.pow(base, x) : -Math.pow(base, -x);
    }
    function scale(x) {
      return linear(log(x));
    }
    scale.invert = function(x) {
      return pow(linear.invert(x));
    };
    scale.domain = function(x) {
      if (!arguments.length) return domain;
      positive = x[0] >= 0;
      linear.domain((domain = x.map(Number)).map(log));
      return scale;
    };
    scale.base = function(_) {
      if (!arguments.length) return base;
      base = +_;
      linear.domain(domain.map(log));
      return scale;
    };
    scale.nice = function() {
      var niced = d3_scale_nice(domain.map(log), positive ? Math : d3_scale_logNiceNegative);
      linear.domain(niced);
      domain = niced.map(pow);
      return scale;
    };
    scale.ticks = function() {
      var extent = d3_scaleExtent(domain), ticks = [], u = extent[0], v = extent[1], i = Math.floor(log(u)), j = Math.ceil(log(v)), n = base % 1 ? 2 : base;
      if (isFinite(j - i)) {
        if (positive) {
          for (;i < j; i++) for (var k = 1; k < n; k++) ticks.push(pow(i) * k);
          ticks.push(pow(i));
        } else {
          ticks.push(pow(i));
          for (;i++ < j; ) for (var k = n - 1; k > 0; k--) ticks.push(pow(i) * k);
        }
        for (i = 0; ticks[i] < u; i++) {}
        for (j = ticks.length; ticks[j - 1] > v; j--) {}
        ticks = ticks.slice(i, j);
      }
      return ticks;
    };
    scale.tickFormat = function(n, format) {
      if (!arguments.length) return d3_scale_logFormat;
      if (arguments.length < 2) format = d3_scale_logFormat; else if (typeof format !== "function") format = d3.format(format);
      var k = Math.max(1, base * n / scale.ticks().length);
      return function(d) {
        var i = d / pow(Math.round(log(d)));
        if (i * base < base - .5) i *= base;
        return i <= k ? format(d) : "";
      };
    };
    scale.copy = function() {
      return d3_scale_log(linear.copy(), base, positive, domain);
    };
    return d3_scale_linearRebind(scale, linear);
  }
  var d3_scale_logFormat = d3.format(".0e"), d3_scale_logNiceNegative = {
    floor: function(x) {
      return -Math.ceil(-x);
    },
    ceil: function(x) {
      return -Math.floor(-x);
    }
  };
  d3.scale.pow = function() {
    return d3_scale_pow(d3.scale.linear(), 1, [ 0, 1 ]);
  };
  function d3_scale_pow(linear, exponent, domain) {
    var powp = d3_scale_powPow(exponent), powb = d3_scale_powPow(1 / exponent);
    function scale(x) {
      return linear(powp(x));
    }
    scale.invert = function(x) {
      return powb(linear.invert(x));
    };
    scale.domain = function(x) {
      if (!arguments.length) return domain;
      linear.domain((domain = x.map(Number)).map(powp));
      return scale;
    };
    scale.ticks = function(m) {
      return d3_scale_linearTicks(domain, m);
    };
    scale.tickFormat = function(m, format) {
      return d3_scale_linearTickFormat(domain, m, format);
    };
    scale.nice = function(m) {
      return scale.domain(d3_scale_linearNice(domain, m));
    };
    scale.exponent = function(x) {
      if (!arguments.length) return exponent;
      powp = d3_scale_powPow(exponent = x);
      powb = d3_scale_powPow(1 / exponent);
      linear.domain(domain.map(powp));
      return scale;
    };
    scale.copy = function() {
      return d3_scale_pow(linear.copy(), exponent, domain);
    };
    return d3_scale_linearRebind(scale, linear);
  }
  function d3_scale_powPow(e) {
    return function(x) {
      return x < 0 ? -Math.pow(-x, e) : Math.pow(x, e);
    };
  }
  d3.scale.sqrt = function() {
    return d3.scale.pow().exponent(.5);
  };
  d3.scale.ordinal = function() {
    return d3_scale_ordinal([], {
      t: "range",
      a: [ [] ]
    });
  };
  function d3_scale_ordinal(domain, ranger) {
    var index, range, rangeBand;
    function scale(x) {
      return range[((index.get(x) || (ranger.t === "range" ? index.set(x, domain.push(x)) : NaN)) - 1) % range.length];
    }
    function steps(start, step) {
      return d3.range(domain.length).map(function(i) {
        return start + step * i;
      });
    }
    scale.domain = function(x) {
      if (!arguments.length) return domain;
      domain = [];
      index = new d3_Map();
      var i = -1, n = x.length, xi;
      while (++i < n) if (!index.has(xi = x[i])) index.set(xi, domain.push(xi));
      return scale[ranger.t].apply(scale, ranger.a);
    };
    scale.range = function(x) {
      if (!arguments.length) return range;
      range = x;
      rangeBand = 0;
      ranger = {
        t: "range",
        a: arguments
      };
      return scale;
    };
    scale.rangePoints = function(x, padding) {
      if (arguments.length < 2) padding = 0;
      var start = x[0], stop = x[1], step = domain.length < 2 ? (start = (start + stop) / 2, 
      0) : (stop - start) / (domain.length - 1 + padding);
      range = steps(start + step * padding / 2, step);
      rangeBand = 0;
      ranger = {
        t: "rangePoints",
        a: arguments
      };
      return scale;
    };
    scale.rangeRoundPoints = function(x, padding) {
      if (arguments.length < 2) padding = 0;
      var start = x[0], stop = x[1], step = domain.length < 2 ? (start = stop = Math.round((start + stop) / 2), 
      0) : (stop - start) / (domain.length - 1 + padding) | 0;
      range = steps(start + Math.round(step * padding / 2 + (stop - start - (domain.length - 1 + padding) * step) / 2), step);
      rangeBand = 0;
      ranger = {
        t: "rangeRoundPoints",
        a: arguments
      };
      return scale;
    };
    scale.rangeBands = function(x, padding, outerPadding) {
      if (arguments.length < 2) padding = 0;
      if (arguments.length < 3) outerPadding = padding;
      var reverse = x[1] < x[0], start = x[reverse - 0], stop = x[1 - reverse], step = (stop - start) / (domain.length - padding + 2 * outerPadding);
      range = steps(start + step * outerPadding, step);
      if (reverse) range.reverse();
      rangeBand = step * (1 - padding);
      ranger = {
        t: "rangeBands",
        a: arguments
      };
      return scale;
    };
    scale.rangeRoundBands = function(x, padding, outerPadding) {
      if (arguments.length < 2) padding = 0;
      if (arguments.length < 3) outerPadding = padding;
      var reverse = x[1] < x[0], start = x[reverse - 0], stop = x[1 - reverse], step = Math.floor((stop - start) / (domain.length - padding + 2 * outerPadding));
      range = steps(start + Math.round((stop - start - (domain.length - padding) * step) / 2), step);
      if (reverse) range.reverse();
      rangeBand = Math.round(step * (1 - padding));
      ranger = {
        t: "rangeRoundBands",
        a: arguments
      };
      return scale;
    };
    scale.rangeBand = function() {
      return rangeBand;
    };
    scale.rangeExtent = function() {
      return d3_scaleExtent(ranger.a[0]);
    };
    scale.copy = function() {
      return d3_scale_ordinal(domain, ranger);
    };
    return scale.domain(domain);
  }
  d3.scale.category10 = function() {
    return d3.scale.ordinal().range(d3_category10);
  };
  d3.scale.category20 = function() {
    return d3.scale.ordinal().range(d3_category20);
  };
  d3.scale.category20b = function() {
    return d3.scale.ordinal().range(d3_category20b);
  };
  d3.scale.category20c = function() {
    return d3.scale.ordinal().range(d3_category20c);
  };
  var d3_category10 = [ 2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175 ].map(d3_rgbString);
  var d3_category20 = [ 2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725 ].map(d3_rgbString);
  var d3_category20b = [ 3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654 ].map(d3_rgbString);
  var d3_category20c = [ 3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081 ].map(d3_rgbString);
  d3.scale.quantile = function() {
    return d3_scale_quantile([], []);
  };
  function d3_scale_quantile(domain, range) {
    var thresholds;
    function rescale() {
      var k = 0, q = range.length;
      thresholds = [];
      while (++k < q) thresholds[k - 1] = d3.quantile(domain, k / q);
      return scale;
    }
    function scale(x) {
      if (!isNaN(x = +x)) return range[d3.bisect(thresholds, x)];
    }
    scale.domain = function(x) {
      if (!arguments.length) return domain;
      domain = x.map(d3_number).filter(d3_numeric).sort(d3_ascending);
      return rescale();
    };
    scale.range = function(x) {
      if (!arguments.length) return range;
      range = x;
      return rescale();
    };
    scale.quantiles = function() {
      return thresholds;
    };
    scale.invertExtent = function(y) {
      y = range.indexOf(y);
      return y < 0 ? [ NaN, NaN ] : [ y > 0 ? thresholds[y - 1] : domain[0], y < thresholds.length ? thresholds[y] : domain[domain.length - 1] ];
    };
    scale.copy = function() {
      return d3_scale_quantile(domain, range);
    };
    return rescale();
  }
  d3.scale.quantize = function() {
    return d3_scale_quantize(0, 1, [ 0, 1 ]);
  };
  function d3_scale_quantize(x0, x1, range) {
    var kx, i;
    function scale(x) {
      return range[Math.max(0, Math.min(i, Math.floor(kx * (x - x0))))];
    }
    function rescale() {
      kx = range.length / (x1 - x0);
      i = range.length - 1;
      return scale;
    }
    scale.domain = function(x) {
      if (!arguments.length) return [ x0, x1 ];
      x0 = +x[0];
      x1 = +x[x.length - 1];
      return rescale();
    };
    scale.range = function(x) {
      if (!arguments.length) return range;
      range = x;
      return rescale();
    };
    scale.invertExtent = function(y) {
      y = range.indexOf(y);
      y = y < 0 ? NaN : y / kx + x0;
      return [ y, y + 1 / kx ];
    };
    scale.copy = function() {
      return d3_scale_quantize(x0, x1, range);
    };
    return rescale();
  }
  d3.scale.threshold = function() {
    return d3_scale_threshold([ .5 ], [ 0, 1 ]);
  };
  function d3_scale_threshold(domain, range) {
    function scale(x) {
      if (x <= x) return range[d3.bisect(domain, x)];
    }
    scale.domain = function(_) {
      if (!arguments.length) return domain;
      domain = _;
      return scale;
    };
    scale.range = function(_) {
      if (!arguments.length) return range;
      range = _;
      return scale;
    };
    scale.invertExtent = function(y) {
      y = range.indexOf(y);
      return [ domain[y - 1], domain[y] ];
    };
    scale.copy = function() {
      return d3_scale_threshold(domain, range);
    };
    return scale;
  }
  d3.scale.identity = function() {
    return d3_scale_identity([ 0, 1 ]);
  };
  function d3_scale_identity(domain) {
    function identity(x) {
      return +x;
    }
    identity.invert = identity;
    identity.domain = identity.range = function(x) {
      if (!arguments.length) return domain;
      domain = x.map(identity);
      return identity;
    };
    identity.ticks = function(m) {
      return d3_scale_linearTicks(domain, m);
    };
    identity.tickFormat = function(m, format) {
      return d3_scale_linearTickFormat(domain, m, format);
    };
    identity.copy = function() {
      return d3_scale_identity(domain);
    };
    return identity;
  }
  d3.svg = {};
  function d3_zero() {
    return 0;
  }
  d3.svg.arc = function() {
    var innerRadius = d3_svg_arcInnerRadius, outerRadius = d3_svg_arcOuterRadius, cornerRadius = d3_zero, padRadius = d3_svg_arcAuto, startAngle = d3_svg_arcStartAngle, endAngle = d3_svg_arcEndAngle, padAngle = d3_svg_arcPadAngle;
    function arc() {
      var r0 = Math.max(0, +innerRadius.apply(this, arguments)), r1 = Math.max(0, +outerRadius.apply(this, arguments)), a0 = startAngle.apply(this, arguments) - halfπ, a1 = endAngle.apply(this, arguments) - halfπ, da = Math.abs(a1 - a0), cw = a0 > a1 ? 0 : 1;
      if (r1 < r0) rc = r1, r1 = r0, r0 = rc;
      if (da >= τε) return circleSegment(r1, cw) + (r0 ? circleSegment(r0, 1 - cw) : "") + "Z";
      var rc, cr, rp, ap, p0 = 0, p1 = 0, x0, y0, x1, y1, x2, y2, x3, y3, path = [];
      if (ap = (+padAngle.apply(this, arguments) || 0) / 2) {
        rp = padRadius === d3_svg_arcAuto ? Math.sqrt(r0 * r0 + r1 * r1) : +padRadius.apply(this, arguments);
        if (!cw) p1 *= -1;
        if (r1) p1 = d3_asin(rp / r1 * Math.sin(ap));
        if (r0) p0 = d3_asin(rp / r0 * Math.sin(ap));
      }
      if (r1) {
        x0 = r1 * Math.cos(a0 + p1);
        y0 = r1 * Math.sin(a0 + p1);
        x1 = r1 * Math.cos(a1 - p1);
        y1 = r1 * Math.sin(a1 - p1);
        var l1 = Math.abs(a1 - a0 - 2 * p1) <= π ? 0 : 1;
        if (p1 && d3_svg_arcSweep(x0, y0, x1, y1) === cw ^ l1) {
          var h1 = (a0 + a1) / 2;
          x0 = r1 * Math.cos(h1);
          y0 = r1 * Math.sin(h1);
          x1 = y1 = null;
        }
      } else {
        x0 = y0 = 0;
      }
      if (r0) {
        x2 = r0 * Math.cos(a1 - p0);
        y2 = r0 * Math.sin(a1 - p0);
        x3 = r0 * Math.cos(a0 + p0);
        y3 = r0 * Math.sin(a0 + p0);
        var l0 = Math.abs(a0 - a1 + 2 * p0) <= π ? 0 : 1;
        if (p0 && d3_svg_arcSweep(x2, y2, x3, y3) === 1 - cw ^ l0) {
          var h0 = (a0 + a1) / 2;
          x2 = r0 * Math.cos(h0);
          y2 = r0 * Math.sin(h0);
          x3 = y3 = null;
        }
      } else {
        x2 = y2 = 0;
      }
      if (da > ε && (rc = Math.min(Math.abs(r1 - r0) / 2, +cornerRadius.apply(this, arguments))) > .001) {
        cr = r0 < r1 ^ cw ? 0 : 1;
        var rc1 = rc, rc0 = rc;
        if (da < π) {
          var oc = x3 == null ? [ x2, y2 ] : x1 == null ? [ x0, y0 ] : d3_geom_polygonIntersect([ x0, y0 ], [ x3, y3 ], [ x1, y1 ], [ x2, y2 ]), ax = x0 - oc[0], ay = y0 - oc[1], bx = x1 - oc[0], by = y1 - oc[1], kc = 1 / Math.sin(Math.acos((ax * bx + ay * by) / (Math.sqrt(ax * ax + ay * ay) * Math.sqrt(bx * bx + by * by))) / 2), lc = Math.sqrt(oc[0] * oc[0] + oc[1] * oc[1]);
          rc0 = Math.min(rc, (r0 - lc) / (kc - 1));
          rc1 = Math.min(rc, (r1 - lc) / (kc + 1));
        }
        if (x1 != null) {
          var t30 = d3_svg_arcCornerTangents(x3 == null ? [ x2, y2 ] : [ x3, y3 ], [ x0, y0 ], r1, rc1, cw), t12 = d3_svg_arcCornerTangents([ x1, y1 ], [ x2, y2 ], r1, rc1, cw);
          if (rc === rc1) {
            path.push("M", t30[0], "A", rc1, ",", rc1, " 0 0,", cr, " ", t30[1], "A", r1, ",", r1, " 0 ", 1 - cw ^ d3_svg_arcSweep(t30[1][0], t30[1][1], t12[1][0], t12[1][1]), ",", cw, " ", t12[1], "A", rc1, ",", rc1, " 0 0,", cr, " ", t12[0]);
          } else {
            path.push("M", t30[0], "A", rc1, ",", rc1, " 0 1,", cr, " ", t12[0]);
          }
        } else {
          path.push("M", x0, ",", y0);
        }
        if (x3 != null) {
          var t03 = d3_svg_arcCornerTangents([ x0, y0 ], [ x3, y3 ], r0, -rc0, cw), t21 = d3_svg_arcCornerTangents([ x2, y2 ], x1 == null ? [ x0, y0 ] : [ x1, y1 ], r0, -rc0, cw);
          if (rc === rc0) {
            path.push("L", t21[0], "A", rc0, ",", rc0, " 0 0,", cr, " ", t21[1], "A", r0, ",", r0, " 0 ", cw ^ d3_svg_arcSweep(t21[1][0], t21[1][1], t03[1][0], t03[1][1]), ",", 1 - cw, " ", t03[1], "A", rc0, ",", rc0, " 0 0,", cr, " ", t03[0]);
          } else {
            path.push("L", t21[0], "A", rc0, ",", rc0, " 0 0,", cr, " ", t03[0]);
          }
        } else {
          path.push("L", x2, ",", y2);
        }
      } else {
        path.push("M", x0, ",", y0);
        if (x1 != null) path.push("A", r1, ",", r1, " 0 ", l1, ",", cw, " ", x1, ",", y1);
        path.push("L", x2, ",", y2);
        if (x3 != null) path.push("A", r0, ",", r0, " 0 ", l0, ",", 1 - cw, " ", x3, ",", y3);
      }
      path.push("Z");
      return path.join("");
    }
    function circleSegment(r1, cw) {
      return "M0," + r1 + "A" + r1 + "," + r1 + " 0 1," + cw + " 0," + -r1 + "A" + r1 + "," + r1 + " 0 1," + cw + " 0," + r1;
    }
    arc.innerRadius = function(v) {
      if (!arguments.length) return innerRadius;
      innerRadius = d3_functor(v);
      return arc;
    };
    arc.outerRadius = function(v) {
      if (!arguments.length) return outerRadius;
      outerRadius = d3_functor(v);
      return arc;
    };
    arc.cornerRadius = function(v) {
      if (!arguments.length) return cornerRadius;
      cornerRadius = d3_functor(v);
      return arc;
    };
    arc.padRadius = function(v) {
      if (!arguments.length) return padRadius;
      padRadius = v == d3_svg_arcAuto ? d3_svg_arcAuto : d3_functor(v);
      return arc;
    };
    arc.startAngle = function(v) {
      if (!arguments.length) return startAngle;
      startAngle = d3_functor(v);
      return arc;
    };
    arc.endAngle = function(v) {
      if (!arguments.length) return endAngle;
      endAngle = d3_functor(v);
      return arc;
    };
    arc.padAngle = function(v) {
      if (!arguments.length) return padAngle;
      padAngle = d3_functor(v);
      return arc;
    };
    arc.centroid = function() {
      var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2, a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - halfπ;
      return [ Math.cos(a) * r, Math.sin(a) * r ];
    };
    return arc;
  };
  var d3_svg_arcAuto = "auto";
  function d3_svg_arcInnerRadius(d) {
    return d.innerRadius;
  }
  function d3_svg_arcOuterRadius(d) {
    return d.outerRadius;
  }
  function d3_svg_arcStartAngle(d) {
    return d.startAngle;
  }
  function d3_svg_arcEndAngle(d) {
    return d.endAngle;
  }
  function d3_svg_arcPadAngle(d) {
    return d && d.padAngle;
  }
  function d3_svg_arcSweep(x0, y0, x1, y1) {
    return (x0 - x1) * y0 - (y0 - y1) * x0 > 0 ? 0 : 1;
  }
  function d3_svg_arcCornerTangents(p0, p1, r1, rc, cw) {
    var x01 = p0[0] - p1[0], y01 = p0[1] - p1[1], lo = (cw ? rc : -rc) / Math.sqrt(x01 * x01 + y01 * y01), ox = lo * y01, oy = -lo * x01, x1 = p0[0] + ox, y1 = p0[1] + oy, x2 = p1[0] + ox, y2 = p1[1] + oy, x3 = (x1 + x2) / 2, y3 = (y1 + y2) / 2, dx = x2 - x1, dy = y2 - y1, d2 = dx * dx + dy * dy, r = r1 - rc, D = x1 * y2 - x2 * y1, d = (dy < 0 ? -1 : 1) * Math.sqrt(Math.max(0, r * r * d2 - D * D)), cx0 = (D * dy - dx * d) / d2, cy0 = (-D * dx - dy * d) / d2, cx1 = (D * dy + dx * d) / d2, cy1 = (-D * dx + dy * d) / d2, dx0 = cx0 - x3, dy0 = cy0 - y3, dx1 = cx1 - x3, dy1 = cy1 - y3;
    if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;
    return [ [ cx0 - ox, cy0 - oy ], [ cx0 * r1 / r, cy0 * r1 / r ] ];
  }
  function d3_svg_line(projection) {
    var x = d3_geom_pointX, y = d3_geom_pointY, defined = d3_true, interpolate = d3_svg_lineLinear, interpolateKey = interpolate.key, tension = .7;
    function line(data) {
      var segments = [], points = [], i = -1, n = data.length, d, fx = d3_functor(x), fy = d3_functor(y);
      function segment() {
        segments.push("M", interpolate(projection(points), tension));
      }
      while (++i < n) {
        if (defined.call(this, d = data[i], i)) {
          points.push([ +fx.call(this, d, i), +fy.call(this, d, i) ]);
        } else if (points.length) {
          segment();
          points = [];
        }
      }
      if (points.length) segment();
      return segments.length ? segments.join("") : null;
    }
    line.x = function(_) {
      if (!arguments.length) return x;
      x = _;
      return line;
    };
    line.y = function(_) {
      if (!arguments.length) return y;
      y = _;
      return line;
    };
    line.defined = function(_) {
      if (!arguments.length) return defined;
      defined = _;
      return line;
    };
    line.interpolate = function(_) {
      if (!arguments.length) return interpolateKey;
      if (typeof _ === "function") interpolateKey = interpolate = _; else interpolateKey = (interpolate = d3_svg_lineInterpolators.get(_) || d3_svg_lineLinear).key;
      return line;
    };
    line.tension = function(_) {
      if (!arguments.length) return tension;
      tension = _;
      return line;
    };
    return line;
  }
  d3.svg.line = function() {
    return d3_svg_line(d3_identity);
  };
  var d3_svg_lineInterpolators = d3.map({
    linear: d3_svg_lineLinear,
    "linear-closed": d3_svg_lineLinearClosed,
    step: d3_svg_lineStep,
    "step-before": d3_svg_lineStepBefore,
    "step-after": d3_svg_lineStepAfter,
    basis: d3_svg_lineBasis,
    "basis-open": d3_svg_lineBasisOpen,
    "basis-closed": d3_svg_lineBasisClosed,
    bundle: d3_svg_lineBundle,
    cardinal: d3_svg_lineCardinal,
    "cardinal-open": d3_svg_lineCardinalOpen,
    "cardinal-closed": d3_svg_lineCardinalClosed,
    monotone: d3_svg_lineMonotone
  });
  d3_svg_lineInterpolators.forEach(function(key, value) {
    value.key = key;
    value.closed = /-closed$/.test(key);
  });
  function d3_svg_lineLinear(points) {
    return points.length > 1 ? points.join("L") : points + "Z";
  }
  function d3_svg_lineLinearClosed(points) {
    return points.join("L") + "Z";
  }
  function d3_svg_lineStep(points) {
    var i = 0, n = points.length, p = points[0], path = [ p[0], ",", p[1] ];
    while (++i < n) path.push("H", (p[0] + (p = points[i])[0]) / 2, "V", p[1]);
    if (n > 1) path.push("H", p[0]);
    return path.join("");
  }
  function d3_svg_lineStepBefore(points) {
    var i = 0, n = points.length, p = points[0], path = [ p[0], ",", p[1] ];
    while (++i < n) path.push("V", (p = points[i])[1], "H", p[0]);
    return path.join("");
  }
  function d3_svg_lineStepAfter(points) {
    var i = 0, n = points.length, p = points[0], path = [ p[0], ",", p[1] ];
    while (++i < n) path.push("H", (p = points[i])[0], "V", p[1]);
    return path.join("");
  }
  function d3_svg_lineCardinalOpen(points, tension) {
    return points.length < 4 ? d3_svg_lineLinear(points) : points[1] + d3_svg_lineHermite(points.slice(1, -1), d3_svg_lineCardinalTangents(points, tension));
  }
  function d3_svg_lineCardinalClosed(points, tension) {
    return points.length < 3 ? d3_svg_lineLinearClosed(points) : points[0] + d3_svg_lineHermite((points.push(points[0]), 
    points), d3_svg_lineCardinalTangents([ points[points.length - 2] ].concat(points, [ points[1] ]), tension));
  }
  function d3_svg_lineCardinal(points, tension) {
    return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite(points, d3_svg_lineCardinalTangents(points, tension));
  }
  function d3_svg_lineHermite(points, tangents) {
    if (tangents.length < 1 || points.length != tangents.length && points.length != tangents.length + 2) {
      return d3_svg_lineLinear(points);
    }
    var quad = points.length != tangents.length, path = "", p0 = points[0], p = points[1], t0 = tangents[0], t = t0, pi = 1;
    if (quad) {
      path += "Q" + (p[0] - t0[0] * 2 / 3) + "," + (p[1] - t0[1] * 2 / 3) + "," + p[0] + "," + p[1];
      p0 = points[1];
      pi = 2;
    }
    if (tangents.length > 1) {
      t = tangents[1];
      p = points[pi];
      pi++;
      path += "C" + (p0[0] + t0[0]) + "," + (p0[1] + t0[1]) + "," + (p[0] - t[0]) + "," + (p[1] - t[1]) + "," + p[0] + "," + p[1];
      for (var i = 2; i < tangents.length; i++, pi++) {
        p = points[pi];
        t = tangents[i];
        path += "S" + (p[0] - t[0]) + "," + (p[1] - t[1]) + "," + p[0] + "," + p[1];
      }
    }
    if (quad) {
      var lp = points[pi];
      path += "Q" + (p[0] + t[0] * 2 / 3) + "," + (p[1] + t[1] * 2 / 3) + "," + lp[0] + "," + lp[1];
    }
    return path;
  }
  function d3_svg_lineCardinalTangents(points, tension) {
    var tangents = [], a = (1 - tension) / 2, p0, p1 = points[0], p2 = points[1], i = 1, n = points.length;
    while (++i < n) {
      p0 = p1;
      p1 = p2;
      p2 = points[i];
      tangents.push([ a * (p2[0] - p0[0]), a * (p2[1] - p0[1]) ]);
    }
    return tangents;
  }
  function d3_svg_lineBasis(points) {
    if (points.length < 3) return d3_svg_lineLinear(points);
    var i = 1, n = points.length, pi = points[0], x0 = pi[0], y0 = pi[1], px = [ x0, x0, x0, (pi = points[1])[0] ], py = [ y0, y0, y0, pi[1] ], path = [ x0, ",", y0, "L", d3_svg_lineDot4(d3_svg_lineBasisBezier3, px), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, py) ];
    points.push(points[n - 1]);
    while (++i <= n) {
      pi = points[i];
      px.shift();
      px.push(pi[0]);
      py.shift();
      py.push(pi[1]);
      d3_svg_lineBasisBezier(path, px, py);
    }
    points.pop();
    path.push("L", pi);
    return path.join("");
  }
  function d3_svg_lineBasisOpen(points) {
    if (points.length < 4) return d3_svg_lineLinear(points);
    var path = [], i = -1, n = points.length, pi, px = [ 0 ], py = [ 0 ];
    while (++i < 3) {
      pi = points[i];
      px.push(pi[0]);
      py.push(pi[1]);
    }
    path.push(d3_svg_lineDot4(d3_svg_lineBasisBezier3, px) + "," + d3_svg_lineDot4(d3_svg_lineBasisBezier3, py));
    --i;
    while (++i < n) {
      pi = points[i];
      px.shift();
      px.push(pi[0]);
      py.shift();
      py.push(pi[1]);
      d3_svg_lineBasisBezier(path, px, py);
    }
    return path.join("");
  }
  function d3_svg_lineBasisClosed(points) {
    var path, i = -1, n = points.length, m = n + 4, pi, px = [], py = [];
    while (++i < 4) {
      pi = points[i % n];
      px.push(pi[0]);
      py.push(pi[1]);
    }
    path = [ d3_svg_lineDot4(d3_svg_lineBasisBezier3, px), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, py) ];
    --i;
    while (++i < m) {
      pi = points[i % n];
      px.shift();
      px.push(pi[0]);
      py.shift();
      py.push(pi[1]);
      d3_svg_lineBasisBezier(path, px, py);
    }
    return path.join("");
  }
  function d3_svg_lineBundle(points, tension) {
    var n = points.length - 1;
    if (n) {
      var x0 = points[0][0], y0 = points[0][1], dx = points[n][0] - x0, dy = points[n][1] - y0, i = -1, p, t;
      while (++i <= n) {
        p = points[i];
        t = i / n;
        p[0] = tension * p[0] + (1 - tension) * (x0 + t * dx);
        p[1] = tension * p[1] + (1 - tension) * (y0 + t * dy);
      }
    }
    return d3_svg_lineBasis(points);
  }
  function d3_svg_lineDot4(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
  }
  var d3_svg_lineBasisBezier1 = [ 0, 2 / 3, 1 / 3, 0 ], d3_svg_lineBasisBezier2 = [ 0, 1 / 3, 2 / 3, 0 ], d3_svg_lineBasisBezier3 = [ 0, 1 / 6, 2 / 3, 1 / 6 ];
  function d3_svg_lineBasisBezier(path, x, y) {
    path.push("C", d3_svg_lineDot4(d3_svg_lineBasisBezier1, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier1, y), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier2, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier2, y), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, y));
  }
  function d3_svg_lineSlope(p0, p1) {
    return (p1[1] - p0[1]) / (p1[0] - p0[0]);
  }
  function d3_svg_lineFiniteDifferences(points) {
    var i = 0, j = points.length - 1, m = [], p0 = points[0], p1 = points[1], d = m[0] = d3_svg_lineSlope(p0, p1);
    while (++i < j) {
      m[i] = (d + (d = d3_svg_lineSlope(p0 = p1, p1 = points[i + 1]))) / 2;
    }
    m[i] = d;
    return m;
  }
  function d3_svg_lineMonotoneTangents(points) {
    var tangents = [], d, a, b, s, m = d3_svg_lineFiniteDifferences(points), i = -1, j = points.length - 1;
    while (++i < j) {
      d = d3_svg_lineSlope(points[i], points[i + 1]);
      if (abs(d) < ε) {
        m[i] = m[i + 1] = 0;
      } else {
        a = m[i] / d;
        b = m[i + 1] / d;
        s = a * a + b * b;
        if (s > 9) {
          s = d * 3 / Math.sqrt(s);
          m[i] = s * a;
          m[i + 1] = s * b;
        }
      }
    }
    i = -1;
    while (++i <= j) {
      s = (points[Math.min(j, i + 1)][0] - points[Math.max(0, i - 1)][0]) / (6 * (1 + m[i] * m[i]));
      tangents.push([ s || 0, m[i] * s || 0 ]);
    }
    return tangents;
  }
  function d3_svg_lineMonotone(points) {
    return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite(points, d3_svg_lineMonotoneTangents(points));
  }
  d3.svg.line.radial = function() {
    var line = d3_svg_line(d3_svg_lineRadial);
    line.radius = line.x, delete line.x;
    line.angle = line.y, delete line.y;
    return line;
  };
  function d3_svg_lineRadial(points) {
    var point, i = -1, n = points.length, r, a;
    while (++i < n) {
      point = points[i];
      r = point[0];
      a = point[1] - halfπ;
      point[0] = r * Math.cos(a);
      point[1] = r * Math.sin(a);
    }
    return points;
  }
  function d3_svg_area(projection) {
    var x0 = d3_geom_pointX, x1 = d3_geom_pointX, y0 = 0, y1 = d3_geom_pointY, defined = d3_true, interpolate = d3_svg_lineLinear, interpolateKey = interpolate.key, interpolateReverse = interpolate, L = "L", tension = .7;
    function area(data) {
      var segments = [], points0 = [], points1 = [], i = -1, n = data.length, d, fx0 = d3_functor(x0), fy0 = d3_functor(y0), fx1 = x0 === x1 ? function() {
        return x;
      } : d3_functor(x1), fy1 = y0 === y1 ? function() {
        return y;
      } : d3_functor(y1), x, y;
      function segment() {
        segments.push("M", interpolate(projection(points1), tension), L, interpolateReverse(projection(points0.reverse()), tension), "Z");
      }
      while (++i < n) {
        if (defined.call(this, d = data[i], i)) {
          points0.push([ x = +fx0.call(this, d, i), y = +fy0.call(this, d, i) ]);
          points1.push([ +fx1.call(this, d, i), +fy1.call(this, d, i) ]);
        } else if (points0.length) {
          segment();
          points0 = [];
          points1 = [];
        }
      }
      if (points0.length) segment();
      return segments.length ? segments.join("") : null;
    }
    area.x = function(_) {
      if (!arguments.length) return x1;
      x0 = x1 = _;
      return area;
    };
    area.x0 = function(_) {
      if (!arguments.length) return x0;
      x0 = _;
      return area;
    };
    area.x1 = function(_) {
      if (!arguments.length) return x1;
      x1 = _;
      return area;
    };
    area.y = function(_) {
      if (!arguments.length) return y1;
      y0 = y1 = _;
      return area;
    };
    area.y0 = function(_) {
      if (!arguments.length) return y0;
      y0 = _;
      return area;
    };
    area.y1 = function(_) {
      if (!arguments.length) return y1;
      y1 = _;
      return area;
    };
    area.defined = function(_) {
      if (!arguments.length) return defined;
      defined = _;
      return area;
    };
    area.interpolate = function(_) {
      if (!arguments.length) return interpolateKey;
      if (typeof _ === "function") interpolateKey = interpolate = _; else interpolateKey = (interpolate = d3_svg_lineInterpolators.get(_) || d3_svg_lineLinear).key;
      interpolateReverse = interpolate.reverse || interpolate;
      L = interpolate.closed ? "M" : "L";
      return area;
    };
    area.tension = function(_) {
      if (!arguments.length) return tension;
      tension = _;
      return area;
    };
    return area;
  }
  d3_svg_lineStepBefore.reverse = d3_svg_lineStepAfter;
  d3_svg_lineStepAfter.reverse = d3_svg_lineStepBefore;
  d3.svg.area = function() {
    return d3_svg_area(d3_identity);
  };
  d3.svg.area.radial = function() {
    var area = d3_svg_area(d3_svg_lineRadial);
    area.radius = area.x, delete area.x;
    area.innerRadius = area.x0, delete area.x0;
    area.outerRadius = area.x1, delete area.x1;
    area.angle = area.y, delete area.y;
    area.startAngle = area.y0, delete area.y0;
    area.endAngle = area.y1, delete area.y1;
    return area;
  };
  d3.svg.chord = function() {
    var source = d3_source, target = d3_target, radius = d3_svg_chordRadius, startAngle = d3_svg_arcStartAngle, endAngle = d3_svg_arcEndAngle;
    function chord(d, i) {
      var s = subgroup(this, source, d, i), t = subgroup(this, target, d, i);
      return "M" + s.p0 + arc(s.r, s.p1, s.a1 - s.a0) + (equals(s, t) ? curve(s.r, s.p1, s.r, s.p0) : curve(s.r, s.p1, t.r, t.p0) + arc(t.r, t.p1, t.a1 - t.a0) + curve(t.r, t.p1, s.r, s.p0)) + "Z";
    }
    function subgroup(self, f, d, i) {
      var subgroup = f.call(self, d, i), r = radius.call(self, subgroup, i), a0 = startAngle.call(self, subgroup, i) - halfπ, a1 = endAngle.call(self, subgroup, i) - halfπ;
      return {
        r: r,
        a0: a0,
        a1: a1,
        p0: [ r * Math.cos(a0), r * Math.sin(a0) ],
        p1: [ r * Math.cos(a1), r * Math.sin(a1) ]
      };
    }
    function equals(a, b) {
      return a.a0 == b.a0 && a.a1 == b.a1;
    }
    function arc(r, p, a) {
      return "A" + r + "," + r + " 0 " + +(a > π) + ",1 " + p;
    }
    function curve(r0, p0, r1, p1) {
      return "Q 0,0 " + p1;
    }
    chord.radius = function(v) {
      if (!arguments.length) return radius;
      radius = d3_functor(v);
      return chord;
    };
    chord.source = function(v) {
      if (!arguments.length) return source;
      source = d3_functor(v);
      return chord;
    };
    chord.target = function(v) {
      if (!arguments.length) return target;
      target = d3_functor(v);
      return chord;
    };
    chord.startAngle = function(v) {
      if (!arguments.length) return startAngle;
      startAngle = d3_functor(v);
      return chord;
    };
    chord.endAngle = function(v) {
      if (!arguments.length) return endAngle;
      endAngle = d3_functor(v);
      return chord;
    };
    return chord;
  };
  function d3_svg_chordRadius(d) {
    return d.radius;
  }
  d3.svg.diagonal = function() {
    var source = d3_source, target = d3_target, projection = d3_svg_diagonalProjection;
    function diagonal(d, i) {
      var p0 = source.call(this, d, i), p3 = target.call(this, d, i), m = (p0.y + p3.y) / 2, p = [ p0, {
        x: p0.x,
        y: m
      }, {
        x: p3.x,
        y: m
      }, p3 ];
      p = p.map(projection);
      return "M" + p[0] + "C" + p[1] + " " + p[2] + " " + p[3];
    }
    diagonal.source = function(x) {
      if (!arguments.length) return source;
      source = d3_functor(x);
      return diagonal;
    };
    diagonal.target = function(x) {
      if (!arguments.length) return target;
      target = d3_functor(x);
      return diagonal;
    };
    diagonal.projection = function(x) {
      if (!arguments.length) return projection;
      projection = x;
      return diagonal;
    };
    return diagonal;
  };
  function d3_svg_diagonalProjection(d) {
    return [ d.x, d.y ];
  }
  d3.svg.diagonal.radial = function() {
    var diagonal = d3.svg.diagonal(), projection = d3_svg_diagonalProjection, projection_ = diagonal.projection;
    diagonal.projection = function(x) {
      return arguments.length ? projection_(d3_svg_diagonalRadialProjection(projection = x)) : projection;
    };
    return diagonal;
  };
  function d3_svg_diagonalRadialProjection(projection) {
    return function() {
      var d = projection.apply(this, arguments), r = d[0], a = d[1] - halfπ;
      return [ r * Math.cos(a), r * Math.sin(a) ];
    };
  }
  d3.svg.symbol = function() {
    var type = d3_svg_symbolType, size = d3_svg_symbolSize;
    function symbol(d, i) {
      return (d3_svg_symbols.get(type.call(this, d, i)) || d3_svg_symbolCircle)(size.call(this, d, i));
    }
    symbol.type = function(x) {
      if (!arguments.length) return type;
      type = d3_functor(x);
      return symbol;
    };
    symbol.size = function(x) {
      if (!arguments.length) return size;
      size = d3_functor(x);
      return symbol;
    };
    return symbol;
  };
  function d3_svg_symbolSize() {
    return 64;
  }
  function d3_svg_symbolType() {
    return "circle";
  }
  function d3_svg_symbolCircle(size) {
    var r = Math.sqrt(size / π);
    return "M0," + r + "A" + r + "," + r + " 0 1,1 0," + -r + "A" + r + "," + r + " 0 1,1 0," + r + "Z";
  }
  var d3_svg_symbols = d3.map({
    circle: d3_svg_symbolCircle,
    cross: function(size) {
      var r = Math.sqrt(size / 5) / 2;
      return "M" + -3 * r + "," + -r + "H" + -r + "V" + -3 * r + "H" + r + "V" + -r + "H" + 3 * r + "V" + r + "H" + r + "V" + 3 * r + "H" + -r + "V" + r + "H" + -3 * r + "Z";
    },
    diamond: function(size) {
      var ry = Math.sqrt(size / (2 * d3_svg_symbolTan30)), rx = ry * d3_svg_symbolTan30;
      return "M0," + -ry + "L" + rx + ",0" + " 0," + ry + " " + -rx + ",0" + "Z";
    },
    square: function(size) {
      var r = Math.sqrt(size) / 2;
      return "M" + -r + "," + -r + "L" + r + "," + -r + " " + r + "," + r + " " + -r + "," + r + "Z";
    },
    "triangle-down": function(size) {
      var rx = Math.sqrt(size / d3_svg_symbolSqrt3), ry = rx * d3_svg_symbolSqrt3 / 2;
      return "M0," + ry + "L" + rx + "," + -ry + " " + -rx + "," + -ry + "Z";
    },
    "triangle-up": function(size) {
      var rx = Math.sqrt(size / d3_svg_symbolSqrt3), ry = rx * d3_svg_symbolSqrt3 / 2;
      return "M0," + -ry + "L" + rx + "," + ry + " " + -rx + "," + ry + "Z";
    }
  });
  d3.svg.symbolTypes = d3_svg_symbols.keys();
  var d3_svg_symbolSqrt3 = Math.sqrt(3), d3_svg_symbolTan30 = Math.tan(30 * d3_radians);
  d3_selectionPrototype.transition = function(name) {
    var id = d3_transitionInheritId || ++d3_transitionId, ns = d3_transitionNamespace(name), subgroups = [], subgroup, node, transition = d3_transitionInherit || {
      time: Date.now(),
      ease: d3_ease_cubicInOut,
      delay: 0,
      duration: 250
    };
    for (var j = -1, m = this.length; ++j < m; ) {
      subgroups.push(subgroup = []);
      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
        if (node = group[i]) d3_transitionNode(node, i, ns, id, transition);
        subgroup.push(node);
      }
    }
    return d3_transition(subgroups, ns, id);
  };
  d3_selectionPrototype.interrupt = function(name) {
    return this.each(name == null ? d3_selection_interrupt : d3_selection_interruptNS(d3_transitionNamespace(name)));
  };
  var d3_selection_interrupt = d3_selection_interruptNS(d3_transitionNamespace());
  function d3_selection_interruptNS(ns) {
    return function() {
      var lock, activeId, active;
      if ((lock = this[ns]) && (active = lock[activeId = lock.active])) {
        active.timer.c = null;
        active.timer.t = NaN;
        if (--lock.count) delete lock[activeId]; else delete this[ns];
        lock.active += .5;
        active.event && active.event.interrupt.call(this, this.__data__, active.index);
      }
    };
  }
  function d3_transition(groups, ns, id) {
    d3_subclass(groups, d3_transitionPrototype);
    groups.namespace = ns;
    groups.id = id;
    return groups;
  }
  var d3_transitionPrototype = [], d3_transitionId = 0, d3_transitionInheritId, d3_transitionInherit;
  d3_transitionPrototype.call = d3_selectionPrototype.call;
  d3_transitionPrototype.empty = d3_selectionPrototype.empty;
  d3_transitionPrototype.node = d3_selectionPrototype.node;
  d3_transitionPrototype.size = d3_selectionPrototype.size;
  d3.transition = function(selection, name) {
    return selection && selection.transition ? d3_transitionInheritId ? selection.transition(name) : selection : d3.selection().transition(selection);
  };
  d3.transition.prototype = d3_transitionPrototype;
  d3_transitionPrototype.select = function(selector) {
    var id = this.id, ns = this.namespace, subgroups = [], subgroup, subnode, node;
    selector = d3_selection_selector(selector);
    for (var j = -1, m = this.length; ++j < m; ) {
      subgroups.push(subgroup = []);
      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
        if ((node = group[i]) && (subnode = selector.call(node, node.__data__, i, j))) {
          if ("__data__" in node) subnode.__data__ = node.__data__;
          d3_transitionNode(subnode, i, ns, id, node[ns][id]);
          subgroup.push(subnode);
        } else {
          subgroup.push(null);
        }
      }
    }
    return d3_transition(subgroups, ns, id);
  };
  d3_transitionPrototype.selectAll = function(selector) {
    var id = this.id, ns = this.namespace, subgroups = [], subgroup, subnodes, node, subnode, transition;
    selector = d3_selection_selectorAll(selector);
    for (var j = -1, m = this.length; ++j < m; ) {
      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
        if (node = group[i]) {
          transition = node[ns][id];
          subnodes = selector.call(node, node.__data__, i, j);
          subgroups.push(subgroup = []);
          for (var k = -1, o = subnodes.length; ++k < o; ) {
            if (subnode = subnodes[k]) d3_transitionNode(subnode, k, ns, id, transition);
            subgroup.push(subnode);
          }
        }
      }
    }
    return d3_transition(subgroups, ns, id);
  };
  d3_transitionPrototype.filter = function(filter) {
    var subgroups = [], subgroup, group, node;
    if (typeof filter !== "function") filter = d3_selection_filter(filter);
    for (var j = 0, m = this.length; j < m; j++) {
      subgroups.push(subgroup = []);
      for (var group = this[j], i = 0, n = group.length; i < n; i++) {
        if ((node = group[i]) && filter.call(node, node.__data__, i, j)) {
          subgroup.push(node);
        }
      }
    }
    return d3_transition(subgroups, this.namespace, this.id);
  };
  d3_transitionPrototype.tween = function(name, tween) {
    var id = this.id, ns = this.namespace;
    if (arguments.length < 2) return this.node()[ns][id].tween.get(name);
    return d3_selection_each(this, tween == null ? function(node) {
      node[ns][id].tween.remove(name);
    } : function(node) {
      node[ns][id].tween.set(name, tween);
    });
  };
  function d3_transition_tween(groups, name, value, tween) {
    var id = groups.id, ns = groups.namespace;
    return d3_selection_each(groups, typeof value === "function" ? function(node, i, j) {
      node[ns][id].tween.set(name, tween(value.call(node, node.__data__, i, j)));
    } : (value = tween(value), function(node) {
      node[ns][id].tween.set(name, value);
    }));
  }
  d3_transitionPrototype.attr = function(nameNS, value) {
    if (arguments.length < 2) {
      for (value in nameNS) this.attr(value, nameNS[value]);
      return this;
    }
    var interpolate = nameNS == "transform" ? d3_interpolateTransform : d3_interpolate, name = d3.ns.qualify(nameNS);
    function attrNull() {
      this.removeAttribute(name);
    }
    function attrNullNS() {
      this.removeAttributeNS(name.space, name.local);
    }
    function attrTween(b) {
      return b == null ? attrNull : (b += "", function() {
        var a = this.getAttribute(name), i;
        return a !== b && (i = interpolate(a, b), function(t) {
          this.setAttribute(name, i(t));
        });
      });
    }
    function attrTweenNS(b) {
      return b == null ? attrNullNS : (b += "", function() {
        var a = this.getAttributeNS(name.space, name.local), i;
        return a !== b && (i = interpolate(a, b), function(t) {
          this.setAttributeNS(name.space, name.local, i(t));
        });
      });
    }
    return d3_transition_tween(this, "attr." + nameNS, value, name.local ? attrTweenNS : attrTween);
  };
  d3_transitionPrototype.attrTween = function(nameNS, tween) {
    var name = d3.ns.qualify(nameNS);
    function attrTween(d, i) {
      var f = tween.call(this, d, i, this.getAttribute(name));
      return f && function(t) {
        this.setAttribute(name, f(t));
      };
    }
    function attrTweenNS(d, i) {
      var f = tween.call(this, d, i, this.getAttributeNS(name.space, name.local));
      return f && function(t) {
        this.setAttributeNS(name.space, name.local, f(t));
      };
    }
    return this.tween("attr." + nameNS, name.local ? attrTweenNS : attrTween);
  };
  d3_transitionPrototype.style = function(name, value, priority) {
    var n = arguments.length;
    if (n < 3) {
      if (typeof name !== "string") {
        if (n < 2) value = "";
        for (priority in name) this.style(priority, name[priority], value);
        return this;
      }
      priority = "";
    }
    function styleNull() {
      this.style.removeProperty(name);
    }
    function styleString(b) {
      return b == null ? styleNull : (b += "", function() {
        var a = d3_window(this).getComputedStyle(this, null).getPropertyValue(name), i;
        return a !== b && (i = d3_interpolate(a, b), function(t) {
          this.style.setProperty(name, i(t), priority);
        });
      });
    }
    return d3_transition_tween(this, "style." + name, value, styleString);
  };
  d3_transitionPrototype.styleTween = function(name, tween, priority) {
    if (arguments.length < 3) priority = "";
    function styleTween(d, i) {
      var f = tween.call(this, d, i, d3_window(this).getComputedStyle(this, null).getPropertyValue(name));
      return f && function(t) {
        this.style.setProperty(name, f(t), priority);
      };
    }
    return this.tween("style." + name, styleTween);
  };
  d3_transitionPrototype.text = function(value) {
    return d3_transition_tween(this, "text", value, d3_transition_text);
  };
  function d3_transition_text(b) {
    if (b == null) b = "";
    return function() {
      this.textContent = b;
    };
  }
  d3_transitionPrototype.remove = function() {
    var ns = this.namespace;
    return this.each("end.transition", function() {
      var p;
      if (this[ns].count < 2 && (p = this.parentNode)) p.removeChild(this);
    });
  };
  d3_transitionPrototype.ease = function(value) {
    var id = this.id, ns = this.namespace;
    if (arguments.length < 1) return this.node()[ns][id].ease;
    if (typeof value !== "function") value = d3.ease.apply(d3, arguments);
    return d3_selection_each(this, function(node) {
      node[ns][id].ease = value;
    });
  };
  d3_transitionPrototype.delay = function(value) {
    var id = this.id, ns = this.namespace;
    if (arguments.length < 1) return this.node()[ns][id].delay;
    return d3_selection_each(this, typeof value === "function" ? function(node, i, j) {
      node[ns][id].delay = +value.call(node, node.__data__, i, j);
    } : (value = +value, function(node) {
      node[ns][id].delay = value;
    }));
  };
  d3_transitionPrototype.duration = function(value) {
    var id = this.id, ns = this.namespace;
    if (arguments.length < 1) return this.node()[ns][id].duration;
    return d3_selection_each(this, typeof value === "function" ? function(node, i, j) {
      node[ns][id].duration = Math.max(1, value.call(node, node.__data__, i, j));
    } : (value = Math.max(1, value), function(node) {
      node[ns][id].duration = value;
    }));
  };
  d3_transitionPrototype.each = function(type, listener) {
    var id = this.id, ns = this.namespace;
    if (arguments.length < 2) {
      var inherit = d3_transitionInherit, inheritId = d3_transitionInheritId;
      try {
        d3_transitionInheritId = id;
        d3_selection_each(this, function(node, i, j) {
          d3_transitionInherit = node[ns][id];
          type.call(node, node.__data__, i, j);
        });
      } finally {
        d3_transitionInherit = inherit;
        d3_transitionInheritId = inheritId;
      }
    } else {
      d3_selection_each(this, function(node) {
        var transition = node[ns][id];
        (transition.event || (transition.event = d3.dispatch("start", "end", "interrupt"))).on(type, listener);
      });
    }
    return this;
  };
  d3_transitionPrototype.transition = function() {
    var id0 = this.id, id1 = ++d3_transitionId, ns = this.namespace, subgroups = [], subgroup, group, node, transition;
    for (var j = 0, m = this.length; j < m; j++) {
      subgroups.push(subgroup = []);
      for (var group = this[j], i = 0, n = group.length; i < n; i++) {
        if (node = group[i]) {
          transition = node[ns][id0];
          d3_transitionNode(node, i, ns, id1, {
            time: transition.time,
            ease: transition.ease,
            delay: transition.delay + transition.duration,
            duration: transition.duration
          });
        }
        subgroup.push(node);
      }
    }
    return d3_transition(subgroups, ns, id1);
  };
  function d3_transitionNamespace(name) {
    return name == null ? "__transition__" : "__transition_" + name + "__";
  }
  function d3_transitionNode(node, i, ns, id, inherit) {
    var lock = node[ns] || (node[ns] = {
      active: 0,
      count: 0
    }), transition = lock[id], time, timer, duration, ease, tweens;
    function schedule(elapsed) {
      var delay = transition.delay;
      timer.t = delay + time;
      if (delay <= elapsed) return start(elapsed - delay);
      timer.c = start;
    }
    function start(elapsed) {
      var activeId = lock.active, active = lock[activeId];
      if (active) {
        active.timer.c = null;
        active.timer.t = NaN;
        --lock.count;
        delete lock[activeId];
        active.event && active.event.interrupt.call(node, node.__data__, active.index);
      }
      for (var cancelId in lock) {
        if (+cancelId < id) {
          var cancel = lock[cancelId];
          cancel.timer.c = null;
          cancel.timer.t = NaN;
          --lock.count;
          delete lock[cancelId];
        }
      }
      timer.c = tick;
      d3_timer(function() {
        if (timer.c && tick(elapsed || 1)) {
          timer.c = null;
          timer.t = NaN;
        }
        return 1;
      }, 0, time);
      lock.active = id;
      transition.event && transition.event.start.call(node, node.__data__, i);
      tweens = [];
      transition.tween.forEach(function(key, value) {
        if (value = value.call(node, node.__data__, i)) {
          tweens.push(value);
        }
      });
      ease = transition.ease;
      duration = transition.duration;
    }
    function tick(elapsed) {
      var t = elapsed / duration, e = ease(t), n = tweens.length;
      while (n > 0) {
        tweens[--n].call(node, e);
      }
      if (t >= 1) {
        transition.event && transition.event.end.call(node, node.__data__, i);
        if (--lock.count) delete lock[id]; else delete node[ns];
        return 1;
      }
    }
    if (!transition) {
      time = inherit.time;
      timer = d3_timer(schedule, 0, time);
      transition = lock[id] = {
        tween: new d3_Map(),
        time: time,
        timer: timer,
        delay: inherit.delay,
        duration: inherit.duration,
        ease: inherit.ease,
        index: i
      };
      inherit = null;
      ++lock.count;
    }
  }
  d3.svg.axis = function() {
    var scale = d3.scale.linear(), orient = d3_svg_axisDefaultOrient, innerTickSize = 6, outerTickSize = 6, tickPadding = 3, tickArguments_ = [ 10 ], tickValues = null, tickFormat_;
    function axis(g) {
      g.each(function() {
        var g = d3.select(this);
        var scale0 = this.__chart__ || scale, scale1 = this.__chart__ = scale.copy();
        var ticks = tickValues == null ? scale1.ticks ? scale1.ticks.apply(scale1, tickArguments_) : scale1.domain() : tickValues, tickFormat = tickFormat_ == null ? scale1.tickFormat ? scale1.tickFormat.apply(scale1, tickArguments_) : d3_identity : tickFormat_, tick = g.selectAll(".tick").data(ticks, scale1), tickEnter = tick.enter().insert("g", ".domain").attr("class", "tick").style("opacity", ε), tickExit = d3.transition(tick.exit()).style("opacity", ε).remove(), tickUpdate = d3.transition(tick.order()).style("opacity", 1), tickSpacing = Math.max(innerTickSize, 0) + tickPadding, tickTransform;
        var range = d3_scaleRange(scale1), path = g.selectAll(".domain").data([ 0 ]), pathUpdate = (path.enter().append("path").attr("class", "domain"), 
        d3.transition(path));
        tickEnter.append("line");
        tickEnter.append("text");
        var lineEnter = tickEnter.select("line"), lineUpdate = tickUpdate.select("line"), text = tick.select("text").text(tickFormat), textEnter = tickEnter.select("text"), textUpdate = tickUpdate.select("text"), sign = orient === "top" || orient === "left" ? -1 : 1, x1, x2, y1, y2;
        if (orient === "bottom" || orient === "top") {
          tickTransform = d3_svg_axisX, x1 = "x", y1 = "y", x2 = "x2", y2 = "y2";
          text.attr("dy", sign < 0 ? "0em" : ".71em").style("text-anchor", "middle");
          pathUpdate.attr("d", "M" + range[0] + "," + sign * outerTickSize + "V0H" + range[1] + "V" + sign * outerTickSize);
        } else {
          tickTransform = d3_svg_axisY, x1 = "y", y1 = "x", x2 = "y2", y2 = "x2";
          text.attr("dy", ".32em").style("text-anchor", sign < 0 ? "end" : "start");
          pathUpdate.attr("d", "M" + sign * outerTickSize + "," + range[0] + "H0V" + range[1] + "H" + sign * outerTickSize);
        }
        lineEnter.attr(y2, sign * innerTickSize);
        textEnter.attr(y1, sign * tickSpacing);
        lineUpdate.attr(x2, 0).attr(y2, sign * innerTickSize);
        textUpdate.attr(x1, 0).attr(y1, sign * tickSpacing);
        if (scale1.rangeBand) {
          var x = scale1, dx = x.rangeBand() / 2;
          scale0 = scale1 = function(d) {
            return x(d) + dx;
          };
        } else if (scale0.rangeBand) {
          scale0 = scale1;
        } else {
          tickExit.call(tickTransform, scale1, scale0);
        }
        tickEnter.call(tickTransform, scale0, scale1);
        tickUpdate.call(tickTransform, scale1, scale1);
      });
    }
    axis.scale = function(x) {
      if (!arguments.length) return scale;
      scale = x;
      return axis;
    };
    axis.orient = function(x) {
      if (!arguments.length) return orient;
      orient = x in d3_svg_axisOrients ? x + "" : d3_svg_axisDefaultOrient;
      return axis;
    };
    axis.ticks = function() {
      if (!arguments.length) return tickArguments_;
      tickArguments_ = d3_array(arguments);
      return axis;
    };
    axis.tickValues = function(x) {
      if (!arguments.length) return tickValues;
      tickValues = x;
      return axis;
    };
    axis.tickFormat = function(x) {
      if (!arguments.length) return tickFormat_;
      tickFormat_ = x;
      return axis;
    };
    axis.tickSize = function(x) {
      var n = arguments.length;
      if (!n) return innerTickSize;
      innerTickSize = +x;
      outerTickSize = +arguments[n - 1];
      return axis;
    };
    axis.innerTickSize = function(x) {
      if (!arguments.length) return innerTickSize;
      innerTickSize = +x;
      return axis;
    };
    axis.outerTickSize = function(x) {
      if (!arguments.length) return outerTickSize;
      outerTickSize = +x;
      return axis;
    };
    axis.tickPadding = function(x) {
      if (!arguments.length) return tickPadding;
      tickPadding = +x;
      return axis;
    };
    axis.tickSubdivide = function() {
      return arguments.length && axis;
    };
    return axis;
  };
  var d3_svg_axisDefaultOrient = "bottom", d3_svg_axisOrients = {
    top: 1,
    right: 1,
    bottom: 1,
    left: 1
  };
  function d3_svg_axisX(selection, x0, x1) {
    selection.attr("transform", function(d) {
      var v0 = x0(d);
      return "translate(" + (isFinite(v0) ? v0 : x1(d)) + ",0)";
    });
  }
  function d3_svg_axisY(selection, y0, y1) {
    selection.attr("transform", function(d) {
      var v0 = y0(d);
      return "translate(0," + (isFinite(v0) ? v0 : y1(d)) + ")";
    });
  }
  d3.svg.brush = function() {
    var event = d3_eventDispatch(brush, "brushstart", "brush", "brushend"), x = null, y = null, xExtent = [ 0, 0 ], yExtent = [ 0, 0 ], xExtentDomain, yExtentDomain, xClamp = true, yClamp = true, resizes = d3_svg_brushResizes[0];
    function brush(g) {
      g.each(function() {
        var g = d3.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", brushstart).on("touchstart.brush", brushstart);
        var background = g.selectAll(".background").data([ 0 ]);
        background.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair");
        g.selectAll(".extent").data([ 0 ]).enter().append("rect").attr("class", "extent").style("cursor", "move");
        var resize = g.selectAll(".resize").data(resizes, d3_identity);
        resize.exit().remove();
        resize.enter().append("g").attr("class", function(d) {
          return "resize " + d;
        }).style("cursor", function(d) {
          return d3_svg_brushCursor[d];
        }).append("rect").attr("x", function(d) {
          return /[ew]$/.test(d) ? -3 : null;
        }).attr("y", function(d) {
          return /^[ns]/.test(d) ? -3 : null;
        }).attr("width", 6).attr("height", 6).style("visibility", "hidden");
        resize.style("display", brush.empty() ? "none" : null);
        var gUpdate = d3.transition(g), backgroundUpdate = d3.transition(background), range;
        if (x) {
          range = d3_scaleRange(x);
          backgroundUpdate.attr("x", range[0]).attr("width", range[1] - range[0]);
          redrawX(gUpdate);
        }
        if (y) {
          range = d3_scaleRange(y);
          backgroundUpdate.attr("y", range[0]).attr("height", range[1] - range[0]);
          redrawY(gUpdate);
        }
        redraw(gUpdate);
      });
    }
    brush.event = function(g) {
      g.each(function() {
        var event_ = event.of(this, arguments), extent1 = {
          x: xExtent,
          y: yExtent,
          i: xExtentDomain,
          j: yExtentDomain
        }, extent0 = this.__chart__ || extent1;
        this.__chart__ = extent1;
        if (d3_transitionInheritId) {
          d3.select(this).transition().each("start.brush", function() {
            xExtentDomain = extent0.i;
            yExtentDomain = extent0.j;
            xExtent = extent0.x;
            yExtent = extent0.y;
            event_({
              type: "brushstart"
            });
          }).tween("brush:brush", function() {
            var xi = d3_interpolateArray(xExtent, extent1.x), yi = d3_interpolateArray(yExtent, extent1.y);
            xExtentDomain = yExtentDomain = null;
            return function(t) {
              xExtent = extent1.x = xi(t);
              yExtent = extent1.y = yi(t);
              event_({
                type: "brush",
                mode: "resize"
              });
            };
          }).each("end.brush", function() {
            xExtentDomain = extent1.i;
            yExtentDomain = extent1.j;
            event_({
              type: "brush",
              mode: "resize"
            });
            event_({
              type: "brushend"
            });
          });
        } else {
          event_({
            type: "brushstart"
          });
          event_({
            type: "brush",
            mode: "resize"
          });
          event_({
            type: "brushend"
          });
        }
      });
    };
    function redraw(g) {
      g.selectAll(".resize").attr("transform", function(d) {
        return "translate(" + xExtent[+/e$/.test(d)] + "," + yExtent[+/^s/.test(d)] + ")";
      });
    }
    function redrawX(g) {
      g.select(".extent").attr("x", xExtent[0]);
      g.selectAll(".extent,.n>rect,.s>rect").attr("width", xExtent[1] - xExtent[0]);
    }
    function redrawY(g) {
      g.select(".extent").attr("y", yExtent[0]);
      g.selectAll(".extent,.e>rect,.w>rect").attr("height", yExtent[1] - yExtent[0]);
    }
    function brushstart() {
      var target = this, eventTarget = d3.select(d3.event.target), event_ = event.of(target, arguments), g = d3.select(target), resizing = eventTarget.datum(), resizingX = !/^(n|s)$/.test(resizing) && x, resizingY = !/^(e|w)$/.test(resizing) && y, dragging = eventTarget.classed("extent"), dragRestore = d3_event_dragSuppress(target), center, origin = d3.mouse(target), offset;
      var w = d3.select(d3_window(target)).on("keydown.brush", keydown).on("keyup.brush", keyup);
      if (d3.event.changedTouches) {
        w.on("touchmove.brush", brushmove).on("touchend.brush", brushend);
      } else {
        w.on("mousemove.brush", brushmove).on("mouseup.brush", brushend);
      }
      g.interrupt().selectAll("*").interrupt();
      if (dragging) {
        origin[0] = xExtent[0] - origin[0];
        origin[1] = yExtent[0] - origin[1];
      } else if (resizing) {
        var ex = +/w$/.test(resizing), ey = +/^n/.test(resizing);
        offset = [ xExtent[1 - ex] - origin[0], yExtent[1 - ey] - origin[1] ];
        origin[0] = xExtent[ex];
        origin[1] = yExtent[ey];
      } else if (d3.event.altKey) center = origin.slice();
      g.style("pointer-events", "none").selectAll(".resize").style("display", null);
      d3.select("body").style("cursor", eventTarget.style("cursor"));
      event_({
        type: "brushstart"
      });
      brushmove();
      function keydown() {
        if (d3.event.keyCode == 32) {
          if (!dragging) {
            center = null;
            origin[0] -= xExtent[1];
            origin[1] -= yExtent[1];
            dragging = 2;
          }
          d3_eventPreventDefault();
        }
      }
      function keyup() {
        if (d3.event.keyCode == 32 && dragging == 2) {
          origin[0] += xExtent[1];
          origin[1] += yExtent[1];
          dragging = 0;
          d3_eventPreventDefault();
        }
      }
      function brushmove() {
        var point = d3.mouse(target), moved = false;
        if (offset) {
          point[0] += offset[0];
          point[1] += offset[1];
        }
        if (!dragging) {
          if (d3.event.altKey) {
            if (!center) center = [ (xExtent[0] + xExtent[1]) / 2, (yExtent[0] + yExtent[1]) / 2 ];
            origin[0] = xExtent[+(point[0] < center[0])];
            origin[1] = yExtent[+(point[1] < center[1])];
          } else center = null;
        }
        if (resizingX && move1(point, x, 0)) {
          redrawX(g);
          moved = true;
        }
        if (resizingY && move1(point, y, 1)) {
          redrawY(g);
          moved = true;
        }
        if (moved) {
          redraw(g);
          event_({
            type: "brush",
            mode: dragging ? "move" : "resize"
          });
        }
      }
      function move1(point, scale, i) {
        var range = d3_scaleRange(scale), r0 = range[0], r1 = range[1], position = origin[i], extent = i ? yExtent : xExtent, size = extent[1] - extent[0], min, max;
        if (dragging) {
          r0 -= position;
          r1 -= size + position;
        }
        min = (i ? yClamp : xClamp) ? Math.max(r0, Math.min(r1, point[i])) : point[i];
        if (dragging) {
          max = (min += position) + size;
        } else {
          if (center) position = Math.max(r0, Math.min(r1, 2 * center[i] - min));
          if (position < min) {
            max = min;
            min = position;
          } else {
            max = position;
          }
        }
        if (extent[0] != min || extent[1] != max) {
          if (i) yExtentDomain = null; else xExtentDomain = null;
          extent[0] = min;
          extent[1] = max;
          return true;
        }
      }
      function brushend() {
        brushmove();
        g.style("pointer-events", "all").selectAll(".resize").style("display", brush.empty() ? "none" : null);
        d3.select("body").style("cursor", null);
        w.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null);
        dragRestore();
        event_({
          type: "brushend"
        });
      }
    }
    brush.x = function(z) {
      if (!arguments.length) return x;
      x = z;
      resizes = d3_svg_brushResizes[!x << 1 | !y];
      return brush;
    };
    brush.y = function(z) {
      if (!arguments.length) return y;
      y = z;
      resizes = d3_svg_brushResizes[!x << 1 | !y];
      return brush;
    };
    brush.clamp = function(z) {
      if (!arguments.length) return x && y ? [ xClamp, yClamp ] : x ? xClamp : y ? yClamp : null;
      if (x && y) xClamp = !!z[0], yClamp = !!z[1]; else if (x) xClamp = !!z; else if (y) yClamp = !!z;
      return brush;
    };
    brush.extent = function(z) {
      var x0, x1, y0, y1, t;
      if (!arguments.length) {
        if (x) {
          if (xExtentDomain) {
            x0 = xExtentDomain[0], x1 = xExtentDomain[1];
          } else {
            x0 = xExtent[0], x1 = xExtent[1];
            if (x.invert) x0 = x.invert(x0), x1 = x.invert(x1);
            if (x1 < x0) t = x0, x0 = x1, x1 = t;
          }
        }
        if (y) {
          if (yExtentDomain) {
            y0 = yExtentDomain[0], y1 = yExtentDomain[1];
          } else {
            y0 = yExtent[0], y1 = yExtent[1];
            if (y.invert) y0 = y.invert(y0), y1 = y.invert(y1);
            if (y1 < y0) t = y0, y0 = y1, y1 = t;
          }
        }
        return x && y ? [ [ x0, y0 ], [ x1, y1 ] ] : x ? [ x0, x1 ] : y && [ y0, y1 ];
      }
      if (x) {
        x0 = z[0], x1 = z[1];
        if (y) x0 = x0[0], x1 = x1[0];
        xExtentDomain = [ x0, x1 ];
        if (x.invert) x0 = x(x0), x1 = x(x1);
        if (x1 < x0) t = x0, x0 = x1, x1 = t;
        if (x0 != xExtent[0] || x1 != xExtent[1]) xExtent = [ x0, x1 ];
      }
      if (y) {
        y0 = z[0], y1 = z[1];
        if (x) y0 = y0[1], y1 = y1[1];
        yExtentDomain = [ y0, y1 ];
        if (y.invert) y0 = y(y0), y1 = y(y1);
        if (y1 < y0) t = y0, y0 = y1, y1 = t;
        if (y0 != yExtent[0] || y1 != yExtent[1]) yExtent = [ y0, y1 ];
      }
      return brush;
    };
    brush.clear = function() {
      if (!brush.empty()) {
        xExtent = [ 0, 0 ], yExtent = [ 0, 0 ];
        xExtentDomain = yExtentDomain = null;
      }
      return brush;
    };
    brush.empty = function() {
      return !!x && xExtent[0] == xExtent[1] || !!y && yExtent[0] == yExtent[1];
    };
    return d3.rebind(brush, event, "on");
  };
  var d3_svg_brushCursor = {
    n: "ns-resize",
    e: "ew-resize",
    s: "ns-resize",
    w: "ew-resize",
    nw: "nwse-resize",
    ne: "nesw-resize",
    se: "nwse-resize",
    sw: "nesw-resize"
  };
  var d3_svg_brushResizes = [ [ "n", "e", "s", "w", "nw", "ne", "se", "sw" ], [ "e", "w" ], [ "n", "s" ], [] ];
  var d3_time_format = d3_time.format = d3_locale_enUS.timeFormat;
  var d3_time_formatUtc = d3_time_format.utc;
  var d3_time_formatIso = d3_time_formatUtc("%Y-%m-%dT%H:%M:%S.%LZ");
  d3_time_format.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? d3_time_formatIsoNative : d3_time_formatIso;
  function d3_time_formatIsoNative(date) {
    return date.toISOString();
  }
  d3_time_formatIsoNative.parse = function(string) {
    var date = new Date(string);
    return isNaN(date) ? null : date;
  };
  d3_time_formatIsoNative.toString = d3_time_formatIso.toString;
  d3_time.second = d3_time_interval(function(date) {
    return new d3_date(Math.floor(date / 1e3) * 1e3);
  }, function(date, offset) {
    date.setTime(date.getTime() + Math.floor(offset) * 1e3);
  }, function(date) {
    return date.getSeconds();
  });
  d3_time.seconds = d3_time.second.range;
  d3_time.seconds.utc = d3_time.second.utc.range;
  d3_time.minute = d3_time_interval(function(date) {
    return new d3_date(Math.floor(date / 6e4) * 6e4);
  }, function(date, offset) {
    date.setTime(date.getTime() + Math.floor(offset) * 6e4);
  }, function(date) {
    return date.getMinutes();
  });
  d3_time.minutes = d3_time.minute.range;
  d3_time.minutes.utc = d3_time.minute.utc.range;
  d3_time.hour = d3_time_interval(function(date) {
    var timezone = date.getTimezoneOffset() / 60;
    return new d3_date((Math.floor(date / 36e5 - timezone) + timezone) * 36e5);
  }, function(date, offset) {
    date.setTime(date.getTime() + Math.floor(offset) * 36e5);
  }, function(date) {
    return date.getHours();
  });
  d3_time.hours = d3_time.hour.range;
  d3_time.hours.utc = d3_time.hour.utc.range;
  d3_time.month = d3_time_interval(function(date) {
    date = d3_time.day(date);
    date.setDate(1);
    return date;
  }, function(date, offset) {
    date.setMonth(date.getMonth() + offset);
  }, function(date) {
    return date.getMonth();
  });
  d3_time.months = d3_time.month.range;
  d3_time.months.utc = d3_time.month.utc.range;
  function d3_time_scale(linear, methods, format) {
    function scale(x) {
      return linear(x);
    }
    scale.invert = function(x) {
      return d3_time_scaleDate(linear.invert(x));
    };
    scale.domain = function(x) {
      if (!arguments.length) return linear.domain().map(d3_time_scaleDate);
      linear.domain(x);
      return scale;
    };
    function tickMethod(extent, count) {
      var span = extent[1] - extent[0], target = span / count, i = d3.bisect(d3_time_scaleSteps, target);
      return i == d3_time_scaleSteps.length ? [ methods.year, d3_scale_linearTickRange(extent.map(function(d) {
        return d / 31536e6;
      }), count)[2] ] : !i ? [ d3_time_scaleMilliseconds, d3_scale_linearTickRange(extent, count)[2] ] : methods[target / d3_time_scaleSteps[i - 1] < d3_time_scaleSteps[i] / target ? i - 1 : i];
    }
    scale.nice = function(interval, skip) {
      var domain = scale.domain(), extent = d3_scaleExtent(domain), method = interval == null ? tickMethod(extent, 10) : typeof interval === "number" && tickMethod(extent, interval);
      if (method) interval = method[0], skip = method[1];
      function skipped(date) {
        return !isNaN(date) && !interval.range(date, d3_time_scaleDate(+date + 1), skip).length;
      }
      return scale.domain(d3_scale_nice(domain, skip > 1 ? {
        floor: function(date) {
          while (skipped(date = interval.floor(date))) date = d3_time_scaleDate(date - 1);
          return date;
        },
        ceil: function(date) {
          while (skipped(date = interval.ceil(date))) date = d3_time_scaleDate(+date + 1);
          return date;
        }
      } : interval));
    };
    scale.ticks = function(interval, skip) {
      var extent = d3_scaleExtent(scale.domain()), method = interval == null ? tickMethod(extent, 10) : typeof interval === "number" ? tickMethod(extent, interval) : !interval.range && [ {
        range: interval
      }, skip ];
      if (method) interval = method[0], skip = method[1];
      return interval.range(extent[0], d3_time_scaleDate(+extent[1] + 1), skip < 1 ? 1 : skip);
    };
    scale.tickFormat = function() {
      return format;
    };
    scale.copy = function() {
      return d3_time_scale(linear.copy(), methods, format);
    };
    return d3_scale_linearRebind(scale, linear);
  }
  function d3_time_scaleDate(t) {
    return new Date(t);
  }
  var d3_time_scaleSteps = [ 1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6 ];
  var d3_time_scaleLocalMethods = [ [ d3_time.second, 1 ], [ d3_time.second, 5 ], [ d3_time.second, 15 ], [ d3_time.second, 30 ], [ d3_time.minute, 1 ], [ d3_time.minute, 5 ], [ d3_time.minute, 15 ], [ d3_time.minute, 30 ], [ d3_time.hour, 1 ], [ d3_time.hour, 3 ], [ d3_time.hour, 6 ], [ d3_time.hour, 12 ], [ d3_time.day, 1 ], [ d3_time.day, 2 ], [ d3_time.week, 1 ], [ d3_time.month, 1 ], [ d3_time.month, 3 ], [ d3_time.year, 1 ] ];
  var d3_time_scaleLocalFormat = d3_time_format.multi([ [ ".%L", function(d) {
    return d.getMilliseconds();
  } ], [ ":%S", function(d) {
    return d.getSeconds();
  } ], [ "%I:%M", function(d) {
    return d.getMinutes();
  } ], [ "%I %p", function(d) {
    return d.getHours();
  } ], [ "%a %d", function(d) {
    return d.getDay() && d.getDate() != 1;
  } ], [ "%b %d", function(d) {
    return d.getDate() != 1;
  } ], [ "%B", function(d) {
    return d.getMonth();
  } ], [ "%Y", d3_true ] ]);
  var d3_time_scaleMilliseconds = {
    range: function(start, stop, step) {
      return d3.range(Math.ceil(start / step) * step, +stop, step).map(d3_time_scaleDate);
    },
    floor: d3_identity,
    ceil: d3_identity
  };
  d3_time_scaleLocalMethods.year = d3_time.year;
  d3_time.scale = function() {
    return d3_time_scale(d3.scale.linear(), d3_time_scaleLocalMethods, d3_time_scaleLocalFormat);
  };
  var d3_time_scaleUtcMethods = d3_time_scaleLocalMethods.map(function(m) {
    return [ m[0].utc, m[1] ];
  });
  var d3_time_scaleUtcFormat = d3_time_formatUtc.multi([ [ ".%L", function(d) {
    return d.getUTCMilliseconds();
  } ], [ ":%S", function(d) {
    return d.getUTCSeconds();
  } ], [ "%I:%M", function(d) {
    return d.getUTCMinutes();
  } ], [ "%I %p", function(d) {
    return d.getUTCHours();
  } ], [ "%a %d", function(d) {
    return d.getUTCDay() && d.getUTCDate() != 1;
  } ], [ "%b %d", function(d) {
    return d.getUTCDate() != 1;
  } ], [ "%B", function(d) {
    return d.getUTCMonth();
  } ], [ "%Y", d3_true ] ]);
  d3_time_scaleUtcMethods.year = d3_time.year.utc;
  d3_time.scale.utc = function() {
    return d3_time_scale(d3.scale.linear(), d3_time_scaleUtcMethods, d3_time_scaleUtcFormat);
  };
  d3.text = d3_xhrType(function(request) {
    return request.responseText;
  });
  d3.json = function(url, callback) {
    return d3_xhr(url, "application/json", d3_json, callback);
  };
  function d3_json(request) {
    return JSON.parse(request.responseText);
  }
  d3.html = function(url, callback) {
    return d3_xhr(url, "text/html", d3_html, callback);
  };
  function d3_html(request) {
    var range = d3_document.createRange();
    range.selectNode(d3_document.body);
    return range.createContextualFragment(request.responseText);
  }
  d3.xml = d3_xhrType(function(request) {
    return request.responseXML;
  });
  if (true) this.d3 = d3, !(__WEBPACK_AMD_DEFINE_FACTORY__ = (d3),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); else if (typeof module === "object" && module.exports) module.exports = d3; else this.d3 = d3;
}();

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vendors_nvd3_build_nv_d3_min_js__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vendors_nvd3_build_nv_d3_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vendors_nvd3_build_nv_d3_min_js__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


// import stream_layers from "../assets/js/custom_js/stream_layers.js"
/* harmony default export */ __webpack_exports__["default"] = ({
    name: "nvd3_charts",
    mounted: function mounted() {
        "use strict";
        /* Inspired by Lee Byron's test data generator. */

        function stream_layers(n, m, o) {
            if (arguments.length < 3) o = 0;

            function bump(a) {
                var x = 1 / (.1 + Math.random()),
                    y = 2 * Math.random() - .5,
                    z = 10 / (.1 + Math.random());
                for (var i = 0; i < m; i++) {
                    var w = (i / m - y) * z;
                    a[i] += x * Math.exp(-w * w);
                }
            }

            return d3.range(n).map(function () {
                var a = [],
                    i;
                for (i = 0; i < m; i++) {
                    a[i] = o + o * Math.random();
                }for (i = 0; i < 5; i++) {
                    bump(a);
                }return a.map(stream_index);
            });
        }

        /* Another layer generator using gamma distributions. */
        function stream_waves(n, m) {
            return d3.range(n).map(function (i) {
                return d3.range(m).map(function (j) {
                    var x = 20 * j / m - i / 3;
                    return 2 * x * Math.exp(-.5 * x);
                }).map(stream_index);
            });
        }

        function stream_index(d, i) {
            return {
                x: i,
                y: Math.max(0, d)
            };
        }
        //stream layers end


        /*chart4  Cumulative Line chart start*/
        nv.addGraph(function () {

            var clinechart = nv.models.cumulativeLineChart().useInteractiveGuideline(true).x(function (d) {
                return d[0];
            }).y(function (d) {
                return d[1] / 100;
            }).color(d3.scale.category10().range()).average(function (d) {
                return d.mean / 100;
            }).duration(300).clipVoronoi(false);
            clinechart.dispatch.on('renderEnd', function () {
                console.log('render complete: cumulative line with guide line');
            });
            clinechart.xAxis.tickFormat(function (d) {
                return d3.time.format('%m/%d/%y')(new Date(d));
            });
            clinechart.yAxis.tickFormat(d3.format(',.1%'));
            d3.select('#chart4 svg').datum(cumulativeTestData()).call(clinechart);
            //TODO: Figure out a good way to do this automatically
            nv.utils.windowResize(clinechart.update);
            $('#chart4').closest('.panel-body').on('resize', function () {
                $("#chart4").find('svg').remove();
                $("#chart4").html("<svg></svg>");
                nv.addGraph(function () {
                    d3.select('#chart4 svg').datum(cumulativeTestData()).call(clinechart);
                    clinechart.update();
                    return clinechart;
                });
            });
            clinechart.dispatch.on('stateChange', function (e) {
                nv.log('New State:', JSON.stringify(e));
            });
            clinechart.state.dispatch.on('change', function (state) {
                nv.log('state', JSON.stringify(state));
            });
            return clinechart;
        });

        function flatTestData() {
            return [{
                key: "Snakes",
                values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(function (d) {
                    var currentDate = new Date();
                    currentDate.setDate(currentDate.getDate() + d);
                    return [currentDate, 0];
                })
            }];
        }

        function cumulativeTestData() {
            return [{
                key: "Long",
                values: [[1083297600000, -2.974623048543], [1085976000000, -1.7740300785979], [1088568000000, 4.4681318138177], [1091246400000, 7.0242541001353], [1093924800000, 7.5709603667586], [1096516800000, 20.612245065736], [1099195200000, 21.698065237316], [1101790800000, 40.501189458018], [1104469200000, 50.464679413194], [1107147600000, 48.917421973355], [1109566800000, 63.750936549160], [1112245200000, 59.072499126460], [1114833600000, 43.373158880492], [1117512000000, 54.490918947556], [1120104000000, 56.661178852079], [1122782400000, 73.450103545496], [1125460800000, 71.714526354907], [1128052800000, 85.221664349607], [1130734800000, 77.769261392481], [1133326800000, 95.966528716500], [1136005200000, 107.59132116397], [1138683600000, 127.25740096723], [1141102800000, 122.13917498830], [1143781200000, 126.53657279774], [1146369600000, 132.39300992970], [1149048000000, 120.11238242904], [1151640000000, 118.41408917750], [1154318400000, 107.92918924621], [1156996800000, 110.28057249569], [1159588800000, 117.20485334692], [1162270800000, 141.33556756948], [1164862800000, 159.59452727893], [1167541200000, 167.09801853304], [1170219600000, 185.46849659215], [1172638800000, 184.82474099990], [1175313600000, 195.63155213887], [1177905600000, 207.40597044171], [1180584000000, 230.55966698196], [1183176000000, 239.55649035292], [1185854400000, 241.35915085208], [1188532800000, 239.89428956243], [1191124800000, 260.47781917715], [1193803200000, 276.39457482225], [1196398800000, 258.66530682672], [1199077200000, 250.98846121893], [1201755600000, 226.89902618127], [1204261200000, 227.29009273807], [1206936000000, 218.66476654350], [1209528000000, 232.46605902918], [1212206400000, 253.25667081117], [1214798400000, 235.82505363925], [1217476800000, 229.70112774254], [1220155200000, 225.18472705952], [1222747200000, 189.13661746552], [1225425600000, 149.46533007301], [1228021200000, 131.00340772114], [1230699600000, 135.18341728866], [1233378000000, 109.15296887173], [1235797200000, 84.614772549760], [1238472000000, 100.60810015326], [1241064000000, 141.50134895610], [1243742400000, 142.50405083675], [1246334400000, 139.81192372672], [1249012800000, 177.78205544583], [1251691200000, 194.73691933074], [1254283200000, 209.00838460225], [1256961600000, 198.19855877420], [1259557200000, 222.37102417812], [1262235600000, 234.24581081250], [1264914000000, 228.26087689346], [1267333200000, 248.81895126250], [1270008000000, 270.57301075186], [1272600000000, 292.64604322550], [1275278400000, 265.94088520518], [1277870400000, 237.82887467569], [1280548800000, 265.55973314204], [1283227200000, 248.30877330928], [1285819200000, 278.14870066912], [1288497600000, 292.69260960288], [1291093200000, 300.84263809599], [1293771600000, 326.17253914628], [1296450000000, 337.69335966505], [1298869200000, 339.73260965121], [1301544000000, 346.87865120765], [1304136000000, 347.92991526628], [1306814400000, 342.04627502669], [1309406400000, 333.45386231233], [1312084800000, 323.15034181243], [1314763200000, 295.66126882331], [1317355200000, 251.48014579253], [1320033600000, 295.15424257905], [1322629200000, 294.54766764397], [1325307600000, 295.72906119051], [1327986000000, 325.73351347613], [1330491600000, 340.16106061186], [1333166400000, 345.15514071490], [1335758400000, 337.10259395679], [1338436800000, 318.68216333837], [1341028800000, 317.03683945246], [1343707200000, 318.53549659997], [1346385600000, 332.85381464104], [1348977600000, 337.36534373477], [1351656000000, 350.27872156161], [1354251600000, 349.45128876100]],
                mean: 250
            }, {
                key: "Short",
                values: [[1083297600000, -0.77078283705125], [1085976000000, -1.8356366650335], [1088568000000, -5.3121322073127], [1091246400000, -4.9320975829662], [1093924800000, -3.9835408823225], [1096516800000, -6.8694685316805], [1099195200000, -8.4854877428545], [1101790800000, -15.933627197384], [1104469200000, -15.920980069544], [1107147600000, -12.478685045651], [1109566800000, -17.297761889305], [1112245200000, -15.247129891020], [1114833600000, -11.336459046839], [1117512000000, -13.298990907415], [1120104000000, -16.360027000056], [1122782400000, -18.527929522030], [1125460800000, -22.176516738685], [1128052800000, -23.309665368330], [1130734800000, -21.629973409748], [1133326800000, -24.186429093486], [1136005200000, -29.116707312531], [1138683600000, -37.188037874864], [1141102800000, -34.689264821198], [1143781200000, -39.505932105359], [1146369600000, -45.339572492759], [1149048000000, -43.849353192764], [1151640000000, -45.418353922571], [1154318400000, -44.579281059919], [1156996800000, -44.027098363370], [1159588800000, -41.261306759439], [1162270800000, -47.446018534027], [1164862800000, -53.413782948909], [1167541200000, -50.700723647419], [1170219600000, -56.374090913296], [1172638800000, -61.754245220322], [1175313600000, -66.246241587629], [1177905600000, -75.351650899999], [1180584000000, -81.699058262032], [1183176000000, -82.487023368081], [1185854400000, -86.230055113277], [1188532800000, -84.746914818507], [1191124800000, -100.77134971977], [1193803200000, -109.95435565947], [1196398800000, -99.605672965057], [1199077200000, -99.607249394382], [1201755600000, -94.874614950188], [1204261200000, -105.35899063105], [1206936000000, -106.01931193802], [1209528000000, -110.28883571771], [1212206400000, -119.60256203030], [1214798400000, -115.62201315802], [1217476800000, -106.63824185202], [1220155200000, -99.848746318951], [1222747200000, -85.631219602987], [1225425600000, -63.547909262067], [1228021200000, -59.753275364457], [1230699600000, -63.874977883542], [1233378000000, -56.865697387488], [1235797200000, -54.285579501988], [1238472000000, -56.474659581885], [1241064000000, -63.847137745644], [1243742400000, -68.754247867325], [1246334400000, -69.474257009155], [1249012800000, -75.084828197067], [1251691200000, -77.101028237237], [1254283200000, -80.454866854387], [1256961600000, -78.984349952220], [1259557200000, -83.041230807854], [1262235600000, -84.529748348935], [1264914000000, -83.837470195508], [1267333200000, -87.174487671969], [1270008000000, -90.342293007487], [1272600000000, -93.550928464991], [1275278400000, -85.833102140765], [1277870400000, -79.326501831592], [1280548800000, -87.986196903537], [1283227200000, -85.397862121771], [1285819200000, -94.738167050020], [1288497600000, -98.661952897151], [1291093200000, -99.609665952708], [1293771600000, -103.57099836183], [1296450000000, -104.04353411322], [1298869200000, -108.21382792587], [1301544000000, -108.74006900920], [1304136000000, -112.07766650960], [1306814400000, -109.63328199118], [1309406400000, -106.53578966772], [1312084800000, -103.16480871469], [1314763200000, -95.945078001828], [1317355200000, -81.226687340874], [1320033600000, -90.782206596168], [1322629200000, -89.484445370113], [1325307600000, -88.514723135326], [1327986000000, -93.381292724320], [1330491600000, -97.529705609172], [1333166400000, -99.520481439189], [1335758400000, -99.430184898669], [1338436800000, -93.349934521973], [1341028800000, -95.858475286491], [1343707200000, -95.522755836605], [1346385600000, -98.503848862036], [1348977600000, -101.49415251896], [1351656000000, -101.50099325672], [1354251600000, -99.487094927489]],
                mean: -60
            }, {
                key: "Gross",
                mean: 125,
                values: [[1083297600000, -3.7454058855943], [1085976000000, -3.6096667436314], [1088568000000, -0.8440003934950], [1091246400000, 2.0921565171691], [1093924800000, 3.5874194844361], [1096516800000, 13.742776534056], [1099195200000, 13.212577494462], [1101790800000, 24.567562260634], [1104469200000, 34.543699343650], [1107147600000, 36.438736927704], [1109566800000, 46.453174659855], [1112245200000, 43.825369235440], [1114833600000, 32.036699833653], [1117512000000, 41.191928040141], [1120104000000, 40.301151852023], [1122782400000, 54.922174023466], [1125460800000, 49.538009616222], [1128052800000, 61.911998981277], [1130734800000, 56.139287982733], [1133326800000, 71.780099623014], [1136005200000, 78.474613851439], [1138683600000, 90.069363092366], [1141102800000, 87.449910167102], [1143781200000, 87.030640692381], [1146369600000, 87.053437436941], [1149048000000, 76.263029236276], [1151640000000, 72.995735254929], [1154318400000, 63.349908186291], [1156996800000, 66.253474132320], [1159588800000, 75.943546587481], [1162270800000, 93.889549035453], [1164862800000, 106.18074433002], [1167541200000, 116.39729488562], [1170219600000, 129.09440567885], [1172638800000, 123.07049577958], [1175313600000, 129.38531055124], [1177905600000, 132.05431954171], [1180584000000, 148.86060871993], [1183176000000, 157.06946698484], [1185854400000, 155.12909573880], [1188532800000, 155.14737474392], [1191124800000, 159.70646945738], [1193803200000, 166.44021916278], [1196398800000, 159.05963386166], [1199077200000, 151.38121182455], [1201755600000, 132.02441123108], [1204261200000, 121.93110210702], [1206936000000, 112.64545460548], [1209528000000, 122.17722331147], [1212206400000, 133.65410878087], [1214798400000, 120.20304048123], [1217476800000, 123.06288589052], [1220155200000, 125.33598074057], [1222747200000, 103.50539786253], [1225425600000, 85.917420810943], [1228021200000, 71.250132356683], [1230699600000, 71.308439405118], [1233378000000, 52.287271484242], [1235797200000, 30.329193047772], [1238472000000, 44.133440571375], [1241064000000, 77.654211210456], [1243742400000, 73.749802969425], [1246334400000, 70.337666717565], [1249012800000, 102.69722724876], [1251691200000, 117.63589109350], [1254283200000, 128.55351774786], [1256961600000, 119.21420882198], [1259557200000, 139.32979337027], [1262235600000, 149.71606246357], [1264914000000, 144.42340669795], [1267333200000, 161.64446359053], [1270008000000, 180.23071774437], [1272600000000, 199.09511476051], [1275278400000, 180.10778306442], [1277870400000, 158.50237284410], [1280548800000, 177.57353623850], [1283227200000, 162.91091118751], [1285819200000, 183.41053361910], [1288497600000, 194.03065670573], [1291093200000, 201.23297214328], [1293771600000, 222.60154078445], [1296450000000, 233.35556801977], [1298869200000, 231.22452435045], [1301544000000, 237.84432503045], [1304136000000, 235.55799131184], [1306814400000, 232.11873570751], [1309406400000, 226.62381538123], [1312084800000, 219.34811113539], [1314763200000, 198.69242285581], [1317355200000, 168.90235629066], [1320033600000, 202.64725756733], [1322629200000, 203.05389378105], [1325307600000, 204.85986680865], [1327986000000, 229.77085616585], [1330491600000, 239.65202435959], [1333166400000, 242.33012622734], [1335758400000, 234.11773262149], [1338436800000, 221.47846307887], [1341028800000, 216.98308827912], [1343707200000, 218.37781386755], [1346385600000, 229.39368622736], [1348977600000, 230.54656412916], [1351656000000, 243.06087025523], [1354251600000, 244.24733578385]]
            }, {
                key: "S&P 1500",
                values: [[1083297600000, -1.7798428181819], [1085976000000, -0.36883324836999], [1088568000000, 1.7312581046040], [1091246400000, -1.8356125950460], [1093924800000, -1.5396564170877], [1096516800000, -0.16867791409247], [1099195200000, 1.3754263993413], [1101790800000, 5.8171640898041], [1104469200000, 9.4350145241608], [1107147600000, 6.7649081510160], [1109566800000, 9.1568499314776], [1112245200000, 7.2485090994419], [1114833600000, 4.8762222306595], [1117512000000, 8.5992339354652], [1120104000000, 9.0896517982086], [1122782400000, 13.394644048577], [1125460800000, 12.311842010760], [1128052800000, 13.221003650717], [1130734800000, 11.218481009206], [1133326800000, 15.565352598445], [1136005200000, 15.623703865926], [1138683600000, 19.275255326383], [1141102800000, 19.432433717836], [1143781200000, 21.232881244655], [1146369600000, 22.798299192958], [1149048000000, 19.006125095476], [1151640000000, 19.151889158536], [1154318400000, 19.340022855452], [1156996800000, 22.027934841859], [1159588800000, 24.903300681329], [1162270800000, 29.146492833877], [1164862800000, 31.781626082589], [1167541200000, 33.358770738428], [1170219600000, 35.622684613497], [1172638800000, 33.332821711366], [1175313600000, 34.878748635832], [1177905600000, 40.582332613844], [1180584000000, 45.719535502920], [1183176000000, 43.239344722386], [1185854400000, 38.550955100342], [1188532800000, 40.585368816283], [1191124800000, 45.601374057981], [1193803200000, 48.051404337892], [1196398800000, 41.582581696032], [1199077200000, 40.650580792748], [1201755600000, 32.252222066493], [1204261200000, 28.106390258553], [1206936000000, 27.532698196687], [1209528000000, 33.986390463852], [1212206400000, 36.302660526438], [1214798400000, 25.015574480172], [1217476800000, 23.989494069029], [1220155200000, 25.934351445531], [1222747200000, 14.627592011699], [1225425600000, -5.2249403809749], [1228021200000, -12.330933408050], [1230699600000, -11.000291508188], [1233378000000, -18.563864948088], [1235797200000, -27.213097001687], [1238472000000, -20.834133840523], [1241064000000, -12.717886701719], [1243742400000, -8.1644613083526], [1246334400000, -7.9108408918201], [1249012800000, -0.77002391591209], [1251691200000, 2.8243816569672], [1254283200000, 6.8761411421070], [1256961600000, 4.5060912230294], [1259557200000, 10.487179794349], [1262235600000, 13.251375597594], [1264914000000, 9.2207594803415], [1267333200000, 12.836276936538], [1270008000000, 19.816793904978], [1272600000000, 22.156787167211], [1275278400000, 12.518039090576], [1277870400000, 6.4253587440854], [1280548800000, 13.847372028409], [1283227200000, 8.5454736090364], [1285819200000, 18.542801953304], [1288497600000, 23.037064683183], [1291093200000, 23.517422401888], [1293771600000, 31.804723416068], [1296450000000, 34.778247386072], [1298869200000, 39.584883855230], [1301544000000, 40.080647664875], [1304136000000, 44.180050667889], [1306814400000, 42.533535927221], [1309406400000, 40.105374449011], [1312084800000, 37.014659267156], [1314763200000, 29.263745084262], [1317355200000, 19.637463417584], [1320033600000, 33.157645345770], [1322629200000, 32.895053150988], [1325307600000, 34.111544824647], [1327986000000, 40.453985817473], [1330491600000, 46.435700783313], [1333166400000, 51.062385488671], [1335758400000, 50.130448220658], [1338436800000, 41.035476682018], [1341028800000, 46.591932296457], [1343707200000, 48.349391180634], [1346385600000, 51.913011286919], [1348977600000, 55.747238313752], [1351656000000, 52.991824077209], [1354251600000, 49.556311883284]]
            }];
        }

        /*chart4  Cumulative Line chart end*/

        /*scatter bubble chart start*/
        var scatterchart;
        nv.addGraph(function () {
            scatterchart = nv.models.scatterChart().showDistX(true).showDistY(true).duration(300).color(d3.scale.category10().range());
            scatterchart.dispatch.on('renderEnd', function () {
                console.log('render complete');
            });
            scatterchart.xAxis.tickFormat(d3.format('.02f'));
            scatterchart.yAxis.tickFormat(d3.format('.02f'));
            d3.select('#chart5 svg').datum(nv.log(randomData(4, 40))).call(scatterchart);
            nv.utils.windowResize(scatterchart.update);
            $('#chart5').closest('.panel-body').on('resize', function () {
                $("#chart5").find('svg').remove();
                $("#chart5").html("<svg></svg>");
                d3.select('#chart5 svg').datum(nv.log(randomData(4, 40))).call(scatterchart);
                scatterchart.update();
            });
            scatterchart.dispatch.on('stateChange', function (e) {
                nv.log('New State:', JSON.stringify(e));
            });
            return scatterchart;
        });

        function randomData(groups, points) {
            //# groups,# points per group
            var data = [],
                shapes = ['circle'],
                random = d3.random.normal();
            var i;
            var j;
            for (i = 0; i < groups; i++) {
                data.push({
                    key: 'Group ' + i,
                    values: [],
                    slope: Math.random() - .01,
                    intercept: Math.random() - .5
                });
                for (j = 0; j < points; j++) {
                    data[i].values.push({
                        x: random(),
                        y: random(),
                        size: Math.random(),
                        shape: shapes[j % shapes.length]
                    });
                }
            }
            return data;
        }

        /*scatter bubble chart end*/

        /*line plus bar chart start*/

        var testdata = [{
            "key": "Quantity",
            "bar": true,
            "values": [[1136005200000, 1271000.0], [1138683600000, 1271000.0], [1141102800000, 1271000.0], [1143781200000, 0], [1146369600000, 0], [1149048000000, 0], [1151640000000, 0], [1154318400000, 0], [1156996800000, 0], [1159588800000, 3899486.0], [1162270800000, 3899486.0], [1164862800000, 3899486.0], [1167541200000, 3564700.0], [1170219600000, 3564700.0], [1172638800000, 3564700.0], [1175313600000, 2648493.0], [1177905600000, 2648493.0], [1180584000000, 2648493.0], [1183176000000, 2522993.0], [1185854400000, 2522993.0], [1188532800000, 2522993.0], [1191124800000, 2906501.0], [1193803200000, 2906501.0], [1196398800000, 2906501.0], [1199077200000, 2206761.0], [1201755600000, 2206761.0], [1204261200000, 2206761.0], [1206936000000, 2287726.0], [1209528000000, 2287726.0], [1212206400000, 2287726.0], [1214798400000, 2732646.0], [1217476800000, 2732646.0], [1220155200000, 2732646.0], [1222747200000, 2599196.0], [1225425600000, 2599196.0], [1228021200000, 2599196.0], [1230699600000, 1924387.0], [1233378000000, 1924387.0], [1235797200000, 1924387.0], [1238472000000, 1756311.0], [1241064000000, 1756311.0], [1243742400000, 1756311.0], [1246334400000, 1743470.0], [1249012800000, 1743470.0], [1251691200000, 1743470.0], [1254283200000, 1519010.0], [1256961600000, 1519010.0], [1259557200000, 1519010.0], [1262235600000, 1591444.0], [1264914000000, 1591444.0], [1267333200000, 1591444.0], [1270008000000, 1543784.0], [1272600000000, 1543784.0], [1275278400000, 1543784.0], [1277870400000, 1309915.0], [1280548800000, 1309915.0], [1283227200000, 1309915.0], [1285819200000, 1331875.0], [1288497600000, 1331875.0], [1291093200000, 1331875.0], [1293771600000, 1331875.0], [1296450000000, 1154695.0], [1298869200000, 1154695.0], [1301544000000, 1194025.0], [1304136000000, 1194025.0], [1306814400000, 1194025.0], [1309406400000, 1194025.0], [1312084800000, 1194025.0], [1314763200000, 1244525.0], [1317355200000, 475000.0], [1320033600000, 475000.0], [1322629200000, 475000.0], [1325307600000, 690033.0], [1327986000000, 690033.0], [1330491600000, 690033.0], [1333166400000, 514733.0], [1335758400000, 514733.0]]
        }, {
            "key": "Price",
            "values": [[1136005200000, 71.89], [1138683600000, 75.51], [1141102800000, 68.49], [1143781200000, 62.72], [1146369600000, 70.39], [1149048000000, 59.77], [1151640000000, 57.27], [1154318400000, 67.96], [1156996800000, 67.85], [1159588800000, 76.98], [1162270800000, 81.08], [1164862800000, 91.66], [1167541200000, 84.84], [1170219600000, 85.73], [1172638800000, 84.61], [1175313600000, 92.91], [1177905600000, 99.8], [1180584000000, 121.191], [1183176000000, 122.04], [1185854400000, 131.76], [1188532800000, 138.48], [1191124800000, 153.47], [1193803200000, 189.95], [1196398800000, 182.22], [1199077200000, 198.08], [1201755600000, 135.36], [1204261200000, 125.02], [1206936000000, 143.5], [1209528000000, 173.95], [1212206400000, 188.75], [1214798400000, 167.44], [1217476800000, 158.95], [1220155200000, 169.53], [1222747200000, 113.66], [1225425600000, 107.59], [1228021200000, 92.67], [1230699600000, 85.35], [1233378000000, 90.13], [1235797200000, 89.31], [1238472000000, 105.12], [1241064000000, 125.83], [1243742400000, 135.81], [1246334400000, 142.43], [1249012800000, 163.39], [1251691200000, 168.21], [1254283200000, 185.35], [1256961600000, 188.5], [1259557200000, 199.91], [1262235600000, 210.732], [1264914000000, 192.063], [1267333200000, 204.62], [1270008000000, 235.0], [1272600000000, 261.09], [1275278400000, 256.88], [1277870400000, 251.53], [1280548800000, 257.25], [1283227200000, 243.1], [1285819200000, 283.75], [1288497600000, 300.98], [1291093200000, 311.15], [1293771600000, 322.56], [1296450000000, 339.32], [1298869200000, 353.21], [1301544000000, 348.5075], [1304136000000, 350.13], [1306814400000, 347.83], [1309406400000, 335.67], [1312084800000, 390.48], [1314763200000, 384.83], [1317355200000, 381.32], [1320033600000, 404.78], [1322629200000, 382.2], [1325307600000, 405.0], [1327986000000, 456.48], [1330491600000, 542.44], [1333166400000, 599.55], [1335758400000, 583.98]]
        }].map(function (series) {
            series.values = series.values.map(function (d) {
                return {
                    x: d[0],
                    y: d[1]
                };
            });
            return series;
        });
        var linebarchart;
        nv.addGraph(function () {
            linebarchart = nv.models.linePlusBarChart().margin({
                top: 50,
                right: 60,
                bottom: 30,
                left: 70
            }).legendRightAxisHint(' [Using Right Axis]').color(d3.scale.category10().range());
            linebarchart.xAxis.tickFormat(function (d) {
                return d3.time.format('%x')(new Date(d));
            }).showMaxMin(false);
            linebarchart.y1Axis.tickFormat(function (d) {
                return '$' + d3.format(',f')(d);
            });
            linebarchart.bars.forceY([0]).padData(false);
            linebarchart.x2Axis.tickFormat(function (d) {
                return d3.time.format('%x')(new Date(d));
            }).showMaxMin(false);
            d3.select('#chart2 svg').datum(testdata).transition().duration(500).call(linebarchart);
            nv.utils.windowResize(linebarchart.update);
            $('#chart2').closest('.panel-body').on('resize', function () {
                $("#chart2").find('svg').remove();
                $("#chart2").html("<svg></svg>");
                d3.select('#chart2 svg').datum(testdata).transition().duration(500).call(linebarchart);
            });
            linebarchart.dispatch.on('stateChange', function (e) {
                nv.log('New State:', JSON.stringify(e));
            });
            return linebarchart;
        });

        /*line plus bar chart end*/

        /*Horizontal Multi-Bar chart start*/
        var long_short_data = [{
            key: 'Series1',
            values: [{
                "label": "Group A",
                "value": -1.8746444827653
            }, {
                "label": "Group B",
                "value": -8.0961543492239
            }, {
                "label": "Group C",
                "value": -0.87072943117674
            }, {
                "label": "Group D",
                "value": -2.4174010336624
            }, {
                "label": "Group E",
                "value": -0.72009071426284
            }, {
                "label": "Group F",
                "value": -2.77154485523777
            }, {
                "label": "Group G",
                "value": -9.90152097798131
            }, {
                "label": "Group H",
                "value": 14.91445417330854
            }, {
                "label": "Group I",
                "value": -3.055746319141851
            }]
        }, {
            key: 'Series2',
            values: [{
                "label": "Group A",
                "value": 25.307646510375
            }, {
                "label": "Group B",
                "value": 16.756779544553
            }, {
                "label": "Group C",
                "value": 18.451534877007
            }, {
                "label": "Group D",
                "value": 8.6142352811805
            }, {
                "label": "Group E",
                "value": 7.8082472075876
            }, {
                "label": "Group F",
                "value": 5.259101026956
            }, {
                "label": "Group G",
                "value": 7.0947953487127
            }, {
                "label": "Group H",
                "value": 8
            }, {
                "label": "Group I",
                "value": 21
            }]
        }, {
            key: 'Series3',
            values: [{
                "label": "Group A",
                "value": -14.307646510375
            }, {
                "label": "Group B",
                "value": 16.756779544553
            }, {
                "label": "Group C",
                "value": -18.451534877007
            }, {
                "label": "Group D",
                "value": 8.6142352811805
            }, {
                "label": "Group E",
                "value": -7.8082472075876
            }, {
                "label": "Group F",
                "value": 15.259101026956
            }, {
                "label": "Group G",
                "value": -0.30947953487127
            }, {
                "label": "Group H",
                "value": 0
            }, {
                "label": "Group I",
                "value": 0
            }]
        }];
        var multibarchart;
        nv.addGraph(function () {
            multibarchart = nv.models.multiBarHorizontalChart().x(function (d) {
                return d.label;
            }).y(function (d) {
                return d.value;
            }).yErr(function (d) {
                return [-Math.abs(d.value * Math.random() * 0.3), Math.abs(d.value * Math.random() * 0.3)];
            }).duration(250).stacked(false);
            multibarchart.yAxis.tickFormat(d3.format(',.2f'));
            multibarchart.barColor(["#FE5B5B", "#2ECC71", "#428BCA"]);
            multibarchart.barColor(function (d, i) {
                var colors = d3.scale.category20().range().slice(10);
                return colors[i % colors.length - 1];
            });
            multibarchart.yAxis.axisLabel('Y Axis');
            multibarchart.barColor(["#428BCA", "#FE5B5B", "#FF931D", "#4FC1E9"]);
            multibarchart.xAxis.axisLabel('X Axis').axisLabelDistance(20);
            d3.select('#chart3 svg').datum(long_short_data).call(multibarchart);
            nv.utils.windowResize(multibarchart.update);
            $('#chart3').closest('.panel-body').on('resize', function () {
                $("#chart3").find('svg').remove();
                $("#chart3").html("<svg></svg>");
                d3.select('#chart3 svg').datum(long_short_data).call(multibarchart);
            });
            multibarchart.dispatch.on('stateChange', function (e) {
                nv.log('New State:', JSON.stringify(e));
            });
            multibarchart.state.dispatch.on('change', function (state) {
                nv.log('state', JSON.stringify(state));
            });
            return multibarchart;
        });

        /*Horizontal Multi-Bar chart end*/

        /*Stacked/Grouped Multi-Bar chart start*/
        var test_data = stream_layers(3, 128, .1).map(function (data, i) {
            return {
                key: i == 1 ? 'Non-stackable Stream' + i : 'Stream' + i,
                nonStackable: i == 1,
                values: data
            };
        });
        nv.addGraph(function () {
            var stackedbarchart = nv.models.multiBarChart().groupSpacing(0.1);
            stackedbarchart.xAxis.tickFormat(d3.format(',f'));
            stackedbarchart.yAxis.tickFormat(d3.format(',.1f'));
            d3.select('#chart1 svg').datum(test_data).transition().duration(500).call(stackedbarchart);
            nv.utils.windowResize(stackedbarchart.update);
            $('#chart1').closest('.panel-body').on('resize', function () {
                $("#chart1").find('svg').remove();
                $("#chart1").html("<svg></svg>");
                d3.select('#chart1 svg').datum(test_data).call(stackedbarchart);
                stackedbarchart.update();
            });
            return stackedbarchart;
        });

        /*Stacked/Grouped Multi-Bar chart start*/
        // area chart
        nv.addGraph(function () {
            var linechart = nv.models.lineChart
            // .useInteractiveGuideline(true)
            ().showYAxis(true).showXAxis(true);
            linechart.xAxis.axisLabel('x-values').tickFormat(d3.format(',r'));

            linechart.yAxis.axisLabel('y-values').tickFormat(d3.format('.02f'));
            var myData = sinAndCos();
            linechart.forceY([0, 8]);
            d3.select('#chart6 svg').datum(myData).call(linechart);
            nv.utils.windowResize(function () {
                linechart.update();
            });
            $(window).on("scroll", function () {
                linechart.tooltip.hideDelay(100);
            });
            $('#chart6').closest('.panel-body').on('resize', function () {
                $("#chart6").find('svg').remove();
                $("#chart6").html("<svg></svg>");
                d3.select('#chart6 svg').datum(myData).call(linechart);
                linechart.update();
            });
            return linechart;
        });

        function sinAndCos() {
            var sin = [],
                sin2 = [],
                cos = [];
            for (var i = 0; i < 100; i++) {
                sin.push({
                    x: i,
                    y: Math.cos(i / 9) + 6.5
                });
                sin2.push({
                    x: i,
                    y: Math.cos(i / 14) + 5
                });
                cos.push({
                    x: i,
                    y: Math.cos(i / 10) + 4
                });
            }
            return [{
                values: sin,
                key: 'Series 1',
                color: '#428bca',
                area: true
            }, {
                values: sin2,
                key: 'Series 2',
                color: '#22d69d',
                area: true
            }, {
                values: cos,
                key: 'Series3',
                color: '#ff9313',
                area: true
            }];
        }

        // area chart end
        // sunburst chart
        var sunburstchart;
        nv.addGraph(function () {
            sunburstchart = nv.models.sunburstChart();
            sunburstchart.color(d3.scale.category20c());
            d3.select("#chart7 svg").datum(getData()).call(sunburstchart);
            nv.utils.windowResize(sunburstchart.update);
            $('#chart7').closest('.panel-body').on('resize', function () {
                $("#chart7").find('svg').remove();
                $("#chart7").html("<svg></svg>");
                d3.select('#chart7 svg').datum(getData()).call(sunburstchart);
                sunburstchart.update();
            });
            return sunburstchart;
        });

        function getData() {
            return [{
                "name": "flare",
                "color": "#22d69d",
                "children": [{
                    "name": "analytics",
                    "color": "#22d69d",
                    "children": [{
                        "name": "cluster",
                        "color": "#22d69d",
                        "children": [{
                            "name": "AgglomerativeCluster",
                            "size": 3938
                        }, {
                            "name": "CommunityStructure",
                            "size": 3812
                        }, {
                            "name": "HierarchicalCluster",
                            "size": 6714
                        }, {
                            "name": "MergeEdge",
                            "size": 743
                        }]
                    }, {
                        "name": "graph",
                        "color": "#ffb65f",
                        "children": [{
                            "name": "BetweennessCentrality",
                            "size": 3534
                        }, {
                            "name": "LinkDistance",
                            "size": 5731
                        }, {
                            "name": "MaxFlowMinCut",
                            "size": 7840
                        }, {
                            "name": "ShortestPaths",
                            "size": 5914
                        }, {
                            "name": "SpanningTree",
                            "size": 3416
                        }]
                    }, {
                        "name": "optimization",
                        "color": "#ffb65f",
                        "children": [{
                            "name": "AspectRatioBanker",
                            "size": 7074
                        }]
                    }]
                }, {
                    "name": "animate",
                    "color": "#fb8678",
                    "children": [{
                        "name": "Easing",
                        "size": 17010
                    }, {
                        "name": "FunctionSequence",
                        "size": 5842
                    }, {
                        "name": "interpolate",
                        "color": "#ffb65f",
                        "children": [{
                            "name": "ArrayInterpolator",
                            "size": 1983
                        }, {
                            "name": "ColorInterpolator",
                            "size": 2047
                        }, {
                            "name": "DateInterpolator",
                            "size": 1375
                        }, {
                            "name": "Interpolator",
                            "size": 8746
                        }, {
                            "name": "MatrixInterpolator",
                            "size": 2202
                        }, {
                            "name": "NumberInterpolator",
                            "size": 1382
                        }, {
                            "name": "ObjectInterpolator",
                            "size": 1629
                        }, {
                            "name": "PointInterpolator",
                            "size": 1675
                        }, {
                            "name": "RectangleInterpolator",
                            "size": 2042
                        }]
                    }, {
                        "name": "ISchedulable",
                        "size": 1041
                    }, {
                        "name": "Parallel",
                        "size": 5176
                    }, {
                        "name": "Pause",
                        "size": 449
                    }, {
                        "name": "Scheduler",
                        "size": 5593
                    }, {
                        "name": "Sequence",
                        "size": 5534
                    }, {
                        "name": "Transition",
                        "size": 9201
                    }, {
                        "name": "Transitioner",
                        "size": 19975
                    }, {
                        "name": "TransitionEvent",
                        "size": 1116
                    }, {
                        "name": "Tween",
                        "size": 6006
                    }]
                }, {
                    "name": "data",
                    "color": "#22d69d",
                    "children": [{
                        "name": "converters",
                        "color": "#4fc1e9",
                        "children": [{
                            "name": "Converters",
                            "size": 721
                        }, {
                            "name": "DelimitedTextConverter",
                            "size": 4294
                        }, {
                            "name": "GraphMLConverter",
                            "size": 9800
                        }, {
                            "name": "IDataConverter",
                            "size": 1314
                        }, {
                            "name": "JSONConverter",
                            "size": 2220
                        }]
                    }, {
                        "name": "DataField",
                        "size": 1759
                    }, {
                        "name": "DataSchema",
                        "size": 2165
                    }, {
                        "name": "DataSet",
                        "size": 586
                    }, {
                        "name": "DataSource",
                        "size": 3331
                    }, {
                        "name": "DataTable",
                        "size": 772
                    }, {
                        "name": "DataUtil",
                        "size": 3322
                    }]
                }, {
                    "name": "display",
                    "color": "#4fc1e9",
                    "children": [{
                        "name": "DirtySprite",
                        "size": 8833
                    }, {
                        "name": "LineSprite",
                        "size": 1732
                    }, {
                        "name": "RectSprite",
                        "size": 3623
                    }, {
                        "name": "TextSprite",
                        "size": 10066
                    }]
                }, {
                    "name": "flex",
                    "color": "#4fc1e9",
                    "children": [{
                        "name": "FlareVis",
                        "size": 4116
                    }]
                }, {
                    "name": "physics",
                    "color": "#428bca",
                    "children": [{
                        "name": "DragForce",
                        "size": 1082
                    }, {
                        "name": "GravityForce",
                        "size": 1336
                    }, {
                        "name": "IForce",
                        "size": 319
                    }, {
                        "name": "NBodyForce",
                        "size": 10498
                    }, {
                        "name": "Particle",
                        "size": 2822
                    }, {
                        "name": "Simulation",
                        "size": 9983
                    }, {
                        "name": "Spring",
                        "size": 2213
                    }, {
                        "name": "SpringForce",
                        "size": 1681
                    }]
                }, {
                    "name": "query",
                    "color": "#dcdcdc",
                    "children": [{
                        "name": "AggregateExpression",
                        "size": 1616
                    }, {
                        "name": "And",
                        "size": 1027
                    }, {
                        "name": "Arithmetic",
                        "size": 3891
                    }, {
                        "name": "Average",
                        "size": 891
                    }, {
                        "name": "BinaryExpression",
                        "size": 2893
                    }, {
                        "name": "Comparison",
                        "size": 5103
                    }, {
                        "name": "CompositeExpression",
                        "size": 3677
                    }, {
                        "name": "Count",
                        "size": 781
                    }, {
                        "name": "DateUtil",
                        "size": 4141
                    }, {
                        "name": "Distinct",
                        "size": 933
                    }, {
                        "name": "Expression",
                        "size": 5130
                    }, {
                        "name": "ExpressionIterator",
                        "size": 3617
                    }, {
                        "name": "Fn",
                        "size": 3240
                    }, {
                        "name": "If",
                        "size": 2732
                    }, {
                        "name": "IsA",
                        "size": 2039
                    }, {
                        "name": "Literal",
                        "size": 1214
                    }, {
                        "name": "Match",
                        "size": 3748
                    }, {
                        "name": "Maximum",
                        "size": 843
                    }, {
                        "name": "methods",
                        "color": "#dcdcdc",
                        "children": [{
                            "name": "add",
                            "size": 593
                        }, {
                            "name": "and",
                            "size": 330
                        }, {
                            "name": "average",
                            "size": 287
                        }, {
                            "name": "count",
                            "size": 277
                        }, {
                            "name": "distinct",
                            "size": 292
                        }, {
                            "name": "div",
                            "size": 595
                        }, {
                            "name": "eq",
                            "size": 594
                        }, {
                            "name": "fn",
                            "size": 460
                        }, {
                            "name": "gt",
                            "size": 603
                        }, {
                            "name": "gte",
                            "size": 625
                        }, {
                            "name": "iff",
                            "size": 748
                        }, {
                            "name": "isa",
                            "size": 461
                        }, {
                            "name": "lt",
                            "size": 597
                        }, {
                            "name": "lte",
                            "size": 619
                        }, {
                            "name": "max",
                            "size": 283
                        }, {
                            "name": "min",
                            "size": 283
                        }, {
                            "name": "mod",
                            "size": 591
                        }, {
                            "name": "mul",
                            "size": 603
                        }, {
                            "name": "neq",
                            "size": 599
                        }, {
                            "name": "not",
                            "size": 386
                        }, {
                            "name": "or",
                            "size": 323
                        }, {
                            "name": "orderby",
                            "size": 307
                        }, {
                            "name": "range",
                            "size": 772
                        }, {
                            "name": "select",
                            "size": 296
                        }, {
                            "name": "stddev",
                            "size": 363
                        }, {
                            "name": "sub",
                            "size": 600
                        }, {
                            "name": "sum",
                            "size": 280
                        }, {
                            "name": "update",
                            "size": 307
                        }, {
                            "name": "variance",
                            "size": 335
                        }, {
                            "name": "where",
                            "size": 299
                        }, {
                            "name": "xor",
                            "size": 354
                        }, {
                            "name": "_",
                            "size": 264
                        }]
                    }, {
                        "name": "Minimum",
                        "size": 843
                    }, {
                        "name": "Not",
                        "size": 1554
                    }, {
                        "name": "Or",
                        "size": 970
                    }, {
                        "name": "Query",
                        "size": 13896
                    }, {
                        "name": "Range",
                        "size": 1594
                    }, {
                        "name": "StringUtil",
                        "size": 4130
                    }, {
                        "name": "Sum",
                        "size": 791
                    }, {
                        "name": "Variable",
                        "size": 1124
                    }, {
                        "name": "Variance",
                        "size": 1876
                    }, {
                        "name": "Xor",
                        "size": 1101
                    }]
                }, {
                    "name": "scale",
                    "color": "#ffb65f",
                    "children": [{
                        "name": "IScaleMap",
                        "size": 2105
                    }, {
                        "name": "LinearScale",
                        "size": 1316
                    }, {
                        "name": "LogScale",
                        "size": 3151
                    }, {
                        "name": "OrdinalScale",
                        "size": 3770
                    }, {
                        "name": "QuantileScale",
                        "size": 2435
                    }, {
                        "name": "QuantitativeScale",
                        "size": 4839
                    }, {
                        "name": "RootScale",
                        "size": 1756
                    }, {
                        "name": "Scale",
                        "size": 4268
                    }, {
                        "name": "ScaleType",
                        "size": 1821
                    }, {
                        "name": "TimeScale",
                        "size": 5833
                    }]
                }, {
                    "name": "util",
                    "color": "#4fc1e9",
                    "children": [{
                        "name": "Arrays",
                        "size": 8258
                    }, {
                        "name": "Colors",
                        "size": 10001
                    }, {
                        "name": "Dates",
                        "size": 8217
                    }, {
                        "name": "Displays",
                        "size": 12555
                    }, {
                        "name": "Filter",
                        "size": 2324
                    }, {
                        "name": "Geometry",
                        "size": 10993
                    }, {
                        "name": "heap",
                        "color": "#ffb65f",
                        "children": [{
                            "name": "FibonacciHeap",
                            "size": 9354
                        }, {
                            "name": "HeapNode",
                            "size": 1233
                        }]
                    }, {
                        "name": "IEvaluable",
                        "size": 335
                    }, {
                        "name": "IPredicate",
                        "size": 383
                    }, {
                        "name": "IValueProxy",
                        "size": 874
                    }, {
                        "name": "math",
                        "color": "#4fc1e9",
                        "children": [{
                            "name": "DenseMatrix",
                            "size": 3165
                        }, {
                            "name": "IMatrix",
                            "size": 2815
                        }, {
                            "name": "SparseMatrix",
                            "size": 3366
                        }]
                    }, {
                        "name": "Maths",
                        "size": 17705
                    }, {
                        "name": "Orientation",
                        "size": 1486
                    }, {
                        "name": "palette",
                        "color": "#4fc1e9",
                        "children": [{
                            "name": "ColorPalette",
                            "size": 6367
                        }, {
                            "name": "Palette",
                            "size": 1229
                        }, {
                            "name": "ShapePalette",
                            "size": 2059
                        }, {
                            "name": "SizePalette",
                            "size": 2291
                        }]
                    }, {
                        "name": "Property",
                        "size": 5559
                    }, {
                        "name": "Shapes",
                        "size": 19118
                    }, {
                        "name": "Sort",
                        "size": 6887
                    }, {
                        "name": "Stats",
                        "size": 6557
                    }, {
                        "name": "Strings",
                        "size": 22026
                    }]
                }, {
                    "name": "vis",
                    "color": "#428bca",
                    "children": [{
                        "name": "axis",
                        "color": "#4fc1e9",
                        "children": [{
                            "name": "Axes",
                            "size": 1302
                        }, {
                            "name": "Axis",
                            "size": 24593
                        }, {
                            "name": "AxisGridLine",
                            "size": 652
                        }, {
                            "name": "AxisLabel",
                            "size": 636
                        }, {
                            "name": "CartesianAxes",
                            "size": 6703
                        }]
                    }, {
                        "name": "controls",
                        "color": "#22d69d",
                        "children": [{
                            "name": "AnchorControl",
                            "size": 2138
                        }, {
                            "name": "ClickControl",
                            "size": 3824
                        }, {
                            "name": "Control",
                            "size": 1353
                        }, {
                            "name": "ControlList",
                            "size": 4665
                        }, {
                            "name": "DragControl",
                            "size": 2649
                        }, {
                            "name": "ExpandControl",
                            "size": 2832
                        }, {
                            "name": "HoverControl",
                            "size": 4896
                        }, {
                            "name": "IControl",
                            "size": 763
                        }, {
                            "name": "PanZoomControl",
                            "size": 5222
                        }, {
                            "name": "SelectionControl",
                            "size": 7862
                        }, {
                            "name": "TooltipControl",
                            "size": 8435
                        }]
                    }, {
                        "name": "data",
                        "color": "#fb8678",
                        "children": [{
                            "name": "Data",
                            "size": 20544
                        }, {
                            "name": "DataList",
                            "size": 19788
                        }, {
                            "name": "DataSprite",
                            "size": 10349
                        }, {
                            "name": "EdgeSprite",
                            "size": 3301
                        }, {
                            "name": "NodeSprite",
                            "size": 19382
                        }, {
                            "name": "render",
                            "color": "#ffb65f",
                            "children": [{
                                "name": "ArrowType",
                                "size": 698
                            }, {
                                "name": "EdgeRenderer",
                                "size": 5569
                            }, {
                                "name": "IRenderer",
                                "size": 353
                            }, {
                                "name": "ShapeRenderer",
                                "size": 2247
                            }]
                        }, {
                            "name": "ScaleBinding",
                            "size": 11275
                        }, {
                            "name": "Tree",
                            "size": 7147
                        }, {
                            "name": "TreeBuilder",
                            "size": 9930
                        }]
                    }, {
                        "name": "events",
                        "color": "#22d69d",
                        "children": [{
                            "name": "DataEvent",
                            "size": 2313
                        }, {
                            "name": "SelectionEvent",
                            "size": 1880
                        }, {
                            "name": "TooltipEvent",
                            "size": 1701
                        }, {
                            "name": "VisualizationEvent",
                            "size": 1117
                        }]
                    }, {
                        "name": "legend",
                        "color": "#ffb65f",
                        "children": [{
                            "name": "Legend",
                            "size": 20859
                        }, {
                            "name": "LegendItem",
                            "size": 4614
                        }, {
                            "name": "LegendRange",
                            "size": 10530
                        }]
                    }, {
                        "name": "operator",
                        "color": "#4fc1e9",
                        "children": [{
                            "name": "distortion",
                            "color": "#ffb65f",
                            "children": [{
                                "name": "BifocalDistortion",
                                "size": 4461
                            }, {
                                "name": "Distortion",
                                "size": 6314
                            }, {
                                "name": "FisheyeDistortion",
                                "size": 3444
                            }]
                        }, {
                            "name": "encoder",
                            "color": "#ffb65f",
                            "children": [{
                                "name": "ColorEncoder",
                                "size": 3179
                            }, {
                                "name": "Encoder",
                                "size": 4060
                            }, {
                                "name": "PropertyEncoder",
                                "size": 4138
                            }, {
                                "name": "ShapeEncoder",
                                "size": 1690
                            }, {
                                "name": "SizeEncoder",
                                "size": 1830
                            }]
                        }, {
                            "name": "filter",
                            "color": "#fb8678",
                            "children": [{
                                "name": "FisheyeTreeFilter",
                                "size": 5219
                            }, {
                                "name": "GraphDistanceFilter",
                                "size": 3165
                            }, {
                                "name": "VisibilityFilter",
                                "size": 3509
                            }]
                        }, {
                            "name": "IOperator",
                            "size": 1286
                        }, {
                            "name": "label",
                            "color": "#4fc1e9",
                            "children": [{
                                "name": "Labeler",
                                "size": 9956
                            }, {
                                "name": "RadialLabeler",
                                "size": 3899
                            }, {
                                "name": "StackedAreaLabeler",
                                "size": 3202
                            }]
                        }, {
                            "name": "layout",
                            "color": "#4fc1e9",
                            "children": [{
                                "name": "AxisLayout",
                                "size": 6725
                            }, {
                                "name": "BundledEdgeRouter",
                                "size": 3727
                            }, {
                                "name": "CircleLayout",
                                "size": 9317
                            }, {
                                "name": "CirclePackingLayout",
                                "size": 12003
                            }, {
                                "name": "DendrogramLayout",
                                "size": 4853
                            }, {
                                "name": "ForceDirectedLayout",
                                "size": 8411
                            }, {
                                "name": "IcicleTreeLayout",
                                "size": 4864
                            }, {
                                "name": "IndentedTreeLayout",
                                "size": 3174
                            }, {
                                "name": "Layout",
                                "size": 7881
                            }, {
                                "name": "NodeLinkTreeLayout",
                                "size": 12870
                            }, {
                                "name": "PieLayout",
                                "size": 2728
                            }, {
                                "name": "RadialTreeLayout",
                                "size": 12348
                            }, {
                                "name": "RandomLayout",
                                "size": 870
                            }, {
                                "name": "StackedAreaLayout",
                                "size": 9121
                            }, {
                                "name": "TreeMapLayout",
                                "size": 9191
                            }]
                        }, {
                            "name": "Operator",
                            "size": 2490
                        }, {
                            "name": "OperatorList",
                            "size": 5248
                        }, {
                            "name": "OperatorSequence",
                            "size": 4190
                        }, {
                            "name": "OperatorSwitch",
                            "size": 2581
                        }, {
                            "name": "SortOperator",
                            "size": 2023
                        }]
                    }, {
                        "name": "Visualization",
                        "size": 16540
                    }]
                }]
            }];
        }

        // sunburst chart end
    },
    destroyed: function destroyed() {}
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 645:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
exports.push([module.i, "\n#chart1 svg,\r\n#chart2 svg,\r\n#chart3 svg,\r\n#chart4 svg {\r\n    height : 300px;\n}\n#chart5 svg,\r\n#chart6 svg,\r\n#chart7 svg {\r\n    height : 400px;\n}\n.bg-panel {\r\n    background : url("+__webpack_require__(751)+");\r\n    height     : 100%;\n}\n.bg-panel-primary {\r\n    background : #66ccff;\n}\n#chart6 .nv-group {\r\n    fill-opacity : 0.5 !important;\n}\n#chart6 .nv-group.nv-series-2 {\r\n    fill-opacity : 0.7 !important;\n}\n@media screen and (max-width : 425px) {\n.nv-legendWrap,\r\n    .panel-heading .clickable {\r\n        display : none;\n}\n}\r\n", ""]);

/***/ }),

/***/ 646:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
exports.push([module.i, "\n.nvd3 .nv-axis line,.nvd3 .nv-axis path{fill:none;shape-rendering:crispEdges\n}\n.nv-brush .extent,.nvd3 .background path,.nvd3 .nv-axis line,.nvd3 .nv-axis path{shape-rendering:crispEdges\n}\n.nv-distx,.nv-disty,.nv-noninteractive,.nvd3 .nv-axis,.nvd3.nv-pie .nv-label,.nvd3.nv-sparklineplus g.nv-hoverValue{pointer-events:none\n}\n.nvd3 .nv-axis{opacity:1\n}\n.nvd3 .nv-axis.nv-disabled,.nvd3 .nv-controlsWrap .nv-legend .nv-check-box .nv-check{opacity:0\n}\n.nvd3 .nv-axis path{stroke:#000;stroke-opacity:.75\n}\n.nvd3 .nv-axis path.domain{stroke-opacity:.75\n}\n.nvd3 .nv-axis.nv-x path.domain{stroke-opacity:0\n}\n.nvd3 .nv-axis line{stroke:#e5e5e5\n}\n.nvd3 .nv-axis .zero line, .nvd3 .nv-axis line.zero{stroke-opacity:.75\n}\n.nvd3 .nv-axis .nv-axisMaxMin text{font-weight:700\n}\n.nvd3 .x .nv-axis .nv-axisMaxMin text,.nvd3 .x2 .nv-axis .nv-axisMaxMin text,.nvd3 .x3 .nv-axis .nv-axisMaxMin text{text-anchor:middle\n}\n.nvd3 .nv-bars rect{fill-opacity:.75;transition:fill-opacity 250ms linear\n}\n.nvd3 .nv-bars rect.hover{fill-opacity:1\n}\n.nvd3 .nv-bars .hover rect{fill:#add8e6\n}\n.nvd3 .nv-bars text{fill:transparent\n}\n.nvd3 .nv-bars .hover text{fill:rgba(0,0,0,1)\n}\n.nvd3 .nv-discretebar .nv-groups rect,.nvd3 .nv-multibar .nv-groups rect,.nvd3 .nv-multibarHorizontal .nv-groups rect{stroke-opacity:0;transition:fill-opacity 250ms linear\n}\n.with-transitions .nv-candlestickBar .nv-ticks .nv-tick,.with-transitions .nvd3 .nv-groups .nv-point{transition:stroke-width 250ms linear,stroke-opacity 250ms linear\n}\n.nvd3 .nv-candlestickBar .nv-ticks rect:hover,.nvd3 .nv-discretebar .nv-groups rect:hover,.nvd3 .nv-multibar .nv-groups rect:hover,.nvd3 .nv-multibarHorizontal .nv-groups rect:hover{fill-opacity:1\n}\n.nvd3 .nv-discretebar .nv-groups text,.nvd3 .nv-multibarHorizontal .nv-groups text{font-weight:700;fill:rgba(0,0,0,1);stroke:transparent\n}\n.nvd3 .nv-boxplot circle{fill-opacity:.5\n}\n.nvd3 .nv-boxplot circle:hover,.nvd3 .nv-boxplot rect:hover{fill-opacity:1\n}\n.nvd3 line.nv-boxplot-median{stroke:#000\n}\n.nv-boxplot-tick:hover{stroke-width:2.5px\n}\n.nvd3.nv-bullet{font:10px sans-serif\n}\n.nvd3.nv-bullet .nv-measure{fill-opacity:.8\n}\n.nvd3.nv-bullet .nv-measure:hover{fill-opacity:1\n}\n.nvd3.nv-bullet .nv-marker{stroke:#000;stroke-width:2px\n}\n.nvd3.nv-bullet .nv-markerTriangle{stroke:#000;fill:#fff;stroke-width:1.5px\n}\n.nvd3.nv-bullet .nv-markerLine{stroke:#000;stroke-width:1.5px\n}\n.nvd3.nv-bullet .nv-tick line{stroke:#666;stroke-width:.5px\n}\n.nvd3.nv-bullet .nv-range.nv-s0{fill:#eee\n}\n.nvd3.nv-bullet .nv-range.nv-s1{fill:#ddd\n}\n.nvd3.nv-bullet .nv-range.nv-s2{fill:#ccc\n}\n.nvd3.nv-bullet .nv-title{font-size:14px;font-weight:700\n}\n.nvd3.nv-bullet .nv-subtitle{fill:#999\n}\n.nvd3.nv-bullet .nv-range{fill:#bababa;fill-opacity:.4\n}\n.nvd3.nv-bullet .nv-range:hover{fill-opacity:.7\n}\n.nvd3.nv-candlestickBar .nv-ticks .nv-tick{stroke-width:1px\n}\n.nvd3.nv-candlestickBar .nv-ticks .nv-tick.hover{stroke-width:2px\n}\n.nvd3.nv-candlestickBar .nv-ticks .nv-tick.positive rect{stroke:#2ca02c;fill:#2ca02c\n}\n.nvd3.nv-candlestickBar .nv-ticks .nv-tick.negative rect{stroke:#d62728;fill:#d62728\n}\n.nvd3.nv-candlestickBar .nv-ticks line{stroke:#333\n}\n.nv-force-node{stroke:#fff;stroke-width:1.5px\n}\n.nv-force-link{stroke:#999;stroke-opacity:.6\n}\n.nv-force-node text{stroke-width:0\n}\n.nvd3 .nv-check-box .nv-box{fill-opacity:0;stroke-width:2\n}\n.nvd3 .nv-check-box .nv-check{fill-opacity:0;stroke-width:4\n}\n.nvd3 .nv-series.nv-disabled .nv-check-box .nv-check{fill-opacity:0;stroke-opacity:0\n}\n.nvd3.nv-linePlusBar .nv-bar rect{fill-opacity:.75\n}\n.nvd3.nv-linePlusBar .nv-bar rect:hover{fill-opacity:1\n}\n.nvd3 .nv-groups path.nv-line{fill:none\n}\n.nvd3 .nv-groups path.nv-area{stroke:none\n}\n.nvd3.nv-line .nvd3.nv-scatter .nv-groups .nv-point{fill-opacity:0;stroke-opacity:0\n}\n.nvd3.nv-scatter.nv-single-point .nv-groups .nv-point{fill-opacity:.5!important;stroke-opacity:.5!important\n}\n.nvd3 .nv-groups .nv-point.hover,.nvd3.nv-scatter .nv-groups .nv-point.hover{stroke-width:7px;fill-opacity:.95!important;stroke-opacity:.95!important\n}\n.nvd3 .nv-point-paths path{stroke:#aaa;stroke-opacity:0;fill:#eee;fill-opacity:0\n}\n.nvd3 .nv-indexLine{cursor:ew-resize\n}\nsvg.nvd3-svg{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block;width:100%;height:100%\n}\n.nvtooltip.with-3d-shadow,.with-3d-shadow .nvtooltip{box-shadow:0 5px 10px rgba(0,0,0,.2);border-radius:5px\n}\n.nvd3 text{font:400 12px Arial,sans-serif\n}\n.nvd3 .title{font:700 14px Arial,sans-serif\n}\n.nvd3 .nv-background{fill:#fff;fill-opacity:0\n}\n.nvd3.nv-noData{font-size:18px;font-weight:700\n}\n.nv-brush .extent{fill-opacity:.125\n}\n.nv-brush .resize path{fill:#eee;stroke:#666\n}\n.nvd3 .nv-legend .nv-series{cursor:pointer\n}\n.nvd3 .nv-legend .nv-disabled circle{fill-opacity:0\n}\n.nvd3 .nv-brush .extent{fill-opacity:0!important\n}\n.nvd3 .nv-brushBackground rect{stroke:#000;stroke-width:.4;fill:#fff;fill-opacity:.7\n}\n@media print{\n.nvd3 text{stroke-width:0;fill-opacity:1\n}\n}\n.nvd3.nv-ohlcBar .nv-ticks .nv-tick{stroke-width:1px\n}\n.nvd3.nv-ohlcBar .nv-ticks .nv-tick.hover{stroke-width:2px\n}\n.nvd3.nv-ohlcBar .nv-ticks .nv-tick.positive{stroke:#2ca02c\n}\n.nvd3.nv-ohlcBar .nv-ticks .nv-tick.negative{stroke:#d62728\n}\n.nvd3 .background path{fill:none;stroke:#EEE;stroke-opacity:.4\n}\n.nvd3 .foreground path{fill:none;stroke-opacity:.7\n}\n.nvd3 .nv-parallelCoordinates-brush .extent{fill:#fff;fill-opacity:.6;stroke:gray;shape-rendering:crispEdges\n}\n.nvd3 .nv-parallelCoordinates .hover{fill-opacity:1;stroke-width:3px\n}\n.nvd3 .missingValuesline line{fill:none;stroke:#000;stroke-width:1;stroke-opacity:1;stroke-dasharray:5,5\n}\n.nvd3.nv-pie .nv-pie-title{font-size:24px;fill:rgba(19,196,249,.59)\n}\n.nvd3.nv-pie .nv-slice text{stroke:#000;stroke-width:0\n}\n.nvd3.nv-pie path{transition:fill-opacity 250ms linear,stroke-width 250ms linear,stroke-opacity 250ms linear;stroke:#fff;stroke-width:1px;stroke-opacity:1;fill-opacity:.7\n}\n.nvd3.nv-pie .hover path{fill-opacity:1\n}\n.nvd3.nv-pie .nv-label rect{fill-opacity:0;stroke-opacity:0\n}\n.nvd3 .nv-groups .nv-point.hover{stroke-width:20px;stroke-opacity:.5\n}\n.nvd3 .nv-scatter .nv-point.hover{fill-opacity:1\n}\n.nvd3.nv-sparkline path{fill:none\n}\n.nvd3.nv-sparklineplus .nv-hoverValue line{stroke:#333;stroke-width:1.5px\n}\n.nvd3.nv-sparklineplus,.nvd3.nv-sparklineplus g{pointer-events:all\n}\n.nvd3 .nv-interactiveGuideLine,.nvtooltip{pointer-events:none\n}\n.nvd3 .nv-hoverArea{fill-opacity:0;stroke-opacity:0\n}\n.nvd3.nv-sparklineplus .nv-xValue,.nvd3.nv-sparklineplus .nv-yValue{stroke-width:0;font-size:.9em;font-weight:400\n}\n.nvd3.nv-sparklineplus .nv-yValue{stroke:#f66\n}\n.nvd3.nv-sparklineplus .nv-maxValue{stroke:#2ca02c;fill:#2ca02c\n}\n.nvd3.nv-sparklineplus .nv-minValue{stroke:#d62728;fill:#d62728\n}\n.nvd3.nv-sparklineplus .nv-currentValue{font-weight:700;font-size:1.1em\n}\n.nvtooltip h3,.nvtooltip table td.key{font-weight:400\n}\n.nvd3.nv-stackedarea path.nv-area{fill-opacity:.7;stroke-opacity:0;transition:fill-opacity 250ms linear,stroke-opacity 250ms linear\n}\n.nvd3.nv-stackedarea path.nv-area.hover{fill-opacity:.9\n}\n.nvd3.nv-stackedarea .nv-groups .nv-point{stroke-opacity:0;fill-opacity:0\n}\n.nvtooltip{position:absolute;color:rgba(0,0,0,1);padding:1px;z-index:10000;display:block;font-family:Arial,sans-serif;font-size:13px;text-align:left;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background:rgba(255,255,255,.8);border:1px solid rgba(0,0,0,.5);border-radius:4px\n}\n.nvtooltip h3,.nvtooltip p{margin:0;text-align:center\n}\n.nvtooltip.with-transitions,.with-transitions .nvtooltip{transition:opacity 50ms linear;transition-delay:200ms\n}\n.nvtooltip.x-nvtooltip,.nvtooltip.y-nvtooltip{padding:8px\n}\n.nvtooltip h3{padding:4px 14px;line-height:18px;background-color:rgba(247,247,247,.75);color:rgba(0,0,0,1);border-bottom:1px solid #ebebeb;border-radius:5px 5px 0 0\n}\n.nvtooltip p{padding:5px 14px\n}\n.nvtooltip span{display:inline-block;margin:2px 0\n}\n.nvtooltip table{margin:6px;border-spacing:0\n}\n.nvtooltip table td{padding:2px 9px 2px 0;vertical-align:middle\n}\n.nvtooltip table td.key.total{font-weight:700\n}\n.nvtooltip table td.value{text-align:right;font-weight:700\n}\n.nvtooltip table td.percent{color:#a9a9a9\n}\n.nvtooltip table tr.highlight td{padding:1px 9px 1px 0;border-bottom-style:solid;border-bottom-width:1px;border-top-style:solid;border-top-width:1px\n}\n.nvtooltip table td.legend-color-guide div{vertical-align:middle;width:12px;height:12px;border:1px solid #999\n}\n.nvtooltip .footer{padding:3px;text-align:center\n}\n.nvtooltip-pending-removal{pointer-events:none;display:none\n}\n.nvd3 line.nv-guideline{stroke:#ccc\n}", ""]);

/***/ }),

/***/ 751:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: /home/vagrant/Sites/vue_workflows/laravel/node_modules/optipng-bin/vendor/optipng: 1: /home/vagrant/Sites/vue_workflows/laravel/node_modules/optipng-bin/vendor/optipng: Syntax error: \"(\" unexpected\n\n    at Promise.all.then.arr (/home/vagrant/Sites/vue_workflows/laravel/node_modules/execa/index.js:201:11)\n    at process._tickCallback (internal/process/next_tick.js:109:7)");

/***/ }),

/***/ 848:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-12"
  }, [_c('div', {
    staticClass: "panel "
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    attrs: {
      "id": "chart1"
    }
  }, [_c('svg')])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-6"
  }, [_c('div', {
    staticClass: "panel "
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "panel-body bg-panel"
  }, [_c('div', {
    staticClass: "with-3d-shadow with-transitions",
    attrs: {
      "id": "chart2"
    }
  }, [_c('svg')])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-6"
  }, [_c('div', {
    staticClass: "panel "
  }, [_vm._m(2), _vm._v(" "), _c('div', {
    staticClass: "panel-body bg-"
  }, [_c('div', {
    staticClass: "with-3d-shadow with-transitions",
    attrs: {
      "id": "chart3"
    }
  }, [_c('svg')])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-12"
  }, [_c('div', {
    staticClass: "panel "
  }, [_vm._m(3), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    staticClass: "with-3d-shadow with-transitions",
    attrs: {
      "id": "chart4"
    }
  }, [_c('svg')])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-12"
  }, [_c('div', {
    staticClass: "panel bg-panel "
  }, [_vm._m(4), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    staticClass: "with-3d-shadow with-transitions",
    attrs: {
      "id": "chart5"
    }
  }, [_c('svg')])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-12"
  }, [_c('div', {
    staticClass: "panel "
  }, [_vm._m(5), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    staticClass: "with-3d-shadow with-transitions",
    attrs: {
      "id": "chart6"
    }
  }, [_c('svg')])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-12"
  }, [_c('div', {
    staticClass: "panel "
  }, [_vm._m(6), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    staticClass: "with-3d-shadow with-transitions",
    attrs: {
      "id": "chart7"
    }
  }, [_c('svg')])])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "panel-heading"
  }, [_c('h4', {
    staticClass: "panel-title"
  }, [_c('i', {
    staticClass: "ti-bar-chart"
  }), _vm._v(" Stacked/Grouped Multi-Bar Chart\n                        ")]), _vm._v(" "), _c('span', {
    staticClass: "pull-right"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-angle-up clickable"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-fw ti-close removepanel clickable"
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "panel-heading"
  }, [_c('h4', {
    staticClass: "panel-title"
  }, [_c('i', {
    staticClass: "ti-bar-chart-alt"
  }), _vm._v(" Line Plus Bar Chart\n                        ")]), _vm._v(" "), _c('span', {
    staticClass: "pull-right"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-angle-up clickable"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-fw ti-close removepanel clickable"
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "panel-heading"
  }, [_c('h4', {
    staticClass: "panel-title"
  }, [_c('i', {
    staticClass: "ti-bar-chart"
  }), _vm._v(" Horizontal Multi-Bar Chart\n                        ")]), _vm._v(" "), _c('span', {
    staticClass: "pull-right"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-angle-up clickable"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-fw ti-close removepanel clickable"
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "panel-heading"
  }, [_c('h4', {
    staticClass: "panel-title"
  }, [_c('i', {
    staticClass: "ti-bar-chart-alt"
  }), _vm._v(" Cumulative Line Chart\n                        ")]), _vm._v(" "), _c('span', {
    staticClass: "pull-right"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-angle-up clickable"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-fw ti-close removepanel clickable"
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "panel-heading"
  }, [_c('h4', {
    staticClass: "panel-title"
  }, [_c('i', {
    staticClass: "ti-bar-chart-alt"
  }), _vm._v(" Scatter / Bubble Chart\n                        ")]), _vm._v(" "), _c('span', {
    staticClass: "pull-right"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-angle-up clickable"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-fw ti-close removepanel clickable"
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "panel-heading"
  }, [_c('h4', {
    staticClass: "panel-title"
  }, [_c('i', {
    staticClass: "ti-bar-chart-alt"
  }), _vm._v(" Area Chart\n                        ")]), _vm._v(" "), _c('span', {
    staticClass: "pull-right"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-angle-up clickable"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-fw ti-close removepanel clickable"
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "panel-heading"
  }, [_c('h4', {
    staticClass: "panel-title"
  }, [_c('i', {
    staticClass: "ti-pie-chart"
  }), _vm._v(" Sunburst Chart\n                        ")]), _vm._v(" "), _c('span', {
    staticClass: "pull-right"
  }, [_c('i', {
    staticClass: "fa fa-fw ti-angle-up clickable"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa fa-fw ti-close removepanel clickable"
  })])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-605fbf05", module.exports)
  }
}

/***/ }),

/***/ 986:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(645);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("79196836", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-605fbf05\",\"scoped\":false,\"hasInlineConfig\":true}!./nvd3_charts.css", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-605fbf05\",\"scoped\":false,\"hasInlineConfig\":true}!./nvd3_charts.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 987:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(646);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("8ce36ccc", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-605fbf05\",\"scoped\":false,\"hasInlineConfig\":true}!./nv.d3.min.css", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-605fbf05\",\"scoped\":false,\"hasInlineConfig\":true}!./nv.d3.min.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});