import {Column, DataType, Model, Table} from "sequelize-typescript";
import ICustomer from "../Interface/ICustomer";

@Table({
    tableName: "customers",
    timestamps: true,
})
export default class Customer extends Model<Customer> implements ICustomer {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    })
    id!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    first_name!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    last_name!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true,
    })
    username!: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
        unique: true,
    })
    email!: string;
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    password!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    phone!: string;

    @Column({
        type: DataType.DATE,
        allowNull: true,
    })
    createdAt!: Date;

    @Column({
        type: DataType.DATE,
        allowNull: true,
    })
    updatedAt!: Date;
}

