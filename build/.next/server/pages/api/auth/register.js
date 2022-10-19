"use strict";
(() => {
var exports = {};
exports.id = 7007;
exports.ids = [7007];
exports.modules = {

/***/ 8432:
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

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

/***/ 199:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const UserSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.User) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("User", UserSchema));

/***/ }),

/***/ 5658:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_mongo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8869);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(199);
/* harmony import */ var _middlewares_authentication__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2056);
/* harmony import */ var _middlewares_authorization__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7844);
/* harmony import */ var _middlewares_errorsMiddleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9972);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8432);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_3__);





 // Next.js API route support: https://nextjs.org/docs/api-routes/introduction

async function handler(req, res) {
  const {
    method,
    user
  } = req;
  await (0,_util_mongo__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(); // Create new user

  if (method === "POST") {
    if (user.role !== "admin1") throw (0,_middlewares_errorsMiddleware__WEBPACK_IMPORTED_MODULE_4__/* .createError */ .T)(403, "You are not authorized");
    const salt = bcryptjs__WEBPACK_IMPORTED_MODULE_3___default().genSaltSync(10);
    const hash = bcryptjs__WEBPACK_IMPORTED_MODULE_3___default().hashSync(req.body.password, salt); // Check if the email or the username already exitst in the datebase

    const existingEmail = await _models_User__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findOne */ .Z.findOne({
      email: req.body.email
    });
    if (existingEmail && existingEmail.email !== null) throw (0,_middlewares_errorsMiddleware__WEBPACK_IMPORTED_MODULE_4__/* .createError */ .T)(400, "This email already exist");
    const existingUsername = await _models_User__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findOne */ .Z.findOne({
      username: req.body.username
    });
    if (existingUsername && existingUsername.username !== null) throw (0,_middlewares_errorsMiddleware__WEBPACK_IMPORTED_MODULE_4__/* .createError */ .T)(400, "This username already exist"); // Success senario(return new user)

    const newUser = new _models_User__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z({
      username: req.body.username,
      email: req.body.email,
      password: hash,
      role: req.body.role
    });
    await newUser.save().then(newUser => res.status(201).json(newUser));
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_middlewares_errorsMiddleware__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)((0,_middlewares_authentication__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)((0,_middlewares_authorization__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(handler))));

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7264], () => (__webpack_exec__(5658)));
module.exports = __webpack_exports__;

})();