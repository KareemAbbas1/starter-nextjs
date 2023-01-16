import styled from "styled-components";



export const Nav = styled.div`
    width: 100vw;
    height: 4rem;
    background-color: ${props => `${props.bg}`};
    position: ${props => `${props.position}`};
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline-start: 1rem;
    padding-inline-end: 2rem;
    box-sizing: border-box;
    z-index: 1000;
    overflow: hidden;
    button,
    a {
        cursor: pointer;
    }


    button.language-icon {
        min-width: 3.5rem;
        padding: 0%;
        margin: 0%;
        background-color: transparent;
        border: none;
        padding: 0px;
        margin-right: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        transition: all 200ms ease;
        /* cursor: pointer; */

        &:hover {
           transform: scale(1.1)
        }

        @media(min-width: 1400px) {
            min-width: 4rem;
        }
    }

    button {
        background-color: #F26630;
        color: #fff;
        font-weight: bold;
        padding: 0.45rem 1rem;
        border: 1px solid #F26630;
        /* cursor: pointer; */
        transition: all 500ms ease;

        &:hover {
            background-color: transparent;
        }
    }


    // 10 inch 
    @media(min-width: 1024px) {
        button {
            padding: 0.4rem 0.5rem;
            font-size: 0.7rem;
        }

        button.language-icon {
            margin-right: 0.3rem;
            min-width: 3rem;

            img {
                width: 1.3rem;
                height: 1.3rem;
            }
        }

        a {
            width: 7rem;
        }
    }


    @media(min-width: 1440px) {
        padding-inline-end: 1rem;
        height: 5rem;

        button {
            padding: 0.5rem 1rem;
            font-size: ${({ language }) => language === "العربية" && "1.1rem"};
        }

        button.language-icon {
            font-size: 0.9rem;
            min-width: 3.5rem;
        }

    }

    @media(min-width: 1680px) {
        padding-inline: 2rem;

        button {
            padding: 0.5rem 1rem;
            font-size: ${({ language }) => language === "English" ? "0.9rem" : "1.1rem"};
        }

        button.language-icon {
            min-width: ${({ language }) => language === "English" ? "3.7rem" : "2.9rem"};

            img {
                width: 1.5rem;
                height: 1.5rem;
            }
        }

        a {
            width: 9rem;
        }
    }

    // 23 inch
    @media(min-width: 1920px) {
        padding-inline: 5rem;
    }

    @media(max-width: 990px) {

        button.language-icon {
            right: 0px;
            margin-right: 1.2rem;
        }
    }

    @media(max-width: 990px) {
        button {
            display: none;
        }
    }
`

export const WhatsApp = styled.button`
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    right: 0%;
    top: calc(4% + 2.72rem);
    z-index: 10;
    padding: 0;
    font: 2rem;
    border: none;
    outline: none;
    background-color: #000;
    color: white;
    cursor: pointer;
    border-radius: 3px;
    transition: all 300ms ease-in-out;
    a {
        color: #fff;
        text-decoration: none;
    }
    
    &:hover {
        transform: translateX(-8%);
    }

    @media(max-width: 990px) {
        top: calc(2% + 2.8rem);
    }

    @media(max-width: 600px) {
        width: 2.65rem;
        height: 2.65rem;
        top: calc(2% + 2.4rem);
        margin-right: 2px;
    }
`
export const ScrollToTop = styled.button`
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    right: 0%;
    top: ${({router}) => router.pathname !== "/admin/dashboard" ? `calc(4% + 5.8rem)` : '90%'};
    z-index: 99;
    padding: 0;
    font: 1.5rem;
    border: none;
    outline: none;
    background-color: #000;
    color: white;
    cursor: pointer;
    border-radius: 3px;
    transition: all 300ms ease-in-out;
    
    &:hover {
        transform: translateX(-8%);
    }

    @media(max-width: 990px) {
        top: calc(2% + 5.9rem);
    }

    @media(max-width: 600px) {
        width: 2.65rem;
        height: 2.65rem;
        top: calc(2% + 5.1rem);
        margin-right: 2px;
    }
`

export const Button = styled.button``