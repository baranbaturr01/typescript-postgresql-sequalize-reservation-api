import express, {NextFunction, Request, Response} from "express";
import isEmpty from "is-empty"
import CustomerService from "../service/CustomerService";

const utils = require("../libs/utils");

//for pass to id in the next middleware
declare module "express" {
    interface Request {
        id: any;
    }
}
module.exports = (req: Request, res: Response, next: NextFunction) => {
    const customerService = new CustomerService();
    const token: string | any = req.header("X-Customer-Token")

    if (isEmpty(token)) {
        return res.status(401).json({
            code: 401,
            message: "Token is invalid or missing"
        });
    }

    const decode = utils.jwtDecode(token)

    return customerService.getById(decode).then(customer => {

        if (!customer) {
            return res.status(404).json({
                code: 404,
                message: "Customer not found"
            });
        }
        req.id = customer.id;
        next();
    })


}

