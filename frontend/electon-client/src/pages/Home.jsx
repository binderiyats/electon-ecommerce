import { PopularProducts } from "../components/Home/PopularProducts";
import { HomeHero } from "../components/Home/HomeHero";
import "../styles/components/Home.css";

export const Home = () => {
  return (
    <div className="">
      <HomeHero />
      <PopularProducts />
    </div>
  );
};
