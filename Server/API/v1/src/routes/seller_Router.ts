import express from "express";
import {
  sellerSignUp,
  sellerSignIn,
  SellerAddProduct,
  SellerRemoveProduct,
} from "../controller/seller_Controller.js";
const sellerRouter: express.Router = express.Router();

sellerRouter.route("/signUp").post(sellerSignUp);
sellerRouter.route("/signIn").post(sellerSignIn);
sellerRouter.route("/addProduct").post(SellerAddProduct);
sellerRouter.route("/removeProduct/:id").delete(SellerRemoveProduct);
//sellerRouter.route("/addProduct").post(sellerSignIn);

export { sellerRouter };
