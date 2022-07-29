import CustomerService from "../../service/CustomerService";
const customerService = new CustomerService();
import {Request,Response} from "express";

module.exports = (req:Request, res:Response) => {
    customerService.create(req.body).then(customer => {
        res.json({
            success:true,
        })
    }).catch(err => {
        res.status(500).json({
            code:500,
            message: err.message,

        })
    })
}