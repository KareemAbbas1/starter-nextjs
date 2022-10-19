import styled from "styled-components";
import { debounce } from "lodash";
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
        @media(min-width: 1400px) {
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
    }

    h3 {
        display: ${({ open }) => open ? "block" : "none"};
    }

    @media(min-width: 1450px) {
        li {
            font-size: ${({ language }) => language === "English" ? "0.9rem" : "1rem"};
        }

    }

    @media(max-width: 600px) {
        width: 200px;
        padding-inline: 1rem;
    }
`

const SideNav = ({ open, setOpen, language, onLinkClick }) => {

    // Handle Rerender at screen width change: Check this answer for elaboration (https://stackoverflow.com/questions/19014250/rerender-view-on-browser-resize-with-react#:~:text=As%20of%20React,Flag)
    const [width, setWidth] = useState(0);
    useEffect(() => {
        const handleResize = debounce(() => setWidth(window.innerWidth), 100)

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    // Handle navigate to section out of the home page
    const router = useRouter();
    const currentRoute = router.pathname;



    return (
        <NavLinks id="side-nav" open={open} width={width} language={language}>
            {language === "English"
                ?
                <div>
                    <h3>Menu</h3>
                    <li onClick={() => setOpen(false)}>
                        <Link href={currentRoute !== "/" ? '/#trips-section' : ''}>
                            <a goto='trips-section' onClick={(e) => onLinkClick(e)}>Trips</a>
                        </Link>
                    </li>
                    <li onClick={() => setOpen(false)}>
                        <Link href={currentRoute !== "/" ? '/#camps-section' : ''}>
                            <a goto='camps-section' onClick={(e) => onLinkClick(e)}>Camps</a>
                        </Link>
                    </li>
                    <li onClick={() => setOpen(false)}>
                        <Link href={currentRoute !== "/" ? '/#services-section' : ''}>
                            <a goto='services-section' onClick={(e) => onLinkClick(e)}>Services</a>
                        </Link>
                    </li>
                    <li onClick={() => setOpen(false)}>
                        <Link href={currentRoute !== "/" ? '/#gallery-section' : ''}>
                            <a goto='gallery-section' onClick={(e) => onLinkClick(e)}>Gallery</a>
                        </Link>
                    </li>
                    <li onClick={() => setOpen(false)}>
                        <Link href={currentRoute !== "/" ? '/#aboutus-section' : ''}>
                            <a goto='aboutus-section' onClick={(e) => onLinkClick(e)}>About Us</a>
                        </Link>
                    </li>
                    {
                        open &&
                        <li onClick={() => setOpen(false)}>
                            <Link href={currentRoute !== "/" ? '/#contact-us-section' : ''}>
                                <a goto='contact-us-section' onClick={(e) => onLinkClick(e)}>Contact Us</a>
                            </Link>
                        </li>
                    }
                </div>
                :
                <div>
                    {
                        open &&
                        <li onClick={() => setOpen(false)}>
                            <Link href={currentRoute !== "/" ? '/#contact-us-section' : ''}>
                                <a goto='contact-us-section' onClick={(e) => onLinkClick(e)}>اتصل بنا</a>
                            </Link>
                        </li>
                    }
                    <li onClick={() => setOpen(false)}>
                        <Link href={currentRoute !== "/" ? '/#aboutus-section' : ''}>
                            <a goto='aboutus-section' onClick={(e) => onLinkClick(e)}>عن الشركة</a>
                        </Link>
                    </li>
                    <li onClick={() => setOpen(false)}>
                        <Link href={currentRoute !== "/" ? '/#gallery-section' : ''}>
                            <a goto='gallery-section' onClick={(e) => onLinkClick(e)}>معرض الصور</a>
                        </Link>
                    </li>
                    <li onClick={() => setOpen(false)}>
                        <Link href={currentRoute !== "/" ? '/#services-section' : ''}>
                            <a goto='services-section' onClick={(e) => onLinkClick(e)}>الخدمات</a>
                        </Link>
                    </li>
                    <li onClick={() => setOpen(false)}>
                        <Link href={currentRoute !== "/" ? '/#camps-section' : ''}>
                            <a goto='camps-section' onClick={(e) => onLinkClick(e)}>حجز مخيم</a>
                        </Link>
                    </li>
                    <li onClick={() => setOpen(false)}>
                        <Link href={currentRoute !== "/" ? '/#trips-section' : ''}>
                            <a goto='trips-section' onClick={(e) => onLinkClick(e)}>الرحلات</a>
                        </Link>
                    </li>
                    <h3>القائمة</h3>
                </div>
            }

        </NavLinks>
    )
}

export default SideNav
