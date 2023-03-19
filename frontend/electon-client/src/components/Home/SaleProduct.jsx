import "../../styles/components/Sale.css";

export const SaleProduct = () => {
  const containerStyle = {
    background: `url("./images/png/products/saleProduct.png")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div className="saleProduct container" style={containerStyle}>
      <div className="content">
        <div className="white-btn">New Laptop</div>
        <h2 className="secondary-color">Sale up to 50% off</h2>
        <p>12 inch hd display</p>
        <div className="outline-secondary-btn">Shop now</div>
      </div>
    </div>
  );
};
