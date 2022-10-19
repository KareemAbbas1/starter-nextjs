"use strict";
(() => {
var exports = {};
exports.id = 4108;
exports.ids = [4108];
exports.modules = {

/***/ 5184:
/***/ ((module) => {

module.exports = require("nodemailer");

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

/***/ 2838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _middlewares_errorsMiddleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9972);
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);

 // import dotenv from "dotenv";
// dotenv.config();

async function handler(req, res) {
  const {
    method
  } = req;
  const transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default().createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.user,
      pass: process.env.pass
    }
  });

  if (method === "POST") {
    try {
      const emailResponse = await transporter.sendMail({
        from: `mail sent to <${req.body.email}>`,
        to: process.env.user,
        subject: `${req.body.language === "English" ? "Message from" : "رسالة من"} ${req.body.name}`,
        html: `
                <div dir=${req.body.language === "English" ? "ltr" : "rtl"}
                >
                    <p dir=${req.body.language === "English" ? "ltr" : "rtl"}
                    >
                        ${req.body.message}
                    </p>
                    <address>
                    ${req.body.language === "English" ? `To reply to this message click on this link ➡` : `  لللرد على هذه الرسالة اضغط على هذا الرابط  ⬅`}  <a href="mailto:${req.body.email}">
                    ${req.body.email}
                    </a>
                    </address>
                </div>
                `
      });
      res.status(200).json(res.body);
    } catch (error) {
      console.log(error);
      res.status(400).json(res.body);
    }
  }
}

;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_middlewares_errorsMiddleware__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(handler));

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2838));
module.exports = __webpack_exports__;

})();