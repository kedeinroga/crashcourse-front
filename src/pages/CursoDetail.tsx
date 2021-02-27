import React, { Fragment } from "react";
import "./CursoDetail.css";

import Header from "../components/header";
import BannerVideo from "../components/cursodetail/BannerVideo";

function CursoDetail() {
  return (
    <Fragment>
      <Header />
      <BannerVideo />
    </Fragment>
  );
}

export default CursoDetail;
