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
  .delete(verifyReCookie_middleware, deleteCartItem)
  .patch(verifyReCookie_middleware, updateCartItem);

clientRouter
  .route("/:id")
  .get((req, res, next): void => {
    let id: number = Number(req.params.id);
    res.statusCode = 600;
    res.json({ id: id });
  })
  .post((req, res, next): void => {
    let id: number = Number(req.body.id);
    //let id: number = Number(req.params.id);
    console.log(req.body);
    res.statusCode = 600;
    res.json({ id: id });
  });

export { clientRouter };
