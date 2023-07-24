import AboutUs from './components/AboutUs/AboutUs';
import Hero from './components/Hero/Hero';
import PetCollection from './components/PetCollection/PetCollection';
import Services from './components/Services/Services';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <PetCollection />
    </>
  );
}
