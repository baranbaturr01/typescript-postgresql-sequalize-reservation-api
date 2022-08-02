export default interface IUser {
    id?: number;
    first_name: string;
    last_name: string;
    email?: string;
    password: string;
    phone: number;
    createdAt: Date;
    updatedAt?: Date;
}
