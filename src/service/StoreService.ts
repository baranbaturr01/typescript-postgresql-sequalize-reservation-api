import IStoresRepo from "../Repository/IStoresRepo";
import IStores from "../Interface/IStores";
import Store from "../models/Store";

export default class StoreService implements IStoresRepo {

    add(store: IStores | any): Promise<IStores> {
        return Store.create(store);
    }

    getAll(): Promise<IStores[]> {
        return Store.findAll();
    }

    delete(id: number): Promise<void> | any {
        return Store.destroy({where: {id: id}});
    }


    getById(id: number): any {
        return Store.findOne({where: {id: id}});
    }

    update(id: number, store: IStores): Promise<IStores> | any {
        return Store.update(store, {where: {id: id}});
    }

    getByCustomerId(customerId: number): Promise<IStores> | any {
        const store = Store.findOne({where: {customer_id: customerId}});
        if (!store) {
            throw new Error("Store not found");
        }
        return store;
    }

}