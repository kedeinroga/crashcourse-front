import React from "react";
import "./ListCurso.css";
import CardCurso from "./CardCurso";

import ButonFilter from "../UI/Buttons/ButonFilter";

function ListCurso() {
  return (
    <div className="list-curso">
      <h4>Title H4 - Listado de cursos</h4>
      <ButonFilter />
      <CardCurso />
    </div>
  );
}

export default ListCurso;
