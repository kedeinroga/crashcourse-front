import React from "react";
import "./ListCurso.css";
import CardCurso from "./CardCurso";
import Button from "./Button";

function ListCurso() {
  return (
    <div className="list-curso">
      <h4>Title H4 - Listado de cursos</h4>
      <CardCurso />
      <Button />
    </div>
  );
}

export default ListCurso;
