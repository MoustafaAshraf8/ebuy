import express, { Request, Response, NextFunction } from "express";
import { Client } from "../model/Client.js";
import { Client_Interface } from "../Interface/Client_Interface.js";
import { Client_signIn_Interface } from "../Interface/Client_signIn_Interface.js";
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

  let newClient: Client = new Client(newClientData);
  let result = await newClient.signUp();
  console.log(result);
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
  let result = await Client.signIn(oldClientData);
  res.json(result);
};

export { clientSignUp, clientSignIn };
