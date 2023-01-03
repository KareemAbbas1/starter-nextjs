import styled from 'styled-components';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FileEarmarkArrowUp } from "react-bootstrap-icons";
import axios from 'axios';






const Container = styled.div`
    max-width: 100vw;
    height: 130vh;
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    @media(max-width: 990px) {
        height: 68vh;
        margin-top: 0rem;
        padding-top: 2rem;
        background-color: #16171F;
        color: #fff;
    }
    @media(max-width: 600px) {
        padding-bottom: 2rem;
    }

    div.title {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 3rem;

        h1 {
            font-size: 2.5rem;
            @media(max-width: 600px) {
                font-size: 1.5rem;
            }
        }
        
        div.h-line {
            width: 5rem;
            height: 2px;
            background-color: #F26630;
        }

    }

    form.add-new-photos {
        width: 21%;
        position: absolute;
        left: 5%;
        top: 5%;
        padding: 0.4rem;
        border: 1px solid #000;
        border-radius: 5px;
        display: flex;
        justify-content: space-between;

        input {
            display: none;
        }

        label {
            background-color: #fff;
            display: flex;
            align-items: baseline;
            font-size: 0.75rem;
            border: 1px solid;
            border-radius: 5px;
            padding-block-start: 0.2rem;
            padding-inline-start: 0.5rem;
            padding-inline-end: 1rem;
            cursor: pointer;
            transition: all 300ms ease-in-out;

            &:hover {
                opacity: 0.7;
                border-color: #F26630;
            }
        }

        button {
            font-size: 1rem;
            font-weight: bold;
            background-color: #F26630;
            color: #fff;
            border: 1px solid #F26630;
            cursor: pointer;
            transition: all 300ms ease-in-out;

            &:hover {
                background-color: transparent;
                color: #000;
            }
        }
    }

    span.loading {
        position: absolute;
        left: 13%;
        top: 12%;
        font-size: 1.1rem;
        font-weight: bold;
    }

    div#upload-success {
        display: none;
        position: absolute;
        left: 13%;
        top: 12%;
        background-color: #00D100;
        color: #fff;
        padding: 0.4rem;
        border-radius: 5px;
    }

    div.row {
        width: 100vw;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 10px;
        grid-row-gap: 10px;

        div.img1 { grid-area: 1 / 1 / 2 / 2; }
        div.img2 { grid-area: 1 / 2 / 2 / 3; }
        div.img3 { grid-area: 2 / 1 / 3 / 2; }
        div.img4 { grid-area: 2 / 2 / 3 / 3; }
        div.img5 { grid-area: 1 / 3 / 3 / 5; }
        div.img6 { grid-area: 1 / 5 / 2 / 6; }
        div.img7 { grid-area: 2 / 5 / 3 / 6; }

        div.column {
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                cursor: pointer;
            }
        }

        @media(max-width: 990px) {
            display: flex;
            gap: 0;
            div.img1,.img2,.img3,.img4,
            .img5,.img6,.img7 {
                display: none;
            }
        }
    }

    div.row::after {
        content: "";
        display: table;
        clear: both;
    }

  

    // The modal Background
    div.modal {
        display: none;
        position: fixed;
        z-index: 1000;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow-x: auto;
        overflow-y: hidden;
        background-color: #16171F;
        @media(max-width: 990px) {
            display: block;
            position: relative;
            z-index: 100;
        }

    }

    div.modal-content {
        position: relative;
        margin: auto;
        padding: 0;
        width: 100%;
        max-width: 1200px;
        min-height: 100%;
        display: flex;
        flex-flow: column nowrap;
        overflow: hidden;



        img {
            height: 85vh;
            object-fit: contain;

            @media(max-width: 990px) {
                max-height: 47vh;
            }
            @media(max-width: 600px) {
                max-height: 43vh;
            }
        }

        div.indicators {
            height: 15%;
            width: 100%;
            position: absolute;
            bottom: 0;
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            justify-content: space-between;
            gap: 0.5rem;
            @media(max-width: 990px) {
                display: none;
            }

            div.column {
                max-width: 25%;
                height: 90%;
    
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: all 300ms ease;
                    @media(max-width: 600px) {
                        height: 80%;
                    }
                }
            }
        }


        form.change-image {
            color: #fff;
            position: absolute;
            top: 10%;
            z-index: 10;
            border: 1px solid #fff;
            border-radius: 5px;
            padding: 12px;

            label {
                border: 1px solid;
                padding-block-start: 1rem;
                padding-block-end: 0.7rem;
                padding-inline: 0.4rem;
                transition: all 300ms ease-in-out;
                cursor: pointer;

                &:hover {
                    background-color: #fff;
                    color: #000;
                }
            }

            input[type="file"] {
                display: none;
            }

            button {
                padding: 0.3rem;
                margin-left: 1rem;
                background-color: #F26630;
                color: #fff;
                border: 1px solid #F26630;
                cursor: pointer;
                transition: all 300ms ease-in-out;

                &:hover {
                    background-color: #fff;
                    color: #000;
                }
            }


            span.newImg-uploaded {
                display: none;
            }
        }
    }

    // Close Button
    span.close {
        color: #fff;
        position: absolute;
        top: 15px;
        right: 100px;
        font-size: 35px;
        font-weight: bold;
        z-index: 1000;

        &:hover,
        &:focus {
            color: #999;
            text-decoration: none;
            cursor: pointer;
        }

        @media(max-width: 990px) {
            display: none;
            /* top: 100px;
            right: 30px; */
        }
    }

    div.mySlides {
        display: none;

        img {
            width: 100%;
        }
    }

    div.cursor {
        cursor: pointer;
    }

    button.prev,
    .next {
        cursor: pointer;
        position: absolute;
        top: 50%;
        width: auto;
        padding: 16px;
        margin-top: -50px;
        background-color: transparent;
        color: #fff;
        font-weight: bold;
        font-size: 20px;
        transition: 500ms ease;
        border: none;
        border-radius: 0 3px 3px 0;
        user-select: none;
        -webkit-user-select: none;

        &:hover {
            background-color: rgba(0, 0, 0, 0.8);
        }
    }

    // Position the next button
    button.next {
        right: 0%;
        border-radius: 3px 0 0 3px;
    }

    div.numbertext {
        color: #f2f2f2;
        font-size: 12px;
        padding: 8px 12px;
        position: absolute;
        top: 0;
    }

    img {
        margin-bottom: -4px;
    }

    img.demo {
        opacity: 0.6;
        
        &:hover{
            opacity: 1;
        }
    }

    img.active {
        opacity: 1;
    }

    img.hover-shadow {
        transition: 300ms;

        &:hover {
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            opacity: 0.8;
        }
    }

`

const Gallery = ({ language }) => {


    // Fetch images
    const [allImages, setAllImages] = useState();
    const [addNew, setAddNew] = useState(false);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const res = await axios.get(`/api/images`)
                setAllImages(res.data)
            }
            catch (error) {
                alert(error);
            }
        }
        fetchImages();

    }, [addNew]);



    // Update images for admins
    const [user, setUser] = useState();
    const [files, setFiles] = useState();
    const [loading, setLoading] = useState(false);
    
    
    
    useEffect(() => {
        if (typeof window !== "undefined") {
            const loggedInUser = JSON.parse(localStorage.getItem("user"));
            setUser(loggedInUser)
        }
    }, []);


    // Upload new images
    const addNewImages = async (e) => {
        e.preventDefault();

        try {
            setLoading(!loading);
            const images = await Promise.all(
                Object.values(files).map(async (file) => {
                    const data = new FormData();
                    data.append("file", file);
                    data.append("upload_preset", "uploads");
                    const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/dqmqc0uaa/image/upload", data);

                    const { url } = uploadRes.data;
                    return url;
                })
            );




            const newImages = images.map(el => {
                return { url: el }
            });

            // console.log(newImages)
            await axios.post(`/api/admin/images`, newImages);
            setLoading(loading);
            document.getElementById("upload-success").style.display = "block";
            setTimeout(() => {
                document.getElementById("upload-success").style.display = "none";
            }, 1500);
            setAddNew(!addNew);
        }
        catch (error) {
            alert(error);
        }
    };


    // Change exsiting image
    const [newImgLoading, setNewImgLoading] = useState(false);

    const changeImage = async (e, imageId, successSpanId) => {
        e.preventDefault();

        try {
            setNewImgLoading(!newImgLoading);

            const data = new FormData();
            data.append("file", files);
            data.append("upload_preset", "uploads");
            const uploadImage = await axios.post("https://api.cloudinary.com/v1_1/dqmqc0uaa/image/upload", data)
            const { url } = uploadImage.data;



            await axios.patch(`/api/admin/images/${imageId}`, {
                url: url
            });
            setNewImgLoading(newImgLoading);
            document.getElementById(successSpanId).style.display = "inline";
            setTimeout(() => {
                document.getElementById(successSpanId).style.display = "none";
            }, 1500);
            setAddNew(!addNew);
        }
        catch (error) {
            alert(error);
        }
    };



    const openModal = () => {
        document.getElementById('myModal').style.display = 'block';
        document.querySelector("body").style.overflowY = "hidden";
    }

    const closeModal = () => {
        document.getElementById('myModal').style.display = 'none';
        document.querySelector("body").style.overflowY = "auto";
    }


    let slideIndex = 1;
    const showSlides = (n) => {
        if (typeof window !== "undefined" && allImages) {
            let i;
            let slides = document.getElementsByClassName('mySlides');
            if (n > slides.length) { slideIndex = 1 }
            if (n < 1) { slideIndex = slides.length }

            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = 'none';
            }

            if (slides) { slides[slideIndex - 1].style.display = "block" };
        }
    }

    useEffect(() => {
        showSlides(slideIndex);
    }, [])


    const plusSlides = (n) => {
        showSlides(slideIndex += n);
    }

    const currentSlide = (n) => {
        showSlides(slideIndex = n);
    }


    // Handle grid images
    const gridImages = allImages && allImages.slice(0, 7);


    return (
        <Container id='gallery-section'>
            <div className='title'>
                <h1>
                    {
                        language === "English"
                            ? "Photo Gallery"
                            : "معرض الصور"
                    }
                </h1>
                <div className='h-line' />

                {
                    user && (user.role === 'admin1' || user.role === 'admin2') &&
                    <>
                        <form onSubmit={(e) => addNewImages(e)} className='add-new-photos'>
                            <label htmlFor='upload-new-photos'>
                                <FileEarmarkArrowUp size={25} /> {
                                    typeof window !== "undefined"
                                        && document.getElementById("upload-new-photos")
                                        && document.getElementById("upload-new-photos").files.length > 0
                                        ? `${document.getElementById("upload-new-photos").files.length} photos chosen`
                                        : 'Click here to add new photos'
                                }
                            </label>
                            <input
                                id="upload-new-photos"
                                type='file'
                                multiple
                                onChange={(e) => setFiles(e.target.files)}
                            />
                            <button type="submit">Upload</button>
                        </form>
                        {
                            loading === true &&
                            <span className='loading'>Loading...</span>
                        }
                        <div id='upload-success'>Done &#10003;</div>
                    </>
                }
            </div>

            <div className='row'>
                {
                    gridImages && gridImages.map(image => (
                        <div key={gridImages.indexOf(image) + 1} className={`column img${gridImages.indexOf(image) + 1}`}>
                            <Image
                                layout='responsive'
                                width={0}
                                height={0}
                                src={image.url}
                                onClick={() => { openModal(); currentSlide(gridImages.indexOf(image) + 1); }} alt='' className='hover-shadow cursor'
                            />
                        </div>
                    ))
                }
            </div>

            <div id='myModal' className='modal'>
                <span className='close cursor' onClick={closeModal}>&times;</span>
                <div className='hidden-box' />

                <div className='modal-content'>
                    {
                        allImages && allImages.map(image => (
                            <div key={allImages.indexOf(image) + 1} className='mySlides'>
                                <div className='numbertext'>{allImages.indexOf(image) + 1 + '/' + allImages.length}</div>
                                {
                                    user && (user.role === 'admin1' || user.role === 'admin2') &&
                                    <form
                                        onSubmit={(e) => changeImage(e, image._id, `${allImages.indexOf(image)}span`)}
                                        className='change-image'
                                    >
                                        <label htmlFor={`imgNum${allImages.indexOf(image)}id`}>
                                            <FileEarmarkArrowUp size={25} /> {
                                                typeof window !== "undefined"
                                                    && document.getElementById(`imgNum${allImages.indexOf(image)}id`)
                                                    && document.getElementById(`imgNum${allImages.indexOf(image)}id`).files.length > 0
                                                    ? `${document.getElementById(`imgNum${allImages.indexOf(image)}id`).files.length} photo chosen`
                                                    : 'Choose photo'
                                            }
                                        </label>
                                        <input
                                            type='file'
                                            id={`imgNum${allImages.indexOf(image)}id`}
                                            onChange={(e) => setFiles(e.target.files[0])}
                                        />
                                        <button type="submit">
                                            upload
                                        </button>

                                        {
                                            newImgLoading === true &&
                                            <span>Loading...</span>
                                        }
                                        <span
                                            id={`${allImages.indexOf(image)}span`}
                                            className='newImg-uploaded'
                                        >Done</span>
                                    </form>
                                }
                                <Image layout='fill' src={image.url} alt='' />
                            </div>
                        ))
                    }

                    <button className="prev" onClick={() => plusSlides(-1)}>&#10094;</button>
                    <button className="next" onClick={() => plusSlides(1)}>&#10095;</button>
                </div>
            </div>
        </Container>
    )
}

export default Gallery