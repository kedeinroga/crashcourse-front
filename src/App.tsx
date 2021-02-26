import React, { Fragment } from "react";
import logo from "./assets/images/crashcourse.svg";
import "./App.css";

import Header from "./components/header";
import Hero from "./components/hero";
import Categories from "./components/categories";

function App() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Categories />
    </Fragment>
  );
}

export default App;
