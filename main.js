/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  margin: 0;\n  padding: 0;\n  border: none;\n  text-decoration: none;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent;\n  font-family: \"Rubik\", sans-serif;\n}\n\n*:focus {\n  outline: none;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n.add-project-dialog {\n  background-color: transparent;\n  border-radius: 15px;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  box-shadow: 10px 9px 9px 0px #616060;\n}\n\n#add-form {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 300px;\n  gap: 30px;\n  padding: 60px 40px;\n  border-radius: 10px;\n  background-color: #b4b4b4;\n}\n\n.hidden {\n  display: none;\n}\n\n.shown {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.description-text-area {\n  width: 100%;\n  height: 150px;\n  padding: 12px 12px;\n  border-radius: 4px;\n  background-color: #f8f8f8;\n  font-size: 12px;\n  resize: none;\n}\n\n.main {\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n  grid-template-rows: 100px 4fr;\n  height: 100vh;\n}\n\n.header {\n  grid-column: span 3;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgb(46, 46, 46);\n  color: #fff;\n}\n\n.header-nav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 90%;\n}\n\n.header-nav__title {\n  font-size: 28px;\n}\n\n.header-nav__add {\n  padding: 4px 20px;\n  font-size: 30px;\n  background: transparent;\n  color: #fff;\n}\n\n.sidebar {\n  background-color: rgb(229 229 229);\n}\n\n.sidebar-navigation,\n.sidebar-navigation__projects {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 14px 16px;\n}\n\n.sidebar-navigation__title {\n  font-size: 26px;\n  margin-bottom: 10px;\n}\n\n.sidebar-navigation button,\n.sidebar-navigation__add-project {\n  font-size: 18px;\n  border-radius: 8px;\n  padding: 10px;\n  text-align: justify;\n  display: flex;\n  gap: 15px;\n  background-color: transparent;\n}\n\n.sidebar-navigation button:hover,\n.projects-list button:hover,\n.sidebar-navigation__add-project:hover {\n  background-color: rgb(175, 175, 175);\n}\n\n.projects-list {\n  display: flex;\n  flex-direction: column;\n}\n\n.projects-list button {\n  font-size: 16px;\n  border-radius: 8px;\n  padding: 10px;\n  text-align: justify;\n  display: flex;\n  gap: 15px;\n  background-color: transparent;\n}\n\n.hero {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 250px);\n  grid-template-rows: repeat(auto-fit, 350px);\n  gap: 20px;\n  padding: 20px;\n}\n\n.checklist__card {\n  /* background-color: #efd665; */\n  border-radius: 8px;\n  padding: 10px 15px;\n  position: relative;\n  overflow: overlay;\n}\n\n.checklist__card-header,\n.todo__card-header {\n  display: flex;\n  justify-content: space-between;\n}\n\n.checklist__card-title {\n  text-align: center;\n  font-size: 24px;\n}\n\n.delete-card-btn {\n  background-color: transparent;\n  font-size: 20px;\n}\n\n.list-item {\n  list-style-type: none;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 5px;\n}\n\n.checkbox-container {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  overflow: hidden;\n}\n\n.list-item-checkbox {\n  appearance: none;\n  height: 1.5rem;\n  width: 1.5rem;\n  border-radius: 8px;\n  border: 2px solid #3ba395;\n  cursor: pointer;\n}\n\n.list-item-checkbox:checked {\n  height: 1.5rem;\n  width: 1.5rem;\n  display: block;\n  background: url(\"https://bscottnz.github.io/todo/img/check.png\"), #6dbbb1;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n.item-checked {\n  text-decoration: line-through;\n  opacity: 50%;\n}\n\n.delete-item-btn {\n  background-color: transparent;\n  color: red;\n  font-size: 20px;\n}\n\n.list-input {\n  width: 100%;\n  border-radius: 8px;\n  margin-top: 15px;\n  padding: 10px;\n}\n\n.toggle-color-container {\n  position: absolute;\n  bottom: 8px;\n  right: 8px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 10px;\n}\n\n.toggle-color-btn,\n.color-option-btn {\n  border-radius: 50%;\n  width: 25px;\n  height: 25px;\n}\n\n.toggle-color-btn {\n  border: 2px solid #37678b;\n}\n\n.color-options-container {\n  display: flex;\n  background-color: #fff;\n  padding: 5px;\n  display: flex;\n  gap: 2px;\n  border-radius: 8px;\n}\n\n.color-options-container.hidden {\n  background-color: #fff;\n  padding: 5px;\n  width: fit-content;\n  display: none;\n}\n\n#color-option-1 {\n  background-color: #f7d15f;\n}\n#color-option-2 {\n  background-color: #fca397;\n}\n#color-option-3 {\n  background-color: #79d997;\n}\n#color-option-4 {\n  background-color: #d1a8ff;\n}\n\n.todo__card {\n  background-color: #ece7b5;\n  border-radius: 8px;\n  padding: 10px 15px;\n  position: relative;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Components/ChecklistCard.js":
/*!*****************************************!*\
  !*** ./src/Components/ChecklistCard.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ \"./src/helpers.js\");\n\n\nconst ChecklistCard = (cardId, title, listItems, bgColor) => {\n  const card = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.customCreateElement)(\"div\", {\n    id: `checklist-${cardId}`,\n    className: \"checklist__card\",\n  });\n  card.style.backgroundColor = bgColor;\n\n  const cardHeaderDiv = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.customCreateElement)(\"div\", {\n    className: \"checklist__card-header\",\n  });\n\n  const cardTitle = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.customCreateElement)(\"h3\", {\n    className: \"checklist__card-title\",\n    innerText: `${title}`,\n  });\n\n  const deleteCardBtn = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.customCreateElement)(\"button\", {\n    className: \"delete-card-btn\",\n  });\n  \n  deleteCardBtn.setAttribute(\"data-delete-card\", `${cardId}`)\n  \n  const deleteCardIcon = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.customCreateElement)(\"i\", {\n    className: \"fa-solid fa-x\",\n  });\n  \n  deleteCardBtn.appendChild(deleteCardIcon);\n\n  const list = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.customCreateElement)(\"ul\", { className: \"checklist__card-list\" });\n\n  listItems.forEach((item, index) => {\n    const newListItem = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.customCreateElement)(\"li\", {\n      className: \"list-item\",\n    });\n\n    const checkTextDiv = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.customCreateElement)(\"div\", {\n      className: \"checkbox-container\",\n    });\n    if(item.isChecked){\n      checkTextDiv.classList.add(\"item-checked\")\n    }\n\n    const newCheckBox = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.customCreateElement)(\"input\", {\n      type: \"checkbox\",\n      value: \"is-checked\",\n      checked: item.isChecked,\n      className: \"list-item-checkbox\",\n    });\n\n    newCheckBox.setAttribute(\"data-check-index\", `${index}`);\n\n    const itemText = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.customCreateElement)(\"p\", {\n      className: \"list-item-text\",\n      innerText: item.text,\n    });\n\n    const deleteItemBtn = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.customCreateElement)(\"button\", {\n      className: \"delete-item-btn\",\n    });\n    deleteItemBtn.setAttribute(\"data-delete-index\", `${index}`);\n    const trashCanIcon = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.customCreateElement)(\"i\", {\n      className: \"fa-solid fa-trash-can\",\n    });\n    deleteItemBtn.appendChild(trashCanIcon);\n\n    checkTextDiv.appendChild(newCheckBox);\n    checkTextDiv.appendChild(itemText);\n\n    newListItem.appendChild(checkTextDiv);\n    newListItem.appendChild(deleteItemBtn);\n    list.appendChild(newListItem);\n  });\n\n  const listInput = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.customCreateElement)(\"input\", {\n    type: \"text\",\n    className: \"list-input\",\n  });\n  listInput.setAttribute(\"data-input-item\", `${cardId}`);\n\n  const colorButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.customCreateElement)(\"button\", {\n    className: \"toggle-color-btn\",\n  });\n  colorButton.style.backgroundColor = bgColor;\n\n  const colorButtonContainer = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.customCreateElement)(\"div\", {\n    className: \"toggle-color-container\",\n  });\n\n  const colorOptionsContainer = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.customCreateElement)(\"div\", {\n    className: \"color-options-container hidden\",\n  });\n\n  for (let i = 1; i < 5; i++) {\n    const colorOptionBtn = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.customCreateElement)(\"button\", {\n      id: `color-option-${i}`,\n      className: \"color-option-btn\",\n    });\n\n    colorOptionsContainer.appendChild(colorOptionBtn);\n  }\n\n  colorButtonContainer.appendChild(colorOptionsContainer);\n  colorButtonContainer.appendChild(colorButton);\n\n  cardHeaderDiv.appendChild(cardTitle);\n  cardHeaderDiv.appendChild(deleteCardBtn);\n\n  card.appendChild(cardHeaderDiv);\n  card.appendChild(list);\n  card.appendChild(listInput);\n  card.appendChild(colorButtonContainer);\n\n  return card;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChecklistCard);\n\n\n//# sourceURL=webpack://todo-list/./src/Components/ChecklistCard.js?");

/***/ }),

/***/ "./src/Components/ProjectListDisplay.js":
/*!**********************************************!*\
  !*** ./src/Components/ProjectListDisplay.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ \"./src/helpers.js\");\n\n\nconst ProjectListDisplay = (titlesList) => {\n  const projectsListContainer = document.querySelector(\".projects-list\");\n  (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.removeChildren)(projectsListContainer);\n\n  titlesList.forEach((item) => {\n    const projectBtn = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.customCreateElement)(\"button\", {\n      className: \"projects-list-btn\",\n    });\n    projectBtn.setAttribute(\"data-project-btn\", `${item.id}`);\n\n    const projectIcon = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.customCreateElement)(\"i\", {\n      className: \"fa-solid fa-list-check\",\n    });\n\n    const btnText = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.customCreateElement)(\"span\", {\n      className: \"project-btn-text\",\n      innerText: `${item.title}`,\n    });\n\n    projectBtn.appendChild(projectIcon);\n    projectBtn.appendChild(btnText);\n\n    projectsListContainer.appendChild(projectBtn);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectListDisplay);\n\n\n//# sourceURL=webpack://todo-list/./src/Components/ProjectListDisplay.js?");

/***/ }),

/***/ "./src/Components/TodoCard.js":
/*!************************************!*\
  !*** ./src/Components/TodoCard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ \"./src/helpers.js\");\n\n\nconst TodoCard = (cardId) => {\n  const cardContainer = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.customCreateElement)(\"div\", {\n    id: `todo-${cardId}`,\n    className: \"todo__card\",\n  });\n\n  const cardHeaderDiv = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.customCreateElement)(\"div\", {\n    className: \"todo__card-header\",\n  });\n\n  const newTitle = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.customCreateElement)(\"h3\", { innerText: \"Todo Card\" });\n\n  const deleteCardBtn = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.customCreateElement)(\"button\", {\n    className: \"delete-card-btn\",\n  });\n\n  deleteCardBtn.setAttribute(\"data-delete-card\", `${cardId}`)\n  \n  const deleteCardIcon = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.customCreateElement)(\"i\", {\n    className: \"fa-solid fa-x\",\n  });\n\n  deleteCardBtn.appendChild(deleteCardIcon);\n\n  cardHeaderDiv.appendChild(newTitle);\n  cardHeaderDiv.appendChild(deleteCardBtn);\n\n  cardContainer.appendChild(cardHeaderDiv);\n\n  return cardContainer;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoCard);\n\n\n//# sourceURL=webpack://todo-list/./src/Components/TodoCard.js?");

/***/ }),

/***/ "./src/constructors.js":
/*!*****************************!*\
  !*** ./src/constructors.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CheckList: () => (/* binding */ CheckList),\n/* harmony export */   Todo: () => (/* binding */ Todo)\n/* harmony export */ });\nconst DEFAULT_BG_COLOR = \"#F7D15F\";\n\nfunction Todo(id, type, title, description, dueDate, priority) {\n  this.id = id;\n  this.type = type;\n  this.title = title;\n  this.description = description;\n  this.dueDate = dueDate;\n  this.priority = priority;\n}\n\nfunction CheckList(id, type, title) {\n  this.id = id;\n  this.type = type;\n  this.title = title;\n  this.bgColor = DEFAULT_BG_COLOR;\n  this.listItems = [];\n\n  this.addListItem = function (item) {\n    this.listItems.push(item);\n  };\n\n  this.removeListItem = function (itemIndex) {\n    let filteredList = this.listItems.filter((_, index) => {\n      return index !== itemIndex;\n    });\n\n    this.listItems = filteredList;\n  };\n\n  this.toggleCheckItem = function (index, state) {\n    this.listItems[index].isChecked = state;\n  };\n  \n  this.changeBgColor = function (color) {\n    this.bgColor = color;\n  };\n}\n\n\n//# sourceURL=webpack://todo-list/./src/constructors.js?");

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   customCreateElement: () => (/* binding */ customCreateElement),\n/* harmony export */   fieldsReset: () => (/* binding */ fieldsReset),\n/* harmony export */   removeChildren: () => (/* binding */ removeChildren),\n/* harmony export */   toggleFormHidden: () => (/* binding */ toggleFormHidden)\n/* harmony export */ });\nconst toggleFormHidden = (selectSection, selectedOption) => {\n  if (selectedOption === \"todo\") {\n    selectSection.classList.remove(\"hidden\");\n    selectSection.classList.add(\"shown\");\n  } else if (selectedOption === \"checklist\") {\n    selectSection.classList.remove(\"shown\");\n    selectSection.classList.add(\"hidden\");\n  }\n};\n\nconst fieldsReset = (fieldsArray) => {\n  fieldsArray.forEach((field) => {\n    if (field.id === \"project-type\") {\n      field.value = \"checklist\";\n    } else if (field.id === \"project-priority\") {\n      field.value = \"standard\";\n    } else {\n      field.value = \"\";\n    }\n  });\n};\n\nconst customCreateElement = (elementTag, props = {}) => {\n  const customElement = document.createElement(elementTag);\n\n  Object.entries(props).forEach(([key, value]) => {\n    customElement[key] = value;\n  });\n\n  return customElement;\n};\n\nconst removeChildren = (parent) => {\n  while(parent.firstChild){\n    parent.removeChild(parent.lastChild);\n  }\n} \n\n\n//# sourceURL=webpack://todo-list/./src/helpers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _constructors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructors */ \"./src/constructors.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n/* harmony import */ var _Components_ChecklistCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/ChecklistCard */ \"./src/Components/ChecklistCard.js\");\n/* harmony import */ var _Components_TodoCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/TodoCard */ \"./src/Components/TodoCard.js\");\n/* harmony import */ var _Components_ProjectListDisplay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/ProjectListDisplay */ \"./src/Components/ProjectListDisplay.js\");\n\n\n\n\n\n\n\nlet projects = [];\nlet PROJECTS_ID_COUNTER = 0;\nconst CURRENT_DISPLAY = {\n  state: \"\",\n};\n\nconst addProjectDialog = document.querySelector(\".add-project-dialog\");\n\nconst cancelBtn = document.querySelector(\".cancel-btn\");\nconst addBtns = document.querySelectorAll(\".add-btn\");\nconst selectSection = document.querySelector(\".form-section\");\nconst projectType = document.getElementById(\"project-type\");\n\nconst addForm = document.getElementById(\"add-form\");\nconst heroSection = document.querySelector(\".hero\");\n\ncancelBtn.addEventListener(\"click\", function () {\n  closeDialog();\n});\n\naddBtns.forEach((btn) =>\n  btn.addEventListener(\"click\", function () {\n    openDialog();\n  })\n);\n\nprojectType.addEventListener(\"change\", function () {\n  (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.toggleFormHidden)(selectSection, projectType.value);\n});\n\nconst openDialog = () => {\n  addProjectDialog.showModal();\n  (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.toggleFormHidden)(selectSection, projectType.value);\n};\n\nconst closeDialog = () => {\n  addProjectDialog.close();\n};\n\nconst deleteListItem = (e, deleteIndex) => {\n  const parentCardId = Number(\n    e.target.closest(\".checklist__card\").id.split(\"-\")[1]\n  );\n\n  projects.forEach((project) => {\n    if (project.id === parentCardId) {\n      project.removeListItem(deleteIndex);\n    }\n  });\n\n  displayCards();\n};\n\nconst addNewListItem = (e, cardId, itemText) => {\n  const newItem = {\n    isChecked: false,\n    text: itemText,\n  };\n\n  projects.forEach((project) => {\n    if (project.id === cardId) {\n      project.addListItem(newItem);\n    }\n  });\n\n  displayCards();\n};\n\nconst toggleCheckState = (e, itemIndex) => {\n  const parentCardId = Number(\n    e.target.closest(\".checklist__card\").id.split(\"-\")[1]\n  );\n  const newState = e.target.checked;\n\n  projects.forEach((project) => {\n    if (project.id === parentCardId) {\n      project.toggleCheckItem(itemIndex, newState);\n    }\n  });\n\n  const listItemParent = e.target.closest(\".checkbox-container\");\n\n  toggleCheckStyle(newState, listItemParent);\n};\n\nconst toggleCheckStyle = (newState, listItemParent) => {\n  if (newState === true) {\n    listItemParent.classList.add(\"item-checked\");\n  } else {\n    listItemParent.classList.remove(\"item-checked\");\n  }\n};\n\nconst toggleColorOptions = (e) => {\n  const colorOptionsContainer = e.target.previousElementSibling;\n  if (colorOptionsContainer.classList.contains(\"hidden\")) {\n    colorOptionsContainer.classList.remove(\"hidden\");\n  } else {\n    colorOptionsContainer.classList.add(\"hidden\");\n  }\n};\n\nconst changeCardColor = (e) => {\n  const cardId = e.target.closest(\".checklist__card\").id.split(\"-\")[1];\n  const parentCard = e.target.closest(\".checklist__card\");\n  const btnId = e.target.id.split(\"-\")[2];\n  let bgColor;\n  btnId === \"1\"\n    ? (bgColor = \"#F7D15F\")\n    : btnId === \"2\"\n    ? (bgColor = \"#FCA397\")\n    : btnId === \"3\"\n    ? (bgColor = \"#79D997\")\n    : (bgColor = \"#D1A8FF\");\n\n  parentCard.style.backgroundColor = bgColor;\n  projects[cardId].changeBgColor(bgColor);\n};\n\nfunction grabInputs() {\n  const deleteCardBtns = document.querySelectorAll(\".delete-card-btn\");\n  deleteCardBtns.forEach((btn) => {\n    btn.addEventListener(\"click\", function () {\n      const parentCardId = Number(this.dataset.deleteCard);\n      deleteProject(parentCardId);\n    });\n  });\n\n  const deleteListItemBtns = document.querySelectorAll(\"[data-delete-index]\");\n\n  deleteListItemBtns.forEach((btn) => {\n    btn.addEventListener(\"click\", function (e) {\n      const itemListIndex = Number(this.dataset.deleteIndex);\n      deleteListItem(e, itemListIndex);\n    });\n  });\n\n  const listCheckBoxes = document.querySelectorAll(\"[data-check-index]\");\n\n  listCheckBoxes.forEach((checkBox) => {\n    checkBox.addEventListener(\"change\", function (e) {\n      const itemListCheckIndex = Number(this.dataset.checkIndex);\n\n      toggleCheckState(e, itemListCheckIndex);\n    });\n  });\n\n  const listInputs = document.querySelectorAll(\"[data-input-item]\");\n\n  listInputs.forEach((item) => {\n    item.addEventListener(\"change\", function (e) {\n      const inputCardId = Number(this.dataset.inputItem);\n      const newItemText = e.target.value;\n\n      addNewListItem(e, inputCardId, newItemText);\n    });\n  });\n\n  const toggleColorBtnsList = document.querySelectorAll(\".toggle-color-btn\");\n  toggleColorBtnsList.forEach((btn) => {\n    btn.addEventListener(\"click\", function (e) {\n      toggleColorOptions(e);\n    });\n  });\n\n  const colorOptionsBtnsList = document.querySelectorAll(\".color-option-btn\");\n  colorOptionsBtnsList.forEach((btn) => {\n    btn.addEventListener(\"click\", function (e) {\n      changeCardColor(e);\n    });\n  });\n}\n\nfunction displayCards() {\n  (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.removeChildren)(heroSection);\n  let current_filter = filterProjects(CURRENT_DISPLAY.state);\n\n  if (current_filter) {\n    current_filter.forEach((project) => {\n      if (project.type === \"checklist\") {\n        heroSection.appendChild(\n          (0,_Components_ChecklistCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n            project.id,\n            project.title,\n            project.listItems,\n            project.bgColor\n          )\n        );\n      } else if (project.type === \"todo\") {\n        heroSection.appendChild((0,_Components_TodoCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(project.id));\n      }\n    });\n  } else {\n    projects.forEach((project) => {\n      if (project.type === \"checklist\") {\n        heroSection.appendChild(\n          (0,_Components_ChecklistCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n            project.id,\n            project.title,\n            project.listItems,\n            project.bgColor\n          )\n        );\n      } else if (project.type === \"todo\") {\n        heroSection.appendChild((0,_Components_TodoCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(project.id));\n      }\n    });\n  }\n\n  grabInputs();\n}\n\nconst updateProjectList = () => {\n  const listTitles = projects.map(({ id, title }) => ({ id, title }));\n  (0,_Components_ProjectListDisplay__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(listTitles);\n};\n\naddForm.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n\n  let type = document.getElementById(\"project-type\");\n  let title = document.querySelector(\".title\");\n  let description = document.querySelector(\".description-text-area\");\n  let dueDate = document.querySelector(\".due-date\");\n  let priority = document.getElementById(\"project-priority\");\n\n  if (title.value.trim() === \"\") {\n    return;\n  }\n\n  const fields = [];\n\n  if (type.value === \"checklist\") {\n    fields.push(type, title);\n    const newChecklist = new _constructors__WEBPACK_IMPORTED_MODULE_1__.CheckList(\n      PROJECTS_ID_COUNTER,\n      type.value,\n      title.value\n    );\n\n    projects.push(newChecklist);\n    PROJECTS_ID_COUNTER++;\n  } else if (type.value === \"todo\") {\n    fields.push(type, title, description, dueDate, priority);\n    const newTodo = new _constructors__WEBPACK_IMPORTED_MODULE_1__.Todo(\n      PROJECTS_ID_COUNTER,\n      type.value,\n      title.value,\n      description.value,\n      dueDate.value,\n      priority.value\n    );\n\n    projects.push(newTodo);\n    PROJECTS_ID_COUNTER++;\n  }\n\n  updateProjectList();\n  (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.fieldsReset)(fields);\n  (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.toggleFormHidden)(selectSection, projectType.value);\n  addForm.submit();\n\n  displayCards();\n});\n\nconst deleteProject = (id) => {\n  const filteredProjects = projects.filter((project) => project.id !== id);\n  projects = filteredProjects;\n  updateProjectList();\n  displayCards();\n};\n\nconst filterProjects = (filter) => {\n  const filteredProjects = projects.filter((project) =>\n    filter ? project.type === filter : project\n  );\n  return filteredProjects;\n};\n\nconst getAllProjectsBtn = document.querySelector(\".sidebar-navigation__all\");\ngetAllProjectsBtn.addEventListener(\"click\", function () {\n  CURRENT_DISPLAY.state = \"\";\n  displayCards();\n});\n\nconst getCheklistsBtn = document.querySelector(\n  \".sidebar-navigation__checklists\"\n);\n\ngetCheklistsBtn.addEventListener(\"click\", function () {\n  CURRENT_DISPLAY.state = \"checklist\";\n  displayCards();\n});\n\nconst getTodosBtn = document.querySelector(\".sidebar-navigation__todos\");\ngetTodosBtn.addEventListener(\"click\", function () {\n  CURRENT_DISPLAY.state = \"todo\";\n  displayCards();\n});\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;