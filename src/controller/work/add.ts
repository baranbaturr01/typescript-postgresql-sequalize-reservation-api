import {Request, Response, NextFunction} from "express";
import isEmpty from "is-empty";


export default (req: Request, res: Response, next: NextFunction) => {

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



}