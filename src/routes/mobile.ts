import express from "express";
const routes = express.Router();


// Customer routes
routes.post('/customer/add', require("../controller/customer/create"));
routes.post('/customer/login', require("../controller/customer/login"));

module.exports = routes;