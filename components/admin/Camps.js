import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import { FileEarmarkArrowUp } from "react-bootstrap-icons";
import CampsOrders from "./CampsOrders";



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
          width: 25%;
          padding-block: 1rem;
          font-size: 1.1rem;
        }
    }

      td {
        height: 3.5rem;
        border-top: 1px solid #ccc;


        span.order-notifications {
          width: 1.3rem;
          height: 1.3rem;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          background-color: red;
          color: #fff;
          font-size: 0.8rem;
          border-radius: 50%;
          position: relative;
          left: 10px;
          top: -10px;
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
        margin-right: 10px;
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

      button.camp-rooms {
        margin-right: unset;
      }

      button.camp-details {
        width: 5rem;
        margin-right: unset;
        margin-left: 1rem;
        background-color: #00D100;
        border: 2.5px solid #00D100;
        &:hover {
          background-color: transparent;
        }
      }

      button.delete-camp {
        background-color: red;
        margin-right: unset;
        border: 2.5px solid red;
        &:hover {
          background-color: transparent;
        }
      }
  }

  div.camp-modal {
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
    
    div.rooms-tabs {
      width: 19.95%;
      height: 100%;
      float: right;
      direction: rtl;
      background-color: #fff;
      border-left: 1px solid #ccc;

      h4 {
        padding-right: 0.5rem;
        margin-bottom: 0;
        padding-bottom: 1rem;
        color: grey;
        border-bottom: 1px solid #ccc;
      }


      div.tab {
                height: 3rem;
                position: relative;
                background-color: #fff;
                border-bottom: 1px dashed #ccc;
                cursor: pointer;
                transition: all 300ms ease-in-out;

                h5 {
                  width: 90%;
                    color: #000;
                    font-size: 1.1rem;
                    margin: 0;
                    padding: 1rem;
                    text-align: right;
                    cursor: pointer;
                    @media(max-width: 600px) {
                        font-size: 0.9rem;
                        padding: 0.9rem 0.1rem;
                    }
                }

                &:hover {
                    background-color: #000;
                    border-color: #000;
                    h5 {
                        color: #fff;
                    }
                }

                button {
                    width: 100%;
                    border: none;
                    background: none;
                }
            }

            div.active-tab {
                background-color: #000;
                border: 1px solid #000;

                h5 {
                    color: #fff;
                }
            }

            div.tabs-content {
            width: 100%;
            min-height: 100vh;

            div.tab-content {
                display: none;
            }
    
            div.active-tab-content {
                display: block;

              }
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
        bottom: 85.5%;
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


        // This span exist on the CampsOrders Component but its style is wiritten here
        // because the span style in the current component overrides its original style
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
    
        h2 {
          margin-top: 0;
          text-align: center;
        }
  
      }
    }
  }


  div.camp-details-body {
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

      textarea {
        resize: none;
        margin-left: 1rem;
        font-size: 1rem;
        padding: 0.5rem;
      }


      div.new-rules {
        max-width: 79vw;
        display: flex;
        align-items: center;
      }

      button.add-rule {
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
      pre.delete-rule {
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

      /* Unavailabel dates tabs */
      div.rooms-numbers-container {
        width: 100%;
        padding-top: 1rem;
        direction: rtl;
        display: flex;
        gap: 2rem;
        border-top: 1px solid #ccc;

        div.dates-tabs {
          padding-left: 1rem;
          border-left: 1px solid #ccc;

          h4.dates-tab {
            padding: 1rem;
            border: 1px solid #000;
            border-radius: 5px;
            cursor: pointer;
            transition: all 300ms ease-in-out;

            &:hover {
              background-color: #000;
              color: #fff;
            }
          }

          h4.active-dates-tab {
            background-color: #000;
            color: #fff;
            
            &:hover {
              background-color: transparent;
              color: #000;
            }
          }
        }

        div.dates-tabs-content {

          div.dates-tab-content {
            display: none;
            width: 64vw;
            height: fit-content;
            max-height: 86%;
            border: 1px solid #ccc;
            overflow-y: scroll;
          }

          div.active-dates-tab-content {
            display: flex;
            flex-flow: row wrap;
            
            div{
              width: 13.2%;
              height: 1rem;
              display: flex;
              align-items: center;
              padding-block: 1rem;
              padding-inline-start: 0.5rem;
              border-left: 1px solid #ccc;
              border-bottom: 1px solid #ccc;
              cursor: pointer;
              &:hover {
                background-color: #ccc;
              }
              input {
                width: 1rem;
                height: 1rem;
              }

            }

            div.add-date {
              width: 26.5%;
              /* height: 0.5rem; */
              /* padding-bottom: 1.3rem; */
              padding-inline: 0.5rem;
              justify-content: space-around;
              align-items: baseline;

              input {
                width: 6rem;
                height: 0.6rem;
                margin-bottom: 1rem;
              }
              button.add-date-btn {
                padding-block: 0.2rem;
                font-size: 1rem;
                margin-bottom: 1rem;
                background-color: #00D100;
                border: 1px solid #00D100;
                color: #fff;
                cursor: pointer;
                transition: all 300ms ease-in-out;

                &:hover {
                  background-color: #fff;
                  color: #000;
                }
              }
            }
          }
          button.delete-dates {
            width: 14%;
            min-height: 3rem;
            justify-self: flex-end;
            font-size: 1rem;
            font-weight: bold;
            background-color: red;
            color: #fff;
            border: 1px solid red;
            cursor: pointer;
            transition: all 300ms ease-in-out;

            &:hover {
              background-color: transparent;
              color: #000;
            }
          }
        }
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

const Camps = ({ language, newCampsordersList}) => {

  const [camps, setCamps] = useState();
  const [camp, setCamp] = useState();
  // Pass current camp id to the orders component to fetch orders
  const [campIdFetchOrders, setCampIdFetchOrders] = useState();
  const [campRooms, setCampRooms] = useState([]);
  const [reFetchRoomsCampId, setReFetchRoomsCampId] = useState();
  const [isCreated, setIsCreated] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [loading, setLoading] = useState(false);


  // Fetch all Camps
  useEffect(() => {
    const fetchCamps = async () => {
      try {
        const allCamps = await axios.get(`/api/camps`);
        setCamps(allCamps.data);
      }
      catch (error) {
        console.error(error);
      }
    }
    fetchCamps();
  }, [isCreated, isDeleted]);



  /* Create new camp */
  //- Camp name
  const [campName, setCampName] = useState("");
  const [campAraName, setCampAraName] = useState("");
  //- Camp address
  const [campAddress, setCampAddress] = useState("");
  const [campAraAddress, setCampAraAddress] = useState("");
  //- Camp rate
  const [rate, setRate] = useState(0);
  //- Lunch price
  const [lunchPrice, setLunchPrice] = useState(0);
  //- Facilities
  const [facilities, setFacilities] = useState([]);
  const [araFacilities, setAraFacilities] = useState([]);
  //- House rules
  const [houseRules, setHouseRules] = useState([]);
  const [araHouseRules, setAraHouseRules] = useState([]);
  //- Camp description
  const [description, setDescription] = useState("");
  const [araDescription, setAraDescription] = useState("");
  //- Images
  const [files, setFiles] = useState();



  //--- Handle add facilities ---//
  // Create new input for new services
  const [servicesArray, setServicesArray] = useState([1, 2, 3]);
  const addservice = (e) => {
    e.preventDefault();
    const newEl = servicesArray[servicesArray.length - 1] + 1;
    const newArr = [...servicesArray, newEl]
    setServicesArray(newArr);
  };

  const deleteService = () => {
    servicesArray.pop();
    const newArr = [...servicesArray];
    setServicesArray(newArr);
  };
  //--- End Handle add services ---//


  //--- Handle add rule ---//
  // Create new input for new rules
  const [rulesArray, setRulesArray] = useState([1, 2]);
  const addrule = (e) => {
    e.preventDefault();
    const newEl = rulesArray[rulesArray.length - 1] + 1;
    const newArr = [...rulesArray, newEl]
    setRulesArray(newArr);
  };

  const deleteRule = () => {
    rulesArray.pop();
    const newArr = [...rulesArray];
    setRulesArray(newArr);
  };
  //--- End Handle add rule ---//

  //--- Handle add facilities and rules content
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



  // Open/close create-camp-modal
  const openModal = () => {
    document.getElementById('add-camp-modal').style.display = "block";
    document.querySelector('body').style.overflowY = "hidden";
    Array.from(document.getElementsByClassName("camp-details-body")).map(el => {
      el.scrollTop = 0;
    });
  }

  const closeModal = () => {
    document.getElementById('add-camp-modal').style.display = "none";
    document.querySelector('body').style.overflowY = "auto";
  }




  // Create camp
  const createCamp = async (e) => {
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

      const newCamp = await axios.post(`/api/admin/camps`, {
        name: [
          campName,
          campAraName
        ],
        location: [
          campAddress,
          campAraAddress
        ],
        rate: Number(rate),
        extraFacilities: [
          {
            description: "Dinner",
            price: Number(lunchPrice)
          }
        ],
        facilities: {
          english: addItemsToArray(servicesArray, "ssEnglish"),
          arabic: addItemsToArray(servicesArray, "ssArabic")
        },
        houseRules: {
          arabic: addItemsToArray(rulesArray, "rrArabic"),
          english: addItemsToArray(rulesArray, "rrEnglish")
        },
        description: [
          description,
          araDescription
        ],
        images: images
      }
      )
      setLoading(loading);
      document.getElementById("new-camp").reset();
      closeModal();
      setIsCreated(!isCreated);

    }
    catch (error) {
      console.error(error)
    }
  };
  /* End Create new camp */



  /* Delete Camp */
  const openDeleteCampModal = (btnId) => {
    document.getElementById(btnId).style.display = "flex";
    document.querySelector("body").style.overflowY = "hidden";
  };

  const closeDeleteCampModal = (btnId) => {
    document.getElementById(btnId).style.display = "none";
    document.querySelector("body").style.overflowY = "auto";
  };

  const deleteCamp = async (campId) => {
    try {
      await axios.delete(`/api/admin/camps/${campId}`);
      Array.from(document.getElementsByClassName("delete-modal")).map(el => (
        el.style.display = "none"
      ))
      setIsDeleted(!isDeleted);
    }
    catch (error) {
      console.error(error);
    }
  };
  /* End Delete Camp */


  //--- Camp's orders

  // get new orders notifications
  const [newOrdersNotifications, setNewOrdersNotifications] = useState();
  useEffect(() => {
    const getNotifications = () => {
      const campNames = camps && camps.map(camp => {
        return camp.name[0];
      });

      if (campNames) {
        let orders = [];
        for (let i = 0; i < campNames.length; i++) {
          orders = [...orders,
          newCampsordersList.filter(order => {
            return order.orderDetails.camp[0] === campNames[i]
          })
          ]
        }
        setNewOrdersNotifications(orders);
      }
    };
    getNotifications()
  }, [camps, newCampsordersList]);



  // const fetchCampOrders = async (campId, btnId, notificaitonsSpan) => {
  //   try {
  //     document.getElementById(btnId).disabled = true;
  //     const res = await axios.get(`/api/admin/campsOrders/${campId}`);
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
    setIsCreated(!isCreated)
  };

  //--- Camp's rooms
  const [toggleActiveRoom, setToggleActiveRoom] = useState(1);
  const [toggleActiveDatesTab, setToggleActiveDatesTab] = useState(1);
  const [roomType, setRoomType] = useState("");
  const [roomAraType, setRoomAraType] = useState("");
  const [roomPrice, setRoomPrice] = useState(0);
  const [maxPeople, setMaxPeople] = useState(0);
  const [roomDescription, setRoomDescription] = useState("");
  const [roomAraDescription, setRoomAraDescription] = useState("");
  const [unavailableDates, setUnavailableDates] = useState([]);




  const fetchCampRooms = async (campId, btnId) => {
    try {
      document.getElementById(btnId).disabled = true
      const res = await axios.get(`/api/rooms?campId=${campId}`);
      setCampRooms(res.data);
      setReFetchRoomsCampId(campId)

      setTimeout(() => {
        openRoomsModal();
      }, 500)
    }
    catch (error) {
      console.error(error);
    }
  };


  //--- Update room
  useEffect(() => {
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
      })
    }
  }, [campRooms, toggleActiveRoom]);


  const updateRoom = async (e, roomId) => {
    e.preventDefault();

    try {
      setLoading(!loading);
      await axios.patch(`/api/admin/rooms/${roomId}`, {
        roomType: [
          roomType,
          roomAraType
        ],
        price: Number(roomPrice),
        maxPeople: Number(maxPeople),
        description: [
          roomDescription,
          roomAraDescription
        ],
      });
      setLoading(loading);
      closeRoomsModal(e);
      setIsCreated(!isCreated);
    }
    catch (error) {
      console.error(error);
    }
  };



  //-- Handle camp's rooms modal (open/close)
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
  };



  //--- Handle update room's availability
  // Mark all unavailable dates
  const markAll = (roomId, dates) => {
    dates.map(date => {
      let checker = document.getElementById(`${roomId}${date}`);
      if (!checker.checked) {
        checker.checked = true;
        setUnavailableDates(dates)
      } else {
        checker.checked = false;
        setUnavailableDates([]);
      }
    })
  }


  // Mark some unavailable dates
  const markSome = (e, labelId) => {
    const date = document.getElementById(labelId).innerHTML;
    let newEl, newArr, elIndex

    if (e.target.checked) {
      newEl = date;
      newArr = [...unavailableDates, newEl];
      setUnavailableDates(newArr)
    } else {
      elIndex = unavailableDates.indexOf(date)
      if (elIndex > -1) {
        unavailableDates.splice(elIndex, 1);
        newArr = [...unavailableDates];
        setUnavailableDates(newArr);
      }
    }
  }

  const reFetchRooms = async (campId) => {
    try {
      const res = await axios.get(`/api/rooms?campId=${campId}`);
      setCampRooms(res.data);
    }
    catch (error) {
      console.error(error)
    }
  };



  //--- Add new unavailable date
  const addNewDate = async (e, inputId, roomId) => {
    e.preventDefault();
    try {
      const date = document.getElementById(inputId).value;
      const newDate = `${date.split("-")[2]}/${date.split("-")[1]}/${date.split("-")[0]}`
      await axios.patch(`/api/rooms/updateAvailability?remove=off&id=${roomId}`, {
        dates: newDate
      });
      reFetchRooms(reFetchRoomsCampId);
    }
    catch (error) {
      console.error(error);
    }
  }


  //--- Remove unavailable date/dates
  const removeOldDate = async (e, roomId) => {
    e.preventDefault();
    try {
      await axios.patch(`/api/rooms/updateAvailability?remove=on&id=${roomId}`, {
        dates: unavailableDates
      })
      reFetchRooms(reFetchRoomsCampId);
      setUnavailableDates([]);
    }
    catch (error) {
      console.error(error);
    }
  };





  /* Update camp */
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const [img4, setImg4] = useState("");
  const [img5, setImg5] = useState("");


  //--- Fetch single camp
  const fetchCamp = async (campId) => {
    try {
      document.getElementById(campId).disabled = true;
      const res = await axios.get(`/api/camps/${campId}`);
      setCamp(res.data);

      // Handle add new facilities & houseRules on the frontEnd
      setAraFacilitiesArray(res.data.facilities.arabic);
      setFacilitiesArray(res.data.facilities.english);
      setAraHouseRulesArray(res.data.houseRules.arabic);
      setHouseRulesArray(res.data.houseRules.english);

      // Set camp data default values before update
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
      }, 500)
    }
    catch (error) {
      console.error(error)
    }
  };




  // Handle add new facility to exsiting camp
  const [araFacilitiesArray, setAraFacilitiesArray] = useState([]);
  const [facilitiesArray, setFacilitiesArray] = useState([]);



  const addFacility = (e) => {
    e.preventDefault();
    let newElNum = araFacilitiesArray.indexOf(araFacilitiesArray[araFacilitiesArray.length - 1]) + 2;
    const newEl = `${newElNum}`;
    const newArr1 = [...araFacilitiesArray, newEl];
    setAraFacilitiesArray(newArr1);
    const newArr2 = [...facilitiesArray, newEl];
    setFacilitiesArray(newArr2);
  };



  const deleteFacility = (facility) => {
    let elIndex = facilitiesArray.indexOf(facility);

    if (elIndex > -1) {
      araFacilitiesArray.splice(elIndex, 1);
      const newArr1 = [...araFacilitiesArray];
      setAraFacilitiesArray(newArr1);

      facilitiesArray.splice(elIndex, 1);
      const newArr2 = [...facilitiesArray];
      setFacilitiesArray(newArr2);
    }
  };




  // Handle add new house rule to exsiting camp
  const [araHouseRulesArray, setAraHouseRulesArray] = useState([]);
  const [houseRulesArray, setHouseRulesArray] = useState([]);
  const addNewRule = (e) => {
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
      newEl = document.getElementById(`${arr[i]}${id}`).value
      newArr = [...newArr, newEl]
    }
    return newArr;
  }


  const deleteOldRule = (rule) => {
    let elIndex = houseRulesArray.indexOf(rule);

    if (elIndex > -1) {
      araHouseRulesArray.splice(elIndex, 1);
      const newArr1 = [...araHouseRulesArray];
      setAraHouseRulesArray(newArr1);

      houseRulesArray.splice(elIndex, 1);
      const newArr2 = [...houseRulesArray];
      setHouseRulesArray(newArr2)
    }
  };



  // Delete old Image
  const deleteImage = (imgId) => {
    document.getElementById(imgId).value = " ";
  };

  // Upload Image
  const uploadImage = async (imageInputId, imageFile) => {
    try {
      deleteImage(imageInputId);
      const data = new FormData();
      data.append("file", imageFile);
      data.append("upload_preset", "uploads");

      const uploadImage = await axios.post("https://api.cloudinary.com/v1_1/dqmqc0uaa/image/upload", data)
      const { url } = uploadImage.data;

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
    }
    catch (error) {
      console.error(error)
    }
  }



  // ----- Update Camp -----
  const updateCamp = async (e, campId) => {
    e.preventDefault();

    try {
      setLoading(!loading)
      await axios.patch(`/api/admin/camps/${campId}`, {
        description: [
          description,
          araDescription
        ],
        extraFacilities: [
          {
            description: "Dinner",
            price: Number(lunchPrice)
          }
        ],
        facilities: {
          english: addItemsToExistingArray(facilitiesArray, "ffEnglish"),
          arabic: addItemsToExistingArray(araFacilitiesArray, "ffArabic")
        },
        houseRules: {
          english: addItemsToExistingArray(houseRulesArray, "ruEnglish"),
          arabic: addItemsToExistingArray(araHouseRulesArray, "ruArabic")
        },
        images: [
          img1,
          img2,
          img3,
          img4,
          img5
        ],
        location: [
          campAddress,
          campAraAddress
        ],
        name: [
          campName,
          campAraName
        ],
        rate: Number(rate)
      });
      setLoading(loading);
      alert("تم تعديل المخيم بنجاح");
      closeDetailsModal(e, campId);
      setIsCreated(!isCreated);
    }
    catch (error) {
      console.error(error)
    }
  };

  //-- handle camp details modal (open/close)
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

  return (
    <Container language={language}>
      <div className="header">
        <div>
          <h1>المخيمات</h1>
        </div>
        <button onClick={openModal}>اضف مخيم جديد</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>اسم المخيم</th>
            <th>الموقع</th>
            <th>الحجوزات</th>
            <th>الغرف</th>
            <th>التفاصيل</th>
          </tr>
        </thead>

        <tbody>
          {
            camps && camps.map(camp => (
              <tr key={camp._id}>
                <td>{camp.name[1]}</td>
                <td>{camp.location[1]}</td>

                <td>
                  <span>{camp.orders.length}</span>
                  <button
                    className="camp-orders"
                    id={`${camp._id}orders`}
                    onClick={() => openOrdersModal(`${camp._id}new-orders`, camp._id)}
                  // onClick={() => fetchCampOrders(camp._id, `${camp._id}orders`, `${camp._id}new-orders`)}
                  >
                    عرض الكل
                  </button>
                  {
                    newOrdersNotifications && newOrdersNotifications.map(item => {
                      if (item.length !== 0 && item[0].new === true && item[0].orderDetails.camp[0] === camp.name[0]) {
                        return <span
                          id={`${camp._id}new-orders`}
                          className="order-notifications"
                          key={`${camp._id}noti`}>
                          {item.length}
                        </span>
                      }
                    })
                  }
                </td>

                <td>
                  <button
                    className="camp-rooms"
                    onClick={() => fetchCampRooms(camp._id, `${camp._id}btn`)}
                    id={`${camp._id}btn`}
                  >
                    غرف المخيم
                  </button>
                </td>
                <td>
                  <button
                    id={camp._id}
                    className="camp-details"
                    onClick={() => fetchCamp(camp._id)}
                  >
                    تفاصيل المخيم
                  </button>
                </td>

                <td>
                  <button className="delete-camp" onClick={() => openDeleteCampModal(`${camp._id}rand`)}>مسح</button>
                  <div className="delete-modal" id={`${camp._id}rand`}>
                    <div className="delete-modal-body">
                      <span onClick={() => closeDeleteCampModal(`${camp._id}rand`)}>x</span>
                      <div className="delete-modal-content">
                        <p>هل تريد إزالة هذا المخيم؟</p>
                        <button onClick={() => deleteCamp(camp._id)}>امسح الرحلة</button>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>


      {/* Create new camp */}
      <div id="add-camp-modal" className="camp-modal">
        <div className="modal-body">
          {
            loading &&
            <div className="loading">Loading...</div>
          }
          <span onClick={closeModal}>x</span>
          <div className="camp-details-body">

            <form onSubmit={(e) => createCamp(e)} id="new-camp">

              <div>
                <h3>إسم المخيم</h3>
                <textarea
                  cols="40"
                  dir='rtl'
                  placeholder="عربي"
                  onChange={(e) => setCampAraName(e.target.value)}
                  required
                /><br />

                <textarea
                  cols="40"
                  placeholder="English"
                  onChange={(e) => setCampName(e.target.value)}
                  required
                />
              </div>

              <div >
                <h3>عنوان المخيم</h3>
                <textarea
                  cols="50"
                  dir='rtl'
                  placeholder="عربي"
                  onChange={(e) => setCampAraAddress(e.target.value)}
                  required
                /><br />

                <textarea
                  cols="50"
                  placeholder="English"
                  onChange={(e) => setCampAddress(e.target.value)}
                  required
                />
              </div>

              <div >
                <h3>التقييم</h3>
                <input
                  type="number"
                  onChange={(e) => setRate(e.target.value)}
                  required
                />
              </div>

              <div>
                <h3>سعر الغداء للفرد</h3>
                <input
                  type="number"
                  onChange={(e) => setLunchPrice(e.target.value)}
                  required
                />
              </div>

              <div dir="rtl">
                <h3>الخدمات الأساسية</h3>
                {
                  servicesArray.map(service => (
                    <div key={`${service}ss`}>
                      <div className="new-rules">
                        <pre>{service}- </pre>
                        <textarea
                          id={`${service}ssArabic`}
                          cols="49"
                          dir='rtl'
                          placeholder="عربي"
                          required
                        />

                        <textarea
                          id={`${service}ssEnglish`}
                          cols="49"
                          dir="ltr"
                          placeholder="English"
                          required
                        />
                        <pre className="delete-rule" onClick={deleteService}>x</pre>
                      </div><br />
                    </div>
                  ))
                }
                <button className="add-rule" onClick={(e) => addservice(e)}>اضف خدمة</button>
              </div>


              <div dir="rtl">
                <h3>قواعد المخيم</h3>
                {
                  rulesArray.map(rule => (
                    <div key={`${rule}rr`}>
                      <div className="new-rules">
                        <pre>{rule}- </pre>
                        <textarea
                          id={`${rule}rrArabic`}
                          cols="49"
                          rows="4"
                          placeholder="عربي"
                          required
                        />

                        <textarea
                          id={`${rule}rrEnglish`}
                          cols="49"
                          rows="4"
                          dir="ltr"
                          placeholder="English"
                          required
                        />
                        <pre className="delete-rule" onClick={deleteRule}>x</pre>
                      </div><br />
                    </div>
                  ))
                }
                <button className="add-rule" onClick={(e) => addrule(e)}>أضف قاعدة</button>
              </div>

              <div>
                <h3>نظرة عامة عن المخيم</h3>
                <textarea
                  rows="6"
                  cols="50"
                  placeholder="English"
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />

                <textarea
                  rows="6"
                  cols="50"
                  dir="rtl"
                  placeholder="عربي"
                  onChange={(e) => setAraDescription(e.target.value)}
                  required
                />
              </div>

              <div>
                <h3>صور المخيم</h3>
                <div style={{
                  display: 'flex'
                }}>
                  <label htmlFor="upload-camp-img"><FileEarmarkArrowUp size={36} /></label>
                  <input
                    id="upload-camp-img"
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
                <button className="add" type="submit">اضف المخيم</button>
                <button className="delete" onClick={closeModal}>الغاء</button>
              </div>
            </form>
          </div>
        </div>
      </div>



      {/* Camp orders modal */}

      <div id="camp-orders-modal" className="camp-modal" language={language}>
        <div className="modal-body">
          <div className="orders-modal-body" language={language}>
            <span onClick={closeOrdersModal}>x</span>
            <CampsOrders
              currentCampId={campIdFetchOrders}
              language={language}
            />
          </div>
        </div>
      </div>
      {/* End Camp orders modal */}



      {/* Camp rooms Modal */}
      <div id="camp-rooms-modal" className="camp-modal">
        <div className="rooms-tabs">
          {
            campRooms.length > 0 &&
            <h4>غرف {campRooms && campRooms[0].campName[1]}</h4>
          }
          {
            campRooms && campRooms.map(room => (
              <div
                key={room._id}
                className={
                  toggleActiveRoom === campRooms.indexOf(room) + 1
                    ? 'tab active-tab'
                    : 'tab'
                }>
                <button onClick={() => setToggleActiveRoom(campRooms.indexOf(room) + 1)}>
                  <h5>
                    {room.roomType[1]} ({room.roomNumbers.length})
                  </h5>
                </button>
              </div>
            ))
          }
        </div>


        <div className="modal-body">
          {
            loading &&
            <div className="loading">Loading...</div>
          }
          <span onClick={(e) => closeRoomsModal(e)}>x</span>
          <div className="camp-details-body">

            <div className="tabs-content">

              {
                campRooms && campRooms.map(room => (

                  <div
                    key={room._id}
                    className={
                      toggleActiveRoom === campRooms.indexOf(room) + 1
                        ? 'tab-content active-tab-content'
                        : 'tab-content'
                    }>
                    <form onSubmit={(e) => updateRoom(e, room._id)}>
                      <div dir="rtl">
                        <h3>نوع الغرفة</h3>
                        <input
                          defaultValue={room.roomType[1]}
                          onChange={(e) => setRoomAraType(e.target.value)}
                        /><br />
                        <input
                          dir="ltr"
                          defaultValue={room.roomType[0]}
                          onChange={(e) => setRoomType(e.target.value)}
                        />
                      </div>

                      <div dir="rtl">
                        <h3>السعر</h3>
                        <input
                          type="number"
                          defaultValue={room.price}
                          onChange={(e) => setRoomPrice(e.target.value)}
                        /><br />
                      </div>

                      <div dir="rtl">
                        <h3>عدد الأشخاص</h3>
                        <input
                          type="number"
                          defaultValue={room.maxPeople}
                          onChange={(e) => setMaxPeople(e.target.value)}
                        /><br />
                      </div>

                      <div dir="rtl">
                        <h3>وصف الغرفة</h3>
                        <textarea
                          cols="50"
                          rows="4"
                          defaultValue={room.description[1]}
                          onChange={(e) => setRoomAraDescription(e.target.value)}
                        />
                        <textarea
                          cols="50"
                          rows="4"
                          dir="ltr"
                          defaultValue={room.description[0]}
                          onChange={(e) => setRoomDescription(e.target.value)}
                        />
                      </div>

                      <div className="rooms-numbers-container">
                        <div className="dates-tabs">
                          <h3>الغرف:</h3>
                          {
                            room.roomNumbers.map(num => (
                              <h4 key={num} className={
                                toggleActiveDatesTab === room.roomNumbers.indexOf(num) + 1
                                  ? 'active-dates-tab dates-tab'
                                  : 'dates-tab'
                              }
                                onClick={() => setToggleActiveDatesTab(room.roomNumbers.indexOf(num) + 1)}
                              >
                                غرفة رقم {num.roomNumber}
                              </h4>
                            ))
                          }
                        </div>

                        <div className="dates-tabs-content">
                          <h3>محجوز في:</h3>
                          {
                            room.roomNumbers.map(num => (
                              <div
                                id={`${room.roomNumbers.indexOf(num) + 1}dates`}
                                key={num}
                                className={
                                  toggleActiveDatesTab === room.roomNumbers.indexOf(num) + 1
                                    ? "active-dates-tab-content dates-tab-content"
                                    : "dates-tab-content"
                                }
                              >
                                <div style={{ fontSize: '1.5rem' }}>
                                  <input
                                    className="date-checkbox"
                                    id={num._id}
                                    type="checkbox"
                                    onChange={() => markAll(num._id, num.unavailableDates)} />
                                  <label htmlFor={num._id}>تحديد الكل</label>
                                </div>

                                {num.unavailableDates.map(date => (
                                  <div key={date}>
                                    <input
                                      className="date-checkbox"
                                      type="checkbox"
                                      id={`${num._id}${date}`}
                                      onChange={(e) => markSome(e, `${num._id}${date}rand`)}
                                    />
                                    <label
                                      htmlFor={`${num._id}${date}`}
                                      id={`${num._id}${date}rand`}
                                    >{date}</label>
                                  </div>
                                ))}
                                <div className="add-date">
                                  <input
                                    type="date"
                                    id={`${num._id}date`}
                                  />
                                  <button
                                    className="add-date-btn"
                                    id={`${num._id}add-date`}
                                    onClick={(e) => addNewDate(e, `${num._id}date`, num._id)}
                                  >أضف تاريخ</button>
                                </div>
                                <button className="delete-dates" onClick={(e) => removeOldDate(e, num._id)}>إزالة التواريخ</button>
                              </div>
                            ))
                          }
                        </div>
                      </div>

                      <div className="footer">
                        <button className="add" type="submit">تأكيد التعديلات</button>
                        <button className="delete" onClick={(e) => closeRoomsModal(e)}>الغاء</button>
                      </div>
                    </form>
                  </div>
                ))
              }

            </div>

          </div>
        </div>
      </div>
      {/* End Camp rooms Modal */}



      {/* Camp details modal */}
      <div id="camp-details-modal" className="camp-modal">
        <div className="modal-body">
          {
            loading &&
            <div className="loading">Loading...</div>
          }
          <span onClick={(e) => closeDetailsModal(e, camp && camp._id)}>x</span>
          <div className="camp-details-body">

            <form id={`${camp && camp._id}details-form`} onSubmit={(e) => updateCamp(e, camp && camp._id)}>
              <div>
                <h3>إسم المخيم</h3>
                <textarea
                  dir="rtl"
                  cols="40"
                  defaultValue={camp && camp.name[1]}
                  onChange={(e) => setCampAraName(e.target.value)}
                /><br />
                <textarea
                  cols="40"
                  defaultValue={camp && camp.name[0]}
                  onChange={(e) => setCampName(e.target.value)}
                />
              </div>

              <div >
                <h3>عنوان المخيم</h3>
                <textarea
                  dir="rtl"
                  cols="50"
                  defaultValue={camp && camp.location[1]}
                  onChange={(e) => setCampAraAddress(e.target.value)}
                /><br />
                <textarea
                  cols="50"
                  defaultValue={camp && camp.location[0]}
                  onChange={(e) => setCampAddress(e.target.value)}
                />
              </div>

              <div >
                <h3>التقييم</h3>
                <input
                  type="number"
                  defaultValue={camp && camp.rate}
                  onChange={(e) => setRate(e.target.value)}
                />
              </div>

              <div>
                <h3>سعر الغداء للفرد</h3>
                <input
                  type="number"
                  defaultValue={camp && camp.extraFacilities[0].price}
                  onChange={(e) => setLunchPrice(e.target.value)}
                />
              </div>


              <div dir="rtl">
                <h3>الخدمات الأساسية</h3>
                <div style={{ display: "flex" }}>
                  <div>
                    {
                      camp && araFacilitiesArray.map(facility => (
                        <>
                          <div key={facility} className="new-rules">
                            <pre>{araFacilitiesArray.indexOf(facility) + 1}- </pre>
                            <textarea
                              id={`${facility}ffArabic`}
                              cols="50"
                              defaultValue={facility}
                            />
                          </div><br />
                        </>
                      ))
                    }
                  </div>
                  <div>
                    {
                      camp && facilitiesArray.map(facility => (
                        <>
                          <div key={facility} className="new-rules">
                            <textarea
                              id={`${facility}ffEnglish`}
                              dir="ltr"
                              cols="50"
                              defaultValue={facility}
                            />
                            <pre className="delete-rule" onClick={() => deleteFacility(facility)}>x</pre>
                          </div><br />
                        </>
                      ))
                    }
                  </div>
                </div>
                <button className="add-rule" onClick={(e) => addFacility(e)}>اضف خدمة</button>
              </div>


              <div dir="rtl">
                <h3>قواعد المخيم</h3>
                <div style={{ display: "flex" }}>
                  <div>
                    {
                      camp && araHouseRulesArray.map(rule => (
                        <>
                          <div key={rule} className="new-rules">
                            <pre>{araHouseRulesArray.indexOf(rule) + 1}- </pre>
                            <textarea
                              id={`${rule}ruArabic`}
                              cols="50"
                              rows="4"
                              defaultValue={rule}
                            />
                          </div><br />
                        </>
                      ))
                    }
                  </ div>

                  <div>
                    {
                      camp && houseRulesArray.map(rule => (
                        <>
                          <div key={rule} className="new-rules">
                            <textarea
                              id={`${rule}ruEnglish`}
                              dir="ltr"
                              cols="50"
                              rows="4"
                              defaultValue={rule}
                            />
                            <pre className="delete-rule" onClick={() => deleteOldRule(rule)}>x</pre>
                          </div><br />
                        </>
                      ))
                    }
                  </div>
                </div>
                <button className="add-rule" onClick={(e) => addNewRule(e)}>اضف قاعدة</button>
              </div>

              <div>
                <h3>نظرة عامة عن المخيم</h3>
                <textarea
                  rows="6"
                  cols="50"
                  defaultValue={camp && camp.description[0]}
                  onChange={(e) => setDescription(e.target.value)}
                />

                <textarea
                  dir="rtl"
                  rows="6"
                  cols="50"
                  defaultValue={camp && camp.description[1]}
                  onChange={(e) => setAraDescription(e.target.value)}
                />
              </div>

              <div>
                <h3>الصور</h3>
                <div style={{
                  display: "flex",
                  flexDirection: 'row-reverse'
                }}>

                  <div style={{
                    display: 'flex',
                    flexDirection: 'column'
                  }}>
                    {
                      camp && camp.images.map(image => (
                        <input
                          key={image}
                          id={image}
                          className="image-input"
                          type="url"
                          readOnly
                          defaultValue={image}
                        />
                      ))
                    }
                  </div>

                  <div>
                    <input
                      className="upload-image"
                      type="file"
                      onChange={(e) => {
                        uploadImage(camp && camp.images[0], e.target.files[0]);
                      }}
                    />

                    <label
                      className="delete-img-url"
                      onClick={() => {
                        deleteImage(camp && camp.images[0]);
                        setImg1("");
                      }}
                    >x</label>



                    <input
                      className="upload-image"
                      type="file"
                      onChange={(e) => {
                        uploadImage(camp && camp.images[1], e.target.files[0]);
                      }}
                    />

                    <label
                      className="delete-img-url"
                      onClick={() => {
                        deleteImage(camp && camp.images[1]);
                        setImg2("");
                      }}
                    >x</label>



                    <input
                      className="upload-image"
                      type="file"
                      onChange={(e) => {
                        uploadImage(camp && camp.images[2], e.target.files[0]);
                      }}
                    />

                    <label
                      className="delete-img-url"
                      onClick={() => {
                        deleteImage(camp && camp.images[2]);
                        setImg3("");
                      }}
                    >x</label>



                    <input
                      className="upload-image"
                      type="file"
                      onChange={(e) => {
                        uploadImage(camp && camp.images[3], e.target.files[0]);
                      }}
                    />

                    <label
                      className="delete-img-url"
                      onClick={() => {
                        deleteImage(camp && camp.images[3]);
                        setImg4("");
                      }}
                    >x</label>



                    <input
                      className="upload-image"
                      type="file"
                      onChange={(e) => {
                        uploadImage(camp && camp.images[4], e.target.files[0]);
                      }}
                    />

                    <label
                      className="delete-img-url"
                      onClick={() => {
                        deleteImage(camp && camp.images[4]);
                        setImg5("");
                      }}
                    >x</label>

                  </div>
                </div>
              </div>
              <div className="footer">
                <button className="add" type="submit">تعديل</button>
                <button className="delete" onClick={(e) => closeDetailsModal(e, camp && camp._id)}>الغاء</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  )
};

export default Camps;