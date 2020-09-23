import React from "react";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__nav">
            <ul className="footer__list">
              <li className="footer__list__item">
                <a href="#header" className="footer__a">
                  Home
                </a>
              </li>
              <li className="footer__list__item">
                <a href="#services" className="footer__a">
                  Services
                </a>
              </li>
              <li className="footer__list__item">
                <a href="#about" className="footer__a">
                  About
                </a>
              </li>
              <li className="footer__list__item">
                <a href="#rates" className="footer__a">
                  Rates
                </a>
              </li>
              <li className="footer__list__item">
                <a href="#contact" className="footer__a">
                  Contact
                </a>
              </li>
              <li className="footer__list__item">
                <a href="tel:781-783-7565" className="footer__a">
                  781-783-7565
                </a>
              </li>
              <li className="footer__list__item">
                <a
                  href="mailto:greatexpectationssouthshore@gmail.com"
                  className="footer__a"
                >
                  email
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__author">
            This website was built by
            <a href="https://www.natemailhiot.com/" className="footer__a">
              Nate Mailhiot
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
