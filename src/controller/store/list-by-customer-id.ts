import StoreService from "../../service/StoreService";
import {Request, Response} from "express";
import IStores from "../../Interface/IStores";

const storeService = new StoreService();

module.exports = (req: Request, res: Response) => {
    const customerId = req.body.customer_id;
    storeService.getByCustomerId(customerId).then((store: IStores) => {
        res.json({
            success: true,
            stores: store,
        })

    }).catch((err: Error) => {
        res.status(500).json({
            code: 500,
            message: err.message,
        })
    });
}