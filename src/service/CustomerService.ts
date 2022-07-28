import ICustomer from "../Interface/ICustomer";
import {Customer} from "../models/Customer";
import ICustomerRepo from "../Repository/ICustomerRepo";

export default class CustomerService implements ICustomerRepo {

    async getAll(): Promise<ICustomer[]> {
        return await Customer.findAll();
    }

    async create(customer: ICustomer | any): Promise<ICustomer> {
        return await Customer.create(customer);
    }

    async delete(id: number | any): Promise<void> {
        await Customer.destroy({where: {id}});
    }

    async getById(id: number): Promise<Promise<ICustomer> | any> {
        return await Customer.findOne({where: {id}});
    }

    update(id: number, customer: ICustomer): Promise<ICustomer> | any {
        return Customer.update(customer, {where: {id}});
    }
}