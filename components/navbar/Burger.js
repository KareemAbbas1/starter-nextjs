import styled from "styled-components";
import { useState, useEffect } from "react";
import debounce from "lodash/debounce";
import SideNav from "./SideNav";
import { useRouter } from "next/router";

const BurgerMenu = styled.div`
    width: 2.1rem;
    height: 2.1rem;
    position: fixed;
    margin-top: ${({ open }) => !open ? "2%" : "0px"};
    right: ${({ language, open }) => language === "العربية" && open ? "21.5%" : "0%"};
    z-index: 10;
    display: ${({ showSideButtons, width }) => width > 992 && showSideButtons ? "flex" : "none"};
    flex-flow: column;
    align-items: center;
    justify-content: space-around;
    background-color: ${({ open }) => !open && "#000"};
    border-radius: 3px;
    padding: 5px 8px;
    padding-right: 6px;
    transition: all 300ms ease-in-out;
    cursor: pointer;
    &:hover {
        transform: translateX(-8%);
    }

    // 19 inch
    @media(min-width: 1440px) {
        margin-top: ${({ open }) => !open ? "2.7%" : "0px"};
    }
    
    
    // 22 inch
    @media(min-width: 1680px) {
        margin-top: ${({ open }) => !open ? "1.85%" : "0px"};
        margin-right: ${({ open }) => !open ? "-5px" : ""}
    }
    
    // 23 inch
    @media(min-width: 1920px) {
        margin-top: ${({ open }) => !open ? "1.1%" : "0px"};
    }


    @media(max-width: 990px) {
        display: flex;
        margin-top: 0.5%;
    }
    @media(max-width: 600px) {
        width: 1.8rem;
        height: 1.8rem;
        margin-top: 0%;
        margin-right: -4px;
    }


    div {
        width: 2rem;
        height: 0.25rem;
        background-color: ${({ open }) => open ? '#ccc' : '#fff'};
        border-radius: 10px;
        transform-origin: 1.5px;
        transition: all 500ms ease;

        &:nth-child(1) {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }

        &:nth-child(2) {
            transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({ open }) => open ? 0 : 1};
        }


        &:nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }

    @media(min-width: 1450px) {
        right: ${({ language, open }) => language === "العربية" && open ? "15%" : "5px"};
    }

    @media(max-width: 990px) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
        right: ${({ language, open }) => language === "العربية" && open ? "29%" : ""};
    }

    @media(max-width: 768px) {
        right: ${({ language, open }) => language === "العربية" && open ? "37%" : ""};
    }

    @media(max-width: 600px) {
        right: ${({ language, open }) => language === "العربية" && open ? "51%" : "1.5%"};
    }
`

const Burger = ({ language, onLinkClick, open, setOpen, setLoading, showSideButtons }) => {

    const router = useRouter();

    // Handle Rerender at screen width change: Check this answer for elaboration (https://stackoverflow.com/questions/19014250/rerender-view-on-browser-resize-with-react#:~:text=As%20of%20React,Flag)
    const [width, setWidth] = useState(null);
    const [scroll, setScroll] = useState(null);
    useEffect(() => {
        setWidth(window.innerWidth);
        setScroll(window.scrollY);

        const handleResize = debounce(() => setWidth(window.innerWidth), 10);
        const handleScroll = debounce(() => setScroll(window.scrollY), 10);

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])


    // Handle navbar background visibility onScroll and route change
    // useEffect(() => {
    //     window.addEventListener("scroll", navbarVisibility);
    //     const navbarVisibility = () => {
    //         if (scroll > 70 && width > 990 && router.pathname !== "/admin/dashboard") {
    //             document.getElementById("menu").style.display = "flex";
    //             document.getElementById("menu").style.justifyContent = "space-around";
    //             document.getElementById("menu").style.flexFlow = "column";
    //         }
    //         else if (width <= 990) {
    //             document.getElementById("menu").style.display = "flex";
    //         }
    //         else {
    //             document.getElementById("menu").style.display = "none";
    //         }
    //     }

    //     window.addEventListener("scroll", navbarVisibility);

    //     return () => {
    //         window.removeEventListener("scroll", navbarVisibility);
    //     };
    // }, [width, scroll, router]);


    return (
        <>
            <BurgerMenu showSideButtons={showSideButtons} width={width} id="menu" open={open} language={language} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </BurgerMenu>

            <SideNav onLinkClick={onLinkClick} open={open} setOpen={setOpen} language={language} setLoading={setLoading}/>
        </>
    )
}

export default Burger