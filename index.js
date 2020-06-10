// make an app obj
import express from "express";
import {homeRoute, loginRoute, regRoute} from "./routes/index.js";
import {useDatabase} from "./config/index.js";
import envi from "dotenv";
const { config } = envi;


const app = express();
config();
useDatabase();

//USE
// parse through data for post requests!!!!!!!!!
//JSON encoded
app.use(express.json()); 
// URL encoded
app.use(express.urlencoded({ extended: true }));


// my routes
app.use("/", homeRoute);
app.use("/login", loginRoute);
app.use("/register", regRoute);

// listen in (local server)
const PORT = 8000;
app.listen(PORT);
console.log(`Listening on port ${PORT}`);