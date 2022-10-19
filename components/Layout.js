import Footer from "./Footer"
import NavBar from "./navbar/NavBar"

const Layout = ({ children, language, setLanguage, onLinkClick, open, setOpen }) => {
    return (
        <>
            <NavBar 
            language={language} 
            setLanguage={setLanguage}
            open={open}
            setOpen={setOpen} 
            onLinkClick={onLinkClick} 
            />
            {children}
            <Footer />
        </>
    )
}

export default Layout