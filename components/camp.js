import styled from 'styled-components';



export const Container = styled.div`
    max-width: 100vw;
    min-height: 100vh;
    margin-bottom: 5rem;
    padding-top: 8rem;
    padding-inline: 2rem;
    display: flex;
    flex-direction: ${({ language }) => language === "English" ? "row" : "row-reverse"};
    justify-content: space-between;
    gap: 1.5rem;

    // 19 inch
    @media(min-width: 1440px) {
        padding-inline: 5rem;
    }

    // 22 inch
    @media(min-width: 1680px) {
        padding-inline: 10%;
    }

    // 23 inch
    @media(min-width: 1920px) {
        padding-inline: 15%;
    }

    @media(max-width: 600px) {
        flex-direction: column;
        padding-inline: 1rem;
    }

    div.info-container {
        width: 65%;
        min-height: 100vh;
        display: flex;
        flex-flow: column nowrap;
        @media(max-width: 600px) {
            width: 100%;
        }


        div.title {
            display: flex;
            flex-direction: column;
            align-items: ${({ language }) => language === "English" ? "flex-start" : "flex-end"};
            text-align: ${({ language }) => language === "English" ? "left" : "right"};

            h1 {
                margin-top: 0;
            }

            div.title-info {
                height: fit-content;
                display: flex;
                flex-direction: ${({ language }) => language === "English" ? "row" : "row-reverse"};
                align-items: baseline;
                justify-content: space-between;
                margin-top: -10px;
                margin-bottom: 1rem;

                p {
                    margin: 0 0.3rem;
                }
            }
        }


        // Tabs
        div.info-tabs {
            display: flex;
            flex-direction: ${({ language }) => language === "English" ? "row" : "row-reverse"};
            margin-top: 4rem;

            div.tab {
                height: 3rem;
                margin-right: 0.5rem;
                position: relative;
                background-color: #fff;
                border: 1px dashed #ccc;
                border-radius: 5px;
                cursor: pointer;
                transition: all 300ms ease-in-out;

                h5 {
                    color: #000;
                    font-size: 1.1rem;
                    margin: 0;
                    padding: 1rem;
                    cursor: pointer;
                    @media(max-width: 600px) {
                        font-size: 0.9rem;
                        padding: 0.9rem 0.1rem;
                    }
                }

                &:hover {
                    background-color: #F26630;
                    border: 1px solid #F26630;
                    h5 {
                        color: #fff;
                    }
                }

                button {
                    width: 100%;
                    border: none;
                    background: none;
                }
            }

            div.active-tab {
                background-color: #F26630;
                border: 1px solid #F26630;

                h5 {
                    color: #fff;
                }

                div.pointer {
                    width: 1rem;
                    height: 1rem;
                    position: absolute;
                    left: 0;
                    right: 0;
                    margin: auto;
                    bottom: -10%;
                    background-color: #F26630;
                    transform: rotate(45deg);
                }
            }
            
        }

        div.tabs-content {
            padding-top: 2rem;
            min-height: 40vh;
            text-align: ${({ language }) => language === "English" ? "left" : "right"};

            div.tab-content {
                display: none;
            }
    
            div.active-tab-content {
                display: block;

                div.property-highlights {
                    div {
                        display: flex;
                        flex-direction: ${({ language }) => language === "English" ? "row" : "row-reverse"};
                        align-items: center;
                        border-bottom: 1px solid #ccc;
                        padding: 1rem 0;

                        img {
                            @media(min-width: 1024px) {
                                transform: scaleY(0.35);
                            }
                        }

                        p {
                            margin-inline: 0.5rem;
                        }
                    }

                    div.activities {
                        display: block;
                    }
                }
            }
        } 

    }


    // Booking Bar
    div.booking {
        width: 35%;
        max-height: 155vh;
        padding-inline: 1.5rem;
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        display: flex;
        flex-direction: column;
        align-items: ${({ language }) => language === "English" ? "flex-start" : "flex-end"};
        text-align: ${({ language }) => language === "English" ? "left" : "right"};
        border: 1px dashed #ccc;

        @media(min-width: 1450px) {
            height: fit-content;
            padding-bottom: 3rem;
        }
        @media(max-width: 600px) {
            width: 100%;
            padding-inline: 0rem;
            border: none;
            border-top: 1px dashed #ccc;
        }
    
        div.date {
            width: 100%;
            div {
                max-width: 100%;
                height: 4rem;
                margin-bottom: 1rem;
                padding-inline: 0.5rem;
                display: flex;
                flex-direction: ${({ language }) => language === "English" ? "row" : "row-reverse"};
                align-items: center;
                justify-content: space-between;
                background-color: #f8f8f8;
                border-radius: 5px;

                input {
                    padding: 0.3rem;
                    font-size: 1rem;
                }
            }
        }

        form {
            width: 100%;
            label {
                cursor: pointer;
            }

            div.rooms {
                width: 100%;
                margin-bottom: 2rem;
                padding-bottom: 2rem;
                border-top: 1px solid #ccc;
                h4 {
                    display: flex;
                    flex-direction: ${(language) => language === "English" ? 'row' : 'row-reverse'};
                    justify-content: space-between;
                    padding-bottom: 0.5rem;
                    border-bottom: 1px dashed #ccc;
                }
                p#rooms-placeholder {
                    font-size: 0.82rem;
                }
                div#available-rooms {
                    width: 100%;
                    display: none;
                    
                    div.room {
                        width: 100%;
                        height: fit-content;
                        display: flex;
                        flex-direction: ${({ language }) => language === "English" ? "row" : "row-reverse"};
                        justify-content: space-between;
                        align-items: center;
                        border-bottom: 1px dashed #ccc;
                        margin-bottom: 1rem;
                        padding-bottom: 0.5rem;
                        
                        p {
                            margin: 0.3rem 0;
                            font-size: 0.9rem;
                        }
                        
                        div.currently-available {
                            max-width: 30%;
                            display: flex;
                            flex-flow: row wrap;
                            gap: 0.5rem;
                            font-size: 0.8rem;
                            div{
                                width: 1.5rem;
                                padding: 3px;
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                                border: 1px solid #ccc;
                                border-radius: 5px;
                                cursor: pointer;
                                input {
                                    cursor: pointer;

                                    &:disabled {
                                        /* opacity: 0.2; */
                                    }
                                }
                            }
                        }
                    }
                    div.room:nth-child(3) {
                        padding-bottom: 1rem;
                        border-bottom: 1px solid #ccc;
                    }
                }
                div.adults-count,
                div.children-count {
                    width: 100%;
                    height: 4rem;
                    display: flex;
                    flex-direction: ${({ language }) => language === "English" ? "row" : "row-reverse"};
                    justify-content: space-between;
                    align-items: center;
        
                    input {
                        width: 4rem;
                        height: 1.7rem;
                    }
                }
            }
        
            div.extra-facilities {
                width: 100%;
                margin-bottom: 2rem;
                padding-bottom: 1rem;
                border-bottom: 1px dashed #ccc;
                label {
                    margin-inline: 0.5rem;
                }
            }
            
            button {
                width: 100%;
                font-size: 1.2rem;
                font-weight: bold;
                height: 3rem;
                color: #fff;
                background-color: #F26630;
                border: none;
                transition: all 300ms ease-in-out;
                cursor: pointer;
                &:hover {
                    opacity: 0.5;
                }
                &:disabled {
                    opacity: 0.5;
                }
            }
        }
    }

`