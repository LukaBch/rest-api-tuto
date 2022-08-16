const express = require("express");

const app = express();

const mongoose = require("mongoose");

require("dotenv/config");

// ROUTES

app.get("/", (req, res) => {
  res.send("We are on home!");
});

mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("connected to DB");
});

app.listen(3000);