import React, { useState, useEffect } from "react";
import { Routes, Route,Link } from "react-router-dom";
import Home from "./Pages/Home";
import Contact_Us from "./Pages/Contact_Us";
import About from "./Pages/About";
import Top_bar from "./Component/Top_bar";
import Navbar from "./Component/Navbar";
import Testimonials from "./Component/Testimonials";
import Our_Services from "./ServicePages/Our_Services";
import Check_Bounce from "./ServicePages/check_Bounce";
import Criminal_Cases from "./ServicePages/Criminal_Cases";
import Cyber_Crime from "./ServicePages/Cyber_Crime";
import Divvorce_Matter from "./ServicePages/Divvorce_Matter";
import Economic_offens from "./ServicePages/Economic_Offens";
import Ndps from "./ServicePages/Ndps";
import Footer from "./Component/Footer";
import Whatsapp from "./Component/Whatsapp";
import BlogHome from "./Pages/BlogHome";
import BlogDetails from "./Pages/BlogDetails";
import blogPosts from "./utils/BlogData";
import logo from "./img/loading_logo.webp";

function App() {
  const [loading, setLoading] = useState(true);
  const [disclaimerAccepted, setDisclaimerAccepted] = useState(false);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(loadingTimer);
    };
  }, []);

  const loadingPercentage = loading ? 0 : 100;

  return (
    <>
    {disclaimerAccepted ? (
      <>
        <div
          className="loading-progress-bar"
          style={{ width: `${loadingPercentage}%` }}
        />
        {loading ? (
          <div className="preloader">
            <div className="preloader-logo-container">
              <img src={logo} alt="Company Logo" className="preloader-logo" />
            </div>
            <p className="loading-text">
              <span className="loading-dots"></span>
            </p>
          </div>
        ) : (
          <>
            <Top_bar />
            <Navbar />
            <Whatsapp />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contactUs" element={<Contact_Us />} />
                <Route path="/about" element={<About />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/ourServices" element={<Our_Services />} />
                <Route path="/chequeBounce" element={<Check_Bounce />} />
                <Route path="/criminalCase" element={<Criminal_Cases />} />
                <Route path="/cyberCrime" element={<Cyber_Crime />} />
                <Route path="/divorce" element={<Divvorce_Matter />} />
                <Route path="/ndps" element={<Ndps />} />
                <Route
                  exact
                  path="/blog"
                  element={<BlogHome posts={blogPosts} />}
                />
                <Route
                  path="/blog/:id"
                  element={<BlogDetails posts={blogPosts} />}
                />
                <Route path="/property" element={<Economic_offens />} />
                </Routes>
              <Footer />
            </>
          )}
        </>
      ) : (
        <div className="disclaimer-overlay">
          <div className="disclaimer-container">

            <h2 style={{ color: "#aa9166", fontWeight: "400" }}>Disclaimer</h2>
            <p>
              The Bar Council of India does not permit advertisement or
              solicitation by advocates in any form or manner. By accessing
              this website,{" "}
              <span>
                <a
                  className="disclaimer_link"
                  href="https://www.shoolinconsultancy.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.shoolinconsultancy.org
                </a>
              </span>
              , you acknowledge and confirm that you are seeking information
              relating to Shoolin Consultancy of your own accord and that there
              has been no form of solicitation, advertisement, or inducement by
              Shoolin Consultancy or its members. The content of this website is
              for informational purposes only and should not be interpreted as
              soliciting or advertisement. No material/information provided on
              this website should be construed as legal advice. Shoolin
              Consultancy shall not be liable for the consequences of any action
              taken by relying on the material/information provided on this
              website. The contents of this website are the intellectual property
              of Shoolin Consultancy.
            </p>
            <button
              onClick={() => setDisclaimerAccepted(true)}
              style={{
                padding: "5px",
                borderRadius: "7px",
                color: "#aa9166",
                fontWeight: "400",
              }}
            >
              I Accept
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
