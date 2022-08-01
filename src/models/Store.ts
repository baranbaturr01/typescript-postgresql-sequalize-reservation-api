import {Association, BelongsTo, Column, DataType, ForeignKey, HasOne, Model, Table} from "sequelize-typescript";
import Customer from "./Customer";

@Table({
    tableName: "stores",
    timestamps: true,
})

export default class Store extends Model<Store> {

    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    })
    id!: number;

    @ForeignKey(() => Customer)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    customer_id!: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    lat!: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    lng!: number;
    //
    // @HasOne(() => Customer, "id") customer!: Customer
    // @BelongsTo(() => Store, "customer_id") store!: Store
}
