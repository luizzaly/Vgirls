const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bodypartSchema = new Schema({
  title: String,
  etymology: String,
  description: String,
  info: String
});

const Bodypart = mongoose.model("Bodypart", bodypartSchema);
module.exports = Bodypart;
