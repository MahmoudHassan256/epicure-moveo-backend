import express from "express";
import routes from './routes/index';
import { connectDb } from "./db/index";
import bodyParser from 'body-parser';
import cors from "cors";

const app = express();
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use(cors());

app.get("/", function (req, res) {
    res.send("Default");
    });
app.use(routes);

connectDb().then(async () => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Our app is running on port ${ PORT }`);
    });});


