import ICustomerReservationListRepo from "../Repository/ICustomerReservationListRepo";
import CustomerReservationList from "../models/CustomerReservationList";
import ICustomerReservationList from "../Interface/ICustomerReservationList";

export default class CustomerReservationListService implements ICustomerReservationListRepo {
    async add(reservationList: ICustomerReservationList | any): Promise<void> {
        await CustomerReservationList.create(reservationList);
    }

    listByStoreId(storeId: number): Promise<ICustomerReservationList[]> {
        return CustomerReservationList.findAll({where: {store_id: storeId}});
    }


    update(reservationList: ICustomerReservationList, id: number): Promise<ICustomerReservationList | any> {
        return CustomerReservationList.update(reservationList, {where: {id: id}});
    }
}