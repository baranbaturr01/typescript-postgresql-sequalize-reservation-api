"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
console.log('Connecting to database...');
const host = process.env.DB_HOST;
const username = process.env.DB_USER;
const password = process.env.DB_PASS;
const database = process.env.DB_NAME;
console.log(host, "host");
const connection = new sequelize_typescript_1.Sequelize({
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
});
console.log('Connected to database...');
exports.default = connection;
//# sourceMappingURL=connection.js.map