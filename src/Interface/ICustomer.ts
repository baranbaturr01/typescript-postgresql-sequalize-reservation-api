interface ICustomer {
    id?: number;
    first_name: string;
    last_name: string;
    username: string;
    email?: string;
    password: string;
    phone: string;
    createdAt: Date;
    updatedAt?: Date;
}

export default ICustomer;