import Head from 'next/head';
import AboutUs from '../components/home/AboutUs';
import Badges from '../components/home/Badges';
import Camps from '../components/home/Camps';
import Cars from '../components/home/Cars';
import ContactUs from '../components/home/ContactUs';
import Gallery from '../components/home/Gallery';
import Hero from '../components/home/Hero';
import PopularAttractions from '../components/home/PopularAttractions';
import Trips from '../components/home/Trips';
import axios from "axios";


export const getServerSideProps = async () => {
  try {
    const res = await axios.get(`https://powerful-sunglasses-newt.cyclic.app/api/trips`);
    const res2 = await axios.get(`https://powerful-sunglasses-newt.cyclic.app/api/camps`);
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


export default function Home({ language, onLinkClick }) {

  return (
    <>
      <Head>
        <title>Break Trips for travel</title>
        <meta name="description" content="travel and tourism company" />
      </Head>

      <Hero onLinkClick={onLinkClick} language={language} />
      <Trips trips={trips} language={language} />
      <Badges language={language} />
      <Camps camps={camps} language={language} />
      <Cars language={language} />
      <PopularAttractions language={language} />
      <Gallery language={language} />
      <AboutUs language={language} />
      <ContactUs id='contact-us' language={language} />
    </>
  )
}








