import { HeroLeft } from "./Hero/HeroLeft";

export const HomeHero = () => {
  return (
    <div className="hero">
      <div className="heroInner container d-flex flex-column flex-md-row justify-content-around">
        <HeroLeft />
        <div className="heroImg">
          <img src="./images/png/Hero.png" alt="" />
        </div>
      </div>
    </div>
  );
};
