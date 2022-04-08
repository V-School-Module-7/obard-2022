import React,{useState} from "react";
import axios from "axios";
import {
  CardElement,
  useElements,
  useStripe
} from "@stripe/react-stripe-js";
import CardSelection from "./CardSelection"
const PaymentAndLicenseVerification = () => {
  const [isProcessing, setProcessing] = useState(false)
  const [success, setSuccess] = useState(false)
  const stripe = useStripe();
  const elements = useElements();
  const handleCardSubmit = async (e) => {
    e.preventDefault()
    
    if(!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);
    // const customer = await stripe.customers.create({

    // })
    // const {error, paymentMethod} = await stripe.createPaymentMethod({
    //   type: 'card',
    //   card: cardElement,
    // });
    // console.log(paymentMethod);
    // console.log(error);
    const { error, token } = await stripe.createToken(cardElement);
    console.log('token: ', token);
    if(!error) {
      axios
        .post("/api/payment", {
          source: token.id,
          currency: "usd",
          amount: 1000,
        })
        .then(res => console.log("frontend", res.data.charge))
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log(error);
    } 
  }

  const paymentPageStyling = {
    textTransform: "uppercase"
  }
  const paymentPage = {
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 21px 35px rgba(121, 151, 170, 0.67)",
    width: "650px",
    height: "735px",
    textAlign: "center",
    margin: "auto"
  }
  const picture = {
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 21px 35px rgba(121, 151, 170, 0.67)",
    width: "650px",
    height: "735px",
    textAlign: "center",
    margin: "auto"
  }
  return (
    <div style={paymentPageStyling}>
      <h1 style={{fontSize: "40px"}}>payment and license verifcation</h1>
      <div style={{display: "flex"}}>
        <div style={paymentPage}>
          <form onSubmit={handleCardSubmit}> 
            <CardSelection />
            <button type="submit" disabled={isProcessing}>{isProcessing ? "processing" : "submit reservation"}</button>
            </form>
        </div>
        <div style={picture}>

        </div>
      </div>
    </div>
  )
}

export default PaymentAndLicenseVerification