import IUserRepo from "../Repository/IUserRepo";
import IUser from "../Interface/IUser";
import User from "../models/User";

export default class UserService implements IUserRepo {

    async getAll(): Promise<IUser[]> {
        return await User.findAll({});
    }

    async register(user: IUser | any): Promise<IUser> {
        return await User.create(user);
    }

    async getByEmail(email: string): Promise<IUser | null> {
        return await User.findOne({where: {email: email}});
    }

    async getById(id: number): Promise<IUser | any> {
        return await User.findOne({where: {id: id}});
    }

    async update(id: number, user: any): Promise<IUser | any> {
        return await User.update(user, {where: {id: id}});
    }

    async delete(id: number): Promise<void> {
        await User.destroy({where: {id: id}});
    }
}