import { Request, Response, NextFunction } from "express";
import { Client_Interface } from "../Interface/Client_Interface.js";
import { Client_signIn_Interface } from "../Interface/Client_signIn_Interface.js";
import { clientSignUp_service } from "../service/client_Service.js";
import { clientLogIn_service } from "../service/client_Service.js";
import { getCartItems_service } from "../service/client_Service.js";
import { updateCartItem_service } from "../service/client_Service.js";
import { addToCart_service } from "../service/client_Service.js";
import { deleteFromClientCart_service } from "../service/client_Service.js";

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

  console.log(newClientData);

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

  let result = await clientLogIn_service(oldClientData);

  res.cookie("accessCookie", Object(result[0]).accessToken, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
  });
  res.statusCode = 200;
  res.json(result);
};

const addToCart = async (req: Request, res: Response, next: NextFunction) => {
  let clientid = Number(req.headers["user"]);
  let productid = Number(req.body.productid);
  let quantity = Number(req.body.quantity) ? Number(req.body.quantity) : 1;
  console.log(clientid, productid, quantity);
  await addToCart_service(clientid, productid, quantity);
  res.statusCode = 200;
  res.end();
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
  console.log(userid, req.url, productid);
  await deleteFromClientCart_service(Number(userid), Number(productid));
  res.statusCode = 200;
  res.end();
};

const updateCartItem = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let clientid = req.headers["user"];
  let productid = req.url.split("/").at(-1);
  let quantity = req.body.quantity;
  console.log(req.body);
  console.log(req.body.quantity);
  console.log(clientid, productid, quantity);
  await updateCartItem_service(
    Number(clientid),
    Number(productid),
    Number(quantity)
  );
  res.statusCode = 200;
  res.end();
};

export {
  clientSignUp,
  clientSignIn,
  addToCart,
  getCartItems,
  deleteCartItem,
  updateCartItem,
};
