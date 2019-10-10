/*!
 * simulate-chatting v0.5.2
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
/******/ ({

/***/ "./node_modules/@cycjimmy/awesome-js-funcs/judgeBasic/isString.js":
/*!************************************************************************!*\
  !*** ./node_modules/@cycjimmy/awesome-js-funcs/judgeBasic/isString.js ***!
  \************************************************************************/
/*! exports provided: default */
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

/***/ "./node_modules/@cycjimmy/awesome-js-funcs/media/isAudioPlaying.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@cycjimmy/awesome-js-funcs/media/isAudioPlaying.js ***!
  \*************************************************************************/
/*! exports provided: default */
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

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/style.scss":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./src/style.scss ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/**\n * strip units\n */\n/**\n * calc vw\n * $designDrawingLength\n * $designDrawingWidth\n *\n * Usage:\n * @function calcVW($designDrawingLength:0) {\n *   @return call(get_function(\"designPx2VW\"), $designDrawingLength, $designDrawingWidth);\n * }\n */\n/**\n * Fix Align Center\n * $offset\n * $overwrite\n * $top\n * $right\n * $bottom\n * $left\n */\n/**\n * flex container inner elements alignment\n * $mainAxis\n * $crossAxis\n * options: false, center, flex-end, ...\n */\n/**\n * square container\n */\n/**\n * bg-image-full\n */\n.src-style__fullImg, .src-style__container, .src-style__swiperWrapper, .src-style__chartList {\n  position: absolute;\n  z-index: 1;\n}\n\n.src-style__chartList .src-style__listContent, .src-style__footer {\n  position: relative;\n  z-index: 1;\n}\n\n/**\n * Fix Align Center\n * $offset\n * $overwrite\n * $top\n * $right\n * $bottom\n * $left\n */\n/**\n * flex container inner elements alignment\n * $mainAxis\n * $crossAxis\n * options: false, center, flex-end, ...\n */\n/**\n * square container\n */\n/**\n * bg-image-full\n */\n.src-style__fullImg, .src-style__container, .src-style__swiperWrapper, .src-style__chartList {\n  position: absolute;\n  z-index: 1;\n}\n\n.src-style__chartList .src-style__listContent, .src-style__footer {\n  position: relative;\n  z-index: 1;\n}\n\n.src-style__fullImg, .src-style__container, .src-style__swiperWrapper {\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n\n/**\n * variables\n */\n/**\n * utilities\n */\n.src-style__main, .src-style__footer {\n  width: 100%;\n  height: 0;\n}\n\n.src-style__container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  background-color: #ebebeb;\n  overflow: hidden;\n}\n\n.src-style__main {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  overflow: hidden;\n}\n\n.src-style__swiperSlideActive {\n  visibility: visible;\n  pointer-events: auto;\n}\n\n.src-style__chartList {\n  left: 0;\n  top: 0;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  list-style: none;\n}\n\n.src-style__chartList > li {\n  display: none;\n  width: 100%;\n  margin: 1.8% 0;\n}\n\n.src-style__chartList > li:nth-of-type(1) {\n  margin-top: 3.6%;\n}\n\n.src-style__chartList > li.src-style__show {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.src-style__chartList .src-style__listContent {\n  margin: 0 2.5%;\n}\n\n.src-style__chartList .src-style__center {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.src-style__chartList .src-style__left {\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n\n.src-style__chartList .src-style__right {\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n\n.src-style__footer {\n  margin-top: 1.8%;\n}\n", ""]);
// Exports
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

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/pug-runtime/index.js":
/*!*******************************************!*\
  !*** ./node_modules/pug-runtime/index.js ***!
  \*******************************************/
/*! no static exports found */
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
  var type = typeof val;
  if ((type === 'object' || type === 'function') && typeof val.toJSON === 'function') {
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
    str = str || __webpack_require__(/*! fs */ 1).readFileSync(filename, 'utf8')
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

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SimulateChat; });
/* harmony import */ var _template_container_pug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template/container.pug */ "./src/template/container.pug");
/* harmony import */ var _template_container_pug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_template_container_pug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _cycjimmy_awesome_js_funcs_judgeBasic_isString__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @cycjimmy/awesome-js-funcs/judgeBasic/isString */ "./node_modules/@cycjimmy/awesome-js-funcs/judgeBasic/isString.js");
/* harmony import */ var _cycjimmy_awesome_js_funcs_media_isAudioPlaying__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cycjimmy/awesome-js-funcs/media/isAudioPlaying */ "./node_modules/@cycjimmy/awesome-js-funcs/media/isAudioPlaying.js");
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
    this.el.context = Object(_cycjimmy_awesome_js_funcs_judgeBasic_isString__WEBPACK_IMPORTED_MODULE_2__["default"])(context) ? document.querySelector(context) : context;
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
      if (Object(_cycjimmy_awesome_js_funcs_media_isAudioPlaying__WEBPACK_IMPORTED_MODULE_3__["default"])(_this3.config.sound)) {
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
  if (Object(_cycjimmy_awesome_js_funcs_judgeBasic_isString__WEBPACK_IMPORTED_MODULE_2__["default"])(inputValue)) {
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

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-1!../node_modules/postcss-loader/src??ref--6-2!../node_modules/sass-loader/dist/cjs.js??ref--6-3!./style.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/style.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/template/container.pug":
/*!************************************!*\
  !*** ./src/template/container.pug ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

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

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/Work/GitHub/cycdpo/simulate-chatting/src/index.js */"./src/index.js");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=simulateChatting.js.map