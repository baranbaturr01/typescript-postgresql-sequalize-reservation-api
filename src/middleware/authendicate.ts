import {NextFunction, Request, Response} from "express";

const utils = require("../../libs/utils");

module.exports = (req: Request, res: Response, next: NextFunction) => {
    const token: string | any = req.headers["x-access-token"];
    if (!token) {
        return res.status(401).json({
            code: 401,
            message: "No token provided"
        });
    }

    utils.jwtDecode(token).then((decoded: any) => {
            req.user = decoded;
            next();
        }
    ).catch((err: Error) => {
        res.status(500).json({
            code: 500,
            message: err.message,
        })
    })
}

