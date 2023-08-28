import React from "react";
import Img from "../img/carousel-1.jpg";
import Img1 from "../img/carousel-2.jpg";
import Img2 from "../img/carousel-3.jpg";


const Carousel = () => {
  return (
    <div
      id="carousel"
      className="carousel slide"
      data-ride="carousel"
      data-interval="6000"
      data-pause="hover"
    >
      <ol className="carousel-indicators">
        <li data-target="#carousel" data-slide-to="0" className="active"></li>
        <li data-target="#carousel" data-slide-to="1"></li>
        <li data-target="#carousel" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Img} alt="Carousel Image" />
        </div>

        <div className="carousel-item">
          <img src={Img1} alt="Carousel Image" />
        </div>

        <div className="carousel-item">
          <img src={Img2} alt="Carousel Image" />
        </div>
      </div>

      <a
        className="carousel-control-prev"
        href="#carousel"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carousel"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousel;
