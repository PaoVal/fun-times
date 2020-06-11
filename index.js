// import modules
import express from "express";
import envi from "dotenv";
const { config } = envi;

// import from folders
import {homeRoute, loginRoute, regRoute} from "./routes/index.js";
import {useDatabase} from "./config/index.js";

const PORT = 8000;
const app = express();

// initialize database stuff
config();
useDatabase();

//USE
//JSON encoded
app.use(express.json()); 
// URL encoded
app.use(express.urlencoded({ extended: true }));


// my routes
app.use("/", homeRoute);
app.use("/login", loginRoute);
app.use("/register", regRoute);

// listen in (local server)
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));