import express from "express";
import {
  getAllProduct,
  getProductById,
  getProductImage,
} from "../controller/product_Controller.js";
import { tryCatch } from "../../utilities/tryCatch.js";

let productRouter: express.Router = express.Router();

productRouter.route("/").get(tryCatch(getAllProduct));

productRouter.route("/:id").get(tryCatch(getProductById));

productRouter.route("/image/:id").get(tryCatch(getProductImage));

export { productRouter };
