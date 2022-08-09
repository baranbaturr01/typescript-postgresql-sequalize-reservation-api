import StoreService from "../../service/StoreService";
import {Request, Response} from "express";
import IStores from "../../Interface/IStores";
import Customer from "../../models/Customer";
import ICustomer from "../../Interface/ICustomer";

const storeService = new StoreService();

module.exports = (req:Request, res:Response) => {
    const storeId = req.body.store_id;
    const date = req.body.date;
    const hour = req.body.hour;


    storeService.getById(storeId).then(store =>{

        if(!store) {
            return res.json({
                code:404,
                message: "Store not found",
            })
        }


        const works = store.work_time.find((e:any) => {
           return  e.date == date;
        })
        console.log(works)
        const change = works.reservation.find((e:any) => {
            return e.hour==hour
        })
        console.log(change)
        change.is_reserved = true;


        console.log(change)

       return  res.json({
            success:true,
        })

    }).catch(err => {
        res.status(500).json({
            code: 500,
            message:err.message,
        })
    })
}