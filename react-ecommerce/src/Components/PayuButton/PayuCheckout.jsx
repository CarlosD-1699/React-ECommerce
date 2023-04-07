import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/esm/Button";

const PayuCheckout = ({ email, fullName, shippingAdress, createOrder, onApprove, onError }) => {
  const handlePayClick = async () => {
    const info = createOrder();
    const [amount, orderID] = info;
    try {
      await axios.post('/api/pay/payment_gateway/payumoney', {
        email,
        fullName,
        shippingAdress,
        amount,
        orderID,
      }, { withCredentials: true } );
      onApprove();
    } catch (error) {
      onError();
    }
  };
  return <Button onClick={handlePayClick}>Pagar con PayU</Button>;
};

export default PayuCheckout;
