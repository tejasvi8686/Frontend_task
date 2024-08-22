import React from "react";
import Test from "../../assets/text.webp";
import './testimonials.css';  

const Testimonials = () => {
  return (
    <div className="container my-5 test-section">
      <h2 className="text-center mb-4">TESTIMONIALS</h2>
      <div
        id="testimonialCarousel"
        className="carousel slide my-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner text-center">
          <div className="carousel-item active">
            <img
              src={Test}
              className="d-block mx-auto rounded-circle testimonial-img"
              alt="Paula Wilson"
            />
            <div className="mt-3">
              <p>
                Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id
                lacinia. Etiam faucibus mauris id <br /> tempor egestas. Duis
                luctus turpis at accumsan tincidunt. Phasellus risus risus,
                volutpat vel tellus ac, tincidunt fringilla massa. 
              </p>
              <div className="mt-3">
                <p className="font-weight-bold text-success mb-0 d-inline fst-italic">
                  PAULA WILSON
                </p>
                <p className="text-muted d-inline ms-2">Media Analyst</p>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src={Test}
              className="d-block mx-auto rounded-circle testimonial-img"
              alt="Paula Wilson"
            />
            <div className="mt-3">
              <p>
                Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id
                lacinia. Etiam faucibus mauris id <br /> tempor egestas. Duis
                luctus turpis at accumsan tincidunt. Phasellus risus risus,
                volutpat vel tellus ac, tincidunt fringilla massa. 
              </p>
              <div className="mt-3">
                <p className="font-weight-bold text-success mb-0 d-inline fst-italic">
                  PAULA WILSON
                </p>
                <p className="text-muted d-inline ms-2">Media Analyst</p>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src={Test}
              className="d-block mx-auto rounded-circle testimonial-img"
              alt="Paula Wilson"
            />
            <div className="mt-3">
              <p>
                Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id
                lacinia. Etiam faucibus mauris id <br /> tempor egestas. Duis
                luctus turpis at accumsan tincidunt. Phasellus risus risus,
                volutpat vel tellus ac, tincidunt fringilla massa. 
              </p>
              <div className="mt-3">
                <p className="font-weight-bold text-success mb-0 d-inline fst-italic">
                  PAULA WILSON
                </p>
                <p className="text-muted d-inline ms-2">Media Analyst</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon clr-btn"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon clr-btn"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>

        {/* Indicators */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
