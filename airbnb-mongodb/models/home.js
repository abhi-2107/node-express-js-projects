import mongoose, { model } from "mongoose";
import { Favourite } from "./favourite.js";

const homeSchema = mongoose.Schema({
  houseName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  photoUrl: String,
  description: String,
});


homeSchema.pre('findOneAndDelete', async function (next){
  const homeId = this.getQuery()._id;
  console.log("Deleting home with ID: ", homeId);
  await Favourite.deleteMany({ houseId: homeId })
  next();
})


export const Home = new model("Home", homeSchema);
