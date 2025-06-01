import { Router } from "express";
import {
  getAddHome,
  getHostHomes,
  postAddHome,
} from "../controllers/hostController.js";

const hostRouter = Router();

hostRouter.get("/add-home", getAddHome);
hostRouter.post("/add-home", postAddHome);
hostRouter.get("/host-home-list", getHostHomes);

export default hostRouter;
