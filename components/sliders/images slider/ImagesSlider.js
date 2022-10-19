import styles from "../../../styles/ImagesSlider.module.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { CaretLeft, CaretRight } from "react-bootstrap-icons";




const Arrow = styled.div`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    display: flex;
    background-color: #fff;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    right: 90%;
    left: 90%;
    z-index: 10;
    opacity: 0.3;
    cursor: pointer;
    transition: all 500ms ease;
    &:hover {
        opacity: 0.5;
    }
    @media(max-width: 600px) {
        display: none;
    }
`


const ImagesSlider = ({ images }) => {


    const [slideImages, setSlideImages] = useState([]);

    useEffect(() => {
        images && setSlideImages(images);
    }, [images])



    const properties = {
        autoplay: false,
        transitionDuration: 300,
        prevArrow: <Arrow direction='left'><CaretLeft color="#000" /></Arrow>,
        nextArrow: <Arrow direction='right'><CaretRight color="#000" /></Arrow>,
        scale: 0.4,
        indicators: i => (<div className={styles.indicator} style={{ backgroundImage: `url(${slideImages[i]})` }}></div>)
    };

    return (
        <Slide {...properties} >
            {slideImages.map((each, index) => (
                <div key={index} className={styles.eachSlide}>
                    <div style={{ backgroundImage: `url(${each})` }}></div>
                </div>
            ))}
        </Slide>
    )
}

export default ImagesSlider