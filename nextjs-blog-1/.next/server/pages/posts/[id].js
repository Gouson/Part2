(function() {
var exports = {};
exports.id = "pages/posts/[id]";
exports.ids = ["pages/posts/[id]"];
exports.modules = {

/***/ "./lib/posts.tsx":
/*!***********************!*\
  !*** ./lib/posts.tsx ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPost": function() { return /* binding */ getPost; },
/* harmony export */   "getPostIds": function() { return /* binding */ getPostIds; }
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gray-matter */ "gray-matter");
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! marked */ "marked");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_3__);




const markdownDIR = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), 'markdown');

const getPosts = async () => {
  const fileNames = await fs__WEBPACK_IMPORTED_MODULE_0__.promises.readdir(markdownDIR);
  const posts = fileNames.map(filename => {
    const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(markdownDIR, filename);
    const id = filename.replace(/\.md$/g, '');
    const text = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, 'utf8');
    const {
      data: {
        title,
        date
      },
      content
    } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(text);
    return {
      id,
      title,
      date
    };
  });
  return posts;
};

const getPost = async id => {
  const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(markdownDIR, id + '.md');
  const text = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, 'utf8');
  const {
    data: {
      title,
      date
    },
    content
  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(text);
  const htmlContent = marked__WEBPACK_IMPORTED_MODULE_3___default()(content);
  return JSON.parse(JSON.stringify({
    id,
    title,
    date,
    content,
    htmlContent
  }));
};
const getPostIds = async () => {
  const fileNames = await fs__WEBPACK_IMPORTED_MODULE_0__.promises.readdir(markdownDIR);
  return fileNames.map(fileName => fileName.replace(/\.md$/g, ''));
};
/* harmony default export */ __webpack_exports__["default"] = (getPosts);

/***/ }),

/***/ "./pages/posts/[id].tsx":
/*!******************************!*\
  !*** ./pages/posts/[id].tsx ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticPaths": function() { return /* binding */ getStaticPaths; },
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lib_posts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/posts */ "./lib/posts.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\code\\jirengu\\part2\\nextjs-blog-1\\pages\\posts\\[id].tsx";




const postsShow = props => {
  const {
    post
  } = props;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: post.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("article", {
      dangerouslySetInnerHTML: {
        __html: post.htmlContent
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (postsShow);
const getStaticPaths = async () => {
  const idList = await (0,lib_posts__WEBPACK_IMPORTED_MODULE_1__.getPostIds)();
  return {
    paths: idList.map(id => ({
      params: {
        id: id
      }
    })),
    fallback: false
  };
};
const getStaticProps = async staticContext => {
  const post = await (0,lib_posts__WEBPACK_IMPORTED_MODULE_1__.getPost)(staticContext.params.id);
  return {
    props: {
      post: post
    }
  };
};

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

/***/ "marked":
/*!*************************!*\
  !*** external "marked" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("marked");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/posts/[id].tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtYmxvZy0xLy4vbGliL3Bvc3RzLnRzeCIsIndlYnBhY2s6Ly9uZXh0anMtYmxvZy0xLy4vcGFnZXMvcG9zdHMvW2lkXS50c3giLCJ3ZWJwYWNrOi8vbmV4dGpzLWJsb2ctMS9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzLWJsb2ctMS9leHRlcm5hbCBcImdyYXktbWF0dGVyXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzLWJsb2ctMS9leHRlcm5hbCBcIm1hcmtlZFwiIiwid2VicGFjazovL25leHRqcy1ibG9nLTEvZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzLWJsb2ctMS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbmV4dGpzLWJsb2ctMS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIm1hcmtkb3duRElSIiwicGF0aCIsInByb2Nlc3MiLCJjd2QiLCJnZXRQb3N0cyIsImZpbGVOYW1lcyIsImZzUHJvbWlzZSIsInBvc3RzIiwibWFwIiwiZmlsZW5hbWUiLCJmdWxsUGF0aCIsImlkIiwicmVwbGFjZSIsInRleHQiLCJmcyIsImRhdGEiLCJ0aXRsZSIsImRhdGUiLCJjb250ZW50IiwibWF0dGVyIiwiZ2V0UG9zdCIsImh0bWxDb250ZW50IiwibWFya2VkIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiZ2V0UG9zdElkcyIsImZpbGVOYW1lIiwicG9zdHNTaG93IiwicHJvcHMiLCJwb3N0IiwiX19odG1sIiwiZ2V0U3RhdGljUGF0aHMiLCJpZExpc3QiLCJwYXRocyIsInBhcmFtcyIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJzdGF0aWNDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTUEsV0FBVyxHQUFHQyxnREFBQSxDQUFVQyxPQUFPLENBQUND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REFBTyxDQUFDa0IsYUFBYSxDQUFDSCxNQUFkLENBQXFCeEIsRUFBdEIsQ0FBMUI7QUFDQSxTQUFPO0FBQ0hrQixTQUFLLEVBQUU7QUFDSEMsVUFBSSxFQUFFQTtBQURIO0FBREosR0FBUDtBQUtILENBUE0sQzs7Ozs7Ozs7Ozs7QUNoQ1AsZ0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvcG9zdHMvW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcywgeyBwcm9taXNlcyBhcyBmc1Byb21pc2UgfSBmcm9tICdmcydcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgbWF0dGVyIGZyb20gJ2dyYXktbWF0dGVyJ1xuaW1wb3J0IG1hcmtlZCBmcm9tICdtYXJrZWQnXG5jb25zdCBtYXJrZG93bkRJUiA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnbWFya2Rvd24nKVxuY29uc3QgZ2V0UG9zdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgZmlsZU5hbWVzID0gYXdhaXQgZnNQcm9taXNlLnJlYWRkaXIobWFya2Rvd25ESVIpXG4gICAgY29uc3QgcG9zdHMgPSBmaWxlTmFtZXMubWFwKGZpbGVuYW1lID0+IHtcbiAgICAgICAgY29uc3QgZnVsbFBhdGggPSBwYXRoLmpvaW4obWFya2Rvd25ESVIsIGZpbGVuYW1lKVxuICAgICAgICBjb25zdCBpZCA9IGZpbGVuYW1lLnJlcGxhY2UoL1xcLm1kJC9nLCAnJylcbiAgICAgICAgY29uc3QgdGV4dCA9IGZzLnJlYWRGaWxlU3luYyhmdWxsUGF0aCwgJ3V0ZjgnKVxuICAgICAgICBjb25zdCB7IGRhdGE6IHsgdGl0bGUsIGRhdGUgfSwgY29udGVudCB9ID0gbWF0dGVyKHRleHQpXG4gICAgICAgIHJldHVybiB7IGlkLCB0aXRsZSwgZGF0ZSB9XG4gICAgfSlcblxuICAgIHJldHVybiBwb3N0c1xufVxuZXhwb3J0IGNvbnN0IGdldFBvc3QgPSBhc3luYyAoaWQ6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGZ1bGxQYXRoID0gcGF0aC5qb2luKG1hcmtkb3duRElSLCBpZCArICcubWQnKVxuICAgIGNvbnN0IHRleHQgPSBmcy5yZWFkRmlsZVN5bmMoZnVsbFBhdGgsICd1dGY4JylcbiAgICBjb25zdCB7IGRhdGE6IHsgdGl0bGUsIGRhdGUgfSwgY29udGVudCB9ID0gbWF0dGVyKHRleHQpXG4gICAgY29uc3QgaHRtbENvbnRlbnQgPSBtYXJrZWQoY29udGVudClcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh7IGlkLCB0aXRsZSwgZGF0ZSwgY29udGVudCwgaHRtbENvbnRlbnQgfVxuICAgICkpXG59XG5leHBvcnQgY29uc3QgZ2V0UG9zdElkcyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBmaWxlTmFtZXMgPSBhd2FpdCBmc1Byb21pc2UucmVhZGRpcihtYXJrZG93bkRJUilcbiAgICByZXR1cm4gZmlsZU5hbWVzLm1hcChmaWxlTmFtZSA9PiBmaWxlTmFtZS5yZXBsYWNlKC9cXC5tZCQvZywgJycpKVxufVxuZXhwb3J0IGRlZmF1bHQgZ2V0UG9zdHNcbiIsImltcG9ydCB7IGdldFBvc3QgfSBmcm9tICdsaWIvcG9zdHMnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IHsgZ2V0UG9zdElkcyB9IGZyb20gJy4uLy4uL2xpYi9wb3N0cyc7XHJcbnR5cGUgUG9zdCA9IHtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBkYXRlOiBzdHJpbmc7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgY29udGVudDogc3RyaW5nLFxyXG4gICAgaHRtbENvbnRlbnQ6IHN0cmluZ1xyXG59XHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgICBwb3N0OiBQb3N0XHJcbn1cclxuY29uc3QgcG9zdHNTaG93OiBOZXh0UGFnZTxQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHsgcG9zdCB9ID0gcHJvcHNcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgxPntwb3N0LnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgIDxhcnRpY2xlIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdC5odG1sQ29udGVudCB9fT5cclxuICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHBvc3RzU2hvd1xyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBpZExpc3QgPSBhd2FpdCBnZXRQb3N0SWRzKClcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcGF0aHM6IGlkTGlzdC5tYXAoaWQgPT4gKHsgcGFyYW1zOiB7IGlkOiBpZCB9IH0pKSxcclxuICAgICAgICBmYWxsYmFjazogZmFsc2VcclxuICAgIH1cclxufVxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoc3RhdGljQ29udGV4dDogYW55KSA9PiB7XHJcbiAgICBjb25zdCBwb3N0ID0gYXdhaXQgZ2V0UG9zdChzdGF0aWNDb250ZXh0LnBhcmFtcy5pZClcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgcG9zdDogcG9zdFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmF5LW1hdHRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWFya2VkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9