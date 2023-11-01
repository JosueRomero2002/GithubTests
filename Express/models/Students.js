var mongoose = require("mongoose");

var AllStudentsSchema = mongoose.Schema;

var StudentsSchema = new AllStudentsSchema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

var StudentsModel = mongoose.model("Students", StudentsSchema);

module.exports = StudentsModel;
