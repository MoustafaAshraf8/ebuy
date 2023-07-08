import { pool } from "../../../../config/config.js";
import { Product_Interface } from "../Interface/Product_Interface.js";
export class Product {
  private Name: string;
  private Category: string;
  private Rating: number;
  private Price: number;
  private Quantity: number;
  private Description: string;

  constructor(newProduct: Product_Interface) {
    this.Name = newProduct.Name;
    this.Category = newProduct.Category;
    this.Rating = newProduct.Rating;
    this.Price = newProduct.Price;
    this.Quantity = newProduct.Quantity;
    this.Description = newProduct.Description;
  }

  public static getAllProduct = async () => {
    let query: string = `select * from product;`;
    let result = await pool.query(query);
    return result.rows;
  };

  public static getProductById = async (id: string) => {
    let query: string = `select * from product where productid=${id};`;
    let result = await pool.query(query);
    return result.rows;
  };

  public addProduct = async (seller_id: number): Promise<object | boolean> => {
    let query: string = `insert into product (seller_id, name, price, quantity ,description) values ('${seller_id}','${this.Name}', '${this.Price}', '${this.Quantity}', '${this.Description}') returning *;`;
    let result = await pool.query(query);
    return result.rows[0];
  };

  public static removeProduct = async (
    seller_id: number,
    product_id: number
  ): Promise<object | boolean> => {
    let query: string = `delete from product where id='${product_id}' and seller_id='${seller_id}' returning *;`;
    let result = await pool.query(query);
    return result.rows[0];
  };
}
