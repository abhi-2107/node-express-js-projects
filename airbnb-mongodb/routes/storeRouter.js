import { Router } from "express";
import {
  getBookings,
  getFavouriteList,
  getHomeDetails,
  getHomes,
  getIndex,
  postAddFavourite,
  postDeleteFavourites,
} from "../controllers/storeController.js";

const storeRouter = Router();

storeRouter.get("/", getIndex);
storeRouter.get("/homes", getHomes);
storeRouter.get("/homes/:homeId", getHomeDetails);
storeRouter.get("/bookings", getBookings);
storeRouter.get("/favourites", getFavouriteList);
storeRouter.post("/favourites", postAddFavourite);
storeRouter.post("/favourites/delete/:homeId", postDeleteFavourites);

export { storeRouter };
