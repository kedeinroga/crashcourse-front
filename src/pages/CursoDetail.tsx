import React, { Fragment } from "react";
import "./CursoDetail.css";

import Header from "../components/header";
import BannerVideo from "../components/cursodetail/BannerVideo";
import CursoInfo from "../components/cursodetail/CursoInfo";
import IconsAction from "../components/UI/IconsAction";
import CourseSyllabus from "../components/cursodetail/CourseSyllabus";
import CourseAbout from "../components/cursodetail/CourseAbout";
import CourseProjects from "../components/cursodetail/CourseProjects";
import Ratings from "../components/cursodetail/Ratings";
import FrequentQuestions from "../components/cursodetail/FrequentQuestions";
import CursoPrice from "../components/UI/CursoPrice";
import Button from "../components/UI/Buttons/Button";
import AddCart from "../components/UI/Buttons/AddCart";

function CursoDetail() {
  return (
    <Fragment>
      <Header />
      <div className="course-info__content">
        <div className="course-info__content--video">
          <BannerVideo />
          <div className="content__price-buttons desktop">
            <CursoPrice />
            <Button />
            <AddCart />
          </div>
        </div>
        <div className="course-info__content--div">
          <CursoInfo />
          <IconsAction />
        </div>
      </div>
      <CourseSyllabus />
      <CourseAbout />
      <CourseProjects />
      <Ratings />
      <FrequentQuestions />
    </Fragment>
  );
}

export default CursoDetail;
