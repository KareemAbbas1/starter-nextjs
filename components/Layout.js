import Footer from "./Footer"
import NavBar from "./navbar/NavBar"

const Layout = ({ children, language, setLanguage, onLinkClick, open, setOpen, setLoading }) => {
    return (
        <>
            <NavBar
                language={language}
                setLanguage={setLanguage}
                open={open}
                setOpen={setOpen}
                onLinkClick={onLinkClick}
                setLoading={setLoading}
            />
            {children}
            <Footer />
        </>
    )
}

export default Layout