/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/api/v1/posts";
exports.ids = ["pages/api/v1/posts"];
exports.modules = {

/***/ "./lib/posts.tsx":
/*!***********************!*\
  !*** ./lib/posts.tsx ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gray-matter */ \"gray-matter\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst getPosts = async () => {\n  const markdownDIR = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), 'markdown');\n  const fileNames = await fs__WEBPACK_IMPORTED_MODULE_0__.promises.readdir(markdownDIR);\n  const posts = fileNames.map(filename => {\n    const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(markdownDIR, filename);\n    const id = filename.replace(/\\.md$/g, '');\n    const text = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, 'utf8');\n    const {\n      data: {\n        title,\n        date\n      },\n      content\n    } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(text);\n    return {\n      id,\n      title,\n      date\n    };\n  });\n  return posts;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getPosts);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtYmxvZy0xLy4vbGliL3Bvc3RzLnRzeD85MjdhIl0sIm5hbWVzIjpbImdldFBvc3RzIiwibWFya2Rvd25ESVIiLCJwYXRoIiwicHJvY2VzcyIsImN3ZCIsImZpbGVOYW1lcyIsImZzUHJvbWlzZSIsInBvc3RzIiwibWFwIiwiZmlsZW5hbWUiLCJmdWxsUGF0aCIsImlkIiwicmVwbGFjZSIsInRleHQiLCJmcyIsImRhdGEiLCJ0aXRsZSIsImRhdGUiLCJjb250ZW50IiwibWF0dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUNBLE1BQU1BLFFBQVEsR0FBRyxZQUFZO0FBQ3pCLFFBQU1DLFdBQVcsR0FBR0MsZ0RBQUEsQ0FBVUMsT0FBTyxDQUFDQyxHQUFSLEVBQVYsRUFBeUIsVUFBekIsQ0FBcEI7QUFDQSxRQUFNQyxTQUFTLEdBQUcsTUFBTUMsZ0RBQUEsQ0FBa0JMLFdBQWxCLENBQXhCO0FBQ0EsUUFBTU0sS0FBSyxHQUFHRixTQUFTLENBQUNHLEdBQVYsQ0FBY0MsUUFBUSxJQUFJO0FBQ3BDLFVBQU1DLFFBQVEsR0FBR1IsZ0RBQUEsQ0FBVUQsV0FBVixFQUF1QlEsUUFBdkIsQ0FBakI7QUFDQSxVQUFNRSxFQUFFLEdBQUdGLFFBQVEsQ0FBQ0csT0FBVCxDQUFpQixRQUFqQixFQUEyQixFQUEzQixDQUFYO0FBQ0EsVUFBTUMsSUFBSSxHQUFHQyxzREFBQSxDQUFnQkosUUFBaEIsRUFBMEIsTUFBMUIsQ0FBYjtBQUNBLFVBQU07QUFBRUssVUFBSSxFQUFFO0FBQUVDLGFBQUY7QUFBU0M7QUFBVCxPQUFSO0FBQXlCQztBQUF6QixRQUFxQ0Msa0RBQU0sQ0FBQ04sSUFBRCxDQUFqRDtBQUNBLFdBQU87QUFBRUYsUUFBRjtBQUFNSyxXQUFOO0FBQWFDO0FBQWIsS0FBUDtBQUNILEdBTmEsQ0FBZDtBQVFBLFNBQU9WLEtBQVA7QUFDSCxDQVpEOztBQWNBLCtEQUFlUCxRQUFmIiwiZmlsZSI6Ii4vbGliL3Bvc3RzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcywgeyBwcm9taXNlcyBhcyBmc1Byb21pc2UgfSBmcm9tICdmcydcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgbWF0dGVyIGZyb20gJ2dyYXktbWF0dGVyJ1xuY29uc3QgZ2V0UG9zdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgbWFya2Rvd25ESVIgPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ21hcmtkb3duJylcbiAgICBjb25zdCBmaWxlTmFtZXMgPSBhd2FpdCBmc1Byb21pc2UucmVhZGRpcihtYXJrZG93bkRJUilcbiAgICBjb25zdCBwb3N0cyA9IGZpbGVOYW1lcy5tYXAoZmlsZW5hbWUgPT4ge1xuICAgICAgICBjb25zdCBmdWxsUGF0aCA9IHBhdGguam9pbihtYXJrZG93bkRJUiwgZmlsZW5hbWUpXG4gICAgICAgIGNvbnN0IGlkID0gZmlsZW5hbWUucmVwbGFjZSgvXFwubWQkL2csICcnKVxuICAgICAgICBjb25zdCB0ZXh0ID0gZnMucmVhZEZpbGVTeW5jKGZ1bGxQYXRoLCAndXRmOCcpXG4gICAgICAgIGNvbnN0IHsgZGF0YTogeyB0aXRsZSwgZGF0ZSB9LCBjb250ZW50IH0gPSBtYXR0ZXIodGV4dClcbiAgICAgICAgcmV0dXJuIHsgaWQsIHRpdGxlLCBkYXRlIH1cbiAgICB9KVxuICAgIFxuICAgIHJldHVybiBwb3N0c1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRQb3N0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/posts.tsx\n");

/***/ }),

/***/ "./pages/api/v1/posts.tsx":
/*!********************************!*\
  !*** ./pages/api/v1/posts.tsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lib_posts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lib/posts */ \"./lib/posts.tsx\");\n\n\nconst Posts = async (req, res) => {\n  const posts = await (0,lib_posts__WEBPACK_IMPORTED_MODULE_0__.default)();\n  console.log(posts);\n  res.statusCode = 200;\n  res.setHeader('Content-Type', 'application/json');\n  res.write(JSON.stringify(posts));\n  res.end();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Posts);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtYmxvZy0xLy4vcGFnZXMvYXBpL3YxL3Bvc3RzLnRzeD82MjgzIl0sIm5hbWVzIjpbIlBvc3RzIiwicmVxIiwicmVzIiwicG9zdHMiLCJnZXRQb3N0cyIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXNDb2RlIiwic2V0SGVhZGVyIiwid3JpdGUiLCJKU09OIiwic3RyaW5naWZ5IiwiZW5kIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUlBLE1BQU1BLEtBQXFCLEdBQUUsT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQzdDLFFBQU1DLEtBQUssR0FBRSxNQUFNQyxrREFBUSxFQUEzQjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsS0FBWjtBQUNBRCxLQUFHLENBQUNLLFVBQUosR0FBaUIsR0FBakI7QUFDQUwsS0FBRyxDQUFDTSxTQUFKLENBQWMsY0FBZCxFQUE4QixrQkFBOUI7QUFDQU4sS0FBRyxDQUFDTyxLQUFKLENBQVVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlUixLQUFmLENBQVY7QUFDQUQsS0FBRyxDQUFDVSxHQUFKO0FBQ0gsQ0FQRDs7QUFTQSwrREFBZVosS0FBZiIsImZpbGUiOiIuL3BhZ2VzL2FwaS92MS9wb3N0cy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2V0UG9zdHMgZnJvbSBcImxpYi9wb3N0c1wiO1xuaW1wb3J0IHsgTmV4dEFwaUhhbmRsZXIgfSBmcm9tIFwibmV4dFwiO1xuXG5cbmNvbnN0IFBvc3RzOiBOZXh0QXBpSGFuZGxlciA9YXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgcG9zdHM9IGF3YWl0IGdldFBvc3RzKClcbiAgICBjb25zb2xlLmxvZyhwb3N0cylcbiAgICByZXMuc3RhdHVzQ29kZSA9IDIwMFxuICAgIHJlcy5zZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJylcbiAgICByZXMud3JpdGUoSlNPTi5zdHJpbmdpZnkocG9zdHMpKVxuICAgIHJlcy5lbmQoKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/v1/posts.tsx\n");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ (function(module) {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("gray-matter");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("path");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/v1/posts.tsx"));
module.exports = __webpack_exports__;

})();