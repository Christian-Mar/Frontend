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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/contact.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/contact/contact-form.js":
/*!********************************************!*\
  !*** ./components/contact/contact-form.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contact_form_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-form.module.css */ \"./components/contact/contact-form.module.css\");\n/* harmony import */ var _contact_form_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_contact_form_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ui_notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/notification */ \"./components/ui/notification.js\");\n\nvar _jsxFileName = \"/Users/christianmarginet/Documents/next-Frontend/components/contact/contact-form.js\";\n\n\n\n\nasync function sendContactData(contactDetails) {\n  const response = await fetch('/api/contact', {\n    method: 'POST',\n    body: JSON.stringify(contactDetails),\n    headers: {\n      'Content-Type': 'application/json'\n    }\n  });\n  const data = await response.json();\n\n  if (!response.ok) {\n    throw new Error(data.messag || 'Er ging iets verkeerd.');\n  }\n}\n\nfunction ContactForm() {\n  const {\n    0: enteredEmail,\n    1: setEnteredEmail\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('');\n  const {\n    0: enteredName,\n    1: setEnteredName\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('');\n  const {\n    0: enteredMessage,\n    1: setEnteredMessage\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('');\n  const {\n    0: requestStatus,\n    1: setRequestStatus\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(); // pending, success, error\n\n  const {\n    0: requestError,\n    1: setRequestError\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    if (requestStatus === 'success' || requestStatus === 'error') {\n      const timer = setTimeout(() => {\n        setRequestStatus(null);\n        setRequestError(null);\n      }, 3000);\n      return () => clearTimeout(timer);\n    }\n  }, [requestStatus]);\n\n  async function sendMessageHandler(event) {\n    event.preventDefault(); // optional: add client-side validation\n\n    setRequestStatus('pending');\n\n    try {\n      await sendContactData({\n        email: enteredEmail,\n        name: enteredName,\n        message: enteredMessage\n      });\n      setRequestStatus('success');\n      setEnteredMessage('');\n      setEnteredEmail('');\n      setEnteredName('');\n    } catch (error) {\n      setRequestError(error.message);\n      setRequestStatus('error');\n    }\n  }\n\n  let notification;\n\n  if (requestStatus === 'pending') {\n    notification = {\n      status: 'pending',\n      title: 'Sending message...',\n      message: 'Your message is on its way!'\n    };\n  }\n\n  if (requestStatus === 'success') {\n    notification = {\n      status: 'success',\n      title: 'Succes!',\n      message: 'Message sent successfully!'\n    };\n  }\n\n  if (requestStatus === 'error') {\n    notification = {\n      status: 'error',\n      title: 'Error!',\n      message: requestError\n    };\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    className: _contact_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.contact,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Iets ontdekt? \"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n      className: _contact_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.form,\n      onSubmit: sendMessageHandler,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _contact_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.controls,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _contact_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.control,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n            htmlFor: \"email\",\n            children: \"Jouw e-mail\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 92,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            type: \"email\",\n            id: \"email\",\n            required: true,\n            value: enteredEmail,\n            onChange: event => setEnteredEmail(event.target.value)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 93,\n            columnNumber: 7\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 6\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _contact_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.control,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n            htmlFor: \"name\",\n            children: \"Jouw naam\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 102,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            type: \"text\",\n            id: \"name\",\n            required: true,\n            value: enteredName,\n            onChange: event => setEnteredName(event.target.value)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 103,\n            columnNumber: 7\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 101,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _contact_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.control,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          htmlFor: \"message\",\n          children: \"Vertel!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 113,\n          columnNumber: 6\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"textarea\", {\n          name: \"message\",\n          id: \"message\",\n          cols: \"30\",\n          rows: \"10\",\n          required: true,\n          value: enteredMessage,\n          onChange: event => setEnteredMessage(event.target.value)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 114,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 112,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _contact_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.actions,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          children: \"Verzenden\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 125,\n          columnNumber: 6\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 124,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 4\n    }, this), notification && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ui_notification__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      status: notification.status,\n      title: notification.title,\n      message: notification.message\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 25\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 87,\n    columnNumber: 3\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactForm);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC1mb3JtLmpzP2FmOTQiXSwibmFtZXMiOlsic2VuZENvbnRhY3REYXRhIiwiY29udGFjdERldGFpbHMiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwiZGF0YSIsImpzb24iLCJvayIsIkVycm9yIiwibWVzc2FnIiwiQ29udGFjdEZvcm0iLCJlbnRlcmVkRW1haWwiLCJzZXRFbnRlcmVkRW1haWwiLCJ1c2VTdGF0ZSIsImVudGVyZWROYW1lIiwic2V0RW50ZXJlZE5hbWUiLCJlbnRlcmVkTWVzc2FnZSIsInNldEVudGVyZWRNZXNzYWdlIiwicmVxdWVzdFN0YXR1cyIsInNldFJlcXVlc3RTdGF0dXMiLCJyZXF1ZXN0RXJyb3IiLCJzZXRSZXF1ZXN0RXJyb3IiLCJ1c2VFZmZlY3QiLCJ0aW1lciIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJzZW5kTWVzc2FnZUhhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZW1haWwiLCJuYW1lIiwibWVzc2FnZSIsImVycm9yIiwibm90aWZpY2F0aW9uIiwic3RhdHVzIiwidGl0bGUiLCJjbGFzc2VzIiwiY29udGFjdCIsImZvcm0iLCJjb250cm9scyIsImNvbnRyb2wiLCJ0YXJnZXQiLCJ2YWx1ZSIsImFjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZUEsZUFBZixDQUErQkMsY0FBL0IsRUFBK0M7QUFDOUMsUUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQyxjQUFELEVBQWlCO0FBQzVDQyxVQUFNLEVBQUUsTUFEb0M7QUFFNUNDLFFBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVOLGNBQWYsQ0FGc0M7QUFHNUNPLFdBQU8sRUFBRTtBQUNSLHNCQUFnQjtBQURSO0FBSG1DLEdBQWpCLENBQTVC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SSxFQUFDLElBSE47QUFJQyxjQUFJLEVBQUMsSUFKTjtBQUtDLGtCQUFRLE1BTFQ7QUFNQyxlQUFLLEVBQUV4QixjQU5SO0FBT0Msa0JBQVEsRUFBRVcsS0FBSyxJQUFJVixpQkFBaUIsQ0FBQ1UsS0FBSyxDQUFDYyxNQUFOLENBQWFDLEtBQWQ7QUFQckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F2QkQsZUFtQ0M7QUFBSyxpQkFBUyxFQUFFTiwrREFBTyxDQUFDTyxPQUF4QjtBQUFBLCtCQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQW5DRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRCxFQXlDS1YsWUFBWSxpQkFBSyxxRUFBQyx3REFBRDtBQUFjLFlBQU0sRUFBRUEsWUFBWSxDQUFDQyxNQUFuQztBQUEyQyxXQUFLLEVBQUVELFlBQVksQ0FBQ0UsS0FBL0Q7QUFBc0UsYUFBTyxFQUFFRixZQUFZLENBQUNGO0FBQTVGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF6Q3RCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBNkNBOztBQUVjckIsMEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC1mb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vY29udGFjdC1mb3JtLm1vZHVsZS5jc3MnO1xuaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tICcuLi91aS9ub3RpZmljYXRpb24nO1xuXG5hc3luYyBmdW5jdGlvbiBzZW5kQ29udGFjdERhdGEoY29udGFjdERldGFpbHMpIHtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9jb250YWN0Jywge1xuXHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KGNvbnRhY3REZXRhaWxzKSxcblx0XHRoZWFkZXJzOiB7XG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXHRcdH0sXG5cdH0pO1xuXHRjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG5cdGlmICghcmVzcG9uc2Uub2spIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoZGF0YS5tZXNzYWcgfHwgJ0VyIGdpbmcgaWV0cyB2ZXJrZWVyZC4nKTtcblx0fVxufVxuXG5mdW5jdGlvbiBDb250YWN0Rm9ybSgpIHtcblx0Y29uc3QgW2VudGVyZWRFbWFpbCwgc2V0RW50ZXJlZEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcblx0Y29uc3QgW2VudGVyZWROYW1lLCBzZXRFbnRlcmVkTmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG5cdGNvbnN0IFtlbnRlcmVkTWVzc2FnZSwgc2V0RW50ZXJlZE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xuXHRjb25zdCBbcmVxdWVzdFN0YXR1cywgc2V0UmVxdWVzdFN0YXR1c10gPSB1c2VTdGF0ZSgpOyAvLyBwZW5kaW5nLCBzdWNjZXNzLCBlcnJvclxuICBjb25zdCBbcmVxdWVzdEVycm9yLCBzZXRSZXF1ZXN0RXJyb3JdID0gdXNlU3RhdGUoKTtcblx0XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHJlcXVlc3RTdGF0dXMgPT09ICdzdWNjZXNzJyB8fCByZXF1ZXN0U3RhdHVzID09PSAnZXJyb3InKSB7XG4gICAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRSZXF1ZXN0U3RhdHVzKG51bGwpO1xuICAgICAgICBzZXRSZXF1ZXN0RXJyb3IobnVsbCk7XG4gICAgICB9LCAzMDAwKTtcbiAgICAgIHJldHVybigpID0+IGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgfVxuICB9LCBbcmVxdWVzdFN0YXR1c10pO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIHNlbmRNZXNzYWdlSGFuZGxlcihldmVudCkge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHQvLyBvcHRpb25hbDogYWRkIGNsaWVudC1zaWRlIHZhbGlkYXRpb25cblxuXHRcdHNldFJlcXVlc3RTdGF0dXMoJ3BlbmRpbmcnKTtcblxuXHRcdHRyeSB7XG5cdFx0XHRhd2FpdCBzZW5kQ29udGFjdERhdGEoe1xuXHRcdFx0XHRlbWFpbDogZW50ZXJlZEVtYWlsLFxuXHRcdFx0XHRuYW1lOiBlbnRlcmVkTmFtZSxcblx0XHRcdFx0bWVzc2FnZTogZW50ZXJlZE1lc3NhZ2UsXG5cdFx0XHR9KTtcblx0XHRcdHNldFJlcXVlc3RTdGF0dXMoJ3N1Y2Nlc3MnKTtcbiAgICAgIHNldEVudGVyZWRNZXNzYWdlKCcnKTtcbiAgICAgIHNldEVudGVyZWRFbWFpbCgnJyk7XG4gICAgICBzZXRFbnRlcmVkTmFtZSgnJyk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHNldFJlcXVlc3RFcnJvcihlcnJvci5tZXNzYWdlKTtcblx0XHRcdHNldFJlcXVlc3RTdGF0dXMoJ2Vycm9yJyk7XG5cdFx0fVxuXHR9XG5cbiAgbGV0IG5vdGlmaWNhdGlvbjtcblxuICBpZiAocmVxdWVzdFN0YXR1cyA9PT0gJ3BlbmRpbmcnKSB7XG4gICAgbm90aWZpY2F0aW9uID0ge1xuICAgICAgc3RhdHVzOiAncGVuZGluZycsXG4gICAgICB0aXRsZTogJ1NlbmRpbmcgbWVzc2FnZS4uLicsXG4gICAgICBtZXNzYWdlOiAnWW91ciBtZXNzYWdlIGlzIG9uIGl0cyB3YXkhJ1xuICAgIH07XG4gIH1cblxuICBpZiAocmVxdWVzdFN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XG5cdFx0bm90aWZpY2F0aW9uID0ge1xuXHRcdFx0c3RhdHVzOiAnc3VjY2VzcycsXG5cdFx0XHR0aXRsZTogJ1N1Y2NlcyEnLFxuXHRcdFx0bWVzc2FnZTogJ01lc3NhZ2Ugc2VudCBzdWNjZXNzZnVsbHkhJyxcblx0XHR9O1xuXHR9XG5cbiAgaWYgKHJlcXVlc3RTdGF0dXMgPT09ICdlcnJvcicpIHtcblx0XHRub3RpZmljYXRpb24gPSB7XG5cdFx0XHRzdGF0dXM6ICdlcnJvcicsXG5cdFx0XHR0aXRsZTogJ0Vycm9yIScsXG5cdFx0XHRtZXNzYWdlOiByZXF1ZXN0RXJyb3IsXG5cdFx0fTtcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhY3R9PlxuXHRcdFx0PGgxPklldHMgb250ZGVrdD8gPC9oMT5cblx0XHRcdDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfSBvblN1Ym1pdD17c2VuZE1lc3NhZ2VIYW5kbGVyfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbHN9PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxuXHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9J2VtYWlsJz5Kb3V3IGUtbWFpbDwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0dHlwZT0nZW1haWwnXG5cdFx0XHRcdFx0XHRcdGlkPSdlbWFpbCdcblx0XHRcdFx0XHRcdFx0cmVxdWlyZWRcblx0XHRcdFx0XHRcdFx0dmFsdWU9e2VudGVyZWRFbWFpbH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2V2ZW50ID0+IHNldEVudGVyZWRFbWFpbChldmVudC50YXJnZXQudmFsdWUpfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cblx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPSduYW1lJz5Kb3V3IG5hYW08L2xhYmVsPlxuXHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXG5cdFx0XHRcdFx0XHRcdGlkPSduYW1lJ1xuXHRcdFx0XHRcdFx0XHRyZXF1aXJlZFxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17ZW50ZXJlZE5hbWV9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtldmVudCA9PiBzZXRFbnRlcmVkTmFtZShldmVudC50YXJnZXQudmFsdWUpfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxuXHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPSdtZXNzYWdlJz5WZXJ0ZWwhPC9sYWJlbD5cblx0XHRcdFx0XHQ8dGV4dGFyZWFcblx0XHRcdFx0XHRcdG5hbWU9J21lc3NhZ2UnXG5cdFx0XHRcdFx0XHRpZD0nbWVzc2FnZSdcblx0XHRcdFx0XHRcdGNvbHM9JzMwJ1xuXHRcdFx0XHRcdFx0cm93cz0nMTAnXG5cdFx0XHRcdFx0XHRyZXF1aXJlZFxuXHRcdFx0XHRcdFx0dmFsdWU9e2VudGVyZWRNZXNzYWdlfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e2V2ZW50ID0+IHNldEVudGVyZWRNZXNzYWdlKGV2ZW50LnRhcmdldC52YWx1ZSl9XG5cdFx0XHRcdFx0PjwvdGV4dGFyZWE+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb25zfT5cblx0XHRcdFx0XHQ8YnV0dG9uPlZlcnplbmRlbjwvYnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZm9ybT5cbiAgICAgIHtub3RpZmljYXRpb24gJiYgKDxOb3RpZmljYXRpb24gc3RhdHVzPXtub3RpZmljYXRpb24uc3RhdHVzfSB0aXRsZT17bm90aWZpY2F0aW9uLnRpdGxlfSBtZXNzYWdlPXtub3RpZmljYXRpb24ubWVzc2FnZX0vPil9XG5cdFx0PC9zZWN0aW9uPlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0Rm9ybTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/contact/contact-form.js\n");

/***/ }),

/***/ "./components/contact/contact-form.module.css":
/*!****************************************************!*\
  !*** ./components/contact/contact-form.module.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"contact\": \"contact-form_contact__2DYss\",\n\t\"form\": \"contact-form_form__1RTmV\",\n\t\"controls\": \"contact-form_controls__3o80h\",\n\t\"control\": \"contact-form_control__1hqvU\",\n\t\"actions\": \"contact-form_actions__RzW-v\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC1mb3JtLm1vZHVsZS5jc3M/MGJjMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QtZm9ybS5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFjdFwiOiBcImNvbnRhY3QtZm9ybV9jb250YWN0X18yRFlzc1wiLFxuXHRcImZvcm1cIjogXCJjb250YWN0LWZvcm1fZm9ybV9fMVJUbVZcIixcblx0XCJjb250cm9sc1wiOiBcImNvbnRhY3QtZm9ybV9jb250cm9sc19fM284MGhcIixcblx0XCJjb250cm9sXCI6IFwiY29udGFjdC1mb3JtX2NvbnRyb2xfXzFocXZVXCIsXG5cdFwiYWN0aW9uc1wiOiBcImNvbnRhY3QtZm9ybV9hY3Rpb25zX19SelctdlwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/contact/contact-form.module.css\n");

/***/ }),

/***/ "./components/ui/notification.js":
/*!***************************************!*\
  !*** ./components/ui/notification.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _notification_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification.module.css */ \"./components/ui/notification.module.css\");\n/* harmony import */ var _notification_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_notification_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/christianmarginet/Documents/next-Frontend/components/ui/notification.js\";\n\n\n\nfunction Notification(props) {\n  const {\n    title,\n    message,\n    status\n  } = props;\n  let statusClasses = '';\n\n  if (status === 'success') {\n    statusClasses = _notification_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.success;\n  }\n\n  if (status === 'error') {\n    statusClasses = _notification_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.error;\n  }\n\n  const cssClasses = `${_notification_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.notification} ${statusClasses}`;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: cssClasses,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: message\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Notification);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VpL25vdGlmaWNhdGlvbi5qcz8wZWExIl0sIm5hbWVzIjpbIk5vdGlmaWNhdGlvbiIsInByb3BzIiwidGl0bGUiLCJtZXNzYWdlIiwic3RhdHVzIiwic3RhdHVzQ2xhc3NlcyIsImNsYXNzZXMiLCJzdWNjZXNzIiwiZXJyb3IiLCJjc3NDbGFzc2VzIiwibm90aWZpY2F0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUVBOztBQUVBLFNBQVNBLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCO0FBQzNCLFFBQU07QUFBRUMsU0FBRjtBQUFTQyxXQUFUO0FBQWtCQztBQUFsQixNQUE2QkgsS0FBbkM7QUFFQSxNQUFJSSxhQUFhLEdBQUcsRUFBcEI7O0FBRUEsTUFBSUQsTUFBTSxLQUFLLFNBQWYsRUFBMEI7QUFDeEJDLGlCQUFhLEdBQUdDLCtEQUFPLENBQUNDLE9BQXhCO0FBQ0Q7O0FBRUQsTUFBSUgsTUFBTSxLQUFLLE9BQWYsRUFBd0I7QUFDdEJDLGlCQUFhLEdBQUdDLCtEQUFPLENBQUNFLEtBQXhCO0FBQ0Q7O0FBRUQsUUFBTUMsVUFBVSxHQUFJLEdBQUVILCtEQUFPLENBQUNJLFlBQWEsSUFBR0wsYUFBYyxFQUE1RDtBQUVBLHNCQUNFO0FBQUssYUFBUyxFQUFFSSxVQUFoQjtBQUFBLDRCQUNFO0FBQUEsZ0JBQUtQO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBQSxnQkFBSUM7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFNRDs7QUFFY0gsMkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3VpL25vdGlmaWNhdGlvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL25vdGlmaWNhdGlvbi5tb2R1bGUuY3NzJztcblxuZnVuY3Rpb24gTm90aWZpY2F0aW9uKHByb3BzKSB7XG4gIGNvbnN0IHsgdGl0bGUsIG1lc3NhZ2UsIHN0YXR1cyB9ID0gcHJvcHM7XG5cbiAgbGV0IHN0YXR1c0NsYXNzZXMgPSAnJztcblxuICBpZiAoc3RhdHVzID09PSAnc3VjY2VzcycpIHtcbiAgICBzdGF0dXNDbGFzc2VzID0gY2xhc3Nlcy5zdWNjZXNzO1xuICB9XG5cbiAgaWYgKHN0YXR1cyA9PT0gJ2Vycm9yJykge1xuICAgIHN0YXR1c0NsYXNzZXMgPSBjbGFzc2VzLmVycm9yO1xuICB9XG5cbiAgY29uc3QgY3NzQ2xhc3NlcyA9IGAke2NsYXNzZXMubm90aWZpY2F0aW9ufSAke3N0YXR1c0NsYXNzZXN9YDtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NDbGFzc2VzfT5cbiAgICAgIDxoMj57dGl0bGV9PC9oMj5cbiAgICAgIDxwPnttZXNzYWdlfTwvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTm90aWZpY2F0aW9uO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ui/notification.js\n");

/***/ }),

/***/ "./components/ui/notification.module.css":
/*!***********************************************!*\
  !*** ./components/ui/notification.module.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"notification\": \"notification_notification__3oWBf\",\n\t\"success\": \"notification_success__3Hbna\",\n\t\"error\": \"notification_error__1LYKp\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VpL25vdGlmaWNhdGlvbi5tb2R1bGUuY3NzPzQ3ZDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy91aS9ub3RpZmljYXRpb24ubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm5vdGlmaWNhdGlvblwiOiBcIm5vdGlmaWNhdGlvbl9ub3RpZmljYXRpb25fXzNvV0JmXCIsXG5cdFwic3VjY2Vzc1wiOiBcIm5vdGlmaWNhdGlvbl9zdWNjZXNzX18zSGJuYVwiLFxuXHRcImVycm9yXCI6IFwibm90aWZpY2F0aW9uX2Vycm9yX18xTFlLcFwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ui/notification.module.css\n");

/***/ }),

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_contact_contact_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/contact/contact-form */ \"./components/contact/contact-form.js\");\n\nvar _jsxFileName = \"/Users/christianmarginet/Documents/next-Frontend/pages/contact.js\";\n\n\n\nfunction ContactPage() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_contact_contact_form__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 10\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb250YWN0LmpzPzAwYjciXSwibmFtZXMiOlsiQ29udGFjdFBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxXQUFULEdBQXdCO0FBQ3RCLHNCQUFPLHFFQUFDLHdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEOztBQUVjQSwwRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2NvbnRhY3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQ29udGFjdEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QtZm9ybSdcblxuZnVuY3Rpb24gQ29udGFjdFBhZ2UgKCkge1xuICByZXR1cm4gPENvbnRhY3RGb3JtIC8+XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/contact.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kb21cIj81ZTlhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWRvbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-dom\n");

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