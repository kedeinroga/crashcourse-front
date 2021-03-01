import React from "react";
import "./StepsPay.css";

function StepsPay() {
  return (
    <div className="steps-pay">
      <div className="step">
        <div className="step-circle one">1</div>
        <p className="step-one">Proceso de pago</p>
      </div>
      <i className="ri-arrow-right-s-line"></i>
      <div className="step">
        <div className="step-circle two">2</div>
        <p className="step-two">Paso 2</p>
      </div>
    </div>
  );
}

export default StepsPay;
