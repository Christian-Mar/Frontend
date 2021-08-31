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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _links_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./links.module.css */ \"./components/links/links.module.css\");\n/* harmony import */ var _links_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_links_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/christianmarginet/Documents/next-Frontend/components/links/links.js\";\n\n\nfunction Links() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    className: _links_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.links,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Links & referenties\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"table\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"thead\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n            colspan: \"2\",\n            children: \"Styling\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 10,\n            columnNumber: 7\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 9,\n          columnNumber: 6\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tbody\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              href: \"https://htmlcheatsheet.com/css/\",\n              target: \"_blank\",\n              rel: \"noopener noreferrer\",\n              children: \"CSS cheatsheet\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 17,\n              columnNumber: 8\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 16,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n            children: \"Overzicht css - interactief (daarnaast ook tabs voor JavaScript en HTML)\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 7\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 6\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              href: \"https://css-tricks.com/snippets/css/a-guide-to-flexbox/\",\n              target: \"_blank\",\n              rel: \"noopener noreferrer\",\n              children: \"A Complete Guide to Flexbox\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 33,\n              columnNumber: 8\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n            children: \"Overzicht gebruik Flexbox\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 7\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"thead\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n            colspan: \"2\",\n            children: \"React\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 7\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 6\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tbody\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              href: \"https://reactjs.org/docs/hello-world.html\",\n              target: \"_blank\",\n              rel: \"noopener noreferrer\",\n              children: \"React documentatie\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 55,\n              columnNumber: 8\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n            children: \"React documentatie\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 64,\n            columnNumber: 7\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 6\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              href: \"https://react-select.com/home\",\n              target: \"_blank\",\n              rel: \"noopener noreferrer\",\n              children: \"React select\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 69,\n              columnNumber: 8\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n            children: \"Package voor select-functies in forms\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 7\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"thead\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n            colspan: \"2\",\n            children: \"Next.js\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 83,\n            columnNumber: 7\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 6\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tbody\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              href: \"https://nextjs.org/docs\",\n              target: \"_blank\",\n              rel: \"noopener noreferrer\",\n              children: \"Next documentatie\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 90,\n              columnNumber: 8\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 89,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n            children: \"Next documentatie (Vercel)\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 99,\n            columnNumber: 7\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 6\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"thead\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n            colspan: \"2\",\n            children: \"Markdown\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 104,\n            columnNumber: 7\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 103,\n          columnNumber: 6\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tbody\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              href: \"https://www.markdownguide.org/basic-syntax/\",\n              target: \"_blank\",\n              rel: \"noopener noreferrer\",\n              children: \"Markdown Guide\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 111,\n              columnNumber: 8\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 110,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n            children: \"Basis syntax voor .md-files\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 120,\n            columnNumber: 7\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 109,\n          columnNumber: 6\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 3\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Links);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xpbmtzL2xpbmtzLmpzPzhiODkiXSwibmFtZXMiOlsiTGlua3MiLCJjbGFzc2VzIiwibGlua3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxLQUFULEdBQWlCO0FBQ2hCLHNCQUNDO0FBQVMsYUFBUyxFQUFFQyx3REFBTyxDQUFDQyxLQUE1QjtBQUFBLDRCQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFFQztBQUFBLDhCQUNDO0FBQUEsK0JBQ0M7QUFBQSxpQ0FDQztBQUFJLG1CQUFPLEVBQUMsR0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsZUFPQztBQUFBLGdDQUNDO0FBQUEsa0NBQ0M7QUFBQSxtQ0FDQztBQUNDLGtCQUFJLEVBQUMsaUNBRE47QUFFQyxvQkFBTSxFQUFDLFFBRlI7QUFHQyxpQkFBRyxFQUFDLHFCQUhMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERCxlQVdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERCxlQWlCQztBQUFBLGtDQUNDO0FBQUEsbUNBQ0M7QUFDQyxrQkFBSSxFQUFDLHlEQUROO0FBRUMsb0JBQU0sRUFBQyxRQUZSO0FBR0MsaUJBQUcsRUFBQyxxQkFITDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsZUFXQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFYRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBakJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBELGVBdUNDO0FBQUEsK0JBQ0M7QUFBQSxpQ0FDQztBQUFJLG1CQUFPLEVBQUMsR0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdkNELGVBNkNDO0FBQUEsZ0NBQ0M7QUFBQSxrQ0FDQztBQUFBLG1DQUNDO0FBQ0Msa0JBQUksRUFBQywyQ0FETjtBQUVDLG9CQUFNLEVBQUMsUUFGUjtBQUdDLGlCQUFHLEVBQUMscUJBSEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURELGVBV0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBWEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURELGVBZUM7QUFBQSxrQ0FDQztBQUFBLG1DQUNDO0FBQ0Msa0JBQUksRUFBQywrQkFETjtBQUVDLG9CQUFNLEVBQUMsUUFGUjtBQUdDLGlCQUFHLEVBQUMscUJBSEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURELGVBV0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBWEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTdDRCxlQTBFQztBQUFBLCtCQUNDO0FBQUEsaUNBQ0M7QUFBSSxtQkFBTyxFQUFDLEdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTFFRCxlQWdGQztBQUFBLCtCQUNDO0FBQUEsa0NBQ0M7QUFBQSxtQ0FDQztBQUNDLGtCQUFJLEVBQUMseUJBRE47QUFFQyxvQkFBTSxFQUFDLFFBRlI7QUFHQyxpQkFBRyxFQUFDLHFCQUhMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERCxlQVdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FoRkQsZUErRkM7QUFBQSwrQkFDQztBQUFBLGlDQUNDO0FBQUksbUJBQU8sRUFBQyxHQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0EvRkQsZUFxR0M7QUFBQSwrQkFDQztBQUFBLGtDQUNDO0FBQUEsbUNBQ0M7QUFDQyxrQkFBSSxFQUFDLDZDQUROO0FBRUMsb0JBQU0sRUFBQyxRQUZSO0FBR0MsaUJBQUcsRUFBQyxxQkFITDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsZUFXQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFYRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBckdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBMEhBOztBQUVjRixvRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbGlua3MvbGlua3MuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NlcyBmcm9tICcuL2xpbmtzLm1vZHVsZS5jc3MnO1xuXG5mdW5jdGlvbiBMaW5rcygpIHtcblx0cmV0dXJuIChcblx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMubGlua3N9PlxuXHRcdFx0PGgxPkxpbmtzICYgcmVmZXJlbnRpZXM8L2gxPlxuXHRcdFx0PHRhYmxlPlxuXHRcdFx0XHQ8dGhlYWQ+XG5cdFx0XHRcdFx0PHRyPlxuXHRcdFx0XHRcdFx0PHRoIGNvbHNwYW49JzInPlN0eWxpbmc8L3RoPlxuXHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdDwvdGhlYWQ+XG5cblx0XHRcdFx0PHRib2R5PlxuXHRcdFx0XHRcdDx0cj5cblx0XHRcdFx0XHRcdDx0ZD5cblx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRocmVmPSdodHRwczovL2h0bWxjaGVhdHNoZWV0LmNvbS9jc3MvJ1xuXHRcdFx0XHRcdFx0XHRcdHRhcmdldD0nX2JsYW5rJ1xuXHRcdFx0XHRcdFx0XHRcdHJlbD0nbm9vcGVuZXIgbm9yZWZlcnJlcidcblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdENTUyBjaGVhdHNoZWV0XG5cdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdDwvdGQ+XG5cblx0XHRcdFx0XHRcdDx0ZD5cblx0XHRcdFx0XHRcdFx0T3ZlcnppY2h0IGNzcyAtIGludGVyYWN0aWVmIChkYWFybmFhc3Qgb29rIHRhYnMgdm9vciBKYXZhU2NyaXB0IGVuXG5cdFx0XHRcdFx0XHRcdEhUTUwpXG5cdFx0XHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0PHRyPlxuXHRcdFx0XHRcdFx0PHRkPlxuXHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdGhyZWY9J2h0dHBzOi8vY3NzLXRyaWNrcy5jb20vc25pcHBldHMvY3NzL2EtZ3VpZGUtdG8tZmxleGJveC8nXG5cdFx0XHRcdFx0XHRcdFx0dGFyZ2V0PSdfYmxhbmsnXG5cdFx0XHRcdFx0XHRcdFx0cmVsPSdub29wZW5lciBub3JlZmVycmVyJ1xuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0QSBDb21wbGV0ZSBHdWlkZSB0byBGbGV4Ym94XG5cdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdDwvdGQ+XG5cblx0XHRcdFx0XHRcdDx0ZD5PdmVyemljaHQgZ2VicnVpayBGbGV4Ym94PC90ZD5cblx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHQ8L3Rib2R5PlxuXG5cdFx0XHRcdDx0aGVhZD5cblx0XHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0XHQ8dGggY29sc3Bhbj0nMic+UmVhY3Q8L3RoPlxuXHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdDwvdGhlYWQ+XG5cblx0XHRcdFx0PHRib2R5PlxuXHRcdFx0XHRcdDx0cj5cblx0XHRcdFx0XHRcdDx0ZD5cblx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRocmVmPSdodHRwczovL3JlYWN0anMub3JnL2RvY3MvaGVsbG8td29ybGQuaHRtbCdcblx0XHRcdFx0XHRcdFx0XHR0YXJnZXQ9J19ibGFuaydcblx0XHRcdFx0XHRcdFx0XHRyZWw9J25vb3BlbmVyIG5vcmVmZXJyZXInXG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRSZWFjdCBkb2N1bWVudGF0aWVcblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PC90ZD5cblxuXHRcdFx0XHRcdFx0PHRkPlJlYWN0IGRvY3VtZW50YXRpZTwvdGQ+XG5cdFx0XHRcdFx0PC90cj5cblxuXHRcdFx0XHRcdDx0cj5cblx0XHRcdFx0XHRcdDx0ZD5cblx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRocmVmPSdodHRwczovL3JlYWN0LXNlbGVjdC5jb20vaG9tZSdcblx0XHRcdFx0XHRcdFx0XHR0YXJnZXQ9J19ibGFuaydcblx0XHRcdFx0XHRcdFx0XHRyZWw9J25vb3BlbmVyIG5vcmVmZXJyZXInXG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRSZWFjdCBzZWxlY3Rcblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PC90ZD5cblxuXHRcdFx0XHRcdFx0PHRkPlBhY2thZ2Ugdm9vciBzZWxlY3QtZnVuY3RpZXMgaW4gZm9ybXM8L3RkPlxuXHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdDwvdGJvZHk+XG5cdFx0XHRcdDx0aGVhZD5cblx0XHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0XHQ8dGggY29sc3Bhbj0nMic+TmV4dC5qczwvdGg+XG5cdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0PC90aGVhZD5cblxuXHRcdFx0XHQ8dGJvZHk+XG5cdFx0XHRcdFx0PHRyPlxuXHRcdFx0XHRcdFx0PHRkPlxuXHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdGhyZWY9J2h0dHBzOi8vbmV4dGpzLm9yZy9kb2NzJ1xuXHRcdFx0XHRcdFx0XHRcdHRhcmdldD0nX2JsYW5rJ1xuXHRcdFx0XHRcdFx0XHRcdHJlbD0nbm9vcGVuZXIgbm9yZWZlcnJlcidcblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdE5leHQgZG9jdW1lbnRhdGllXG5cdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdDwvdGQ+XG5cblx0XHRcdFx0XHRcdDx0ZD5OZXh0IGRvY3VtZW50YXRpZSAoVmVyY2VsKTwvdGQ+XG5cdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0PC90Ym9keT5cblx0XHRcdFx0PHRoZWFkPlxuXHRcdFx0XHRcdDx0cj5cblx0XHRcdFx0XHRcdDx0aCBjb2xzcGFuPScyJz5NYXJrZG93bjwvdGg+XG5cdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0PC90aGVhZD5cblxuXHRcdFx0XHQ8dGJvZHk+XG5cdFx0XHRcdFx0PHRyPlxuXHRcdFx0XHRcdFx0PHRkPlxuXHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdGhyZWY9J2h0dHBzOi8vd3d3Lm1hcmtkb3duZ3VpZGUub3JnL2Jhc2ljLXN5bnRheC8nXG5cdFx0XHRcdFx0XHRcdFx0dGFyZ2V0PSdfYmxhbmsnXG5cdFx0XHRcdFx0XHRcdFx0cmVsPSdub29wZW5lciBub3JlZmVycmVyJ1xuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0TWFya2Rvd24gR3VpZGVcblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PC90ZD5cblxuXHRcdFx0XHRcdFx0PHRkPkJhc2lzIHN5bnRheCB2b29yIC5tZC1maWxlczwvdGQ+XG5cdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0PC90Ym9keT5cblx0XHRcdDwvdGFibGU+XG5cdFx0PC9zZWN0aW9uPlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rcztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/links/links.js\n");

/***/ }),

/***/ "./components/links/links.module.css":
/*!*******************************************!*\
  !*** ./components/links/links.module.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"links\": \"links_links__2H8iA\",\n\t\"link\": \"links_link__2C7XB\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xpbmtzL2xpbmtzLm1vZHVsZS5jc3M/MDYyZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9saW5rcy9saW5rcy5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibGlua3NcIjogXCJsaW5rc19saW5rc19fMkg4aUFcIixcblx0XCJsaW5rXCI6IFwibGlua3NfbGlua19fMkM3WEJcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/links/links.module.css\n");

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