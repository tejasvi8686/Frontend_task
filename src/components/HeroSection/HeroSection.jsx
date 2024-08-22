import React from "react";
import HeroImage from "../../assets/herosection.webp";
import "../HeroSection/herosection.css";

const HeroSection = () => {
  return (
    <div className="container hero-section">
      <div className="row align-items-center">
        <div className="col-md-6 text-md-left">
          <div className="head-section animate-fadeInLeft">
            <h1 className="head-color">WE MAKE YOUR IDEA'S</h1>
            <h1 className="text-warning">INTO REALITY</h1>
          </div>
          <p className="lead mt-4 animate-fadeIn">
            Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>

          <div className="mt-4">
            <button className="btn btn-color me-3 animate-pulse">Get Started</button>
            <button className="btn btn-outline-secondary animate-pulse">Contact Us</button>
          </div>
        </div>
        <div className="col-md-6 text-center">
          <img src={HeroImage} alt="Illustration" className="img-fluid animate-zoomIn" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
