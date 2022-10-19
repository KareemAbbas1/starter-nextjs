"use strict";
(() => {
var exports = {};
exports.id = 5232;
exports.ids = [5232];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 8564:
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
      id,
      tripId
    }
  } = req;
  await (0,_util_mongo__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(); // Fetch single trip order by id

  if (method === "GET") {
    const tripOrder = await _models_TripOrder__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findById */ .Z.findById(id);
    res.status(200).json(tripOrder);
  }

  ; // Update trip order

  if (method === "PATCH") {
    const updatedTripOrder = await _models_TripOrder__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findByIdAndUpdate */ .Z.findByIdAndUpdate(id, {
      $set: req.body
    }, {
      new: true
    });
    res.status(201).json(updatedTripOrder);
  } // Delete order 


  if (method === "DELETE") {
    const order = await _models_TripOrder__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findById */ .Z.findById(id);
    const ticketsCount = order.orderDetails.tickets.adults + order.orderDetails.tickets.children;
    console.log(ticketsCount);
    await _models_Trip__WEBPACK_IMPORTED_MODULE_2__/* ["default"].findByIdAndUpdate */ .Z.findByIdAndUpdate(tripId, {
      $pull: {
        orders: id
      },
      $inc: {
        tickets: -ticketsCount
      }
    });
    await _models_TripOrder__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findByIdAndDelete */ .Z.findByIdAndDelete(id);
    res.status(200).json("Order has been deleted");
  }
}

;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_middlewares_errorsMiddleware__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(handler));

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7264,5200,8670], () => (__webpack_exec__(8564)));
module.exports = __webpack_exports__;

})();