import React from "react";
import "./PaymentSummary.css";

import IconCursoDetail from "../UI/IconCusoDetail";

function PaymentSummary() {
  return (
    <div className="summary">
      <p className="summary-text">Resumen</p>
      <div className="summary-card">
        <div className="summary-card__photo"></div>
        <div className="summary-card__data">
          <p className="summary__name--course">Nombre del curso </p>
          <p className="summary__name--teacher">Profesor del curso</p>
        </div>
        <IconCursoDetail />
        <div className="summary-card__prices">
          <div className="summary__cost">
            <p className="summary__cost--text">Subtotal</p>
            <p className="Subtotal">CO$ 199,999</p>
          </div>
          <div className="summary__cost">
            <p className="summary__cost--text">Tarjeta</p>
            <p className="Subtotal">20% Dto.</p>
          </div>
          <div className="summary__cost">
            <p className="summary__cost--text">Total a pagar</p>
            <p className="total">CO$ 149,999</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentSummary;
