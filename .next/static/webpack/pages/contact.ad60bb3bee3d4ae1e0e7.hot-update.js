"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/contact",{

/***/ "./components/contact/contact-form.js":
/*!********************************************!*\
  !*** ./components/contact/contact-form.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_christianmarginet_Documents_next_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_christianmarginet_Documents_next_Frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_christianmarginet_Documents_next_Frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_christianmarginet_Documents_next_Frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contact_form_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-form.module.css */ \"./components/contact/contact-form.module.css\");\n/* harmony import */ var _contact_form_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_contact_form_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _ui_notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/notification */ \"./components/ui/notification.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/christianmarginet/Documents/next-Frontend/components/contact/contact-form.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n/*\nasync function sendContactData(contactDetails) {\n\tconst response = await fetch('/api/contact', {\n\t\tmethod: 'POST',\n\t\tbody: JSON.stringify(contactDetails),\n\t\theaders: {\n\t\t\t'Content-Type': 'application/json',\n\t\t},\n\t});\n\t\n\t/*\n\tconst data = await response.json();\n\n\tif (!response.ok) {\n\t\tthrow new Error(data.message || 'Er ging iets verkeerd.');\n\t}\n\t*/\n\n\n\nfunction ContactForm() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),\n      enteredEmail = _useState[0],\n      setEnteredEmail = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),\n      enteredName = _useState2[0],\n      setEnteredName = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),\n      enteredMessage = _useState3[0],\n      setEnteredMessage = _useState3[1];\n\n  function sendMessageHandler(_x) {\n    return _sendMessageHandler.apply(this, arguments);\n  }\n\n  function _sendMessageHandler() {\n    _sendMessageHandler = (0,_Users_christianmarginet_Documents_next_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_christianmarginet_Documents_next_Frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(event) {\n      var res, data;\n      return _Users_christianmarginet_Documents_next_Frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              event.preventDefault();\n              /*\n              \t\tconst data = {\n                    enteredName,\n                    enteredEmail,\n                    enteredMessage,\n                  };\n                  console.log(data);\n              */\n\n              _context.next = 3;\n              return fetch('/api/contact', {\n                method: 'POST',\n                body: JSON.stringify({\n                  enteredName: enteredName,\n                  enteredEmail: enteredEmail,\n                  enteredMessage: enteredMessage\n                }),\n                headers: {\n                  'Content-Type': 'application/json'\n                }\n              });\n\n            case 3:\n              res = _context.sent;\n              data = awiat;\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _sendMessageHandler.apply(this, arguments);\n  }\n\n  ;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"section\", {\n    className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_5___default().contact),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"h1\", {\n      children: \"Iets ontdekt? \"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 4\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"form\", {\n      className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_5___default().form),\n      onSubmit: sendMessageHandler,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_5___default().controls),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n          className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_5___default().control),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"label\", {\n            htmlFor: \"email\",\n            children: \"Jouw e-mail\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 7\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"input\", {\n            type: \"email\",\n            id: \"email\",\n            required: true,\n            value: enteredEmail,\n            onChange: function onChange(event) {\n              return setEnteredEmail(event.target.value);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 7\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 6\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n          className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_5___default().control),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"label\", {\n            htmlFor: \"name\",\n            children: \"Jouw naam\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 72,\n            columnNumber: 7\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"input\", {\n            type: \"text\",\n            id: \"name\",\n            required: true,\n            value: enteredName,\n            onChange: function onChange(event) {\n              return setEnteredName(event.target.value);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 73,\n            columnNumber: 7\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 5\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_5___default().control),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"label\", {\n          htmlFor: \"message\",\n          children: \"Vertel!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 6\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"textarea\", {\n          name: \"message\",\n          id: \"message\",\n          cols: \"30\",\n          rows: \"10\",\n          required: true,\n          value: enteredMessage,\n          onChange: function onChange(event) {\n            return setEnteredMessage(event.target.value);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 5\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_5___default().actions),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"button\", {\n          children: \"Verzenden\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 6\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 57,\n    columnNumber: 3\n  }, this);\n}\n\n_s(ContactForm, \"x7Uml3AYNluHaRq+qCSai2xW8jQ=\");\n\n_c = ContactForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"ContactForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC1mb3JtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFHQSxTQUFTRyxXQUFULEdBQXVCO0FBQUE7O0FBQ3RCLGtCQUF3Q0gsK0NBQVEsQ0FBQyxFQUFELENBQWhEO0FBQUEsTUFBT0ksWUFBUDtBQUFBLE1BQXFCQyxlQUFyQjs7QUFDQSxtQkFBc0NMLCtDQUFRLENBQUMsRUFBRCxDQUE5QztBQUFBLE1BQU9NLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBQ0EsbUJBQTRDUCwrQ0FBUSxDQUFDLEVBQUQsQ0FBcEQ7QUFBQSxNQUFPUSxjQUFQO0FBQUEsTUFBdUJDLGlCQUF2Qjs7QUFIc0IsV0FNTkMsa0JBTk07QUFBQTtBQUFBOztBQUFBO0FBQUEsOFRBTXJCLGlCQUFrQ0MsS0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0FBLGNBQUFBLEtBQUssQ0FBQ0MsY0FBTjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBVEU7QUFBQSxxQkFVa0JDLEtBQUssQ0FBQyxjQUFELEVBQWlCO0FBQ3ZDQyxnQkFBQUEsTUFBTSxFQUFFLE1BRCtCO0FBRXZDQyxnQkFBQUEsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNwQlgsa0JBQUFBLFdBQVcsRUFBRUEsV0FETztBQUVwQkYsa0JBQUFBLFlBQVksRUFBRUEsWUFGTTtBQUdwQkksa0JBQUFBLGNBQWMsRUFBRUE7QUFISSxpQkFBZixDQUZpQztBQU92Q1UsZ0JBQUFBLE9BQU8sRUFBRTtBQUNSLGtDQUFnQjtBQURSO0FBUDhCLGVBQWpCLENBVnZCOztBQUFBO0FBVU1DLGNBQUFBLEdBVk47QUFzQk1DLGNBQUFBLElBdEJOLEdBc0JhQyxLQXRCYjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU5xQjtBQUFBO0FBQUE7O0FBOEJwQjtBQUdGLHNCQUNDO0FBQVMsYUFBUyxFQUFFcEIseUVBQXBCO0FBQUEsNEJBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQUVDO0FBQU0sZUFBUyxFQUFFQSxzRUFBakI7QUFBK0IsY0FBUSxFQUFFUyxrQkFBekM7QUFBQSw4QkFDQztBQUFLLGlCQUFTLEVBQUVULDBFQUFoQjtBQUFBLGdDQUNDO0FBQUssbUJBQVMsRUFBRUEseUVBQWhCO0FBQUEsa0NBQ0M7QUFBTyxtQkFBTyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsZUFFQztBQUNDLGdCQUFJLEVBQUMsT0FETjtBQUVDLGNBQUUsRUFBQyxPQUZKO0FBR0Msb0JBQVEsTUFIVDtBQUlDLGlCQUFLLEVBQUVHLFlBSlI7QUFLQyxvQkFBUSxFQUFFLGtCQUFBTyxLQUFLO0FBQUEscUJBQUlOLGVBQWUsQ0FBQ00sS0FBSyxDQUFDZSxNQUFOLENBQWFDLEtBQWQsQ0FBbkI7QUFBQTtBQUxoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERCxlQVdDO0FBQUssbUJBQVMsRUFBRTFCLHlFQUFoQjtBQUFBLGtDQUNDO0FBQU8sbUJBQU8sRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURELGVBRUM7QUFDQyxnQkFBSSxFQUFDLE1BRE47QUFFQyxjQUFFLEVBQUMsTUFGSjtBQUdDLG9CQUFRLE1BSFQ7QUFJQyxpQkFBSyxFQUFFSyxXQUpSO0FBS0Msb0JBQVEsRUFBRSxrQkFBQUssS0FBSztBQUFBLHFCQUFJSixjQUFjLENBQUNJLEtBQUssQ0FBQ2UsTUFBTixDQUFhQyxLQUFkLENBQWxCO0FBQUE7QUFMaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsZUF1QkM7QUFBSyxpQkFBUyxFQUFFMUIseUVBQWhCO0FBQUEsZ0NBQ0M7QUFBTyxpQkFBTyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQsZUFFQztBQUNDLGNBQUksRUFBQyxTQUROO0FBRUMsWUFBRSxFQUFDLFNBRko7QUFHQyxjQUFJLEVBQUMsSUFITjtBQUlDLGNBQUksRUFBQyxJQUpOO0FBS0Msa0JBQVEsTUFMVDtBQU1DLGVBQUssRUFBRU8sY0FOUjtBQU9DLGtCQUFRLEVBQUUsa0JBQUFHLEtBQUs7QUFBQSxtQkFBSUYsaUJBQWlCLENBQUNFLEtBQUssQ0FBQ2UsTUFBTixDQUFhQyxLQUFkLENBQXJCO0FBQUE7QUFQaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F2QkQsZUFtQ0M7QUFBSyxpQkFBUyxFQUFFMUIseUVBQWhCO0FBQUEsK0JBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbkNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBNkNBOztHQTlFUUU7O0tBQUFBO0FBZ0ZULCtEQUFlQSxXQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LWZvcm0uanM/YWY5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vY29udGFjdC1mb3JtLm1vZHVsZS5jc3MnO1xuaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tICcuLi91aS9ub3RpZmljYXRpb24nO1xuLypcbmFzeW5jIGZ1bmN0aW9uIHNlbmRDb250YWN0RGF0YShjb250YWN0RGV0YWlscykge1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2NvbnRhY3QnLCB7XG5cdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoY29udGFjdERldGFpbHMpLFxuXHRcdGhlYWRlcnM6IHtcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0fSxcblx0fSk7XG5cdFxuXHQvKlxuXHRjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG5cdGlmICghcmVzcG9uc2Uub2spIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoZGF0YS5tZXNzYWdlIHx8ICdFciBnaW5nIGlldHMgdmVya2VlcmQuJyk7XG5cdH1cblx0Ki9cblxuXG5mdW5jdGlvbiBDb250YWN0Rm9ybSgpIHtcblx0Y29uc3QgW2VudGVyZWRFbWFpbCwgc2V0RW50ZXJlZEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcblx0Y29uc3QgW2VudGVyZWROYW1lLCBzZXRFbnRlcmVkTmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG5cdGNvbnN0IFtlbnRlcmVkTWVzc2FnZSwgc2V0RW50ZXJlZE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xuXHRcblxuICBhc3luYyBmdW5jdGlvbiBzZW5kTWVzc2FnZUhhbmRsZXIoZXZlbnQpIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuLypcblx0XHRjb25zdCBkYXRhID0ge1xuICAgICAgZW50ZXJlZE5hbWUsXG4gICAgICBlbnRlcmVkRW1haWwsXG4gICAgICBlbnRlcmVkTWVzc2FnZSxcbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuKi9cblx0XHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL2FwaS9jb250YWN0Jywge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdGVudGVyZWROYW1lOiBlbnRlcmVkTmFtZSxcblx0XHRcdFx0ZW50ZXJlZEVtYWlsOiBlbnRlcmVkRW1haWwsXG5cdFx0XHRcdGVudGVyZWRNZXNzYWdlOiBlbnRlcmVkTWVzc2FnZSxcblx0XHRcdH0pLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXHRcdFx0fSxcblx0XHR9KTtcblxuXHRcdGNvbnN0IGRhdGEgPSBhd2lhdFxuXG4gIH07XG5cdFx0XG5cblx0cmV0dXJuIChcblx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFjdH0+XG5cdFx0XHQ8aDE+SWV0cyBvbnRkZWt0PyA8L2gxPlxuXHRcdFx0PGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19IG9uU3VibWl0PXtzZW5kTWVzc2FnZUhhbmRsZXJ9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sc30+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XG5cdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj0nZW1haWwnPkpvdXcgZS1tYWlsPC9sYWJlbD5cblx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHR0eXBlPSdlbWFpbCdcblx0XHRcdFx0XHRcdFx0aWQ9J2VtYWlsJ1xuXHRcdFx0XHRcdFx0XHRyZXF1aXJlZFxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17ZW50ZXJlZEVtYWlsfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ZXZlbnQgPT4gc2V0RW50ZXJlZEVtYWlsKGV2ZW50LnRhcmdldC52YWx1ZSl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxuXHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9J25hbWUnPkpvdXcgbmFhbTwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcblx0XHRcdFx0XHRcdFx0aWQ9J25hbWUnXG5cdFx0XHRcdFx0XHRcdHJlcXVpcmVkXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtlbnRlcmVkTmFtZX1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2V2ZW50ID0+IHNldEVudGVyZWROYW1lKGV2ZW50LnRhcmdldC52YWx1ZSl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XG5cdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9J21lc3NhZ2UnPlZlcnRlbCE8L2xhYmVsPlxuXHRcdFx0XHRcdDx0ZXh0YXJlYVxuXHRcdFx0XHRcdFx0bmFtZT0nbWVzc2FnZSdcblx0XHRcdFx0XHRcdGlkPSdtZXNzYWdlJ1xuXHRcdFx0XHRcdFx0Y29scz0nMzAnXG5cdFx0XHRcdFx0XHRyb3dzPScxMCdcblx0XHRcdFx0XHRcdHJlcXVpcmVkXG5cdFx0XHRcdFx0XHR2YWx1ZT17ZW50ZXJlZE1lc3NhZ2V9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ZXZlbnQgPT4gc2V0RW50ZXJlZE1lc3NhZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKX1cblx0XHRcdFx0XHQ+PC90ZXh0YXJlYT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbnN9PlxuXHRcdFx0XHRcdDxidXR0b24+VmVyemVuZGVuPC9idXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9mb3JtPlxuICAgICAgXG5cdFx0PC9zZWN0aW9uPlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0Rm9ybTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImNsYXNzZXMiLCJOb3RpZmljYXRpb24iLCJDb250YWN0Rm9ybSIsImVudGVyZWRFbWFpbCIsInNldEVudGVyZWRFbWFpbCIsImVudGVyZWROYW1lIiwic2V0RW50ZXJlZE5hbWUiLCJlbnRlcmVkTWVzc2FnZSIsInNldEVudGVyZWRNZXNzYWdlIiwic2VuZE1lc3NhZ2VIYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwicmVzIiwiZGF0YSIsImF3aWF0IiwiY29udGFjdCIsImZvcm0iLCJjb250cm9scyIsImNvbnRyb2wiLCJ0YXJnZXQiLCJ2YWx1ZSIsImFjdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/contact/contact-form.js\n");

/***/ })

});