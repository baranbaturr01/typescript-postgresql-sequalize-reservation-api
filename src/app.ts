import cors from 'cors';
import express from 'express';
import {config} from 'dotenv';
import bodyParser from 'body-parser';
import connection from "./config/connection";

config()
const app = express();
const routes = require("./routes/mobile")

if (!process.env.PORT) {
    console.log('Error to get Port')
    process.exit(1);
}


//connect to database
connection.sync({force: true, schema: ''}).then(() => {

        app.use(cors());
        //x-urlencoded
        app.use(bodyParser.urlencoded({extended: true}));
        app.use(bodyParser.json());

        app.use('/mobile', routes)
        console.log('Database connected successfully');
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        })
    }
).catch(err => {
        console.log(err.trace);
    }
);
