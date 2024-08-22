import React from 'react';
import "./footer.css"

const Footer = () => {
  return (
    <footer className="bg-body-clr text-white py-4">
      <div className="container">
        <div className="row text-center text-md-left">
          <div className="col-md-3 col-6 mb-4 mb-md-0">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Email: contact@ILLUMINTE.com</li>
              <li>Phone: 123456789</li>
              <li>Address: C-260, Sector-63, Noida, UP-201301</li>
            </ul>
          </div>
          <div className="col-md-3 col-6 mb-4 mb-md-0">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Development Process</li>
              <li>Career</li>
            </ul>
          </div>
          <div className="col-md-3 col-6 mb-4 mb-md-0">
            <h5>Service</h5>
            <ul className="list-unstyled">
              <li>Website Development</li>
              <li>Mobile App Development</li>
              <li>E-commerce Development</li>
              <li>Customer Software Development</li>
            </ul>
          </div>
          <div className="col-md-3 col-6 mb-4 mb-md-0">
            <h5>Support</h5>
            <ul className="list-unstyled">
              <li>Contact</li>
              <li>Term & Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
