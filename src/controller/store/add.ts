import StoreService from "../../service/StoreService";
import isEmpty from "is-empty";
import {Request, Response} from "express";

const storeService = new StoreService();
module.exports = (req: Request, res: Response) => {

    const customerId = req.id
    const name= req.body.name;
    const lat = req.body.lat
    const lng = req.body.lng
    if (isEmpty(customerId) || isEmpty(lat) || isEmpty(lng)) {

        res.status(400).json({
            code: 400,
            message: "Missing required fields"
        });
    }

    const newStore = {
        customer_id: customerId,
        name: name,
        lat: lat,
        lng: lng,
    }

    return storeService.add(newStore).then((store) => {

        res.json({
            success: true,
        })

    }).catch((err: Error) => {
        res.status(500).json({
            code: 500,
            message: err.message,
        })
    })
}