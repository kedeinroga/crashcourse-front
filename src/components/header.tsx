import React, { Fragment } from "react";
import logo from "./../assets/images/crashcourse.svg";
import "./header.css";

function Header() {
  return (
    <Fragment>
      <img src={logo} alt="Crashcourse" />
      <input type="checkbox" id="hamburger-check"></input>
      <label for="hamburger-check" class="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </Fragment>
  );
}

export default Header;
