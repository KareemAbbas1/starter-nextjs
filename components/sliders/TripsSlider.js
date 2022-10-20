import { useState, useEffect } from "react";
import styled from 'styled-components';
import { CaretLeft, CaretRight, Whatsapp, TelephoneFill } from "react-bootstrap-icons";
import Card from '../Card';
import debounce from 'lodash/debounce';



const Container = styled.div`
    min-width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: relative;
    overflow: hidden;

    @media(max-width: 990px) {
        overflow-x: scroll;
    }
    @media(max-width: 600px) {
        width: 100%;
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
    @media(max-width: 990px) {
        gap: 0.5rem;
    }
`

const Slider = ({ trips, cars, language }) => {

    // Handle Rerender at screen width change: Check this answer for elaboration (https://stackoverflow.com/questions/19014250/rerender-view-on-browser-resize-with-react#:~:text=As%20of%20React,Flag)
    const [width, setWidth] = useState(0);
    useEffect(() => {
        setWidth(window.innerWidth)
        const handleResize = debounce(() => setWidth(window.innerWidth), 10)

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction) => {
        if (direction === 'left') {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 0);
        }

        // Trips
        else if (direction === 'right' && trips && width > 990) {
            setSlideIndex(trips && slideIndex + 5 <= trips.length ? slideIndex + 1 : 0);
        }
        else if (direction === 'right' && trips && width <= 990) {
            setSlideIndex(trips && slideIndex + 2 <= trips.length ? slideIndex + 1 : 0);
        }
        else if (direction === 'right' && trips && width <= 600) {
            setSlideIndex(trips && slideIndex - 2 < trips.length ? slideIndex + 1 : 0);
        }

    }


    return (
        <>
            {
                slideIndex > 0 &&
                <Arrow
                    direction='left'
                    dimensions={
                        cars ? "2.2rem"
                            : "2.7rem"
                    }
                    border="solid"
                    borderRadius="5px"
                    bgColor='#fff'
                    onClick={() => handleClick("left")}
                >
                    <CaretLeft color='#000' />
                </Arrow>
            }
            <Container>
                <Wrapper
                    width={width}
                    slideIndex={
                        trips && (width > 990) ? slideIndex
                            : slideIndex
                    }
                >
                    <Slide id='slide'>
                        {
                            trips && trips.map(trip => (
                                <Card key={trip._id} trip={trip} language={language} />
                            ))
                        }
                    </Slide>
                </Wrapper>
            </Container>

            {
                (
                    (slideIndex + 4 < trips.length && width > 990)
                    || (slideIndex + 3 < trips.length && width <= 990)
                    || (slideIndex + 1 < trips.length && width <= 600)
                )
                &&
                <Arrow
                    direction="right"
                    dimensions={
                        cars ? "2.2rem"
                            : "2.7rem"
                    }
                    border="solid"
                    borderRadius="5px"
                    bgColor='#fff'
                    onClick={() => handleClick("right")}
                >
                    <CaretRight color='#000' />
                </Arrow>
            }
        </>
    )
}

export default Slider