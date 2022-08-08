import CustomerService from "../../service/CustomerService";
import {Request, Response} from "express";
import isEmpty from "is-empty";

const customerService = new CustomerService();
const utils = require('../../libs/utils');

module.exports = (req: Request, res: Response) => {
    const username = req.body.username;
    const password = req.body.password;

    if (isEmpty(username) || isEmpty(password)) {
        return res.status(400).json({
            message: "Missing required fields"
        });
    }

    return customerService.getByUsername(username).then(customer => {

            if (!customer) {
                return res.status(404).json({
                    code: 404,
                    message: "invalid email or password"
                })
            }
            const hashedPassword = customer.password

            return utils.comparePassword(password, hashedPassword).then((isMatch: boolean) => {

                if (!isMatch) {
                    return res.status(404).json({
                        code: 404,
                        message: "invalid email or password"
                    })
                }
                const token = utils.generateToken(customer.id);

                return res.json({
                    success: true,
                    customer: token
                })

            }).catch((err: Error) => {
               return res.status(500).json({
                    code: 500,
                    message: err.message,
                })
            })
        }
    ).catch(err => {
        return res.status(500).json({
            code: 500,
            message: err.message
        })
    })
}