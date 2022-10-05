import type { NextPage } from 'next';
import EditModal from '../ui/home/editmodal';
import Footer from '../ui/home/footer';
import Header from '../ui/home/header';
import Hero from '../ui/home/hero';
import InfoBox from '../ui/home/infobox';
import Questions from '../ui/home/questions';
import SelectModal from '../ui/home/selectmodal';
import Stats from '../ui/home/stats';

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Stats />
        <SelectModal />
        <EditModal />
        <InfoBox />
        <Questions />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
