import ICustomerReservationList from "../Interface/ICustomerReservationList";

export default interface ICustomerReservationListRepo {

    add(reservationList: ICustomerReservationList): Promise<void>;

    update(reservationList: ICustomerReservationList, id: number): Promise<ICustomerReservationList | any>;

    listByStoreId(storeId: number): Promise<ICustomerReservationList[]>;

}