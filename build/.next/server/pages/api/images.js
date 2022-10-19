"use strict";
(() => {
var exports = {};
exports.id = 5899;
exports.ids = [5899];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 6722:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const ImageSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
  url: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Image) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("Image", ImageSchema));

/***/ }),

/***/ 7154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_mongo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8869);
/* harmony import */ var _models_Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6722);
/* harmony import */ var _middlewares_errorsMiddleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9972);




async function handler(req, res) {
  const {
    method
  } = req; // Get all images

  if (method === "GET") {
    await _models_Image__WEBPACK_IMPORTED_MODULE_1__/* ["default"].find */ .Z.find().then(images => res.status(200).json(images));
  }
}

;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_middlewares_errorsMiddleware__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(handler));

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7264], () => (__webpack_exec__(7154)));
module.exports = __webpack_exports__;

})();