import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";



const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0%;


  table.trip-orders {
    width: 97%;
    margin-top: 1rem;
    text-align: right;
    margin-inline: 1rem;
    padding-inline-start: 0.5rem;
    box-shadow: 1px 0.5px 2px 1px #ccc;

    .trip-name {
      text-align: right;

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
        width: 8.7rem;
        padding-block: 1rem;
        font-size: 1.1rem;
        text-align: center;
      }
    }


    td {
      width: 16%;
      text-align: center;
      border: 1px solid #ccc;

      select {
        max-width: 7.5rem;
        margin-top: 0.3rem;
        margin-bottom: 0.3rem;
        text-align: center;
        cursor: pointer;
      }


      button.details {
        width: 5rem;
        margin-right: unset;
        background-color: #00D100;
        border: 1px solid #00D100;

        &:hover {
          background-color: transparent;
        }
      }

      button.delete {
        background-color: red;
        border: 1px solid red;

        &:hover {
          background-color: transparent;
        }
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

      div.modal-content {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;

        div {
          width: 60%;
          border-block: 1px solid #ccc;

          h2 {
            margin-top: 1rem;
          }

          h3 {
            text-decoration: underline;
          }
        }

        div.extra-option {
          width: 100%;
          display: flex;
          border-block: none;
        }
      }
    }


    div.delete-order-modal {
      width: 100vw;
      height: 100vh;
      position: fixed;
      left:0;
      top: 0;
      background-color: rgba(255, 255, 255, 0.2);
      display: none;
      align-items: center;
      justify-content: center;
      z-index: 10;

      div {
        background-color: #fff;
        width: 30%;
        height: 25%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 1rem;
        border: 1px solid #000;
        border-radius: 5px;

        span {
          position: relative;
          top: 7px;
          right: 7px;
          align-self: flex-start;
        }

        p {
          font-size: 1.1rem;
        }

        button {
          font-size: 1.1rem;
          font-weight: bold;
          width: 5rem;
          background-color: red;
          border: 1px solid red;

          &:hover {
            background-color: transparent;
          }
        }
      }
    }
  }
`

const TripsOrders = ({ currentTripId, language }) => {

  const [singleOrder, setSingleOrder] = useState();
  const [orderState, setOrderState] = useState("");
  const [isUpdated, setIsUpdated] = useState(false);

  // Fetch trip orders
  const [tripOrders, setTripOrders] = useState();

  useEffect(() => {
    const fetchTripOrders = async () => {
      try {
        const res = await axios.get(`/api/admin/tripsOrders/${currentTripId}`)
        setTripOrders(res.data.reverse());
      }
      catch (error) {
        typeof window !== "undefined" && console.log(error);
      }
    }
    if (currentTripId) {
      fetchTripOrders();
    }
  }, [currentTripId, isUpdated])



  // Fetch single order data
  const fetchOrder = async (orderId, notificaitonsSpan) => {
    try {
      const res = await axios.patch(`/api/trip-order/${orderId}`, {
        new: false
      });
      setSingleOrder(res.data);

      openOrderModal(`${orderId}trip-order-modal`);
      document.getElementById(notificaitonsSpan).style.display = "none";
    }
    catch (error) {
      typeof window !== "undefined" && console.log(error);
    }
  };

  const openOrderModal = (modalId) => {
    document.getElementById(modalId).style.display = "block";
    document.querySelector("body").style.overflowY = "hidden";
  };

  const closeOrderModal = (modalId) => {
    document.getElementById(modalId).style.display = "none";
    document.querySelector("body").style.overflowY = "auto";
  };


  // Update order payment state
  const [paymentState, setPaymentState] = useState('');

  const updatPayment = async (orderId, successSpanId) => {
    try {
      await axios.patch(`/api/trip-order/${orderId}`, {
        state: paymentState
      });
      setIsUpdated(!isUpdated);
      setPaymentState('');
      document.getElementById(successSpanId).style.display = "inline-flex";
      setTimeout(() => {
        document.getElementById(successSpanId).style.display = "none";
      }, 2000);
    }
    catch (error) {
      typeof window !== "undefined" && console.log(error);
    }
  };


  /* Delete Order */

  const deleteOrder = async (orderId, tripId) => {
    try {
      await axios.delete(`/api/trip-order/${orderId}?tripId=${tripId}`)
      closeDeleteModal();
      setIsUpdated(!isUpdated);
    }
    catch(error) {
      typeof window !== "undefined" && console.log(error);
    }
  };

  // Open/close delete modal
  const openDeleteModal = (modalId) => {
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


  return (
    <Container language={language}>
      <table className="trip-orders">
        <thead>
          <tr>
            <th className="trip-name">الرحلة</th>
            <th>تاريخ البدء</th>
            <th>اسم العميل</th>
            <th>عدد التذاكر</th>
            <th>الدفع</th>
            <th>الإجمالي</th>
          </tr>
        </thead>

        <tbody>
          {
            tripOrders && tripOrders.map(order => (
              <tr key={order && order._id}>
                <td className="trip-name">
                  {order && order.orderDetails.title[1]} {
                    order && order.new === true &&
                    <pre id={`${order && order._id}new-order`}>جديد</pre>
                  }
                </td>

                <td>{order && order.orderDetails.startDate}</td>

                <td>
                  {
                    `
                  ${order && order.clientInfo.fullName.split(" ")[0]}
                  ${order && order.clientInfo.fullName.split(" ")[order && order.clientInfo.fullName.split(" ").length - 1]}
                  `
                  }
                </td>

                <td>
                  {((order && order.orderDetails.tickets.adults) + (order && order.orderDetails.tickets.children))}
                </td>

                <td>
                  <select
                    defaultValue={order && order.state}
                    onChange={(e) => setPaymentState(e.target.value)}
                  >
                    <option value="Not Paid">Not Paid</option>
                    <option value="Down Payment">Down Payment</option>
                    <option value="Paid">Paid</option>
                  </select>
                  <button onClick={() => updatPayment(order && order._id, `${order && order._id}update-success`)}>تحديث</button>
                  <span
                    id={`${order && order._id}update-success`}
                    className="update-success"
                  >&#10003;</span>
                </td>

                <td>
                  {
                    order && order.orderDetails.total
                  }جنيه
                </td>

                <td>
                  <button onClick={() => fetchOrder(order && order._id, `${order && order._id}new-order`)} className="details">التفاصيل</button>
                  {/* Order details modal */}
                  <div
                    id={`${order && order._id}trip-order-modal`}
                    className="order-modal"
                    language={language}
                  >
                    <div className="order-modal-body">
                      <span className="close-modal" onClick={() => closeOrderModal(`${singleOrder && singleOrder._id}trip-order-modal`)}>x</span>
                      <div className="modal-content" language={language}>
                        <h2 dir="ltr" style={{ marginTop: '4rem' }}>
                          id: {singleOrder && singleOrder._id}
                        </h2>

                        <h2>
                          {
                            language === "English"
                              ?
                              `
                              Reservation to ${singleOrder && singleOrder.orderDetails.title[0]} -- 
                              Start Date: ${singleOrder && singleOrder.orderDetails.startDate} -- 
                              Duration: ${singleOrder && singleOrder.orderDetails.duration} Days
                              `
                              :
                              `
                              حجز رحلة ${singleOrder && singleOrder.orderDetails.title[1]} -- 
                              تاريخ البدء ${singleOrder && singleOrder.orderDetails.startDate} -- 
                              مدة الرحلة: ${singleOrder && singleOrder.orderDetails.duration} ايام
                              `
                          }
                        </h2>

                        <div>
                          <h2>
                            {
                              language === "English" ? "Payment State:" : "حلة الدفع:"
                            } {singleOrder && singleOrder.state}
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
                            {
                              singleOrder && singleOrder.clientInfo.fullName
                            }
                          </h3>

                          <h3>
                            {
                              language === "English"
                                ? "Email: "
                                : "البريد الإلكتروني: "
                            }
                            {singleOrder && singleOrder.clientInfo.email}
                          </h3>

                          <h3>
                            {
                              language === "English"
                                ? "Phone number: "
                                : "رقم التيليفون: "
                            }
                            <pre
                              dir="ltr"
                              style={{ display: 'inline', fontFamily: 'unset' }}>
                              {singleOrder && singleOrder.clientInfo.phoneNumber}
                            </pre>
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
                                ? "Ticket Price"
                                : "ثمن التذكرة"
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
                                  ? "Adult:"
                                  : "بالغ:"
                              } {language === "English" && "EGP"} {
                                singleOrder && singleOrder.orderDetails.ticketPrice
                              } {
                                language === "العربية" && "جنيه"
                              }
                            </h4>

                            <h4>
                              {
                                language === "English"
                                  ? "Child:"
                                  : "طفل:"
                              } {language === "English" && "EGP"} {
                                singleOrder && singleOrder.orderDetails.ticketPrice
                              } {
                                language === "العربية" && "جنيه"
                              }
                            </h4>
                          </div>


                          <h3>
                            {
                              language === "English"
                                ? "Tickets Count"
                                : "عدد التذاكر"
                            } {
                              (singleOrder && singleOrder.orderDetails.tickets.adults) + (singleOrder && singleOrder.orderDetails.tickets.children)
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
                                  ? `Adults:`
                                  : `بالغين:`
                              } {singleOrder && singleOrder.orderDetails.tickets.adults}
                            </h4>

                            <h4>
                              {
                                language === "English"
                                  ? `Children:`
                                  : `اطفال:`
                              } {singleOrder && singleOrder.orderDetails.tickets.children}
                            </h4>
                          </div>

                          <h3>
                            {
                              language === "English"
                                ? "Extra Options"
                                : "إختيارات إضافية"
                            }
                          </h3>

                          <div style={{ width: '100%' }}>
                            {
                              singleOrder && singleOrder.orderDetails.extraOptions.map(option => (
                                <div
                                  key={option._id}
                                  className="extra-option"
                                >
                                  <div
                                    className="extra-option"
                                    style={{ justifyContent: 'flex-start' }}
                                  >
                                    <h4>
                                      {
                                        language === "English"
                                          ? option.text[0]
                                          : option.text[1]
                                      }
                                    </h4>
                                  </div>

                                  <div
                                    className="extra-option"
                                    style={{ justifyContent: 'flex-end' }}
                                  >
                                    <h4>
                                      {
                                        language === "English"
                                          ? "Price:"
                                          : "السعر:"
                                      } {language === "English" && "EGP"} {option.price} {
                                        language === "العربية" && "جنيه"
                                      }
                                    </h4>
                                  </div>
                                </div>
                              ))
                            }
                          </div>

                          <h1>
                            {
                              language === "English"
                                ? "Total"
                                : "الإجمالي"
                            }
                          </h1>

                          <h4>
                            {
                              language === "English"
                                ?
                                `
                              ${singleOrder && singleOrder.orderDetails.tickets.adults} adults x EGP 
                              ${singleOrder && singleOrder.orderDetails.ticketPrice} = EGP ${(singleOrder && singleOrder.orderDetails.tickets.adults) * (singleOrder && singleOrder.orderDetails.ticketPrice)
                                }
                              `
                                :
                                `
                                ${singleOrder && singleOrder.orderDetails.tickets.adults} بالغين * ${singleOrder && singleOrder.orderDetails.ticketPrice} جنيه = ${(singleOrder && singleOrder.orderDetails.tickets.adults) * (singleOrder && singleOrder.orderDetails.ticketPrice)
                                } جنيه
                                `
                            }
                          </h4>

                          {
                            singleOrder && singleOrder.orderDetails.tickets.children > 0 &&
                            <h4>
                              {
                                language === "English"
                                  ?
                                  `
                              ${singleOrder && singleOrder.orderDetails.tickets.children} children x EGP 
                              ${singleOrder && singleOrder.orderDetails.ticketPrice} = EGP ${(singleOrder && singleOrder.orderDetails.tickets.children) * (singleOrder && singleOrder.orderDetails.ticketPrice)
                                  }
                              `
                                  :
                                  `
                                ${singleOrder && singleOrder.orderDetails.tickets.children} اطفال * ${singleOrder && singleOrder.orderDetails.ticketPrice} جنيه = ${(singleOrder && singleOrder.orderDetails.tickets.children) * (singleOrder && singleOrder.orderDetails.ticketPrice)
                                  } جنيه
                                  `
                              }
                            </h4>
                          }


                          {
                            singleOrder && singleOrder.orderDetails.extraOptions.length > 0 &&
                            <>
                              <p>
                                {
                                  language === "English"
                                    ? "extra option"
                                    : "إختيارات إضافية"
                                }
                              </p>
                              {
                                singleOrder.orderDetails.extraOptions.map(option => (
                                  <h4 key={`${option._id}total`}>
                                    {
                                      language === "English"
                                        ?
                                        `
                                  ${option.text[0]}: EGP ${option.price} x ${singleOrder && singleOrder.orderDetails.tickets.adults} ${(singleOrder && singleOrder.orderDetails.tickets.adults >= 1 && singleOrder.orderDetails.tickets.children > 0) ? "adults" : 'person'}
                                        = ${option.price * (singleOrder && singleOrder.orderDetails.tickets.adults)}
                                        `
                                        :
                                        `
                                        ${option.text[1]}: ${option.price} جنيه * ${singleOrder && singleOrder.orderDetails.tickets.adults} ${(singleOrder && singleOrder.orderDetails.tickets.adults >= 1 && singleOrder.orderDetails.tickets.children > 0) ? "افراد بالغين" : 'شخص'}
                                        = ${option.price * (singleOrder && singleOrder.orderDetails.tickets.adults)} جنيه
                                  `
                                    }
                                  </h4>
                                ))
                              }
                            </>
                          }

                          <div style={{ width: '100%' }}>
                            {
                              singleOrder &&
                              <h1>
                                {language === "English" && "EGP"} {singleOrder && singleOrder.orderDetails.total} {language === "العربية" && "جنيه"}
                              </h1>
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>

                <td>
                  <button
                    onClick={() => openDeleteModal(`${order && order._id}delete-modal`)}
                    className="delete"
                  >مسح</button>

                  <div
                    id={`${order && order._id}delete-modal`}
                    className="delete-order-modal"
                  >
                    <div className="delete-modal-content">
                      <span onClick={closeDeleteModal} className="close-delete-modal">x</span>
                      <p>هل تريد إزالة هذا الحجز؟</p>
                      <button onClick={() => deleteOrder(order && order._id, order && order.tripId)}>نعم</button>
                    </div>
                  </div>
                </td>


              </tr>
            ))
          }
        </tbody>
      </table>
    </Container >
  )
}

export default TripsOrders