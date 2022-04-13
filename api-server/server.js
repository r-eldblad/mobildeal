const express = require("express");
const mongoose = require("mongoose");

const Subscription = require("./models/subscription");

const app = express();
const port = 3000;

// Database connection
const dbName = "mobildeal";
const dbURI = `mongodb://localhost:27017/${dbName}`;

mongoose
  .connect(dbURI)
  .then((result) => app.listen(port))
  .catch((err) => console.log(err));

app.get("/add-subscription", (req, res) => {
  const subscription = new Subscription({
    operator_name: "Telia",
    operator_logo:
      "https://resources.mynewsdesk.com/image/upload/c_fill,cs_tinysrgb,dpr_auto,f_auto,g_auto,q_auto,w_864/brjq1rzej2y8tilurvd0.jpg",
    affiliate_link: "Link goes here",
    surf_amount: 24,
    binding_time: 24,
    free_sms: true,
    free_calls: true,
    price: 50,
    initial_price: 99,
    reduced_price_months: 3,
  });

  subscription
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/", (req, res) => {
  res.send("Listening on port " + port);
});
