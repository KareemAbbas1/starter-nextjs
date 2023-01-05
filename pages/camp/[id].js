import ImagesSlider from "../../components/sliders/images slider/ImagesSlider";
import { Container } from "../../components/camp";
import { GeoAltFill } from "react-bootstrap-icons";
import { useState, useEffect } from "react";
import BreakfastIcon from "../../public/breakfast.png";
import ParkingIcon from "../../public/parking-sign.png";
import Image from 'next/image';
import axios from "axios";
// import moment from "moment";
// import twix from "twix";
import { useRouter } from 'next/router';
import LoadingBar from "../../components/LoadingBar";




export const getServerSideProps = async ({ params }) => {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_DOMAIN_NAME}/api/camps/${params.id}?${params.dateRange}`);
        return {
            props: {
                camp: res.data
            }
        };
    }
    catch {
        return {
            notFound: true,
        }
    }
};

const Camp = ({ language, camp, loading, setLoading }) => {

    // Handel change route loading
    useEffect(() => {
        setLoading(false);
    }, []);

    const router = useRouter()

    // Handle Errors & loading
    const [searchLoading, setSearchLoading] = useState(false);
    const [error, setError] = useState(null);

    // Handle toggle tabs
    const [toggleActiveTab, setToggleActiveTab] = useState(1);


    /* Extract Data */
    const campId = camp && camp._id;
    const images = camp && camp.images;

    const name = camp && camp.name[0];
    const arabicName = camp && camp.name[1];

    const location = camp && camp.location[0];
    const arabicLocation = camp && camp.location[1];

    const overview = camp && camp.description[0];
    const arabicOverview = camp && camp.description[1];

    const facilities = camp && camp.facilities.english;
    const arabicFacilities = camp && camp.facilities.arabic;
    /* End Extract Data */




    /* Handle Booking */
    // Enable/disable Extra facilities
    const onChangeHandler = () => {
        if (typeof window !== "undefined") {
            const roomType = document.getElementById("room-type").value;
            const airCondition = document.getElementById("air-condition")
            if (roomType === "room") {
                airCondition.checked = true;
                document.getElementById("private-bathroom").checked = true;
            }
            else {
                airCondition.disabled = true;
                airCondition.checked = false;
                document.getElementById("private-bathroom").checked = false;
            }
        }
    }

    // Handle Check-in date
    // Get min and max dates to set boundries to the date input
    let today = new Date().toISOString().split('T')[0];
    let currentDay = new Date();
    let lastDay = new Date();
    lastDay.setDate(currentDay.getDate() + 59)
    let maxDate = lastDay.toISOString().split('T')[0];


    // Handle minimum checkout date
    const [minCheckOut, setMinCheckOut] = useState('')
    const checkInDateHandler = () => {
        if (typeof window !== "undefined") {
            const checkInDate = document.getElementById("check-in").value;
            document.getElementById("check-out").disabled = false
            setMinCheckOut(checkInDate);
        }
    }



    // Search for available rooms based on dateRange and enable booking options
    const [campRooms, setCampRooms] = useState([]);
    const [dateRange, setDateRange] = useState([]);
    const [checkoutDate, setcheckoutDate] = useState('');


    const checkOutDateHnadler = async () => {
        // Set loadign
        setSearchLoading(true);

        if (typeof window !== "undefined") {
            const checkInDate = document.getElementById("check-in").value;
            const checkOut = document.getElementById("check-out").value;
            const rooms = document.getElementById("available-rooms");
            const roomsPlaceholder = document.getElementById("rooms-placeholder");
            const adults = document.getElementById("adults");
            const children = document.getElementById("children");
            const dinner = document.getElementById("dinner");

            // Handle date range array
            // var itr = moment.twix(new Date(checkInDate), new Date(checkOut)).iterate("days");
            // var range = [];

            // while (itr.hasNext()) {
            //     range.push(itr.next().format("DD/MM/YYYY"))
            // }
            // setcheckoutDate(range.pop());
            // setDateRange(range);
            // console.log(range)

            var getDaysArray = function (start, end) {
                for (var arr = [], dt = new Date(start); dt <= new Date(end); dt.setDate(dt.getDate() + 1)) {
                    arr.push(new Date(dt).toISOString().split("T")[0]);
                }
                return arr;
            };
            var daylist = getDaysArray(new Date(checkInDate), new Date(checkOut)).map((date) => `${date.split("-")[2]}/${date.split("-")[1]}/${date.split("-")[0]}`);
            setcheckoutDate(daylist.pop());
            setDateRange(daylist);
            // console.log(daylist);


            // Fetch Camp rooms
            setTimeout(() => {
                const fetchRooms = async () => {
                    try {
                        const campRooms = await axios.get(`/api/rooms?campId=${camp._id}`);
                        setCampRooms(campRooms.data);
                        setSearchLoading(false)
                        rooms.style.display = "block"
                    }
                    catch (err) {
                        setError(err.response ? err.response.data.message : err)
                    }

                }
                fetchRooms()
            }, 1000)


            if (checkOut !== "") {
                roomsPlaceholder.style.display = "none";
                adults.disabled = false;
                children.disabled = false;
                dinner.disabled = false;
            }
        }
    }



    /* Hiding unavailable rooms */
    const isAvailable = (roomNumber) => {
        const isFound = roomNumber.unavailableDates.some(date => (
            dateRange.includes(date)
        ));

        return !isFound
    };
    /* End Hiding unavailable rooms */



    // Handle selecting rooms
    const [selectedRooms, setSelectedRooms] = useState([]);

    const handleSelect = (e) => {
        const checked = e.target.checked;
        const value = e.target.value;
        setSelectedRooms(
            checked
                ? [...selectedRooms, value]
                : selectedRooms.filter(id => id !== value)
        )
        setChooseRoom(false);
    }
    // console.log("selectedRooms", selectedRooms)
    // console.log("dateRange:", dateRange)


    // Handle submit booking
    const [chooseRoom, setChooseRoom] = useState(false);
    const [dbIsUpdated, setDbIsUpdated] = useState(false);

    const submitBooking = async (e) => {
        if (typeof window !== "undefined") {
            e.preventDefault();

            // Check if there is at least one roome checked
            const isChecked = Array.from(document.getElementsByClassName("room-checkbox"))
                .map(input => (input.checked)).includes(true)

            if (isChecked === false) {
                setChooseRoom(true)
            } else {
                try {
                    setLoading(true);
                    setChooseRoom(false);
                    const roomsIds = selectedRooms.map(room => (room.split(',')[0]));

                    // Update the DB with the new booked dates
                    await Promise.all(
                        roomsIds.map(roomId => {
                            const res = axios.patch(`/api/rooms/updateAvailability?remove=off&id=${roomId}`, {
                                dates: dateRange
                            })
                        })
                    )
                }
                catch (err) {
                    alert(err.response ? err.response.data.message : err);
                }


                // Extract the booking data and save it in the locala sotrage to revice on the checkout page
                const submitionData = JSON.stringify({
                    campId: campId,
                    roomsIDs: selectedRooms.map(room => (room.split(',')[0])),
                    camp: camp.name,
                    dates: dateRange,
                    checkout: checkoutDate,
                    roomsTypes: selectedRooms.map(room => (
                        document.getElementById(room.split(',')[0]).name
                    )),
                    roomNumber: selectedRooms.map(room => (
                        room.split(',')[1]
                    )),
                    adults: adults.value,
                    children: children.value,
                    dinner: dinner.checked ? dinner.value : "No Dinner",
                    dinnerPrice: dinner.checked && camp.extraFacilities[0].price,
                    prices: campRooms.map(room => (
                        `{
                        ${language === "English" ? room.roomType[0] : room.roomType[1]
                        }: ${room.price
                        }
                    }`
                    )),
                    roomsDescriptions: campRooms.map(room => {
                        return {
                            type: room.roomType,
                            description: room.description
                        }
                    })
                })
                localStorage.setItem("Submition Data", submitionData)
                document.getElementById("submit").disabled = true;
                router.push('/campCheckout')
            }
        }
    }
    /* End Handle Booking */


    // Handle Errors
    if (error) {
        typeof window !== "undefined" && alert(error);
    }



    return (
        <Container language={language}>
            <div className='info-container'>
                <div className='title'>
                    <h1>
                        {
                            language === "English"
                                ? name
                                : arabicName
                        }
                    </h1>
                    <div className="title-info">
                        <GeoAltFill size={15} />
                        <p>
                            {
                                language === "English"
                                    ? location
                                    : arabicLocation
                            }
                        </p>
                    </div>
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
                                        ? "Main Facilities"
                                        : "الخدمات الرئيسية"
                                }
                            </h5>
                        </button>
                        <div className="pointer" />
                    </div>

                    <div className={toggleActiveTab === 3 ? 'tab active-tab' : 'tab'}>
                        <button onClick={() => setToggleActiveTab(3)}>
                            <h5>
                                {
                                    language === "English"
                                        ? "House Rules"
                                        : "قواعد المخيم"
                                }
                            </h5>
                        </button>
                        <div className="pointer" />
                    </div>
                </div>

                <div className="tabs-content">
                    <div className={toggleActiveTab === 1 ? 'tab-content active-tab-content' : 'tab-content'}>
                        <p>{language === "English" ? overview : arabicOverview}</p>
                    </div>

                    <div className={toggleActiveTab === 2 ? 'tab-content active-tab-content' : 'tab-content'}>
                        <div className="property-highlights">
                            <div>
                                <GeoAltFill />
                                <p>
                                    {
                                        language === "English"
                                            ? facilities[0]
                                            : arabicFacilities[0]
                                    }
                                </p>
                            </div>
                            <div>
                                <Image width='30' height='30' src={BreakfastIcon} alt='' />
                                <p>
                                    {
                                        language === "العربية" && <>&#10003;</>
                                    }
                                    {
                                        language === "English"
                                            ? facilities[1]
                                            : arabicFacilities[1]
                                    }
                                    {
                                        language === "English" && <> &#10003;</>
                                    }
                                </p>
                            </div>
                            <div>
                                <Image width='30' height='30' src={ParkingIcon} alt='' />
                                <p>
                                    {
                                        language === "English"
                                            ? facilities[2]
                                            : arabicFacilities[2]
                                    }
                                </p>
                            </div>
                            {
                                /* Map the Rist of Facilites after asigning the first 3 */
                                language === "English"
                                    ? facilities.slice(3, facilities.length).map(facility => (
                                        <div key={facility}>
                                            <p>
                                                {facility}
                                            </p>
                                        </div>
                                    ))
                                    : arabicFacilities.slice(3, arabicFacilities.length).map(facility => (
                                        <div key={facility}>
                                            <p>
                                                {facility}
                                            </p>
                                        </div>
                                    ))
                            }
                            <div className="activities">
                                <h3>
                                    {
                                        language === "English"
                                            ? "Activities:"
                                            : ":النشاطات"
                                    }
                                </h3>
                                <h4>
                                    {
                                        language === "English"
                                            ? "Snorkeling"
                                            : "سنوركلينج"
                                    }
                                </h4>
                                <h4>
                                    {
                                        language === "English"
                                            ? "Fishing"
                                            : "صيد الاسماك"
                                    }
                                </h4>
                            </div>
                        </div>
                    </div>

                    <div className={toggleActiveTab === 3 ? 'tab-content active-tab-content' : 'tab-content'}>
                        {
                            language === "English"
                                ? camp.houseRules.english.map(rule => <p key={rule}>{rule}</p>)
                                : camp.houseRules.arabic.map(rule => <p key={rule}>{rule}</p>)
                        }
                    </div>
                </div>
            </div>

            {/* Booking */}
            <div className='booking'>
                <form onSubmit={(e) => submitBooking(e)}>

                    <div className="date">
                        <h3>
                            {
                                language === "English"
                                    ? "Booking"
                                    : "حجز غرقة"
                            }
                        </h3>
                        <div>
                            <p>
                                {
                                    language === "English"
                                        ? "Check-in-date:"
                                        : "تاريخ تسجيل الوصول"
                                }
                            </p>
                            <input
                                type='date'
                                id='check-in'
                                min={today}
                                max={maxDate}
                                onChange={() => checkInDateHandler()}
                                required
                            />
                        </div>
                        <div>
                            <p>
                                {
                                    language === "English"
                                        ? "Check-out-date:"
                                        : "تاريخ المغادرة"
                                }
                            </p>
                            <input
                                type='date'
                                id='check-out'
                                onChange={() => checkOutDateHnadler()}
                                required
                                min={minCheckOut}
                                max={maxDate}
                                disabled
                            />
                        </div>
                    </div>

                    <div className="rooms">
                        {
                            searchLoading === true &&
                            <LoadingBar position="relative" align="top" />
                        }
                        <div>

                            {
                                language === "English"
                                    ?
                                    <>
                                        <h4>
                                            <span>
                                                Available Rooms
                                            </span>

                                            <span>
                                                Room Type
                                            </span>
                                        </h4>
                                    </>
                                    :
                                    <>
                                        <h4>
                                            <span>
                                                نوع الغرفة
                                            </span>

                                            <span>
                                                متاح حاليا
                                            </span>
                                        </h4>
                                    </>
                            }
                            <p id='rooms-placeholder'>
                                {
                                    language === "English"
                                        ? "Enter a check-in and check-out date to display available rooms"
                                        : "ادخل تاريخ وصول وتاريخ مغادرة للبحث عن الغرف المتاحة"
                                }
                            </p>

                        </div>
                        <div id="available-rooms">
                            {chooseRoom === true ?
                                <p style={{ color: 'red' }}>
                                    {
                                        language === "English"
                                            ? "Choose at least 1 room to proceed*"
                                            : "*اختر غرفة واحدة على الاقل للمتابعة"
                                    }
                                </p>
                                : null
                            }
                            {
                                campRooms && campRooms.map(room => (
                                    <div className="room" key={room._id}>
                                        <div className="room-details">
                                            <p><strong>{language === "English" ? room.roomType[0] : room.roomType[1]}</strong></p>
                                            <p>{language === "English" ? room.description[0] : room.description[1]}</p>
                                            <p>{language === "English" && "Max people:"} {room.maxPeople} {language === "العربية" && ":عدد الاشخاص"}</p>
                                            <p>EGP{room.price} {language === "English" ? "per night" : "في الليلة"}</p>
                                        </div>
                                        <div className="currently-available">
                                            {
                                                room.roomNumbers.map(roomNumber => (
                                                    <div
                                                        key={roomNumber._id}
                                                        style={{
                                                            // borderColor: `${!isAvailable(roomNumber) ? 'red' : '#ccc'}`,
                                                            opacity: `${!isAvailable(roomNumber) ? '0.5' : '1'}`,
                                                            cursor: `${!isAvailable(roomNumber) ? 'default' : 'pointer'}`
                                                        }}
                                                    >
                                                        <label
                                                            htmlFor={room.roomType}
                                                            style={{
                                                                cursor: `${!isAvailable(roomNumber) ? 'default' : 'pointer'}`
                                                            }}
                                                        >
                                                            {roomNumber.roomNumber}
                                                        </label>
                                                        <input
                                                            className="room-checkbox"
                                                            type="checkbox"
                                                            onChange={handleSelect}
                                                            value={[roomNumber._id, roomNumber.roomNumber]}
                                                            name={room.roomType}
                                                            id={roomNumber._id}
                                                            disabled={!isAvailable(roomNumber) ? true : false}
                                                            style={{
                                                                cursor: `${!isAvailable(roomNumber) ? 'default' : 'pointer'}`
                                                            }}
                                                        />
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                        <div className="adults-count">
                            <label htmlFor="adults">
                                {
                                    language === "English"
                                        ? "Adults(18+ years):"
                                        : ":بالغين(18+)"
                                }
                            </label>
                            <input
                                list="adults-num"
                                name="adults"
                                id="adults"
                                disabled
                                required
                            />
                            <datalist id="adults-num">
                                <option value="1" />
                                <option value="2" />
                                <option value="3" />
                                <option value="4" />
                                <option value="5" />
                                <option value="6" />
                                <option value="7" />
                                <option value="8" />
                                <option value="9" />
                                <option value="10" />
                            </datalist>
                        </div>

                        <div className="children-count">
                            <label htmlFor="children">
                                {
                                    language === "English"
                                        ? "Children(up to 12 years):"
                                        : ":اطفال(13+)"
                                }
                            </label>
                            <input
                                list="children-num"
                                name="children"
                                id="children"
                                disabled
                            />
                            <datalist id="children-num">
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
                            </datalist>
                        </div>
                    </div>
                    <div className="extra-facilities">
                        {
                            language === "العربية" && <label htmlFor='dinner'>${camp && camp.extraFacilities[0].price} الغداء للفرد</label>
                        }
                        <input type='checkbox' name='dinner' id='dinner' disabled />
                        {
                            language === "English" && <label htmlFor='dinner'>
                                {camp && camp.extraFacilities[0].description} EGP{camp && camp.extraFacilities[0].price} / Person
                            </label>
                        }
                    </div>


                    <button type="submit" id="submit">
                        {
                            language === "English"
                                ? "Book Now"
                                : "احجز الآن"
                        }
                    </button>

                </form>
            </div >
        </Container >
    )
}

export default Camp