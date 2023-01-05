import { useState, useEffect, useTransition } from "react";
import styled from 'styled-components';
import { ActivityCard } from "../home/PopularAttractions";
import { CaretLeft, CaretRight, TelephoneFill, Whatsapp } from "react-bootstrap-icons";
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
    gap: 1rem;
    @media(max-width: 600px) {
        gap: 0.5rem;
    }

    // 22 INCH
    @media(min-width: 1680px) {
        gap: 0.3rem;
    }

    
`

const PopularAttractionsSlider = ({ activities, language, isCreated, setIsCreated, width }) => {

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
        // activities
        else if (direction === 'right' && activities && width > 990) {
            setSlideIndex(activities && slideIndex + 4 < activities.length ? slideIndex + 1 : 0);
        }
        else if (direction === 'right' && activities && width <= 990) {
            setSlideIndex(activities && slideIndex + 1 < activities.length ? slideIndex + 1 : 0);
        }
    }


    // Handle edit activity
    const [editModalMarginLeft, setEditModalMarginLeft] = useState(0);
    const [deleteActivity, setDeleteActivity] = useState(false);

    const [singleActivity, setSingleActivity] = useState();

    const [changeImage, setChangeImage] = useState(false);
    const [imageFile, setImageFile] = useState("");
    const [activityImage, setActivityImage] = useState("");

    const [activityName, setActivityName] = useState("");
    const [activityAraName, setActivityAraName] = useState("");
    const [description, setDescription] = useState("");
    const [araDescription, setAraDescription] = useState("");
    const [activityPrice, setActivityPrice] = useState(0);



    // Fetch single activity
    const fetchActivity = async (activityId, modalId) => {
        try {
            const res = await axios.get(`/api/admin/activities/${activityId}`);
            setSingleActivity(res.data);
            openModal(modalId);

            setActivityImage(res.data.image);
            setActivityName(res.data.name[0]);
            setActivityAraName(res.data.name[1]);
            setDescription(res.data.description[0]);
            setAraDescription(res.data.description[1]);
            setActivityPrice(res.data.price);
        }
        catch (error) {
            typeof window !== "undefined" && alert(error);
        }
    }


    // Update activity
    const updateActivity = async (e, activityId, formId) => {
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


            await axios.patch(`/api/admin/activities/${activityId}`, {
                image: changeImage ? image : activityImage,
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



    // Delete activity
    const removeActivity = async (e, activityId) => {
        e.preventDefault();

        try {
            await axios.delete(`/api/admin/activities/${activityId}`);
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
        document.getElementById("hide-top").style.display = "block";
        document.getElementById("hide-left-side").style.display = "block";
        document.getElementById("hide-right-side").style.display = "block";
        window.scrollTo({ top: document.getElementById("populart-attraction-container").offsetTop + 40 });
    };

    const closeModal = (formId) => {
        Array.from(document.getElementsByClassName("add-activity-modal")).map(modal => {
            modal.style.display = "none"
        });
        if (document.getElementById(formId)) {
            document.getElementById(formId).reset();
        };
        setChangeImage(false);

        document.querySelector("body").style.overflowY = "auto";
        document.getElementById("hide-top").style.display = "none";
        document.getElementById("hide-left-side").style.display = "none";
        document.getElementById("hide-right-side").style.display = "none";

        setDeleteActivity(false);

        setActivityImage("");
        setActivityName("");
        setActivityAraName("");
        setDescription("");
        setAraDescription("");
        setActivityPrice(0);
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
                            width > 1680
                                ? editModalMarginLeft - 18
                                : width === 1440
                                    ? editModalMarginLeft - 20.4
                                    : width <= 1366
                                        ? editModalMarginLeft - 23.4
                                        : editModalMarginLeft - 19.4 // for 1680 device width
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
                            activities && activities.map(activity => (
                                // <>
                                <ActivityCard key={activity._id} activity={activity} language={language}>
                                    <div className="activity-image">
                                        <Image
                                            width={320}
                                            height={255}
                                            src={activity.image} alt=''
                                        />
                                    </div>
                                    <div className="info">
                                        <p>
                                            {
                                                language === "English"
                                                    ? activity.description[0]
                                                    : activity.description[1]
                                            }
                                        </p>
                                        <div className="contact-data">
                                            <div className="phone-number">
                                                <TelephoneFill />
                                                <p>+20-100-009-0335</p>
                                            </div>
                                            <button>or <Whatsapp color="#fff" size={25} /></button>
                                        </div>
                                        <div></div>
                                    </div>
                                    <h3>
                                        {
                                            language === "English"
                                                ? activity.name[0]
                                                : activity.name[1]
                                        }
                                    </h3>
                                    <p>
                                        {language === "العربية" && "EGP"}
                                        {language === "English" ? "Starts from, " : "يبدأ من "}
                                        {language === "English" && "EGP"}{activity.price}

                                    </p>

                                    {
                                        user &&
                                        <>
                                            <button
                                                onClick={() => fetchActivity(activity._id, `${activity._id}edit-modal`)}
                                                className="edit">تعديل</button>

                                        </>
                                    }


                                    {/* Edit activity Modal */}
                                    <div
                                        id={`${activity._id}edit-modal`}
                                        className='add-activity-modal edit-activity-modal'
                                        style={{
                                            marginLeft: `${editModalMarginLeft}vw`
                                        }}
                                    >
                                        <div className='modal-body'>
                                            <span
                                                onClick={() => closeModal(`${activity._id}form`)}
                                                className='close-modal'
                                            >
                                                x
                                            </span>
                                            <h2 className='title'>تعديل بيانات الوجهة</h2>

                                            {
                                                loading &&
                                                <span className="loading">Loading...</span>
                                            }

                                            {
                                                done &&
                                                <span className="loading">Done</span>
                                            }

                                            <form
                                                id={`${activity._id}form`}
                                                className='modal-content'
                                                onSubmit={(e) => updateActivity(e, activity._id, `${activity._id}form`)}
                                            >
                                                <div>
                                                    <h3>اسم الوجهة</h3>

                                                    <input
                                                        type="text"
                                                        defaultValue={singleActivity && singleActivity.name[1]}
                                                        onChange={(e) => setActivityAraName(e.target.value)}
                                                    />
                                                    <input
                                                        type="text"
                                                        defaultValue={singleActivity && singleActivity.name[0]}
                                                        dir="ltr"
                                                        onChange={(e) => setActivityName(e.target.value)}
                                                    />
                                                </div>

                                                <div>
                                                    <h3>الوصف</h3>

                                                    <textarea
                                                        rows="3"
                                                        cols="75"
                                                        defaultValue={singleActivity && singleActivity.description[1]}
                                                        onChange={(e) => setAraDescription(e.target.value)}
                                                    />

                                                    <textarea
                                                        rows="3"
                                                        cols="73"
                                                        dir='ltr'
                                                        defaultValue={singleActivity && singleActivity.description[0]}
                                                        onChange={(e) => setDescription(e.target.value)}
                                                    />
                                                </div>

                                                <div>
                                                    <h3>السعر</h3>
                                                    <input
                                                        type="number"
                                                        defaultValue={singleActivity && singleActivity.price}
                                                        onChange={(e) => setActivityPrice(e.target.value)}
                                                    />
                                                </div>

                                                <div>
                                                    <h3>الصورة</h3>

                                                    <input
                                                        type="file"
                                                        onChange={(e) => {
                                                            setImageFile(e.target.files[0]);
                                                            setChangeImage(!changeImage);
                                                        }}
                                                    />
                                                </div>

                                                {
                                                    !deleteActivity &&
                                                    <button
                                                        className="delete-activity"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            setDeleteActivity(true)
                                                        }}
                                                    >
                                                        إزالة هذه الوجهة
                                                    </button>
                                                }

                                                {
                                                    deleteActivity &&
                                                    <div className="delete-modal">
                                                        <h4>تأكيد إزالة الوجهة</h4>

                                                        <div>
                                                            <button
                                                                onClick={(e) => removeActivity(e, singleActivity && singleActivity._id)}
                                                                className="delete"
                                                            >
                                                                نعم
                                                            </button>

                                                            <button
                                                                className="close"
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    setDeleteActivity(false);
                                                                }}
                                                            >
                                                                لا
                                                            </button>
                                                        </div>
                                                    </div>
                                                }

                                                <button
                                                    type="submit"
                                                    className='confirm'
                                                    disabled={loading ? true : false}
                                                >
                                                    تعديل
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </ActivityCard>
                            ))
                        }
                    </Slide>
                </Wrapper>
            </Container>

            {
                (
                    (activities && slideIndex + 4 < activities.length && width > 990)
                    || (activities && slideIndex + 3 < activities.length && width <= 990)
                    || (activities && slideIndex + 1 < activities.length && width <= 600)
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
                            width > 1680
                                ? editModalMarginLeft + 18
                                : width === 1440
                                    ? editModalMarginLeft + 20.4
                                    : width <= 1366
                                        ? editModalMarginLeft + 23.4
                                        : editModalMarginLeft + 19.4 // for 1680 device width
                        )
                    }}
                >
                    <CaretRight color='#000' />
                </Arrow>
            }
        </>
    )
}

export default PopularAttractionsSlider