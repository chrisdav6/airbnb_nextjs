import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';
import ExploreCards from '../components/ExploreCards';

export default function Home({ exploreData }) {
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
      </main>
    </div>
  );
}

//Explore Data
export const getStaticProps = async () => {
  const res = await fetch('https://www.jsonkeeper.com/b/4G1G');
  const exploreData = await res.json();

  return {
    props: {
      exploreData,
    },
  };
};
