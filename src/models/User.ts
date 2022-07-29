import {Table, Model, Column, DataType} from "sequelize-typescript";
import IUser from "../Interface/IUser";

@Table({
    tableName: "users",
    timestamps: true,
})
export default class User extends Model<User> implements IUser {
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
    email!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    password!: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    phone!: number;
}