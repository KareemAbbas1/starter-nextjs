import styled from "styled-components";
import Image from "next/image";

const Section = styled.section`
    position: relative;
    max-width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    /* justify-content: ${({ language }) => language === "العربية" ? "right" : "left"}; */
    align-items: center;
    text-align: center;
    /* text-align: ${({ language }) => language === "العربية" ? "right" : "left"}; */
    overflow: hidden;

    // 10 inch 
    /* @media(min-width: 1024px) {
        justify-content: center;
    } */


    @media(max-width: 990px) {
        min-height: 80vh;
        /* justify-content: center; */
        text-align: center;
    }

    @media(max-width: 600px) {
        min-height: 75vh;
    }

    video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        pointer-events: none;    
    }
`

const Video = styled.video`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
`

const Container = styled.span`
    padding-inline: 4rem;
    z-index: 1;

    h1 {
        color: #fff;
        font-size: ${({ language }) => language === "English" ? "2.5rem" : "2.7rem"};
        line-height: 3.5rem;
        margin-bottom: 0.3rem;
    }

    div {
        height: 0.15rem;
        background-color: #F26630;
    }

    h3 {
        color: #fff;
        font-size: ${({ language }) => language === "English" ? "1.1rem" : "1.5rem"};
        margin: ${({ language }) => language === "العربية" ? "0.7rem 0rem" : ""};
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


    // 10 inch
    @media(min-width: 1024px) {
        text-align: center;
        h1 {
            font-size: ${({ language }) => language === "English" ? "2rem" : "2.2rem"};
        }

        h3 {
            font-size: ${({ language }) => language === "English" ? "0.9rem" : "1.3rem"};
        }

        button {
            font-size: ${({ language }) => language === "English" ? "0.9rem" : "1.2rem"};
            padding: ${({ language }) => language === "English" ? "0.4rem" : "0.3rem 0.8rem"};
        }
    }

    // 19 inch
    @media(min-width: 1440px) {
        padding-inline: 6rem;

        h1 {
            font-size: 2.6rem;
            line-height: 3.5rem;
        }

        h3 {
            font-size: 1.1rem;
        }

        button {
            font-size: 1rem;
        }
    }

    // 22 inch
    @media(min-width: 1680px) {

        h1 {
            font-size: 3.2rem;
            line-height: 4.8rem;
        }

        h3 {
            font-size: 1.3rem;
        }

        button {
            font-size: 1.3rem;
        }
    }

    @media(max-width: 990px) {
        padding-top: 4rem;

        h1 {
            font-size: 2.1rem;
            line-height: 3rem;
        }

        h3 {
            font-size: 1rem;
        }

        button {
            font-size: 1.1rem;
        }
    }

    @media(max-width: 600px) {
        h1 {
            font-size: 1.2rem;
            line-height: 1.8rem;
        }

        h3 {
            font-size: 0.5rem;
        }

        button {
            font-size: 0.8rem;
            padding: 0.3rem;
        }
    }
`

const Hero = ({ language, onLinkClick }) => {
    return (
        <Section language={language} id="hero-section">
            <Image layout="fill" src="https://res.cloudinary.com/dqmqc0uaa/image/upload/c_scale,h_1057,w_1280/v1672178208/uploads/bg-masthead_1_1_yvvplw.png" alt="Image for mount Sinai" />
            {/* <video autoPlay={true} muted loop src="https://res.cloudinary.com/dqmqc0uaa/video/upload/v1666049102/video_mqp2vl.mp4" /> */}
            <Container language={language}>
                <h1> {language === "English" ? "Your Favorite Agency for" : "الاختيار الافضل للسياحة داخل مصر"}
                    <br></br>
                    {language === "English" ? "Traveling Around Egypt" : "وقضاء عطلة مميزة بافضل سعر"}
                </h1>

                <div />

                <h3 className="text-white">
                    {language === "English"
                        ? "It is a long established fact that a reader will be distracted by the"
                        : "اذا كنت من محبي السفر والاستكشاف وترغب في الاستمتاع بعطلة "
                    }
                    <br></br>
                    {language === "English"
                        ? "reader will be distracted by the."
                        : "نهاية الاسبوع ، فانت في المكان الصحيح"}

                </h3>
                {/* <button goto='trips-section' onClick={(e) => onLinkClick(e)}> */}
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