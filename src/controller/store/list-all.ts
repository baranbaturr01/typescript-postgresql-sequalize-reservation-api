import StoreService from "../../service/StoreService";
import {Request, Response} from "express";

const storeService = new StoreService();

module.exports = (req: Request, res: Response) => {
    return storeService.getAll().then((stores) => {

        return res.json({
            success: true,
            stores: stores.map(store => {
                return {
                    store_id: store.id,
                    store_name: store.name,
                    store_latitude: store.lat,
                    store_longitude: store.lng,
                    store_work_time: store.work_time
                }
            })
        })
    }).catch((err: Error) => {
        return res.status(500).json({
            code: 500,
            message: err.message,
        })
    })
}