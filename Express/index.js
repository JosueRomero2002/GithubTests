const express = require("express");
const app = express();
const port = 3000;
var mongoose = require("mongoose");

const usersRoutes = require("./routes/users.route");
const usersStudents = require("./routes/students.route");

app.use(express.json());

require("dotenv").config(); // .env
console.log(process.env.MONGODB_URL);
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/Marco", (req, res) => {
  res.send("Polo");
});

app.use("/users", usersRoutes);
app.use("/students", usersStudents);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
