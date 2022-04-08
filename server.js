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

app.post("/api/payment", cors(), async (req, res) => {
  try {
    const { amount, source, receipt_email } = req.body

    const charge = await stripe.charges.create({
      amount,
      currency: 'usd',
      source,
      receipt_email: "zapiencg@gmail.com",
      description: "$10 Reservation Fee"
    })

    if (!charge) throw new Error('charge unsuccessful')

    res.status(200).json({
      charge,
      message: 'charge posted successfully'
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})