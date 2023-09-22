import { Parser } from "../../utilities/Parser.js";
import { Product } from "../model/Product.js";

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

export { getAllProduct_service, getProductById_service };
