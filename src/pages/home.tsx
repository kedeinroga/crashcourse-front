import React, { Fragment } from "react";
import "./home.css";

import Header from "../components/main/header";
import Hero from "../components/main/hero";
import Categories from "../components/main/categories";
import ListCurso from "../components/main/ListCurso";

function Home() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Categories />
      <ListCurso />
    </Fragment>
  );
}

export default Home;
