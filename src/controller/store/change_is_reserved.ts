import StoreService from "../../service/StoreService";
import {Request, Response} from "express";
import {logger} from "sequelize/types/utils/logger";

const storeService = new StoreService();

module.exports = (req: Request, res: Response) => {
    const storeId = req.body.store_id;
    const date = req.body.date;
    const mineHour = req.body.hour;


    storeService.getById(storeId).then(store => {

            if (!store) {
                return res.json({
                    code: 404,
                    message: "Store not found",
                })
            }

            const workTime = store.work_time;
            Object.values(workTime).forEach((workTimes: any) => {
                if (workTimes.date === date) {
                    workTimes.reservation.forEach((hour: any) => {
                        if (hour.hour === mineHour) {
                            hour.is_reserved = true;
                        }
                    })
                }
            })

            return storeService.updateWorkTimeColumn(storeId, workTime).then(() => {
                return res.json({
                    code: 200,
                    message: "Success",
                })
            })

        }
    ).catch(err => {
        res.status(500).json({
            code: 500,
            message: err.message,
        })
    })
}