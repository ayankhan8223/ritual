import React from "react";
import "./Item1.css";

function Item1() {
  return (
    <div>
      <div className="container">
        <img src="image1.png" alt="" />
        <div className="description">
          <h1>We're not about pseudoscience and half-truths</h1>
          <p>
            From Omega-3 DHA from microalgae to regeneratively-farmed pea
            protein, our scientists studied diets and genetics to make daily
            essentials based on what we need.
          </p>
          <a href="">Who We are</a>
        </div>
      </div>
    </div>
  );
}

export default Item1;
