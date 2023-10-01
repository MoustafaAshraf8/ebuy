import { Seller } from "../model/Seller.js";
import { Seller_Interface } from "../Interface/Seller_Interface.js";
import { Seller_signIn_Interface } from "../Interface/Seller_signIn_Interface.js";
import { Parser } from "../../utilities/Parser.js";
import { JWT_Class } from "../../utilities/JWT_Class.js";
import { Product_Interface } from "../Interface/Product_Interface.js";
import { Product } from "../model/Product.js";

const sellerSignUp_service = async (
  seller: Seller_Interface
): Promise<any[]> => {
  const newSeller: Seller = new Seller(seller);
  const sellerData: string = await newSeller.signUp();
  const parsedSeller: any[] = Parser.sellerParser(sellerData);
  let accessToken: string = JWT_Class.createAccessToken(
    String(Object(parsedSeller[0]).person_id)
  );
  parsedSeller[0].accessToken = accessToken;
  return parsedSeller;
};

const sellerSignIn_service = async (
  oldSeller: Seller_signIn_Interface
): Promise<any[]> => {
  const seller: string = await Seller.signIn(oldSeller);
  const parsedSeller: any[] = Parser.sellerParser(seller);
  let accessToken: string = JWT_Class.createAccessToken(
    String(Object(parsedSeller[0]).person_id)
  );
  parsedSeller[0].accessToken = accessToken;

  return parsedSeller;
};

const addProduct_service = async (
  sellerid: number,
  product: Product_Interface
): Promise<any[]> => {
  const newProduct: Product = new Product(product);
  const productData: string = await newProduct.createProduct(sellerid);
  const parsedProduct = Parser.productParser(productData);
  console.log(parsedProduct[0].data);
  return parsedProduct;
};

const removeProduct_service = async (
  productid: number,
  sellerid: number
): Promise<boolean> => {
  const result: boolean = await Product.removeProduct(productid, sellerid);
  return result;
};

export { sellerSignUp_service, sellerSignIn_service, addProduct_service };
