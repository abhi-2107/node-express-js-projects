import { Router } from "express";
import {
  getBookings,
  getFavouriteList,
  getHomeDetails,
  getHomes,
  getIndex,
  postAddFavourite,
} from "../controllers/storeController.js";

const storeRouter = Router();

storeRouter.get("/", getIndex);
storeRouter.get("/homes", getHomes);
storeRouter.get("/homes/:homeId", getHomeDetails);
storeRouter.get("/bookings", getBookings);
storeRouter.get("/favourites", getFavouriteList);
storeRouter.post("/favourites", postAddFavourite);

export { storeRouter }
