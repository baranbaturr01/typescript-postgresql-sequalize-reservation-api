import WorkService from "../service/WorkService";
import IWork from "../Interface/IWork";
import Store from "../models/Store";
import Work from "../models/Work";

export default class WorkRepository implements WorkService {

    async add(work: any): Promise<IWork> {
        return await Work.create(work);
    }

    async delete(id: number): Promise<void> {
        await Work.destroy({where: {id: id}});
    }

    async getAll(): Promise<IWork[]> {
        return await Work.findAll()
    }

    async getById(id: number): Promise<IWork | any> {
        return await Work.findOne({where: {id: id}});
    }

    async getByStoreId(storeId: number): Promise<IWork | any> {
        return await Work.findOne({where: {store_id: storeId}});
    }

    async update(id: number, work: IWork): Promise<IWork | any> {
        return await Work.update(work, {where: {id: id}});
    }
}