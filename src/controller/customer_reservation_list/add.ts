import CustomerReservationListService from "../../service/CustomerReservationListService";
import {Request, Response} from "express";

import WorkService from "../../service/WorkService";

const workService = new WorkService();

const customerReservationListService = new CustomerReservationListService();

const calculateWorkSpace: string[] | any = (startDate: string, endDate: string, workSpace: string) => {

    let startTime = parseInt(startDate.split(":")[0])
    const endTime = parseInt(endDate.split(":")[0])
    const space = parseInt(workSpace.split(":")[1]);

    let times = [];
    let start = 60 * startTime;
    for (let i = 0; start <= endTime * 60; i++) {
        let hour = Math.floor(start / 60);
        let minute = (start % 60);
        //times look like this:{hour: "09:00", is_reservarted: false}
        times.push({
            hour: `${hour < 10 ? "0" + hour : hour}:${minute < 10 ? "0" + minute : minute}`,
            is_reserved: false
        })
        start = start + space;
    }

    return times
}

const getDate = () => {
    let date: string[] = [];
    for (let i = 0; i < 3; i++) {
        const tomorrowDate: Date = new Date(Date.now());
        tomorrowDate.setDate(tomorrowDate.getDate() + i);
        const tomorrow = tomorrowDate.getFullYear() + "-" + (tomorrowDate.getMonth() + 1) + "-" + tomorrowDate.getDate();
        date.push(tomorrow);
    }
    return date;
}


module.exports = (req: Request, res: Response) => {
    const customerId = req.id;
    const storeId = req.body.store_id;

    workService.getWorkObjectByCustomerAndStoreId(customerId, storeId).then(work => {
        const startDate = work.start_date
        const endDate = work.end_date
        const workSpace = work.work_space
        console.log(calculateWorkSpace(startDate, endDate, workSpace));


        getDate().map(day => {
            const customerReservationList = {
                date: day,
                store_id: storeId,
                reservation_list: calculateWorkSpace(startDate, endDate, workSpace)
            }

            return customerReservationListService.add(customerReservationList).then(reservationList => {
                return res.json({
                    success: true
                })
            })
        })


    }).catch(err => {
        res.status(500).json({
            code: 500,
            message: err.message,
        })
    })

}