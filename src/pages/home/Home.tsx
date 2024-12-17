import HomeAbout from "./home-about/HomeAbout";
import HomeBento from "./home-bento-grid/HomeBento";
import HomeCta from "../../components/cta/home-cta-call/HomeCta";
import Hero from "./home-hero/Hero";
import HomeLatestArticles from "./home-articles/HomeLatestArticles";

const Home = () => {
  return (
    <div className="bg-background text-onBackground space-y-20">
      <Hero />
      <HomeAbout />
      <HomeBento />
      <HomeCta />
      <HomeLatestArticles />
    </div>
  );
};

export default Home;
