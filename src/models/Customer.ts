import {Table, Model, Column, DataType} from "sequelize-typescript";
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
    })
    username!: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
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
}

