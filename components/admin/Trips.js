import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import { FileEarmarkArrowUp } from "react-bootstrap-icons";
import TripsOrders from "./TripsOrders";


const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0%;

  div.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 1rem;
    border-bottom: 1px solid #ccc;
    h1 {
      margin-top: 0;
      margin-bottom: 0;
      padding-top: 1.1rem;
    }

    button {
      font-size: 1.1rem;
      font-weight: bold;
      padding-block: 0.4rem;
      background-color: #000;
      color: #fff;
      cursor: pointer;
      transition: all 300ms ease-in-out;

      &:hover {
        background-color: transparent;
        color: #000;
      }
    }
  }

  table {
    width: 97%;
    margin-top: 1rem;
    text-align: right;
    margin-inline: 1rem;
    padding-inline: 0.5rem;
    box-shadow: 1px 0.5px 2px 1px #ccc;

    thead {
      width: 100%;
        th {
          width: 20%;
          padding-block: 1rem;
          font-size: 1.1rem;
        }
    }

      td {
        height: 3.5rem;
        border-top: 1px solid #ccc;
        border-left: 1px solid #ccc;
        padding-inline: 5px;

        span.order-notifications {
          width: 1rem;
          height: 1rem;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          background-color: red;
          color: #fff;
          font-size: 0.6rem;
          border-radius: 50%;
          position: absolute;
          left: -4px;
          top: -10px;
        }

        div.tickets-container {
          width: 100%;
          display: inline-flex;
          justify-content: space-between;
          position: relative;

          button {
            background-color: #00D100;
            border: 1px solid #00D100;

            &:hover {
              background-color: transparent;
            }
          }
        }

        div.delete-modal {
          width: 100vw;
          height: 100vh;
          position: fixed;
          top: 0;
          left: 0;
          display: none;
          justify-content: center;
          align-items: center;
          background-color: rgba(255, 255, 255, 0.6);
          z-index: 20;

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

      select {
        cursor: pointer;
      }


      button {
        margin-right: 5px;
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

      button.trip-details {
        width: 5rem;
        margin-right: unset;
        background-color: #00D100;
        border: 2.5px solid #00D100;
        &:hover {
          background-color: transparent;
        }

        &:disabled {
          opacity: 0.5;
        }
      }

      button.delete-trip {
        background-color: red;
        border: 2.5px solid red;
        &:hover {
          background-color: transparent;
        }
      }

      span.done {
        display: none;
        padding: 0.16rem 0.3rem;
        background-color: #00D100;
        color: #fff;
        border-radius: 50%;
        font-weight: bold;
      }
  }

  div.trip-modal {
    display: none;
    direction: ltr;
    width: 100%;
    height: 90vh;
    background-color: rgba(255, 255, 255, 0.6);
    padding-top: 4rem;
    position: fixed;
    top: 0;
    left: 0;
    border-bottom: 1px solid;
    
    @media(min-width: 1400px) {
      padding-top: 5rem;
    }
    
  }
  div.modal-body {
    width: 79.8%;
    height: 100%;
    padding-top: 1rem;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    span {
      width: 1rem;
      height: 1rem;
      position: absolute;
      left: 77.5%;
      bottom: 88%;
      background-color: #000;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid;
      border-radius: 5px;
      cursor: pointer;
      transition: all 300ms ease;

      &:hover {
        background-color: transparent;
        color: #000;
        border: 1px solid #000;
      }

      @media(min-width: 1680px) {
        bottom: 90%;
      }
    }

    input.image-input {
      width: 45vw;
      padding-block: 0.7rem;
    }

    input.upload-image {
      border: 1px solid #ccc;
      width: 25vw;
      margin-right: 2vw;
      cursor: pointer;
    }

    label.delete-img-url {
      padding: 0.23rem 0.5rem;
      background-color: red;
      color: #fff;
      font-weight: bold;
      border: 1px solid red;
      border-radius: 50%;
      transition: all 300ms ease-in-out;

      &:hover {
        background-color: transparent;
        color: red;
      }
    }

    div.footer {
      width: 79%;
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: #fff;
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: center;
      padding-block: 0.8rem;
      border: 1px solid #ccc;

      button {
        margin-inline: 1rem;
        font-size: 1.1rem;
        padding: 0.2rem 0.5rem;
        cursor: pointer;
        transition: all 300ms ease-in-out;
      }

      button.add {
        background-color: #000;
        color: #fff;

        &:hover {
          background-color: transparent;
          color: #000;
        }
      }

      button#edit {
        background-color: #000;
        color: #fff;
        width: 7rem;
        font-size: 1.2rem;
        font-weight: bold;

        &:hover {
          background-color: transparent;
          color: #000;
        }
      } 
      button.delete {
        padding-inline: 1rem;
        &:hover {
          background-color: #000;
          color: #fff;
        }
      }
    }

    button.cancel {
      background-color: unset;
      color: unset;

      &:hover {
        background-color: #000;
        color: #fff
      }
    }

    div.orders-modal-body {
      width: 100%;
      direction: rtl;

      h2 {
        margin-top: 0;
        text-align: center;
      }

      // Hiding the tabs button and non active tab from the main Orders component
      button.active,
      button.not-active {
        display: none;
      }
    }
  }


  div.trip-details-body {
    width: 80.5vw;
    overflow-y: scroll;

    form {
      max-width: 100%;
      padding-inline: 1rem;
      padding-bottom: 7rem;
      display: flex;
      flex-flow: row-reverse wrap;
      gap: 1rem;

      h3 {
        text-align: right;
      }
      h4 {
        text-align: right;
      }

      label {
        cursor: pointer;
      }

      input {
        padding: 0.5rem 0.5rem;
        margin-bottom: 0.5rem;
      }

      div.new-day {
        max-width: 79vw;
        display: flex;
        align-items: center;
      }

      button.add-day {
        font-size: 1rem;
        font-weight: bold;
        background-color: #00D100;
        color: #fff;
        cursor: pointer;
        transition: all 300ms ease-in-out;
        &:hover {
          background-color: transparent;
          color: #000
        }
      }

      pre.delete-day {
        height: 1.7rem;
        padding-inline: 0.6rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid red;
        border-radius: 50%;
        font-size: 0.8rem;
        color: #fff;
        background-color: red;
        cursor: pointer;
        transition: all 300ms ease-in-out;

        &:hover {
          background-color: transparent;
          color: red;
        }
      }
      textarea {
        resize: none;
        margin-left: 1rem;
        font-size: 1rem;
        padding: 0.5rem;
      }
    }
  }

  div.loading {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    width: 79%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: bold;
  }
`

const Trips = ({ language, newTRipsOrdersList }) => {


  const [trips, setTrips] = useState();
  const [trip, setTrip] = useState();
  const [isCreated, setIsCreated] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [loading, setLoading] = useState(false);
  // Pass the trip id to the trips orders component
  const [tripIdFetchOrders, setTripIdFetchOrders] = useState();


  // Fetch all trips
  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const allTrips = await axios.get(`/api/trips`);
        setTrips(allTrips.data);
      }
      catch (error) {
        alert(error);
      }
    }
    fetchTrips();
  }, [isCreated, isDeleted]);


  /* Create New Trip */

  // tirp title
  const [tripTitle, setTripTitle] = useState("");
  const [araTripTitle, setAraTripTitle] = useState("");
  // trip state
  const [tripState, setTripState] = useState("");
  const [tripAraState, setTripAraState] = useState("");
  // trip start-end dates
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  // trip price
  const [price, setPrice] = useState(0);
  // trip destination
  const [destination, setDestination] = useState("");
  const [araDestination, setAraDestination] = useState("");
  // trip duration
  const [duration, setDuration] = useState(0);
  // trip maxPeople
  const [maxPeople, setMaxPeople] = useState(0);
  // trip rate
  const [rate, setRate] = useState(0);
  // trip overview
  const [overview, setOverview] = useState("");
  const [araOverview, setAraOverview] = useState("");
  // Images 
  const [files, setFiles] = useState();
  // Extra Options
  const [optionOneText, setOptionOneText] = useState("");
  const [optionOneAraText, setOptionOneAraText] = useState("");
  const [optionOnePrice, setOptionOnePrice] = useState(0);

  const [optionTwoText, setOptionTwoText] = useState("");
  const [optionTwoAraText, setOptionTwoAraText] = useState("");
  const [optionTwoPrice, setOptionTwoPrice] = useState(0);

  const [optionThreeText, setOptionThreeText] = useState("");
  const [optionThreeAraText, setOptionThreeAraText] = useState("");
  const [optionThreePrice, setOptionThreePrice] = useState(0);


  //--- Handle add days ---//
  // Create new input for new days
  const [daysArray, setDaysArray] = useState([1, 2, 3]);
  const addDay = (e) => {
    e.preventDefault();

    const newEl = daysArray[daysArray.length - 1] + 1;
    const newArr = [...daysArray, newEl];
    setDaysArray(newArr);
  };

  const deleteDay = () => {
    daysArray.pop();
    const newArr = [...daysArray];
    setDaysArray(newArr);
  };
  //--- End handle add days ---//

  //--- Handle add days content
  // add new items to array
  const addItemsToArray = (arr, id) => {
    let newArr = [],
      newEl;
    for (let i = 1; i <= arr.length; i++) {
      newEl = document.getElementById(`${i}${id}`).value
      newArr = [...newArr, newEl]
    }
    return newArr;
  }


  // Add new trip modal
  const openModal = () => {
    document.getElementById('trip-modal').style.display = "block";
    document.querySelector('body').style.overflowY = "hidden";
  };

  const closeModal = () => {
    document.getElementById('trip-modal').style.display = "none";
    document.querySelector('body').style.overflowY = "auto";
  };


  // Create new trip
  const createNewTrip = async (e) => {
    e.preventDefault();

    try {
      setLoading(!loading);
      const images = await Promise.all(
        Object.values(files).map(async (file) => {
          const data = new FormData();
          data.append("file", file);
          data.append("upload_preset", "uploads");
          const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/dqmqc0uaa/image/upload", data);

          const { url } = uploadRes.data;
          return url;
        })
      );


      const newTrip = await axios.post(`/api/admin/trips`, {
        title: [
          tripTitle,
          araTripTitle
        ],
        state: [
          tripState,
          tripAraState
        ],
        destination: [
          destination,
          araDestination
        ],
        images: images,
        price: Number(price),
        duration: Number(duration),
        startDate: startDate,
        endDate: endDate,
        maxPeople: Number(maxPeople),
        overview: [
          overview,
          araOverview
        ],
        tripPlan: {
          english: addItemsToArray(daysArray, "english"),
          arabic: addItemsToArray(daysArray, "arabic")
        },
        rate: Number(rate),
        extraOptions: [
          {
            text: [
              optionOneText,
              optionOneAraText
            ],
            price: Number(optionOnePrice)
          },
          {
            text: [
              optionTwoText,
              optionTwoAraText
            ],
            price: Number(optionTwoPrice)
          },
          {
            text: [
              optionThreeText,
              optionThreeAraText
            ],
            price: Number(optionThreePrice)
          },
        ]
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
    }
    catch (error) {
      alert(error)
    }
  }

  /* End Create New Trip */



  /* Delete Trip */
  const openDeleteTripModal = (btnId) => {
    document.getElementById(btnId).style.display = "flex";
    document.querySelector("body").style.overflowY = "hidden";
  }

  const closeDeleteTripModal = (btnId) => {
    document.getElementById(btnId).style.display = "none";
    document.querySelector("body").style.overflowY = "auto";
  }

  const deleteTrip = async (tripId) => {
    try {
      await axios.delete(`/api/admin/trips/${tripId}`);
      Array.from(document.getElementsByClassName("delete-modal")).map(el => (
        el.style.display = "none"
      ))
      setIsDeleted(!isDeleted);
    }
    catch (error) {
      alert(error);
    }
  }
  /* End Delete Trip */



  /* Update Trip */

  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const [img4, setImg4] = useState("");
  const [img5, setImg5] = useState("");
  const [tripTickets, setTripTickets] = useState(0);



  // Trips details modal & inputs to update
  const fetchTrip = async (tripId) => {
    try {
      document.getElementById(tripId).disabled = true;
      const res = await axios.get(`/api/trips/${tripId}`);
      setTrip(res.data);

      // Set inputs to update
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
        };

        if (res.data.extraOptions[1].text[0] !== "") {
          setOptionTwoText(res.data.extraOptions[1].text[0]);
          setOptionTwoAraText(res.data.extraOptions[1].text[1]);
          setOptionTwoPrice(res.data.extraOptions[1].price);
        } else {
          setOptionTwoText("");
          setOptionTwoAraText("");
          setOptionTwoPrice(0);
        };
        if (res.data.extraOptions[2].text[0] !== "") {
          setOptionThreeText(res.data.extraOptions[2].text[0]);
          setOptionThreeAraText(res.data.extraOptions[2].text[1]);
          setOptionThreePrice(res.data.extraOptions[2].price);
        } else {
          setOptionThreeText("");
          setOptionThreeAraText("");
          setOptionThreePrice(0);
        };

        setOverview(res.data.overview[0]);
        setAraOverview(res.data.overview[1]);

        // handle add new days on the frontend
        setAraDaysArray(res.data.tripPlan.arabic);
        setEngDaysArray(res.data.tripPlan.english);


        setImg1(res.data.images[0] ? res.data.images[0] : "");
        setImg2(res.data.images[1] ? res.data.images[1] : "");
        setImg3(res.data.images[2] ? res.data.images[2] : "");
        setImg4(res.data.images[3] ? res.data.images[3] : "");
        setImg5(res.data.images[4] ? res.data.images[4] : "");

        if (res.data.state[0] === "Open") {
          setTripTickets(res.data.tickets)
        } else {
          setTripTickets(0);
        }
      }, 500)

      setTimeout(() => {
        openDetailsModal();
      }, 500);
    }
    catch (error) {
      alert(error)
    }
  };

  // handle add new days to exsiting trip
  const [araDaysArray, setAraDaysArray] = useState([]);
  const [engDaysArray, setEngDaysArray] = useState([]);

  const addNewDay = (e) => {
    e.preventDefault();

    let newElNum = araDaysArray.indexOf(araDaysArray[araDaysArray.length - 1]) + 2;
    const newEl = `${newElNum}`;
    const newArr1 = [...araDaysArray, newEl];
    setAraDaysArray(newArr1);
    const newArr2 = [...engDaysArray, newEl];
    setEngDaysArray(newArr2);
  };

  const deleteOldDay = (day) => {
    let elIndex = engDaysArray.indexOf(day);

    if (elIndex > -1) {
      araDaysArray.splice(elIndex, 1);
      const newArr1 = [...araDaysArray];
      setAraDaysArray(newArr1);

      engDaysArray.splice(elIndex, 1);
      const newArr2 = [...engDaysArray];
      setEngDaysArray(newArr2);
    }
  }

  const addItemsToExistingArray = (arr, id) => {
    let newArr = [],
      newEl;
    for (let i = 0; i < arr.length; i++) {
      newEl = document.getElementById(`${arr[i]}${id}`).value
      newArr = [...newArr, newEl]
    }
    return newArr;
  }

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
  };



  // Delete old image 
  const deleteImage = (imgId) => {
    document.getElementById(imgId).value = " ";
  }

  // Upload Image
  const uploadImage = async (imageInputId, imageFile) => {
    try {
      deleteImage(imageInputId);
      const data = new FormData();
      data.append("file", imageFile);
      data.append("upload_preset", "uploads");

      const uploadImage = await axios.post("https://api.cloudinary.com/v1_1/dqmqc0uaa/image/upload", data)
      const { url } = uploadImage.data;

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
    }
    catch (error) {
      alert(error)
    }
  }

  // Update Trip
  const updateTrip = async (e, tripId) => {
    e.preventDefault();

    try {
      setLoading(!loading);


      const updatedTrip = await axios.patch(`/api/admin/trips/${tripId}`, {
        title: [
          tripTitle,
          araTripTitle
        ],
        state: [
          tripState,
          tripAraState
        ],
        destination: [
          destination,
          araDestination
        ],
        images: [
          img1,
          img2,
          img3,
          img4,
          img5
        ],
        price: Number(price),
        duration: Number(duration),
        startDate: startDate,
        endDate: endDate,
        maxPeople: Number(maxPeople),
        overview: [
          overview,
          araOverview
        ],
        tripPlan: {
          english: addItemsToExistingArray(engDaysArray, "ddEnglish"),
          arabic: addItemsToExistingArray(araDaysArray, "ddArabic")
        },
        rate: Number(rate),
        extraOptions: [
          {
            text: [
              optionOneText,
              optionOneAraText
            ],
            price: Number(optionOnePrice)
          },
          {
            text: [
              optionTwoText,
              optionTwoAraText
            ],
            price: Number(optionTwoPrice)
          },
          {
            text: [
              optionThreeText,
              optionThreeAraText
            ],
            price: Number(optionThreePrice)
          },
        ],
        tickets: Number(tripTickets)
      });
      setLoading(loading);
      document.getElementById("trip-details-modal").style.display = "none";
      Array.from(document.getElementsByClassName("trip-details")).map(btn => (
        btn.disabled = false
      ));
      setTripAraState("");
      setStartDate("");
      setEndDate("");
      setIsCreated(!isCreated);
      alert("تم تعديل الرحلة بنجاح")
    }
    catch (error) {
      alert(error)
    }
  }


  // Quick Updates
  const quickUpdate = async (tripId) => {
    let data;

    if (tripAraState !== "") {
      if (tripAraState === "متاح") {
        data = [
          "Open",
          "متاح"
        ]
      } else if (tripAraState === "غير متاح") {
        data = [
          "Closed",
          "غير متاح"
        ]
      }

      try {
        await axios.patch(`/api/admin/trips/${tripId}`, {
          state: data
        });
        setTripAraState("");
        setTripAraState("");
        setStartDate("");
        document.getElementById(`${tripId}state-update`).style.display = "inline";
        setTimeout(() => {
          document.getElementById(`${tripId}state-update`).style.display = "none";
        }, 3000);
      }
      catch (error) {
        alert(error)
      }

    }
    else if (startDate !== "") {
      data = startDate;

      try {
        await axios.patch(`/api/admin/trips/${tripId}`, {
          startDate: data
        });
        setTripAraState("");
        setTripAraState("");
        setStartDate("");
        document.getElementById(`${tripId}startDate-update`).style.display = "inline";
        setTimeout(() => {
          document.getElementById(`${tripId}startDate-update`).style.display = "none";
        }, 3000);
      }
      catch (error) {
        alert(error)
      }
    }
    else if (endDate !== "") {
      data = endDate;

      try {
        await axios.patch(`/api/admin/trips/${tripId}`, {
          endDate: data
        });
        setTripAraState("");
        setEndDate("");
        setStartDate("");
        document.getElementById(`${tripId}endDate-update`).style.display = "inline";
        setTimeout(() => {
          document.getElementById(`${tripId}endDate-update`).style.display = "none";
        }, 3000);
      }
      catch (error) {
        alert(error)
      }
    }

  }

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
  };


  // Get new order notifications
  const [newOrdersNotifications, setNewOrdersNotifications] = useState();

  useEffect(() => {
    const getNotifications = () => {
      const tripsNames = trips && trips.map(trip => {
        return trip.title[0]
      });

      if (tripsNames) {
        let orders = [];
        for (let i = 0; i < tripsNames.length; i++) {
          orders = [...orders,
          newTRipsOrdersList !== false && newTRipsOrdersList.filter(order => {
            return order.orderDetails.title[0] === tripsNames[i]
          })
          ]
        }
        setNewOrdersNotifications(orders);
      }
    }
    getNotifications();
  }, [newTRipsOrdersList, trips]);

  /* End Trip's Orders */

  return (
    <Container>
      <div className="header">
        <h1>الرحلات</h1>
        <button onClick={openModal}>اضف رحلة جديدة</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>عنوان الرحلة</th>
            <th>الحالة</th>
            <th>التذاكر</th>
            <th>تاريخ البدء</th>
            <th>تاريخ الإنتهاء</th>
            <th>التفاصيل</th>
          </tr>
        </thead>
        <tbody>
          {
            trips && trips.map(trip => (
              <tr key={trip._id}>
                <td style={{
                  borderRight: "1px solid #ccc"
                }}>{trip.title[1]}</td>
                <td>
                  <select
                    defaultValue={trip.state[1]}
                    onChange={(e) => setTripAraState(e.target.value)}
                  >
                    <option value="متاح">متاح</option>
                    <option value="غير متاح">غير متاح</option>
                  </select>
                  <button onClick={() => quickUpdate(trip._id)}>تحديث</button>
                  <span id={`${trip._id}state-update`} className="done">&#x2713;</span>
                </td>

                <td>
                  {
                    trip.state[0] === "Open"
                      ?
                      <div className="tickets-container">
                        <strong>
                          {trip.tickets} {trip.tickets === 0
                            || trip.tickets === 1
                            || trip.tickets === 2
                            || trip.tickets > 10 ? "تذكرة"
                            : "تذاكر"
                          }
                        </strong>

                        <button
                          className="trip-orders"
                          id={`${trip._id}orders`}
                          onClick={() => openOrdersModal(trip._id, `${trip._id}new-orders`)}
                        >
                          عرض الحجوزات
                        </button>

                        {
                          newOrdersNotifications && !newOrdersNotifications.includes(false) && newOrdersNotifications.map(item => {
                            if (item.length !== 0 && item[0].new === true && item[0].orderDetails.title[0] === trip.title[0]) {
                              return <span
                                id={`${trip._id}new-orders`}
                                className="order-notifications"
                                key={`${trip._id}noti`}>
                                {item.length}
                              </span>
                            }
                          })
                        }
                      </div>

                      : "لا يوجد"
                  }
                </td>

                <td>
                  <input
                    type="date"
                    defaultValue={trip.startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                  <button onClick={() => quickUpdate(trip._id)}>تحديث</button>
                  <span id={`${trip._id}startDate-update`} className="done">&#x2713;</span>
                </td>
                <td>
                  <input
                    type="date"
                    defaultValue={trip.endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                  <button onClick={() => quickUpdate(trip._id)}>تحديث</button>
                  <span id={`${trip._id}endDate-update`} className="done">&#x2713;</span>
                </td>
                <td>
                  <button
                    onClick={() => fetchTrip(trip._id)}
                    className="trip-details"
                    id={trip._id}
                  >
                    تفاصيل الرحلة
                  </button>
                </td>
                <td>
                  <button className="delete-trip" onClick={() => openDeleteTripModal(`${trip._id}rand`)}>مسح</button>
                  <div className="delete-modal" id={`${trip._id}rand`}>
                    <div className="delete-modal-body">
                      <span onClick={() => closeDeleteTripModal(`${trip._id}rand`)}>x</span>
                      <div className="delete-modal-content">
                        <p>هل تريد إزالة هذه الرحلة؟</p>
                        <button onClick={() => deleteTrip(trip._id)}>امسح الرحلة</button>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>



      {/* Trip Orders Modal */}
      <div id="trip-orders-modal" className="trip-modal" language={language}>
        <div className="modal-body">
          <div className="orders-modal-body" language={language}>
            <span onClick={closeOrdersModal}>x</span>
            <TripsOrders
              currentTripId={tripIdFetchOrders}
              language={language}
            />
          </div>
        </div>
      </div>



      {/* Trip Details */}
      <div id="trip-details-modal" className="trip-modal" key={trip && trip._id}>
        <div className="modal-body">
          {
            loading &&
            <div className="loading">Loading...</div>
          }
          <span onClick={(e) => closeDetailsModal(e, trip && trip._id)}>x</span>
          <div className="trip-details-body">
            <form onSubmit={(e) => updateTrip(e, trip && trip._id)}>
              <div>
                <h3>عنوان الرحلة</h3>
                <input
                  type="text"
                  defaultValue={trip && trip.title[1]}
                  dir="rtl"
                  onChange={(e) => setAraTripTitle(e.target.value)}
                /><br />

                <input
                  type="text"
                  defaultValue={trip && trip.title[0]}
                  onChange={(e) => setTripTitle(e.target.value)}
                />
              </div>


              <div>
                <h3>الحالة</h3>
                <input
                  type="text"
                  defaultValue={trip && trip.state[1]}
                  dir="rtl"
                  onChange={(e) => setTripAraState(e.target.value)}
                /><br />

                <input
                  type="text"
                  defaultValue={trip && trip.state[0]}
                  onChange={(e) => setTripState(e.target.value)}
                />
              </div>


              <div>
                <h3>تاريخ الذهاب</h3>
                <input
                  type="date"
                  defaultValue={trip && trip.startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>


              <div>
                <h3>تاريخ العودة</h3>
                <input
                  type="date"
                  defaultValue={trip && trip.endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>


              <div>
                <h3>السعر (للفرد)</h3>
                جنيه <input
                  type="number"
                  defaultValue={trip && trip.price}
                  dir="rtl"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>


              <div>
                <h3>الوجهة</h3>
                <input
                  type="text"
                  defaultValue={trip && trip.destination[1]}
                  dir="rtl"
                  onChange={(e) => setAraDestination(e.target.value)}
                /><br />

                <input
                  type="text"
                  defaultValue={trip && trip.destination[0]}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>


              <div>
                <h3>المدة (أيام)</h3>
                <input
                  type="number"
                  defaultValue={trip && trip.duration}
                  dir="rtl"
                  onChange={(e) => setDuration(e.target.value)}
                />
              </div>


              <div>
                <h3>الحد الأقصى (فرد)</h3>
                <input
                  type="number"
                  defaultValue={trip && trip.maxPeople}
                  dir="rtl"
                  onChange={(e) => setMaxPeople(e.target.value)}
                />
              </div>


              <div>
                <h3>التقييم</h3>
                <input
                  type="number"
                  step="0.5"
                  defaultValue={trip && trip.rate}
                  dir="rtl"
                  onChange={(e) => setRate(e.target.value)}
                />
              </div>

              {
                trip && trip.state[0] === "Open" &&
                <div>
                  <h3>التذاكر</h3>
                  <input
                    type="number"
                    defaultValue={trip && trip.tickets}
                    dir="rtl"
                    onChange={(e) => setTripTickets(e.target.value)}
                  />
                </div>
              }


              <div>
                <div style={{
                  display: "flex",
                  flexDirection: "row-reverse",
                  alignItems: 'baseline',
                  gap: '1rem'
                }}
                >
                  <h3>إختيارات إضافية(إختياري)</h3>
                  <div dir="rtl">
                    -- <label>إختيار 1 &nbsp;&nbsp;&nbsp;</label>
                    <input
                      type="text"
                      placeholder="عربي"
                      onChange={(e) => setOptionOneAraText(e.target.value)}
                      defaultValue={trip && trip.extraOptions.length !== 0 && trip.extraOptions[0].text[1]}
                    /><br />
                    -- <label>option 1 </label>

                    <input
                      type="text"
                      placeholder="English"
                      dir="ltr"
                      onChange={(e) => setOptionOneText(e.target.value)}
                      defaultValue={trip && trip.extraOptions.length !== 0 && trip.extraOptions[0].text[0]}
                    /><br />
                    -- <label>السعر 1 &nbsp;&nbsp;&nbsp;</label>

                    <input
                      type="number"
                      onChange={(e) => setOptionOnePrice(e.target.value)}
                      defaultValue={trip && trip.extraOptions.length !== 0 && trip.extraOptions[0].price}
                    />
                  </div>

                  <div dir="rtl">
                    -- <label>إختيار 2 &nbsp;&nbsp;&nbsp;</label>
                    <input
                      type="text"
                      placeholder="عربي" onChange={(e) => setOptionTwoAraText(e.target.value)}
                      defaultValue={trip && trip.extraOptions.length > 1 && trip.extraOptions[1].text[1]}
                    /><br />
                    -- <label>option 2 </label>

                    <input
                      type="text"
                      placeholder="English"
                      dir="ltr"
                      onChange={(e) => setOptionTwoText(e.target.value)}
                      defaultValue={trip && trip.extraOptions.length > 1 && trip.extraOptions[1].text[0]}
                    /><br />
                    -- <label>السعر 2 &nbsp;&nbsp;&nbsp;</label>

                    <input
                      type="number"
                      onChange={(e) => setOptionTwoPrice(e.target.value)}
                      defaultValue={trip && trip.extraOptions.length > 1 && trip.extraOptions[1].price}
                    />
                  </div>


                  <div dir="rtl">
                    -- <label>إختيار 3 &nbsp;&nbsp;&nbsp;</label>
                    <input
                      type="text"
                      placeholder="عربي"
                      onChange={(e) => setOptionThreeAraText(e.target.value)}
                      defaultValue={trip && trip.extraOptions.length > 2 ? trip.extraOptions[2].text[1] : ''}
                    /><br />
                    -- <label>option 3 </label>

                    <input
                      type="text"
                      placeholder="English"
                      dir="ltr"
                      onChange={(e) => setOptionThreeText(e.target.value)}
                      defaultValue={trip && trip.extraOptions.length > 2 ? trip.extraOptions[2].text[0] : ''}
                    /><br />
                    -- <label>السعر 3 &nbsp;&nbsp;&nbsp;</label>

                    <input
                      type="number"
                      onChange={(e) => setOptionThreePrice(e.target.value)}
                      defaultValue={trip && trip.extraOptions.length > 2 ? trip.extraOptions[2].price : 0}
                    />
                  </div>
                </div>


                <h3>نظرة عامة</h3>
                <textarea
                  rows="6"
                  cols="50"
                  defaultValue={trip && trip.overview[0]}
                  onChange={(e) => setOverview(e.target.value)}
                />
                <textarea
                  rows="6"
                  cols="50"
                  dir="rtl"
                  defaultValue={trip && trip.overview[1]}
                  onChange={(e) => setAraOverview(e.target.value)}
                />
              </div>



              <div dir="rtl">
                <h3>برنامج الرحلة</h3>

                <div style={{ display: "flex" }}>
                  <div>
                    {
                      trip && araDaysArray.map(day => (
                        <>
                          <div key={day} className="new-day">
                            <pre>{araDaysArray.indexOf(day) + 1}- </pre>
                            <textarea
                              id={`${day}ddArabic`}
                              dir="rtl"
                              cols="50"
                              rows="6"
                              defaultValue={day}
                            />
                          </div><br />
                        </>
                      ))
                    }
                  </div>

                  <div>
                    {
                      trip && engDaysArray.map(day => (
                        <>
                          <div key={day} className="new-day">
                            <textarea
                              id={`${day}ddEnglish`}
                              dir="ltr"
                              cols="50"
                              rows="6"
                              defaultValue={day}
                            />

                            <pre className="delete-day" onClick={() => deleteOldDay(day)}>x</pre>
                          </div><br />
                        </>
                      ))
                    }
                  </div>
                </div>
                <button className="add-day" onClick={(e) => addNewDay(e)}>اضف يوم</button>

              </div>

              <h3>صور الرحلة</h3>
              <div style={{
                display: "flex",
                flexDirection: 'row-reverse'
              }}>

                <div style={{
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  {
                    trip && trip.images.map(image => (
                      <input key={image} id={image} className="image-input" type='url' defaultValue={image} readOnly />
                    ))
                  }
                </div>

                <div>
                  <input
                    className="upload-image"
                    type="file"
                    onChange={(e) => {
                      uploadImage(trip && trip.images[0], e.target.files[0]);
                    }}
                  />
                  <label
                    className="delete-img-url"
                    onClick={() => {
                      deleteImage(trip && trip.images[0]);
                      setImg1("");
                    }}>x</label>



                  <input
                    className="upload-image"
                    type="file"
                    onChange={(e) => {
                      uploadImage(trip && trip.images[1], e.target.files[0]);
                    }}
                  />
                  <label
                    className="delete-img-url"
                    onClick={() => {
                      deleteImage(trip && trip.images[1]);
                      setImg2("");
                    }}>x</label>



                  <input
                    className="upload-image"
                    type="file"
                    onChange={(e) => {
                      uploadImage(trip && trip.images[2], e.target.files[0]);
                    }}
                  />
                  <label
                    className="delete-img-url"
                    onClick={() => {
                      deleteImage(trip && trip.images[2]);
                      setImg3("");
                    }}>x</label>



                  <input
                    className="upload-image"
                    type="file"
                    onChange={(e) => {
                      uploadImage(trip && trip.images[3], e.target.files[0]);
                    }}
                  />
                  <label
                    className="delete-img-url"
                    onClick={() => {
                      deleteImage(trip && trip.images[3]);
                      setImg4("");
                    }}>x</label>



                  <input
                    className="upload-image"
                    type="file"
                    onChange={(e) => {
                      uploadImage(trip && trip.images[4], e.target.files[0]);
                    }}
                  />
                  <label
                    className="delete-img-url"
                    onClick={() => {
                      deleteImage(trip && trip.images[4]);
                      setImg5("");
                    }}>x</label>
                </div>
              </div>

              <div className="footer">
                <button id="edit" type="submit">تأكيد</button>
                <button className="cancel" onClick={(e) => closeDetailsModal(e, trip && trip._id)}>إلغاء</button>
              </div>
            </form>
          </div>
        </div>
      </div>


      {/* Create New Trip */}
      <div id="trip-modal" className="trip-modal">
        <div className="modal-body">
          <div className="trip-details-body">
            {
              loading &&
              <div className="loading">Loading...</div>
            }
            <span onClick={closeModal}>x</span>
            <div>
              <form id="new-trip" onSubmit={(e) => createNewTrip(e)}>
                <div>
                  <h3>عنوان الرحلة</h3>
                  <input
                    type="text"
                    dir="rtl"
                    onChange={(e) => setAraTripTitle(e.target.value)}
                    required
                    placeholder="عربي"
                  /><br />
                  <input type="text" onChange={(e) => setTripTitle(e.target.value)} required placeholder="English" />
                </div>
                <div>
                  <h3>الحالة</h3>
                  <input type="text" dir="rtl" onChange={(e) => setTripAraState(e.target.value)} required placeholder="عربي" /><br />
                  <input type="text" onChange={(e) => setTripState(e.target.value)} required placeholder="English" />
                </div>
                <div>
                  <h3>تاريخ الذهاب</h3>
                  <input type="date" onChange={(e) => setStartDate(e.target.value)} required />
                </div>
                <div>
                  <h3>تاريخ العودة</h3>
                  <input type="date" onChange={(e) => setEndDate(e.target.value)} required />
                </div>
                <div>
                  <h3>السعر (للفرد)</h3>
                  جنيه <input type="number" dir="rtl" onChange={(e) => setPrice(e.target.value)} required />
                </div>
                <div>
                  <h3>الوجهة</h3>
                  <input type="text" dir="rtl" onChange={(e) => setAraDestination(e.target.value)} required placeholder="عربي" /><br />
                  <input type="text" onChange={(e) => setDestination(e.target.value)} required placeholder="English" />
                </div>
                <div>
                  <h3>المدة (أيام)</h3>
                  <input type="number" dir="rtl" onChange={(e) => setDuration(e.target.value)} required />
                </div>
                <div>
                  <h3>الحد الأقصى (فرد)</h3>
                  <input type="number" dir="rtl" onChange={(e) => setMaxPeople(e.target.value)} required />
                </div>
                <div>
                  <h3>التقييم</h3>
                  <input type="number" step="0.5" dir="rtl" onChange={(e) => setRate(e.target.value)} required />
                </div>


                <div style={{
                  display: "flex",
                  flexDirection: "row-reverse",
                  alignItems: 'baseline',
                  gap: '1rem'
                }}
                >
                  <h3>إختيارات إضافية(إختياري)</h3>
                  <div dir="rtl">
                    -- <label>إختيار 1 &nbsp;&nbsp;&nbsp;</label>
                    <input type="text" placeholder="عربي" onChange={(e) => setOptionOneAraText(e.target.value)} /><br />
                    -- <label>option 1 </label>
                    <input type="text" placeholder="English" dir="ltr" onChange={(e) => setOptionOneText(e.target.value)} /><br />
                    -- <label>السعر 1 &nbsp;&nbsp;&nbsp;</label>
                    <input type="number" onChange={(e) => setOptionOnePrice(e.target.value)} />
                  </div>
                  <div dir="rtl">
                    -- <label>إختيار 2 &nbsp;&nbsp;&nbsp;</label>
                    <input type="text" placeholder="عربي" onChange={(e) => setOptionTwoAraText(e.target.value)} /><br />
                    -- <label>option 2 </label>
                    <input type="text" placeholder="English" dir="ltr" onChange={(e) => setOptionTwoText(e.target.value)} /><br />
                    -- <label>السعر 2 &nbsp;&nbsp;&nbsp;</label>
                    <input type="number" onChange={(e) => setOptionTwoPrice(e.target.value)} />
                  </div>
                  <div dir="rtl">
                    -- <label>إختيار 3 &nbsp;&nbsp;&nbsp;</label>
                    <input type="text" placeholder="عربي" onChange={(e) => setOptionThreeAraText(e.target.value)} /><br />
                    -- <label>option 3 </label>
                    <input type="text" placeholder="English" dir="ltr" onChange={(e) => setOptionThreeText(e.target.value)} /><br />
                    -- <label>السعر 3 &nbsp;&nbsp;&nbsp;</label>
                    <input type="number" onChange={(e) => setOptionThreePrice(e.target.value)} />
                  </div>
                </div>


                <div>
                  <h3>نظرة عامة</h3>
                  <textarea rows="6" cols="50" onChange={(e) => setOverview(e.target.value)} required placeholder="English" />
                  <textarea rows="6" cols="50" dir="rtl" onChange={(e) => setAraOverview(e.target.value)} required placeholder="عربي" />
                </div>

                <div dir="rtl">
                  <h3>برنامج الرحلة</h3>

                  {
                    daysArray.map(day => (
                      <div key={`${day}dd`}>
                        <div className="new-day">
                          <pre>{day}- </pre>
                          <textarea
                            id={`${day}arabic`}
                            cols="50"
                            rows="6"
                            dir="rtl"
                            placeholder="عربي"
                            required
                          />

                          <textarea
                            id={`${day}english`}
                            cols="50"
                            rows="6"
                            dir="ltr"
                            placeholder="English"
                            required
                          />

                          <pre className="delete-day" onClick={deleteDay}>x</pre>
                        </div><br />
                      </div>
                    ))
                  }
                  <button className="add-day" onClick={(e) => addDay(e)}>اضف يوم</button>
                </div>
                <div>
                  <h3>صور الرحلة</h3>
                  <div style={{
                    display: 'flex'
                  }}>
                    <label htmlFor="upload"><FileEarmarkArrowUp size={36} /></label>
                    <input
                      id="upload"
                      type="file"
                      multiple
                      required
                      dir="rtl"
                      style={{ border: "1px solid #ccc", cursor: "pointer" }}
                      onChange={(e) => setFiles(e.target.files)}
                    />
                  </div>
                </div>
                <div className="footer">
                  <button className="add" type="submit">اضف الرحلة</button>
                  <button className="delete" onClick={closeModal}>الغاء</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
};

export default Trips;