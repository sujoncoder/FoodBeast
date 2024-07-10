import Hero from "../components/home/Hero.jsx";
import HomeMenu from "../components/home/HomeMenu";
import HowItWorks from "../components/home/HowItWork";
import Newsletter from "../components/home/NewsLetter";
import PopularCategories from "../components/home/Popularcategories";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <PopularCategories />
      <HowItWorks />
      <Newsletter />
    </>
  );
}
