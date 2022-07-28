import {Table, Model, Column, DataType, Scopes} from "sequelize-typescript";

@Table({
    tableName: "users",
    timestamps: true,
})
export default class User extends Model<User> {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    })
    id!: number ;

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
        type: DataType.NUMBER,
        allowNull: false,
    })
    phone!: number;
}