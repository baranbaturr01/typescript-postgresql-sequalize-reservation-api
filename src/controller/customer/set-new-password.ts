import CustomerService from "../../service/CustomerService";
import {Request, Response} from "express";
import isEmpty from "is-empty";
import jwt from "jsonwebtoken";

const customerService = new CustomerService();
const utils = require('../../libs/utils');

module.exports = (req: Request, res: Response) => {
    const code = req.body.code;
    const password = req.body.password;
    const token = req.body.token;

    if (isEmpty(code) || isEmpty(password) || isEmpty(token)) {
        return res.status(400).json({
            message: "Missing required fields"
        });
    }

    const decodedData: any = jwt.decode(token);


    if (code !== decodedData.code) {
        return res.status(400).json({
            message: "Invalid code"
        });
    }


    return customerService.getById(decodedData.userId).then(customer => {
        return utils.cryptPassword(password, utils.generateSalt()).then((hashedPassword: string) => {
            customer.password = hashedPassword;
            customer.save();
            return res.json({
                success: true,

            })
        })
    })
}