var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var IngredientsSchema = new Schema({
  sku: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  expiration_date: {
    type: Date,
    required: true,
  },
  buy_date: {
    type: Date,
  },
  price: {
    type: Number,
    required: true,
  },
});

var IngredientsModel = mongoose.model("Ingredients", IngredientsSchema);

module.exports = IngredientsModel;
