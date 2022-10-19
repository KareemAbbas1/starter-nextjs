"use strict";
(() => {
var exports = {};
exports.id = 1845;
exports.ids = [1845];
exports.modules = {

/***/ 4802:
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ 9972:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ createError),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createError = (status, message) => {
  const error = new Error();
  error.code = status;
  error.message = message;
  return error;
};

const errorHandler = handler => {
  return async (req, res) => {
    return handler(req, res).catch(error => {
      const errorStatus = error.code || 500;
      const errorMessage = error.message || "Error Middleware >> Something went wrong";
      console.log("Error Handler Invoked", errorMessage);
      return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: error.stack
      });
    });
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (errorHandler);

/***/ }),

/***/ 6932:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4802);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _middlewares_errorsMiddleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9972);



async function handler(req, res) {
  const {
    method,
    cookies
  } = req;
  const token = cookies.token;

  if (method === "GET") {
    const serialized = cookie__WEBPACK_IMPORTED_MODULE_0___default().serialize("token", null, {
      maxAge: -1,
      sameSite: "strict",
      path: "/",
      httpOnly: true
    });
    res.setHeader("Set-Cookie", serialized);
    res.status(200).json({
      message: "Logged out successfully"
    });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_middlewares_errorsMiddleware__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(handler));

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6932));
module.exports = __webpack_exports__;

})();