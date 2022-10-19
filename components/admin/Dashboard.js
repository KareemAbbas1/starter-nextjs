import styled from "styled-components"


export const Container = styled.div`
    max-width: 100vw;
    min-height: 100vh;
    padding-top: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    direction: rtl;

    @media(min-width: 1400px) {
        padding-top: 5rem;
    }

    div.side-bar {
        width: 20%;
        height: 100vh;
        border: 1px solid #ccc;

        div.tabs {
            display: flex;
            flex-direction: column;

            h4 {
                padding-right: 0.5rem;
                margin-bottom: 0;
                padding-bottom: 1rem;
                color: grey;
                border-bottom: 1px solid #ccc;
            }

            div.tab {
                height: 3rem;
                position: relative;
                background-color: #fff;
                border-bottom: 1px dashed #ccc;
                cursor: pointer;
                transition: all 300ms ease-in-out;

                h5 {
                    color: #000;
                    font-size: 1.1rem;
                    margin: 0;
                    padding: 1rem;
                    text-align: right;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    cursor: pointer;
                    @media(max-width: 600px) {
                        font-size: 0.9rem;
                        padding: 0.9rem 0.1rem;
                    }
                }

                &:hover {
                    background-color: #000;
                    border-color: #000;
                    h5 {
                        color: #fff;
                    }
                }

                button {
                    width: 100%;
                    border: none;
                    background: none;
                }


                span.notification {
                    font-size: 0.8rem;
                    padding: 3px;
                    background-color: red;
                    color: #fff;
                    border-radius: 5px;
                }
            }

            div.active-tab {
                background-color: #000;
                border: 1px solid #000;

                h5 {
                    color: #fff;
                }
            }
        }
    }


    div.main-body {
        width: 80%;
        min-height: 100vh;

        div.tabs-content {
            width: 100%;
            min-height: 100vh;

            div.tab-content {
                display: none;
            }
    
            div.active-tab-content {
                display: block;
            }
        } 
    }
`