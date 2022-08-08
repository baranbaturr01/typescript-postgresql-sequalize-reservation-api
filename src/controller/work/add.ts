import {Request, Response} from "express";
import isEmpty from "is-empty";
import IWork from "../../Interface/IWork";
import Work from "../../models/Work";
import WorkService from "../../service/WorkService";


const workService = new WorkService();
module.exports = (req: Request, res: Response) => {

    const customerId = req.id
    const storeId = req.body.store_id
    const startDate = req.body.start_date
    const endDate = req.body.end_date
    const workSpace = req.body.work_space

    if (isEmpty(storeId) || isEmpty(startDate) || isEmpty(endDate) || isEmpty(workSpace)) {

        return res.status(400).json({
            code: 400,
            message: "Missing required fields"
        });
    }

    const addedWork: IWork = {
        store_id: storeId,
        customer_id: customerId,
        start_date: startDate,
        end_date: endDate,
        work_space: workSpace
    }

    return workService.add(addedWork).then((work: Work) => {

        return res.json({
            success: true,
        })
    }).catch(err => {
        return res.status(500).json({
            code: 500,
            message: err.message
        });
    })

}