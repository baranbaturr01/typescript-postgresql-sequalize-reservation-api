import {Table, Model, Column, DataType, BelongsTo, ForeignKey} from "sequelize-typescript";
import User from "./User";
import Store from "./Store";
import IReservation from "../Interface/IReservation";

@Table({
    tableName: "reservations",
    timestamps: true,
})

export default class Reservation extends Model<Reservation> implements IReservation {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    })
    id!: number;

    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    user_id!: number;

    @ForeignKey(() => Store)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    store_id!: number;

    @Column({
        type: DataType.DATE,
        allowNull: false,

    })
    date!: Date;

    @Column({
        type: DataType.TIME,
        allowNull: false,
    })
    time!: Date;

    @BelongsTo(() => User, "user_id") user!: User;
    @BelongsTo(() => Store, "store_id") store!: Store;
}
// Reservation.belongsTo(User, {foreignKey: 'user_id', targetKey: 'id'});
// Reservation.belongsTo(Store, {foreignKey: 'store_id', targetKey: 'id'});