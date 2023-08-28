import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import userReviews from '../utils/UserReview';
import "../Style/Testimonialcards.css";

export default class Testimonials extends Component {
    render() {
        return (
            <div className="container my-4"> <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={5000}
            >
                {userReviews.map((review) => (
                    <div key={review.id}>
                        <img src={review.image} alt={`User ${review.user}`} />
                        <div className="myCarousel">
                            <h3>{review.user}</h3>
                            <h4>{review.designation}</h4>
                            <p>{review.review}</p>
                            <div>
                                <a href={review.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        color: "rgb(170, 145, 102)",
                                        fontSize: "16px",
                                        border: "3px solid",
                                        fontWeight: "500",
                                        borderRadius: "5px",
                                        padding:"5px",
                                    }}>
                                    Know More
                                </a>
                            </div>
                        </div>

                    </div>
                ))}
            </Carousel></div>

        );
    }
}
