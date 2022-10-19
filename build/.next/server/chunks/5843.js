"use strict";
exports.id = 5843;
exports.ids = [5843];
exports.modules = {

/***/ 3551:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const CampOrderSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
  orderDetails: {
    camp: [{
      type: String,
      required: true
    }],
    checkout: {
      type: String,
      required: true
    },
    dates: [{
      type: String,
      required: true
    }],
    guestsCount: {
      adults: {
        type: String,
        required: true
      },
      children: String
    },
    rooms: {
      doubleRooms: String,
      bungalows: String,
      huts: String
    },
    roomsNumbers: [{
      type: String,
      required: true
    }],
    roomsPrices: {
      roomPrice: {
        type: String,
        required: true
      },
      bungalowPrice: {
        type: String,
        required: true
      },
      hutPrice: {
        type: String,
        required: true
      }
    },
    dinnerData: {
      dinner: {
        type: String,
        required: true
      },
      dinnerPrice: Number
    },
    total: {
      type: String,
      required: true
    }
  },
  guestInfo: {
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
  campId: {
    type: String,
    required: true
  },
  roomsIds: [{
    type: String,
    required: true
  }],
  new: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.CampOrder) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("CampOrder", CampOrderSchema));

/***/ })

};
;