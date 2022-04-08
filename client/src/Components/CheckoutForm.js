import React, {useState} from "react";
import axios from "axios"
import {
  CardElement,
  useElements,
  useStripe
} from "@stripe/react-stripe-js";
import Confirmation from "../Pages/Confirmation"

const CheckoutForm = () => {
  const [isProcessing, setProcessing] = useState(false)
  const [success, setSuccess] = useState(false)
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault()
  };

  const CARD_OPTIONS = {
    iconStyle: "solid",
    hidePostalCode: true
  };

  const page = {
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 21px 35px rgba(121, 151, 170, 0.67)",
    //position: "absolute",
    width: "500px",
    height: "600px",
    //left: "100px",
    //top: "90px",
    textAlign: "center",
    margin: "auto"
  }
  const contentWrapper = {
    display: 'flex'
  }
  const submitRes = {
    width: "300px",
    height: "70px",
    backgroundColor: "rgba(18, 56, 80, 0.27)",
    color: "#FFFFFF",
    fontSize: "20px",
    textTransform: "uppercase",
    border: "0"
  }
  return (
    <>
      {!success ?
        <div>
            <h1 style={{textTransform: "uppercase", fontSize: "40px"}}>payment and license verification</h1>
            <div style={contentWrapper}>
              <form onSubmit={handleSubmit} style={page}>
                <fieldset>
                  <div >
                    <CardElement options={CARD_OPTIONS} />
                  </div>
                </fieldset>
                <button style={submitRes} disabled={isProcessing}>{isProcessing ? "processing" : "submit reservation"}</button>
              </form>
              <div style={page}>

              </div>

            </div>
        </div> 
        :
        <Confirmation />
      }
    </>
  )
}
export default CheckoutForm