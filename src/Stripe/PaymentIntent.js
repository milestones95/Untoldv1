import React, { useEffect, useState } from "react";
import { Route, Redirect } from 'react-router-dom'
import "../css/stripe.css"
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

export const PaymentIntent = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [link, linkSet] = React.useState([]);


  const purchaseStory = async (event) => {
    event.preventDefault();
    // const { error, paymentMethod } = await stripe.createPaymentMethod({
    //   type: "card",
    //   card: elements.getElement(CardElement),
    // });


      // console.log("Stripe 23 | token generated!", paymentMethod);
      try {
        // const { id } = paymentMethod;
        const response = await axios.post(
          "http://localhost:8080/purchase",
          {
          }
        );

        console.log("Stripe 35 | data", response.data);
        if (response.data.success) {

          console.log("story purchase successful!");
        }
      } catch (error) {
        console.log("", error);
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
