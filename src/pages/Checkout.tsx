import React, { Fragment } from "react";
import "./Checkout.css";

import HeaderCheckout from "../components/checkout/HeaderCheckout";
import StepsPay from "../components/checkout/StepsPay";

function Checkout() {
  return (
    <Fragment>
      <HeaderCheckout />
      <StepsPay />
    </Fragment>
  );
}

export default Checkout;
