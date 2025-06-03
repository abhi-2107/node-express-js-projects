import { Home } from "../models/home.js";

export const getAddHome = (req, res, next) => {
  res.render("host/edit-home", {
    pageTitle: "Add Home to airbnb",
    currentPage: "addHome",
    editing: false,
  });
};

export const getHostHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
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
  Home.findById(homeId, (home) => {
    if (!home) {
      console.log("Home Not Found");
      return res.redirect("/host/host-home-list");
    }
    res.render("host/edit-home", {
      pageTitle: "Edit Home",
      currentPage: "host-homes",
      editing: editing,
      home: home,
    });
  });
};

export const postEditHome = (req, res, next) => {
  const { id, houseName, price, location, rating, photoUrl } = req.body;
  const home = new Home(houseName, price, location, rating, photoUrl);
  home.id = id;
  home.save();
  res.redirect("/host/host-home-list");
};

export const postAddHome = (req, res, next) => {
  const { houseName, price, location, rating, photoUrl } = req.body;
  const home = new Home(houseName, price, location, rating, photoUrl);
  home.save();
  res.render("host/home-added", {
    pageTitle: "Home Added Successfully",
    currentPage: "homeAdded",
  });
};

export const postDeleteHome = (req, res, next) => {
  console.log(req.body);
  Home.deleteById(req.body.id, (error) => {
    console.log("Home deleted successfully...", error);
  });

  res.redirect("/host/host-home-list");
};
