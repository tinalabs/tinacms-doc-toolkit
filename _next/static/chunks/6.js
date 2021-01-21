(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[6],{

/***/ "./content/TinaConfig.mdx":
/*!********************************!*\
  !*** ./content/TinaConfig.mdx ***!
  \********************************/
/*! exports provided: code, TinaConfig, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"code\", function() { return code; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TinaConfig\", function() { return TinaConfig; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MDXContent; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ \"../../node_modules/@mdx-js/react/dist/esm.js\");\n\n\nvar _jsxFileName = \"/Users/christophermacrae/Code/tinalabs/tinacms-doc-toolkit/packages/example-site-next/content/TinaConfig.mdx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n/* @jsxRuntime classic */\n\n/* @jsx mdx */\n\nvar code = \"\\n# TinaConfig\\nIn your mdx file we might want to export cretin tina configuration. Its is really easy to do so. Simply add\\n```js\\nexport const TinaConfig = {\\n    //... tina configuration here\\n}\\n```\\nTo your mdx file. This will override any of the configuration in the global mdx file.\\nFor example when you went to this page you might have noticed that the sidebar and toolbar are enabled thats because the TinaConfig for this page looks like\\n```js\\nexport const TinaConfig = {\\n    enabled: true,\\n    sidebar: true,\\n    toolbar: true\\n}\\n```\\non the next page is an example showing how to you can access the cms object in MDX!\\n\";\nvar TinaConfig = {\n  enabled: true,\n  sidebar: true,\n  toolbar: true\n};\nvar layoutProps = {\n  code: code,\n  TinaConfig: TinaConfig\n};\nvar MDXLayout = \"wrapper\";\nfunction MDXContent(_ref) {\n  var components = _ref.components,\n      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, [\"components\"]);\n\n  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(MDXLayout, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, layoutProps, props, {\n    components: components,\n    mdxType: \"MDXLayout\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 10\n    }\n  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 5\n    }\n  }, \"TinaConfig\"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 5\n    }\n  }, \"In your mdx file we might want to export certain tina configuration. Its is really easy to do so. Simply add\"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"pre\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 5\n    }\n  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"code\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    parentName: \"pre\"\n  }, {\n    \"className\": \"language-js\"\n  }, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 10\n    }\n  }), \"export const TinaConfig = {\\n    //... tina configeration here\\n}\\n\")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 5\n    }\n  }, \"To your mdx file. This will override any of the configuration in the global mdx file.\"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 5\n    }\n  }, \"For example when you went to this page you might have noticed that the sidebar and toolbar are enabled thats because the TinaConfig for this page looks like\"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"pre\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 5\n    }\n  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"code\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    parentName: \"pre\"\n  }, {\n    \"className\": \"language-js\"\n  }, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 10\n    }\n  }), \"export const TinaConfig = {\\n    enabled: true,\\n    sidebar: true,\\n    toolbar: true\\n}\\n\")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 5\n    }\n  }, \"on the next page is an example showing how to you can access the cms object in MDX!\"));\n}\n_c = MDXContent;\n;\nMDXContent.isMDXComponent = true;\n\nvar _c;\n\n$RefreshReg$(_c, \"MDXContent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"../../node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGVudC9UaW5hQ29uZmlnLm1keD9iMjg2Il0sIm5hbWVzIjpbImNvZGUiLCJUaW5hQ29uZmlnIiwiZW5hYmxlZCIsInNpZGViYXIiLCJ0b29sYmFyIiwibGF5b3V0UHJvcHMiLCJNRFhMYXlvdXQiLCJNRFhDb250ZW50IiwiY29tcG9uZW50cyIsInByb3BzIiwiaXNNRFhDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7O0FBRU8sSUFBTUEsSUFBSSxrb0JBQVY7QUFtQkEsSUFBTUMsVUFBVSxHQUFHO0FBQ3hCQyxTQUFPLEVBQUUsSUFEZTtBQUV4QkMsU0FBTyxFQUFFLElBRmU7QUFHeEJDLFNBQU8sRUFBRTtBQUhlLENBQW5CO0FBTVAsSUFBTUMsV0FBVyxHQUFHO0FBQ2xCTCxNQUFJLEVBQUpBLElBRGtCO0FBRXBCQyxZQUFVLEVBQVZBO0FBRm9CLENBQXBCO0FBSUEsSUFBTUssU0FBUyxHQUFHLFNBQWxCO0FBQ2UsU0FBU0MsVUFBVCxPQUdaO0FBQUEsTUFGREMsVUFFQyxRQUZEQSxVQUVDO0FBQUEsTUFERUMsS0FDRjs7QUFDRCxTQUFPLDBEQUFDLFNBQUQseUZBQWVKLFdBQWYsRUFBZ0NJLEtBQWhDO0FBQXVDLGNBQVUsRUFBRUQsVUFBbkQ7QUFBK0QsV0FBTyxFQUFDLFdBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFDTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURLLEVBRUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvSEFGSyxFQUdMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSztBQUFNLGNBQVUsRUFBQztBQUFqQixLQUEyQjtBQUM1QixpQkFBYTtBQURlLEdBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEVBQUwsQ0FISyxFQVNMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkZBVEssRUFVTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9LQVZLLEVBV0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTJCO0FBQzVCLGlCQUFhO0FBRGUsR0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvR0FBTCxDQVhLLEVBbUJMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkZBbkJLLENBQVA7QUF1QkQ7S0EzQnVCRCxVO0FBNkJ4QjtBQUNBQSxVQUFVLENBQUNHLGNBQVgsR0FBNEIsSUFBNUIiLCJmaWxlIjoiLi9jb250ZW50L1RpbmFDb25maWcubWR4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtZHggfSBmcm9tICdAbWR4LWpzL3JlYWN0J1xuXG4vKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiBAanN4IG1keCAqL1xuXG5leHBvcnQgY29uc3QgY29kZSA9IGBcbiMgVGluYUNvbmZpZ1xuSW4geW91ciBtZHggZmlsZSB3ZSBtaWdodCB3YW50IHRvIGV4cG9ydCBjcmV0aW4gdGluYSBjb25maWd1cmF0aW9uLiBJdHMgaXMgcmVhbGx5IGVhc3kgdG8gZG8gc28uIFNpbXBseSBhZGRcblxcYFxcYFxcYGpzXG5leHBvcnQgY29uc3QgVGluYUNvbmZpZyA9IHtcbiAgICAvLy4uLiB0aW5hIGNvbmZpZ3VyYXRpb24gaGVyZVxufVxuXFxgXFxgXFxgXG5UbyB5b3VyIG1keCBmaWxlLiBUaGlzIHdpbGwgb3ZlcnJpZGUgYW55IG9mIHRoZSBjb25maWd1cmF0aW9uIGluIHRoZSBnbG9iYWwgbWR4IGZpbGUuXG5Gb3IgZXhhbXBsZSB3aGVuIHlvdSB3ZW50IHRvIHRoaXMgcGFnZSB5b3UgbWlnaHQgaGF2ZSBub3RpY2VkIHRoYXQgdGhlIHNpZGViYXIgYW5kIHRvb2xiYXIgYXJlIGVuYWJsZWQgdGhhdHMgYmVjYXVzZSB0aGUgVGluYUNvbmZpZyBmb3IgdGhpcyBwYWdlIGxvb2tzIGxpa2VcblxcYFxcYFxcYGpzXG5leHBvcnQgY29uc3QgVGluYUNvbmZpZyA9IHtcbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIHNpZGViYXI6IHRydWUsXG4gICAgdG9vbGJhcjogdHJ1ZVxufVxuXFxgXFxgXFxgXG5vbiB0aGUgbmV4dCBwYWdlIGlzIGFuIGV4YW1wbGUgc2hvd2luZyBob3cgdG8geW91IGNhbiBhY2Nlc3MgdGhlIGNtcyBvYmplY3QgaW4gTURYIVxuYDtcbmV4cG9ydCBjb25zdCBUaW5hQ29uZmlnID0ge1xuICBlbmFibGVkOiB0cnVlLFxuICBzaWRlYmFyOiB0cnVlLFxuICB0b29sYmFyOiB0cnVlXG59O1xuXG5jb25zdCBsYXlvdXRQcm9wcyA9IHtcbiAgY29kZSxcblRpbmFDb25maWdcbn07XG5jb25zdCBNRFhMYXlvdXQgPSBcIndyYXBwZXJcIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTURYQ29udGVudCh7XG4gIGNvbXBvbmVudHMsXG4gIC4uLnByb3BzXG59KSB7XG4gIHJldHVybiA8TURYTGF5b3V0IHsuLi5sYXlvdXRQcm9wc30gey4uLnByb3BzfSBjb21wb25lbnRzPXtjb21wb25lbnRzfSBtZHhUeXBlPVwiTURYTGF5b3V0XCI+XG4gICAgPGgxPntgVGluYUNvbmZpZ2B9PC9oMT5cbiAgICA8cD57YEluIHlvdXIgbWR4IGZpbGUgd2UgbWlnaHQgd2FudCB0byBleHBvcnQgY2VydGFpbiB0aW5hIGNvbmZpZ3VyYXRpb24uIEl0cyBpcyByZWFsbHkgZWFzeSB0byBkbyBzby4gU2ltcGx5IGFkZGB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BleHBvcnQgY29uc3QgVGluYUNvbmZpZyA9IHtcbiAgICAvLy4uLiB0aW5hIGNvbmZpZ2VyYXRpb24gaGVyZVxufVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2BUbyB5b3VyIG1keCBmaWxlLiBUaGlzIHdpbGwgb3ZlcnJpZGUgYW55IG9mIHRoZSBjb25maWd1cmF0aW9uIGluIHRoZSBnbG9iYWwgbWR4IGZpbGUuYH08L3A+XG4gICAgPHA+e2BGb3IgZXhhbXBsZSB3aGVuIHlvdSB3ZW50IHRvIHRoaXMgcGFnZSB5b3UgbWlnaHQgaGF2ZSBub3RpY2VkIHRoYXQgdGhlIHNpZGViYXIgYW5kIHRvb2xiYXIgYXJlIGVuYWJsZWQgdGhhdHMgYmVjYXVzZSB0aGUgVGluYUNvbmZpZyBmb3IgdGhpcyBwYWdlIGxvb2tzIGxpa2VgfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgZXhwb3J0IGNvbnN0IFRpbmFDb25maWcgPSB7XG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICBzaWRlYmFyOiB0cnVlLFxuICAgIHRvb2xiYXI6IHRydWVcbn1cbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntgb24gdGhlIG5leHQgcGFnZSBpcyBhbiBleGFtcGxlIHNob3dpbmcgaG93IHRvIHlvdSBjYW4gYWNjZXNzIHRoZSBjbXMgb2JqZWN0IGluIE1EWCFgfTwvcD5cblxuXG4gICAgPC9NRFhMYXlvdXQ+O1xufVxuXG47XG5NRFhDb250ZW50LmlzTURYQ29tcG9uZW50ID0gdHJ1ZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./content/TinaConfig.mdx\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _objectWithoutProperties; });\n/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js\");\n\nfunction _objectWithoutProperties(source, excluded) {\n  if (source == null) return {};\n  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(source, excluded);\n  var key, i;\n\n  if (Object.getOwnPropertySymbols) {\n    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n\n    for (i = 0; i < sourceSymbolKeys.length; i++) {\n      key = sourceSymbolKeys[i];\n      if (excluded.indexOf(key) >= 0) continue;\n      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n      target[key] = source[key];\n    }\n  }\n\n  return target;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzLmpzPzE1ZmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQTBFO0FBQzNEO0FBQ2Y7QUFDQSxlQUFlLDZFQUE0QjtBQUMzQzs7QUFFQTtBQUNBOztBQUVBLGVBQWUsNkJBQTZCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIi4vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSBvYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpO1xuICB2YXIga2V5LCBpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTtcbiAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _objectWithoutPropertiesLoose; });\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n  if (source == null) return {};\n  var target = {};\n  var sourceKeys = Object.keys(source);\n  var key, i;\n\n  for (i = 0; i < sourceKeys.length; i++) {\n    key = sourceKeys[i];\n    if (excluded.indexOf(key) >= 0) continue;\n    target[key] = source[key];\n  }\n\n  return target;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanM/Y2NiNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhLHVCQUF1QjtBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js\n");

/***/ })

}]);