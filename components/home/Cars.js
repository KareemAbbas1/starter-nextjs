import { useEffect, useState } from 'react';
import styled from 'styled-components';
import CarsSlider from '../sliders/CarsSlider';
import axios from 'axios';



const Container = styled.div`
    max-width: 100vw;
    max-height: 75vh;
    margin-top: 5rem;
    padding-inline: 3rem;
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

    // 19 inch
    @media(min-width: 1440px) {
        margin-inline: 4rem;
        max-height: 52vh;

        div img {
            width: 20rem;
        }
    }

    // 22 inch
    @media(min-width: 1680px) {
        margin-inline: 8%;
        max-height: 52vh;
    }

    @media(max-width: 990px) {
        height: 40vh;
        padding-inline: 2rem;
    }
    @media(max-width: 600px) {
        height: 70vh;
        padding-block: 0rem;
        h1 {
            font-size: 1.4rem;
        }
    }

    button.add-new {
        position: absolute;
        left: 8%;
        top: 5%;
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

    span.success-span {
        position: absolute;
        left: 18%;
        top: 5%;
        padding: 0.4rem;
        font-weight: bold;
        background-color: #00D100;
        color: #fff;
        border-radius: 5px;
    }

    div.add-car-modal {
        width: 100vw;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        margin: auto;
        display: none;
        justify-content: center;
        align-items: center;
        background-color: rgba(255, 255, 255, 0.6);
        z-index: 1000;

        div.modal-body {
            width: 50%;
            height: 85%;
            background-color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #ccc;
            border-radius: 5px;
            position: relative;
            
            // Temporary margin right until moving the admin crud for this compnent to the admin dashboard
            @media(min-width: 1400px){
                margin-right: 30%;
            }

            h2.title {
                position: absolute;
                top: 0%;
            }

            span.loading {
                position: absolute;
                top: 10%;
                font-size: 1.1rem;
                font-weight: bold;
                background-color: #00D100;
                color: #fff;
                padding: 0.4rem;
                border-radius: 5px;
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

            form.modal-content {
                height: 65%;
                padding-inline-start: 1rem;
                direction: rtl;
                position: relative;
                border: 1px solid #ccc;
                border-radius: 5px;

                div {
                    input {
                        height: 1.7rem;
                        width: 15rem;
                        margin-left: 1rem;
                        padding-inline: 0.5rem;
                    }
                }


                button.confirm {
                    width: 5rem;
                    position: absolute;
                    bottom: -20%;
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

                    &:disabled {
                        opacity: 0.5;
                    }
                }


                button.delete-car {
                    position: relative;
                    left: -9.5rem;
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


`

export const CarCard = styled.div`
    min-width: 25%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    @media(max-width: 990px) {
        min-width: 33%;
    }
    @media(max-width: 600px) {
        min-width: 100%;
    }

    div.car-image {
        width: 18.5rem;
        height: auto;
        object-fit: cover;
        transition: transform 400ms ease;

        // 10 inch 
        @media(min-width: 1024px) {
            width: 14rem;
        }

        // 15 inch
        @media(min-width: 1366px) {
            width: 18rem;
        }

        // 22 inch
        @media(min-width: 1680px) {
            width: 20rem;
        }

        @media(max-width: 990px) {
            width: 15rem;
        }
        @media(max-width: 600px) {
            width: 19.7rem;
        }
    }

    h3 {
        margin: 0px;
        font-size: 1.4rem;
    }

    p {
        margin: 0.5rem;
    }

    &:hover {
        div.car-image {
            transform: scale(1.1);
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

const Cars = ({ language, width }) => {

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


    // Fetch all cars
    const [cars, setCars] = useState();
    useEffect(() => {
        const fetchCars = async () => {
            try {
                const res = await axios.get(`/api/cars`);
                setCars(res.data)
            }
            catch (error) {
                typeof window !== "undefined" && console.log(error);
            }
        }
        fetchCars();
    }, [isCreated])



    // Handle Create new car
    const [carImage, setCarImage] = useState();
    const [carName, setCarName] = useState();
    const [carAraName, setCarAraName] = useState();
    const [carPrice, setCarPrice] = useState();


    // Create new car 
    const creatNewCar = async (e) => {
        e.preventDefault();

        try {
            setLoading(!loading);

            const data = new FormData();
            data.append("file", carImage);
            data.append("upload_preset", "uploads");
            const uploadImage = await axios.post("https://api.cloudinary.com/v1_1/dqmqc0uaa/image/upload", data)
            const { url } = uploadImage.data;


            await axios.post(`/api/admin/cars`, {
                image: url,
                name: [
                    carName,
                    carAraName
                ],
                price: Number(carPrice)
            });

            setLoading(loading);
            document.getElementById("add-car-form").reset();
            setIsCreated(!isCreated);
            closeModal();
            setDone(!done);

            setTimeout(() => {
                setDone(done)
            }, 1500)

        }
        catch (error) {
            typeof window !== "undefined" && console.log(error);
        }
    }


    const openModal = () => {
        document.getElementById("add-car-modal").style.display = "flex";
        document.querySelector("body").style.overflowY = "hidden";
    };

    const closeModal = () => {
        document.getElementById("add-car-modal").style.display = "none";
        document.querySelector("body").style.overflowY = "auto";
    };

    return (
        <Container id='services-section'>
            {
                user &&
                <>
                    <button
                        className='add-new'
                        onClick={openModal}
                    >
                        اضف سيارة جديدة
                    </button>

                    {
                        done &&
                        <span className='success-span'>تمت الإضافة بنجاح &#10003;</span>
                    }

                    <div
                        id="add-car-modal"
                        className='add-car-modal'
                    >
                        <div className='modal-body'>
                            <span className='close-modal' onClick={closeModal}>x</span>

                            <h2 className="title">إضافة سيارة جديدة</h2>

                            {
                                loading &&
                                <span className='loading'>Loading...</span>
                            }

                            <form
                                id="add-car-form"
                                className='modal-content'
                                onSubmit={(e) => creatNewCar(e)}
                            >
                                <div>
                                    <h3>اسم السيارة</h3>
                                    <input
                                        type="text"
                                        placeholder='عربي'
                                        onChange={(e) => setCarAraName(e.target.value)}
                                    />
                                    <input
                                        type="text"
                                        dir="ltr"
                                        placeholder='English'
                                        onChange={(e) => setCarName(e.target.value)}
                                    />
                                </div>

                                <div>
                                    <h3>السعر</h3>
                                    <input
                                        type="number"
                                        onChange={(e) => setCarPrice(e.target.value)}
                                    />
                                </div>

                                <div>
                                    <h3>الصورة</h3>
                                    <input
                                        type="file"
                                        onChange={(e) => setCarImage(e.target.files[0])}
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
            {
                typeof window !== "undefined" && window.scrollY > 10 &&
                <h1>
                    {
                        language === "English"
                            ? "Recommended Car Rentals"
                            : "سيارات للايجار"
                    }
                </h1>
            }
            <div className='h-line' />
            
            <CarsSlider cars={cars} language={language} isCreated={isCreated} setIsCreated={setIsCreated} width={width} />
        </Container>
    )
}

export default Cars