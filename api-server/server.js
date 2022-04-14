const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const subscriptionsRoute = require("./routes/subscriptions");
const adminsRoute = require("./routes/admins");

const server = express();
dotenv.config();

// Database connection
mongoose.connect(process.env.DB_CONNECT, () => {
  console.log("Connected to database");
});

server.use(express.json());

server.use("/api/subscriptions", subscriptionsRoute);
server.use("/api/admins", adminsRoute);

server.listen(process.env.PORT, () => {
  console.log(`Server is running on port: ${process.env.PORT}`);
});
