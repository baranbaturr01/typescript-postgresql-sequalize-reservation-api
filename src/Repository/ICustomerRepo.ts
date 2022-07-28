import ICustomer from "../Interface/ICustomer";
import {Customer} from "../models/Customer";

export default interface ICustomerRepo {
    
    getAll(): Promise<ICustomer[]>;

    getById(id: number): Promise<ICustomer> | any;

    create(customer: ICustomer): Promise<ICustomer>;

    update(id: number, customer: ICustomer): Promise<ICustomer>;

    delete(id: number): Promise<void>;
}