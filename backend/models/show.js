const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const showSchema = new Schema(
  {
    username: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    genre: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Show = mongoose.model("Show", showSchema);

module.exports = Show;
