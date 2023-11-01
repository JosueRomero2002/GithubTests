var IngredientsModel = require("../models/Ingredients.js");

const createIngredient = async (req, res, next) => {
  try {
    const Ingredients_tosend = new IngredientsModel({
      sku: req.body.sku,
      name: req.body.name,
      quantity: req.body.quantity,
      expiration_date: req.body.expiration_date,
      buy_date: req.body.buy_date,
      price: req.body.price,
    });

    Ingredients_tosend.save();

    res.status(200).json(Ingredients_tosend);
  } catch (error) {
    return res.status(500).json({ msg: "Ups! Error " + error });
  }
};

const readIngredient = async (req, res, next) => {
  try {
    const Ingredient_Data = await IngredientsModel.findOne({
      sku: req.params.sku,
    });
    res.json(Ingredient_Data);
  } catch (error) {
    return res.status(500).json({ msg: "Ups! Error " + error });
  }
};

const updateIngredient = async (req, res, next) => {
  try {
    const {
      sku_param,
      name_param,
      quantity_param,
      exp_date_param,
      buy_date_param,
      pirce_param,
    } = req.body;

    const response = await IngredientsModel.updateOne(
      {
        sku: sku_param,
      },
      {
        $set: {
          name: name_param,
          quantity: quantity_param,
          expiration_date: exp_date_param,
          buy_date: buy_date_param,
          price: pirce_param,
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
const deleteIngredient = async (req, res, next) => {
  try {
    const response = await IngredientsModel.deleteOne({ sku: req.params.sku });
    res.status(200).json({ msg: "Ingredient Deleted!!", data: response });
  } catch (error) {
    return res.status(500).json({ msg: "Ups! Error " + error });
  }
};

module.exports = {
  createIngredient,
  readIngredient,
  updateIngredient,
  deleteIngredient,
};
