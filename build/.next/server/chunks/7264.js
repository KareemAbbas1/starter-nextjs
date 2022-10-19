"use strict";
exports.id = 7264;
exports.ids = [7264];
exports.modules = {

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

/***/ 8869:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
 // import dotenv from 'dotenv';
// Set up dotenv to be able to access the local enviornment variables 
// dotenv.config();
// const MONGODB_URI = process.env.NEXT_PUBLIC_MONGODB_URI

if (false) {}
/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */


let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = {
    conn: null,
    promise: null
  };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false
    };
    cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect("mongodb+srv://break-trips:breaktrips123@break-trips.jpszzpj.mongodb.net/break-trips?retryWrites=true&w=majority", opts).then(mongoose => {
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);

/***/ })

};
;