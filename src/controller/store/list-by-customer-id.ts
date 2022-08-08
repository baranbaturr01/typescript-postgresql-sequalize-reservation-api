import StoreService from "../../service/StoreService";
import {Request, Response} from "express";
import IStores from "../../Interface/IStores";
import Customer from "../../models/Customer";
import ICustomer from "../../Interface/ICustomer";

const storeService = new StoreService();

module.exports = (req: Request, res: Response) => {
    const customerId = req.id;
    storeService.getByCustomerId(customerId).then((store: IStores | any) => {
        res.json(store);
        const data = {
            customer_name: store.Customers[0].first_name,
            last_name: store.Customers[0].last_name,
            username: store.Customers[0].username,
            store: store.Customers.length > 0 ? store.Customers[0]="" : "",
        }
        res.json({
            success: true,
            stores: data,
        })

    }).catch((err: Error) => {
        return res.status(500).json({
            code: 500,
            message: err.message,
        })
    });
}