import { Favourite } from "../models/favourite.js";
import { Home } from "../models/home.js";

export const getIndex = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render("store/index", {
      registeredHomes: registeredHomes,
      pageTitle: "airbnb Home",
      currentPage: "index",
    })
  );
};

export const getHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
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
  Favourite.getFavourites((favHomeIds) => {
    Home.fetchAll((registeredHomes) => {
      const favHomeDetails = registeredHomes.filter((home) =>
        favHomeIds.includes(home.id)
      );
      res.render("store/favourite-list", {
        favouriteHomes: favHomeDetails,
        pageTitle: "My Favourites",
        currentPage: "favourites",
      });
    });
  });
};

// export const postDeleteFavourites = (req, res, next) => {
//   const homeId = req.params.homeId;
//   Favourite.deleteById(homeId, (error) => {
//     if (error) {
//       console.log("something went wrong Error ... ");
//     }
//   });
//   res.redirect("/store/favourite-list");
// };

export const getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.findById(homeId, (home) => {
    if (!home) {
      console.log("home not found");
      res.redirect("/homes");
    } else {
      res.render("store/home-detail", {
        home: home,
        pageTitle: "Home Detail",
        currentPage: "Home",
      });
    }
  });
};
export const postAddFavourite = (req, res, next) => {
  Favourite.addFavourite(req.body.favouriteId, (error) => {
    if (error) {
      console.log("Error on postAddFavourite controller", error);
    }
    res.redirect("/favourites");
  });
};
