import React from 'react';
import "./contactus.css";
import ContactIMG from "../../assets/contactus.png";

const Contactus = () => {
  return (
    <div className="container mt-5 mb-5 contact-section">
      <h2 className="text-center mb-4 animate-heading">Contact Us</h2>
      <div className="row justify-content-center align-items-center animate-section">
        
        {/* Image Section with animation */}
        <div className="col-md-6 animate-image">
          <img
            src={ContactIMG}
            alt="Illustration"
            className="img-fluid"
          />
        </div>
        
        {/* Form Section with animation */}
        <div className="col-md-6 animate-form">
          <form>
            <div className="form-group mb-3">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Name"
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="message">Example textarea</label>
              <textarea
                className="form-control"
                id="message"
                rows="3"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-ctn-clr animate-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
