const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

router.get("/", (req, res, next) => {
  if (!req.isAuthenticated()) return res.redirect("/auth/login");
  User.findById(req.user._id)

    .then(user => {
      res.json("./auth/profile", { user });
    })
    .catch(err => {
      res.json(err);
    });
});

router.post("/:userId", (req, res, next) => {
  if (!req.isAuthenticated()) return res.redirect("/auth/login");
  console.log("BODY: ", req.body);
  const { username, email, password } = req.body;

  const salt = bcrypt.genSaltSync();
  const hashPass = bcrypt.hashSync(password, salt);

  const query = {
    email: email
  };
  if (req.body.password !== "") {
    query.password = hashPass;
  }

  User.findByIdAndUpdate(id, { username, email, password })
    .then(() => {
      res.json({ message: `User with id ${id} was successfully updated` });
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
