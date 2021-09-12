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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _sendgrid_mail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sendgrid/mail */ \"@sendgrid/mail\");\n/* harmony import */ var _sendgrid_mail__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sendgrid_mail__WEBPACK_IMPORTED_MODULE_0__);\n\n_sendgrid_mail__WEBPACK_IMPORTED_MODULE_0___default().setApiKey(process.env.MAIL_API_KEY);\n\nasync function sendMail(req, res) {\n  const body = JSON.parse(req.body);\n  const message = `\n    Name: ${body.enteredName}\\r\\n\n    Email: ${body.enteredEmail}\\r\\n\n    Message: ${body.enteredMessage}\n  `;\n  const data = {\n    to: 'christianmailbox1@gmail.com',\n    from: 'projectjs@outlook.be',\n    subject: `New message from ${body.enteredName}`,\n    text: message,\n    html: message.replace(/\\r\\n/g, '<br />')\n  };\n  await _sendgrid_mail__WEBPACK_IMPORTED_MODULE_0___default().send(data);\n  res.status(200).json({\n    status: 'OK'\n  });\n}\n\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendMail);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvY29udGFjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVBQSwrREFBQSxDQUFlRSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsWUFBM0I7O0FBRUMsZUFBZUMsUUFBZixDQUF5QkMsR0FBekIsRUFBOEJDLEdBQTlCLEVBQW1DO0FBQ25DLFFBQU1DLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdKLEdBQUcsQ0FBQ0UsSUFBZixDQUFiO0FBRUEsUUFBTUcsT0FBTyxHQUFJO0FBQ2xCLFlBQVlILElBQUksQ0FBQ0ksV0FBWTtBQUM3QixhQUFhSixJQUFJLENBQUNLLFlBQWE7QUFDL0IsZUFBZUwsSUFBSSxDQUFDTSxjQUFlO0FBQ25DLEdBSkM7QUFNQSxRQUFNQyxJQUFJLEdBQUc7QUFDWkMsSUFBQUEsRUFBRSxFQUFFLDZCQURRO0FBRVpDLElBQUFBLElBQUksRUFBRSxzQkFGTTtBQUdaQyxJQUFBQSxPQUFPLEVBQUcsb0JBQW1CVixJQUFJLENBQUNJLFdBQVksRUFIbEM7QUFJWk8sSUFBQUEsSUFBSSxFQUFFUixPQUpNO0FBS1pTLElBQUFBLElBQUksRUFBRVQsT0FBTyxDQUFDVSxPQUFSLENBQWdCLE9BQWhCLEVBQXlCLFFBQXpCO0FBTE0sR0FBYjtBQVFBLFFBQU1yQiwwREFBQSxDQUFVZSxJQUFWLENBQU47QUFFQVIsRUFBQUEsR0FBRyxDQUFDZ0IsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVELElBQUFBLE1BQU0sRUFBRTtBQUFWLEdBQXJCO0FBQ0E7O0FBQUE7QUFFRCxpRUFBZWxCLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vcGFnZXMvYXBpL2NvbnRhY3QuanM/YTBiMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWFpbCBmcm9tICdAc2VuZGdyaWQvbWFpbCc7XG5cbm1haWwuc2V0QXBpS2V5KHByb2Nlc3MuZW52Lk1BSUxfQVBJX0tFWSk7XG5cbiBhc3luYyBmdW5jdGlvbiBzZW5kTWFpbCAocmVxLCByZXMpIHtcblx0Y29uc3QgYm9keSA9IEpTT04ucGFyc2UocmVxLmJvZHkpO1xuXHRcblx0Y29uc3QgbWVzc2FnZSA9IGBcbiAgICBOYW1lOiAke2JvZHkuZW50ZXJlZE5hbWV9XFxyXFxuXG4gICAgRW1haWw6ICR7Ym9keS5lbnRlcmVkRW1haWx9XFxyXFxuXG4gICAgTWVzc2FnZTogJHtib2R5LmVudGVyZWRNZXNzYWdlfVxuICBgO1xuXG5cdGNvbnN0IGRhdGEgPSB7XG5cdFx0dG86ICdjaHJpc3RpYW5tYWlsYm94MUBnbWFpbC5jb20nLFxuXHRcdGZyb206ICdwcm9qZWN0anNAb3V0bG9vay5iZScsXG5cdFx0c3ViamVjdDogYE5ldyBtZXNzYWdlIGZyb20gJHtib2R5LmVudGVyZWROYW1lfWAsXG5cdFx0dGV4dDogbWVzc2FnZSxcblx0XHRodG1sOiBtZXNzYWdlLnJlcGxhY2UoL1xcclxcbi9nLCAnPGJyIC8+JyksXG5cdH07XG5cblx0YXdhaXQgbWFpbC5zZW5kKGRhdGEpO1xuXG5cdHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3RhdHVzOiAnT0snIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2VuZE1haWw7Il0sIm5hbWVzIjpbIm1haWwiLCJzZXRBcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiTUFJTF9BUElfS0VZIiwic2VuZE1haWwiLCJyZXEiLCJyZXMiLCJib2R5IiwiSlNPTiIsInBhcnNlIiwibWVzc2FnZSIsImVudGVyZWROYW1lIiwiZW50ZXJlZEVtYWlsIiwiZW50ZXJlZE1lc3NhZ2UiLCJkYXRhIiwidG8iLCJmcm9tIiwic3ViamVjdCIsInRleHQiLCJodG1sIiwicmVwbGFjZSIsInNlbmQiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/contact.js\n");

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