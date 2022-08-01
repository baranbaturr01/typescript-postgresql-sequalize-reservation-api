import express from "express";

const routes = express.Router();


// Customer routes
routes.post('/customer/register', require("../controller/customer/register"));
routes.post('/customer/login', require("../controller/customer/login"));


// User routes
routes.post('/user/register', require("../controller/user/register"));
routes.post('/user/login', require("../controller/user/login"));

// Store routes
routes.post('/store/add', require("../controller/store/add"));


module.exports = routes;