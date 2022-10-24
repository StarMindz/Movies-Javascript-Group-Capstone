"use strict";
(self["webpackChunkmovies_javascript_group_capstone"] = self["webpackChunkmovies_javascript_group_capstone"] || []).push([["index"],{

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
___CSS_LOADER_EXPORT___.push([module.id, ".movies-section {\n  background-attachment: fixed;\n  background-size: cover;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  margin: 30px 10px;\n  justify-content: center;\n  gap: 20px;\n}\n\n.movie {\n  width: 250px;\n  height: 500px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  box-shadow: 2px 2px 5px 2px #d62828;\n  transition: transform 0.8s linear;\n  border-radius: 5px 5px 30px 5px;\n  background-color: #eae2b7;\n  padding:10px;\n  margin-top: 3px;\n  margin-bottom: 3px;\n}\n\nheader {\n  width: 100%;\n  margin: 0;\n}\n\n.movie__img {\n  border-radius: 10px;\n}\n\nh3 {\n  text-align: center;\n}\n\nmain {\n  width: 100%;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.movie__body__description {\n  font-family: \"Roboto\", sans-serif;\n  color: #004163;\n  text-align: center;\n}\n\n.comment-reserve-buttons {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  width: 80%;\n  margin-top: 10px;\n}\n\n.commentButton, .reserveButton {\n  height: 30px;\n}\n\nbody {\n  background-color: black;\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  margin: 0;\n}\n\n.reservations {\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  top: 50%;\n  left: 50%;\n  width: 350px;\n  height: 550px;\n  padding-left: 20px;\n  padding-right: 20px;\n  overflow-y: scroll;\n  transform: translate(-50%, -50%) scale(0);\n  z-index: 10;\n  background-color: #fff;\n  border-radius: 5px;\n  transition: 200ms ease-in-out;\n}\n\n.reservations.active {\n  transform: translate(-50%, -50%) scale(0.85);\n}\n\n#overlay {\n  position: fixed;\n  opacity: 0;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  pointer-events: none;\n  transition: 200ms ease-in-out;\n}\n\n#overlay.active {\n  opacity: 1;\n  pointer-events: all;\n}\n\n.reserve-info {\n  margin-top: 20px;\n}\n\n.reservation-list, .comment-list {\n  margin: 30px;\n}\n\n#username,\n#start-date,\n.reservation-head,\n#end-date,\n#add-button {\n  padding: 10px;\n  margin: 10px;\n}\n\n#cancel-pup-up,\n.cancel-pup-up {\n  font-size: 40px;\n  text-align: end;\n  position: fixed;\n  cursor: pointer;\n  margin: 0.15rem 0.5rem;\n  width: 100%;\n}\n\n.reserve-img,\n.comment-img {\n  display: block;\n  width: 300px;\n  border-radius: 5px;\n  margin-top: 10px;\n}\n\n.comments {\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  top: 50%;\n  left: 50%;\n  width: 350px;\n  height: 550px;\n  padding-left: 20px;\n  padding-right: 20px;\n  overflow-y: scroll;\n  transform: translate(-50%, -50%) scale(0);\n  z-index: 10;\n  background-color: #fff;\n  border-radius: 5px;\n  transition: 200ms ease-in-out;\n}\n\n.page__list {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  text-decoration: none;\n  list-style-type: none;\n}\n\n.comments.active {\n  transform: translate(-50%, -50%) scale(0.85);\n}\n\nfooter {\n  font-family: \"Roboto\", sans-serif;\n  background-color: #003064;\n  color: #eae2b7;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 0;\n}\n\n.footer-head {\n  font-size: 20px;\n}\n\n.footer-text {\n  text-align: center;\n  font-size: 16px;\n}\n\n.license {\n  text-align: center;\n  margin-top: 30px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  gap: 30px;\n  align-items: center!\n}\n\n.creator {\n  font-size: 18px;\n}\n\n.author {\n  color: white;\n  font-size: 16px;\n  text-decoration: none;\n  margin: 5px;\n}\n\n.li-page {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 0.7em;\n  padding: 5px;\n  min-width: 30px;\n  transition: all 0.5s linear;\n  border-radius: 3px;\n  background-color: white;\n  text-align: center;\n  margin: 5px;\n  border: 1px solid black;\n}\n\n.li-page.active {\n  background-color: #003064;\n  color: white;\n}\n\n.username,\n.comment-head,\n#com-text,\n#addC-button {\n  padding: 10px;\n  margin: 10px;\n}\n\n.page {\n  display: flex;\n  flex-direction: column;\n  background-color: #eae2b7;\n  padding: 20px;\n  align-items: center;\n}\n\n.input {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 30px;\n}\n\n@media (min-width: 1200px) {\n  .comments {\n    width: 85%;\n    height: 600px;\n  }\n\n  .reservations {\n    width: 85%;\n    height: 600px;\n  }\n\n  .summary-head {\n    font-size: 24px;\n  }\n\n  .reservations, .comments {\n    padding: 40px;\n  } \n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[".movies-section {\n  background-attachment: fixed;\n  background-size: cover;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  margin: 30px 10px;\n  justify-content: center;\n  gap: 20px;\n}\n\n.movie {\n  width: 250px;\n  height: 500px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  box-shadow: 2px 2px 5px 2px #d62828;\n  transition: transform 0.8s linear;\n  border-radius: 5px 5px 30px 5px;\n  background-color: #eae2b7;\n  padding:10px;\n  margin-top: 3px;\n  margin-bottom: 3px;\n}\n\nheader {\n  width: 100%;\n  margin: 0;\n}\n\n.movie__img {\n  border-radius: 10px;\n}\n\nh3 {\n  text-align: center;\n}\n\nmain {\n  width: 100%;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.movie__body__description {\n  font-family: \"Roboto\", sans-serif;\n  color: #004163;\n  text-align: center;\n}\n\n.comment-reserve-buttons {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  width: 80%;\n  margin-top: 10px;\n}\n\n.commentButton, .reserveButton {\n  height: 30px;\n}\n\nbody {\n  background-color: black;\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  margin: 0;\n}\n\n.reservations {\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  top: 50%;\n  left: 50%;\n  width: 350px;\n  height: 550px;\n  padding-left: 20px;\n  padding-right: 20px;\n  overflow-y: scroll;\n  transform: translate(-50%, -50%) scale(0);\n  z-index: 10;\n  background-color: #fff;\n  border-radius: 5px;\n  transition: 200ms ease-in-out;\n}\n\n.reservations.active {\n  transform: translate(-50%, -50%) scale(0.85);\n}\n\n#overlay {\n  position: fixed;\n  opacity: 0;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  pointer-events: none;\n  transition: 200ms ease-in-out;\n}\n\n#overlay.active {\n  opacity: 1;\n  pointer-events: all;\n}\n\n.reserve-info {\n  margin-top: 20px;\n}\n\n.reservation-list, .comment-list {\n  margin: 30px;\n}\n\n#username,\n#start-date,\n.reservation-head,\n#end-date,\n#add-button {\n  padding: 10px;\n  margin: 10px;\n}\n\n#cancel-pup-up,\n.cancel-pup-up {\n  font-size: 40px;\n  text-align: end;\n  position: fixed;\n  cursor: pointer;\n  margin: 0.15rem 0.5rem;\n  width: 100%;\n}\n\n.reserve-img,\n.comment-img {\n  display: block;\n  width: 300px;\n  border-radius: 5px;\n  margin-top: 10px;\n}\n\n.comments {\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  top: 50%;\n  left: 50%;\n  width: 350px;\n  height: 550px;\n  padding-left: 20px;\n  padding-right: 20px;\n  overflow-y: scroll;\n  transform: translate(-50%, -50%) scale(0);\n  z-index: 10;\n  background-color: #fff;\n  border-radius: 5px;\n  transition: 200ms ease-in-out;\n}\n\n.page__list {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  text-decoration: none;\n  list-style-type: none;\n}\n\n.comments.active {\n  transform: translate(-50%, -50%) scale(0.85);\n}\n\nfooter {\n  font-family: \"Roboto\", sans-serif;\n  background-color: #003064;\n  color: #eae2b7;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 0;\n}\n\n.footer-head {\n  font-size: 20px;\n}\n\n.footer-text {\n  text-align: center;\n  font-size: 16px;\n}\n\n.license {\n  text-align: center;\n  margin-top: 30px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  gap: 30px;\n  align-items: center!\n}\n\n.creator {\n  font-size: 18px;\n}\n\n.author {\n  color: white;\n  font-size: 16px;\n  text-decoration: none;\n  margin: 5px;\n}\n\n.li-page {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 0.7em;\n  padding: 5px;\n  min-width: 30px;\n  transition: all 0.5s linear;\n  border-radius: 3px;\n  background-color: white;\n  text-align: center;\n  margin: 5px;\n  border: 1px solid black;\n}\n\n.li-page.active {\n  background-color: #003064;\n  color: white;\n}\n\n.username,\n.comment-head,\n#com-text,\n#addC-button {\n  padding: 10px;\n  margin: 10px;\n}\n\n.page {\n  display: flex;\n  flex-direction: column;\n  background-color: #eae2b7;\n  padding: 20px;\n  align-items: center;\n}\n\n.input {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 30px;\n}\n\n@media (min-width: 1200px) {\n  .comments {\n    width: 85%;\n    height: 600px;\n  }\n\n  .reservations {\n    width: 85%;\n    height: 600px;\n  }\n\n  .summary-head {\n    font-size: 24px;\n  }\n\n  .reservations, .comments {\n    padding: 40px;\n  } \n}"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_involvementApi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/involvementApi.js */ "./src/modules/involvementApi.js");
/* harmony import */ var _modules_moviesManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/moviesManager.js */ "./src/modules/moviesManager.js");
/* harmony import */ var _modules_tvmazeApi_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tvmazeApi.js */ "./src/modules/tvmazeApi.js");
/* harmony import */ var _modules_page_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/page.js */ "./src/modules/page.js");
/* harmony import */ var _modules_getShowData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/getShowData */ "./src/modules/getShowData.js");
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/logo.png */ "./images/logo.png");





 // eslint-disable-line
 // eslint-disable-line

const moviesContainer = document.getElementById('moviesSection');
const moviesManager = new _modules_moviesManager_js__WEBPACK_IMPORTED_MODULE_2__["default"](moviesContainer, _modules_involvementApi_js__WEBPACK_IMPORTED_MODULE_1__.addLike);

_modules_tvmazeApi_js__WEBPACK_IMPORTED_MODULE_3__.getShows().then((movies) => {
  moviesManager.movies = movies;

  _modules_involvementApi_js__WEBPACK_IMPORTED_MODULE_1__.getLikesHome().then((likes) => {
    moviesManager.likes = likes;
    moviesManager.pageStep = 20;
    moviesManager.display();
    (0,_modules_page_js__WEBPACK_IMPORTED_MODULE_4__["default"])(moviesManager);
  });
});

moviesContainer.addEventListener('click', (event) => {
  const arrMovie = event.path.filter((item) => /movieContainer-\d+/.test(item.id));

  if (
    /starBtn-\d+/.test(event.target.id)
    || /likeBtn-\d+/.test(event.target.id)
    || event.target.classList.contains('movie__footer')
  ) {
    return;
  }

  if (arrMovie.length !== 0) {
    // get the id of the movie
    const movieId = arrMovie[0].id;
    const id = movieId.match(/\d+$/)[0];

    generateModal(id, _modules_getShowData__WEBPACK_IMPORTED_MODULE_5__["default"], getComments); // eslint-disable-line
  }
});


/***/ }),

/***/ "./src/modules/commentApi.js":
/*!***********************************!*\
  !*** ./src/modules/commentApi.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addComment": () => (/* binding */ addComment),
/* harmony export */   "getComment": () => (/* binding */ getComment)
/* harmony export */ });
const BASE_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const GAME_ID = '3bifdQ3qgzMtAvx1V3Pc';

const getComment = async (id) => {
  try {
    const result = await fetch(`${BASE_URL}${GAME_ID}/comments?item_id=${id}`);
    const data = await result.json();
    const { status } = result;

    if (status !== 200) throw new Error('The petition did not return 200');

    return data;
  } catch (error) {
    return [];
  }
};

const addComment = async (id, name, start) => {
  const body = JSON.stringify({
    item_id: id,
    username: name,
    comment: start,
  });

  const headers = { 'Content-type': 'application/json; charset=UTF-8' };

  const result = await fetch(`${BASE_URL}${GAME_ID}/comments`, {
    method: 'POST',
    body,
    headers,
  });
  return result;
};




/***/ }),

/***/ "./src/modules/commentPop.js":
/*!***********************************!*\
  !*** ./src/modules/commentPop.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "countComment": () => (/* binding */ countComment),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tvmazeApi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tvmazeApi.js */ "./src/modules/tvmazeApi.js");
/* harmony import */ var _getShowData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getShowData.js */ "./src/modules/getShowData.js");
/* harmony import */ var _commentApi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commentApi.js */ "./src/modules/commentApi.js");
 // eslint-disable-line



const commentPopUp = async (id) => {
  const shows = await (0,_getShowData_js__WEBPACK_IMPORTED_MODULE_1__["default"])(id);
  const commentss = await (0,_commentApi_js__WEBPACK_IMPORTED_MODULE_2__.getComment)(id);
  const popUpObject = document.querySelector('.comments');
  const overlay = document.getElementById('overlay');

  popUpObject.innerHTML = `
  <p class='cancel-pup-up'>&times;</p>
  <img class='comment-img' src='${shows.image.original}'>
  <div class='comment-info'>
    <h3 class='summary-head'>Synopsis</h3>
    <p class='series-desc'>${shows.summary.replaceAll(
    /<b>|<\/b>|<p>|<\/p>/g,
    '',
  )}</p>
  <h2>Movie Infos</h2>
    <p class='reserve-title'>Name: ${shows.name}</p>
    <p class='reserve-stat'>Length: ${shows.averageRuntime} hours</p>
    <p class='reserve-stat'>Premiered: ${shows.premiered}</p>
    <p class='reserve-stat'>Ended: ${
  shows.ended ? shows.ended : 'still showing'
}</p>
    <p class='reserve-stat'>Language: ${shows.language}</p>
    <p class='reserve-stat'>Ratings: ${
  shows.rating.average ? shows.rating.average : 'not available'
}</p>
  </div>
  <div class='comment-list'>
  <h2> Comments </h2>
  ${
  commentss.length >= 1
    ? commentss
      .map(
        (commentItem) => `<p>${commentItem.creation_date} ${commentItem.username}: ${commentItem.comment} </p>`,
      )
      .join('')
    : '<p>No Comments</p>'
}
  </div>
  <div class = 'input'>
    <h2 class = 'comment-head'>Add a Comment</h2>
    <input type='text' class='username' placeholder='Your name'>
    <input type='text' id='com-text' placeholder='Comments'>
    <br>
    <button type='submit' id='addC-button'>Comment</button>
  </div>
  `;
  popUpObject.classList.add('active');
  overlay.classList.add('active');
  const cancel = document.querySelector('.cancel-pup-up');
  cancel.addEventListener('click', () => {
    popUpObject.classList.remove('active');
    overlay.classList.remove('active');
  });
  const submit = document.getElementById('addC-button');
  const name = document.querySelector('.username');
  const comm = document.getElementById('com-text');

  submit.addEventListener('click', async () => {
    // eslint-disable-line
    const nameValue = name.value;
    const commentValue = comm.value;
    await (0,_commentApi_js__WEBPACK_IMPORTED_MODULE_2__.addComment)(id, nameValue, commentValue);
    name.value = '';
    comm.value = '';
  });

  overlay.addEventListener('click', () => {
    popUpObject.classList.remove('active');
    overlay.classList.remove('active');
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentPopUp);

// Comment Counter
const countComment = async (inp) => {
  const data = await (0,_commentApi_js__WEBPACK_IMPORTED_MODULE_2__.getComment)(inp);
  const count = data.length; // eslint-disable-line
  return count;
};


/***/ }),

/***/ "./src/modules/getShowData.js":
/*!************************************!*\
  !*** ./src/modules/getShowData.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const BASE_URL = 'https://api.tvmaze.com/shows';

// fetch a single show by id
const getShowData = async (id) => {
  try {
    const result = await fetch(`${BASE_URL}/${id}`);
    const data = await result.json();
    return data;
  } catch (error) {
    return error;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getShowData);


/***/ }),

/***/ "./src/modules/involvementApi.js":
/*!***************************************!*\
  !*** ./src/modules/involvementApi.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addLike": () => (/* binding */ addLike),
/* harmony export */   "getLikesHome": () => (/* binding */ getLikesHome)
/* harmony export */ });
const BASE_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const GAME_ID = '3bifdQ3qgzMtAvx1V3Pc';

const getLikesHome = async () => {
  try {
    const result = await fetch(`${BASE_URL}${GAME_ID}/likes`);
    const data = await result.json();
    const { status } = result;

    if (status !== 200) throw new Error('The pitition did not return 200');

    return data;
  } catch (error) {
    return [];
  }
};

const addLike = async (id) => {
  const body = JSON.stringify({ item_id: id });
  const headers = { 'Content-type': 'application/json; charset=UTF-8' };

  const result = await fetch(`${BASE_URL}${GAME_ID}/likes`, {
    method: 'POST',
    body,
    headers,
  });
  return result;
};




/***/ }),

/***/ "./src/modules/moviesManager.js":
/*!**************************************!*\
  !*** ./src/modules/moviesManager.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MoviesManager)
/* harmony export */ });
/* harmony import */ var _commentPop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentPop.js */ "./src/modules/commentPop.js");
/* harmony import */ var _reservePopUp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reservePopUp.js */ "./src/modules/reservePopUp.js");



class MoviesManager {
  #parentContainer;

  #callBackAddLikeAsync;

  #totalItems = 0;

  #actualPage = 1;

  #rangeDisplayed = '';

  #itemsDisplayed = 0;

  #totalPages = 0;

  #pageStep = 30;

  #movies = [];

  #likes = [];

  constructor(container, callBackAddLikeAsync) {
    this.#parentContainer = container;
    this.#callBackAddLikeAsync = callBackAddLikeAsync;
  }

  set movies(movies) {
    this.#movies = movies;
    this.#totalItems = movies.length;
  }

  set likes(likes) {
    this.#likes = likes;
  }

  set pageStep(step) {
    this.#pageStep = step;
  }

  get parentContainer() {
    return this.#parentContainer;
  }

  get totalItems() {
    return this.#totalItems;
  }

  get totalPages() {
    return this.#totalPages;
  }

  get actualPage() {
    return this.#actualPage;
  }

  get itemsDisplayed() {
    return this.#itemsDisplayed;
  }

  get rangeDisplayed() {
    return this.#rangeDisplayed;
  }

  * getArrPages() {
    // eslint-disable-next-line no-plusplus
    for (let i = 1; i <= this.#totalPages; i++) {
      yield i;
    }
  }

  display(page = 1) {
    const arr = this.#paginate(page);

    arr.forEach((item) => {
      const movie = this.#createMovie(item);
      this.#parentContainer.append(movie);
    });
  }

  clearParent() {
    this.#parentContainer.textContent = '';
  }

  #paginate(page = 1) {
    let initialIndex = 0;
    let finalIndex = 0;

    finalIndex = this.#pageStep * page;
    initialIndex = finalIndex - this.#pageStep;

    // in case final index is out of the boundaries of the arr
    if (finalIndex > this.#totalItems) {
      finalIndex = this.#totalItems;
    }

    this.#actualPage = page;
    this.#itemsDisplayed = finalIndex - initialIndex;
    this.#rangeDisplayed = `${initialIndex} to ${finalIndex}`;
    this.#totalPages = Math.ceil(this.#totalItems / this.#pageStep) || 0;
    return this.#movies.slice(initialIndex, finalIndex);
  }

  // eslint-disable-next-line class-methods-use-this
  #createMovie(data) {
    const movieContainer = document.createElement('article');
    const img = document.createElement('img');
    const movieBody = this.#createMovieBody(data);
    const footerMovie = this.#createFooter(data.id);
    const footerButtons = this.#createButton(data.id);

    movieContainer.className = 'movie';
    img.className = 'movie__img';

    img.src = data.image.medium;

    movieContainer.id = `movieContainer-${data.id}`;

    movieContainer.append(img, movieBody, footerMovie, footerButtons);
    return movieContainer;
  }

  // eslint-disable-next-line class-methods-use-this
  #createMovieBody({ name, summary }) {
    const movieBody = document.createElement('section');
    const title = document.createElement('h3');
    const description = document.createElement('p');

    movieBody.className = 'movie__body';
    title.className = 'movie__body__title';
    description.className = 'movie__body__description';

    summary = summary.replace(/<[^b]>|<\/[^b]>/g, '');

    title.textContent = name;
    description.innerHTML = `${summary.substring(0, 70)}...`;

    movieBody.append(title, description);
    return movieBody;
  }

  // eslint-disable-next-line class-methods-use-this
  #createFooter(id) {
    // eslint-disable-next-line camelcase
    const arrLikes = this.#likes.filter(({ item_id }) => item_id === id);

    const footer = document.createElement('section');
    const auxiliarDiv1 = document.createElement('div');
    const auxiliarDiv2 = document.createElement('div');
    const starInfo = document.createElement('span');
    const likeInfo = document.createElement('span');
    const starIcon = document.createElement('i');
    const likeIcon = document.createElement('i');
    const buttonCom = document.createElement('button');
    const buttonRes = document.createElement('button1');

    footer.className = 'movie__footer';
    starIcon.className = 'fa-solid fa-star star-btn';
    likeIcon.className = 'fa-solid fa-heart like-btn';
    starInfo.className = 'info';
    buttonCom.className = 'btn';
    buttonRes.className = 'btn';
    // starInfo.id = 'starInfo';
    // likeInfo.id = 'likeInfo';
    starIcon.id = `starBtn-${id}`;
    likeIcon.id = `likeBtn-${id}`;

    // check if the movie has info about likes first
    if (arrLikes.length !== 0) {
      const { likes, stars } = arrLikes[0];
      starInfo.textContent = stars;
      likeInfo.textContent = likes;
    }

    likeIcon.addEventListener('click', () => {
      likeIcon.classList.add('fa-beat', 'active');
      likeIcon.style = '--fa-animation-duration: 0.5s;';
      const promise = this.#callBackAddLikeAsync(id);

      promise.then((result) => {
        const { status } = result;
        if (status === 201) {
          const previousLikes = parseInt(likeInfo.textContent, 10) || 0;
          likeInfo.textContent = 'added!';

          setTimeout(() => {
            likeInfo.textContent = previousLikes + 1;
          }, 1200);
        }
      });

      promise.finally(() => {
        likeIcon.classList.remove('fa-beat', 'active');
        likeIcon.style = '';
      });
    });

    auxiliarDiv1.append(starInfo, starIcon);
    auxiliarDiv2.append(likeInfo, likeIcon);

    footer.append(auxiliarDiv2);
    return footer;
  }

  #createButton(id) { //eslint-disable-line
    const buttonsDiv = document.createElement('div');
    buttonsDiv.className = "comment-reserve-buttons";
    const comment = document.createElement('button');
    const reserves = document.createElement('button');
    const lineBreak = document.createElement('br');
    comment.className = 'commentButton';
    reserves.className = 'reserveButton';
    comment.innerHTML = 'Comments';
    reserves.innerHTML = 'Reservations';
    comment.id = `commentBtn-${id}`;
    reserves.id = `reserveBtn-${id}`;
    buttonsDiv.appendChild(comment);
    buttonsDiv.appendChild(lineBreak);
    buttonsDiv.appendChild(reserves);

    comment.addEventListener('click', (element) => {
      const itemId = element.target.id.split('-')[1];
      (0,_commentPop_js__WEBPACK_IMPORTED_MODULE_0__["default"])(itemId);
    });
    reserves.addEventListener('click', (element) => {
      const itemId = element.target.id.split('-')[1];
      (0,_reservePopUp_js__WEBPACK_IMPORTED_MODULE_1__["default"])(itemId);
    });
    return buttonsDiv;
  }
}


/***/ }),

/***/ "./src/modules/page.js":
/*!*****************************!*\
  !*** ./src/modules/page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const pageInfo = document.getElementById('pageInfo');
const pageList = document.getElementById('pageList');
const text1 = document.createElement('span');
const text2 = document.createElement('span');
pageInfo.append(text1, text2);

const runAnimation = (parentContainer) => {
  // add a class to all the cards
  const movies = parentContainer.querySelectorAll('.movie');
  movies.forEach((movie) => movie.classList.add('animationOut'));

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 500);
  });
};

const pageClickHandler = (moviesManager, li, page) => {
  const { parentContainer } = moviesManager;
  // select the previous element with the class active and remove it
  const arrItems = pageList.querySelectorAll('.active');
  arrItems.forEach((item) => item.classList.remove('active'));
  li.classList.add('active');

  runAnimation(parentContainer).then(() => {
    window.scrollTo(0, 0);
    moviesManager.clearParent();
    moviesManager.display(page);
    text1.textContent = `page: ${moviesManager.actualPage}, showing  ${moviesManager.itemsDisplayed} titles`;
    text2.textContent = ` from ${moviesManager.rangeDisplayed}. Total titles: ${moviesManager.totalItems}`;
    window.history.pushState(
      { prevUrl: window.location.href },
      'title',
      `page-${page}`,
    );
  });
};

const createPages = (moviesManager) => {
  const arrPages = [...moviesManager.getArrPages()];
  text1.textContent = `page:  ${moviesManager.actualPage}, showing ${moviesManager.itemsDisplayed} titles`;
  text2.textContent = ` from ${moviesManager.rangeDisplayed}. Total titles: ${moviesManager.totalItems}`;

  arrPages.forEach((page) => {
    const li = document.createElement('li');
    li.className = 'li-page';
    li.textContent = page;

    li.addEventListener('click', () => {
      pageClickHandler(moviesManager, li, page);
    });

    pageList.append(li);
  });

  const first = pageList.querySelectorAll('li')[0];
  first.classList.add('active');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPages);


/***/ }),

/***/ "./src/modules/reserveInvolvementApi.js":
/*!**********************************************!*\
  !*** ./src/modules/reserveInvolvementApi.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addReservation": () => (/* binding */ addReservation),
/* harmony export */   "getReservation": () => (/* binding */ getReservation)
/* harmony export */ });
const BASE_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const GAME_ID = '3bifdQ3qgzMtAvx1V3Pc';

const getReservation = async (id) => {
  try {
    const result = await fetch(
      `${BASE_URL}${GAME_ID}/reservations?item_id=${id}`,
    );
    const data = await result.json();
    const { status } = result;

    if (status !== 200) throw new Error('The petition did not return 200');

    return data;
  } catch (error) {
    return [];
  }
};

const addReservation = async (id, name, start, end) => {
  const body = JSON.stringify({
    item_id: id,
    username: name,
    date_start: start,
    date_end: end,
  });

  const headers = { 'Content-type': 'application/json; charset=UTF-8' };

  const result = await fetch(`${BASE_URL}${GAME_ID}/reservations`, {
    method: 'POST',
    body,
    headers,
  });
  return result;
};




/***/ }),

/***/ "./src/modules/reservePopUp.js":
/*!*************************************!*\
  !*** ./src/modules/reservePopUp.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getShowData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getShowData.js */ "./src/modules/getShowData.js");
/* harmony import */ var _reserveInvolvementApi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reserveInvolvementApi.js */ "./src/modules/reserveInvolvementApi.js");



const reservePopUp = async (id) => {
  const shows = await (0,_getShowData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(id);
  const reservations = await (0,_reserveInvolvementApi_js__WEBPACK_IMPORTED_MODULE_1__.getReservation)(id);
  const popUpObject = document.querySelector('.reservations');
  const overlay = document.getElementById('overlay');

  popUpObject.innerHTML = `
  <p id='cancel-pup-up'>&times;</p>
  <img class='reserve-img' src='${shows.image.original}'>
  <div class='reserve-info'>
    <h3 class='summary-head'>Movie Infos</h3>
    <p class='reserve-title'>Name: ${shows.name}</p>
    <p class='reserve-stat'>Length: ${shows.averageRuntime} hours</p>
    <p class='reserve-stat'>Premiered: ${shows.premiered}</p>
    <p class='reserve-stat'>Ended: ${
  shows.ended ? shows.ended : 'still showing'
}</p>
    <p class='reserve-stat'>Language: ${shows.language}</p>
    <p class='reserve-stat'>Ratings: ${
  shows.rating.average ? shows.rating.average : 'not available'
}</p>
<p class='series-desc'>${shows.summary.replaceAll(
  /<b>|<\/b>|<p>|<\/p>/g,
  '',
)}</p>
  </div>
  <div class='reservation-list'>
  <h2>Reservations</h2>
  ${
  reservations.length >= 1
    ? reservations
      .map(
            (reserveItem) =>
              `<p>${reserveItem.date_start} to ${reserveItem.date_end} by ${reserveItem.username}</p>`
          )
          .join('')
      : '<p>No Reservations</p>'
  }
  </div>
  <div class = 'input'>
    <h2 class= 'reservation-head' >Add a reservation</h2>
    <input type='text' id='username' placeholder='Your name'>
    <input type='text' id='start-date' placeholder='Start Date'>
    <input type='text' id='end-date' placeholder='End Date'>
    <br>
    <button type='submit' id='add-button'>Reserve</button>
  </div>
  `;
  popUpObject.classList.add('active');
  overlay.classList.add('active');
  const cancel = document.querySelector('#cancel-pup-up');
  cancel.addEventListener('click', () => {
    popUpObject.classList.remove('active');
    overlay.classList.remove('active');
  });
  const submit = document.getElementById('add-button');
  const name = document.getElementById('username');
  const start = document.getElementById('start-date');
  const end = document.getElementById('end-date');

  submit.addEventListener('click', async () => {
    const nameValue = name.value;
    const startValue = start.value;
    const endValue = end.value;
    await (0,_reserveInvolvementApi_js__WEBPACK_IMPORTED_MODULE_1__.addReservation)(id, nameValue, startValue, endValue);
    name.value = '';
    start.value = '';
    end.value = '';
  });

  overlay.addEventListener('click', () => {
    popUpObject.classList.remove('active');
    overlay.classList.remove('active');
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reservePopUp);


/***/ }),

/***/ "./src/modules/tvmazeApi.js":
/*!**********************************!*\
  !*** ./src/modules/tvmazeApi.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getShows": () => (/* binding */ getShows)
/* harmony export */ });
const BASE_URL = 'https://api.tvmaze.com/shows';

const getShows = async () => {
  try {
    const result = await fetch(BASE_URL);
    const data = await result.json();
    const { status } = result;

    if (status !== 200) throw new Error('The pitition did not return 200');

    return data;
  } catch (error) {
    return [];
  }
};

// eslint-disable-next-line import/prefer-default-export



/***/ }),

/***/ "./images/logo.png":
/*!*************************!*\
  !*** ./images/logo.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a0f5986493b882214f5c.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sU0FBUyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxLQUFLLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxRQUFRLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FB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QUc7QUFDSDs7QUFFQSxpRUFBZSxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQy9FNUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFNBQVM7O0FBRXJCOztBQUVBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNvQiIsInNvdXJjZXMiOlsid2VicGFjazovL21vdmllcy1qYXZhc2NyaXB0LWdyb3VwLWNhcHN0b25lLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9tb3ZpZXMtamF2YXNjcmlwdC1ncm91cC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbW92aWVzLWphdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9tb3ZpZXMtamF2YXNjcmlwdC1ncm91cC1jYXBzdG9uZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9tb3ZpZXMtamF2YXNjcmlwdC1ncm91cC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9tb3ZpZXMtamF2YXNjcmlwdC1ncm91cC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbW92aWVzLWphdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbW92aWVzLWphdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbW92aWVzLWphdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9tb3ZpZXMtamF2YXNjcmlwdC1ncm91cC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL21vdmllcy1qYXZhc2NyaXB0LWdyb3VwLWNhcHN0b25lLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL21vdmllcy1qYXZhc2NyaXB0LWdyb3VwLWNhcHN0b25lLy4vc3JjL21vZHVsZXMvY29tbWVudEFwaS5qcyIsIndlYnBhY2s6Ly9tb3ZpZXMtamF2YXNjcmlwdC1ncm91cC1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2NvbW1lbnRQb3AuanMiLCJ3ZWJwYWNrOi8vbW92aWVzLWphdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9nZXRTaG93RGF0YS5qcyIsIndlYnBhY2s6Ly9tb3ZpZXMtamF2YXNjcmlwdC1ncm91cC1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2ludm9sdmVtZW50QXBpLmpzIiwid2VicGFjazovL21vdmllcy1qYXZhc2NyaXB0LWdyb3VwLWNhcHN0b25lLy4vc3JjL21vZHVsZXMvbW92aWVzTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9tb3ZpZXMtamF2YXNjcmlwdC1ncm91cC1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL3BhZ2UuanMiLCJ3ZWJwYWNrOi8vbW92aWVzLWphdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9yZXNlcnZlSW52b2x2ZW1lbnRBcGkuanMiLCJ3ZWJwYWNrOi8vbW92aWVzLWphdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9yZXNlcnZlUG9wVXAuanMiLCJ3ZWJwYWNrOi8vbW92aWVzLWphdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy90dm1hemVBcGkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubW92aWVzLXNlY3Rpb24ge1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIG1hcmdpbjogMzBweCAxMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5tb3ZpZSB7XFxuICB3aWR0aDogMjUwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMnB4ICNkNjI4Mjg7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC44cyBsaW5lYXI7XFxuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDMwcHggNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhZTJiNztcXG4gIHBhZGRpbmc6MTBweDtcXG4gIG1hcmdpbi10b3A6IDNweDtcXG4gIG1hcmdpbi1ib3R0b206IDNweDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ubW92aWVfX2ltZyB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG5oMyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbm1haW4ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tb3ZpZV9fYm9keV9fZGVzY3JpcHRpb24ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICMwMDQxNjM7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jb21tZW50LXJlc2VydmUtYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLmNvbW1lbnRCdXR0b24sIC5yZXNlcnZlQnV0dG9uIHtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLnJlc2VydmF0aW9ucyB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHdpZHRoOiAzNTBweDtcXG4gIGhlaWdodDogNTUwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCk7XFxuICB6LWluZGV4OiAxMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnJlc2VydmF0aW9ucy5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMC44NSk7XFxufVxcblxcbiNvdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIG9wYWNpdHk6IDA7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4jb3ZlcmxheS5hY3RpdmUge1xcbiAgb3BhY2l0eTogMTtcXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxufVxcblxcbi5yZXNlcnZlLWluZm8ge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLnJlc2VydmF0aW9uLWxpc3QsIC5jb21tZW50LWxpc3Qge1xcbiAgbWFyZ2luOiAzMHB4O1xcbn1cXG5cXG4jdXNlcm5hbWUsXFxuI3N0YXJ0LWRhdGUsXFxuLnJlc2VydmF0aW9uLWhlYWQsXFxuI2VuZC1kYXRlLFxcbiNhZGQtYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbiNjYW5jZWwtcHVwLXVwLFxcbi5jYW5jZWwtcHVwLXVwIHtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIHRleHQtYWxpZ246IGVuZDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMC4xNXJlbSAwLjVyZW07XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnJlc2VydmUtaW1nLFxcbi5jb21tZW50LWltZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5jb21tZW50cyB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHdpZHRoOiAzNTBweDtcXG4gIGhlaWdodDogNTUwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCk7XFxuICB6LWluZGV4OiAxMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnBhZ2VfX2xpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbi5jb21tZW50cy5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMC44NSk7XFxufVxcblxcbmZvb3RlciB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzMDY0O1xcbiAgY29sb3I6ICNlYWUyYjc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5mb290ZXItaGVhZCB7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5mb290ZXItdGV4dCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5saWNlbnNlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogMzBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIhXFxufVxcblxcbi5jcmVhdG9yIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLmF1dGhvciB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBtYXJnaW46IDVweDtcXG59XFxuXFxuLmxpLXBhZ2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAwLjdlbTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIG1pbi13aWR0aDogMzBweDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGxpbmVhcjtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmxpLXBhZ2UuYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDMwNjQ7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi51c2VybmFtZSxcXG4uY29tbWVudC1oZWFkLFxcbiNjb20tdGV4dCxcXG4jYWRkQy1idXR0b24ge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLnBhZ2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlMmI3O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pbnB1dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcXG4gIC5jb21tZW50cyB7XFxuICAgIHdpZHRoOiA4NSU7XFxuICAgIGhlaWdodDogNjAwcHg7XFxuICB9XFxuXFxuICAucmVzZXJ2YXRpb25zIHtcXG4gICAgd2lkdGg6IDg1JTtcXG4gICAgaGVpZ2h0OiA2MDBweDtcXG4gIH1cXG5cXG4gIC5zdW1tYXJ5LWhlYWQge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICB9XFxuXFxuICAucmVzZXJ2YXRpb25zLCAuY29tbWVudHMge1xcbiAgICBwYWRkaW5nOiA0MHB4O1xcbiAgfSBcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4v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OztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGVBQWU7RUFDZiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7Ozs7RUFJRSxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsYUFBYTtFQUNmOztFQUVBO0lBQ0UsVUFBVTtJQUNWLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubW92aWVzLXNlY3Rpb24ge1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIG1hcmdpbjogMzBweCAxMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5tb3ZpZSB7XFxuICB3aWR0aDogMjUwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMnB4ICNkNjI4Mjg7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC44cyBsaW5lYXI7XFxuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDMwcHggNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhZTJiNztcXG4gIHBhZGRpbmc6MTBweDtcXG4gIG1hcmdpbi10b3A6IDNweDtcXG4gIG1hcmdpbi1ib3R0b206IDNweDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ubW92aWVfX2ltZyB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG5oMyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbm1haW4ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tb3ZpZV9fYm9keV9fZGVzY3JpcHRpb24ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICMwMDQxNjM7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jb21tZW50LXJlc2VydmUtYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLmNvbW1lbnRCdXR0b24sIC5yZXNlcnZlQnV0dG9uIHtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLnJlc2VydmF0aW9ucyB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHdpZHRoOiAzNTBweDtcXG4gIGhlaWdodDogNTUwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCk7XFxuICB6LWluZGV4OiAxMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnJlc2VydmF0aW9ucy5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMC44NSk7XFxufVxcblxcbiNvdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIG9wYWNpdHk6IDA7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4jb3ZlcmxheS5hY3RpdmUge1xcbiAgb3BhY2l0eTogMTtcXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxufVxcblxcbi5yZXNlcnZlLWluZm8ge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLnJlc2VydmF0aW9uLWxpc3QsIC5jb21tZW50LWxpc3Qge1xcbiAgbWFyZ2luOiAzMHB4O1xcbn1cXG5cXG4jdXNlcm5hbWUsXFxuI3N0YXJ0LWRhdGUsXFxuLnJlc2VydmF0aW9uLWhlYWQsXFxuI2VuZC1kYXRlLFxcbiNhZGQtYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbiNjYW5jZWwtcHVwLXVwLFxcbi5jYW5jZWwtcHVwLXVwIHtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIHRleHQtYWxpZ246IGVuZDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMC4xNXJlbSAwLjVyZW07XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnJlc2VydmUtaW1nLFxcbi5jb21tZW50LWltZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5jb21tZW50cyB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHdpZHRoOiAzNTBweDtcXG4gIGhlaWdodDogNTUwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCk7XFxuICB6LWluZGV4OiAxMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnBhZ2VfX2xpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbi5jb21tZW50cy5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMC44NSk7XFxufVxcblxcbmZvb3RlciB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzMDY0O1xcbiAgY29sb3I6ICNlYWUyYjc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5mb290ZXItaGVhZCB7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5mb290ZXItdGV4dCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5saWNlbnNlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogMzBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIhXFxufVxcblxcbi5jcmVhdG9yIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLmF1dGhvciB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBtYXJnaW46IDVweDtcXG59XFxuXFxuLmxpLXBhZ2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAwLjdlbTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIG1pbi13aWR0aDogMzBweDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGxpbmVhcjtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmxpLXBhZ2UuYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDMwNjQ7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi51c2VybmFtZSxcXG4uY29tbWVudC1oZWFkLFxcbiNjb20tdGV4dCxcXG4jYWRkQy1idXR0b24ge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLnBhZ2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlMmI3O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pbnB1dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcXG4gIC5jb21tZW50cyB7XFxuICAgIHdpZHRoOiA4NSU7XFxuICAgIGhlaWdodDogNjAwcHg7XFxuICB9XFxuXFxuICAucmVzZXJ2YXRpb25zIHtcXG4gICAgd2lkdGg6IDg1JTtcXG4gICAgaGVpZ2h0OiA2MDBweDtcXG4gIH1cXG5cXG4gIC5zdW1tYXJ5LWhlYWQge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICB9XFxuXFxuICAucmVzZXJ2YXRpb25zLCAuY29tbWVudHMge1xcbiAgICBwYWRkaW5nOiA0MHB4O1xcbiAgfSBcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCAqIGFzIGludkFwaSBmcm9tICcuL21vZHVsZXMvaW52b2x2ZW1lbnRBcGkuanMnO1xuaW1wb3J0IE1vdmllc01hbmFnZXIgZnJvbSAnLi9tb2R1bGVzL21vdmllc01hbmFnZXIuanMnO1xuaW1wb3J0ICogYXMgdHZNYXplQXBpIGZyb20gJy4vbW9kdWxlcy90dm1hemVBcGkuanMnO1xuaW1wb3J0IGNyZWF0ZVBhZ2VzIGZyb20gJy4vbW9kdWxlcy9wYWdlLmpzJztcbmltcG9ydCBnZXRTaG93RGF0YSBmcm9tICcuL21vZHVsZXMvZ2V0U2hvd0RhdGEnOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5pbXBvcnQgbG9nbyBmcm9tICcuLi9pbWFnZXMvbG9nby5wbmcnOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbmNvbnN0IG1vdmllc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb3ZpZXNTZWN0aW9uJyk7XG5jb25zdCBtb3ZpZXNNYW5hZ2VyID0gbmV3IE1vdmllc01hbmFnZXIobW92aWVzQ29udGFpbmVyLCBpbnZBcGkuYWRkTGlrZSk7XG5cbnR2TWF6ZUFwaS5nZXRTaG93cygpLnRoZW4oKG1vdmllcykgPT4ge1xuICBtb3ZpZXNNYW5hZ2VyLm1vdmllcyA9IG1vdmllcztcblxuICBpbnZBcGkuZ2V0TGlrZXNIb21lKCkudGhlbigobGlrZXMpID0+IHtcbiAgICBtb3ZpZXNNYW5hZ2VyLmxpa2VzID0gbGlrZXM7XG4gICAgbW92aWVzTWFuYWdlci5wYWdlU3RlcCA9IDIwO1xuICAgIG1vdmllc01hbmFnZXIuZGlzcGxheSgpO1xuICAgIGNyZWF0ZVBhZ2VzKG1vdmllc01hbmFnZXIpO1xuICB9KTtcbn0pO1xuXG5tb3ZpZXNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgY29uc3QgYXJyTW92aWUgPSBldmVudC5wYXRoLmZpbHRlcigoaXRlbSkgPT4gL21vdmllQ29udGFpbmVyLVxcZCsvLnRlc3QoaXRlbS5pZCkpO1xuXG4gIGlmIChcbiAgICAvc3RhckJ0bi1cXGQrLy50ZXN0KGV2ZW50LnRhcmdldC5pZClcbiAgICB8fCAvbGlrZUJ0bi1cXGQrLy50ZXN0KGV2ZW50LnRhcmdldC5pZClcbiAgICB8fCBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb3ZpZV9fZm9vdGVyJylcbiAgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGFyck1vdmllLmxlbmd0aCAhPT0gMCkge1xuICAgIC8vIGdldCB0aGUgaWQgb2YgdGhlIG1vdmllXG4gICAgY29uc3QgbW92aWVJZCA9IGFyck1vdmllWzBdLmlkO1xuICAgIGNvbnN0IGlkID0gbW92aWVJZC5tYXRjaCgvXFxkKyQvKVswXTtcblxuICAgIGdlbmVyYXRlTW9kYWwoaWQsIGdldFNob3dEYXRhLCBnZXRDb21tZW50cyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgfVxufSk7XG4iLCJjb25zdCBCQVNFX1VSTCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8nO1xuY29uc3QgR0FNRV9JRCA9ICczYmlmZFEzcWd6TXRBdngxVjNQYyc7XG5cbmNvbnN0IGdldENvbW1lbnQgPSBhc3luYyAoaWQpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaChgJHtCQVNFX1VSTH0ke0dBTUVfSUR9L2NvbW1lbnRzP2l0ZW1faWQ9JHtpZH1gKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzdWx0Lmpzb24oKTtcbiAgICBjb25zdCB7IHN0YXR1cyB9ID0gcmVzdWx0O1xuXG4gICAgaWYgKHN0YXR1cyAhPT0gMjAwKSB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBwZXRpdGlvbiBkaWQgbm90IHJldHVybiAyMDAnKTtcblxuICAgIHJldHVybiBkYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBbXTtcbiAgfVxufTtcblxuY29uc3QgYWRkQ29tbWVudCA9IGFzeW5jIChpZCwgbmFtZSwgc3RhcnQpID0+IHtcbiAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICBpdGVtX2lkOiBpZCxcbiAgICB1c2VybmFtZTogbmFtZSxcbiAgICBjb21tZW50OiBzdGFydCxcbiAgfSk7XG5cbiAgY29uc3QgaGVhZGVycyA9IHsgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyB9O1xuXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKGAke0JBU0VfVVJMfSR7R0FNRV9JRH0vY29tbWVudHNgLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keSxcbiAgICBoZWFkZXJzLFxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCB7IGFkZENvbW1lbnQsIGdldENvbW1lbnQgfTtcbiIsImltcG9ydCB7IGdldFNob3dzIH0gZnJvbSAnLi90dm1hemVBcGkuanMnOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5pbXBvcnQgZ2V0U2hvd0RhdGEgZnJvbSAnLi9nZXRTaG93RGF0YS5qcyc7XG5pbXBvcnQgeyBnZXRDb21tZW50LCBhZGRDb21tZW50IH0gZnJvbSAnLi9jb21tZW50QXBpLmpzJztcblxuY29uc3QgY29tbWVudFBvcFVwID0gYXN5bmMgKGlkKSA9PiB7XG4gIGNvbnN0IHNob3dzID0gYXdhaXQgZ2V0U2hvd0RhdGEoaWQpO1xuICBjb25zdCBjb21tZW50c3MgPSBhd2FpdCBnZXRDb21tZW50KGlkKTtcbiAgY29uc3QgcG9wVXBPYmplY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudHMnKTtcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVybGF5Jyk7XG5cbiAgcG9wVXBPYmplY3QuaW5uZXJIVE1MID0gYFxuICA8cCBjbGFzcz0nY2FuY2VsLXB1cC11cCc+JnRpbWVzOzwvcD5cbiAgPGltZyBjbGFzcz0nY29tbWVudC1pbWcnIHNyYz0nJHtzaG93cy5pbWFnZS5vcmlnaW5hbH0nPlxuICA8ZGl2IGNsYXNzPSdjb21tZW50LWluZm8nPlxuICAgIDxoMyBjbGFzcz0nc3VtbWFyeS1oZWFkJz5TeW5vcHNpczwvaDM+XG4gICAgPHAgY2xhc3M9J3Nlcmllcy1kZXNjJz4ke3Nob3dzLnN1bW1hcnkucmVwbGFjZUFsbChcbiAgICAvPGI+fDxcXC9iPnw8cD58PFxcL3A+L2csXG4gICAgJycsXG4gICl9PC9wPlxuICA8aDI+TW92aWUgSW5mb3M8L2gyPlxuICAgIDxwIGNsYXNzPSdyZXNlcnZlLXRpdGxlJz5OYW1lOiAke3Nob3dzLm5hbWV9PC9wPlxuICAgIDxwIGNsYXNzPSdyZXNlcnZlLXN0YXQnPkxlbmd0aDogJHtzaG93cy5hdmVyYWdlUnVudGltZX0gaG91cnM8L3A+XG4gICAgPHAgY2xhc3M9J3Jlc2VydmUtc3RhdCc+UHJlbWllcmVkOiAke3Nob3dzLnByZW1pZXJlZH08L3A+XG4gICAgPHAgY2xhc3M9J3Jlc2VydmUtc3RhdCc+RW5kZWQ6ICR7XG4gIHNob3dzLmVuZGVkID8gc2hvd3MuZW5kZWQgOiAnc3RpbGwgc2hvd2luZydcbn08L3A+XG4gICAgPHAgY2xhc3M9J3Jlc2VydmUtc3RhdCc+TGFuZ3VhZ2U6ICR7c2hvd3MubGFuZ3VhZ2V9PC9wPlxuICAgIDxwIGNsYXNzPSdyZXNlcnZlLXN0YXQnPlJhdGluZ3M6ICR7XG4gIHNob3dzLnJhdGluZy5hdmVyYWdlID8gc2hvd3MucmF0aW5nLmF2ZXJhZ2UgOiAnbm90IGF2YWlsYWJsZSdcbn08L3A+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPSdjb21tZW50LWxpc3QnPlxuICA8aDI+IENvbW1lbnRzIDwvaDI+XG4gICR7XG4gIGNvbW1lbnRzcy5sZW5ndGggPj0gMVxuICAgID8gY29tbWVudHNzXG4gICAgICAubWFwKFxuICAgICAgICAoY29tbWVudEl0ZW0pID0+IGA8cD4ke2NvbW1lbnRJdGVtLmNyZWF0aW9uX2RhdGV9ICR7Y29tbWVudEl0ZW0udXNlcm5hbWV9OiAke2NvbW1lbnRJdGVtLmNvbW1lbnR9IDwvcD5gLFxuICAgICAgKVxuICAgICAgLmpvaW4oJycpXG4gICAgOiAnPHA+Tm8gQ29tbWVudHM8L3A+J1xufVxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcyA9ICdpbnB1dCc+XG4gICAgPGgyIGNsYXNzID0gJ2NvbW1lbnQtaGVhZCc+QWRkIGEgQ29tbWVudDwvaDI+XG4gICAgPGlucHV0IHR5cGU9J3RleHQnIGNsYXNzPSd1c2VybmFtZScgcGxhY2Vob2xkZXI9J1lvdXIgbmFtZSc+XG4gICAgPGlucHV0IHR5cGU9J3RleHQnIGlkPSdjb20tdGV4dCcgcGxhY2Vob2xkZXI9J0NvbW1lbnRzJz5cbiAgICA8YnI+XG4gICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIGlkPSdhZGRDLWJ1dHRvbic+Q29tbWVudDwvYnV0dG9uPlxuICA8L2Rpdj5cbiAgYDtcbiAgcG9wVXBPYmplY3QuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIGNvbnN0IGNhbmNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwtcHVwLXVwJyk7XG4gIGNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBwb3BVcE9iamVjdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICB9KTtcbiAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZEMtYnV0dG9uJyk7XG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlcm5hbWUnKTtcbiAgY29uc3QgY29tbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb20tdGV4dCcpO1xuXG4gIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgY29uc3QgbmFtZVZhbHVlID0gbmFtZS52YWx1ZTtcbiAgICBjb25zdCBjb21tZW50VmFsdWUgPSBjb21tLnZhbHVlO1xuICAgIGF3YWl0IGFkZENvbW1lbnQoaWQsIG5hbWVWYWx1ZSwgY29tbWVudFZhbHVlKTtcbiAgICBuYW1lLnZhbHVlID0gJyc7XG4gICAgY29tbS52YWx1ZSA9ICcnO1xuICB9KTtcblxuICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHBvcFVwT2JqZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tbWVudFBvcFVwO1xuXG4vLyBDb21tZW50IENvdW50ZXJcbmV4cG9ydCBjb25zdCBjb3VudENvbW1lbnQgPSBhc3luYyAoaW5wKSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRDb21tZW50KGlucCk7XG4gIGNvbnN0IGNvdW50ID0gZGF0YS5sZW5ndGg7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgcmV0dXJuIGNvdW50O1xufTtcbiIsImNvbnN0IEJBU0VfVVJMID0gJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2hvd3MnO1xuXG4vLyBmZXRjaCBhIHNpbmdsZSBzaG93IGJ5IGlkXG5jb25zdCBnZXRTaG93RGF0YSA9IGFzeW5jIChpZCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKGAke0JBU0VfVVJMfS8ke2lkfWApO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXN1bHQuanNvbigpO1xuICAgIHJldHVybiBkYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBlcnJvcjtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0U2hvd0RhdGE7XG4iLCJjb25zdCBCQVNFX1VSTCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8nO1xuY29uc3QgR0FNRV9JRCA9ICczYmlmZFEzcWd6TXRBdngxVjNQYyc7XG5cbmNvbnN0IGdldExpa2VzSG9tZSA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaChgJHtCQVNFX1VSTH0ke0dBTUVfSUR9L2xpa2VzYCk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3VsdC5qc29uKCk7XG4gICAgY29uc3QgeyBzdGF0dXMgfSA9IHJlc3VsdDtcblxuICAgIGlmIChzdGF0dXMgIT09IDIwMCkgdGhyb3cgbmV3IEVycm9yKCdUaGUgcGl0aXRpb24gZGlkIG5vdCByZXR1cm4gMjAwJyk7XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbn07XG5cbmNvbnN0IGFkZExpa2UgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHsgaXRlbV9pZDogaWQgfSk7XG4gIGNvbnN0IGhlYWRlcnMgPSB7ICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcgfTtcblxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaChgJHtCQVNFX1VSTH0ke0dBTUVfSUR9L2xpa2VzYCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGJvZHksXG4gICAgaGVhZGVycyxcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgeyBhZGRMaWtlLCBnZXRMaWtlc0hvbWUgfTtcbiIsImltcG9ydCBjb21tZW50UG9wVXAgZnJvbSAnLi9jb21tZW50UG9wLmpzJztcbmltcG9ydCByZXNlcnZlUG9wVXAgZnJvbSAnLi9yZXNlcnZlUG9wVXAuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3ZpZXNNYW5hZ2VyIHtcbiAgI3BhcmVudENvbnRhaW5lcjtcblxuICAjY2FsbEJhY2tBZGRMaWtlQXN5bmM7XG5cbiAgI3RvdGFsSXRlbXMgPSAwO1xuXG4gICNhY3R1YWxQYWdlID0gMTtcblxuICAjcmFuZ2VEaXNwbGF5ZWQgPSAnJztcblxuICAjaXRlbXNEaXNwbGF5ZWQgPSAwO1xuXG4gICN0b3RhbFBhZ2VzID0gMDtcblxuICAjcGFnZVN0ZXAgPSAzMDtcblxuICAjbW92aWVzID0gW107XG5cbiAgI2xpa2VzID0gW107XG5cbiAgY29uc3RydWN0b3IoY29udGFpbmVyLCBjYWxsQmFja0FkZExpa2VBc3luYykge1xuICAgIHRoaXMuI3BhcmVudENvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB0aGlzLiNjYWxsQmFja0FkZExpa2VBc3luYyA9IGNhbGxCYWNrQWRkTGlrZUFzeW5jO1xuICB9XG5cbiAgc2V0IG1vdmllcyhtb3ZpZXMpIHtcbiAgICB0aGlzLiNtb3ZpZXMgPSBtb3ZpZXM7XG4gICAgdGhpcy4jdG90YWxJdGVtcyA9IG1vdmllcy5sZW5ndGg7XG4gIH1cblxuICBzZXQgbGlrZXMobGlrZXMpIHtcbiAgICB0aGlzLiNsaWtlcyA9IGxpa2VzO1xuICB9XG5cbiAgc2V0IHBhZ2VTdGVwKHN0ZXApIHtcbiAgICB0aGlzLiNwYWdlU3RlcCA9IHN0ZXA7XG4gIH1cblxuICBnZXQgcGFyZW50Q29udGFpbmVyKCkge1xuICAgIHJldHVybiB0aGlzLiNwYXJlbnRDb250YWluZXI7XG4gIH1cblxuICBnZXQgdG90YWxJdGVtcygpIHtcbiAgICByZXR1cm4gdGhpcy4jdG90YWxJdGVtcztcbiAgfVxuXG4gIGdldCB0b3RhbFBhZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLiN0b3RhbFBhZ2VzO1xuICB9XG5cbiAgZ2V0IGFjdHVhbFBhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2FjdHVhbFBhZ2U7XG4gIH1cblxuICBnZXQgaXRlbXNEaXNwbGF5ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2l0ZW1zRGlzcGxheWVkO1xuICB9XG5cbiAgZ2V0IHJhbmdlRGlzcGxheWVkKCkge1xuICAgIHJldHVybiB0aGlzLiNyYW5nZURpc3BsYXllZDtcbiAgfVxuXG4gICogZ2V0QXJyUGFnZXMoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBsdXNwbHVzXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gdGhpcy4jdG90YWxQYWdlczsgaSsrKSB7XG4gICAgICB5aWVsZCBpO1xuICAgIH1cbiAgfVxuXG4gIGRpc3BsYXkocGFnZSA9IDEpIHtcbiAgICBjb25zdCBhcnIgPSB0aGlzLiNwYWdpbmF0ZShwYWdlKTtcblxuICAgIGFyci5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCBtb3ZpZSA9IHRoaXMuI2NyZWF0ZU1vdmllKGl0ZW0pO1xuICAgICAgdGhpcy4jcGFyZW50Q29udGFpbmVyLmFwcGVuZChtb3ZpZSk7XG4gICAgfSk7XG4gIH1cblxuICBjbGVhclBhcmVudCgpIHtcbiAgICB0aGlzLiNwYXJlbnRDb250YWluZXIudGV4dENvbnRlbnQgPSAnJztcbiAgfVxuXG4gICNwYWdpbmF0ZShwYWdlID0gMSkge1xuICAgIGxldCBpbml0aWFsSW5kZXggPSAwO1xuICAgIGxldCBmaW5hbEluZGV4ID0gMDtcblxuICAgIGZpbmFsSW5kZXggPSB0aGlzLiNwYWdlU3RlcCAqIHBhZ2U7XG4gICAgaW5pdGlhbEluZGV4ID0gZmluYWxJbmRleCAtIHRoaXMuI3BhZ2VTdGVwO1xuXG4gICAgLy8gaW4gY2FzZSBmaW5hbCBpbmRleCBpcyBvdXQgb2YgdGhlIGJvdW5kYXJpZXMgb2YgdGhlIGFyclxuICAgIGlmIChmaW5hbEluZGV4ID4gdGhpcy4jdG90YWxJdGVtcykge1xuICAgICAgZmluYWxJbmRleCA9IHRoaXMuI3RvdGFsSXRlbXM7XG4gICAgfVxuXG4gICAgdGhpcy4jYWN0dWFsUGFnZSA9IHBhZ2U7XG4gICAgdGhpcy4jaXRlbXNEaXNwbGF5ZWQgPSBmaW5hbEluZGV4IC0gaW5pdGlhbEluZGV4O1xuICAgIHRoaXMuI3JhbmdlRGlzcGxheWVkID0gYCR7aW5pdGlhbEluZGV4fSB0byAke2ZpbmFsSW5kZXh9YDtcbiAgICB0aGlzLiN0b3RhbFBhZ2VzID0gTWF0aC5jZWlsKHRoaXMuI3RvdGFsSXRlbXMgLyB0aGlzLiNwYWdlU3RlcCkgfHwgMDtcbiAgICByZXR1cm4gdGhpcy4jbW92aWVzLnNsaWNlKGluaXRpYWxJbmRleCwgZmluYWxJbmRleCk7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2xhc3MtbWV0aG9kcy11c2UtdGhpc1xuICAjY3JlYXRlTW92aWUoZGF0YSkge1xuICAgIGNvbnN0IG1vdmllQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNvbnN0IG1vdmllQm9keSA9IHRoaXMuI2NyZWF0ZU1vdmllQm9keShkYXRhKTtcbiAgICBjb25zdCBmb290ZXJNb3ZpZSA9IHRoaXMuI2NyZWF0ZUZvb3RlcihkYXRhLmlkKTtcbiAgICBjb25zdCBmb290ZXJCdXR0b25zID0gdGhpcy4jY3JlYXRlQnV0dG9uKGRhdGEuaWQpO1xuXG4gICAgbW92aWVDb250YWluZXIuY2xhc3NOYW1lID0gJ21vdmllJztcbiAgICBpbWcuY2xhc3NOYW1lID0gJ21vdmllX19pbWcnO1xuXG4gICAgaW1nLnNyYyA9IGRhdGEuaW1hZ2UubWVkaXVtO1xuXG4gICAgbW92aWVDb250YWluZXIuaWQgPSBgbW92aWVDb250YWluZXItJHtkYXRhLmlkfWA7XG5cbiAgICBtb3ZpZUNvbnRhaW5lci5hcHBlbmQoaW1nLCBtb3ZpZUJvZHksIGZvb3Rlck1vdmllLCBmb290ZXJCdXR0b25zKTtcbiAgICByZXR1cm4gbW92aWVDb250YWluZXI7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2xhc3MtbWV0aG9kcy11c2UtdGhpc1xuICAjY3JlYXRlTW92aWVCb2R5KHsgbmFtZSwgc3VtbWFyeSB9KSB7XG4gICAgY29uc3QgbW92aWVCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIG1vdmllQm9keS5jbGFzc05hbWUgPSAnbW92aWVfX2JvZHknO1xuICAgIHRpdGxlLmNsYXNzTmFtZSA9ICdtb3ZpZV9fYm9keV9fdGl0bGUnO1xuICAgIGRlc2NyaXB0aW9uLmNsYXNzTmFtZSA9ICdtb3ZpZV9fYm9keV9fZGVzY3JpcHRpb24nO1xuXG4gICAgc3VtbWFyeSA9IHN1bW1hcnkucmVwbGFjZSgvPFteYl0+fDxcXC9bXmJdPi9nLCAnJyk7XG5cbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgZGVzY3JpcHRpb24uaW5uZXJIVE1MID0gYCR7c3VtbWFyeS5zdWJzdHJpbmcoMCwgNzApfS4uLmA7XG5cbiAgICBtb3ZpZUJvZHkuYXBwZW5kKHRpdGxlLCBkZXNjcmlwdGlvbik7XG4gICAgcmV0dXJuIG1vdmllQm9keTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzXG4gICNjcmVhdGVGb290ZXIoaWQpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2FtZWxjYXNlXG4gICAgY29uc3QgYXJyTGlrZXMgPSB0aGlzLiNsaWtlcy5maWx0ZXIoKHsgaXRlbV9pZCB9KSA9PiBpdGVtX2lkID09PSBpZCk7XG5cbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgY29uc3QgYXV4aWxpYXJEaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYXV4aWxpYXJEaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgc3RhckluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgbGlrZUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3Qgc3Rhckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgY29uc3QgbGlrZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgY29uc3QgYnV0dG9uQ29tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgYnV0dG9uUmVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uMScpO1xuXG4gICAgZm9vdGVyLmNsYXNzTmFtZSA9ICdtb3ZpZV9fZm9vdGVyJztcbiAgICBzdGFySWNvbi5jbGFzc05hbWUgPSAnZmEtc29saWQgZmEtc3RhciBzdGFyLWJ0bic7XG4gICAgbGlrZUljb24uY2xhc3NOYW1lID0gJ2ZhLXNvbGlkIGZhLWhlYXJ0IGxpa2UtYnRuJztcbiAgICBzdGFySW5mby5jbGFzc05hbWUgPSAnaW5mbyc7XG4gICAgYnV0dG9uQ29tLmNsYXNzTmFtZSA9ICdidG4nO1xuICAgIGJ1dHRvblJlcy5jbGFzc05hbWUgPSAnYnRuJztcbiAgICAvLyBzdGFySW5mby5pZCA9ICdzdGFySW5mbyc7XG4gICAgLy8gbGlrZUluZm8uaWQgPSAnbGlrZUluZm8nO1xuICAgIHN0YXJJY29uLmlkID0gYHN0YXJCdG4tJHtpZH1gO1xuICAgIGxpa2VJY29uLmlkID0gYGxpa2VCdG4tJHtpZH1gO1xuXG4gICAgLy8gY2hlY2sgaWYgdGhlIG1vdmllIGhhcyBpbmZvIGFib3V0IGxpa2VzIGZpcnN0XG4gICAgaWYgKGFyckxpa2VzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgY29uc3QgeyBsaWtlcywgc3RhcnMgfSA9IGFyckxpa2VzWzBdO1xuICAgICAgc3RhckluZm8udGV4dENvbnRlbnQgPSBzdGFycztcbiAgICAgIGxpa2VJbmZvLnRleHRDb250ZW50ID0gbGlrZXM7XG4gICAgfVxuXG4gICAgbGlrZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBsaWtlSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1iZWF0JywgJ2FjdGl2ZScpO1xuICAgICAgbGlrZUljb24uc3R5bGUgPSAnLS1mYS1hbmltYXRpb24tZHVyYXRpb246IDAuNXM7JztcbiAgICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLiNjYWxsQmFja0FkZExpa2VBc3luYyhpZCk7XG5cbiAgICAgIHByb21pc2UudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgc3RhdHVzIH0gPSByZXN1bHQ7XG4gICAgICAgIGlmIChzdGF0dXMgPT09IDIwMSkge1xuICAgICAgICAgIGNvbnN0IHByZXZpb3VzTGlrZXMgPSBwYXJzZUludChsaWtlSW5mby50ZXh0Q29udGVudCwgMTApIHx8IDA7XG4gICAgICAgICAgbGlrZUluZm8udGV4dENvbnRlbnQgPSAnYWRkZWQhJztcblxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgbGlrZUluZm8udGV4dENvbnRlbnQgPSBwcmV2aW91c0xpa2VzICsgMTtcbiAgICAgICAgICB9LCAxMjAwKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHByb21pc2UuZmluYWxseSgoKSA9PiB7XG4gICAgICAgIGxpa2VJY29uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLWJlYXQnLCAnYWN0aXZlJyk7XG4gICAgICAgIGxpa2VJY29uLnN0eWxlID0gJyc7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGF1eGlsaWFyRGl2MS5hcHBlbmQoc3RhckluZm8sIHN0YXJJY29uKTtcbiAgICBhdXhpbGlhckRpdjIuYXBwZW5kKGxpa2VJbmZvLCBsaWtlSWNvbik7XG5cbiAgICBmb290ZXIuYXBwZW5kKGF1eGlsaWFyRGl2Mik7XG4gICAgcmV0dXJuIGZvb3RlcjtcbiAgfVxuXG4gICNjcmVhdGVCdXR0b24oaWQpIHsgLy9lc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgY29uc3QgYnV0dG9uc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ1dHRvbnNEaXYuY2xhc3NOYW1lID0gXCJjb21tZW50LXJlc2VydmUtYnV0dG9uc1wiO1xuICAgIGNvbnN0IGNvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCByZXNlcnZlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGxpbmVCcmVhayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG4gICAgY29tbWVudC5jbGFzc05hbWUgPSAnY29tbWVudEJ1dHRvbic7XG4gICAgcmVzZXJ2ZXMuY2xhc3NOYW1lID0gJ3Jlc2VydmVCdXR0b24nO1xuICAgIGNvbW1lbnQuaW5uZXJIVE1MID0gJ0NvbW1lbnRzJztcbiAgICByZXNlcnZlcy5pbm5lckhUTUwgPSAnUmVzZXJ2YXRpb25zJztcbiAgICBjb21tZW50LmlkID0gYGNvbW1lbnRCdG4tJHtpZH1gO1xuICAgIHJlc2VydmVzLmlkID0gYHJlc2VydmVCdG4tJHtpZH1gO1xuICAgIGJ1dHRvbnNEaXYuYXBwZW5kQ2hpbGQoY29tbWVudCk7XG4gICAgYnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChsaW5lQnJlYWspO1xuICAgIGJ1dHRvbnNEaXYuYXBwZW5kQ2hpbGQocmVzZXJ2ZXMpO1xuXG4gICAgY29tbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBpdGVtSWQgPSBlbGVtZW50LnRhcmdldC5pZC5zcGxpdCgnLScpWzFdO1xuICAgICAgY29tbWVudFBvcFVwKGl0ZW1JZCk7XG4gICAgfSk7XG4gICAgcmVzZXJ2ZXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgaXRlbUlkID0gZWxlbWVudC50YXJnZXQuaWQuc3BsaXQoJy0nKVsxXTtcbiAgICAgIHJlc2VydmVQb3BVcChpdGVtSWQpO1xuICAgIH0pO1xuICAgIHJldHVybiBidXR0b25zRGl2O1xuICB9XG59XG4iLCJjb25zdCBwYWdlSW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlSW5mbycpO1xuY29uc3QgcGFnZUxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZUxpc3QnKTtcbmNvbnN0IHRleHQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuY29uc3QgdGV4dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5wYWdlSW5mby5hcHBlbmQodGV4dDEsIHRleHQyKTtcblxuY29uc3QgcnVuQW5pbWF0aW9uID0gKHBhcmVudENvbnRhaW5lcikgPT4ge1xuICAvLyBhZGQgYSBjbGFzcyB0byBhbGwgdGhlIGNhcmRzXG4gIGNvbnN0IG1vdmllcyA9IHBhcmVudENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcubW92aWUnKTtcbiAgbW92aWVzLmZvckVhY2goKG1vdmllKSA9PiBtb3ZpZS5jbGFzc0xpc3QuYWRkKCdhbmltYXRpb25PdXQnKSk7XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfSwgNTAwKTtcbiAgfSk7XG59O1xuXG5jb25zdCBwYWdlQ2xpY2tIYW5kbGVyID0gKG1vdmllc01hbmFnZXIsIGxpLCBwYWdlKSA9PiB7XG4gIGNvbnN0IHsgcGFyZW50Q29udGFpbmVyIH0gPSBtb3ZpZXNNYW5hZ2VyO1xuICAvLyBzZWxlY3QgdGhlIHByZXZpb3VzIGVsZW1lbnQgd2l0aCB0aGUgY2xhc3MgYWN0aXZlIGFuZCByZW1vdmUgaXRcbiAgY29uc3QgYXJySXRlbXMgPSBwYWdlTGlzdC5xdWVyeVNlbGVjdG9yQWxsKCcuYWN0aXZlJyk7XG4gIGFyckl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xuICBsaS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblxuICBydW5BbmltYXRpb24ocGFyZW50Q29udGFpbmVyKS50aGVuKCgpID0+IHtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgbW92aWVzTWFuYWdlci5jbGVhclBhcmVudCgpO1xuICAgIG1vdmllc01hbmFnZXIuZGlzcGxheShwYWdlKTtcbiAgICB0ZXh0MS50ZXh0Q29udGVudCA9IGBwYWdlOiAke21vdmllc01hbmFnZXIuYWN0dWFsUGFnZX0sIHNob3dpbmcgICR7bW92aWVzTWFuYWdlci5pdGVtc0Rpc3BsYXllZH0gdGl0bGVzYDtcbiAgICB0ZXh0Mi50ZXh0Q29udGVudCA9IGAgZnJvbSAke21vdmllc01hbmFnZXIucmFuZ2VEaXNwbGF5ZWR9LiBUb3RhbCB0aXRsZXM6ICR7bW92aWVzTWFuYWdlci50b3RhbEl0ZW1zfWA7XG4gICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKFxuICAgICAgeyBwcmV2VXJsOiB3aW5kb3cubG9jYXRpb24uaHJlZiB9LFxuICAgICAgJ3RpdGxlJyxcbiAgICAgIGBwYWdlLSR7cGFnZX1gLFxuICAgICk7XG4gIH0pO1xufTtcblxuY29uc3QgY3JlYXRlUGFnZXMgPSAobW92aWVzTWFuYWdlcikgPT4ge1xuICBjb25zdCBhcnJQYWdlcyA9IFsuLi5tb3ZpZXNNYW5hZ2VyLmdldEFyclBhZ2VzKCldO1xuICB0ZXh0MS50ZXh0Q29udGVudCA9IGBwYWdlOiAgJHttb3ZpZXNNYW5hZ2VyLmFjdHVhbFBhZ2V9LCBzaG93aW5nICR7bW92aWVzTWFuYWdlci5pdGVtc0Rpc3BsYXllZH0gdGl0bGVzYDtcbiAgdGV4dDIudGV4dENvbnRlbnQgPSBgIGZyb20gJHttb3ZpZXNNYW5hZ2VyLnJhbmdlRGlzcGxheWVkfS4gVG90YWwgdGl0bGVzOiAke21vdmllc01hbmFnZXIudG90YWxJdGVtc31gO1xuXG4gIGFyclBhZ2VzLmZvckVhY2goKHBhZ2UpID0+IHtcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGkuY2xhc3NOYW1lID0gJ2xpLXBhZ2UnO1xuICAgIGxpLnRleHRDb250ZW50ID0gcGFnZTtcblxuICAgIGxpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcGFnZUNsaWNrSGFuZGxlcihtb3ZpZXNNYW5hZ2VyLCBsaSwgcGFnZSk7XG4gICAgfSk7XG5cbiAgICBwYWdlTGlzdC5hcHBlbmQobGkpO1xuICB9KTtcblxuICBjb25zdCBmaXJzdCA9IHBhZ2VMaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJylbMF07XG4gIGZpcnN0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUGFnZXM7XG4iLCJjb25zdCBCQVNFX1VSTCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8nO1xuY29uc3QgR0FNRV9JRCA9ICczYmlmZFEzcWd6TXRBdngxVjNQYyc7XG5cbmNvbnN0IGdldFJlc2VydmF0aW9uID0gYXN5bmMgKGlkKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goXG4gICAgICBgJHtCQVNFX1VSTH0ke0dBTUVfSUR9L3Jlc2VydmF0aW9ucz9pdGVtX2lkPSR7aWR9YCxcbiAgICApO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXN1bHQuanNvbigpO1xuICAgIGNvbnN0IHsgc3RhdHVzIH0gPSByZXN1bHQ7XG5cbiAgICBpZiAoc3RhdHVzICE9PSAyMDApIHRocm93IG5ldyBFcnJvcignVGhlIHBldGl0aW9uIGRpZCBub3QgcmV0dXJuIDIwMCcpO1xuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59O1xuXG5jb25zdCBhZGRSZXNlcnZhdGlvbiA9IGFzeW5jIChpZCwgbmFtZSwgc3RhcnQsIGVuZCkgPT4ge1xuICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgIGl0ZW1faWQ6IGlkLFxuICAgIHVzZXJuYW1lOiBuYW1lLFxuICAgIGRhdGVfc3RhcnQ6IHN0YXJ0LFxuICAgIGRhdGVfZW5kOiBlbmQsXG4gIH0pO1xuXG4gIGNvbnN0IGhlYWRlcnMgPSB7ICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcgfTtcblxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaChgJHtCQVNFX1VSTH0ke0dBTUVfSUR9L3Jlc2VydmF0aW9uc2AsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5LFxuICAgIGhlYWRlcnMsXG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IHsgYWRkUmVzZXJ2YXRpb24sIGdldFJlc2VydmF0aW9uIH07XG4iLCJpbXBvcnQgZ2V0U2hvd0RhdGEgZnJvbSAnLi9nZXRTaG93RGF0YS5qcyc7XG5pbXBvcnQgeyBnZXRSZXNlcnZhdGlvbiwgYWRkUmVzZXJ2YXRpb24gfSBmcm9tICcuL3Jlc2VydmVJbnZvbHZlbWVudEFwaS5qcyc7XG5cbmNvbnN0IHJlc2VydmVQb3BVcCA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCBzaG93cyA9IGF3YWl0IGdldFNob3dEYXRhKGlkKTtcbiAgY29uc3QgcmVzZXJ2YXRpb25zID0gYXdhaXQgZ2V0UmVzZXJ2YXRpb24oaWQpO1xuICBjb25zdCBwb3BVcE9iamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNlcnZhdGlvbnMnKTtcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVybGF5Jyk7XG5cbiAgcG9wVXBPYmplY3QuaW5uZXJIVE1MID0gYFxuICA8cCBpZD0nY2FuY2VsLXB1cC11cCc+JnRpbWVzOzwvcD5cbiAgPGltZyBjbGFzcz0ncmVzZXJ2ZS1pbWcnIHNyYz0nJHtzaG93cy5pbWFnZS5vcmlnaW5hbH0nPlxuICA8ZGl2IGNsYXNzPSdyZXNlcnZlLWluZm8nPlxuICAgIDxoMyBjbGFzcz0nc3VtbWFyeS1oZWFkJz5Nb3ZpZSBJbmZvczwvaDM+XG4gICAgPHAgY2xhc3M9J3Jlc2VydmUtdGl0bGUnPk5hbWU6ICR7c2hvd3MubmFtZX08L3A+XG4gICAgPHAgY2xhc3M9J3Jlc2VydmUtc3RhdCc+TGVuZ3RoOiAke3Nob3dzLmF2ZXJhZ2VSdW50aW1lfSBob3VyczwvcD5cbiAgICA8cCBjbGFzcz0ncmVzZXJ2ZS1zdGF0Jz5QcmVtaWVyZWQ6ICR7c2hvd3MucHJlbWllcmVkfTwvcD5cbiAgICA8cCBjbGFzcz0ncmVzZXJ2ZS1zdGF0Jz5FbmRlZDogJHtcbiAgc2hvd3MuZW5kZWQgPyBzaG93cy5lbmRlZCA6ICdzdGlsbCBzaG93aW5nJ1xufTwvcD5cbiAgICA8cCBjbGFzcz0ncmVzZXJ2ZS1zdGF0Jz5MYW5ndWFnZTogJHtzaG93cy5sYW5ndWFnZX08L3A+XG4gICAgPHAgY2xhc3M9J3Jlc2VydmUtc3RhdCc+UmF0aW5nczogJHtcbiAgc2hvd3MucmF0aW5nLmF2ZXJhZ2UgPyBzaG93cy5yYXRpbmcuYXZlcmFnZSA6ICdub3QgYXZhaWxhYmxlJ1xufTwvcD5cbjxwIGNsYXNzPSdzZXJpZXMtZGVzYyc+JHtzaG93cy5zdW1tYXJ5LnJlcGxhY2VBbGwoXG4gIC88Yj58PFxcL2I+fDxwPnw8XFwvcD4vZyxcbiAgJycsXG4pfTwvcD5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9J3Jlc2VydmF0aW9uLWxpc3QnPlxuICA8aDI+UmVzZXJ2YXRpb25zPC9oMj5cbiAgJHtcbiAgcmVzZXJ2YXRpb25zLmxlbmd0aCA+PSAxXG4gICAgPyByZXNlcnZhdGlvbnNcbiAgICAgIC5tYXAoXG4gICAgICAgICAgICAocmVzZXJ2ZUl0ZW0pID0+XG4gICAgICAgICAgICAgIGA8cD4ke3Jlc2VydmVJdGVtLmRhdGVfc3RhcnR9IHRvICR7cmVzZXJ2ZUl0ZW0uZGF0ZV9lbmR9IGJ5ICR7cmVzZXJ2ZUl0ZW0udXNlcm5hbWV9PC9wPmBcbiAgICAgICAgICApXG4gICAgICAgICAgLmpvaW4oJycpXG4gICAgICA6ICc8cD5ObyBSZXNlcnZhdGlvbnM8L3A+J1xuICB9XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzID0gJ2lucHV0Jz5cbiAgICA8aDIgY2xhc3M9ICdyZXNlcnZhdGlvbi1oZWFkJyA+QWRkIGEgcmVzZXJ2YXRpb248L2gyPlxuICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0ndXNlcm5hbWUnIHBsYWNlaG9sZGVyPSdZb3VyIG5hbWUnPlxuICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0nc3RhcnQtZGF0ZScgcGxhY2Vob2xkZXI9J1N0YXJ0IERhdGUnPlxuICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0nZW5kLWRhdGUnIHBsYWNlaG9sZGVyPSdFbmQgRGF0ZSc+XG4gICAgPGJyPlxuICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBpZD0nYWRkLWJ1dHRvbic+UmVzZXJ2ZTwvYnV0dG9uPlxuICA8L2Rpdj5cbiAgYDtcbiAgcG9wVXBPYmplY3QuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIGNvbnN0IGNhbmNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW5jZWwtcHVwLXVwJyk7XG4gIGNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBwb3BVcE9iamVjdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICB9KTtcbiAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1idXR0b24nKTtcbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VybmFtZScpO1xuICBjb25zdCBzdGFydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1kYXRlJyk7XG4gIGNvbnN0IGVuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbmQtZGF0ZScpO1xuXG4gIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBuYW1lVmFsdWUgPSBuYW1lLnZhbHVlO1xuICAgIGNvbnN0IHN0YXJ0VmFsdWUgPSBzdGFydC52YWx1ZTtcbiAgICBjb25zdCBlbmRWYWx1ZSA9IGVuZC52YWx1ZTtcbiAgICBhd2FpdCBhZGRSZXNlcnZhdGlvbihpZCwgbmFtZVZhbHVlLCBzdGFydFZhbHVlLCBlbmRWYWx1ZSk7XG4gICAgbmFtZS52YWx1ZSA9ICcnO1xuICAgIHN0YXJ0LnZhbHVlID0gJyc7XG4gICAgZW5kLnZhbHVlID0gJyc7XG4gIH0pO1xuXG4gIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcG9wVXBPYmplY3QuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZXNlcnZlUG9wVXA7XG4iLCJjb25zdCBCQVNFX1VSTCA9ICdodHRwczovL2FwaS50dm1hemUuY29tL3Nob3dzJztcblxuY29uc3QgZ2V0U2hvd3MgPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goQkFTRV9VUkwpO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXN1bHQuanNvbigpO1xuICAgIGNvbnN0IHsgc3RhdHVzIH0gPSByZXN1bHQ7XG5cbiAgICBpZiAoc3RhdHVzICE9PSAyMDApIHRocm93IG5ldyBFcnJvcignVGhlIHBpdGl0aW9uIGRpZCBub3QgcmV0dXJuIDIwMCcpO1xuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxuZXhwb3J0IHsgZ2V0U2hvd3MgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==