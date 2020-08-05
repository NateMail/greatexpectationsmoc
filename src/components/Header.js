import React from "react";
import logo from "../photos/header/logo.jpg";

const Header = () => {
  return (
    <div className="header" id="header">
      <div className="header__logo-box">
        <img src={logo} alt="Logo" className="header__logo" />
      </div>
      <div className="header__text-box header__text-box-bg">
        <h1 className="heading-primary">
          <span className="heading-primary--main">
            Great Expectations Tutoring
          </span>
          <span className="heading-primary--sub">South Shore Tutoring</span>
        </h1>
      </div>
    </div>
  );
};

export default Header;
