import { Favourite } from "../models/favourite.js";
import { Home } from "../models/Home.js";

export const getIndex = (req, res, next) => {
  Home.find().then((registeredHomes) => {
    res.render("store/index", {
      registeredHomes: registeredHomes,
      pageTitle: "airbnb Home",
      currentPage: "index",
    });
  });
};

export const getHomes = (req, res, next) => {
  Home.find().then((registeredHomes) =>
    res.render("store/home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Homes List",
      currentPage: "Home",
    })
  );
};

export const getBookings = (req, res, next) => {
  res.render("store/bookings", {
    pageTitle: "My Bookings",
    currentPage: "bookings",
  });
};

export const getFavouriteList = (req, res, next) => {
  Favourite.find().then((favourites) => {
    favourites = favourites.map((fav) => fav.houseId.toString());
    Home.find({ _id: favourites }).then((favHomeDetails) => {
      res.render("store/favourite-list", {
        favouriteHomes: favHomeDetails,
        pageTitle: "My Favourites",
        currentPage: "favourites",
      });
    });
  });
};

export const postDeleteFavourites = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log("Deleting home with ID: ", homeId);
  Favourite.deleteOne({ houseId: homeId })
    .then((result) => console.log("Deleted favourite home: ", result))
    .catch((err) => console.log("Error while deleting favourite home: ", err))
    .finally(() => {
      res.redirect("/favourites");
    });
};

export const getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.findById(homeId)
    .then((homes) =>
      res.render("store/home-detail", {
        home: homes,
        pageTitle: "Home Detail",
        currentPage: "Home",
      })
    )
    .catch((err) => {
      console.log("home not found" + err);
      res.redirect("/homes");
    });
};

export const postAddFavourite = (req, res, next) => {
  const homeId = req.body.favouriteId;
  console.log(homeId);
  Favourite.findOne({ houseId: homeId })
    .then((fav) => {
      if (fav) {
        console.log("Already added to favourites");
        return res.redirect("/favourites");
      } else {
        fav = new Favourite({ houseId: homeId });
        console.log("Adding home to favourites ", fav);
        return fav.save();
      }
    })
    .then((result) => {
      console.log("Home added to favourites ", result);
      res.redirect("/favourites");
    })
    .catch((err) => console.log("Error while adding to favourites" + err));
};
