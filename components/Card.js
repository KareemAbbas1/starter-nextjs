import styled from "styled-components";
import { Clock } from "react-bootstrap-icons";
import Rating from "./Rating";
import Link from "next/link";


const Container = styled.div`
    height: 395px;
    min-width: calc(25% - 0.75rem);
    overflow: hidden;
    background-image: ${props => `url(${props.bg})`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 5px;
    user-select: none;


    // 10 INCH 
    @media(min-width: 1024px) {
        height: 330px;
    }

    // 12 inch
    @media(min-width: 1280px) {
        height: 395px;
    }

    // 22 inch
    @media(min-width: 1680px) {
        height: 410px;
    }
    
    @media(max-width: 990px) {
        min-width: calc(33% - 0.2rem);
        height: 350px;
    }

    @media(max-width: 600px) {
        min-width: 100%;
        height: 395px;
    }
`

const Overlay = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
`

const InfoContainer = styled.div`
    width: 80%;
    height: 90%;
    position: relative;
    padding: 1rem;
    display: flex;
    flex-flow: column;
    justify-content: space-between;

    div.first-row {
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: space-between;
        flex-direction: ${({ language }) => language === "English" ? "row" : "row-reverse"};
    }

    div.second-row {
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        div.second-row1 {
            width: 100%;
            display: flex;
            flex-direction: ${({ language }) => language === "العربية" ? "row-reverse" : ""};
            justify-content: space-between;
        }

        span {
            font-size: 0.8rem;
            color: #ccc;
            text-align: ${({ language }) => language === "English" ? "left" : "right"};
        }

        
        h2 {
            width: 100%;
            word-break: normal;
            font-size: 1.6rem;
            margin-top: -0.2rem;
            text-align: ${({ language }) => language === "English" ? "left" : "right"};
            cursor: pointer;
            &:hover {
                color: #F26630;
            }
            
            @media(max-width: 990px) {
                font-size: 1.2rem;
            }
        }

        div.second-row2 {
            width: 100%;
            display: flex;
            justify-content: center;
            a {
                width: 100%;
            }


            button {
                width: 100%;
                font-size: 1rem;
                padding: 0.8rem 0rem;
                background-color: transparent;
                color: #fff;
                border: 1px solid #fff;
                cursor: pointer;
                transition: background-color 400ms ease;

                &:hover {
                    background-color: #F26630;
                    border-color: #F26630;
                }

                @media(max-width: 990px) {
                    font-size: 0.8rem;
                }
            }
        }
    }
`

const Badge = styled.div`
    width: fit-content;
    height: 1.4rem;
    padding-inline: 0.5rem;
    font-size: 0.9rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F26630;
    border-radius: 5px;
`

const Card = ({ trip, camp, language, setLoading }) => {

    // Trips Data
    const tripImage = trip && trip.images[0];
    const state = trip && trip.state[0];
    const arabicState = trip && trip.state[1];

    const destination = trip && trip.destination[0];
    const arabicDestination = trip && trip.destination[1];

    const title = trip && trip.title[0];
    const arabicTitle = trip && trip.title[1];

    const tripRate = trip && trip.rate;

    // Camp Data
    const campImage = camp && camp.images[0];
    const engLocation = camp && camp.location[0];
    const araLocation = camp && camp.location[1];
    const campEngName = camp && camp.name[0];
    const campAraName = camp && camp.name[1];
    const campRate = camp && camp.rate;
    // const englishAvailability = camp && camp.availability[0];
    // const arabicAvailability = camp && camp.availability[1];



    return (
        <Container
            bg={(trip && typeof window !== "undefined" && window.scrollY > 70) ? tripImage : campImage}
            language={language}
        >
            <Overlay language={language}>
                <InfoContainer language={language}>
                    <div className='first-row'>
                        <Badge>
                            {
                                language === "English" && trip
                                    ? state
                                    : language === "العربية" && trip
                                        ? arabicState
                                        : null
                            }
                        </Badge>
                        {
                            trip && <strong>EGP {trip && trip.price}</strong>
                        }
                    </div>

                    <div className='second-row'>
                        <span>
                            {
                                language === "English" && trip
                                    ? destination
                                    : language === "العربية" && trip
                                        ? arabicDestination
                                        : language === "English" && camp
                                            ? engLocation
                                            : language === "العربية" && camp
                                                ? araLocation
                                                : null
                            }
                        </span>
                        <Link href='/#'>
                            <h2>
                                {
                                    language === "English" && trip
                                        ? title
                                        : language === "العربية" && trip
                                            ? arabicTitle
                                            : language === "English" && camp
                                                ? campEngName
                                                : language === "العربية" && camp
                                                    ? campAraName
                                                    : null
                                }
                            </h2>
                        </Link>
                        <div className='second-row1'>
                            {
                                trip &&
                                <div style={{
                                    display: 'flex',
                                    flexDirection: `${language === "English" ? "row" : "row-reverse"}`
                                }}>
                                    <Clock style={{
                                        marginInline: `${language === "English" ? "0rem 0.4rem" : "0.4rem 0rem"}`
                                    }} />
                                    {language === "English" ? `${trip && trip.duration} days` : `ايام ${trip && trip.duration}`}
                                </div>
                            }

                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Rating rate={trip ? tripRate : campRate}></Rating>
                                <span style={{ marginLeft: '0.3rem' }}>{
                                    trip ? tripRate : campRate}/5
                                </span>
                            </div>
                        </div>
                        <div className='second-row2'>
                            <Link href={
                                trip
                                    ? `/trip/${trip._id}`
                                    : `/camp/${camp._id}`
                            }>
                                <button onClick={() => setLoading(true)}>
                                    {
                                        language === "English"
                                            ? "More Information & Booking"
                                            : "مزيد من المعلومات والحجز"
                                    }

                                </button>
                            </Link>
                        </div>
                    </div>


                </InfoContainer>
            </Overlay>
        </Container>
    )
}

export default Card