module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/contact.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/contact/contact-form.js":
/*!********************************************!*\
  !*** ./components/contact/contact-form.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contact_form_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-form.module.css */ \"./components/contact/contact-form.module.css\");\n/* harmony import */ var _contact_form_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_contact_form_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/christianmarginet/Documents/next-Frontend/components/contact/contact-form.js\";\n\n\n\nfunction ContactForm() {\n  const {\n    0: enteredEmail,\n    1: setEnteredEmail\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('');\n  const {\n    0: enteredName,\n    1: setEnteredName\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('');\n  const {\n    0: enteredMessage,\n    1: setEnteredMessage\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('');\n\n  async function sendMessageHandler(event) {\n    event.preventDefault(); // optional: add client-side validation\n\n    await fetch('/api/contact', {\n      method: 'POST',\n      body: JSON.stringify({\n        email: enteredEmail,\n        name: enteredName,\n        message: enteredMessage\n      }),\n      headers: {\n        'Content-Type': 'application/json'\n      }\n    });\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    className: _contact_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.contact,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Iets ontdekt? \"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n      className: _contact_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.form,\n      onSubmit: sendMessageHandler,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _contact_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.controls,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _contact_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.control,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n            htmlFor: \"email\",\n            children: \"Jouw e-mail\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            type: \"email\",\n            id: \"email\",\n            required: true,\n            value: enteredEmail,\n            onChange: event => setEnteredEmail(event.target.value)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 7\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 6\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _contact_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.control,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n            htmlFor: \"name\",\n            children: \"Jouw naam\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            type: \"text\",\n            id: \"name\",\n            required: true,\n            value: enteredName,\n            onChange: event => setEnteredName(event.target.value)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 46,\n            columnNumber: 7\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _contact_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.control,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          htmlFor: \"message\",\n          children: \"Vertel!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 6\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"textarea\", {\n          name: \"message\",\n          id: \"message\",\n          cols: \"30\",\n          rows: \"10\",\n          required: true,\n          value: enteredMessage,\n          onChange: event => setEnteredMessage(event.target.value)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _contact_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.actions,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          children: \"Verzenden\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 6\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 3\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactForm);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC1mb3JtLmpzP2FmOTQiXSwibmFtZXMiOlsiQ29udGFjdEZvcm0iLCJlbnRlcmVkRW1haWwiLCJzZXRFbnRlcmVkRW1haWwiLCJ1c2VTdGF0ZSIsImVudGVyZWROYW1lIiwic2V0RW50ZXJlZE5hbWUiLCJlbnRlcmVkTWVzc2FnZSIsInNldEVudGVyZWRNZXNzYWdlIiwic2VuZE1lc3NhZ2VIYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlbWFpbCIsIm5hbWUiLCJtZXNzYWdlIiwiaGVhZGVycyIsImNsYXNzZXMiLCJjb250YWN0IiwiZm9ybSIsImNvbnRyb2xzIiwiY29udHJvbCIsInRhcmdldCIsInZhbHVlIiwiYWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxXQUFULEdBQXVCO0FBRXJCLFFBQU07QUFBQSxPQUFDQyxZQUFEO0FBQUEsT0FBZUM7QUFBZixNQUFrQ0Msc0RBQVEsQ0FBQyxFQUFELENBQWhEO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFdBQUQ7QUFBQSxPQUFjQztBQUFkLE1BQWdDRixzREFBUSxDQUFDLEVBQUQsQ0FBOUM7QUFDQSxRQUFNO0FBQUEsT0FBQ0csY0FBRDtBQUFBLE9BQWlCQztBQUFqQixNQUFzQ0osc0RBQVEsQ0FBQyxFQUFELENBQXBEOztBQUVBLGlCQUFlSyxrQkFBZixDQUFrQ0MsS0FBbEMsRUFBeUM7QUFDdkNBLFNBQUssQ0FBQ0MsY0FBTixHQUR1QyxDQUd2Qzs7QUFFQSxVQUFNQyxLQUFLLENBQUMsY0FBRCxFQUFpQjtBQUMxQkMsWUFBTSxFQUFFLE1BRGtCO0FBRTFCQyxVQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ25CQyxhQUFLLEVBQUVmLFlBRFk7QUFFbkJnQixZQUFJLEVBQUViLFdBRmE7QUFHbkJjLGVBQU8sRUFBRVo7QUFIVSxPQUFmLENBRm9CO0FBTzFCYSxhQUFPLEVBQUU7QUFDUCx3QkFBZ0I7QUFEVDtBQVBpQixLQUFqQixDQUFYO0FBV0Q7O0FBRUYsc0JBQ0M7QUFBUyxhQUFTLEVBQUVDLCtEQUFPLENBQUNDLE9BQTVCO0FBQUEsNEJBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQUVDO0FBQU0sZUFBUyxFQUFFRCwrREFBTyxDQUFDRSxJQUF6QjtBQUErQixjQUFRLEVBQUVkLGtCQUF6QztBQUFBLDhCQUNDO0FBQUssaUJBQVMsRUFBRVksK0RBQU8sQ0FBQ0csUUFBeEI7QUFBQSxnQ0FDQztBQUFLLG1CQUFTLEVBQUVILCtEQUFPLENBQUNJLE9BQXhCO0FBQUEsa0NBQ0M7QUFBTyxtQkFBTyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsZUFFQztBQUNDLGdCQUFJLEVBQUMsT0FETjtBQUVDLGNBQUUsRUFBQyxPQUZKO0FBR0Msb0JBQVEsTUFIVDtBQUlDLGlCQUFLLEVBQUV2QixZQUpSO0FBS0Msb0JBQVEsRUFBRVEsS0FBSyxJQUFJUCxlQUFlLENBQUNPLEtBQUssQ0FBQ2dCLE1BQU4sQ0FBYUMsS0FBZDtBQUxuQztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERCxlQVdDO0FBQUssbUJBQVMsRUFBRU4sK0RBQU8sQ0FBQ0ksT0FBeEI7QUFBQSxrQ0FDQztBQUFPLG1CQUFPLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERCxlQUVDO0FBQ0MsZ0JBQUksRUFBQyxNQUROO0FBRUMsY0FBRSxFQUFDLE1BRko7QUFHQyxvQkFBUSxNQUhUO0FBSUMsaUJBQUssRUFBRXBCLFdBSlI7QUFLQyxvQkFBUSxFQUFFSyxLQUFLLElBQUlKLGNBQWMsQ0FBQ0ksS0FBSyxDQUFDZ0IsTUFBTixDQUFhQyxLQUFkO0FBTGxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELGVBdUJDO0FBQUssaUJBQVMsRUFBRU4sK0RBQU8sQ0FBQ0ksT0FBeEI7QUFBQSxnQ0FDQztBQUFPLGlCQUFPLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERCxlQUVDO0FBQ0MsY0FBSSxFQUFDLFNBRE47QUFFQyxZQUFFLEVBQUMsU0FGSjtBQUdDLGNBQUksRUFBQyxJQUhOO0FBSUMsY0FBSSxFQUFDLElBSk47QUFLTyxrQkFBUSxNQUxmO0FBTUMsZUFBSyxFQUFFbEIsY0FOUjtBQU9DLGtCQUFRLEVBQUVHLEtBQUssSUFBSUYsaUJBQWlCLENBQUNFLEtBQUssQ0FBQ2dCLE1BQU4sQ0FBYUMsS0FBZDtBQVByQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXZCRCxlQW1DQztBQUFLLGlCQUFTLEVBQUVOLCtEQUFPLENBQUNPLE9BQXhCO0FBQUEsK0JBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbkNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBNENBOztBQUVjM0IsMEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC1mb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vY29udGFjdC1mb3JtLm1vZHVsZS5jc3MnO1xuXG5mdW5jdGlvbiBDb250YWN0Rm9ybSgpIHtcblxuICBjb25zdCBbZW50ZXJlZEVtYWlsLCBzZXRFbnRlcmVkRW1haWxdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZW50ZXJlZE5hbWUsIHNldEVudGVyZWROYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2VudGVyZWRNZXNzYWdlLCBzZXRFbnRlcmVkTWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gc2VuZE1lc3NhZ2VIYW5kbGVyKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIC8vIG9wdGlvbmFsOiBhZGQgY2xpZW50LXNpZGUgdmFsaWRhdGlvblxuXG4gICAgYXdhaXQgZmV0Y2goJy9hcGkvY29udGFjdCcsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBlbWFpbDogZW50ZXJlZEVtYWlsLFxuICAgICAgICBuYW1lOiBlbnRlcmVkTmFtZSxcbiAgICAgICAgbWVzc2FnZTogZW50ZXJlZE1lc3NhZ2VcbiAgICAgIH0pLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cblx0cmV0dXJuIChcblx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFjdH0+XG5cdFx0XHQ8aDE+SWV0cyBvbnRkZWt0PyA8L2gxPlxuXHRcdFx0PGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19IG9uU3VibWl0PXtzZW5kTWVzc2FnZUhhbmRsZXJ9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sc30+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XG5cdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj0nZW1haWwnPkpvdXcgZS1tYWlsPC9sYWJlbD5cblx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHR0eXBlPSdlbWFpbCdcblx0XHRcdFx0XHRcdFx0aWQ9J2VtYWlsJ1xuXHRcdFx0XHRcdFx0XHRyZXF1aXJlZFxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17ZW50ZXJlZEVtYWlsfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ZXZlbnQgPT4gc2V0RW50ZXJlZEVtYWlsKGV2ZW50LnRhcmdldC52YWx1ZSl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxuXHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9J25hbWUnPkpvdXcgbmFhbTwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcblx0XHRcdFx0XHRcdFx0aWQ9J25hbWUnXG5cdFx0XHRcdFx0XHRcdHJlcXVpcmVkXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtlbnRlcmVkTmFtZX1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2V2ZW50ID0+IHNldEVudGVyZWROYW1lKGV2ZW50LnRhcmdldC52YWx1ZSl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XG5cdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9J21lc3NhZ2UnPlZlcnRlbCE8L2xhYmVsPlxuXHRcdFx0XHRcdDx0ZXh0YXJlYVxuXHRcdFx0XHRcdFx0bmFtZT0nbWVzc2FnZSdcblx0XHRcdFx0XHRcdGlkPSdtZXNzYWdlJ1xuXHRcdFx0XHRcdFx0Y29scz0nMzAnXG5cdFx0XHRcdFx0XHRyb3dzPScxMCdcbiAgICAgICAgICAgIHJlcXVpcmVkXG5cdFx0XHRcdFx0XHR2YWx1ZT17ZW50ZXJlZE1lc3NhZ2V9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ZXZlbnQgPT4gc2V0RW50ZXJlZE1lc3NhZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKX1cblx0XHRcdFx0XHQ+PC90ZXh0YXJlYT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbnN9PlxuXHRcdFx0XHRcdDxidXR0b24+VmVyemVuZGVuPC9idXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9mb3JtPlxuXHRcdDwvc2VjdGlvbj5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdEZvcm07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/contact/contact-form.js\n");

/***/ }),

/***/ "./components/contact/contact-form.module.css":
/*!****************************************************!*\
  !*** ./components/contact/contact-form.module.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"contact\": \"contact-form_contact__2DYss\",\n\t\"form\": \"contact-form_form__1RTmV\",\n\t\"controls\": \"contact-form_controls__3o80h\",\n\t\"control\": \"contact-form_control__1hqvU\",\n\t\"actions\": \"contact-form_actions__RzW-v\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC1mb3JtLm1vZHVsZS5jc3M/MGJjMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QtZm9ybS5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFjdFwiOiBcImNvbnRhY3QtZm9ybV9jb250YWN0X18yRFlzc1wiLFxuXHRcImZvcm1cIjogXCJjb250YWN0LWZvcm1fZm9ybV9fMVJUbVZcIixcblx0XCJjb250cm9sc1wiOiBcImNvbnRhY3QtZm9ybV9jb250cm9sc19fM284MGhcIixcblx0XCJjb250cm9sXCI6IFwiY29udGFjdC1mb3JtX2NvbnRyb2xfXzFocXZVXCIsXG5cdFwiYWN0aW9uc1wiOiBcImNvbnRhY3QtZm9ybV9hY3Rpb25zX19SelctdlwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/contact/contact-form.module.css\n");

/***/ }),

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_contact_contact_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/contact/contact-form */ \"./components/contact/contact-form.js\");\n\nvar _jsxFileName = \"/Users/christianmarginet/Documents/next-Frontend/pages/contact.js\";\n\n\n\nfunction ContactPage() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_contact_contact_form__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 10\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb250YWN0LmpzPzAwYjciXSwibmFtZXMiOlsiQ29udGFjdFBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxXQUFULEdBQXdCO0FBQ3RCLHNCQUFPLHFFQUFDLHdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEOztBQUVjQSwwRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2NvbnRhY3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQ29udGFjdEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QtZm9ybSdcblxuZnVuY3Rpb24gQ29udGFjdFBhZ2UgKCkge1xuICByZXR1cm4gPENvbnRhY3RGb3JtIC8+XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/contact.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });