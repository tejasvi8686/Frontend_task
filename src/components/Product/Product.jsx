import React from "react";
import cardIMG from "../../assets/lplp.jpg";
import "./product.css"

const Product = () => {
  return (
    <div className="container my-5 product-section">
      <h2 className="text-center mb-5 animate__animated animate__fadeIn">Products</h2>
      <div className="row">
        <div className="col-md-4 mb-4 animate__animated animate__fadeInUp">
          <div className="card">
            <img src={cardIMG} className="card-img-top" alt="..." style={{ borderRadius: "0" }} />
            <div className="card-body">
              <h5>Card title 1</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4 animate__animated animate__fadeInUp animate__delay-1s">
          <div className="card">
            <img src={cardIMG} className="card-img-top" alt="..." style={{ borderRadius: "0" }} />
            <div className="card-body">
              <h5>Card title 2</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4 animate__animated animate__fadeInUp animate__delay-2s">
          <div className="card">
            <img src={cardIMG} className="card-img-top" alt="..." style={{ borderRadius: "0" }} />
            <div className="card-body">
              <h5>Card title 3</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
