import IUserRepo from "../Repository/IUserRepo";
import IUser from "../Interface/IUser";
import User from "../models/User";

export default class UserService implements IUserRepo {
    
    getAll(): Promise<IUser[]> {
        return User.findAll({});
    }

    register(user: IUser | any): Promise<IUser> {
        return User.create(user);
    }

    getByEmail(email: string): Promise<IUser | null> {
        return User.findOne({where: {email: email}});
    }

    getById(id: number): any {
        return User.findOne({where: {id: id}});
    }

    update(id: number, user: IUser): Promise<IUser> | any {
        return User.update(user, {where: {id: id}});
    }

    async delete(id: number): Promise<void> {
        await User.destroy({where: {id: id}});
    }
}