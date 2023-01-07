import { useState, useEffect } from "react";
import styled from 'styled-components';
import { CaretLeft, CaretRight } from "react-bootstrap-icons";
import Card from '../Card';
import CampCard from "../CampCard";
import debounce from 'lodash/debounce';



const Container = styled.div`
    max-width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: relative;
    overflow: hidden;
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
    &:disabled {
        opacity: 0.5;
    }
    &:hover {
        opacity: 0.8;
    }

    // 22 inch 
    @media(min-width: 1680px) {
        left: ${props => props.direction === 'left' && '8%'};
        right: ${props => props.direction === 'right' && '8%'};
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
`

const Slider = ({ camps, language, setLoading }) => {

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
        else if (direction === 'right') {
            setSlideIndex(camps && slideIndex + 2 <= camps.length ? slideIndex + 1 : 0);
        }
    }


    return (
        <>
            {
                slideIndex > 0 &&
                <Arrow
                    direction='left'
                    dimensions={
                        width > 600 ? "3.5rem"
                            : width <= 600 ? '3rem'
                                : ""
                    }
                    border="dashed"
                    borderRadius="50%"
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
                        width > 1400 ? slideIndex * 4
                        : width > 990 ? slideIndex * 4.13
                            : width > 600 ? slideIndex * 3
                                : slideIndex
                    }
                >
                    <Slide>
                        {
                            camps && width > 600 
                            ? camps.map(camp => (
                                <CampCard key={camp._id} camp={camp} language={language} setLoading={setLoading}/>
                            ))

                                : camps && width <= 600 
                                ? camps.map(camp => (
                                    <Card key={camp._id} camp={camp} language={language} setLoading={setLoading}/>
                                ))

                                    : null

                        }
                    </Slide>
                </Wrapper>
            </Container>

            {

                camps && slideIndex + 1 < camps.length
                &&
                <Arrow
                    id='right-arrow'
                    direction="right"
                    dimensions={
                        width > 600 ? "3.5rem"
                            : width <= 600 ? '3rem'
                                : "2rem"
                    }
                    border="dashed"
                    borderRadius="50%"
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