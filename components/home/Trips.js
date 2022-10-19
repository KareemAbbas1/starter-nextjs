import styled from "styled-components";
import TripsSlider from "../sliders/TripsSlider";




const Container = styled.div`
    max-width: 100VW;
    height: 100vh;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    position: relative;
    padding-inline: 3rem;
    padding-top: 3rem;
    overflow: hidden;

    h1 {
        font-size: 2.5rem;
        margin-bottom: 2rem;
        @media(max-width: 600px) {
            font-size: 1.5rem;
        }
    }

    @media(min-width: 1400px) {
        margin-inline: 15rem;
        max-height: 70vh;
    }

    @media(max-width: 990px) {
        height: 55vh;
        padding-inline: 2rem;
    }
    @media(max-width: 600px) {
        height: 80vh;
    }
`


const Line = styled.div`
    width: 6rem;
    height: 2px;
    background-color: #F26630;
`



const Trips = ({ language, trips }) => {
    return (
        <Container id='trips-section' language={language}>
            {
                language === "English"
                    ? <h1>Most Popular Trips</h1>
                    : <h1>الرحلات الاعلى تقييم</h1>
            }
            <Line />
            
            <TripsSlider trips={trips} language={language} />
        </Container>
    )
}

export default Trips