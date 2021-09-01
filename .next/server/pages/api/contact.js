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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n // Dit is de backend code\n\nasync function handler(req, res) {\n  if (res.method === 'POST') {\n    //check of het request is POST\n    const {\n      email,\n      name,\n      message\n    } = req.body; // validation (check of het wel een juiste e-mail, naam, message is)\n\n    if (!email || !email.includes('@') || !name || name.trim() === '' || !message || message.trim() === '') {\n      res.status(422).json({\n        message: 'Onjuiste input.'\n      });\n      return;\n    } // opslaan in een database\n\n\n    const newMessage = {\n      email,\n      name,\n      message\n    };\n    console.log(newMessage); // Connectie maken met de database\n\n    let client;\n\n    try {\n      client = await mongodb__WEBPACK_IMPORTED_MODULE_0__[\"MongoClient\"].connect('mongodb+srv://christian:newCBR650@cluster0.1y5ew.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');\n    } catch (error) {\n      res.status(500).json({\n        message: 'Geen connectie met de database.'\n      });\n      return;\n    }\n\n    const db = client.db(); // interactie met de database\n\n    try {\n      const result = await db.collection('messages').insertOne(newMessage);\n      newMessage.id = result.insertedId;\n    } catch (error) {\n      client.close();\n      res.status(500).json({\n        message: 'Opslaan is niet gelukt.'\n      });\n      return;\n    } // sluiten van de connectie\n\n\n    client.close();\n    res.status(201).json({\n      message: 'Ok, opgeslagen!',\n      message: newMessage\n    });\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvY29udGFjdC5qcz9hMGIxIl0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJlbWFpbCIsIm5hbWUiLCJtZXNzYWdlIiwiYm9keSIsImluY2x1ZGVzIiwidHJpbSIsInN0YXR1cyIsImpzb24iLCJuZXdNZXNzYWdlIiwiY29uc29sZSIsImxvZyIsImNsaWVudCIsIk1vbmdvQ2xpZW50IiwiY29ubmVjdCIsImVycm9yIiwiZGIiLCJyZXN1bHQiLCJjb2xsZWN0aW9uIiwiaW5zZXJ0T25lIiwiaWQiLCJpbnNlcnRlZElkIiwiY2xvc2UiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtDQUVBOztBQUVBLGVBQWVBLE9BQWYsQ0FBdUJDLEdBQXZCLEVBQTRCQyxHQUE1QixFQUFpQztBQUNoQyxNQUFJQSxHQUFHLENBQUNDLE1BQUosS0FBZSxNQUFuQixFQUEyQjtBQUMxQjtBQUNBLFVBQU07QUFBRUMsV0FBRjtBQUFTQyxVQUFUO0FBQWVDO0FBQWYsUUFBMkJMLEdBQUcsQ0FBQ00sSUFBckMsQ0FGMEIsQ0FHMUI7O0FBQ0EsUUFDQyxDQUFDSCxLQUFELElBQ0EsQ0FBQ0EsS0FBSyxDQUFDSSxRQUFOLENBQWUsR0FBZixDQURELElBRUEsQ0FBQ0gsSUFGRCxJQUdBQSxJQUFJLENBQUNJLElBQUwsT0FBZ0IsRUFIaEIsSUFJQSxDQUFDSCxPQUpELElBS0FBLE9BQU8sQ0FBQ0csSUFBUixPQUFtQixFQU5wQixFQU9FO0FBQ0RQLFNBQUcsQ0FBQ1EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVMLGVBQU8sRUFBRTtBQUFYLE9BQXJCO0FBQ0E7QUFDQSxLQWR5QixDQWUxQjs7O0FBQ0EsVUFBTU0sVUFBVSxHQUFHO0FBQ2xCUixXQURrQjtBQUVsQkMsVUFGa0I7QUFHbEJDO0FBSGtCLEtBQW5CO0FBS0FPLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixVQUFaLEVBckIwQixDQXVCMUI7O0FBRUEsUUFBSUcsTUFBSjs7QUFFQSxRQUFJO0FBQ0RBLFlBQU0sR0FBRyxNQUFNQyxtREFBVyxDQUFDQyxPQUFaLENBQ2hCLDBHQURnQixDQUFmO0FBR0YsS0FKRCxDQUlFLE9BQU9DLEtBQVAsRUFBYztBQUNmaEIsU0FBRyxDQUFDUSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUwsZUFBTyxFQUFFO0FBQVgsT0FBckI7QUFDQTtBQUNBOztBQUVELFVBQU1hLEVBQUUsR0FBR0osTUFBTSxDQUFDSSxFQUFQLEVBQVgsQ0FwQzBCLENBc0MxQjs7QUFFQSxRQUFJO0FBQ0gsWUFBTUMsTUFBTSxHQUFHLE1BQU1ELEVBQUUsQ0FBQ0UsVUFBSCxDQUFjLFVBQWQsRUFBMEJDLFNBQTFCLENBQW9DVixVQUFwQyxDQUFyQjtBQUNBQSxnQkFBVSxDQUFDVyxFQUFYLEdBQWdCSCxNQUFNLENBQUNJLFVBQXZCO0FBQ0EsS0FIRCxDQUdFLE9BQU9OLEtBQVAsRUFBYztBQUNmSCxZQUFNLENBQUNVLEtBQVA7QUFDQXZCLFNBQUcsQ0FBQ1EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVMLGVBQU8sRUFBRTtBQUFYLE9BQXJCO0FBQ0E7QUFDQSxLQS9DeUIsQ0FpRDFCOzs7QUFFQVMsVUFBTSxDQUFDVSxLQUFQO0FBRUF2QixPQUFHLENBQUNRLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFTCxhQUFPLEVBQUUsaUJBQVg7QUFBOEJBLGFBQU8sRUFBRU07QUFBdkMsS0FBckI7QUFDQTtBQUNEOztBQUljWixzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2FwaS9jb250YWN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tICdtb25nb2RiJztcblxuLy8gRGl0IGlzIGRlIGJhY2tlbmQgY29kZVxuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG5cdGlmIChyZXMubWV0aG9kID09PSAnUE9TVCcpIHtcblx0XHQvL2NoZWNrIG9mIGhldCByZXF1ZXN0IGlzIFBPU1Rcblx0XHRjb25zdCB7IGVtYWlsLCBuYW1lLCBtZXNzYWdlIH0gPSByZXEuYm9keTtcblx0XHQvLyB2YWxpZGF0aW9uIChjaGVjayBvZiBoZXQgd2VsIGVlbiBqdWlzdGUgZS1tYWlsLCBuYWFtLCBtZXNzYWdlIGlzKVxuXHRcdGlmIChcblx0XHRcdCFlbWFpbCB8fFxuXHRcdFx0IWVtYWlsLmluY2x1ZGVzKCdAJykgfHxcblx0XHRcdCFuYW1lIHx8XG5cdFx0XHRuYW1lLnRyaW0oKSA9PT0gJycgfHxcblx0XHRcdCFtZXNzYWdlIHx8XG5cdFx0XHRtZXNzYWdlLnRyaW0oKSA9PT0gJydcblx0XHQpIHtcblx0XHRcdHJlcy5zdGF0dXMoNDIyKS5qc29uKHsgbWVzc2FnZTogJ09uanVpc3RlIGlucHV0LicgfSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdC8vIG9wc2xhYW4gaW4gZWVuIGRhdGFiYXNlXG5cdFx0Y29uc3QgbmV3TWVzc2FnZSA9IHtcblx0XHRcdGVtYWlsLFxuXHRcdFx0bmFtZSxcblx0XHRcdG1lc3NhZ2UsXG5cdFx0fTtcblx0XHRjb25zb2xlLmxvZyhuZXdNZXNzYWdlKTtcblxuXHRcdC8vIENvbm5lY3RpZSBtYWtlbiBtZXQgZGUgZGF0YWJhc2VcblxuXHRcdGxldCBjbGllbnQ7XG5cblx0XHR0cnkge1xuXHRcdCAgIGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXG5cdFx0XHRcdCdtb25nb2RiK3NydjovL2NocmlzdGlhbjpuZXdDQlI2NTBAY2x1c3RlcjAuMXk1ZXcubW9uZ29kYi5uZXQvbXlGaXJzdERhdGFiYXNlP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eSdcblx0XHRcdCk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogJ0dlZW4gY29ubmVjdGllIG1ldCBkZSBkYXRhYmFzZS4nIH0pO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG5cblx0XHQvLyBpbnRlcmFjdGllIG1ldCBkZSBkYXRhYmFzZVxuXG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ21lc3NhZ2VzJykuaW5zZXJ0T25lKG5ld01lc3NhZ2UpO1xuXHRcdFx0bmV3TWVzc2FnZS5pZCA9IHJlc3VsdC5pbnNlcnRlZElkO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjbGllbnQuY2xvc2UoKTtcblx0XHRcdHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogJ09wc2xhYW4gaXMgbmlldCBnZWx1a3QuJyB9KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBzbHVpdGVuIHZhbiBkZSBjb25uZWN0aWVcblxuXHRcdGNsaWVudC5jbG9zZSgpO1xuXG5cdFx0cmVzLnN0YXR1cygyMDEpLmpzb24oeyBtZXNzYWdlOiAnT2ssIG9wZ2VzbGFnZW4hJywgbWVzc2FnZTogbmV3TWVzc2FnZSB9KTtcblx0fVxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/contact.js\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCI/ZGVmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb25nb2RiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongodb\n");

/***/ })

/******/ });