import Reservation from "../models/Reservation";

export default interface IReservationRepo {
    add(reservation: Reservation): Promise<void>;

    getAll(): Promise<Reservation[]>;

    getById(id: string): Promise<Reservation | null>;

    getByUserIdAndStoreId(userId: number, date: Date): Promise<Reservation | null>;

    getByUserId(userId: number): Promise<Reservation | null>;

    getByStoreId(storeId: number): Promise<Reservation[] | null>;
}