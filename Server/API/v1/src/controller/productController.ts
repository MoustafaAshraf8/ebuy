import express, { Request, Response, NextFunction } from "express";
import { Product } from "../model/Product.js";
import { Product_interface } from "../data_type/Product_interface.js";
import { Query } from "../data_type/data_type.js";
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
  res.json(product);
};

const addProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  let product_data: Product_interface = {
    Name: req.body.name,
    Category: req.body.category,
    Rating: req.body.rating,
    Price: req.body.price,
    Quantity: req.body.quantity,
    Description: req.body.description,
  };
  console.log(product_data);
  let newProduct = new Product(product_data);
  let product = await newProduct.addProduct();
  res.json(product);
};

export { getAllProduct, getProductById, addProduct };
