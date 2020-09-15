import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  PaymentRequestButtonElement,
  useStripe
} from '@stripe/react-stripe-js';

const App = props => {
  const stripe = useStripe();
  const [paymentRequest, setPaymentRequest] = useState(null);
  const handlePaymentMethodReceived = async event => {
    // Send the payment details to our function.
    const paymentDetails = {
      payment_method: event.paymentMethod.id,
      shipping: {
        name: event.shippingAddress.recipient,
        phone: event.shippingAddress.phone,
        address: {
          line1: event.shippingAddress.addressLine[0],
          city: event.shippingAddress.city,
          postal_code: event.shippingAddress.postalCode,
          state: event.shippingAddress.region,
          country: event.shippingAddress.country
        }
      }
    };
    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ paymentDetails })
    }).then(res => {
      return res.json();
    });
    if (response.error) {
      // Report to the browser that the payment failed.
      console.log(response.error);
      event.complete('fail');
    } else {
      // Report to the browser that the confirmation was successful, prompting
      // it to close the browser payment method collection interface.
      event.complete('success');
      // Let Stripe.js handle the rest of the payment flow, including 3D Secure if needed.
      const { error, paymentIntent } = await stripe.confirmCardPayment(
        response.paymentIntent.client_secret
      );
      if (error) {
        console.log(error);
        return;
      }
      if (paymentIntent.status === 'succeeded') {
        props.history.push('/success');
      } else {
        console.warn(
          `Unexpected status: ${paymentIntent.status} for ${paymentIntent}`
        );
      }
    }
  };
  useEffect(() => {
    if (stripe) {
      const pr = stripe.paymentRequest({
        country: 'US',
        currency: 'usd',
        total: {
          label: 'Demo total',
          amount: 1350
        },
        requestPayerName: true,
        requestPayerEmail: true,
        requestShipping: true,
        shippingOptions: [
          {
            id: 'standard-global',
            label: 'Global shipping',
            detail: 'Arrives in 5 to 7 days',
            amount: 350
          }
        ]
      });
      // Check the availability of the Payment Request API first.
      pr.canMakePayment().then(result => {
        if (result) {
          pr.on('paymentmethod', handlePaymentMethodReceived);
          setPaymentRequest(pr);
        }
      });
    }
  }, [stripe]);

  if (paymentRequest) {
    return <PaymentRequestButtonElement options={{ paymentRequest }} />;
  }
  return 'Insert your form or button component here.';
};

export default App;
