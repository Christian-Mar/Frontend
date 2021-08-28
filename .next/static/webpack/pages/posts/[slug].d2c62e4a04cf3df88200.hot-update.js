webpackHotUpdate_N_E("pages/posts/[slug]",{

/***/ "./components/posts/post-detail/post-content.js":
/*!******************************************************!*\
  !*** ./components/posts/post-detail/post-content.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/src/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _post_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post-header */ \"./components/posts/post-detail/post-header.js\");\n/* harmony import */ var _post_content_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post-content.module.css */ \"./components/posts/post-detail/post-content.module.css\");\n/* harmony import */ var _post_content_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_post_content_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/Users/christianmarginet/Documents/next-Frontend/components/posts/post-detail/post-content.js\";\n\n\n\n\n\nfunction PostContent(props) {\n  var post = props.post;\n  var imagePath = \"/images/posts/\".concat(post.slug, \"/\").concat(post.image);\n  var customRenderers = {\n    /* img(image) {\n    \treturn (\n    \t\t<Image\n    \t\t\tsrc={`/images/posts/${post.slug}/${image.src}`}\n    \t\t\talt={image.alt}\n    \t\t\twidth={600}\n    \t\t\theigth={300}\n    \t\t/>\n    \t);\n    }, */\n    p: function p(paragraph) {\n      var node = paragraph.node;\n\n      if (node.children[0].tagName === 'img') {\n        var image = node.children[0];\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _post_content_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.image,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {\n            src: \"/images/posts/\".concat(post.slug, \"/\").concat(image.properties.src),\n            alt: image.alt,\n            layout: \"fill\",\n            objectFit: \"contain\",\n            width: 2 //heigth={1}\n\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 7\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 6\n        }, this);\n      }\n\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: paragraph.children\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 14\n      }, this);\n    }\n  };\n  /*\n    code(code) {\n        const { className, children } = code;\n        const language = className.split('-')[1]; // className is something like language-js => We need the \"js\" part here\n        return (\n          <SyntaxHighlighter\n            style={atomDark}\n            language={language}\n            children={children}\n          />\n        );\n      }\n  */\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n    className: _post_content_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.content,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_post_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      title: post.title,\n      image: imagePath\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_markdown__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      components: customRenderers,\n      children: post.content\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 57,\n    columnNumber: 3\n  }, this);\n}\n\n_c = PostContent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostContent);\n\nvar _c;\n\n$RefreshReg$(_c, \"PostContent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0cy9wb3N0LWRldGFpbC9wb3N0LWNvbnRlbnQuanM/MmVkMSJdLCJuYW1lcyI6WyJQb3N0Q29udGVudCIsInByb3BzIiwicG9zdCIsImltYWdlUGF0aCIsInNsdWciLCJpbWFnZSIsImN1c3RvbVJlbmRlcmVycyIsInAiLCJwYXJhZ3JhcGgiLCJub2RlIiwiY2hpbGRyZW4iLCJ0YWdOYW1lIiwiY2xhc3NlcyIsInByb3BlcnRpZXMiLCJzcmMiLCJhbHQiLCJjb250ZW50IiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCO0FBQUEsTUFDbkJDLElBRG1CLEdBQ1ZELEtBRFUsQ0FDbkJDLElBRG1CO0FBRTNCLE1BQU1DLFNBQVMsMkJBQW9CRCxJQUFJLENBQUNFLElBQXpCLGNBQWlDRixJQUFJLENBQUNHLEtBQXRDLENBQWY7QUFFQSxNQUFNQyxlQUFlLEdBQUc7QUFDdkI7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRUMsS0FYdUIsYUFXckJDLFNBWHFCLEVBV1Y7QUFBQSxVQUNKQyxJQURJLEdBQ0tELFNBREwsQ0FDSkMsSUFESTs7QUFHWixVQUFJQSxJQUFJLENBQUNDLFFBQUwsQ0FBYyxDQUFkLEVBQWlCQyxPQUFqQixLQUE2QixLQUFqQyxFQUF3QztBQUN2QyxZQUFNTixLQUFLLEdBQUdJLElBQUksQ0FBQ0MsUUFBTCxDQUFjLENBQWQsQ0FBZDtBQUVBLDRCQUNDO0FBQUssbUJBQVMsRUFBRUUsK0RBQU8sQ0FBQ1AsS0FBeEI7QUFBQSxpQ0FDQyxxRUFBQyxpREFBRDtBQUNDLGVBQUcsMEJBQW1CSCxJQUFJLENBQUNFLElBQXhCLGNBQWdDQyxLQUFLLENBQUNRLFVBQU4sQ0FBaUJDLEdBQWpELENBREo7QUFFQyxlQUFHLEVBQUVULEtBQUssQ0FBQ1UsR0FGWjtBQUdRLGtCQUFNLEVBQUMsTUFIZjtBQUlRLHFCQUFTLEVBQUMsU0FKbEI7QUFLQyxpQkFBSyxFQUFFLENBTFIsQ0FNQzs7QUFORDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERDtBQVlBOztBQUNFLDBCQUFPO0FBQUEsa0JBQUlQLFNBQVMsQ0FBQ0U7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQVA7QUFDSDtBQS9Cc0IsR0FBeEI7QUFpQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0Msc0JBQ0M7QUFBUyxhQUFTLEVBQUVFLCtEQUFPLENBQUNJLE9BQTVCO0FBQUEsNEJBQ0MscUVBQUMsb0RBQUQ7QUFBWSxXQUFLLEVBQUVkLElBQUksQ0FBQ2UsS0FBeEI7QUFBK0IsV0FBSyxFQUFFZDtBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFFQyxxRUFBQyxxREFBRDtBQUFlLGdCQUFVLEVBQUVHLGVBQTNCO0FBQUEsZ0JBQTZDSixJQUFJLENBQUNjO0FBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQU1BOztLQXhEUWhCLFc7QUEwRE1BLDBFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9wb3N0cy9wb3N0LWRldGFpbC9wb3N0LWNvbnRlbnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bic7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgUG9zdEhlYWRlciBmcm9tICcuL3Bvc3QtaGVhZGVyJztcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vcG9zdC1jb250ZW50Lm1vZHVsZS5jc3MnO1xuXG5mdW5jdGlvbiBQb3N0Q29udGVudChwcm9wcykge1xuXHRjb25zdCB7IHBvc3QgfSA9IHByb3BzO1xuXHRjb25zdCBpbWFnZVBhdGggPSBgL2ltYWdlcy9wb3N0cy8ke3Bvc3Quc2x1Z30vJHtwb3N0LmltYWdlfWA7XG5cblx0Y29uc3QgY3VzdG9tUmVuZGVyZXJzID0ge1xuXHRcdC8qIGltZyhpbWFnZSkge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEltYWdlXG5cdFx0XHRcdFx0c3JjPXtgL2ltYWdlcy9wb3N0cy8ke3Bvc3Quc2x1Z30vJHtpbWFnZS5zcmN9YH1cblx0XHRcdFx0XHRhbHQ9e2ltYWdlLmFsdH1cblx0XHRcdFx0XHR3aWR0aD17NjAwfVxuXHRcdFx0XHRcdGhlaWd0aD17MzAwfVxuXHRcdFx0XHQvPlxuXHRcdFx0KTtcblx0XHR9LCAqL1xuXHRcdHAocGFyYWdyYXBoKSB7XG5cdFx0XHRjb25zdCB7IG5vZGUgfSA9IHBhcmFncmFwaDtcblxuXHRcdFx0aWYgKG5vZGUuY2hpbGRyZW5bMF0udGFnTmFtZSA9PT0gJ2ltZycpIHtcblx0XHRcdFx0Y29uc3QgaW1hZ2UgPSBub2RlLmNoaWxkcmVuWzBdO1xuXG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9PlxuXHRcdFx0XHRcdFx0PEltYWdlXG5cdFx0XHRcdFx0XHRcdHNyYz17YC9pbWFnZXMvcG9zdHMvJHtwb3N0LnNsdWd9LyR7aW1hZ2UucHJvcGVydGllcy5zcmN9YH1cblx0XHRcdFx0XHRcdFx0YWx0PXtpbWFnZS5hbHR9XG4gICAgICAgICAgICAgIGxheW91dD0nZmlsbCdcbiAgICAgICAgICAgICAgb2JqZWN0Rml0PSdjb250YWluJ1xuXHRcdFx0XHRcdFx0XHR3aWR0aD17Mn1cblx0XHRcdFx0XHRcdFx0Ly9oZWlndGg9ezF9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuICAgICAgcmV0dXJuIDxwPntwYXJhZ3JhcGguY2hpbGRyZW59PC9wPlxuXHRcdH0sXG5cdH07XG4vKlxuICBjb2RlKGNvZGUpIHtcbiAgICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBjaGlsZHJlbiB9ID0gY29kZTtcbiAgICAgIGNvbnN0IGxhbmd1YWdlID0gY2xhc3NOYW1lLnNwbGl0KCctJylbMV07IC8vIGNsYXNzTmFtZSBpcyBzb21ldGhpbmcgbGlrZSBsYW5ndWFnZS1qcyA9PiBXZSBuZWVkIHRoZSBcImpzXCIgcGFydCBoZXJlXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U3ludGF4SGlnaGxpZ2h0ZXJcbiAgICAgICAgICBzdHlsZT17YXRvbURhcmt9XG4gICAgICAgICAgbGFuZ3VhZ2U9e2xhbmd1YWdlfVxuICAgICAgICAgIGNoaWxkcmVuPXtjaGlsZHJlbn1cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfVxuKi9cblx0cmV0dXJuIChcblx0XHQ8YXJ0aWNsZSBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XG5cdFx0XHQ8UG9zdEhlYWRlciB0aXRsZT17cG9zdC50aXRsZX0gaW1hZ2U9e2ltYWdlUGF0aH0gLz5cblx0XHRcdDxSZWFjdE1hcmtkb3duIGNvbXBvbmVudHM9e2N1c3RvbVJlbmRlcmVyc30+e3Bvc3QuY29udGVudH08L1JlYWN0TWFya2Rvd24+XG5cdFx0PC9hcnRpY2xlPlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0Q29udGVudDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/posts/post-detail/post-content.js\n");

/***/ })

})