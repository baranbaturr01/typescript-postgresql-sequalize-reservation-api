import IWork from "../Interface/IWork";
import Work from "../models/Work";

export default interface IWorkRepository {

    add(work: IWork | any): Promise<Work>

    delete(id: number): Promise<void>|any

    getAll(): Promise<IWork[]>

    getById(id: number): Promise<IWork | any>

    getByStoreId(storeId: number): Promise<IWork | any>

    update(id: number, work: IWork): Promise<IWork | any>

    getWorkObjectByCustomerAndStoreId(customerId:number,storeId: number): Promise<IWork| any>
}