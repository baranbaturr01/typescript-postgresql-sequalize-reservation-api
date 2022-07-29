import express from "express";
const routes = express.Router();

routes.post('/customer/add', require("../controller/customer/create"));

export default routes;