import React, { Fragment } from "react";
import logo from "./assets/images/crashcourse.svg";
import "./App.css";

import Header from "./components/header";
import Hero from "./components/hero";

function App() {
  return (
    <Fragment>
      <Header />
      <Hero />
    </Fragment>
  );
}

export default App;
