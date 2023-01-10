import { useState, useEffect } from "react";
import { Container } from "../components/campCheckout";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import { useForm } from "react-hook-form";
import Paypal from '../public/paypal.jpg';
import vodaLogoEng from '../public/vodaLogoEng.jpg';
import vodaLogoAra from '../public/vodaLogoAra.jpg';
import bankMistLogo from '../public/bankMisrLogo.png';
import Image from 'next/image';

const CampCheckout = ({ language, setLoading }) => {

  // Handle route change loading
  useEffect(() => {
    setLoading(false);
  }, []);

  const router = useRouter();
  const [submitionData, setSubmitionData] = useState();
  const [orderIsSent, setOrderIsSent] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {
    if (typeof window !== "undefined") {
      const data = JSON.parse(localStorage.getItem("Submition Data"))
      setSubmitionData(data);
    }

  }, [])


  // Extract Data
  const campId = submitionData && submitionData.campId;
  const campName = submitionData && submitionData.camp[0];
  const araCampName = submitionData && submitionData.camp[1];
  const checkin = submitionData && submitionData.dates[0];
  const checkout = submitionData && submitionData.checkout;
  const duration = submitionData && submitionData.dates.length;
  const adultsCount = submitionData && submitionData.adults;
  const childrenCount = submitionData && submitionData.children;
  const dinner = submitionData && submitionData.dinner;
  const dinnerPrice = submitionData && submitionData.dinnerPrice;
  const roomsNumbers = submitionData && submitionData.roomNumber;
  const roomsCount = submitionData && submitionData.roomNumber.length;
  let roomsIds = submitionData && submitionData.roomsIDs;
  let dateRange = submitionData && submitionData.dates;


  // Store rooms IDs & camp Id in the localstorage to use them in the compelete order component
  if (typeof window !== "undefined") {
    localStorage.setItem("roomsIds", roomsIds);
    localStorage.setItem("campId", campId);
  }
  // Get rooms prices
  const roomsPrices = submitionData && submitionData.prices.map(price => (
    price.split('             ')[1]
  ));

  const roomTypes = submitionData && submitionData.roomsTypes.map(roomType => (
    roomType.split(',')[0]
  ))

  const room = submitionData && roomsPrices[0].split(':')[0];
  const roomPrice = submitionData && roomsPrices[0].split(':')[1];

  const bungalow = submitionData && roomsPrices[1].split(':')[0];
  const bungalowPrice = submitionData && roomsPrices[1].split(':')[1];

  const hut = submitionData && roomsPrices[2].split(':')[0];
  const hutPrice = submitionData && roomsPrices[2].split(':')[1];


  // Calculating how many rooms of each room type
  let uniq = a => [...new Set(a)];
  let array1 = uniq(submitionData && uniq(submitionData.roomsTypes));
  let array2 = submitionData && submitionData.roomsTypes;

  let doubleRoomCount,
    bungalowCount,
    hutCount;
  const howManyRooms = (arr1, arr2) => {
    if (arr1.length > 1 && arr2.length > 1) {
      for (let i = 0; i < arr1.length; i++) {
        doubleRoomCount = arr2.filter(j => j === arr1[0]).length;
        bungalowCount = arr2.filter(j => j === arr1[1]).length;
        hutCount = arr2.filter(j => j === arr1[2]).length;
      }
    } else {
      hutCount = submitionData && submitionData.roomsTypes[0] === "Hut,خوشة" && arr2.length;
      doubleRoomCount = submitionData && submitionData.roomsTypes[0] === "Double Room ,غرفة مزدوجة " && arr2.length;
      bungalowCount = submitionData && submitionData.roomsTypes[0] === "Bungalow,كوخ مزدوج" && arr2.length;
    }
  };
  howManyRooms(array1, array2)

  const orderDetails = {
    camp: submitionData && submitionData.camp,
    dates: submitionData && submitionData.dates,
    checkout: submitionData && submitionData.checkout,
    guestsCount: {
      adults: submitionData && submitionData.adults,
      children: submitionData && submitionData.children
    },
    rooms: {
      doubleRooms: submitionData ? `${doubleRoomCount} ${room.split('           ')[1]}` : '-----',
      bungalows: submitionData ? `${bungalowCount} ${bungalow.split('           ')[1]}` : '-----',
      huts: submitionData ? `${hutCount} ${hut.split('           ')[1]}` : '-----',
    },
    roomsPrices: {
      roomPrice: submitionData && roomPrice,
      bungalowPrice: submitionData && bungalowPrice,
      hutPrice: submitionData && hutPrice
    },
    dinnerData: {
      dinner: submitionData && submitionData.dinner,
      dinnerPrice: submitionData && submitionData.dinnerPrice
    },
    roomsNumbers: submitionData && submitionData.roomNumber,
    total: submitionData && orderIsSent === false && document.getElementById("total-price").innerHTML,
  };





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


    if (orderIsSent === false) {

      // Attach the event keypress to exclude the F5 refresh
      document.addEventListener("keypress", (e) => {
        let key = e.key;
        if (key === "F5") {
          validNavigation = true;
        }
      });



      // Exclude the terms and conditions link
      let termsLink = document.getElementById("terms-cond");
      termsLink.addEventListener("click", () => {
        validNavigation = true;
      });



      // Attach the event submit for all forms in the page
      let myForm = document.querySelector("form");
      myForm.addEventListener("submit", () => {
        validNavigation = true;
      });


      // Attach the event click to the submit button
      const myBtn = document.getElementById("submit-order");
      myBtn.addEventListener("click", () => {
        validNavigation = true;
      })


      // Attach the evnt click to the cancel order buttons
      const cancelBtn = document.getElementById("cancel-order");
      cancelBtn.addEventListener("click", () => {
        validNavigation = true;
      });

    }

    function updateDb() {
      if ((validNavigation === false) || (validNavigation === false && orderIsSent === false)) {
        try {
          Promise.all(
            roomsIds.map(roomId => {
              const res = axios.patch(`/api/rooms/updateAvailability?remove=on&id=${roomId}&updateLocation=off`, {
                dates: dateRange
              })
            })
          )
          localStorage.removeItem("Submition Data");
          localStorage.removeItem("roomsIds");
          setTimeout(() => { router.back() }, 2000)
        }
        catch (error) {
          setError(error.response ? error.response.data.message : error);
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

  }, [orderIsSent, dateRange, roomsIds, router]);





  // Handle enable booking button
  const enableButton = () => {
    let checker = document.getElementById('terms');
    if (checker.checked && submitionData !== null) {
      document.getElementById('submit-order').disabled = false;
    } else {
      document.getElementById('submit-order').disabled = true;
    }
  }


  /* Handle Cancel order */

  const openModal = (e) => {
    e.preventDefault();

    document.getElementById('modal').style.display = "flex";
    document.querySelector('body').style.overflowY = "hidden";
  }

  // close modal
  const closeModal = () => {
    document.getElementById('modal').style.display = "none";
    document.querySelector('body').style.overflowY = "auto";
  }


  // Cancel order 

  const cancelOrder = async () => {
    try {
      await Promise.all(
        roomsIds.map(roomId => {
          const res = axios.patch(`/api/rooms/updateAvailability?remove=on&id=${roomId}&updateLocation=off`, {
            dates: dateRange
          })
        })
      )
      localStorage.removeItem("Submition Data");
      localStorage.removeItem("roomsIds");
      closeModal();
      router.back();
    }
    catch (error) {
      setError(error.response ? error.response.data.message : error);
    }
  }


  // Submit Order/Complete Booking
  const { register, handleSubmit, formState: { errors }, getValues, reset } = useForm();
  const [emailsMatch, setEmailsMatch] = useState(true);
  const [phoneMatch, setPhoneMatch] = useState(true);
  const [validData, setValidData] = useState(true);


  async function onFormSubmit(values) {
    const confirmEmailField = document.getElementById("confirm-email").value;
    if (confirmEmailField === "") {
      return setEmailsMatch(false);
    }
    if (phoneMatch !== true || emailsMatch !== true) {
      setValidData(false)
    }
    else {
      setValidData(true)
      document.getElementById("submit-order").disabled = true;

      try {
        setLoading(true);
        const response = await axios.post('/api/submitCampOrder', {
          orderDetails,
          guestInfo: {
            fullName: values.fullName,
            email: confirmEmailField,
            phoneNumber: values.confirmPhone
          },
          state: "Not Paid"
        });
        localStorage.setItem("Order Data", JSON.stringify({
          orderDetails,
          guestInfo: {
            fullName: values.fullName,
            email: confirmEmailField,
            phoneNumber: values.confirmPhone
          },
          state: "Not Paid"
        }));
        if (response.status === 200) {
          reset();
          localStorage.removeItem("Submition Data");
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
          setOrderIsSent(true);
          setLoading(false);
        }
      }
      catch (error) {
        typeof window !== "undefined" && console.log(error);
      }
    }
  }


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
                    ? "# Checkout"
                    : "تاكيد الحجز #"
                }
              </h1>
              <h2>
                {language === "English" ? `Reservation at ${campName}` : araCampName}
              </h2>
              <ul>
                <li>
                  <strong>{language === "English" ? 'Checkin date:' : "تاريخ الوصول:"} {checkin}, 11:00 {language === "English" ? "am" : "صباحا"}</strong>
                </li>
                <li>
                  <strong>{language === "English" ? 'Checkout date:' : "تاريخ المغادرة:"} {checkout}, 11:00 {language === "English" ? "am" : "صباحا"}</strong>
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
                  (submitionData && roomTypes.includes(room.split('           ')[1]))
                  &&
                  <li>
                    {doubleRoomCount} {language === "English" ? `${room}${doubleRoomCount > 1 ? "s" : ''}` : 'غرفة مزدوجة'}
                    <p>- {language === "English" && "room description:"} {submitionData.roomsDescriptions[0].description[language === "English" ? 0 : 1]}</p>
                  </li>
                }
                {
                  (submitionData && roomTypes.includes(bungalow.split('           ')[1]))
                  &&
                  <li>
                    {bungalowCount} {language === "English" ? `${bungalow}${bungalowCount > 1 ? "s" : ''}` : "كوخ مزدوج"}
                    <p>- {language === "English" && "bungalow description:"} {submitionData.roomsDescriptions[1].description[language === "English" ? 0 : 1]}</p>
                  </li>
                }
                {
                  (submitionData && roomTypes.includes(hut.split('           ')[1]))
                  &&
                  <li>
                    {hutCount} {language === "English" ? `${hut}${hutCount > 1 ? "s" : ''}` : "خوشة"}
                    <p>- {language === "English" && "hut description:"} {submitionData.roomsDescriptions[2].description[language === "English" ? 0 : 1]}</p>
                  </li>
                }
              </ul>

              {language === "English" &&
                <>
                  <h3>
                    {
                      submitionData && roomTypes.length > 1
                        ? 'rooms prices '
                        : 'room price '
                    }
                    per night:
                  </h3>
                  <ul>
                    {
                      (submitionData && roomTypes.includes(room.split('           ')[1]))
                      && <li>{room}: EGP{roomPrice} per night x {doubleRoomCount} {doubleRoomCount > 1 ? "rooms" : "room"} = EGP {roomPrice * doubleRoomCount}</li>
                    }
                    {
                      (submitionData && roomTypes.includes(bungalow.split('           ')[1]))
                      && <li>{bungalow}: EGP {bungalowPrice} per night x {bungalowCount} {bungalowCount > 1 ? "bungalows" : "bungalow"} = EGP {bungalowPrice * bungalowCount}</li>
                    }
                    {
                      (submitionData && roomTypes.includes(hut.split('           ')[1]))
                      && <li>{hut}: EGP {hutPrice} per night x {hutCount} {hutCount > 1 ? "huts" : "hut"} = EGP {hutPrice * hutCount}</li>
                    }
                  </ul>


                  {
                    dinner === "on" &&
                    <>
                      <h3>Dinner:</h3>
                      <ul>
                        <li>Dinner price per person: EGP {dinnerPrice}</li>
                        <li>
                          Sub Total: {adultsCount} adults x EGP {dinnerPrice} = EGP {adultsCount * dinnerPrice} per night
                        </li>
                        <li>
                          Total: EGP {adultsCount * dinnerPrice} x {duration} night{duration > 1 ? "s" : ''} = EGP {adultsCount * dinnerPrice * duration}
                        </li>
                      </ul>
                    </>
                  }


                  <h3>{roomsCount > 1 ? "Rooms Numbers:" : "Room Number:"}</h3>
                  <ul>
                    <li>{roomsCount > 1 ? roomsNumbers.toString() : roomsNumbers}</li>
                  </ul>
                </>
              }



              <div className="total">
                <div id="calc-total-cost">
                  <h2>
                    {
                      language === "English"
                        ? "Total:"
                        : ":الإجمالي"
                    }
                  </h2>
                  {
                    (submitionData && roomTypes.includes(room.split('           ')[1]))
                    &&
                    <p dir={language === "العربية" ? "rtl" : "ltr"}>
                      {doubleRoomCount}
                      {language === "English" ? `${room}${doubleRoomCount > 1 ? "s" : ''} x ${duration} night${duration > 1 && 's'} :` : ` غرفة مزدوجة`}
                      {language === "English" && ` EGP ${roomPrice * doubleRoomCount * duration}`}
                    </p>
                  }
                  {
                    (submitionData && roomTypes.includes(bungalow.split('           ')[1]))
                    &&
                    <p dir={language === "العربية" ? "rtl" : "ltr"}>
                      {bungalowCount}
                      {language === "English" ? `${bungalow}${bungalowCount > 1 ? "s" : ''} x ${duration} night${duration > 1 && 's'} :` : " كوخ مزدوج"}
                      {language === "English" && ` EGP ${bungalowPrice * bungalowCount * duration}`}
                    </p>
                  }
                  {
                    (submitionData && roomTypes.includes(hut.split('           ')[1]))
                    &&
                    <p dir={language === "العربية" ? "rtl" : "ltr"}>
                      {hutCount}
                      {language === "English" ? `${hut}${hutCount > 1 ? "s" : ''} x ${duration} night${duration > 1 && 's'} :` : " خوشة"}
                      {language === "English" && ` EGP ${hutPrice * hutCount * duration}`}
                    </p>
                  }
                  {
                    (language === "English" && dinner === "on") &&
                    <p>Dinner: EGP {adultsCount * dinnerPrice * duration}</p>
                  }
                </div>
                <div id="total-cost">
                  <h2 className="total-price" id='total-price'>
                    EGP {
                      (doubleRoomCount > 0 && roomPrice * doubleRoomCount * duration)
                      + (bungalowCount > 0 && bungalowPrice * bungalowCount * duration)
                      + (hutCount > 0 && hutPrice * hutCount * duration)
                      + (dinner === "on" && adultsCount * dinnerPrice * duration)
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
                  id="full-name"
                  name="full-name"
                  placeholder={language === "English" ? "Full Name (as in Passport/National ID) *" : "الاسم الكامل(الموجود في جواز السفر او بطاقة الهوية)*"}
                  {...register("fullName", {
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
                    borderColor: `${errors.fullName ? 'red' : 'unset'}`
                  }}
                />

                {errors.fullName && <span style={{
                  color: "red"
                }}>
                  {errors.fullName.message}
                </span>}

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={language === "English" ? "Email Address *" : "ادخل البريد الإلكتروني*"}
                  {...register("emailfield", {
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
                    borderColor: `${errors.emailfield ? 'red' : 'unset'}`
                  }}
                />
                {errors.emailfield && <span style={{
                  color: "red"
                }}>{errors.emailfield.message}</span>}

                <input
                  type="email"
                  id="confirm-email"
                  name="confirm-email"
                  placeholder={language === "English" ? "Re-type Emali Addres *" : "اعد كتابة البريد الإلكتروني*"}
                  style={{
                    borderColor: `${errors.confirmEmail ? 'red' : 'unset'}`
                  }}
                  onChange={(e) => {
                    const userEmail = getValues("emailfield");
                    const confEmail = e.target.value;

                    if (userEmail !== confEmail) {
                      setEmailsMatch(false)
                    }
                    else {
                      setEmailsMatch(true)
                    }
                  }}
                />
                {errors.confirmEmail && <span style={{
                  color: "red"
                }}>{errors.confirmEmail.message}</span>}

                {
                  emailsMatch !== true && !errors.confirmEmail ? <span style={{ color: 'red' }}>Emails do not match</span> : ""
                }

                <input
                  type="tel"
                  id="phone-number"
                  name="phone-number"
                  placeholder={language === "English" ? "Phone Number * (Whatsapp number prefered)" : "رقم الهاتف*"}
                  {...register("phone", {
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
                    borderColor: `${errors.phone ? 'red' : 'unset'}`
                  }}
                />
                {errors.phone && <span style={{
                  color: "red"
                }}>{errors.phone.message}</span>}

                <input
                  type="tel"
                  id="confirm-phone-number"
                  name="confirm-phone-number"
                  placeholder={language === "English" ? "Re-type Phone Number *" : "اعد إدخال رقم الهاتف*"}
                  {...register("confirmPhone", {
                    required: {
                      value: true,
                      message: "Please re-type your phone number"
                    }
                  })}
                  style={{
                    borderColor: `${errors.confirmPhone ? 'red' : 'unset'}`
                  }}
                  onChange={(e) => {
                    const userPhone = getValues("phone");
                    const confPhone = e.target.value;

                    if (userPhone !== confPhone) {
                      setPhoneMatch(false);
                    } else {
                      setPhoneMatch(true)
                    }
                  }}
                />
                {errors.confirmPhone && <span style={{
                  color: "red"
                }}>{errors.confirmPhone.message}</span>}

                {
                  phoneMatch !== true ? <span style={{ color: 'red' }}>Phone numbers do not match</span> : ""
                }

                <h4>
                  {language === "English" ? "Amount to pay " : "الإجمالي "}
                  EGP {
                    (doubleRoomCount > 0 && roomPrice * doubleRoomCount * duration)
                    + (bungalowCount > 0 && bungalowPrice * bungalowCount * duration)
                    + (hutCount > 0 && hutPrice * hutCount * duration)
                    + (dinner === "on" && adultsCount * dinnerPrice * duration)
                  }
                </h4>


                <h3>
                  {
                    language === "English"
                      ? "Payment Method"
                      : "طريقة الدفع"
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
                  <input type="checkbox" id="terms"
                    onChange={() => enableButton()}
                  />
                  <label htmlFor="terms" >
                    {
                      language === "English"
                        ? "I red and agree to the"
                        : "اوافق على "
                    }
                    <Link href='terms-and-conditions'>
                      <a href="" id="terms-cond" target="_blank">
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
                <button type="submit" id="submit-order" disabled>
                  {
                    language === "English"
                      ? "Place Order"
                      : "تاكيد الحجز"
                  }
                </button>


                <button id="cancel-order" className="cancel-order"
                  onClick={(e) => openModal(e)}>
                  {
                    language === "English"
                      ? "Cancel order"
                      : "إلغاء الحجز"
                  }
                </button>
              </form>
            </div>
            <div id="modal" className="modal">
              <div>
                <span onClick={closeModal} id='close-modal' className="close-modal">x</span>
                <p>
                  {
                    language === "English"
                      ? "Are you sure you want to cancel this order?"
                      : "!تأكيد الغاء الحجز"
                  }
                </p>
                <button id="confirm-cancel" className="confirm-cancel" onClick={cancelOrder}>
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

export default CampCheckout