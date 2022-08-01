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
        type: DataType.INTEGER,
        allowNull: false,
    })
    lat!: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    lng!: number;
}


// Store.belongsTo(Customer, {foreignKey: 'customer_id', targetKey: 'id'});
