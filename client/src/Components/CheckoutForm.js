import React, {useState} from "react";
import axios from "axios"
import {
  CardElement,
  useElements,
  useStripe
} from "@stripe/react-stripe-js";
import Success from "../Pages/Confirmation";

// const CARD_OPTIONS = {
// 	iconStyle: "solid",
// 	style: {
// 		base: {
// 			iconColor: "#c4f0ff",
// 			fontWeight: 500,
// 			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
// 			fontSize: "16px",
// 			fontSmoothing: "antialiased",
// 			":-webkit-autofill": { color: "#fce883" },
// 			"::placeholder": { color: "#87bbfd" }
// 		},
// 		invalid: {
// 			iconColor: "#ffc7ee",
// 			color: "#ffc7ee"
// 		}
// 	}
// }

export default function CheckoutForm(){
  const [isProcessing, setProcessing] = useState(false)
  const [success, setSuccess] = useState(false)
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)
    })
    if(!error) {
      try {
        const { id } = paymentMethod
        console.log('paymentMethod: ', paymentMethod);
    
        const response = await axios.post("/payment", {
          amount: 1000,
          id,

        })
        if(response.data.success) {
          console.log(response.data.message)
          setSuccess(true)
        }
      } catch (error) {
        console.log("ERROR", error)
      }
    } else {
      console.log(error.message);
    }
  };
  const CARD_OPTIONS = {
    iconStyle: "solid",
    hidePostalCode: true

  }
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
      <h1 style={{textTransform: "uppercase"}}>payment and license verification</h1>
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
    <div>
      <Success />
    </div> 
  }
   </>
  )
}