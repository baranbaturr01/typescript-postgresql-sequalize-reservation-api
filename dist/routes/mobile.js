"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes = express_1.default.Router();
routes.post('/customer/add', require("../controller/customer/create"));
exports.default = routes;
