const express = require("express");
const router = express.Router();
const Stripe = require("stripe");
const cors = require("cors");
router.use(cors());
require("dotenv").config();
const stripe = Stripe("process.env.STRIPE_SECRET_KEY");

router.post("/:data", cors(), async (req, res) => {
  const data = JSON.parse(req.params.data);
  try {
    //Sets up a payment intent based on the data provided from frontend
    const paymentIntent = await stripe.paymentIntents.create({
      amount: data.amount,
      currency: "USD",
      description:
        "You can pass in the description of an item from the checkout page and put it here. ${data.description}",
      payment_method_types: ["card"],
    });
    //Submits the intended payment to Stripe and charges users' card. For test mode, Stripe's default test card is used.
    const paymentConfirm = await stripe.paymentIntents.confirm(
      paymentIntent.id,
      {
        payment_method: "pm_card_visa",
        receipt_email: data.email, //Will send an email receipt to user in live mode
      }
    );
    res.json({
      message: "Payment Successful",
      success: true,
    });
  } catch (error) {
    res.json({
      message: "Payment Failed",
      success: false,
    });
  }
});

module.exports = router;
