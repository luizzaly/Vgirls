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
  const id = req.params.id;
  const { title, embryology, description, info } = req.body;

  Bodypart.findById(id)

    .then(bodypart => {
      res.json(bodypart);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
