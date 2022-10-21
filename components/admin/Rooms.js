import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";


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
    text-align: center;
    margin-inline: 1rem;
    box-shadow: 1px 0.5px 2px 1px #ccc;

    tbody {
      display: block;
      overflow-y: scroll;
      width: 100%;
      max-height: 400px;
      padding-inline-end: 0.2rem;
    }

    thead, tr {
      width: 100%;
      display: block;

        th {
          width: 10.3%;
          padding-block: 1rem;
          font-size: 1.1rem;
        }
    }

      td {
        height: 3.5rem;
        width: 17%;
        border-top: 1px solid #ccc;

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

      button.room-details {
        width: 5rem;
        background-color: #00D100;
        border: 2.5px solid #00D100;
        &:hover {
          background-color: transparent;
        }
      }

      button.delete-room {
        background-color: red;
        border: 2.5px solid red;
        &:hover {
          background-color: transparent;
        }
      }
  }

  div.room-modal {
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
    
    div.modal-body {
      width: 79.8%;
      height: 100%;
      padding-top: 1rem;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      overflow-y: scroll;

      span {
        width: 1rem;
        height: 1rem;
        position: absolute;
        left: 77%;
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


      div.modal-conten {
        width: 100%;
        height: 90vh;
        padding-bottom: 6rem;
        direction: rtl;

        form.room-form {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          padding-inline: 2rem;
          padding-bottom: 6rem;

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

          select {
            width: 14rem;
            padding: 0.5rem 3px;
            font-size: 1.1rem;

          }
        }
        option {
          font-size: 1.2rem;
          line-height: 1.5rem;
        }
      
        div.footer {
          width: 78.5%;
          position: absolute;
          bottom: 0;
          left: 0;
          background-color: #fff;
          display: flex;
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

          button.delete {
            padding-inline: 1rem;
            &:hover {
              background-color: #000;
              color: #fff;
            }
          }
        }


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

    }

    div.loading {
      width: 80vw;
      height: 100vh;
      position: absolute;
      background-color: rgba(255, 255, 255, 0.6);
      z-index: 10;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      font-weight: bold;
    }
  }
`

const Rooms = ({ camps }) => {

  const [roomType, setRoomType] = useState("");
  const [roomAraType, setRoomAraType] = useState("");

  const [roomPrice, setRoomPrice] = useState(0);
  const [maxPeople, setMaxPeople] = useState(0);

  const [roomDescription, setRoomDescription] = useState("");
  const [roomAraDescription, setRoomAraDescription] = useState("");

  const [campName, setCampName] = useState([]);
  const [campId, setCampId] = useState();

  const [roomsNumbers, setRoomsNumbers] = useState([]);

  const [loading, setLoading] = useState(false);
  const [isCreated, setIsCreated] = useState(false);


  // Fetch all rooms
  const [rooms, setRooms] = useState();

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await axios.get(`/api/admin/rooms`);
        setRooms(res.data)
      }
      catch (error) {
        console.error(error);
      }
    }
    fetchRooms();
  }, [isCreated])




  /* Create New Room */

  // Handle open/close create room modal
  const openModal = () => {
    document.getElementById('room-modal').style.display = "block";
    document.querySelector('body').style.overflowY = "hidden";
  }

  const closeModal = (e) => {
    e.preventDefault();
    document.getElementById('room-modal').style.display = "none";
    document.querySelector('body').style.overflowY = "auto";
  }


  // Extract camp data
  const setCamp = (e) => {
    setCampName(Array.from(e.target).map(el => {
      if (el.value === e.target.value) {
        return el.innerText
      }
    }).filter(el => {
      return el !== undefined
    })[0].split(","));

    setCampId(e.target.value);
  };



  // Extract rooms number 
  const createRoomsNumbers = (e) => {
    const rooms = e.target.value.split(",").map(room => ({ roomNumber: Number(room) }));
    setRoomsNumbers(rooms)
  }


  //--- Create new room
  const createRoom = async (e) => {
    e.preventDefault();

    try {
      setLoading(!loading)
      await axios.post(`/api/admin/rooms?campId=${campId}`, {
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
        campName: campName,
        roomNumbers: roomsNumbers,
        campId: campId
      });

      setTimeout(() => {
        setLoading(loading);
        closeModal(e);
        setIsCreated(!isCreated);
      }, 1000);
      document.getElementById("create-room-form").reset();
    }
    catch (error) {
      console.error(error);
    }
  }
  /* End Create New Room */



  /* Update Existing room */
  // Fetch single room by id
  const [singleRoom, setSingleRoom] = useState();
  const [toggleActiveDatesTab, setToggleActiveDatesTab] = useState(1);
  // const [unavailableDates, setUnavailableDates] = useState([]);
  // const [reFetchSingleRoomCampId, setReFetchSingleRoomCampId] = useState();

  const fetchSingleRoom = async (roomId, btnId) => {
    try {
      document.getElementById(btnId).disabled = true;
      const res = await axios.get(`/api/admin/rooms/${roomId}`);
      setSingleRoom(res.data);

      setRoomAraType(res.data.roomType[1]);
      setRoomType(res.data.roomType[0]);

      setRoomPrice(res.data.price);
      setMaxPeople(res.data.maxPeople);

      setRoomAraDescription(res.data.description[1]);
      setRoomDescription(res.data.description[0]);

      setTimeout(() => {
        openRoomDetailsModal(roomId);
      }, 1000)
    }
    catch (error) {
      console.error(error);
    }
  }


  // Handle open/close room details modal
  const openRoomDetailsModal = (modalId) => {
    document.getElementById(modalId).style.display = "block";
    document.querySelector("body").style.overflowY = "hidden";
  }

  const closeRoomDetailsModal = (e, modalId) => {
    e.preventDefault();
    document.getElementById(modalId).style.display = "none";
    document.querySelector("body").style.overflowY = "auto";
    Array.from(document.getElementsByClassName("room-details")).map(btn => {
      btn.disabled = false;
    })
    setRoomAraType("");
    setRoomType("");
    setRoomPrice(0);
    setMaxPeople(0);
    setRoomAraDescription("");
    setRoomDescription("");
  }


  const updateRoom = async (e, roomId, fromId) => {
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
      closeRoomDetailsModal(e, roomId);
      setIsCreated(!isCreated);
      document.getElementById(fromId).reset();
    }
    catch (error) {
      console.error(error);
    }
  };




  //--- Handle update room's availability
  // Mark all unavailable dates
  // const markAll = (roomId, dates) => {
  //   dates.map(date => {
  //     let checker = document.getElementById(`${roomId}${date}`);
  //     if (!checker.checked) {
  //       checker.checked = true;
  //       setUnavailableDates(dates)
  //     } else {
  //       checker.checked = false;
  //       setUnavailableDates([]);
  //     }
  //   })
  // }


  // // Mark some unavailable dates
  // const markSome = (e, labelId) => {
  //   const date = document.getElementById(labelId).innerHTML;
  //   let newEl, newArr, elIndex

  //   if (e.target.checked) {
  //     newEl = date;
  //     newArr = [...unavailableDates, newEl];
  //     setUnavailableDates(newArr)
  //   } else {
  //     elIndex = unavailableDates.indexOf(date)
  //     if (elIndex > -1) {
  //       unavailableDates.splice(elIndex, 1);
  //       newArr = [...unavailableDates];
  //       setUnavailableDates(newArr);
  //     }
  //   }
  // }

  // const reFetchSingleRoom = async (campId) => {
  //   try {
  //     const res = await axios.get(`/api/rooms?campId=${campId}`);
  //     setSingleRoom(res.data);
  //   }
  //   catch (error) {
  //     console.error(error)
  //   }
  // };



  // //--- Add new unavailable date
  // const addNewDate = async (e, inputId, roomId) => {
  //   e.preventDefault();
  //   try {
  //     const date = document.getElementById(inputId).value;
  //     const newDate = `${date.split("-")[2]}/${date.split("-")[1]}/${date.split("-")[0]}`
  //     await axios.patch(`/api/rooms/updateAvailability?remove=off&id=${roomId}`, {
  //       dates: newDate
  //     });
  //     reFetchSingleRoom(reFetchSingleRoomCampId);
  //   }
  //   catch (error) {
  //     console.error(error);
  //   }
  // }


  // //--- Remove unavailable date/dates
  // const removeOldDate = async (e, roomId) => {
  //   e.preventDefault();
  //   try {
  //     await axios.patch(`/api/rooms/updateAvailability?remove=on&id=${roomId}`, {
  //       dates: unavailableDates
  //     })
  //     reFetchSingleRoom(reFetchSingleRoomCampId);
  //     setUnavailableDates([]);
  //   }
  //   catch (error) {
  //     console.error(error);
  //   }
  // };


  /* End Update Existing room */



  /* Delete Room */

  // handle open/close delete room modal
  const openDeleteModal = (modalId) => {
    document.getElementById(modalId).style.display = "flex";
    document.querySelector("body").style.overflowY = "hidden";
  }

  const closeDeleteModal = (modalId) => {
    document.getElementById(modalId).style.display = "none";
    document.querySelector("body").style.overflowY = "auto";
  }

  const deleteRoom = async (roomId, roomScampId) => {
    try {
      await axios.delete(`/api/admin/rooms/${roomId}?campId=${roomScampId}`);
      Array.from(document.getElementsByClassName("delete-modal")).map(el => (
        el.style.display = "none"
      ));
      setIsCreated(!isCreated);
    }
    catch (error) {
      console.error(error);
    }
  }
  /* End Delete Room */
  return (
    <Container>
      <div className="header">
        <h1>الغرف</h1>
        <button onClick={openModal}>اضف غرفة جديدة</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>نوع الغرفة</th>
            <th>المخيم</th>
            <th>الوصف</th>
            <th>عدد الأشخاص</th>
            <th>السعر</th>
          </tr>
        </thead>

        <tbody>
          {
            rooms && rooms.map(room => (
              <tr key={room._id}>
                <td>{room.roomType[1]}</td>
                <td>{room.campName[1]}</td>
                <td>{room.description[1]}</td>
                <td>{room.maxPeople}</td>
                <td>${room.price}</td>
                <td>
                  <button
                    id={`${room._id}btn`}
                    className="room-details"
                    onClick={() => fetchSingleRoom(room._id, `${room._id}btn`)}>تفاصيل الغرفة</button>
                </td>
                <td>
                  <button className="delete-room" onClick={() => openDeleteModal(`${room._id}delete`)}>مسح</button>
                  <div className="delete-modal" id={`${room._id}delete`}>
                    <div className="delete-modal-body">
                      <span onClick={() => closeDeleteModal(`${room._id}delete`)}>x</span>
                      <div className="delete-modal-content">
                        <p>هل تريد إزالة هذه الغرفة؟</p>
                        <button onClick={() => deleteRoom(room._id, room.campId)}>نعم</button>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>



      {/* Create new Room */}
      <div id="room-modal" className="room-modal">
        {
          loading &&
          <div className="loading">
            <p>Loading...</p>
          </div>
        }
        <div className="modal-body">
          <span onClick={closeModal}>x</span>
          <div className="modal-conten">
            <form id="create-room-form" className="room-form" onSubmit={(e) => createRoom(e)}>
              <div>
                <h3>نوع الغرفة</h3>
                <input
                  type="text"
                  placeholder="عربي"
                  required
                  onChange={(e) => setRoomAraType(e.target.value)}
                /><br />

                <input
                  type="text"
                  dir="ltr"
                  placeholder="English"
                  required
                  onChange={(e) => setRoomType(e.target.value)}
                />
              </div>

              <div>
                <h3>السعر</h3>
                <input type="number"
                  required
                  onChange={(e) => setRoomPrice(e.target.value)}
                />
              </div>

              <div>
                <h3>عدد الأشخاص</h3>
                <input type="number"
                  required
                  onChange={(e) => setMaxPeople(e.target.value)}
                />
              </div>

              <div>
                <h3>وصف الغرفة</h3>
                <div style={{ display: 'flex' }}>
                  <textarea
                    cols="50"
                    rows="6"
                    placeholder="عربي"
                    required
                    onChange={(e) => setRoomAraDescription(e.target.value)}
                  />

                  <textarea
                    cols="50"
                    rows="6"
                    dir="ltr"
                    placeholder="English"
                    required
                    onChange={(e) => setRoomDescription(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <h3>المخيم</h3>
                <select
                  name="camps"
                  id="camps"
                  required
                  onChange={(e) => setCamp(e)}
                >
                  <option value="">اختر مخيخم</option>
                  {
                    camps && camps.map(camp => (
                      <option
                        id={camp._id}
                        key={camp._id}
                        value={camp._id}
                      >
                        {camp.name.toString()}
                      </option>
                    ))
                  }
                </select>
              </div>


              <div style={{ float: 'left' }}>
                <h3>أرقام الغرف</h3>
                <textarea
                  dir="ltr"
                  cols="40"
                  placeholder="1,2,3,..."
                  required
                  onChange={(e) => createRoomsNumbers(e)}
                />
              </div>

              <div className="footer">
                <button className="add" type="submit">اضف الغرفة</button>
                <button className="delete" onClick={(e) => closeModal(e)}>الغاء</button>
              </div>
            </form>
          </div>
        </div>
      </div>



      {/* Room Details Modal */}
      <div id={singleRoom && singleRoom._id} className="room-modal">
        {
          loading &&
          <div className="loading">
            <p>Loading...</p>
          </div>
        }
        <div className="modal-body">
          <span onClick={(e) => closeRoomDetailsModal(e, singleRoom && singleRoom._id)}>x</span>
          <div className="modal-conten">
            <form
              id={`${singleRoom && singleRoom._id}room-details-form`}
              className="room-form"
              onSubmit={(e) => updateRoom(
                e,
                singleRoom && singleRoom._id,
                `${singleRoom && singleRoom._id}room-details-form`
              )}>
              <div>
                <h3>نوع الغرفة</h3>
                <input
                  type="text"
                  placeholder="عربي"
                  required
                  defaultValue={singleRoom && singleRoom.roomType[1]}
                  onChange={(e) => setRoomAraType(e.target.value)}
                /><br />

                <input
                  type="text"
                  dir="ltr"
                  placeholder="English"
                  required
                  defaultValue={singleRoom && singleRoom.roomType[0]}
                  onChange={(e) => setRoomType(e.target.value)}
                />
              </div>

              <div>
                <h3>السعر</h3>
                <input type="number"
                  required
                  defaultValue={singleRoom && singleRoom.price}
                  onChange={(e) => setRoomPrice(e.target.value)}
                />
              </div>

              <div>
                <h3>عدد الأشخاص</h3>
                <input type="number"
                  required
                  defaultValue={singleRoom && singleRoom.maxPeople}
                  onChange={(e) => setMaxPeople(e.target.value)}
                />
              </div>

              <div>
                <h3>المخيم</h3>
                <input
                  type="text"
                  defaultValue={singleRoom && singleRoom.campName[1]}
                  readOnly
                />
              </div>

              <div>
                <h3>وصف الغرفة</h3>
                <div style={{ display: 'flex' }}>
                  <textarea
                    cols="50"
                    rows="6"
                    placeholder="عربي"
                    required
                    defaultValue={singleRoom && singleRoom.description[1]}
                    onChange={(e) => setRoomAraDescription(e.target.value)}
                  />

                  <textarea
                    cols="50"
                    rows="6"
                    dir="ltr"
                    placeholder="English"
                    required
                    defaultValue={singleRoom && singleRoom.description[0]}
                    onChange={(e) => setRoomDescription(e.target.value)}
                  />
                </div>
              </div>


              {/* <div className="rooms-numbers-container">
                <div className="dates-tabs">
                  <h3>الغرف:</h3>
                  {
                    singleRoom && singleRoom.roomNumbers.map(num => (
                      <h4 key={`${num}tab`} className={
                        toggleActiveDatesTab === (singleRoom && singleRoom.roomNumbers.indexOf(num) + 1)
                          ? 'active-dates-tab dates-tab'
                          : 'dates-tab'
                      }
                        onClick={() => setToggleActiveDatesTab(singleRoom && singleRoom.roomNumbers.indexOf(num) + 1)}
                      >
                        غرفة رقم {num.roomNumber}
                      </h4>
                    ))
                  }
                </div>

                <div className="dates-tabs-content">
                  <h3>محجوز في:</h3>
                  {
                    singleRoom && singleRoom.roomNumbers.map(num => (
                      <div
                        id={`${singleRoom && singleRoom.roomNumbers.indexOf(num) + 1}dates`}
                        key={`${num}tab-content`}
                        className={
                          toggleActiveDatesTab === (singleRoom && singleRoom.roomNumbers.indexOf(num) + 1)
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
              </div> */}


              <div className="footer">
                <button className="add" type="submit">تأكيد التعديلات</button>
                <button className="delete" onClick={(e) => closeRoomDetailsModal(e, singleRoom && singleRoom._id)}>الغاء</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Rooms