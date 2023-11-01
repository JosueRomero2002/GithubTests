const express = require("express");
const Pizza_Routes = express.Router();
const {
  createPizza,
  readPizza,
  updatePizza,
  deletePizza,
} = require("../controllers/pizzas.controller");

Pizza_Routes.route("/createPizza").post(createPizza);
Pizza_Routes.route("/readPizza/:sku").get(readPizza);
Pizza_Routes.route("/updatePizza").post(updatePizza);
Pizza_Routes.route("/deletePizza/:sku").get(deletePizza);

module.exports = Pizza_Routes;
