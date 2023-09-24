import { Parser } from "../../utilities/Parser.js";
import { Product } from "../model/Product.js";
import fs from "fs";

const getAllProduct_service = async () => {
  const allProductData = await Product.getAllProduct();
  const parsedProduct = Parser.productParser(allProductData);
  return parsedProduct;
};

const getProductById_service = async (productid: number) => {
  const productData: string = await Product.getProductById(productid);
  const parsedProduct: any[] = Parser.productParser(productData);
  return parsedProduct;
};

const getProductImage_service = (productid: number): string => {
  const imagePath: string = `D:/00-GitHub/Ebuy/Server/API/v1/src/asset/product/${productid}/${productid}.jpg`;
  if (fs.existsSync(imagePath)) {
    return imagePath;
  } else {
    throw Error(`image of product: ${productid} is not found`);
  }
};

export {
  getAllProduct_service,
  getProductById_service,
  getProductImage_service,
};
