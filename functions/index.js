const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  process.env.STRIPE_SECRET_KEY || functions.config().stripe.secret
); // Stripe secret key

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// Test route
app.get("/", (req, res) => res.status(200).send("Hello World from Firebase API 🚀"));

// Payments route
app.post("/payments/create", async (req, res) => {
  const total = req.query.total; // total should come from query string

  console.log("💰 Payment Request Received for amount >>>", total);

  if (!total || total < 1) {
    return res.status(400).send({ error: "Invalid payment amount" });
  }

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: parseInt(total), // Stripe needs integer (paise)
      currency: "inr",
    });

    // Send back client secret
    res.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("❌ Stripe Error:", error.message);
    res.status(500).send({ error: error.message });
  }
});

// Expose Express app as Firebase Function
exports.api = functions.https.onRequest(app);
