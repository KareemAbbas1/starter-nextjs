"use strict";
(() => {
var exports = {};
exports.id = 9492;
exports.ids = [9492];
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

/***/ 7036:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_mongo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8869);
/* harmony import */ var _models_Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6722);
/* harmony import */ var _middlewares_errorsMiddleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9972);
/* harmony import */ var _middlewares_authentication__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2056);





async function handler(req, res) {
  const {
    method,
    user
  } = req;
  await (0,_util_mongo__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(); // Find all images

  if (method === "GET") {
    if (user.role !== "admin1" && user.role !== "admin2") throw (0,_middlewares_errorsMiddleware__WEBPACK_IMPORTED_MODULE_3__/* .createError */ .T)(403, "You are not authorized");
    await _models_Image__WEBPACK_IMPORTED_MODULE_1__/* ["default"].find */ .Z.find().then(images => res.status(200).json(images));
  } // Add new images


  if (method === "POST") {
    if (user.role !== "admin1" && user.role !== "admin2") throw (0,_middlewares_errorsMiddleware__WEBPACK_IMPORTED_MODULE_3__/* .createError */ .T)(403, "You are not authorized");
    await _models_Image__WEBPACK_IMPORTED_MODULE_1__/* ["default"].insertMany */ .Z.insertMany(req.body).then(images => res.status(201).json(images));
  }
}

;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_middlewares_errorsMiddleware__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)((0,_middlewares_authentication__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(handler)));

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7264], () => (__webpack_exec__(7036)));
module.exports = __webpack_exports__;

})();