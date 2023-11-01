const express = require("express");
const Students_Routes = express.Router();
const { createStudent } = require("../controllers/students.controller");

Students_Routes.route("/createStudent").post(createStudent);

module.exports = Students_Routes;
