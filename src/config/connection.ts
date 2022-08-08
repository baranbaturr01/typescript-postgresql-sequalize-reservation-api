import {Sequelize} from 'sequelize-typescript';
import {config} from 'dotenv';
import Reservation from "../models/Reservation";
import Work from "../models/Work";
import Store from "../models/Store";
import User from "../models/User";
import Customer from "../models/Customer";

config()
console.log('Connecting to database...');
const host: string | undefined = process.env.PROD_DB_HOST
const username: string | undefined = process.env.PROD_DB_USER
const password: string | undefined = process.env.PROD_DB_PASS
const database: string | undefined = process.env.PROD_DB_NAME
const port: any = process.env.PROD_DB_PORT
console.log(host, username, password, database);
const connection = new Sequelize({
    dialect: 'postgres',
    host: host,
    port: port,
    username: username,
    password: password,
    database: database,
    models: [User, Store, Work, Reservation, Customer],
    logging: false,
    define: {
        timestamps: true,
    }
})
console.log('Connected to database...');

export default connection;