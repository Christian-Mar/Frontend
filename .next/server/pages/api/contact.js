"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/contact";
exports.ids = ["pages/api/contact"];
exports.modules = {

/***/ "./pages/api/contact.js":
/*!******************************!*\
  !*** ./pages/api/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\n\nasync function handler(req, res) {\n  if (req.method === 'POST') {\n    //check of het request is POST\n    const {\n      email,\n      name,\n      message\n    } = req.body; // validation (check of het wel een juiste e-mail, naam, message is)\n\n    if (!email || !email.includes('@') || !name || name.trim() === '' || !message || message.trim() === '') {\n      res.status(422).json({\n        message: 'Onjuiste input.'\n      });\n      return;\n    } // opslaan in een database\n\n\n    const newMessage = {\n      email,\n      name,\n      message\n    };\n    console.log(newMessage); // Connectie maken met de database\n\n    let client;\n    const connectionString = `mongodb+srv://${\"christian\"}:${\"newCBR650\"}@${\"cluster0\"}.1y5ew.mongodb.net/${\"myFirstDatabase\"}?retryWrites=true&w=majority`;\n\n    try {\n      client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(connectionString);\n    } catch (error) {\n      res.status(500).json({\n        message: 'Geen connectie met de database.'\n      });\n      return;\n    }\n\n    const db = client.db(); // interactie met de database\n\n    try {\n      const result = await db.collection('messages').insertOne(newMessage);\n      newMessage.id = result.insertedId;\n    } catch (error) {\n      client.close();\n      res.status(500).json({\n        message: 'Opslaan is niet gelukt.'\n      });\n      return;\n    } // sluiten van de connectie\n    //client.close();\n\n\n    res.status(201).json({\n      message: 'Ok, opgeslagen!',\n      message: newMessage\n    });\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvY29udGFjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFFQSxlQUFlQyxPQUFmLENBQXVCQyxHQUF2QixFQUE0QkMsR0FBNUIsRUFBaUM7QUFDaEMsTUFBSUQsR0FBRyxDQUFDRSxNQUFKLEtBQWUsTUFBbkIsRUFBMkI7QUFDMUI7QUFDQSxVQUFNO0FBQUVDLE1BQUFBLEtBQUY7QUFBU0MsTUFBQUEsSUFBVDtBQUFlQyxNQUFBQTtBQUFmLFFBQTJCTCxHQUFHLENBQUNNLElBQXJDLENBRjBCLENBRzFCOztBQUNBLFFBQ0MsQ0FBQ0gsS0FBRCxJQUNBLENBQUNBLEtBQUssQ0FBQ0ksUUFBTixDQUFlLEdBQWYsQ0FERCxJQUVBLENBQUNILElBRkQsSUFHQUEsSUFBSSxDQUFDSSxJQUFMLE9BQWdCLEVBSGhCLElBSUEsQ0FBQ0gsT0FKRCxJQUtBQSxPQUFPLENBQUNHLElBQVIsT0FBbUIsRUFOcEIsRUFPRTtBQUNEUCxNQUFBQSxHQUFHLENBQUNRLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFTCxRQUFBQSxPQUFPLEVBQUU7QUFBWCxPQUFyQjtBQUNBO0FBQ0EsS0FkeUIsQ0FlMUI7OztBQUNBLFVBQU1NLFVBQVUsR0FBRztBQUNsQlIsTUFBQUEsS0FEa0I7QUFFbEJDLE1BQUFBLElBRmtCO0FBR2xCQyxNQUFBQTtBQUhrQixLQUFuQjtBQUtBTyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsVUFBWixFQXJCMEIsQ0F1QjFCOztBQUVBLFFBQUlHLE1BQUo7QUFFQSxVQUFNQyxnQkFBZ0IsR0FBSSxpQkFBZ0JDLFdBQTZCLElBQUdBLFdBQTZCLElBQUdBLFVBQWdDLHNCQUFxQkEsaUJBQTZCLDhCQUE1TDs7QUFFQSxRQUFJO0FBQ0RGLE1BQUFBLE1BQU0sR0FBRyxNQUFNaEIsd0RBQUEsQ0FBb0JpQixnQkFBcEIsQ0FBZjtBQUNGLEtBRkQsQ0FFRSxPQUFPUSxLQUFQLEVBQWM7QUFDZnRCLE1BQUFBLEdBQUcsQ0FBQ1EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVMLFFBQUFBLE9BQU8sRUFBRTtBQUFYLE9BQXJCO0FBQ0E7QUFDQTs7QUFFRCxVQUFNbUIsRUFBRSxHQUFHVixNQUFNLENBQUNVLEVBQVAsRUFBWCxDQXBDMEIsQ0FzQzFCOztBQUVBLFFBQUk7QUFDSCxZQUFNQyxNQUFNLEdBQUcsTUFBTUQsRUFBRSxDQUFDRSxVQUFILENBQWMsVUFBZCxFQUEwQkMsU0FBMUIsQ0FBb0NoQixVQUFwQyxDQUFyQjtBQUNBQSxNQUFBQSxVQUFVLENBQUNpQixFQUFYLEdBQWdCSCxNQUFNLENBQUNJLFVBQXZCO0FBQ0EsS0FIRCxDQUdFLE9BQU9OLEtBQVAsRUFBYztBQUNmVCxNQUFBQSxNQUFNLENBQUNnQixLQUFQO0FBQ0E3QixNQUFBQSxHQUFHLENBQUNRLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFTCxRQUFBQSxPQUFPLEVBQUU7QUFBWCxPQUFyQjtBQUNBO0FBQ0EsS0EvQ3lCLENBaUQxQjtBQUVBOzs7QUFFQUosSUFBQUEsR0FBRyxDQUFDUSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUwsTUFBQUEsT0FBTyxFQUFFLGlCQUFYO0FBQThCQSxNQUFBQSxPQUFPLEVBQUVNO0FBQXZDLEtBQXJCO0FBRUE7QUFDRDs7QUFHRCxpRUFBZVosT0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jb3Vyc2UvLi9wYWdlcy9hcGkvY29udGFjdC5qcz9hMGIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYic7XG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcblx0aWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xuXHRcdC8vY2hlY2sgb2YgaGV0IHJlcXVlc3QgaXMgUE9TVFxuXHRcdGNvbnN0IHsgZW1haWwsIG5hbWUsIG1lc3NhZ2UgfSA9IHJlcS5ib2R5O1xuXHRcdC8vIHZhbGlkYXRpb24gKGNoZWNrIG9mIGhldCB3ZWwgZWVuIGp1aXN0ZSBlLW1haWwsIG5hYW0sIG1lc3NhZ2UgaXMpXG5cdFx0aWYgKFxuXHRcdFx0IWVtYWlsIHx8XG5cdFx0XHQhZW1haWwuaW5jbHVkZXMoJ0AnKSB8fFxuXHRcdFx0IW5hbWUgfHxcblx0XHRcdG5hbWUudHJpbSgpID09PSAnJyB8fFxuXHRcdFx0IW1lc3NhZ2UgfHxcblx0XHRcdG1lc3NhZ2UudHJpbSgpID09PSAnJ1xuXHRcdCkge1xuXHRcdFx0cmVzLnN0YXR1cyg0MjIpLmpzb24oeyBtZXNzYWdlOiAnT25qdWlzdGUgaW5wdXQuJyB9KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Ly8gb3BzbGFhbiBpbiBlZW4gZGF0YWJhc2Vcblx0XHRjb25zdCBuZXdNZXNzYWdlID0ge1xuXHRcdFx0ZW1haWwsXG5cdFx0XHRuYW1lLFxuXHRcdFx0bWVzc2FnZSxcblx0XHR9O1xuXHRcdGNvbnNvbGUubG9nKG5ld01lc3NhZ2UpO1xuXG5cdFx0Ly8gQ29ubmVjdGllIG1ha2VuIG1ldCBkZSBkYXRhYmFzZVxuXG5cdFx0bGV0IGNsaWVudDtcblxuXHRcdGNvbnN0IGNvbm5lY3Rpb25TdHJpbmcgPSBgbW9uZ29kYitzcnY6Ly8ke3Byb2Nlc3MuZW52Lm1vbmdvZGJfdXNlcm5hbWV9OiR7cHJvY2Vzcy5lbnYubW9uZ29kYl9wYXNzd29yZH1AJHtwcm9jZXNzLmVudi5tb25nb2RiX2NsdXN0ZXJuYW1lfS4xeTVldy5tb25nb2RiLm5ldC8ke3Byb2Nlc3MuZW52Lm1vbmdvZGJfZGF0YWJhc2V9P3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eWA7XG5cdFx0XG5cdFx0dHJ5IHtcblx0XHQgICBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KGNvbm5lY3Rpb25TdHJpbmcpO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRyZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6ICdHZWVuIGNvbm5lY3RpZSBtZXQgZGUgZGF0YWJhc2UuJyB9KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBkYiA9IGNsaWVudC5kYigpO1xuXG5cdFx0Ly8gaW50ZXJhY3RpZSBtZXQgZGUgZGF0YWJhc2VcblxuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCdtZXNzYWdlcycpLmluc2VydE9uZShuZXdNZXNzYWdlKTtcblx0XHRcdG5ld01lc3NhZ2UuaWQgPSByZXN1bHQuaW5zZXJ0ZWRJZDtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y2xpZW50LmNsb3NlKCk7XG5cdFx0XHRyZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6ICdPcHNsYWFuIGlzIG5pZXQgZ2VsdWt0LicgfSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gc2x1aXRlbiB2YW4gZGUgY29ubmVjdGllXG5cblx0XHQvL2NsaWVudC5jbG9zZSgpO1xuXG5cdFx0cmVzLnN0YXR1cygyMDEpLmpzb24oeyBtZXNzYWdlOiAnT2ssIG9wZ2VzbGFnZW4hJywgbWVzc2FnZTogbmV3TWVzc2FnZSB9KTtcbiAgICBcblx0fVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XG5cbiJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJlbWFpbCIsIm5hbWUiLCJtZXNzYWdlIiwiYm9keSIsImluY2x1ZGVzIiwidHJpbSIsInN0YXR1cyIsImpzb24iLCJuZXdNZXNzYWdlIiwiY29uc29sZSIsImxvZyIsImNsaWVudCIsImNvbm5lY3Rpb25TdHJpbmciLCJwcm9jZXNzIiwiZW52IiwibW9uZ29kYl91c2VybmFtZSIsIm1vbmdvZGJfcGFzc3dvcmQiLCJtb25nb2RiX2NsdXN0ZXJuYW1lIiwibW9uZ29kYl9kYXRhYmFzZSIsImNvbm5lY3QiLCJlcnJvciIsImRiIiwicmVzdWx0IiwiY29sbGVjdGlvbiIsImluc2VydE9uZSIsImlkIiwiaW5zZXJ0ZWRJZCIsImNsb3NlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/contact.js\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/contact.js"));
module.exports = __webpack_exports__;

})();