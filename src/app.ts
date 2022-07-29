import cors from 'cors';
import express from 'express';
import {config} from 'dotenv';
import bodyParser from 'body-parser';
import connection from "./config/connection";
import {Customer} from "./models/Customer";
import Store from "./models/Store";
import User from "./models/User";
import Reservation from "./models/Reservation";
import Work from "./models/Work";

config()
const app = express();
const routes = require("./routes/mobile")

if (!process.env.PORT) {
    console.log('Error to get Port')
    process.exit(1);
}
app.use(cors());
app.use(bodyParser.json());


// app.get('/', (req, res) => {
//     res.send('Hello World');
// })
//
app.use('/mobile', routes)

//connect to database
connection.sync({force: true}).then(() => {
        console.log('Database connected successfully');
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        })
    }
).catch(err => {
        console.log(err);
    }
);
