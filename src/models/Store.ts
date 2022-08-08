import {Column, DataType, Model, Table} from "sequelize-typescript";

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

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    customer_id!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name!: string;
    @Column({
        type: DataType.FLOAT,
        allowNull: false,
    })
    lat!: number;
    @Column({
        type: DataType.FLOAT,
        allowNull: false,
    })
    lng!: number;
    @Column({
        type: DataType.ARRAY(DataType.JSON()),
        allowNull: true,
    })
    work_time!: {};
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    city!: string;
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    district!: string;
}
