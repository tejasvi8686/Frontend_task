import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <a className="navbar-brand text-primary" href="/">
          Jillion Technologies
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link text-primary" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-primary" href="#features">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-primary" href="#products">Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-primary" href="#testimonials">Testimonials</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-primary" href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
