import React from "react";
import Header from "../components/Header/Header";
import { default as CheckoutPage } from "../components/Checkout/Checkout";

const Checkout = () => {
  return (
    <>
      <Header />
      <CheckoutPage />
    </>
  );
};

export default Checkout;
