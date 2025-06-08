import { Home } from "../models/Home.js";

export const getAddHome = (req, res, next) => {
  res.render("host/edit-home", {
    pageTitle: "Add Home to airbnb",
    currentPage: "addHome",
    editing: false,
   isLoggedIn: req.isLoggedIn,
  });
};

export const getHostHomes = (req, res, next) => {
  Home.find().then((registeredHomes) =>
    res.render("host/host-home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Host Homes List",
      currentPage: "host-homes",
     isLoggedIn: req.isLoggedIn,
    })
  );
};

export const getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.edithome === "true";
  Home.findById(homeId)
    .then((homes) => {
      const home = homes;
      res.render("host/edit-home", {
        pageTitle: "Edit Home",
        currentPage: "host-homes",
        editing: editing,
        home: home,
       isLoggedIn: req.isLoggedIn,
      });
    })
    .catch((err) => {
      console.log("Home Not Found" + err);
      return res.redirect("/host/host-home-list");
    });
};

export const postEditHome = (req, res, next) => {
  const { id, houseName, price, location, rating, photoUrl, description } =
    req.body;
  Home.findById(id)
    .then((home) => {
      home.houseName = houseName;
      home.price = price;
      home.location = location;
      home.rating = rating;
      home.photoUrl = photoUrl;
      home.description = description;
      home
        .save()
        .then(() => console.log("Home updated successfully"))
        .catch((err) => console.log("error on Edit form", err));
      res.redirect("/host/host-home-list");
    })
    .catch((err) => console.log("Error fetching home.. " + err));
};

export const postAddHome = (req, res, next) => {
  const { houseName, description, price, location, rating, photoUrl } =
    req.body;
  const home = new Home({
    houseName,
    price,
    location,
    rating,
    photoUrl,
    description,
  });
  home.save().then((result) => console.log(result));
  res.redirect("/host/host-home-list");
};

export const postDeleteHome = (req, res, next) => {
  console.log(req.body, " <- Deleteing this id");
  Home.findByIdAndDelete(req.body.id)
    .then(() => res.redirect("/host/host-home-list"))
    .catch((err) => console.log("delete time error" + err));
};
