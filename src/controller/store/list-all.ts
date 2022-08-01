import StoreService from "../../service/StoreService";
import {Request, Response} from "express";

const storeService = new StoreService();

module.exports = (req: Request, res: Response) => {
    storeService.getAll().then((stores) => {
        res.json({
            success: true,
            stores: stores,
        })

    }).catch((err: Error) => {
        res.status(500).json({
            code: 500,
            message: err.message,
        })
    })
}