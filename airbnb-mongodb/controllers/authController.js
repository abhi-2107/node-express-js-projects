const authController = {
  getLogin: (req, res) => {
    res.render("auth/login", {
      pageTitle: "Login",
      currentPage: "login",
      isLoggedIn: req.isLoggedIn
    });
  },
  postLogin: (req, res) => {
    res.cookie("isLoggedIn", "true", {
      httpOnly: true,
      maxAge:  30 * 1000, // 30 seconds
    });
    // res.cookie("isLoggedIn", "true");
    res.redirect("/");
  },
  postLogout: (req, res) => {
    res.cookie("isLoggedIn", "false");
    res.redirect("/");
  },
  getRegister: (req, res) => {
    res.render("auth/register", {
      pageTitle: "Register",
      currentPage: "register",
      isLoggedIn: false,
    });
  },
  postRegister: (req, res) => {
    res.redirect("/");
    // Handle registration logic
  },
};

export default authController;
