import express from "express";
import { verifyReCookie_middleware } from "../middleware/verifyCookie_middleware.js";
import {
  clientSignUp,
  clientSignIn,
  addToCart,
  getCartItems,
  deleteCartItem,
  updateCartItem,
} from "../controller/client_Controller.js";
import { tryCatch } from "../../utilities/tryCatch.js";

let clientRouter: express.Router = express.Router();
clientRouter.route("/signUp").post(tryCatch(clientSignUp));
clientRouter.route("/signIn").post(tryCatch(clientSignIn));
clientRouter
  .route("/cart")
  .get(verifyReCookie_middleware, tryCatch(getCartItems))
  .post(verifyReCookie_middleware, tryCatch(addToCart));

clientRouter
  .route("/cart/:id")
  .delete(verifyReCookie_middleware, tryCatch(deleteCartItem))
  .patch(verifyReCookie_middleware, tryCatch(updateCartItem));

export { clientRouter };
