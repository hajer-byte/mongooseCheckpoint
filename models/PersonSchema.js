var mongoose = require("mongoose");

const Person = mongoose.Schema({
  name: {
    type: String,
  },
  age: { type: Number },
  favoriteFoods: { type: [String] },
});
module.exports = mongoose.model("Cluster0", Person);
