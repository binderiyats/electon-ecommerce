import "../styles/Footer.css";
import { FaWhatsapp, FaFacebook, FaGoogle } from "react-icons/fa";

export const Footer = () => {
  return (
    <div style={{ backgroundColor: "#003585", height: 370 }}>
      <div className="footerLogo d-flex justify-content-start">
        <img src="./images/svg/E-logo.svg" alt="" />
      </div>
      <div className="d-flex justify-content-between">
        <div className="socialIcons">
          <FaGoogle color="white" />
          <FaFacebook color="white" />
          <FaWhatsapp color="white" />
        </div>
        <div className="copyWrite" style={{ color: "white" }}>
          © 2023 Tuulai. Built using AQUA and Tuulai Theme. Terms and Conditions
        </div>
      </div>
    </div>
  );
};
