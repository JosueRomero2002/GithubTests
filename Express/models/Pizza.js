var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var PizzaSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  sku: {
    type: Number,
    required: true,
  },
  ingredients: {
    type: Array,
    required: true,
  },

  length: {
    type: Number,
    required: true,
  },

  creation_date: {
    type: Date,
    default: Date.now,
  },
});

var PizzasModel = mongoose.model("Pizzas", PizzaSchema);

module.exports = PizzasModel;
