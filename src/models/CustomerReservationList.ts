import {Column, DataType, Model, Table} from "sequelize-typescript";
import ICustomerReservationList from "../Interface/ICustomerReservationList";


@Table({
    tableName: "customer-reservation-list",
    timestamps: true,
})

export default class CustomerReservationList extends Model<CustomerReservationList> implements ICustomerReservationList {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    })
    id!: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,

    })
    store_id!: number;

    @Column({
        type: DataType.ARRAY(DataType.JSON()),
        allowNull: false,

    })
    reservation_list!: [{}]

    // @Column({
    //     type: DataType.INTEGER,
    //     allowNull: false,
    // })
    // reservation_id!: number;

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    date!: Date
}