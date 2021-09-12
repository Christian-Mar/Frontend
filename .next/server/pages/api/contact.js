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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _sendgrid_mail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sendgrid/mail */ \"@sendgrid/mail\");\n/* harmony import */ var _sendgrid_mail__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sendgrid_mail__WEBPACK_IMPORTED_MODULE_0__);\n\n_sendgrid_mail__WEBPACK_IMPORTED_MODULE_0___default().setApiKey(process.env.MAIL_API_KEY);\n\nasync function sendMail(req, res) {\n  const body = JSON.parse(req.body);\n  const message = `\n    name: ${body.enteredName}\\r\\n\n    email: ${body.enteredEmail}\\r\\n\n    message: ${body.enteredMessage}\n  `;\n  const data = {\n    to: 'christianmailbox1@gmail.com',\n    from: 'projectjs@outlook.be',\n    subject: `New message from ${body.enteredName}`,\n    text: message,\n    html: message.replace(/\\r\\n/g, '<br />')\n  };\n  await _sendgrid_mail__WEBPACK_IMPORTED_MODULE_0___default().send(data);\n  return res.status(200).json({\n    status: 'OK'\n  });\n}\n\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendMail);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvY29udGFjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVBQSwrREFBQSxDQUFtQkUsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFlBQS9COztBQUVDLGVBQWVDLFFBQWYsQ0FBeUJDLEdBQXpCLEVBQThCQyxHQUE5QixFQUFtQztBQUNuQyxRQUFNQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixHQUFHLENBQUNFLElBQWYsQ0FBYjtBQUVBLFFBQU1HLE9BQU8sR0FBSTtBQUNsQixZQUFZSCxJQUFJLENBQUNJLFdBQVk7QUFDN0IsYUFBYUosSUFBSSxDQUFDSyxZQUFhO0FBQy9CLGVBQWVMLElBQUksQ0FBQ00sY0FBZTtBQUNuQyxHQUpDO0FBTUEsUUFBTUMsSUFBSSxHQUFHO0FBQ1pDLElBQUFBLEVBQUUsRUFBRSw2QkFEUTtBQUVaQyxJQUFBQSxJQUFJLEVBQUUsc0JBRk07QUFHWkMsSUFBQUEsT0FBTyxFQUFHLG9CQUFtQlYsSUFBSSxDQUFDSSxXQUFZLEVBSGxDO0FBSVpPLElBQUFBLElBQUksRUFBRVIsT0FKTTtBQUtaUyxJQUFBQSxJQUFJLEVBQUVULE9BQU8sQ0FBQ1UsT0FBUixDQUFnQixPQUFoQixFQUF5QixRQUF6QjtBQUxNLEdBQWI7QUFRQSxRQUFNckIsMERBQUEsQ0FBY2UsSUFBZCxDQUFOO0FBRUEsU0FBT1IsR0FBRyxDQUFDZ0IsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVELElBQUFBLE1BQU0sRUFBRTtBQUFWLEdBQXJCLENBQVA7QUFDQTs7QUFBQTtBQUVELGlFQUFlbEIsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jb3Vyc2UvLi9wYWdlcy9hcGkvY29udGFjdC5qcz9hMGIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzZW5kZ3JpZCBmcm9tICdAc2VuZGdyaWQvbWFpbCc7XG5cbnNlbmRncmlkLnNldEFwaUtleShwcm9jZXNzLmVudi5NQUlMX0FQSV9LRVkpO1xuXG4gYXN5bmMgZnVuY3Rpb24gc2VuZE1haWwgKHJlcSwgcmVzKSB7XG5cdGNvbnN0IGJvZHkgPSBKU09OLnBhcnNlKHJlcS5ib2R5KTtcblx0XG5cdGNvbnN0IG1lc3NhZ2UgPSBgXG4gICAgbmFtZTogJHtib2R5LmVudGVyZWROYW1lfVxcclxcblxuICAgIGVtYWlsOiAke2JvZHkuZW50ZXJlZEVtYWlsfVxcclxcblxuICAgIG1lc3NhZ2U6ICR7Ym9keS5lbnRlcmVkTWVzc2FnZX1cbiAgYDtcblxuXHRjb25zdCBkYXRhID0ge1xuXHRcdHRvOiAnY2hyaXN0aWFubWFpbGJveDFAZ21haWwuY29tJyxcblx0XHRmcm9tOiAncHJvamVjdGpzQG91dGxvb2suYmUnLFxuXHRcdHN1YmplY3Q6IGBOZXcgbWVzc2FnZSBmcm9tICR7Ym9keS5lbnRlcmVkTmFtZX1gLFxuXHRcdHRleHQ6IG1lc3NhZ2UsXG5cdFx0aHRtbDogbWVzc2FnZS5yZXBsYWNlKC9cXHJcXG4vZywgJzxiciAvPicpLFxuXHR9O1xuXG5cdGF3YWl0IHNlbmRncmlkLnNlbmQoZGF0YSk7XG5cblx0cmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3RhdHVzOiAnT0snIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2VuZE1haWw7Il0sIm5hbWVzIjpbInNlbmRncmlkIiwic2V0QXBpS2V5IiwicHJvY2VzcyIsImVudiIsIk1BSUxfQVBJX0tFWSIsInNlbmRNYWlsIiwicmVxIiwicmVzIiwiYm9keSIsIkpTT04iLCJwYXJzZSIsIm1lc3NhZ2UiLCJlbnRlcmVkTmFtZSIsImVudGVyZWRFbWFpbCIsImVudGVyZWRNZXNzYWdlIiwiZGF0YSIsInRvIiwiZnJvbSIsInN1YmplY3QiLCJ0ZXh0IiwiaHRtbCIsInJlcGxhY2UiLCJzZW5kIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/contact.js\n");

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