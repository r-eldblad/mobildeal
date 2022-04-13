const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const subscriptionsRoute = require("./routes/subscriptions");
const adminsRoute = require("./routes/admins");

const app = express();
dotenv.config();

const port = process.env.PORT;

// Database connection

const dbURI = process.env.DB_CONNECT;

mongoose.connect(dbURI, () => {
  console.log("Connected to database");
});

app.use(express.json());

app.use("/api/subscriptions", subscriptionsRoute);
app.use("/api/admins", adminsRoute);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
