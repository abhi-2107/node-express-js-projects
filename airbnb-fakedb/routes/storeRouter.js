import { Router } from "express";
import {
  getBookings,
  getFavouriteList,
  getHomes,
  getIndex,
} from "../controllers/storeController.js";

const storeRouter = Router();

storeRouter.get("/", getIndex);
storeRouter.get("/homes", getHomes);
storeRouter.get("/bookings", getBookings);
storeRouter.get("/favourites", getFavouriteList);

export { storeRouter };
