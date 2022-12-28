import ImagesSlider from "../../components/sliders/images slider/ImagesSlider";
import { Container, AccordionButton, AccordionPanel } from "../../components/trip";
import { CaretUp } from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";



export const getServerSideProps = async ({ params }) => {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_DOMAIN_NAME}/api/trips/${params.id}`);
        const data = await res.data
        return {
            props: {
                trip: data,
            }
        }
    }
    catch (error) {
        return {
            notFound: true,
        }
    }
};

const Trip = ({ language, trip, loading, setLoading }) => {

    // Handle loading
    useEffect(() => {
        setLoading(false);
    }, [])
    // Extract Data
    const tripId = trip && trip._id;

    const title = trip && trip.title[0];
    const araTitle = trip && trip.title[1];

    const price = trip && trip.price;
    const duration = trip && trip.duration;
    const maxPeople = trip && trip.maxPeople;
    const images = trip && trip.images
    const startDate = trip && trip.startDate;
    const endDate = trip && trip.endDate;

    const overview = trip && trip.overview[0];
    const araOverview = trip && trip.overview[1];

    const state = trip && trip.state[0];
    const araState = trip && trip.state[1];

    const [toggleActiveTab, setToggleActiveTab] = useState(1);

    // Handle toggle accordion
    const toggleAccordion = (panelID, buttonID, arrowID) => {
        let accordion = document.getElementById(panelID);
        let button = document.getElementById(buttonID)
        let arrow = document.getElementById(arrowID);
        if (accordion.style.display === "none") {
            arrow.style.transform = "rotate(-0.5turn)";
            accordion.style.display = "block";
            button.style.backgroundColor = "rgba(0, 0, 0, 2%)"
        } else {
            arrow.style.transform = "rotate(0)";
            accordion.style.display = "none";
            button.style.backgroundColor = "transparent"
        };
    };

    // Handle disable book now button
    useEffect(() => {
        const handleDisableBtn = () => {
            if (state == "Closed") {
                document.getElementById('book-now').disabled = true;
            }
        }
        handleDisableBtn()
    }, [state]);



    /* Trip Checkout */
    const [adultsTickets, setAdultsTickets] = useState(0);
    const [childrenTickets, setChildrenTickets] = useState(0);
    const [tripExtraOptions, setTripExtraOptions] = useState([]);
    const router = useRouter();


    // Extract extra options data
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
        }
        else {
            elIndex = tripExtraOptions.findIndex(option => option.text[0] === newEl.text[0])
            if (elIndex > -1) {
                tripExtraOptions.splice(elIndex, 1);
                newArr = [...tripExtraOptions];
                setTripExtraOptions(newArr);
            }
        }
    };



    // Handle checkout 
    const [noTicketsSelected, setNoTicketsSelected] = useState(false);


    const handleCheckout = (e) => {
        e.preventDefault();

        if (adultsTickets === 0 || adultsTickets === '') {
            return setNoTicketsSelected(true);
        } else {
            setLoading(true);

            setTimeout(() => {

                const tripSubmitionData = JSON.stringify({
                    price: price,
                    duration: duration,
                    startDate: startDate,
                    tickets: {
                        adults: Number(adultsTickets),
                        children: Number(childrenTickets)
                    },
                    extraOptions: tripExtraOptions,
                    tirpTitle: [
                        title,
                        araTitle
                    ],
                    tripId: tripId
                });

                localStorage.setItem("Trip submition data", tripSubmitionData);
                router.push('/tripCheckout');
            }, 1500)
        }
    };


    /* End Trip Checkout */

    return (
        <Container language={language}>
            <div className='info-container'>
                <div className='title'>
                    <h1>
                        {
                            language === "English"
                                ? title
                                : araTitle
                        }
                    </h1>
                    {
                        language === "English"
                            ?
                            <div className="title-info">
                                <div className="price">
                                    <h5>From</h5>
                                    <p>EGP {price}</p>
                                </div>

                                <div className="duration">
                                    <h5>Duration</h5>
                                    <p>{duration} Days</p>
                                </div>

                                <div className="people">
                                    <h5>Max People</h5>
                                    <p>{maxPeople}</p>
                                </div>
                            </div>
                            :
                            <div className="title-info">
                                <div className="people">
                                    <h5>عدد الاشخاص</h5>
                                    <p>{maxPeople}</p>
                                </div>

                                <div className="duration">
                                    <h5>المدة</h5>
                                    <p>{duration} ايام</p>
                                </div>

                                <div className="price">
                                    <h5>تبدا من</h5>
                                    <p>EGP {price}</p>
                                </div>
                            </div>
                    }
                </div>

                <ImagesSlider images={images} />

                <div className='info-tabs'>
                    <div className={toggleActiveTab === 1 ? 'tab active-tab' : 'tab'}>
                        <button onClick={() => setToggleActiveTab(1)}>
                            <h5>
                                {
                                    language === "English"
                                        ? "Overview"
                                        : "نظرة عامة"
                                }
                            </h5>
                        </button>
                        <div className="pointer" />
                    </div>

                    <div className={toggleActiveTab === 2 ? 'tab active-tab' : 'tab'}>
                        <button onClick={() => setToggleActiveTab(2)}>
                            <h5>
                                {
                                    language === "English"
                                        ? "Trip Plan"
                                        : "برنامج الرحلة"
                                }
                            </h5>
                        </button>
                        <div className="pointer" />
                    </div>
                </div>

                <div className="tabs-content">
                    <div className={toggleActiveTab === 1 ? 'tab-content active-tab-content' : 'tab-content'}>
                        <p>{language === "English" ? overview : araOverview}</p>
                    </div>

                    <div className={toggleActiveTab === 2 ? 'tab-content active-tab-content' : 'tab-content'}>
                        {
                            trip && trip.tripPlan.english.length !== 0 && trip.tripPlan.english.map(day => (
                                <div key={`${trip.tripPlan.english.indexOf(day)}tirp-plan`}>
                                    <AccordionButton
                                        language={language}
                                        id={`button-${trip.tripPlan.english.indexOf(day) + 1}`}
                                        onClick={() => toggleAccordion(
                                            `day${trip.tripPlan.english.indexOf(day) + 1}`,
                                            `button-${trip.tripPlan.english.indexOf(day) + 1}`,
                                            `day${trip.tripPlan.english.indexOf(day) + 1}-arrow`
                                        )}
                                    >
                                        <h2>
                                            {
                                                language === "English"
                                                    ? `Day ${trip.tripPlan.english.indexOf(day) + 1}`
                                                    : `اليوم ${trip.tripPlan.english.indexOf(day) + 1}`
                                            }
                                        </h2>
                                        <div id={`day${trip.tripPlan.english.indexOf(day) + 1}-arrow`} className='arrow'>
                                            <CaretUp size={20} />
                                        </div>
                                    </AccordionButton>

                                    <AccordionPanel id={`day${trip.tripPlan.english.indexOf(day) + 1}`}>
                                        <p>
                                            {
                                                language === "English"
                                                    ? day
                                                    : trip.tripPlan.arabic[trip.tripPlan.english.indexOf(day)]
                                            }

                                        </p>
                                    </AccordionPanel>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>


            {/* Booking */}
            <div className='booking'>
                <div className="date">
                    <h3 style={{ textDecoration: state == "Closed" && 'line-through' }}>
                        {
                            language === "English"
                                ? "Book This Trip"
                                : "احجز هذه الرحلة"
                        }
                        {state == "Closed" &&
                            <span> {language === "English" ? `(${state})` : `(${araState})`}</span>
                        }
                    </h3>
                    <div>
                        <p>
                            {
                                language === "English"
                                    ? "Start Date:"
                                    : "تاريخ البدء"
                            }
                        </p>
                        <p>{startDate}</p>
                    </div>
                    <div>
                        <p>
                            {
                                language === "English"
                                    ? "End Date:"
                                    : "تاريخ الانتهاء"
                            }
                        </p>
                        <p>{endDate}</p>
                    </div>
                </div>

                <form onSubmit={(e) => handleCheckout(e)}>
                    <div className="tickets">
                        <h3>
                            {
                                language === "English"
                                    ? "Tickets"
                                    : "التذاكر"
                            }
                        </h3>
                        <div className="adults-count">
                            <label htmlFor="adults">
                                {
                                    language === "English"
                                        ? "Adults(18+ years):"
                                        : ":بالغين(18+)"
                                }
                            </label>
                            <select
                                name="adults"
                                id="adults"
                                onChange={(e) => {
                                    setAdultsTickets(e.target.value);
                                    setNoTicketsSelected(false);
                                }}
                            >
                                <option value="">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </div>
                        {
                            noTicketsSelected &&
                            <span style={{ color: 'red' }}>
                                {
                                    language === "English"
                                        ? "Please select at least one adult ticket!"
                                        : "!من فضلك اختر تذكرة واحدة لشخص بالغ على الأقل"
                                }
                            </span>
                        }

                        {/* <div className="children-count">
                            <label htmlFor="children">
                                {
                                    language === "English"
                                        ? "Children(13+ years):"
                                        : ":اطفال(13+)"
                                }
                            </label>
                            <select name="children" id="children" onChange={(e) => setChildrenTickets(e.target.value)}>
                                <option>0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </div> */}
                    </div>
                    {
                        trip && trip.extraOptions.length !== 0 && trip.extraOptions[0].text[0] !== "" &&
                        <div className="extra-facilities">
                            {
                                trip.extraOptions.map(option => (
                                    option.text[0] !== "" &&
                                    <div key={`${trip.extraOptions.indexOf(option)}option`}>
                                        {
                                            language === "العربية" && <label htmlFor={option.text[0]}>${option.text[1]} {option.price}</label>
                                        }
                                        <input
                                            type='checkbox'
                                            name={option.text[0]}
                                            id={option.text[0]}
                                            onChange={(e) => getExtraOption(e, option.text, option.price)}
                                        />{language === "العربية" && <><br /><br /></>}
                                        {
                                            language === "English" && <><label htmlFor={option.text[0]}>
                                                {option.text[0]} ${option.price}
                                            </label><br /><br /></>
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    }


                    <button id='book-now' type="submit">
                        {
                            language === "English"
                                ? "Book Now"
                                : "احجز الآن"
                        }
                    </button>
                </form>
            </div>
        </Container >
    )
}

export default Trip