webpackHotUpdate_N_E("pages/contact",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/contact/contact-form.module.css":
/*!****************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./components/contact/contact-form.module.css ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".contact-form_contact__2DYss {\\n  margin: var(--size-8) auto;\\n  border-radius: 6px;\\n  background-color: white;\\n  width: 90%;\\n  max-width: 50rem;\\n  padding: var(--size-4);\\n  font-size: var(--size-6);\\n  border-width: 1px;\\n  border-style: solid;\\n  border-color: grey;\\n}\\n\\n.contact-form_contact__2DYss h1 {\\n  font-size: var(--size-8);\\n  margin: var(--size-4) 0;\\n  text-align: left;\\n}\\n\\n.contact-form_form__1RTmV label {\\n  display: block;\\n  font-family: 'Oswald', sans-serif;\\n  font-weight: bold;\\n  margin: var(--size-2) 0 var(--size-1) 0;\\n}\\n\\n.contact-form_form__1RTmV input,\\n.contact-form_form__1RTmV textarea {\\n  font: inherit;\\n  padding: var(--size-1);\\n  border-radius: 4px;\\n  width: 100%;\\n  border: 1px solid grey;\\n  background-color: white;\\n  resize: none;\\n}\\n\\n.contact-form_controls__3o80h {\\n  display: flex;\\n  grid-column-gap: 1rem;\\n  column-gap: 1rem;\\n  flex-wrap: wrap;\\n}\\n\\n.contact-form_control__1hqvU {\\n  flex: 1 1;\\n  min-width: 10rem;\\n}\\n\\n.contact-form_actions__RzW-v {\\n  margin-top: var(--size-4);\\n  text-align: right;\\n}\\n\\n.contact-form_form__1RTmV button {\\n  font: inherit;\\n  cursor: pointer;\\n  background-color: #dee2ff;\\n  border: 1px solid#dee2ff;\\n  padding: var(--size-2) var(--size-4);\\n  border-radius: 4px;\\n  color: b;\\n  \\n}\\n\\n.contact-form_form__1RTmV button:hover {\\n  background-color: var(--color-primary-500);\\n  border-color: var(--color-primary-500);\\n}\\n\\n@media (min-width: 768px) {\\n  .contact-form_contact__2DYss h1 {\\n    font-size: var(--size-16);\\n    text-align: center;\\n  }\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://components/contact/contact-form.module.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,0BAA0B;EAC1B,kBAAkB;EAClB,uBAAuB;EACvB,UAAU;EACV,gBAAgB;EAChB,sBAAsB;EACtB,wBAAwB;EACxB,iBAAiB;EACjB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,wBAAwB;EACxB,uBAAuB;EACvB,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,iCAAiC;EACjC,iBAAiB;EACjB,uCAAuC;AACzC;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,WAAW;EACX,sBAAsB;EACtB,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,qBAAgB;EAAhB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,SAAO;EACP,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,yBAAyB;EACzB,wBAAwB;EACxB,oCAAoC;EACpC,kBAAkB;EAClB,QAAQ;;AAEV;;AAEA;EACE,0CAA0C;EAC1C,sCAAsC;AACxC;;AAEA;EACE;IACE,yBAAyB;IACzB,kBAAkB;EACpB;AACF\",\"sourcesContent\":[\".contact {\\n  margin: var(--size-8) auto;\\n  border-radius: 6px;\\n  background-color: white;\\n  width: 90%;\\n  max-width: 50rem;\\n  padding: var(--size-4);\\n  font-size: var(--size-6);\\n  border-width: 1px;\\n  border-style: solid;\\n  border-color: grey;\\n}\\n\\n.contact h1 {\\n  font-size: var(--size-8);\\n  margin: var(--size-4) 0;\\n  text-align: left;\\n}\\n\\n.form label {\\n  display: block;\\n  font-family: 'Oswald', sans-serif;\\n  font-weight: bold;\\n  margin: var(--size-2) 0 var(--size-1) 0;\\n}\\n\\n.form input,\\n.form textarea {\\n  font: inherit;\\n  padding: var(--size-1);\\n  border-radius: 4px;\\n  width: 100%;\\n  border: 1px solid grey;\\n  background-color: white;\\n  resize: none;\\n}\\n\\n.controls {\\n  display: flex;\\n  column-gap: 1rem;\\n  flex-wrap: wrap;\\n}\\n\\n.control {\\n  flex: 1;\\n  min-width: 10rem;\\n}\\n\\n.actions {\\n  margin-top: var(--size-4);\\n  text-align: right;\\n}\\n\\n.form button {\\n  font: inherit;\\n  cursor: pointer;\\n  background-color: #dee2ff;\\n  border: 1px solid#dee2ff;\\n  padding: var(--size-2) var(--size-4);\\n  border-radius: 4px;\\n  color: b;\\n  \\n}\\n\\n.form button:hover {\\n  background-color: var(--color-primary-500);\\n  border-color: var(--color-primary-500);\\n}\\n\\n@media (min-width: 768px) {\\n  .contact h1 {\\n    font-size: var(--size-16);\\n    text-align: center;\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"contact\": \"contact-form_contact__2DYss\",\n\t\"form\": \"contact-form_form__1RTmV\",\n\t\"controls\": \"contact-form_controls__3o80h\",\n\t\"control\": \"contact-form_control__1hqvU\",\n\t\"actions\": \"contact-form_actions__RzW-v\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QtZm9ybS5tb2R1bGUuY3NzPzMyNjMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxvSEFBeUQ7QUFDbkc7QUFDQTtBQUNBLDhCQUE4QixRQUFTLGlDQUFpQywrQkFBK0IsdUJBQXVCLDRCQUE0QixlQUFlLHFCQUFxQiwyQkFBMkIsNkJBQTZCLHNCQUFzQix3QkFBd0IsdUJBQXVCLEdBQUcscUNBQXFDLDZCQUE2Qiw0QkFBNEIscUJBQXFCLEdBQUcscUNBQXFDLG1CQUFtQixzQ0FBc0Msc0JBQXNCLDRDQUE0QyxHQUFHLDBFQUEwRSxrQkFBa0IsMkJBQTJCLHVCQUF1QixnQkFBZ0IsMkJBQTJCLDRCQUE0QixpQkFBaUIsR0FBRyxtQ0FBbUMsa0JBQWtCLDBCQUEwQixxQkFBcUIsb0JBQW9CLEdBQUcsa0NBQWtDLGNBQWMscUJBQXFCLEdBQUcsa0NBQWtDLDhCQUE4QixzQkFBc0IsR0FBRyxzQ0FBc0Msa0JBQWtCLG9CQUFvQiw4QkFBOEIsNkJBQTZCLHlDQUF5Qyx1QkFBdUIsYUFBYSxPQUFPLDRDQUE0QywrQ0FBK0MsMkNBQTJDLEdBQUcsK0JBQStCLHFDQUFxQyxnQ0FBZ0MseUJBQXlCLEtBQUssR0FBRyxTQUFTLDJHQUEyRyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxtQ0FBbUMsK0JBQStCLHVCQUF1Qiw0QkFBNEIsZUFBZSxxQkFBcUIsMkJBQTJCLDZCQUE2QixzQkFBc0Isd0JBQXdCLHVCQUF1QixHQUFHLGlCQUFpQiw2QkFBNkIsNEJBQTRCLHFCQUFxQixHQUFHLGlCQUFpQixtQkFBbUIsc0NBQXNDLHNCQUFzQiw0Q0FBNEMsR0FBRyxrQ0FBa0Msa0JBQWtCLDJCQUEyQix1QkFBdUIsZ0JBQWdCLDJCQUEyQiw0QkFBNEIsaUJBQWlCLEdBQUcsZUFBZSxrQkFBa0IscUJBQXFCLG9CQUFvQixHQUFHLGNBQWMsWUFBWSxxQkFBcUIsR0FBRyxjQUFjLDhCQUE4QixzQkFBc0IsR0FBRyxrQkFBa0Isa0JBQWtCLG9CQUFvQiw4QkFBOEIsNkJBQTZCLHlDQUF5Qyx1QkFBdUIsYUFBYSxPQUFPLHdCQUF3QiwrQ0FBK0MsMkNBQTJDLEdBQUcsK0JBQStCLGlCQUFpQixnQ0FBZ0MseUJBQXlCLEtBQUssR0FBRyxxQkFBcUI7QUFDeG9IO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/IS4vY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QtZm9ybS5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmNvbnRhY3QtZm9ybV9jb250YWN0X18yRFlzcyB7XFxuICBtYXJnaW46IHZhcigtLXNpemUtOCkgYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1heC13aWR0aDogNTByZW07XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLTQpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1zaXplLTYpO1xcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiBncmV5O1xcbn1cXG5cXG4uY29udGFjdC1mb3JtX2NvbnRhY3RfXzJEWXNzIGgxIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc2l6ZS04KTtcXG4gIG1hcmdpbjogdmFyKC0tc2l6ZS00KSAwO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLmNvbnRhY3QtZm9ybV9mb3JtX18xUlRtViBsYWJlbCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luOiB2YXIoLS1zaXplLTIpIDAgdmFyKC0tc2l6ZS0xKSAwO1xcbn1cXG5cXG4uY29udGFjdC1mb3JtX2Zvcm1fXzFSVG1WIGlucHV0LFxcbi5jb250YWN0LWZvcm1fZm9ybV9fMVJUbVYgdGV4dGFyZWEge1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtMSk7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLmNvbnRhY3QtZm9ybV9jb250cm9sc19fM284MGgge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdyaWQtY29sdW1uLWdhcDogMXJlbTtcXG4gIGNvbHVtbi1nYXA6IDFyZW07XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5jb250YWN0LWZvcm1fY29udHJvbF9fMWhxdlUge1xcbiAgZmxleDogMSAxO1xcbiAgbWluLXdpZHRoOiAxMHJlbTtcXG59XFxuXFxuLmNvbnRhY3QtZm9ybV9hY3Rpb25zX19SelctdiB7XFxuICBtYXJnaW4tdG9wOiB2YXIoLS1zaXplLTQpO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi5jb250YWN0LWZvcm1fZm9ybV9fMVJUbVYgYnV0dG9uIHtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVlMmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQjZGVlMmZmO1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS0yKSB2YXIoLS1zaXplLTQpO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgY29sb3I6IGI7XFxuICBcXG59XFxuXFxuLmNvbnRhY3QtZm9ybV9mb3JtX18xUlRtViBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS01MDApO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LTUwMCk7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLmNvbnRhY3QtZm9ybV9jb250YWN0X18yRFlzcyBoMSB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tc2l6ZS0xNik7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LWZvcm0ubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4Qix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlDQUFpQztFQUNqQyxpQkFBaUI7RUFDakIsdUNBQXVDO0FBQ3pDOztBQUVBOztFQUVFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQkFBZ0I7RUFBaEIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxTQUFPO0VBQ1AsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLHdCQUF3QjtFQUN4QixvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLFFBQVE7O0FBRVY7O0FBRUE7RUFDRSwwQ0FBMEM7RUFDMUMsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0U7SUFDRSx5QkFBeUI7SUFDekIsa0JBQWtCO0VBQ3BCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNvbnRhY3Qge1xcbiAgbWFyZ2luOiB2YXIoLS1zaXplLTgpIGF1dG87XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXgtd2lkdGg6IDUwcmVtO1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS00KTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc2l6ZS02KTtcXG4gIGJvcmRlci13aWR0aDogMXB4O1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogZ3JleTtcXG59XFxuXFxuLmNvbnRhY3QgaDEge1xcbiAgZm9udC1zaXplOiB2YXIoLS1zaXplLTgpO1xcbiAgbWFyZ2luOiB2YXIoLS1zaXplLTQpIDA7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4uZm9ybSBsYWJlbCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luOiB2YXIoLS1zaXplLTIpIDAgdmFyKC0tc2l6ZS0xKSAwO1xcbn1cXG5cXG4uZm9ybSBpbnB1dCxcXG4uZm9ybSB0ZXh0YXJlYSB7XFxuICBmb250OiBpbmhlcml0O1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS0xKTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4uY29udHJvbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGNvbHVtbi1nYXA6IDFyZW07XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5jb250cm9sIHtcXG4gIGZsZXg6IDE7XFxuICBtaW4td2lkdGg6IDEwcmVtO1xcbn1cXG5cXG4uYWN0aW9ucyB7XFxuICBtYXJnaW4tdG9wOiB2YXIoLS1zaXplLTQpO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi5mb3JtIGJ1dHRvbiB7XFxuICBmb250OiBpbmhlcml0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlZTJmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkI2RlZTJmZjtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtMikgdmFyKC0tc2l6ZS00KTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGNvbG9yOiBiO1xcbiAgXFxufVxcblxcbi5mb3JtIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LTUwMCk7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktNTAwKTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuY29udGFjdCBoMSB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tc2l6ZS0xNik7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiY29udGFjdFwiOiBcImNvbnRhY3QtZm9ybV9jb250YWN0X18yRFlzc1wiLFxuXHRcImZvcm1cIjogXCJjb250YWN0LWZvcm1fZm9ybV9fMVJUbVZcIixcblx0XCJjb250cm9sc1wiOiBcImNvbnRhY3QtZm9ybV9jb250cm9sc19fM284MGhcIixcblx0XCJjb250cm9sXCI6IFwiY29udGFjdC1mb3JtX2NvbnRyb2xfXzFocXZVXCIsXG5cdFwiYWN0aW9uc1wiOiBcImNvbnRhY3QtZm9ybV9hY3Rpb25zX19SelctdlwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/contact/contact-form.module.css\n");

/***/ })

})