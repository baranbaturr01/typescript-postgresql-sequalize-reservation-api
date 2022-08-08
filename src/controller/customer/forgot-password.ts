import CustomerService from "../../service/CustomerService";
import {Request, Response} from "express";
import isEmpty from "is-empty";

const customerService = new CustomerService();
const utils = require('../../libs/utils');

module.exports = (req: Request, res: Response) => {
    const email = req.body.email;

    return customerService.getByEmail(email).then((user) => {

        if (isEmpty(user)) {
            return res.status(404).json({
                code: 404,
                message: "User not found"
            });
        }
        const code = Math.floor(1000 + Math.random() * 9000).toString();
        const forgotPasswordToken = utils.generateForgotPasswordToken(user?.id?.toString(), code);

        res.json({
            success: true,
            token: forgotPasswordToken,
        })

        console.log(code)
    }).catch((err: Error) => {
        return res.status(500).json({
            code: 500,
            message: err.message,
        })

    })
}