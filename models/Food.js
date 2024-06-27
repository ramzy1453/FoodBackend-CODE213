import mongoose from "mongoose";

// Create user model
const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Food = mongoose.model("Food", foodSchema);

export default Food;
