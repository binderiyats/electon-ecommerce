import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { RiShoppingCart2Line } from "react-icons/ri";
import { NavbarSearch } from "./Navbar/NavbarSearch";
import { useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    if (location.pathname === "/") setIsHome(true);
    else setIsHome(false);
  }, [location]);

  return (
    <div
      style={{
        background: isHome ? "#003585" : "white",
        boxShadow: isHome ? "none" : "0 5px 10px rgba(70, 70, 70, .24) ",
      }}
    >
      <div className="container navbar d-flex" id="navbar">
        <Link to="/">
          <img
            src={isHome ? `./images/svg/E-logo.svg` : `./images/png/logo.png`}
            alt=""
          />
        </Link>

        <NavbarSearch />

        <div className="links">
          {/* <Link to="/"></Link> */}
          <Link to="/signin">
            <BiUser size={32} />
          </Link>
          <Link to="/cart">
            <RiShoppingCart2Line size={32} />
            <span>0</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
