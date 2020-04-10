const express = require("express");
const routes = express.Router();

const LoginController = require("./controllers/loginController");

routes.post("/login", LoginController.signin);

module.exports = routes;
