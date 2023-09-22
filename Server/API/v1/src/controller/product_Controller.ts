import express, { Request, Response, NextFunction } from "express";
import { Product } from "../model/Product.js";
import { getAllProduct_service } from "../service/product_Service.js";
import { getProductById_service } from "../service/product_Service.js";
import { Product_Interface } from "../Interface/Product_Interface.js";
const getAllProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const allProducts: any[] = await getAllProduct_service();
  res.statusCode = 200;
  res.json(allProducts);
};

const getProductById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const productid: number = Number(req.params.id);
  const product: any[] = await getProductById_service(productid);
  res.statusCode = 200;
  res.json(product);
};

// const addProduct = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ): Promise<void> => {
//   let product_data: Product_Interface = {
//     Name: req.body.name,
//     Category: req.body.category,
//     Price: req.body.price,
//     Quantity: req.body.quantity,
//     Description: req.body.description,
//   };
//   console.log(product_data);
//   let newProduct = new Product(product_data);
//   let product = await newProduct.addProduct(1);
//   res.json(product);
// };

export { getAllProduct, getProductById };
