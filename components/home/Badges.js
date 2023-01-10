import styled from "styled-components";
import Image from "next/image";
import Backpack from "../../public/backpack.png";
import Calendar from "../../public/calendar.png";
import Customer from "../../public/customer.png";




const BadgesSection = styled.div`
    width: 80vw;
    height: 60vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    left: 0;
    right: 0;
    margin: auto;
    @media(max-width: 990px) {
        height: 25vh;
        width: 100vw;
    }
    @media(max-width: 600px) {
        flex-flow: column nowrap;
        min-height: 80vh;
    }

    div.badge {
        width: 30vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        @media(max-width: 600px) {
            width: 100%;
            margin-block: 1rem;
        }

        div.badge-icon {
            width: 5rem;
            height: 4rem;
            transition: all 300ms ease;

            img {
                width: 4.2rem;
                height: 4rem;
            }
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

    // 19 inch
    @media(max-width: 1440px) {
        height: 40vh;
    }

    // 22 inch
    @media(min-width: 1670px) and (max-width: 1680px) {
        margin-inline: 10%;
    }
`



const Badges = ({ language, showSideButtons }) => {
    return (
        <BadgesSection>
            <div className="badge">
                <div className="badge-icon">
                    <Image src={Backpack} alt="badge" />
                </div>
                {
                    typeof window !== "undefined" && window.scrollY > 70 &&
                    <div className="badge-text">
                        {
                            language === "English"
                                ? <h3>Memorable Experiences</h3>
                                : <h3>تجربة لا تنسى</h3>
                        }

                        {
                            language === "English"
                                ? <p>We are interested in providing new experiences and adventures to make unforgettable memories</p>
                                : <p>نهتم بتقديم تجارب ومغامرات جديدة لعمل ذكريات لاتنسى</p>
                        }


                    </div>
                }
            </div>

            <div className="v-line" />

            <div className="badge">
                <div className="badge-icon">
                    <Image src={Calendar} alt="badge" />
                </div>
                {
                    typeof window !== "undefined" && window.scrollY > 70 &&
                    <div className="badge-text">
                        {
                            language === "English"
                                ? <h3>Secure Booking</h3>
                                : <h3>حجز آمن</h3>
                        }

                        {
                            language === "English"
                                ? <p>Reservations are made through the official website or directly from the office</p>
                                : <p>يتم الحجز عن طريق الموقع الرسمي أو من المكتب مباشرة</p>
                        }
                    </div>
                }
            </div>

            <div className="v-line" />

            <div className="badge">
                <div className="badge-icon">
                    <Image src={Customer} alt="badge" />
                </div>
                {
                    typeof window !== "undefined" && window.scrollY > 70 &&
                    <div className="badge-text">
                        {
                            language === "English"
                                ? <h3>Customer Satisfaction</h3>
                                : <h3>رضاء العملاء</h3>
                        }
                        {
                            language === "English"
                                ? <p>We care about providing the best customer service, comfort, safety and enjoyment in various experiences</p>
                                : <p>نهتم بتقديم أفضل خدمة للعميل والراحة والأمان والمتعة بمختلف التجارب</p>
                        }
                    </div>
                }
            </div>

        </BadgesSection>
    )
}

export default Badges