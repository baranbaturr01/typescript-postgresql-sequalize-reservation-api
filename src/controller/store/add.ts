import StoreService from "../../service/StoreService";
import isEmpty from "is-empty";
import {Request, Response} from "express";

const storeService = new StoreService();
module.exports = (req: Request, res: Response) => {

    const customerId = req.id
    const name = req.body.name;
    const lat = req.body.lat
    const lng = req.body.lng
    const city = req.body.city
    const district = req.body.district
    if (isEmpty(customerId) || isEmpty(lat) || isEmpty(lng) || isEmpty(city) || isEmpty(district)) {

        return res.status(400).json({
            code: 400,
            message: "Missing required fields(lat,lng,city,district)",
        });
    }

    const newStore = {
        customer_id: customerId,
        name: name,
        lat: lat,
        lng: lng,
        city: city,
        district: district,
    }

    return storeService.add(newStore).then((store) => {

        res.json({
            success: true,
        })

    }).catch((err: Error) => {
        return res.status(500).json({
            code: 500,
            message: err.message,
        })
    })
}