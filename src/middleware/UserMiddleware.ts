import express, {NextFunction, Request, Response} from "express";
import isEmpty from "is-empty"
import UserService from "../service/UserService";

const utils = require("../libs/utils");

//for pass to id in the next middleware
declare module "express" {
    interface Request {
        id: any;
    }
}
module.exports = (req: Request, res: Response, next: NextFunction) => {

    const userService = new UserService();

    const token: string | any = req.header("X-User-Token")

    if (isEmpty(token)) {
        return res.status(401).json({
            code: 401,
            message: "Token is invalid or missing"
        });
    }

    const decode = utils.jwtDecode(token)

    return userService.getById(decode).then(user => {

        if (!user) {
            return res.status(404).json({
                code: 404,
                message: "User not found"
            });
        }
        req.id = user.id;
        next();
    })


}

