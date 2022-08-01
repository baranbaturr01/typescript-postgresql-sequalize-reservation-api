import CustomerService from "../../service/CustomerService";
import {Request, Response} from "express";

const customerService = new CustomerService();
const utils = require('../../libs/utils');

module.exports = (req: Request, res: Response) => {
    customerService.getByEmail(req.body.email).then(customer => {
        if (!customer) {
            return res.status(404).json({
                code: 404,
                message: "invalid email or password"
            })
        }

        utils.comparePassword(req.body.password, customer.password, (err: Error, isMatch: boolean) => {
            if (err) {
                return res.status(500).json({
                    code: 500,
                    message: err.message
                })
            }

            if (isMatch) {
                return res.json({
                    success: true,
                    customer: customer
                })
            }

            return res.status(404).json({
                code: 404,
                message: "invalid email or password"
            })

        })
    }).catch(err => {
        return res.status(500).json({
            code: 500,
            message: err.message
        })
    })
}