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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_christianmarginet_Documents_next_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_christianmarginet_Documents_next_Frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_christianmarginet_Documents_next_Frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_christianmarginet_Documents_next_Frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contact_form_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-form.module.css */ \"./components/contact/contact-form.module.css\");\n/* harmony import */ var _contact_form_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_contact_form_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _ui_notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/notification */ \"./components/ui/notification.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/christianmarginet/Documents/next-Frontend/components/contact/contact-form.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction sendContactData(_x) {\n  return _sendContactData.apply(this, arguments);\n}\n\nfunction _sendContactData() {\n  _sendContactData = (0,_Users_christianmarginet_Documents_next_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_christianmarginet_Documents_next_Frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(contactDetails) {\n    var response;\n    return _Users_christianmarginet_Documents_next_Frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return fetch('/api/contact', {\n              method: 'POST',\n              body: JSON.stringify(contactDetails),\n              headers: {\n                'Content-Type': 'application/json'\n              }\n            });\n\n          case 2:\n            response = _context2.sent;\n\n          case 3:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n  return _sendContactData.apply(this, arguments);\n}\n\nfunction ContactForm() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),\n      enteredEmail = _useState[0],\n      setEnteredEmail = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),\n      enteredName = _useState2[0],\n      setEnteredName = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),\n      enteredMessage = _useState3[0],\n      setEnteredMessage = _useState3[1];\n\n  function sendMessageHandler(_x2) {\n    return _sendMessageHandler.apply(this, arguments);\n  }\n\n  function _sendMessageHandler() {\n    _sendMessageHandler = (0,_Users_christianmarginet_Documents_next_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_christianmarginet_Documents_next_Frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(event) {\n      var data;\n      return _Users_christianmarginet_Documents_next_Frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              event.preventDefault();\n              data = {\n                enteredName: enteredName,\n                enteredEmail: enteredEmail,\n                enteredMessage: enteredMessage\n              };\n              console.log(data);\n\n            case 3:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _sendMessageHandler.apply(this, arguments);\n  }\n\n  ;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"section\", {\n    className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_5___default().contact),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"h1\", {\n      children: \"Iets ontdekt? \"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 4\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"form\", {\n      className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_5___default().form),\n      onSubmit: sendMessageHandler,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_5___default().controls),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n          className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_5___default().control),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"label\", {\n            htmlFor: \"email\",\n            children: \"Jouw e-mail\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 7\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"input\", {\n            type: \"email\",\n            id: \"email\",\n            required: true,\n            value: enteredEmail,\n            onChange: function onChange(event) {\n              return setEnteredEmail(event.target.value);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 7\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 6\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n          className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_5___default().control),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"label\", {\n            htmlFor: \"name\",\n            children: \"Jouw naam\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 7\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"input\", {\n            type: \"text\",\n            id: \"name\",\n            required: true,\n            value: enteredName,\n            onChange: function onChange(event) {\n              return setEnteredName(event.target.value);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 7\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 5\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_5___default().control),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"label\", {\n          htmlFor: \"message\",\n          children: \"Vertel!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 6\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"textarea\", {\n          name: \"message\",\n          id: \"message\",\n          cols: \"30\",\n          rows: \"10\",\n          required: true,\n          value: enteredMessage,\n          onChange: function onChange(event) {\n            return setEnteredMessage(event.target.value);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 5\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_5___default().actions),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"button\", {\n          children: \"Verzenden\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 6\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 45,\n    columnNumber: 3\n  }, this);\n}\n\n_s(ContactForm, \"x7Uml3AYNluHaRq+qCSai2xW8jQ=\");\n\n_c = ContactForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"ContactForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC1mb3JtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O1NBRWVJOzs7Ozt5VEFBZixrQkFBK0JDLGNBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ3dCQyxLQUFLLENBQUMsY0FBRCxFQUFpQjtBQUM1Q0MsY0FBQUEsTUFBTSxFQUFFLE1BRG9DO0FBRTVDQyxjQUFBQSxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlTCxjQUFmLENBRnNDO0FBRzVDTSxjQUFBQSxPQUFPLEVBQUU7QUFDUixnQ0FBZ0I7QUFEUjtBQUhtQyxhQUFqQixDQUQ3Qjs7QUFBQTtBQUNPQyxZQUFBQSxRQURQOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBa0JBLFNBQVNDLFdBQVQsR0FBdUI7QUFBQTs7QUFDdEIsa0JBQXdDYiwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEQ7QUFBQSxNQUFPYyxZQUFQO0FBQUEsTUFBcUJDLGVBQXJCOztBQUNBLG1CQUFzQ2YsK0NBQVEsQ0FBQyxFQUFELENBQTlDO0FBQUEsTUFBT2dCLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBQ0EsbUJBQTRDakIsK0NBQVEsQ0FBQyxFQUFELENBQXBEO0FBQUEsTUFBT2tCLGNBQVA7QUFBQSxNQUF1QkMsaUJBQXZCOztBQUhzQixXQU1OQyxrQkFOTTtBQUFBO0FBQUE7O0FBQUE7QUFBQSw4VEFNckIsaUJBQWtDQyxLQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQUEsY0FBQUEsS0FBSyxDQUFDQyxjQUFOO0FBRU1DLGNBQUFBLElBSE4sR0FHYTtBQUNUUCxnQkFBQUEsV0FBVyxFQUFYQSxXQURTO0FBRVRGLGdCQUFBQSxZQUFZLEVBQVpBLFlBRlM7QUFHVEksZ0JBQUFBLGNBQWMsRUFBZEE7QUFIUyxlQUhiO0FBUUVNLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaOztBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTnFCO0FBQUE7QUFBQTs7QUFrQnBCO0FBR0Ysc0JBQ0M7QUFBUyxhQUFTLEVBQUVyQix5RUFBcEI7QUFBQSw0QkFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGVBRUM7QUFBTSxlQUFTLEVBQUVBLHNFQUFqQjtBQUErQixjQUFRLEVBQUVrQixrQkFBekM7QUFBQSw4QkFDQztBQUFLLGlCQUFTLEVBQUVsQiwwRUFBaEI7QUFBQSxnQ0FDQztBQUFLLG1CQUFTLEVBQUVBLHlFQUFoQjtBQUFBLGtDQUNDO0FBQU8sbUJBQU8sRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURELGVBRUM7QUFDQyxnQkFBSSxFQUFDLE9BRE47QUFFQyxjQUFFLEVBQUMsT0FGSjtBQUdDLG9CQUFRLE1BSFQ7QUFJQyxpQkFBSyxFQUFFWSxZQUpSO0FBS0Msb0JBQVEsRUFBRSxrQkFBQU8sS0FBSztBQUFBLHFCQUFJTixlQUFlLENBQUNNLEtBQUssQ0FBQ1MsTUFBTixDQUFhQyxLQUFkLENBQW5CO0FBQUE7QUFMaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQsZUFXQztBQUFLLG1CQUFTLEVBQUU3Qix5RUFBaEI7QUFBQSxrQ0FDQztBQUFPLG1CQUFPLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERCxlQUVDO0FBQ0MsZ0JBQUksRUFBQyxNQUROO0FBRUMsY0FBRSxFQUFDLE1BRko7QUFHQyxvQkFBUSxNQUhUO0FBSUMsaUJBQUssRUFBRWMsV0FKUjtBQUtDLG9CQUFRLEVBQUUsa0JBQUFLLEtBQUs7QUFBQSxxQkFBSUosY0FBYyxDQUFDSSxLQUFLLENBQUNTLE1BQU4sQ0FBYUMsS0FBZCxDQUFsQjtBQUFBO0FBTGhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELGVBdUJDO0FBQUssaUJBQVMsRUFBRTdCLHlFQUFoQjtBQUFBLGdDQUNDO0FBQU8saUJBQU8sRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURELGVBRUM7QUFDQyxjQUFJLEVBQUMsU0FETjtBQUVDLFlBQUUsRUFBQyxTQUZKO0FBR0MsY0FBSSxFQUFDLElBSE47QUFJQyxjQUFJLEVBQUMsSUFKTjtBQUtDLGtCQUFRLE1BTFQ7QUFNQyxlQUFLLEVBQUVnQixjQU5SO0FBT0Msa0JBQVEsRUFBRSxrQkFBQUcsS0FBSztBQUFBLG1CQUFJRixpQkFBaUIsQ0FBQ0UsS0FBSyxDQUFDUyxNQUFOLENBQWFDLEtBQWQsQ0FBckI7QUFBQTtBQVBoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXZCRCxlQW1DQztBQUFLLGlCQUFTLEVBQUU3Qix5RUFBaEI7QUFBQSwrQkFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FuQ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUE2Q0E7O0dBbEVRVzs7S0FBQUE7QUFvRVQsK0RBQWVBLFdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QtZm9ybS5qcz9hZjk0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL2NvbnRhY3QtZm9ybS5tb2R1bGUuY3NzJztcbmltcG9ydCBOb3RpZmljYXRpb24gZnJvbSAnLi4vdWkvbm90aWZpY2F0aW9uJztcblxuYXN5bmMgZnVuY3Rpb24gc2VuZENvbnRhY3REYXRhKGNvbnRhY3REZXRhaWxzKSB7XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvY29udGFjdCcsIHtcblx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRib2R5OiBKU09OLnN0cmluZ2lmeShjb250YWN0RGV0YWlscyksXG5cdFx0aGVhZGVyczoge1xuXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcblx0XHR9LFxuXHR9KTtcblx0XG5cdC8qXG5cdGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cblx0aWYgKCFyZXNwb25zZS5vaykge1xuXHRcdHRocm93IG5ldyBFcnJvcihkYXRhLm1lc3NhZ2UgfHwgJ0VyIGdpbmcgaWV0cyB2ZXJrZWVyZC4nKTtcblx0fVxuXHQqL1xufVxuXG5mdW5jdGlvbiBDb250YWN0Rm9ybSgpIHtcblx0Y29uc3QgW2VudGVyZWRFbWFpbCwgc2V0RW50ZXJlZEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcblx0Y29uc3QgW2VudGVyZWROYW1lLCBzZXRFbnRlcmVkTmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG5cdGNvbnN0IFtlbnRlcmVkTWVzc2FnZSwgc2V0RW50ZXJlZE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xuXHRcblxuICBhc3luYyBmdW5jdGlvbiBzZW5kTWVzc2FnZUhhbmRsZXIoZXZlbnQpIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0Y29uc3QgZGF0YSA9IHtcbiAgICAgIGVudGVyZWROYW1lLFxuICAgICAgZW50ZXJlZEVtYWlsLFxuICAgICAgZW50ZXJlZE1lc3NhZ2UsXG4gICAgfTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcblxuXG5cdFx0XG4gIH07XG5cdFx0XG5cblx0cmV0dXJuIChcblx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFjdH0+XG5cdFx0XHQ8aDE+SWV0cyBvbnRkZWt0PyA8L2gxPlxuXHRcdFx0PGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19IG9uU3VibWl0PXtzZW5kTWVzc2FnZUhhbmRsZXJ9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sc30+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XG5cdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj0nZW1haWwnPkpvdXcgZS1tYWlsPC9sYWJlbD5cblx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHR0eXBlPSdlbWFpbCdcblx0XHRcdFx0XHRcdFx0aWQ9J2VtYWlsJ1xuXHRcdFx0XHRcdFx0XHRyZXF1aXJlZFxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17ZW50ZXJlZEVtYWlsfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ZXZlbnQgPT4gc2V0RW50ZXJlZEVtYWlsKGV2ZW50LnRhcmdldC52YWx1ZSl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxuXHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9J25hbWUnPkpvdXcgbmFhbTwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcblx0XHRcdFx0XHRcdFx0aWQ9J25hbWUnXG5cdFx0XHRcdFx0XHRcdHJlcXVpcmVkXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtlbnRlcmVkTmFtZX1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2V2ZW50ID0+IHNldEVudGVyZWROYW1lKGV2ZW50LnRhcmdldC52YWx1ZSl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XG5cdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9J21lc3NhZ2UnPlZlcnRlbCE8L2xhYmVsPlxuXHRcdFx0XHRcdDx0ZXh0YXJlYVxuXHRcdFx0XHRcdFx0bmFtZT0nbWVzc2FnZSdcblx0XHRcdFx0XHRcdGlkPSdtZXNzYWdlJ1xuXHRcdFx0XHRcdFx0Y29scz0nMzAnXG5cdFx0XHRcdFx0XHRyb3dzPScxMCdcblx0XHRcdFx0XHRcdHJlcXVpcmVkXG5cdFx0XHRcdFx0XHR2YWx1ZT17ZW50ZXJlZE1lc3NhZ2V9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ZXZlbnQgPT4gc2V0RW50ZXJlZE1lc3NhZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKX1cblx0XHRcdFx0XHQ+PC90ZXh0YXJlYT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbnN9PlxuXHRcdFx0XHRcdDxidXR0b24+VmVyemVuZGVuPC9idXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9mb3JtPlxuICAgICAgXG5cdFx0PC9zZWN0aW9uPlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0Rm9ybTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNsYXNzZXMiLCJOb3RpZmljYXRpb24iLCJzZW5kQ29udGFjdERhdGEiLCJjb250YWN0RGV0YWlscyIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJDb250YWN0Rm9ybSIsImVudGVyZWRFbWFpbCIsInNldEVudGVyZWRFbWFpbCIsImVudGVyZWROYW1lIiwic2V0RW50ZXJlZE5hbWUiLCJlbnRlcmVkTWVzc2FnZSIsInNldEVudGVyZWRNZXNzYWdlIiwic2VuZE1lc3NhZ2VIYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY29udGFjdCIsImZvcm0iLCJjb250cm9scyIsImNvbnRyb2wiLCJ0YXJnZXQiLCJ2YWx1ZSIsImFjdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/contact/contact-form.js\n");

/***/ })

});