// make an app obj
import express from "express";
import {homeRoute, loginRoute, regRoute} from "./routes/index.js";

const app = express();

//USE
// parse through data for post requests!!!!!!!!!
//JSON encoded
server.use(express.json()); 
// URL encoded
server.use(express.urlencoded({ extended: true }));


// my routes
app.use("/", homeRoute);
app.use("/login", loginRoute);
app.use("/register", regRoute);

// listen in (local server)
const PORT = 8000;
app.listen(PORT);
console.log(`Listening on port ${PORT}`);