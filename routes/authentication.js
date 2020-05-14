"use strict";

const { Router } = require("express");
const authenticationRouter = Router();
const passport = require("passport");

//Tell our route handlers to use their corresponding strategies.
authenticationRouter.get(
  "/github",
  passport.authenticate("github", {
    successRedirect: "/",
    failureRedirect: "/error",
  })
);

authenticationRouter.get(
  "/github-callback",
  passport.authenticate("github", {
    successRedirect: "/",
    failureRedirect: "/error",
  })
);

authenticationRouter.get("/sign-up", (req, res, next) => {
  res.render("./../views/authentication/sign-up");
});

authenticationRouter.post(
  "/sign-up",
  passport.authenticate("sign-up", {
    successRedirect: "/",
    failureRedirect: "/authentication/sign-up",
  })
);

authenticationRouter.get("/sign-in", (req, res, next) => {
  res.render("./../views/authentication/sign-in");
});

authenticationRouter.post(
  "/sign-in",
  passport.authenticate("sign-in", {
    successRedirect: "/private",
    failureRedirect: "/authentication/sign-in",
  })
);

authenticationRouter.post("/sign-out", (req, res, next) => {
  req.logout();
  res.redirect("/");
});

module.exports = authenticationRouter;
