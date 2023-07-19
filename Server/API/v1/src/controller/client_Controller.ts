import express, { Request, Response, NextFunction } from "express";
import { Client } from "../model/Client.js";
import { Client_Interface } from "../Interface/Client_Interface.js";
import { Client_signIn_Interface } from "../Interface/Client_signIn_Interface.js";
import { Error_message_Interface } from "../Interface/Error_message_Interface.js";
import { addClient } from "../service/client_Service.js";
import { authenticateClient } from "../service/client_Service.js";
import { JWT_Class } from "../../utilities/JWT_Class.js";
const clientSignUp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("token", req.headers["authorization"]);
  let newClientData: Client_Interface = {
    Name: req.body.name,
    Email: req.body.email,
    Password: req.body.password,
    Phone: req.body.phone,
    Address: req.body.address,
  };

  //step-1 add to db
  let result: Client_Interface | Error_message_Interface = await addClient(
    newClientData
  );

  //step-2 generate jwt
  if ("id" in result) {
    let id = result.id;
    let jwtObj = JWT_Class.create(String(id));
    res.json(jwtObj);
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
    await authenticateClient(oldClientData);

  //step-2 generate jwt
  if ("id" in result) {
    let id = result.id;
    let jwtObj = JWT_Class.create(String(id));
    res.json(jwtObj);
  } else res.json(result);
};

export { clientSignUp, clientSignIn };
