import IWork from "../Interface/IWork";
import Work from "../models/Work";
import IWorkRepository from "../Repository/IWorkRepository";
import Store from "../models/Store";

export default class WorkService implements IWorkRepository {

    async add(work: IWork | any): Promise<Work> {
        return await Work.create(work);
    }

    async delete(id: number): Promise<void | any> {
        return Work.destroy({where: {id: id}});
    }

    async getAll(): Promise<IWork[]> {
        return await Work.findAll();
    }

    async getById(id: number): Promise<IWork | any> {
        return Work.findOne({where: {id: id}});
    }

    async getByStoreId(storeId: number): Promise<IWork | any> {
        return Work.findOne({where: {store_id: storeId}});
    }

    async update(id: number, work: IWork): Promise<IWork | any> {
        return Work.update(work, {where: {id: id}});
    }

    async getWorkObjectByCustomerAndStoreId(customerId: number, storeId: number): Promise<IWork | any> {

        Work.belongsTo(Store, {foreignKey: "store_id"})

        const work = Work.findOne({where: {customer_id: customerId, store_id: storeId}, include: [Store]});

        if (!work) {
            throw new Error("Work not found");
        }
        return work;
    }


}