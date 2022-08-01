import express from "express";
const routes = express.Router();


// Customer routes
routes.post('/customer/register', require("../controller/customer/register"));
routes.post('/customer/login', require("../controller/customer/login"));

module.exports = routes;