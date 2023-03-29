import React from "react";
import axios from "axios";
import Button from "react-bootstrap/esm/Button";

const PayuCheckout = ({ email, fullName, shippingAdress, amount, onApprove, onError }) => {
  const handlePayClick = async () => {
    try {
      await axios.post('/payu/test', {
        email,
        fullName,
        shippingAdress,
        amount,
      }, { withCredentials: true } );
      onApprove();
    } catch (error) {
      onError();
    }
  };
  return <Button onClick={handlePayClick}>Pagar con PayU</Button>;
};

export default PayuCheckout;
