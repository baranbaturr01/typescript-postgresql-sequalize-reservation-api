import IStores from "../Interface/IStores";

export default interface IStoresRepo {

    add(store: IStores): Promise<IStores>;

    getAll(): Promise<IStores[]>;

    getById(id: number): Promise<IStores> | any;

    update(id: number, store: IStores): Promise<IStores>;

    delete(id: number): Promise<void>;

    getByCustomerId(customerId: number): Promise<IStores>;


}