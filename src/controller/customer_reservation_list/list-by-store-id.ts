import CustomerReservationListService from "../../service/CustomerReservationListService";
import {Request, Response} from "express";
import ICustomerReservationList from "../../Interface/ICustomerReservationList";

const customerReservationList = new CustomerReservationListService()


const getTomorrow = (num: number) => {
    const now = Date.now();
    const nowDate: Date = new Date(now);
    const tomorrow: number = nowDate.setDate(nowDate.getDate() + num)
    return new Date(tomorrow)
}

const validateDate = (date1: Date, date2: Date): boolean => {
    return date1.getFullYear() == date2.getFullYear()
        && date1.getMonth() == date2.getMonth()
        && date1.getDate() == date2.getDate()
}

module.exports = (req: Request, res: Response) => {
    const storeId = req.body.store_id;

    const nowDate = getTomorrow(0);
    const tomorrowDate = getTomorrow(1);
    const tTomorrowDate = getTomorrow(2);


    customerReservationList.listByStoreId(storeId).then(reservationList => {
        if (validateDate(reservationList[0].date!, nowDate)) {
            return res.json({
                success: true,
                reservationList: reservationList,
            })
        }
        // Todo: Update reservationList
        const list: ICustomerReservationList[] = [];


        for (let i = 0; i < reservationList.length; i++) {

            const updateReservationListDate: Date[] = reservationList.map((reservation) => {
                return reservation.date! = getTomorrow(i);
            })

            const newList: ICustomerReservationList = {
                date: updateReservationListDate[i],
                id: reservationList[i].id,
                store_id: reservationList[i].store_id,
                reservation_list: reservationList[i].reservation_list

            }

            customerReservationList.update(newList, reservationList[i].id!).then(updatedData => {
                res.json({
                    success: true,
                    reservationList: newList
                })
            })

        }


    }).catch(err => {
        return res.status(500).json({
            code: 500,
            message: err.message,
        })
    })

}