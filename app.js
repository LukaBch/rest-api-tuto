const express = require("express");

const app = express();

const mongoose = require("mongoose");

const bodyParser = require("body-parser");

app.use(bodyParser.json());

require("dotenv/config");

const postsRoute = require("./routes/posts.js");

app.use("/posts", postsRoute);

// ROUTES

app.get("/", (req, res) => {
  res.send("We are on home!");
});

app.get("/posts", (req, res) => {
  res.send("We are on posts!");
});

mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("connected to DB");
});

app.listen(3000);