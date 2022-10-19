"use strict";
(() => {
var exports = {};
exports.id = 5257;
exports.ids = [5257];
exports.modules = {

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 2056:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _errorsMiddleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9972);



const authenticate = handler => {
  return async (req, res) => {
    // console.log("Authenticaton Middleware invoked", req.headers)
    const token = req.headers.cookie && req.headers.cookie.split("=")[1]; // console.log("MyToken", token)

    if (!token) throw (0,_errorsMiddleware__WEBPACK_IMPORTED_MODULE_1__/* .createError */ .T)(401, "You are not authenticated");
    jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, "V1dxFZpCmm9yaagRAxAIREPRw1Mqacag0rUIp1v3cTs=", (error, user) => {
      if (error) throw (0,_errorsMiddleware__WEBPACK_IMPORTED_MODULE_1__/* .createError */ .T)(403, "Token is not valid");
      req.user = user;
    });
    return handler(req, res);
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authenticate);

/***/ }),

/***/ 7844:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const authorize = handler => {
  return async (req, res) => {
    try {
      console.log("Authorization Middleware invoked"); // Add middleware proccesing here

      return handler(req, res);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authorize);

/***/ }),

/***/ 5186:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const ExtraFacilitySchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});
const CampSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
  name: [{
    type: String,
    required: true
  }],
  location: [{
    type: String,
    required: true
  }],
  images: [String],
  rate: {
    type: Number,
    min: 0,
    max: 5
  },
  description: {
    type: [String],
    required: true
  },
  facilities: {
    english: {
      type: Array,
      required: true
    },
    arabic: {
      type: Array,
      required: true
    }
  },
  extraFacilities: [ExtraFacilitySchema],
  houseRules: {
    english: {
      type: Array,
      required: true
    },
    arabic: {
      type: Array,
      required: true
    }
  },
  rooms: {
    type: [String]
  },
  orders: {
    type: [String]
  }
}, {
  timestamps: true
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Camp) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("Camp", CampSchema));

/***/ }),

/***/ 1772:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_mongo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8869);
/* harmony import */ var _models_Camp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5186);
/* harmony import */ var _middlewares_errorsMiddleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9972);
/* harmony import */ var _middlewares_authentication__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2056);
/* harmony import */ var _middlewares_authorization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7844);




 // Next.js API route support: https://nextjs.org/docs/api-routes/introduction

async function handler(req, res) {
  const {
    method,
    query: {
      id
    },
    user
  } = req;
  await (0,_util_mongo__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(); // Fetch by ID and Update

  if (method === "PATCH") {
    const updatedCamp = await _models_Camp__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findByIdAndUpdate */ .Z.findByIdAndUpdate(id, {
      $set: req.body
    }, {
      new: true
    });
    res.status(201).json(updatedCamp);
  } // Delete camp


  if (method === "DELETE") {
    if (user.role !== "admin1" && user.role !== "admin2") throw (0,_middlewares_errorsMiddleware__WEBPACK_IMPORTED_MODULE_3__/* .createError */ .T)(403, "You are not authorized");
    await _models_Camp__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findByIdAndDelete */ .Z.findByIdAndDelete(id);
    res.status(200).json("Camp has been deleted");
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_middlewares_errorsMiddleware__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)((0,_middlewares_authentication__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)((0,_middlewares_authorization__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(handler))));

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7264], () => (__webpack_exec__(1772)));
module.exports = __webpack_exports__;

})();