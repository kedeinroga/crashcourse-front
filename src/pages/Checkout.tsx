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
      <StepsPay />
      <PaymentSummary />
      <PaymentMethod />
      <LegalNotes />
    </Fragment>
  );
}

export default Checkout;
