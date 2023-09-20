import { Request, Response, NextFunction } from "express";
import { Client_Interface } from "../Interface/Client_Interface.js";
import { Client_signIn_Interface } from "../Interface/Client_signIn_Interface.js";
import { Error_message_Interface } from "../Interface/Error_message_Interface.js";
import { clientSignUp_service } from "../service/client_Service.js";
import { clientLogIn_service } from "../service/client_Service.js";
import { getCartItems_service } from "../service/client_Service.js";
import { updateCartItem_service } from "../service/client_Service.js";
import { addToClientCart } from "../service/client_Service.js";
import { deleteFromClientCart_service } from "../service/client_Service.js";
import { JWT_Class } from "../../utilities/JWT_Class.js";
import { tryCatch } from "../../utilities/tryCatch.js";

const clientSignUp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let newClientData: Client_Interface = {
    Name: req.body.name,
    Email: req.body.email,
    Password: req.body.password,
    Phone: req.body.phone,
    Address: req.body.address,
  };

  let result = await clientSignUp_service(newClientData);
  res.cookie("accessCookie", Object(result[0]).accessToken, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
  });
  res.statusCode = 200;
  res.json(result);
};

const clientSignIn = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let oldClientData: Client_signIn_Interface = {
    Email: req.body.email,
    Password: req.body.password,
  };

  //step-1 authenticate
  let result = await clientLogIn_service(oldClientData);

  res.cookie("accessCookie", Object(result[0]).accessToken, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
  });
  res.json(result);
};

const addToCart = async (req: Request, res: Response, next: NextFunction) => {
  let userid = req.headers["user"];
  let productid = req.body.productid;
  let quantity = req.body.quantity;
  let result: Client_Interface | Error_message_Interface =
    await addToClientCart(Number(userid), Number(productid), Number(quantity));
  //res.statusCode = !result.success? ? 403 : 200;
  res.json(result);
};

const getCartItems = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let userid = req.headers["user"];
  let result = await getCartItems_service(Number(userid));
  res.json(result);
};

const deleteCartItem = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let userid = req.headers["user"];
  let productid = req.url.split("/").at(-1);
  let result = await deleteFromClientCart_service(
    Number(userid),
    Number(productid)
  );
  res.json(result);
};

const updateCartItem = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let userid = req.headers["user"];
  let productid = req.url.split("/").at(-1);
  let quantity = req.body.quantity;
  let result = await updateCartItem_service(
    Number(userid),
    Number(productid),
    Number(quantity)
  );
  res.json(result);
};

export {
  clientSignUp,
  clientSignIn,
  addToCart,
  getCartItems,
  deleteCartItem,
  updateCartItem,
};
