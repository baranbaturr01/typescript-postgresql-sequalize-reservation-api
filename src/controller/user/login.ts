import UserService from "../../service/UserService";
import {Request, Response} from "express";

const utils = require("../../libs/utils");

const userService = new UserService();

module.exports = (req: Request, res: Response) => {

    const email = req.body.email;
    const password = req.body.password;

    return userService.getByEmail(email).then(user => {


        if (!user) {
            res.status(404).json({
                code: 404,
                message: "invalid email or password burası"
            });
        }

        return utils.comparePassword(password, user!.password).then((isMatch: boolean) => {
            if (!isMatch) {
                res.status(401).json({
                    code: 401,
                    message: "Invalid email or password"
                });
            }

            const token = utils.generateToken(user?.id?.toString());

            res.json({
                success: true,
                token: token,

            });
        });
        
    }).catch((err: Error) => {

        res.status(500).json({
            code: 500,
            message: err.message,
        })
    })
}