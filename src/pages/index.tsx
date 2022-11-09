import type { NextPage } from 'next';
import Features from '../ui/home/features';
import Hero from '../ui/home/hero';
import InfoBox from '../ui/home/infobox';
import Questions from '../ui/home/questions';
import Stats from '../ui/home/stats';

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Stats />
      <InfoBox />
      <Questions />
      <Features />
    </>
  );
};

export default Home;
