import { Parser } from "../../utilities/Parser.js";
import { Product } from "../model/Product.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

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
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const defaultImagePath: string = path.join(
    __dirname,
    "../asset/product/defaultProductImage/defaultProductImage.jpg"
  );
  const imagePath: string = path.join(
    __dirname,
    `../asset/product/${productid}/${productid}.jpg`
  );
  if (fs.existsSync(imagePath)) {
    return imagePath;
  } else {
    return defaultImagePath;
  }
};

export {
  getAllProduct_service,
  getProductById_service,
  getProductImage_service,
};
