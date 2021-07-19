(function() {
var exports = {};
exports.id = 455;
exports.ids = [455];
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

/***/ 1094:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lib_posts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2582);


const Posts = async (req, res) => {
  const posts = await (0,lib_posts__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)();
  console.log(posts);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(posts));
  res.end();
};

/* harmony default export */ __webpack_exports__["default"] = (Posts);

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(1094));
module.exports = __webpack_exports__;

})();