import { pool } from "../../../../config/config.js";
import { Product_Interface } from "../Interface/Product_Interface.js";
import { Product_query } from "./query/Product_query.js";
export class Product {
  private Name: string;
  private Price: number;
  private Quantity: number;
  private Discount: number;
  private Category: string;
  private Description: string;

  constructor(newProduct: Product_Interface) {
    this.Name = newProduct.Name;
    this.Price = newProduct.Price;
    this.Quantity = newProduct.Quantity;
    this.Discount = 0;
    this.Category = newProduct.Category;
    this.Description = newProduct.Description;
  }

  public createProduct = async (seller_id: number): Promise<string> => {
    let query: string = Product_query.createProductQuery(
      seller_id,
      this.Name,
      this.Price,
      this.Quantity,
      this.Discount,
      this.Category,
      this.Description
    );

    try {
      let result = await pool.query(query);
      console.log("*****************query result**************");
      console.log(JSON.stringify(Object(result)[2].rows));
      console.log("*******************************************");
      return JSON.stringify(Object(result)[2].rows);
    } catch (error) {
      throw error;
    }
  };

  public static getAllProduct = async () => {
    try {
      let query: string = Product_query.getAllProductQuery();
      let result = await pool.query(query);
      //console.log(JSON.stringify(result.rows));
      return JSON.stringify(result.rows);
    } catch (error) {
      throw error;
    }
  };

  public static getProductById = async (productid: number) => {
    try {
      let query: string = Product_query.getProductByIdQuery(productid);
      let result = await pool.query(query);
      return JSON.stringify(result.rows);
    } catch (error) {
      throw error;
    }
  };

  public static removeProduct = async (
    productid: number,
    sellerid: number
  ): Promise<boolean> => {
    let query: string = Product_query.removeProductQuery(productid, sellerid);
    try {
      let result = await pool.query(query);
      //return JSON.stringify(result.rows);
      return true;
    } catch (error) {
      throw error;
    }
  };
}
