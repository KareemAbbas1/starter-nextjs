"use strict";
exports.id = 8670;
exports.ids = [8670];
exports.modules = {

/***/ 8670:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const TripOrderSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
  orderDetails: {
    title: [{
      type: String,
      required: true
    }],
    startDate: {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      required: true
    },
    ticketPrice: {
      type: Number,
      required: true
    },
    tickets: {
      adults: {
        type: Number,
        required: true
      },
      children: {
        type: Number
      }
    },
    extraOptions: [{
      text: [String],
      price: Number
    }],
    total: {
      type: Number,
      required: true
    }
  },
  clientInfo: {
    fullName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    }
  },
  state: {
    type: String,
    required: true
  },
  new: {
    type: Boolean,
    default: true
  },
  tripId: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.TripOrder) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("TripOrder", TripOrderSchema));

/***/ })

};
;