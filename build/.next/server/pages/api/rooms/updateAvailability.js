"use strict";
(() => {
var exports = {};
exports.id = 4847;
exports.ids = [4847];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 5602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const RoomSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
  roomType: [{
    type: String,
    required: true
  }],
  maxPeople: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: [{
    type: String,
    required: true
  }],
  campId: {
    type: String,
    required: true
  },
  campName: [{
    type: String,
    required: true
  }],
  roomNumbers: [{
    roomNumber: Number,
    unavailableDates: [{
      type: String
    }]
  }]
}, {
  timestamps: true
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Room) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("Room", RoomSchema));

/***/ }),

/***/ 4305:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_mongo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8869);
/* harmony import */ var _models_Room__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5602);
/* harmony import */ var _middlewares_errorsMiddleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9972);
 // import Camp from "../../../models/Camp";


 // Next.js API route support: https://nextjs.org/docs/api-routes/introduction

async function handler(req, res) {
  const {
    method,
    query: {
      id,
      remove
    }
  } = req;
  await (0,_util_mongo__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();

  if (method === "PATCH" && remove === "off") {
    await _models_Room__WEBPACK_IMPORTED_MODULE_1__/* ["default"].updateOne */ .Z.updateOne({
      "roomNumbers._id": id
    }, {
      $push: {
        "roomNumbers.$.unavailableDates": req.body.dates
      }
    });
    res.status(201).json("Room has been updated successfuly");
  }

  if (method === "PATCH" && remove === "on") {
    const updatedRoom = await _models_Room__WEBPACK_IMPORTED_MODULE_1__/* ["default"].updateOne */ .Z.updateOne({
      "roomNumbers._id": id
    }, {
      $pullAll: {
        "roomNumbers.$.unavailableDates": req.body.dates
      }
    });
    res.status(201).json(updatedRoom);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_middlewares_errorsMiddleware__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(handler));

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7264], () => (__webpack_exec__(4305)));
module.exports = __webpack_exports__;

})();