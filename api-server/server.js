const express = require("express");
const mongoose = require("mongoose");

const subscriptionsRoute = require("./routes/subscriptions");
const adminsRoute = require("./routes/admins");

const app = express();

const port = 3000;

// Database connection
const dbName = "mobildeal";
const dbURI = `mongodb://localhost:27017/${dbName}`;

mongoose.connect(dbURI, () => {
  console.log("Connected to database");
});

app.use(express.json());

app.use("/api/subscriptions", subscriptionsRoute);
app.use("/api/admins", adminsRoute);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
