import HowItWorks from "@/components/home/HowItWork";
import Newsletter from "@/components/home/NewsLetter";
import PopularCategories from "@/components/home/Popularcategories";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";

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
