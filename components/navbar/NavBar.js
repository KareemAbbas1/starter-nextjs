import { Nav } from './styles.js';
import { useState, useEffect } from 'react';
import debounce from 'lodash/debounce';
import EarthIcon from '../../public/earthIcon.png';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/logo2.png';
import Burger from './Burger.js';


const NavBar = ({ language, setLanguage, onLinkClick, open, setOpen, setLoading }) => {

    const [reRender, setReRender] = useState(false)
    const [admin, setAdmin] = useState(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const admin = JSON.parse(localStorage.getItem("user"));
            setAdmin(admin);
        }
    }, []);



    // Handle path name
    const router = useRouter();

    // Handle Rerender at screen width change: Check this answer for elaboration (https://stackoverflow.com/questions/19014250/rerender-view-on-browser-resize-with-react#:~:text=As%20of%20React,Flag)
    const [width, setWidth] = useState(0);
    useEffect(() => {
        const handleResize = debounce(() => setWidth(window.innerWidth), 100)

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    // Handle Language
    const toggleLanguage = () => {
        if (language === "English") {
            setLanguage("العربية");
        }
        else {
            setLanguage("English");
        }
    }

    // Handle navigate to section out of the home page
    const currentRoute = router.pathname;

    return (
        <Nav
            language={language}
            bg={router.pathname === "/" ? "transparent" : "#16171F"}
            position={router.pathname !== "/admin/dashboard" ? "absolute" : "fixed"}
        >
            <Link href="/">
                <a><Image src={Logo} alt='logo' width={140} height={50} /></a>
            </Link>

            <Burger open={open} setOpen={setOpen} onLinkClick={onLinkClick} language={language} setLoading={setLoading} />

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <button className="language-icon" onClick={toggleLanguage}>
                    <div>{language === "English" ? "العربية" : "En"}</div>
                    <Image width={24} height={24} src={EarthIcon} alt='toggle language' />
                </button>

                {
                    !admin
                        ?
                        <Link href={currentRoute !== "/" ? '/#contact-us-section' : ''}>
                            <button goto='contact-us-section' onClick={(e) => onLinkClick(e)}>

                                {language === "English" ? "Contact Us" : "اتصل بنا"}
                            </button>
                        </Link>
                        : 
                        <>
                            <h5 style={{ color: '#fff' }}>{admin && admin.username}</h5>
                        </>
                }
            </div>
        </Nav>
    )
}

export default NavBar