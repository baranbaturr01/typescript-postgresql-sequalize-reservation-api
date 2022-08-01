import CustomerService from "../../service/CustomerService";
import {Request, Response} from "express";
import isEmpty from "is-empty"

const customerService = new CustomerService();
const utils = require('../../libs/utils');

module.exports = (req: Request, res: Response) => {

    const fistName = req.body.first_name;
    const lastName = req.body.last_name;
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password
    const phone = req.body.phone;

    if (isEmpty(fistName) || isEmpty(lastName) || isEmpty(email) || isEmpty(username) || isEmpty(password) || isEmpty(phone)) {
        res.status(400).json({
            message: "Missing required fields"
        });
    }

    return utils.cryptPassword(password, utils.generateSalt()).then((hash: string) => {
        const newCustomer = {
            first_name: fistName,
            last_name: lastName,
            username: username,
            email: email,
            password: hash,
            phone: phone,
        };

        return customerService.register(newCustomer).then(() => {

            res.json({
                success: true,
            })
        })

    }).catch((err: Error) => {
        res.status(500).json({
            code: 500,
            message: err.message,

        })

    })
}
