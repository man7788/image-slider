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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background: rgb(50, 50, 50);\n}\n\n.container {\n  border: 2px solid orange;\n  width: 1000px;\n  height: 400px;\n}\n\n.frame {\n  /* border: 2px solid greenyellow; */\n  width: 1000px;\n  height: 364px;\n  display: flex;\n  justify-content: center;\n}\n\n\n.slides {\n  /* border: 2px solid red; */\n  overflow: hidden;\n  display: flex;\n}\n\n.slides img.current {\n  transition: transform 300ms ease-in-out;\n}\n\n.slideToLeft {\n  transform: translateX(-538.22px);\n}\n\n.slideToRight {\n  transform: translateX(538.22px);\n}\n\n.arrow-left img,\n.arrow-right img {\n  height: 100px;\n}\n\n.arrow-left,\n.arrow-right {\n  align-self: center;\n  filter: invert(70%);\n  cursor: pointer;\n}\n\n.bottom {\n  /* border: 2px solid greenyellow; */\n  display: flex;\n  justify-content: center;\n}\n\n.bottom img {\n  width: 28px;\n  filter: invert(70%);\n  cursor: pointer;\n  align-self: flex-end;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,wBAAwB;EACxB,aAAa;EACb,aAAa;AACf;;AAEA;EACE,mCAAmC;EACnC,aAAa;EACb,aAAa;EACb,aAAa;EACb,uBAAuB;AACzB;;;AAGA;EACE,2BAA2B;EAC3B,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,+BAA+B;AACjC;;AAEA;;EAEE,aAAa;AACf;;AAEA;;EAEE,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,mCAAmC;EACnC,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,mBAAmB;EACnB,eAAe;EACf,oBAAoB;AACtB","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background: rgb(50, 50, 50);\n}\n\n.container {\n  border: 2px solid orange;\n  width: 1000px;\n  height: 400px;\n}\n\n.frame {\n  /* border: 2px solid greenyellow; */\n  width: 1000px;\n  height: 364px;\n  display: flex;\n  justify-content: center;\n}\n\n\n.slides {\n  /* border: 2px solid red; */\n  overflow: hidden;\n  display: flex;\n}\n\n.slides img.current {\n  transition: transform 300ms ease-in-out;\n}\n\n.slideToLeft {\n  transform: translateX(-538.22px);\n}\n\n.slideToRight {\n  transform: translateX(538.22px);\n}\n\n.arrow-left img,\n.arrow-right img {\n  height: 100px;\n}\n\n.arrow-left,\n.arrow-right {\n  align-self: center;\n  filter: invert(70%);\n  cursor: pointer;\n}\n\n.bottom {\n  /* border: 2px solid greenyellow; */\n  display: flex;\n  justify-content: center;\n}\n\n.bottom img {\n  width: 28px;\n  filter: invert(70%);\n  cursor: pointer;\n  align-self: flex-end;\n}"],"sourceRoot":""}]);
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



function clickArrowLeft() {
  const { arrowLeftDiv } = (0,_findElement__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const list = (0,_findElement__WEBPACK_IMPORTED_MODULE_0__["default"])().imagesList;

  arrowLeftDiv.addEventListener('click', () => {
    let trigger = true;
    list.forEach((img) => {
      if (img.style.display !== 'none' && trigger) {
        if (img.nextSibling === null) {
          (0,_styleImage__WEBPACK_IMPORTED_MODULE_1__.toggleSlideToLeft)(img);
          (0,_styleImage__WEBPACK_IMPORTED_MODULE_1__.slideCurrentLeft)(img, 300);
          (0,_styleImage__WEBPACK_IMPORTED_MODULE_1__.showNextSlide)(list[0], 300);
          trigger = false;
        } else {
          (0,_styleImage__WEBPACK_IMPORTED_MODULE_1__.toggleSlideToLeft)(img);
          (0,_styleImage__WEBPACK_IMPORTED_MODULE_1__.slideCurrentLeft)(img, 300);
          (0,_styleImage__WEBPACK_IMPORTED_MODULE_1__.showNextSlide)(img.nextSibling, 300);
          trigger = false;
        }
      }
    });
  });
}

function clickArrowRight() {
  const { arrowRightDiv } = (0,_findElement__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const list = (0,_findElement__WEBPACK_IMPORTED_MODULE_0__["default"])().imagesList;

  arrowRightDiv.addEventListener('click', () => {
    let trigger = true;
    list.forEach((img) => {
      if (img.style.display !== 'none' && trigger) {
        if (img.previousSibling === null) {
          (0,_styleImage__WEBPACK_IMPORTED_MODULE_1__.toggleSlideToRight)(img);
          (0,_styleImage__WEBPACK_IMPORTED_MODULE_1__.slideCurrentRight)(img, 300);
          (0,_styleImage__WEBPACK_IMPORTED_MODULE_1__.showNextSlide)(list[list.length - 1], 300);
          trigger = false;
        } else {
          (0,_styleImage__WEBPACK_IMPORTED_MODULE_1__.toggleSlideToRight)(img);
          (0,_styleImage__WEBPACK_IMPORTED_MODULE_1__.slideCurrentRight)(img, 300);
          (0,_styleImage__WEBPACK_IMPORTED_MODULE_1__.showNextSlide)(img.previousSibling, 300);
          trigger = false;
        }
      }
    });
  });
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
  const imagesList = document.querySelectorAll('.slides img');

  return { slidesDiv, arrowLeftDiv, arrowRightDiv, imagesList, bottomDiv };
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
/* harmony import */ var _image_circle_medium_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./image/circle-medium.svg */ "./src/image/circle-medium.svg");








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

  first.src = _image_pexels_johann_1254140_jpg__WEBPACK_IMPORTED_MODULE_0__;
  second.src = _image_pexels_muhannad_alatawi_58997_jpg__WEBPACK_IMPORTED_MODULE_1__;
  third.src = _image_pexels_pixabay_257540_jpg__WEBPACK_IMPORTED_MODULE_2__;
  fourth.src = _image_pexels_svetozar_milashevich_1490908_jpg__WEBPACK_IMPORTED_MODULE_3__;
  right.src = _image_chevron_right_svg__WEBPACK_IMPORTED_MODULE_4__;
  left.src = _image_chevron_left_svg__WEBPACK_IMPORTED_MODULE_5__;
  circle1.src = _image_circle_medium_svg__WEBPACK_IMPORTED_MODULE_6__;
  circle2.src = _image_circle_medium_svg__WEBPACK_IMPORTED_MODULE_6__;
  circle3.src = _image_circle_medium_svg__WEBPACK_IMPORTED_MODULE_6__;
  circle4.src = _image_circle_medium_svg__WEBPACK_IMPORTED_MODULE_6__;

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
  const images = (0,_findElement__WEBPACK_IMPORTED_MODULE_0__["default"])().imagesList;
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

/***/ "./src/image/circle-medium.svg":
/*!*************************************!*\
  !*** ./src/image/circle-medium.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e5b6315ac05dc8529b76.svg";

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





(0,_appendImage__WEBPACK_IMPORTED_MODULE_1__.appendToSlides)();
(0,_appendImage__WEBPACK_IMPORTED_MODULE_1__.appendToBottom)();
(0,_styleImage__WEBPACK_IMPORTED_MODULE_2__.defaultImage)();
(0,_arrowControl__WEBPACK_IMPORTED_MODULE_3__.clickArrowLeft)();
(0,_arrowControl__WEBPACK_IMPORTED_MODULE_3__.clickArrowRight)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQzBDO0FBQ25CO0FBQ3FCOztBQUVqRSw0REFBYztBQUNkLDREQUFjO0FBQ2QseURBQVk7QUFDWiw2REFBYztBQUNkLDhEQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1hZ2Utc2xpZGVyLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9pbWFnZS1zbGlkZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2ltYWdlLXNsaWRlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2ltYWdlLXNsaWRlci8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9pbWFnZS1zbGlkZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vaW1hZ2Utc2xpZGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9pbWFnZS1zbGlkZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vaW1hZ2Utc2xpZGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2ltYWdlLXNsaWRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2ltYWdlLXNsaWRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2ltYWdlLXNsaWRlci8uL3NyYy9hcHBlbmRJbWFnZS5qcyIsIndlYnBhY2s6Ly9pbWFnZS1zbGlkZXIvLi9zcmMvYXJyb3dDb250cm9sLmpzIiwid2VicGFjazovL2ltYWdlLXNsaWRlci8uL3NyYy9maW5kRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9pbWFnZS1zbGlkZXIvLi9zcmMvaW1wb3J0SW1hZ2UuanMiLCJ3ZWJwYWNrOi8vaW1hZ2Utc2xpZGVyLy4vc3JjL3N0eWxlSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vaW1hZ2Utc2xpZGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ltYWdlLXNsaWRlci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9pbWFnZS1zbGlkZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2ltYWdlLXNsaWRlci93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2ltYWdlLXNsaWRlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2ltYWdlLXNsaWRlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2ltYWdlLXNsaWRlci93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9pbWFnZS1zbGlkZXIvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2ltYWdlLXNsaWRlci8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogcmdiKDUwLCA1MCwgNTApO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIG9yYW5nZTtcXG4gIHdpZHRoOiAxMDAwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbn1cXG5cXG4uZnJhbWUge1xcbiAgLyogYm9yZGVyOiAycHggc29saWQgZ3JlZW55ZWxsb3c7ICovXFxuICB3aWR0aDogMTAwMHB4O1xcbiAgaGVpZ2h0OiAzNjRweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuXFxuLnNsaWRlcyB7XFxuICAvKiBib3JkZXI6IDJweCBzb2xpZCByZWQ7ICovXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnNsaWRlcyBpbWcuY3VycmVudCB7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5zbGlkZVRvTGVmdCB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUzOC4yMnB4KTtcXG59XFxuXFxuLnNsaWRlVG9SaWdodCB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTM4LjIycHgpO1xcbn1cXG5cXG4uYXJyb3ctbGVmdCBpbWcsXFxuLmFycm93LXJpZ2h0IGltZyB7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4uYXJyb3ctbGVmdCxcXG4uYXJyb3ctcmlnaHQge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZmlsdGVyOiBpbnZlcnQoNzAlKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJvdHRvbSB7XFxuICAvKiBib3JkZXI6IDJweCBzb2xpZCBncmVlbnllbGxvdzsgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmJvdHRvbSBpbWcge1xcbiAgd2lkdGg6IDI4cHg7XFxuICBmaWx0ZXI6IGludmVydCg3MCUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLGFBQWE7RUFDYixhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7O0FBR0E7RUFDRSwyQkFBMkI7RUFDM0IsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTs7RUFFRSxhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixvQkFBb0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoNTAsIDUwLCA1MCk7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgYm9yZGVyOiAycHggc29saWQgb3JhbmdlO1xcbiAgd2lkdGg6IDEwMDBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxufVxcblxcbi5mcmFtZSB7XFxuICAvKiBib3JkZXI6IDJweCBzb2xpZCBncmVlbnllbGxvdzsgKi9cXG4gIHdpZHRoOiAxMDAwcHg7XFxuICBoZWlnaHQ6IDM2NHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5cXG4uc2xpZGVzIHtcXG4gIC8qIGJvcmRlcjogMnB4IHNvbGlkIHJlZDsgKi9cXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uc2xpZGVzIGltZy5jdXJyZW50IHtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnNsaWRlVG9MZWZ0IHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTM4LjIycHgpO1xcbn1cXG5cXG4uc2xpZGVUb1JpZ2h0IHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MzguMjJweCk7XFxufVxcblxcbi5hcnJvdy1sZWZ0IGltZyxcXG4uYXJyb3ctcmlnaHQgaW1nIHtcXG4gIGhlaWdodDogMTAwcHg7XFxufVxcblxcbi5hcnJvdy1sZWZ0LFxcbi5hcnJvdy1yaWdodCB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBmaWx0ZXI6IGludmVydCg3MCUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYm90dG9tIHtcXG4gIC8qIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVueWVsbG93OyAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYm90dG9tIGltZyB7XFxuICB3aWR0aDogMjhweDtcXG4gIGZpbHRlcjogaW52ZXJ0KDcwJSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGFzc2lnbkltYWdlIGZyb20gJy4vaW1wb3J0SW1hZ2UnO1xuaW1wb3J0IGZpbmRFbGVtZW50IGZyb20gJy4vZmluZEVsZW1lbnQnO1xuXG5mdW5jdGlvbiBhcHBlbmRUb1NsaWRlcygpIHtcbiAgY29uc3QgZGl2ID0gZmluZEVsZW1lbnQoKS5zbGlkZXNEaXY7XG4gIGNvbnN0IHsgYXJyb3dMZWZ0RGl2IH0gPSBmaW5kRWxlbWVudCgpO1xuICBjb25zdCB7IGFycm93UmlnaHREaXYgfSA9IGZpbmRFbGVtZW50KCk7XG4gIGNvbnN0IHsgZmlyc3QgfSA9IGFzc2lnbkltYWdlKCk7XG4gIGNvbnN0IHsgc2Vjb25kIH0gPSBhc3NpZ25JbWFnZSgpO1xuICBjb25zdCB7IHRoaXJkIH0gPSBhc3NpZ25JbWFnZSgpO1xuICBjb25zdCB7IGZvdXJ0aCB9ID0gYXNzaWduSW1hZ2UoKTtcbiAgY29uc3QgeyByaWdodCB9ID0gYXNzaWduSW1hZ2UoKTtcbiAgY29uc3QgeyBsZWZ0IH0gPSBhc3NpZ25JbWFnZSgpO1xuXG4gIGRpdi5hcHBlbmQoZmlyc3QsIHNlY29uZCwgdGhpcmQsIGZvdXJ0aCk7XG4gIGFycm93TGVmdERpdi5hcHBlbmQobGVmdCk7XG4gIGFycm93UmlnaHREaXYuYXBwZW5kKHJpZ2h0KTtcbn1cblxuZnVuY3Rpb24gYXBwZW5kVG9Cb3R0b20oKSB7XG4gIGNvbnN0IGRpdiA9IGZpbmRFbGVtZW50KCkuYm90dG9tRGl2O1xuICBjb25zdCB7IGNpcmNsZTEgfSA9IGFzc2lnbkltYWdlKCk7XG4gIGNvbnN0IHsgY2lyY2xlMiB9ID0gYXNzaWduSW1hZ2UoKTtcbiAgY29uc3QgeyBjaXJjbGUzIH0gPSBhc3NpZ25JbWFnZSgpO1xuICBjb25zdCB7IGNpcmNsZTQgfSA9IGFzc2lnbkltYWdlKCk7XG5cbiAgZGl2LmFwcGVuZChjaXJjbGUxLCBjaXJjbGUyLCBjaXJjbGUzLCBjaXJjbGU0KTtcbn1cblxuZXhwb3J0IHsgYXBwZW5kVG9TbGlkZXMsIGFwcGVuZFRvQm90dG9tIH07XG4iLCJpbXBvcnQgZmluZEVsZW1lbnQgZnJvbSAnLi9maW5kRWxlbWVudCc7XG5pbXBvcnQge1xuICB0b2dnbGVTbGlkZVRvTGVmdCxcbiAgdG9nZ2xlU2xpZGVUb1JpZ2h0LFxuICBzbGlkZUN1cnJlbnRMZWZ0LFxuICBzbGlkZUN1cnJlbnRSaWdodCxcbiAgc2hvd05leHRTbGlkZSxcbn0gZnJvbSAnLi9zdHlsZUltYWdlJztcblxuZnVuY3Rpb24gY2xpY2tBcnJvd0xlZnQoKSB7XG4gIGNvbnN0IHsgYXJyb3dMZWZ0RGl2IH0gPSBmaW5kRWxlbWVudCgpO1xuICBjb25zdCBsaXN0ID0gZmluZEVsZW1lbnQoKS5pbWFnZXNMaXN0O1xuXG4gIGFycm93TGVmdERpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBsZXQgdHJpZ2dlciA9IHRydWU7XG4gICAgbGlzdC5mb3JFYWNoKChpbWcpID0+IHtcbiAgICAgIGlmIChpbWcuc3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnICYmIHRyaWdnZXIpIHtcbiAgICAgICAgaWYgKGltZy5uZXh0U2libGluZyA9PT0gbnVsbCkge1xuICAgICAgICAgIHRvZ2dsZVNsaWRlVG9MZWZ0KGltZyk7XG4gICAgICAgICAgc2xpZGVDdXJyZW50TGVmdChpbWcsIDMwMCk7XG4gICAgICAgICAgc2hvd05leHRTbGlkZShsaXN0WzBdLCAzMDApO1xuICAgICAgICAgIHRyaWdnZXIgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0b2dnbGVTbGlkZVRvTGVmdChpbWcpO1xuICAgICAgICAgIHNsaWRlQ3VycmVudExlZnQoaW1nLCAzMDApO1xuICAgICAgICAgIHNob3dOZXh0U2xpZGUoaW1nLm5leHRTaWJsaW5nLCAzMDApO1xuICAgICAgICAgIHRyaWdnZXIgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2xpY2tBcnJvd1JpZ2h0KCkge1xuICBjb25zdCB7IGFycm93UmlnaHREaXYgfSA9IGZpbmRFbGVtZW50KCk7XG4gIGNvbnN0IGxpc3QgPSBmaW5kRWxlbWVudCgpLmltYWdlc0xpc3Q7XG5cbiAgYXJyb3dSaWdodERpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBsZXQgdHJpZ2dlciA9IHRydWU7XG4gICAgbGlzdC5mb3JFYWNoKChpbWcpID0+IHtcbiAgICAgIGlmIChpbWcuc3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnICYmIHRyaWdnZXIpIHtcbiAgICAgICAgaWYgKGltZy5wcmV2aW91c1NpYmxpbmcgPT09IG51bGwpIHtcbiAgICAgICAgICB0b2dnbGVTbGlkZVRvUmlnaHQoaW1nKTtcbiAgICAgICAgICBzbGlkZUN1cnJlbnRSaWdodChpbWcsIDMwMCk7XG4gICAgICAgICAgc2hvd05leHRTbGlkZShsaXN0W2xpc3QubGVuZ3RoIC0gMV0sIDMwMCk7XG4gICAgICAgICAgdHJpZ2dlciA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRvZ2dsZVNsaWRlVG9SaWdodChpbWcpO1xuICAgICAgICAgIHNsaWRlQ3VycmVudFJpZ2h0KGltZywgMzAwKTtcbiAgICAgICAgICBzaG93TmV4dFNsaWRlKGltZy5wcmV2aW91c1NpYmxpbmcsIDMwMCk7XG4gICAgICAgICAgdHJpZ2dlciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG5leHBvcnQgeyBjbGlja0Fycm93TGVmdCwgY2xpY2tBcnJvd1JpZ2h0IH07XG4iLCJmdW5jdGlvbiBmaW5kRWxlbWVudCgpIHtcbiAgY29uc3QgYm90dG9tRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvdHRvbScpO1xuICBjb25zdCBzbGlkZXNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVzJyk7XG4gIGNvbnN0IGFycm93TGVmdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcnJvdy1sZWZ0Jyk7XG4gIGNvbnN0IGFycm93UmlnaHREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXJyb3ctcmlnaHQnKTtcbiAgY29uc3QgaW1hZ2VzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbGlkZXMgaW1nJyk7XG5cbiAgcmV0dXJuIHsgc2xpZGVzRGl2LCBhcnJvd0xlZnREaXYsIGFycm93UmlnaHREaXYsIGltYWdlc0xpc3QsIGJvdHRvbURpdiB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmaW5kRWxlbWVudDtcbiIsImltcG9ydCBPbmUgZnJvbSAnLi9pbWFnZS9wZXhlbHMtam9oYW5uLTEyNTQxNDAuanBnJztcbmltcG9ydCBUd28gZnJvbSAnLi9pbWFnZS9wZXhlbHMtbXVoYW5uYWQtYWxhdGF3aS01ODk5Ny5qcGcnO1xuaW1wb3J0IFRocmVlIGZyb20gJy4vaW1hZ2UvcGV4ZWxzLXBpeGFiYXktMjU3NTQwLmpwZyc7XG5pbXBvcnQgRm91ciBmcm9tICcuL2ltYWdlL3BleGVscy1zdmV0b3phci1taWxhc2hldmljaC0xNDkwOTA4LmpwZyc7XG5pbXBvcnQgUmlnaHQgZnJvbSAnLi9pbWFnZS9jaGV2cm9uLXJpZ2h0LnN2Zyc7XG5pbXBvcnQgTGVmdCBmcm9tICcuL2ltYWdlL2NoZXZyb24tbGVmdC5zdmcnO1xuaW1wb3J0IENpcmNsZSBmcm9tICcuL2ltYWdlL2NpcmNsZS1tZWRpdW0uc3ZnJztcblxuZnVuY3Rpb24gYXNzaWduSW1hZ2UoKSB7XG4gIGNvbnN0IGZpcnN0ID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IHNlY29uZCA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCB0aGlyZCA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBmb3VydGggPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgbGVmdCA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCByaWdodCA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBjaXJjbGUxID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IGNpcmNsZTIgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgY2lyY2xlMyA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBjaXJjbGU0ID0gbmV3IEltYWdlKCk7XG5cbiAgZmlyc3Quc3JjID0gT25lO1xuICBzZWNvbmQuc3JjID0gVHdvO1xuICB0aGlyZC5zcmMgPSBUaHJlZTtcbiAgZm91cnRoLnNyYyA9IEZvdXI7XG4gIHJpZ2h0LnNyYyA9IFJpZ2h0O1xuICBsZWZ0LnNyYyA9IExlZnQ7XG4gIGNpcmNsZTEuc3JjID0gQ2lyY2xlO1xuICBjaXJjbGUyLnNyYyA9IENpcmNsZTtcbiAgY2lyY2xlMy5zcmMgPSBDaXJjbGU7XG4gIGNpcmNsZTQuc3JjID0gQ2lyY2xlO1xuXG4gIHJldHVybiB7XG4gICAgZmlyc3QsXG4gICAgc2Vjb25kLFxuICAgIHRoaXJkLFxuICAgIGZvdXJ0aCxcbiAgICByaWdodCxcbiAgICBsZWZ0LFxuICAgIGNpcmNsZTEsXG4gICAgY2lyY2xlMixcbiAgICBjaXJjbGUzLFxuICAgIGNpcmNsZTQsXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzc2lnbkltYWdlO1xuIiwiaW1wb3J0IGZpbmRFbGVtZW50IGZyb20gJy4vZmluZEVsZW1lbnQnO1xuXG5mdW5jdGlvbiBkZWZhdWx0SW1hZ2UoKSB7XG4gIGNvbnN0IGltYWdlcyA9IGZpbmRFbGVtZW50KCkuaW1hZ2VzTGlzdDtcbiAgaW1hZ2VzWzBdLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBpbWFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpbWFnZXNbaV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG93SW1hZ2UoaSkge1xuICBjb25zdCBpbWFnZSA9IGk7XG4gIGltYWdlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufVxuXG5mdW5jdGlvbiBoaWRlSW1hZ2UoaSkge1xuICBjb25zdCBpbWFnZSA9IGk7XG4gIGltYWdlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZVNsaWRlVG9MZWZ0KGkpIHtcbiAgY29uc3QgaW1hZ2UgPSBpO1xuICBpbWFnZS5jbGFzc0xpc3QudG9nZ2xlKCdzbGlkZVRvTGVmdCcpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVTbGlkZVRvUmlnaHQoaSkge1xuICBjb25zdCBpbWFnZSA9IGk7XG4gIGltYWdlLmNsYXNzTGlzdC50b2dnbGUoJ3NsaWRlVG9SaWdodCcpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVDdXJyZW50KGkpIHtcbiAgY29uc3QgaW1hZ2UgPSBpO1xuICBpbWFnZS5jbGFzc0xpc3QudG9nZ2xlKCdjdXJyZW50Jyk7XG59XG5cbmZ1bmN0aW9uIHNsaWRlQ3VycmVudExlZnQoaSwgdGltZSkge1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBoaWRlSW1hZ2UoaSk7XG4gICAgdG9nZ2xlQ3VycmVudChpKTtcbiAgICB0b2dnbGVTbGlkZVRvTGVmdChpKTtcbiAgfSwgdGltZSk7XG59XG5cbmZ1bmN0aW9uIHNsaWRlQ3VycmVudFJpZ2h0KGksIHRpbWUpIHtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgaGlkZUltYWdlKGkpO1xuICAgIHRvZ2dsZUN1cnJlbnQoaSk7XG4gICAgdG9nZ2xlU2xpZGVUb1JpZ2h0KGkpO1xuICB9LCB0aW1lKTtcbn1cblxuZnVuY3Rpb24gc2hvd05leHRTbGlkZShpLCB0aW1lKSB7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHNob3dJbWFnZShpKTtcbiAgICB0b2dnbGVDdXJyZW50KGkpO1xuICB9LCB0aW1lKTtcbn1cblxuZXhwb3J0IHtcbiAgZGVmYXVsdEltYWdlLFxuICBzaG93SW1hZ2UsXG4gIGhpZGVJbWFnZSxcbiAgdG9nZ2xlU2xpZGVUb0xlZnQsXG4gIHRvZ2dsZVNsaWRlVG9SaWdodCxcbiAgdG9nZ2xlQ3VycmVudCxcbiAgc2xpZGVDdXJyZW50TGVmdCxcbiAgc2xpZGVDdXJyZW50UmlnaHQsXG4gIHNob3dOZXh0U2xpZGUsXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgYXBwZW5kVG9TbGlkZXMsIGFwcGVuZFRvQm90dG9tIH0gZnJvbSAnLi9hcHBlbmRJbWFnZSc7XG5pbXBvcnQgeyBkZWZhdWx0SW1hZ2UgfSBmcm9tICcuL3N0eWxlSW1hZ2UnO1xuaW1wb3J0IHsgY2xpY2tBcnJvd0xlZnQsIGNsaWNrQXJyb3dSaWdodCB9IGZyb20gJy4vYXJyb3dDb250cm9sJztcblxuYXBwZW5kVG9TbGlkZXMoKTtcbmFwcGVuZFRvQm90dG9tKCk7XG5kZWZhdWx0SW1hZ2UoKTtcbmNsaWNrQXJyb3dMZWZ0KCk7XG5jbGlja0Fycm93UmlnaHQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==