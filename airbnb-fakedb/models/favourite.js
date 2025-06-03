// Core Modules
import fs from "node:fs";
import path from "path";
import { rootDir } from "../utils/pathUtils.js";


const favouriteDataPath = path.join(rootDir, "data", "favourite.json");

export class Favourite {
  static addFavourite(homeId, callback) {
    Favourite.getFavourites((favourite) => {
      if (favourite.includes(homeId)) {
       callback('already added to favourites')
      } else {
        favourite.push(homeId);
        fs.writeFile(favouriteDataPath, JSON.stringify(favourite), callback);
      }
    });
  }
  
  
  
  static getFavourites(callback) {
    fs.readFile(favouriteDataPath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }
  
  static deleteById(homeID, callback){
    Favourite.getFavourites(homesId => {
      homesId = homesId.filter(homeId => homesId !== homeID )
      fs.writeFile(favouriteDataPath, JSON.stringify(homeID), callback);
  })
}

}
