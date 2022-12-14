/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./image/checkbox-blank-circle.svg */ "./src/image/checkbox-blank-circle.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background: rgb(50, 50, 50);\n}\n\n.container {\n  border: 2px solid orange;\n  width: 1000px;\n  height: 400px;\n}\n\n.frame {\n  /* border: 2px solid greenyellow; */\n  width: 1000px;\n  height: 364px;\n  display: flex;\n  justify-content: center;\n}\n\n\n.slides {\n  /* border: 2px solid red; */\n  overflow: hidden;\n  display: flex;\n}\n\n.slides img.current {\n  transition: transform 300ms ease-in-out;\n}\n\n.slideToLeft {\n  transform: translateX(-538.22px);\n}\n\n.slideToRight {\n  transform: translateX(538.22px);\n}\n\n.arrow-left img,\n.arrow-right img {\n  height: 100px;\n}\n\n.arrow-left,\n.arrow-right {\n  align-self: center;\n  filter: invert(70%);\n  cursor: pointer;\n}\n\n.bottom {\n  border: 2px solid greenyellow;\n  display: flex;\n  justify-content: center;\n}\n\n.bottom img {\n  width: 15px;\n  filter: invert(70%);\n  cursor: pointer;\n  margin-left: 0.5rem;\n}\n\n.highlight {\n  -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background: black;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,wBAAwB;EACxB,aAAa;EACb,aAAa;AACf;;AAEA;EACE,mCAAmC;EACnC,aAAa;EACb,aAAa;EACb,aAAa;EACb,uBAAuB;AACzB;;;AAGA;EACE,2BAA2B;EAC3B,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,+BAA+B;AACjC;;AAEA;;EAEE,aAAa;AACf;;AAEA;;EAEE,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,6BAA6B;EAC7B,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,mBAAmB;EACnB,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,2DAA0D;EAC1D,iBAAiB;AACnB","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background: rgb(50, 50, 50);\n}\n\n.container {\n  border: 2px solid orange;\n  width: 1000px;\n  height: 400px;\n}\n\n.frame {\n  /* border: 2px solid greenyellow; */\n  width: 1000px;\n  height: 364px;\n  display: flex;\n  justify-content: center;\n}\n\n\n.slides {\n  /* border: 2px solid red; */\n  overflow: hidden;\n  display: flex;\n}\n\n.slides img.current {\n  transition: transform 300ms ease-in-out;\n}\n\n.slideToLeft {\n  transform: translateX(-538.22px);\n}\n\n.slideToRight {\n  transform: translateX(538.22px);\n}\n\n.arrow-left img,\n.arrow-right img {\n  height: 100px;\n}\n\n.arrow-left,\n.arrow-right {\n  align-self: center;\n  filter: invert(70%);\n  cursor: pointer;\n}\n\n.bottom {\n  border: 2px solid greenyellow;\n  display: flex;\n  justify-content: center;\n}\n\n.bottom img {\n  width: 15px;\n  filter: invert(70%);\n  cursor: pointer;\n  margin-left: 0.5rem;\n}\n\n.highlight {\n  -webkit-mask-image: url(./image/checkbox-blank-circle.svg);\n  background: black;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/appendImage.js":
/*!****************************!*\
  !*** ./src/appendImage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appendToBottom": () => (/* binding */ appendToBottom),
/* harmony export */   "appendToSlides": () => (/* binding */ appendToSlides)
/* harmony export */ });
/* harmony import */ var _importImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./importImage */ "./src/importImage.js");
/* harmony import */ var _findElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./findElement */ "./src/findElement.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




function appendToSlides() {
  const div = (0,_findElement__WEBPACK_IMPORTED_MODULE_1__["default"])().slidesDiv;
  const { arrowLeftDiv } = (0,_findElement__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const { arrowRightDiv } = (0,_findElement__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const { first } = (0,_importImage__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const { second } = (0,_importImage__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const { third } = (0,_importImage__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const { fourth } = (0,_importImage__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const { right } = (0,_importImage__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const { left } = (0,_importImage__WEBPACK_IMPORTED_MODULE_0__["default"])();

  div.append(first, second, third, fourth);
  arrowLeftDiv.append(left);
  arrowRightDiv.append(right);
}

function appendToBottom() {
  const div = (0,_findElement__WEBPACK_IMPORTED_MODULE_1__["default"])().bottomDiv;
  const { circle1 } = (0,_importImage__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const { circle2 } = (0,_importImage__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const { circle3 } = (0,_importImage__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const { circle4 } = (0,_importImage__WEBPACK_IMPORTED_MODULE_0__["default"])();

  circle1.classList.add('highlight');

  div.append(circle1, circle2, circle3, circle4);
}




/***/ }),

/***/ "./src/arrowControl.js":
/*!*****************************!*\
  !*** ./src/arrowControl.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clickArrowLeft": () => (/* binding */ clickArrowLeft),
/* harmony export */   "clickArrowRight": () => (/* binding */ clickArrowRight)
/* harmony export */ });
/* harmony import */ var _findElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./findElement */ "./src/findElement.js");
/* harmony import */ var _styleImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styleImage */ "./src/styleImage.js");
/* harmony import */ var _dotControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dotControl */ "./src/dotControl.js");




function clickArrowLeft() {
  const { arrowLeftDiv } = (0,_findElement__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const list = (0,_findElement__WEBPACK_IMPORTED_MODULE_0__["default"])().imageList;

  arrowLeftDiv.addEventListener('click', () => {
    let trigger = true;
    for (let i = 0; i < list.length; i++) {
      if (list[i].style.display !== 'none' && trigger) {
        if (list[i].previousSibling === null) {
          (0,_styleImage__WEBPACK_IMPORTED_MODULE_1__.toggleSlideToRight)(list[i]);
          (0,_styleImage__WEBPACK_IMPORTED_MODULE_1__.slideCurrentRight)(list[i], 300);
          (0,_styleImage__WEBPACK_IMPORTED_MODULE_1__.showNextSlide)(list[list.length - 1], 300);
          (0,_dotControl__WEBPACK_IMPORTED_MODULE_2__.highlightDot)(list.length - 1);
          trigger = false;
        } else {
          (0,_styleImage__WEBPACK_IMPORTED_MODULE_1__.toggleSlideToRight)(list[i]);
          (0,_styleImage__WEBPACK_IMPORTED_MODULE_1__.slideCurrentRight)(list[i], 300);
          (0,_styleImage__WEBPACK_IMPORTED_MODULE_1__.showNextSlide)(list[i].previousSibling, 300);
          (0,_dotControl__WEBPACK_IMPORTED_MODULE_2__.highlightDot)(i - 1);
          trigger = false;
        }
      }
    }
  });
}

function clickArrowRight() {
  const { arrowRightDiv } = (0,_findElement__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const list = (0,_findElement__WEBPACK_IMPORTED_MODULE_0__["default"])().imageList;

  arrowRightDiv.addEventListener('click', () => {
    let trigger = true;
    for (let i = 0; i < list.length; i++) {
      if (list[i].style.display !== 'none' && trigger) {
        if (list[i].nextSibling === null) {
          (0,_styleImage__WEBPACK_IMPORTED_MODULE_1__.toggleSlideToLeft)(list[i]);
          (0,_styleImage__WEBPACK_IMPORTED_MODULE_1__.slideCurrentLeft)(list[i], 300);
          (0,_styleImage__WEBPACK_IMPORTED_MODULE_1__.showNextSlide)(list[0], 300);
          (0,_dotControl__WEBPACK_IMPORTED_MODULE_2__.highlightDot)(0);
          trigger = false;
        } else {
          (0,_styleImage__WEBPACK_IMPORTED_MODULE_1__.toggleSlideToLeft)(list[i]);
          (0,_styleImage__WEBPACK_IMPORTED_MODULE_1__.slideCurrentLeft)(list[i], 300);
          (0,_styleImage__WEBPACK_IMPORTED_MODULE_1__.showNextSlide)(list[i].nextSibling, 300);
          (0,_dotControl__WEBPACK_IMPORTED_MODULE_2__.highlightDot)(i + 1);
          trigger = false;
        }
      }
    }
  });
}




/***/ }),

/***/ "./src/dotControl.js":
/*!***************************!*\
  !*** ./src/dotControl.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clickDots": () => (/* binding */ clickDots),
/* harmony export */   "highlightDot": () => (/* binding */ highlightDot)
/* harmony export */ });
/* harmony import */ var _findElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./findElement */ "./src/findElement.js");
/* harmony import */ var _styleImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styleImage */ "./src/styleImage.js");



function clickDots() {
  const { dotList } = (0,_findElement__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const { imageList } = (0,_findElement__WEBPACK_IMPORTED_MODULE_0__["default"])();

  for (let i = 0; i < dotList.length; i++) {
    dotList[i].addEventListener('click', () => {
      if (imageList[i].style.display !== 'none') {
        console.log(dotList);
      } else {
        (0,_styleImage__WEBPACK_IMPORTED_MODULE_1__.showImage)(imageList[i]);
        highlightDot(i);
        (0,_styleImage__WEBPACK_IMPORTED_MODULE_1__.toggleCurrent)(imageList[i]);
        imageList.forEach((img) => {
          if (img.style.display !== 'none' && img !== imageList[i]) {
            (0,_styleImage__WEBPACK_IMPORTED_MODULE_1__.hideImage)(img);
            (0,_styleImage__WEBPACK_IMPORTED_MODULE_1__.toggleCurrent)(img);
          }
        });
      }
    });
  }
}

function highlightDot(n) {
  const { dotList } = (0,_findElement__WEBPACK_IMPORTED_MODULE_0__["default"])();
  // if (dotList[n].classList[0] !== 'highlight') {
  dotList[n].classList.toggle('highlight');
  // }
  for (let i = 0; i < dotList.length; i++) {
    if (dotList[i] !== dotList[n]) {
      dotList[i].classList.remove('highlight');
    }
  }
}




/***/ }),

/***/ "./src/findElement.js":
/*!****************************!*\
  !*** ./src/findElement.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function findElement() {
  const bottomDiv = document.querySelector('.bottom');
  const slidesDiv = document.querySelector('.slides');
  const arrowLeftDiv = document.querySelector('.arrow-left');
  const arrowRightDiv = document.querySelector('.arrow-right');
  const imageList = document.querySelectorAll('.slides img');
  const dotList = document.querySelectorAll('.bottom img');

  return {
    slidesDiv,
    arrowLeftDiv,
    arrowRightDiv,
    imageList,
    bottomDiv,
    dotList,
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (findElement);


/***/ }),

/***/ "./src/importImage.js":
/*!****************************!*\
  !*** ./src/importImage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _image_pexels_johann_1254140_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image/pexels-johann-1254140.jpg */ "./src/image/pexels-johann-1254140.jpg");
/* harmony import */ var _image_pexels_muhannad_alatawi_58997_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image/pexels-muhannad-alatawi-58997.jpg */ "./src/image/pexels-muhannad-alatawi-58997.jpg");
/* harmony import */ var _image_pexels_pixabay_257540_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image/pexels-pixabay-257540.jpg */ "./src/image/pexels-pixabay-257540.jpg");
/* harmony import */ var _image_pexels_svetozar_milashevich_1490908_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image/pexels-svetozar-milashevich-1490908.jpg */ "./src/image/pexels-svetozar-milashevich-1490908.jpg");
/* harmony import */ var _image_chevron_right_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./image/chevron-right.svg */ "./src/image/chevron-right.svg");
/* harmony import */ var _image_chevron_left_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./image/chevron-left.svg */ "./src/image/chevron-left.svg");
/* harmony import */ var _image_checkbox_blank_circle_outline_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./image/checkbox-blank-circle-outline.svg */ "./src/image/checkbox-blank-circle-outline.svg");
/* harmony import */ var _image_checkbox_blank_circle_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./image/checkbox-blank-circle.svg */ "./src/image/checkbox-blank-circle.svg");









function assignImage() {
  const first = new Image();
  const second = new Image();
  const third = new Image();
  const fourth = new Image();
  const left = new Image();
  const right = new Image();
  const circle1 = new Image();
  const circle2 = new Image();
  const circle3 = new Image();
  const circle4 = new Image();
  const dot = new Image();

  first.src = _image_pexels_johann_1254140_jpg__WEBPACK_IMPORTED_MODULE_0__;
  second.src = _image_pexels_muhannad_alatawi_58997_jpg__WEBPACK_IMPORTED_MODULE_1__;
  third.src = _image_pexels_pixabay_257540_jpg__WEBPACK_IMPORTED_MODULE_2__;
  fourth.src = _image_pexels_svetozar_milashevich_1490908_jpg__WEBPACK_IMPORTED_MODULE_3__;
  right.src = _image_chevron_right_svg__WEBPACK_IMPORTED_MODULE_4__;
  left.src = _image_chevron_left_svg__WEBPACK_IMPORTED_MODULE_5__;
  circle1.src = _image_checkbox_blank_circle_outline_svg__WEBPACK_IMPORTED_MODULE_6__;
  circle2.src = _image_checkbox_blank_circle_outline_svg__WEBPACK_IMPORTED_MODULE_6__;
  circle3.src = _image_checkbox_blank_circle_outline_svg__WEBPACK_IMPORTED_MODULE_6__;
  circle4.src = _image_checkbox_blank_circle_outline_svg__WEBPACK_IMPORTED_MODULE_6__;
  dot.src = _image_checkbox_blank_circle_svg__WEBPACK_IMPORTED_MODULE_7__;

  return {
    first,
    second,
    third,
    fourth,
    right,
    left,
    circle1,
    circle2,
    circle3,
    circle4,
    dot,
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (assignImage);


/***/ }),

/***/ "./src/styleImage.js":
/*!***************************!*\
  !*** ./src/styleImage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultImage": () => (/* binding */ defaultImage),
/* harmony export */   "hideImage": () => (/* binding */ hideImage),
/* harmony export */   "showImage": () => (/* binding */ showImage),
/* harmony export */   "showNextSlide": () => (/* binding */ showNextSlide),
/* harmony export */   "slideCurrentLeft": () => (/* binding */ slideCurrentLeft),
/* harmony export */   "slideCurrentRight": () => (/* binding */ slideCurrentRight),
/* harmony export */   "toggleCurrent": () => (/* binding */ toggleCurrent),
/* harmony export */   "toggleSlideToLeft": () => (/* binding */ toggleSlideToLeft),
/* harmony export */   "toggleSlideToRight": () => (/* binding */ toggleSlideToRight)
/* harmony export */ });
/* harmony import */ var _findElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./findElement */ "./src/findElement.js");


function defaultImage() {
  const images = (0,_findElement__WEBPACK_IMPORTED_MODULE_0__["default"])().imageList;
  images[0].classList.add('current');
  for (let i = 1; i < images.length; i++) {
    images[i].style.display = 'none';
  }
}

function showImage(i) {
  const image = i;
  image.style.display = 'block';
}

function hideImage(i) {
  const image = i;
  image.style.display = 'none';
}

function toggleSlideToLeft(i) {
  const image = i;
  image.classList.toggle('slideToLeft');
}

function toggleSlideToRight(i) {
  const image = i;
  image.classList.toggle('slideToRight');
}

function toggleCurrent(i) {
  const image = i;
  image.classList.toggle('current');
}

function slideCurrentLeft(i, time) {
  setTimeout(() => {
    hideImage(i);
    toggleCurrent(i);
    toggleSlideToLeft(i);
  }, time);
}

function slideCurrentRight(i, time) {
  setTimeout(() => {
    hideImage(i);
    toggleCurrent(i);
    toggleSlideToRight(i);
  }, time);
}

function showNextSlide(i, time) {
  setTimeout(() => {
    showImage(i);
    toggleCurrent(i);
  }, time);
}




/***/ }),

/***/ "./src/image/checkbox-blank-circle-outline.svg":
/*!*****************************************************!*\
  !*** ./src/image/checkbox-blank-circle-outline.svg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e3b6ef0fc8b1ecd5d1a9.svg";

/***/ }),

/***/ "./src/image/checkbox-blank-circle.svg":
/*!*********************************************!*\
  !*** ./src/image/checkbox-blank-circle.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4e0ce69df23a0f0a3866.svg";

/***/ }),

/***/ "./src/image/chevron-left.svg":
/*!************************************!*\
  !*** ./src/image/chevron-left.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3490f5eea08639f690a3.svg";

/***/ }),

/***/ "./src/image/chevron-right.svg":
/*!*************************************!*\
  !*** ./src/image/chevron-right.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cb3e629604702ef8bc66.svg";

/***/ }),

/***/ "./src/image/pexels-johann-1254140.jpg":
/*!*********************************************!*\
  !*** ./src/image/pexels-johann-1254140.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "75a2d34395283dff3533.jpg";

/***/ }),

/***/ "./src/image/pexels-muhannad-alatawi-58997.jpg":
/*!*****************************************************!*\
  !*** ./src/image/pexels-muhannad-alatawi-58997.jpg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fd9489c4dacbfcaaeafe.jpg";

/***/ }),

/***/ "./src/image/pexels-pixabay-257540.jpg":
/*!*********************************************!*\
  !*** ./src/image/pexels-pixabay-257540.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e94611e101fe24144c38.jpg";

/***/ }),

/***/ "./src/image/pexels-svetozar-milashevich-1490908.jpg":
/*!***********************************************************!*\
  !*** ./src/image/pexels-svetozar-milashevich-1490908.jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "121e2d0aff945e4af76c.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _appendImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appendImage */ "./src/appendImage.js");
/* harmony import */ var _styleImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styleImage */ "./src/styleImage.js");
/* harmony import */ var _arrowControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./arrowControl */ "./src/arrowControl.js");
/* harmony import */ var _dotControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dotControl */ "./src/dotControl.js");






(0,_appendImage__WEBPACK_IMPORTED_MODULE_1__.appendToSlides)();
(0,_appendImage__WEBPACK_IMPORTED_MODULE_1__.appendToBottom)();
(0,_styleImage__WEBPACK_IMPORTED_MODULE_2__.defaultImage)();
(0,_arrowControl__WEBPACK_IMPORTED_MODULE_3__.clickArrowLeft)();
(0,_arrowControl__WEBPACK_IMPORTED_MODULE_3__.clickArrowRight)();
(0,_dotControl__WEBPACK_IMPORTED_MODULE_4__.clickDots)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQzBDO0FBQ25CO0FBQ3FCO0FBQ3hCOztBQUV6Qyw0REFBYztBQUNkLDREQUFjO0FBQ2QseURBQVk7QUFDWiw2REFBYztBQUNkLDhEQUFlO0FBQ2Ysc0RBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbWFnZS1zbGlkZXIvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2ltYWdlLXNsaWRlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vaW1hZ2Utc2xpZGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9pbWFnZS1zbGlkZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9pbWFnZS1zbGlkZXIvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vaW1hZ2Utc2xpZGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2ltYWdlLXNsaWRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vaW1hZ2Utc2xpZGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2ltYWdlLXNsaWRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9pbWFnZS1zbGlkZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9pbWFnZS1zbGlkZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9pbWFnZS1zbGlkZXIvLi9zcmMvYXBwZW5kSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vaW1hZ2Utc2xpZGVyLy4vc3JjL2Fycm93Q29udHJvbC5qcyIsIndlYnBhY2s6Ly9pbWFnZS1zbGlkZXIvLi9zcmMvZG90Q29udHJvbC5qcyIsIndlYnBhY2s6Ly9pbWFnZS1zbGlkZXIvLi9zcmMvZmluZEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vaW1hZ2Utc2xpZGVyLy4vc3JjL2ltcG9ydEltYWdlLmpzIiwid2VicGFjazovL2ltYWdlLXNsaWRlci8uL3NyYy9zdHlsZUltYWdlLmpzIiwid2VicGFjazovL2ltYWdlLXNsaWRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9pbWFnZS1zbGlkZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vaW1hZ2Utc2xpZGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9pbWFnZS1zbGlkZXIvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9pbWFnZS1zbGlkZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9pbWFnZS1zbGlkZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9pbWFnZS1zbGlkZXIvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vaW1hZ2Utc2xpZGVyL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2ltYWdlLXNsaWRlci93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vaW1hZ2Utc2xpZGVyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlL2NoZWNrYm94LWJsYW5rLWNpcmNsZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQ6IHJnYig1MCwgNTAsIDUwKTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBvcmFuZ2U7XFxuICB3aWR0aDogMTAwMHB4O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG59XFxuXFxuLmZyYW1lIHtcXG4gIC8qIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVueWVsbG93OyAqL1xcbiAgd2lkdGg6IDEwMDBweDtcXG4gIGhlaWdodDogMzY0cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcblxcbi5zbGlkZXMge1xcbiAgLyogYm9yZGVyOiAycHggc29saWQgcmVkOyAqL1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zbGlkZXMgaW1nLmN1cnJlbnQge1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uc2xpZGVUb0xlZnQge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MzguMjJweCk7XFxufVxcblxcbi5zbGlkZVRvUmlnaHQge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUzOC4yMnB4KTtcXG59XFxuXFxuLmFycm93LWxlZnQgaW1nLFxcbi5hcnJvdy1yaWdodCBpbWcge1xcbiAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuLmFycm93LWxlZnQsXFxuLmFycm93LXJpZ2h0IHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGZpbHRlcjogaW52ZXJ0KDcwJSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5ib3R0b20ge1xcbiAgYm9yZGVyOiAycHggc29saWQgZ3JlZW55ZWxsb3c7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5ib3R0b20gaW1nIHtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgZmlsdGVyOiBpbnZlcnQoNzAlKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxufVxcblxcbi5oaWdobGlnaHQge1xcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLGFBQWE7RUFDYixhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7O0FBR0E7RUFDRSwyQkFBMkI7RUFDM0IsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTs7RUFFRSxhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSwyREFBMEQ7RUFDMUQsaUJBQWlCO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogcmdiKDUwLCA1MCwgNTApO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIG9yYW5nZTtcXG4gIHdpZHRoOiAxMDAwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbn1cXG5cXG4uZnJhbWUge1xcbiAgLyogYm9yZGVyOiAycHggc29saWQgZ3JlZW55ZWxsb3c7ICovXFxuICB3aWR0aDogMTAwMHB4O1xcbiAgaGVpZ2h0OiAzNjRweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuXFxuLnNsaWRlcyB7XFxuICAvKiBib3JkZXI6IDJweCBzb2xpZCByZWQ7ICovXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnNsaWRlcyBpbWcuY3VycmVudCB7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5zbGlkZVRvTGVmdCB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUzOC4yMnB4KTtcXG59XFxuXFxuLnNsaWRlVG9SaWdodCB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTM4LjIycHgpO1xcbn1cXG5cXG4uYXJyb3ctbGVmdCBpbWcsXFxuLmFycm93LXJpZ2h0IGltZyB7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4uYXJyb3ctbGVmdCxcXG4uYXJyb3ctcmlnaHQge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZmlsdGVyOiBpbnZlcnQoNzAlKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJvdHRvbSB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBncmVlbnllbGxvdztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmJvdHRvbSBpbWcge1xcbiAgd2lkdGg6IDE1cHg7XFxuICBmaWx0ZXI6IGludmVydCg3MCUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG59XFxuXFxuLmhpZ2hsaWdodCB7XFxuICAtd2Via2l0LW1hc2staW1hZ2U6IHVybCguL2ltYWdlL2NoZWNrYm94LWJsYW5rLWNpcmNsZS5zdmcpO1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgYXNzaWduSW1hZ2UgZnJvbSAnLi9pbXBvcnRJbWFnZSc7XG5pbXBvcnQgZmluZEVsZW1lbnQgZnJvbSAnLi9maW5kRWxlbWVudCc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuZnVuY3Rpb24gYXBwZW5kVG9TbGlkZXMoKSB7XG4gIGNvbnN0IGRpdiA9IGZpbmRFbGVtZW50KCkuc2xpZGVzRGl2O1xuICBjb25zdCB7IGFycm93TGVmdERpdiB9ID0gZmluZEVsZW1lbnQoKTtcbiAgY29uc3QgeyBhcnJvd1JpZ2h0RGl2IH0gPSBmaW5kRWxlbWVudCgpO1xuICBjb25zdCB7IGZpcnN0IH0gPSBhc3NpZ25JbWFnZSgpO1xuICBjb25zdCB7IHNlY29uZCB9ID0gYXNzaWduSW1hZ2UoKTtcbiAgY29uc3QgeyB0aGlyZCB9ID0gYXNzaWduSW1hZ2UoKTtcbiAgY29uc3QgeyBmb3VydGggfSA9IGFzc2lnbkltYWdlKCk7XG4gIGNvbnN0IHsgcmlnaHQgfSA9IGFzc2lnbkltYWdlKCk7XG4gIGNvbnN0IHsgbGVmdCB9ID0gYXNzaWduSW1hZ2UoKTtcblxuICBkaXYuYXBwZW5kKGZpcnN0LCBzZWNvbmQsIHRoaXJkLCBmb3VydGgpO1xuICBhcnJvd0xlZnREaXYuYXBwZW5kKGxlZnQpO1xuICBhcnJvd1JpZ2h0RGl2LmFwcGVuZChyaWdodCk7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZFRvQm90dG9tKCkge1xuICBjb25zdCBkaXYgPSBmaW5kRWxlbWVudCgpLmJvdHRvbURpdjtcbiAgY29uc3QgeyBjaXJjbGUxIH0gPSBhc3NpZ25JbWFnZSgpO1xuICBjb25zdCB7IGNpcmNsZTIgfSA9IGFzc2lnbkltYWdlKCk7XG4gIGNvbnN0IHsgY2lyY2xlMyB9ID0gYXNzaWduSW1hZ2UoKTtcbiAgY29uc3QgeyBjaXJjbGU0IH0gPSBhc3NpZ25JbWFnZSgpO1xuXG4gIGNpcmNsZTEuY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0Jyk7XG5cbiAgZGl2LmFwcGVuZChjaXJjbGUxLCBjaXJjbGUyLCBjaXJjbGUzLCBjaXJjbGU0KTtcbn1cblxuZXhwb3J0IHsgYXBwZW5kVG9TbGlkZXMsIGFwcGVuZFRvQm90dG9tIH07XG4iLCJpbXBvcnQgZmluZEVsZW1lbnQgZnJvbSAnLi9maW5kRWxlbWVudCc7XG5pbXBvcnQge1xuICB0b2dnbGVTbGlkZVRvTGVmdCxcbiAgdG9nZ2xlU2xpZGVUb1JpZ2h0LFxuICBzbGlkZUN1cnJlbnRMZWZ0LFxuICBzbGlkZUN1cnJlbnRSaWdodCxcbiAgc2hvd05leHRTbGlkZSxcbn0gZnJvbSAnLi9zdHlsZUltYWdlJztcbmltcG9ydCB7IGhpZ2hsaWdodERvdCB9IGZyb20gJy4vZG90Q29udHJvbCc7XG5cbmZ1bmN0aW9uIGNsaWNrQXJyb3dMZWZ0KCkge1xuICBjb25zdCB7IGFycm93TGVmdERpdiB9ID0gZmluZEVsZW1lbnQoKTtcbiAgY29uc3QgbGlzdCA9IGZpbmRFbGVtZW50KCkuaW1hZ2VMaXN0O1xuXG4gIGFycm93TGVmdERpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBsZXQgdHJpZ2dlciA9IHRydWU7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAobGlzdFtpXS5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScgJiYgdHJpZ2dlcikge1xuICAgICAgICBpZiAobGlzdFtpXS5wcmV2aW91c1NpYmxpbmcgPT09IG51bGwpIHtcbiAgICAgICAgICB0b2dnbGVTbGlkZVRvUmlnaHQobGlzdFtpXSk7XG4gICAgICAgICAgc2xpZGVDdXJyZW50UmlnaHQobGlzdFtpXSwgMzAwKTtcbiAgICAgICAgICBzaG93TmV4dFNsaWRlKGxpc3RbbGlzdC5sZW5ndGggLSAxXSwgMzAwKTtcbiAgICAgICAgICBoaWdobGlnaHREb3QobGlzdC5sZW5ndGggLSAxKTtcbiAgICAgICAgICB0cmlnZ2VyID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdG9nZ2xlU2xpZGVUb1JpZ2h0KGxpc3RbaV0pO1xuICAgICAgICAgIHNsaWRlQ3VycmVudFJpZ2h0KGxpc3RbaV0sIDMwMCk7XG4gICAgICAgICAgc2hvd05leHRTbGlkZShsaXN0W2ldLnByZXZpb3VzU2libGluZywgMzAwKTtcbiAgICAgICAgICBoaWdobGlnaHREb3QoaSAtIDEpO1xuICAgICAgICAgIHRyaWdnZXIgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNsaWNrQXJyb3dSaWdodCgpIHtcbiAgY29uc3QgeyBhcnJvd1JpZ2h0RGl2IH0gPSBmaW5kRWxlbWVudCgpO1xuICBjb25zdCBsaXN0ID0gZmluZEVsZW1lbnQoKS5pbWFnZUxpc3Q7XG5cbiAgYXJyb3dSaWdodERpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBsZXQgdHJpZ2dlciA9IHRydWU7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAobGlzdFtpXS5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScgJiYgdHJpZ2dlcikge1xuICAgICAgICBpZiAobGlzdFtpXS5uZXh0U2libGluZyA9PT0gbnVsbCkge1xuICAgICAgICAgIHRvZ2dsZVNsaWRlVG9MZWZ0KGxpc3RbaV0pO1xuICAgICAgICAgIHNsaWRlQ3VycmVudExlZnQobGlzdFtpXSwgMzAwKTtcbiAgICAgICAgICBzaG93TmV4dFNsaWRlKGxpc3RbMF0sIDMwMCk7XG4gICAgICAgICAgaGlnaGxpZ2h0RG90KDApO1xuICAgICAgICAgIHRyaWdnZXIgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0b2dnbGVTbGlkZVRvTGVmdChsaXN0W2ldKTtcbiAgICAgICAgICBzbGlkZUN1cnJlbnRMZWZ0KGxpc3RbaV0sIDMwMCk7XG4gICAgICAgICAgc2hvd05leHRTbGlkZShsaXN0W2ldLm5leHRTaWJsaW5nLCAzMDApO1xuICAgICAgICAgIGhpZ2hsaWdodERvdChpICsgMSk7XG4gICAgICAgICAgdHJpZ2dlciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IHsgY2xpY2tBcnJvd0xlZnQsIGNsaWNrQXJyb3dSaWdodCB9O1xuIiwiaW1wb3J0IGZpbmRFbGVtZW50IGZyb20gJy4vZmluZEVsZW1lbnQnO1xuaW1wb3J0IHsgc2hvd0ltYWdlLCBoaWRlSW1hZ2UsIHRvZ2dsZUN1cnJlbnQgfSBmcm9tICcuL3N0eWxlSW1hZ2UnO1xuXG5mdW5jdGlvbiBjbGlja0RvdHMoKSB7XG4gIGNvbnN0IHsgZG90TGlzdCB9ID0gZmluZEVsZW1lbnQoKTtcbiAgY29uc3QgeyBpbWFnZUxpc3QgfSA9IGZpbmRFbGVtZW50KCk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkb3RMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgZG90TGlzdFtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmIChpbWFnZUxpc3RbaV0uc3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRvdExpc3QpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2hvd0ltYWdlKGltYWdlTGlzdFtpXSk7XG4gICAgICAgIGhpZ2hsaWdodERvdChpKTtcbiAgICAgICAgdG9nZ2xlQ3VycmVudChpbWFnZUxpc3RbaV0pO1xuICAgICAgICBpbWFnZUxpc3QuZm9yRWFjaCgoaW1nKSA9PiB7XG4gICAgICAgICAgaWYgKGltZy5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScgJiYgaW1nICE9PSBpbWFnZUxpc3RbaV0pIHtcbiAgICAgICAgICAgIGhpZGVJbWFnZShpbWcpO1xuICAgICAgICAgICAgdG9nZ2xlQ3VycmVudChpbWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGlnaGxpZ2h0RG90KG4pIHtcbiAgY29uc3QgeyBkb3RMaXN0IH0gPSBmaW5kRWxlbWVudCgpO1xuICAvLyBpZiAoZG90TGlzdFtuXS5jbGFzc0xpc3RbMF0gIT09ICdoaWdobGlnaHQnKSB7XG4gIGRvdExpc3Rbbl0uY2xhc3NMaXN0LnRvZ2dsZSgnaGlnaGxpZ2h0Jyk7XG4gIC8vIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkb3RMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGRvdExpc3RbaV0gIT09IGRvdExpc3Rbbl0pIHtcbiAgICAgIGRvdExpc3RbaV0uY2xhc3NMaXN0LnJlbW92ZSgnaGlnaGxpZ2h0Jyk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7IGNsaWNrRG90cywgaGlnaGxpZ2h0RG90IH07XG4iLCJmdW5jdGlvbiBmaW5kRWxlbWVudCgpIHtcbiAgY29uc3QgYm90dG9tRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvdHRvbScpO1xuICBjb25zdCBzbGlkZXNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVzJyk7XG4gIGNvbnN0IGFycm93TGVmdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcnJvdy1sZWZ0Jyk7XG4gIGNvbnN0IGFycm93UmlnaHREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXJyb3ctcmlnaHQnKTtcbiAgY29uc3QgaW1hZ2VMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNsaWRlcyBpbWcnKTtcbiAgY29uc3QgZG90TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib3R0b20gaW1nJyk7XG5cbiAgcmV0dXJuIHtcbiAgICBzbGlkZXNEaXYsXG4gICAgYXJyb3dMZWZ0RGl2LFxuICAgIGFycm93UmlnaHREaXYsXG4gICAgaW1hZ2VMaXN0LFxuICAgIGJvdHRvbURpdixcbiAgICBkb3RMaXN0LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmaW5kRWxlbWVudDtcbiIsImltcG9ydCBPbmUgZnJvbSAnLi9pbWFnZS9wZXhlbHMtam9oYW5uLTEyNTQxNDAuanBnJztcbmltcG9ydCBUd28gZnJvbSAnLi9pbWFnZS9wZXhlbHMtbXVoYW5uYWQtYWxhdGF3aS01ODk5Ny5qcGcnO1xuaW1wb3J0IFRocmVlIGZyb20gJy4vaW1hZ2UvcGV4ZWxzLXBpeGFiYXktMjU3NTQwLmpwZyc7XG5pbXBvcnQgRm91ciBmcm9tICcuL2ltYWdlL3BleGVscy1zdmV0b3phci1taWxhc2hldmljaC0xNDkwOTA4LmpwZyc7XG5pbXBvcnQgUmlnaHQgZnJvbSAnLi9pbWFnZS9jaGV2cm9uLXJpZ2h0LnN2Zyc7XG5pbXBvcnQgTGVmdCBmcm9tICcuL2ltYWdlL2NoZXZyb24tbGVmdC5zdmcnO1xuaW1wb3J0IENpcmNsZSBmcm9tICcuL2ltYWdlL2NoZWNrYm94LWJsYW5rLWNpcmNsZS1vdXRsaW5lLnN2Zyc7XG5pbXBvcnQgRG90IGZyb20gJy4vaW1hZ2UvY2hlY2tib3gtYmxhbmstY2lyY2xlLnN2Zyc7XG5cbmZ1bmN0aW9uIGFzc2lnbkltYWdlKCkge1xuICBjb25zdCBmaXJzdCA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBzZWNvbmQgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgdGhpcmQgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgZm91cnRoID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IGxlZnQgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgcmlnaHQgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgY2lyY2xlMSA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBjaXJjbGUyID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IGNpcmNsZTMgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgY2lyY2xlNCA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBkb3QgPSBuZXcgSW1hZ2UoKTtcblxuICBmaXJzdC5zcmMgPSBPbmU7XG4gIHNlY29uZC5zcmMgPSBUd287XG4gIHRoaXJkLnNyYyA9IFRocmVlO1xuICBmb3VydGguc3JjID0gRm91cjtcbiAgcmlnaHQuc3JjID0gUmlnaHQ7XG4gIGxlZnQuc3JjID0gTGVmdDtcbiAgY2lyY2xlMS5zcmMgPSBDaXJjbGU7XG4gIGNpcmNsZTIuc3JjID0gQ2lyY2xlO1xuICBjaXJjbGUzLnNyYyA9IENpcmNsZTtcbiAgY2lyY2xlNC5zcmMgPSBDaXJjbGU7XG4gIGRvdC5zcmMgPSBEb3Q7XG5cbiAgcmV0dXJuIHtcbiAgICBmaXJzdCxcbiAgICBzZWNvbmQsXG4gICAgdGhpcmQsXG4gICAgZm91cnRoLFxuICAgIHJpZ2h0LFxuICAgIGxlZnQsXG4gICAgY2lyY2xlMSxcbiAgICBjaXJjbGUyLFxuICAgIGNpcmNsZTMsXG4gICAgY2lyY2xlNCxcbiAgICBkb3QsXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzc2lnbkltYWdlO1xuIiwiaW1wb3J0IGZpbmRFbGVtZW50IGZyb20gJy4vZmluZEVsZW1lbnQnO1xuXG5mdW5jdGlvbiBkZWZhdWx0SW1hZ2UoKSB7XG4gIGNvbnN0IGltYWdlcyA9IGZpbmRFbGVtZW50KCkuaW1hZ2VMaXN0O1xuICBpbWFnZXNbMF0uY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IGltYWdlcy5sZW5ndGg7IGkrKykge1xuICAgIGltYWdlc1tpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3dJbWFnZShpKSB7XG4gIGNvbnN0IGltYWdlID0gaTtcbiAgaW1hZ2Uuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59XG5cbmZ1bmN0aW9uIGhpZGVJbWFnZShpKSB7XG4gIGNvbnN0IGltYWdlID0gaTtcbiAgaW1hZ2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxuZnVuY3Rpb24gdG9nZ2xlU2xpZGVUb0xlZnQoaSkge1xuICBjb25zdCBpbWFnZSA9IGk7XG4gIGltYWdlLmNsYXNzTGlzdC50b2dnbGUoJ3NsaWRlVG9MZWZ0Jyk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZVNsaWRlVG9SaWdodChpKSB7XG4gIGNvbnN0IGltYWdlID0gaTtcbiAgaW1hZ2UuY2xhc3NMaXN0LnRvZ2dsZSgnc2xpZGVUb1JpZ2h0Jyk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUN1cnJlbnQoaSkge1xuICBjb25zdCBpbWFnZSA9IGk7XG4gIGltYWdlLmNsYXNzTGlzdC50b2dnbGUoJ2N1cnJlbnQnKTtcbn1cblxuZnVuY3Rpb24gc2xpZGVDdXJyZW50TGVmdChpLCB0aW1lKSB7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGhpZGVJbWFnZShpKTtcbiAgICB0b2dnbGVDdXJyZW50KGkpO1xuICAgIHRvZ2dsZVNsaWRlVG9MZWZ0KGkpO1xuICB9LCB0aW1lKTtcbn1cblxuZnVuY3Rpb24gc2xpZGVDdXJyZW50UmlnaHQoaSwgdGltZSkge1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBoaWRlSW1hZ2UoaSk7XG4gICAgdG9nZ2xlQ3VycmVudChpKTtcbiAgICB0b2dnbGVTbGlkZVRvUmlnaHQoaSk7XG4gIH0sIHRpbWUpO1xufVxuXG5mdW5jdGlvbiBzaG93TmV4dFNsaWRlKGksIHRpbWUpIHtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgc2hvd0ltYWdlKGkpO1xuICAgIHRvZ2dsZUN1cnJlbnQoaSk7XG4gIH0sIHRpbWUpO1xufVxuXG5leHBvcnQge1xuICBkZWZhdWx0SW1hZ2UsXG4gIHNob3dJbWFnZSxcbiAgaGlkZUltYWdlLFxuICB0b2dnbGVTbGlkZVRvTGVmdCxcbiAgdG9nZ2xlU2xpZGVUb1JpZ2h0LFxuICB0b2dnbGVDdXJyZW50LFxuICBzbGlkZUN1cnJlbnRMZWZ0LFxuICBzbGlkZUN1cnJlbnRSaWdodCxcbiAgc2hvd05leHRTbGlkZSxcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBhcHBlbmRUb1NsaWRlcywgYXBwZW5kVG9Cb3R0b20gfSBmcm9tICcuL2FwcGVuZEltYWdlJztcbmltcG9ydCB7IGRlZmF1bHRJbWFnZSB9IGZyb20gJy4vc3R5bGVJbWFnZSc7XG5pbXBvcnQgeyBjbGlja0Fycm93TGVmdCwgY2xpY2tBcnJvd1JpZ2h0IH0gZnJvbSAnLi9hcnJvd0NvbnRyb2wnO1xuaW1wb3J0IHsgY2xpY2tEb3RzIH0gZnJvbSAnLi9kb3RDb250cm9sJztcblxuYXBwZW5kVG9TbGlkZXMoKTtcbmFwcGVuZFRvQm90dG9tKCk7XG5kZWZhdWx0SW1hZ2UoKTtcbmNsaWNrQXJyb3dMZWZ0KCk7XG5jbGlja0Fycm93UmlnaHQoKTtcbmNsaWNrRG90cygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9