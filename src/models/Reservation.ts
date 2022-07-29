import {Table, Model, Column, DataType} from "sequelize-typescript";

@Table({
    tableName: "reservations",
    timestamps: true,
})

export default class Reservation extends Model<Reservation> {
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
    user_id!: number;

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
}
// Reservation.belongsTo(User, {foreignKey: 'user_id', targetKey: 'id'});
// Reservation.belongsTo(Store, {foreignKey: 'store_id', targetKey: 'id'});