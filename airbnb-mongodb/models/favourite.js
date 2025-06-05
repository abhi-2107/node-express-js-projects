import mongoose, { model } from "mongoose";

const favouriteSchema = mongoose.Schema({
  houseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Home",
    required: true,
    unique: true,
  },
});

export const Favourite = new model("Favourite", favouriteSchema);
