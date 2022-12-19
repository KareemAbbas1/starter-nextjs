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
    @media(min-width: 1400px) {
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
            text-align: ${({ language }) => language === "English" ? "left" : "right"};
            
            @media(min-width: 600px) {
                align-items: ${({ language }) => language === "English" ? "flex-start" : "flex-end"};
            }
            
            div.title-info {
                width: 40%;
                height: fit-content;
                display: flex;
                align-items: center;
                justify-content: space-between;

                div {
                    height: 3rem;
                    margin-bottom: 1.5rem;
                    max-width: 33%;
                    h5 {
                        margin-block: 0;
                        margin-bottom: 0.5rem;
                        color: #aaa;
                    }

                    p {
                        margin-block: 0;
                        margin-bottom: 1.5rem;
                    }
                    @media(max-width: 600px) {
                        min-width: 60%;
                    }
                }

                div.price,
                div.duration {
                    padding-right: ${({ language }) => language === "English" && "3rem"};
                    padding-left: ${({ language }) => language === "العربية" && "3rem"};
                    border-right: ${({ language }) => language === "English" && "1px dashed #ccc"};
                    border-left: ${({ language }) => language === "العربية" && "1px dashed #ccc"};

                    @media(max-width: 990px) {
                        padding-right: ${({ language }) => language === "English" && "1rem"};
                        margin-right: ${({ language }) => language === "English" && "1rem"};
                        padding-left: ${({ language }) => language === "العربية" && "1rem"};
                        margin-left: ${({ language }) => language === "العربية" && "1rem"};
                        border-right: ${({ language }) => language === "English" && "1px dashed #ccc"};
                        border-left: ${({ language }) => language === "العربية" && "1px dashed #ccc"};
                    }
                }
            }

            h1 {
                margin-top: 0;
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
            }
        } 

    }

    div.booking {
        width: 35%;
        max-height: 110vh;
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
                
            }
            
        }

        form {
            width: 100%;
            label {
                cursor: pointer;
            }

            div.tickets {
                width: 100%;
                margin-bottom: 2rem;
                padding-bottom: 2rem;
                border-bottom: 1px dashed #ccc;
                div.adults-count,
                div.children-count {
                    width: 100%;
                    height: 4rem;
                    display: flex;
                    flex-direction: ${({ language }) => language === "English" ? "row" : "row-reverse"};
                    justify-content: space-between;
                    align-items: center;
        
                    select {
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
                    cursor: auto;
                }
            }
        }
    }

`

export const AccordionButton = styled.button`
  width: 100%;
  display: flex;
  flex-direction: ${({ language }) => language === "English" ? "row" : "row-reverse"};
  align-items: center;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid rgb(207, 207, 207);
  cursor: pointer;

  h2 {
    margin: 0.7rem 0rem;
  }

  div.arrow {
    margin-inline: 1rem;
    transition: all 300ms ease-in-out;
  }
`
export const AccordionPanel = styled.div`
  display: none;
  overflow: hidden;
`