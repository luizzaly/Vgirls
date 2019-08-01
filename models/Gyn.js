const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gynSchema = new Schema({
  name: String,

  address: String,
  phoneNumber: String,
  likes: [{ type: Schema.Types.ObjectId }]
});

const Gyn = mongoose.model("Gyn", gynSchema);
module.exports = Gyn;
