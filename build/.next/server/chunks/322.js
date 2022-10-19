exports.id = 322;
exports.ids = [322];
exports.modules = {

/***/ 322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_ImagesSlider_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9948);
/* harmony import */ var _styles_ImagesSlider_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_ImagesSlider_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_slideshow_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3886);
/* harmony import */ var react_slideshow_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_slideshow_image__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3468);
/* harmony import */ var react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const Arrow = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "ImagesSlider__Arrow",
  componentId: "sc-bxr806-0"
})(["width:3rem;height:3rem;border-radius:50%;display:flex;background-color:#fff;align-items:center;justify-content:center;position:absolute;top:0;bottom:0;margin:auto;right:90%;left:90%;z-index:10;opacity:0.3;cursor:pointer;transition:all 500ms ease;&:hover{opacity:0.5;}@media(max-width:600px){display:none;}"]);

const ImagesSlider = ({
  images
}) => {
  const {
    0: slideImages,
    1: setSlideImages
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    images && setSlideImages(images);
  }, [images]);
  const properties = {
    autoplay: false,
    transitionDuration: 300,
    prevArrow: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(Arrow, {
      direction: "left",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_3__.CaretLeft, {
        color: "#000"
      })
    }),
    nextArrow: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(Arrow, {
      direction: "right",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_3__.CaretRight, {
        color: "#000"
      })
    }),
    scale: 0.4,
    indicators: i => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
      className: (_styles_ImagesSlider_module_css__WEBPACK_IMPORTED_MODULE_5___default().indicator),
      style: {
        backgroundImage: `url(${slideImages[i]})`
      }
    })
  };
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_slideshow_image__WEBPACK_IMPORTED_MODULE_0__.Slide, _objectSpread(_objectSpread({}, properties), {}, {
    children: slideImages.map((each, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
      className: (_styles_ImagesSlider_module_css__WEBPACK_IMPORTED_MODULE_5___default().eachSlide),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        style: {
          backgroundImage: `url(${each})`
        }
      })
    }, index))
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImagesSlider);

/***/ }),

/***/ 9948:
/***/ ((module) => {

// Exports
module.exports = {
	"eachSlide": "ImagesSlider_eachSlide___bIGY",
	"indicator": "ImagesSlider_indicator__edWYr",
	"active": "ImagesSlider_active__GMUda"
};


/***/ })

};
;