const User = require("../models/user");

function isStringValidator(String) {
  if (String == undefined || String.length === 0) {
    return true;
  } else {
    return false;
  }
}

exports.createUser = async (req, res) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    if (
      isStringValidator(name) ||
      isStringValidator(email) ||
      isStringValidator(password)
    ) {
      return res.status(400).json({ message: "Fill in all fields!" });
    }

    await User.create({
      name: name,
      email: email,
      password: password,
    });
    res.status(201).json({ message: "account created successfully!" });
  } catch (err) {
    res.status(500).json({ message: "error creating an account!" });
  }
};
