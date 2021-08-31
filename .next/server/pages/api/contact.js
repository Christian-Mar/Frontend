module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/contact.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/contact.js":
/*!******************************!*\
  !*** ./pages/api/contact.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nasync function handler(req, res) {\n  if (res.method === 'POST') {\n    const {\n      email,\n      name,\n      message\n    } = req.body;\n\n    if (!email || !email.includes('@') || !name || name.trim() === '' || !message || message.trim() === '') {\n      res.status(422).json({\n        message: 'Invalid input.'\n      });\n      return;\n    }\n\n    const newMessage = {\n      email,\n      name,\n      message\n    };\n    console.log(newMessage);\n    res.status(201).json({\n      message: 'Ok, opgeslagen!',\n      message: newMessage\n    });\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvY29udGFjdC5qcz9hMGIxIl0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJlbWFpbCIsIm5hbWUiLCJtZXNzYWdlIiwiYm9keSIsImluY2x1ZGVzIiwidHJpbSIsInN0YXR1cyIsImpzb24iLCJuZXdNZXNzYWdlIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxlQUFlQSxPQUFmLENBQXVCQyxHQUF2QixFQUE0QkMsR0FBNUIsRUFBaUM7QUFDaEMsTUFBSUEsR0FBRyxDQUFDQyxNQUFKLEtBQWUsTUFBbkIsRUFBMkI7QUFDMUIsVUFBTTtBQUFFQyxXQUFGO0FBQVNDLFVBQVQ7QUFBZUM7QUFBZixRQUEyQkwsR0FBRyxDQUFDTSxJQUFyQzs7QUFFQSxRQUNDLENBQUNILEtBQUQsSUFDQSxDQUFDQSxLQUFLLENBQUNJLFFBQU4sQ0FBZSxHQUFmLENBREQsSUFFQSxDQUFDSCxJQUZELElBR0FBLElBQUksQ0FBQ0ksSUFBTCxPQUFnQixFQUhoQixJQUlBLENBQUNILE9BSkQsSUFLQUEsT0FBTyxDQUFDRyxJQUFSLE9BQW1CLEVBTnBCLEVBUUE7QUFDQ1AsU0FBRyxDQUFDUSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBQ0wsZUFBTyxFQUFFO0FBQVYsT0FBckI7QUFDQTtBQUNBOztBQUVDLFVBQU1NLFVBQVUsR0FBRztBQUNmUixXQURlO0FBRWZDLFVBRmU7QUFHZkM7QUFIZSxLQUFuQjtBQUtBTyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsVUFBWjtBQUVBVixPQUFHLENBQUNRLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFDTCxhQUFPLEVBQUUsaUJBQVY7QUFBNkJBLGFBQU8sRUFBRU07QUFBdEMsS0FBckI7QUFDRjtBQUNEOztBQUVjWixzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2FwaS9jb250YWN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuXHRpZiAocmVzLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XG5cdFx0Y29uc3QgeyBlbWFpbCwgbmFtZSwgbWVzc2FnZSB9ID0gcmVxLmJvZHk7XG5cblx0XHRpZiAoXG5cdFx0XHQhZW1haWwgfHxcblx0XHRcdCFlbWFpbC5pbmNsdWRlcygnQCcpIHx8XG5cdFx0XHQhbmFtZSB8fFxuXHRcdFx0bmFtZS50cmltKCkgPT09ICcnIHx8XG5cdFx0XHQhbWVzc2FnZSB8fFxuXHRcdFx0bWVzc2FnZS50cmltKCkgPT09ICcnXG5cdFx0KVxuXHRcdHtcblx0XHRcdHJlcy5zdGF0dXMoNDIyKS5qc29uKHttZXNzYWdlOiAnSW52YWxpZCBpbnB1dC4nfSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG4gICAgY29uc3QgbmV3TWVzc2FnZSA9IHtcbiAgICAgICAgZW1haWwsIFxuICAgICAgICBuYW1lLCBcbiAgICAgICAgbWVzc2FnZVxuICAgIH07XG4gICAgY29uc29sZS5sb2cobmV3TWVzc2FnZSk7XG5cbiAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7bWVzc2FnZTogJ09rLCBvcGdlc2xhZ2VuIScsIG1lc3NhZ2U6IG5ld01lc3NhZ2V9KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/contact.js\n");

/***/ })

/******/ });