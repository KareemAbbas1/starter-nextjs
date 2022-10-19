import { useEffect, useState } from "react";
import { Container } from "../components/orderComplete";
import axios from "axios";
import { useRouter } from "next/router";


const OrderComplete = ({ language }) => {
    const [submitionData, setSubmitionData] = useState();
    const [roomsIds, setRoomsIds] = useState([]);
    const [campId, setCampId] = useState('')
    const [orderIsSent, setOrderIsSent] = useState(false);



    const router = useRouter();
    useEffect(() => {
        if (typeof window !== "undefined") {
            const data = JSON.parse(localStorage.getItem("Order Data"))
            const rIds = localStorage.getItem("roomsIds");
            const campId = localStorage.getItem("campId");
            setSubmitionData(data);
            setRoomsIds(rIds !== null && rIds.split(","));
            setCampId(campId)
        }

    }, [])



    // Extract Data
    const campName = submitionData && submitionData.orderDetails.camp[0];
    const araCampName = submitionData && submitionData.orderDetails.camp[1];
    const checkin = submitionData && submitionData.orderDetails.dates[0];
    const checkout = submitionData && submitionData.orderDetails.checkout;
    const duration = submitionData && submitionData.orderDetails.dates.length;
    const adultsCount = submitionData && submitionData.orderDetails.guestsCount.adults;
    const childrenCount = submitionData && submitionData.orderDetails.guestsCount.children;
    const rooms = submitionData && submitionData.orderDetails.rooms;
    const roomsPrices = submitionData && submitionData.orderDetails.roomsPrices;
    const dinner = submitionData && submitionData.orderDetails.dinnerData.dinner;
    const dinnerPrice = submitionData && submitionData.orderDetails.dinnerData.dinnerPrice;
    const roomsNumbers = submitionData && submitionData.orderDetails.roomsNumbers;
    // let roomsIds = submitionData && submitionData.orderDetails.roomsIDs;
    let dateRange = submitionData && submitionData.orderDetails.dates;



    const room = submitionData && `${rooms.doubleRooms.split(" ")[1]} ${rooms.doubleRooms.split(" ")[2]}`;
    const roomsCount = submitionData && rooms.doubleRooms.split(" ")[0];

    const bungalow = submitionData && `${rooms.bungalows.split(" ")[1]}`;
    const bungalowCount = submitionData && `${rooms.bungalows.split(" ")[0]}`

    const hut = submitionData && `${rooms.huts.split(" ")[1]}`;
    const hutCount = submitionData && `${rooms.huts.split(" ")[0]}`;


    const roomPrice = submitionData && roomsPrices.roomPrice;
    const bungalowPrice = submitionData && roomsPrices.bungalowPrice;
    const hutPrice = submitionData && roomsPrices.hutPrice;


    // Guest Data
    const fullName = submitionData && submitionData.guestInfo.fullName;
    const email = submitionData && submitionData.guestInfo.email;
    const phoneNumber = submitionData && submitionData.guestInfo.phoneNumber;



    // Handle proccess abortion
    useEffect(() => {

        let validNavigation = false;

        // Exclude tab change(fire these when width > 990px)
        if (window.innerWidth > 990) {
            window.addEventListener("blur", (event) => {
                validNavigation = true;
            });

            window.addEventListener("focus", (event) => {
                validNavigation = false;
            });
        }


        const updateDb = () => {
            if ((validNavigation === false) || (validNavigation === false && orderIsSent === false)) {
                try {
                    Promise.all(
                        roomsIds.map(roomId => {
                            const res = axios.patch(`/api/rooms/updateAvailability?remove=on&id=${roomId}`, {
                                dates: dateRange
                            })
                        })
                    )
                    localStorage.removeItem("Order Data");
                    localStorage.removeItem("roomsIds");
                    localStorage.removeItem("campId");
                }
                catch (error) {
                    console.error(error.response ? error.response.data.message : error);
                }
            }
        }


        /* Update the database on proccess abortion */
        if (orderIsSent === false) {
            document.addEventListener("visibilitychange", updateDb);
            window.addEventListener("beforeunload", updateDb);
        }


        return () => {
            document.removeEventListener("visibilitychange", updateDb);
            window.removeEventListener("beforeunload", updateDb);
        }


    }, [orderIsSent, dateRange, roomsIds]);




    /* Handle Cancel order */

    const openModal = (e) => {
        e.preventDefault();

        document.getElementById('myModal').style.display = "flex";
        document.querySelector('body').style.overflowY = "hidden";
    }

    // close modal
    const closeModal = () => {
        document.getElementById('myModal').style.display = "none";
        document.querySelector('body').style.overflowY = "auto";
    }

    // Cancel order 
    const cancelOrder = async () => {
        try {
            await Promise.all(
                roomsIds.map(roomId => {
                    const res = axios.patch(`/api/rooms/updateAvailability?remove=on&id=${roomId}`, {
                        dates: dateRange
                    })
                })
            )
            localStorage.removeItem("Order Data");
            localStorage.removeItem("roomsIds");
            closeModal();
            router.push("/");
        }
        catch (error) {
            console.error(error.response ? error.response.data.message : error);
        }
    }


    // Submit order
    const submitOrder = async (e) => {
        e.target.disabled = true;
        try {
            await axios.post(`/api/campOrders?campId=${campId}`, {
                orderDetails: submitionData.orderDetails,
                guestInfo: submitionData.guestInfo,
                state: submitionData.state,
                campId: campId,
                roomsIds: roomsIds
            });
            setOrderIsSent(true);
            localStorage.removeItem("Order Data");
            localStorage.removeItem("roomsIds");
            localStorage.removeItem("campId");
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
        catch (error) {
            console.error(error);
        }
    }
    return (
        <Container language={language}>
            {
                orderIsSent === false
                    ? <>


                        <div className="order-data">
                            <h1>
                                {
                                    language === "English"
                                        ? "#Checkout"
                                        : "تأكيد الحجز"
                                }
                            </h1>
                            <h2>
                                {language === "English" ? `Reservation at ${campName}` : araCampName}
                            </h2>
                            <ul>
                                <li>
                                    {language === "English" ? 'Checkin date:' : "تاريخ الوصول:"} {checkin}, 11:00 {language === "English" ? "am" : "صباحا"}
                                </li>
                                <li>
                                    {language === "English" ? 'Checkout date:' : "تاريخ المغادرة:"} {checkout}, 11:00 {language === "English" ? "am" : "صباحا"}
                                </li>
                                <li>
                                    {language === "English" ? 'Duration:' : "مدة الاقامة:"} {duration} {language === "English" ? "nights" : "ليالي"}
                                </li>
                            </ul>

                            <h3>
                                {
                                    language === "English"
                                        ? `Guest${adultsCount > 1 && "s"} count:`
                                        : ":عدد الضيوف"
                                }
                            </h3>
                            <ul>
                                <li>{language === "English" ? "Adults:" : "بالغين"} {adultsCount}</li>
                                {
                                    childrenCount > 0 &&
                                    <li>
                                        {language === "English" ? `${childrenCount > 1 ? "Children" : "Child"}:` : "اطفال"} {childrenCount}
                                    </li>
                                }
                            </ul>

                            <h3>
                                {language === "English" ? "Rooms:" : ":الغرف"}
                            </h3>
                            <ul>
                                {
                                    (submitionData && roomsCount > 0)
                                    &&
                                    <li>
                                        {roomsCount} {language === "English" ? `${room}${roomsCount > 1 ? "s" : ''}` : 'غرفة مزدوجة'}
                                    </li>
                                }
                                {
                                    (submitionData && bungalowCount > 0)
                                    &&
                                    <li>
                                        {bungalowCount} {language === "English" ? `${bungalow}${bungalowCount > 1 ? "s" : ''}` : "كوخ مزدوج"}
                                    </li>
                                }
                                {
                                    (submitionData && hutCount > 0)
                                    &&
                                    <li>
                                        {hutCount} {language === "English" ? `${hut}${hutCount > 1 ? "s" : ''}` : "خوشة"}
                                    </li>
                                }
                            </ul>

                            {language === "English" &&
                                <>
                                    <h3>
                                        {
                                            submitionData && roomsNumbers.length > 1
                                                ? 'rooms prices '
                                                : 'room price '
                                        }
                                        per night:
                                    </h3>
                                    <ul>
                                        {
                                            (submitionData && roomsCount > 0)
                                            && <li>{room}: ${roomPrice} per night x {roomsCount} {roomsCount > 1 ? "rooms" : "room"} = ${roomPrice * roomsCount}</li>
                                        }
                                        {
                                            (submitionData && bungalowCount > 0)
                                            && <li>{bungalow}: ${bungalowPrice} per night x {bungalowCount} {bungalowCount > 1 ? "bungalows" : "bungalow"} = ${bungalowPrice * bungalowCount}</li>
                                        }
                                        {
                                            (submitionData && hutCount > 0)
                                            && <li>{hut}: ${hutPrice} per night x {hutCount} {hutCount > 1 ? "huts" : "hut"} = ${hutPrice * hutCount}</li>
                                        }
                                    </ul>


                                    {
                                        dinner === "on" &&
                                        <>
                                            <h3>Dinner:</h3>
                                            <ul>
                                                <li>Dinner price per person: ${dinnerPrice}</li>
                                                <li>
                                                    Sub Total: {adultsCount} adults x ${dinnerPrice} = ${adultsCount * dinnerPrice} per night
                                                </li>
                                                <li>
                                                    Total: ${adultsCount * dinnerPrice} x {duration} night{duration > 1 ? "s" : ''} = ${adultsCount * dinnerPrice * duration}
                                                </li>
                                            </ul>
                                        </>
                                    }


                                    <h3>{roomsCount > 1 || bungalowCount > 1 || hutCount > 1 ? "Rooms Numbers:" : "Room Number:"}</h3>
                                    <ul>
                                        <li>{roomsCount > 1 || bungalowCount > 1 || hutCount > 1 ? roomsNumbers.toString() : roomsNumbers}</li>
                                    </ul>
                                </>
                            }

                            <div className="calc-total-cost">
                                <h2>
                                    {
                                        language === "English"
                                            ? "Total:"
                                            : ":الإجمالي"
                                    }
                                </h2>

                                {
                                    roomsCount > 0 &&
                                    <p dir={language === "العربية" && "rtl"}>
                                        {roomsCount}
                                        {`${language === "English" ? `${room} x` : "غرفة مزدوجة *"} ${duration} ${language === "English" ? 'nights' : 'ليالي'} = $${roomPrice * duration}`}
                                    </p>
                                }
                                {
                                    bungalowCount > 0 &&
                                    <p>{bungalowCount} {bungalow} x {duration} nights = ${bungalowPrice * duration}</p>
                                }
                                {
                                    hutCount > 0 &&
                                    <p>{hutCount} {hut} x {duration} nights = ${hutPrice * duration}</p>
                                }
                                {
                                    dinner === "on" &&
                                    <p>{language === "English" ? "Dinner" : "الغذاء"} = ${adultsCount * dinnerPrice * duration}</p>
                                }
                            </div>
                            <div className="total-cost">
                                <h2 className="total-price" id='total-price'>
                                    ${
                                        (roomsCount > 0 && roomPrice * roomsCount * duration)
                                        + (bungalowCount > 0 && bungalowPrice * bungalowCount * duration)
                                        + (hutCount > 0 && hutPrice * hutCount * duration)
                                        + (dinner === "on" && adultsCount * dinnerPrice * duration)
                                    }
                                </h2>
                            </div>

                        </div>
                        <div className="client-info">
                            <h1>
                                {
                                    language === "English"
                                        ? "Guest Information"
                                        : "بيانات النزيل"
                                }
                            </h1>

                            <h2>
                                {
                                    language === "English"
                                        ? "Reservation by:"
                                        : ":حجز باسم"
                                }
                            </h2><br />
                            <h3>- {fullName}</h3>

                            <h2>
                                {
                                    language === "English"
                                        ? "Email Addres:"
                                        : ":بريد إلكتروني"
                                }
                            </h2><br />
                            <h3>- {email}</h3>

                            <h2>
                                {
                                    language === "English"
                                        ? "Phone Number:"
                                        : ":رقم الهاتف"
                                }
                            </h2><br />
                            <h3>- {phoneNumber}</h3>

                            <h2>
                                {
                                    language === "English"
                                        ? "Amount to pay:"
                                        : ":المبلغ المستحق"
                                }
                            </h2><br />
                            <h3>
                                - ${
                                    (roomsCount > 0 && roomPrice * roomsCount * duration)
                                    + (bungalowCount > 0 && bungalowPrice * bungalowCount * duration)
                                    + (hutCount > 0 && hutPrice * hutCount * duration)
                                    + (dinner === "on" && adultsCount * dinnerPrice * duration)
                                }
                                <span> ({(submitionData && language === "English") ? submitionData.state : "آجل"})</span>
                            </h3>

                            <h2>
                                {
                                    language === "English"
                                        ? "Payment Method:"
                                        : ":طريقة الدفع"
                                }
                            </h2><br />
                            <h3>
                                {
                                    language === "English"
                                        ? "- Pay on arrival"
                                        : "الدفع عند الوصول"
                                }
                            </h3>

                            <button onClick={(e) => submitOrder(e)} disabled={submitionData === null && true}>
                                {
                                    language === "English"
                                        ? "Confirm Booking"
                                        : "تأكيد الحجز"
                                }
                            </button>
                            <button id="cancel-order" onClick={(e) => openModal(e)} disabled={submitionData === null && true}>
                                {
                                    language === "English"
                                        ? "Cancel Booking"
                                        : "إلغاء الحجز"
                                }
                            </button>
                        </div>
                        <div id="myModal" className="cancel-order-modal">
                            <div>
                                <span onClick={closeModal} id='close-modal'>x</span>
                                <p>
                                    {
                                        language === "English"
                                            ? "Are you sure you want to cancel this order?"
                                            : "!تأكيد الغاء الحجز"
                                    }
                                </p>
                                <button id="confirm-cancel" onClick={cancelOrder}>
                                    {
                                        language === "English"
                                            ? "Yes"
                                            : "نعم"
                                    }
                                </button>
                            </div>
                        </div>
                    </>
                    : <>
                        <div className="order-sent">
                            <div>&#10003;</div>
                            <p>Your order has been submitted successfully,<br />
                                One of our employees will contact you soon.<br />
                                Thank you for booking with us.
                            </p>
                        </div>
                    </>
            }
        </Container>
    )
}

export default OrderComplete