// make a route
import express from "express";
const {Route} = express;
const route = express.Router();

import {loginController, loginPost} from "../controllers/index.js"

// requests
route.get("/", loginController);
route.post("/", loginPost);

// export
export default route;