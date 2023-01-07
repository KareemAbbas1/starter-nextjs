import styled from 'styled-components';




export const Container = styled.div`
    max-width: 100vw;
    min-height: 100vh;
    position: relative;
    margin-bottom: 5rem;
    padding-top: 8rem;
    padding-inline: 2rem;
    display: flex;
    flex-direction: ${({ language }) => language === "English" ? "row" : "row-reverse"};
    justify-content: ${({ orderIsSent }) => orderIsSent === false ? "space-between" : "center"};
    gap: 1.5rem;

    @media(min-width: 1442px) {
        padding-inline: 15rem;
    }
    @media(max-width: 600px) {
        flex-direction: column;
        padding-inline: 1rem;
    }

   

    div.proccess-success {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;

        div {
            width: 7rem;
            height: 7rem;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 4rem;
            color: #F26630;
            border: 1px solid #F26630;
            border-radius: 50%;
        }

        button {
            font-size: large;
            font-weight: bold;
            padding: 0.5rem 1rem;
            color: #fff;
            background-color: #F26630;
            border: 1px solid #F26630;
            cursor: pointer;
            transition: all 300ms ease-in-out;
            &:hover {
                background-color: transparent;
                color: #000;
            }

            &:disabled {
                opacity: 0.5;
                cursor: unset; 
            }
        }
    }

    div.order-details {
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


        div.total {
            width: 100%;
            border-top: 1px solid;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            
            p#calculating {
                width: 40%;
                text-align: center;
                @media(max-width: 990px) {
                    width: 60%;
                }
            }
            div:nth-child(1){
                width: 40%;
                border-bottom: 1px solid #ccc;
                @media(max-width: 990px) {
                    width: 60%;
                }
                @media(max-width: 600px) {
                    width: 100%;
                }
            }
            div:nth-child(2){
                width: 40%;
                text-align: center;
                @media(max-width: 990px) {
                    width: 60%;
                }
            }
            h2.total-price {
                text-align: right;
            }
        }
    }


    div.client-info {
        width: 35%;
        max-height: 140vh;
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

        form {
            width: 100%;

            h2 {
                text-align: center;
            }
            input {
                min-width: calc(100% - 0.8rem);
                margin-block: 1rem;
                padding-block: 1rem;
                padding-inline-start: 0.8rem;
                font-size: 1rem;
                border: 1px solid #ccc;
                border-radius: 5px;
                direction: ${({ language }) => language === "العربية" && "rtl"};
            }
            h4 {
                border-bottom: 1px solid #ccc;
                padding-bottom: 1rem;
            }
            h3 {
                font-size: 1.5rem;
                font-weight: 300;
                margin-bottom: 0;
            }
            
            span.payment-logos {
                width: 100%;
                height: 3rem;
                display: flex;
                align-items: center;
                flex-flow: ${({ language }) => language === "English" ? "row" : "row-reverse"};
                gap: 0.5rem;
                margin-bottom: 1rem;
                padding-block: 1rem;
                border-bottom: 1px solid #ccc;


                img {
                    width: 6rem;
                    height: 1rem;
                    object-fit: contain;
                    border: 1px solid #ccc !important;
                    border-radius: 5px;
                }
            }
            

            div{
                max-width: 100%;
                /* padding-top: 1rem; */
                margin-bottom: 2rem;
                /* border-top: 1px solid #ccc; */
                display: flex;
                flex-direction: ${({ language }) => language === "العربية" && "row-reverse"};

                label {
                    cursor: pointer;
                    direction: ${({ language }) => language === "العربية" && "rtl"};

                    a{
                        margin-left: 5px;
                        color: #000;
                        font-weight: bold;
                    }
                }
                input {
                    min-width: unset;
                    margin-block: 0;
                    padding-block: 0;
                    padding-inline-start: 0;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    cursor: pointer;
                }

            }

            button {
                width: 100%;
                font-size: 1.5rem;
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

            button.cancel-order {
                width: 100%;
                font-size: 1.5rem;
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
    }

    div.modal {
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

            @media(max-width: 600px) {
                width: 90%;
                padding-inline: 1rem;
            }
            @media(min-width: 610px) and (max-width: 992px) {
                width: 70%;
            }

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
`