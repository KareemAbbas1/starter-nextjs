import styled from "styled-components";
import { useEffect, useState } from "react";
import Link from 'next/link'
import { useRouter } from "next/router";

const NavLinks = styled.ul`
    list-style: none;
    display: flex;
    width: ${({ open }) => open ? "300px" : ""};
    height: ${({ open }) => open && "100vh"};
    background-color: ${({ open }) => open ? "#fff" : "transparent"};
    padding-block: ${({ open }) => open && "1.5rem"};
    margin-top: ${({ open }) => open && "-1rem"};
    position: ${({ open }) => open ? "fixed" : ""};
    right: ${({ open }) => open ? "0" : ""};
    top: 0;
    z-index: 9;
    transform: ${({ open }) => open && 'translateX(0)'};
    transition: all 300ms ease;

    div {
        display: flex;
        flex-flow: ${({ open, language }) => open && language === "English"
        ? "column nowrap"
        : open && language === "العربية"
        ? "column-reverse nowrap"
        : "row"
    };
        align-items: ${({ language }) => language === "العربية" && "flex-end"};
        width: 100%;
        margin: 0px;
        padding: 0px;
        padding-right: ${({ open }) => open && "2rem"};
        transform: ${({ language, open }) => language === "العربية" && open ? 'translateY(-42%)' : ''};
        @media(min-width: 1440px) {
            transform: ${({ language, open }) => language === "العربية" && open ? 'translateY(-59%)' : ''};
        }
        @media(max-width: 990px) {
            transform: ${({ language, open }) => language === "العربية" && open ? 'translateY(-69%)' : ''};
        }
        @media(max-width: 690px) {
            transform: ${({ language, open }) => language === "العربية" && open ? 'translateY(-45%)' : ''};
        }
    }


    li {
        margin-inline: ${({ open }) => open === false && "2rem"};
        margin-block: ${({ open }) => open && "1rem"};
        
        font-size: ${({ language }) => language === "English" ? "0.75rem" : "0.9rem"};
        font-weight: 700;
        text-transform: uppercase;
        cursor: pointer;

        a {
            color: ${({ open }) => open ? "#000" : "#fff"};
            text-decoration: none;
        }

        ::after {
            content: '';
            display: block;
            width: 0;
            height: 2px;
            background: #F26630;
            transition: width .3s;
        }

        &:hover::after {
            width: 100%;
        }

        @media(max-width: 990px) {
            display: ${({ open }) => !open && "none"};
        }

        // 10 inch
        @media(min-width: 1024px) {
            font-size: ${({ language }) => language === "English" ? "0.6rem" : "0.9rem"};
            margin-inline: ${({ open }) => open === false && "1rem"};
        }

        // 12 inch
        @media(min-width: 1280px) {
            font-size: ${({ language }) => language === "English" ? "0.67rem" : "0.9rem"};
            margin-inline: ${({ open }) => open === false && "1.3rem"};
        }


        // 19 inch
        @media(min-width: 1440px) {
            font-size: ${({ language }) => language === "English" ? "0.7rem" : "0.9rem"};
            margin-inline: ${({ open }) => open === false && "1.6rem"};
        }

        // 22 inch
        @media(min-width: 1680px) {
            font-size: ${({ language }) => language === "English" ? "0.82rem" : "1rem"};
            margin-inline: ${({ open }) => open === false && "2.3rem"};
        }
    }

    h3 {
        display: ${({ open }) => open ? "block" : "none"};
    }

    @media(max-width: 600px) {
        width: 200px;
        padding-inline: 1rem;
    }
`

const SideNav = ({ open, setOpen, language, onLinkClick, setLoading, width }) => {

    // Handle navigate to section out of the home page
    const router = useRouter();
    const currentRoute = router.pathname;



    return (
        <NavLinks id="side-nav" open={open} width={width} language={language}>
            {language === "English"
                ?
                <div>
                    <h3>Menu</h3>
                    <li onClick={() => {
                        currentRoute !=="/" && setLoading(true);
                        setOpen(false);
                        }}
                        >
                        <Link href={currentRoute !== "/" ? '/#trips-section' : ''}>
                            <a href="" goto='trips-section' onClick={(e) => onLinkClick(e)}>Trips</a>
                        </Link>
                    </li>
                    <li onClick={() => {
                        currentRoute !=="/" && setLoading(true);
                        setOpen(false);
                        }}
                        >
                        <Link href={currentRoute !== "/" ? '/#camps-section' : ''}>
                            <a href="" goto='camps-section' onClick={(e) => onLinkClick(e)}>Camps</a>
                        </Link>
                    </li>
                    <li onClick={() => {
                        currentRoute !=="/" && setLoading(true);
                        setOpen(false);
                        }}
                        >
                        <Link href={currentRoute !== "/" ? '/#services-section' : ''}>
                            <a href="" goto='services-section' onClick={(e) => onLinkClick(e)}>Services</a>
                        </Link>
                    </li>
                    <li onClick={() => {
                        currentRoute !=="/" && setLoading(true);
                        setOpen(false);
                        }}
                        >
                        <Link href={currentRoute !== "/" ? '/#gallery-section' : ''}>
                            <a href="" goto='gallery-section' onClick={(e) => onLinkClick(e)}>Gallery</a>
                        </Link>
                    </li>
                    <li onClick={() => {
                        currentRoute !=="/" && setLoading(true);
                        setOpen(false);
                        }}
                        >
                        <Link href={currentRoute !== "/" ? '/#aboutus-section' : ''}>
                            <a href="" goto='aboutus-section' onClick={(e) => onLinkClick(e)}>About Us</a>
                        </Link>
                    </li>
                    {
                        open &&
                        <li onClick={() => {
                            currentRoute !=="/" && setLoading(true);
                            setOpen(false);
                            }}
                            >
                            <Link href={currentRoute !== "/" ? '/#contact-us-section' : ''}>
                                <a href="" goto='contact-us-section' onClick={(e) => onLinkClick(e)}>Contact Us</a>
                            </Link>
                        </li>
                    }
                </div>
                :
                <div>
                    {
                        open &&
                        <li onClick={() => {
                            currentRoute !=="/" && setLoading(true);
                            setOpen(false);
                            }}
                            >
                            <Link href={currentRoute !== "/" ? '/#contact-us-section' : ''}>
                                <a href="" goto='contact-us-section' onClick={(e) => onLinkClick(e)}>اتصل بنا</a>
                            </Link>
                        </li>
                    }
                    <li onClick={() => {
                        currentRoute !=="/" && setLoading(true);
                        setOpen(false);
                        }}
                        >
                        <Link href={currentRoute !== "/" ? '/#aboutus-section' : ''}>
                            <a href="" goto='aboutus-section' onClick={(e) => onLinkClick(e)}>عن الشركة</a>
                        </Link>
                    </li>
                    <li onClick={() => {
                        currentRoute !=="/" && setLoading(true);
                        setOpen(false);
                        }}
                        >
                        <Link href={currentRoute !== "/" ? '/#gallery-section' : ''}>
                            <a href="" goto='gallery-section' onClick={(e) => onLinkClick(e)}>معرض الصور</a>
                        </Link>
                    </li>
                    <li onClick={() => {
                        currentRoute !=="/" && setLoading(true);
                        setOpen(false);
                        }}
                        >
                        <Link href={currentRoute !== "/" ? '/#services-section' : ''}>
                            <a href="" goto='services-section' onClick={(e) => onLinkClick(e)}>الخدمات</a>
                        </Link>
                    </li>
                    <li onClick={() => {
                        currentRoute !=="/" && setLoading(true);
                        setOpen(false);
                        }}
                        >
                        <Link href={currentRoute !== "/" ? '/#camps-section' : ''}>
                            <a href="" goto='camps-section' onClick={(e) => onLinkClick(e)}>حجز مخيم</a>
                        </Link>
                    </li>
                    <li onClick={() => {
                        currentRoute !=="/" && setLoading(true);
                        setOpen(false);
                        }}
                        >
                        <Link href={currentRoute !== "/" ? '/#trips-section' : ''}>
                            <a href="" goto='trips-section' onClick={(e) => onLinkClick(e)}>الرحلات</a>
                        </Link>
                    </li>
                    <h3>القائمة</h3>
                </div>
            }

        </NavLinks>
    )
}

export default SideNav
