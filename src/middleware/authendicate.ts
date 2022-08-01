import express, {NextFunction, Request, Response} from "express";
import isEmpty from "is-empty"

const utils = require("../libs/utils");

//for pass to id in the next middleware
declare module "express" {
    interface Request {
        id: any;
    }
}
module.exports = (req: Request, res: Response, next: NextFunction) => {

    const token: string | any = req.header("X-Token")

    if (isEmpty(token)) {
        return res.status(401).json({
            code: 401,
            message: "Token is invalid or missing"
        });
    }

    req.id = utils.jwtDecode(token)
    next()
}

