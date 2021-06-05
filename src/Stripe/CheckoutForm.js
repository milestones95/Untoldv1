import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

export const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      console.log("Stripe 23 | token generated!", paymentMethod);
      try {
        const { id } = paymentMethod;
        const response = await axios.post(
          "http://localhost:8080/stripe/charge",
          {
            amount: 999,
            id: id,
          }
        );

        console.log("Stripe 35 | data", response.data);
        if (response.data.success) {

          console.log("CheckoutForm.js 25 | subscription successful!");
        }
      } catch (error) {
        console.log("CheckoutForm.js 28 | ", error);
      }
    } else {
      console.log(error.message);
    }
  };

  const handleCancel = async (event) => {
    event.preventDefault();
    try {
    const response = await axios.post(
      "http://localhost:8080/stripe/cancel",
      {
        id: 'sub_JZ2NPhAgNXoO0T',
      }
    );

        console.log("Stripe 35 | data", response.data.success);
      if (response.data.success) {
        console.log('response: ' + response.data);
        console.log("CheckoutForm.js 25 | subscription successfully canceled!");
      }
    }catch (error) {
        console.log("CheckoutForm.js 28 | ", error);
      }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
        <CardElement />
        <button>Pay</button>
      </form>
      <form onSubmit={handleCancel} style={{ maxWidth: 400 }}>
        <button>Cancel</button>
      </form>
    </div>
  );
};
