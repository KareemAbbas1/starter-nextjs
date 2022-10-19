import styled from "styled-components";
import Image from "next/image";
import Backpack from "../../public/backpack.png";
import Calendar from "../../public/calendar.png";
import Customer from "../../public/customer.png";




const BadgesSection = styled.div`
    max-width: 100vw;
    height: 60vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media(max-width: 990px) {
        height: 25vh;
    }
    @media(max-width: 600px) {
        flex-flow: column nowrap;
        height: fit-content;
    }

    div.badge {
        width: 30%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        @media(max-width: 600px) {
            width: 100%;
            margin-block: 1rem;
        }

        div.badge-icon {
            width: 4rem;
            height: auto;
            transition: all 300ms ease;
        }
        div.badge-text {
            width: 75%;

            h3 {
                margin-bottom: 0.3rem;
            }

            p {
                font-size: 0.9rem;
                color: #797979;
            }

            @media(max-width: 990px) {
                h3 {
                    font-size: 1rem;
                }
                p {
                    font-size: 0.8rem;
                }
            }
        }

        &:hover {
            div.badge-icon {
                transform: scale(1.1);
            }
        }

    }

    div.v-line {
        height: 180px;
        width: 1px;
        border-right: 1px dashed #ccc;
        @media(max-width: 600px) {
            display: none;
        }
    }

    @media(max-width: 1632px) {
        /* height: 32vh; */
        /* padding-inline: 5rem; */
    }

    @media(min-width: 1400px) {
        height: 40vh;
        padding-inline: 15rem;
    }
`



const Badges = ({ language }) => {
    return (
        <BadgesSection>
            <div className="badge">
                <div className="badge-icon">
                    <Image src={Backpack} alt="badge" />
                </div>
                <div className="badge-text">
                    {
                        language === "English"
                            ? <h3>Memorable Experiences</h3>
                            : <h3>تجربة لا تنسى</h3>
                    }

                    {
                        language === "English"
                            ? <p>Browse and book tours and activities so incredible.</p>
                            : <p>تصفح وحجز الجولات والأنشطة التي لا تصدق بافصل الاسعار وافضل خدمة</p>
                    }


                </div>
            </div>

            <div className="v-line" />

            <div className="badge">
                <div className="badge-icon">
                    <Image src={Calendar} alt="badge" />
                </div>
                <div className="badge-text">
                    {
                        language === "English"
                            ? <h3>Secure Booking</h3>
                            : <h3>حجز آمن</h3>
                    }

                    {
                        language === "English"
                            ? <p>Browse and book tours and activities so incredible.</p>
                            : <p>تصفح وحجز الجولات والأنشطة التي لا تصدق بافصل الاسعار وافضل خدمة</p>
                    }
                </div>
            </div>

            <div className="v-line" />

            <div className="badge">
                <div className="badge-icon">
                    <Image src={Customer} alt="badge" />
                </div>
                <div className="badge-text">
                    {
                        language === "English"
                            ? <h3>Customer Satisfaction</h3>
                            : <h3>رضاء العملاء</h3>
                    }
                    {
                        language === "English"
                            ? <p>Browse and book tours and activities so incredible.</p>
                            : <p>تصفح وحجز الجولات والأنشطة التي لا تصدق بافصل الاسعار وافضل خدمة</p>
                    }
                </div>
            </div>

        </BadgesSection>
    )
}

export default Badges