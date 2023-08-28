import React, { useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import "../App.css";
import Gmap from "../Component/Gmap";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <div>
      <div className="contact">
        <div className="container">
          <div className="section-header">
            <h2>Contact Us</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="contact-info">
                <div className="contact-item">
                  <i className="fa fa-map-marker-alt"></i>
                  <Link
                    to="https://goo.gl/maps/JoyJDkqoTW2yp1CH8"
                    target="_blank"
                  >
                    <div className="contact-text">
                      {/* <h2>Location</h2> */}
                      <p>
                        248, 11 Main, 12th cross Malleshwaram, Bengaluru,
                        Karnataka 560003
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="contact-item">
                  <i className="fa fa-map-marker-alt"></i>
                  <Link
                    to="https://goo.gl/maps/xnTmgmy4Hsgj9jyC8"
                    target="_blank"
                  >
                    <div className="contact-text">
                      {/* <h2>Location</h2> */}
                      <p>
                        #208, 17th E Main Rd, KHB Colony, 5th Block,
                        Koramangala, Bengaluru, Karnataka 560034
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="contact-item">
                  <i className="fa fa-map-marker-alt"></i>
                  <Link
                    to="https://goo.gl/maps/jzNfGVYDXBHxKWwF8"
                    target="_blank"
                  >
                    <div className="contact-text">
                      {/* <h2>Location</h2> */}
                      <p>
                        #537/B, Subhapradha, 11th Block. BSK 6th Stage,
                        Srinivaspura, Uttarahalli Road, Bengaluru – 560060{" "}
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="contact-item">
                  <i className="fa fa-map-marker-alt"></i>
                  <Link
                    to="https://goo.gl/maps/ETP4oeC1XubL9Rwt8"
                    target="_blank"
                  >
                    <div className="contact-text">
                      {/* <h2>Location</h2> */}
                      <p>
                        27, 1st Floor, 1st Cross, Sampige Rd, Malleswaram,
                        Bengaluru, Karnataka 560003
                      </p>
                    </div>
                  </Link>
                </div>
                {/* More contact items */}
              </div>
            </div>
            <div className="col-md-6">
              <div className="contact-container">
                <div className="contact-info">
                  <p>
                    Give us a call or drop by anytime, we endeavour to answer
                    all enquiries within 24 hours on business days. We will be
                    happy to answer your questions.
                  </p>

                  <h4>Call Us</h4>
                  <p>
                    <FaPhone className="icon" />
                    <a href="tel:+917090721111">+91 70907 21111</a>
                  </p>

                  <h4>Mail Us</h4>
                  <p>
                    <FaEnvelope className="icon" />
                    <a href="mailto:info@shoolinconsultancy.in">
                      info@shoolinconsultancy.in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-4"><Gmap /></div>
      
    </div>
  );
};

export default ContactUs;
