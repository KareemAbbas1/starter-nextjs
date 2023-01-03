import styled from "styled-components";
import Image from "next/image";

const Section = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    display: block;
    justify-content: center;
    align-items: center;
    text-align: center;
    overflow: hidden;
    /* background-color: blue; */

    img {
        object-fit: fill;
    }



    @media(max-width: 990px) {
        height: 80vh;
        text-align: center;

        img {
            height: 80vh;
            object-fit: cover;
        }
    }

    @media(max-width: 600px) {
        height: 75vh;

        img {
            height: 75vh;
        }
    }

    /* video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        pointer-events: none;    
    } */
`

// const Video = styled.video`
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     pointer-events: none;
// `

const Container = styled.div`
    position: relative;
    padding-inline: 33vw;
    height: 31vh;
    bottom: calc(50vh + 25vh);
    z-index: 1;

    span.head-line {
        display: block;
        color: #fff;
        font-size: 3.3rem;
        font-weight: 700;
        line-height: 4.3rem;
        margin-bottom: 0.7rem;
    }

    div {
        height: 0.15rem;
        background-color: #F26630;
    }

    span.text-white {
        display: block;
        color: #fff;
        font-size: ${({ language }) => language === "English" ? "1.4rem" : "1.5rem"};
        margin-block: 1.3rem;
        line-height: 1.6rem;
        font-weight: normal;
    }

    button {
        font-size: ${({ language }) => language === "English" ? "1.4rem" : "1.7rem"};
        font-weight: 500;
        padding: ${({ language }) => language === "English" ? "0.6rem" : "0.4rem 2rem"};
        background-color: transparent;
        color: #fff;
        border: 2px solid #F26630;
        cursor: pointer;
        transition: background-color 500ms ease;

        &:hover {
            background-color: #F26630;
        }
    }


    // 22 inch
    @media(min-width: 1680px) and (max-width: 1690px) {
        padding-inline: 31vw;
        bottom: calc(50vh + 11vh);

        span.head-line {
            font-size: 3rem;
        }
    }

    // 19 inch to 12 inch
    @media(min-width: 1280px) and (max-width: 1450px) {
        bottom: calc(50vh + 13vh);
        padding-inline: 32vw;

        span.head-line {
            font-size: 2.5rem;
            line-height: 4rem;
        }

        span.text-white {
            font-size: ${({ language }) => language === "English" ? "1.1rem" : "1.4rem"};
            margin-block: 1rem;
        }

        button {
            font-size: ${({ language }) => language === "English" ? "1.1rem" : "1.5rem"};
            padding: ${({ language }) => language === "English" ? "0.4rem" : "0.4rem 1rem"};
        }
    }

    // 15 inch to 12 inch
    @media(min-width: 1280px) and (max-width: 1380px) {
        bottom: calc(50vh + 24vh);
        padding-inline: 31vw;
    }

    // 12 inch 
    @media(min-width: 1280px) and (max-width: 1290px) {
        bottom: calc(50vh + 13vh);
        padding-inline: 30vw;
    }



    // 10 inch
    @media(min-width: 1024px) and (max-width: 1030px) {
        bottom: calc(50vh + 21vh);
        padding-inline: 31.5vw;

        span.head-line {
            font-size: ${({ language }) => language === "English" ? "1.8rem" : "1.7rem"};
            line-height: 2.3rem;
        }

        span.text-white {
            font-size: ${({ language }) => language === "English" ? "0.8rem" : "1rem"};
            margin-block: 0.7rem;
            line-height: 1.3rem;
        }

        button {
            font-size: ${({ language }) => language === "English" ? "0.75rem" : "1rem"};
            padding: ${({ language }) => language === "English" ? "0.3rem" : "0.3rem 0.6rem"};
        }
    }

    

    @media(max-width: 990px) {
        bottom: calc(40vh + 13vw);
        padding-inline: 22vw;

        span.head-line {
            font-size: 2.1rem;
            line-height: 3rem;
        }

        span.text-white {
            font-size: 1rem;
            margin-block: 0.9rem;
        }

        button {
            font-size: 0.9rem;
            padding: ${({ language }) => language === "English" ? "0.5rem" : "0.4rem 1rem"};
        }
    }

    @media(min-width: 768px) and (max-width: 780px) {
        padding-inline: 20vw;
    }

    @media(max-width: 600px) {
        bottom: calc(40vh + 4vw);
        padding-inline: 17vw;

        span.head-line {
            font-size: 1.2rem;
            line-height: 1.5rem;
        }

        span.text-white {
            font-size: 0.5rem;
            line-height: 0.7rem;
            margin-block: 0.5rem;
        }

        button {
            font-size: 0.8rem;
            padding: 0.3rem;
        }
    }
`

const Hero = ({ language }) => {
    return (
        <Section language={language} id="hero-section">
            <Image
                priority
                width={1920}
                height={1200}
                layout="intrinsic"
                src="https://res.cloudinary.com/dqmqc0uaa/image/upload/c_scale,h_1200,w_1920/v1672458034/uploads/nqavh7hcobbwb9sserer.png" alt="Image for mount Sinai"
            />
            <Container language={language}>
                <span className="head-line"> {language === "English" ? "Your Favorite Agency for" : "الاختيار الافضل للسياحة داخل مصر"}
                    <br></br>
                    {language === "English" ? "Traveling Around Egypt" : "وقضاء عطلة مميزة بافضل سعر"}
                </span>

                <div />

                <span className="text-white">
                    {
                        language === "English"
                            ? "It is a long established fact that a reader will be distracted by the"
                            : "اذا كنت من محبي السفر والاستكشاف وترغب في الاستمتاع بعطلة "
                    }
                    <br></br>
                    {
                        language === "English"
                            ? "reader will be distracted by the."
                            : "نهاية الاسبوع ، فانت في المكان الصحيح"
                    }

                </span>
                <button onClick={() => {
                    window.scrollTo({ top: document.getElementById('hero-section').offsetHeight - 10 });
                }}>
                    {language === "English" ? "Find Out More" : "اعرف اكثر"}
                </button>
            </Container>
        </Section>
    )
}

export default Hero