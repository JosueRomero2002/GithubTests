var MenuModel = require("../models/Menu.js");

const createMenu = async (req, res, next) => {
  try {
    const MenuModel_tosend = new MenuModel({
      sku: req.body.sku,
      name: req.body.name,
      combo: req.body.combo,
      price: req.body.price,
    });

    MenuModel_tosend.save();

    res.status(200).json(MenuModel_tosend);
  } catch (error) {
    return res.status(500).json({ msg: "Ups! Error " + error });
  }
};

const readMenu = async (req, res, next) => {
  try {
    const Menu_Data = await MenuModel.findOne({
      sku: req.params.sku,
    });
    res.json(Menu_Data);
  } catch (error) {
    return res.status(500).json({ msg: "Ups! Error " + error });
  }
};

const updateMenu = async (req, res, next) => {
  try {
    const { sku_param, name_param, combo_param, price_param } = req.body;

    const response = await MenuModel.updateOne(
      {
        sku: sku_param,
      },
      {
        $set: {
          name: name_param,
          price: price_param,
          combo: combo_param,
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

const deleteMenu = async (req, res, next) => {
  try {
    const response = await MenuModel.deleteOne({ sku: req.params.sku });
    res.status(200).json({ msg: "Pizza Deleted!!", data: response });
  } catch (error) {
    return res.status(500).json({ msg: "Ups! Error " + error });
  }
};

module.exports = {
  createMenu,
  readMenu,
  updateMenu,
  deleteMenu,
};
