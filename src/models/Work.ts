import {Table, Model, Column, DataType, ForeignKey} from "sequelize-typescript";
import Store from "./Store";
import Customer from "./Customer";

@Table({
    tableName: "works",
    timestamps: true,
})

export default class Work extends Model<Work> {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    })
    id!: number;

    @ForeignKey(() => Store)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    store_id!: number;

    @ForeignKey(() => Customer)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    customer_id!: number;

    @Column({
        type: DataType.TIME,
        allowNull: false,
    })
    start_date!: Date;

    @Column({
        type: DataType.TIME,
        allowNull: false,
    })
    end_date!: Date;

    @Column({
        type: DataType.TIME,
        allowNull: false,
    })
    work_space!: Date;

}