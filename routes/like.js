const express = require("express");
const router = express.Router();
const Gyn = require("../models/Gyn");

router.put("/", (req, res) => {
  const id = req.body.id;
  const userId = req.user._id;

  Gyn.findById(id)
    .then(gyn => {
      if (!gyn.likes.includes(userId)) {
        Gyn.findOneAndUpdate(
          { _id: id },
          { $push: { likes: userId } },
          { new: true }
        )
          .then(updatedGyn => res.json(updatedGyn))
          .catch(err => {
            res.json(err);
          });
      } else {
        Gyn.findOneAndUpdate(
          { _id: id },
          { $pull: { likes: { $in: [userId] } } },
          { new: true }
        )
          .then(updatedGyn => {
            res.json(updatedGyn);
          })
          .catch(err => {
            res.json(err);
          });
      }
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
