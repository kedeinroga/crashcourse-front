import React, { Fragment } from "react";
import logo from "../../assets/images/crashcourse.svg";
import "./header.css";
import ButtonRegister from "../UI/Buttons/ButtonRegister";

function Header() {
  return (
    <Fragment>
      <div className="nav-mobile">
        <div className="navtoggle">
          <input type="checkbox" id="hamburger-check"></input>
          <label htmlFor="hamburger-check" className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </label>
          <div>
            <i className="ri-earth-fill"></i>
            <img src={logo} alt="Crashcourse" />
          </div>
          <i className="ri-search-line"></i>
          {/* here content if there is something to show after clicking on the burger */}
        </div>
      </div>
      <div className="nav-desktop">
        <div>
          <i className="ri-earth-fill"></i>
          <img src={logo} alt="Crashcourse" />
        </div>
        <ButtonRegister />
      </div>
    </Fragment>
  );
}

export default Header;
