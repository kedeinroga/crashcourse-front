import React, { Fragment } from "react";
import "./CursoDetail.css";

import Header from "../components/header";
import BannerVideo from "../components/cursodetail/BannerVideo";
import CursoInfo from "../components/cursodetail/CursoInfo";
import IconsAction from "../components/UI/IconsAction";
import CourseSyllabus from "../components/cursodetail/CourseSyllabus";
import CourseAbout from "../components/cursodetail/CourseAbout";
import CourseProjects from "../components/cursodetail/CourseProjects";

function CursoDetail() {
  return (
    <Fragment>
      <Header />
      <BannerVideo />
      <CursoInfo />
      <IconsAction />
      <CourseSyllabus />
      <CourseAbout />
      <CourseProjects />
    </Fragment>
  );
}

export default CursoDetail;
