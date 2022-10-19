"use strict";
(() => {
var exports = {};
exports.id = 9189;
exports.ids = [9189];
exports.modules = {

/***/ 2207:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ admin_Camps)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "react-bootstrap-icons"
var external_react_bootstrap_icons_ = __webpack_require__(3468);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/admin/CampsOrders.js





const Container = external_styled_components_default().div.withConfig({
  displayName: "CampsOrders__Container",
  componentId: "sc-17h7bfi-0"
})(["width:100%;height:100%;margin:0%;table.camps-table{width:97%;margin-top:1rem;text-align:right;margin-inline:1rem;padding-inline-start:0.5rem;box-shadow:1px 0.5px 2px 1px #ccc;tbody{display:block;overflow-y:scroll;width:100%;max-height:400px;}thead,tr{width:100%;display:block;th{width:9.7%;padding-block:1rem;font-size:1.1rem;}}td{width:11.8%;height:3rem;border-left:1px solid #ccc;border-top:1px solid #ccc;select{max-width:7.5rem;margin-top:0.3rem;margin-bottom:0.3rem;text-align:center;cursor:pointer;}span.update-success{width:1.4rem;height:1.4rem;position:static;display:none;justify-content:center;align-items:center;background-color:#00D100;color:#fff;font-weight:bold;margin-right:5px;border-radius:50%;}}td.middle-td{text-align:center;}td.camp-name-cel{pre{display:inline;position:relative;right:10px;background-color:red;color:#fff;border-radius:5px;padding-inline:4px}}button{margin-top:unset;font-size:unset;padding-block:unset;margin-right:5px;border:2px solid #000;background-color:#000;color:#fff;font-weight:bold;cursor:pointer;transition:all 300ms ease-in-out;&:hover{background-color:transparent;color:#000;}}button.details{width:6rem;background-color:#00D100;border:1px solid #00D100;&:hover{background-color:transparent;}}button.delete{background-color:red;border:2.5px solid red;&:hover{background-color:transparent;}}div.order-modal{display:none;direction:", ";width:100%;height:90vh;background-color:#fff;padding-top:4rem;position:fixed;top:0;left:0;border-bottom:1px solid;z-index:10;overflow-y:scroll;span.close-modal{width:1.2rem;height:1.2rem;display:flex;justify-content:center;align-items:center;color:#fff;background-color:red;position:fixed;left:", ";margin-inline-end:2rem;margin-top:1rem;border:1px solid red;border-radius:5px;cursor:pointer;transition:all 300ms ease-in-out;&:hover{background-color:transparent;color:red;}}@media(min-width:1400px){padding-top:5rem;}}div.modal-content{width:100%;display:flex;flex-direction:column;align-items:center;text-align:center;div{width:60%;border-top:1px solid #ccc;}}div.delete-order{width:100vw;height:100vh;position:fixed;top:0;left:0;display:none;justify-content:center;align-items:center;background-color:rgba(255,255,255,0.6);div.delete-modal-body{width:30%;height:30%;background-color:#e0e0e0;display:flex;align-items:center;justify-content:center;border-radius:5px;span{position:absolute;right:35.5%;top:36%;width:1.2rem;height:1.2rem;background-color:#000;color:#fff;font-weight:bold;display:flex;align-items:center;justify-content:center;border:1px solid #000;border-radius:3px;cursor:pointer;transition:all 300ms ease-in-out;&:hover{background-color:#fff;color:#000;}}div.delete-modal-content{display:flex;flex-direction:column;p{font-size:1.2rem;font-weight:bold;}button{font-size:1.1rem;font-weight:bold;padding-block:0.3rem;background-color:red;border-color:red;&:hover{background-color:transparent;}}}}}}"], ({
  language
}) => language === "English" ? "ltr" : "rtl", ({
  language
}) => language === "English" ? "97%" : "0%");

const Orders = ({
  campOrders,
  currentCampId,
  language
}) => {
  // handle orders
  const {
    0: allOrders,
    1: setAllOrders
  } = (0,external_react_.useState)();
  const {
    0: isUpdated,
    1: setIsUpdated
  } = (0,external_react_.useState)(false); // Fetch camp's orders

  (0,external_react_.useEffect)(() => {
    const fetchCampOrders = async () => {
      try {
        const res = await external_axios_default().get(`${"https://powerful-sunglasses-newt.cyclic.app"}/api/admin/campsOrders/${currentCampId}`);
        setAllOrders(res.data.reverse());
      } catch (error) {
        console.error(error);
      }
    };

    if (currentCampId) {
      fetchCampOrders();
    }
  }, [isUpdated, currentCampId]);
  const {
    0: singleCampOrder,
    1: setSingleCampOrder
  } = (0,external_react_.useState)();
  const {
    0: orderState,
    1: setOrderState
  } = (0,external_react_.useState)(""); // Fetch single camp order

  const fetchCampOrder = async (orderId, notificaitonsSpan) => {
    try {
      const res = await external_axios_default().patch(`${"https://powerful-sunglasses-newt.cyclic.app"}/api/campOrders/${orderId}`, {
        new: false
      });
      setSingleCampOrder(res.data);
      openCampOrderModal(orderId);
      document.getElementById(notificaitonsSpan).style.display = "none";
    } catch (error) {
      console.error(error);
    }
  }; // Camp's order modal


  const openCampOrderModal = orderId => {
    Array.from(document.getElementsByClassName("order-modal")).map(el => {
      el.style.display = "block";
    });
    document.querySelector("body").style.overflowY = "hidden";
  };

  const closeCampOrderModal = orderId => {
    Array.from(document.getElementsByClassName("order-modal")).map(el => {
      el.style.display = "none";
    });
    Array.from(document.getElementsByClassName("order-modal")).map(el => {
      console.log(el.style.display);
    });
    document.querySelector("body").style.overflowY = "auto";
  }; // Update order payment state


  const updateOrderState = async (orderId, successSpanId) => {
    try {
      await external_axios_default().patch(`${"https://powerful-sunglasses-newt.cyclic.app"}/api/campOrders/${orderId}`, {
        state: orderState
      });
      setOrderState("");
      setIsUpdated(!isUpdated);
      document.getElementById(successSpanId).style.display = "inline-flex";
      setTimeout(() => {
        document.getElementById(successSpanId).style.display = "none";
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  }; // Delete Order


  const openDeleteModal = modalId => {
    document.getElementById(modalId).style.display = "flex";
    document.querySelector("body").style.overflowY = "hidden";
  };

  const closeDeleteModal = () => {
    Array.from(document.getElementsByClassName("delete-order")).map(modal => {
      modal.style.display = "none";
    });
    document.querySelector("body").style.overflowY = "auto";
  };

  const deleteOrder = async (orderId, campId, roomsIds, dateRange) => {
    try {
      // Update room availability upon deleting order
      await Promise.all(roomsIds.map(roomId => {
        external_axios_default().patch(`${"https://powerful-sunglasses-newt.cyclic.app"}/api/rooms/updateAvailability?remove=on&id=${roomId}`, {
          dates: dateRange
        });
      })); // Delete order and remove order Id from camp

      await external_axios_default()["delete"](`${"https://powerful-sunglasses-newt.cyclic.app"}/api/campOrders/${orderId}?campId=${campId}`);
      closeDeleteModal();
      setIsUpdated(!isUpdated);
    } catch (error) {
      console.error(error);
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx(Container, {
    language: language,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("table", {
      className: "camps-table",
      children: [/*#__PURE__*/jsx_runtime_.jsx("thead", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
            children: "\u0627\u0644\u0645\u062E\u064A\u0645"
          }), /*#__PURE__*/jsx_runtime_.jsx("th", {
            children: "\u0631\u0642\u0645 \u0627\u0644\u063A\u0631\u0641\u0629"
          }), /*#__PURE__*/jsx_runtime_.jsx("th", {
            children: "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0648\u0635\u0648\u0644"
          }), /*#__PURE__*/jsx_runtime_.jsx("th", {
            children: "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u063A\u0627\u062F\u0631\u0629"
          }), /*#__PURE__*/jsx_runtime_.jsx("th", {
            children: "\u0627\u0633\u0645 \u0627\u0644\u0639\u0645\u064A\u0644"
          }), /*#__PURE__*/jsx_runtime_.jsx("th", {
            children: "\u0627\u0644\u062F\u0641\u0639"
          }), /*#__PURE__*/jsx_runtime_.jsx("th", {
            children: "\u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A"
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("tbody", {
        children: allOrders && allOrders.map(campOrder => /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("td", {
            className: "camp-name-cel",
            children: [campOrder.orderDetails.camp[1], " ", campOrder.new === true && /*#__PURE__*/jsx_runtime_.jsx("pre", {
              id: `${campOrder._id}new-order`,
              children: "\u062C\u062F\u064A\u062F"
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: campOrder.orderDetails.roomsNumbers.toString()
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            className: "middle-td",
            children: campOrder.orderDetails.dates[0]
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            className: "middle-td",
            children: campOrder.orderDetails.checkout
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            className: "middle-td",
            children: `
                        ${campOrder.guestInfo.fullName.split(" ")[0]}
                        ${campOrder.guestInfo.fullName.split(" ")[campOrder.guestInfo.fullName.split(" ").length - 1]}
                        `
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("td", {
            className: "middle-td",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("select", {
              defaultValue: campOrder.state,
              onChange: e => setOrderState(e.target.value),
              children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "Not Paid",
                children: "Not Paid"
              }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "Down Payment",
                children: "Down Payment"
              }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "Paid",
                children: "Paid"
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("button", {
              onClick: () => updateOrderState(campOrder._id, `${campOrder._id}update-success`),
              children: "\u062A\u062D\u062F\u064A\u062B"
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              id: `${campOrder._id}update-success`,
              className: "update-success",
              children: "\u2713"
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            className: "middle-td",
            children: campOrder.orderDetails.total
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("td", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
              className: "details",
              onClick: () => fetchCampOrder(campOrder._id, `${campOrder._id}new-order`),
              children: "\u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              id: `${campOrder._id}camp-order-modal`,
              className: "order-modal",
              language: language,
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "order-modal-body",
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "close-modal",
                  onClick: () => closeCampOrderModal(`${campOrder._id}camp-order-modal`),
                  children: "x"
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "modal-content",
                  language: language,
                  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h2", {
                    style: {
                      width: '100%',
                      marginTop: '4rem'
                    },
                    children: ["# ", singleCampOrder && singleCampOrder._id]
                  }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
                    style: {
                      width: '100%'
                    },
                    children: language === "English" ? `
                                  Reservation at ${singleCampOrder && singleCampOrder.orderDetails.camp[0]} ---
                                  Checkin ${singleCampOrder && singleCampOrder.orderDetails.dates[0]} ---
                                  Checkout ${singleCampOrder && singleCampOrder.orderDetails.checkout}
                                  ` : `
                                  حجز في ${singleCampOrder && singleCampOrder.orderDetails.camp[1]} --- 
                                  تاريخ الوصول ${singleCampOrder && singleCampOrder.orderDetails.dates[0]} --- 
                                  تاريخ المغادرة ${singleCampOrder && singleCampOrder.orderDetails.checkout}
                                  `
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
                      children: language === "English" ? `State: ${singleCampOrder && singleCampOrder.state}` : `حالة الدفع: ${singleCampOrder && singleCampOrder.state}`
                    })
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
                      children: language === "English" ? "Client Info" : "بيانات العميل"
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
                      children: [language === "English" ? "Client Name: " : "إسم العميل: ", singleCampOrder && singleCampOrder.guestInfo.fullName]
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
                      children: [language === "English" ? "Email: " : "البريد الإلكتروني: ", singleCampOrder && singleCampOrder.guestInfo.email]
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
                      children: [language === "English" ? "Phone number: " : "رقم التيليفون: ", singleCampOrder && singleCampOrder.guestInfo.phoneNumber]
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
                      children: language === "English" ? "Order Details" : "تفاصيل الحجز"
                    }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
                      children: language === "English" ? "Guests Count: " : "عدد الضيوف: "
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      style: {
                        width: '100%',
                        display: "flex",
                        justifyContent: 'space-between'
                      },
                      children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
                        children: language === "English" ? `Adults: ${singleCampOrder && singleCampOrder.orderDetails.guestsCount.adults}` : `بالغين: ${singleCampOrder && singleCampOrder.orderDetails.guestsCount.adults}`
                      }), /*#__PURE__*/jsx_runtime_.jsx("h4", {
                        children: language === "English" ? `Children: 
                                      ${singleCampOrder && singleCampOrder.orderDetails.guestsCount.children === "" ? "---" : singleCampOrder && singleCampOrder.orderDetails.guestsCount.children}` : `اطفال: 
                                  ${singleCampOrder && singleCampOrder.orderDetails.guestsCount.children === "" ? "---" : singleCampOrder && singleCampOrder.orderDetails.guestsCount.children}`
                      })]
                    }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
                      children: language === "English" ? "Rooms: " : "الغرف: "
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      style: {
                        width: '100%',
                        display: "flex",
                        justifyContent: 'space-between',
                        borderBottom: '1px solid #000'
                      },
                      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h4", {
                        children: [singleCampOrder && singleCampOrder.orderDetails.rooms.doubleRooms.split(" ")[0] !== "0" && singleCampOrder.orderDetails.rooms.doubleRooms.split(" ")[0] !== "false" && `${singleCampOrder.orderDetails.rooms.doubleRooms}, `, singleCampOrder && singleCampOrder.orderDetails.rooms.bungalows.split(" ")[0] !== "0" && singleCampOrder.orderDetails.rooms.bungalows.split(" ")[0] !== "false" && `${singleCampOrder.orderDetails.rooms.bungalows}, `, singleCampOrder && singleCampOrder.orderDetails.rooms.huts.split(" ")[0] !== "0" && singleCampOrder.orderDetails.rooms.huts.split(" ")[0] !== "false" && `${singleCampOrder.orderDetails.rooms.huts}`]
                      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h4", {
                        children: [language === "English" ? "Rooms Numbers: " : "أرقام الغرف: ", singleCampOrder && singleCampOrder.orderDetails.roomsNumbers.length > 1 ? singleCampOrder && singleCampOrder.orderDetails.roomsNumbers.toString() : singleCampOrder && singleCampOrder.orderDetails.roomsNumbers]
                      })]
                    }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
                      children: language === "English" ? "Rooms Prices per nights:" : "أسعار الغرف :"
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      style: {
                        width: '100%',
                        borderBottom: '1px solid #000'
                      },
                      children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
                        children: singleCampOrder && singleCampOrder.orderDetails.rooms.doubleRooms.split(" ")[0] !== "0" && singleCampOrder.orderDetails.rooms.doubleRooms.split(" ")[0] !== "false" && `${singleCampOrder.orderDetails.rooms.doubleRooms}
                                    x $${singleCampOrder.orderDetails.roomsPrices.roomPrice} per night 
                                    x ${singleCampOrder.orderDetails.dates.length} nights
                                    = $${singleCampOrder && Number(singleCampOrder.orderDetails.rooms.doubleRooms.split(" ")[0]) * singleCampOrder.orderDetails.roomsPrices.roomPrice * singleCampOrder.orderDetails.dates.length}
                                    `
                      }), /*#__PURE__*/jsx_runtime_.jsx("h4", {
                        children: singleCampOrder && singleCampOrder.orderDetails.rooms.bungalows.split(" ")[0] !== "0" && singleCampOrder.orderDetails.rooms.bungalows.split(" ")[0] !== "false" && `${singleCampOrder.orderDetails.rooms.bungalows}
                                    x $${singleCampOrder.orderDetails.roomsPrices.bungalowPrice} per night 
                                    x ${singleCampOrder.orderDetails.dates.length} nights
                                    = $${singleCampOrder && Number(singleCampOrder.orderDetails.rooms.bungalows.split(" ")[0]) * singleCampOrder.orderDetails.roomsPrices.bungalowPrice * singleCampOrder.orderDetails.dates.length}
                                    `
                      }), /*#__PURE__*/jsx_runtime_.jsx("h4", {
                        children: singleCampOrder && singleCampOrder.orderDetails.rooms.huts.split(" ")[0] !== "0" && singleCampOrder.orderDetails.rooms.huts.split(" ")[0] !== "false" && `${singleCampOrder.orderDetails.rooms.huts}
                                    x $${singleCampOrder.orderDetails.roomsPrices.hutPrice} per night 
                                    x ${singleCampOrder.orderDetails.dates.length} nights
                                    = $${singleCampOrder && Number(singleCampOrder.orderDetails.rooms.huts.split(" ")[0]) * singleCampOrder.orderDetails.roomsPrices.hutPrice * singleCampOrder.orderDetails.dates.length}
                                    `
                      })]
                    }), singleCampOrder && singleCampOrder.orderDetails.dinnerData.dinner === "on" ? /*#__PURE__*/jsx_runtime_.jsx("h3", {
                      children: language === "English" ? `Dinner: (${singleCampOrder && singleCampOrder.orderDetails.guestsCount.adults} people)` : "وجبة العشاء:"
                    }) : /*#__PURE__*/jsx_runtime_.jsx("h3", {
                      children: language === "English" ? "Dinner: Not Included" : "غير شامل العشاء"
                    }), singleCampOrder && singleCampOrder.orderDetails.dinnerData.dinner === "on" && /*#__PURE__*/jsx_runtime_.jsx("div", {
                      style: {
                        width: '100%',
                        borderBottom: '1px solid #000'
                      },
                      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("h4", {
                        children: [singleCampOrder && singleCampOrder.orderDetails.guestsCount.adults, " people x $", singleCampOrder && singleCampOrder.orderDetails.dinnerData.dinnerPrice, " per person = $", singleCampOrder && singleCampOrder.orderDetails.dinnerData.dinnerPrice * singleCampOrder.orderDetails.guestsCount.adults, " per night", /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), "$", singleCampOrder && singleCampOrder.orderDetails.dinnerData.dinnerPrice * singleCampOrder.orderDetails.guestsCount.adults, " x ", singleCampOrder && singleCampOrder.orderDetails.dates.length, " nights = $", singleCampOrder && singleCampOrder.orderDetails.dinnerData.dinnerPrice * singleCampOrder.orderDetails.guestsCount.adults * singleCampOrder.orderDetails.dates.length]
                      })
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      style: {
                        width: '100%',
                        borderBottom: '1px solid #000'
                      },
                      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                        children: language === "English" ? "Total: " : "الإجمالي: "
                      }), singleCampOrder && singleCampOrder.orderDetails.rooms.doubleRooms.split(" ")[0] !== "0" && singleCampOrder.orderDetails.rooms.doubleRooms.split(" ")[0] !== "false" && /*#__PURE__*/(0,jsx_runtime_.jsxs)("h4", {
                        children: [singleCampOrder && singleCampOrder.orderDetails.rooms.doubleRooms.split(" ")[0], " Double Room = $", singleCampOrder && Number(singleCampOrder.orderDetails.rooms.doubleRooms.split(" ")[0]) * singleCampOrder.orderDetails.roomsPrices.roomPrice * singleCampOrder.orderDetails.dates.length]
                      }), singleCampOrder && singleCampOrder.orderDetails.rooms.bungalows.split(" ")[0] !== "0" && singleCampOrder.orderDetails.rooms.bungalows.split(" ")[0] !== "false" && /*#__PURE__*/(0,jsx_runtime_.jsxs)("h4", {
                        children: [singleCampOrder && singleCampOrder.orderDetails.rooms.bungalows.split(" ")[0], " Bungalows = $", singleCampOrder && Number(singleCampOrder.orderDetails.rooms.bungalows.split(" ")[0]) * singleCampOrder.orderDetails.roomsPrices.bungalowPrice * singleCampOrder.orderDetails.dates.length]
                      }), singleCampOrder && singleCampOrder.orderDetails.rooms.huts.split(" ")[0] !== "0" && singleCampOrder.orderDetails.rooms.huts.split(" ")[0] !== "false" && /*#__PURE__*/(0,jsx_runtime_.jsxs)("h4", {
                        children: [singleCampOrder && singleCampOrder.orderDetails.rooms.huts.split(" ")[0], " Hut = $", singleCampOrder && Number(singleCampOrder.orderDetails.rooms.huts.split(" ")[0]) * singleCampOrder.orderDetails.roomsPrices.hutPrice * singleCampOrder.orderDetails.dates.length]
                      }), singleCampOrder && singleCampOrder.orderDetails.dinnerData.dinner === "on" && /*#__PURE__*/(0,jsx_runtime_.jsxs)("h4", {
                        children: ["Dinner = $", singleCampOrder && singleCampOrder.orderDetails.dinnerData.dinnerPrice * singleCampOrder.orderDetails.guestsCount.adults * singleCampOrder.orderDetails.dates.length]
                      })]
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      style: {
                        width: '100%'
                      },
                      children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
                        children: singleCampOrder && singleCampOrder.orderDetails.total
                      })
                    })]
                  })]
                })]
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("td", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
              onClick: () => openDeleteModal(`${campOrder._id}delete`),
              className: "delete",
              children: "\u0645\u0633\u062D"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              id: `${campOrder._id}delete`,
              className: "delete-order",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "delete-modal-body",
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "close-modal",
                  onClick: closeDeleteModal,
                  children: "x"
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "delete-modal-content",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                    children: "\u0647\u0644 \u062A\u0631\u064A\u062F \u0625\u0632\u0627\u0644\u0629 \u0647\u0630\u0627 \u0627\u0644\u062D\u062C\u0632\u061F"
                  }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                    onClick: () => deleteOrder(campOrder._id, campOrder.campId, campOrder.roomsIds, campOrder.orderDetails.dates),
                    children: "\u0627\u0645\u0633\u062D \u0627\u0644\u062D\u062C\u0632"
                  })]
                })]
              })
            })]
          })]
        }, campOrder._id))
      })]
    })
  });
};

/* harmony default export */ const CampsOrders = (Orders);
;// CONCATENATED MODULE: ./components/admin/Camps.js








const Camps_Container = external_styled_components_default().div.withConfig({
  displayName: "Camps__Container",
  componentId: "sc-mzrh92-0"
})(["width:100%;height:100%;margin:0%;div.header{display:flex;justify-content:space-between;align-items:center;padding-inline:1rem;border-bottom:1px solid #ccc;h1{margin-top:0;margin-bottom:0;padding-top:1.1rem;}button{font-size:1.1rem;font-weight:bold;padding-block:0.4rem;background-color:#000;color:#fff;cursor:pointer;transition:all 300ms ease-in-out;&:hover{background-color:transparent;color:#000;}}}table{width:97%;margin-top:1rem;text-align:right;margin-inline:1rem;padding-inline:0.5rem;box-shadow:1px 0.5px 2px 1px #ccc;thead{width:100%;th{width:25%;padding-block:1rem;font-size:1.1rem;}}td{height:3.5rem;border-top:1px solid #ccc;span.order-notifications{width:1.3rem;height:1.3rem;display:inline-flex;justify-content:center;align-items:center;background-color:red;color:#fff;font-size:0.8rem;border-radius:50%;position:relative;left:10px;top:-10px;}div.delete-modal{width:100vw;height:100vh;position:fixed;top:0;left:0;display:none;justify-content:center;align-items:center;background-color:rgba(255,255,255,0.6);z-index:20;div.delete-modal-body{width:30%;height:30%;background-color:#e0e0e0;display:flex;align-items:center;justify-content:center;border-radius:5px;span{position:absolute;right:35.5%;top:36%;width:1.2rem;height:1.2rem;background-color:#000;color:#fff;font-weight:bold;display:flex;align-items:center;justify-content:center;border:1px solid #000;border-radius:3px;cursor:pointer;transition:all 300ms ease-in-out;&:hover{background-color:#fff;color:#000;}}div.delete-modal-content{display:flex;flex-direction:column;p{font-size:1.2rem;font-weight:bold;}button{font-size:1.1rem;font-weight:bold;padding-block:0.3rem;background-color:red;border-color:red;&:hover{background-color:transparent;}}}}}}select{cursor:pointer;}button{margin-right:10px;background-color:#000;color:#fff;font-weight:bold;cursor:pointer;transition:all 300ms ease-in-out;&:hover{background-color:transparent;color:#000;}}button.camp-rooms{margin-right:unset;}button.camp-details{width:5rem;margin-right:unset;margin-left:1rem;background-color:#00D100;border:2.5px solid #00D100;&:hover{background-color:transparent;}}button.delete-camp{background-color:red;margin-right:unset;border:2.5px solid red;&:hover{background-color:transparent;}}}div.camp-modal{display:none;direction:ltr;width:100%;height:90vh;background-color:rgba(255,255,255,0.6);padding-top:4rem;position:fixed;top:0;left:0;border-bottom:1px solid;@media(min-width:1400px){padding-top:5rem;}div.rooms-tabs{width:19.95%;height:100%;float:right;direction:rtl;background-color:#fff;border-left:1px solid #ccc;h4{padding-right:0.5rem;margin-bottom:0;padding-bottom:1rem;color:grey;border-bottom:1px solid #ccc;}div.tab{height:3rem;position:relative;background-color:#fff;border-bottom:1px dashed #ccc;cursor:pointer;transition:all 300ms ease-in-out;h5{width:90%;color:#000;font-size:1.1rem;margin:0;padding:1rem;text-align:right;cursor:pointer;@media(max-width:600px){font-size:0.9rem;padding:0.9rem 0.1rem;}}&:hover{background-color:#000;border-color:#000;h5{color:#fff;}}button{width:100%;border:none;background:none;}}div.active-tab{background-color:#000;border:1px solid #000;h5{color:#fff;}}div.tabs-content{width:100%;min-height:100vh;div.tab-content{display:none;}div.active-tab-content{display:block;}}}div.modal-body{width:79.8%;height:100%;padding-top:1rem;background-color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:space-between;span{width:1rem;height:1rem;position:absolute;left:77.5%;bottom:85.5%;background-color:#000;color:#fff;display:flex;align-items:center;justify-content:center;border:1px solid;border-radius:5px;cursor:pointer;transition:all 300ms ease;&:hover{background-color:transparent;color:#000;border:1px solid #000;}}div.footer{width:79%;position:absolute;bottom:0;left:0;background-color:#fff;display:flex;flex-direction:row-reverse;justify-content:space-between;align-items:center;padding-block:0.8rem;border:1px solid #ccc;button{margin-inline:1rem;font-size:1.1rem;padding:0.2rem 0.5rem;cursor:pointer;transition:all 300ms ease-in-out;}button.add{background-color:#000;color:#fff;&:hover{background-color:transparent;color:#000;}}button#edit{background-color:#000;color:#fff;width:7rem;font-size:1.2rem;font-weight:bold;&:hover{background-color:transparent;color:#000;}}button.delete{padding-inline:1rem;&:hover{background-color:#000;color:#fff;}}}button.cancel{background-color:unset;color:unset;&:hover{background-color:#000;color:#fff}}div.orders-modal-body{width:100%;direction:rtl;span.update-success{width:1.4rem;height:1.4rem;position:static;display:none;justify-content:center;align-items:center;background-color:#00D100;color:#fff;font-weight:bold;margin-right:5px;border-radius:50%;}h2{margin-top:0;text-align:center;}}}}div.camp-details-body{width:80.5vw;overflow-y:scroll;form{max-width:100%;padding-inline:1rem;padding-bottom:7rem;display:flex;flex-flow:row-reverse wrap;gap:1rem;h3{text-align:right;}h4{text-align:right;}label{cursor:pointer;}input{padding:0.5rem 0.5rem;margin-bottom:0.5rem;}textarea{resize:none;margin-left:1rem;font-size:1rem;padding:0.5rem;}div.new-rules{max-width:79vw;display:flex;align-items:center;}button.add-rule{font-size:1rem;font-weight:bold;background-color:#00D100;color:#fff;cursor:pointer;transition:all 300ms ease-in-out;&:hover{background-color:transparent;color:#000}}pre.delete-rule{height:1.7rem;padding-inline:0.6rem;display:flex;align-items:center;justify-content:center;border:1px solid red;border-radius:50%;font-size:0.8rem;color:#fff;background-color:red;cursor:pointer;transition:all 300ms ease-in-out;&:hover{background-color:transparent;color:red;}}div.rooms-numbers-container{width:100%;padding-top:1rem;direction:rtl;display:flex;gap:2rem;border-top:1px solid #ccc;div.dates-tabs{padding-left:1rem;border-left:1px solid #ccc;h4.dates-tab{padding:1rem;border:1px solid #000;border-radius:5px;cursor:pointer;transition:all 300ms ease-in-out;&:hover{background-color:#000;color:#fff;}}h4.active-dates-tab{background-color:#000;color:#fff;&:hover{background-color:transparent;color:#000;}}}div.dates-tabs-content{div.dates-tab-content{display:none;width:64vw;height:fit-content;max-height:86%;border:1px solid #ccc;overflow-y:scroll;}div.active-dates-tab-content{display:flex;flex-flow:row wrap;div{width:13.2%;height:1rem;display:flex;align-items:center;padding-block:1rem;padding-inline-start:0.5rem;border-left:1px solid #ccc;border-bottom:1px solid #ccc;cursor:pointer;&:hover{background-color:#ccc;}input{width:1rem;height:1rem;}}div.add-date{width:26.5%;padding-inline:0.5rem;justify-content:space-around;align-items:baseline;input{width:6rem;height:0.6rem;margin-bottom:1rem;}button.add-date-btn{padding-block:0.2rem;font-size:1rem;margin-bottom:1rem;background-color:#00D100;border:1px solid #00D100;color:#fff;cursor:pointer;transition:all 300ms ease-in-out;&:hover{background-color:#fff;color:#000;}}}}button.delete-dates{width:14%;min-height:3rem;justify-self:flex-end;font-size:1rem;font-weight:bold;background-color:red;color:#fff;border:1px solid red;cursor:pointer;transition:all 300ms ease-in-out;&:hover{background-color:transparent;color:#000;}}}}}input.image-input{width:45vw;padding-block:0.7rem;}input.upload-image{border:1px solid #ccc;width:25vw;margin-right:2vw;cursor:pointer;}label.delete-img-url{padding:0.23rem 0.5rem;background-color:red;color:#fff;font-weight:bold;border:1px solid red;border-radius:50%;transition:all 300ms ease-in-out;&:hover{background-color:transparent;color:red;}}}div.loading{position:absolute;top:0;left:0;z-index:10;width:79%;height:100%;background-color:rgba(255,255,255,0.6);display:flex;align-items:center;justify-content:center;font-size:2rem;font-weight:bold;}"]);

const Camps = ({
  language,
  newCampsordersList
}) => {
  const {
    0: camps,
    1: setCamps
  } = (0,external_react_.useState)();
  const {
    0: camp,
    1: setCamp
  } = (0,external_react_.useState)(); // Pass current camp id to the orders component to fetch orders

  const {
    0: campIdFetchOrders,
    1: setCampIdFetchOrders
  } = (0,external_react_.useState)();
  const {
    0: campRooms,
    1: setCampRooms
  } = (0,external_react_.useState)([]);
  const {
    0: reFetchRoomsCampId,
    1: setReFetchRoomsCampId
  } = (0,external_react_.useState)();
  const {
    0: isCreated,
    1: setIsCreated
  } = (0,external_react_.useState)(false);
  const {
    0: isDeleted,
    1: setIsDeleted
  } = (0,external_react_.useState)(false);
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(false); // Fetch all Camps

  (0,external_react_.useEffect)(() => {
    const fetchCamps = async () => {
      try {
        const allCamps = await external_axios_default().get(`${"https://powerful-sunglasses-newt.cyclic.app"}/api/camps`);
        setCamps(allCamps.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCamps();
  }, [isCreated, isDeleted]);
  /* Create new camp */
  //- Camp name

  const {
    0: campName,
    1: setCampName
  } = (0,external_react_.useState)("");
  const {
    0: campAraName,
    1: setCampAraName
  } = (0,external_react_.useState)(""); //- Camp address

  const {
    0: campAddress,
    1: setCampAddress
  } = (0,external_react_.useState)("");
  const {
    0: campAraAddress,
    1: setCampAraAddress
  } = (0,external_react_.useState)(""); //- Camp rate

  const {
    0: rate,
    1: setRate
  } = (0,external_react_.useState)(0); //- Lunch price

  const {
    0: lunchPrice,
    1: setLunchPrice
  } = (0,external_react_.useState)(0); //- Facilities

  const {
    0: facilities,
    1: setFacilities
  } = (0,external_react_.useState)([]);
  const {
    0: araFacilities,
    1: setAraFacilities
  } = (0,external_react_.useState)([]); //- House rules

  const {
    0: houseRules,
    1: setHouseRules
  } = (0,external_react_.useState)([]);
  const {
    0: araHouseRules,
    1: setAraHouseRules
  } = (0,external_react_.useState)([]); //- Camp description

  const {
    0: description,
    1: setDescription
  } = (0,external_react_.useState)("");
  const {
    0: araDescription,
    1: setAraDescription
  } = (0,external_react_.useState)(""); //- Images

  const {
    0: files,
    1: setFiles
  } = (0,external_react_.useState)(); //--- Handle add facilities ---//
  // Create new input for new services

  const {
    0: servicesArray,
    1: setServicesArray
  } = (0,external_react_.useState)([1, 2, 3]);

  const addservice = e => {
    e.preventDefault();
    const newEl = servicesArray[servicesArray.length - 1] + 1;
    const newArr = [...servicesArray, newEl];
    setServicesArray(newArr);
  };

  const deleteService = () => {
    servicesArray.pop();
    const newArr = [...servicesArray];
    setServicesArray(newArr);
  }; //--- End Handle add services ---//
  //--- Handle add rule ---//
  // Create new input for new rules


  const {
    0: rulesArray,
    1: setRulesArray
  } = (0,external_react_.useState)([1, 2]);

  const addrule = e => {
    e.preventDefault();
    const newEl = rulesArray[rulesArray.length - 1] + 1;
    const newArr = [...rulesArray, newEl];
    setRulesArray(newArr);
  };

  const deleteRule = () => {
    rulesArray.pop();
    const newArr = [...rulesArray];
    setRulesArray(newArr);
  }; //--- End Handle add rule ---//
  //--- Handle add facilities and rules content
  // add new items to array


  const addItemsToArray = (arr, id) => {
    let newArr = [],
        newEl;

    for (let i = 1; i <= arr.length; i++) {
      newEl = document.getElementById(`${i}${id}`).value;
      newArr = [...newArr, newEl];
    }

    return newArr;
  }; // Open/close create-camp-modal


  const openModal = () => {
    document.getElementById('add-camp-modal').style.display = "block";
    document.querySelector('body').style.overflowY = "hidden";
    Array.from(document.getElementsByClassName("camp-details-body")).map(el => {
      el.scrollTop = 0;
    });
  };

  const closeModal = () => {
    document.getElementById('add-camp-modal').style.display = "none";
    document.querySelector('body').style.overflowY = "auto";
  }; // Create camp


  const createCamp = async e => {
    e.preventDefault();

    try {
      setLoading(!loading);
      const images = await Promise.all(Object.values(files).map(async file => {
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "uploads");
        const uploadRes = await external_axios_default().post("https://api.cloudinary.com/v1_1/dqmqc0uaa/image/upload", data);
        const {
          url
        } = uploadRes.data;
        return url;
      }));
      const newCamp = await external_axios_default().post(`${"https://powerful-sunglasses-newt.cyclic.app"}/api/admin/camps`, {
        name: [campName, campAraName],
        location: [campAddress, campAraAddress],
        rate: Number(rate),
        extraFacilities: [{
          description: "Dinner",
          price: Number(lunchPrice)
        }],
        facilities: {
          english: addItemsToArray(servicesArray, "ssEnglish"),
          arabic: addItemsToArray(servicesArray, "ssArabic")
        },
        houseRules: {
          arabic: addItemsToArray(rulesArray, "rrArabic"),
          english: addItemsToArray(rulesArray, "rrEnglish")
        },
        description: [description, araDescription],
        images: images
      });
      setLoading(loading);
      document.getElementById("new-camp").reset();
      closeModal();
      setIsCreated(!isCreated);
    } catch (error) {
      console.error(error);
    }
  };
  /* End Create new camp */

  /* Delete Camp */


  const openDeleteCampModal = btnId => {
    document.getElementById(btnId).style.display = "flex";
    document.querySelector("body").style.overflowY = "hidden";
  };

  const closeDeleteCampModal = btnId => {
    document.getElementById(btnId).style.display = "none";
    document.querySelector("body").style.overflowY = "auto";
  };

  const deleteCamp = async campId => {
    try {
      await external_axios_default()["delete"](`${"https://powerful-sunglasses-newt.cyclic.app"}/api/admin/camps/${campId}`);
      Array.from(document.getElementsByClassName("delete-modal")).map(el => el.style.display = "none");
      setIsDeleted(!isDeleted);
    } catch (error) {
      console.error(error);
    }
  };
  /* End Delete Camp */
  //--- Camp's orders
  // get new orders notifications


  const {
    0: newOrdersNotifications,
    1: setNewOrdersNotifications
  } = (0,external_react_.useState)();
  (0,external_react_.useEffect)(() => {
    const getNotifications = () => {
      const campNames = camps && camps.map(camp => {
        return camp.name[0];
      });

      if (campNames) {
        let orders = [];

        for (let i = 0; i < campNames.length; i++) {
          orders = [...orders, newCampsordersList.filter(order => {
            return order.orderDetails.camp[0] === campNames[i];
          })];
        }

        setNewOrdersNotifications(orders);
      }
    };

    getNotifications();
  }, [camps, newCampsordersList]); // const fetchCampOrders = async (campId, btnId, notificaitonsSpan) => {
  //   try {
  //     document.getElementById(btnId).disabled = true;
  //     const res = await axios.get(`${process.env.NEXT_PUBLIC_DOMAIN_NAME}/api/admin/campsOrders/${campId}`);
  //     setCampOrders(res.data);
  //     setTimeout(() => {
  //       if (res.data.length > 0 && document.getElementById(notificaitonsSpan)) {
  //         document.getElementById(notificaitonsSpan).style.display = 'none';
  //       }
  //       openOrdersModal();
  //     }, 300)
  //   }
  //   catch (error) {
  //     console.error(error);
  //   }
  // };

  const openOrdersModal = (notificaitonsSpan, campId) => {
    document.getElementById("camp-orders-modal").style.display = "block";
    document.querySelector("body").style.overflowY = "hidden";
    setCampIdFetchOrders(campId);

    if (document.getElementById(notificaitonsSpan)) {
      document.getElementById(notificaitonsSpan).style.display = 'none';
    }
  };

  const closeOrdersModal = () => {
    document.getElementById("camp-orders-modal").style.display = "none";
    document.querySelector("body").style.overflowY = "auto";
    Array.from(document.getElementsByClassName("camp-orders")).map(btn => {
      btn.disabled = false;
    });
    setIsCreated(!isCreated);
  }; //--- Camp's rooms


  const {
    0: toggleActiveRoom,
    1: setToggleActiveRoom
  } = (0,external_react_.useState)(1);
  const {
    0: toggleActiveDatesTab,
    1: setToggleActiveDatesTab
  } = (0,external_react_.useState)(1);
  const {
    0: roomType,
    1: setRoomType
  } = (0,external_react_.useState)("");
  const {
    0: roomAraType,
    1: setRoomAraType
  } = (0,external_react_.useState)("");
  const {
    0: roomPrice,
    1: setRoomPrice
  } = (0,external_react_.useState)(0);
  const {
    0: maxPeople,
    1: setMaxPeople
  } = (0,external_react_.useState)(0);
  const {
    0: roomDescription,
    1: setRoomDescription
  } = (0,external_react_.useState)("");
  const {
    0: roomAraDescription,
    1: setRoomAraDescription
  } = (0,external_react_.useState)("");
  const {
    0: unavailableDates,
    1: setUnavailableDates
  } = (0,external_react_.useState)([]);

  const fetchCampRooms = async (campId, btnId) => {
    try {
      document.getElementById(btnId).disabled = true;
      const res = await external_axios_default().get(`${"https://powerful-sunglasses-newt.cyclic.app"}/api/rooms?campId=${campId}`);
      setCampRooms(res.data);
      setReFetchRoomsCampId(campId);
      setTimeout(() => {
        openRoomsModal();
      }, 500);
    } catch (error) {
      console.error(error);
    }
  }; //--- Update room


  (0,external_react_.useEffect)(() => {
    if (campRooms) {
      campRooms.map(room => {
        if (toggleActiveRoom === campRooms.indexOf(room) + 1) {
          setRoomType(room.roomType[0]);
          setRoomAraType(room.roomType[1]);
          setRoomPrice(room.price);
          setMaxPeople(room.maxPeople);
          setRoomDescription(room.description[0]);
          setRoomAraDescription(room.description[1]);
        }
      });
    }
  }, [campRooms, toggleActiveRoom]);

  const updateRoom = async (e, roomId) => {
    e.preventDefault();

    try {
      setLoading(!loading);
      await external_axios_default().patch(`${"https://powerful-sunglasses-newt.cyclic.app"}/api/admin/rooms/${roomId}`, {
        roomType: [roomType, roomAraType],
        price: Number(roomPrice),
        maxPeople: Number(maxPeople),
        description: [roomDescription, roomAraDescription]
      });
      setLoading(loading);
      closeRoomsModal(e);
      setIsCreated(!isCreated);
    } catch (error) {
      console.error(error);
    }
  }; //-- Handle camp's rooms modal (open/close)


  const openRoomsModal = () => {
    document.getElementById('camp-rooms-modal').style.display = "block";
    document.querySelector('body').style.overflowY = "hidden";
    Array.from(document.getElementsByClassName("camp-details-body")).map(el => {
      el.scrollTop = 0;
    });
    setToggleActiveRoom(1);
  };

  const closeRoomsModal = (e, btnId) => {
    e.preventDefault();
    Array.from(document.getElementsByClassName("camp-rooms")).map(btn => {
      btn.disabled = false;
    });
    Array.from(document.getElementsByClassName("date-checkbox")).map(checkbox => {
      checkbox.checked = false;
    });
    document.getElementById('camp-rooms-modal').style.display = "none";
    document.querySelector('body').style.overflowY = "auto";
    setRoomType("");
    setRoomAraType("");
    setRoomPrice(0);
    setMaxPeople(0);
    setRoomDescription("");
    setRoomAraDescription("");
    setUnavailableDates([]);
  }; //--- Handle update room's availability
  // Mark all unavailable dates


  const markAll = (roomId, dates) => {
    dates.map(date => {
      let checker = document.getElementById(`${roomId}${date}`);

      if (!checker.checked) {
        checker.checked = true;
        setUnavailableDates(dates);
      } else {
        checker.checked = false;
        setUnavailableDates([]);
      }
    });
  }; // Mark some unavailable dates


  const markSome = (e, labelId) => {
    const date = document.getElementById(labelId).innerHTML;
    let newEl, newArr, elIndex;

    if (e.target.checked) {
      newEl = date;
      newArr = [...unavailableDates, newEl];
      setUnavailableDates(newArr);
    } else {
      elIndex = unavailableDates.indexOf(date);

      if (elIndex > -1) {
        unavailableDates.splice(elIndex, 1);
        newArr = [...unavailableDates];
        setUnavailableDates(newArr);
      }
    }
  };

  const reFetchRooms = async campId => {
    try {
      const res = await external_axios_default().get(`${"https://powerful-sunglasses-newt.cyclic.app"}/api/rooms?campId=${campId}`);
      setCampRooms(res.data);
    } catch (error) {
      console.error(error);
    }
  }; //--- Add new unavailable date


  const addNewDate = async (e, inputId, roomId) => {
    e.preventDefault();

    try {
      const date = document.getElementById(inputId).value;
      const newDate = `${date.split("-")[2]}/${date.split("-")[1]}/${date.split("-")[0]}`;
      await external_axios_default().patch(`${"https://powerful-sunglasses-newt.cyclic.app"}/api/rooms/updateAvailability?remove=off&id=${roomId}`, {
        dates: newDate
      });
      reFetchRooms(reFetchRoomsCampId);
    } catch (error) {
      console.error(error);
    }
  }; //--- Remove unavailable date/dates


  const removeOldDate = async (e, roomId) => {
    e.preventDefault();

    try {
      await external_axios_default().patch(`${"https://powerful-sunglasses-newt.cyclic.app"}/api/rooms/updateAvailability?remove=on&id=${roomId}`, {
        dates: unavailableDates
      });
      reFetchRooms(reFetchRoomsCampId);
      setUnavailableDates([]);
    } catch (error) {
      console.error(error);
    }
  };
  /* Update camp */


  const {
    0: img1,
    1: setImg1
  } = (0,external_react_.useState)("");
  const {
    0: img2,
    1: setImg2
  } = (0,external_react_.useState)("");
  const {
    0: img3,
    1: setImg3
  } = (0,external_react_.useState)("");
  const {
    0: img4,
    1: setImg4
  } = (0,external_react_.useState)("");
  const {
    0: img5,
    1: setImg5
  } = (0,external_react_.useState)(""); //--- Fetch single camp

  const fetchCamp = async campId => {
    try {
      document.getElementById(campId).disabled = true;
      const res = await external_axios_default().get(`${"https://powerful-sunglasses-newt.cyclic.app"}/api/camps/${campId}`);
      setCamp(res.data); // Handle add new facilities & houseRules on the frontEnd

      setAraFacilitiesArray(res.data.facilities.arabic);
      setFacilitiesArray(res.data.facilities.english);
      setAraHouseRulesArray(res.data.houseRules.arabic);
      setHouseRulesArray(res.data.houseRules.english); // Set camp data default values before update

      setCampName(res.data.name[0]);
      setCampAraName(res.data.name[1]);
      setCampAddress(res.data.location[0]);
      setCampAraAddress(res.data.location[1]);
      setRate(res.data.rate);
      setLunchPrice(res.data.extraFacilities[0].price);
      setDescription(res.data.description[0]);
      setAraDescription(res.data.description[1]);
      setImg1(res.data.images[0] ? res.data.images[0] : "");
      setImg2(res.data.images[1] ? res.data.images[1] : "");
      setImg3(res.data.images[2] ? res.data.images[2] : "");
      setImg4(res.data.images[3] ? res.data.images[3] : "");
      setImg5(res.data.images[4] ? res.data.images[4] : "");
      setTimeout(() => {
        openDetailsModal();
      }, 500);
    } catch (error) {
      console.error(error);
    }
  }; // Handle add new facility to exsiting camp


  const {
    0: araFacilitiesArray,
    1: setAraFacilitiesArray
  } = (0,external_react_.useState)([]);
  const {
    0: facilitiesArray,
    1: setFacilitiesArray
  } = (0,external_react_.useState)([]);

  const addFacility = e => {
    e.preventDefault();
    let newElNum = araFacilitiesArray.indexOf(araFacilitiesArray[araFacilitiesArray.length - 1]) + 2;
    const newEl = `${newElNum}`;
    const newArr1 = [...araFacilitiesArray, newEl];
    setAraFacilitiesArray(newArr1);
    const newArr2 = [...facilitiesArray, newEl];
    setFacilitiesArray(newArr2);
  };

  const deleteFacility = facility => {
    let elIndex = facilitiesArray.indexOf(facility);

    if (elIndex > -1) {
      araFacilitiesArray.splice(elIndex, 1);
      const newArr1 = [...araFacilitiesArray];
      setAraFacilitiesArray(newArr1);
      facilitiesArray.splice(elIndex, 1);
      const newArr2 = [...facilitiesArray];
      setFacilitiesArray(newArr2);
    }
  }; // Handle add new house rule to exsiting camp


  const {
    0: araHouseRulesArray,
    1: setAraHouseRulesArray
  } = (0,external_react_.useState)([]);
  const {
    0: houseRulesArray,
    1: setHouseRulesArray
  } = (0,external_react_.useState)([]);

  const addNewRule = e => {
    e.preventDefault();
    let newElNum = araHouseRulesArray.indexOf(araHouseRulesArray[araHouseRulesArray.length - 1]) + 2;
    const newEl = `${newElNum}`;
    const newArr1 = [...araHouseRulesArray, newEl];
    setAraHouseRulesArray(newArr1);
    const newArr2 = [...houseRulesArray, newEl];
    setHouseRulesArray(newArr2);
  };

  const addItemsToExistingArray = (arr, id) => {
    let newArr = [],
        newEl;

    for (let i = 0; i < arr.length; i++) {
      newEl = document.getElementById(`${arr[i]}${id}`).value;
      newArr = [...newArr, newEl];
    }

    return newArr;
  };

  const deleteOldRule = rule => {
    let elIndex = houseRulesArray.indexOf(rule);

    if (elIndex > -1) {
      araHouseRulesArray.splice(elIndex, 1);
      const newArr1 = [...araHouseRulesArray];
      setAraHouseRulesArray(newArr1);
      houseRulesArray.splice(elIndex, 1);
      const newArr2 = [...houseRulesArray];
      setHouseRulesArray(newArr2);
    }
  }; // Delete old Image


  const deleteImage = imgId => {
    document.getElementById(imgId).value = " ";
  }; // Upload Image


  const uploadImage = async (imageInputId, imageFile) => {
    try {
      deleteImage(imageInputId);
      const data = new FormData();
      data.append("file", imageFile);
      data.append("upload_preset", "uploads");
      const uploadImage = await external_axios_default().post("https://api.cloudinary.com/v1_1/dqmqc0uaa/image/upload", data);
      const {
        url
      } = uploadImage.data;

      if (imageInputId === camp.images[0]) {
        setImg1(url);
      } else if (imageInputId === camp.images[1]) {
        setImg2(url);
      } else if (imageInputId === camp.images[2]) {
        setImg3(url);
      } else if (imageInputId === camp.images[3]) {
        setImg4(url);
      } else if (imageInputId === camp.images[4]) {
        setImg5(url);
      }

      document.getElementById(imageInputId).value = "New image uploaded";
    } catch (error) {
      console.error(error);
    }
  }; // ----- Update Camp -----


  const updateCamp = async (e, campId) => {
    e.preventDefault();

    try {
      setLoading(!loading);
      await external_axios_default().patch(`${"https://powerful-sunglasses-newt.cyclic.app"}/api/admin/camps/${campId}`, {
        description: [description, araDescription],
        extraFacilities: [{
          description: "Dinner",
          price: Number(lunchPrice)
        }],
        facilities: {
          english: addItemsToExistingArray(facilitiesArray, "ffEnglish"),
          arabic: addItemsToExistingArray(araFacilitiesArray, "ffArabic")
        },
        houseRules: {
          english: addItemsToExistingArray(houseRulesArray, "ruEnglish"),
          arabic: addItemsToExistingArray(araHouseRulesArray, "ruArabic")
        },
        images: [img1, img2, img3, img4, img5],
        location: [campAddress, campAraAddress],
        name: [campName, campAraName],
        rate: Number(rate)
      });
      setLoading(loading);
      alert("تم تعديل المخيم بنجاح");
      closeDetailsModal(e, campId);
      setIsCreated(!isCreated);
    } catch (error) {
      console.error(error);
    }
  }; //-- handle camp details modal (open/close)


  const openDetailsModal = () => {
    document.getElementById('camp-details-modal').style.display = "block";
    document.querySelector('body').style.overflowY = "hidden";
    Array.from(document.getElementsByClassName("camp-details-body")).map(el => {
      el.scrollTop = 0;
    });
  };

  const closeDetailsModal = (e, campId) => {
    e.preventDefault();
    document.getElementById(campId).disabled = false;
    document.getElementById('camp-details-modal').style.display = "none";
    document.querySelector('body').style.overflowY = "auto";
  };
  /* End Update camp */


  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Camps_Container, {
    language: language,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "header",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
          children: "\u0627\u0644\u0645\u062E\u064A\u0645\u0627\u062A"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        onClick: openModal,
        children: "\u0627\u0636\u0641 \u0645\u062E\u064A\u0645 \u062C\u062F\u064A\u062F"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("table", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("thead", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
            children: "\u0627\u0633\u0645 \u0627\u0644\u0645\u062E\u064A\u0645"
          }), /*#__PURE__*/jsx_runtime_.jsx("th", {
            children: "\u0627\u0644\u0645\u0648\u0642\u0639"
          }), /*#__PURE__*/jsx_runtime_.jsx("th", {
            children: "\u0627\u0644\u062D\u062C\u0648\u0632\u0627\u062A"
          }), /*#__PURE__*/jsx_runtime_.jsx("th", {
            children: "\u0627\u0644\u063A\u0631\u0641"
          }), /*#__PURE__*/jsx_runtime_.jsx("th", {
            children: "\u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644"
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("tbody", {
        children: camps && camps.map(camp => /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
            children: camp.name[1]
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: camp.location[1]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("td", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              children: camp.orders.length
            }), /*#__PURE__*/jsx_runtime_.jsx("button", {
              className: "camp-orders",
              id: `${camp._id}orders`,
              onClick: () => openOrdersModal(`${camp._id}new-orders`, camp._id) // onClick={() => fetchCampOrders(camp._id, `${camp._id}orders`, `${camp._id}new-orders`)}
              ,
              children: "\u0639\u0631\u0636 \u0627\u0644\u0643\u0644"
            }), newOrdersNotifications && newOrdersNotifications.map(item => {
              if (item.length !== 0 && item[0].new === true && item[0].orderDetails.camp[0] === camp.name[0]) {
                return /*#__PURE__*/jsx_runtime_.jsx("span", {
                  id: `${camp._id}new-orders`,
                  className: "order-notifications",
                  children: item.length
                }, `${camp._id}noti`);
              }
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: /*#__PURE__*/jsx_runtime_.jsx("button", {
              className: "camp-rooms",
              onClick: () => fetchCampRooms(camp._id, `${camp._id}btn`),
              id: `${camp._id}btn`,
              children: "\u063A\u0631\u0641 \u0627\u0644\u0645\u062E\u064A\u0645"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: /*#__PURE__*/jsx_runtime_.jsx("button", {
              id: camp._id,
              className: "camp-details",
              onClick: () => fetchCamp(camp._id),
              children: "\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0645\u062E\u064A\u0645"
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("td", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
              className: "delete-camp",
              onClick: () => openDeleteCampModal(`${camp._id}rand`),
              children: "\u0645\u0633\u062D"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "delete-modal",
              id: `${camp._id}rand`,
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "delete-modal-body",
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  onClick: () => closeDeleteCampModal(`${camp._id}rand`),
                  children: "x"
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "delete-modal-content",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                    children: "\u0647\u0644 \u062A\u0631\u064A\u062F \u0625\u0632\u0627\u0644\u0629 \u0647\u0630\u0627 \u0627\u0644\u0645\u062E\u064A\u0645\u061F"
                  }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                    onClick: () => deleteCamp(camp._id),
                    children: "\u0627\u0645\u0633\u062D \u0627\u0644\u0631\u062D\u0644\u0629"
                  })]
                })]
              })
            })]
          })]
        }, camp._id))
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      id: "add-camp-modal",
      className: "camp-modal",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "modal-body",
        children: [loading && /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "loading",
          children: "Loading..."
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          onClick: closeModal,
          children: "x"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "camp-details-body",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
            onSubmit: e => createCamp(e),
            id: "new-camp",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                children: "\u0625\u0633\u0645 \u0627\u0644\u0645\u062E\u064A\u0645"
              }), /*#__PURE__*/jsx_runtime_.jsx("textarea", {
                cols: "40",
                dir: "rtl",
                placeholder: "\u0639\u0631\u0628\u064A",
                onChange: e => setCampAraName(e.target.value),
                required: true
              }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("textarea", {
                cols: "40",
                placeholder: "English",
                onChange: e => setCampName(e.target.value),
                required: true
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                children: "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u062E\u064A\u0645"
              }), /*#__PURE__*/jsx_runtime_.jsx("textarea", {
                cols: "50",
                dir: "rtl",
                placeholder: "\u0639\u0631\u0628\u064A",
                onChange: e => setCampAraAddress(e.target.value),
                required: true
              }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("textarea", {
                cols: "50",
                placeholder: "English",
                onChange: e => setCampAddress(e.target.value),
                required: true
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                children: "\u0627\u0644\u062A\u0642\u064A\u064A\u0645"
              }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                type: "number",
                onChange: e => setRate(e.target.value),
                required: true
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                children: "\u0633\u0639\u0631 \u0627\u0644\u063A\u062F\u0627\u0621 \u0644\u0644\u0641\u0631\u062F"
              }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                type: "number",
                onChange: e => setLunchPrice(e.target.value),
                required: true
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              dir: "rtl",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                children: "\u0627\u0644\u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629"
              }), servicesArray.map(service => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "new-rules",
                  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("pre", {
                    children: [service, "- "]
                  }), /*#__PURE__*/jsx_runtime_.jsx("textarea", {
                    id: `${service}ssArabic`,
                    cols: "49",
                    dir: "rtl",
                    placeholder: "\u0639\u0631\u0628\u064A",
                    required: true
                  }), /*#__PURE__*/jsx_runtime_.jsx("textarea", {
                    id: `${service}ssEnglish`,
                    cols: "49",
                    dir: "ltr",
                    placeholder: "English",
                    required: true
                  }), /*#__PURE__*/jsx_runtime_.jsx("pre", {
                    className: "delete-rule",
                    onClick: deleteService,
                    children: "x"
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx("br", {})]
              }, `${service}ss`)), /*#__PURE__*/jsx_runtime_.jsx("button", {
                className: "add-rule",
                onClick: e => addservice(e),
                children: "\u0627\u0636\u0641 \u062E\u062F\u0645\u0629"
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              dir: "rtl",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                children: "\u0642\u0648\u0627\u0639\u062F \u0627\u0644\u0645\u062E\u064A\u0645"
              }), rulesArray.map(rule => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "new-rules",
                  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("pre", {
                    children: [rule, "- "]
                  }), /*#__PURE__*/jsx_runtime_.jsx("textarea", {
                    id: `${rule}rrArabic`,
                    cols: "49",
                    rows: "4",
                    placeholder: "\u0639\u0631\u0628\u064A",
                    required: true
                  }), /*#__PURE__*/jsx_runtime_.jsx("textarea", {
                    id: `${rule}rrEnglish`,
                    cols: "49",
                    rows: "4",
                    dir: "ltr",
                    placeholder: "English",
                    required: true
                  }), /*#__PURE__*/jsx_runtime_.jsx("pre", {
                    className: "delete-rule",
                    onClick: deleteRule,
                    children: "x"
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx("br", {})]
              }, `${rule}rr`)), /*#__PURE__*/jsx_runtime_.jsx("button", {
                className: "add-rule",
                onClick: e => addrule(e),
                children: "\u0623\u0636\u0641 \u0642\u0627\u0639\u062F\u0629"
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                children: "\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629 \u0639\u0646 \u0627\u0644\u0645\u062E\u064A\u0645"
              }), /*#__PURE__*/jsx_runtime_.jsx("textarea", {
                rows: "6",
                cols: "50",
                placeholder: "English",
                onChange: e => setDescription(e.target.value),
                required: true
              }), /*#__PURE__*/jsx_runtime_.jsx("textarea", {
                rows: "6",
                cols: "50",
                dir: "rtl",
                placeholder: "\u0639\u0631\u0628\u064A",
                onChange: e => setAraDescription(e.target.value),
                required: true
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                children: "\u0635\u0648\u0631 \u0627\u0644\u0645\u062E\u064A\u0645"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                style: {
                  display: 'flex'
                },
                children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                  htmlFor: "upload-camp-img",
                  children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_icons_.FileEarmarkArrowUp, {
                    size: 36
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                  id: "upload-camp-img",
                  type: "file",
                  multiple: true,
                  required: true,
                  dir: "rtl",
                  style: {
                    border: "1px solid #ccc",
                    cursor: "pointer"
                  },
                  onChange: e => setFiles(e.target.files)
                })]
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "footer",
              children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
                className: "add",
                type: "submit",
                children: "\u0627\u0636\u0641 \u0627\u0644\u0645\u062E\u064A\u0645"
              }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                className: "delete",
                onClick: closeModal,
                children: "\u0627\u0644\u063A\u0627\u0621"
              })]
            })]
          })
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      id: "camp-orders-modal",
      className: "camp-modal",
      language: language,
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "modal-body",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "orders-modal-body",
          language: language,
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            onClick: closeOrdersModal,
            children: "x"
          }), /*#__PURE__*/jsx_runtime_.jsx(CampsOrders, {
            currentCampId: campIdFetchOrders,
            language: language
          })]
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      id: "camp-rooms-modal",
      className: "camp-modal",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "rooms-tabs",
        children: [campRooms.length > 0 && /*#__PURE__*/(0,jsx_runtime_.jsxs)("h4", {
          children: ["\u063A\u0631\u0641 ", campRooms && campRooms[0].campName[1]]
        }), campRooms && campRooms.map(room => /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: toggleActiveRoom === campRooms.indexOf(room) + 1 ? 'tab active-tab' : 'tab',
          children: /*#__PURE__*/jsx_runtime_.jsx("button", {
            onClick: () => setToggleActiveRoom(campRooms.indexOf(room) + 1),
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("h5", {
              children: [room.roomType[1], " (", room.roomNumbers.length, ")"]
            })
          })
        }, room._id))]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "modal-body",
        children: [loading && /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "loading",
          children: "Loading..."
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          onClick: e => closeRoomsModal(e),
          children: "x"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "camp-details-body",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "tabs-content",
            children: campRooms && campRooms.map(room => /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: toggleActiveRoom === campRooms.indexOf(room) + 1 ? 'tab-content active-tab-content' : 'tab-content',
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
                onSubmit: e => updateRoom(e, room._id),
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  dir: "rtl",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                    children: "\u0646\u0648\u0639 \u0627\u0644\u063A\u0631\u0641\u0629"
                  }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                    defaultValue: room.roomType[1],
                    onChange: e => setRoomAraType(e.target.value)
                  }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("input", {
                    dir: "ltr",
                    defaultValue: room.roomType[0],
                    onChange: e => setRoomType(e.target.value)
                  })]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  dir: "rtl",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                    children: "\u0627\u0644\u0633\u0639\u0631"
                  }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                    type: "number",
                    defaultValue: room.price,
                    onChange: e => setRoomPrice(e.target.value)
                  }), /*#__PURE__*/jsx_runtime_.jsx("br", {})]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  dir: "rtl",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                    children: "\u0639\u062F\u062F \u0627\u0644\u0623\u0634\u062E\u0627\u0635"
                  }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                    type: "number",
                    defaultValue: room.maxPeople,
                    onChange: e => setMaxPeople(e.target.value)
                  }), /*#__PURE__*/jsx_runtime_.jsx("br", {})]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  dir: "rtl",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                    children: "\u0648\u0635\u0641 \u0627\u0644\u063A\u0631\u0641\u0629"
                  }), /*#__PURE__*/jsx_runtime_.jsx("textarea", {
                    cols: "50",
                    rows: "4",
                    defaultValue: room.description[1],
                    onChange: e => setRoomAraDescription(e.target.value)
                  }), /*#__PURE__*/jsx_runtime_.jsx("textarea", {
                    cols: "50",
                    rows: "4",
                    dir: "ltr",
                    defaultValue: room.description[0],
                    onChange: e => setRoomDescription(e.target.value)
                  })]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "rooms-numbers-container",
                  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "dates-tabs",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                      children: "\u0627\u0644\u063A\u0631\u0641:"
                    }), room.roomNumbers.map(num => /*#__PURE__*/(0,jsx_runtime_.jsxs)("h4", {
                      className: toggleActiveDatesTab === room.roomNumbers.indexOf(num) + 1 ? 'active-dates-tab dates-tab' : 'dates-tab',
                      onClick: () => setToggleActiveDatesTab(room.roomNumbers.indexOf(num) + 1),
                      children: ["\u063A\u0631\u0641\u0629 \u0631\u0642\u0645 ", num.roomNumber]
                    }, num))]
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "dates-tabs-content",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                      children: "\u0645\u062D\u062C\u0648\u0632 \u0641\u064A:"
                    }), room.roomNumbers.map(num => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      id: `${room.roomNumbers.indexOf(num) + 1}dates`,
                      className: toggleActiveDatesTab === room.roomNumbers.indexOf(num) + 1 ? "active-dates-tab-content dates-tab-content" : "dates-tab-content",
                      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                        style: {
                          fontSize: '1.5rem'
                        },
                        children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
                          className: "date-checkbox",
                          id: num._id,
                          type: "checkbox",
                          onChange: () => markAll(num._id, num.unavailableDates)
                        }), /*#__PURE__*/jsx_runtime_.jsx("label", {
                          htmlFor: num._id,
                          children: "\u062A\u062D\u062F\u064A\u062F \u0627\u0644\u0643\u0644"
                        })]
                      }), num.unavailableDates.map(date => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                        children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
                          className: "date-checkbox",
                          type: "checkbox",
                          id: `${num._id}${date}`,
                          onChange: e => markSome(e, `${num._id}${date}rand`)
                        }), /*#__PURE__*/jsx_runtime_.jsx("label", {
                          htmlFor: `${num._id}${date}`,
                          id: `${num._id}${date}rand`,
                          children: date
                        })]
                      }, date)), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                        className: "add-date",
                        children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
                          type: "date",
                          id: `${num._id}date`
                        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                          className: "add-date-btn",
                          id: `${num._id}add-date`,
                          onClick: e => addNewDate(e, `${num._id}date`, num._id),
                          children: "\u0623\u0636\u0641 \u062A\u0627\u0631\u064A\u062E"
                        })]
                      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                        className: "delete-dates",
                        onClick: e => removeOldDate(e, num._id),
                        children: "\u0625\u0632\u0627\u0644\u0629 \u0627\u0644\u062A\u0648\u0627\u0631\u064A\u062E"
                      })]
                    }, num))]
                  })]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "footer",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
                    className: "add",
                    type: "submit",
                    children: "\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u062A\u0639\u062F\u064A\u0644\u0627\u062A"
                  }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                    className: "delete",
                    onClick: e => closeRoomsModal(e),
                    children: "\u0627\u0644\u063A\u0627\u0621"
                  })]
                })]
              })
            }, room._id))
          })
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      id: "camp-details-modal",
      className: "camp-modal",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "modal-body",
        children: [loading && /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "loading",
          children: "Loading..."
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          onClick: e => closeDetailsModal(e, camp && camp._id),
          children: "x"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "camp-details-body",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
            id: `${camp && camp._id}details-form`,
            onSubmit: e => updateCamp(e, camp && camp._id),
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                children: "\u0625\u0633\u0645 \u0627\u0644\u0645\u062E\u064A\u0645"
              }), /*#__PURE__*/jsx_runtime_.jsx("textarea", {
                dir: "rtl",
                cols: "40",
                defaultValue: camp && camp.name[1],
                onChange: e => setCampAraName(e.target.value)
              }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("textarea", {
                cols: "40",
                defaultValue: camp && camp.name[0],
                onChange: e => setCampName(e.target.value)
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                children: "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u062E\u064A\u0645"
              }), /*#__PURE__*/jsx_runtime_.jsx("textarea", {
                dir: "rtl",
                cols: "50",
                defaultValue: camp && camp.location[1],
                onChange: e => setCampAraAddress(e.target.value)
              }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("textarea", {
                cols: "50",
                defaultValue: camp && camp.location[0],
                onChange: e => setCampAddress(e.target.value)
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                children: "\u0627\u0644\u062A\u0642\u064A\u064A\u0645"
              }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                type: "number",
                defaultValue: camp && camp.rate,
                onChange: e => setRate(e.target.value)
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                children: "\u0633\u0639\u0631 \u0627\u0644\u063A\u062F\u0627\u0621 \u0644\u0644\u0641\u0631\u062F"
              }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                type: "number",
                defaultValue: camp && camp.extraFacilities[0].price,
                onChange: e => setLunchPrice(e.target.value)
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              dir: "rtl",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                children: "\u0627\u0644\u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                style: {
                  display: "flex"
                },
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  children: camp && araFacilitiesArray.map(facility => /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: "new-rules",
                      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("pre", {
                        children: [araFacilitiesArray.indexOf(facility) + 1, "- "]
                      }), /*#__PURE__*/jsx_runtime_.jsx("textarea", {
                        id: `${facility}ffArabic`,
                        cols: "50",
                        defaultValue: facility
                      })]
                    }, facility), /*#__PURE__*/jsx_runtime_.jsx("br", {})]
                  }))
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  children: camp && facilitiesArray.map(facility => /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: "new-rules",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("textarea", {
                        id: `${facility}ffEnglish`,
                        dir: "ltr",
                        cols: "50",
                        defaultValue: facility
                      }), /*#__PURE__*/jsx_runtime_.jsx("pre", {
                        className: "delete-rule",
                        onClick: () => deleteFacility(facility),
                        children: "x"
                      })]
                    }, facility), /*#__PURE__*/jsx_runtime_.jsx("br", {})]
                  }))
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                className: "add-rule",
                onClick: e => addFacility(e),
                children: "\u0627\u0636\u0641 \u062E\u062F\u0645\u0629"
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              dir: "rtl",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                children: "\u0642\u0648\u0627\u0639\u062F \u0627\u0644\u0645\u062E\u064A\u0645"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                style: {
                  display: "flex"
                },
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  children: camp && araHouseRulesArray.map(rule => /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: "new-rules",
                      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("pre", {
                        children: [araHouseRulesArray.indexOf(rule) + 1, "- "]
                      }), /*#__PURE__*/jsx_runtime_.jsx("textarea", {
                        id: `${rule}ruArabic`,
                        cols: "50",
                        rows: "4",
                        defaultValue: rule
                      })]
                    }, rule), /*#__PURE__*/jsx_runtime_.jsx("br", {})]
                  }))
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  children: camp && houseRulesArray.map(rule => /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: "new-rules",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("textarea", {
                        id: `${rule}ruEnglish`,
                        dir: "ltr",
                        cols: "50",
                        rows: "4",
                        defaultValue: rule
                      }), /*#__PURE__*/jsx_runtime_.jsx("pre", {
                        className: "delete-rule",
                        onClick: () => deleteOldRule(rule),
                        children: "x"
                      })]
                    }, rule), /*#__PURE__*/jsx_runtime_.jsx("br", {})]
                  }))
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                className: "add-rule",
                onClick: e => addNewRule(e),
                children: "\u0627\u0636\u0641 \u0642\u0627\u0639\u062F\u0629"
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                children: "\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629 \u0639\u0646 \u0627\u0644\u0645\u062E\u064A\u0645"
              }), /*#__PURE__*/jsx_runtime_.jsx("textarea", {
                rows: "6",
                cols: "50",
                defaultValue: camp && camp.description[0],
                onChange: e => setDescription(e.target.value)
              }), /*#__PURE__*/jsx_runtime_.jsx("textarea", {
                dir: "rtl",
                rows: "6",
                cols: "50",
                defaultValue: camp && camp.description[1],
                onChange: e => setAraDescription(e.target.value)
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                children: "\u0627\u0644\u0635\u0648\u0631"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                style: {
                  display: "flex",
                  flexDirection: 'row-reverse'
                },
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  style: {
                    display: 'flex',
                    flexDirection: 'column'
                  },
                  children: camp && camp.images.map(image => /*#__PURE__*/jsx_runtime_.jsx("input", {
                    id: image,
                    className: "image-input",
                    type: "url",
                    readOnly: true,
                    defaultValue: image
                  }, image))
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
                    className: "upload-image",
                    type: "file",
                    onChange: e => {
                      uploadImage(camp && camp.images[0], e.target.files[0]);
                    }
                  }), /*#__PURE__*/jsx_runtime_.jsx("label", {
                    className: "delete-img-url",
                    onClick: () => {
                      deleteImage(camp && camp.images[0]);
                      setImg1("");
                    },
                    children: "x"
                  }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                    className: "upload-image",
                    type: "file",
                    onChange: e => {
                      uploadImage(camp && camp.images[1], e.target.files[0]);
                    }
                  }), /*#__PURE__*/jsx_runtime_.jsx("label", {
                    className: "delete-img-url",
                    onClick: () => {
                      deleteImage(camp && camp.images[1]);
                      setImg2("");
                    },
                    children: "x"
                  }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                    className: "upload-image",
                    type: "file",
                    onChange: e => {
                      uploadImage(camp && camp.images[2], e.target.files[0]);
                    }
                  }), /*#__PURE__*/jsx_runtime_.jsx("label", {
                    className: "delete-img-url",
                    onClick: () => {
                      deleteImage(camp && camp.images[2]);
                      setImg3("");
                    },
                    children: "x"
                  }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                    className: "upload-image",
                    type: "file",
                    onChange: e => {
                      uploadImage(camp && camp.images[3], e.target.files[0]);
                    }
                  }), /*#__PURE__*/jsx_runtime_.jsx("label", {
                    className: "delete-img-url",
                    onClick: () => {
                      deleteImage(camp && camp.images[3]);
                      setImg4("");
                    },
                    children: "x"
                  }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                    className: "upload-image",
                    type: "file",
                    onChange: e => {
                      uploadImage(camp && camp.images[4], e.target.files[0]);
                    }
                  }), /*#__PURE__*/jsx_runtime_.jsx("label", {
                    className: "delete-img-url",
                    onClick: () => {
                      deleteImage(camp && camp.images[4]);
                      setImg5("");
                    },
                    children: "x"
                  })]
                })]
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "footer",
              children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
                className: "add",
                type: "submit",
                children: "\u062A\u0639\u062F\u064A\u0644"
              }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                className: "delete",
                onClick: e => closeDetailsModal(e, camp && camp._id),
                children: "\u0627\u0644\u063A\u0627\u0621"
              })]
            })]
          })
        })]
      })
    })]
  });
};

/* harmony default export */ const admin_Camps = (Camps);

/***/ }),

/***/ 2957:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Dashboard__Container",
  componentId: "sc-1tl9mem-0"
})(["max-width:100vw;min-height:100vh;padding-top:4rem;display:flex;justify-content:space-between;align-items:center;direction:rtl;@media(min-width:1400px){padding-top:5rem;}div.side-bar{width:20%;height:100vh;border:1px solid #ccc;div.tabs{display:flex;flex-direction:column;h4{padding-right:0.5rem;margin-bottom:0;padding-bottom:1rem;color:grey;border-bottom:1px solid #ccc;}div.tab{height:3rem;position:relative;background-color:#fff;border-bottom:1px dashed #ccc;cursor:pointer;transition:all 300ms ease-in-out;h5{color:#000;font-size:1.1rem;margin:0;padding:1rem;text-align:right;display:flex;justify-content:space-between;align-items:center;cursor:pointer;@media(max-width:600px){font-size:0.9rem;padding:0.9rem 0.1rem;}}&:hover{background-color:#000;border-color:#000;h5{color:#fff;}}button{width:100%;border:none;background:none;}span.notification{font-size:0.8rem;padding:3px;background-color:red;color:#fff;border-radius:5px;}}div.active-tab{background-color:#000;border:1px solid #000;h5{color:#fff;}}}}div.main-body{width:80%;min-height:100vh;div.tabs-content{width:100%;min-height:100vh;div.tab-content{display:none;}div.active-tab-content{display:block;}}}"]);

/***/ }),

/***/ 3119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ admin_Main)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: external "react-circular-progressbar"
const external_react_circular_progressbar_namespaceObject = require("react-circular-progressbar");
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/admin/Main.js





const Container = external_styled_components_default().div.withConfig({
  displayName: "Main__Container",
  componentId: "sc-11c646t-0"
})(["width:100%;min-height:100vh;display:flex;flex-direction:column;div.header{display:flex;align-items:center;justify-content:space-between;padding:1rem;div{width:23.5%;height:12vh;box-shadow:1px 1px 1px 1px #ccc;border-radius:5px;display:flex;align-items:center;justify-content:center;transition:all 300ms ease-in-out;cursor:pointer;&:hover{transform:translateY(-8px);}}}div.secondary{height:80vh;padding-top:2rem;margin-inline:1rem;margin-bottom:1rem;display:flex;gap:1rem;div.progress{width:35%;height:100%;box-shadow:1px 1px 1px 2px #ccc;border-radius:5px;padding-inline:1rem;}div.chart{width:65%;height:100.7%;display:flex;flex-direction:column;gap:1rem;overflow-y:scroll;div.chart-item{width:98%;max-height:41.5%;margin-top:1px;margin-inline-start:1px;border-radius:5px;padding-block:1rem;box-shadow:1px 1px 1px 2px #ccc;display:flex;justify-content:space-between;div{width:100%;padding-inline:1rem;}}}}"]);

const Main = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(Container, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "secondary",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "progress",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
          children: "\u0627\u0644\u0625\u0631\u0627\u062F\u0627\u062A"
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_circular_progressbar_namespaceObject.CircularProgressbar, {
          value: 60,
          text: "60%",
          strokeWidth: 2,
          styles: {
            path: {
              stroke: "#000"
            },
            text: {
              fill: '#000'
            }
          }
        }), /*#__PURE__*/jsx_runtime_.jsx("h4", {
          children: "\u0645\u0633\u062A\u062D\u0642\u0627\u062A \u0627\u0644\u0631\u062D\u0644\u0627\u062A"
        }), /*#__PURE__*/jsx_runtime_.jsx("h4", {
          children: "\u0645\u0633\u062A\u062D\u0642\u0627\u062A \u0627\u0644\u0645\u062E\u064A\u0645\u0627\u062A"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "chart",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "chart-item",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
              children: "\u0645\u0633\u062A\u062D\u0642\u0627\u062A \u0645\u0627\u0647\u0631 \u0643\u0627\u0645\u0628 \u0644\u0634\u0647\u0631 \u0633\u0628\u062A\u0645\u0628\u0631:"
            }), /*#__PURE__*/jsx_runtime_.jsx("h5", {
              children: "\u0639\u062F\u062F \u0627\u0644\u062D\u062C\u0648\u0632\u0627\u062A:"
            }), /*#__PURE__*/jsx_runtime_.jsx("h5", {
              children: "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0625\u0631\u0627\u062F\u0627\u062A:"
            }), /*#__PURE__*/jsx_runtime_.jsx("h5", {
              children: "\u0646\u0633\u0628\u0629 \u0627\u0644\u0634\u0631\u0643\u0629:"
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx(external_react_circular_progressbar_namespaceObject.CircularProgressbar, {
            value: 60,
            text: "60%",
            strokeWidth: 2,
            styles: {
              path: {
                stroke: "#000"
              },
              text: {
                fill: '#000'
              }
            }
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "chart-item",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
              children: "\u0645\u0633\u062A\u062D\u0642\u0627\u062A \u0633\u0628\u0627\u064A\u0633\u064A \u0643\u0627\u0645\u0628 \u0644\u0634\u0647\u0631 \u0633\u0628\u062A\u0645\u0628\u0631:"
            }), /*#__PURE__*/jsx_runtime_.jsx("h5", {
              children: "\u0639\u062F\u062F \u0627\u0644\u062D\u062C\u0648\u0632\u0627\u062A:"
            }), /*#__PURE__*/jsx_runtime_.jsx("h5", {
              children: "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0625\u0631\u0627\u062F\u0627\u062A:"
            }), /*#__PURE__*/jsx_runtime_.jsx("h5", {
              children: "\u0646\u0633\u0628\u0629 \u0627\u0644\u0634\u0631\u0643\u0629:"
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx(external_react_circular_progressbar_namespaceObject.CircularProgressbar, {
            value: 60,
            text: "60%",
            strokeWidth: 2,
            styles: {
              path: {
                stroke: "#000"
              },
              text: {
                fill: '#000'
              }
            }
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "chart-item",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
              children: "\u0645\u0633\u062A\u062D\u0642\u0627\u062A \u0633\u0628\u0627\u064A\u0633\u064A \u0643\u0627\u0645\u0628 \u0644\u0634\u0647\u0631 \u0633\u0628\u062A\u0645\u0628\u0631:"
            }), /*#__PURE__*/jsx_runtime_.jsx("h5", {
              children: "\u0639\u062F\u062F \u0627\u0644\u062D\u062C\u0648\u0632\u0627\u062A:"
            }), /*#__PURE__*/jsx_runtime_.jsx("h5", {
              children: "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0625\u0631\u0627\u062F\u0627\u062A:"
            }), /*#__PURE__*/jsx_runtime_.jsx("h5", {
              children: "\u0646\u0633\u0628\u0629 \u0627\u0644\u0634\u0631\u0643\u0629:"
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx(external_react_circular_progressbar_namespaceObject.CircularProgressbar, {
            value: 60,
            text: "60%",
            strokeWidth: 2,
            styles: {
              path: {
                stroke: "#000"
              },
              text: {
                fill: '#000'
              }
            }
          })]
        })]
      })]
    })
  });
};

/* harmony default export */ const admin_Main = (Main);

/***/ }),

/***/ 1974:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "Profile__Container",
  componentId: "sc-10foir9-0"
})(["width:100%;height:100%;padding-top:4rem;display:flex;flex-direction:column;align-items:center;text-align:center;direction:ltr;h2{margin-top:0;};form{display:flex;flex-direction:column;input{width:15rem;padding:0.6rem 0.5rem;margin-bottom:1rem;}button{padding-block:0.6rem;font-size:1.1rem;font-weight:bold;background-color:#000;color:#fff;cursor:pointer;transition:all 300ms ease-in-out;&:hover{background-color:transparent;color:#000}}i{position:absolute;margin-left:14rem;padding:10px;cursor:pointer;transition:all 300ms ease-in-out;color:rgba(0,0,0,0.6);&:hover{opacity:0.4;}}}"]);

const Profile = ({
  user
}) => {
  const {
    0: newPasswordMatch,
    1: setNewPasswordMatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true); // Show/hide password

  const showPassword = (e, inputId) => {
    let input = document.getElementById(inputId);

    if (input.type === "password" && !inputId.includes("confirm")) {
      e.target.style.color = "#000";
      input.type = "text";
    } else if (input.type === "password" && inputId.includes("confirm")) {
      e.target.style.color = "#000";
      input.type = "text";
    } else if (input.type === "text" && inputId.includes("confirm")) {
      e.target.style.color = "rgba(0, 0, 0, 0.6)";
      input.type = "password";
    } else {
      e.target.style.color = "rgba(0, 0, 0, 0.6)";
      input.type = "password";
    }
  }; // Change password


  const changePassword = async (e, newPassId, confPassId, userId) => {
    e.preventDefault();
    const newPassword = document.getElementById(newPassId).value;
    const confirmNewPassword = document.getElementById(confPassId).value;

    if (newPassword !== confirmNewPassword) {
      return setNewPasswordMatch(!newPasswordMatch);
    } else {
      setNewPasswordMatch(newPasswordMatch);

      try {
        await axios__WEBPACK_IMPORTED_MODULE_2___default().patch(`${"https://powerful-sunglasses-newt.cyclic.app"}/api/users/${userId}`, {
          password: confirmNewPassword
        });
        alert("تم تغيير كلمة المرور بنجاح");
      } catch (error) {
        console.error(error);
      }
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(Container, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h2", {
        children: user && user.username
      }), user && user.role === "admin1" && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h4", {
        children: user.role
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("form", {
      onSubmit: e => changePassword(e, "new-password", "confirm-new-password", user && user._id),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("input", {
        type: "text",
        defaultValue: user && user.username,
        readOnly: true
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("input", {
        type: "email",
        defaultValue: user && user.email,
        readOnly: true
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("i", {
          className: "fa fa-solid fa-eye icon",
          onClick: e => showPassword(e, "new-password")
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("input", {
          type: "password",
          id: "new-password",
          minLength: "8",
          maxLength: "100",
          pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$",
          title: "Password must contain at least one uppercase, one lowercase, and one number",
          placeholder: "Enter new password",
          required: true
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("i", {
          className: "fa fa-solid fa-eye icon",
          onClick: e => showPassword(e, "confirm-new-password")
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("input", {
          type: "password",
          id: "confirm-new-password",
          className: "input-field",
          minLength: "8",
          maxLength: "100",
          pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$",
          title: "Password must contain at least one uppercase, one lowercase, and one number",
          placeholder: "Re-type new password",
          required: true
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("br", {}), !newPasswordMatch && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
          style: {
            color: 'red'
          },
          children: "Passwords don't match"
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
        type: "submit",
        children: "Update"
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);

/***/ }),

/***/ 7085:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "Rooms__Container",
  componentId: "sc-2gr2oa-0"
})(["width:100%;height:100%;margin:0%;div.header{display:flex;justify-content:space-between;align-items:center;padding-inline:1rem;border-bottom:1px solid #ccc;h1{margin-top:0;margin-bottom:0;padding-top:1.1rem;}button{font-size:1.1rem;font-weight:bold;padding-block:0.4rem;background-color:#000;color:#fff;cursor:pointer;transition:all 300ms ease-in-out;&:hover{background-color:transparent;color:#000;}}}table{width:97%;margin-top:1rem;text-align:center;margin-inline:1rem;box-shadow:1px 0.5px 2px 1px #ccc;tbody{display:block;overflow-y:scroll;width:100%;max-height:400px;padding-inline-end:0.2rem;}thead,tr{width:100%;display:block;th{width:10.3%;padding-block:1rem;font-size:1.1rem;}}td{height:3.5rem;width:17%;border-top:1px solid #ccc;div.delete-modal{width:100vw;height:100vh;position:fixed;top:0;left:0;display:none;justify-content:center;align-items:center;background-color:rgba(255,255,255,0.6);div.delete-modal-body{width:30%;height:30%;background-color:#e0e0e0;display:flex;align-items:center;justify-content:center;border-radius:5px;span{position:absolute;right:35.5%;top:36%;width:1.2rem;height:1.2rem;background-color:#000;color:#fff;font-weight:bold;display:flex;align-items:center;justify-content:center;border:1px solid #000;border-radius:3px;cursor:pointer;transition:all 300ms ease-in-out;&:hover{background-color:#fff;color:#000;}}div.delete-modal-content{display:flex;flex-direction:column;p{font-size:1.2rem;font-weight:bold;}button{font-size:1.1rem;font-weight:bold;padding-block:0.3rem;background-color:red;border-color:red;&:hover{background-color:transparent;}}}}}}button{margin-right:5px;background-color:#000;color:#fff;font-weight:bold;cursor:pointer;transition:all 300ms ease-in-out;&:hover{background-color:transparent;color:#000;}}button.room-details{width:5rem;background-color:#00D100;border:2.5px solid #00D100;&:hover{background-color:transparent;}}button.delete-room{background-color:red;border:2.5px solid red;&:hover{background-color:transparent;}}}div.room-modal{display:none;direction:ltr;width:100%;height:90vh;background-color:rgba(255,255,255,0.6);padding-top:4rem;position:fixed;top:0;left:0;border-bottom:1px solid;@media(min-width:1400px){padding-top:5rem;}div.modal-body{width:79.8%;height:100%;padding-top:1rem;background-color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:space-between;overflow-y:scroll;span{width:1rem;height:1rem;position:absolute;left:77%;bottom:85.5%;background-color:#000;color:#fff;display:flex;align-items:center;justify-content:center;border:1px solid;border-radius:5px;cursor:pointer;transition:all 300ms ease;&:hover{background-color:transparent;color:#000;border:1px solid #000;}}div.modal-conten{width:100%;height:90vh;padding-bottom:6rem;direction:rtl;form.room-form{display:flex;flex-wrap:wrap;gap:1rem;padding-inline:2rem;padding-bottom:6rem;input{padding:0.5rem 0.5rem;margin-bottom:0.5rem;}textarea{resize:none;margin-left:1rem;font-size:1rem;padding:0.5rem;}select{width:14rem;padding:0.5rem 3px;font-size:1.1rem;}}option{font-size:1.2rem;line-height:1.5rem;}div.footer{width:78.5%;position:absolute;bottom:0;left:0;background-color:#fff;display:flex;justify-content:space-between;align-items:center;padding-block:0.8rem;border:1px solid #ccc;button{margin-inline:1rem;font-size:1.1rem;padding:0.2rem 0.5rem;cursor:pointer;transition:all 300ms ease-in-out;}button.add{background-color:#000;color:#fff;&:hover{background-color:transparent;color:#000;}}button.delete{padding-inline:1rem;&:hover{background-color:#000;color:#fff;}}}div.rooms-numbers-container{width:100%;padding-top:1rem;direction:rtl;display:flex;gap:2rem;border-top:1px solid #ccc;div.dates-tabs{padding-left:1rem;border-left:1px solid #ccc;h4.dates-tab{padding:1rem;border:1px solid #000;border-radius:5px;cursor:pointer;transition:all 300ms ease-in-out;&:hover{background-color:#000;color:#fff;}}h4.active-dates-tab{background-color:#000;color:#fff;&:hover{background-color:transparent;color:#000;}}}div.dates-tabs-content{div.dates-tab-content{display:none;width:64vw;height:fit-content;max-height:86%;border:1px solid #ccc;overflow-y:scroll;}div.active-dates-tab-content{display:flex;flex-flow:row wrap;div{width:13.2%;height:1rem;display:flex;align-items:center;padding-block:1rem;padding-inline-start:0.5rem;border-left:1px solid #ccc;border-bottom:1px solid #ccc;cursor:pointer;&:hover{background-color:#ccc;}input{width:1rem;height:1rem;}}div.add-date{width:26.5%;padding-inline:0.5rem;justify-content:space-around;align-items:baseline;input{width:6rem;height:0.6rem;margin-bottom:1rem;}button.add-date-btn{padding-block:0.2rem;font-size:1rem;margin-bottom:1rem;background-color:#00D100;border:1px solid #00D100;color:#fff;cursor:pointer;transition:all 300ms ease-in-out;&:hover{background-color:#fff;color:#000;}}}}button.delete-dates{width:14%;min-height:3rem;justify-self:flex-end;font-size:1rem;font-weight:bold;background-color:red;color:#fff;border:1px solid red;cursor:pointer;transition:all 300ms ease-in-out;&:hover{background-color:transparent;color:#000;}}}}}}div.loading{width:80vw;height:100vh;position:absolute;background-color:rgba(255,255,255,0.6);z-index:10;display:flex;align-items:center;justify-content:center;font-size:2rem;font-weight:bold;}}"]);

const Rooms = ({
  camps
}) => {
  const {
    0: roomType,
    1: setRoomType
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: roomAraType,
    1: setRoomAraType
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: roomPrice,
    1: setRoomPrice
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: maxPeople,
    1: setMaxPeople
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: roomDescription,
    1: setRoomDescription
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: roomAraDescription,
    1: setRoomAraDescription
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: campName,
    1: setCampName
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: campId,
    1: setCampId
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const {
    0: roomsNumbers,
    1: setRoomsNumbers
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: isCreated,
    1: setIsCreated
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false); // Fetch all rooms

  const {
    0: rooms,
    1: setRooms
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const fetchRooms = async () => {
      try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`${"https://powerful-sunglasses-newt.cyclic.app"}/api/admin/rooms`);
        setRooms(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRooms();
  }, [isCreated]);
  /* Create New Room */
  // Handle open/close create room modal

  const openModal = () => {
    document.getElementById('room-modal').style.display = "block";
    document.querySelector('body').style.overflowY = "hidden";
  };

  const closeModal = e => {
    e.preventDefault();
    document.getElementById('room-modal').style.display = "none";
    document.querySelector('body').style.overflowY = "auto";
  }; // Extract camp data


  const setCamp = e => {
    setCampName(Array.from(e.target).map(el => {
      if (el.value === e.target.value) {
        return el.innerText;
      }
    }).filter(el => {
      return el !== undefined;
    })[0].split(","));
    setCampId(e.target.value);
  }; // Extract rooms number 


  const createRoomsNumbers = e => {
    const rooms = e.target.value.split(",").map(room => ({
      roomNumber: Number(room)
    }));
    setRoomsNumbers(rooms);
  }; //--- Create new room


  const createRoom = async e => {
    e.preventDefault();

    try {
      setLoading(!loading);
      await axios__WEBPACK_IMPORTED_MODULE_2___default().post(`${"https://powerful-sunglasses-newt.cyclic.app"}/api/admin/rooms?campId=${campId}`, {
        roomType: [roomType, roomAraType],
        price: Number(roomPrice),
        maxPeople: Number(maxPeople),
        description: [roomDescription, roomAraDescription],
        campName: campName,
        roomNumbers: roomsNumbers,
        campId: campId
      });
      setTimeout(() => {
        setLoading(loading);
        closeModal(e);
        setIsCreated(!isCreated);
      }, 1000);
      document.getElementById("create-room-form").reset();
    } catch (error) {
      console.error(error);
    }
  };
  /* End Create New Room */

  /* Update Existing room */
  // Fetch single room by id


  const {
    0: singleRoom,
    1: setSingleRoom
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const {
    0: toggleActiveDatesTab,
    1: setToggleActiveDatesTab
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1); // const [unavailableDates, setUnavailableDates] = useState([]);
  // const [reFetchSingleRoomCampId, setReFetchSingleRoomCampId] = useState();

  const fetchSingleRoom = async (roomId, btnId) => {
    try {
      document.getElementById(btnId).disabled = true;
      const res = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`${"https://powerful-sunglasses-newt.cyclic.app"}/api/admin/rooms/${roomId}`);
      setSingleRoom(res.data);
      setRoomAraType(res.data.roomType[1]);
      setRoomType(res.data.roomType[0]);
      setRoomPrice(res.data.price);
      setMaxPeople(res.data.maxPeople);
      setRoomAraDescription(res.data.description[1]);
      setRoomDescription(res.data.description[0]);
      setTimeout(() => {
        openRoomDetailsModal(roomId);
      }, 1000);
    } catch (error) {
      console.error(error);
    }
  }; // Handle open/close room details modal


  const openRoomDetailsModal = modalId => {
    document.getElementById(modalId).style.display = "block";
    document.querySelector("body").style.overflowY = "hidden";
  };

  const closeRoomDetailsModal = (e, modalId) => {
    e.preventDefault();
    document.getElementById(modalId).style.display = "none";
    document.querySelector("body").style.overflowY = "auto";
    Array.from(document.getElementsByClassName("room-details")).map(btn => {
      btn.disabled = false;
    });
    setRoomAraType("");
    setRoomType("");
    setRoomPrice(0);
    setMaxPeople(0);
    setRoomAraDescription("");
    setRoomDescription("");
  };

  const updateRoom = async (e, roomId, fromId) => {
    e.preventDefault();

    try {
      setLoading(!loading);
      await axios__WEBPACK_IMPORTED_MODULE_2___default().patch(`${"https://powerful-sunglasses-newt.cyclic.app"}/api/admin/rooms/${roomId}`, {
        roomType: [roomType, roomAraType],
        price: Number(roomPrice),
        maxPeople: Number(maxPeople),
        description: [roomDescription, roomAraDescription]
      });
      setLoading(loading);
      closeRoomDetailsModal(e, roomId);
      setIsCreated(!isCreated);
      document.getElementById(fromId).reset();
    } catch (error) {
      console.error(error);
    }
  }; //--- Handle update room's availability
  // Mark all unavailable dates
  // const markAll = (roomId, dates) => {
  //   dates.map(date => {
  //     let checker = document.getElementById(`${roomId}${date}`);
  //     if (!checker.checked) {
  //       checker.checked = true;
  //       setUnavailableDates(dates)
  //     } else {
  //       checker.checked = false;
  //       setUnavailableDates([]);
  //     }
  //   })
  // }
  // // Mark some unavailable dates
  // const markSome = (e, labelId) => {
  //   const date = document.getElementById(labelId).innerHTML;
  //   let newEl, newArr, elIndex
  //   if (e.target.checked) {
  //     newEl = date;
  //     newArr = [...unavailableDates, newEl];
  //     setUnavailableDates(newArr)
  //   } else {
  //     elIndex = unavailableDates.indexOf(date)
  //     if (elIndex > -1) {
  //       unavailableDates.splice(elIndex, 1);
  //       newArr = [...unavailableDates];
  //       setUnavailableDates(newArr);
  //     }
  //   }
  // }
  // const reFetchSingleRoom = async (campId) => {
  //   try {
  //     const res = await axios.get(`${process.env.NEXT_PUBLIC_DOMAIN_NAME}/api/rooms?campId=${campId}`);
  //     setSingleRoom(res.data);
  //   }
  //   catch (error) {
  //     console.error(error)
  //   }
  // };
  // //--- Add new unavailable date
  // const addNewDate = async (e, inputId, roomId) => {
  //   e.preventDefault();
  //   try {
  //     const date = document.getElementById(inputId).value;
  //     const newDate = `${date.split("-")[2]}/${date.split("-")[1]}/${date.split("-")[0]}`
  //     await axios.patch(`${process.env.NEXT_PUBLIC_DOMAIN_NAME}/api/rooms/updateAvailability?remove=off&id=${roomId}`, {
  //       dates: newDate
  //     });
  //     reFetchSingleRoom(reFetchSingleRoomCampId);
  //   }
  //   catch (error) {
  //     console.error(error);
  //   }
  // }
  // //--- Remove unavailable date/dates
  // const removeOldDate = async (e, roomId) => {
  //   e.preventDefault();
  //   try {
  //     await axios.patch(`${process.env.NEXT_PUBLIC_DOMAIN_NAME}/api/rooms/updateAvailability?remove=on&id=${roomId}`, {
  //       dates: unavailableDates
  //     })
  //     reFetchSingleRoom(reFetchSingleRoomCampId);
  //     setUnavailableDates([]);
  //   }
  //   catch (error) {
  //     console.error(error);
  //   }
  // };

  /* End Update Existing room */

  /* Delete Room */
  // handle open/close delete room modal


  const openDeleteModal = modalId => {
    document.getElementById(modalId).style.display = "flex";
    document.querySelector("body").style.overflowY = "hidden";
  };

  const closeDeleteModal = modalId => {
    document.getElementById(modalId).style.display = "none";
    document.querySelector("body").style.overflowY = "auto";
  };

  const deleteRoom = async (roomId, roomScampId) => {
    try {
      await axios__WEBPACK_IMPORTED_MODULE_2___default()["delete"](`${"https://powerful-sunglasses-newt.cyclic.app"}/api/admin/rooms/${roomId}?campId=${roomScampId}`);
      Array.from(document.getElementsByClassName("delete-modal")).map(el => el.style.display = "none");
      setIsCreated(!isCreated);
    } catch (error) {
      console.error(error);
    }
  };
  /* End Delete Room */


  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(Container, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "header",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h1", {
        children: "\u0627\u0644\u063A\u0631\u0641"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
        onClick: openModal,
        children: "\u0627\u0636\u0641 \u063A\u0631\u0641\u0629 \u062C\u062F\u064A\u062F\u0629"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("table", {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("thead", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
            children: "\u0646\u0648\u0639 \u0627\u0644\u063A\u0631\u0641\u0629"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
            children: "\u0627\u0644\u0645\u062E\u064A\u0645"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
            children: "\u0627\u0644\u0648\u0635\u0641"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
            children: "\u0639\u062F\u062F \u0627\u0644\u0623\u0634\u062E\u0627\u0635"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
            children: "\u0627\u0644\u0633\u0639\u0631"
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("tbody", {
        children: rooms && rooms.map(room => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
            children: room.roomType[1]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
            children: room.campName[1]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
            children: room.description[1]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
            children: room.maxPeople
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("td", {
            children: ["$", room.price]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
              id: `${room._id}btn`,
              className: "room-details",
              onClick: () => fetchSingleRoom(room._id, `${room._id}btn`),
              children: "\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u063A\u0631\u0641\u0629"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("td", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
              className: "delete-room",
              onClick: () => openDeleteModal(`${room._id}delete`),
              children: "\u0645\u0633\u062D"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
              className: "delete-modal",
              id: `${room._id}delete`,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "delete-modal-body",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                  onClick: () => closeDeleteModal(`${room._id}delete`),
                  children: "x"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: "delete-modal-content",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
                    children: "\u0647\u0644 \u062A\u0631\u064A\u062F \u0625\u0632\u0627\u0644\u0629 \u0647\u0630\u0647 \u0627\u0644\u063A\u0631\u0641\u0629\u061F"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
                    onClick: () => deleteRoom(room._id, room.campId),
                    children: "\u0646\u0639\u0645"
                  })]
                })]
              })
            })]
          })]
        }, room._id))
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      id: "room-modal",
      className: "room-modal",
      children: [loading && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: "loading",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
          children: "Loading..."
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "modal-body",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
          onClick: closeModal,
          children: "x"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: "modal-conten",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("form", {
            id: "create-room-form",
            className: "room-form",
            onSubmit: e => createRoom(e),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h3", {
                children: "\u0646\u0648\u0639 \u0627\u0644\u063A\u0631\u0641\u0629"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("input", {
                type: "text",
                placeholder: "\u0639\u0631\u0628\u064A",
                required: true,
                onChange: e => setRoomAraType(e.target.value)
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("input", {
                type: "text",
                dir: "ltr",
                placeholder: "English",
                required: true,
                onChange: e => setRoomType(e.target.value)
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h3", {
                children: "\u0627\u0644\u0633\u0639\u0631"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("input", {
                type: "number",
                required: true,
                onChange: e => setRoomPrice(e.target.value)
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h3", {
                children: "\u0639\u062F\u062F \u0627\u0644\u0623\u0634\u062E\u0627\u0635"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("input", {
                type: "number",
                required: true,
                onChange: e => setMaxPeople(e.target.value)
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h3", {
                children: "\u0648\u0635\u0641 \u0627\u0644\u063A\u0631\u0641\u0629"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                style: {
                  display: 'flex'
                },
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("textarea", {
                  cols: "50",
                  rows: "6",
                  placeholder: "\u0639\u0631\u0628\u064A",
                  required: true,
                  onChange: e => setRoomAraDescription(e.target.value)
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("textarea", {
                  cols: "50",
                  rows: "6",
                  dir: "ltr",
                  placeholder: "English",
                  required: true,
                  onChange: e => setRoomDescription(e.target.value)
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h3", {
                children: "\u0627\u0644\u0645\u062E\u064A\u0645"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("select", {
                name: "camps",
                id: "camps",
                required: true,
                onChange: e => setCamp(e),
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("option", {
                  value: "",
                  children: "\u0627\u062E\u062A\u0631 \u0645\u062E\u064A\u062E\u0645"
                }), camps && camps.map(camp => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("option", {
                  id: camp._id,
                  value: camp._id,
                  children: camp.name.toString()
                }, camp._id))]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              style: {
                float: 'left'
              },
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h3", {
                children: "\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u063A\u0631\u0641"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("textarea", {
                dir: "ltr",
                cols: "40",
                placeholder: "1,2,3,...",
                required: true,
                onChange: e => createRoomsNumbers(e)
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "footer",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
                className: "add",
                type: "submit",
                children: "\u0627\u0636\u0641 \u0627\u0644\u063A\u0631\u0641\u0629"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
                className: "delete",
                onClick: e => closeModal(e),
                children: "\u0627\u0644\u063A\u0627\u0621"
              })]
            })]
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      id: singleRoom && singleRoom._id,
      className: "room-modal",
      children: [loading && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: "loading",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
          children: "Loading..."
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "modal-body",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
          onClick: e => closeRoomDetailsModal(e, singleRoom && singleRoom._id),
          children: "x"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: "modal-conten",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("form", {
            id: `${singleRoom && singleRoom._id}room-details-form`,
            className: "room-form",
            onSubmit: e => updateRoom(e, singleRoom && singleRoom._id, `${singleRoom && singleRoom._id}room-details-form`),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h3", {
                children: "\u0646\u0648\u0639 \u0627\u0644\u063A\u0631\u0641\u0629"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("input", {
                type: "text",
                placeholder: "\u0639\u0631\u0628\u064A",
                required: true,
                defaultValue: singleRoom && singleRoom.roomType[1],
                onChange: e => setRoomAraType(e.target.value)
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("input", {
                type: "text",
                dir: "ltr",
                placeholder: "English",
                required: true,
                defaultValue: singleRoom && singleRoom.roomType[0],
                onChange: e => setRoomType(e.target.value)
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h3", {
                children: "\u0627\u0644\u0633\u0639\u0631"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("input", {
                type: "number",
                required: true,
                defaultValue: singleRoom && singleRoom.price,
                onChange: e => setRoomPrice(e.target.value)
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h3", {
                children: "\u0639\u062F\u062F \u0627\u0644\u0623\u0634\u062E\u0627\u0635"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("input", {
                type: "number",
                required: true,
                defaultValue: singleRoom && singleRoom.maxPeople,
                onChange: e => setMaxPeople(e.target.value)
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h3", {
                children: "\u0627\u0644\u0645\u062E\u064A\u0645"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("input", {
                type: "text",
                defaultValue: singleRoom && singleRoom.campName[1],
                readOnly: true
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h3", {
                children: "\u0648\u0635\u0641 \u0627\u0644\u063A\u0631\u0641\u0629"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                style: {
                  display: 'flex'
                },
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("textarea", {
                  cols: "50",
                  rows: "6",
                  placeholder: "\u0639\u0631\u0628\u064A",
                  required: true,
                  defaultValue: singleRoom && singleRoom.description[1],
                  onChange: e => setRoomAraDescription(e.target.value)
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("textarea", {
                  cols: "50",
                  rows: "6",
                  dir: "ltr",
                  placeholder: "English",
                  required: true,
                  defaultValue: singleRoom && singleRoom.description[0],
                  onChange: e => setRoomDescription(e.target.value)
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "footer",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
                className: "add",
                type: "submit",
                children: "\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u062A\u0639\u062F\u064A\u0644\u0627\u062A"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
                className: "delete",
                onClick: e => closeRoomDetailsModal(e, singleRoom && singleRoom._id),
                children: "\u0627\u0644\u063A\u0627\u0621"
              })]
            })]
          })
        })]
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Rooms);

/***/ }),

/***/ 3813:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "Services__Container",
  componentId: "sc-1ojzgeq-0"
})(["width:100%;height:100vh;margin:0%;div.header{display:flex;justify-content:center;align-items:center;padding-inline:1rem;border-bottom:1px solid #ccc;button{margin-top:1.1rem;font-size:1.1rem;font-weight:bold;padding-block:0.4rem;background-color:transparent;color:#000;border:2px solid #ccc;cursor:pointer;transition:all 300ms ease-in-out;&:hover{background-color:#000;color:#fff;border-color:#000;}}.active{button{background-color:#000;color:#fff;border-color:#000;&:hover{background-color:transparent;color:#000;}}}}div.tabs-container{div.tab{display:none;}}"]);

const Services = ({
  language
}) => {
  const {
    0: toggleActiveTab,
    1: setToggleActiveTab
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(Container, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "header",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: toggleActiveTab === 1 ? "active" : "not-active",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("button", {
          onClick: () => setToggleActiveTab(1),
          children: "\u0627\u0641\u0636\u0644 \u0627\u0644\u0648\u062C\u0647\u0627\u062A"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: toggleActiveTab === 2 ? "active" : "not-active",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("button", {
          onClick: () => setToggleActiveTab(2),
          children: "\u0633\u064A\u0627\u0631\u0627\u062A \u0644\u0644\u0627\u064A\u062C\u0627\u0631"
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "tabs-container",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: toggleActiveTab === 1 ? "active-tab" : "tab",
        children: "tab 1"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: toggleActiveTab === 2 ? "active-tab" : "tab",
        children: "tab 2"
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Services);

/***/ }),

/***/ 3190:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ admin_Trips)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "react-bootstrap-icons"
var external_react_bootstrap_icons_ = __webpack_require__(3468);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/admin/TripsOrders.js






const Container = external_styled_components_default().div.withConfig({
  displayName: "TripsOrders__Container",
  componentId: "sc-j49rqe-0"
})(["width:100%;height:100%;margin:0%;table.trip-orders{width:97%;margin-top:1rem;text-align:right;margin-inline:1rem;padding-inline-start:0.5rem;box-shadow:1px 0.5px 2px 1px #ccc;.trip-name{text-align:right;pre{display:inline;position:relative;right:10px;background-color:red;color:#fff;border-radius:5px;padding-inline:4px}}tbody{display:block;overflow-y:scroll;width:100%;max-height:400px;}thead,tr{width:100%;display:block;th{width:8.7rem;padding-block:1rem;font-size:1.1rem;text-align:center;}}td{width:16%;text-align:center;border:1px solid #ccc;select{max-width:7.5rem;margin-top:0.3rem;margin-bottom:0.3rem;text-align:center;cursor:pointer;}button.details{width:5rem;margin-right:unset;background-color:#00D100;border:1px solid #00D100;&:hover{background-color:transparent;}}button.delete{background-color:red;border:1px solid red;&:hover{background-color:transparent;}}span.update-success{width:1.4rem;height:1.4rem;position:static;display:none;justify-content:center;align-items:center;background-color:#00D100;color:#fff;font-weight:bold;margin-right:5px;border-radius:50%;}}div.order-modal{display:none;direction:", ";width:100%;height:90vh;background-color:#fff;padding-top:4rem;position:fixed;top:0;left:0;border-bottom:1px solid;z-index:10;overflow-y:scroll;span.close-modal{width:1.2rem;height:1.2rem;display:flex;justify-content:center;align-items:center;color:#fff;background-color:red;position:fixed;left:", ";margin-inline-end:2rem;margin-top:1rem;border:1px solid red;border-radius:5px;cursor:pointer;transition:all 300ms ease-in-out;&:hover{background-color:transparent;color:red;}}div.modal-content{width:100%;display:flex;flex-direction:column;align-items:center;text-align:center;div{width:60%;border-block:1px solid #ccc;h2{margin-top:1rem;}h3{text-decoration:underline;}}div.extra-option{width:100%;display:flex;border-block:none;}}}div.delete-order-modal{width:100vw;height:100vh;position:fixed;left:0;top:0;background-color:rgba(255,255,255,0.2);display:none;align-items:center;justify-content:center;z-index:10;div{background-color:#fff;width:30%;height:25%;display:flex;flex-direction:column;justify-content:space-between;align-items:center;padding-bottom:1rem;border:1px solid #000;border-radius:5px;span{position:relative;top:7px;right:7px;align-self:flex-start;}p{font-size:1.1rem;}button{font-size:1.1rem;font-weight:bold;width:5rem;background-color:red;border:1px solid red;&:hover{background-color:transparent;}}}}}"], ({
  language
}) => language === "English" ? "ltr" : "rtl", ({
  language
}) => language === "English" ? "97%" : "0%");

const TripsOrders = ({
  currentTripId,
  language
}) => {
  const {
    0: singleOrder,
    1: setSingleOrder
  } = (0,external_react_.useState)();
  const {
    0: orderState,
    1: setOrderState
  } = (0,external_react_.useState)("");
  const {
    0: isUpdated,
    1: setIsUpdated
  } = (0,external_react_.useState)(false); // Fetch trip orders

  const {
    0: tripOrders,
    1: setTripOrders
  } = (0,external_react_.useState)();
  (0,external_react_.useEffect)(() => {
    const fetchTripOrders = async () => {
      try {
        const res = await external_axios_default().get(`${"https://powerful-sunglasses-newt.cyclic.app"}/api/admin/tripsOrders/${currentTripId}`);
        setTripOrders(res.data.reverse());
      } catch (error) {
        console.error(error);
      }
    };

    if (currentTripId) {
      fetchTripOrders();
    }
  }, [currentTripId, isUpdated]); // Fetch single order data

  const fetchOrder = async (orderId, notificaitonsSpan) => {
    try {
      const res = await external_axios_default().patch(`${"https://powerful-sunglasses-newt.cyclic.app"}/api/trip-order/${orderId}`, {
        new: false
      });
      setSingleOrder(res.data);
      openOrderModal(`${orderId}trip-order-modal`);
      document.getElementById(notificaitonsSpan).style.display = "none";
    } catch (error) {
      console.error(error);
    }
  };

  const openOrderModal = modalId => {
    document.getElementById(modalId).style.display = "block";
    document.querySelector("body").style.overflowY = "hidden";
  };

  const closeOrderModal = modalId => {
    document.getElementById(modalId).style.display = "none";
    document.querySelector("body").style.overflowY = "auto";
  }; // Update order payment state


  const {
    0: paymentState,
    1: setPaymentState
  } = (0,external_react_.useState)('');

  const updatPayment = async (orderId, successSpanId) => {
    try {
      await external_axios_default().patch(`${"https://powerful-sunglasses-newt.cyclic.app"}/api/trip-order/${orderId}`, {
        state: paymentState
      });
      setIsUpdated(!isUpdated);
      setPaymentState('');
      document.getElementById(successSpanId).style.display = "inline-flex";
      setTimeout(() => {
        document.getElementById(successSpanId).style.display = "none";
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };
  /* Delete Order */


  const deleteOrder = async (orderId, tripId) => {
    try {
      await external_axios_default()["delete"](`${"https://powerful-sunglasses-newt.cyclic.app"}/api/trip-order/${orderId}?tripId=${tripId}`);
      closeDeleteModal();
      setIsUpdated(!isUpdated);
    } catch (error) {
      console.error(error);
    }
  }; // Open/close delete modal


  const openDeleteModal = modalId => {
    document.getElementById(modalId).style.display = "flex";
    document.querySelector("body").style.overflowY = "hidden";
  };

  const closeDeleteModal = () => {
    Array.from(document.getElementsByClassName("delete-order-modal")).map(modal => {
      modal.style.display = "none";
    });
    document.querySelector("body").style.overflowY = "auto";
  };
  /* End Delete Order */


  return /*#__PURE__*/jsx_runtime_.jsx(Container, {
    language: language,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("table", {
      className: "trip-orders",
      children: [/*#__PURE__*/jsx_runtime_.jsx("thead", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
            className: "trip-name",
            children: "\u0627\u0644\u0631\u062D\u0644\u0629"
          }), /*#__PURE__*/jsx_runtime_.jsx("th", {
            children: "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0628\u062F\u0621"
          }), /*#__PURE__*/jsx_runtime_.jsx("th", {
            children: "\u0627\u0633\u0645 \u0627\u0644\u0639\u0645\u064A\u0644"
          }), /*#__PURE__*/jsx_runtime_.jsx("th", {
            children: "\u0639\u062F\u062F \u0627\u0644\u062A\u0630\u0627\u0643\u0631"
          }), /*#__PURE__*/jsx_runtime_.jsx("th", {
            children: "\u0627\u0644\u062F\u0641\u0639"
          }), /*#__PURE__*/jsx_runtime_.jsx("th", {
            children: "\u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A"
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("tbody", {
        children: tripOrders && tripOrders.map(order => /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("td", {
            className: "trip-name",
            children: [order && order.orderDetails.title[1], " ", order && order.new === true && /*#__PURE__*/jsx_runtime_.jsx("pre", {
              id: `${order && order._id}new-order`,
              children: "\u062C\u062F\u064A\u062F"
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: order && order.orderDetails.startDate
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: `
                  ${order && order.clientInfo.fullName.split(" ")[0]}
                  ${order && order.clientInfo.fullName.split(" ")[order && order.clientInfo.fullName.split(" ").length - 1]}
                  `
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: (order && order.orderDetails.tickets.adults) + (order && order.orderDetails.tickets.children)
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("td", {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("select", {
              defaultValue: order && order.state,
              onChange: e => setPaymentState(e.target.value),
              children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "Not Paid",
                children: "Not Paid"
              }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "Down Payment",
                children: "Down Payment"
              }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "Paid",
                children: "Paid"
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("button", {
              onClick: () => updatPayment(order && order._id, `${order && order._id}update-success`),
              children: "\u062A\u062D\u062F\u064A\u062B"
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              id: `${order && order._id}update-success`,
              className: "update-success",
              children: "\u2713"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("td", {
            children: [order && order.orderDetails.total, "\u062C\u0646\u064A\u0647"]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("td", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
              onClick: () => fetchOrder(order && order._id, `${order && order._id}new-order`),
              className: "details",
              children: "\u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              id: `${order && order._id}trip-order-modal`,
              className: "order-modal",
              language: language,
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "order-modal-body",
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "close-modal",
                  onClick: () => closeOrderModal(`${singleOrder && singleOrder._id}trip-order-modal`),
                  children: "x"
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "modal-content",
                  language: language,
                  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h2", {
                    dir: "ltr",
                    style: {
                      marginTop: '4rem'
                    },
                    children: ["id: ", singleOrder && singleOrder._id]
                  }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
                    children: language === "English" ? `
                              Reservation to ${singleOrder && singleOrder.orderDetails.title[0]} -- 
                              Start Date: ${singleOrder && singleOrder.orderDetails.startDate} -- 
                              Duration: ${singleOrder && singleOrder.orderDetails.duration} Days
                              ` : `
                              حجز رحلة ${singleOrder && singleOrder.orderDetails.title[1]} -- 
                              تاريخ البدء ${singleOrder && singleOrder.orderDetails.startDate} -- 
                              مدة الرحلة: ${singleOrder && singleOrder.orderDetails.duration} ايام
                              `
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("h2", {
                      children: [language === "English" ? "Payment State:" : "حلة الدفع:", " ", singleOrder && singleOrder.state]
                    })
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
                      children: language === "English" ? "Client Info" : "بيانات العميل"
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
                      children: [language === "English" ? "Client Name: " : "إسم العميل: ", singleOrder && singleOrder.clientInfo.fullName]
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
                      children: [language === "English" ? "Email: " : "البريد الإلكتروني: ", singleOrder && singleOrder.clientInfo.email]
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
                      children: [language === "English" ? "Phone number: " : "رقم التيليفون: ", /*#__PURE__*/jsx_runtime_.jsx("pre", {
                        dir: "ltr",
                        style: {
                          display: 'inline',
                          fontFamily: 'unset'
                        },
                        children: singleOrder && singleOrder.clientInfo.phoneNumber
                      })]
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
                      children: language === "English" ? "Order Details" : "تفاصيل الحجز"
                    }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
                      children: language === "English" ? "Ticket Price" : "ثمن التذكرة"
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      style: {
                        width: '100%',
                        display: "flex",
                        justifyContent: 'space-between'
                      },
                      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h4", {
                        children: [language === "English" ? "Adult:" : "بالغ:", " ", language === "English" && "EGP", " ", singleOrder && singleOrder.orderDetails.ticketPrice, " ", language === "العربية" && "جنيه"]
                      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h4", {
                        children: [language === "English" ? "Child:" : "طفل:", " ", language === "English" && "EGP", " ", singleOrder && singleOrder.orderDetails.ticketPrice, " ", language === "العربية" && "جنيه"]
                      })]
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
                      children: [language === "English" ? "Tickets Count" : "عدد التذاكر", " ", (singleOrder && singleOrder.orderDetails.tickets.adults) + (singleOrder && singleOrder.orderDetails.tickets.children)]
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      style: {
                        width: '100%',
                        display: "flex",
                        justifyContent: 'space-between'
                      },
                      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h4", {
                        children: [language === "English" ? `Adults:` : `بالغين:`, " ", singleOrder && singleOrder.orderDetails.tickets.adults]
                      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h4", {
                        children: [language === "English" ? `Children:` : `اطفال:`, " ", singleOrder && singleOrder.orderDetails.tickets.children]
                      })]
                    }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
                      children: language === "English" ? "Extra Options" : "إختيارات إضافية"
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      style: {
                        width: '100%'
                      },
                      children: singleOrder && singleOrder.orderDetails.extraOptions.map(option => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                        className: "extra-option",
                        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "extra-option",
                          style: {
                            justifyContent: 'flex-start'
                          },
                          children: /*#__PURE__*/jsx_runtime_.jsx("h4", {
                            children: language === "English" ? option.text[0] : option.text[1]
                          })
                        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "extra-option",
                          style: {
                            justifyContent: 'flex-end'
                          },
                          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("h4", {
                            children: [language === "English" ? "Price:" : "السعر:", " ", language === "English" && "EGP", " ", option.price, " ", language === "العربية" && "جنيه"]
                          })
                        })]
                      }, option._id))
                    }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
                      children: language === "English" ? "Total" : "الإجمالي"
                    }), /*#__PURE__*/jsx_runtime_.jsx("h4", {
                      children: language === "English" ? `
                              ${singleOrder && singleOrder.orderDetails.tickets.adults} adults x EGP 
                              ${singleOrder && singleOrder.orderDetails.ticketPrice} = EGP ${(singleOrder && singleOrder.orderDetails.tickets.adults) * (singleOrder && singleOrder.orderDetails.ticketPrice)}
                              ` : `
                                ${singleOrder && singleOrder.orderDetails.tickets.adults} بالغين * ${singleOrder && singleOrder.orderDetails.ticketPrice} جنيه = ${(singleOrder && singleOrder.orderDetails.tickets.adults) * (singleOrder && singleOrder.orderDetails.ticketPrice)} جنيه
                                `
                    }), singleOrder && singleOrder.orderDetails.tickets.children > 0 && /*#__PURE__*/jsx_runtime_.jsx("h4", {
                      children: language === "English" ? `
                              ${singleOrder && singleOrder.orderDetails.tickets.children} children x EGP 
                              ${singleOrder && singleOrder.orderDetails.ticketPrice} = EGP ${(singleOrder && singleOrder.orderDetails.tickets.children) * (singleOrder && singleOrder.orderDetails.ticketPrice)}
                              ` : `
                                ${singleOrder && singleOrder.orderDetails.tickets.children} اطفال * ${singleOrder && singleOrder.orderDetails.ticketPrice} جنيه = ${(singleOrder && singleOrder.orderDetails.tickets.children) * (singleOrder && singleOrder.orderDetails.ticketPrice)} جنيه
                                  `
                    }), singleOrder && singleOrder.orderDetails.extraOptions.length > 0 && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                      children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                        children: language === "English" ? "extra option" : "إختيارات إضافية"
                      }), singleOrder.orderDetails.extraOptions.map(option => /*#__PURE__*/jsx_runtime_.jsx("h4", {
                        children: language === "English" ? `
                                  ${option.text[0]}: EGP ${option.price} x ${singleOrder && singleOrder.orderDetails.tickets.adults} ${singleOrder && singleOrder.orderDetails.tickets.adults >= 1 && singleOrder.orderDetails.tickets.children > 0 ? "adults" : 'person'}
                                        = ${option.price * (singleOrder && singleOrder.orderDetails.tickets.adults)}
                                        ` : `
                                        ${option.text[1]}: ${option.price} جنيه * ${singleOrder && singleOrder.orderDetails.tickets.adults} ${singleOrder && singleOrder.orderDetails.tickets.adults >= 1 && singleOrder.orderDetails.tickets.children > 0 ? "افراد بالغين" : 'شخص'}
                                        = ${option.price * (singleOrder && singleOrder.orderDetails.tickets.adults)} جنيه
                                  `
                      }, `${option._id}total`))]
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      style: {
                        width: '100%'
                      },
                      children: singleOrder && /*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
                        children: [language === "English" && "EGP", " ", singleOrder && singleOrder.orderDetails.total, " ", language === "العربية" && "جنيه"]
                      })
                    })]
                  })]
                })]
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("td", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
              onClick: () => openDeleteModal(`${order && order._id}delete-modal`),
              className: "delete",
              children: "\u0645\u0633\u062D"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              id: `${order && order._id}delete-modal`,
              className: "delete-order-modal",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "delete-modal-content",
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  onClick: closeDeleteModal,
                  className: "close-delete-modal",
                  children: "x"
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: "\u0647\u0644 \u062A\u0631\u064A\u062F \u0625\u0632\u0627\u0644\u0629 \u0647\u0630\u0627 \u0627\u0644\u062D\u062C\u0632\u061F"
                }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                  onClick: () => deleteOrder(order && order._id, order && order.tripId),
                  children: "\u0646\u0639\u0645"
                })]
              })
            })]
          })]
        }, order && order._id))
      })]
    })
  });
};

/* harmony default export */ const admin_TripsOrders = (TripsOrders);
;// CONCATENATED MODULE: ./components/admin/Trips.js







const Trips_Container = external_styled_components_default().div.withConfig({
  displayName: "Trips__Container",
  componentId: "sc-1celmt0-0"
})(["width:100%;height:100%;margin:0%;div.header{display:flex;justify-content:space-between;align-items:center;padding-inline:1rem;border-bottom:1px solid #ccc;h1{margin-top:0;margin-bottom:0;padding-top:1.1rem;}button{font-size:1.1rem;font-weight:bold;padding-block:0.4rem;background-color:#000;color:#fff;cursor:pointer;transition:all 300ms ease-in-out;&:hover{background-color:transparent;color:#000;}}}table{width:97%;margin-top:1rem;text-align:right;margin-inline:1rem;padding-inline:0.5rem;box-shadow:1px 0.5px 2px 1px #ccc;thead{width:100%;th{width:20%;padding-block:1rem;font-size:1.1rem;}}td{height:3.5rem;border-top:1px solid #ccc;border-left:1px solid #ccc;padding-inline:5px;span.order-notifications{width:1rem;height:1rem;display:inline-flex;justify-content:center;align-items:center;background-color:red;color:#fff;font-size:0.6rem;border-radius:50%;position:absolute;left:-4px;top:-10px;}div.tickets-container{width:100%;display:inline-flex;justify-content:space-between;position:relative;button{background-color:#00D100;border:1px solid #00D100;&:hover{background-color:transparent;}}}div.delete-modal{width:100vw;height:100vh;position:fixed;top:0;left:0;display:none;justify-content:center;align-items:center;background-color:rgba(255,255,255,0.6);z-index:20;div.delete-modal-body{width:30%;height:30%;background-color:#e0e0e0;display:flex;align-items:center;justify-content:center;border-radius:5px;span{position:absolute;right:35.5%;top:36%;width:1.2rem;height:1.2rem;background-color:#000;color:#fff;font-weight:bold;display:flex;align-items:center;justify-content:center;border:1px solid #000;border-radius:3px;cursor:pointer;transition:all 300ms ease-in-out;&:hover{background-color:#fff;color:#000;}}div.delete-modal-content{display:flex;flex-direction:column;p{font-size:1.2rem;font-weight:bold;}button{font-size:1.1rem;font-weight:bold;padding-block:0.3rem;background-color:red;border-color:red;&:hover{background-color:transparent;}}}}}}select{cursor:pointer;}button{margin-right:5px;background-color:#000;color:#fff;font-weight:bold;cursor:pointer;transition:all 300ms ease-in-out;&:hover{background-color:transparent;color:#000;}}button.trip-details{width:5rem;margin-right:unset;background-color:#00D100;border:2.5px solid #00D100;&:hover{background-color:transparent;}&:disabled{opacity:0.5;}}button.delete-trip{background-color:red;border:2.5px solid red;&:hover{background-color:transparent;}}span.done{display:none;padding:0.16rem 0.3rem;background-color:#00D100;color:#fff;border-radius:50%;font-weight:bold;}}div.trip-modal{display:none;direction:ltr;width:100%;height:90vh;background-color:rgba(255,255,255,0.6);padding-top:4rem;position:fixed;top:0;left:0;border-bottom:1px solid;@media(min-width:1400px){padding-top:5rem;}}div.modal-body{width:79.8%;height:100%;padding-top:1rem;background-color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:space-between;span{width:1rem;height:1rem;position:absolute;left:77.5%;bottom:85.5%;background-color:#000;color:#fff;display:flex;align-items:center;justify-content:center;border:1px solid;border-radius:5px;cursor:pointer;transition:all 300ms ease;&:hover{background-color:transparent;color:#000;border:1px solid #000;}}input.image-input{width:45vw;padding-block:0.7rem;}input.upload-image{border:1px solid #ccc;width:25vw;margin-right:2vw;cursor:pointer;}label.delete-img-url{padding:0.23rem 0.5rem;background-color:red;color:#fff;font-weight:bold;border:1px solid red;border-radius:50%;transition:all 300ms ease-in-out;&:hover{background-color:transparent;color:red;}}div.footer{width:79%;position:absolute;bottom:0;left:0;background-color:#fff;display:flex;flex-direction:row-reverse;justify-content:space-between;align-items:center;padding-block:0.8rem;border:1px solid #ccc;button{margin-inline:1rem;font-size:1.1rem;padding:0.2rem 0.5rem;cursor:pointer;transition:all 300ms ease-in-out;}button.add{background-color:#000;color:#fff;&:hover{background-color:transparent;color:#000;}}button#edit{background-color:#000;color:#fff;width:7rem;font-size:1.2rem;font-weight:bold;&:hover{background-color:transparent;color:#000;}}button.delete{padding-inline:1rem;&:hover{background-color:#000;color:#fff;}}}button.cancel{background-color:unset;color:unset;&:hover{background-color:#000;color:#fff}}div.orders-modal-body{width:100%;direction:rtl;h2{margin-top:0;text-align:center;}button.active,button.not-active{display:none;}}}div.trip-details-body{width:80.5vw;overflow-y:scroll;form{max-width:100%;padding-inline:1rem;padding-bottom:7rem;display:flex;flex-flow:row-reverse wrap;gap:1rem;h3{text-align:right;}h4{text-align:right;}label{cursor:pointer;}input{padding:0.5rem 0.5rem;margin-bottom:0.5rem;}textarea{resize:none;margin-left:1rem;font-size:1rem;padding:0.5rem;}}}div.loading{position:absolute;top:0;left:0;z-index:10;width:79%;height:100%;background-color:rgba(255,255,255,0.6);display:flex;align-items:center;justify-content:center;font-size:2rem;font-weight:bold;}"]);

const Trips = ({
  language,
  newTRipsOrdersList
}) => {
  const {
    0: trips,
    1: setTrips
  } = (0,external_react_.useState)();
  const {
    0: trip,
    1: setTrip
  } = (0,external_react_.useState)();
  const {
    0: isCreated,
    1: setIsCreated
  } = (0,external_react_.useState)(false);
  const {
    0: isDeleted,
    1: setIsDeleted
  } = (0,external_react_.useState)(false);
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(false); // Pass the trip id to the trips orders component

  const {
    0: tripIdFetchOrders,
    1: setTripIdFetchOrders
  } = (0,external_react_.useState)(); // Fetch all trips

  (0,external_react_.useEffect)(() => {
    const fetchTrips = async () => {
      try {
        const allTrips = await external_axios_default().get(`${"https://powerful-sunglasses-newt.cyclic.app"}/api/trips`);
        setTrips(allTrips.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTrips();
  }, [isCreated, isDeleted]);
  /* Create New Trip */
  // tirp title

  const {
    0: tripTitle,
    1: setTripTitle
  } = (0,external_react_.useState)("");
  const {
    0: araTripTitle,
    1: setAraTripTitle
  } = (0,external_react_.useState)(""); // trip state

  const {
    0: tripState,
    1: setTripState
  } = (0,external_react_.useState)("");
  const {
    0: tripAraState,
    1: setTripAraState
  } = (0,external_react_.useState)(""); // trip start-end dates

  const {
    0: startDate,
    1: setStartDate
  } = (0,external_react_.useState)("");
  const {
    0: endDate,
    1: setEndDate
  } = (0,external_react_.useState)(""); // trip price

  const {
    0: price,
    1: setPrice
  } = (0,external_react_.useState)(0); // trip destination

  const {
    0: destination,
    1: setDestination
  } = (0,external_react_.useState)("");
  const {
    0: araDestination,
    1: setAraDestination
  } = (0,external_react_.useState)(""); // trip duration

  const {
    0: duration,
    1: setDuration
  } = (0,external_react_.useState)(0); // trip maxPeople

  const {
    0: maxPeople,
    1: setMaxPeople
  } = (0,external_react_.useState)(0); // trip rate

  const {
    0: rate,
    1: setRate
  } = (0,external_react_.useState)(0); // trip overview

  const {
    0: overview,
    1: setOverview
  } = (0,external_react_.useState)("");
  const {
    0: araOverview,
    1: setAraOverview
  } = (0,external_react_.useState)(""); // trip plan
  //--day one

  const {
    0: dayOne,
    1: setDayOne
  } = (0,external_react_.useState)("");
  const {
    0: araDayOne,
    1: setAraDayOne
  } = (0,external_react_.useState)(""); //--day two

  const {
    0: dayTwo,
    1: setDayTwo
  } = (0,external_react_.useState)("");
  const {
    0: araDayTwo,
    1: setAraDayTwo
  } = (0,external_react_.useState)(""); //--day three

  const {
    0: dayThree,
    1: setDayThree
  } = (0,external_react_.useState)("");
  const {
    0: araDayThree,
    1: setAraDayThree
  } = (0,external_react_.useState)(""); // Images 

  const {
    0: files,
    1: setFiles
  } = (0,external_react_.useState)(); // Extra Options

  const {
    0: optionOneText,
    1: setOptionOneText
  } = (0,external_react_.useState)("");
  const {
    0: optionOneAraText,
    1: setOptionOneAraText
  } = (0,external_react_.useState)("");
  const {
    0: optionOnePrice,
    1: setOptionOnePrice
  } = (0,external_react_.useState)(0);
  const {
    0: optionTwoText,
    1: setOptionTwoText
  } = (0,external_react_.useState)("");
  const {
    0: optionTwoAraText,
    1: setOptionTwoAraText
  } = (0,external_react_.useState)("");
  const {
    0: optionTwoPrice,
    1: setOptionTwoPrice
  } = (0,external_react_.useState)(0);
  const {
    0: optionThreeText,
    1: setOptionThreeText
  } = (0,external_react_.useState)("");
  const {
    0: optionThreeAraText,
    1: setOptionThreeAraText
  } = (0,external_react_.useState)("");
  const {
    0: optionThreePrice,
    1: setOptionThreePrice
  } = (0,external_react_.useState)(0); // Add new trip modal

  const openModal = () => {
    document.getElementById('trip-modal').style.display = "block";
    document.querySelector('body').style.overflowY = "hidden";
  };

  const closeModal = () => {
    document.getElementById('trip-modal').style.display = "none";
    document.querySelector('body').style.overflowY = "auto";
  }; // Create new


  const createNewTrip = async e => {
    e.preventDefault();

    try {
      setLoading(!loading);
      const images = await Promise.all(Object.values(files).map(async file => {
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "uploads");
        const uploadRes = await external_axios_default().post("https://api.cloudinary.com/v1_1/dqmqc0uaa/image/upload", data);
        const {
          url
        } = uploadRes.data;
        return url;
      }));
      const newTrip = await external_axios_default().post(`${"https://powerful-sunglasses-newt.cyclic.app"}/api/admin/trips`, {
        title: [tripTitle, araTripTitle],
        state: [tripState, tripAraState],
        destination: [destination, araDestination],
        images: images,
        price: Number(price),
        duration: Number(duration),
        startDate: startDate,
        endDate: endDate,
        maxPeople: Number(maxPeople),
        overview: [overview, araOverview],
        tripPlan: [[dayOne, araDayOne], [dayTwo, araDayTwo], [dayThree, araDayThree]],
        rate: Number(rate),
        extraOptions: [{
          text: [optionOneText, optionOneAraText],
          price: Number(optionOnePrice)
        }, {
          text: [optionTwoText, optionTwoAraText],
          price: Number(optionTwoPrice)
        }, {
          text: [optionThreeText, optionThreeAraText],
          price: Number(optionThreePrice)
        }]
      });
      setLoading(loading);
      document.getElementById("new-trip").reset();
      closeModal();
      setIsCreated(!isCreated);
      setOptionOneText("");
      setOptionOneAraText("");
      setOptionOnePrice(0);
      setOptionTwoText("");
      setOptionTwoAraText("");
      setOptionTwoPrice(0);
      setOptionThreeText("");
      setOptionThreeAraText("");
      setOptionThreePrice(0);
    } catch (error) {
      console.error(error);
    }
  };
  /* End Create New Trip */

  /* Delete Trip */


  const openDeleteTripModal = btnId => {
    document.getElementById(btnId).style.display = "flex";
    document.querySelector("body").style.overflowY = "hidden";
  };

  const closeDeleteTripModal = btnId => {
    document.getElementById(btnId).style.display = "none";
    document.querySelector("body").style.overflowY = "auto";
  };

  const deleteTrip = async tripId => {
    try {
      await external_axios_default()["delete"](`${"https://powerful-sunglasses-newt.cyclic.app"}/api/admin/trips/${tripId}`);
      Array.from(document.getElementsByClassName("delete-modal")).map(el => el.style.display = "none");
      setIsDeleted(!isDeleted);
    } catch (error) {
      console.error(error);
    }
  };
  /* End Delete Trip */

  /* Update Trip */


  const {
    0: img1,
    1: setImg1
  } = (0,external_react_.useState)("");
  const {
    0: img2,
    1: setImg2
  } = (0,external_react_.useState)("");
  const {
    0: img3,
    1: setImg3
  } = (0,external_react_.useState)("");
  const {
    0: img4,
    1: setImg4
  } = (0,external_react_.useState)("");
  const {
    0: img5,
    1: setImg5
  } = (0,external_react_.useState)("");
  const {
    0: tripTickets,
    1: setTripTickets
  } = (0,external_react_.useState)(0); // Trips details modal & inputs to update

  const fetchTrip = async tripId => {
    try {
      document.getElementById(tripId).disabled = true;
      const res = await external_axios_default().get(`${"https://powerful-sunglasses-newt.cyclic.app"}/api/trips/${tripId}`);
      setTrip(res.data); // Set inputs to update

      setTimeout(() => {
        setTripTitle(res.data.title[0]);
        setAraTripTitle(res.data.title[1]);
        setTripState(res.data.state[0]);
        setTripAraState(res.data.state[1]);
        setStartDate(res.data.startDate);
        setEndDate(res.data.endDate);
        setPrice(res.data.price);
        setDestination(res.data.destination[0]);
        setAraDestination(res.data.destination[1]);
        setDuration(res.data.duration);
        setMaxPeople(res.data.maxPeople);
        setRate(res.data.rate);

        if (res.data.extraOptions[0].text[0] !== "") {
          setOptionOneText(res.data.extraOptions[0].text[0]);
          setOptionOneAraText(res.data.extraOptions[0].text[1]);
          setOptionOnePrice(res.data.extraOptions[0].price);
        } else {
          setOptionOneText("");
          setOptionOneAraText("");
          setOptionOnePrice(0);
        }

        ;

        if (res.data.extraOptions[1].text[0] !== "") {
          setOptionTwoText(res.data.extraOptions[1].text[0]);
          setOptionTwoAraText(res.data.extraOptions[1].text[1]);
          setOptionTwoPrice(res.data.extraOptions[1].price);
        } else {
          setOptionTwoText("");
          setOptionTwoAraText("");
          setOptionTwoPrice(0);
        }

        ;

        if (res.data.extraOptions[2].text[0] !== "") {
          setOptionThreeText(res.data.extraOptions[2].text[0]);
          setOptionThreeAraText(res.data.extraOptions[2].text[1]);
          setOptionThreePrice(res.data.extraOptions[2].price);
        } else {
          setOptionThreeText("");
          setOptionThreeAraText("");
          setOptionThreePrice(0);
        }

        ;
        setOverview(res.data.overview[0]);
        setAraOverview(res.data.overview[1]);
        setDayOne(res.data.tripPlan[0][0]);
        setAraDayOne(res.data.tripPlan[0][1]);
        setDayTwo(res.data.tripPlan[1][0]);
        setAraDayTwo(res.data.tripPlan[1][1]);
        setDayThree(res.data.tripPlan[2][0]);
        setAraDayThree(res.data.tripPlan[2][1]);
        setImg1(res.data.images[0] ? res.data.images[0] : "");
        setImg2(res.data.images[1] ? res.data.images[1] : "");
        setImg3(res.data.images[2] ? res.data.images[2] : "");
        setImg4(res.data.images[3] ? res.data.images[3] : "");
        setImg5(res.data.images[4] ? res.data.images[4] : "");

        if (res.data.state[0] === "Open") {
          setTripTickets(res.data.tickets);
        } else {
          setTripTickets(0);
        }
      }, 500);
      setTimeout(() => {
        openDetailsModal();
      }, 500);
    } catch (error) {
      console.error(error);
    }
  }; // console.log(trip)


  const openDetailsModal = () => {
    document.getElementById('trip-details-modal').style.display = "block";
    document.querySelector('body').style.overflowY = "hidden";
  };

  const closeDetailsModal = (e, tripId) => {
    e.preventDefault();
    document.getElementById(tripId).disabled = false;
    document.getElementById('trip-details-modal').style.display = "none";
    document.querySelector('body').style.overflowY = "auto";
    setTripAraState("");
    setStartDate("");
    setEndDate("");
  }; // Delete old image 


  const deleteImage = imgId => {
    document.getElementById(imgId).value = " ";
  }; // Upload Image


  const uploadImage = async (imageInputId, imageFile) => {
    try {
      deleteImage(imageInputId);
      const data = new FormData();
      data.append("file", imageFile);
      data.append("upload_preset", "uploads");
      const uploadImage = await external_axios_default().post("https://api.cloudinary.com/v1_1/dqmqc0uaa/image/upload", data);
      const {
        url
      } = uploadImage.data;

      if (imageInputId === trip.images[0]) {
        setImg1(url);
      } else if (imageInputId === trip.images[1]) {
        setImg2(url);
      } else if (imageInputId === trip.images[2]) {
        setImg3(url);
      } else if (imageInputId === trip.images[3]) {
        setImg4(url);
      } else if (imageInputId === trip.images[4]) {
        setImg5(url);
      }

      document.getElementById(imageInputId).value = "New image uploaded";
    } catch (error) {
      console.error(error);
    }
  }; // Update Trip


  const updateTrip = async (e, tripId) => {
    e.preventDefault();

    try {
      setLoading(!loading);
      const updatedTrip = await external_axios_default().patch(`${"https://powerful-sunglasses-newt.cyclic.app"}/api/admin/trips/${tripId}`, {
        title: [tripTitle, araTripTitle],
        state: [tripState, tripAraState],
        destination: [destination, araDestination],
        images: [img1, img2, img3, img4, img5],
        price: Number(price),
        duration: Number(duration),
        startDate: startDate,
        endDate: endDate,
        maxPeople: Number(maxPeople),
        overview: [overview, araOverview],
        tripPlan: [[dayOne, araDayOne], [dayTwo, araDayTwo], [dayThree, araDayThree]],
        rate: Number(rate),
        extraOptions: [{
          text: [optionOneText, optionOneAraText],
          price: Number(optionOnePrice)
        }, {
          text: [optionTwoText, optionTwoAraText],
          price: Number(optionTwoPrice)
        }, {
          text: [optionThreeText, optionThreeAraText],
          price: Number(optionThreePrice)
        }],
        tickets: Number(tripTickets)
      });
      setLoading(loading);
      document.getElementById("trip-details-modal").style.display = "none";
      Array.from(document.getElementsByClassName("trip-details")).map(btn => btn.disabled = false);
      setTripAraState("");
      setStartDate("");
      setEndDate("");
      setIsCreated(!isCreated);
      alert("تم تعديل الرحلة بنجاح");
    } catch (error) {
      console.error(error);
    }
  }; // Quick Updates


  const quickUpdate = async tripId => {
    let data;

    if (tripAraState !== "") {
      if (tripAraState === "متاح") {
        data = ["Open", "متاح"];
      } else if (tripAraState === "غير متاح") {
        data = ["Closed", "غير متاح"];
      }

      try {
        await external_axios_default().patch(`${"https://powerful-sunglasses-newt.cyclic.app"}/api/admin/trips/${tripId}`, {
          state: data
        });
        setTripAraState("");
        setTripAraState("");
        setStartDate("");
        document.getElementById(`${tripId}state-update`).style.display = "inline";
        setTimeout(() => {
          document.getElementById(`${tripId}state-update`).style.display = "none";
        }, 3000);
      } catch (error) {
        console.error(error);
      }
    } else if (startDate !== "") {
      data = startDate;

      try {
        await external_axios_default().patch(`${"https://powerful-sunglasses-newt.cyclic.app"}/api/admin/trips/${tripId}`, {
          startDate: data
        });
        setTripAraState("");
        setTripAraState("");
        setStartDate("");
        document.getElementById(`${tripId}startDate-update`).style.display = "inline";
        setTimeout(() => {
          document.getElementById(`${tripId}startDate-update`).style.display = "none";
        }, 3000);
      } catch (error) {
        console.error(error);
      }
    } else if (endDate !== "") {
      data = endDate;

      try {
        await external_axios_default().patch(`${"https://powerful-sunglasses-newt.cyclic.app"}/api/admin/trips/${tripId}`, {
          endDate: data
        });
        setTripAraState("");
        setEndDate("");
        setStartDate("");
        document.getElementById(`${tripId}endDate-update`).style.display = "inline";
        setTimeout(() => {
          document.getElementById(`${tripId}endDate-update`).style.display = "none";
        }, 3000);
      } catch (error) {
        console.error(error);
      }
    }
  };
  /* End Update Trip */

  /* Trip's Orders */


  const openOrdersModal = (tripId, notificationSpan) => {
    document.getElementById("trip-orders-modal").style.display = "block";
    document.querySelector("body").style.overflowY = "hidden";
    setTripIdFetchOrders(tripId);

    if (document.getElementById(notificationSpan)) {
      document.getElementById(notificationSpan).style.display = "none";
    }
  };

  const closeOrdersModal = () => {
    document.getElementById("trip-orders-modal").style.display = "none";
    document.querySelector("body").style.overflowY = "auto";
    Array.from(document.getElementsByClassName("trip-orders")).map(btn => {
      btn.disabled = false;
    });
    setIsCreated(!isCreated);
  }; // Get new order notifications


  const {
    0: newOrdersNotifications,
    1: setNewOrdersNotifications
  } = (0,external_react_.useState)();
  (0,external_react_.useEffect)(() => {
    const getNotifications = () => {
      const tripsNames = trips && trips.map(trip => {
        return trip.title[0];
      });

      if (tripsNames) {
        let orders = [];

        for (let i = 0; i < tripsNames.length; i++) {
          orders = [...orders, newTRipsOrdersList !== false && newTRipsOrdersList.filter(order => {
            return order.orderDetails.title[0] === tripsNames[i];
          })];
        }

        setNewOrdersNotifications(orders);
      }
    };

    getNotifications();
  }, [newTRipsOrdersList, trips]);
  /* End Trip's Orders */

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Trips_Container, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "header",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
        children: "\u0627\u0644\u0631\u062D\u0644\u0627\u062A"
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        onClick: openModal,
        children: "\u0627\u0636\u0641 \u0631\u062D\u0644\u0629 \u062C\u062F\u064A\u062F\u0629"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("table", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("thead", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
            children: "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0631\u062D\u0644\u0629"
          }), /*#__PURE__*/jsx_runtime_.jsx("th", {
            children: "\u0627\u0644\u062D\u0627\u0644\u0629"
          }), /*#__PURE__*/jsx_runtime_.jsx("th", {
            children: "\u0627\u0644\u062A\u0630\u0627\u0643\u0631"
          }), /*#__PURE__*/jsx_runtime_.jsx("th", {
            children: "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0628\u062F\u0621"
          }), /*#__PURE__*/jsx_runtime_.jsx("th", {
            children: "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0625\u0646\u062A\u0647\u0627\u0621"
          }), /*#__PURE__*/jsx_runtime_.jsx("th", {
            children: "\u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644"
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("tbody", {
        children: trips && trips.map(trip => /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
            style: {
              borderRight: "1px solid #ccc"
            },
            children: trip.title[1]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("td", {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("select", {
              defaultValue: trip.state[1],
              onChange: e => setTripAraState(e.target.value),
              children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "\u0645\u062A\u0627\u062D",
                children: "\u0645\u062A\u0627\u062D"
              }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "\u063A\u064A\u0631 \u0645\u062A\u0627\u062D",
                children: "\u063A\u064A\u0631 \u0645\u062A\u0627\u062D"
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("button", {
              onClick: () => quickUpdate(trip._id),
              children: "\u062A\u062D\u062F\u064A\u062B"
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              id: `${trip._id}state-update`,
              className: "done",
              children: "\u2713"
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: trip.state[0] === "Open" ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "tickets-container",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("strong", {
                children: [trip.tickets, " ", trip.tickets === 0 || trip.tickets === 1 || trip.tickets === 2 || trip.tickets > 10 ? "تذكرة" : "تذاكر"]
              }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                className: "trip-orders",
                id: `${trip._id}orders`,
                onClick: () => openOrdersModal(trip._id, `${trip._id}new-orders`),
                children: "\u0639\u0631\u0636 \u0627\u0644\u062D\u062C\u0648\u0632\u0627\u062A"
              }), newOrdersNotifications && !newOrdersNotifications.includes(false) && newOrdersNotifications.map(item => {
                if (item.length !== 0 && item[0].new === true && item[0].orderDetails.title[0] === trip.title[0]) {
                  return /*#__PURE__*/jsx_runtime_.jsx("span", {
                    id: `${trip._id}new-orders`,
                    className: "order-notifications",
                    children: item.length
                  }, `${trip._id}noti`);
                }
              })]
            }) : "لا يوجد"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("td", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
              type: "date",
              defaultValue: trip.startDate,
              onChange: e => setStartDate(e.target.value)
            }), /*#__PURE__*/jsx_runtime_.jsx("button", {
              onClick: () => quickUpdate(trip._id),
              children: "\u062A\u062D\u062F\u064A\u062B"
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              id: `${trip._id}startDate-update`,
              className: "done",
              children: "\u2713"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("td", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
              type: "date",
              defaultValue: trip.endDate,
              onChange: e => setEndDate(e.target.value)
            }), /*#__PURE__*/jsx_runtime_.jsx("button", {
              onClick: () => quickUpdate(trip._id),
              children: "\u062A\u062D\u062F\u064A\u062B"
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              id: `${trip._id}endDate-update`,
              className: "done",
              children: "\u2713"
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: /*#__PURE__*/jsx_runtime_.jsx("button", {
              onClick: () => fetchTrip(trip._id),
              className: "trip-details",
              id: trip._id,
              children: "\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0631\u062D\u0644\u0629"
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("td", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
              className: "delete-trip",
              onClick: () => openDeleteTripModal(`${trip._id}rand`),
              children: "\u0645\u0633\u062D"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "delete-modal",
              id: `${trip._id}rand`,
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "delete-modal-body",
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  onClick: () => closeDeleteTripModal(`${trip._id}rand`),
                  children: "x"
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "delete-modal-content",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                    children: "\u0647\u0644 \u062A\u0631\u064A\u062F \u0625\u0632\u0627\u0644\u0629 \u0647\u0630\u0647 \u0627\u0644\u0631\u062D\u0644\u0629\u061F"
                  }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                    onClick: () => deleteTrip(trip._id),
                    children: "\u0627\u0645\u0633\u062D \u0627\u0644\u0631\u062D\u0644\u0629"
                  })]
                })]
              })
            })]
          })]
        }, trip._id))
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      id: "trip-orders-modal",
      className: "trip-modal",
      language: language,
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "modal-body",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "orders-modal-body",
          language: language,
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            onClick: closeOrdersModal,
            children: "x"
          }), /*#__PURE__*/jsx_runtime_.jsx(admin_TripsOrders, {
            currentTripId: tripIdFetchOrders,
            language: language
          })]
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      id: "trip-details-modal",
      className: "trip-modal",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "modal-body",
        children: [loading && /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "loading",
          children: "Loading..."
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          onClick: e => closeDetailsModal(e, trip && trip._id),
          children: "x"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "trip-details-body",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
            onSubmit: e => updateTrip(e, trip && trip._id),
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                children: "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0631\u062D\u0644\u0629"
              }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                type: "text",
                defaultValue: trip && trip.title[1],
                dir: "rtl",
                onChange: e => setAraTripTitle(e.target.value)
              }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("input", {
                type: "text",
                defaultValue: trip && trip.title[0],
                onChange: e => setTripTitle(e.target.value)
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                children: "\u0627\u0644\u062D\u0627\u0644\u0629"
              }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                type: "text",
                defaultValue: trip && trip.state[1],
                dir: "rtl",
                onChange: e => setTripAraState(e.target.value)
              }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("input", {
                type: "text",
                defaultValue: trip && trip.state[0],
                onChange: e => setTripState(e.target.value)
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                children: "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0630\u0647\u0627\u0628"
              }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                type: "date",
                defaultValue: trip && trip.startDate,
                onChange: e => setStartDate(e.target.value)
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                children: "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0639\u0648\u062F\u0629"
              }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                type: "date",
                defaultValue: trip && trip.endDate,
                onChange: e => setEndDate(e.target.value)
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                children: "\u0627\u0644\u0633\u0639\u0631 (\u0644\u0644\u0641\u0631\u062F)"
              }), "\u062C\u0646\u064A\u0647 ", /*#__PURE__*/jsx_runtime_.jsx("input", {
                type: "number",
                defaultValue: trip && trip.price,
                dir: "rtl",
                onChange: e => setPrice(e.target.value)
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                children: "\u0627\u0644\u0648\u062C\u0647\u0629"
              }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                type: "text",
                defaultValue: trip && trip.destination[1],
                dir: "rtl",
                onChange: e => setAraDestination(e.target.value)
              }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("input", {
                type: "text",
                defaultValue: trip && trip.destination[0],
                onChange: e => setDestination(e.target.value)
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                children: "\u0627\u0644\u0645\u062F\u0629 (\u0623\u064A\u0627\u0645)"
              }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                type: "number",
                defaultValue: trip && trip.duration,
                dir: "rtl",
                onChange: e => setDuration(e.target.value)
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                children: "\u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0642\u0635\u0649 (\u0641\u0631\u062F)"
              }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                type: "number",
                defaultValue: trip && trip.maxPeople,
                dir: "rtl",
                onChange: e => setMaxPeople(e.target.value)
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                children: "\u0627\u0644\u062A\u0642\u064A\u064A\u0645"
              }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                type: "number",
                step: "0.5",
                defaultValue: trip && trip.rate,
                dir: "rtl",
                onChange: e => setRate(e.target.value)
              })]
            }), trip && trip.state[0] === "Open" && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                children: "\u0627\u0644\u062A\u0630\u0627\u0643\u0631"
              }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                type: "number",
                defaultValue: trip && trip.tickets,
                dir: "rtl",
                onChange: e => setTripTickets(e.target.value)
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                style: {
                  display: "flex",
                  flexDirection: "row-reverse",
                  alignItems: 'baseline',
                  gap: '1rem'
                },
                children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                  children: "\u0625\u062E\u062A\u064A\u0627\u0631\u0627\u062A \u0625\u0636\u0627\u0641\u064A\u0629(\u0625\u062E\u062A\u064A\u0627\u0631\u064A)"
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  dir: "rtl",
                  children: ["-- ", /*#__PURE__*/jsx_runtime_.jsx("label", {
                    children: "\u0625\u062E\u062A\u064A\u0627\u0631 1 \xA0\xA0\xA0"
                  }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                    type: "text",
                    placeholder: "\u0639\u0631\u0628\u064A",
                    onChange: e => setOptionOneAraText(e.target.value),
                    defaultValue: trip && trip.extraOptions.length !== 0 && trip.extraOptions[0].text[1]
                  }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), "-- ", /*#__PURE__*/jsx_runtime_.jsx("label", {
                    children: "option 1 "
                  }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                    type: "text",
                    placeholder: "English",
                    dir: "ltr",
                    onChange: e => setOptionOneText(e.target.value),
                    defaultValue: trip && trip.extraOptions.length !== 0 && trip.extraOptions[0].text[0]
                  }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), "-- ", /*#__PURE__*/jsx_runtime_.jsx("label", {
                    children: "\u0627\u0644\u0633\u0639\u0631 1 \xA0\xA0\xA0"
                  }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                    type: "number",
                    onChange: e => setOptionOnePrice(e.target.value),
                    defaultValue: trip && trip.extraOptions.length !== 0 && trip.extraOptions[0].price
                  })]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  dir: "rtl",
                  children: ["-- ", /*#__PURE__*/jsx_runtime_.jsx("label", {
                    children: "\u0625\u062E\u062A\u064A\u0627\u0631 2 \xA0\xA0\xA0"
                  }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                    type: "text",
                    placeholder: "\u0639\u0631\u0628\u064A",
                    onChange: e => setOptionTwoAraText(e.target.value),
                    defaultValue: trip && trip.extraOptions.length > 1 && trip.extraOptions[1].text[1]
                  }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), "-- ", /*#__PURE__*/jsx_runtime_.jsx("label", {
                    children: "option 2 "
                  }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                    type: "text",
                    placeholder: "English",
                    dir: "ltr",
                    onChange: e => setOptionTwoText(e.target.value),
                    defaultValue: trip && trip.extraOptions.length > 1 && trip.extraOptions[1].text[0]
                  }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), "-- ", /*#__PURE__*/jsx_runtime_.jsx("label", {
                    children: "\u0627\u0644\u0633\u0639\u0631 2 \xA0\xA0\xA0"
                  }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                    type: "number",
                    onChange: e => setOptionTwoPrice(e.target.value),
                    defaultValue: trip && trip.extraOptions.length > 1 && trip.extraOptions[1].price
                  })]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  dir: "rtl",
                  children: ["-- ", /*#__PURE__*/jsx_runtime_.jsx("label", {
                    children: "\u0625\u062E\u062A\u064A\u0627\u0631 3 \xA0\xA0\xA0"
                  }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                    type: "text",
                    placeholder: "\u0639\u0631\u0628\u064A",
                    onChange: e => setOptionThreeAraText(e.target.value),
                    defaultValue: trip && trip.extraOptions.length > 2 ? trip.extraOptions[2].text[1] : ''
                  }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), "-- ", /*#__PURE__*/jsx_runtime_.jsx("label", {
                    children: "option 3 "
                  }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                    type: "text",
                    placeholder: "English",
                    dir: "ltr",
                    onChange: e => setOptionThreeText(e.target.value),
                    defaultValue: trip && trip.extraOptions.length > 2 ? trip.extraOptions[2].text[0] : ''
                  }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), "-- ", /*#__PURE__*/jsx_runtime_.jsx("label", {
                    children: "\u0627\u0644\u0633\u0639\u0631 3 \xA0\xA0\xA0"
                  }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                    type: "number",
                    onChange: e => setOptionThreePrice(e.target.value),
                    defaultValue: trip && trip.extraOptions.length > 2 ? trip.extraOptions[2].price : 0
                  })]
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
                children: "\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629"
              }), /*#__PURE__*/jsx_runtime_.jsx("textarea", {
                rows: "6",
                cols: "50",
                defaultValue: trip && trip.overview[0],
                onChange: e => setOverview(e.target.value)
              }), /*#__PURE__*/jsx_runtime_.jsx("textarea", {
                rows: "6",
                cols: "50",
                dir: "rtl",
                defaultValue: trip && trip.overview[1],
                onChange: e => setAraOverview(e.target.value)
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              dir: "rtl",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                children: "\u0628\u0631\u0646\u0627\u0645\u062C \u0627\u0644\u0631\u062D\u0644\u0629"
              }), trip && trip.tripPlan.map(day => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h4", {
                  children: ["\u0627\u0644\u064A\u0648\u0645", trip.tripPlan.indexOf(day) + 1]
                }), /*#__PURE__*/jsx_runtime_.jsx("textarea", {
                  rows: "6",
                  cols: "50",
                  defaultValue: day[1],
                  onChange: e => trip.tripPlan.indexOf(day) === 0 ? setAraDayOne(e.target.value) : trip.tripPlan.indexOf(day) === 1 ? setAraDayTwo(e.target.value) : trip.tripPlan.indexOf(day) === 2 ? setAraDayThree(e.target.value) : console.log("Otion's Arabic text is", null)
                }), /*#__PURE__*/jsx_runtime_.jsx("textarea", {
                  rows: "6",
                  cols: "50",
                  defaultValue: day[0],
                  dir: "ltr",
                  onChange: e => trip.tripPlan.indexOf(day) === 0 ? setDayOne(e.target.value) : trip.tripPlan.indexOf(day) === 1 ? setDayTwo(e.target.value) : trip.tripPlan.indexOf(day) === 2 ? setDayThree(e.target.value) : console.log("Otion's English text is", null)
                })]
              }, day))]
            }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
              children: "\u0635\u0648\u0631 \u0627\u0644\u0631\u062D\u0644\u0629"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              style: {
                display: "flex",
                flexDirection: 'row-reverse'
              },
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                style: {
                  display: 'flex',
                  flexDirection: 'column'
                },
                children: trip && trip.images.map(image => /*#__PURE__*/jsx_runtime_.jsx("input", {
                  id: image,
                  className: "image-input",
                  type: "url",
                  defaultValue: image,
                  readOnly: true
                }, image))
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
                  className: "upload-image",
                  type: "file",
                  onChange: e => {
                    uploadImage(trip && trip.images[0], e.target.files[0]);
                  }
                }), /*#__PURE__*/jsx_runtime_.jsx("label", {
                  className: "delete-img-url",
                  onClick: () => {
                    deleteImage(trip && trip.images[0]);
                    setImg1("");
                  },
                  children: "x"
                }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                  className: "upload-image",
                  type: "file",
                  onChange: e => {
                    uploadImage(trip && trip.images[1], e.target.files[0]);
                  }
                }), /*#__PURE__*/jsx_runtime_.jsx("label", {
                  className: "delete-img-url",
                  onClick: () => {
                    deleteImage(trip && trip.images[1]);
                    setImg2("");
                  },
                  children: "x"
                }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                  className: "upload-image",
                  type: "file",
                  onChange: e => {
                    uploadImage(trip && trip.images[2], e.target.files[0]);
                  }
                }), /*#__PURE__*/jsx_runtime_.jsx("label", {
                  className: "delete-img-url",
                  onClick: () => {
                    deleteImage(trip && trip.images[2]);
                    setImg3("");
                  },
                  children: "x"
                }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                  className: "upload-image",
                  type: "file",
                  onChange: e => {
                    uploadImage(trip && trip.images[3], e.target.files[0]);
                  }
                }), /*#__PURE__*/jsx_runtime_.jsx("label", {
                  className: "delete-img-url",
                  onClick: () => {
                    deleteImage(trip && trip.images[3]);
                    setImg4("");
                  },
                  children: "x"
                }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                  className: "upload-image",
                  type: "file",
                  onChange: e => {
                    uploadImage(trip && trip.images[4], e.target.files[0]);
                  }
                }), /*#__PURE__*/jsx_runtime_.jsx("label", {
                  className: "delete-img-url",
                  onClick: () => {
                    deleteImage(trip && trip.images[4]);
                    setImg5("");
                  },
                  children: "x"
                })]
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "footer",
              children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
                id: "edit",
                type: "submit",
                children: "\u062A\u0623\u0643\u064A\u062F"
              }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                className: "cancel",
                onClick: e => closeDetailsModal(e, trip && trip._id),
                children: "\u0625\u0644\u063A\u0627\u0621"
              })]
            })]
          })
        })]
      })
    }, trip && trip._id), /*#__PURE__*/jsx_runtime_.jsx("div", {
      id: "trip-modal",
      className: "trip-modal",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "modal-body",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "trip-details-body",
          children: [loading && /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "loading",
            children: "Loading..."
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            onClick: closeModal,
            children: "x"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
              id: "new-trip",
              onSubmit: e => createNewTrip(e),
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                  children: "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0631\u062D\u0644\u0629"
                }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                  type: "text",
                  dir: "rtl",
                  onChange: e => setAraTripTitle(e.target.value),
                  required: true,
                  placeholder: "\u0639\u0631\u0628\u064A"
                }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("input", {
                  type: "text",
                  onChange: e => setTripTitle(e.target.value),
                  required: true,
                  placeholder: "English"
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                  children: "\u0627\u0644\u062D\u0627\u0644\u0629"
                }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                  type: "text",
                  dir: "rtl",
                  onChange: e => setTripAraState(e.target.value),
                  required: true,
                  placeholder: "\u0639\u0631\u0628\u064A"
                }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("input", {
                  type: "text",
                  onChange: e => setTripState(e.target.value),
                  required: true,
                  placeholder: "English"
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                  children: "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0630\u0647\u0627\u0628"
                }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                  type: "date",
                  onChange: e => setStartDate(e.target.value),
                  required: true
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                  children: "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0639\u0648\u062F\u0629"
                }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                  type: "date",
                  onChange: e => setEndDate(e.target.value),
                  required: true
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                  children: "\u0627\u0644\u0633\u0639\u0631 (\u0644\u0644\u0641\u0631\u062F)"
                }), "\u062C\u0646\u064A\u0647 ", /*#__PURE__*/jsx_runtime_.jsx("input", {
                  type: "number",
                  dir: "rtl",
                  onChange: e => setPrice(e.target.value),
                  required: true
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                  children: "\u0627\u0644\u0648\u062C\u0647\u0629"
                }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                  type: "text",
                  dir: "rtl",
                  onChange: e => setAraDestination(e.target.value),
                  required: true,
                  placeholder: "\u0639\u0631\u0628\u064A"
                }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("input", {
                  type: "text",
                  onChange: e => setDestination(e.target.value),
                  required: true,
                  placeholder: "English"
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                  children: "\u0627\u0644\u0645\u062F\u0629 (\u0623\u064A\u0627\u0645)"
                }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                  type: "number",
                  dir: "rtl",
                  onChange: e => setDuration(e.target.value),
                  required: true
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                  children: "\u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0642\u0635\u0649 (\u0641\u0631\u062F)"
                }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                  type: "number",
                  dir: "rtl",
                  onChange: e => setMaxPeople(e.target.value),
                  required: true
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                  children: "\u0627\u0644\u062A\u0642\u064A\u064A\u0645"
                }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                  type: "number",
                  step: "0.5",
                  dir: "rtl",
                  onChange: e => setRate(e.target.value),
                  required: true
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                style: {
                  display: "flex",
                  flexDirection: "row-reverse",
                  alignItems: 'baseline',
                  gap: '1rem'
                },
                children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                  children: "\u0625\u062E\u062A\u064A\u0627\u0631\u0627\u062A \u0625\u0636\u0627\u0641\u064A\u0629(\u0625\u062E\u062A\u064A\u0627\u0631\u064A)"
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  dir: "rtl",
                  children: ["-- ", /*#__PURE__*/jsx_runtime_.jsx("label", {
                    children: "\u0625\u062E\u062A\u064A\u0627\u0631 1 \xA0\xA0\xA0"
                  }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                    type: "text",
                    placeholder: "\u0639\u0631\u0628\u064A",
                    onChange: e => setOptionOneAraText(e.target.value)
                  }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), "-- ", /*#__PURE__*/jsx_runtime_.jsx("label", {
                    children: "option 1 "
                  }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                    type: "text",
                    placeholder: "English",
                    dir: "ltr",
                    onChange: e => setOptionOneText(e.target.value)
                  }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), "-- ", /*#__PURE__*/jsx_runtime_.jsx("label", {
                    children: "\u0627\u0644\u0633\u0639\u0631 1 \xA0\xA0\xA0"
                  }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                    type: "number",
                    onChange: e => setOptionOnePrice(e.target.value)
                  })]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  dir: "rtl",
                  children: ["-- ", /*#__PURE__*/jsx_runtime_.jsx("label", {
                    children: "\u0625\u062E\u062A\u064A\u0627\u0631 2 \xA0\xA0\xA0"
                  }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                    type: "text",
                    placeholder: "\u0639\u0631\u0628\u064A",
                    onChange: e => setOptionTwoAraText(e.target.value)
                  }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), "-- ", /*#__PURE__*/jsx_runtime_.jsx("label", {
                    children: "option 2 "
                  }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                    type: "text",
                    placeholder: "English",
                    dir: "ltr",
                    onChange: e => setOptionTwoText(e.target.value)
                  }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), "-- ", /*#__PURE__*/jsx_runtime_.jsx("label", {
                    children: "\u0627\u0644\u0633\u0639\u0631 2 \xA0\xA0\xA0"
                  }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                    type: "number",
                    onChange: e => setOptionTwoPrice(e.target.value)
                  })]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  dir: "rtl",
                  children: ["-- ", /*#__PURE__*/jsx_runtime_.jsx("label", {
                    children: "\u0625\u062E\u062A\u064A\u0627\u0631 3 \xA0\xA0\xA0"
                  }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                    type: "text",
                    placeholder: "\u0639\u0631\u0628\u064A",
                    onChange: e => setOptionThreeAraText(e.target.value)
                  }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), "-- ", /*#__PURE__*/jsx_runtime_.jsx("label", {
                    children: "option 3 "
                  }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                    type: "text",
                    placeholder: "English",
                    dir: "ltr",
                    onChange: e => setOptionThreeText(e.target.value)
                  }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), "-- ", /*#__PURE__*/jsx_runtime_.jsx("label", {
                    children: "\u0627\u0644\u0633\u0639\u0631 3 \xA0\xA0\xA0"
                  }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                    type: "number",
                    onChange: e => setOptionThreePrice(e.target.value)
                  })]
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                  children: "\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629"
                }), /*#__PURE__*/jsx_runtime_.jsx("textarea", {
                  rows: "6",
                  cols: "50",
                  onChange: e => setOverview(e.target.value),
                  required: true,
                  placeholder: "English"
                }), /*#__PURE__*/jsx_runtime_.jsx("textarea", {
                  rows: "6",
                  cols: "50",
                  dir: "rtl",
                  onChange: e => setAraOverview(e.target.value),
                  required: true,
                  placeholder: "\u0639\u0631\u0628\u064A"
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                dir: "rtl",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                  children: "\u0628\u0631\u0646\u0627\u0645\u062C \u0627\u0644\u0631\u062D\u0644\u0629"
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
                    children: "\u0627\u0644\u064A\u0648\u0645 \u0627\u0644\u0623\u0648\u0644"
                  }), /*#__PURE__*/jsx_runtime_.jsx("textarea", {
                    rows: "6",
                    cols: "50",
                    onChange: e => setAraDayOne(e.target.value),
                    required: true,
                    placeholder: "\u0639\u0631\u0628\u064A"
                  }), /*#__PURE__*/jsx_runtime_.jsx("textarea", {
                    rows: "6",
                    cols: "50",
                    dir: "ltr",
                    onChange: e => setDayOne(e.target.value),
                    required: true,
                    placeholder: "English"
                  })]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
                    children: "\u0627\u0644\u064A\u0648\u0645 \u0627\u0644\u062B\u0627\u0646\u064A"
                  }), /*#__PURE__*/jsx_runtime_.jsx("textarea", {
                    rows: "6",
                    cols: "50",
                    onChange: e => setAraDayTwo(e.target.value),
                    required: true,
                    placeholder: "\u0639\u0631\u0628\u064A"
                  }), /*#__PURE__*/jsx_runtime_.jsx("textarea", {
                    rows: "6",
                    cols: "50",
                    dir: "ltr",
                    onChange: e => setDayTwo(e.target.value),
                    required: true,
                    placeholder: "English"
                  })]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
                    children: "\u0627\u0644\u064A\u0648\u0645 \u0627\u0644\u062B\u0627\u0644\u062B"
                  }), /*#__PURE__*/jsx_runtime_.jsx("textarea", {
                    rows: "6",
                    cols: "50",
                    onChange: e => setAraDayThree(e.target.value),
                    required: true,
                    placeholder: "\u0639\u0631\u0628\u064A"
                  }), /*#__PURE__*/jsx_runtime_.jsx("textarea", {
                    rows: "6",
                    cols: "50",
                    dir: "ltr",
                    onChange: e => setDayThree(e.target.value),
                    required: true,
                    placeholder: "English"
                  })]
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                  children: "\u0635\u0648\u0631 \u0627\u0644\u0631\u062D\u0644\u0629"
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  style: {
                    display: 'flex'
                  },
                  children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                    htmlFor: "upload",
                    children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_icons_.FileEarmarkArrowUp, {
                      size: 36
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                    id: "upload",
                    type: "file",
                    multiple: true,
                    required: true,
                    dir: "rtl",
                    style: {
                      border: "1px solid #ccc",
                      cursor: "pointer"
                    },
                    onChange: e => setFiles(e.target.files)
                  })]
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "footer",
                children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
                  className: "add",
                  type: "submit",
                  children: "\u0627\u0636\u0641 \u0627\u0644\u0631\u062D\u0644\u0629"
                }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                  className: "delete",
                  onClick: closeModal,
                  children: "\u0627\u0644\u063A\u0627\u0621"
                })]
              })]
            })
          })]
        })
      })
    })]
  });
};

/* harmony default export */ const admin_Trips = (Trips);

/***/ }),

/***/ 134:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5641);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_2__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Users__Container",
  componentId: "sc-2ktcl5-0"
})(["width:100%;height:100%;margin:0%;div.header{display:flex;justify-content:space-between;align-items:center;padding-inline:1rem;border-bottom:1px solid #ccc;h1{margin-top:0;margin-bottom:0;padding-top:1.1rem;}button{font-size:1.1rem;font-weight:bold;padding-block:0.4rem;background-color:#000;color:#fff;cursor:pointer;transition:all 300ms ease-in-out;&:hover{background-color:transparent;color:#000;}}}table{width:97%;margin-top:1rem;text-align:right;margin-inline:1rem;padding-inline:0.5rem;box-shadow:1px 0.5px 2px 1px #ccc;thead{width:100%;th{width:30%;padding-block:1rem;font-size:1.1rem;}}td{height:3.5rem;border-top:1px solid #ccc;}button{margin-right:5px;background-color:#000;color:#fff;font-weight:bold;cursor:pointer;transition:all 300ms ease-in-out;&:hover{background-color:transparent;color:#000;}}button.user-details{width:6rem;background-color:#00D100;border:2.5px solid #00D100;&:hover{background-color:transparent;}}button.delete-user{background-color:red;border:2.5px solid red;&:hover{background-color:transparent;}}}div.user-modal{display:none;direction:ltr;width:100%;height:90vh;background-color:rgba(255,255,255,0.6);padding-top:4rem;position:fixed;top:0;left:0;border-bottom:1px solid;@media(min-width:1400px){padding-top:5rem;}div.modal-body{width:79.8%;height:100%;padding-top:1rem;background-color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:space-between;span{width:1rem;height:1rem;position:absolute;left:77.5%;bottom:85.5%;background-color:#000;color:#fff;display:flex;align-items:center;justify-content:center;border:1px solid;border-radius:5px;cursor:pointer;transition:all 300ms ease;&:hover{background-color:transparent;color:#000;border:1px solid #000;}}form{height:60vh;display:flex;flex-direction:column;justify-content:space-between;align-items:center;margin-top:3rem;h2{text-align:center;}input{width:15rem;padding:0.7rem 0.5rem;border:1px solid;border-radius:3px;}select{width:16.15rem;font-size:1.1rem;padding:0.6rem 0.5rem;}span.validation-span{color:red;position:unset;background-color:unset;border:unset;width:unset;display:inline-block;margin-top:unset;max-width:15rem;}}div.footer{width:79.7%;position:absolute;bottom:0;left:0;background-color:#fff;display:flex;flex-direction:row-reverse;justify-content:space-between;align-items:center;padding-block:0.8rem;border:1px solid #ccc;button{margin-inline:1rem;font-size:1.1rem;padding:0.2rem 0.5rem;cursor:pointer;transition:all 300ms ease-in-out;}button.add{background-color:#000;color:#fff;&:hover{background-color:transparent;color:#000;}}button#edit{background-color:#000;color:#fff;width:7rem;font-size:1.2rem;font-weight:bold;&:hover{background-color:transparent;color:#000;}}button.delete{padding-inline:1rem;&:hover{background-color:#000;color:#fff;}}}form.change-password{i{position:absolute;margin-left:14rem;padding:10px;cursor:pointer;transition:all 300ms ease-in-out;color:rgba(0,0,0,0.6);&:hover{opacity:0.4;}}}}}div.loading{position:absolute;top:0;left:0;z-index:10;width:79%;height:100%;background-color:rgba(255,255,255,0.6);display:flex;align-items:center;justify-content:center;font-size:2rem;font-weight:bold;}div.delete-modal{width:100vw;height:100vh;position:fixed;top:0;left:0;display:none;justify-content:center;align-items:center;background-color:rgba(255,255,255,0.6);div.delete-modal-body{width:30%;height:30%;background-color:#e0e0e0;display:flex;align-items:center;justify-content:center;border-radius:5px;span{position:absolute;right:35.5%;top:36%;width:1.2rem;height:1.2rem;background-color:#000;color:#fff;font-weight:bold;display:flex;align-items:center;justify-content:center;border:1px solid #000;border-radius:3px;cursor:pointer;transition:all 300ms ease-in-out;&:hover{background-color:#fff;color:#000;}}div.delete-modal-content{display:flex;flex-direction:column;p{font-size:1.2rem;font-weight:bold;}button{font-size:1.1rem;font-weight:bold;padding-block:0.3rem;background-color:red;border-color:red;&:hover{background-color:transparent;}}}}}"]);

const Users = ({
  role,
  loggedInUser
}) => {
  // Fetch all users
  const {
    0: users,
    1: setUsers
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const {
    0: isCreated,
    1: setIsCreated
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const fetchUsers = async () => {
      if (role === "admin1") {
        try {
          let res = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(`${"https://powerful-sunglasses-newt.cyclic.app"}/api/users`);
          setUsers(res.data);
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchUsers();
  }, [isCreated, role]);

  const openModal = () => {
    document.getElementById('user-modal').style.display = "block";
    document.querySelector('body').style.overflowY = "hidden";
  };

  const closeModal = () => {
    document.getElementById('user-modal').style.display = "none";
    document.querySelector('body').style.overflowY = "auto";
  }; // Create new user


  const {
    register,
    handleSubmit,
    formState: {
      errors
    },
    getValues,
    reset
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)();
  const {
    0: emailsMatch,
    1: setEmailsMatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const {
    0: passwordMatch,
    1: setPasswordMatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const {
    0: validData,
    1: setValidData
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);

  async function onFormSubmit(values) {
    const confirmEmailField = document.getElementById("confirm-email").value;

    if (confirmEmailField === "") {
      return setEmailsMatch(false);
    }

    if (values.confirmEmail === "") {
      return setValidData(false);
    }

    if (passwordMatch !== true || emailsMatch !== true) {
      setValidData(false);
    } else {
      setValidData(true);

      try {
        document.getElementById("create-user").disabled = true;
        setLoading(!loading);
        await axios__WEBPACK_IMPORTED_MODULE_3___default().post(`${"https://powerful-sunglasses-newt.cyclic.app"}/api/auth/register`, {
          username: values.userName,
          email: values.confirmEmail,
          password: values.confirmPassword,
          role: values.role
        });
        document.getElementById("create-user").disabled = false;
        setLoading(loading);
        closeModal();
        setIsCreated(!isCreated);
      } catch (error) {
        console.error(error);
      }
    }
  }

  ;
  /* Handle Delete user */

  const openDeleteUserModal = modalId => {
    document.getElementById(modalId).style.display = "flex";
    document.querySelector("body").style.overflowY = "hidden";
  };

  const closeDeleteUserModal = modalId => {
    document.getElementById(modalId).style.display = "none";
    document.querySelector("body").style.overflowY = "auto";
  }; // Delete user 


  const deleteUser = async userId => {
    try {
      await axios__WEBPACK_IMPORTED_MODULE_3___default()["delete"](`${"https://powerful-sunglasses-newt.cyclic.app"}/api/users/${userId}`);
      setIsCreated(!isCreated);
    } catch (error) {
      console.error(error);
    }
  };
  /* End Handle Delete user */

  /* Handle Update user */
  // Handle open/close user details modal


  const openUserDetailsModal = modalId => {
    document.getElementById(modalId).style.display = "flex";
    document.querySelector("body").style.overflowY = "hidden";
  };

  const closeUserDetailsModal = (e, modalId, btnId) => {
    e.preventDefault();
    document.getElementById(modalId).style.display = "none";
    document.querySelector("body").style.overflowY = "auto";
    document.getElementById(btnId).disabled = false;
    Array.from(document.getElementsByClassName("change-password")).map(form => {
      form.reset();
    });
  }; // Fetch single user by id


  const {
    0: singleUser,
    1: setSingleUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();

  const fetchSingleUser = async (userId, btnId) => {
    try {
      document.getElementById(btnId).disabled = true;
      const res = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(`${"https://powerful-sunglasses-newt.cyclic.app"}/api/users/${userId}`);
      setSingleUser(res.data);
      setTimeout(() => {
        openUserDetailsModal(`${userId}user-modal`);
      }, 500);
    } catch (error) {
      console.error(error);
    }
  };
  /* End Handle Update user */


  const {
    0: newPasswordMatch,
    1: setNewPasswordMatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); // Show/hide password

  const showPassword = (e, inputId) => {
    let input = document.getElementById(inputId);

    if (input.type === "password" && !inputId.includes("confirm")) {
      e.target.style.color = "#000";
      input.type = "text";
    } else if (input.type === "password" && inputId.includes("confirm")) {
      e.target.style.color = "#000";
      input.type = "text";
    } else if (input.type === "text" && inputId.includes("confirm")) {
      e.target.style.color = "rgba(0, 0, 0, 0.6)";
      input.type = "password";
    } else {
      e.target.style.color = "rgba(0, 0, 0, 0.6)";
      input.type = "password";
    }
  }; // Change password


  const changePassword = async (e, newPassId, confPassId, userId) => {
    e.preventDefault();
    const newPassword = document.getElementById(newPassId).value;
    const confirmNewPassword = document.getElementById(confPassId).value;

    if (newPassword !== confirmNewPassword) {
      return setNewPasswordMatch(!newPasswordMatch);
    } else {
      setNewPasswordMatch(newPasswordMatch);

      try {
        await axios__WEBPACK_IMPORTED_MODULE_3___default().patch(`${"https://powerful-sunglasses-newt.cyclic.app"}/api/users/${userId}`, {
          password: confirmNewPassword
        });
        alert("تم تغيير كلمة المرور بنجاح");
      } catch (error) {
        console.error(error);
      }
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(Container, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "header",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h1", {
        children: "\u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
        onClick: openModal,
        children: "\u0627\u0636\u0641 \u0645\u0633\u062A\u062E\u062F\u0645 \u062C\u062F\u064A\u062F"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("table", {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("thead", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("th", {
            children: "\u0627\u0644\u0625\u0633\u0645"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("th", {
            children: "\u0627\u0644\u062F\u0648\u0631"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("th", {
            children: "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A"
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("tbody", {
        children: users && users.map(user => loggedInUser && loggedInUser._id !== user._id && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("td", {
            children: user.username
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("td", {
            children: user.role
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("td", {
            children: user.email
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("td", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
              className: "user-details",
              id: `${user._id}details`,
              onClick: () => fetchSingleUser(user._id, `${user._id}details`),
              children: "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("td", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
              className: "delete-user",
              onClick: () => openDeleteUserModal(`${user._id}rand`),
              children: "\u0645\u0633\u062D"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
              className: "delete-modal",
              id: `${user._id}rand`,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "delete-modal-body",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                  onClick: () => closeDeleteUserModal(`${user._id}rand`),
                  children: "x"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "delete-modal-content",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
                    children: "\u0647\u0644 \u062A\u0631\u064A\u062F \u0625\u0632\u0627\u0644\u0629 \u0647\u0630\u0627 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u061F"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
                    onClick: () => deleteUser(user._id),
                    children: "\u0646\u0639\u0645"
                  })]
                })]
              })
            })]
          })]
        }, user._id))
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
      id: "user-modal",
      className: "user-modal",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "modal-body",
        children: [loading && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          className: "loading",
          children: "Loading..."
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
          onClick: closeModal,
          children: "x"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("form", {
            onSubmit: handleSubmit(onFormSubmit),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h2", {
              children: "Create New User"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("input", _objectSpread(_objectSpread({
              type: "text",
              id: "username",
              name: "username",
              placeholder: "Enter username"
            }, register("userName", {
              required: {
                value: true,
                message: "Please enter a username"
              },
              minLength: {
                value: 8,
                message: "This name is too short"
              },
              maxLength: {
                value: 100,
                message: "This name is too long"
              }
            })), {}, {
              style: {
                borderColor: `${errors.userName ? 'red' : 'unset'}`
              }
            })), errors.userName && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
              className: "validation-span",
              children: errors.userName.message
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("input", _objectSpread(_objectSpread({
              type: "email",
              id: "email",
              name: "email",
              placeholder: "Enter email"
            }, register("emailField", {
              required: {
                value: true,
                message: "Please enter a valid email address"
              },
              minLength: {
                value: 8,
                message: "This email is too short"
              },
              maxLength: {
                value: 254,
                message: "This email is too long"
              },
              pattern: {
                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Please enter a valid email address"
              }
            })), {}, {
              style: {
                borderColor: `${errors.emailField ? 'red' : 'unset'}`
              }
            })), errors.emailField && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
              className: "validation-span",
              children: errors.emailField.message
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("input", _objectSpread(_objectSpread({
              type: "email",
              id: "confirm-email",
              name: "confirm-email",
              placeholder: "Re-type email"
            }, register("confirmEmail")), {}, {
              style: {
                borderColor: `${errors.confirmEmail ? 'red' : 'unset'}`
              },
              onChange: e => {
                const userEmail = getValues("emailField", {
                  required: {
                    value: true,
                    message: "Please re-type the email address"
                  }
                });
                const confEmail = e.target.value;

                if (userEmail !== confEmail) {
                  setEmailsMatch(false);
                } else {
                  setEmailsMatch(true);
                }
              }
            })), errors.confirmEmail && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
              className: "validation-span",
              children: errors.confirmEmail.message
            }), emailsMatch !== true && !errors.confirmEmail ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
              className: "validation-span",
              children: "Emails do not match"
            }) : "", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("input", _objectSpread(_objectSpread({
              type: "password",
              id: "password",
              name: "password"
            }, register("password", {
              required: {
                value: true,
                message: "Please enter a password"
              },
              minLength: {
                value: 8,
                message: "This email is too short"
              },
              maxLength: {
                value: 254,
                message: "This email is too long"
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                message: "Password must contain at least one uppercase letter, one lowercase letter, and one number"
              }
            })), {}, {
              placeholder: "Enter password",
              style: {
                borderColor: `${errors.password ? 'red' : 'unset'}`
              }
            })), errors.password && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
              className: "validation-span",
              style: {
                marginBottom: '3rem'
              },
              children: errors.password.message
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("input", _objectSpread(_objectSpread({
              type: "password",
              id: "confirm-password",
              name: "confirm-password",
              placeholder: "Re-type password"
            }, register("confirmPassword", {
              required: {
                value: true,
                message: "Please re-type the password"
              }
            })), {}, {
              style: {
                borderColor: `${errors.confirmPassword ? 'red' : 'unset'}`
              },
              onChange: e => {
                const userPassword = getValues("password");
                const confPassword = e.target.value;

                if (userPassword !== confPassword) {
                  setPasswordMatch(false);
                } else {
                  setPasswordMatch(true);
                }
              }
            })), errors.confirmPassword && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
              className: "validation-span",
              children: errors.confirmPassword.message
            }), passwordMatch !== true && !errors.confirmPassword ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
              className: "validation-span",
              children: "Passwords do not match"
            }) : "", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("select", _objectSpread(_objectSpread({
              name: "users",
              id: "users"
            }, register("role", {
              required: {
                value: true,
                message: "Please Choose a role for this user"
              }
            })), {}, {
              style: {
                borderColor: `${errors.role ? 'red' : 'unset'}`
              },
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("option", {
                value: "",
                children: "Choose Role"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("option", {
                value: "admin1",
                children: "Admin1"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("option", {
                value: "admin2",
                children: "Admin2"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("option", {
                value: "vendor",
                disabled: true,
                children: "Vendor"
              })]
            })), errors.role && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
              className: "validation-span",
              children: errors.role.message
            }), validData !== true && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
              className: "validation-span",
              children: "Plese fill all of the above fields with valid data"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "footer",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
                id: "create-user",
                className: "add",
                type: "submit",
                children: "\u0627\u0636\u0641 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
                className: "delete",
                onClick: closeModal,
                children: "\u0627\u0644\u063A\u0627\u0621"
              })]
            })]
          })
        })]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
      id: `${singleUser && singleUser._id}user-modal`,
      className: "user-modal",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "modal-body",
        children: [loading && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          className: "loading",
          children: "Loading..."
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
          onClick: e => closeUserDetailsModal(e, `${singleUser && singleUser._id}user-modal`, `${singleUser && singleUser._id}details`),
          children: "x"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("form", {
            className: "change-password",
            style: {
              display: 'unset'
            },
            onSubmit: e => changePassword(e, `${singleUser && singleUser._id}new-password`, `${singleUser && singleUser._id}confirm-new-password`, singleUser && singleUser._id),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h2", {
              children: singleUser && singleUser.username
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("i", {
              className: "fa fa-solid fa-eye icon",
              onClick: e => showPassword(e, `${singleUser && singleUser._id}new-password`)
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("input", {
              type: "password",
              id: `${singleUser && singleUser._id}new-password`,
              minLength: "8",
              maxLength: "100",
              pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$",
              title: "Password must contain at least one uppercase, one lowercase, and one number",
              placeholder: "Enter new password",
              required: true
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("i", {
              className: "fa fa-solid fa-eye icon",
              onClick: e => showPassword(e, `${singleUser && singleUser._id}confirm-new-password`)
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("input", {
              type: "password",
              id: `${singleUser && singleUser._id}confirm-new-password`,
              className: "input-field",
              minLength: "8",
              maxLength: "100",
              pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$",
              title: "Password must contain at least one uppercase, one lowercase, and one number",
              placeholder: "Re-type new password",
              required: true
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("br", {}), !newPasswordMatch && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
              className: "validation-span",
              children: "Passwords don't match"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "footer",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
                className: "add",
                type: "submit",
                children: "\u062A\u063A\u063A\u064A\u0631 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
                className: "delete",
                onClick: e => closeUserDetailsModal(e, `${singleUser && singleUser._id}user-modal`, `${singleUser && singleUser._id}details`),
                children: "\u0627\u0644\u063A\u0627\u0621"
              })]
            })]
          })
        })]
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Users);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7998:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_admin_Dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2957);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_admin_Main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3119);
/* harmony import */ var _components_admin_Trips__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3190);
/* harmony import */ var _components_admin_Camps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2207);
/* harmony import */ var _components_admin_Rooms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7085);
/* harmony import */ var _components_admin_Users__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(134);
/* harmony import */ var _components_admin_Profile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1974);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_admin_Services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3813);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_admin_Users__WEBPACK_IMPORTED_MODULE_7__]);
_components_admin_Users__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];














const getServerSideProps = async req => {
  const token = req.req.cookies.token;
  let role;

  const userRole = () => {
    let decode;

    try {
      decode = jsonwebtoken__WEBPACK_IMPORTED_MODULE_10___default().verify(token, "V1dxFZpCmm9yaagRAxAIREPRw1Mqacag0rUIp1v3cTs=");
    } catch (error) {
      console.error(error);
    }

    role = decode && decode.role;
  };

  userRole();

  if (token === null || token === undefined) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false
      }
    };
  }

  try {
    const res1 = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${"https://powerful-sunglasses-newt.cyclic.app"}/api/camps`);
    const res2 = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${"https://powerful-sunglasses-newt.cyclic.app"}/api/admin/campsOrders`, {
      headers: {
        'Cookie': `token=${token}`
      }
    });
    const res3 = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${"https://powerful-sunglasses-newt.cyclic.app"}/api/admin/tripsOrders`, {
      headers: {
        'Cookie': `token=${token}`
      }
    });
    return {
      props: {
        camps: res1.data,
        campsOrders: res2.data,
        tripsOrders: res3.data,
        role: role
      }
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true
    };
  }
};

const Dashboard = ({
  language,
  camps,
  campsOrders,
  tripsOrders,
  role
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
  const {
    0: toggleActiveTab,
    1: setToggleActiveTab
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);
  const {
    0: user,
    1: setUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  const {
    0: newCampsOrders,
    1: setNewCampsOrders
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    0: newCampsordersList,
    1: setNewCampsOrdersList
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const {
    0: newTripsOrders,
    1: setNewTripsOrders
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    0: newTRipsOrdersList,
    1: setNewTripsOrdersList
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (false) {}
  }, []);
  /* Handle notification */
  //-- Camps orders notifications

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const checkForNewCampsOrders = () => {
      if (campsOrders.length > 0 && (campsOrders[0].new === true || campsOrders[1].new === true || campsOrders[2].new === true)) {
        setNewCampsOrders(true);
        const newOrdersList = campsOrders.filter(order => {
          return order.new === true;
        });
        setNewCampsOrdersList(newOrdersList);
      }
    };

    const checkForNewTripsOrders = () => {
      if (tripsOrders.length > 0 && (tripsOrders[0].new === true || tripsOrders[1].new === true || tripsOrders[2].new === true)) {
        setNewTripsOrders(true);
        const newOrdersList = tripsOrders.filter(order => {
          return order.new === true;
        });
        setNewTripsOrdersList(newOrdersList);
      }
    };

    checkForNewCampsOrders();
    checkForNewTripsOrders();
  }, [campsOrders, tripsOrders]);
  /* End Handle notification */
  // Handle Logout

  let expireDate = new Date();
  let yesterday = expireDate.getDate() - 1;
  expireDate.setDate(yesterday);

  const logout = async () => {
    try {
      const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${"https://powerful-sunglasses-newt.cyclic.app"}/api/auth/logout`);
      localStorage.removeItem("user");
      setUser(null);
      router.push("/admin/login");
    } catch (error) {
      console.error("Error", error && error.response.data.message);
    }
  };

  setTimeout(() => {
    logout();
  }, 1000 * 60 * 60 * 7);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_components_admin_Dashboard__WEBPACK_IMPORTED_MODULE_1__/* .Container */ .W, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {
      className: "side-bar",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
        className: "tabs",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("h4", {
          children: "\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {
          className: toggleActiveTab === 1 ? 'tab active-tab' : 'tab',
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("button", {
            onClick: () => setToggleActiveTab(1),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("h5", {
              children: "\u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645"
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("h4", {
          children: "\u0627\u0644\u0642\u0627\u0626\u0645\u0629"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {
          className: toggleActiveTab === 2 ? 'tab active-tab' : 'tab',
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("button", {
            onClick: () => {
              setToggleActiveTab(2);
              setNewTripsOrders(false);
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("h5", {
              children: ["\u0627\u0644\u0631\u062D\u0644\u0627\u062A", newTripsOrders && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("span", {
                className: "notification",
                children: [newTRipsOrdersList.length, " ", newTRipsOrdersList.length > 10 || newTRipsOrdersList.length <= 2 ? "حجز جديد" : "حجوزات جديدة"]
              })]
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {
          className: toggleActiveTab === 3 ? 'tab active-tab' : 'tab',
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("button", {
            onClick: () => {
              setToggleActiveTab(3);
              setNewCampsOrders(false);
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("h5", {
              children: ["\u0627\u0644\u0645\u062E\u064A\u0645\u0627\u062A", newCampsOrders && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("span", {
                className: "notification",
                children: [newCampsordersList.length, " ", newCampsordersList.length > 10 || newCampsordersList.length <= 2 ? "حجز جديد" : "حجوزات جديدة"]
              })]
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {
          className: toggleActiveTab === 4 ? 'tab active-tab' : 'tab',
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("button", {
            onClick: () => setToggleActiveTab(4),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("h5", {
              children: "\u0627\u0644\u063A\u0631\u0641"
            })
          })
        }), user && user.role === "admin1" && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {
          className: toggleActiveTab === 5 ? 'tab active-tab' : 'tab',
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("button", {
            onClick: () => setToggleActiveTab(5),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("h5", {
              children: "\u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646"
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {
          className: toggleActiveTab === 6 ? 'tab active-tab' : 'tab',
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("button", {
            onClick: () => setToggleActiveTab(6),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("h5", {
              children: "\u0627\u0644\u062E\u062F\u0645\u0627\u062A"
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("h4", {
          children: "\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {
          className: toggleActiveTab === 7 ? 'tab active-tab' : 'tab',
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("button", {
            onClick: () => setToggleActiveTab(7),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("h5", {
              children: "\u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0634\u062E\u0635\u064A"
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {
          className: "tab",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("button", {
            onClick: logout,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("h5", {
              children: "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C"
            })
          })
        })]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {
      className: "main-body",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
        className: "tabs-content",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {
          className: toggleActiveTab === 1 ? 'tab-content active-tab-content' : 'tab-content',
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_components_admin_Main__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {
          className: toggleActiveTab === 2 ? 'tab-content active-tab-content' : 'tab-content',
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_components_admin_Trips__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            language: language,
            newTRipsOrdersList: newTRipsOrdersList
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {
          className: toggleActiveTab === 3 ? 'tab-content active-tab-content' : 'tab-content',
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_components_admin_Camps__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            camps: camps,
            language: language,
            newCampsordersList: newCampsordersList
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {
          className: toggleActiveTab === 4 ? 'tab-content active-tab-content' : 'tab-content',
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_components_admin_Rooms__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            camps: camps
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {
          className: toggleActiveTab === 5 ? 'tab-content active-tab-content' : 'tab-content',
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_components_admin_Users__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            role: role,
            loggedInUser: user
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {
          className: toggleActiveTab === 6 ? 'tab-content active-tab-content' : 'tab-content',
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_components_admin_Services__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {})
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {
          className: toggleActiveTab === 7 ? 'tab-content active-tab-content' : 'tab-content',
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_components_admin_Profile__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            user: user
          })
        })]
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7998));
module.exports = __webpack_exports__;

})();