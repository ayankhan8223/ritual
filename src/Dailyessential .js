import React from "react";
import "./Dailyessential.css";

function Dailyessential() {
  return (
    <div className="daily">
      <h1 className="daily__title">
        Daily essentials with good intentions — for living life or creating it.
      </h1>
      <div className="daily__container">
        <div className="daily__items">
          <img src="icon1.png" alt="" />
          <p>Traceable Ingredients</p>
        </div>
        <div className="daily__items">
          <img src="icon2.png" alt="" />
          <p>Traceable Ingredients</p>
        </div>
        <div className="daily__items">
          <img src="icon 3.png" alt="" />
          <p>Traceable Ingredients</p>
        </div>
        <div className="daily__items">
          <img src="icon4.png" alt="" />
          <p>Traceable Ingredients</p>
        </div>
        <div className="daily__items">
          <img src="icon5.png" alt="" />
          <p>Traceable Ingredients</p>
        </div>
      </div>
    </div>
  );
}

export default Dailyessential;
