"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CustomerService_1 = require("../../service/CustomerService");
const service = new CustomerService_1.default();
module.exports = (req, res) => {
    service.create(req.body).then(customer => {
        res.json({
            success: true,
        });
    }).catch(err => {
        res.status(500).json({
            code: 500,
            message: err.message,
        });
    });
};
