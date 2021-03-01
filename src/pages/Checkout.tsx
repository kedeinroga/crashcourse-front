import React, { Fragment } from "react";
import "./Checkout.css";

import HeaderCheckout from "../components/checkout/HeaderCheckout";
import StepsPay from "../components/checkout/StepsPay";
import PaymentSummary from "../components/checkout/PaymentSummary";
import PaymentMethod from "../components/checkout/PaymentMethod";
import LegalNotes from "../components/checkout/LegalNotes";

function Checkout() {
  return (
    <Fragment>
      <HeaderCheckout />
      <div className="checkout-mobile">
        <StepsPay />
        <PaymentSummary />
        <PaymentMethod />
        <LegalNotes />
      </div>
      <div className="checkout-desktop">
        <div className="checkout-desktop__one">
          <StepsPay />
          <PaymentMethod />
        </div>
        <div className="checkout-desktop__two">
          <PaymentSummary />
          <LegalNotes />
        </div>
      </div>
    </Fragment>
  );
}

export default Checkout;
