(function() {
var exports = {};
exports.id = 679;
exports.ids = [679];
exports.modules = {

/***/ 2582:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ posts; }
});

;// CONCATENATED MODULE: external "fs"
var external_fs_namespaceObject = require("fs");;
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_namespaceObject);
;// CONCATENATED MODULE: external "path"
var external_path_namespaceObject = require("path");;
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_namespaceObject);
;// CONCATENATED MODULE: external "gray-matter"
var external_gray_matter_namespaceObject = require("gray-matter");;
var external_gray_matter_default = /*#__PURE__*/__webpack_require__.n(external_gray_matter_namespaceObject);
;// CONCATENATED MODULE: ./lib/posts.tsx




const getPosts = async () => {
  const markdownDIR = external_path_default().join(process.cwd(), 'markdown');
  const fileNames = await external_fs_namespaceObject.promises.readdir(markdownDIR);
  const posts = fileNames.map(filename => {
    const fullPath = external_path_default().join(markdownDIR, filename);
    const id = filename.replace(/\.md$/g, '');
    const text = external_fs_default().readFileSync(fullPath, 'utf8');
    const {
      data: {
        title,
        date
      },
      content
    } = external_gray_matter_default()(text);
    return {
      id,
      title,
      date
    };
  });
  return posts;
};

/* harmony default export */ var posts = (getPosts);

/***/ }),

/***/ 256:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_posts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2582);




const PostsIndex = props => {
  const {
    posts
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
      children: "\u6587\u7AE0\u5217\u8868"
    }), posts.map(p => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      children: p.id
    }, p.id))]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (PostsIndex);
const getStaticProps = async () => {
  const posts = await (0,_lib_posts__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)();
  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts))
    }
  };
};

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(256));
module.exports = __webpack_exports__;

})();