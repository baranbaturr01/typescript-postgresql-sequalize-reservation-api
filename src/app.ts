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
app.use(cors());
app.use(bodyParser.json());

app.use('/mobile', routes)

//connect to database
connection.sync({force: true,schema:''}).then(() => {
        console.log('Database connected successfully');
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        })
    }
).catch(err => {
        console.log("Hata33333",err);
    }
);
