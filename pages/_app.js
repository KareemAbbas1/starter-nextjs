import Layout from '../components/Layout';
import '../styles/globals.css';
import { WhatsApp, ScrollToTop } from '../components/navbar/styles';
import { CaretUp, Whatsapp } from "react-bootstrap-icons";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import LoadingBar from '../components/LoadingBar';




function MyApp({ Component, pageProps }) {

  const [language, setLanguage] = useState("English");
  const [notifications, setNotifications] = useState(false);
  const [loading, setLoading] = useState(false);


  // Handle Show Side Buttons
  const [showSideButtons, setShowSideButtons] = useState(false)
  const navbarVisibility = () => {
    if (window.scrollY > 70) {
      setShowSideButtons(true);
    } else {
      setShowSideButtons(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", navbarVisibility);

    return () => {
      window.removeEventListener("scroll", navbarVisibility);
    };
  }, []);



  // Handle Scroll To Top Button
  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }



  /* Hnadle Scroll To section */
  const [open, setOpen] = useState(false)
  const scrollTo = (id) => {
    if (document.getElementById(id))
      window.scrollTo({ top: document.getElementById(id).offsetTop });
  };

  // Handle path name
  const router = useRouter();


  const onLinkClick = (e) => {
    if (typeof window !== "undefined" && router.pathname === "/") {
      e.preventDefault();
      const goto = e.target.getAttribute('goto');
      setTimeout(() => {
        scrollTo(goto);
      }, 100);
      setOpen(false);
    }

  }
  /* End Hnadle Scroll To section */

  return (
    <Layout
      language={language}
      setLanguage={setLanguage}
      open={open}
      setOpen={setOpen}
      onLinkClick={onLinkClick}
      loadign={loading}
      setLoading={setLoading}
      showSideButtons={showSideButtons}
    >
      <Component
        {...pageProps}
        language={language}
        onLinkClick={onLinkClick}
        notifications={notifications}
        setNotifications={setNotifications}
        showSideButtons={showSideButtons}
        setLoading={setLoading}
        loading={loading}
      />
      {
        loading &&
        <LoadingBar position="fixed" align="top" />
      }
      {
        showSideButtons &&
        <>
          {
            router.pathname !== "/admin/dashboard" &&
            <WhatsApp><Whatsapp size={30} /></WhatsApp>
          }
          <ScrollToTop router={router} id="myBtn" onClick={topFunction}><CaretUp size={25} /></ScrollToTop>
        </>
      }
    </Layout>
  );
}

export default MyApp
