/*!
 * simulate-chatting v0.5.1
 * Homepage: https://github.com/cycdpo/simulate-chatting#readme
 * Released under the MIT License.
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["SimulateChat"] = factory();
	else
		root["SimulateChat"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SimulateChat; });
/* harmony import */ var _template_container_pug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _template_container_pug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_template_container_pug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var awesome_js_funcs_judgeBasic_isString__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var awesome_js_funcs_media_isAudioPlaying__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
// template
 // style





var SimulateChat =
/*#__PURE__*/
function () {
  /**
   * @param context
   * @param footer
   * @param chartList
   * @param sound
   * @param SwiperModule
   */
  function SimulateChat(context, _ref) {
    var _ref$footer = _ref.footer,
        footer = _ref$footer === void 0 ? null : _ref$footer,
        _ref$chartList = _ref.chartList,
        chartList = _ref$chartList === void 0 ? [] : _ref$chartList,
        _ref$sound = _ref.sound,
        sound = _ref$sound === void 0 ? '' : _ref$sound,
        _ref$SwiperModule = _ref.SwiperModule,
        SwiperModule = _ref$SwiperModule === void 0 ? null : _ref$SwiperModule;
    this.el = {};
    this.el.context = Object(awesome_js_funcs_judgeBasic_isString__WEBPACK_IMPORTED_MODULE_2__["default"])(context) ? document.querySelector(context) : context;
    this.el.context.style.position = 'relative'; // handle chartList

    _chartListHandle(chartList);

    this.config = {
      width: this.el.context.getBoundingClientRect().width,
      chartList: chartList,
      footer: null,
      sound: null,
      SwiperModule: SwiperModule || window.Swiper
    };
    this.state = {
      next: null,
      isPausing: true,
      done: false,
      busy: false,
      soundUnlock: false,
      soundMuted: true
    }; // footer Input

    if (footer) {
      this.config.footer = {};
      this.config.footer.height = _formattingCustomValue(footer.height);
      this.config.footer.img = footer.img;
    } // sound


    if (sound) {
      this.config.sound = new Audio(sound);

      this._soundInit();
    }

    this.swiper = null;

    this._initUI();

    console.log(this);
  }

  var _proto = SimulateChat.prototype;

  /**
   * Start to display patterns.
   * @return {SimulateChat}
   */
  _proto.start = function start() {
    if (this.state.busy) {
      return this;
    }

    if (this.state.done) {
      return this;
    }

    this._soundUnlock();

    this.state.isPausing = false;

    this._showOne();

    return this;
  };

  /**
   * Pause the running of patterns.
   * @return {SimulateChat}
   */
  _proto.pause = function pause() {
    this.state.isPausing = true;
    return this;
  };

  /**
   * Reset patterns.
   * @return {SimulateChat}
   */
  _proto.reset = function reset() {
    // set state
    this.state.isPausing = true;
    this.state.done = false;
    this.state.next = null; // reset ui

    this.el.chartListChds.forEach(function (el) {
      el.classList.remove(_style_scss__WEBPACK_IMPORTED_MODULE_1___default.a.show);
    });
    this.swiper.updateSlides();

    this._scrollToTop(0);

    return this;
  };

  /**
   * Show a pattern
   * @private
   */
  _proto._showOne = function _showOne() {
    var _this = this;

    // stage 1
    if (!this.state.next) {
      this.state.next = this.el.chartList.firstChild;
    }

    return new Promise(function (resolve, reject) {
      _this.state.busy = true;
      var delay = _this.state.next.dataset.delay || 1500;
      setTimeout(function () {
        if (_this.state.isPausing) {
          _this.state.busy = false;
          reject();
        } else {
          resolve();
        }
      }, delay);
    }).then(function () {
      return new Promise(function (resolve) {
        // stage 2
        var needPause = Boolean(_this.state.next.dataset.pause),
            needSound = !Boolean(_this.state.next.dataset.muted),
            hasCallback = Boolean(_this.state.next.dataset.callback);

        if (needSound) {
          _this._soundPlay();
        }

        _this.state.next.classList.add(_style_scss__WEBPACK_IMPORTED_MODULE_1___default.a.show);

        _this.swiper.updateSlides();

        _this._scrollToBottom(); // run callback


        if (hasCallback) {
          _this.config.chartList[_this.state.next.dataset.index].callback();
        } // set next


        _this.state.next = _this.state.next.nextElementSibling;
        setTimeout(function () {
          return resolve(needPause);
        }, 0);
      });
    }).then(function (needPause) {
      if (!_this.state.next) {
        console.log('done!');
        _this.state.done = true;
        _this.state.isPausing = true;
        _this.state.busy = false;
        return Promise.resolve();
      }

      if (!needPause) {
        return _this._showOne();
      }

      _this.state.busy = false;
      return Promise.resolve();
    }).catch(function (err) {
      console.log(err);
      _this.state.busy = false;
    });
  };

  /**
   * Initialization UI
   * @private
   */
  _proto._initUI = function _initUI() {
    this.el.container = document.createElement('div');
    this.el.container.classList.add(_style_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container);
    this.el.container.innerHTML = _template_container_pug__WEBPACK_IMPORTED_MODULE_0___default()({
      _style: _style_scss__WEBPACK_IMPORTED_MODULE_1___default.a,
      config: this.config
    });
    this.el.context.appendChild(this.el.container);
    this.el.swiperContainer = this.el.container.querySelector('.' + _style_scss__WEBPACK_IMPORTED_MODULE_1___default.a.main);
    this.el.swiperWrapper = this.el.container.querySelector('.' + _style_scss__WEBPACK_IMPORTED_MODULE_1___default.a.swiperWrapper);
    this.el.chartList = this.el.swiperWrapper.querySelector('.' + _style_scss__WEBPACK_IMPORTED_MODULE_1___default.a.chartList);
    this.el.chartListChds = Array.prototype.slice.call(this.el.chartList.children);
    this.config.swiperContainer = {
      height: this.el.swiperContainer.getBoundingClientRect().height
    };
    this.swiper = new this.config.SwiperModule(this.el.swiperContainer, {
      nested: true,
      direction: 'vertical',
      slidesPerView: 'auto',
      freeMode: true,
      mousewheel: true,
      // namespace
      wrapperClass: _style_scss__WEBPACK_IMPORTED_MODULE_1___default.a.swiperWrapper,
      slideClass: _style_scss__WEBPACK_IMPORTED_MODULE_1___default.a.chartList,
      slideActiveClass: _style_scss__WEBPACK_IMPORTED_MODULE_1___default.a.swiperSlideActive
    });
  };

  /**
   * Initialization sound
   * @private
   */
  _proto._soundInit = function _soundInit() {
    var _this2 = this;

    var _soundLoad = function _soundLoad() {
      if (!_this2.config.sound.load) {
        _this2.config.sound.load();
      }

      _this2._soundUnlock();

      console.log('sound load');
      document.body.removeEventListener('touchstart', _soundLoad);
    };

    document.body.addEventListener('touchstart', _soundLoad, false);
  };

  /**
   * Scroll To Bottom
   * @param speed
   * @private
   */
  _proto._scrollToBottom = function _scrollToBottom(speed) {
    if (speed === void 0) {
      speed = 200;
    }

    var chartListHeight = this.el.chartList.getBoundingClientRect().height,
        distance = this.config.swiperContainer.height - chartListHeight;

    if (distance > 0) {
      return;
    }

    this.el.swiperWrapper.style.cssText = 'transition-duration: ' + speed + 'ms; transform: translate3d(0px, ' + distance + 'px, 0px);';
  };

  /**
   * Scroll To Top
   * @param speed
   * @private
   */
  _proto._scrollToTop = function _scrollToTop(speed) {
    if (speed === void 0) {
      speed = 200;
    }

    this.el.swiperWrapper.style.cssText = 'transition-duration: ' + speed + 'ms; transform: translate3d(0px, 0px, 0px);';
  };

  /**
   * play sound
   * @private
   */
  _proto._soundPlay = function _soundPlay() {
    if (!this.config.sound) {
      return;
    }

    if (this.state.soundMuted) {
      this.config.sound.muted = false;
    }

    this.config.sound.play();
  };

  /**
   * sound unlock
   * @private
   */
  _proto._soundUnlock = function _soundUnlock() {
    var _this3 = this;

    if (this.state.soundUnlock) {
      return;
    }

    this.config.sound.muted = true;
    this.config.sound.play();
    setTimeout(function () {
      if (Object(awesome_js_funcs_media_isAudioPlaying__WEBPACK_IMPORTED_MODULE_3__["default"])(_this3.config.sound)) {
        _this3.state.soundUnlock = true;

        _this3.config.sound.pause();

        if (!_this3.state.soundMuted) {
          _this3.config.sound.muted = false;
        }

        console.log('sound unlocked');
      }
    }, 0);
  };

  return SimulateChat;
}();


; // private

var _formattingCustomValue = function _formattingCustomValue(inputValue) {
  if (Object(awesome_js_funcs_judgeBasic_isString__WEBPACK_IMPORTED_MODULE_2__["default"])(inputValue)) {
    return inputValue;
  } else {
    return inputValue + 'px';
  }
},
    _chartListHandle = function _chartListHandle(chartList) {
  return chartList.map(function (obj, index) {
    obj.index = index;

    if (obj.w) {
      obj.w = _formattingCustomValue(obj.w);
    }

    if (obj.h) {
      obj.h = _formattingCustomValue(obj.h);
    }

    if (obj.top) {
      obj.top = _formattingCustomValue(obj.top);
    }

    return obj;
  });
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(3);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (_style, config) {pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(["swiper-container",_style.main], [false,true]), false, true)) + "\u003E\u003Cdiv" + (pug.attr("class", pug.classes([_style.swiperWrapper], [true]), false, true)) + "\u003E\u003Cul" + (pug.attr("class", pug.classes([_style.chartList], [true]), false, true)) + "\u003E";
var pauseAttributes = {};
var mutedAttributes = {};
var indexAttributes = {};
var callbackAttributes = {};
var marginTopList = "";
var marginToplistContent = "";


// iterate config.chartList
;(function(){
  var $$obj = config.chartList;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var chartObj = $$obj[pug_index0];
indexAttributes = {"data-index": chartObj.index};
if (chartObj.pause) {
pauseAttributes = {"data-pause": "true"};
}
else {
pauseAttributes = {};
}
if (chartObj.muted) {
mutedAttributes = {"data-muted": "true"};
}
else {
mutedAttributes = {};
}
if (chartObj.callback) {
callbackAttributes = {"data-callback": "true"};
}
else {
callbackAttributes = {};
}
if (chartObj.top) {
marginTopList = " margin-top: 0;";
marginToplistContent = " margin-top: "+chartObj.top+";";
}
else {
marginTopList = "";
marginToplistContent = "";


}
pug_html = pug_html + "\u003Cli" + (pug.attrs(pug.merge([{"class": pug.classes([_style[chartObj.pos]], [true]),"style": pug.escape(pug.style(marginTopList)),"data-delay": pug.escape(chartObj.delay)},pauseAttributes,mutedAttributes,indexAttributes,callbackAttributes]), true)) + "\u003E\u003Cdiv" + (pug.attr("class", pug.classes([_style.listContent], [true]), false, true)+pug.attr("style", pug.style("width:" + chartObj.w + "; height:" + chartObj.h + ";" + marginToplistContent), true, true)) + "\u003E";
if (chartObj.custom) {
if (chartObj.html) {
pug_html = pug_html + (null == (pug_interp = chartObj.html) ? "" : pug_interp);
}
}
else {
pug_html = pug_html + "\u003Cimg" + (pug.attr("class", pug.classes([_style.fullImg], [true]), false, true)+" width=\"100%\" height=\"100%\""+pug.attr("src", chartObj.img, true, true)+" alt=\"\"") + "\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var chartObj = $$obj[pug_index0];
indexAttributes = {"data-index": chartObj.index};
if (chartObj.pause) {
pauseAttributes = {"data-pause": "true"};
}
else {
pauseAttributes = {};
}
if (chartObj.muted) {
mutedAttributes = {"data-muted": "true"};
}
else {
mutedAttributes = {};
}
if (chartObj.callback) {
callbackAttributes = {"data-callback": "true"};
}
else {
callbackAttributes = {};
}
if (chartObj.top) {
marginTopList = " margin-top: 0;";
marginToplistContent = " margin-top: "+chartObj.top+";";
}
else {
marginTopList = "";
marginToplistContent = "";


}
pug_html = pug_html + "\u003Cli" + (pug.attrs(pug.merge([{"class": pug.classes([_style[chartObj.pos]], [true]),"style": pug.escape(pug.style(marginTopList)),"data-delay": pug.escape(chartObj.delay)},pauseAttributes,mutedAttributes,indexAttributes,callbackAttributes]), true)) + "\u003E\u003Cdiv" + (pug.attr("class", pug.classes([_style.listContent], [true]), false, true)+pug.attr("style", pug.style("width:" + chartObj.w + "; height:" + chartObj.h + ";" + marginToplistContent), true, true)) + "\u003E";
if (chartObj.custom) {
if (chartObj.html) {
pug_html = pug_html + (null == (pug_interp = chartObj.html) ? "" : pug_interp);
}
}
else {
pug_html = pug_html + "\u003Cimg" + (pug.attr("class", pug.classes([_style.fullImg], [true]), false, true)+" width=\"100%\" height=\"100%\""+pug.attr("src", chartObj.img, true, true)+" alt=\"\"") + "\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
if (config.footer) {
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes([_style.footer], [true]), false, true)+pug.attr("style", pug.style("height:" + config.footer.height + ";"), true, true)) + "\u003E\u003Cimg" + (pug.attr("class", pug.classes([_style.fullImg], [true]), false, true)+" width=\"100%\" height=\"100%\""+pug.attr("src", config.footer.img, true, true)) + "\u003E\u003C\u002Fdiv\u003E";
}}.call(this,"_style" in locals_for_with?locals_for_with._style:typeof _style!=="undefined"?_style:undefined,"config" in locals_for_with?locals_for_with.config:typeof config!=="undefined"?config:undefined));;return pug_html;};
module.exports = template;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var pug_has_own_property = Object.prototype.hasOwnProperty;

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = pug_merge;
function pug_merge(a, b) {
  if (arguments.length === 1) {
    var attrs = a[0];
    for (var i = 1; i < a.length; i++) {
      attrs = pug_merge(attrs, a[i]);
    }
    return attrs;
  }

  for (var key in b) {
    if (key === 'class') {
      var valA = a[key] || [];
      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);
    } else if (key === 'style') {
      var valA = pug_style(a[key]);
      valA = valA && valA[valA.length - 1] !== ';' ? valA + ';' : valA;
      var valB = pug_style(b[key]);
      valB = valB && valB[valB.length - 1] !== ';' ? valB + ';' : valB;
      a[key] = valA + valB;
    } else {
      a[key] = b[key];
    }
  }

  return a;
};

/**
 * Process array, object, or string as a string of classes delimited by a space.
 *
 * If `val` is an array, all members of it and its subarrays are counted as
 * classes. If `escaping` is an array, then whether or not the item in `val` is
 * escaped depends on the corresponding item in `escaping`. If `escaping` is
 * not an array, no escaping is done.
 *
 * If `val` is an object, all the keys whose value is truthy are counted as
 * classes. No escaping is done.
 *
 * If `val` is a string, it is counted as a class. No escaping is done.
 *
 * @param {(Array.<string>|Object.<string, boolean>|string)} val
 * @param {?Array.<string>} escaping
 * @return {String}
 */
exports.classes = pug_classes;
function pug_classes_array(val, escaping) {
  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);
  for (var i = 0; i < val.length; i++) {
    className = pug_classes(val[i]);
    if (!className) continue;
    escapeEnabled && escaping[i] && (className = pug_escape(className));
    classString = classString + padding + className;
    padding = ' ';
  }
  return classString;
}
function pug_classes_object(val) {
  var classString = '', padding = '';
  for (var key in val) {
    if (key && val[key] && pug_has_own_property.call(val, key)) {
      classString = classString + padding + key;
      padding = ' ';
    }
  }
  return classString;
}
function pug_classes(val, escaping) {
  if (Array.isArray(val)) {
    return pug_classes_array(val, escaping);
  } else if (val && typeof val === 'object') {
    return pug_classes_object(val);
  } else {
    return val || '';
  }
}

/**
 * Convert object or string to a string of CSS styles delimited by a semicolon.
 *
 * @param {(Object.<string, string>|string)} val
 * @return {String}
 */

exports.style = pug_style;
function pug_style(val) {
  if (!val) return '';
  if (typeof val === 'object') {
    var out = '';
    for (var style in val) {
      /* istanbul ignore else */
      if (pug_has_own_property.call(val, style)) {
        out = out + style + ':' + val[style] + ';';
      }
    }
    return out;
  } else {
    return val + '';
  }
};

/**
 * Render the given attribute.
 *
 * @param {String} key
 * @param {String} val
 * @param {Boolean} escaped
 * @param {Boolean} terse
 * @return {String}
 */
exports.attr = pug_attr;
function pug_attr(key, val, escaped, terse) {
  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {
    return '';
  }
  if (val === true) {
    return ' ' + (terse ? key : key + '="' + key + '"');
  }
  if (typeof val.toJSON === 'function') {
    val = val.toJSON();
  }
  if (typeof val !== 'string') {
    val = JSON.stringify(val);
    if (!escaped && val.indexOf('"') !== -1) {
      return ' ' + key + '=\'' + val.replace(/'/g, '&#39;') + '\'';
    }
  }
  if (escaped) val = pug_escape(val);
  return ' ' + key + '="' + val + '"';
};

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} terse whether to use HTML5 terse boolean attributes
 * @return {String}
 */
exports.attrs = pug_attrs;
function pug_attrs(obj, terse){
  var attrs = '';

  for (var key in obj) {
    if (pug_has_own_property.call(obj, key)) {
      var val = obj[key];

      if ('class' === key) {
        val = pug_classes(val);
        attrs = pug_attr(key, val, false, terse) + attrs;
        continue;
      }
      if ('style' === key) {
        val = pug_style(val);
      }
      attrs += pug_attr(key, val, false, terse);
    }
  }

  return attrs;
};

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

var pug_match_html = /["&<>]/;
exports.escape = pug_escape;
function pug_escape(_html){
  var html = '' + _html;
  var regexResult = pug_match_html.exec(html);
  if (!regexResult) return _html;

  var result = '';
  var i, lastIndex, escape;
  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
    switch (html.charCodeAt(i)) {
      case 34: escape = '&quot;'; break;
      case 38: escape = '&amp;'; break;
      case 60: escape = '&lt;'; break;
      case 62: escape = '&gt;'; break;
      default: continue;
    }
    if (lastIndex !== i) result += html.substring(lastIndex, i);
    lastIndex = i + 1;
    result += escape;
  }
  if (lastIndex !== i) return result + html.substring(lastIndex, i);
  else return result;
};

/**
 * Re-throw the given `err` in context to the
 * the pug in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @param {String} str original source
 * @api private
 */

exports.rethrow = pug_rethrow;
function pug_rethrow(err, filename, lineno, str){
  if (!(err instanceof Error)) throw err;
  if ((typeof window != 'undefined' || !filename) && !str) {
    err.message += ' on line ' + lineno;
    throw err;
  }
  try {
    str = str || __webpack_require__(4).readFileSync(filename, 'utf8')
  } catch (ex) {
    pug_rethrow(err, null, lineno)
  }
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Pug') + ':' + lineno
    + '\n' + context + '\n\n' + err.message;
  throw err;
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(6);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(8)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "/**\r\n * variables\r\n */\n/**\r\n * utilities\r\n */\n.src-style__fullImg, .src-style__container, .src-style__swiperWrapper, .src-style__chartList {\n  position: absolute;\n  z-index: 1;\n}\n\n.src-style__chartList .src-style__listContent, .src-style__footer {\n  position: relative;\n  z-index: 1;\n}\n\n.src-style__fullImg, .src-style__container, .src-style__swiperWrapper {\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.src-style__main, .src-style__footer {\n  width: 100%;\n  height: 0;\n}\n\n.src-style__container {\n  display: flex;\n  flex-direction: column;\n  background-color: #ebebeb;\n  overflow: hidden;\n}\n\n.src-style__main {\n  flex: 1;\n  overflow: hidden;\n}\n\n.src-style__swiperSlideActive {\n  visibility: visible;\n  pointer-events: auto;\n}\n\n.src-style__chartList {\n  left: 0;\n  top: 0;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  list-style: none;\n}\n\n.src-style__chartList > li {\n  display: none;\n  width: 100%;\n  margin: 1.8% 0;\n}\n\n.src-style__chartList > li:nth-of-type(1) {\n  margin-top: 3.6%;\n}\n\n.src-style__chartList > li.src-style__show {\n  display: flex;\n}\n\n.src-style__chartList .src-style__listContent {\n  margin: 0 2.5%;\n}\n\n.src-style__chartList .src-style__center {\n  justify-content: center;\n}\n\n.src-style__chartList .src-style__left {\n  justify-content: flex-start;\n}\n\n.src-style__chartList .src-style__right {\n  justify-content: flex-end;\n}\n\n.src-style__footer {\n  margin-top: 1.8%;\n}\n", ""]);

// exports
exports.locals = {
	"fullImg": "src-style__fullImg",
	"container": "src-style__container",
	"swiperWrapper": "src-style__swiperWrapper",
	"chartList": "src-style__chartList",
	"listContent": "src-style__listContent",
	"footer": "src-style__footer",
	"main": "src-style__main",
	"swiperSlideActive": "src-style__swiperSlideActive",
	"show": "src-style__show",
	"center": "src-style__center",
	"left": "src-style__left",
	"right": "src-style__right"
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(9);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 9 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * 判断是否字符串
 * @param str
 * @returns {boolean}
 */
/* harmony default export */ __webpack_exports__["default"] = (function (str) {
  return typeof str === 'string' && str.constructor === String;
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * isAudioPlaying
 * @param audio
 */
/* harmony default export */ __webpack_exports__["default"] = (function (audio) {
  return !audio.paused;
});

/***/ })
/******/ ])["default"];
});