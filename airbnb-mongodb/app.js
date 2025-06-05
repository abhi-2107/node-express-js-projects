import express, { urlencoded } from "express";
import path from "path";
import hostRouter from "./routes/hostRouter.js";
import { pageNotFound } from "./controllers/errorController.js";
import { storeRouter } from "./routes/storeRouter.js";
import { rootDir } from "./utils/pathUtils.js";
import mongoose from "mongoose";

const port = 3000;

const app = express();

// tells express js that Ejs will be used as template engine
app.set("view engine", "ejs");
// Ejs path dir start in views folder from root dir
app.set("views", "views");

// To get req.body from post request of user
app.use(urlencoded());

app.use(express.static(path.join(rootDir, "public")));

// all the routes defined in hostRouter are prefixed with /host

app.use(storeRouter);

app.use("/host", hostRouter);

app.use(pageNotFound);

const DB_PATH =
  "mongodb+srv://mepanchal30:root@cluster0.07la5kq.mongodb.net/airbnb?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(DB_PATH)
  .then(() => {
    app.listen(port, () => {
      console.log('Connected to mongoDb ...')
      console.log(`server running at https://localhost:${port}`);
    });
  })
  .catch((err) => console.log("Error while connecting to mongoDB: " + err));

// mongoConnect(() => {
//   app.listen(port, () => {
//     console.log(`server running at https://localhost:${port}`);
//   });
// });
