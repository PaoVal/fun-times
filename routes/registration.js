// make a route
import express from "express";
const {Route} = express;
const route = express.Router();

import {regController, regPost} from "../controllers/index.js";

// requests
route.get("/", regController);
route.post("/", regPost);

// export
export default route;