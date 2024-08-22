import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FeatureIMG from "../../assets/features.webp";
import FeatureIMG2 from "../../assets/features2.webp"
import './features.css';

const FeaturesSection = () => {
  return (
    <div className="container my-5 feature-section">
      <h2 className="text-center mb-5 animate__animated animate__fadeIn">Features</h2>
      <div className="row align-items-start head-features">
        <div className="col-md-6 text-center animate__animated animate__fadeInLeft">
          <img
            src={FeatureIMG}
            alt="Feature Illustration"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 animate__animated animate__fadeInRight">
          <h4>Card Title</h4>
          <p>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
        </div>
      </div>
      <div className="row align-items-start head-features">
        <div className="col-md-6 animate__animated animate__fadeInLeft">
          <h4>Card Title</h4>
          <p>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
        </div>
        <div className="col-md-6 text-center animate__animated animate__fadeInRight">
          <img
            src={FeatureIMG2}
            alt="Feature Illustration"
            className="img-fluid"
          />
        </div>
      </div>
      <div className="row flex-col-reverse align-items-start head-features">
        <div className="col-md-6 text-center animate__animated animate__fadeInLeft">
          <img
            src={FeatureIMG}
            alt="Feature Illustration"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 animate__animated animate__fadeInRight">
          <h4>Card Title</h4>
          <p>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
