const express = require("express");
const users_Routes = express.Router();
const { createUser } = require("../controllers/users.controller");

users_Routes.route("/createUser").post(createUser);

module.exports = users_Routes;
