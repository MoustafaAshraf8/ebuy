import express, { Request, Response, NextFunction } from "express";
import { Seller_model } from "../model/Seller_model.js";
import { Seller_Interface } from "../Interface/Seller_Interface.js";
import { Seller_signIn_Interface } from "../Interface/Seller_signIn_Interface.js";
import { Product_Interface } from "../Interface/Product_Interface.js";
import { addSeller } from "../service/seller_Service.js";

const sellerSignUp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let newSeller: Seller_Interface = {
    Name: req.body.name,
    Email: req.body.email,
    Password: req.body.password,
    Phone: req.body.phone,
    Address: req.body.address,
  };
  //   let newSeller: Seller_model = new Seller_model(newSellerData);
  //   let result = await newSeller.signUp();
  let result = await addSeller(newSeller);
  console.log(result);
  res.json(result);
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
  let result = await Seller_model.signIn(oldSellerData);
  res.json(result);
};

const SellerAddProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let newProduct: Product_Interface = {
    Name: req.body.name,
    Category: req.body.category,
    Price: req.body.price,
    Quantity: req.body.quantity,
    Description: req.body.description,
  };
  let seller_id: number = Number(req.headers.id);
  let result = await Seller_model.addProduct(seller_id, newProduct);
  res.json(result);
};

const SellerRemoveProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //to be changed, extract seller_id from jwt
  let seller_id = Number(req.headers.id);
  let product_id: number = Number(req.params.id);
  console.log(`seller: ${seller_id} -- product: ${product_id}`);
  let result = await Seller_model.removeProduct(seller_id, product_id);
  res.json(result);
};

export { sellerSignUp, sellerSignIn, SellerAddProduct, SellerRemoveProduct };
