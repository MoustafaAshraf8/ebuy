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
let clientRouter: express.Router = express.Router();
clientRouter.route("/signUp").post(clientSignUp);
clientRouter.route("/signIn").post(clientSignIn);
clientRouter
  .route("/cart")
  .post(verifyReCookie_middleware, addToCart)
  .get(verifyReCookie_middleware, getCartItems);

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
