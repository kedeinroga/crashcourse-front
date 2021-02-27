import React, { Fragment } from "react";
import "./CursoDetail.css";

import Header from "../components/header";
import BannerVideo from "../components/cursodetail/BannerVideo";
import CursoInfo from "../components/cursodetail/CursoInfo";
import IconsAction from "../components/UI/IconsAction";

function CursoDetail() {
  return (
    <Fragment>
      <Header />
      <BannerVideo />
      <CursoInfo />
      <IconsAction />
    </Fragment>
  );
}

export default CursoDetail;
