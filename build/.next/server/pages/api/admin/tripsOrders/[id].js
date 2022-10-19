"use strict";
(() => {
var exports = {};
exports.id = 422;
exports.ids = [422];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 4367:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_mongo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8869);
/* harmony import */ var _models_Trip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5200);
/* harmony import */ var _models_TripOrder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8670);
/* harmony import */ var _middlewares_errorsMiddleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9972);





async function handler(req, res) {
  const {
    method,
    query: {
      id
    }
  } = req;
  await (0,_util_mongo__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(); // Fetch Single Trip orders

  if (method === "GET") {
    const trip = await _models_Trip__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findById */ .Z.findById(id);
    const ordersList = await Promise.all(trip.orders.map(orderId => {
      return _models_TripOrder__WEBPACK_IMPORTED_MODULE_2__/* ["default"].findById */ .Z.findById(orderId);
    }));
    res.status(200).json(ordersList);
  }
}

;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_middlewares_errorsMiddleware__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(handler));

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7264,5200,8670], () => (__webpack_exec__(4367)));
module.exports = __webpack_exports__;

})();