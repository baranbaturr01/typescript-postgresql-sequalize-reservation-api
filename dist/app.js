"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = require("cors");
const express_1 = require("express");
const dotenv_1 = require("dotenv");
const body_parser_1 = require("body-parser");
const connection_1 = require("./config/connection");
(0, dotenv_1.config)();
const app = (0, express_1.default)();
if (!process.env.PORT) {
    console.log('Error to get Port');
    process.exit(1);
}
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.use('/api/v1/', require('./routes/mobile'));
//connect to database
connection_1.default.sync({ force: true }).then(() => {
    console.log('Database connected successfully');
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
}).catch(err => {
    console.log(err);
});
