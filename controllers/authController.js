const users = require("../models/userModel");
const { createUser } = require("../controllers/usersController");

const register = (req, res) => {
  const emails = users.map((u) => u.email);
  const { name, email, password } = req.body;
  if (!req.body.name || !req.body.email || !req.body.password) {
    return res.status(400).json({
      succes: false,
      message: "Name, Email and Password are required!",
    });
  }
  if (typeof name !== "string")
    return res
      .status(400)
      .json({ success: false, message: "name must be a string" });
  if (typeof email !== "number")
    return res
      .status(400)
      .json({ success: false, message: "age must be a number" });
  if (emails.includes(email))
    return res
      .status(409)
      .json({ success: false, message: "Email already exists" });

  const newUser = {
    id: users.length + 1,
    name,
    email,
    password,
  };

  users.push(newUser);
  res.status(400).json({ success: true, data: newUser });
};

module.exports = {
  register,
};
