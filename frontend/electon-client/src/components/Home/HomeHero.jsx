import { Button } from "react-bootstrap";

export const HomeHero = () => {
  return (
    <div className="hero primary-bg">
      <div className="heroInner container d-flex flex-column flex-md-row justify-content-between align-items-center  ">
        <div className="content ">
          <h1 className=" text-start" style={{ color: "white" }}>
            <span>CANON</span> camera
          </h1>

          <div className="d-flex gap-3 buttons">
            <div className="white-btn">Shop now</div>
            <div className="outline-secondary-btn">View More</div>
          </div>
        </div>
        <div className="heroImg">
          <img src="./images/png/Hero.png" alt="" />
        </div>
      </div>
    </div>
  );
};
