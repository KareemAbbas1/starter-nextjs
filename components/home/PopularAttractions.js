import styled from 'styled-components';
import PopularAttractionsSlider from '../sliders/PopularAttractionsSlider';
import { useState, useEffect } from 'react';
import axios from 'axios';



const Container = styled.div`
    max-width: 100vw;
    height: 100vh;
    padding-top: 2rem;
    padding-inline: 3rem;
    margin-bottom: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    div.h-line {
        width: 8rem;
        height: 2px;
        background-color: #F26630;
        margin-bottom: 3rem;
    }

    span.success-span {
        position: absolute;
        left: 15%;
        top: 15%;
        padding: 0.4rem;
        background-color: #00D100;
        color: #fff;
        font-weight: bold;
        border-radius: 5px;
    }

    // 19 inch
    @media(min-width: 1440px) {
        margin-inline: 5rem;
        max-height: 52vh;
        margin-bottom: 7rem;

        div img {
            width: 20rem;
        }
    }

    // 22 inch
    @media(min-width: 1680px) {
        margin-inline: 8%;
    }

    // 23 inch
    @media(min-width: 1920px) {
        margin-inline: 12%;
    }

    @media(max-width: 990px) {
        height: 43vh;
        margin-bottom: 5rem;
        padding-inline: 2rem;
    }
    @media(max-width: 768px) {
        height: 45vh;
        margin-bottom: 3rem;
        padding-inline: 2rem;
    }
    @media(max-width: 600px) {
        height: 70vh;
        margin-bottom: 3rem;
        padding-block: 0rem;
        h1 {
            font-size: 1.4rem;
        }
    }


    button.add-new {
        position: absolute;
        left: 4%;
        top: 15%;
        padding: 0.3rem 0.5rem;
        font-size: 1.1rem;
        font-weight: bold;
        background-color: #F26630;
        color: #fff;
        border: 1px solid #F26630;
        transition: all 300ms ease-in-out;
        cursor: pointer;

        &:hover {
            background-color: transparent;
            color: #000;
        }
    }


    div.add-activity-modal {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        display: none;
        justify-content: center;
        align-items: center;
        background-color: rgba(255, 255, 255, 0.6);
        z-index: 1000;


        div.modal-body {
            width: 100%;
            height: 100%;
            background-color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #ccc;
            border-radius: 5px;
            position: relative;

            @media(min-width: 1400px) {
                overflow-y: scroll;
            }

            h2.title {
                position: absolute;
                top: 0%;
            }

            span.close-modal {
                width: 1.2rem;
                height: 1.2rem;
                position: absolute;
                right: 2%;
                top: 2.5%;
                font-weight: bold;
                background-color: #000;
                color: #fff;
                border: 1px solid #000;
                border-radius: 5px;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 300ms ease-in-out;
                cursor: pointer;

                &:hover {
                    background-color: transparent;
                    color: #000;
                }
            }

            span.loading {
                position: absolute;
                bottom: 11%;
                font-size: 1.1rem;
                font-weight: bold;
                padding: 0.4rem;
                background-color: #00D100;
                color: #fff;
                border-radius: 5px;
            }

            form.modal-content {
                width: 90%;
                height: 80%;
                padding-inline-start: 1rem;
                direction: rtl;
                position: relative;
                border: 1px solid #ccc;
                border-radius: 5px;
                @media(min-width: 1400px) {
                    height: 120%;
                    padding-top: 10rem;
                }

                div {
                    input {
                        height: 1.7rem;
                        width: 15rem;
                        margin-left: 1rem;
                        padding-inline: 0.5rem;
                    }

                    textarea {
                        margin-left: 1rem;
                        resize: none;
                        font-family: inherit;
                        padding: 0.3rem;
                    }
                }


                button.confirm {
                    width: 5rem;
                    position: absolute;
                    bottom: -10%;
                    left: 0;
                    right: 0;
                    margin: auto;
                    font-size: 1.1rem;
                    font-weight: bold;
                    background-color: #F26630;
                    color: #fff;
                    border: 1px solid #F26630;
                    padding-block-start: 0.3rem;
                    cursor: pointer;
                    transition: all 300ms ease-in-out;

                    &:hover {
                        background-color: transparent;
                        color: #000;
                    }
                }


                button.delete-activity {
                    position: relative;
                    left: -89%;
                    bottom: 8%;
                    font-size: 1.1rem;
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

                div.delete-modal {
                    width: 43%;
                    display: inline-flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    position: absolute;
                    left: 1rem;
                    bottom: 1rem;
                    padding: 0.3rem 0.4rem;
                    border: 1px solid #ccc;
                    border-radius: 5px;

                    h4 {
                        margin: 0;
                    }

                    div {
                        width: 100%;
                        display: flex;
                        justify-content: space-between;

                        button.delete {
                            background-color: #00D100;
                            color: #fff;
                            border: 1px solid #00D100;
                            font-size: large;
                            cursor: pointer;

                            &:hover {
                                background-color: transparent;
                                color: #000
                            }
                        }

                        button.close {
                            background-color: red;
                            color: #fff;
                            border: 1px solid red;
                            font-size: large;
                            cursor: pointer;

                            &:hover {
                                background-color: transparent;
                                color: #000
                            }
                        }
                    }

                }
            }
        }
    }

    div#hide-top {
        width: 300vw;
        height: 17vh;
        position: absolute;
        background-color: #fff;
        display: none;
    }

    div#hide-right-side {
        width: 5vw;
        height: 100vh;
        position: absolute;
        right: 0;
        bottom: 0;
        background-color: #fff;
        z-index: 1500;
        display: none;
    }

    div#hide-left-side {
        width: 5vw;
        height: 100vh;
        position: absolute;
        left: 0;
        bottom: 0;
        background-color: #fff;
        z-index: 1500;
        display: none;
    }
`

export const ActivityCard = styled.div`
    width: 25%;
    height: 70%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-between;
    
    
    // 12 inch
    @media(min-width: 1280px) {
        height: 50%;
    }
    
    // 15 INCH
    @media(min-width: 1366px) {
        height: 55%;
    }
    
    // 19 inch
    @media(min-width: 1440px) {
        height: 100%;
    }
    
    // 22 inch
    @media(min-width: 1680px) {
        min-width: 25%;
        height: 90%;
    }
    
    // 23 inch
    @media(min-width: 1920px) {
        height: 100%;
    }

    @media(max-width: 990px) {
        width: 33%;
        height: 78%;
    }
    @media(max-width: 768px) {
        width: 33%;
        height: 85%;
    }
    @media(max-width: 600px) {
        width: 100%;
        height: 100%
    }

    div.activity-image {
        width: 18.7rem;
        height: 15rem;


        
        
        // 10 inch 
        @media(min-width: 1024px) {
            width: 13.7rem;
        }
        
        // 12 inch
        @media(min-width: 1280px) {
            width: 17.7rem;
        }


        // 15 inch
        @media(min-width: 1366px) {
            width: 19rem;
        }

        // 19 inch
        @media(min-width: 1400px) {
            width: 17.7rem;
        }

        // 22 inch
        @media(min-width: 1680px) {
            width: 20rem;
        }

    

        @media(max-width: 990px) {
            width: 15rem;
            height: 12rem;
        }
        @media(max-width: 600px) {
            width: 19.7rem;
            height: 14rem;
        }

        img {
            transition: all 400ms ease;
            object-fit: cover;
        }
    }

    h3 {
        margin: 0px;
        margin-bottom: -1rem;
        font-size: 1.4rem;
    }

   

    div.info {
        position: absolute;
        width: 0%;
        height: 0%;
        color: transparent;
        background-color: #000;
        opacity: 0.6;
        box-sizing: border-box;
        overflow-y: scroll;
        overflow-x: hidden;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        transition: 300ms ease-in-out;

        div.contact-data {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;

            button {
                color: #fff;
                background-color: transparent;
                cursor: pointer;
                transition: all 300ms ease-in-out;
                &:hover {
                    transform: scale(1.3);
                }
            }

            div.phone-number {
                display: flex;
                p {
                    margin: 0;
                    padding: 0;
                }
            }
        }
    }
    
    &:hover, &:active {
        div.info {
            width: 23%;
            height: 47%;
            color: #fff;
            padding: 1rem;
            transform: scale(1.05);
            opacity: 0.9;
        }

        @media(min-width: 1400px) {
            div.info {
                width: 23%;
                height: 69.5%;
            }
        }
        
        @media(max-width: 990px) {
            &:hover, &:active {
                div.info {
                    width: 31%;
                    height: 50%;
                }
            }
        }
        @media(max-width: 768px) {
            &:hover, &:active {
                div.info {
                    width: 32%;
                    height: 57%;
                }
            }
        }
        @media(max-width: 600px) {
            &:hover, &:active {
                div.info {
                    width: 100%;
                    height: 68%;
                }
            }
        }
    }

    button.edit {
        background-color: #F26630;
        color: #fff;
        border: 1px solid #F26630;
        font-weight: bold;
        font-size: 1.1rem;
        transition: all 300ms ease-in-out;
        cursor: pointer;

        &:hover {
            background-color: transparent;
            color: #000;
        }
    }

    

`

const PopularAttractions = ({ language }) => {

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(false);
    const [isCreated, setIsCreated] = useState(false);
    const [done, setDone] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const loggedInUser = JSON.parse(localStorage.getItem("user"));
            setUser(loggedInUser)
        }
    }, []);


    // Fetch all activities
    const [activities, setActivities] = useState();

    useEffect(() => {
        const fetchActivities = async () => {
            try {
                const res = await axios.get(`/api/activities`);
                setActivities(res.data)
            }
            catch (error) {
                console.error(error);
            }
        }
        fetchActivities();
    }, [isCreated])

    // Handle add activity
    const [activityImage, setActivityImage] = useState();
    const [activityName, setActivityName] = useState();
    const [activityAraName, setActivityAraName] = useState();
    const [description, setDescription] = useState();
    const [araDescription, setAraDescription] = useState();
    const [activityPrice, setActivityPrice] = useState();


    // Create new activity
    const createActivity = async (e) => {
        e.preventDefault();

        try {
            setLoading(!loading);

            const data = new FormData();
            data.append("file", activityImage);
            data.append("upload_preset", "uploads");
            const uploadImage = await axios.post("https://api.cloudinary.com/v1_1/dqmqc0uaa/image/upload", data)
            const { url } = uploadImage.data;


            await axios.post(`/api/admin/activities`, {
                image: url,
                name: [
                    activityName,
                    activityAraName
                ],
                description: [
                    description,
                    araDescription
                ],
                price: Number(activityPrice)
            });

            setLoading(loading);
            document.getElementById("add-activity-form").reset();
            setIsCreated(!isCreated);
            closeModal();
            setDone(!done);

            setTimeout(() => {
                setDone(done)
            }, 1500)
        }
        catch (error) {
            console.error(error);
        }
    };

    const openModal = () => {
        document.getElementById("add-activity-modal").style.display = "flex";
        document.querySelector("body").style.overflowY = "hidden";
    };

    const closeModal = () => {
        document.getElementById("add-activity-modal").style.display = "none";
        document.querySelector("body").style.overflowY = "auto";
    };

    return (
        <Container id='populart-attraction-container'>
            {
                user &&
                <>
                    <button
                        onClick={openModal}
                        className='add-new'>
                        أضف وجهة جديدة
                    </button>

                    {
                        done &&
                        <span className='success-span'>تم إضافة الوجهة بنجاح &#10003;</span>
                    }

                    <div
                        id="add-activity-modal"
                        className='add-activity-modal'>
                        <div className='modal-body'>
                            <span
                                onClick={closeModal}
                                className='close-modal'
                            >
                                x
                            </span>
                            <h2 className='title'>إضافة وجهة جديدة</h2>

                            {
                                loading &&
                                <span className='loading'>Loading...</span>
                            }

                            <form
                                id="add-activity-form"
                                className='modal-content'
                                onSubmit={(e) => createActivity(e)}
                            >
                                <div>
                                    <h3>اسم الوجهة</h3>

                                    <input
                                        type="text"
                                        placeholder='عربي'
                                        onChange={(e) => setActivityAraName(e.target.value)}
                                    />
                                    <input
                                        type="text"
                                        placeholder='English'
                                        dir="ltr"
                                        onChange={(e) => setActivityName(e.target.value)}
                                    />
                                </div>

                                <div>
                                    <h3>الوصف</h3>

                                    <textarea
                                        rows="7"
                                        cols="55"
                                        placeholder='عربي'
                                        onChange={(e) => setAraDescription(e.target.value)}
                                    />

                                    <textarea
                                        rows="7"
                                        cols="55"
                                        placeholder='English'
                                        dir='ltr'
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </div>

                                <div>
                                    <h3>السعر</h3>
                                    <input
                                        type="number"
                                        onChange={(e) => setActivityPrice(e.target.value)}
                                    />
                                </div>

                                <div>
                                    <h3>الصورة</h3>

                                    <input
                                        type="file"
                                        onChange={(e) => setActivityImage(e.target.files[0])}
                                    />
                                </div>

                                <button
                                    className='confirm'
                                    type='submit'
                                    disabled={loading ? true : false}
                                >
                                    إضافة
                                </button>
                            </form>
                        </div>
                    </div>
                </>
            }
            <h1>
                {
                    language === "English"
                        ? "Popular Attractions"
                        : "افضل الوجهات"
                }
            </h1>
            <div className='h-line' />
            <div id='hide-top' />
            <div id='hide-left-side' />
            <div id='hide-right-side' />
            <PopularAttractionsSlider
                activities={activities}
                language={language}
                isCreated={isCreated}
                setIsCreated={setIsCreated}
            />
        </Container>
    )
}

export default PopularAttractions