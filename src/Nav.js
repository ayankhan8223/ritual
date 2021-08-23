import React from "react";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import "./Nav.css";
function Nav() {
  return (
    <div className="nav">
      <h3>Menu</h3>
      <h2>Ritual</h2>
      <div className="bag__container">
        <h2>Who We Are</h2>
        <LocalMallOutlinedIcon />
      </div>
    </div>
  );
}

export default Nav;
