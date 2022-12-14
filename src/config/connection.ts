import {Sequelize} from 'sequelize-typescript';
import {config} from 'dotenv';
import Reservation from "../models/Reservation";
import Work from "../models/Work";
import Store from "../models/Store";
import User from "../models/User";
import Customer from "../models/Customer";
import CustomerReservationList from "../models/CustomerReservationList";

config()
console.log('Connecting to database...');
const host: string | undefined = process.env.PROD_DB_HOST
const username: string | undefined = process.env.PROD_DB_USER
const password: string | undefined = process.env.PROD_DB_PASS
const database: string | undefined = process.env.PROD_DB_NAME
const port: any = process.env.PROD_DB_PORT
const connection = new Sequelize({
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
    host: host,
    port: port,
    username: username,
    password: password,
    database: database,
    models: [User, Store, Work, Reservation, Customer, CustomerReservationList],
    logging: false,
    define: {
        timestamps: true,
    }
})
console.log('Connected to database...');

export default connection;