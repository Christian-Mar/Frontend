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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _sendgrid_mail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sendgrid/mail */ \"@sendgrid/mail\");\n/* harmony import */ var _sendgrid_mail__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sendgrid_mail__WEBPACK_IMPORTED_MODULE_0__);\n\n_sendgrid_mail__WEBPACK_IMPORTED_MODULE_0___default().setApiKey(process.env.MAIL_API_KEY);\n\nasync function sendMail(req, res) {\n  const body = JSON.parse(req.body);\n  const message = `\n    Name: ${body.enteredName}\\r\\n\n    Email: ${body.enteredEmail}\\r\\n\n    Message: ${body.enteredMessage}\n  `;\n  const data = {\n    to: 'christianmailbox1@gmail.com',\n    from: 'projectjs@outlook.be',\n    subject: `New message from ${body.enteredName}`,\n    text: message,\n    html: message.replace(/\\r\\n/g, '<br />')\n  };\n  await _sendgrid_mail__WEBPACK_IMPORTED_MODULE_0___default().send(data);\n  return res.status(200).json({\n    status: 'OK'\n  });\n}\n\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendMail);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvY29udGFjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVBQSwrREFBQSxDQUFlRSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsWUFBM0I7O0FBRUMsZUFBZUMsUUFBZixDQUF5QkMsR0FBekIsRUFBOEJDLEdBQTlCLEVBQW1DO0FBQ25DLFFBQU1DLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdKLEdBQUcsQ0FBQ0UsSUFBZixDQUFiO0FBRUEsUUFBTUcsT0FBTyxHQUFJO0FBQ2xCLFlBQVlILElBQUksQ0FBQ0ksV0FBWTtBQUM3QixhQUFhSixJQUFJLENBQUNLLFlBQWE7QUFDL0IsZUFBZUwsSUFBSSxDQUFDTSxjQUFlO0FBQ25DLEdBSkM7QUFNQSxRQUFNQyxJQUFJLEdBQUc7QUFDWkMsSUFBQUEsRUFBRSxFQUFFLDZCQURRO0FBRVpDLElBQUFBLElBQUksRUFBRSxzQkFGTTtBQUdaQyxJQUFBQSxPQUFPLEVBQUcsb0JBQW1CVixJQUFJLENBQUNJLFdBQVksRUFIbEM7QUFJWk8sSUFBQUEsSUFBSSxFQUFFUixPQUpNO0FBS1pTLElBQUFBLElBQUksRUFBRVQsT0FBTyxDQUFDVSxPQUFSLENBQWdCLE9BQWhCLEVBQXlCLFFBQXpCO0FBTE0sR0FBYjtBQVFBLFFBQU1yQiwwREFBQSxDQUFVZSxJQUFWLENBQU47QUFFQSxTQUFPUixHQUFHLENBQUNnQixNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUQsSUFBQUEsTUFBTSxFQUFFO0FBQVYsR0FBckIsQ0FBUDtBQUNBOztBQUFBO0FBRUQsaUVBQWVsQixRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS8uL3BhZ2VzL2FwaS9jb250YWN0LmpzP2EwYjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1haWwgZnJvbSAnQHNlbmRncmlkL21haWwnO1xuXG5tYWlsLnNldEFwaUtleShwcm9jZXNzLmVudi5NQUlMX0FQSV9LRVkpO1xuXG4gYXN5bmMgZnVuY3Rpb24gc2VuZE1haWwgKHJlcSwgcmVzKSB7XG5cdGNvbnN0IGJvZHkgPSBKU09OLnBhcnNlKHJlcS5ib2R5KTtcblx0XG5cdGNvbnN0IG1lc3NhZ2UgPSBgXG4gICAgTmFtZTogJHtib2R5LmVudGVyZWROYW1lfVxcclxcblxuICAgIEVtYWlsOiAke2JvZHkuZW50ZXJlZEVtYWlsfVxcclxcblxuICAgIE1lc3NhZ2U6ICR7Ym9keS5lbnRlcmVkTWVzc2FnZX1cbiAgYDtcblxuXHRjb25zdCBkYXRhID0ge1xuXHRcdHRvOiAnY2hyaXN0aWFubWFpbGJveDFAZ21haWwuY29tJyxcblx0XHRmcm9tOiAncHJvamVjdGpzQG91dGxvb2suYmUnLFxuXHRcdHN1YmplY3Q6IGBOZXcgbWVzc2FnZSBmcm9tICR7Ym9keS5lbnRlcmVkTmFtZX1gLFxuXHRcdHRleHQ6IG1lc3NhZ2UsXG5cdFx0aHRtbDogbWVzc2FnZS5yZXBsYWNlKC9cXHJcXG4vZywgJzxiciAvPicpLFxuXHR9O1xuXG5cdGF3YWl0IG1haWwuc2VuZChkYXRhKTtcblxuXHRyZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdGF0dXM6ICdPSycgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzZW5kTWFpbDsiXSwibmFtZXMiOlsibWFpbCIsInNldEFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJNQUlMX0FQSV9LRVkiLCJzZW5kTWFpbCIsInJlcSIsInJlcyIsImJvZHkiLCJKU09OIiwicGFyc2UiLCJtZXNzYWdlIiwiZW50ZXJlZE5hbWUiLCJlbnRlcmVkRW1haWwiLCJlbnRlcmVkTWVzc2FnZSIsImRhdGEiLCJ0byIsImZyb20iLCJzdWJqZWN0IiwidGV4dCIsImh0bWwiLCJyZXBsYWNlIiwic2VuZCIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/contact.js\n");

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