var UserModel = require("../models/Users.js");

const createUser = async (req, res, next) => {
  try {
    console.log("si llega");
    const { user, email } = req.body;
    console.log(email);
    const emailparam = email.toLowerCase();
    const userExists_Check = await UserModel.findOne({ username: user });
    const emailExists_Check = await UserModel.findOne({ email: emailparam });

    if (userExists_Check != null) {
      return res.status(409).json({ msg: `User Already Exists` });
    }

    if (emailExists_Check != null) {
      return res
        .status(409)
        .json({ msg: `This email has already been used to make an account` });
    }

    const user_toSend = {
      username: user,
      email: email.toLowerCase(),
    };

    UserModel.create(user_toSend)
      .then(function (CollectionUser) {
        res.json(CollectionUser);
      })
      .catch(function (err) {
        res.json(err);
      });
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Ups! Error en la base de datos" + error });
  }
};

module.exports = {
  createUser,
};
