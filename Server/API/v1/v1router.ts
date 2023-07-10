import express, { Application } from "express";
import { clientRouter } from "./src/routes/client_Router.js";
import { sellerRouter } from "./src/routes/seller_Router.js";
import { productRouter } from "./src/routes/product_Router.js";
//express.Router()
let v1router: express.Router = express.Router();

v1router.use("/client", clientRouter);
v1router.use("/seller", sellerRouter);
v1router.use("/product", productRouter);

export { v1router };
