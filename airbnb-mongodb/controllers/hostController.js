import { Home } from "../models/home.js";

export const getAddHome = (req, res, next) => {
  res.render("host/edit-home", {
    pageTitle: "Add Home to airbnb",
    currentPage: "addHome",
    editing: false,
  });
};

export const getHostHomes = (req, res, next) => {
  Home.fetchAll().then(([registeredHomes]) =>
    res.render("host/host-home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Host Homes List",
      currentPage: "host-homes",
    })
  );
};

export const getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.edithome === "true";
  Home.findById(homeId)
    .then(([homes]) => {
      const home = homes[0];
      res.render("host/edit-home", {
        pageTitle: "Edit Home",
        currentPage: "host-homes",
        editing: editing,
        home: home,
      });
    })
    .catch((err) => {
      console.log("Home Not Found" + err);
      return res.redirect("/host/host-home-list");
    });
};

export const postEditHome = (req, res, next) => {
  const { houseName, price, location, rating, photoUrl, description, id } =
    req.body;
  const home = new Home(
    houseName,
    description,
    price,
    location,
    rating,
    photoUrl,
    id
  );
  home
    .save()
    .then(() => res.redirect("/host/host-home-list"))
    .catch((err) => console.log("error on Edit form", err));
};

export const postAddHome = (req, res, next) => {
  const { houseName, description, price, location, rating, photoUrl } =
    req.body;
  const home = new Home(
    houseName,
    description,
    price,
    location,
    rating,
    photoUrl
  );
  home.save();
  res.render("host/home-added", {
    pageTitle: "Home Added Successfully",
    currentPage: "homeAdded",
  });
};

export const postDeleteHome = (req, res, next) => {
  console.log(req.body);
  Home.deleteById(req.body.id)
    .then(() => res.redirect("/host/host-home-list"))
    .catch((err) => console.log("delete time error" + err));
};
