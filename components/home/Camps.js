import styled from "styled-components";
import CampsSlider from "../sliders/CampsSlider";




const Container = styled.div`
    max-width: 100VW;
    min-height: 100vh;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    position: relative;
    padding-inline: 3rem;
    overflow: hidden;

    h1 {
        font-size: 2.5rem;
        margin-bottom: 2rem;
    }

    @media(min-width: 1400px) {
        padding-inline: 15rem;
    }

    @media(max-width: 990px) {
        max-height: 100vh;
        padding-inline: 1.2rem;
        margin-top: 2rem;
    }
    @media(max-width: 768px) {
        max-height: 110vh;
    }

    @media(max-width: 600px) {
        max-height: 60vh;
        margin-top: 3rem;
        h1 {
            font-size: 1.5rem;
        }
    }
`


const Line = styled.div`
    width: 6rem;
    height: 1px;
    margin-bottom: 4rem;
    background-color: #F26630;

    @media(max-width: 990px) {
        margin-bottom: 0rem;
    }
`
const Camps = ({ language, camps }) => {
    return (
        <Container id='camps-section'>
            {
                language === "English"
                    ? <h1>Recommended Camps</h1>
                    : <h1>افضل المخيمات للحجز</h1>
            }
            <Line />

            <CampsSlider camps={camps} language={language} />
        </Container>
    )
}

export default Camps