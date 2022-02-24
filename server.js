const express = require("express")
const app = express()
require("dotenv").config()
const bodyParser = require("body-parser")
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST)
const cors = require("cors")
const morgan = require("morgan")
const port = process.env.PORT || 4000

app.use(express.json())
app.use(morgan("dev"))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())



app.post("/payment", cors(), async (req, res) => {
	let { amount, id } = req.body
	try {
		const payment = await stripe.paymentIntents.create({
			amount,
			currency: "USD",
			description: "Reservation Fee",
			payment_method: id,
			confirm: true
		})
		console.log("Payment", payment)
		res.json({
			message: "Payment successful",
			success: true
		})
	} catch (error) {
		console.log("Error", error)
		res.json({
			message: "Payment failed",
			success: false
		})
	}
})

app.listen(port, () => {
  console.log(`App listening at https://localhost:${port}`)
})