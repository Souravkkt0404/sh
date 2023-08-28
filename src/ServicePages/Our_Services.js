
import "../Style/Our_Services.css";
import Img3 from "../img/single.jpg";
import { Link } from "react-router-dom";

import { ServiceCards } from "../utils/ServiceCards";

function ResponsiveExample() {
  const handleTopBtnClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
    <div >
      <div className="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-6">
              <div className="about-img">
                <img src={Img3} alt="Image" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div>
                <h2>OUR SERVICES</h2>
              </div>
              <div className="about-text">
                <p>
                  No matter what type of legal support you’re looking for, we
                  have the resources and expertise to help. See our services
                  below, and contact us if you have any questions or special
                  requests.
                </p>

                <p></p>
                <Link to="/contactUs">
                  <a className="btn" href="">
                    contact us
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <div className="headers"  >
              <h2>Our Services</h2>
            </div>
          </div>
        </div>
        <hr></hr>

        <div className="cardesgroup">
          {ServiceCards.map((items, index) => (
            <div className="cards" key={index}>
              <img src={items.image} alt="Card Image" />
              <div style={{ width: "100%", height: "13rem" }}>
                <h3>{items.title}</h3>
                <p>{items.desc}</p>
              </div>
              <Link to={items.to}>
                <button className="button" onClick={handleTopBtnClick}>
                  <span>Read More</span>
                </button>
              </Link>
            </div>
          ))}

          
        </div>
      </div>
    </div>
  );
}

export default ResponsiveExample;
