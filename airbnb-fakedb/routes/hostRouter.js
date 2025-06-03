import { Router } from "express";
import {
  getAddHome,
  getEditHome,
  getHostHomes,
  postAddHome,
  postDeleteHome,
  postEditHome,
} from "../controllers/hostController.js";

const hostRouter = Router();

hostRouter.get("/add-home", getAddHome);
hostRouter.post("/add-home", postAddHome);
hostRouter.get("/host-home-list", getHostHomes);
hostRouter.get("/edit-home/:homeId", getEditHome);
hostRouter.post("/edit-home/", postEditHome);
hostRouter.post("/delete-home/", postDeleteHome);

export default hostRouter;
