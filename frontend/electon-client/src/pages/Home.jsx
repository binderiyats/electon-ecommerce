import { PopularProducts } from "../components/Home/PopularProducts";
import { HomeHero } from "../components/HomeHero";
import "../styles/Home.css";

export const Home = () => {
  return (
    <div className="">
      <HomeHero />
      <PopularProducts />
    </div>
  );
};
