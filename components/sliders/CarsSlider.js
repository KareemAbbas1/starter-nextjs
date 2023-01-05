import { useState, useEffect } from "react";
import styled from 'styled-components';
import { CaretLeft, CaretRight, TelephoneFill } from "react-bootstrap-icons";
import { CarCard } from "../home/Cars";
import Image from "next/image";
import axios from "axios";



const Container = styled.div`
    max-width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: relative;
    overflow: hidden;

    @media(max-width: 990px) {
        overflow-x: scroll;
    }
`

const Arrow = styled.div`
    width: ${props => `${props.dimensions}`};
    height: ${props => `${props.dimensions}`};
    border: ${props => `0.5px ${props.border} #000`};
    border-radius: ${props => `${props.borderRadius}`};
    display: flex;
    background-color: ${props => `${props.bgColor}`};
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 17%;
    bottom: 0;
    margin: auto;
    left: ${props => props.direction === 'left' && '1.8%'};
    right: ${props => props.direction === 'right' && '1.8%'};
    z-index: 10;
    opacity: ${props => `${props.bgOpacity}`};
    cursor: pointer;
    transition: all 500ms ease;
    &:hover {
        opacity: 0.8;
    }
`

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 1s ease;
    transform: translateX(${props => props.width > 990
        ? props.slideIndex * -25.3
        : props.width <= 600 ? props.slideIndex * -102.5
            : props.slideIndex * -33.3
    }%);
`

const Slide = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media(max-width: 990px) {
        gap: 0.3rem;
    }
    @media(max-width: 600px) {
        gap: 0.5rem;
    }
`

const CarsSlider = ({ cars, language, setIsCreated, isCreated, width }) => {

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(false);
    const [done, setDone] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const loggedInUser = JSON.parse(localStorage.getItem("user"));
            setUser(loggedInUser)
        }
    }, []);


    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction) => {
        if (direction === 'left') {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 0);
        }
        // Cars
        else if (direction === 'right' && cars && width > 990) {
            setSlideIndex(cars && slideIndex + 4 < cars.length ? slideIndex + 1 : 0);
        }
        else if (direction === 'right' && cars && width <= 990) {
            setSlideIndex(cars && slideIndex + 1 < cars.length ? slideIndex + 1 : 0);
        }
    };


    // Handle edit car data
    const [editModalMarginLeft, setEditModalMarginLeft] = useState(0);
    const [deleteCar, setDeleteCar] = useState(false);

    const [singleCar, setSingleCar] = useState();

    const [changeImage, setChangeImage] = useState(false);
    const [imageFile, setImageFile] = useState("");
    const [carImage, setCarImage] = useState("");

    const [carName, setCarName] = useState("");
    const [carAraName, setCarAraName] = useState("");
    const [carPrice, setCarPrice] = useState(0);

    // fetch single car
    const fetchCar = async (carId, modalId) => {
        try {
            const res = await axios.get(`/api/admin/cars/${carId}`);
            setSingleCar(res.data);
            openModal(modalId);

            setCarImage(res.data.image);
            setCarName(res.data.name[0]);
            setCarAraName(res.data.name[1]);
            setCarPrice(res.data.price);
        }
        catch (error) {
            typeof window !== "undefined" && alert(error);
        }
    };







    // Update car
    const updateCar = async (e, carId, formId) => {
        e.preventDefault();

        try {
            setLoading(!loading);

            let image;
            if (changeImage) {
                const data = new FormData();
                data.append("file", imageFile);
                data.append("upload_preset", "uploads");
                const uploadImage = await axios.post("https://api.cloudinary.com/v1_1/dqmqc0uaa/image/upload", data)
                const { url } = uploadImage.data;
                image = url;
            }

            await axios.patch(`/api/admin/cars/${carId}`, {
                image: changeImage ? image : carImage,
                name: [
                    carName,
                    carAraName
                ],
                price: Number(carPrice)
            });
            setLoading(loading);
            setIsCreated(!isCreated);
            setDone(!done);
            setTimeout(() => {
                setDone(done);
                closeModal(formId)
            }, 500)
        }
        catch (error) {
            typeof window !== "undefined" && alert(error);
        }
    };



    // Delete car
    const removeCar = async (e, carId) => {
        e.preventDefault();

        try {
            await axios.delete(`/api/admin/cars/${carId}`);
            setIsCreated(!isCreated);
            /*null because after deleteing the car its form don't exist any more*/
            closeModal(null);
        }
        catch (error) {
            typeof window !== "undefined" && alert(error);
        }
    };


    const openModal = (modalId) => {
        document.getElementById(modalId).style.display = "flex";
        document.querySelector("body").style.overflowY = "hidden";
        window.scrollTo({ top: document.getElementById("services-section").offsetTop });
    };

    const closeModal = (formId) => {
        Array.from(document.getElementsByClassName("add-car-modal")).map(modal => {
            modal.style.display = "none";
        });
        if (document.getElementById(formId)) {
            document.getElementById(formId).reset();
        };
        setChangeImage(false);
        document.querySelector("body").style.overflowY = "auto";

        setDeleteCar(false);

        setCarImage("");
        setCarName("");
        setCarAraName("");
        setCarPrice(0);
    };



    return (
        <>
            {
                slideIndex > 0 &&
                <Arrow
                    direction='left'
                    dimensions="2.2rem"
                    border="solid"
                    borderRadius="5px"
                    bgColor='#fff'
                    onClick={() => {
                        handleClick("left");
                        setEditModalMarginLeft(
                            width < 1400
                                ? editModalMarginLeft - 23.5
                                : editModalMarginLeft - 17
                        )
                    }}
                >
                    <CaretLeft color='#000' />
                </Arrow>
            }
            <Container>
                <Wrapper
                    width={width}
                    slideIndex={
                        width > 990 ? slideIndex
                            : slideIndex
                    }
                >
                    <Slide id='slide'>
                        {
                            cars && cars.map(car => (
                                <CarCard key={car._id} car={car} language={language}>
                                    <div className="car-image">
                                        {
                                            typeof window !== "undefined" && window.scrollY > 10 &&
                                            <Image
                                                layout="responsive"
                                                width={
                                                    300
                                                }
                                                height={
                                                    190
                                                }
                                                src={car.image} alt='rental car image'
                                            />
                                        }
                                    </div>
                                    <h3>
                                        {
                                            language === "English"
                                                ? car.name[0]
                                                : car.name[1]
                                        }
                                    </h3>
                                    <p>
                                        {language === "العربية" && "$"}
                                        {
                                            language === "English"
                                                ? "Starts from, "
                                                : "يبدأ من "
                                        }
                                        {language === "English" && "EGP "}{car.price}
                                    </p>
                                    <p><TelephoneFill /> +20-100-009-0335</p>
                                    {
                                        user &&
                                        <>
                                            <button
                                                onClick={() => fetchCar(car._id, `${car._id}car-modal`)}
                                                className="edit"
                                            >
                                                تعديل
                                            </button>


                                            <div
                                                id={`${car._id}car-modal`}
                                                className='add-car-modal edit-car-modal'
                                                style={{ marginLeft: `${editModalMarginLeft}vw` }}
                                            >
                                                <div className='modal-body'>
                                                    <span
                                                        className='close-modal'
                                                        onClick={() => closeModal(`${car._id}form`)}
                                                    >
                                                        x
                                                    </span>

                                                    <h2 className="title">تعديل بيانات السيارة</h2>

                                                    {
                                                        loading &&
                                                        <span
                                                            className="loading"
                                                            style={{
                                                                left: '23%',
                                                                top: '5%'
                                                            }}
                                                        >
                                                            Loading...
                                                        </span>
                                                    }

                                                    {
                                                        done &&
                                                        <span
                                                            className="loading"
                                                            style={{
                                                                left: '23%',
                                                                top: '5%'
                                                            }}
                                                        >
                                                            Done
                                                        </span>
                                                    }

                                                    <form
                                                        id={`${car._id}form`}
                                                        className='modal-content'
                                                    >
                                                        <div>
                                                            <h3>اسم السيارة</h3>
                                                            <input
                                                                type="text"
                                                                placeholder='عربي'
                                                                defaultValue={singleCar && singleCar.name[1]}
                                                                onChange={(e) => setCarAraName(e.target.value)}
                                                            />
                                                            <input
                                                                type="text"
                                                                dir="ltr"
                                                                placeholder='English'
                                                                defaultValue={singleCar && singleCar.name[0]}
                                                                onChange={(e) => setCarName(e.target.value)}
                                                            />
                                                        </div>

                                                        <div>
                                                            <h3>السعر</h3>
                                                            <input
                                                                type="number"
                                                                defaultValue={singleCar && singleCar.price}
                                                                onChange={(e) => setCarPrice(e.target.value)}
                                                            />
                                                        </div>

                                                        <div>
                                                            <h3>تغير الصورة</h3>
                                                            <input
                                                                type="file"
                                                                onChange={(e) => {
                                                                    setImageFile(e.target.files[0]);
                                                                    setChangeImage(!changeImage);
                                                                }}
                                                            />

                                                            {
                                                                !deleteCar &&
                                                                <button
                                                                    className="delete-car"
                                                                    onClick={(e) => {
                                                                        e.preventDefault();
                                                                        setDeleteCar(true)
                                                                    }}
                                                                >
                                                                    إزالة هذه السيارة
                                                                </button>
                                                            }
                                                        </div>

                                                        {
                                                            deleteCar &&
                                                            <div className="delete-modal">
                                                                <h4>تأكيد إزالة السيارة</h4>
                                                                <div>
                                                                    <button
                                                                        className="delete"
                                                                        onClick={(e) => removeCar(e, singleCar && singleCar._id)}
                                                                    >
                                                                        نعم
                                                                    </button>

                                                                    <button
                                                                        className="close"
                                                                        onClick={(e) => {
                                                                            e.preventDefault();
                                                                            setDeleteCar(false);
                                                                        }}
                                                                    >
                                                                        لا
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        }

                                                        <button
                                                            className="confirm"
                                                            disabled={loading ? true : false}
                                                            onClick={(e) => updateCar(e, car._id, `${car._id}form`)}
                                                        >
                                                            تعديل
                                                        </button>
                                                    </form>

                                                </div>
                                            </div>
                                        </>
                                    }
                                </CarCard>
                            ))
                        }
                    </Slide>
                </Wrapper>
            </Container>

            {
                (
                    (cars && slideIndex + 4 < cars.length && width > 990)
                    || (cars && slideIndex + 3 < cars.length && width <= 990)
                    || (cars && slideIndex + 1 < cars.length && width <= 600)
                )
                &&
                <Arrow
                    direction="right"
                    dimensions="2.2rem"
                    border="solid"
                    borderRadius="5px"
                    bgColor='#fff'
                    onClick={() => {
                        handleClick("right");
                        setEditModalMarginLeft(
                            width < 1400
                                ? editModalMarginLeft + 23.5
                                : editModalMarginLeft + 17
                        )
                    }}
                >
                    <CaretRight color='#000' />
                </Arrow>
            }
        </>
    )
}

export default CarsSlider