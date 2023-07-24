import AboutUs from './components/AboutUs/AboutUs';
import Blog from './components/Blog/Blog';
import FindFurryFriends from './components/FindFurryFriend/FindFurryFriends';
import Hero from './components/Hero/Hero';
import PetCollection from './components/PetCollection/PetCollection';
import Services from './components/Services/Services';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <PetCollection />
      <FindFurryFriends />
      <Blog />
    </>
  );
}
