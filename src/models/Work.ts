import {Table, Model, Column, DataType} from "sequelize-typescript";

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

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    store_id!: number;

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