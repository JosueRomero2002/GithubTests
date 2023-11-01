const express = require("express");
const Menu_Routes = express.Router();
const {
  createMenu,
  readMenu,
  updateMenu,
  deleteMenu,
} = require("../controllers/menu.controller");

Menu_Routes.route("/createMenu").post(createMenu);
Menu_Routes.route("/readMenu/:sku").get(readMenu);
Menu_Routes.route("/updateMenu").post(updateMenu);
Menu_Routes.route("/deletePizza/:sku").get(deleteMenu);

module.exports = Menu_Routes;
