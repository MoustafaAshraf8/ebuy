import express from "express";
import {
  sellerSignUp,
  sellerSignIn,
  SellerAddProduct,
  SellerRemoveProduct,
} from "../controller/seller_Controller.js";
import { tryCatch } from "../../utilities/tryCatch.js";
import { verifyReCookie_middleware } from "../middleware/verifyCookie_middleware.js";
const sellerRouter: express.Router = express.Router();

sellerRouter.route("/signUp").post(tryCatch(sellerSignUp));
sellerRouter.route("/signIn").post(tryCatch(sellerSignIn));
sellerRouter
  .route("/addProduct")
  .post(verifyReCookie_middleware, tryCatch(SellerAddProduct));
sellerRouter.route("/removeProduct/:id").delete(tryCatch(SellerRemoveProduct));

export { sellerRouter };
