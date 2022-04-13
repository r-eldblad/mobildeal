const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

// Database connection
const dbName = "mobildeal";
const dbURI = `mongodb://localhost:27017/${dbName}`;

mongoose
  .connect(dbURI)
  .then((result) => app.listen(port))
  .then(console.log(result))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Listening on port " + port);
});
