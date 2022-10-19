import styled from "styled-components";


export const Container = styled.div`
max-width: 100vw;
    min-height: 100vh;
    position: relative;
    margin-bottom: 5rem;
    padding-top: 8rem;
    padding-inline: 2rem;
    display: flex;
    flex-direction: ${({ language }) => language === "English" ? "row" : "row-reverse"};
    justify-content: space-between;
    gap: 1.5rem;

    @media(min-width: 1400px) {
        padding-inline: 15rem;
    }
    @media(max-width: 600px) {
        flex-direction: column;
        padding-inline: 1rem;
    }
 

    div.order-data {
        width: 65%;
        min-height: 100vh;
        display: flex;
        flex-flow: column nowrap;
        align-items: ${({ language }) => language === "العربية" && "flex-end"};
        text-align: ${({ language }) => language === "العربية" && "right"};
        @media(max-width: 600px) {
            width: 100%;
        }
        h1 {
            padding-bottom: 1rem;
            border-bottom: 1px solid #ccc;
            width: 100%
        }
        ul{
            margin: 0;
            padding: 0% 4%;
            direction: ${({ language }) => language === "العربية" && "rtl"};
            li {
                margin-inline: 0;
                margin-bottom: 1rem;
            }
        }

        pre {
            font-family: inherit;
        }

        div.calc-total-cost {
            width: 100%;
            border-top: 1px solid;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            p {
                width: 40%
            }

            h2 {
                min-width: 40%;
            }

            @media(max-width: 600px) {
                align-items: ${({ language }) => language === "English" ? "flex-start" : "flex-end"};
            }
        }

        div.total-cost {
            min-width: 40%;
            align-self: flex-end;
            margin-top: 1rem;
            border-top: 1px solid #ccc;

            h2 {
                float: right;
            }
        }
    }

    div.client-info {
        width: 35%;
        display: flex;
        flex-direction: column;
        align-items: ${({ language }) => language === "العربية" && "flex-end"};
        min-height: fit-content;
        border: 1px dashed #ccc;
        padding-inline: 1rem;
        text-align: ${({ language }) => language === "العربية" && "right"};
        h1 {
            width: 100%;
            padding-bottom: 1rem;
            border-bottom: 1px solid #ccc;
        }
        h2 {
            color: grey;
            margin: 0;
            font-weight: lighter;
        }
        h3 {
            margin: 0;
            margin-bottom: 2rem;
        }

        button {
                width: 100%;
                font-size: 1.5rem;
                font-weight: bold;
                height: 3rem;
                color: #fff;
                background-color: #F26630;
                border: none;
                transition: all 300ms ease-in-out;
                cursor: pointer;
                margin-bottom: 1rem;
                &:hover {
                    opacity: 0.5;
                }
                &:disabled {
                    opacity: 0.5;
                    cursor: auto;
                }
            }

            button#cancel-order {
                width: 100%;
                font-size: 1.5rem;
                font-weight: unset;
                height: 3rem;
                color: #000;
                background-color: #fff;
                border: 1px solid;
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

    div.cancel-order-modal {
        display: none;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        position: fixed;
        align-items: center;
        justify-content: center;
        border: 1px solid;
        
        div{
            width: 40%;
            height: 30vh;
            background-color: #ccc;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border: 1px solid #000;
            border-radius: 5px;

            span {
                width: 1rem;
                height: 1rem;
                position: relative;
                left: 46%;
                bottom: 10%;
                background-color: #000;
                color: #fff;
                display: flex;
                align-items: center;
                justify-content: center;
                border: 1px solid;
                border-radius: 5px;
                cursor: pointer;
                transition: all 300ms ease;

                &:hover {
                    background-color: transparent;
                    color: #000;
                    border: 1px solid #000;
                }
            }
            p {
                font-size: 1.3rem;
            }

            button {
                width: 20%;
                height: 2.5rem;
                font-size: 1.3rem;
                background-color: #000;
                color: #fff;
                cursor: pointer;
                transition: all 300ms ease;

                &:hover {
                    opacity: 0.5;
                }
            }
        }

    }

    div.order-sent {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        font-size: 1.2rem;

        div {
            width: 10rem;
            height: 10rem;
            border: 1px solid #F26630;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 4rem;
            color: #F26630;
        }
    }

`