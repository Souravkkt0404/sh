import React from "react";
import { Link } from "react-router-dom";
import {
  contactLinks,
  socialLinks,
  serviceAreas,
  usefulPages,
  locationLinks,
} from "../utils/FooterData"; // Update the path to match the actual path of your footerData.js file

const FooterLink = ({ title, links, handleClick }) => (
  <div className="">
    <div className="footer-link">
      <h2>{title}</h2>
      {links.map((link, index) => (
        <Link key={index} onClick={handleClick} to={link.to}>
          {link.label}
        </Link>
      ))}
    </div>
  </div>
);

const Footer = () => {
  const handleTopBtnClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-divition">
            <div>
              <FooterLink
                title="Get In Touch"
                links={contactLinks}
                
              />
              <div className="footer-social">
                {socialLinks.map((link, index) => (
                  <Link
                    key={index}
                    onClick={handleTopBtnClick}
                    to={link.to}
                    target={link.target}
                  >
                    <i className={link.icon}></i>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <FooterLink
                title="Services Areas"
                links={serviceAreas}
                handleClick={handleTopBtnClick}
              />
            </div>

            <div>
              {" "}
              <FooterLink
                title="Useful Pages"
                links={usefulPages}
                handleClick={handleTopBtnClick}
              />
            </div>

            <div className="footer-contact-us">
              <h2 className="text-center">Visit Us </h2>
              {locationLinks.map((link, index) => (
                <Link
                  key={index}
                  // onClick={handleTopBtnClick}
                  to={link.to}
                  target={link.target}
                >
                  <div className="footer-text">{link.label}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
