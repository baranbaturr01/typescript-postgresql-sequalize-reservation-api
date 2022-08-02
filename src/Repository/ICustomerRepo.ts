import ICustomer from "../Interface/ICustomer";

export default interface ICustomerRepo {

     getAll(): Promise<ICustomer[]>;

    getById(id: number): Promise<ICustomer> | any;

    register(customer: ICustomer): Promise<ICustomer>;

    update(id: number, customer: ICustomer): Promise<ICustomer>;

    delete(id: number): Promise<void>;

    getByEmail(email: string): Promise<ICustomer | null>;

    getByUsername(username: string): Promise<ICustomer | null>;
}