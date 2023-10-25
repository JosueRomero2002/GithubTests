var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UsersSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

var UserModel = mongoose.model("Users", UsersSchema);

module.exports = UserModel;
