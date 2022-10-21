import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';
import ExploreCards from '../components/ExploreCards';
import LiveAnywhere from '../components/LiveAnywhere';
import FooterCard from '../components/FooterCard';
import Footer from '../components/Footer';

export default function Home({ exploreData, liveData }) {
  return (
    <div>
      <Head>
        <title>NextJS AirBNB</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <ExploreCards exploreData={exploreData} />
        <LiveAnywhere liveData={liveData} />
        <FooterCard
          img='/footerImg.webp'
          title='The Greatest Outdoors'
          description='Wishlists currated by Airbnb.'
          buttonText='Get Inspired!'
        />
      </main>

      <Footer />
    </div>
  );
}

//Explore Data
export const getStaticProps = async () => {
  const explore = await fetch('https://www.jsonkeeper.com/b/4G1G');
  const exploreData = await explore.json();

  const live = await fetch('https://www.jsonkeeper.com/b/VHHT');
  const liveData = await live.json();

  return {
    props: {
      exploreData,
      liveData,
    },
  };
};
