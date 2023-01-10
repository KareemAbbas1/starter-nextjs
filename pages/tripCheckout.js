import { useState, useEffect } from 'react';
import { Container } from '../components/campCheckout';
import { useForm } from "react-hook-form";
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';
import Paypal from '../public/paypal.jpg';
import vodaLogoEng from '../public/vodaLogoEng.jpg';
import vodaLogoAra from '../public/vodaLogoAra.jpg';
import bankMistLogo from '../public/bankMisrLogo.png';
import Image from 'next/image';


const TripCheckout = ({ language, setLoading }) => {

    // Handle change route loading
    useEffect(() => {
        setLoading(false);
    }, []);

    const [submitionData, setSubmitionData] = useState();
    const [orderIsSent, setOrderIsSent] = useState(false);
    const [error, setError] = useState(null);
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== "undefined") {
            const data = JSON.parse(localStorage.getItem("Trip submition data"))
            setSubmitionData(data);
        }
    }, []);


    // Push to home if there's no submitoin data
    if (typeof window !== "undefined" && submitionData === null) {
        router.push("/")
    };

    // Extract Data
    const duration = submitionData && submitionData.duration;
    const extraOptions = submitionData && submitionData.extraOptions;
    const ticketPrice = submitionData && submitionData.price;
    const startDate = submitionData && submitionData.startDate;
    const adultsTicketsCount = submitionData && submitionData.tickets.adults;
    const childrenTicketsCount = submitionData && submitionData.tickets.children;
    const tirpTitle = submitionData && submitionData.tirpTitle[0];
    const tripAraTitle = submitionData && submitionData.tirpTitle[1];


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



    // Resend confirmation email
    const resend = async (e) => {
        e.target.disabled = true
        const orderData = JSON.parse(localStorage.getItem("Order Data"));
        try {
            await axios.post('/api/submitCampOrder', {
                guestInfo: orderData.guestInfo
            });
        }
        catch (error) {
            typeof window !== "undefined" && console.log(error);
        }

        setTimeout(() => {
            e.target.disabled = false
        }, 60000);

        setTimeout(() => {
            router.push("/")
        }, 420000);
    };



    // Handle enable booking button
    const enableButton = () => {
        let checker = document.getElementById('trip-terms');
        if (checker.checked && submitionData !== null) {
            document.getElementById('submit-trip-order').disabled = false;
        } else {
            document.getElementById('submit-trip-order').disabled = true;
        }
    }


    /* Cancel order */

    // Open cancel modal
    const openModal = (e) => {
        e.preventDefault();
        document.getElementById("cancel-trip-modal").style.display = "flex";
        document.querySelector("body").style.overflowY = "hidden";
    }

    // Close cancel modal
    const closeModal = (e) => {
        document.getElementById("cancel-trip-modal").style.display = "none";
        document.querySelector("body").style.overflowY = "auto";
    }

    // Handel Cancel order
    const cancelOrder = () => {
        router.back();
        localStorage.removeItem("Trip submition data");
        document.querySelector("body").style.overflowY = "auto";
    }

    /* End Cancel order */



    // Submit order/Complete booking
    const { register, handleSubmit, formState: { errors }, getValues, reset } = useForm();
    const [emailsMatch, setEmailsMatch] = useState(true);
    const [phoneMatch, setPhoneMatch] = useState(true);
    const [validData, setValidData] = useState(true);


    async function onFormSubmit(values) {
        const confirmEmailField = document.getElementById("trip-confirm-email").value;
        if (confirmEmailField === "") {
            return setEmailsMatch(false);
        }
        if (phoneMatch !== true || emailsMatch !== true) {
            setValidData(false);
        } else {
            setLoading(true);
            setValidData(true);
            document.getElementById("submit-trip-order").disabled = true;

            try {
                const response = await axios.post('/api/submit-trip-order', {
                    orderDetails: {
                        duration,
                        extraOptions,
                        ticketPrice,
                        startDate,
                        adultsTicketsCount,
                        childrenTicketsCount,
                        title: [
                            tirpTitle,
                            tripAraTitle
                        ],
                        tripId: submitionData && submitionData.tripId
                    },
                    clientInfo: {
                        fullName: values.tripFullName,
                        email: confirmEmailField,
                        phoneNumber: values.tripConfirmPhone
                    },
                    state: "Not Paid"
                });
                localStorage.setItem("Trip Order Data", JSON.stringify({
                    orderDetails: {
                        duration,
                        extraOptions,
                        ticketPrice,
                        startDate,
                        adultsTicketsCount,
                        childrenTicketsCount,
                        title: [
                            tirpTitle,
                            tripAraTitle
                        ],
                        tripId: submitionData && submitionData.tripId
                    },
                    clientInfo: {
                        fullName: values.tripFullName,
                        email: confirmEmailField,
                        phoneNumber: values.tripConfirmPhone
                    },
                    state: "Not Paid"
                }));
                if (response.status === 200) {
                    reset();
                    localStorage.removeItem("Trip submition data");
                    document.body.scrollTop = 0;
                    document.documentElement.scrollTop = 0;
                    setOrderIsSent(true);
                    setLoading(false)
                }
            }
            catch (error) {
                typeof window !== "undefined" && console.log(error);
            }
        }
    };

    return (
        <Container language={language} orderIsSent>
            {
                orderIsSent === true
                    ?
                    <div className="proccess-success">
                        <div>&#10003;</div>
                        <p>
                            {
                                language === "English"
                                    ? "We have sent you an email with the confirmation link, please check your inbox or spam/junk mail folder."
                                    : "لقد أرسلنا لك رسالة بريد إلكتروني تحتوي على رابط التأكيد ، يرجى التحقق من صندوق الوارد الخاص بك أو مجلد البريد العشوائي / البريد غير الهام"
                            }
                        </p>
                        <p>
                            {
                                language === "English"
                                    ? "If you did not recieve your email in the next few minutes, click the button below to resend."
                                    : "إذا لم تتلق بريدك الإلكتروني في الدقائق القليلة التالية ، فانقر فوق الزر أدناه لإعادة الإرسال"
                            }
                        </p>
                        <button onClick={(e) => resend(e)}>
                            {
                                language === "English"
                                    ? "Resend"
                                    : "إعادة إرسال"
                            } &#8635;
                        </button>
                    </div>

                    :
                    <>
                        <div className="order-details" language={language}>
                            <h1>
                                {
                                    language === "English"
                                        ? '# Checkout'
                                        : 'تأكيد الحجز #'
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

                            <div className="total">
                                <div id="calc-total-cost">
                                    <h1>
                                        {
                                            language === "English"
                                                ? "Total"
                                                : "الإجمالي"
                                        }
                                    </h1>

                                    <p dir={language === "العربية" ? 'rtl' : "ltr"}>
                                        {
                                            language === "English"
                                                ? `${adultsTicketsCount} ${adultsTicketsCount > 1 ? "adults" : "adults"} = `
                                                : `${adultsTicketsCount} ${adultsTicketsCount > 1 ? "بالغين" : "بالغ"} = `
                                        } {language === "English" ? "EGP" : ''} {
                                            adultsTicketsCount * ticketPrice
                                        } {language === "العربية" ? "جنيه" : ""}
                                    </p>

                                    {childrenTicketsCount > 0 &&
                                        <p dir={language === "العربية" ? "rtl" : "ltr"}>
                                            {
                                                language === "English"
                                                    ? `${childrenTicketsCount} ${childrenTicketsCount > 1 ? "children" : "child"} = `
                                                    : `${childrenTicketsCount} ${childrenTicketsCount > 1 ? "أطفال" : "طفل"} = `
                                            } {language === "English" ? "EGP" : ''} {
                                                childrenTicketsCount * ticketPrice
                                            } {language === "العربية" ? "جنيه" : ""}
                                        </p>
                                    }

                                    {submitionData && extraOptions.length > 0 &&
                                        <p dir={language === "العربية" ? "rtl" : "ltr"}>
                                            {
                                                language === "English"
                                                    ? "Extra options = "
                                                    : "إختيارات إضافية = "
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

                                <div>
                                    <h2 className="total-price" dir={language === "العربية" ? "rtl" : "ltr"}>
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
                                                            : extraOptions[0].price * adultsTicketsCount)
                                                        : adultsTicketsCount * ticketPrice
                                        } {
                                            language === "العربية" ? "جنيه " : ""
                                        }
                                    </h2>
                                </div>
                            </div>
                        </div>


                        <div className="client-info">
                            <form onSubmit={handleSubmit(onFormSubmit)}>
                                <h2>
                                    {
                                        language === "English"
                                            ? "Contact Information"
                                            : "ادخل بايانت الاتصال"
                                    }
                                </h2>
                                <input
                                    type='text'
                                    id="trip-full-name"
                                    name="trip-full-name"
                                    placeholder={language === "English" ? "Full Name (as in Passport/National ID) *" : "الاسم الكامل(الموجود في جواز السفر او بطاقة الهوية)*"}
                                    {...register("tripFullName", {
                                        required: {
                                            value: true,
                                            message: "Please enter you full name"
                                        },
                                        minLength: {
                                            value: 8,
                                            message: "This name is too short"
                                        },
                                        maxLength: {
                                            value: 100,
                                            message: "This name is too long"
                                        }
                                    })}
                                    style={{
                                        borderColor: `${errors.tripFullName ? 'red' : 'unset'}`,
                                        textAlign: 'center'
                                    }}
                                />

                                {errors.tripFullName && <span style={{
                                    color: "red"
                                }}>
                                    {errors.tripFullName.message}
                                </span>}


                                <input
                                    type="email"
                                    id="trip-email"
                                    name="trip-email"
                                    placeholder={language === "English" ? "Email Address *" : "*ادخل البريد الإلكتروني"}
                                    {...register("tripEmailfield", {
                                        required: {
                                            value: true,
                                            message: "Please enter your email address"
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
                                    })}
                                    style={{
                                        borderColor: `${errors.tripEmailfield ? 'red' : 'unset'}`,
                                        direction: 'ltr',
                                        textAlign: 'center'
                                    }}
                                />
                                {errors.tripEmailfield && <span style={{
                                    color: "red"
                                }}>{errors.tripEmailfield.message}</span>}


                                <input type="email"
                                    id="trip-confirm-email"
                                    name="trip-confirm-email"
                                    placeholder={language === "English" ? "Re-type Emali Addres *" : "*اعد كتابة البريد الإلكتروني"}
                                    style={{
                                        borderColor: `${errors.tripConfirmEmail ? 'red' : 'unset'}`,
                                        direction: 'ltr',
                                        textAlign: 'center'
                                    }}
                                    onChange={(e) => {
                                        const userEmail = getValues("tripEmailfield");
                                        const confEmail = e.target.value;

                                        if (userEmail !== confEmail) {
                                            setEmailsMatch(false)
                                        }
                                        else {
                                            setEmailsMatch(true)
                                        }
                                    }}
                                />
                                {errors.tripConfirmEmail && <span style={{
                                    color: "red"
                                }}>{errors.tripConfirmEmail.message}</span>}

                                {
                                    emailsMatch !== true && !errors.tripConfirmEmail ? <span style={{ color: 'red' }}>Emails do not match</span> : ""
                                }


                                <input type="tel"
                                    id="trip-phone-number"
                                    name="trip-phone-number"
                                    placeholder={language === "English" ? "Phone Number * (Whatsapp number prefered)" : "*رقم الهاتف"}
                                    {...register("tripPhone", {
                                        required: {
                                            value: true,
                                            message: "Please enter your phone number"
                                        },
                                        minLength: {
                                            value: 8,
                                            message: "This phone number is too short"
                                        },
                                        maxLength: {
                                            value: 15,
                                            message: "This number is too long"
                                        },
                                        pattern: {
                                            value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
                                            message: "Please enter a valid phone number"
                                        }
                                    })}
                                    style={{
                                        borderColor: `${errors.tripPhone ? 'red' : 'unset'}`,
                                        direction: 'ltr',
                                        textAlign: 'center'
                                    }}
                                />
                                {errors.tripPhone && <span style={{
                                    color: "red"
                                }}>{errors.tripPhone.message}</span>}


                                <input
                                    type="tel"
                                    id="trip-confirm-phone-number"
                                    name="trip-confirm-phone-number"
                                    placeholder={language === "English" ? "Re-type Phone Number *" : "*اعد إدخال رقم الهاتف"}
                                    {...register("tripConfirmPhone", {
                                        required: {
                                            value: true,
                                            message: "Please re-type your phone number"
                                        }
                                    })}
                                    style={{
                                        borderColor: `${errors.tripConfirmPhone ? 'red' : 'unset'}`,
                                        direction: 'ltr',
                                        textAlign: 'center'
                                    }}
                                    onChange={(e) => {
                                        const userPhone = getValues("tripPhone");
                                        const confPhone = e.target.value;

                                        if (userPhone !== confPhone) {
                                            setPhoneMatch(false);
                                        } else {
                                            setPhoneMatch(true)
                                        }
                                    }}
                                />
                                {errors.tripConfirmPhone && <span style={{
                                    color: "red"
                                }}>{errors.tripConfirmPhone.message}</span>}

                                {
                                    phoneMatch !== true ? <span style={{ color: 'red' }}>Phone numbers do not match</span> : ""
                                }

                                <h4>
                                    {language === "English" ? "Amount to pay " : "الإجمالي "}
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
                                                        : extraOptions[0].price * adultsTicketsCount)
                                                    : adultsTicketsCount * ticketPrice
                                    }
                                    {
                                        language === "العربية" ? " جنيه" : ""
                                    }
                                </h4>

                                <h3>
                                    {
                                        language === "English"
                                            ? "Payment Methods"
                                            : "طرق الدفع"
                                    }
                                </h3>

                                <span className='payment-logos'>

                                    <Image src={Paypal} alt="PayPal Logo" />
                                    {
                                        language === "English"
                                            ?
                                            <Image src={vodaLogoEng} alt="vodafon cash logo" />
                                            :
                                            <Image src={vodaLogoAra} alt="vodafon cash logo" />
                                    }

                                    <Image src={bankMistLogo} alt="Bank Mirs Logo" />
                                    
                                    <p style={{
                                        fontWeight: 'bold',
                                        border: '1px solid #ccc',
                                        width: "auto",
                                        height: "100%",
                                        borderRadius: '6px',
                                        paddingInline: '5px',
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                    >
                                        {
                                            language === "English"
                                                ? "Bill collector"
                                                : "مندوب تحصيل"
                                        }
                                    </p>
                                </span>

                                <div>
                                    <input type="checkbox" id="trip-terms"
                                        onChange={() => enableButton()}
                                    />
                                    <label htmlFor="trip-terms" >
                                        {
                                            language === "English"
                                                ? "I red and agree to the"
                                                : "اوافق على "
                                        }
                                        <Link href='terms-and-conditions'>
                                            <a id="trip-terms-cond" target="_blank">
                                                {
                                                    language === "English"
                                                        ? "Terms&Conditions"
                                                        : "الشروط والاحكام"
                                                }
                                            </a>
                                        </Link>
                                    </label>
                                </div>
                                {
                                    validData !== true && <span style={{ color: 'red' }}>Plese fill all of the above fields with valid data</span>
                                }
                                <button type="submit" id="submit-trip-order" disabled>
                                    {
                                        language === "English"
                                            ? "Place Order"
                                            : "تاكيد الحجز"
                                    }
                                </button>


                                <button id="cancel-trip-order" className='cancel-order'
                                    onClick={(e) => openModal(e)}>
                                    {
                                        language === "English"
                                            ? "Cancel order"
                                            : "إلغاء الحجز"
                                    }
                                </button>
                            </form>
                        </div>
                        <div id="cancel-tripOrder-modal" className="modal">
                            <div>
                                <span id='close-cancelOrder-modal' className="close-modal">x</span>
                                <p>
                                    {
                                        language === "English"
                                            ? "Are you sure you want to cancel this order?"
                                            : "!تأكيد الغاء الحجز"
                                    }
                                </p>
                                <button id="confirm-cancel-tripOrder" className="confirm-cancel">
                                    {
                                        language === "English"
                                            ? "Yes"
                                            : "نعم"
                                    }
                                </button>
                            </div>
                        </div>

                        <div id="cancel-trip-modal" className="modal">
                            <div>
                                <span onClick={closeModal} id='close-cancel-modal' className="close-modal">x</span>
                                <p>
                                    {
                                        language === "English"
                                            ? "Are you sure you want to cancel this order?"
                                            : "!تأكيد الغاء الحجز"
                                    }
                                </p>
                                <button id="confirm-cancel-order" className="confirm-cancel" onClick={cancelOrder}>
                                    {
                                        language === "English"
                                            ? "Yes"
                                            : "نعم"
                                    }
                                </button>
                            </div>
                        </div>
                    </>
            }
        </Container>
    )
}

export default TripCheckout