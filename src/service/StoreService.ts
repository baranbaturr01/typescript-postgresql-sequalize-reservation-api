import IStoresRepo from "../Repository/IStoresRepo";
import IStores from "../Interface/IStores";
import Store from "../models/Store";
import Customer from "../models/Customer";

export default class StoreService implements IStoresRepo {

    async add(store: IStores | any): Promise<IStores> {
        return await Store.create(store);
    }

    async getAll(): Promise<IStores[]> {
        return await Store.findAll();
    }

    delete(id: number): Promise<void> | any {
        return Store.destroy({where: {id: id}});
    }


    getById(id: number): Promise<IStores|any> {
        return Store.findOne({where: { id}});
    }

    update(id: number, store: IStores): Promise<IStores> | any {
        return Store.update(store.work_time, {where: {id: id}});
    }

    updateWorkTimeColumn(id: number, workTime: any): Promise<IStores> | any {
        return Store.update({work_time: workTime}, {where: {id: id}});
    }


    getByCustomerId(customerId: number): Promise<IStores> | any {

        Store.belongsTo(Customer, {foreignKey: "customer_id"})
        const store = Store.findOne({where: {customer_id: customerId}, include: [Customer]});

        if (!store) {
            throw new Error("Store not found");
        }
        return store;
    }

}