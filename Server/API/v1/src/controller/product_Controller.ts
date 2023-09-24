import express, { Request, Response, NextFunction } from "express";
import { Product } from "../model/Product.js";
import { getAllProduct_service } from "../service/product_Service.js";
import { getProductById_service } from "../service/product_Service.js";
import { getProductImage_service } from "../service/product_Service.js";
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

const getProductImage = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const productid = Number(req.params.id);
  const imagePath: string = getProductImage_service(productid);
  res.statusCode = 200;
  res.sendFile(imagePath);
};

export { getAllProduct, getProductById, getProductImage };
