import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import LoadingBar from '../components/LoadingBar';

// Start dynamic imports
const AboutUs = dynamic(() => import('../components/home/AboutUs'), {
  loading: () => 'Loading...'
});
const Badges = dynamic(() => import('../components/home/Badges'), {
  loading: () => 'Loading...'
});
const Camps = dynamic(() => import('../components/home/Camps'), {
  loading: () => <LoadingBar />
});
const Cars = dynamic(() => import('../components/home/Cars'), {
  loading: () => 'Loading...'
});
const ContactUs = dynamic(() => import('../components/home/ContactUs'), {
  loading: () => 'Loading...'
});
const Gallery = dynamic(() => import('../components/home/Gallery'), {
  loading: () => 'Loading...'
});
import Hero from '../components/home/Hero';
const PopularAttractions = dynamic(() => import('../components/home/PopularAttractions'), {
  loading: () => 'Loading...'
});
const Trips = dynamic(() => import('../components/home/Trips'), {
  loading: () => <LoadingBar />
});
import axios from "axios";


export const getServerSideProps = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_DOMAIN_NAME}/api/trips`);
    const res2 = await axios.get(`${process.env.NEXT_PUBLIC_DOMAIN_NAME}/api/camps`);
    return {
      props: {
        trips: res.data,
        camps: res2.data
      }
    };
  }
  catch {
    return {
      notFound: true,
    }
  }
};


export default function Home({
  trips,
  camps,
  language,
  onLinkClick,
  showSideButtons, /* This is used to dynamically render each section based on the Y axis scroll */
  loading,
  setLoading,
  width
}) {


  // hanldle dynamically rendered section
  const [showDynamicallyRenderedSections, setShowDynamicallyRenderedSections] = useState(false);
  useEffect(() => {
    if (window.scrollY > 10) {
      setShowDynamicallyRenderedSections(true);
    }
  })
  // Handle route change loading
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      <Head>
        <title>Break Trips for travel</title>
        <meta name="description" content="travel and tourism company" />
      </Head>

      <Hero onLinkClick={onLinkClick} language={language} />

      <Trips
        trips={trips}
        language={language}
        setLoading={setLoading}
        width={width}
      />

      {
        showDynamicallyRenderedSections === true &&
        <Badges language={language} showSideButtons={showSideButtons} />
      }

      <Camps
        camps={camps}
        language={language}
        setLoading={setLoading}
      />

      <Cars language={language} width={width} />

      <PopularAttractions language={language} width={width} />

      <Gallery language={language} />

      <AboutUs language={language} />

      <ContactUs id='contact-us' language={language} showSideButtons={showSideButtons} />

    </>
  )
}








