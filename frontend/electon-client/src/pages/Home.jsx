import { PopularProducts } from "../components/Home/PopularProducts";
import { HomeHero } from "../components/Home/HomeHero";
import "../styles/components/Home.css";
import { SaleProduct } from "../components/Home/SaleProduct";
import { Specials } from "../components/Home/Specials";

export const Home = () => {
  return (
    <div className="">
      <HomeHero />
      <PopularProducts />
      <SaleProduct />
      <Specials />
    </div>
  );
};
