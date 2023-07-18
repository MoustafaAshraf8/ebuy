import express, { Request, Response, NextFunction } from "express";
import { Product } from "../model/Product.js";
import { Product_Interface } from "../Interface/Product_Interface.js";
const getAllProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  let allProducts = Product.getAllProduct();
  allProducts.then((result) => {
    res.json(result);
  });
};

const getProductById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  let id: string = req.params.id;
  let product = await Product.getProductById((id = id));
  console.log(product);
  res.json(product);
};

const addProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  let product_data: Product_Interface = {
    Name: req.body.name,
    Category: req.body.category,
    Price: req.body.price,
    Quantity: req.body.quantity,
    Description: req.body.description,
  };
  console.log(product_data);
  let newProduct = new Product(product_data);
  let product = await newProduct.addProduct(1);
  res.json(product);
};

export { getAllProduct, getProductById, addProduct };
