import {Customer} from "../models/Customer";
import {SequelizeHooks} from "sequelize/types/hooks";

interface ICustomer {
    id?: number;
    first_name: string;
    last_name: string;
    username: string;
    email?: string;
    password: string;
    phone: string;
}

export default ICustomer;