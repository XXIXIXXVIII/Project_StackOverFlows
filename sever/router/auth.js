const express = require("express");
const authController = require("../controller/auth");
const { body } = require("express-validator");
const requestValidate = require('../middleWare/requestValidate')

const route = express.Router();
route.post(
  "/login",
  body("username")
    .exists()
    .withMessage("username is required")
    .isLength({ min: 8 })
    .withMessage("Username minimum 8 characters"),
  body("password")
    .exists()
    .withMessage("password is required")
    .isLength({ min: 8 })
    .withMessage("password minimum 8 characters"),
    requestValidate.validator,
    authController.login
);

route.post(
  "/signup",
  body("username")
    .exists()
    .withMessage("username is required")
    .isLength({ min: 8 })
    .withMessage("Username minimum 8 characters"),
  body("password")
    .exists()
    .withMessage("password is required")
    .isLength({ min: 8 })
    .withMessage("password minimum 8 characters"),
    body("displayname")
    .exists()
    .withMessage("displayname is required")
    .isLength({ min: 8 })
    .withMessage("displayname minimum 8 characters"),
    requestValidate.validator,
    authController.signup
);


module.exports = route;
