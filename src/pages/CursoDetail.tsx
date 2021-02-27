import React, { Fragment } from "react";
import "./CursoDetail.css";

import Header from "../components/header";
import BannerVideo from "../components/cursodetail/BannerVideo";
import CursoInfo from "../components/cursodetail/CursoInfo";

function CursoDetail() {
  return (
    <Fragment>
      <Header />
      <BannerVideo />
      <CursoInfo />
    </Fragment>
  );
}

export default CursoDetail;
