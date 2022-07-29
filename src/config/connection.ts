import {Sequelize} from 'sequelize-typescript';
import  {config} from 'dotenv';
config()
console.log('Connecting to database...');
const host: string | undefined = process.env.DB_HOST
const username: string | undefined = process.env.DB_USER
const password: string | undefined = process.env.DB_PASS
const database: string | undefined = process.env.DB_NAME
console.log(host,"host");
const connection = new Sequelize({
    dialect: 'postgres',
    host: host,
    port: 5430,
    username: username,
    password: password,
    database: database,
    modelPaths: [__dirname + '/src/models'],
    logging: true,
    define: {
        timestamps: true,
        paranoid: true,
    }
})
console.log('Connected to database...');

export default connection;