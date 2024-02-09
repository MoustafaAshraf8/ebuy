import express, { Request, Response, NextFunction } from "express";
import { Seller } from "../model/Seller.js";
import { Seller_Interface } from "../Interface/Seller_Interface.js";
import { Seller_signIn_Interface } from "../Interface/Seller_signIn_Interface.js";
import { Product_Interface } from "../Interface/Product_Interface.js";
import {
  sellerSignUp_service,
  sellerSignIn_service,
  addProduct_service,
  removeProduct_service,
} from "../service/seller_Service.js";

const sellerSignUp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let newSellerData: Seller_Interface = {
    Name: req.body.name,
    Email: req.body.email,
    Password: req.body.password,
    Phone: req.body.phone,
    Address: req.body.address,
  };

  let newSeller = await sellerSignUp_service(newSellerData);
  console.log(newSeller);
  res.cookie("accessCookie", Object(newSeller[0]).accessToken, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
  });
  res.statusCode = 200;
  res.json(newSeller);
};

const sellerSignIn = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let oldSellerData: Seller_signIn_Interface = {
    Email: req.body.email,
    Password: req.body.password,
  };
  let oldSeller = await sellerSignIn_service(oldSellerData);
  res.cookie("accessCookie", Object(oldSeller[0]).accessToken, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
  });
  res.statusCode = 200;
  res.json(oldSeller);
};

const SellerAddProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("----seller controller----");
  let newProduct: Product_Interface = {
    Name: req.body.name,
    Price: req.body.price,
    Quantity: req.body.quantity,
    Category: req.body.category,
    Description: req.body.description,
  };
  let userid = Number(req.headers["user"]);
  let result: any[] = await addProduct_service(userid, newProduct);
  res.statusCode = 200;
  res.json(result);
};

const SellerRemoveProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //to be changed, extract seller_id from jwt
  let sellerid = Number(req.headers.id);
  let productid: number = Number(req.params.id);
  let result = await removeProduct_service(sellerid, productid);
  res.json(result);
};

export { sellerSignUp, sellerSignIn, SellerAddProduct, SellerRemoveProduct };
