import React from "react";
import Goals from "../utils/Goals";
import Img1 from "../img/About1.webp";
import Img2 from "../img/yours.webp";
import { IoMdFlash } from "react-icons/io";
import { Link } from "react-router-dom";
import { OurTeams } from "../utils/OurTeam";
import "../App.css";
import Our_Team_Comp from "../Component/Our_Team_Comp";

const About = () => {
  const goalsData = [
    {
      title: "Client Interest above all",
      description: `We hold ourselves accountable to our clients by taking
      responsibilty of our actions & how it can affect people we
      serve.`,
    },
    {
      title: "Integrity & Honesty",
      description: `Conducting ourselves with integrity & doing the right thing
      for our clients under all circumstances`,
    },
    {
      title: "Respect & Reverence",
      description: `Committed to a philosophy of mutual respect in all our
      dealings with clients, and all our stakeholders`,
    },
    {
      title: "Loyalty",
      description: `Committed to exhibit loyalty to those we serve and work
      with. It is a key to maintain a culture of mutual support.`,
    },
    {
      title: "Professionalism",
      description: `Committed to providing innovative, creative, consistent and
      high-quality value added services`,
    },
    // Add more goals here
  ];
  // AOS.init();
  return (
    <div className="">
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>About Us</h2>
            </div>
            {/* <div className="col-12">
              <a href="/">Home</a>
              <a href="">About Us</a>
            </div> */}
          </div>
        </div>
      </div>
      <div>
        <div className="about">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-6">
                <div className="about-img">
                  <img src={Img1} alt="Image" />
                </div>
              </div>
              <div className="col-lg-7 col-md-6">
                <div className="section-header">
                  <h2>Get to Know Us</h2>
                </div>
                <div className="about-text">
                  <h5>Get to Know Us Experienced Legal Counsel</h5>
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
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="feature-top">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-4 col-sm-6">
                <div className="feature-item">
                  <i className="fa fa-bolt"></i>
                  <h3>Extraordinary Rapid Consultancy</h3>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="feature-item">
                  <i className="fa fa-user-tie"></i>
                  <h3>Best Corporate Technology</h3>
                </div>
              </div>

              <div className="col-md-4 col-sm-6">
                <div className="feature-item">
                  <i className="far fa-handshake"></i>
                  <h3>Support</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about">
          <div className="container">
            <div className="right">
              <div className="row align-items ">
                <div className="col-lg-5 col-md-6">
                  <div className="about-img">
                    <img src={Img2} alt="Image" />
                  </div>
                </div>
                <div className="col-lg-7 col-md-6">
                  <div className="section-header">
                    <h2>OUR MISSION</h2>
                  </div>
                  <div className="about-text">
                    <h5></h5>
                    <p>
                      Our goal is to give legal relaxation to our clients by
                      serving them with a complete solution, setting high
                      standards of professional excellence combined with rich
                      experience. We aspire to be the first choice, one-stop
                      firm, consistently focusing on long-term client needs by
                      offering the most effective, trusted, and first-generation
                      solutions, while adhering to the highest standards of
                      ethics and integrity.
                    </p>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="about">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-6">
                <div className="about-img">
                  <img src={Img1} alt="Image" />
                </div>
              </div>
              <div className="col-lg-7 col-md-6">
                <div className="section-header">
                  <h2>OUR VISION</h2>
                </div>
                <div className="about-text">
                  <li>
                    To act as a catalyst in the growth story of the corporate
                  </li>
                  <li>
                    To deliver the best solution in the most ethical, rational
                    and cost-effective manner
                  </li>
                  <li>
                    Help in solving the most complex problems through our rich
                    experience and detailed research-oriented approach
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>

        <div className="timeline">
          <div className="container">
            <div className="section-header">
              <h2>OUR GOALS</h2>
            </div>
            <Goals goalsData={goalsData} />
          </div>
        </div>

        <Our_Team_Comp />
      </div>
    </div>
  );
};

export default About;
