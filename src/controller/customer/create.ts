import CustomerService from "../../service/CustomerService";
import {Request, Response} from "express";

const customerService = new CustomerService();
const utils = require('../../libs/utils');

module.exports = (req: Request, res: Response) => {

    utils.cryptPassword(req.body.password, (err: Error, salt: string) => {
        if (err) {
            res.status(500).json({
                code: 500,
                message: err.message
            });
        }
        const newCustomer = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            username: req.body.username,
            email: req.body.email,
            password: salt,
            phone: req.body.phone,
        };

        customerService.create(newCustomer).then(customer => {
            res.json({
                success: true,
            })
        }).catch(err => {
            res.status(500).json({
                code: 500,
                message: err.message,

            })
        })

    });
}