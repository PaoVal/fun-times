// make a route
import express from "express";
const {Route} = express;
const route = express.Router();

import {homeController, homePost} from "../controllers/index.js"; 
// requests
route.get("/", homeController);
route.post("/", homePost);

// export
export default route;