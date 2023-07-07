import express, { Application } from "express";
import { clientRouter } from "./src/routes/clientRouter.js";
import { productRouter } from "./src/routes/productRouter.js";
//express.Router()
let v1router: express.Router = express.Router();

v1router.use("/client", clientRouter);
v1router.use("/product", productRouter);

export { v1router };
