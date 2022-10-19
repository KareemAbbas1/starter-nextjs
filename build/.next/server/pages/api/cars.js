"use strict";
(() => {
var exports = {};
exports.id = 7979;
exports.ids = [7979];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 4955:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const CarSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
  image: {
    type: String,
    required: true
  },
  name: [{
    type: String,
    required: true
  }],
  price: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Car) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("Car", CarSchema));

/***/ }),

/***/ 5689:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_mongo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8869);
/* harmony import */ var _models_Car__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4955);
/* harmony import */ var _middlewares_errorsMiddleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9972);




async function handler(req, res) {
  const {
    method
  } = req;
  await (0,_util_mongo__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(); // Get all cars 

  if (method === "GET") {
    await _models_Car__WEBPACK_IMPORTED_MODULE_1__/* ["default"].find */ .Z.find().then(cars => res.status(200).json(cars));
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
var __webpack_exports__ = __webpack_require__.X(0, [7264], () => (__webpack_exec__(5689)));
module.exports = __webpack_exports__;

})();