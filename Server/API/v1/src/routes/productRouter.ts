import express from "express";
import {
  getAllProduct,
  getProductById,
  addProduct,
} from "../controller/productController.js";

let productRouter: express.Router = express.Router();

productRouter.route("/").get(getAllProduct).post(addProduct);

productRouter
  .route("/:id")
  .get(getProductById)
  .post((req, res, next): void => {
    let id: number = Number(req.body.id);
    //let id: number = Number(req.params.id);
    console.log(req.body);
    res.statusCode = 600;
    res.json({ msg: `error, cannot post product by id: ${id}` });
  });

export { productRouter };
