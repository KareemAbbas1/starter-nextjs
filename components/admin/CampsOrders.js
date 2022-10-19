import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";




const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0%;

    
    table.camps-table {
    width: 97%;
    margin-top: 1rem;
    text-align: right;
    margin-inline: 1rem;
    padding-inline-start: 0.5rem;
    box-shadow: 1px 0.5px 2px 1px #ccc;

    tbody {
      display: block;
      overflow-y: scroll;
      width: 100%;
      max-height: 400px;
    }
    
    thead, tr {
      width: 100%;
      display: block;
      
      th {
        width: 9.7%;
        padding-block: 1rem;
        font-size: 1.1rem;

      }
    }



      td {
        width: 11.8%;
        height: 3rem;
        border-left: 1px solid #ccc;
        border-top: 1px solid #ccc;
        
        select {
          max-width: 7.5rem;
          margin-top: 0.3rem;
          margin-bottom: 0.3rem;
          text-align: center;
          cursor: pointer;
        }

        span.update-success {
          width: 1.4rem;
          height: 1.4rem;
          position: static;
          display: none;
          justify-content: center;
          align-items: center;
          background-color: #00D100;
          color: #fff;
          font-weight: bold;
          margin-right: 5px;
          border-radius: 50%;
        }
      }

      td.middle-td {
        text-align: center;
      }

      td.camp-name-cel {
        pre {
          display: inline;
          position: relative;
          right: 10px;
          background-color: red;
          color: #fff;
          border-radius: 5px;
          padding-inline: 4px
        }
      }


      button {
        margin-top: unset;
        font-size: unset;
        padding-block: unset;
        margin-right: 5px;
        border: 2px solid #000;
        background-color: #000;
        color: #fff;
        font-weight: bold;
        cursor: pointer;
        transition: all 300ms ease-in-out;

        &:hover {
          background-color: transparent;
          color: #000;
        }
      }

      button.details {
        width: 6rem;
        background-color: #00D100;
        border: 1px solid #00D100;
        &:hover {
          background-color: transparent;
        }
      }

      button.delete {
        background-color: red;
        border: 2.5px solid red;
        &:hover {
          background-color: transparent;
        }
      }
  /* } */

  div.order-modal {
    display: none;
    direction: ${({ language }) => language === "English" ? "ltr" : "rtl"};
    width: 100%;
    height: 90vh;
    background-color: #fff;
    padding-top: 4rem;
    position: fixed;
    top: 0;
    left: 0;
    border-bottom: 1px solid;
    z-index: 10;
    overflow-y: scroll;
    
    span.close-modal {
      width: 1.2rem;
      height: 1.2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      background-color: red;
      position: fixed;
      left: ${({ language }) => language === "English" ? "97%" : "0%"};
      margin-inline-end: 2rem;
      margin-top: 1rem;
      border: 1px solid red;
      border-radius: 5px;
      cursor: pointer;
      transition: all 300ms ease-in-out;

      &:hover {
        background-color: transparent;
        color: red;
      }
     }
     @media(min-width: 1400px) {
       padding-top: 5rem;
     }
    }

    div.modal-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    div {
      width: 60%;
      border-top: 1px solid #ccc;
    }

  }

  div.delete-order {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: none;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.6);

    div.delete-modal-body {
      width: 30%;
      height: 30%;
      background-color: #e0e0e0;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;

      span {
        position: absolute;
        right: 35.5%;
        top: 36%;
        width: 1.2rem;
        height: 1.2rem;
        background-color: #000;
        color: #fff;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #000;
        border-radius: 3px;
        cursor: pointer;
        transition: all 300ms ease-in-out;

        &:hover {
          background-color: #fff;
          color: #000;
        }
      }

      div.delete-modal-content {
        display: flex;
        flex-direction: column;
        p {
          font-size: 1.2rem;
          font-weight: bold;
        }
        button {
          font-size: 1.1rem;
          font-weight: bold;
          padding-block: 0.3rem;
          background-color: red;
          border-color: red;

          &:hover {
            background-color: transparent;
          }
        }
      }
    }
  }
}
`

const Orders = ({ campOrders, currentCampId, language }) => {


  // handle orders
  const [allOrders, setAllOrders] = useState();
  const [isUpdated, setIsUpdated] = useState(false);


  // Fetch camp's orders
  useEffect(() => {
    const fetchCampOrders = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_DOMAIN_NAME}/api/admin/campsOrders/${currentCampId}`);
        setAllOrders(res.data.reverse());
      }
      catch (error) {
        console.error(error);
      }
    };
    if (currentCampId) {
      fetchCampOrders();
    }
  }, [isUpdated, currentCampId])

  const [singleCampOrder, setSingleCampOrder] = useState();
  const [orderState, setOrderState] = useState("");



  // Fetch single camp order
  const fetchCampOrder = async (orderId, notificaitonsSpan) => {
    try {
      const res = await axios.patch(`${process.env.NEXT_PUBLIC_DOMAIN_NAME}/api/campOrders/${orderId}`, {
        new: false
      });
      setSingleCampOrder(res.data);

      openCampOrderModal(orderId);
      document.getElementById(notificaitonsSpan).style.display = "none";
    }
    catch (error) {
      console.error(error);
    }
  };

  // Camp's order modal
  const openCampOrderModal = (orderId) => {
    Array.from(document.getElementsByClassName("order-modal")).map(el => {
      el.style.display = "block"
    })
    document.querySelector("body").style.overflowY = "hidden";
  };

  const closeCampOrderModal = (orderId) => {
    Array.from(document.getElementsByClassName("order-modal")).map(el => {
      el.style.display = "none"
    })
    Array.from(document.getElementsByClassName("order-modal")).map(el => {
      console.log(el.style.display)
    })
    document.querySelector("body").style.overflowY = "auto";
  };



  // Update order payment state
  const updateOrderState = async (orderId, successSpanId) => {
    try {
      await axios.patch(`${process.env.NEXT_PUBLIC_DOMAIN_NAME}/api/campOrders/${orderId}`, {
        state: orderState
      });
      setOrderState("");
      setIsUpdated(!isUpdated);
      document.getElementById(successSpanId).style.display = "inline-flex";
      setTimeout(() => {
        document.getElementById(successSpanId).style.display = "none";
      }, 2000);
    }
    catch (error) {
      console.error(error);
    }
  };




  // Delete Order
  const openDeleteModal = (modalId) => {
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
      await Promise.all(
        roomsIds.map(roomId => {
          axios.patch(`${process.env.NEXT_PUBLIC_DOMAIN_NAME}/api/rooms/updateAvailability?remove=on&id=${roomId}`, {
            dates: dateRange
          })
        })
      );
      // Delete order and remove order Id from camp
      await axios.delete(`${process.env.NEXT_PUBLIC_DOMAIN_NAME}/api/campOrders/${orderId}?campId=${campId}`);
      closeDeleteModal();
      setIsUpdated(!isUpdated)

    }
    catch (error) {
      console.error(error);
    }
  };

  return (
    <Container language={language}>
      <table className="camps-table">
        <thead>
          <tr>
            <th>المخيم</th>
            <th>رقم الغرفة</th>
            <th>تاريخ الوصول</th>
            <th>تاريخ المغادرة</th>
            <th>اسم العميل</th>
            <th>الدفع</th>
            <th>الإجمالي</th>
          </tr>
        </thead>

        <tbody>
          {
            allOrders && allOrders.map(campOrder => (

              <tr key={campOrder._id}>
                <td className="camp-name-cel">
                  {campOrder.orderDetails.camp[1]} {
                    campOrder.new === true &&
                    <pre id={`${campOrder._id}new-order`}>جديد</pre>
                  }
                </td>
                <td>{campOrder.orderDetails.roomsNumbers.toString()}</td>
                <td className="middle-td">{campOrder.orderDetails.dates[0]}</td>
                <td className="middle-td">{campOrder.orderDetails.checkout}</td>

                <td className="middle-td">
                  {
                    `
                        ${campOrder.guestInfo.fullName.split(" ")[0]}
                        ${campOrder.guestInfo.fullName.split(" ")[campOrder.guestInfo.fullName.split(" ").length - 1]}
                        `
                  }
                </td>

                <td className="middle-td">
                  <select
                    defaultValue={campOrder.state}
                    onChange={
                      (e) => setOrderState(e.target.value)}
                  >
                    <option value="Not Paid">Not Paid</option>
                    <option value="Down Payment">Down Payment</option>
                    <option value="Paid">Paid</option>
                  </select>
                  <button onClick={() => updateOrderState(campOrder._id, `${campOrder._id}update-success`)}>تحديث</button>
                  <span
                    id={`${campOrder._id}update-success`}
                    className="update-success"
                  >&#10003;</span>
                </td>

                <td className="middle-td">{campOrder.orderDetails.total}</td>

                <td>
                  <button className="details" onClick={() => fetchCampOrder(campOrder._id, `${campOrder._id}new-order`)}>التفاصيل</button>

                  <div
                    id={`${campOrder._id}camp-order-modal`}
                    className="order-modal"
                    language={language}
                  >
                    <div className="order-modal-body">
                      <span className="close-modal" onClick={() => closeCampOrderModal(`${campOrder._id}camp-order-modal`)}>x</span>
                      <div className="modal-content" language={language}>

                        <h2 style={{ width: '100%', marginTop: '4rem' }}>
                          # {singleCampOrder && singleCampOrder._id}
                        </h2>
                        <h2 style={{ width: '100%' }}>
                          {
                            language === "English"
                              ?
                              `
                                  Reservation at ${singleCampOrder && singleCampOrder.orderDetails.camp[0]} ---
                                  Checkin ${singleCampOrder && singleCampOrder.orderDetails.dates[0]} ---
                                  Checkout ${singleCampOrder && singleCampOrder.orderDetails.checkout}
                                  `
                              :
                              `
                                  حجز في ${singleCampOrder && singleCampOrder.orderDetails.camp[1]} --- 
                                  تاريخ الوصول ${singleCampOrder && singleCampOrder.orderDetails.dates[0]} --- 
                                  تاريخ المغادرة ${singleCampOrder && singleCampOrder.orderDetails.checkout}
                                  `
                          }
                        </h2>
                        <div>
                          <h2>
                            {
                              language === "English"
                                ? `State: ${singleCampOrder && singleCampOrder.state}`
                                : `حالة الدفع: ${singleCampOrder && singleCampOrder.state}`
                            }
                          </h2>
                        </div>
                        <div>
                          <h2>
                            {
                              language === "English"
                                ? "Client Info"
                                : "بيانات العميل"
                            }
                          </h2>
                          <h3>
                            {
                              language === "English"
                                ? "Client Name: "
                                : "إسم العميل: "
                            }
                            {singleCampOrder && singleCampOrder.guestInfo.fullName}
                          </h3>
                          <h3>
                            {
                              language === "English"
                                ? "Email: "
                                : "البريد الإلكتروني: "
                            }
                            {singleCampOrder && singleCampOrder.guestInfo.email}
                          </h3>
                          <h3>
                            {
                              language === "English"
                                ? "Phone number: "
                                : "رقم التيليفون: "
                            }
                            {singleCampOrder && singleCampOrder.guestInfo.phoneNumber}
                          </h3>
                        </div>
                        <div>
                          <h1>
                            {
                              language === "English"
                                ? "Order Details"
                                : "تفاصيل الحجز"
                            }
                          </h1>
                          <h3>
                            {
                              language === "English"
                                ? "Guests Count: "
                                : "عدد الضيوف: "
                            }
                          </h3>
                          <div style={{
                            width: '100%',
                            display: "flex",
                            justifyContent: 'space-between',
                          }}>
                            <h4>
                              {
                                language === "English"
                                  ? `Adults: ${singleCampOrder && singleCampOrder.orderDetails.guestsCount.adults}`
                                  : `بالغين: ${singleCampOrder && singleCampOrder.orderDetails.guestsCount.adults}`
                              }
                            </h4>
                            <h4>
                              {
                                language === "English"
                                  ? `Children: 
                                      ${singleCampOrder && singleCampOrder.orderDetails.guestsCount.children === "" ? "---"
                                    : singleCampOrder && singleCampOrder.orderDetails.guestsCount.children
                                  }`
                                  : `اطفال: 
                                  ${singleCampOrder && singleCampOrder.orderDetails.guestsCount.children === "" ? "---"
                                    : singleCampOrder && singleCampOrder.orderDetails.guestsCount.children
                                  }`
                              }
                            </h4>
                          </div>
                          <h3>
                            {
                              language === "English"
                                ? "Rooms: "
                                : "الغرف: "
                            }
                          </h3>
                          <div style={{
                            width: '100%',
                            display: "flex",
                            justifyContent: 'space-between',
                            borderBottom: '1px solid #000'
                          }}>
                            <h4>
                              {
                                (
                                  singleCampOrder && singleCampOrder.orderDetails.rooms.doubleRooms.split(" ")[0] !== "0"
                                  && singleCampOrder.orderDetails.rooms.doubleRooms.split(" ")[0] !== "false"
                                )

                                && `${singleCampOrder.orderDetails.rooms.doubleRooms}, `
                              }
                              {
                                (
                                  singleCampOrder && singleCampOrder.orderDetails.rooms.bungalows.split(" ")[0] !== "0"
                                  && singleCampOrder.orderDetails.rooms.bungalows.split(" ")[0] !== "false"
                                )

                                && `${singleCampOrder.orderDetails.rooms.bungalows}, `
                              }
                              {
                                (
                                  singleCampOrder && singleCampOrder.orderDetails.rooms.huts.split(" ")[0] !== "0"
                                  && singleCampOrder.orderDetails.rooms.huts.split(" ")[0] !== "false"
                                )

                                && `${singleCampOrder.orderDetails.rooms.huts}`
                              }
                            </h4>
                            <h4>
                              {language === "English" ? "Rooms Numbers: " : "أرقام الغرف: "}
                              {
                                singleCampOrder && singleCampOrder.orderDetails.roomsNumbers.length > 1
                                  ? singleCampOrder && singleCampOrder.orderDetails.roomsNumbers.toString()
                                  : singleCampOrder && singleCampOrder.orderDetails.roomsNumbers
                              }
                            </h4>
                          </div>

                          <h3>
                            {
                              language === "English"
                                ? "Rooms Prices per nights:"
                                : "أسعار الغرف :"
                            }
                          </h3>


                          <div style={{ width: '100%', borderBottom: '1px solid #000' }}>
                            <h4>
                              {
                                (
                                  singleCampOrder && singleCampOrder.orderDetails.rooms.doubleRooms.split(" ")[0] !== "0"
                                  && singleCampOrder.orderDetails.rooms.doubleRooms.split(" ")[0] !== "false"
                                )

                                && `${singleCampOrder.orderDetails.rooms.doubleRooms}
                                    x $${singleCampOrder.orderDetails.roomsPrices.roomPrice} per night 
                                    x ${singleCampOrder.orderDetails.dates.length} nights
                                    = $${singleCampOrder && Number(singleCampOrder.orderDetails.rooms.doubleRooms.split(" ")[0])
                                * singleCampOrder.orderDetails.roomsPrices.roomPrice
                                * singleCampOrder.orderDetails.dates.length
                                }
                                    `
                              }
                            </h4>

                            <h4>
                              {
                                (
                                  singleCampOrder && singleCampOrder.orderDetails.rooms.bungalows.split(" ")[0] !== "0"
                                  && singleCampOrder.orderDetails.rooms.bungalows.split(" ")[0] !== "false"
                                )

                                && `${singleCampOrder.orderDetails.rooms.bungalows}
                                    x $${singleCampOrder.orderDetails.roomsPrices.bungalowPrice} per night 
                                    x ${singleCampOrder.orderDetails.dates.length} nights
                                    = $${singleCampOrder && Number(singleCampOrder.orderDetails.rooms.bungalows.split(" ")[0])
                                * singleCampOrder.orderDetails.roomsPrices.bungalowPrice
                                * singleCampOrder.orderDetails.dates.length
                                }
                                    `
                              }
                            </h4>

                            <h4>
                              {
                                (
                                  singleCampOrder && singleCampOrder.orderDetails.rooms.huts.split(" ")[0] !== "0"
                                  && singleCampOrder.orderDetails.rooms.huts.split(" ")[0] !== "false"
                                )

                                && `${singleCampOrder.orderDetails.rooms.huts}
                                    x $${singleCampOrder.orderDetails.roomsPrices.hutPrice} per night 
                                    x ${singleCampOrder.orderDetails.dates.length} nights
                                    = $${singleCampOrder && Number(singleCampOrder.orderDetails.rooms.huts.split(" ")[0])
                                * singleCampOrder.orderDetails.roomsPrices.hutPrice
                                * singleCampOrder.orderDetails.dates.length
                                }
                                    `
                              }
                            </h4>
                          </div>

                          {
                            singleCampOrder && singleCampOrder.orderDetails.dinnerData.dinner === "on" ?
                              <h3>
                                {
                                  language === "English"
                                    ? `Dinner: (${singleCampOrder && singleCampOrder.orderDetails.guestsCount.adults} people)`
                                    : "وجبة العشاء:"
                                }
                              </h3>
                              :
                              <h3>
                                {
                                  language === "English"
                                    ? "Dinner: Not Included"
                                    : "غير شامل العشاء"
                                }
                              </h3>
                          }

                          {
                            singleCampOrder && singleCampOrder.orderDetails.dinnerData.dinner === "on" &&
                            <div style={{ width: '100%', borderBottom: '1px solid #000' }}>
                              <h4>
                                {
                                  singleCampOrder && singleCampOrder.orderDetails.guestsCount.adults
                                } people x ${singleCampOrder && singleCampOrder.orderDetails.dinnerData.dinnerPrice} per person = ${
                                  singleCampOrder && singleCampOrder.orderDetails.dinnerData.dinnerPrice * singleCampOrder.orderDetails.guestsCount.adults
                                } per night<br /><br />
                                ${
                                  singleCampOrder && singleCampOrder.orderDetails.dinnerData.dinnerPrice * singleCampOrder.orderDetails.guestsCount.adults
                                } x {singleCampOrder && singleCampOrder.orderDetails.dates.length} nights = ${
                                  singleCampOrder && singleCampOrder.orderDetails.dinnerData.dinnerPrice * singleCampOrder.orderDetails.guestsCount.adults * singleCampOrder.orderDetails.dates.length
                                }
                              </h4>
                            </div>
                          }


                          <div style={{ width: '100%', borderBottom: '1px solid #000' }}>
                            <h3>
                              {
                                language === "English"
                                  ? "Total: "
                                  : "الإجمالي: "
                              }
                            </h3>
                            {
                              (
                                singleCampOrder && singleCampOrder.orderDetails.rooms.doubleRooms.split(" ")[0] !== "0"
                                && singleCampOrder.orderDetails.rooms.doubleRooms.split(" ")[0] !== "false"
                              )

                              &&
                              <h4>
                                {singleCampOrder && singleCampOrder.orderDetails.rooms.doubleRooms.split(" ")[0]} Double Room = ${singleCampOrder && Number(singleCampOrder.orderDetails.rooms.doubleRooms.split(" ")[0])
                                  * singleCampOrder.orderDetails.roomsPrices.roomPrice
                                  * singleCampOrder.orderDetails.dates.length
                                }
                              </h4>
                            }

                            {
                              (
                                singleCampOrder && singleCampOrder.orderDetails.rooms.bungalows.split(" ")[0] !== "0"
                                && singleCampOrder.orderDetails.rooms.bungalows.split(" ")[0] !== "false"
                              )

                              &&
                              <h4>
                                {singleCampOrder && singleCampOrder.orderDetails.rooms.bungalows.split(" ")[0]} Bungalows = ${singleCampOrder && Number(singleCampOrder.orderDetails.rooms.bungalows.split(" ")[0])
                                  * singleCampOrder.orderDetails.roomsPrices.bungalowPrice
                                  * singleCampOrder.orderDetails.dates.length
                                }
                              </h4>
                            }

                            {
                              (
                                singleCampOrder && singleCampOrder.orderDetails.rooms.huts.split(" ")[0] !== "0"
                                && singleCampOrder.orderDetails.rooms.huts.split(" ")[0] !== "false"
                              )

                              &&
                              <h4>
                                {singleCampOrder && singleCampOrder.orderDetails.rooms.huts.split(" ")[0]} Hut = ${singleCampOrder && Number(singleCampOrder.orderDetails.rooms.huts.split(" ")[0])
                                  * singleCampOrder.orderDetails.roomsPrices.hutPrice
                                  * singleCampOrder.orderDetails.dates.length
                                }
                              </h4>
                            }

                            {
                              singleCampOrder && singleCampOrder.orderDetails.dinnerData.dinner === "on" &&
                              <h4>
                                Dinner = ${
                                  singleCampOrder && singleCampOrder.orderDetails.dinnerData.dinnerPrice * singleCampOrder.orderDetails.guestsCount.adults * singleCampOrder.orderDetails.dates.length
                                }
                              </h4>
                            }
                          </div>
                          <div style={{ width: '100%' }}>
                            <h1>
                              {singleCampOrder && singleCampOrder.orderDetails.total}
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>


                <td>
                  <button
                    onClick={() => openDeleteModal(`${campOrder._id}delete`)}
                    className="delete"
                  >مسح</button>
                  <div
                    id={`${campOrder._id}delete`}
                    className="delete-order"
                  >
                    <div className="delete-modal-body">
                      <span className="close-modal" onClick={closeDeleteModal}>x</span>
                      <div className="delete-modal-content">
                        <p>هل تريد إزالة هذا الحجز؟</p>
                        <button onClick={() => deleteOrder(
                          campOrder._id,
                          campOrder.campId,
                          campOrder.roomsIds,
                          campOrder.orderDetails.dates
                        )}>امسح الحجز</button>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </Container>
  )
}

export default Orders