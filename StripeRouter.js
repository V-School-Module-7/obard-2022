const express = require("express")
const StripeRouter = express.Router()
const StripeKey = "sk_test_51KF1JjEAAoEQmAmLLGsJqqhsaIx3kH1Nbd4NTSeY2FnQmZHuziXzQ21V3lHvIgYPfUtyhyBcUaSVDmysZpht2oso00uWUcm7hC"
const stripe = require("stripe")(StripeKey)

StripeRouter.route("/")
  .get((req,res) => {
    return res.status(200).json({
      message: "Stripe Hello World"
    })
  })
// Create a payment charge
// StripeRouter.post("/createCharge", async (req, res) => {
//   const { amount, cardId, oneTime, email } = req.body;
//   if (oneTime) {
//     const {
//       cardNumber,
//       cardExpMonth,
//       cardExpYear,
//       cardCVC,
//       country,
//       postalCode,
//     } = req.body;

//     if (!cardNumber || !cardExpMonth || !cardExpYear || !cardCVC) {
//       return res.status(400).send({
//         Error: "Necessary Card Details are required for One Time Payment",
//       });
//     }
//     try {
//       const cardToken = await stripe.tokens.create({
//         card: {
//           number: cardNumber,
//           exp_month: cardExpMonth,
//           exp_year: cardExpYear,
//           cvc: cardCVC,
//           address_state: country,
//           address_zip: postalCode,
//         },
//       });

//       const charge = await stripe.charges.create({
//         amount: amount,
//         currency: "usd",
//         source: cardToken.id,
//         receipt_email: email,
//         description: `Stripe Charge Of Amount ${amount} for One Time Payment`,
//       });

//       if (charge.status === "succeeded") {
//         return res.status(200).send({ Success: charge });
//       } else {
//         return res
//           .status(400)
//           .send({ Error: "Please try again later for One Time Payment" });
//       }
//     } catch (error) {
//       return res.status(400).send({
//         Error: error.raw.message,
//       });
//     }
//   } else {
//     try {
//       const createCharge = await stripe.charges.create({
//         amount: amount,
//         currency: "usd",
//         receipt_email: email,
//         customer: customerId,
//         card: cardId,
//         description: `Stripe Charge Of Amount ${amount} for Payment`,
//       });
//       if (createCharge.status === "succeeded") {
//         return res.status(200).send({ Success: charge });
//       } else {
//         return res
//           .status(400)
//           .send({ Error: "Please try again later for payment" });
//       }
//     } catch (error) {
//       return res.status(400).send({
//         Error: "error.raw.message",
//       });
//     }
//   }
// });

  module.exports = StripeRouter