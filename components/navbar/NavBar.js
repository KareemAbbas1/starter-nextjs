import { Nav } from './styles.js';
import { useState, useEffect } from 'react';
import EarthIcon from '../../public/earthIcon.png';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/logo2.png';
import Burger from './Burger.js';


const NavBar = ({ language, setLanguage, onLinkClick, open, setOpen, setLoading, showSideButtons, width }) => {

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
                <a><Image onClick={() => router.pathname !== "/" && setLoading(true)} src={Logo} alt='logo' width={140} height={50} /></a>
            </Link>

            <Burger showSideButtons={showSideButtons} open={open} setOpen={setOpen} onLinkClick={onLinkClick} language={language} setLoading={setLoading} width={width} />

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