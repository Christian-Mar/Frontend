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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_christianmarginet_Documents_next_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_christianmarginet_Documents_next_Frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_christianmarginet_Documents_next_Frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_christianmarginet_Documents_next_Frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contact_form_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-form.module.css */ \"./components/contact/contact-form.module.css\");\n/* harmony import */ var _contact_form_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_contact_form_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _ui_notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/notification */ \"./components/ui/notification.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/christianmarginet/Documents/next-Frontend/components/contact/contact-form.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n/*\nasync function sendContactData(contactDetails) {\n\tconst response = await fetch('/api/contact', {\n\t\tmethod: 'POST',\n\t\tbody: JSON.stringify(contactDetails),\n\t\theaders: {\n\t\t\t'Content-Type': 'application/json',\n\t\t},\n\t});\n\t\n\t/*\n\tconst data = await response.json();\n\n\tif (!response.ok) {\n\t\tthrow new Error(data.message || 'Er ging iets verkeerd.');\n\t}\n\t*/\n\n\n\nfunction ContactForm() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),\n      enteredEmail = _useState[0],\n      setEnteredEmail = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),\n      enteredName = _useState2[0],\n      setEnteredName = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),\n      enteredMessage = _useState3[0],\n      setEnteredMessage = _useState3[1];\n\n  function sendMessageHandler(_x) {\n    return _sendMessageHandler.apply(this, arguments);\n  }\n\n  function _sendMessageHandler() {\n    _sendMessageHandler = (0,_Users_christianmarginet_Documents_next_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_christianmarginet_Documents_next_Frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(event) {\n      var res;\n      return _Users_christianmarginet_Documents_next_Frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              event.preventDefault();\n              /*\n              \t\tconst data = {\n                    enteredName,\n                    enteredEmail,\n                    enteredMessage,\n                  };\n                  console.log(data);\n              */\n\n              _context.next = 3;\n              return fetch('/api/contact', {\n                method: 'POST',\n                body: JSON.stringify({\n                  enteredName: enteredName,\n                  enteredEmail: enteredEmail,\n                  enteredmessage: enteredMessage\n                }),\n                headers: {\n                  'Content-Type': 'application/json'\n                }\n              });\n\n            case 3:\n              res = _context.sent;\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _sendMessageHandler.apply(this, arguments);\n  }\n\n  ;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"section\", {\n    className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_5___default().contact),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"h1\", {\n      children: \"Iets ontdekt? \"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 4\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"form\", {\n      className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_5___default().form),\n      onSubmit: sendMessageHandler,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_5___default().controls),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n          className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_5___default().control),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"label\", {\n            htmlFor: \"email\",\n            children: \"Jouw e-mail\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 7\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"input\", {\n            type: \"email\",\n            id: \"email\",\n            required: true,\n            value: enteredEmail,\n            onChange: function onChange(event) {\n              return setEnteredEmail(event.target.value);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 7\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 6\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n          className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_5___default().control),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"label\", {\n            htmlFor: \"name\",\n            children: \"Jouw naam\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 70,\n            columnNumber: 7\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"input\", {\n            type: \"text\",\n            id: \"name\",\n            required: true,\n            value: enteredName,\n            onChange: function onChange(event) {\n              return setEnteredName(event.target.value);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 71,\n            columnNumber: 7\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 5\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_5___default().control),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"label\", {\n          htmlFor: \"message\",\n          children: \"Vertel!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 6\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"textarea\", {\n          name: \"message\",\n          id: \"message\",\n          cols: \"30\",\n          rows: \"10\",\n          required: true,\n          value: enteredMessage,\n          onChange: function onChange(event) {\n            return setEnteredMessage(event.target.value);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 5\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_5___default().actions),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"button\", {\n          children: \"Verzenden\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 6\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 55,\n    columnNumber: 3\n  }, this);\n}\n\n_s(ContactForm, \"x7Uml3AYNluHaRq+qCSai2xW8jQ=\");\n\n_c = ContactForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"ContactForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBO0FBQUE7QUFBQSxjQURELGVBdUJDO0FBQUssaUJBQVMsRUFBRXpCLHlFQUFoQjtBQUFBLGdDQUNDO0FBQU8saUJBQU8sRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURELGVBRUM7QUFDQyxjQUFJLEVBQUMsU0FETjtBQUVDLFlBQUUsRUFBQyxTQUZKO0FBR0MsY0FBSSxFQUFDLElBSE47QUFJQyxjQUFJLEVBQUMsSUFKTjtBQUtDLGtCQUFRLE1BTFQ7QUFNQyxlQUFLLEVBQUVPLGNBTlI7QUFPQyxrQkFBUSxFQUFFLGtCQUFBRyxLQUFLO0FBQUEsbUJBQUlGLGlCQUFpQixDQUFDRSxLQUFLLENBQUNjLE1BQU4sQ0FBYUMsS0FBZCxDQUFyQjtBQUFBO0FBUGhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdkJELGVBbUNDO0FBQUssaUJBQVMsRUFBRXpCLHlFQUFoQjtBQUFBLCtCQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQW5DRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQTZDQTs7R0E1RVFFOztLQUFBQTtBQThFVCwrREFBZUEsV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC1mb3JtLmpzP2FmOTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL2NvbnRhY3QtZm9ybS5tb2R1bGUuY3NzJztcbmltcG9ydCBOb3RpZmljYXRpb24gZnJvbSAnLi4vdWkvbm90aWZpY2F0aW9uJztcbi8qXG5hc3luYyBmdW5jdGlvbiBzZW5kQ29udGFjdERhdGEoY29udGFjdERldGFpbHMpIHtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9jb250YWN0Jywge1xuXHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KGNvbnRhY3REZXRhaWxzKSxcblx0XHRoZWFkZXJzOiB7XG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXHRcdH0sXG5cdH0pO1xuXHRcblx0Lypcblx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuXHRpZiAoIXJlc3BvbnNlLm9rKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGRhdGEubWVzc2FnZSB8fCAnRXIgZ2luZyBpZXRzIHZlcmtlZXJkLicpO1xuXHR9XG5cdCovXG5cblxuZnVuY3Rpb24gQ29udGFjdEZvcm0oKSB7XG5cdGNvbnN0IFtlbnRlcmVkRW1haWwsIHNldEVudGVyZWRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG5cdGNvbnN0IFtlbnRlcmVkTmFtZSwgc2V0RW50ZXJlZE5hbWVdID0gdXNlU3RhdGUoJycpO1xuXHRjb25zdCBbZW50ZXJlZE1lc3NhZ2UsIHNldEVudGVyZWRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcblx0XG5cbiAgYXN5bmMgZnVuY3Rpb24gc2VuZE1lc3NhZ2VIYW5kbGVyKGV2ZW50KSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcbi8qXG5cdFx0Y29uc3QgZGF0YSA9IHtcbiAgICAgIGVudGVyZWROYW1lLFxuICAgICAgZW50ZXJlZEVtYWlsLFxuICAgICAgZW50ZXJlZE1lc3NhZ2UsXG4gICAgfTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiovXG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9hcGkvY29udGFjdCcsIHtcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHRlbnRlcmVkTmFtZTogZW50ZXJlZE5hbWUsXG5cdFx0XHRcdGVudGVyZWRFbWFpbDogZW50ZXJlZEVtYWlsLFxuXHRcdFx0XHRlbnRlcmVkbWVzc2FnZTogZW50ZXJlZE1lc3NhZ2UsXG5cdFx0XHR9KSxcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcblx0XHRcdH0sXG5cdFx0fSk7XG5cbiAgfTtcblx0XHRcblxuXHRyZXR1cm4gKFxuXHRcdDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWN0fT5cblx0XHRcdDxoMT5JZXRzIG9udGRla3Q/IDwvaDE+XG5cdFx0XHQ8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybX0gb25TdWJtaXQ9e3NlbmRNZXNzYWdlSGFuZGxlcn0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2xzfT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cblx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPSdlbWFpbCc+Sm91dyBlLW1haWw8L2xhYmVsPlxuXHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdHR5cGU9J2VtYWlsJ1xuXHRcdFx0XHRcdFx0XHRpZD0nZW1haWwnXG5cdFx0XHRcdFx0XHRcdHJlcXVpcmVkXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtlbnRlcmVkRW1haWx9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtldmVudCA9PiBzZXRFbnRlcmVkRW1haWwoZXZlbnQudGFyZ2V0LnZhbHVlKX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XG5cdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj0nbmFtZSc+Sm91dyBuYWFtPC9sYWJlbD5cblx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xuXHRcdFx0XHRcdFx0XHRpZD0nbmFtZSdcblx0XHRcdFx0XHRcdFx0cmVxdWlyZWRcblx0XHRcdFx0XHRcdFx0dmFsdWU9e2VudGVyZWROYW1lfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ZXZlbnQgPT4gc2V0RW50ZXJlZE5hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cblx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj0nbWVzc2FnZSc+VmVydGVsITwvbGFiZWw+XG5cdFx0XHRcdFx0PHRleHRhcmVhXG5cdFx0XHRcdFx0XHRuYW1lPSdtZXNzYWdlJ1xuXHRcdFx0XHRcdFx0aWQ9J21lc3NhZ2UnXG5cdFx0XHRcdFx0XHRjb2xzPSczMCdcblx0XHRcdFx0XHRcdHJvd3M9JzEwJ1xuXHRcdFx0XHRcdFx0cmVxdWlyZWRcblx0XHRcdFx0XHRcdHZhbHVlPXtlbnRlcmVkTWVzc2FnZX1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtldmVudCA9PiBzZXRFbnRlcmVkTWVzc2FnZShldmVudC50YXJnZXQudmFsdWUpfVxuXHRcdFx0XHRcdD48L3RleHRhcmVhPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9uc30+XG5cdFx0XHRcdFx0PGJ1dHRvbj5WZXJ6ZW5kZW48L2J1dHRvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Zvcm0+XG4gICAgICBcblx0XHQ8L3NlY3Rpb24+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RGb3JtO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiY2xhc3NlcyIsIk5vdGlmaWNhdGlvbiIsIkNvbnRhY3RGb3JtIiwiZW50ZXJlZEVtYWlsIiwic2V0RW50ZXJlZEVtYWlsIiwiZW50ZXJlZE5hbWUiLCJzZXRFbnRlcmVkTmFtZSIsImVudGVyZWRNZXNzYWdlIiwic2V0RW50ZXJlZE1lc3NhZ2UiLCJzZW5kTWVzc2FnZUhhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImVudGVyZWRtZXNzYWdlIiwiaGVhZGVycyIsInJlcyIsImNvbnRhY3QiLCJmb3JtIiwiY29udHJvbHMiLCJjb250cm9sIiwidGFyZ2V0IiwidmFsdWUiLCJhY3Rpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/contact/contact-form.js\n");

/***/ })

});