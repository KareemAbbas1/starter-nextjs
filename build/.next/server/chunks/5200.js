"use strict";
exports.id = 5200;
exports.ids = [5200];
exports.modules = {

/***/ 5200:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const TripsSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
  title: [{
    type: String,
    required: true
  }],
  state: [{
    type: String,
    required: true
  }],
  destination: [{
    type: String,
    required: true
  }],
  images: {
    type: [String],
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  startDate: {
    type: String,
    required: true
  },
  endDate: {
    type: String,
    required: true
  },
  maxPeople: {
    type: Number,
    required: true
  },
  overview: {
    type: [String],
    required: true
  },
  tripPlan: {
    type: [{
      type: [String],
      required: true
    }],
    required: true
  },
  rate: {
    type: Number
  },
  extraOptions: {
    type: [{
      text: {
        type: [String]
      },
      price: {
        type: Number
      }
    }]
  },
  orders: {
    type: [String]
  },
  tickets: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Trip) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("Trip", TripsSchema));

/***/ })

};
;