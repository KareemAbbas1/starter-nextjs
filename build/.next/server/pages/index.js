"use strict";
(() => {
var exports = {};
exports.id = 5405;
exports.ids = [5405];
exports.modules = {

/***/ 1795:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Card)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "react-bootstrap-icons"
var external_react_bootstrap_icons_ = __webpack_require__(3468);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Rating.js



const Span = external_styled_components_default().span.withConfig({
  displayName: "Rating__Span",
  componentId: "sc-1dlnl7d-0"
})(["color:#ffc000 !important;"]);

const Rating = ({
  rate
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "rating",
    children: [/*#__PURE__*/jsx_runtime_.jsx(Span, {
      children: /*#__PURE__*/jsx_runtime_.jsx("i", {
        className: rate >= 1 ? 'fas fa-star' : rate >= 0.5 ? 'fas fa-star-half-alt' : 'far fa-star'
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(Span, {
      children: /*#__PURE__*/jsx_runtime_.jsx("i", {
        className: rate >= 2 ? 'fas fa-star' : rate >= 1.5 ? 'fas fa-star-half-alt' : 'far fa-star'
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(Span, {
      children: /*#__PURE__*/jsx_runtime_.jsx("i", {
        className: rate >= 3 ? 'fas fa-star' : rate >= 2.5 ? 'fas fa-star-half-alt' : 'far fa-star'
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(Span, {
      children: /*#__PURE__*/jsx_runtime_.jsx("i", {
        className: rate >= 4 ? 'fas fa-star' : rate >= 3.5 ? 'fas fa-star-half-alt' : 'far fa-star'
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(Span, {
      children: /*#__PURE__*/jsx_runtime_.jsx("i", {
        className: rate >= 5 ? 'fas fa-star' : rate >= 4.5 ? 'fas fa-star-half-alt' : 'far fa-star'
      })
    })]
  });
};

/* harmony default export */ const components_Rating = (Rating);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Card.js






const Container = external_styled_components_default().div.withConfig({
  displayName: "Card__Container",
  componentId: "sc-vt4flu-0"
})(["height:395px;min-width:calc(25% - 0.75rem);overflow:hidden;background-image:", ";background-size:cover;background-position:center;background-repeat:no-repeat;border-radius:5px;user-select:none;@media(max-width:990px){min-width:calc(33% - 0.2rem);height:350px;}@media(max-width:600px){min-width:100%;height:395px;}"], props => `url(${props.bg})`);
const Overlay = external_styled_components_default().div.withConfig({
  displayName: "Card__Overlay",
  componentId: "sc-vt4flu-1"
})(["width:100%;height:100%;background-color:rgba(0,0,0,0.4);display:flex;justify-content:center;align-items:center;color:#fff;"]);
const InfoContainer = external_styled_components_default().div.withConfig({
  displayName: "Card__InfoContainer",
  componentId: "sc-vt4flu-2"
})(["width:80%;height:90%;position:relative;padding:1rem;display:flex;flex-flow:column;justify-content:space-between;div.first-row{width:100%;height:50%;display:flex;justify-content:space-between;flex-direction:", ";}div.second-row{height:50%;display:flex;flex-direction:column;justify-content:space-between;div.second-row1{width:100%;display:flex;flex-direction:", ";justify-content:space-between;}span{font-size:0.8rem;color:#ccc;text-align:", ";}h2{width:100%;word-break:normal;font-size:1.6rem;margin-top:-0.2rem;text-align:", ";cursor:pointer;&:hover{color:#F26630;}@media(max-width:990px){font-size:1.2rem;}}div.second-row2{width:100%;display:flex;justify-content:center;a{width:100%;}button{width:100%;font-size:1rem;padding:0.8rem 0rem;background-color:transparent;color:#fff;border:1px solid #fff;cursor:pointer;transition:background-color 400ms ease;&:hover{background-color:#F26630;border-color:#F26630;}@media(max-width:990px){font-size:0.8rem;}}}}"], ({
  language
}) => language === "English" ? "row" : "row-reverse", ({
  language
}) => language === "العربية" ? "row-reverse" : "", ({
  language
}) => language === "English" ? "left" : "right", ({
  language
}) => language === "English" ? "left" : "right");
const Badge = external_styled_components_default().div.withConfig({
  displayName: "Card__Badge",
  componentId: "sc-vt4flu-3"
})(["width:fit-content;height:1.4rem;padding-inline:0.5rem;font-size:0.9rem;display:flex;justify-content:center;align-items:center;background-color:#F26630;border-radius:5px;"]);

const Card = ({
  trip,
  camp,
  language
}) => {
  // Trips Data
  const tripImage = trip && trip.images[0];
  const state = trip && trip.state[0];
  const arabicState = trip && trip.state[1];
  const destination = trip && trip.destination[0];
  const arabicDestination = trip && trip.destination[1];
  const title = trip && trip.title[0];
  const arabicTitle = trip && trip.title[1];
  const tripRate = trip && trip.rate; // Camp Data

  const campImage = camp && camp.images[0];
  const engLocation = camp && camp.location[0];
  const araLocation = camp && camp.location[1];
  const campEngName = camp && camp.name[0];
  const campAraName = camp && camp.name[1];
  const campRate = camp && camp.rate; // const englishAvailability = camp && camp.availability[0];
  // const arabicAvailability = camp && camp.availability[1];

  return /*#__PURE__*/jsx_runtime_.jsx(Container, {
    bg: trip ? tripImage : campImage,
    language: language,
    children: /*#__PURE__*/jsx_runtime_.jsx(Overlay, {
      language: language,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(InfoContainer, {
        language: language,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "first-row",
          children: [/*#__PURE__*/jsx_runtime_.jsx(Badge, {
            children: language === "English" && trip ? state : language === "العربية" && trip ? arabicState : null
          }), trip && /*#__PURE__*/(0,jsx_runtime_.jsxs)("strong", {
            children: ["$", trip && trip.price]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "second-row",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            children: language === "English" && trip ? destination : language === "العربية" && trip ? arabicDestination : language === "English" && camp ? engLocation : language === "العربية" && camp ? araLocation : null
          }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
            href: "/#",
            children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
              children: language === "English" && trip ? title : language === "العربية" && trip ? arabicTitle : language === "English" && camp ? campEngName : language === "العربية" && camp ? campAraName : null
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "second-row1",
            children: [trip && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              style: {
                display: 'flex',
                flexDirection: `${language === "English" ? "row" : "row-reverse"}`
              },
              children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_icons_.Clock, {
                style: {
                  marginInline: `${language === "English" ? "0rem 0.4rem" : "0.4rem 0rem"}`
                }
              }), language === "English" ? `${trip && trip.duration} days` : `ايام ${trip && trip.duration}`]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              style: {
                display: 'flex',
                alignItems: 'center'
              },
              children: [/*#__PURE__*/jsx_runtime_.jsx(components_Rating, {
                rate: trip ? tripRate : campRate
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                style: {
                  marginLeft: '0.3rem'
                },
                children: [trip ? tripRate : campRate, "/5"]
              })]
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "second-row2",
            children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
              href: trip ? `/trip/${trip._id}` : `/camp/${camp._id}`,
              children: /*#__PURE__*/jsx_runtime_.jsx("button", {
                children: language === "English" ? "More Information & Booking" : "مزيد من المعلومات والحجز"
              })
            })
          })]
        })]
      })
    })
  });
};

/* harmony default export */ const components_Card = (Card);

/***/ }),

/***/ 3231:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ home_AboutUs)
});

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./public/Map.png
/* harmony default export */ const Map = ({"src":"/_next/static/media/Map.27228e2c.png","height":714,"width":1082,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAABlBMVEWcnq1MaXH0SdK+AAAAAnRSTlMEABL/CDwAAAAJcEhZcwAAA+gAAAPoAbV7UmsAAAAZSURBVHicY2AEAQYGRgYoA8REYoMZUElGAAKlAB7ZWwXyAAAAAElFTkSuQmCC"});
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/home/AboutUs.js





const Container = external_styled_components_default().div.withConfig({
  displayName: "AboutUs__Container",
  componentId: "sc-1nsrx97-0"
})(["max-width:100vw;height:100vh;padding-block:5rem;padding-inline-start:", ";padding-inline-end:", ";background-color:#16171F;background-image:", ";background-repeat:no-repeat;background-size:cover;background-position:top;display:flex;flex-direction:", ";justify-content:space-between;align-items:center;@media(max-width:990px){height:50vh;padding-block:2rem;}@media(max-width:600px){height:100vh;padding-block:1.5rem;padding-inline-start:2.3rem;padding-inline-end:0;}div.text{width:45%;height:90%;color:#fff;display:flex;flex-direction:column;align-items:", ";text-align:", ";@media(max-width:990px){width:100%;padding-inline-end:", ";padding-inline-start:", ";}@media(max-width:600px){width:100%;height:100%;padding-inline-end:3rem;padding-inline-start:unset;}h1{width:9rem;}p{font-size:1.15rem;line-height:1.6rem;position:relative;span.h-line{width:11rem;height:15rem;position:absolute;top:-1rem;left:", ";right:", ";border-top:2px solid #F26630;border-left:", ";border-right:", ";}}@media(max-width:600px){h1{width:fit-content;font-size:1.2rem;}p{font-size:0.7rem;margin-top:1rem;}}}div.image{width:42%;height:90%;position:relative;@media(max-width:990px){display:none;}img{width:100%;height:100%;position:absolute;display:block;z-index:10;}div{width:70%;height:100%;position:absolute;bottom:-0.5%;right:", ";left:", ";background-color:#F26630;}}@media(min-width:1400px){padding-inline-start:", ";padding-inline-end:", ";div.text{width:40%;}div.image{width:50%;}}"], ({
  language
}) => language === "English" && "4rem", ({
  language
}) => language === "العربية" && "4rem", `url(${Map})`, ({
  language
}) => language === "English" ? "row" : "row-reverse", ({
  language
}) => language === "English" ? "flex-start" : "flex-end", ({
  language
}) => language === "العربية" && "right", ({
  language
}) => language === "English" && '3rem', ({
  language
}) => language === "العربية" && '3rem', ({
  language
}) => language === "English" && "-1.5rem", ({
  language
}) => language === "العربية" && "-1.5rem", ({
  language
}) => language === "English" && "2px solid #F26630", ({
  language
}) => language === "العربية" && "2px solid #F26630", ({
  language
}) => language === "English" && "0%", ({
  language
}) => language === "العربية" && "0%", ({
  language
}) => language === "English" && "15rem", ({
  language
}) => language === "العربية" && "15rem");

const AboutUs = ({
  language
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container, {
    id: "aboutus-section",
    language: language,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "text",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
        children: language === "English" ? "About Us" : "عن الشركة"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "h-line"
        }), language === "English" ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus cras adipiscing enim eu turpis egestas pretium aenean. Vitae elementum curabitur vitae nunc sed velit. Mattis enim ut tellus elementum. Interdum varius sit amet mattis vulputate enim nulla aliquet. Adipiscing tristique risus nec feugiat. Dolor magna eget est lorem ipsum dolor sit. Sit amet nisl purus in mollis nunc sed id. At risus viverra adipiscing at in tellus integer feugiat. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus cras adipiscing enim eu turpis egestas pretium aenean. Vitae elementum curabitur vitae nunc sed velit. Mattis enim ut tellus elementum. Interdum varius sit amet mattis vulputate enim nulla aliquet. Adipiscing tristique risus nec feugiat. Dolor magna eget est lorem ipsum dolor sit. Sit amet nisl purus in mollis nunc sed id. At risus viverra adipiscing at in tellus integer feugiat. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit." : "كن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤلاء الأشخاص الذين لا يدركون بأن السعادة لا بد أن نستشعرها بصورة أكثر عقلانية ومنطقية فيعرضهم هذا لمواجهة الظروف الأليمة، وأكرر بأنه لا يوجد من يرغب في الحب ونيل المنال ويتلذذ بالآلام، الألم هو الألم ولكن نتيجة لظروف ما قد تكمن السعاده فيما نتحمله من كد وأسي. و سأعرض مثال حي لهذا، من منا لم يتحمل جهد بدني شاق إلا من أجل الحصول على ميزة أو فائدة؟ ولكن من لديه الحق أن ينتقد شخص ما أراد أن يشعر بالسعادة التي لا تشوبها عواقب أليمة أو آخر أراد أن يتجنب الألم الذي ربما تنجم عنه بعض المتعة علي الجانب الآخر نشجب ونستنكر هؤلاء الرجال المفتونون بنشوة اللحظة الهائمون في رغباتهم فلا يدركون ما يعقبها من الألم والأسي المحتم، واللوم كذلك يشمل هؤلاء الذين أخفقوا في واجباتهم نتيجة لضعف إرادتهم فيتساوي مع هؤلاء الذين يتجنبون وينأون عن تحمل الكدح والألم ."]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "image",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
        layout: "fill",
        src: "https://i.postimg.cc/15CSr0nc/image-3.jpg",
        alt: ""
      })]
    })]
  });
};

/* harmony default export */ const home_AboutUs = (AboutUs);

/***/ }),

/***/ 3932:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ home_Badges)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/backpack.png
/* harmony default export */ const backpack = ({"src":"/_next/static/media/backpack.354e8c8c.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAG1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACUUeIgAAAACXRSTlNgKhGNTECCBDyLk2//AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMklEQVR4nBXIwQ0AIAwDsUuTFPafGPGzzJRdOlSesYpwa8ThDwdFM4og3Ev4SD7E2oseGLcApwUfdvUAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./public/calendar.png
/* harmony default export */ const calendar = ({"src":"/_next/static/media/calendar.458a14c8.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAG1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACUUeIgAAAACXRSTlNiWGxHCxk1fCbwn3vNAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMElEQVR4nBWIwQ0AMAiE4NS6/8aNhAeBQeU1cqY5vChEqqkY904M+HCTdYqemal6Hw/0AJPUMmosAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./public/customer.png
/* harmony default export */ const customer = ({"src":"/_next/static/media/customer.232a4f76.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAGFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABWNxwqAAAACHRSTlMDPUcxGFIjZQckXSoAAAAJcEhZcwAAA+gAAAPoAbV7UmsAAAAzSURBVHicHcq3EcBADASxPUOy/45/pAwBIGklsCNRMwEWMUttHVrU2y91fWNAc/lBlPAAFf4AoSab288AAAAASUVORK5CYII="});
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/home/Badges.js







const BadgesSection = external_styled_components_default().div.withConfig({
  displayName: "Badges__BadgesSection",
  componentId: "sc-1oo6shu-0"
})(["max-width:100vw;height:60vh;display:flex;justify-content:space-between;align-items:center;@media(max-width:990px){height:25vh;}@media(max-width:600px){flex-flow:column nowrap;height:fit-content;}div.badge{width:30%;display:flex;flex-direction:column;align-items:center;text-align:center;@media(max-width:600px){width:100%;margin-block:1rem;}div.badge-icon{width:4rem;height:auto;transition:all 300ms ease;}div.badge-text{width:75%;h3{margin-bottom:0.3rem;}p{font-size:0.9rem;color:#797979;}@media(max-width:990px){h3{font-size:1rem;}p{font-size:0.8rem;}}}&:hover{div.badge-icon{transform:scale(1.1);}}}div.v-line{height:180px;width:1px;border-right:1px dashed #ccc;@media(max-width:600px){display:none;}}@media(max-width:1632px){}@media(min-width:1400px){height:40vh;padding-inline:15rem;}"]);

const Badges = ({
  language
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(BadgesSection, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "badge",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "badge-icon",
        children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
          src: backpack,
          alt: "badge"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "badge-text",
        children: [language === "English" ? /*#__PURE__*/jsx_runtime_.jsx("h3", {
          children: "Memorable Experiences"
        }) : /*#__PURE__*/jsx_runtime_.jsx("h3", {
          children: "\u062A\u062C\u0631\u0628\u0629 \u0644\u0627 \u062A\u0646\u0633\u0649"
        }), language === "English" ? /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: "Browse and book tours and activities so incredible."
        }) : /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: "\u062A\u0635\u0641\u062D \u0648\u062D\u062C\u0632 \u0627\u0644\u062C\u0648\u0644\u0627\u062A \u0648\u0627\u0644\u0623\u0646\u0634\u0637\u0629 \u0627\u0644\u062A\u064A \u0644\u0627 \u062A\u0635\u062F\u0642 \u0628\u0627\u0641\u0635\u0644 \u0627\u0644\u0627\u0633\u0639\u0627\u0631 \u0648\u0627\u0641\u0636\u0644 \u062E\u062F\u0645\u0629"
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "v-line"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "badge",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "badge-icon",
        children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
          src: calendar,
          alt: "badge"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "badge-text",
        children: [language === "English" ? /*#__PURE__*/jsx_runtime_.jsx("h3", {
          children: "Secure Booking"
        }) : /*#__PURE__*/jsx_runtime_.jsx("h3", {
          children: "\u062D\u062C\u0632 \u0622\u0645\u0646"
        }), language === "English" ? /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: "Browse and book tours and activities so incredible."
        }) : /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: "\u062A\u0635\u0641\u062D \u0648\u062D\u062C\u0632 \u0627\u0644\u062C\u0648\u0644\u0627\u062A \u0648\u0627\u0644\u0623\u0646\u0634\u0637\u0629 \u0627\u0644\u062A\u064A \u0644\u0627 \u062A\u0635\u062F\u0642 \u0628\u0627\u0641\u0635\u0644 \u0627\u0644\u0627\u0633\u0639\u0627\u0631 \u0648\u0627\u0641\u0636\u0644 \u062E\u062F\u0645\u0629"
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "v-line"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "badge",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "badge-icon",
        children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
          src: customer,
          alt: "badge"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "badge-text",
        children: [language === "English" ? /*#__PURE__*/jsx_runtime_.jsx("h3", {
          children: "Customer Satisfaction"
        }) : /*#__PURE__*/jsx_runtime_.jsx("h3", {
          children: "\u0631\u0636\u0627\u0621 \u0627\u0644\u0639\u0645\u0644\u0627\u0621"
        }), language === "English" ? /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: "Browse and book tours and activities so incredible."
        }) : /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: "\u062A\u0635\u0641\u062D \u0648\u062D\u062C\u0632 \u0627\u0644\u062C\u0648\u0644\u0627\u062A \u0648\u0627\u0644\u0623\u0646\u0634\u0637\u0629 \u0627\u0644\u062A\u064A \u0644\u0627 \u062A\u0635\u062F\u0642 \u0628\u0627\u0641\u0635\u0644 \u0627\u0644\u0627\u0633\u0639\u0627\u0631 \u0648\u0627\u0641\u0636\u0644 \u062E\u062F\u0645\u0629"
        })]
      })]
    })]
  });
};

/* harmony default export */ const home_Badges = (Badges);

/***/ }),

/***/ 2097:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ home_Camps)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-bootstrap-icons"
var external_react_bootstrap_icons_ = __webpack_require__(3468);
// EXTERNAL MODULE: ./components/Card.js + 1 modules
var Card = __webpack_require__(1795);
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(6517);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/CampCard.js








const Container = external_styled_components_default().div.withConfig({
  displayName: "CampCard__Container",
  componentId: "sc-1ou51w4-0"
})(["min-width:95vw;max-height:97vh;display:flex;flex-direction:column;align-items:center;h1{text-align:center;}div.line{width:10%;height:2px;background-color:#F26630;margin-bottom:3rem;}@media(min-width:1400px){min-width:100%;max-height:89vh;}@media(max-width:990px){min-width:100%;max-height:100vh;}"]);
const CampCard_Card = external_styled_components_default().div.withConfig({
  displayName: "CampCard__Card",
  componentId: "sc-1ou51w4-1"
})(["width:100%;min-height:100%;display:flex;flex-flow:", ";justify-content:space-between;gap:2rem;position:relative;div.camp-image{width:50%;max-height:100%;@media(max-width:990px){width:100%;min-height:40vh;img{max-height:50vh;min-width:100vw;object-fit:cover;}}}div.info{width:50%;min-height:100vh;img{height:100%;}@media(min-width:1400px){padding-top:1rem;}@media(max-width:990px){width:100%;min-height:50%;}h1{text-align:", ";font-size:1.9rem;line-height:2.5rem;height:22%;@media(min-width:1400px){height:25%;font-size:2.8rem;line-height:3.5rem;}@media(max-width:990px){position:absolute;top:2%;left:2%;color:#fff;}}div.rooms{width:100%;display:flex;flex-direction:", ";justify-content:space-between;gap:2rem;@media(min-width:990px){height:66%}@media(min-width:1400px){height:55.5%;}@media(max-width:990px){padding-top:2rem;}div.h-line{width:18%;height:2px;background-color:#F26630;}div.rooms-data{width:100%;padding-right:", ";padding-left:", ";display:flex;flex-direction:column;justify-content:space-between;p{margin-top:-0.4rem;line-height:1.5rem;color:#797979;text-align:", ";@media(min-width:1400px){font-size:1.5rem;margin-bottom:3rem;}}div.options{div.option{height:3.5;margin:1rem 0rem;display:flex;flex-direction:", ";align-items:center;@media(min-width:1400px){margin-bottom:1.45rem;}div.circle{width:3rem;height:3rem;border:1px solid #a9a9a9;border-radius:50%;display:flex;justify-content:center;align-items:center;transition:all 300ms ease;}p.option-text{margin:auto 1rem;color:#000;@media(min-width:1400px){font-size:1.6rem;}}&:hover{div.circle{transform:scale(1.2);}}}}}button{max-width:55%;min-width:", ";align-self:", ";margin-top:0.5rem;font-size:1.1rem;font-weight:bold;padding:0.7rem;background-color:#000;color:#fff;border:0.5px solid #000;cursor:pointer;transition:all 500ms ease;a{display:block;margin:0;color:#fff;text-decoration:none;width:100%;height:100%;}&:hover{background-color:#F26630;color:#fff;border-color:#F26630;}}}}div.title{width:29%;height:33%;position:absolute;bottom:0;left:", ";background-color:#F26630;color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;@media(max-width:990px){top:-50%;width:45%;height:25%;right:0;left:0;margin:auto;opacity:0.8;}div{width:80%;height:70%;position:relative;display:flex;flex-direction:column;justify-content:center;border:1px solid #fff;text-align:center;h1{font-size:2.5rem;margin-bottom:-0.3rem;}p{font-size:large;}}}"], ({
  language,
  width
}) => language === "English" && width > 990 ? "row" : language === "العربية" && width > 990 ? "row-reverse" : width <= 990 ? "row wrap" : '', ({
  language
}) => language === "English" ? "left" : "right", ({
  language
}) => language === "English" ? "row" : "row-reverse", ({
  language,
  width
}) => language === "English" && width > 990 && "24%", ({
  language
}) => language === "العربية" && "24%", ({
  language
}) => language === "English" ? "left" : "right", ({
  language
}) => language === "English" ? "row" : "row-reverse", ({
  language
}) => language === "العربية" && "55%", ({
  language
}) => language === "العربية" && "flex-end", ({
  language,
  width
}) => language === "English" && width > 990 ? "27%" : language === "العربية" && width > 990 ? "43%" : '');

const CampCard = ({
  camp,
  language
}) => {
  // Handle Rerender at screen width change: Check this answer for elaboration (https://stackoverflow.com/questions/19014250/rerender-view-on-browser-resize-with-react#:~:text=As%20of%20React,Flag)
  const {
    0: width,
    1: setWidth
  } = (0,external_react_.useState)(0);
  (0,external_react_.useEffect)(() => {
    setWidth(window.innerWidth);
    const handleResize = (0,external_lodash_.debounce)(() => setWidth(window.innerWidth), 100);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx(Container, {
    language: language,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(CampCard_Card, {
      language: language,
      width: width,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "camp-image",
        children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
          width: width < 1400 ? 1000 : 1080,
          height: width < 1400 ? 957 : 1295,
          src: camp.images[0],
          alt: ""
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "title",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
            children: camp.name[0]
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: camp.location[0]
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "info",
        children: [language === "English" && width > 990 ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
          children: ["Our Camps Provide", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "High Quality & affordable", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "Accommodation"]
        }) : language === "العربية" && width > 990 ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
          children: ["\u0627\u0644\u0645\u062E\u064A\u0645\u0627\u062A \u0644\u062F\u064A\u0646\u0627 \u062A\u0648\u0641\u0631\u0639\u0644\u0649", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "\u062C\u0648\u062F\u0629 \u0644\u0644\u0625\u0642\u0627\u0645\u0629 \u0628\u0627\u0633\u0639\u0627\u0631 \u0645\u0646\u0627\u0633\u0628\u0629", /*#__PURE__*/jsx_runtime_.jsx("br", {}), ".\u0648\u062E\u062F\u0645\u0629 \u0631\u0627\u0626\u0639\u0629"]
        }) : null, /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "rooms",
          children: [width > 990 && /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "h-line"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "rooms-data",
            children: [language === "English" ? /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: camp.description[0]
            }) : /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: camp.description[1]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "options",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "option",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "circle",
                  children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_icons_.Check2, {
                    size: 30,
                    color: "#a9a9a9"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  className: "option-text",
                  children: language === "English" ? `${camp.facilities.english[0]}` : `${camp.facilities.arabic[0]}`
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "option",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "circle",
                  children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_icons_.Check2, {
                    size: 30,
                    color: "#a9a9a9"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  className: "option-text",
                  children: language === "English" ? `${camp.facilities.english[1]}` : `${camp.facilities.arabic[1]}`
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "option",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "circle",
                  children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_icons_.Check2, {
                    size: 30,
                    color: "#a9a9a9"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  className: "option-text",
                  children: language === "English" ? `${camp.facilities.english[2]}` : `${camp.facilities.arabic[2]}`
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "option",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "circle",
                  children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_icons_.Check2, {
                    size: 30,
                    color: "#a9a9a9"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  className: "option-text",
                  children: language === "English" ? `${camp.facilities.english[3]}` : `${camp.facilities.arabic[3]}`
                })]
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("button", {
              children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                href: `/camp/${camp._id}`,
                children: language === "English" ? "Details & Booking" : "التفاصيل والحجز"
              })
            })]
          })]
        })]
      })]
    })
  });
};

/* harmony default export */ const components_CampCard = (CampCard);
;// CONCATENATED MODULE: ./components/sliders/CampsSlider.js









const CampsSlider_Container = external_styled_components_default().div.withConfig({
  displayName: "CampsSlider__Container",
  componentId: "sc-hni5o2-0"
})(["max-width:100%;height:100vh;display:flex;justify-content:center;position:relative;overflow:hidden;@media(max-width:990px){overflow-x:scroll;}"]);
const Arrow = external_styled_components_default().div.withConfig({
  displayName: "CampsSlider__Arrow",
  componentId: "sc-hni5o2-1"
})(["width:", ";height:", ";border:", ";border-radius:", ";display:flex;background-color:", ";align-items:center;justify-content:center;position:absolute;top:17%;bottom:0;margin:auto;left:", ";right:", ";z-index:10;opacity:", ";cursor:pointer;transition:all 500ms ease;&:disabled{opacity:0.5;}&:hover{opacity:0.8;}"], props => `${props.dimensions}`, props => `${props.dimensions}`, props => `0.5px ${props.border} #000`, props => `${props.borderRadius}`, props => `${props.bgColor}`, props => props.direction === 'left' && '1.8%', props => props.direction === 'right' && '1.8%', props => `${props.bgOpacity}`);
const Wrapper = external_styled_components_default().div.withConfig({
  displayName: "CampsSlider__Wrapper",
  componentId: "sc-hni5o2-2"
})(["height:100%;width:100%;display:flex;align-items:center;justify-content:center;transition:1s ease;transform:translateX(", "%);"], props => props.width > 990 ? props.slideIndex * -25.3 : props.width <= 600 ? props.slideIndex * -102.5 : props.slideIndex * -33.3);
const Slide = external_styled_components_default().div.withConfig({
  displayName: "CampsSlider__Slide",
  componentId: "sc-hni5o2-3"
})(["width:100%;height:100%;display:flex;align-items:center;justify-content:space-between;gap:1rem;"]);

const Slider = ({
  camps,
  language
}) => {
  // Handle Rerender at screen width change: Check this answer for elaboration (https://stackoverflow.com/questions/19014250/rerender-view-on-browser-resize-with-react#:~:text=As%20of%20React,Flag)
  const {
    0: width,
    1: setWidth
  } = (0,external_react_.useState)(0);
  (0,external_react_.useEffect)(() => {
    setWidth(window.innerWidth);
    const handleResize = (0,external_lodash_.debounce)(() => setWidth(window.innerWidth), 10);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const {
    0: slideIndex,
    1: setSlideIndex
  } = (0,external_react_.useState)(0);

  const handleClick = direction => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 0);
    } else if (direction === 'right') {
      setSlideIndex(slideIndex + 2 <= camps.length ? slideIndex + 1 : 0);
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [slideIndex > 0 && /*#__PURE__*/jsx_runtime_.jsx(Arrow, {
      direction: "left",
      dimensions: width > 600 ? "3.5rem" : width <= 600 ? '3rem' : "",
      border: "dashed",
      borderRadius: "50%",
      bgColor: "#fff",
      onClick: () => handleClick("left"),
      children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_icons_.CaretLeft, {
        color: "#000"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(CampsSlider_Container, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Wrapper, {
        width: width,
        slideIndex: width > 1400 ? slideIndex * 4 : width > 990 ? slideIndex * 4.13 : width > 600 ? slideIndex * 3 : slideIndex,
        children: /*#__PURE__*/jsx_runtime_.jsx(Slide, {
          children: width > 600 ? camps.map(camp => /*#__PURE__*/jsx_runtime_.jsx(components_CampCard, {
            camp: camp,
            language: language
          }, camp._id)) : width <= 600 ? camps.map(camp => /*#__PURE__*/jsx_runtime_.jsx(Card/* default */.Z, {
            camp: camp,
            language: language
          }, camp._id)) : null
        })
      })
    }), slideIndex + 1 < camps.length && /*#__PURE__*/jsx_runtime_.jsx(Arrow, {
      id: "right-arrow",
      direction: "right",
      dimensions: width > 600 ? "3.5rem" : width <= 600 ? '3rem' : "2rem",
      border: "dashed",
      borderRadius: "50%",
      bgColor: "#fff",
      onClick: () => handleClick("right"),
      children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_icons_.CaretRight, {
        color: "#000"
      })
    })]
  });
};

/* harmony default export */ const CampsSlider = (Slider);
;// CONCATENATED MODULE: ./components/home/Camps.js




const Camps_Container = external_styled_components_default().div.withConfig({
  displayName: "Camps__Container",
  componentId: "sc-1io3od7-0"
})(["max-width:100VW;min-height:100vh;display:flex;flex-flow:column nowrap;align-items:center;position:relative;padding-inline:3rem;overflow:hidden;h1{font-size:2.5rem;margin-bottom:2rem;}@media(min-width:1400px){padding-inline:15rem;}@media(max-width:990px){max-height:100vh;padding-inline:1.2rem;margin-top:2rem;}@media(max-width:768px){max-height:110vh;}@media(max-width:600px){max-height:60vh;margin-top:3rem;h1{font-size:1.5rem;}}"]);
const Line = external_styled_components_default().div.withConfig({
  displayName: "Camps__Line",
  componentId: "sc-1io3od7-1"
})(["width:6rem;height:1px;margin-bottom:4rem;background-color:#F26630;@media(max-width:990px){margin-bottom:0rem;}"]);

const Camps = ({
  language,
  camps
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Camps_Container, {
    id: "camps-section",
    children: [language === "English" ? /*#__PURE__*/jsx_runtime_.jsx("h1", {
      children: "Recommended Camps"
    }) : /*#__PURE__*/jsx_runtime_.jsx("h1", {
      children: "\u0627\u0641\u0636\u0644 \u0627\u0644\u0645\u062E\u064A\u0645\u0627\u062A \u0644\u0644\u062D\u062C\u0632"
    }), /*#__PURE__*/jsx_runtime_.jsx(Line, {}), /*#__PURE__*/jsx_runtime_.jsx(CampsSlider, {
      camps: camps,
      language: language
    })]
  });
};

/* harmony default export */ const home_Camps = (Camps);

/***/ }),

/***/ 1181:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "_": () => (/* binding */ CarCard),
  "Z": () => (/* binding */ home_Cars)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "react-bootstrap-icons"
var external_react_bootstrap_icons_ = __webpack_require__(3468);
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(6517);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/sliders/CarsSlider.js










const Container = external_styled_components_default().div.withConfig({
  displayName: "CarsSlider__Container",
  componentId: "sc-11xlk5z-0"
})(["max-width:100%;height:100vh;display:flex;justify-content:center;position:relative;overflow:hidden;@media(max-width:990px){overflow-x:scroll;}"]);
const Arrow = external_styled_components_default().div.withConfig({
  displayName: "CarsSlider__Arrow",
  componentId: "sc-11xlk5z-1"
})(["width:", ";height:", ";border:", ";border-radius:", ";display:flex;background-color:", ";align-items:center;justify-content:center;position:absolute;top:17%;bottom:0;margin:auto;left:", ";right:", ";z-index:10;opacity:", ";cursor:pointer;transition:all 500ms ease;&:hover{opacity:0.8;}"], props => `${props.dimensions}`, props => `${props.dimensions}`, props => `0.5px ${props.border} #000`, props => `${props.borderRadius}`, props => `${props.bgColor}`, props => props.direction === 'left' && '1.8%', props => props.direction === 'right' && '1.8%', props => `${props.bgOpacity}`);
const Wrapper = external_styled_components_default().div.withConfig({
  displayName: "CarsSlider__Wrapper",
  componentId: "sc-11xlk5z-2"
})(["height:100%;width:100%;display:flex;align-items:center;justify-content:center;transition:1s ease;transform:translateX(", "%);"], props => props.width > 990 ? props.slideIndex * -25.3 : props.width <= 600 ? props.slideIndex * -102.5 : props.slideIndex * -33.3);
const Slide = external_styled_components_default().div.withConfig({
  displayName: "CarsSlider__Slide",
  componentId: "sc-11xlk5z-3"
})(["width:100%;height:100%;display:flex;align-items:center;justify-content:space-between;@media(max-width:990px){gap:0.3rem;}@media(max-width:600px){gap:0.5rem;}"]);

const CarsSlider = ({
  cars,
  language,
  setIsCreated,
  isCreated
}) => {
  const {
    0: user,
    1: setUser
  } = (0,external_react_.useState)();
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(false);
  const {
    0: done,
    1: setDone
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    if (false) {}
  }, []); // Handle Rerender at screen width change: Check this answer for elaboration (https://stackoverflow.com/questions/19014250/rerender-view-on-browser-resize-with-react#:~:text=As%20of%20React,Flag)

  const {
    0: width,
    1: setWidth
  } = (0,external_react_.useState)(0);
  (0,external_react_.useEffect)(() => {
    setWidth(window.innerWidth);
    const handleResize = (0,external_lodash_.debounce)(() => setWidth(window.innerWidth), 10);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const {
    0: slideIndex,
    1: setSlideIndex
  } = (0,external_react_.useState)(0);

  const handleClick = direction => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 0);
    } // Cars
    else if (direction === 'right' && cars && width > 990) {
      setSlideIndex(cars && slideIndex + 4 < cars.length ? slideIndex + 1 : 0);
    } else if (direction === 'right' && cars && width <= 990) {
      setSlideIndex(cars && slideIndex + 1 < cars.length ? slideIndex + 1 : 0);
    }
  }; // Handle edit car data


  const {
    0: editModalMarginLeft,
    1: setEditModalMarginLeft
  } = (0,external_react_.useState)(0);
  const {
    0: deleteCar,
    1: setDeleteCar
  } = (0,external_react_.useState)(false);
  const {
    0: singleCar,
    1: setSingleCar
  } = (0,external_react_.useState)();
  const {
    0: changeImage,
    1: setChangeImage
  } = (0,external_react_.useState)(false);
  const {
    0: imageFile,
    1: setImageFile
  } = (0,external_react_.useState)("");
  const {
    0: carImage,
    1: setCarImage
  } = (0,external_react_.useState)("");
  const {
    0: carName,
    1: setCarName
  } = (0,external_react_.useState)("");
  const {
    0: carAraName,
    1: setCarAraName
  } = (0,external_react_.useState)("");
  const {
    0: carPrice,
    1: setCarPrice
  } = (0,external_react_.useState)(0); // fetch single car

  const fetchCar = async (carId, modalId) => {
    try {
      const res = await external_axios_default().get(`${"https://powerful-sunglasses-newt.cyclic.app"}/api/admin/cars/${carId}`);
      setSingleCar(res.data);
      openModal(modalId);
      setCarImage(res.data.image);
      setCarName(res.data.name[0]);
      setCarAraName(res.data.name[1]);
      setCarPrice(res.data.price);
    } catch (error) {
      console.error(error);
    }
  }; // Update car


  const updateCar = async (e, carId, formId) => {
    e.preventDefault();

    try {
      setLoading(!loading);
      let image;

      if (changeImage) {
        const data = new FormData();
        data.append("file", imageFile);
        data.append("upload_preset", "uploads");
        const uploadImage = await external_axios_default().post("https://api.cloudinary.com/v1_1/dqmqc0uaa/image/upload", data);
        const {
          url
        } = uploadImage.data;
        image = url;
      }

      await external_axios_default().patch(`${"https://powerful-sunglasses-newt.cyclic.app"}/api/admin/cars/${carId}`, {
        image: changeImage ? image : carImage,
        name: [carName, carAraName],
        price: Number(carPrice)
      });
      setLoading(loading);
      setIsCreated(!isCreated);
      setDone(!done);
      setTimeout(() => {
        setDone(done);
        closeModal(formId);
      }, 500);
    } catch (error) {
      console.error(error);
    }
  }; // Delete car


  const removeCar = async (e, carId) => {
    e.preventDefault();

    try {
      await external_axios_default()["delete"](`${"https://powerful-sunglasses-newt.cyclic.app"}/api/admin/cars/${carId}`);
      setIsCreated(!isCreated);
      /*null because after deleteing the car its form don't exist any more*/

      closeModal(null);
    } catch (error) {
      console.error(error);
    }
  };

  const openModal = modalId => {
    document.getElementById(modalId).style.display = "flex";
    document.querySelector("body").style.overflowY = "hidden";
    window.scrollTo({
      top: document.getElementById("services-section").offsetTop
    });
  };

  const closeModal = formId => {
    Array.from(document.getElementsByClassName("add-car-modal")).map(modal => {
      modal.style.display = "none";
    });

    if (document.getElementById(formId)) {
      document.getElementById(formId).reset();
    }

    ;
    setChangeImage(false);
    document.querySelector("body").style.overflowY = "auto";
    setDeleteCar(false);
    setCarImage("");
    setCarName("");
    setCarAraName("");
    setCarPrice(0);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [slideIndex > 0 && /*#__PURE__*/jsx_runtime_.jsx(Arrow, {
      direction: "left",
      dimensions: "2.2rem",
      border: "solid",
      borderRadius: "5px",
      bgColor: "#fff",
      onClick: () => {
        handleClick("left");
        setEditModalMarginLeft(width < 1400 ? editModalMarginLeft - 23.5 : editModalMarginLeft - 17);
      },
      children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_icons_.CaretLeft, {
        color: "#000"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(Container, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Wrapper, {
        width: width,
        slideIndex: width > 990 ? slideIndex : slideIndex,
        children: /*#__PURE__*/jsx_runtime_.jsx(Slide, {
          id: "slide",
          children: cars && cars.map(car => /*#__PURE__*/(0,jsx_runtime_.jsxs)(CarCard, {
            car: car,
            language: language,
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "car-image",
              children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
                layout: "responsive",
                width: 300,
                height: 190,
                src: car.image,
                alt: ""
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
              children: language === "English" ? car.name[0] : car.name[1]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
              children: [language === "العربية" && "$", language === "English" ? "Starts from " : "يبدأ من ", language === "English" && "$", car.price]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
              children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_icons_.TelephoneFill, {}), " +20-100-009-0335"]
            }), user && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
              children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
                onClick: () => fetchCar(car._id, `${car._id}car-modal`),
                className: "edit",
                children: "\u062A\u0639\u062F\u064A\u0644"
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                id: `${car._id}car-modal`,
                className: "add-car-modal edit-car-modal",
                style: {
                  marginLeft: `${editModalMarginLeft}vw`
                },
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "modal-body",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "close-modal",
                    onClick: () => closeModal(`${car._id}form`),
                    children: "x"
                  }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
                    className: "title",
                    children: "\u062A\u0639\u062F\u064A\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0633\u064A\u0627\u0631\u0629"
                  }), loading && /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "loading",
                    style: {
                      left: '23%',
                      top: '5%'
                    },
                    children: "Loading..."
                  }), done && /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "loading",
                    style: {
                      left: '23%',
                      top: '5%'
                    },
                    children: "Done"
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
                    id: `${car._id}form`,
                    className: "modal-content",
                    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                        children: "\u0627\u0633\u0645 \u0627\u0644\u0633\u064A\u0627\u0631\u0629"
                      }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                        type: "text",
                        placeholder: "\u0639\u0631\u0628\u064A",
                        defaultValue: singleCar && singleCar.name[1],
                        onChange: e => setCarAraName(e.target.value)
                      }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                        type: "text",
                        dir: "ltr",
                        placeholder: "English",
                        defaultValue: singleCar && singleCar.name[0],
                        onChange: e => setCarName(e.target.value)
                      })]
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                        children: "\u0627\u0644\u0633\u0639\u0631"
                      }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                        type: "number",
                        defaultValue: singleCar && singleCar.price,
                        onChange: e => setCarPrice(e.target.value)
                      })]
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                        children: "\u062A\u063A\u064A\u0631 \u0627\u0644\u0635\u0648\u0631\u0629"
                      }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                        type: "file",
                        onChange: e => {
                          setImageFile(e.target.files[0]);
                          setChangeImage(!changeImage);
                        }
                      }), !deleteCar && /*#__PURE__*/jsx_runtime_.jsx("button", {
                        className: "delete-car",
                        onClick: e => {
                          e.preventDefault();
                          setDeleteCar(true);
                        },
                        children: "\u0625\u0632\u0627\u0644\u0629 \u0647\u0630\u0647 \u0627\u0644\u0633\u064A\u0627\u0631\u0629"
                      })]
                    }), deleteCar && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: "delete-modal",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
                        children: "\u062A\u0623\u0643\u064A\u062F \u0625\u0632\u0627\u0644\u0629 \u0627\u0644\u0633\u064A\u0627\u0631\u0629"
                      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                        children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
                          className: "delete",
                          onClick: e => removeCar(e, singleCar && singleCar._id),
                          children: "\u0646\u0639\u0645"
                        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                          className: "close",
                          onClick: e => {
                            e.preventDefault();
                            setDeleteCar(false);
                          },
                          children: "\u0644\u0627"
                        })]
                      })]
                    }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                      className: "confirm",
                      disabled: loading ? true : false,
                      onClick: e => updateCar(e, car._id, `${car._id}form`),
                      children: "\u062A\u0639\u062F\u064A\u0644"
                    })]
                  })]
                })
              })]
            })]
          }, car._id))
        })
      })
    }), (cars && slideIndex + 4 < cars.length && width > 990 || cars && slideIndex + 3 < cars.length && width <= 990 || cars && slideIndex + 1 < cars.length && width <= 600) && /*#__PURE__*/jsx_runtime_.jsx(Arrow, {
      direction: "right",
      dimensions: "2.2rem",
      border: "solid",
      borderRadius: "5px",
      bgColor: "#fff",
      onClick: () => {
        handleClick("right");
        setEditModalMarginLeft(width < 1400 ? editModalMarginLeft + 23.5 : editModalMarginLeft + 17);
      },
      children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_icons_.CaretRight, {
        color: "#000"
      })
    })]
  });
};

/* harmony default export */ const sliders_CarsSlider = (CarsSlider);
;// CONCATENATED MODULE: ./components/home/Cars.js







const Cars_Container = external_styled_components_default().div.withConfig({
  displayName: "Cars__Container",
  componentId: "sc-13xp64a-0"
})(["max-width:100vw;max-height:75vh;margin-top:5rem;padding-inline:3rem;display:flex;flex-direction:column;align-items:center;position:relative;div.h-line{width:8rem;height:2px;background-color:#F26630;margin-bottom:3rem;}@media(min-width:1400px){margin-inline:14.5rem;padding-inline:3.4rem;max-height:52vh;div img{width:20rem;}}@media(max-width:990px){height:40vh;padding-inline:2rem;}@media(max-width:600px){height:70vh;padding-block:0rem;h1{font-size:1.4rem;}}button.add-new{position:absolute;left:8%;top:5%;padding:0.3rem 0.5rem;font-size:1.1rem;font-weight:bold;background-color:#F26630;color:#fff;border:1px solid #F26630;transition:all 300ms ease-in-out;cursor:pointer;&:hover{background-color:transparent;color:#000;}}span.success-span{position:absolute;left:18%;top:5%;padding:0.4rem;font-weight:bold;background-color:#00D100;color:#fff;border-radius:5px;}div.add-car-modal{width:100vw;height:100%;position:fixed;top:0;left:0;right:0;margin:auto;display:none;justify-content:center;align-items:center;background-color:rgba(255,255,255,0.6);z-index:1000;div.modal-body{width:50%;height:85%;background-color:#fff;display:flex;align-items:center;justify-content:center;border:1px solid #ccc;border-radius:5px;position:relative;@media(min-width:1400px){margin-right:30%;}h2.title{position:absolute;top:0%;}span.loading{position:absolute;top:10%;font-size:1.1rem;font-weight:bold;background-color:#00D100;color:#fff;padding:0.4rem;border-radius:5px;}span.close-modal{width:1.2rem;height:1.2rem;position:absolute;right:2%;top:2.5%;font-weight:bold;background-color:#000;color:#fff;border:1px solid #000;border-radius:5px;display:flex;align-items:center;justify-content:center;transition:all 300ms ease-in-out;cursor:pointer;&:hover{background-color:transparent;color:#000;}}form.modal-content{height:65%;padding-inline-start:1rem;direction:rtl;position:relative;border:1px solid #ccc;border-radius:5px;div{input{height:1.7rem;width:15rem;margin-left:1rem;padding-inline:0.5rem;}}button.confirm{width:5rem;position:absolute;bottom:-20%;left:0;right:0;margin:auto;font-size:1.1rem;font-weight:bold;background-color:#F26630;color:#fff;border:1px solid #F26630;padding-block-start:0.3rem;cursor:pointer;transition:all 300ms ease-in-out;&:hover{background-color:transparent;color:#000;}&:disabled{opacity:0.5;}}button.delete-car{position:relative;left:-9.5rem;font-size:1.1rem;background-color:red;color:#fff;border:1px solid red;cursor:pointer;transition:all 300ms ease-in-out;&:hover{background-color:transparent;color:#000;}}div.delete-modal{width:43%;display:inline-flex;flex-direction:column;justify-content:center;align-items:center;position:absolute;left:1rem;bottom:1rem;padding:0.3rem 0.4rem;border:1px solid #ccc;border-radius:5px;h4{margin:0;}div{width:100%;display:flex;justify-content:space-between;button.delete{background-color:#00D100;color:#fff;border:1px solid #00D100;font-size:large;cursor:pointer;&:hover{background-color:transparent;color:#000}}button.close{background-color:red;color:#fff;border:1px solid red;font-size:large;cursor:pointer;&:hover{background-color:transparent;color:#000}}}}}}}"]);
const CarCard = external_styled_components_default().div.withConfig({
  displayName: "Cars__CarCard",
  componentId: "sc-13xp64a-1"
})(["min-width:25%;height:100%;display:flex;flex-flow:column nowrap;align-items:center;@media(max-width:990px){min-width:33%;}@media(max-width:600px){min-width:100%;}div.car-image{width:18.5rem;height:auto;object-fit:cover;transition:transform 400ms ease;@media(max-width:990px){width:15rem;}@media(max-width:600px){width:19.7rem;}}h3{margin:0px;font-size:1.4rem;}p{margin:0.5rem;}&:hover{div.car-image{transform:scale(1.1);}}button.edit{background-color:#F26630;color:#fff;border:1px solid #F26630;font-weight:bold;font-size:1.1rem;transition:all 300ms ease-in-out;cursor:pointer;&:hover{background-color:transparent;color:#000;}}"]);

const Cars = ({
  language
}) => {
  const {
    0: user,
    1: setUser
  } = (0,external_react_.useState)();
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(false);
  const {
    0: isCreated,
    1: setIsCreated
  } = (0,external_react_.useState)(false);
  const {
    0: done,
    1: setDone
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    if (false) {}
  }, []); // Fetch all cars

  const {
    0: cars,
    1: setCars
  } = (0,external_react_.useState)();
  (0,external_react_.useEffect)(() => {
    const fetchCars = async () => {
      try {
        const res = await external_axios_default().get(`${"https://powerful-sunglasses-newt.cyclic.app"}/api/cars`);
        setCars(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCars();
  }, [isCreated]); // Handle Create new car

  const {
    0: carImage,
    1: setCarImage
  } = (0,external_react_.useState)();
  const {
    0: carName,
    1: setCarName
  } = (0,external_react_.useState)();
  const {
    0: carAraName,
    1: setCarAraName
  } = (0,external_react_.useState)();
  const {
    0: carPrice,
    1: setCarPrice
  } = (0,external_react_.useState)(); // Create new car 

  const creatNewCar = async e => {
    e.preventDefault();

    try {
      setLoading(!loading);
      const data = new FormData();
      data.append("file", carImage);
      data.append("upload_preset", "uploads");
      const uploadImage = await external_axios_default().post("https://api.cloudinary.com/v1_1/dqmqc0uaa/image/upload", data);
      const {
        url
      } = uploadImage.data;
      await external_axios_default().post(`${"https://powerful-sunglasses-newt.cyclic.app"}/api/admin/cars`, {
        image: url,
        name: [carName, carAraName],
        price: Number(carPrice)
      });
      setLoading(loading);
      document.getElementById("add-car-form").reset();
      setIsCreated(!isCreated);
      closeModal();
      setDone(!done);
      setTimeout(() => {
        setDone(done);
      }, 1500);
    } catch (error) {
      console.error(error);
    }
  };

  const openModal = () => {
    document.getElementById("add-car-modal").style.display = "flex";
    document.querySelector("body").style.overflowY = "hidden";
  };

  const closeModal = () => {
    document.getElementById("add-car-modal").style.display = "none";
    document.querySelector("body").style.overflowY = "auto";
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Cars_Container, {
    id: "services-section",
    children: [user && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
        className: "add-new",
        onClick: openModal,
        children: "\u0627\u0636\u0641 \u0633\u064A\u0627\u0631\u0629 \u062C\u062F\u064A\u062F\u0629"
      }), done && /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "success-span",
        children: "\u062A\u0645\u062A \u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0628\u0646\u062C\u0627\u062D \u2713"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        id: "add-car-modal",
        className: "add-car-modal",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "modal-body",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "close-modal",
            onClick: closeModal,
            children: "x"
          }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
            className: "title",
            children: "\u0625\u0636\u0627\u0641\u0629 \u0633\u064A\u0627\u0631\u0629 \u062C\u062F\u064A\u062F\u0629"
          }), loading && /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "loading",
            children: "Loading..."
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
            id: "add-car-form",
            className: "modal-content",
            onSubmit: e => creatNewCar(e),
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                children: "\u0627\u0633\u0645 \u0627\u0644\u0633\u064A\u0627\u0631\u0629"
              }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                type: "text",
                placeholder: "\u0639\u0631\u0628\u064A",
                onChange: e => setCarAraName(e.target.value)
              }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                type: "text",
                dir: "ltr",
                placeholder: "English",
                onChange: e => setCarName(e.target.value)
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                children: "\u0627\u0644\u0633\u0639\u0631"
              }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                type: "number",
                onChange: e => setCarPrice(e.target.value)
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                children: "\u0627\u0644\u0635\u0648\u0631\u0629"
              }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                type: "file",
                onChange: e => setCarImage(e.target.files[0])
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("button", {
              className: "confirm",
              type: "submit",
              disabled: loading ? true : false,
              children: "\u0625\u0636\u0627\u0641\u0629"
            })]
          })]
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
      children: language === "English" ? "Recommended Car Rentals" : "سيارات للايجار"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "h-line"
    }), /*#__PURE__*/jsx_runtime_.jsx(sliders_CarsSlider, {
      cars: cars,
      language: language,
      isCreated: isCreated,
      setIsCreated: setIsCreated
    })]
  });
};

/* harmony default export */ const home_Cars = (Cars);

/***/ }),

/***/ 6426:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3468);
/* harmony import */ var react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5641);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_2__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "ContactUs__Container",
  componentId: "sc-1ayu1ve-0"
})(["max-width:100vw;height:80vh;padding-inline:3rem;padding-bottom:6rem;display:flex;flex-direction:", ";justify-content:space-between;align-items:center;position:relative;@media(min-width:1400px){padding-inline:15rem;}@media(max-width:990px){height:40vh;}@media(max-width:600px){height:100vh;flex-direction:column;padding-inline-start:", ";padding-inline-end:", ";}div.contact-info{width:30%;height:60%;display:flex;flex-direction:column;align-items:", ";text-align:", ";@media(max-width:990px){width:40%;}@media(max-width:600px){width:100%;}p{font-size:0.9rem;line-height:1.1rem;}h4{margin-top:2rem;margin-bottom:1.5rem;}div{width:fit-content;display:flex;flex-direction:", ";justify-content:space-between;align-items:flex-start;p{margin:0px;margin-bottom:20px;margin-inline:10px;}}}div.form-container{width:60%;height:50%;@media(max-width:990px){width:50%}@media(max-width:600px){width:100%;}form{display:flex;flex-direction:column;align-items:", ";label{margin-bottom:0.5rem;}input{width:100%;margin-bottom:1rem;padding:0.6rem;text-align:", ";}textarea{width:100%;height:10rem;font-family:inherit;padding:12px 0.6rem;resize:none;font-size:1rem;margin-bottom:1.5rem;text-align:", ";@media(max-width:990px){height:7rem;}}button{padding:0.6rem;width:10rem;font-size:1.1rem;font-weight:bold;background-color:#F26630;color:#fff;border:1px solid #F26630;transition:all 500ms ease-in-out;cursor:pointer;&:hover{background-color:transparent;color:#000;}}}}div.message-sent{width:100%;height:100%;display:flex;flex-direction:column;text-align:center;align-items:center;justify-content:center;font-size:1.2rem;div{width:10rem;height:10rem;border:1px solid #F26630;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:4rem;color:#F26630;}button{padding:0.4rem;font-weight:bold;background-color:#F26630;color:#fff;border:1px solid #F26630;transition:all 300ms ease-in-out;cursor:pointer;&:hover{background-color:transparent;color:#000;}}}"], ({
  language
}) => language === "English" ? "row" : "row-reverse", ({
  language
}) => language === "English" ? "1rem" : "2rem", ({
  language
}) => language === "العربية" ? "1rem" : "2rem", ({
  language
}) => language === "English" ? "flex-start" : "flex-end", ({
  language
}) => language === "English" ? "left" : "right", ({
  language
}) => language === "English" ? "row" : 'row-reverse', ({
  language
}) => language === "English" ? "flex-start" : "flex-end", ({
  language
}) => language === "English" ? "left" : "right", ({
  language
}) => language === "English" ? "left" : "right");

const ContactUs = ({
  language
}) => {
  // Handle contact form
  const {
    register,
    handleSubmit,
    formState: {
      errors
    },
    getValues,
    reset
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)();

  async function onFormSubmit(values) {
    try {
      await axios__WEBPACK_IMPORTED_MODULE_4___default().post(`${"https://powerful-sunglasses-newt.cyclic.app"}/api/submit-contact-form`, {
        language: language,
        name: values.senderName,
        email: values.senderEmail,
        message: values.message
      });
      reset();
      setMessageSent(true);
    } catch (error) {
      console.error(error);
    }
  }

  ; // handle message sent

  const {
    0: messageSent,
    1: setMessageSent
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (messageSent === true) {
      setTimeout(() => {
        setMessageSent(false);
      }, 7000);
    }
  }, [messageSent]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(Container, {
    id: "contact-us-section",
    language: language,
    children: messageSent === true ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "message-sent",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
        children: "\u2713"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
        children: language === "English" ? "Your message has been sent successfully." : ".تم إرسال رسالتك بنجاح"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("button", {
        onClick: () => setMessageSent(false),
        children: language === "English" ? "Send another message" : "إرسالة رسالة أخرى"
      })]
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "contact-info",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h2", {
          children: language === "English" ? "Send us a message" : "ارسل إلينا"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
          children: language === "English" ? "Nunc sed id semper risus in hendrerit. Amet mattis vulputate enim nulla aliquet porttitor. Nunc id cursus metus aliquam eleifend. Elit eget gravida cum sociis natoque penatibus et magnis." : "و سأعرض مثال حي لهذا، من منا لم يتحمل جهد بدني شاق إلا من أجل الحصول على ميزة أو فائدة؟ ولكن من لديه الحق أن ينتقد شخص ما أراد أن يشعر بالسعادة التي لا تشوبها عواقب أليمة أو آخر أراد أن يتجنب الألم الذي ربما تنجم عنه بعض المتعة ؟ "
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h4", {
          children: language === "English" ? "Book Your Trip" : "احجز رحلتك معنا"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_1__.GeoAltFill, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
            children: language === "English" ? "Arish, North Sinai..." : "...العريش, شمال سيناء"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_1__.TelephoneFill, {
            size: 15
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
            children: "+20-100-009-0335"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_1__.Envelope, {
            size: 17
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
            children: "breaktrips2022@gmail.com"
          })]
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
        className: "form-container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("form", {
          onSubmit: handleSubmit(onFormSubmit),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("label", {
            htmlFor: "name",
            children: language === "English" ? "Name*" : "*الاسم"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("input", _objectSpread({
            type: "text",
            id: "sender-name",
            name: "sender-name",
            placeholder: language === "English" ? "Enter your full name" : " ادخل الإسم الكامل"
          }, register("senderName", {
            required: {
              value: true,
              message: language === "English" ? "Please enter your name" : "برجاء ادخال الاسم الكامل"
            },
            minLength: {
              value: 8,
              message: language === "English" ? "This name is too short" : "هذا الاسم قصير جدا"
            },
            maxLength: {
              value: 100,
              message: language === "English" ? "This name is too long" : "هذا الاسم طويل جدا"
            }
          }))), errors.senderName && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
            style: {
              color: "red"
            },
            children: errors.senderName.message
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("label", {
            htmlFor: "email",
            children: language === "English" ? "Email*" : "*البريد الاكتروني"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("input", _objectSpread({
            type: "email",
            id: "sender-email",
            name: "sender-email",
            placeholder: language === "English" ? "Enter your email" : "ادخل البريد الالكتروني"
          }, register("senderEmail", {
            required: {
              value: true,
              message: language === "English" ? "Please enter your email address" : "من فضلك ادخل بريدك الألكتروني"
            },
            minLength: {
              value: 8,
              message: language === "English" ? "This email is too short" : "هذا البريد الإلكتروني قصير جدا"
            },
            maxLength: {
              value: 254,
              message: language === "English" ? "This email is too long" : "هذا البريد الإلكتروني طويل جدا"
            },
            pattern: {
              value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: language === "English" ? "Please enter a valid email address" : "برجاء إدخال عنوان بريد إلكتروني صحيح"
            }
          }))), errors.senderEmail && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
            style: {
              color: 'red'
            },
            children: errors.senderEmail.message
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("label", {
            htmlFor: "message",
            children: language === "English" ? "Message*" : "*الرسالة"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("textarea", _objectSpread({
            type: "textarea",
            id: "message",
            name: "message",
            placeholder: language === "English" ? "Enter your message" : "اكتب رسالتك"
          }, register("message", {
            required: {
              value: true,
              message: language === "English" ? "Please enter your message" : "من فضلك اكتب رسالتك"
            }
          }))), errors.message && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
            style: {
              color: 'red'
            },
            children: errors.message.message
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("button", {
            type: "submit",
            children: language === "English" ? "Send Message" : "ارسل"
          })]
        })
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactUs);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3468);
/* harmony import */ var react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);








const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Gallery__Container",
  componentId: "sc-1fncu2e-0"
})(["max-width:100vw;height:130vh;margin-top:3rem;display:flex;flex-direction:column;align-items:center;position:relative;@media(max-width:990px){height:68vh;margin-top:0rem;padding-top:2rem;background-color:#16171F;color:#fff;}@media(max-width:600px){padding-bottom:2rem;}div.title{display:flex;flex-direction:column;align-items:center;margin-bottom:3rem;h1{font-size:2.5rem;@media(max-width:600px){font-size:1.5rem;}}div.h-line{width:5rem;height:2px;background-color:#F26630;}}form.add-new-photos{width:21%;position:absolute;left:5%;top:5%;padding:0.4rem;border:1px solid #000;border-radius:5px;display:flex;justify-content:space-between;input{display:none;}label{background-color:#fff;display:flex;align-items:baseline;font-size:0.75rem;border:1px solid;border-radius:5px;padding-block-start:0.2rem;padding-inline-start:0.5rem;padding-inline-end:1rem;cursor:pointer;transition:all 300ms ease-in-out;&:hover{opacity:0.7;border-color:#F26630;}}button{font-size:1rem;font-weight:bold;background-color:#F26630;color:#fff;border:1px solid #F26630;cursor:pointer;transition:all 300ms ease-in-out;&:hover{background-color:transparent;color:#000;}}}span.loading{position:absolute;left:13%;top:12%;font-size:1.1rem;font-weight:bold;}div#upload-success{display:none;position:absolute;left:13%;top:12%;background-color:#00D100;color:#fff;padding:0.4rem;border-radius:5px;}div.row{width:100vw;display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:repeat(2,1fr);grid-column-gap:10px;grid-row-gap:10px;div.img1{grid-area:1 / 1 / 2 / 2;}div.img2{grid-area:1 / 2 / 2 / 3;}div.img3{grid-area:2 / 1 / 3 / 2;}div.img4{grid-area:2 / 2 / 3 / 3;}div.img5{grid-area:1 / 3 / 3 / 5;}div.img6{grid-area:1 / 5 / 2 / 6;}div.img7{grid-area:2 / 5 / 3 / 6;}div.column{img{width:100%;height:100%;object-fit:cover;cursor:pointer;}}@media(max-width:990px){display:flex;gap:0;div.img1,.img2,.img3,.img4,.img5,.img6,.img7{display:none;}}}div.row::after{content:\"\";display:table;clear:both;}div.modal{display:none;position:fixed;z-index:1000;left:0;top:0;width:100%;height:100%;overflow-x:auto;overflow-y:hidden;background-color:#16171F;@media(max-width:990px){display:block;position:relative;z-index:100;}}div.modal-content{position:relative;margin:auto;padding:0;width:100%;max-width:1200px;min-height:100%;display:flex;flex-flow:column nowrap;overflow:hidden;img{height:85vh;object-fit:contain;@media(max-width:990px){max-height:47vh;}@media(max-width:600px){max-height:43vh;}}div.indicators{height:15%;width:100%;position:absolute;bottom:0;display:flex;flex-flow:row nowrap;align-items:center;justify-content:space-between;gap:0.5rem;@media(max-width:990px){display:none;}div.column{max-width:25%;height:90%;img{width:100%;height:100%;object-fit:cover;transition:all 300ms ease;@media(max-width:600px){height:80%;}}}}form.change-image{color:#fff;position:absolute;top:10%;z-index:10;border:1px solid #fff;border-radius:5px;padding:12px;label{border:1px solid;padding-block-start:1rem;padding-block-end:0.7rem;padding-inline:0.4rem;transition:all 300ms ease-in-out;cursor:pointer;&:hover{background-color:#fff;color:#000;}}input[type=\"file\"]{display:none;}button{padding:0.3rem;margin-left:1rem;background-color:#F26630;color:#fff;border:1px solid #F26630;cursor:pointer;transition:all 300ms ease-in-out;&:hover{background-color:#fff;color:#000;}}span.newImg-uploaded{display:none;}}}span.close{color:#fff;position:absolute;top:15px;right:100px;font-size:35px;font-weight:bold;z-index:1000;&:hover,&:focus{color:#999;text-decoration:none;cursor:pointer;}@media(max-width:990px){display:none;}}div.mySlides{display:none;img{width:100%;}}div.cursor{cursor:pointer;}button.prev,.next{cursor:pointer;position:absolute;top:50%;width:auto;padding:16px;margin-top:-50px;background-color:transparent;color:#fff;font-weight:bold;font-size:20px;transition:500ms ease;border:none;border-radius:0 3px 3px 0;user-select:none;-webkit-user-select:none;&:hover{background-color:rgba(0,0,0,0.8);}}button.next{right:0%;border-radius:3px 0 0 3px;}div.numbertext{color:#f2f2f2;font-size:12px;padding:8px 12px;position:absolute;top:0;}img{margin-bottom:-4px;}img.demo{opacity:0.6;&:hover{opacity:1;}}img.active{opacity:1;}img.hover-shadow{transition:300ms;&:hover{box-shadow:0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);opacity:0.8;}}"]);

const Gallery = ({
  language
}) => {
  // Fetch images
  const {
    0: allImages,
    1: setAllImages
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
  const {
    0: addNew,
    1: setAddNew
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const fetchImages = async () => {
      try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_4___default().get(`${"https://powerful-sunglasses-newt.cyclic.app"}/api/images`);
        setAllImages(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchImages();
  }, [addNew]); // Update images for admins

  const {
    0: user,
    1: setUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
  const {
    0: files,
    1: setFiles
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (false) {}
  }, []); // Upload new images

  const addNewImages = async e => {
    e.preventDefault();

    try {
      setLoading(!loading);
      const images = await Promise.all(Object.values(files).map(async file => {
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "uploads");
        const uploadRes = await axios__WEBPACK_IMPORTED_MODULE_4___default().post("https://api.cloudinary.com/v1_1/dqmqc0uaa/image/upload", data);
        const {
          url
        } = uploadRes.data;
        return url;
      }));
      const newImages = images.map(el => {
        return {
          url: el
        };
      }); // console.log(newImages)

      await axios__WEBPACK_IMPORTED_MODULE_4___default().post(`${"https://powerful-sunglasses-newt.cyclic.app"}/api/admin/images`, newImages);
      setLoading(loading);
      document.getElementById("upload-success").style.display = "block";
      setTimeout(() => {
        document.getElementById("upload-success").style.display = "none";
      }, 1500);
      setAddNew(!addNew);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(files); // Change exsiting image

  const {
    0: newImgLoading,
    1: setNewImgLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);

  const changeImage = async (e, imageId, successSpanId) => {
    e.preventDefault();

    try {
      setNewImgLoading(!newImgLoading);
      const data = new FormData();
      data.append("file", files);
      data.append("upload_preset", "uploads");
      const uploadImage = await axios__WEBPACK_IMPORTED_MODULE_4___default().post("https://api.cloudinary.com/v1_1/dqmqc0uaa/image/upload", data);
      const {
        url
      } = uploadImage.data;
      await axios__WEBPACK_IMPORTED_MODULE_4___default().patch(`${"https://powerful-sunglasses-newt.cyclic.app"}/api/admin/images/${imageId}`, {
        url: url
      });
      setNewImgLoading(newImgLoading);
      document.getElementById(successSpanId).style.display = "inline";
      setTimeout(() => {
        document.getElementById(successSpanId).style.display = "none";
      }, 1500);
      setAddNew(!addNew);
    } catch (error) {
      console.error(error);
    }
  };

  const openModal = () => {
    document.getElementById('myModal').style.display = 'block';
    document.querySelector("body").style.overflowY = "hidden";
  };

  const closeModal = () => {
    document.getElementById('myModal').style.display = 'none';
    document.querySelector("body").style.overflowY = "auto";
  };

  let slideIndex = 1;

  const showSlides = n => {
    if (false) {}
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    showSlides(slideIndex);
  });

  const plusSlides = n => {
    showSlides(slideIndex += n);
  };

  const currentSlide = n => {
    showSlides(slideIndex = n);
  }; // Handle grid images


  const gridImages = allImages && allImages.slice(0, 7);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(Container, {
    id: "gallery-section",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "title",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h1", {
        children: language === "English" ? "Photo Gallery" : "معرض الصور"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
        className: "h-line"
      }), user && (user.role === 'admin1' || user.role === 'admin2') && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("form", {
          onSubmit: e => addNewImages(e),
          className: "add-new-photos",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
            htmlFor: "upload-new-photos",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_3__.FileEarmarkArrowUp, {
              size: 25
            }), " ",  false ? 0 : 'Click here to add new photos']
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("input", {
            id: "upload-new-photos",
            type: "file",
            multiple: true,
            onChange: e => setFiles(e.target.files)
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("button", {
            type: "submit",
            children: "Upload"
          })]
        }), loading === true && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
          className: "loading",
          children: "Loading..."
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
          id: "upload-success",
          children: "Done \u2713"
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
      className: "row",
      children: gridImages && gridImages.map(image => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
        className: `column img${gridImages.indexOf(image) + 1}`,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
          layout: "responsive",
          width: 0,
          height: 0,
          src: image.url,
          onClick: () => {
            openModal();
            currentSlide(gridImages.indexOf(image) + 1);
          },
          alt: "",
          className: "hover-shadow cursor"
        })
      }, gridImages.indexOf(image) + 1))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      id: "myModal",
      className: "modal",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
        className: "close cursor",
        onClick: closeModal,
        children: "\xD7"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
        className: "hidden-box"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "modal-content",
        children: [allImages && allImages.map(image => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "mySlides",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
            className: "numbertext",
            children: allImages.indexOf(image) + 1 + '/' + allImages.length
          }), user && (user.role === 'admin1' || user.role === 'admin2') && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("form", {
            onSubmit: e => changeImage(e, image._id, `${allImages.indexOf(image)}span`),
            className: "change-image",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
              htmlFor: `imgNum${allImages.indexOf(image)}id`,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_3__.FileEarmarkArrowUp, {
                size: 25
              }), " ",  false ? 0 : 'Choose photo']
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("input", {
              type: "file",
              id: `imgNum${allImages.indexOf(image)}id`,
              onChange: e => setFiles(e.target.files[0])
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("button", {
              type: "submit",
              children: "upload"
            }), newImgLoading === true && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
              children: "Loading..."
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
              id: `${allImages.indexOf(image)}span`,
              className: "newImg-uploaded",
              children: "Done"
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
            layout: "fill",
            src: image.url,
            alt: ""
          })]
        }, allImages.indexOf(image) + 1)), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("button", {
          className: "prev",
          onClick: () => plusSlides(-1),
          children: "\u276E"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("button", {
          className: "next",
          onClick: () => plusSlides(1),
          children: "\u276F"
        })]
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gallery);

/***/ }),

/***/ 3140:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
 // import BackGround from "../../public/video.mp4";



const Section = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({
  displayName: "Hero__Section",
  componentId: "sc-12i15lq-0"
})(["position:relative;max-width:100%;min-height:100vh;display:flex;justify-content:", ";align-items:center;text-align:center;text-align:", ";overflow:hidden;@media(max-width:990px){min-height:80vh;justify-content:center;text-align:center;}@media(max-width:600px){min-height:75vh;}video{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;pointer-events:none;}"], ({
  language
}) => language === "العربية" ? "right" : "left", ({
  language
}) => language === "العربية" ? "right" : "left");
const Video = styled_components__WEBPACK_IMPORTED_MODULE_0___default().video.withConfig({
  displayName: "Hero__Video",
  componentId: "sc-12i15lq-1"
})(["position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;pointer-events:none;"]);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "Hero__Container",
  componentId: "sc-12i15lq-2"
})(["padding-inline:4rem;z-index:1;h1{color:#fff;font-size:", ";line-height:3.5rem;margin-bottom:0.3rem;}div{height:0.15rem;background-color:#F26630;}h3{color:#fff;font-size:", ";margin:", ";font-weight:normal;}button{font-size:", ";font-weight:500;padding:", ";background-color:transparent;color:#fff;border:2px solid #F26630;cursor:pointer;transition:background-color 500ms ease;&:hover{background-color:#F26630;}}@media(min-width:1450px){padding-inline:6rem;h1{font-size:3.5rem;line-height:4.5rem;}h3{font-size:1.5rem;}button{font-size:1.7rem;}}@media(max-width:990px){padding-top:4rem;h1{font-size:2.1rem;line-height:3rem;}h3{font-size:1rem;}button{font-size:1.1rem;}}@media(max-width:600px){h1{font-size:1.2rem;line-height:1.8rem;}h3{font-size:0.5rem;}button{font-size:0.8rem;padding:0.3rem;}}"], ({
  language
}) => language === "English" ? "2.5rem" : "2.7rem", ({
  language
}) => language === "English" ? "1.1rem" : "1.5rem", ({
  language
}) => language === "العربية" ? "0.7rem 0rem" : "", ({
  language
}) => language === "English" ? "1.4rem" : "1.7rem", ({
  language
}) => language === "English" ? "0.6rem" : "0.4rem 2rem");

const Hero = ({
  language,
  onLinkClick
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Section, {
    language: language,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("video", {
      autoPlay: false,
      muted: true,
      loop: true,
      src: "https://res.cloudinary.com/dqmqc0uaa/video/upload/v1666049102/video_mqp2vl.mp4"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Container, {
      language: language,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("h1", {
        children: [" ", language === "English" ? "Your Favorite Agency for" : "الاختيار الافضل للسياحة داخل مصر", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("br", {}), language === "English" ? "Traveling Around Egypt" : "وقضاء عطلة مميزة بافضل سعر"]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("h3", {
        className: "text-white",
        children: [language === "English" ? "It is a long established fact that a reader will be distracted by the" : "اذا كنت من محبي السفر والاستكشاف وترغب في الاستمتاع بعطلة ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("br", {}), language === "English" ? "reader will be distracted by the." : "نهاية الاسبوع ، فانت في المكان الصحيح"]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("button", {
        goto: "trips-section",
        onClick: e => onLinkClick(e),
        children: language === "English" ? "Find Out More" : "اعرف اكثر"
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);

/***/ }),

/***/ 8255:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "U": () => (/* binding */ ActivityCard),
  "Z": () => (/* binding */ home_PopularAttractions)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-bootstrap-icons"
var external_react_bootstrap_icons_ = __webpack_require__(3468);
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(6517);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/sliders/PopularAttractionsSlider.js










const Container = external_styled_components_default().div.withConfig({
  displayName: "PopularAttractionsSlider__Container",
  componentId: "sc-1gatvx9-0"
})(["max-width:100%;height:100vh;display:flex;justify-content:center;position:relative;overflow:hidden;@media(max-width:990px){overflow-x:scroll;}"]);
const Arrow = external_styled_components_default().div.withConfig({
  displayName: "PopularAttractionsSlider__Arrow",
  componentId: "sc-1gatvx9-1"
})(["width:", ";height:", ";border:", ";border-radius:", ";display:flex;background-color:", ";align-items:center;justify-content:center;position:absolute;top:17%;bottom:0;margin:auto;left:", ";right:", ";z-index:10;opacity:", ";cursor:pointer;transition:all 500ms ease;&:hover{opacity:0.8;}"], props => `${props.dimensions}`, props => `${props.dimensions}`, props => `0.5px ${props.border} #000`, props => `${props.borderRadius}`, props => `${props.bgColor}`, props => props.direction === 'left' && '1.8%', props => props.direction === 'right' && '1.8%', props => `${props.bgOpacity}`);
const Wrapper = external_styled_components_default().div.withConfig({
  displayName: "PopularAttractionsSlider__Wrapper",
  componentId: "sc-1gatvx9-2"
})(["height:100%;width:100%;display:flex;align-items:center;justify-content:center;transition:1s ease;transform:translateX(", "%);"], props => props.width > 990 ? props.slideIndex * -25.3 : props.width <= 600 ? props.slideIndex * -102.5 : props.slideIndex * -33.3);
const Slide = external_styled_components_default().div.withConfig({
  displayName: "PopularAttractionsSlider__Slide",
  componentId: "sc-1gatvx9-3"
})(["width:100%;height:100%;display:flex;align-items:center;justify-content:space-between;gap:1rem;@media(max-width:600px){gap:0.5rem;}"]);

const PopularAttractionsSlider = ({
  activities,
  language,
  isCreated,
  setIsCreated
}) => {
  const {
    0: user,
    1: setUser
  } = (0,external_react_.useState)();
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(false);
  const {
    0: done,
    1: setDone
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    if (false) {}
  }, []); // Handle Rerender at screen width change: Check this answer for elaboration (https://stackoverflow.com/questions/19014250/rerender-view-on-browser-resize-with-react#:~:text=As%20of%20React,Flag)

  const {
    0: width,
    1: setWidth
  } = (0,external_react_.useState)(0);
  (0,external_react_.useEffect)(() => {
    setWidth(window.innerWidth);
    const handleResize = (0,external_lodash_.debounce)(() => setWidth(window.innerWidth), 10);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const {
    0: slideIndex,
    1: setSlideIndex
  } = (0,external_react_.useState)(0);

  const handleClick = direction => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 0);
    } // activities
    else if (direction === 'right' && activities && width > 990) {
      setSlideIndex(activities && slideIndex + 4 < activities.length ? slideIndex + 1 : 0);
    } else if (direction === 'right' && activities && width <= 990) {
      setSlideIndex(activities && slideIndex + 1 < activities.length ? slideIndex + 1 : 0);
    }
  }; // Handle edit activity


  const {
    0: editModalMarginLeft,
    1: setEditModalMarginLeft
  } = (0,external_react_.useState)(0);
  const {
    0: deleteActivity,
    1: setDeleteActivity
  } = (0,external_react_.useState)(false);
  const {
    0: singleActivity,
    1: setSingleActivity
  } = (0,external_react_.useState)();
  const {
    0: changeImage,
    1: setChangeImage
  } = (0,external_react_.useState)(false);
  const {
    0: imageFile,
    1: setImageFile
  } = (0,external_react_.useState)("");
  const {
    0: activityImage,
    1: setActivityImage
  } = (0,external_react_.useState)("");
  const {
    0: activityName,
    1: setActivityName
  } = (0,external_react_.useState)("");
  const {
    0: activityAraName,
    1: setActivityAraName
  } = (0,external_react_.useState)("");
  const {
    0: description,
    1: setDescription
  } = (0,external_react_.useState)("");
  const {
    0: araDescription,
    1: setAraDescription
  } = (0,external_react_.useState)("");
  const {
    0: activityPrice,
    1: setActivityPrice
  } = (0,external_react_.useState)(0); // Fetch single activity

  const fetchActivity = async (activityId, modalId) => {
    try {
      const res = await external_axios_default().get(`${"https://powerful-sunglasses-newt.cyclic.app"}/api/admin/activities/${activityId}`);
      setSingleActivity(res.data);
      openModal(modalId);
      setActivityImage(res.data.image);
      setActivityName(res.data.name[0]);
      setActivityAraName(res.data.name[1]);
      setDescription(res.data.description[0]);
      setAraDescription(res.data.description[1]);
      setActivityPrice(res.data.price);
    } catch (error) {
      console.error(error);
    }
  }; // Update activity


  const updateActivity = async (e, activityId, formId) => {
    e.preventDefault();

    try {
      setLoading(!loading);
      let image;

      if (changeImage) {
        const data = new FormData();
        data.append("file", imageFile);
        data.append("upload_preset", "uploads");
        const uploadImage = await external_axios_default().post("https://api.cloudinary.com/v1_1/dqmqc0uaa/image/upload", data);
        const {
          url
        } = uploadImage.data;
        image = url;
      }

      await external_axios_default().patch(`${"https://powerful-sunglasses-newt.cyclic.app"}/api/admin/activities/${activityId}`, {
        image: changeImage ? image : activityImage,
        name: [activityName, activityAraName],
        description: [description, araDescription],
        price: Number(activityPrice)
      });
      setLoading(loading);
      setIsCreated(!isCreated);
      setDone(!done);
      setTimeout(() => {
        setDone(done);
        closeModal(formId);
      }, 500);
    } catch (error) {
      console.error(error);
    }
  }; // Delete activity


  const removeActivity = async (e, activityId) => {
    e.preventDefault();

    try {
      await external_axios_default()["delete"](`${"https://powerful-sunglasses-newt.cyclic.app"}/api/admin/activities/${activityId}`);
      setIsCreated(!isCreated);
      /*null because after deleteing the car its form don't exist any more*/

      closeModal(null);
    } catch (error) {
      console.error(error);
    }
  };

  const openModal = modalId => {
    document.getElementById(modalId).style.display = "flex";
    document.querySelector("body").style.overflowY = "hidden";
    document.getElementById("hide-top").style.display = "block";
    document.getElementById("hide-left-side").style.display = "block";
    document.getElementById("hide-right-side").style.display = "block";
    window.scrollTo({
      top: document.getElementById("populart-attraction-container").offsetTop + 40
    });
  };

  const closeModal = formId => {
    Array.from(document.getElementsByClassName("add-activity-modal")).map(modal => {
      modal.style.display = "none";
    });

    if (document.getElementById(formId)) {
      document.getElementById(formId).reset();
    }

    ;
    setChangeImage(false);
    document.querySelector("body").style.overflowY = "auto";
    document.getElementById("hide-top").style.display = "none";
    document.getElementById("hide-left-side").style.display = "none";
    document.getElementById("hide-right-side").style.display = "none";
    setDeleteActivity(false);
    setActivityImage("");
    setActivityName("");
    setActivityAraName("");
    setDescription("");
    setAraDescription("");
    setActivityPrice(0);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [slideIndex > 0 && /*#__PURE__*/jsx_runtime_.jsx(Arrow, {
      direction: "left",
      dimensions: "2.2rem",
      border: "solid",
      borderRadius: "5px",
      bgColor: "#fff",
      onClick: () => {
        handleClick("left");
        setEditModalMarginLeft(width >= 1400 ? editModalMarginLeft - 17 : editModalMarginLeft - 23);
      },
      children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_icons_.CaretLeft, {
        color: "#000"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(Container, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Wrapper, {
        width: width,
        slideIndex: width > 990 ? slideIndex : slideIndex,
        children: /*#__PURE__*/jsx_runtime_.jsx(Slide, {
          id: "slide",
          children: activities && activities.map(activity => /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(ActivityCard, {
              activity: activity,
              language: language,
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "activity-image",
                children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
                  width: 320,
                  height: 255,
                  src: activity.image,
                  alt: ""
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "info",
                children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: language === "English" ? activity.description[0] : activity.description[1]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "contact-data",
                  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "phone-number",
                    children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_icons_.TelephoneFill, {}), /*#__PURE__*/jsx_runtime_.jsx("p", {
                      children: "+20-100-009-0335"
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
                    children: ["or ", /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_icons_.Whatsapp, {
                      color: "#fff",
                      size: 25
                    })]
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {})]
              }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
                children: language === "English" ? activity.name[0] : activity.name[1]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                children: [language === "العربية" && "$", language === "English" ? "Starts from " : "يبدأ من ", language === "English" && "$", activity.price]
              }), user && /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: /*#__PURE__*/jsx_runtime_.jsx("button", {
                  onClick: () => fetchActivity(activity._id, `${activity._id}edit-modal`),
                  className: "edit",
                  children: "\u062A\u0639\u062F\u064A\u0644"
                })
              })]
            }, activity._id), /*#__PURE__*/jsx_runtime_.jsx("div", {
              id: `${activity._id}edit-modal`,
              className: "add-activity-modal edit-activity-modal",
              style: {
                marginLeft: `${editModalMarginLeft}vw`
              },
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "modal-body",
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  onClick: () => closeModal(`${activity._id}form`),
                  className: "close-modal",
                  children: "x"
                }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
                  className: "title",
                  children: "\u062A\u0639\u062F\u064A\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0648\u062C\u0647\u0629"
                }), loading && /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "loading",
                  children: "Loading..."
                }), done && /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "loading",
                  children: "Done"
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
                  id: `${activity._id}form`,
                  className: "modal-content",
                  onSubmit: e => updateActivity(e, activity._id, `${activity._id}form`),
                  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                      children: "\u0627\u0633\u0645 \u0627\u0644\u0648\u062C\u0647\u0629"
                    }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                      type: "text",
                      defaultValue: singleActivity && singleActivity.name[1],
                      onChange: e => setActivityAraName(e.target.value)
                    }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                      type: "text",
                      defaultValue: singleActivity && singleActivity.name[0],
                      dir: "ltr",
                      onChange: e => setActivityName(e.target.value)
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                      children: "\u0627\u0644\u0648\u0635\u0641"
                    }), /*#__PURE__*/jsx_runtime_.jsx("textarea", {
                      rows: "3",
                      cols: "75",
                      defaultValue: singleActivity && singleActivity.description[1],
                      onChange: e => setAraDescription(e.target.value)
                    }), /*#__PURE__*/jsx_runtime_.jsx("textarea", {
                      rows: "3",
                      cols: "75",
                      dir: "ltr",
                      defaultValue: singleActivity && singleActivity.description[0],
                      onChange: e => setDescription(e.target.value)
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                      children: "\u0627\u0644\u0633\u0639\u0631"
                    }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                      type: "number",
                      defaultValue: singleActivity && singleActivity.price,
                      onChange: e => setActivityPrice(e.target.value)
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                      children: "\u0627\u0644\u0635\u0648\u0631\u0629"
                    }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                      type: "file",
                      onChange: e => {
                        setImageFile(e.target.files[0]);
                        setChangeImage(!changeImage);
                      }
                    })]
                  }), !deleteActivity && /*#__PURE__*/jsx_runtime_.jsx("button", {
                    className: "delete-activity",
                    onClick: e => {
                      e.preventDefault();
                      setDeleteActivity(true);
                    },
                    children: "\u0625\u0632\u0627\u0644\u0629 \u0647\u0630\u0647 \u0627\u0644\u0648\u062C\u0647\u0629"
                  }), deleteActivity && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "delete-modal",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
                      children: "\u062A\u0623\u0643\u064A\u062F \u0625\u0632\u0627\u0644\u0629 \u0627\u0644\u0648\u062C\u0647\u0629"
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
                        onClick: e => removeActivity(e, singleActivity && singleActivity._id),
                        className: "delete",
                        children: "\u0646\u0639\u0645"
                      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                        className: "close",
                        onClick: e => {
                          e.preventDefault();
                          setDeleteActivity(false);
                        },
                        children: "\u0644\u0627"
                      })]
                    })]
                  }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                    type: "submit",
                    className: "confirm",
                    disabled: loading ? true : false,
                    children: "\u062A\u0639\u062F\u064A\u0644"
                  })]
                })]
              })
            })]
          }))
        })
      })
    }), (activities && slideIndex + 4 < activities.length && width > 990 || activities && slideIndex + 3 < activities.length && width <= 990 || activities && slideIndex + 1 < activities.length && width <= 600) && /*#__PURE__*/jsx_runtime_.jsx(Arrow, {
      direction: "right",
      dimensions: "2.2rem",
      border: "solid",
      borderRadius: "5px",
      bgColor: "#fff",
      onClick: () => {
        handleClick("right");
        setEditModalMarginLeft(width >= 1400 ? editModalMarginLeft + 17 : editModalMarginLeft + 23);
      },
      children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_icons_.CaretRight, {
        color: "#000"
      })
    })]
  });
};

/* harmony default export */ const sliders_PopularAttractionsSlider = (PopularAttractionsSlider);
;// CONCATENATED MODULE: ./components/home/PopularAttractions.js







const PopularAttractions_Container = external_styled_components_default().div.withConfig({
  displayName: "PopularAttractions__Container",
  componentId: "sc-1mj7qom-0"
})(["max-width:100vw;height:100vh;padding-top:2rem;padding-inline:3rem;margin-bottom:5rem;display:flex;flex-direction:column;align-items:center;position:relative;div.h-line{width:8rem;height:2px;background-color:#F26630;margin-bottom:3rem;}span.success-span{position:absolute;left:15%;top:15%;padding:0.4rem;background-color:#00D100;color:#fff;font-weight:bold;border-radius:5px;}@media(min-width:1400px){margin-inline:14.5rem;padding-inline:3.4rem;max-height:52vh;margin-bottom:7rem;div img{width:20rem;}}@media(max-width:990px){height:43vh;margin-bottom:5rem;padding-inline:2rem;}@media(max-width:768px){height:45vh;margin-bottom:3rem;padding-inline:2rem;}@media(max-width:600px){height:70vh;margin-bottom:3rem;padding-block:0rem;h1{font-size:1.4rem;}}button.add-new{position:absolute;left:4%;top:15%;padding:0.3rem 0.5rem;font-size:1.1rem;font-weight:bold;background-color:#F26630;color:#fff;border:1px solid #F26630;transition:all 300ms ease-in-out;cursor:pointer;&:hover{background-color:transparent;color:#000;}}div.add-activity-modal{width:100%;height:100%;position:fixed;top:0;left:0;display:none;justify-content:center;align-items:center;background-color:rgba(255,255,255,0.6);z-index:1000;div.modal-body{width:100%;height:100%;background-color:#fff;display:flex;align-items:center;justify-content:center;border:1px solid #ccc;border-radius:5px;position:relative;@media(min-width:1400px){overflow-y:scroll;}h2.title{position:absolute;top:0%;}span.close-modal{width:1.2rem;height:1.2rem;position:absolute;right:2%;top:2.5%;font-weight:bold;background-color:#000;color:#fff;border:1px solid #000;border-radius:5px;display:flex;align-items:center;justify-content:center;transition:all 300ms ease-in-out;cursor:pointer;&:hover{background-color:transparent;color:#000;}}span.loading{position:absolute;bottom:11%;font-size:1.1rem;font-weight:bold;padding:0.4rem;background-color:#00D100;color:#fff;border-radius:5px;}form.modal-content{width:90%;height:80%;padding-inline-start:1rem;direction:rtl;position:relative;border:1px solid #ccc;border-radius:5px;@media(min-width:1400px){height:120%;padding-top:10rem;}div{input{height:1.7rem;width:15rem;margin-left:1rem;padding-inline:0.5rem;}textarea{margin-left:1rem;resize:none;font-family:inherit;padding:0.3rem;}}button.confirm{width:5rem;position:absolute;bottom:-10%;left:0;right:0;margin:auto;font-size:1.1rem;font-weight:bold;background-color:#F26630;color:#fff;border:1px solid #F26630;padding-block-start:0.3rem;cursor:pointer;transition:all 300ms ease-in-out;&:hover{background-color:transparent;color:#000;}}button.delete-activity{position:relative;left:-89%;bottom:8%;font-size:1.1rem;background-color:red;color:#fff;border:1px solid red;cursor:pointer;transition:all 300ms ease-in-out;&:hover{background-color:transparent;color:#000;}}div.delete-modal{width:43%;display:inline-flex;flex-direction:column;justify-content:center;align-items:center;position:absolute;left:1rem;bottom:1rem;padding:0.3rem 0.4rem;border:1px solid #ccc;border-radius:5px;h4{margin:0;}div{width:100%;display:flex;justify-content:space-between;button.delete{background-color:#00D100;color:#fff;border:1px solid #00D100;font-size:large;cursor:pointer;&:hover{background-color:transparent;color:#000}}button.close{background-color:red;color:#fff;border:1px solid red;font-size:large;cursor:pointer;&:hover{background-color:transparent;color:#000}}}}}}}div#hide-top{width:300vw;height:17vh;position:absolute;background-color:#fff;display:none;}div#hide-right-side{width:5vw;height:100vh;position:absolute;right:0;bottom:0;background-color:#fff;z-index:1500;display:none;}div#hide-left-side{width:5vw;height:100vh;position:absolute;left:0;bottom:0;background-color:#fff;z-index:1500;display:none;}"]);
const ActivityCard = external_styled_components_default().div.withConfig({
  displayName: "PopularAttractions__ActivityCard",
  componentId: "sc-1mj7qom-1"
})(["width:25%;height:70%;display:flex;flex-flow:column nowrap;align-items:center;justify-content:space-between;@media(min-width:1400px){height:98%;}@media(max-width:990px){width:33%;height:78%;}@media(max-width:768px){width:33%;height:85%;}@media(max-width:600px){width:100%;height:100%}div.activity-image{width:18.7rem;height:15rem;@media(min-width:1400px){width:20rem;}@media(max-width:990px){width:15rem;height:12rem;}@media(max-width:600px){width:19.7rem;height:14rem;}img{transition:all 400ms ease;object-fit:cover;}}h3{margin:0px;margin-bottom:-1rem;font-size:1.4rem;}div.info{position:absolute;width:0%;height:0%;color:transparent;background-color:#000;opacity:0.6;box-sizing:border-box;overflow-y:scroll;overflow-x:hidden;display:flex;flex-direction:column;justify-content:space-between;transition:300ms ease-in-out;div.contact-data{width:100%;display:flex;justify-content:space-between;align-items:center;button{color:#fff;background-color:transparent;cursor:pointer;transition:all 300ms ease-in-out;&:hover{transform:scale(1.3);}}div.phone-number{display:flex;p{margin:0;padding:0;}}}}&:hover,&:active{div.info{width:23%;height:47%;color:#fff;padding:1rem;transform:scale(1.05);opacity:0.9;}@media(min-width:1400px){div.info{width:23%;height:69.5%;}}@media(max-width:990px){&:hover,&:active{div.info{width:31%;height:50%;}}}@media(max-width:768px){&:hover,&:active{div.info{width:32%;height:57%;}}}@media(max-width:600px){&:hover,&:active{div.info{width:100%;height:68%;}}}}button.edit{background-color:#F26630;color:#fff;border:1px solid #F26630;font-weight:bold;font-size:1.1rem;transition:all 300ms ease-in-out;cursor:pointer;&:hover{background-color:transparent;color:#000;}}"]);

const PopularAttractions = ({
  language
}) => {
  const {
    0: user,
    1: setUser
  } = (0,external_react_.useState)();
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(false);
  const {
    0: isCreated,
    1: setIsCreated
  } = (0,external_react_.useState)(false);
  const {
    0: done,
    1: setDone
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    if (false) {}
  }, []); // Fetch all activities

  const {
    0: activities,
    1: setActivities
  } = (0,external_react_.useState)();
  (0,external_react_.useEffect)(() => {
    const fetchActivities = async () => {
      try {
        const res = await external_axios_default().get(`${"https://powerful-sunglasses-newt.cyclic.app"}/api/activities`);
        setActivities(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchActivities();
  }, [isCreated]); // Handle add activity

  const {
    0: activityImage,
    1: setActivityImage
  } = (0,external_react_.useState)();
  const {
    0: activityName,
    1: setActivityName
  } = (0,external_react_.useState)();
  const {
    0: activityAraName,
    1: setActivityAraName
  } = (0,external_react_.useState)();
  const {
    0: description,
    1: setDescription
  } = (0,external_react_.useState)();
  const {
    0: araDescription,
    1: setAraDescription
  } = (0,external_react_.useState)();
  const {
    0: activityPrice,
    1: setActivityPrice
  } = (0,external_react_.useState)(); // Create new activity

  const createActivity = async e => {
    e.preventDefault();

    try {
      setLoading(!loading);
      const data = new FormData();
      data.append("file", activityImage);
      data.append("upload_preset", "uploads");
      const uploadImage = await external_axios_default().post("https://api.cloudinary.com/v1_1/dqmqc0uaa/image/upload", data);
      const {
        url
      } = uploadImage.data;
      await external_axios_default().post(`${"https://powerful-sunglasses-newt.cyclic.app"}/api/admin/activities`, {
        image: url,
        name: [activityName, activityAraName],
        description: [description, araDescription],
        price: Number(activityPrice)
      });
      setLoading(loading);
      document.getElementById("add-activity-form").reset();
      setIsCreated(!isCreated);
      closeModal();
      setDone(!done);
      setTimeout(() => {
        setDone(done);
      }, 1500);
    } catch (error) {
      console.error(error);
    }
  };

  const openModal = () => {
    document.getElementById("add-activity-modal").style.display = "flex";
    document.querySelector("body").style.overflowY = "hidden";
  };

  const closeModal = () => {
    document.getElementById("add-activity-modal").style.display = "none";
    document.querySelector("body").style.overflowY = "auto";
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(PopularAttractions_Container, {
    id: "populart-attraction-container",
    children: [user && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
        onClick: openModal,
        className: "add-new",
        children: "\u0623\u0636\u0641 \u0648\u062C\u0647\u0629 \u062C\u062F\u064A\u062F\u0629"
      }), done && /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "success-span",
        children: "\u062A\u0645 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0648\u062C\u0647\u0629 \u0628\u0646\u062C\u0627\u062D \u2713"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        id: "add-activity-modal",
        className: "add-activity-modal",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "modal-body",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            onClick: closeModal,
            className: "close-modal",
            children: "x"
          }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
            className: "title",
            children: "\u0625\u0636\u0627\u0641\u0629 \u0648\u062C\u0647\u0629 \u062C\u062F\u064A\u062F\u0629"
          }), loading && /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "loading",
            children: "Loading..."
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
            id: "add-activity-form",
            className: "modal-content",
            onSubmit: e => createActivity(e),
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                children: "\u0627\u0633\u0645 \u0627\u0644\u0648\u062C\u0647\u0629"
              }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                type: "text",
                placeholder: "\u0639\u0631\u0628\u064A",
                onChange: e => setActivityAraName(e.target.value)
              }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                type: "text",
                placeholder: "English",
                dir: "ltr",
                onChange: e => setActivityName(e.target.value)
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                children: "\u0627\u0644\u0648\u0635\u0641"
              }), /*#__PURE__*/jsx_runtime_.jsx("textarea", {
                rows: "7",
                cols: "55",
                placeholder: "\u0639\u0631\u0628\u064A",
                onChange: e => setAraDescription(e.target.value)
              }), /*#__PURE__*/jsx_runtime_.jsx("textarea", {
                rows: "7",
                cols: "55",
                placeholder: "English",
                dir: "ltr",
                onChange: e => setDescription(e.target.value)
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                children: "\u0627\u0644\u0633\u0639\u0631"
              }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                type: "number",
                onChange: e => setActivityPrice(e.target.value)
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                children: "\u0627\u0644\u0635\u0648\u0631\u0629"
              }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                type: "file",
                onChange: e => setActivityImage(e.target.files[0])
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("button", {
              className: "confirm",
              type: "submit",
              disabled: loading ? true : false,
              children: "\u0625\u0636\u0627\u0641\u0629"
            })]
          })]
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
      children: language === "English" ? "Popular Attractions" : "افضل الوجهات"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "h-line"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      id: "hide-top"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      id: "hide-left-side"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      id: "hide-right-side"
    }), /*#__PURE__*/jsx_runtime_.jsx(sliders_PopularAttractionsSlider, {
      activities: activities,
      language: language,
      isCreated: isCreated,
      setIsCreated: setIsCreated
    })]
  });
};

/* harmony default export */ const home_PopularAttractions = (PopularAttractions);

/***/ }),

/***/ 1525:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ home_Trips)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-bootstrap-icons"
var external_react_bootstrap_icons_ = __webpack_require__(3468);
// EXTERNAL MODULE: ./components/Card.js + 1 modules
var Card = __webpack_require__(1795);
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(6517);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/sliders/TripsSlider.js









const Container = external_styled_components_default().div.withConfig({
  displayName: "TripsSlider__Container",
  componentId: "sc-l1i5cl-0"
})(["min-width:100%;height:100vh;display:flex;justify-content:center;position:relative;overflow:hidden;@media(max-width:990px){overflow-x:scroll;}@media(max-width:600px){width:100%;}"]);
const Arrow = external_styled_components_default().div.withConfig({
  displayName: "TripsSlider__Arrow",
  componentId: "sc-l1i5cl-1"
})(["width:", ";height:", ";border:", ";border-radius:", ";display:flex;background-color:", ";align-items:center;justify-content:center;position:absolute;top:17%;bottom:0;margin:auto;left:", ";right:", ";z-index:10;opacity:", ";cursor:pointer;transition:all 500ms ease;&:hover{opacity:0.8;}"], props => `${props.dimensions}`, props => `${props.dimensions}`, props => `0.5px ${props.border} #000`, props => `${props.borderRadius}`, props => `${props.bgColor}`, props => props.direction === 'left' && '1.8%', props => props.direction === 'right' && '1.8%', props => `${props.bgOpacity}`);
const Wrapper = external_styled_components_default().div.withConfig({
  displayName: "TripsSlider__Wrapper",
  componentId: "sc-l1i5cl-2"
})(["height:100%;width:100%;display:flex;align-items:center;justify-content:center;transition:1s ease;transform:translateX(", "%);"], props => props.width > 990 ? props.slideIndex * -25.3 : props.width <= 600 ? props.slideIndex * -102.5 : props.slideIndex * -33.3);
const Slide = external_styled_components_default().div.withConfig({
  displayName: "TripsSlider__Slide",
  componentId: "sc-l1i5cl-3"
})(["width:100%;height:100%;display:flex;align-items:center;justify-content:space-between;gap:1rem;@media(max-width:990px){gap:0.5rem;}"]);

const Slider = ({
  trips,
  cars,
  language
}) => {
  // Handle Rerender at screen width change: Check this answer for elaboration (https://stackoverflow.com/questions/19014250/rerender-view-on-browser-resize-with-react#:~:text=As%20of%20React,Flag)
  const {
    0: width,
    1: setWidth
  } = (0,external_react_.useState)(0);
  (0,external_react_.useEffect)(() => {
    setWidth(window.innerWidth);
    const handleResize = (0,external_lodash_.debounce)(() => setWidth(window.innerWidth), 10);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const {
    0: slideIndex,
    1: setSlideIndex
  } = (0,external_react_.useState)(0);

  const handleClick = direction => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 0);
    } // Trips
    else if (direction === 'right' && trips && width > 990) {
      setSlideIndex(trips && slideIndex + 5 <= trips.length ? slideIndex + 1 : 0);
    } else if (direction === 'right' && trips && width <= 990) {
      setSlideIndex(trips && slideIndex + 2 <= trips.length ? slideIndex + 1 : 0);
    } else if (direction === 'right' && trips && width <= 600) {
      setSlideIndex(trips && slideIndex - 2 < trips.length ? slideIndex + 1 : 0);
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [slideIndex > 0 && /*#__PURE__*/jsx_runtime_.jsx(Arrow, {
      direction: "left",
      dimensions: cars ? "2.2rem" : "2.7rem",
      border: "solid",
      borderRadius: "5px",
      bgColor: "#fff",
      onClick: () => handleClick("left"),
      children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_icons_.CaretLeft, {
        color: "#000"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(Container, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Wrapper, {
        width: width,
        slideIndex: trips && width > 990 ? slideIndex : slideIndex,
        children: /*#__PURE__*/jsx_runtime_.jsx(Slide, {
          id: "slide",
          children: trips && trips.map(trip => /*#__PURE__*/jsx_runtime_.jsx(Card/* default */.Z, {
            trip: trip,
            language: language
          }, trip._id))
        })
      })
    }), (slideIndex + 4 < trips.length && width > 990 || slideIndex + 3 < trips.length && width <= 990 || slideIndex + 1 < trips.length && width <= 600) && /*#__PURE__*/jsx_runtime_.jsx(Arrow, {
      direction: "right",
      dimensions: cars ? "2.2rem" : "2.7rem",
      border: "solid",
      borderRadius: "5px",
      bgColor: "#fff",
      onClick: () => handleClick("right"),
      children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_icons_.CaretRight, {
        color: "#000"
      })
    })]
  });
};

/* harmony default export */ const TripsSlider = (Slider);
;// CONCATENATED MODULE: ./components/home/Trips.js




const Trips_Container = external_styled_components_default().div.withConfig({
  displayName: "Trips__Container",
  componentId: "sc-tteuoz-0"
})(["max-width:100VW;height:100vh;display:flex;flex-flow:column nowrap;align-items:center;position:relative;padding-inline:3rem;padding-top:3rem;overflow:hidden;h1{font-size:2.5rem;margin-bottom:2rem;@media(max-width:600px){font-size:1.5rem;}}@media(min-width:1400px){margin-inline:15rem;max-height:70vh;}@media(max-width:990px){height:55vh;padding-inline:2rem;}@media(max-width:600px){height:80vh;}"]);
const Line = external_styled_components_default().div.withConfig({
  displayName: "Trips__Line",
  componentId: "sc-tteuoz-1"
})(["width:6rem;height:2px;background-color:#F26630;"]);

const Trips = ({
  language,
  trips
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Trips_Container, {
    id: "trips-section",
    language: language,
    children: [language === "English" ? /*#__PURE__*/jsx_runtime_.jsx("h1", {
      children: "Most Popular Trips"
    }) : /*#__PURE__*/jsx_runtime_.jsx("h1", {
      children: "\u0627\u0644\u0631\u062D\u0644\u0627\u062A \u0627\u0644\u0627\u0639\u0644\u0649 \u062A\u0642\u064A\u064A\u0645"
    }), /*#__PURE__*/jsx_runtime_.jsx(Line, {}), /*#__PURE__*/jsx_runtime_.jsx(TripsSlider, {
      trips: trips,
      language: language
    })]
  });
};

/* harmony default export */ const home_Trips = (Trips);

/***/ }),

/***/ 2748:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_home_AboutUs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3231);
/* harmony import */ var _components_home_Badges__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3932);
/* harmony import */ var _components_home_Camps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2097);
/* harmony import */ var _components_home_Cars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1181);
/* harmony import */ var _components_home_ContactUs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6426);
/* harmony import */ var _components_home_Gallery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6310);
/* harmony import */ var _components_home_Hero__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3140);
/* harmony import */ var _components_home_PopularAttractions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8255);
/* harmony import */ var _components_home_Trips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1525);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_home_ContactUs__WEBPACK_IMPORTED_MODULE_5__]);
_components_home_ContactUs__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];















function Home({
  trips,
  camps,
  language,
  onLinkClick
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("title", {
        children: "Break Trips for travel"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("meta", {
        name: "description",
        content: "travel and tourism company"
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_home_Hero__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
      onLinkClick: onLinkClick,
      language: language
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_home_Trips__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
      trips: trips,
      language: language
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_home_Badges__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      language: language
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_home_Camps__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      camps: camps,
      language: language
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_home_Cars__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      language: language
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_home_PopularAttractions__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      language: language
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_home_Gallery__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      language: language
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_home_AboutUs__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      language: language
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_home_ContactUs__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
      id: "contact-us",
      language: language
    })]
  });
}
const getServerSideProps = async () => {
  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_10___default().get(`${"https://powerful-sunglasses-newt.cyclic.app"}/api/trips`);
    const res2 = await axios__WEBPACK_IMPORTED_MODULE_10___default().get(`${"https://powerful-sunglasses-newt.cyclic.app"}/api/camps`);
    return {
      props: {
        trips: res.data,
        camps: res2.data
      }
    };
  } catch {
    return {
      notFound: true
    };
  }
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 6517:
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 3468:
/***/ ((module) => {

module.exports = require("react-bootstrap-icons");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 5641:
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3121,2383,1563,1664,5675], () => (__webpack_exec__(2748)));
module.exports = __webpack_exports__;

})();