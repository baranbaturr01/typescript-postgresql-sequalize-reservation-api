import UserService from "../../service/UserService";
import {Request, Response} from "express";
import isEmpty from "is-empty";

const sendEmail = require("../../service/EmailService");

const utils = require("../../libs/utils");

const userService = new UserService();

module.exports = (req: Request, res: Response) => {
    const email = req.body.email;

    return userService.getByEmail(email).then((user) => {

        if (isEmpty(user)) {
            return res.status(404).json({
                code: 404,
                message: "User not found"
            });
        }
        const code = Math.floor(1000 + Math.random() * 9000).toString();
        const forgotPasswordToken = utils.generateForgotPasswordToken(user?.id?.toString(), code);

        sendEmail(user?.email, `code : ${code}`);
        console.log(code)


        return res.json({
            success: true,
            token: forgotPasswordToken,
        })

    }).catch((err: Error) => {
        return res.status(500).json({
            code: 500,
            message: err.message,
        })
    })
}
