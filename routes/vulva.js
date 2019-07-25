const express = require("express");
const router = express.Router();
const Bodypart = require("../models/Bodypart");

router.get("/", (req, res) => {
  Bodypart.find()
    .then(bodyparts => {
      res.json(bodyparts);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id.title;
  console.log(req.params);
});

module.exports = router;
