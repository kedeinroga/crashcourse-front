import React, { Fragment } from "react";
import logo from "./assets/images/crashcourse.svg";
import "./App.css";

import Header from "./components/header";
import Hero from "./components/hero";
import Categories from "./components/categories";
import ListCurso from "./components/ListCurso";

function App() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Categories />
      <ListCurso />
    </Fragment>
  );
}

export default App;
