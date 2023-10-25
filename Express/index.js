const express = require("express");
const app = express();
const port = 3000;
var mongoose = require("mongoose");

const usersRoutes = require("./routes/users.route");

app.use(express.json());

mongoose.connect(
  "mongodb+srv://josuepinro21:Duque2014@vcluster.vojvt69.mongodb.net/",
  {
    useNewUrlParser: true,
  }
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/Marco", (req, res) => {
  res.send("Polo");
});

app.use("/users", usersRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
