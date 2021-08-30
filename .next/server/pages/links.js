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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/links.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/links/links.js":
/*!***********************************!*\
  !*** ./components/links/links.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _links_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./links.module.css */ \"./components/links/links.module.css\");\n/* harmony import */ var _links_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_links_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/christianmarginet/Documents/next-Frontend/components/links/links.js\";\n\n\nfunction Links() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    className: _links_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.links,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Links & referenties\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: \"https://htmlcheatsheet.com/css/\",\n        target: \"_blank\",\n        rel: \"noopener noreferrer\",\n        children: \"CSS CheatSheet\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 5\n      }, this), \": interactief overzicht CSS met simulatiemogelijkheden\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: \"https://www.markdownguide.org/cheat-sheet/\",\n        target: \"_blank\",\n        rel: \"noopener noreferrer\",\n        children: \"Markdown CheatSheet\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 5\n      }, this), \": basis syntax voor het schrijven in .md-files\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: \"https://react-select.com/home\",\n        target: \"_blank\",\n        rel: \"noopener noreferrer\",\n        children: \"React Select\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 5\n      }, this), \": package - documentatie select-mogelijkheden voor formulier in React\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 3\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Links);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xpbmtzL2xpbmtzLmpzPzhiODkiXSwibmFtZXMiOlsiTGlua3MiLCJjbGFzc2VzIiwibGlua3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxLQUFULEdBQWlCO0FBQ2hCLHNCQUNDO0FBQVMsYUFBUyxFQUFFQyx3REFBTyxDQUFDQyxLQUE1QjtBQUFBLDRCQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFFQztBQUFBLDhCQUNDO0FBQ0MsWUFBSSxFQUFDLGlDQUROO0FBRUMsY0FBTSxFQUFDLFFBRlI7QUFHQyxXQUFHLEVBQUMscUJBSEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRCxlQVlDO0FBQUEsOEJBQ0M7QUFDQyxZQUFJLEVBQUMsNENBRE47QUFFQyxjQUFNLEVBQUMsUUFGUjtBQUdDLFdBQUcsRUFBQyxxQkFITDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpELGVBc0JDO0FBQUEsOEJBQ0M7QUFDQyxZQUFJLEVBQUMsK0JBRE47QUFFQyxjQUFNLEVBQUMsUUFGUjtBQUdDLFdBQUcsRUFBQyxxQkFITDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXRCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQW1DQTs7QUFFY0Ysb0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2xpbmtzL2xpbmtzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9saW5rcy5tb2R1bGUuY3NzJztcblxuZnVuY3Rpb24gTGlua3MoKSB7XG5cdHJldHVybiAoXG5cdFx0PHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmtzfT5cblx0XHRcdDxoMT5MaW5rcyAmIHJlZmVyZW50aWVzPC9oMT5cblx0XHRcdDxwPlxuXHRcdFx0XHQ8YVxuXHRcdFx0XHRcdGhyZWY9J2h0dHBzOi8vaHRtbGNoZWF0c2hlZXQuY29tL2Nzcy8nXG5cdFx0XHRcdFx0dGFyZ2V0PSdfYmxhbmsnXG5cdFx0XHRcdFx0cmVsPSdub29wZW5lciBub3JlZmVycmVyJ1xuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0Q1NTIENoZWF0U2hlZXRcblx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ6IGludGVyYWN0aWVmIG92ZXJ6aWNodCBDU1MgbWV0IHNpbXVsYXRpZW1vZ2VsaWpraGVkZW5cblx0XHRcdDwvcD5cblx0XHRcdDxwPlxuXHRcdFx0XHQ8YVxuXHRcdFx0XHRcdGhyZWY9J2h0dHBzOi8vd3d3Lm1hcmtkb3duZ3VpZGUub3JnL2NoZWF0LXNoZWV0Lydcblx0XHRcdFx0XHR0YXJnZXQ9J19ibGFuaydcblx0XHRcdFx0XHRyZWw9J25vb3BlbmVyIG5vcmVmZXJyZXInXG5cdFx0XHRcdD5cblx0XHRcdFx0XHRNYXJrZG93biBDaGVhdFNoZWV0XG5cdFx0XHRcdDwvYT5cblx0XHRcdFx0OiBiYXNpcyBzeW50YXggdm9vciBoZXQgc2NocmlqdmVuIGluIC5tZC1maWxlc1xuXHRcdFx0PC9wPlxuXHRcdFx0PHA+XG5cdFx0XHRcdDxhXG5cdFx0XHRcdFx0aHJlZj0naHR0cHM6Ly9yZWFjdC1zZWxlY3QuY29tL2hvbWUnXG5cdFx0XHRcdFx0dGFyZ2V0PSdfYmxhbmsnXG5cdFx0XHRcdFx0cmVsPSdub29wZW5lciBub3JlZmVycmVyJ1xuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0UmVhY3QgU2VsZWN0XG5cdFx0XHRcdDwvYT5cblx0XHRcdFx0OiBwYWNrYWdlIC0gZG9jdW1lbnRhdGllIHNlbGVjdC1tb2dlbGlqa2hlZGVuIHZvb3IgZm9ybXVsaWVyIGluIFJlYWN0XG5cdFx0XHQ8L3A+XG5cdFx0PC9zZWN0aW9uPlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rcztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/links/links.js\n");

/***/ }),

/***/ "./components/links/links.module.css":
/*!*******************************************!*\
  !*** ./components/links/links.module.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"links\": \"links_links__2H8iA\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xpbmtzL2xpbmtzLm1vZHVsZS5jc3M/MDYyZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvbGlua3MvbGlua3MubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImxpbmtzXCI6IFwibGlua3NfbGlua3NfXzJIOGlBXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/links/links.module.css\n");

/***/ }),

/***/ "./pages/links.js":
/*!************************!*\
  !*** ./pages/links.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_links_links__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/links/links */ \"./components/links/links.js\");\n\nvar _jsxFileName = \"/Users/christianmarginet/Documents/next-Frontend/pages/links.js\";\n\n\n\nfunction LinkPage() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_links_links__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LinkPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9saW5rcy5qcz9lOTk4Il0sIm5hbWVzIjpbIkxpbmtQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxHQUFvQjtBQUNuQixzQkFDRyxxRUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREg7QUFLQTs7QUFFY0EsdUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9saW5rcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGlua3MgZnJvbSAnLi4vY29tcG9uZW50cy9saW5rcy9saW5rcyc7XG5cbmZ1bmN0aW9uIExpbmtQYWdlKCkge1xuXHRyZXR1cm4gKFxuICAgIDxMaW5rcyAvPlxuICApXG5cbiAgO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/links.js\n");

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