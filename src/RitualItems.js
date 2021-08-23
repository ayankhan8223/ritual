import React from "react";
import "./RitualItems.css";

function RitualItems() {
  return (
    <div>
      <div className="ritual__container">
        <div className="ritual__item">
          <img src="ritualitems.png" alt="" />
          <div className="ritual__name">Shop Multivitamin</div>
        </div>

        <div className="ritual__item">
          <img src="ritualitem2.png" alt="" />
          <div className="ritual__name">Shop Multivitamin</div>
        </div>

        <div className="ritual__item">
          <img src="ritualitem3.png" alt="" />
          <div className="ritual__name">Shop Multivitamin</div>
        </div>

        <div className="ritual__item">
          <img src="ritualitem4.png" alt="" />
          <div className="ritual__name">Shop Multivitamin</div>
        </div>
      </div>
    </div>
  );
}

export default RitualItems;
