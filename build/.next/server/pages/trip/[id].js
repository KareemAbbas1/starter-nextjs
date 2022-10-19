"use strict";
(() => {
var exports = {};
exports.id = 8807;
exports.ids = [8807];
exports.modules = {

/***/ 6875:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: ./components/sliders/images slider/ImagesSlider.js
var ImagesSlider = __webpack_require__(322);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/trip.js

const Container = external_styled_components_default().div.withConfig({
  displayName: "trip__Container",
  componentId: "sc-bekdzt-0"
})(["max-width:100vw;min-height:100vh;margin-bottom:5rem;padding-top:8rem;padding-inline:2rem;display:flex;flex-direction:", ";justify-content:space-between;gap:1.5rem;@media(min-width:1400px){padding-inline:15rem;}@media(max-width:600px){flex-direction:column;padding-inline:1rem;}div.info-container{width:65%;min-height:100vh;display:flex;flex-flow:column nowrap;@media(max-width:600px){width:100%;}div.title{display:flex;flex-direction:column;text-align:", ";@media(min-width:600px){align-items:", ";}div.title-info{width:40%;height:fit-content;display:flex;align-items:center;justify-content:space-between;div{height:3rem;margin-bottom:1.5rem;max-width:33%;h5{margin-block:0;margin-bottom:0.5rem;color:#aaa;}p{margin-block:0;margin-bottom:1.5rem;}@media(max-width:600px){min-width:60%;}}div.price,div.duration{padding-right:", ";padding-left:", ";border-right:", ";border-left:", ";@media(max-width:990px){padding-right:", ";margin-right:", ";padding-left:", ";margin-left:", ";border-right:", ";border-left:", ";}}}h1{margin-top:0;}}div.info-tabs{display:flex;flex-direction:", ";margin-top:4rem;div.tab{height:3rem;margin-right:0.5rem;position:relative;background-color:#fff;border:1px dashed #ccc;border-radius:5px;cursor:pointer;transition:all 300ms ease-in-out;h5{color:#000;font-size:1.1rem;margin:0;padding:1rem;cursor:pointer;}&:hover{background-color:#F26630;border:1px solid #F26630;h5{color:#fff;}}button{width:100%;border:none;background:none;}}div.active-tab{background-color:#F26630;border:1px solid #F26630;h5{color:#fff;}div.pointer{width:1rem;height:1rem;position:absolute;left:0;right:0;margin:auto;bottom:-10%;background-color:#F26630;transform:rotate(45deg);}}}div.tabs-content{padding-top:2rem;min-height:40vh;text-align:", ";div.tab-content{display:none;}div.active-tab-content{display:block;}}}div.booking{width:35%;max-height:110vh;padding-inline:1.5rem;position:-webkit-sticky;position:sticky;top:0;display:flex;flex-direction:column;align-items:", ";text-align:", ";border:1px dashed #ccc;@media(min-width:1450px){height:fit-content;padding-bottom:3rem;}@media(max-width:600px){width:100%;padding-inline:0rem;border:none;border-top:1px dashed #ccc;}div.date{width:100%;div{max-width:100%;height:4rem;margin-bottom:1rem;padding-inline:0.5rem;display:flex;flex-direction:", ";align-items:center;justify-content:space-between;background-color:#f8f8f8;border-radius:5px;}}form{width:100%;label{cursor:pointer;}div.tickets{width:100%;margin-bottom:2rem;padding-bottom:2rem;border-bottom:1px dashed #ccc;div.adults-count,div.children-count{width:100%;height:4rem;display:flex;flex-direction:", ";justify-content:space-between;align-items:center;select{width:4rem;height:1.7rem;}}}div.extra-facilities{width:100%;margin-bottom:2rem;padding-bottom:1rem;border-bottom:1px dashed #ccc;label{margin-inline:0.5rem;}}button{width:100%;font-size:1.2rem;font-weight:bold;height:3rem;color:#fff;background-color:#F26630;border:none;transition:all 300ms ease-in-out;cursor:pointer;&:hover{opacity:0.5;}&:disabled{opacity:0.5;cursor:auto;}}}}"], ({
  language
}) => language === "English" ? "row" : "row-reverse", ({
  language
}) => language === "English" ? "left" : "right", ({
  language
}) => language === "English" ? "flex-start" : "flex-end", ({
  language
}) => language === "English" && "3rem", ({
  language
}) => language === "العربية" && "3rem", ({
  language
}) => language === "English" && "1px dashed #ccc", ({
  language
}) => language === "العربية" && "1px dashed #ccc", ({
  language
}) => language === "English" && "1rem", ({
  language
}) => language === "English" && "1rem", ({
  language
}) => language === "العربية" && "1rem", ({
  language
}) => language === "العربية" && "1rem", ({
  language
}) => language === "English" && "1px dashed #ccc", ({
  language
}) => language === "العربية" && "1px dashed #ccc", ({
  language
}) => language === "English" ? "row" : "row-reverse", ({
  language
}) => language === "English" ? "left" : "right", ({
  language
}) => language === "English" ? "flex-start" : "flex-end", ({
  language
}) => language === "English" ? "left" : "right", ({
  language
}) => language === "English" ? "row" : "row-reverse", ({
  language
}) => language === "English" ? "row" : "row-reverse");
const AccordionButton = external_styled_components_default().button.withConfig({
  displayName: "trip__AccordionButton",
  componentId: "sc-bekdzt-1"
})(["width:100%;display:flex;flex-direction:", ";align-items:center;background-color:transparent;border:none;border-bottom:1px solid rgb(207,207,207);cursor:pointer;h2{margin:0.7rem 0rem;}div.arrow{margin-inline:1rem;transition:all 300ms ease-in-out;}"], ({
  language
}) => language === "English" ? "row" : "row-reverse");
const AccordionPanel = external_styled_components_default().div.withConfig({
  displayName: "trip__AccordionPanel",
  componentId: "sc-bekdzt-2"
})(["display:none;overflow:hidden;"]);
// EXTERNAL MODULE: external "react-bootstrap-icons"
var external_react_bootstrap_icons_ = __webpack_require__(3468);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./pages/trip/[id].js









const getServerSideProps = async ({
  params
}) => {
  try {
    const res = await external_axios_default().get(`${"https://powerful-sunglasses-newt.cyclic.app"}/api/trips/${params.id}`);
    const data = await res.data;
    return {
      props: {
        trip: data
      }
    };
  } catch (error) {
    return {
      notFound: true
    };
  }
};

const Trip = ({
  language,
  trip
}) => {
  // Extract Data
  const tripId = trip && trip._id;
  const title = trip && trip.title[0];
  const araTitle = trip && trip.title[1];
  const price = trip && trip.price;
  const duration = trip && trip.duration;
  const maxPeople = trip && trip.maxPeople;
  const images = trip && trip.images;
  const startDate = trip && trip.startDate;
  const endDate = trip && trip.endDate;
  const facility1 = trip && trip.extraOptions.length !== 0 && trip.extraOptions[0].text[0];
  const araFacility1 = trip && trip.extraOptions.length !== 0 && trip.extraOptions[0].text[1];
  const facilityOnePrice = trip && trip.extraOptions.length !== 0 && trip.extraOptions[0].price;
  const facility2 = trip && trip.extraOptions.length > 1 && trip.extraOptions[1].text[0];
  const araFacility2 = trip && trip.extraOptions.length > 1 && trip.extraOptions[1].text[1];
  const facilityTwoPrice = trip && trip.extraOptions.length > 1 && trip.extraOptions[1].price;
  const facility3 = trip && trip.extraOptions.length > 2 && trip.extraOptions[2].text[0];
  const araFacility3 = trip && trip.extraOptions.length > 2 && trip.extraOptions[2].text[1];
  const facilityThreePrice = trip && trip.extraOptions.length > 2 && trip.extraOptions[2].price;
  const overview = trip && trip.overview[0];
  const araOverview = trip && trip.overview[1];
  const state = trip && trip.state[0];
  const araState = trip && trip.state[1];
  const {
    0: toggleActiveTab,
    1: setToggleActiveTab
  } = (0,external_react_.useState)(1); // Handle toggle accordion

  const toggleAccordion = (panelID, buttonID, arrowID) => {
    let accordion = document.getElementById(panelID);
    let button = document.getElementById(buttonID);
    let arrow = document.getElementById(arrowID);

    if (accordion.style.display === "none") {
      arrow.style.transform = "rotate(-0.5turn)";
      accordion.style.display = "block";
      button.style.backgroundColor = "rgba(0, 0, 0, 2%)";
    } else {
      arrow.style.transform = "rotate(0)";
      accordion.style.display = "none";
      button.style.backgroundColor = "transparent";
    }

    ;
  }; // Handle disable book now button


  (0,external_react_.useEffect)(() => {
    const handleDisableBtn = () => {
      if (state == "Closed") {
        document.getElementById('book-now').disabled = true;
      }
    };

    handleDisableBtn();
  }, [state]);
  /* Trip Checkout */

  const {
    0: adultsTickets,
    1: setAdultsTickets
  } = (0,external_react_.useState)(0);
  const {
    0: childrenTickets,
    1: setChildrenTickets
  } = (0,external_react_.useState)(0);
  const {
    0: tripExtraOptions,
    1: setTripExtraOptions
  } = (0,external_react_.useState)([]);
  const router = (0,router_.useRouter)(); // Extract extra options data

  const getExtraOption = (e, optionText, optionPrice) => {
    let newEl = {
      text: optionText,
      price: optionPrice
    },
        newArr,
        elIndex;

    if (e.target.checked === true) {
      newArr = [...tripExtraOptions, newEl];
      setTripExtraOptions(newArr);
    } else {
      elIndex = tripExtraOptions.findIndex(option => option.text[0] === newEl.text[0]);

      if (elIndex > -1) {
        tripExtraOptions.splice(elIndex, 1);
        newArr = [...tripExtraOptions];
        setTripExtraOptions(newArr);
      }
    }
  }; // Handle checkout 


  const {
    0: noTicketsSelected,
    1: setNoTicketsSelected
  } = (0,external_react_.useState)(false);

  const handleCheckout = e => {
    e.preventDefault();

    if (adultsTickets === 0 || adultsTickets === '') {
      return setNoTicketsSelected(true);
    } else {
      const tripSubmitionData = JSON.stringify({
        price: price,
        duration: duration,
        startDate: startDate,
        tickets: {
          adults: Number(adultsTickets),
          children: Number(childrenTickets)
        },
        extraOptions: tripExtraOptions,
        tirpTitle: [title, araTitle],
        tripId: tripId
      });
      localStorage.setItem("Trip submition data", tripSubmitionData);
      router.push('/tripCheckout');
    }
  };
  /* End Trip Checkout */


  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container, {
    language: language,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "info-container",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "title",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
          children: language === "English" ? title : araTitle
        }), language === "English" ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "title-info",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "price",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
              children: "From"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
              children: ["$", price]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "duration",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
              children: "Duration"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
              children: [duration, " Days"]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "people",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
              children: "Max People"
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: maxPeople
            })]
          })]
        }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "title-info",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "people",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
              children: "\u0639\u062F\u062F \u0627\u0644\u0627\u0634\u062E\u0627\u0635"
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: maxPeople
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "duration",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
              children: "\u0627\u0644\u0645\u062F\u0629"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
              children: [duration, " \u0627\u064A\u0627\u0645"]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "price",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
              children: "\u062A\u0628\u062F\u0627 \u0645\u0646"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
              children: ["$", price]
            })]
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(ImagesSlider/* default */.Z, {
        images: images
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "info-tabs",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: toggleActiveTab === 1 ? 'tab active-tab' : 'tab',
          children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
            onClick: () => setToggleActiveTab(1),
            children: /*#__PURE__*/jsx_runtime_.jsx("h5", {
              children: language === "English" ? "Overview" : "نظرة عامة"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "pointer"
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: toggleActiveTab === 2 ? 'tab active-tab' : 'tab',
          children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
            onClick: () => setToggleActiveTab(2),
            children: /*#__PURE__*/jsx_runtime_.jsx("h5", {
              children: language === "English" ? "Trip Plan" : "برنامج الرحلة"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "pointer"
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "tabs-content",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: toggleActiveTab === 1 ? 'tab-content active-tab-content' : 'tab-content',
          children: /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: language === "English" ? overview : araOverview
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: toggleActiveTab === 2 ? 'tab-content active-tab-content' : 'tab-content',
          children: trip && trip.tripPlan.length !== 0 && trip.tripPlan.map(day => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(AccordionButton, {
              language: language,
              id: `button-${trip.tripPlan.indexOf(day) + 1}`,
              onClick: () => toggleAccordion(`day${trip.tripPlan.indexOf(day) + 1}`, `button-${trip.tripPlan.indexOf(day) + 1}`, `day${trip.tripPlan.indexOf(day) + 1}-arrow`),
              children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
                children: language === "English" ? `Day ${trip.tripPlan.indexOf(day) + 1}` : `اليوم ${trip.tripPlan.indexOf(day) + 1}`
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                id: `day${trip.tripPlan.indexOf(day) + 1}-arrow`,
                className: "arrow",
                children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_icons_.CaretUp, {
                  size: 20
                })
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx(AccordionPanel, {
              id: `day${trip.tripPlan.indexOf(day) + 1}`,
              children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: language === "English" ? day[0] : day[1]
              })
            })]
          }, `${trip.tripPlan.indexOf(day)}tirp-plan`))
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "booking",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "date",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
          style: {
            textDecoration: state == "Closed" && 'line-through'
          },
          children: [language === "English" ? "Book This Trip" : "احجز هذه الرحلة", state == "Closed" && /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
            children: [" ", language === "English" ? `(${state})` : `(${araState})`]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            children: language === "English" ? "Start Date:" : "تاريخ البدء"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: startDate
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            children: language === "English" ? "End Date:" : "تاريخ الانتهاء"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: endDate
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
        onSubmit: e => handleCheckout(e),
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "tickets",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
            children: language === "English" ? "Tickets" : "التذاكر"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "adults-count",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "adults",
              children: language === "English" ? "Adults(18+ years):" : ":بالغين(18+)"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("select", {
              name: "adults",
              id: "adults",
              onChange: e => {
                setAdultsTickets(e.target.value);
                setNoTicketsSelected(false);
              },
              children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "",
                children: "0"
              }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "1",
                children: "1"
              }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "2",
                children: "2"
              }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "3",
                children: "3"
              }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "4",
                children: "4"
              }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "5",
                children: "5"
              }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "6",
                children: "6"
              }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "7",
                children: "7"
              }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "8",
                children: "8"
              }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "9",
                children: "9"
              }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "10",
                children: "10"
              })]
            })]
          }), noTicketsSelected && /*#__PURE__*/jsx_runtime_.jsx("span", {
            style: {
              color: 'red'
            },
            children: language === "English" ? "Please select at least one adult ticket!" : "!من فضلك اختر تذكرة واحدة لشخص بالغ على الأقل"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "children-count",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "children",
              children: language === "English" ? "Children(13+ years):" : ":اطفال(13+)"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("select", {
              name: "children",
              id: "children",
              onChange: e => setChildrenTickets(e.target.value),
              children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
                children: "0"
              }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "1",
                children: "1"
              }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "2",
                children: "2"
              }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "3",
                children: "3"
              }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "4",
                children: "4"
              }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "5",
                children: "5"
              }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "6",
                children: "6"
              }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "7",
                children: "7"
              }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "8",
                children: "8"
              }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "9",
                children: "9"
              }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "10",
                children: "10"
              })]
            })]
          })]
        }), trip && trip.extraOptions.length !== 0 && trip.extraOptions[0].text[0] !== "" && /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "extra-facilities",
          children: trip.extraOptions.map(option => option.text[0] !== "" && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            children: [language === "العربية" && /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
              htmlFor: option.text[0],
              children: ["$", option.text[1], " ", option.price]
            }), /*#__PURE__*/jsx_runtime_.jsx("input", {
              type: "checkbox",
              name: option.text[0],
              id: option.text[0],
              onChange: e => getExtraOption(e, option.text, option.price)
            }), language === "العربية" && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
              children: [/*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {})]
            }), language === "English" && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
                htmlFor: option.text[0],
                children: [option.text[0], " $", option.price]
              }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {})]
            })]
          }, `${trip.extraOptions.indexOf(option)}option`))
        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
          id: "book-now",
          type: "submit",
          children: language === "English" ? "Book Now" : "احجز الآن"
        })]
      })]
    })]
  });
};

/* harmony default export */ const _id_ = (Trip);

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 3468:
/***/ ((module) => {

module.exports = require("react-bootstrap-icons");

/***/ }),

/***/ 3886:
/***/ ((module) => {

module.exports = require("react-slideshow-image");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [322], () => (__webpack_exec__(6875)));
module.exports = __webpack_exports__;

})();