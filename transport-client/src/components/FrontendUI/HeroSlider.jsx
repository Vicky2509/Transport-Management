import React from "react";

import Slider from "react-slick";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import '../../Frontend CSS/hero-slider.css';
const HeroSlider = () => {
    const settings = {
        fade:true,
        speed:2000,
        autoplaySpeed: 3000,
        infinite: true,
        autoplay:true,
        slidesToShow:1,
        slidesToScroll:1,
        pauseOnHover: false,
    }
  return (
    <Slider {...settings}className="hero__slider">
      <div className="slider_item slider_item-01 mt0">
        <Container>
          <div className="slider__content">
            <h4 className="text-light mb3">CONVENIENT & MODERN TRANSPORTATION FACILITY</h4>
            <h1 className="text-light mb5">To Give a Comfortable Traveling Experience</h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/ApplyNow">Apply Now</Link>
            </button>
          </div>
        </Container>
      </div>




      <div className="slider_item slider_item-02 mt0">
        <Container>
          <div className="slider__content">
          <h4 className="text-light mb3">CONVENIENT & MODERN TRANSPORTATION FACILITY</h4>
            <h1 className="text-light mb5">To Give a Comfortable Traveling Experience</h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/ApplyNow">Apply Now</Link>
            </button>
          </div>
        </Container>
      </div>



      <div className="slider_item slider_item-03 mt0">
        <Container>
          <div className="slider__content">
          <h4 className="text-light mb3">CONVENIENT & MODERN TRANSPORTATION FACILITY</h4>
            <h1 className="text-light mb5">To Give a Comfortable Traveling Experience</h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/ApplyNow">Apply Now</Link>
            </button>
          </div>
        </Container>
      </div>
    </Slider>
  );
};

export default HeroSlider;
