import express from "express";
import {
  getAllProduct,
  getProductById,
} from "../controller/product_Controller.js";
import { tryCatch } from "../../utilities/tryCatch.js";

let productRouter: express.Router = express.Router();

productRouter.route("/").get(tryCatch(getAllProduct));

productRouter
  .route("/:id")
  .get(tryCatch(getProductById))
  .post((req, res, next): void => {
    let id: number = Number(req.body.id);
    //let id: number = Number(req.params.id);
    console.log(req.body);
    res.statusCode = 600;
    res.json({ msg: `error, cannot post product by id: ${id}` });
  });

export { productRouter };
