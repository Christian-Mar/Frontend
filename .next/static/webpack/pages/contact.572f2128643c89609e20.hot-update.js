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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_christianmarginet_Documents_next_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_christianmarginet_Documents_next_Frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_christianmarginet_Documents_next_Frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_christianmarginet_Documents_next_Frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contact_form_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-form.module.css */ \"./components/contact/contact-form.module.css\");\n/* harmony import */ var _contact_form_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_contact_form_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _ui_notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/notification */ \"./components/ui/notification.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/christianmarginet/Documents/next-Frontend/components/contact/contact-form.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n/*\nasync function sendContactData(contactDetails) {\n\tconst response = await fetch('/api/contact', {\n\t\tmethod: 'POST',\n\t\tbody: JSON.stringify(contactDetails),\n\t\theaders: {\n\t\t\t'Content-Type': 'application/json',\n\t\t},\n\t});\n\t\n\t/*\n\tconst data = await response.json();\n\n\tif (!response.ok) {\n\t\tthrow new Error(data.message || 'Er ging iets verkeerd.');\n\t}\n\t*/\n\n\n\nfunction ContactForm() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),\n      enteredEmail = _useState[0],\n      setEnteredEmail = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),\n      enteredName = _useState2[0],\n      setEnteredName = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),\n      enteredMessage = _useState3[0],\n      setEnteredMessage = _useState3[1];\n\n  function sendMessageHandler(_x) {\n    return _sendMessageHandler.apply(this, arguments);\n  }\n\n  function _sendMessageHandler() {\n    _sendMessageHandler = (0,_Users_christianmarginet_Documents_next_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_christianmarginet_Documents_next_Frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(event) {\n      var data;\n      return _Users_christianmarginet_Documents_next_Frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              event.preventDefault();\n              data = {\n                enteredName: enteredName,\n                enteredEmail: enteredEmail,\n                enteredMessage: enteredMessage\n              };\n              console.log(data);\n              _context.next = 5;\n              return fetch('/api/contact', {\n                method: 'POST',\n                body: JSON.stringify(),\n                headers: {\n                  'Content-Type': 'application/json'\n                }\n              });\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _sendMessageHandler.apply(this, arguments);\n  }\n\n  ;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"section\", {\n    className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_5___default().contact),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"h1\", {\n      children: \"Iets ontdekt? \"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 4\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"form\", {\n      className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_5___default().form),\n      onSubmit: sendMessageHandler,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_5___default().controls),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n          className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_5___default().control),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"label\", {\n            htmlFor: \"email\",\n            children: \"Jouw e-mail\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 7\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"input\", {\n            type: \"email\",\n            id: \"email\",\n            required: true,\n            value: enteredEmail,\n            onChange: function onChange(event) {\n              return setEnteredEmail(event.target.value);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 7\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 6\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n          className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_5___default().control),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"label\", {\n            htmlFor: \"name\",\n            children: \"Jouw naam\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 66,\n            columnNumber: 7\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"input\", {\n            type: \"text\",\n            id: \"name\",\n            required: true,\n            value: enteredName,\n            onChange: function onChange(event) {\n              return setEnteredName(event.target.value);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 67,\n            columnNumber: 7\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 5\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_5___default().control),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"label\", {\n          htmlFor: \"message\",\n          children: \"Vertel!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 6\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"textarea\", {\n          name: \"message\",\n          id: \"message\",\n          cols: \"30\",\n          rows: \"10\",\n          required: true,\n          value: enteredMessage,\n          onChange: function onChange(event) {\n            return setEnteredMessage(event.target.value);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 5\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_5___default().actions),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"button\", {\n          children: \"Verzenden\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 6\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 51,\n    columnNumber: 3\n  }, this);\n}\n\n_s(ContactForm, \"x7Uml3AYNluHaRq+qCSai2xW8jQ=\");\n\n_c = ContactForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"ContactForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y0FERCxlQXVCQztBQUFLLGlCQUFTLEVBQUUxQix5RUFBaEI7QUFBQSxnQ0FDQztBQUFPLGlCQUFPLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERCxlQUVDO0FBQ0MsY0FBSSxFQUFDLFNBRE47QUFFQyxZQUFFLEVBQUMsU0FGSjtBQUdDLGNBQUksRUFBQyxJQUhOO0FBSUMsY0FBSSxFQUFDLElBSk47QUFLQyxrQkFBUSxNQUxUO0FBTUMsZUFBSyxFQUFFTyxjQU5SO0FBT0Msa0JBQVEsRUFBRSxrQkFBQUcsS0FBSztBQUFBLG1CQUFJRixpQkFBaUIsQ0FBQ0UsS0FBSyxDQUFDZSxNQUFOLENBQWFDLEtBQWQsQ0FBckI7QUFBQTtBQVBoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXZCRCxlQW1DQztBQUFLLGlCQUFTLEVBQUUxQix5RUFBaEI7QUFBQSwrQkFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FuQ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUE2Q0E7O0dBeEVRRTs7S0FBQUE7QUEwRVQsK0RBQWVBLFdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QtZm9ybS5qcz9hZjk0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9jb250YWN0LWZvcm0ubW9kdWxlLmNzcyc7XG5pbXBvcnQgTm90aWZpY2F0aW9uIGZyb20gJy4uL3VpL25vdGlmaWNhdGlvbic7XG4vKlxuYXN5bmMgZnVuY3Rpb24gc2VuZENvbnRhY3REYXRhKGNvbnRhY3REZXRhaWxzKSB7XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvY29udGFjdCcsIHtcblx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRib2R5OiBKU09OLnN0cmluZ2lmeShjb250YWN0RGV0YWlscyksXG5cdFx0aGVhZGVyczoge1xuXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcblx0XHR9LFxuXHR9KTtcblx0XG5cdC8qXG5cdGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cblx0aWYgKCFyZXNwb25zZS5vaykge1xuXHRcdHRocm93IG5ldyBFcnJvcihkYXRhLm1lc3NhZ2UgfHwgJ0VyIGdpbmcgaWV0cyB2ZXJrZWVyZC4nKTtcblx0fVxuXHQqL1xuXG5cbmZ1bmN0aW9uIENvbnRhY3RGb3JtKCkge1xuXHRjb25zdCBbZW50ZXJlZEVtYWlsLCBzZXRFbnRlcmVkRW1haWxdID0gdXNlU3RhdGUoJycpO1xuXHRjb25zdCBbZW50ZXJlZE5hbWUsIHNldEVudGVyZWROYW1lXSA9IHVzZVN0YXRlKCcnKTtcblx0Y29uc3QgW2VudGVyZWRNZXNzYWdlLCBzZXRFbnRlcmVkTWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XG5cdFxuXG4gIGFzeW5jIGZ1bmN0aW9uIHNlbmRNZXNzYWdlSGFuZGxlcihldmVudCkge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRjb25zdCBkYXRhID0ge1xuICAgICAgZW50ZXJlZE5hbWUsXG4gICAgICBlbnRlcmVkRW1haWwsXG4gICAgICBlbnRlcmVkTWVzc2FnZSxcbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG5cdFx0YXdhaXQgZmV0Y2goJy9hcGkvY29udGFjdCcsIHtcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoKSxcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcblx0XHRcdH0sXG5cdFx0fSk7XG5cbiAgfTtcblx0XHRcblxuXHRyZXR1cm4gKFxuXHRcdDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWN0fT5cblx0XHRcdDxoMT5JZXRzIG9udGRla3Q/IDwvaDE+XG5cdFx0XHQ8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybX0gb25TdWJtaXQ9e3NlbmRNZXNzYWdlSGFuZGxlcn0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2xzfT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cblx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPSdlbWFpbCc+Sm91dyBlLW1haWw8L2xhYmVsPlxuXHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdHR5cGU9J2VtYWlsJ1xuXHRcdFx0XHRcdFx0XHRpZD0nZW1haWwnXG5cdFx0XHRcdFx0XHRcdHJlcXVpcmVkXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtlbnRlcmVkRW1haWx9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtldmVudCA9PiBzZXRFbnRlcmVkRW1haWwoZXZlbnQudGFyZ2V0LnZhbHVlKX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XG5cdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj0nbmFtZSc+Sm91dyBuYWFtPC9sYWJlbD5cblx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xuXHRcdFx0XHRcdFx0XHRpZD0nbmFtZSdcblx0XHRcdFx0XHRcdFx0cmVxdWlyZWRcblx0XHRcdFx0XHRcdFx0dmFsdWU9e2VudGVyZWROYW1lfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ZXZlbnQgPT4gc2V0RW50ZXJlZE5hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cblx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj0nbWVzc2FnZSc+VmVydGVsITwvbGFiZWw+XG5cdFx0XHRcdFx0PHRleHRhcmVhXG5cdFx0XHRcdFx0XHRuYW1lPSdtZXNzYWdlJ1xuXHRcdFx0XHRcdFx0aWQ9J21lc3NhZ2UnXG5cdFx0XHRcdFx0XHRjb2xzPSczMCdcblx0XHRcdFx0XHRcdHJvd3M9JzEwJ1xuXHRcdFx0XHRcdFx0cmVxdWlyZWRcblx0XHRcdFx0XHRcdHZhbHVlPXtlbnRlcmVkTWVzc2FnZX1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtldmVudCA9PiBzZXRFbnRlcmVkTWVzc2FnZShldmVudC50YXJnZXQudmFsdWUpfVxuXHRcdFx0XHRcdD48L3RleHRhcmVhPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9uc30+XG5cdFx0XHRcdFx0PGJ1dHRvbj5WZXJ6ZW5kZW48L2J1dHRvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Zvcm0+XG4gICAgICBcblx0XHQ8L3NlY3Rpb24+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RGb3JtO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiY2xhc3NlcyIsIk5vdGlmaWNhdGlvbiIsIkNvbnRhY3RGb3JtIiwiZW50ZXJlZEVtYWlsIiwic2V0RW50ZXJlZEVtYWlsIiwiZW50ZXJlZE5hbWUiLCJzZXRFbnRlcmVkTmFtZSIsImVudGVyZWRNZXNzYWdlIiwic2V0RW50ZXJlZE1lc3NhZ2UiLCJzZW5kTWVzc2FnZUhhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsImNvbnRhY3QiLCJmb3JtIiwiY29udHJvbHMiLCJjb250cm9sIiwidGFyZ2V0IiwidmFsdWUiLCJhY3Rpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/contact/contact-form.js\n");

/***/ })

});