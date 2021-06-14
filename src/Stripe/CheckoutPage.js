import React, { useEffect, useState } from "react";
import { Route, Redirect } from 'react-router-dom'
import "../css/stripe.css"
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

export const CheckoutPage = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [link, linkSet] = React.useState([]);


  const purchaseStory = async (event) => {
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
          "http://localhost:8080/purchase",
          {
            amount: 999,
            id: id,
          }
        );

        console.log("Stripe 35 | data", response.data);
        if (response.data.success) {

          console.log("story purchase successful!");
        }
      } catch (error) {
        console.log("", error);
      }
    } else {
      console.log(error.message);
    }
  };



  return (
    <div>
       <form onSubmit={purchaseStory} style={{ maxWidth: 400 }}>
        <button>Buy</button>
      </form>
    </div>
  );
};
