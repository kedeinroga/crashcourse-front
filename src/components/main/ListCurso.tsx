import React from "react";
import "./ListCurso.css";
import CardCurso from "./CardCurso";
import Pagination from "../UI/Pagination";

import ButonFilter from "../UI/Buttons/ButonFilter";
import FormInput from "../UI/FormInput";
import PaginationDesktop from "../UI/PaginationDesktop";

function ListCurso() {
  return (
    <div className="list-curso">
      <h4 className="list-curso__title">Title H4 - Listado de cursos</h4>
      <div className="content-select__filter">
        <FormInput />
      </div>
      <div className="content-button__filter">
        <ButonFilter />
      </div>
      <div className="content-cursos__cards">
        <CardCurso />
        <CardCurso />
        <CardCurso />
        <CardCurso />
        <CardCurso />
      </div>
      <Pagination />
      <PaginationDesktop />
    </div>
  );
}

export default ListCurso;
