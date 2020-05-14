'use strict';

const { Router } = require('express');
const authenticationRouter = Router();
const routeGuard = require('./../middleware/route-guard');
const passport = require('passport');

//Tell our route handlers to use their corresponding strategies.

authenticationRouter.get('/sign-up', (req, res, next) => {
  res.render('./../views/authentication/sign-up.hbs');
});

authenticationRouter.post(
  '/sign-up',
  passport.authenticate('sign-up', {
    successRedirect: '/',
    failureRedirect: '/authentication/sign-up'
  })
);

authenticationRouter.get('/sign-in', (req, res, next) => {
  res.render('./../views/authentication/sign-in.hbs');
});

authenticationRouter.post(
  '/sign-in',
  passport.authenticate('sign-in', {
    successRedirect: '/private',
    failureRedirect: '/authentication/sign-in'
  })
);

authenticationRouter.get('/private', routeGuard, (req, res, next) => {
  res.render('/../views/authentication/private.hbs');
});


module.exports = authenticationRouter;
