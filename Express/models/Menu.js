var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var MenuSchema = new Schema({
  sku: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  combo: {
    type: Number,
    required: true,
  },
  price: {
    type: Date,
    required: true,
  },
});

var MenuModel = mongoose.model("Pizzas", MenuSchema);

module.exports = MenuModel;
