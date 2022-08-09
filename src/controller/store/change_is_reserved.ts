import StoreService from "../../service/StoreService";
import {Request, Response} from "express";

const storeService = new StoreService();

module.exports = (req: Request, res: Response) => {
    const storeId = req.body.store_id;
    const date = req.body.date;
    const hour = req.body.hour;


    storeService.getById(storeId).then(store => {

        if (!store) {
            return res.json({
                code: 404,
                message: "Store not found",
            })
        }
        const filterWork = store.work_time.filter((work: any) => work.date == date)
        const newList = filterWork.map((work: any) => {

            work.reservation = work.reservation.map((reservation: any) => {
                if (reservation.hour == hour) {
                    reservation.is_reserved = true
                }
                return reservation
            })
            return work
        })
        return storeService.updateWorkTimeColumn(storeId, newList).then(() => {
            return res.json({
                success: true,
            })
        })

    }).catch(err => {
        res.status(500).json({
            code: 500,
            message: err.message,
        })
    })
}