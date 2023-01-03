import Footer from "./Footer"
import NavBar from "./navbar/NavBar"

const Layout = ({ children, language, setLanguage, onLinkClick, open, setOpen, setLoading, showSideButtons, width }) => {
    return (
        <>
            <NavBar
                language={language}
                setLanguage={setLanguage}
                open={open}
                setOpen={setOpen}
                onLinkClick={onLinkClick}
                setLoading={setLoading}
                showSideButtons={showSideButtons}
                width={width}
            />
            {children}

            {
                showSideButtons &&
                <Footer />
            }
        </>
    )
}

export default Layout