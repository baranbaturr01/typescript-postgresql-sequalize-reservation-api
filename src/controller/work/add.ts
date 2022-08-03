import {NextFunction, Request, Response} from "express";
import isEmpty from "is-empty";
import WorkRepository from "../../Repository/WorkRepository";


const workService = new WorkRepository();
module.exports = (req:Request, res: Response) => {

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

    const addedWork = {
        store_id: storeId,
        start_date: startDate,
        end_date: endDate,
        work_space: workSpace
    }

    return workService.add(addedWork).then(work => {
        res.json({
            success: true,
        })
    }).catch(err => {
        res.status(500).json({
            code: 500,
            message: err.message
        });
    })

}