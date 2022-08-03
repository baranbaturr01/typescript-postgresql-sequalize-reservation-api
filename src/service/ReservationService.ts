import Reservation from "../models/Reservation";
import IReservationRepo from "../Repository/IReservationRepo";
import User from "../models/User";
import Store from "../models/Store";

export class ReservationService implements IReservationRepo {

    async add(reservation: Reservation): Promise<void> {
        await Reservation.create(reservation);
    }

    async getAll(): Promise<Reservation[]> {
        return await Reservation.findAll();
    }

    async getById(id: string): Promise<Reservation | null> {
        return await Reservation.findOne({where: {id}});
    }

    async getByUserIdAndStoreId(userId: number, date: Date): Promise<Reservation | null> {
        return await Reservation.findOne({where: {user_id: userId, date: date}});
    }

    getByUserId(userId: number): Promise<Reservation | null> {
        Reservation.belongsTo(User, {foreignKey: "user_id"});
        Reservation.belongsTo(Store, {foreignKey: "store_id"});
        return Reservation.findOne({where: {user_id: userId}, include: [User, Store]});
    }

    getByStoreId(storeId: number): Promise<Reservation[] | null> {
        Reservation.belongsTo(User, {foreignKey: "user_id"});
        Reservation.belongsTo(Store, {foreignKey: "store_id"});
        return Reservation.findAll({where: {store_id: storeId}, include: [User, Store]});
    }

}