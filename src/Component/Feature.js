import React from "react";

const Feature = () => {
  return (
    <div className="feature-top">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-3 col-sm-6">
            <div className="feature-item">
              <i className="far fa-check-circle"></i>
              <h3>Legal</h3>
              <p className="center">Govt Approved</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="feature-item">
              <i className="fa fa-user-tie"></i>
              <h3>Attorneys</h3>
              <p className="center">Expert Attorneys</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="feature-item">
              <i className="far fa-thumbs-up"></i>
              <h3>Success</h3>
              <p className="center">99.99% Case Won</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="feature-item">
              <i className="far fa-handshake"></i>
              <h3>Support</h3>
              <p className="center">Quick Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
