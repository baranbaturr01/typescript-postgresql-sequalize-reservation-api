import UserService from "../../service/UserService";
import {Request, Response} from "express";
import isEmpty from "is-empty";

const utils = require("../../libs/utils");

const userService = new UserService();

module.exports = (req: Request, res: Response) => {

    const fistName = req.body.first_name;
    const lastName = req.body.last_name;
    const email = req.body.email;
    const password = req.body.password
    const phone = req.body.phone;


    if (isEmpty(fistName) || isEmpty(lastName) || isEmpty(email) || isEmpty(password) || isEmpty(phone)) {
      return  res.status(400).json({
            code: 400,
            message: "Missing required fields"
        });
    }
    return userService.getByEmail(email).then((user) => {
        if (user) {
            return res.status(400).json({
                code: 400,
                message: "User already exists"
            })
        }

        return utils.cryptPassword(password, utils.generateSalt()).then((hash: string) => {

            const newUser = {
                first_name: fistName,
                last_name: lastName,
                email: email,
                password: hash,
                phone: phone,
            };

            return userService.register(newUser).then(() => {

                //@Todo: geriye token dönülecek

                res.json({
                    success: true,
                })
            })

        }).catch((err: Error) => {
            return res.status(500).json({
                code: 500,
                message: err.message,

            })
        })
    })
}