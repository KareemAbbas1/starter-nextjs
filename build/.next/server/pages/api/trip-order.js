"use strict";
(() => {
var exports = {};
exports.id = 5364;
exports.ids = [5364];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 2730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_mongo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8869);
/* harmony import */ var _models_TripOrder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8670);
/* harmony import */ var _models_Trip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5200);
/* harmony import */ var _middlewares_errorsMiddleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9972);





async function handler(req, res) {
  const {
    method,
    query: {
      tripId
    }
  } = req;
  await (0,_util_mongo__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(); // Create new trip order

  const newOrder = new _models_TripOrder__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z(req.body);

  if (method === "POST") {
    const savedOrder = await newOrder.save();
    await _models_Trip__WEBPACK_IMPORTED_MODULE_2__/* ["default"].findByIdAndUpdate */ .Z.findByIdAndUpdate(tripId, {
      $push: {
        orders: savedOrder._id
      },
      $inc: {
        tickets: savedOrder.orderDetails.tickets.adults + savedOrder.orderDetails.tickets.children
      }
    });
    res.status(201).json(newOrder);
  }
}

;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_middlewares_errorsMiddleware__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(handler));

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7264,5200,8670], () => (__webpack_exec__(2730)));
module.exports = __webpack_exports__;

})();