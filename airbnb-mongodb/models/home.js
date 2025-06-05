// import { getDb } from "../utils/databaseUtils.js";

import mongoose, { model } from "mongoose";

// export class Home {
//   constructor(houseName, description, price, location, rating, photoUrl, id) {
// this.houseName = houseName;
// this.price = parseFloat(price);
// this.location = location;
// this.rating = parseFloat(rating);
// this.photoUrl = photoUrl;
// this.description = description;
// this.id = id;
//   }

//   save() {}

//   static fetch() {}

//   static findById(id) {}

//   static deleteById(id) {}
// }

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

export const Home = new model("Home", homeSchema);
