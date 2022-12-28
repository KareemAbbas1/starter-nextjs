import styled from 'styled-components';
import { Check2 } from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import debounce from "lodash/lodash";
import Link from 'next/link';
import Image from 'next/image';




const Container = styled.div`
    min-width: 95vw;
    max-height: 97vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        text-align: center;
    }

    div.line {
        width: 10%;
        height: 2px;
        background-color: #F26630;
        margin-bottom: 3rem;
    }


    @media(min-width: 1440px) {
        min-width: 100%;
        max-height: 89vh;
    }
    @media(max-width: 990px) {
        min-width: 100%;
        max-height: 100vh;
    }
`

const Card = styled.div`
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-flow: ${({ language, width }) =>
        language === "English" && width > 990 ? "row"
            : language === "العربية" && width > 990 ? "row-reverse"
                : width <= 990 ? "row wrap"
                    : ''
    };
    justify-content: space-between;
    gap: 2rem;
    position: relative;

    div.camp-image {
        width: 50%;
        max-height: 100%;

        // 10 inch 
        @media(min-width: 1024px) {
            img {
                height: 95vh;
                width: 50vw;
                object-fit: cover;
            }
        }

        // 19 inch 
        @media(min-width: 1440px) {
            width: 55%;

            img {
                height: 87.3vh;
            }
        }

        // 23 inch 
        @media(min-width: 1920px) {
            width: 50%;

            img {
                height: 87.3vh;
            }
        }



        @media(max-width: 990px) {
            width: 100%;
            min-height: 40vh;
            img {
                max-height: 50vh;
                min-width: 100vw;
                object-fit: cover;
            }
        }
    }

    div.info {
        width: 50%;
        min-height: 100vh;
        img {
            height: 100%;
        }

        // 19 inch
        @media(min-width: 1440px) {
            width: 45%;
        }

        // 23 inch
        @media(min-width: 1920px) {
            width: 48%;
        }

        @media(max-width: 990px) {
            width: 100%;
            min-height: 50%;
        }

        h1 {
            text-align: ${({ language }) => language === "English" ? "left" : "right"};
            font-size: 1.9rem;
            line-height: 2.5rem;
            height: 22%;
            @media(min-width: 1440px) {
                height: 25%;
                font-size: 2.5rem;
                line-height: 3.5rem;
            }

            @media(max-width: 990px) {
                position: absolute;
                top: 2%;
                left: 2%;
                color: #fff;
            }
        }

        div.rooms {
            width: 100%;
            display: flex;
            flex-direction: ${({ language }) => language === "English" ? "row" : "row-reverse"};
            justify-content: space-between;
            gap: 2rem;
            @media(min-width: 990px) {
                height: 66% 
            }
            @media(max-width: 990px) {
                padding-top: 2rem;
            }

            // 19 inch
            @media(min-width: 1440px) {
                height: 55.5%;
            }

            // 23 inch
            @media(min-width: 1680px) {
                height: 54.8%;
            }

            div.h-line {
                width: 18%;
                height: 2px;
                background-color: #F26630;
            }

            div.rooms-data {
                width: 100%;
                padding-right: ${({ language, width }) => language === "English" && width > 990 && "24%"};
                padding-left: ${({ language }) => language === "العربية" && "24%"};
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                p {
                    margin-top: -0.4rem;
                    line-height: 1.5rem;
                    color: #797979;
                    text-align: ${({ language }) => language === "English" ? "left" : "right"};
                    @media(min-width: 1440px) {
                        font-size: 1.5rem;
                        margin-bottom: 3rem;
                    }
                }

                div.options {

                    div.option {
                        
                        height: 3.5;
                        margin: 1rem 0rem;
                        display: flex;
                        flex-direction: ${({ language }) => language === "English" ? "row" : "row-reverse"};
                        align-items: center;
                        @media(min-width: 1440px) {
                            margin-bottom: 1.45rem;
                        }
                        
                        div.circle {
                            width: 3rem;
                            height: 3rem;
                            border: 1px solid #a9a9a9;
                            border-radius: 50%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            transition: all 300ms ease;
                            
                        }
    
                        p.option-text {
                            margin: auto 1rem;
                            color: #000;
                            @media(min-width: 1440px) {
                                font-size: 1.6rem;
                            }
                        }

                        &:hover {
                            div.circle {
                                transform: scale(1.2);
                            }
                        }
                        
                        // 10 inch
                        @media(min-width: 1024px) {
                            div.circle {
                                width: 2rem;
                                height: 2rem;
                            }

                            p.option-text {
                                font-size: 0.9rem;
                                line-height: 1rem;
                            }
                        }
                        
                        // 12 inch
                        @media(min-width: 1280px) {
                            div.circle {
                                transform: scale(1.5);
                            }
                            
                            p.option-text {
                                font-size: 1rem;
                                line-height: 1.2rem;
                                margin-block: 1.1rem;
                            }
                        }


                        // 19 inch
                        @media(min-width: 1440px) {
                            div.circle {
                                transform: scale(1);
                                padding: 0.5rem;
                            }
                            
                            p.option-text {
                                font-size: 1.2rem;
                                line-height: 1.4rem;
                                margin-block: 1.1rem;
                            }
                        }

                        // 22 inch
                        @media(min-width: 1440px) {
                            div.circle {
                                transform: scale(1.2);
                                padding: 0.5rem;
                            }
                            
                            p.option-text {
                                font-size: 1.3rem;
                                line-height: 1.8rem;
                                margin-block: 1rem;
                            }
                        }
                    }
                }
                

                // 10 inch
                @media(min-width: 1024px) {
                    height: 97.5%;
                }

                // 12 inch
                @media(min-width: 1280px) {
                    height: 100%;
                }

                // 22 inch
                @media(min-width: 1680px) {
                    height: 102.3%;
                }

            }

            button {
                max-width: 55%;
                min-width: ${({ language }) => language === "العربية" && "55%"};
                align-self: ${({ language }) => language === "العربية" && "flex-end"};
                margin-top: 0.5rem;
                font-size: 1.1rem;
                font-weight: bold;
                padding: 0.7rem;
                background-color: #000;
                color: #fff;
                border: 0.5px solid #000;
                cursor: pointer;
                transition: all 500ms ease;

                a {
                    display: block;
                    margin: 0;
                    color: #fff;
                    text-decoration: none;
                    width: 100%;
                    height: 100%;
                }

                &:hover {
                    background-color: #F26630;
                    color: #fff;
                    border-color: #F26630;
                }

                // 10 inch
                @media(min-width: 1024px) {
                    font-size: 0.9rem;
                }

                // 22 inch
                @media(min-width: 1024px) {
                    font-size: 1.2rem;
                }

                // 19 inch
                @media(min-width: 1440px) and (max-width: 1600px) {
                    font-size: 1rem;
                }
            }
        }
    }

    div.title {
        width: 29%;
        height: 33%;
        position: absolute;
        bottom: 0;
        /* left: ${({ language, width }) =>
        language === "English" && width > 990 ? "27%"
            : language === "العربية" && width > 990 ? "43%"
                : ''
    }; */
        background-color: #F26630;
        color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        // 10 inch 
        @media(min-width: 1024px) {
            height: 30%;
            bottom: 12px;
        }

        // 12 inch
        @media(min-width: 1280px) {
            height: 30%;
            bottom: 16px;
        }

        // 15 inch 
        @media(min-width: 1366px) {
            bottom: 15px;
            left: ${({ language, width }) =>
                language === "English" && width > 990 ? "27%"
                    : language === "العربية" && width > 990 ? "44%"
                        : ''
            };
        }

        // 19 inch
        @media(min-width: 1440px) {
            left: ${({ language, width }) =>
                language === "English" && width > 990 ? "30.5%"
                    : language === "العربية" && width > 990 ? "40%"
                        : ''
            };
        }

        // 22 inch
        @media(min-width: 1680px) {
            bottom: 17px;
            left: ${({ language, width }) =>
                language === "English" && width > 990 ? "30.5%"
                    : language === "العربية" && width > 990 ? "40%"
                        : ''
            };
        }

        // 23 inch
        @media(min-width: 1920px) {
            width: 26%;
            bottom: 16px;
            left: ${({ language, width }) =>
                language === "English" && width > 990 ? "30.5%"
                    : language === "العربية" && width > 990 ? "43%"
                        : ''
            };
        }


        @media(max-width: 990px) {
            top: -50%;
            width: 45%;
            height: 25%;
            right: 0;
            left: 0;
            margin: auto;
            opacity: 0.8;
        }

        div {
            width: 80%;
            height: 70%;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            border: 1px solid #fff;
            text-align: center;

            h1 {
                font-size: 2.5rem;
                margin-bottom: -0.3rem;
            }
    
            p {
                font-size: large;
            }

            // 10 inch 
            @media(min-width: 1024px) {
                h1 {
                    font-size: 1.5rem;
                }

                p {
                    font-size: 1rem;
                }
            }

            // 12 inch
            @media(min-width: 1280px) {
                h1 {
                    font-size: 2rem;
                }

                p {
                    font-size: 1.1rem;
                }
            }

            // 22 inch
            @media(min-width: 1680px) {
                h1 {
                    font-size: 2.6rem;
                }

                p {
                    font-size: 1.4rem;
                }
            }
        }
    }
`

const CampCard = ({ camp, language, setLoading }) => {


    // Handle Rerender at screen width change: Check this answer for elaboration (https://stackoverflow.com/questions/19014250/rerender-view-on-browser-resize-with-react#:~:text=As%20of%20React,Flag)
    const [width, setWidth] = useState(0);
    useEffect(() => {
        setWidth(window.innerWidth);
        const handleResize = debounce(() => setWidth(window.innerWidth), 100);

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])
    return (

        <Container language={language}>
            <Card language={language} width={width}>

                <div className='camp-image'>
                    <Image
                        width={
                            width < 1400
                                ? 1000
                                : 1080
                        }
                        height={
                            width < 1400
                                ? 957
                                : 1295
                        }
                        src={camp.images[0]} alt=""
                    />
                </div>

                <div className='title'>
                    <div>
                        <h1>
                            {camp.name[0]}
                        </h1>
                        <p>{camp.location[0]}</p>
                    </div>
                </div>

                <div className='info'>
                    {
                        language === "English" && width > 990
                            ? <h1>
                                Our Camps Provide<br />
                                High Quality & affordable<br />
                                Accommodation
                            </h1>

                            : language === "العربية" && width > 990
                                ? <h1>
                                    المخيمات لدينا توفرعلى<br />
                                    جودة للإقامة باسعار مناسبة<br />
                                    .وخدمة رائعة
                                </h1>
                                : null
                    }

                    <div className='rooms'>
                        {
                            width > 990
                            && <div className='h-line' />
                        }
                        <div className='rooms-data'>
                            {
                                language === "English"
                                    ?
                                    <p>
                                        {camp.description[0]}
                                    </p>
                                    :
                                    <p>
                                        {camp.description[1]}
                                    </p>
                            }


                            <div className='options'>
                                <div className='option'>
                                    <div className='circle'><Check2 size={30} color="#a9a9a9" /></div>
                                    <p className='option-text'>
                                        {
                                            language === "English"
                                                ? `${camp.facilities.english[0]}`
                                                : `${camp.facilities.arabic[0]}`
                                        }
                                    </p>
                                </div>
                                <div className='option'>
                                    <div className='circle'><Check2 size={30} color="#a9a9a9" /></div>
                                    <p className='option-text'>
                                        {
                                            language === "English"
                                                ? `${camp.facilities.english[1]}`
                                                : `${camp.facilities.arabic[1]}`
                                        }
                                    </p>
                                </div>
                                <div className='option'>
                                    <div className='circle'><Check2 size={30} color="#a9a9a9" /></div>
                                    <p className='option-text'>
                                        {
                                            language === "English"
                                                ? `${camp.facilities.english[2]}`
                                                : `${camp.facilities.arabic[2]}`
                                        }
                                    </p>
                                </div>
                                <div className='option'>
                                    <div className='circle'><Check2 size={30} color="#a9a9a9" /></div>
                                    <p className='option-text'>
                                        {
                                            language === "English"
                                                ? `${camp.facilities.english[3]}`
                                                : `${camp.facilities.arabic[3]}`
                                        }
                                    </p>
                                </div>
                            </div>


                            <button onClick={() => setLoading(true)}>
                                <Link href={`/camp/${camp._id}`}>
                                    {
                                        language === "English"
                                            ? "Details & Booking"
                                            : "التفاصيل والحجز"
                                    }

                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </Card>
        </Container>
    )
}

export default CampCard