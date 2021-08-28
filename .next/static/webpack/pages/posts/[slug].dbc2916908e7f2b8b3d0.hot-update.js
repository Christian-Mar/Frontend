webpackHotUpdate_N_E("pages/posts/[slug]",{

/***/ "./components/posts/post-detail/post-content.js":
/*!******************************************************!*\
  !*** ./components/posts/post-detail/post-content.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/src/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _post_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post-header */ \"./components/posts/post-detail/post-header.js\");\n/* harmony import */ var _post_content_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post-content.module.css */ \"./components/posts/post-detail/post-content.module.css\");\n/* harmony import */ var _post_content_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_post_content_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/Users/christianmarginet/Documents/next-Frontend/components/posts/post-detail/post-content.js\";\n\n\n\n\n\nfunction PostContent(props) {\n  var post = props.post;\n  var imagePath = \"/images/posts/\".concat(post.slug, \"/\").concat(post.image);\n  var customRenderers = {\n    /* img(image) {\n    \treturn (\n    \t\t<Image\n    \t\t\tsrc={`/images/posts/${post.slug}/${image.src}`}\n    \t\t\talt={image.alt}\n    \t\t\twidth={600}\n    \t\t\theigth={300}\n    \t\t/>\n    \t);\n    }, */\n    p: function p(paragraph) {\n      var node = paragraph.node;\n\n      if (node.children[0].tagName === 'img') {\n        var image = node.children[0];\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _post_content_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.image,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {\n            src: \"/images/posts/\".concat(post.slug, \"/\").concat(image.properties.src),\n            alt: image.alt,\n            layout: \"fill\",\n            objectFit: \"contain\",\n            width: 2,\n            heigh: 1\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 7\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 6\n        }, this);\n      }\n\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: paragraph.children\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 14\n      }, this);\n    }\n  };\n  /*\n    code(code) {\n        const { className, children } = code;\n        const language = className.split('-')[1]; // className is something like language-js => We need the \"js\" part here\n        return (\n          <SyntaxHighlighter\n            style={atomDark}\n            language={language}\n            children={children}\n          />\n        );\n      }\n  */\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n    className: _post_content_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.content,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_post_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      title: post.title,\n      image: imagePath\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_markdown__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      components: customRenderers,\n      children: post.content\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 57,\n    columnNumber: 3\n  }, this);\n}\n\n_c = PostContent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostContent);\n\nvar _c;\n\n$RefreshReg$(_c, \"PostContent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0cy9wb3N0LWRldGFpbC9wb3N0LWNvbnRlbnQuanM/MmVkMSJdLCJuYW1lcyI6WyJQb3N0Q29udGVudCIsInByb3BzIiwicG9zdCIsImltYWdlUGF0aCIsInNsdWciLCJpbWFnZSIsImN1c3RvbVJlbmRlcmVycyIsInAiLCJwYXJhZ3JhcGgiLCJub2RlIiwiY2hpbGRyZW4iLCJ0YWdOYW1lIiwiY2xhc3NlcyIsInByb3BlcnRpZXMiLCJzcmMiLCJhbHQiLCJjb250ZW50IiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCO0FBQUEsTUFDbkJDLElBRG1CLEdBQ1ZELEtBRFUsQ0FDbkJDLElBRG1CO0FBRTNCLE1BQU1DLFNBQVMsMkJBQW9CRCxJQUFJLENBQUNFLElBQXpCLGNBQWlDRixJQUFJLENBQUNHLEtBQXRDLENBQWY7QUFFQSxNQUFNQyxlQUFlLEdBQUc7QUFDdkI7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRUMsS0FYdUIsYUFXckJDLFNBWHFCLEVBV1Y7QUFBQSxVQUNKQyxJQURJLEdBQ0tELFNBREwsQ0FDSkMsSUFESTs7QUFHWixVQUFJQSxJQUFJLENBQUNDLFFBQUwsQ0FBYyxDQUFkLEVBQWlCQyxPQUFqQixLQUE2QixLQUFqQyxFQUF3QztBQUN2QyxZQUFNTixLQUFLLEdBQUdJLElBQUksQ0FBQ0MsUUFBTCxDQUFjLENBQWQsQ0FBZDtBQUVBLDRCQUNDO0FBQUssbUJBQVMsRUFBRUUsK0RBQU8sQ0FBQ1AsS0FBeEI7QUFBQSxpQ0FDQyxxRUFBQyxpREFBRDtBQUNDLGVBQUcsMEJBQW1CSCxJQUFJLENBQUNFLElBQXhCLGNBQWdDQyxLQUFLLENBQUNRLFVBQU4sQ0FBaUJDLEdBQWpELENBREo7QUFFQyxlQUFHLEVBQUVULEtBQUssQ0FBQ1UsR0FGWjtBQUdRLGtCQUFNLEVBQUMsTUFIZjtBQUlRLHFCQUFTLEVBQUMsU0FKbEI7QUFLQyxpQkFBSyxFQUFFLENBTFI7QUFNQyxpQkFBSyxFQUFFO0FBTlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQ7QUFZQTs7QUFDRSwwQkFBTztBQUFBLGtCQUFJUCxTQUFTLENBQUNFO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFQO0FBQ0g7QUEvQnNCLEdBQXhCO0FBaUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNDLHNCQUNDO0FBQVMsYUFBUyxFQUFFRSwrREFBTyxDQUFDSSxPQUE1QjtBQUFBLDRCQUNDLHFFQUFDLG9EQUFEO0FBQVksV0FBSyxFQUFFZCxJQUFJLENBQUNlLEtBQXhCO0FBQStCLFdBQUssRUFBRWQ7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGVBRUMscUVBQUMscURBQUQ7QUFBZSxnQkFBVSxFQUFFRyxlQUEzQjtBQUFBLGdCQUE2Q0osSUFBSSxDQUFDYztBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFNQTs7S0F4RFFoQixXO0FBMERNQSwwRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvcG9zdHMvcG9zdC1kZXRhaWwvcG9zdC1jb250ZW50LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSAncmVhY3QtbWFya2Rvd24nO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IFBvc3RIZWFkZXIgZnJvbSAnLi9wb3N0LWhlYWRlcic7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL3Bvc3QtY29udGVudC5tb2R1bGUuY3NzJztcblxuZnVuY3Rpb24gUG9zdENvbnRlbnQocHJvcHMpIHtcblx0Y29uc3QgeyBwb3N0IH0gPSBwcm9wcztcblx0Y29uc3QgaW1hZ2VQYXRoID0gYC9pbWFnZXMvcG9zdHMvJHtwb3N0LnNsdWd9LyR7cG9zdC5pbWFnZX1gO1xuXG5cdGNvbnN0IGN1c3RvbVJlbmRlcmVycyA9IHtcblx0XHQvKiBpbWcoaW1hZ2UpIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxJbWFnZVxuXHRcdFx0XHRcdHNyYz17YC9pbWFnZXMvcG9zdHMvJHtwb3N0LnNsdWd9LyR7aW1hZ2Uuc3JjfWB9XG5cdFx0XHRcdFx0YWx0PXtpbWFnZS5hbHR9XG5cdFx0XHRcdFx0d2lkdGg9ezYwMH1cblx0XHRcdFx0XHRoZWlndGg9ezMwMH1cblx0XHRcdFx0Lz5cblx0XHRcdCk7XG5cdFx0fSwgKi9cblx0XHRwKHBhcmFncmFwaCkge1xuXHRcdFx0Y29uc3QgeyBub2RlIH0gPSBwYXJhZ3JhcGg7XG5cblx0XHRcdGlmIChub2RlLmNoaWxkcmVuWzBdLnRhZ05hbWUgPT09ICdpbWcnKSB7XG5cdFx0XHRcdGNvbnN0IGltYWdlID0gbm9kZS5jaGlsZHJlblswXTtcblxuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlfT5cblx0XHRcdFx0XHRcdDxJbWFnZVxuXHRcdFx0XHRcdFx0XHRzcmM9e2AvaW1hZ2VzL3Bvc3RzLyR7cG9zdC5zbHVnfS8ke2ltYWdlLnByb3BlcnRpZXMuc3JjfWB9XG5cdFx0XHRcdFx0XHRcdGFsdD17aW1hZ2UuYWx0fVxuICAgICAgICAgICAgICBsYXlvdXQ9J2ZpbGwnXG4gICAgICAgICAgICAgIG9iamVjdEZpdD0nY29udGFpbidcblx0XHRcdFx0XHRcdFx0d2lkdGg9ezJ9XG5cdFx0XHRcdFx0XHRcdGhlaWdoPXsxfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KTtcblx0XHRcdH1cbiAgICAgIHJldHVybiA8cD57cGFyYWdyYXBoLmNoaWxkcmVufTwvcD5cblx0XHR9LFxuXHR9O1xuLypcbiAgY29kZShjb2RlKSB7XG4gICAgICBjb25zdCB7IGNsYXNzTmFtZSwgY2hpbGRyZW4gfSA9IGNvZGU7XG4gICAgICBjb25zdCBsYW5ndWFnZSA9IGNsYXNzTmFtZS5zcGxpdCgnLScpWzFdOyAvLyBjbGFzc05hbWUgaXMgc29tZXRoaW5nIGxpa2UgbGFuZ3VhZ2UtanMgPT4gV2UgbmVlZCB0aGUgXCJqc1wiIHBhcnQgaGVyZVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFN5bnRheEhpZ2hsaWdodGVyXG4gICAgICAgICAgc3R5bGU9e2F0b21EYXJrfVxuICAgICAgICAgIGxhbmd1YWdlPXtsYW5ndWFnZX1cbiAgICAgICAgICBjaGlsZHJlbj17Y2hpbGRyZW59XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH1cbiovXG5cdHJldHVybiAoXG5cdFx0PGFydGljbGUgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxuXHRcdFx0PFBvc3RIZWFkZXIgdGl0bGU9e3Bvc3QudGl0bGV9IGltYWdlPXtpbWFnZVBhdGh9IC8+XG5cdFx0XHQ8UmVhY3RNYXJrZG93biBjb21wb25lbnRzPXtjdXN0b21SZW5kZXJlcnN9Pntwb3N0LmNvbnRlbnR9PC9SZWFjdE1hcmtkb3duPlxuXHRcdDwvYXJ0aWNsZT5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdENvbnRlbnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/posts/post-detail/post-content.js\n");

/***/ })

})