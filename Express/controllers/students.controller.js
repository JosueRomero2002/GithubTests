var StudentsModel = require("../models/Students.js");

const createStudent = async (req, res, next) => {
  try {
    const student_toSend = new StudentsModel({
      name: req.body.name,
      age: req.body.age,
    });

    const tum = student_toSend.save();

    res.status(200).json(student_toSend);
  } catch (error) {
    return res.status(500).json({ msg: "Ups! Error en el Backend1" + error });
  }
};

module.exports = {
  createStudent,
};
