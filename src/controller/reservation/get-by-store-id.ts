import Reservation from "../../models/Reservation";
import {Request, Response} from "express";

const {ReservationService} = require('../../service/ReservationService');

const reservationService = new ReservationService();

module.exports = (req: Request, res: Response) => {
    const storeId = req.body.store_id;

    return reservationService.getByStoreId(storeId).then((reservation: Reservation[]) => {

        const reservationArr = reservation.map(reservation => {
            const sendReservation = {
                date: reservation.date,
                time: reservation.time,
                createAt: reservation.createdAt,
                updateAt: reservation.updatedAt,
                store: {
                    name: reservation.store.name,
                    lat: reservation.store.lat,
                    lng: reservation.store.lng,
                },
                user: {
                    full_name: reservation.user.first_name + " " + reservation.user.last_name,
                    phone: reservation.user.phone,
                }

            }
            return sendReservation;
        })
        res.json({
            success: true,
            reservation: reservationArr
        })

    }).catch((err: Error) => {
        return res.status(500).json({
            code: 500,
            message: err.message
        });
    })
}