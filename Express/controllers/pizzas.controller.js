var PizzasModel = require("../models/Pizza.js");

const createPizza = async (req, res, next) => {
  try {
    const PizzasModel_tosend = new PizzasModel({
      sku: req.body.sku,
      name: req.body.name,
      price: req.body.price,
      ingredients: req.body.ingredients,
      length: req.body.length,
    });

    PizzasModel_tosend.save();

    res.status(200).json(PizzasModel_tosend);
  } catch (error) {
    return res.status(500).json({ msg: "Ups! Error " + error });
  }
};

const readPizza = async (req, res, next) => {
  try {
    const Pizzas_Data = await PizzasModel.findOne({
      sku: req.params.sku,
    });
    res.json(Pizzas_Data);
  } catch (error) {
    return res.status(500).json({ msg: "Ups! Error " + error });
  }
};

const updatePizza = async (req, res, next) => {
  try {
    const {
      sku_param,
      name_param,
      price_param,
      ingredients_param,
      length_param,
    } = req.body;

    const response = await PizzasModel.updateOne(
      {
        sku: sku_param,
      },
      {
        $set: {
          name: name_param,
          price: price_param,
          ingredients: ingredients_param,
          length: length_param,
        },
      }
    );

    if (response.modifiedCount == 0) {
      return res.status(401).json({ msg: "ERROR" });
    } else {
      res.status(200).json({ msg: "Ingredient Updated!!" });
    }
  } catch (error) {
    return res.status(500).json({ msg: "Ups! Error " + error });
  }
};
const deletePizza = async (req, res, next) => {
  try {
    const response = await PizzasModel.deleteOne({ sku: req.params.sku });
    res.status(200).json({ msg: "Pizza Deleted!!", data: response });
  } catch (error) {
    return res.status(500).json({ msg: "Ups! Error " + error });
  }
};

module.exports = {
  createPizza,
  readPizza,
  updatePizza,
  deletePizza,
};
