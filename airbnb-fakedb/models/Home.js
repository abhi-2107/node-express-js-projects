// Core Modules
import fs from "node:fs";
import path from "path";
import { rootDir } from "../utils/pathUtils.js";
import { Favourite } from "./favourite.js";

const homeDataPath = path.join(rootDir, "data", "homes.json");
const favouriteDataPath = path.join(rootDir, "data", "favourite.json");

export class Home {
  constructor(houseName, price, location, rating, photoUrl) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
  }

  save() {
    Home.fetchAll((registeredHomes) => {
      if (this.id) {
        //edit home
        registeredHomes = registeredHomes.map((home) =>
          home.id === this.id ? this : home
        );
        fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), (error) => {
          console.log("File Updated successfully", error);
        });
      } else {
        this.id = Math.random().toString();
        registeredHomes.push(this);
        fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), (error) => {
          console.log("File Writing Concluded", error);
        });
      }
    });
  }

  static fetchAll(callback) {
    const homeDataPath = path.join(rootDir, "data", "homes.json");
    fs.readFile(homeDataPath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }

  static findById(homeId, callback) {
    this.fetchAll((homes) => {
      const homeFound = homes.find((home) => home.id == homeId);
      callback(homeFound);
    });
  }

  static deleteById(homeId, callback) {
    this.fetchAll((homes) => {
      homes = homes.filter((home) => home.id !== homeId);
      let FavouriteIds = homes.map((home) => home.id);
      fs.writeFile(favouriteDataPath, JSON.stringify(FavouriteIds), callback);
      fs.writeFile(homeDataPath, JSON.stringify(homes), callback);
    });
  }
}
