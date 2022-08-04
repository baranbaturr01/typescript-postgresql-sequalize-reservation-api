import {Request, Response} from "express";
import isEmpty from "is-empty";
import WorkRepository from "../../Repository/WorkRepository";
import IWork from "../../Interface/IWork";
import Work from "../../models/Work";

const dateParse = require('../../script/DateParse');


const workService = new WorkRepository();
module.exports = (req: Request, res: Response) => {

    const storeId = req.body.store_id
    const startDate = req.body.start_date
    const endDate = req.body.end_date
    const workSpace = req.body.work_space
    if (isEmpty(storeId) || isEmpty(startDate) || isEmpty(endDate) || isEmpty(workSpace)) {

        res.status(400).json({
            code: 400,
            message: "Missing required fields"
        });
    }

    const addedWork: IWork = {
        store_id: storeId,
        start_date: startDate,
        end_date: endDate,
        work_space: workSpace
    }

    return workService.add(addedWork).then((work: Work) => {

        let splitStartDate = work.start_date.toLocaleString().split(":")[0]
        const splitEndDate = work.end_date.toLocaleString().split(":")[0]

        let start = work.start_date;
        let end = work.end_date;
        let space = work.work_space;

        const formatEnd: number = parseFloat(`${end.toLocaleString().split(":")[0]}.${end.toLocaleString().split(":")[1]}`)
        const formatStart: number = parseFloat(`${start.toLocaleString().split(":")[0]}.${start.toLocaleString().split(":")[1]}`)
        // const formatStart = start.toLocaleString().split(":")[0]
        const formatSpace: number = parseFloat(`${space.toLocaleString().split(":")[0]}.${space.toLocaleString().split(":")[1]}`)
        console.log(formatEnd)
        console.log()
        let newTime: string = ""
        let i = 0.0;
        // console.log(newTime)
        // console.log(end.toLocaleString())
        const reservationList = []

        while (i<5) {
            newTime = dateParse.sumDate(start, space)
            start = dateParse.sumDate(start, space)
            reservationList.push({
                is_reserved: false,
                time: newTime,
            })
            console.log(newTime)

            i++;
        }

        console.log(reservationList)
        const data = {
            reservationList: reservationList,
        }


        res.json({
            success: true,
            reservations: reservationList
        })
    }).catch(err => {
        res.status(500).json({
            code: 500,
            message: err.message
        });
    })

}