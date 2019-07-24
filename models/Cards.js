const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardsSchema = new Schema({
  etymology: String,
  description: String,
  info: String
});

const Card = mongoose.model("Card", cardsSchema);
module.exports = Card;
