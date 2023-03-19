import "../../styles/components/Specials.css";

export const Specials = () => {
  return (
    <div className="special container">
      <div className="specialProduct">
        <div className="title primary-bg">Special Product</div>
        <div className="picture">
          <img src="./images/png/products/special-product.png"></img>
        </div>
        <div className="content">
          <h4 className="primary-color">JBL bar 2.1 deep bass</h4>
          <h5>$11.70</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus
            bibendum ullamcorper. Phasellus tristique aenean at lorem sed
            scelerisque
          </p>
        </div>
      </div>
      <div className="news"></div>
    </div>
  );
};
