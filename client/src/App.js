import React from "react";
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./Components/CheckoutForm";
import Confirmation from "./Pages/Confirmation"
import Navbar from "./Components/Navbar";
import "./app.css"
const stripePromise = loadStripe("pk_test_51KF1JjEAAoEQmAmLZ4JLFRx2GCI3uNpw8TZGfvwIMCJg87cKEfsKRZJOtMNwGo5HpfjxPWWi5lX6N7i4LgP6Wgnx00SUKtRqJH")

export default function App(){
  
  return (
    <div >
      <Navbar />
      {/* <Elements stripe={stripePromise} >
        <CheckoutForm  />
      </Elements> */}
      <Confirmation />

    </div>
  )
}