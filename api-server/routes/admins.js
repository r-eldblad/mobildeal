const router = require("express").Router();
const Admin = require("../models/admin");
const bcrypt = require("bcryptjs");

router.post("/register", async (req, res) => {
  const emailExist = await Admin.findOne({ email: req.body.email });

  if (emailExist) {
    return res.status(400).send("Email already exist.");
  }
  // hashes password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  // Creates a new admin and saves it inside of the database
  const admin = new Admin({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });
  try {
    const savedAdmin = await admin.save();
    res.send(savedAdmin);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
