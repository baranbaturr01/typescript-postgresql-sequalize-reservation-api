import IWork from "../Interface/IWork";
import Work from "../models/Work";
import Store from "../models/Store";

export default interface WorkService {

    add(work: IWork | any): Promise<IWork>

    getAll(): Promise<IWork[]>

    delete(id: number): Promise<void> | any

    getById(id: number): Promise<IWork>

    update(id: number, work: IWork): Promise<IWork>

    getByStoreId(storeId: number): Promise<IWork>

}