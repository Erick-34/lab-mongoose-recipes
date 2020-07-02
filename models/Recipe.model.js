const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    enum: ['Easy Peasy', 'Amateur Chef', 'UltraPro Chef']
  },
  ingredients: {
    type: Array,
  },
  cuisine: {
    type: String,
    require: true,
  },
  dishType: {
    type: String,
  },
  image: {
    type: String,
  },
  duration: {
    type: Number,
    min: 0,
  },
  creator: {
    type: String,
  },
  reated: {
    type: Date,
  },
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
