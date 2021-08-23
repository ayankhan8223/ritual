import React from "react";
import "./Item3.css";

function Item3() {
  return (
    <div>
      <div className="container">
        <img src="image3.png" alt="" />
        <div className="description">
          <h1>Clean and simple, delivered</h1>
          <p>
            Easy-to-start. Easy-to-cancel. Our team of scientists and
            nutritional experts are on a mission to turn your new healthy habit
            into a Ritual.*
          </p>
          <div className="details">
            <div className="detail">
              <img src="img1.png" alt="" />
              <p>Free shipping</p>
            </div>
            <div className="detail">
              <img src="img2.png" alt="" />
              <p>Control your delivery date</p>
            </div>
            <div className="detail">
              <img src="img3.png" alt="" />
              <p>Free and easy cancellation</p>
            </div>
            <div className="detail">
              <img src="img4.png" alt="" />
              <p>30-day money back guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item3;
