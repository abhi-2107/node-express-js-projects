import { Router } from "express";
const authRouter = Router();

import authController from "../controllers/authController.js";

authRouter.get("/login", authController.getLogin);
authRouter.post("/login", authController.postLogin);
authRouter.post("/logout", authController.postLogout);
authRouter.get("/register", authController.getRegister);
authRouter.post("/register", authController.postRegister);

export default authRouter;
