import IUser from '../Interface/IUser';

export default interface IUserRepo {

    getAll(): Promise<IUser[]>;

    getById(id: number): Promise<IUser> | any;

    register(user: IUser): Promise<IUser>;

    update(id: number, user: IUser): Promise<IUser>;

    delete(id: number): Promise<void>;

    getByEmail(email: string): Promise<IUser | null>;

}