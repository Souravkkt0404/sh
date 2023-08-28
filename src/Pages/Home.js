import React from "react";
import "../App.css";

import Img3 from "../img/about.jpg";
import Img4 from "../img/feature.jpg";
import { Link } from "react-router-dom";

import { ServiceCards } from "../utils/ServiceCards";
import Our_Team_Comp from "../Component/Our_Team_Comp";
import Carousel from "../Component/Carousel";
import Feature from "../Component/Feature";
// import Blog from "../Component/Blog";

const Home = () => {
  const handleTopBtnClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div className="wrapper">
        <Carousel />
        <Feature/>
      

        <div className="about">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-6">
                <div className="about-img">
                  <img src={Img3} alt="Image" />
                </div>
              </div>
              <div className="col-lg-7 col-md-6">
                <div className="section-header">
                  <h3>About Shoolin Consultancy</h3>
                </div>
                <div className="about-text">
                  <p>
                    We are an Advocate law firm located at Malleshwaram,
                    Bengaluru. We are a team of experienced lawyers practicing
                    before the High Court, City Court, Magistrate Court, and
                    Family Court. We are specialized in the field of Criminal
                    Law, Cheque Bounce cases, Matrimonial / Divorce cases, etc.
                    We are known for giving reliable and quick solutions to our
                    clients in accordance with the Law. We, at Shoolin, hold the
                    record of giving the best possible results to our clients
                    and are known for being responsive and reliable. Our main
                    goal is to serve our clients and secure their interests.
                  </p>
                  <p></p>
                  <Link className="btn" to="/about">
                    Know More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="service">
          <div className="container">
            <div className="section-header">
              <h2>Our Practices Areas</h2>
              <hr />
            </div>

            <div className="row">
              {ServiceCards.map((items, index) => (
                <div className="col-lg-4 col-md-6" key={index}>
                  <div className="service-item">
                    <div className="service-icon">
                      <i className={items.icon}></i>
                    </div>
                    <div style={{ width: "100%", height: "60%" }}>
                      <h3>{items.title}</h3>
                      <p>{items.desc}</p>
                    </div>

                    <Link
                      className="btn"
                      to={items.to}
                      onClick={handleTopBtnClick}
                    >
                      Know More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="feature">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <div className="section-header">
                  <h2>Why Choose Us</h2>
                </div>
                <div className="row align-items-center feature-item">
                  <div className="col-5">
                    <div className="feature-icon">
                      <i className="fa fa-gavel"></i>
                    </div>
                  </div>
                  <div className="col-7">
                    <h3>Best law practices</h3>
                    <p>
                      Excellence in every case, backed by proven legal
                      expertise.
                    </p>
                  </div>
                </div>
                <div className="row align-items-center feature-item">
                  <div className="col-5">
                    <div className="feature-icon">
                      <i className="fa fa-balance-scale"></i>
                    </div>
                  </div>
                  <div className="col-7">
                    <h3>Efficiency & Trust</h3>
                    <p>
                      Combining swift action with unwavering reliability for
                      your peace of mind.
                    </p>
                  </div>
                </div>
                <div className="row align-items-center feature-item">
                  <div className="col-5">
                    <div className="feature-icon">
                      <i className="far fa-smile"></i>
                    </div>
                  </div>
                  <div className="col-7">
                    <h3>Results you deserve</h3>
                    <p>
                      Dedicated to securing the justice and outcomes you
                      rightfully seek.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="feature-img">
                  <img src={Img4} alt="Feature" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Our_Team_Comp />
      </div>
    </div>
  );
};

export default Home;
