import { Request, Response, NextFunction } from "express";
import { Client_Interface } from "../Interface/Client_Interface.js";
import { Client_signIn_Interface } from "../Interface/Client_signIn_Interface.js";
import { Error_message_Interface } from "../Interface/Error_message_Interface.js";
import { Cart_product_Interface } from "../Interface/Cart_product_Interface.js";
import { clientSignUp_service } from "../service/client_Service.js";
import { clientLogIn_service } from "../service/client_Service.js";
import { authenticateClient } from "../service/client_Service.js";
import { addToClientCart } from "../service/client_Service.js";
import { JWT_Class } from "../../utilities/JWT_Class.js";
const clientSignUp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //console.log("token", req.headers["authorization"]);
  let newClientData: Client_Interface = {
    Name: req.body.name,
    Email: req.body.email,
    Password: req.body.password,
    Phone: req.body.phone,
    Address: req.body.address,
  };

  //step-1 add to db
  let result: Client_Interface | Error_message_Interface =
    await clientSignUp_service(newClientData);

  //step-2 generate jwt
  if ("id" in result) {
    let id = result.id;
    let accessToken = JWT_Class.createAccessToken(String(id));
    //let refreshToken = JWT_Class.createRefreshToken(String(id));
    res.cookie("accessCookie", accessToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.json({ accessToken });
  } else res.json(result);
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
  let result: Client_Interface | Error_message_Interface =
    await clientLogIn_service(oldClientData);

  //step-2 generate jwt
  if ("id" in result) {
    let id = result.id;
    let accessToken = JWT_Class.createAccessToken(String(id));
    res.cookie("accessCookie", accessToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.json({ accessToken });
  } else res.json(result);
};

const addToCart = async (req: Request, res: Response, next: NextFunction) => {
  let userid = req.headers["user"];
  let productid = req.body.productid;
  let quantity = req.body.quantity;
  let result: Client_Interface | Error_message_Interface =
    await addToClientCart(Number(userid), Number(productid), Number(quantity));
  res.json(result);
};

export { clientSignUp, clientSignIn, addToCart };
