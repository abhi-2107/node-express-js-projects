const pageNotFound = (req, res, next) => {
res.status(404).render("error-page",{pageTitle:"Page Not Found",currentPage: "404"});
};

export { pageNotFound };
