import React from "react";
import "./ListCurso.css";
import CardCurso from "./CardCurso";
import Pagination from "../UI/Pagination";

import ButonFilter from "../UI/Buttons/ButonFilter";

function ListCurso() {
  return (
    <div className="list-curso">
      <h4 className="list-curso__title">Title H4 - Listado de cursos</h4>
      <ButonFilter />
      <CardCurso />
      <CardCurso />
      <Pagination />
    </div>
  );
}

export default ListCurso;
