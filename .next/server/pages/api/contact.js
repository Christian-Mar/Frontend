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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _sendgrid_mail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sendgrid/mail */ \"@sendgrid/mail\");\n/* harmony import */ var _sendgrid_mail__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sendgrid_mail__WEBPACK_IMPORTED_MODULE_0__);\n\n_sendgrid_mail__WEBPACK_IMPORTED_MODULE_0___default().setApiKey(process.env.MAIL_API_KEY);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {\n  const body = JSON.parse(req.body);\n  const message = `\n    Name: ${body.name}\\r\\n\n    Email: ${body.email}\\r\\n\n    Message: ${body.message}\n  `;\n  const data = {\n    to: 'christianmailbox1@gmail.com',\n    from: 'projectjs@outlook.be',\n    subject: `New message from ${body.name}`,\n    text: message,\n    html: message.replace(/\\r\\n/g, '<br />')\n  };\n  await _sendgrid_mail__WEBPACK_IMPORTED_MODULE_0___default().send(data);\n  res.status(200).json({\n    status: 'OK'\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvY29udGFjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVBQSwrREFBQSxDQUFlRSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsWUFBM0I7QUFFQSxpRUFBZSxPQUFPQyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDbEMsUUFBTUMsSUFBSSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0osR0FBRyxDQUFDRSxJQUFmLENBQWI7QUFFQSxRQUFNRyxPQUFPLEdBQUk7QUFDbEIsWUFBWUgsSUFBSSxDQUFDSSxJQUFLO0FBQ3RCLGFBQWFKLElBQUksQ0FBQ0ssS0FBTTtBQUN4QixlQUFlTCxJQUFJLENBQUNHLE9BQVE7QUFDNUIsR0FKQztBQU1BLFFBQU1HLElBQUksR0FBRztBQUNaQyxJQUFBQSxFQUFFLEVBQUUsNkJBRFE7QUFFWkMsSUFBQUEsSUFBSSxFQUFFLHNCQUZNO0FBR1pDLElBQUFBLE9BQU8sRUFBRyxvQkFBbUJULElBQUksQ0FBQ0ksSUFBSyxFQUgzQjtBQUlaTSxJQUFBQSxJQUFJLEVBQUVQLE9BSk07QUFLWlEsSUFBQUEsSUFBSSxFQUFFUixPQUFPLENBQUNTLE9BQVIsQ0FBZ0IsT0FBaEIsRUFBeUIsUUFBekI7QUFMTSxHQUFiO0FBUUEsUUFBTW5CLDBEQUFBLENBQVVhLElBQVYsQ0FBTjtBQUVBUCxFQUFBQSxHQUFHLENBQUNlLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFRCxJQUFBQSxNQUFNLEVBQUU7QUFBVixHQUFyQjtBQUNBLENBcEJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS8uL3BhZ2VzL2FwaS9jb250YWN0LmpzP2EwYjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1haWwgZnJvbSAnQHNlbmRncmlkL21haWwnO1xuXG5tYWlsLnNldEFwaUtleShwcm9jZXNzLmVudi5NQUlMX0FQSV9LRVkpO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcblx0Y29uc3QgYm9keSA9IEpTT04ucGFyc2UocmVxLmJvZHkpO1xuXG5cdGNvbnN0IG1lc3NhZ2UgPSBgXG4gICAgTmFtZTogJHtib2R5Lm5hbWV9XFxyXFxuXG4gICAgRW1haWw6ICR7Ym9keS5lbWFpbH1cXHJcXG5cbiAgICBNZXNzYWdlOiAke2JvZHkubWVzc2FnZX1cbiAgYDtcblxuXHRjb25zdCBkYXRhID0ge1xuXHRcdHRvOiAnY2hyaXN0aWFubWFpbGJveDFAZ21haWwuY29tJyxcblx0XHRmcm9tOiAncHJvamVjdGpzQG91dGxvb2suYmUnLFxuXHRcdHN1YmplY3Q6IGBOZXcgbWVzc2FnZSBmcm9tICR7Ym9keS5uYW1lfWAsXG5cdFx0dGV4dDogbWVzc2FnZSxcblx0XHRodG1sOiBtZXNzYWdlLnJlcGxhY2UoL1xcclxcbi9nLCAnPGJyIC8+JyksXG5cdH07XG5cblx0YXdhaXQgbWFpbC5zZW5kKGRhdGEpO1xuXG5cdHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3RhdHVzOiAnT0snIH0pO1xufTtcbiJdLCJuYW1lcyI6WyJtYWlsIiwic2V0QXBpS2V5IiwicHJvY2VzcyIsImVudiIsIk1BSUxfQVBJX0tFWSIsInJlcSIsInJlcyIsImJvZHkiLCJKU09OIiwicGFyc2UiLCJtZXNzYWdlIiwibmFtZSIsImVtYWlsIiwiZGF0YSIsInRvIiwiZnJvbSIsInN1YmplY3QiLCJ0ZXh0IiwiaHRtbCIsInJlcGxhY2UiLCJzZW5kIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/contact.js\n");

/***/ }),

/***/ "@sendgrid/mail":
/*!*********************************!*\
  !*** external "@sendgrid/mail" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sendgrid/mail");

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