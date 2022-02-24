import Stripe from "stripe";

const stripe = new Stripe("sk_test_51KF1JjEAAoEQmAmLLGsJqqhsaIx3kH1Nbd4NTSeY2FnQmZHuziXzQ21V3lHvIgYPfUtyhyBcUaSVDmysZpht2oso00uWUcm7hC")

export default async (req,res) => {
  if (req.method === "POST") {
    try{
      const { amount } = req.body;

      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: "usd"
      });
      
      res.status(200).send(paymentIntent.client_secret);
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};