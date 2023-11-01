const express = require("express");
const Ingredients_Routes = express.Router();
const {
  createIngredient,
  readIngredient,
  updateIngredient,
  deleteIngredient,
} = require("../controllers/ingredients.controller");

Ingredients_Routes.route("/createIngredient").post(createIngredient);
Ingredients_Routes.route("/readIngredient/:sku").get(readIngredient);
Ingredients_Routes.route("/updateIngredient").post(updateIngredient);
Ingredients_Routes.route("/deleteIngredient/:sku").get(deleteIngredient);

module.exports = Ingredients_Routes;
