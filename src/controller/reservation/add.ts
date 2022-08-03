const {ReservationService} = require('../../service/ReservationService');
import {Request, Response} from "express";

const reservationService = new ReservationService();

module.exports = (req: Request, res: Response) => {
    const userId = req.id;
    const storeId = req.body.store_id;
    const date = req.body.date;
    const time = req.body.time;


    const addedReservation = {
        user_id: userId,
        store_id: storeId,
        date: date,
        time: time
    }

    return reservationService.getByUserIdAndStoreId(userId, date).then((reservation: any) => {
        if (reservation) {
            return res.status(400).json({
                code: 400,
                message: "You already have a reservation for this store on this date"
            })
        }

        return reservationService.add(addedReservation).then(() => {

            return res.json({
                success: true
            });

        })
    }).catch((err: Error) => {
        return res.status(500).json({
            code: 500,
            message: err.message
        });
    });


}