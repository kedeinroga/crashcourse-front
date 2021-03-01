import React, { Fragment } from "react";
import "./Checkout.css";

import HeaderCheckout from "../components/checkout/HeaderCheckout";
import StepsPay from "../components/checkout/StepsPay";
import PaymentSummary from "../components/checkout/PaymentSummary";

function Checkout() {
  return (
    <Fragment>
      <HeaderCheckout />
      <StepsPay />
      <PaymentSummary />
    </Fragment>
  );
}

export default Checkout;
