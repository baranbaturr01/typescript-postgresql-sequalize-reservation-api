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

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(bodyParser.json());


app.use('/mobile', routes)

const PORT = process.env.PORT || 3000;
//connect to database
connection.sync({alter: true}).then(() => {
        console.log('Database connected successfully');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })
    }
).catch(err => {
        console.log(err);
    }
);
