const express = require("express");
const app = express();
const port = 3000;
var mongoose = require("mongoose");


mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
});



app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/Marco", (req, res) => {
  res.send("Polo");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
