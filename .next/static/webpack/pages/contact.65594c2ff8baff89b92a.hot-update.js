webpackHotUpdate_N_E("pages/contact",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/contact/contact-form.module.css":
/*!****************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./components/contact/contact-form.module.css ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".contact-form_contact__2DYss {\\n  margin: var(--size-8) auto;\\n  border-radius: 6px;\\n  background-color: white;\\n  width: 90%;\\n  max-width: 50rem;\\n  padding: var(--size-4);\\n  font-size: var(--size-6);\\n  border-width: 1px;\\n  border-style: solid;\\n  border-color: grey;\\n}\\n\\n.contact-form_contact__2DYss h1 {\\n  font-size: var(--size-8);\\n  margin: var(--size-4) 0;\\n  text-align: left;\\n}\\n\\n.contact-form_form__1RTmV label {\\n  display: block;\\n  font-family: 'Oswald', sans-serif;\\n  font-weight: bold;\\n  margin: var(--size-2) 0 var(--size-1) 0;\\n}\\n\\n.contact-form_form__1RTmV input,\\n.contact-form_form__1RTmV textarea {\\n  font: inherit;\\n  padding: var(--size-1);\\n  border-radius: 4px;\\n  width: 100%;\\n  border: 1px solid grey;\\n  background-color: white;\\n  resize: none;\\n}\\n\\n.contact-form_controls__3o80h {\\n  display: flex;\\n  grid-column-gap: 1rem;\\n  column-gap: 1rem;\\n  flex-wrap: wrap;\\n}\\n\\n.contact-form_control__1hqvU {\\n  flex: 1 1;\\n  min-width: 10rem;\\n}\\n\\n.contact-form_actions__RzW-v {\\n  margin-top: var(--size-4);\\n  text-align: right;\\n}\\n\\n.contact-form_form__1RTmV button {\\n  font: inherit;\\n  cursor: pointer;\\n  background-color: #dee2ff;\\n  border: 1px solid#dee2ff;\\n  padding: var(--size-2) var(--size-4);\\n  border-radius: 4px;\\n  color: white;\\n  \\n}\\n\\n.contact-form_form__1RTmV button:hover {\\n  background-color: var(--color-primary-500);\\n  border-color: var(--color-primary-500);\\n}\\n\\n@media (min-width: 768px) {\\n  .contact-form_contact__2DYss h1 {\\n    font-size: var(--size-16);\\n    text-align: center;\\n  }\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://components/contact/contact-form.module.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,0BAA0B;EAC1B,kBAAkB;EAClB,uBAAuB;EACvB,UAAU;EACV,gBAAgB;EAChB,sBAAsB;EACtB,wBAAwB;EACxB,iBAAiB;EACjB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,wBAAwB;EACxB,uBAAuB;EACvB,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,iCAAiC;EACjC,iBAAiB;EACjB,uCAAuC;AACzC;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,WAAW;EACX,sBAAsB;EACtB,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,qBAAgB;EAAhB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,SAAO;EACP,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,yBAAyB;EACzB,wBAAwB;EACxB,oCAAoC;EACpC,kBAAkB;EAClB,YAAY;;AAEd;;AAEA;EACE,0CAA0C;EAC1C,sCAAsC;AACxC;;AAEA;EACE;IACE,yBAAyB;IACzB,kBAAkB;EACpB;AACF\",\"sourcesContent\":[\".contact {\\n  margin: var(--size-8) auto;\\n  border-radius: 6px;\\n  background-color: white;\\n  width: 90%;\\n  max-width: 50rem;\\n  padding: var(--size-4);\\n  font-size: var(--size-6);\\n  border-width: 1px;\\n  border-style: solid;\\n  border-color: grey;\\n}\\n\\n.contact h1 {\\n  font-size: var(--size-8);\\n  margin: var(--size-4) 0;\\n  text-align: left;\\n}\\n\\n.form label {\\n  display: block;\\n  font-family: 'Oswald', sans-serif;\\n  font-weight: bold;\\n  margin: var(--size-2) 0 var(--size-1) 0;\\n}\\n\\n.form input,\\n.form textarea {\\n  font: inherit;\\n  padding: var(--size-1);\\n  border-radius: 4px;\\n  width: 100%;\\n  border: 1px solid grey;\\n  background-color: white;\\n  resize: none;\\n}\\n\\n.controls {\\n  display: flex;\\n  column-gap: 1rem;\\n  flex-wrap: wrap;\\n}\\n\\n.control {\\n  flex: 1;\\n  min-width: 10rem;\\n}\\n\\n.actions {\\n  margin-top: var(--size-4);\\n  text-align: right;\\n}\\n\\n.form button {\\n  font: inherit;\\n  cursor: pointer;\\n  background-color: #dee2ff;\\n  border: 1px solid#dee2ff;\\n  padding: var(--size-2) var(--size-4);\\n  border-radius: 4px;\\n  color: white;\\n  \\n}\\n\\n.form button:hover {\\n  background-color: var(--color-primary-500);\\n  border-color: var(--color-primary-500);\\n}\\n\\n@media (min-width: 768px) {\\n  .contact h1 {\\n    font-size: var(--size-16);\\n    text-align: center;\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"contact\": \"contact-form_contact__2DYss\",\n\t\"form\": \"contact-form_form__1RTmV\",\n\t\"controls\": \"contact-form_controls__3o80h\",\n\t\"control\": \"contact-form_control__1hqvU\",\n\t\"actions\": \"contact-form_actions__RzW-v\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QtZm9ybS5tb2R1bGUuY3NzPzMyNjMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxvSEFBeUQ7QUFDbkc7QUFDQTtBQUNBLDhCQUE4QixRQUFTLGlDQUFpQywrQkFBK0IsdUJBQXVCLDRCQUE0QixlQUFlLHFCQUFxQiwyQkFBMkIsNkJBQTZCLHNCQUFzQix3QkFBd0IsdUJBQXVCLEdBQUcscUNBQXFDLDZCQUE2Qiw0QkFBNEIscUJBQXFCLEdBQUcscUNBQXFDLG1CQUFtQixzQ0FBc0Msc0JBQXNCLDRDQUE0QyxHQUFHLDBFQUEwRSxrQkFBa0IsMkJBQTJCLHVCQUF1QixnQkFBZ0IsMkJBQTJCLDRCQUE0QixpQkFBaUIsR0FBRyxtQ0FBbUMsa0JBQWtCLDBCQUEwQixxQkFBcUIsb0JBQW9CLEdBQUcsa0NBQWtDLGNBQWMscUJBQXFCLEdBQUcsa0NBQWtDLDhCQUE4QixzQkFBc0IsR0FBRyxzQ0FBc0Msa0JBQWtCLG9CQUFvQiw4QkFBOEIsNkJBQTZCLHlDQUF5Qyx1QkFBdUIsaUJBQWlCLE9BQU8sNENBQTRDLCtDQUErQywyQ0FBMkMsR0FBRywrQkFBK0IscUNBQXFDLGdDQUFnQyx5QkFBeUIsS0FBSyxHQUFHLFNBQVMsMkdBQTJHLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLG1DQUFtQywrQkFBK0IsdUJBQXVCLDRCQUE0QixlQUFlLHFCQUFxQiwyQkFBMkIsNkJBQTZCLHNCQUFzQix3QkFBd0IsdUJBQXVCLEdBQUcsaUJBQWlCLDZCQUE2Qiw0QkFBNEIscUJBQXFCLEdBQUcsaUJBQWlCLG1CQUFtQixzQ0FBc0Msc0JBQXNCLDRDQUE0QyxHQUFHLGtDQUFrQyxrQkFBa0IsMkJBQTJCLHVCQUF1QixnQkFBZ0IsMkJBQTJCLDRCQUE0QixpQkFBaUIsR0FBRyxlQUFlLGtCQUFrQixxQkFBcUIsb0JBQW9CLEdBQUcsY0FBYyxZQUFZLHFCQUFxQixHQUFHLGNBQWMsOEJBQThCLHNCQUFzQixHQUFHLGtCQUFrQixrQkFBa0Isb0JBQW9CLDhCQUE4Qiw2QkFBNkIseUNBQXlDLHVCQUF1QixpQkFBaUIsT0FBTyx3QkFBd0IsK0NBQStDLDJDQUEyQyxHQUFHLCtCQUErQixpQkFBaUIsZ0NBQWdDLHlCQUF5QixLQUFLLEdBQUcscUJBQXFCO0FBQ2hwSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPyEuL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LWZvcm0ubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5jb250YWN0LWZvcm1fY29udGFjdF9fMkRZc3Mge1xcbiAgbWFyZ2luOiB2YXIoLS1zaXplLTgpIGF1dG87XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXgtd2lkdGg6IDUwcmVtO1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS00KTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc2l6ZS02KTtcXG4gIGJvcmRlci13aWR0aDogMXB4O1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogZ3JleTtcXG59XFxuXFxuLmNvbnRhY3QtZm9ybV9jb250YWN0X18yRFlzcyBoMSB7XFxuICBmb250LXNpemU6IHZhcigtLXNpemUtOCk7XFxuICBtYXJnaW46IHZhcigtLXNpemUtNCkgMDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5jb250YWN0LWZvcm1fZm9ybV9fMVJUbVYgbGFiZWwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbjogdmFyKC0tc2l6ZS0yKSAwIHZhcigtLXNpemUtMSkgMDtcXG59XFxuXFxuLmNvbnRhY3QtZm9ybV9mb3JtX18xUlRtViBpbnB1dCxcXG4uY29udGFjdC1mb3JtX2Zvcm1fXzFSVG1WIHRleHRhcmVhIHtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLTEpO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5jb250YWN0LWZvcm1fY29udHJvbHNfXzNvODBoIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBncmlkLWNvbHVtbi1nYXA6IDFyZW07XFxuICBjb2x1bW4tZ2FwOiAxcmVtO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uY29udGFjdC1mb3JtX2NvbnRyb2xfXzFocXZVIHtcXG4gIGZsZXg6IDEgMTtcXG4gIG1pbi13aWR0aDogMTByZW07XFxufVxcblxcbi5jb250YWN0LWZvcm1fYWN0aW9uc19fUnpXLXYge1xcbiAgbWFyZ2luLXRvcDogdmFyKC0tc2l6ZS00KTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4uY29udGFjdC1mb3JtX2Zvcm1fXzFSVG1WIGJ1dHRvbiB7XFxuICBmb250OiBpbmhlcml0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlZTJmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkI2RlZTJmZjtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtMikgdmFyKC0tc2l6ZS00KTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIFxcbn1cXG5cXG4uY29udGFjdC1mb3JtX2Zvcm1fXzFSVG1WIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LTUwMCk7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktNTAwKTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuY29udGFjdC1mb3JtX2NvbnRhY3RfXzJEWXNzIGgxIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1zaXplLTE2KTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QtZm9ybS5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUNBQWlDO0VBQ2pDLGlCQUFpQjtFQUNqQix1Q0FBdUM7QUFDekM7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFNBQU87RUFDUCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsd0JBQXdCO0VBQ3hCLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsWUFBWTs7QUFFZDs7QUFFQTtFQUNFLDBDQUEwQztFQUMxQyxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRTtJQUNFLHlCQUF5QjtJQUN6QixrQkFBa0I7RUFDcEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY29udGFjdCB7XFxuICBtYXJnaW46IHZhcigtLXNpemUtOCkgYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1heC13aWR0aDogNTByZW07XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLTQpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1zaXplLTYpO1xcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiBncmV5O1xcbn1cXG5cXG4uY29udGFjdCBoMSB7XFxuICBmb250LXNpemU6IHZhcigtLXNpemUtOCk7XFxuICBtYXJnaW46IHZhcigtLXNpemUtNCkgMDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5mb3JtIGxhYmVsIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW46IHZhcigtLXNpemUtMikgMCB2YXIoLS1zaXplLTEpIDA7XFxufVxcblxcbi5mb3JtIGlucHV0LFxcbi5mb3JtIHRleHRhcmVhIHtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLTEpO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5jb250cm9scyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgY29sdW1uLWdhcDogMXJlbTtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmNvbnRyb2wge1xcbiAgZmxleDogMTtcXG4gIG1pbi13aWR0aDogMTByZW07XFxufVxcblxcbi5hY3Rpb25zIHtcXG4gIG1hcmdpbi10b3A6IHZhcigtLXNpemUtNCk7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLmZvcm0gYnV0dG9uIHtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVlMmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQjZGVlMmZmO1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS0yKSB2YXIoLS1zaXplLTQpO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgXFxufVxcblxcbi5mb3JtIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LTUwMCk7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktNTAwKTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuY29udGFjdCBoMSB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tc2l6ZS0xNik7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiY29udGFjdFwiOiBcImNvbnRhY3QtZm9ybV9jb250YWN0X18yRFlzc1wiLFxuXHRcImZvcm1cIjogXCJjb250YWN0LWZvcm1fZm9ybV9fMVJUbVZcIixcblx0XCJjb250cm9sc1wiOiBcImNvbnRhY3QtZm9ybV9jb250cm9sc19fM284MGhcIixcblx0XCJjb250cm9sXCI6IFwiY29udGFjdC1mb3JtX2NvbnRyb2xfXzFocXZVXCIsXG5cdFwiYWN0aW9uc1wiOiBcImNvbnRhY3QtZm9ybV9hY3Rpb25zX19SelctdlwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/contact/contact-form.module.css\n");

/***/ })

})