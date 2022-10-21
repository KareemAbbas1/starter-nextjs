import { useState, useEffect } from 'react'
import { Container } from "../../components/orderComplete";
import { useRouter } from 'next/router';
import axios from 'axios';





const Index = ({ language }) => {

    const [submitionData, setSubmitionData] = useState();
    const [orderIsSent, setOrderIsSent] = useState(false);
    const router = useRouter();


    useEffect(() => {
        if (typeof window !== "undefined" && localStorage.getItem("Trip Order Data")) {
            const data = JSON.parse(localStorage.getItem("Trip Order Data"));
            setSubmitionData(data);
        }
        else if (typeof window !== "undefined" && !localStorage.getItem("Trip Order Data") && orderIsSent === false) {
            router.push('/');
        }
    }, [orderIsSent, router]);


    /* Extract data */

    // Order data
    const duration = submitionData && submitionData.orderDetails.duration;
    const extraOptions = submitionData && submitionData.orderDetails.extraOptions;
    const ticketPrice = submitionData && submitionData.orderDetails.ticketPrice;
    const startDate = submitionData && submitionData.orderDetails.startDate;
    const adultsTicketsCount = submitionData && submitionData.orderDetails.adultsTicketsCount;
    const childrenTicketsCount = submitionData && submitionData.orderDetails.childrenTicketsCount;
    const tirpTitle = submitionData && submitionData.orderDetails.title[0];
    const tripAraTitle = submitionData && submitionData.orderDetails.title[1];
    const tripId = submitionData && submitionData.orderDetails.tripId;
    const paymentState = submitionData && submitionData.state;


    // Client data
    const fullName = submitionData && submitionData.clientInfo.fullName;
    const email = submitionData && submitionData.clientInfo.email;
    const phoneNumber = submitionData && submitionData.clientInfo.phoneNumber;

    /* End Extract data */


    // Calculate extra option total price
    const extraOptionsCalc = (array, peopleCount) => {
        for (let i = 0; i < array.length; i++) {
            let firstNum, secondNum, thirdNum;
            firstNum = array[0].price;
            secondNum = array[1].price;
            thirdNum = array.length > 2 && array[2].price;
            if (i < array.length - 1 && array.length > 2) {
                return ((firstNum + secondNum + thirdNum) * peopleCount)
            } else if (i < array.length - 1 && array.length <= 2) {
                return ((firstNum + secondNum) * peopleCount)
            }
        }
    };



    /* Submit order */
    const submitOrder = async (e) => {
        e.preventDefault();
        try {
            const total = submitionData && childrenTicketsCount > 0 && extraOptions.length > 0
                ?
                (adultsTicketsCount * ticketPrice)
                +
                (childrenTicketsCount * ticketPrice)
                +
                (extraOptions.length > 1
                    ? extraOptionsCalc(extraOptions, adultsTicketsCount)
                    : extraOptions[0].price * adultsTicketsCount)


                : submitionData && childrenTicketsCount > 0 && extraOptions.length <= 0
                    ?
                    (adultsTicketsCount * ticketPrice)
                    +
                    (childrenTicketsCount * ticketPrice)


                    : submitionData && childrenTicketsCount <= 0 && extraOptions.length > 0
                        ?
                        (adultsTicketsCount * ticketPrice)
                        +
                        (extraOptions.length > 1
                            ? extraOptionsCalc(extraOptions, adultsTicketsCount)
                            : extraOptions[0].price * adultsTicketsCount
                        )
                        : adultsTicketsCount * ticketPrice;

            await axios.post(`/api/trip-order?tripId=${tripId}`, {
                orderDetails: {
                    title: [
                        tirpTitle,
                        tripAraTitle
                    ],
                    startDate: startDate,
                    duration: duration,
                    ticketPrice: ticketPrice,
                    tickets: {
                        adults: adultsTicketsCount,
                        children: childrenTicketsCount
                    },
                    extraOptions: extraOptions,
                    total: Number(total)
                },
                clientInfo: {
                    fullName: fullName,
                    email: email,
                    phoneNumber: phoneNumber
                },
                state: "Not Paid",
                tripId: tripId
            });
            localStorage.removeItem("Trip Order Data");
            setOrderIsSent(true);
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
        catch (error) {
            console.error(error);
        }
    };
    /* End Submit order */


    /* Cancel Order */

    // handle open/close modal
    const openModal = (e) => {
        document.getElementById("cancel-trip-order-modal").style.display = "flex";
        document.querySelector("body").style.overflowY = "hidden";
    };

    const closeModal = (e) => {
        document.getElementById("cancel-trip-order-modal").style.display = "none";
        document.querySelector("body").style.overflowY = "auto";
    };

    // Cancel order
    const cancelOrder = (e) => {
        e.preventDefault();
        localStorage.removeItem("Trip Order Data");
        document.querySelector("body").style.overflowY = "auto";
        router.push(`/trip/${tripId}`);
    };

    /* End Cancel Order */

    return (
        <Container language={language}>
            {
                orderIsSent === false
                    ?
                    <>
                        <div className="order-data">
                            <h1>
                                {
                                    language === "English"
                                        ? "#Checkout"
                                        : "تأكيد الحجز"
                                }
                            </h1>

                            <h2>
                                {
                                    submitionData && language === "English"
                                        ? tirpTitle
                                        : tripAraTitle
                                }
                            </h2>

                            <ul>
                                <li>
                                    <h4 style={{ display: 'inline' }}>

                                        {
                                            language === "English"
                                                ? "Date:"
                                                : "تاريخ التحرك:"
                                        }
                                    </h4> <span>{startDate}</span>
                                </li>

                                <li>
                                    <h4 style={{ display: 'inline' }}>
                                        {
                                            language === "English"
                                                ? "Duration:"
                                                : "مدة الرحلة:"
                                        }
                                    </h4> {duration} {
                                        language === "English"
                                            ? "Days"
                                            : "أيام"
                                    }
                                </li>

                                <li>
                                    <h4 style={{ display: 'inline' }}>
                                        {
                                            language === "English"
                                                ? "Tickets:"
                                                : "التذاكر:"
                                        }
                                    </h4>
                                    <p>
                                        {
                                            language === "English"
                                                ? `- ${adultsTicketsCount} ${adultsTicketsCount > 1 ? "adults" : "adult"
                                                } x EGP ${ticketPrice} = EGP ${adultsTicketsCount * ticketPrice}`
                                                : `- ${adultsTicketsCount} ${adultsTicketsCount > 1 ? "بالغين" : "بالغ"
                                                } * ${ticketPrice} جنيه = ${adultsTicketsCount * ticketPrice} جنيه`
                                        }
                                    </p>

                                    {
                                        childrenTicketsCount > 0 &&
                                        <p>{
                                            language === "English"
                                                ? `- ${childrenTicketsCount} ${childrenTicketsCount > 1 ? "children" : "child"
                                                } x EGP ${ticketPrice} = EGP ${childrenTicketsCount * ticketPrice}`
                                                : `- ${childrenTicketsCount} ${childrenTicketsCount > 1 ? "أطفال" : "طفل"
                                                } * ${ticketPrice} جنيه = ${childrenTicketsCount * ticketPrice} جنيه`
                                        }</p>
                                    }
                                </li>

                                {
                                    submitionData && extraOptions.length > 0 &&
                                    <li>
                                        <h4 style={{ display: 'inline' }}>
                                            {
                                                language === "English"
                                                    ? "Extra Options:"
                                                    : "إختيارات إضافية:"
                                            }
                                        </h4>

                                        {
                                            extraOptions.map(option => (
                                                <div key={option.text}>
                                                    <p>
                                                        {
                                                            language === "English"
                                                                ? `${extraOptions.indexOf(option) + 1}- ${option.text[0]}, EGP ${option.price} per person.`
                                                                : `${extraOptions.indexOf(option) + 1}- ${option.text[1]} ، ${option.price} جنيه للفرد`
                                                        }
                                                    </p>
                                                    <pre>
                                                        {
                                                            language === "English"
                                                                ? `   - Total price: EGP ${option.price} x ${adultsTicketsCount} ${adultsTicketsCount > 1 ? "adults" : "adult"
                                                                } = EGP ${adultsTicketsCount * option.price}`
                                                                : `   - السعر الكلي: ${option.price} جنيه * ${adultsTicketsCount} ${adultsTicketsCount > 1 ? "بالغين" : "بالغ"
                                                                } = ${adultsTicketsCount * option.price} جنيه`
                                                        }
                                                    </pre>
                                                </div>
                                            ))
                                        }

                                        {
                                            extraOptions.length > 1 &&
                                            <h5>
                                                {
                                                    language === "English"
                                                        ? "Extra options total ptice = "
                                                        : "إجمالي سعر الإختيارات الإضافية = "
                                                }
                                                {
                                                    extraOptions.length > 1
                                                        ? `${language === "English" ? "EGP" : ""}
                                                        ${extraOptionsCalc(extraOptions, adultsTicketsCount)}
                                                        ${language === "العربية" ? "جنيه" : ""}`

                                                        : `${language === "English" ? "EGP" : ""}
                                                ${extraOptions[0].price * adultsTicketsCount}
                                                ${language === "العربية" ? "جنيه" : ""}`
                                                }
                                            </h5>
                                        }
                                    </li>
                                }
                            </ul>

                            <div className="calc-total-cost">
                                <h2>
                                    {
                                        language === "English"
                                            ? "Total:"
                                            : ":الإجمالي"
                                    }
                                </h2>

                                <p
                                    style={{ marginBlock: '1%' }}
                                    dir={language === "العربية" ? "rtl" : "ltr"}
                                >
                                    {
                                        language === "English"
                                            ? `- ${adultsTicketsCount} ${adultsTicketsCount > 1 ? "adults" : "adults"} = `
                                            : `- ${adultsTicketsCount} ${adultsTicketsCount > 1 ? "بالغين" : "بالغ"} = `
                                    } {language === "English" ? "EGP" : ''} {
                                        adultsTicketsCount * ticketPrice
                                    } {language === "العربية" ? "جنيه" : ""}
                                </p>

                                {childrenTicketsCount > 0 &&
                                    <p
                                        style={{ marginBlock: '1%' }}
                                        dir={language === "العربية" ? "rtl" : "ltr"}
                                    >
                                        {
                                            language === "English"
                                                ? `- ${childrenTicketsCount} ${childrenTicketsCount > 1 ? "children" : "child"} = `
                                                : `- ${childrenTicketsCount} ${childrenTicketsCount > 1 ? "أطفال" : "طفل"} = `
                                        } {language === "English" ? "EGP" : ''} {
                                            childrenTicketsCount * ticketPrice
                                        } {language === "العربية" ? "جنيه" : ""}
                                    </p>
                                }

                                {submitionData && extraOptions.length > 0 &&
                                    <p
                                        style={{ marginBlock: '1%' }}
                                        dir={language === "العربية" ? "rtl" : "ltr"}
                                    >
                                        {
                                            language === "English"
                                                ? "- Extra options = "
                                                : "- إختيارات إضافية = "
                                        }
                                        {
                                            extraOptions.length > 1
                                                ? `${language === "English" ? "EGP" : ""}
                                                        ${extraOptionsCalc(extraOptions, adultsTicketsCount)}
                                                        ${language === "العربية" ? "جنيه" : ""}`

                                                : `${language === "English" ? "EGP" : ""}
                                                ${extraOptions[0].price * adultsTicketsCount}
                                                ${language === "العربية" ? "جنيه" : ""}`
                                        }
                                    </p>
                                }


                            </div>

                            <div className="total-cost">
                                <h2
                                    className="total-price"
                                    id='order-total-price'
                                    dir={language === "العربية" ? "rtl" : "ltr"}
                                    style={{ float: `${language === "العربية" ? "left" : null}` }}
                                >
                                    {
                                        language === "English" ? "EGP " : ""
                                    }
                                    {
                                        submitionData && childrenTicketsCount > 0 && extraOptions.length > 0
                                            ?
                                            (adultsTicketsCount * ticketPrice)
                                            +
                                            (childrenTicketsCount * ticketPrice)
                                            +
                                            (extraOptions.length > 1
                                                ? extraOptionsCalc(extraOptions, adultsTicketsCount)
                                                : extraOptions[0].price * adultsTicketsCount)


                                            : submitionData && childrenTicketsCount > 0 && extraOptions.length <= 0
                                                ?
                                                (adultsTicketsCount * ticketPrice)
                                                +
                                                (childrenTicketsCount * ticketPrice)


                                                : submitionData && childrenTicketsCount <= 0 && extraOptions.length > 0
                                                    ?
                                                    (adultsTicketsCount * ticketPrice)
                                                    +
                                                    (extraOptions.length > 1
                                                        ? extraOptionsCalc(extraOptions, adultsTicketsCount)
                                                        : extraOptions[0].price * adultsTicketsCount
                                                    )
                                                    : adultsTicketsCount * ticketPrice
                                    } {
                                        language === "العربية" ? "جنيه" : ""
                                    }
                                </h2>
                            </div>
                        </div>

                        <div className="client-info">
                            <h1>
                                {
                                    language === "English"
                                        ? "Client Information"
                                        : "بيانات العميل"
                                }
                            </h1>

                            <h2>
                                {
                                    language === "English"
                                        ? "Reservation by:"
                                        : ":حجز باسم"
                                }
                            </h2><br />
                            <h3> {fullName}</h3>

                            <h2>
                                {
                                    language === "English"
                                        ? "Email Addres:"
                                        : ":بريد إلكتروني"
                                }
                            </h2><br />
                            <h3> {email}</h3>

                            <h2>
                                {
                                    language === "English"
                                        ? "Phone Number:"
                                        : ":رقم الهاتف"
                                }
                            </h2><br />
                            <h3> {phoneNumber}</h3>

                            <h2>
                                {
                                    language === "English"
                                        ? "Amount to pay:"
                                        : ":المبلغ المستحق"
                                }
                            </h2><br />
                            <h3 dir={language === "العربية" ? "rtl" : "ltr"}>
                                {
                                    language === "English" ? "EGP " : ""
                                }
                                {
                                    submitionData && childrenTicketsCount > 0 && extraOptions.length > 0
                                        ?
                                        (adultsTicketsCount * ticketPrice)
                                        +
                                        (childrenTicketsCount * ticketPrice)
                                        +
                                        (extraOptions.length > 1
                                            ? extraOptionsCalc(extraOptions, adultsTicketsCount)
                                            : extraOptions[0].price * adultsTicketsCount)


                                        : submitionData && childrenTicketsCount > 0 && extraOptions.length <= 0
                                            ?
                                            (adultsTicketsCount * ticketPrice)
                                            +
                                            (childrenTicketsCount * ticketPrice)


                                            : submitionData && childrenTicketsCount <= 0 && extraOptions.length > 0
                                                ?
                                                (adultsTicketsCount * ticketPrice)
                                                +
                                                (extraOptions.length > 1
                                                    ? extraOptionsCalc(extraOptions, adultsTicketsCount)
                                                    : extraOptions[0].price * adultsTicketsCount
                                                )
                                                : adultsTicketsCount * ticketPrice
                                } {
                                    language === "العربية" ? "جنيه" : ""
                                }
                                <span>
                                    ({(submitionData && language === "English") ? submitionData.state : "آجل"})
                                </span>
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
                                        ? "Our employee will contact you"
                                        : "سيتواصل معك احد موظفينا"
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
                        <div id="cancel-trip-order-modal" className='cancel-order-modal'>
                            <div>
                                <span id='close-cancel-trip-order-modal' onClick={(e) => closeModal(e)}>x</span>
                                <p>
                                    {
                                        language === "English"
                                            ? "Are you sure you want to cancel this order?"
                                            : "!تأكيد الغاء الحجز"
                                    }
                                </p>
                                <button id="confirm-cancel-trip-order" onClick={(e) => cancelOrder(e)}>
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
                            {
                                language === "English"
                                    ?
                                    <p>
                                        Your order has been submitted successfully,<br />
                                        One of our employees will contact you soon.<br />
                                        Thank you for booking with us.
                                    </p>
                                    :
                                    <p>
                                        .تم تسجيل طلبك بنجاح ، سيتصل بك احد موظفينا قريبا<br />
                                        .شكرا للحجز معنا
                                    </p>
                            }
                        </div>
                    </>
            }

        </Container >
    )
}

export default Index