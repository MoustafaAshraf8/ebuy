import { pool } from "../../../../config/config.js";
import { Product_interface } from "../data_type/Product_interface.js";
export class Product {
  private Name: string;
  private Category: string;
  private Rating: number;
  private Price: number;
  private Quantity: number;
  private Description: string;

  constructor(newProduct: Product_interface) {
    this.Name = newProduct.Name;
    this.Category = newProduct.Category;
    this.Rating = newProduct.Rating;
    this.Price = newProduct.Price;
    this.Quantity = newProduct.Quantity;
    this.Description = newProduct.Description;
  }

  public static getAllProduct = async () => {
    let query: string = `select * from product;`;
    let res = await pool.query(query);
    return res.rows;
  };

  public static getProductById = async (id: string) => {
    let query: string = `select * from product where productid=${id};`;
    let res = await pool.query(query);
    return res.rows;
  };

  public addProduct = async () => {
    let query: string = `insert into product (Name, Category, Rating, Price, Quantity, Description) values ('${this.Name}', '${this.Category}', '${this.Rating}', '${this.Price}', '${this.Quantity}', '${this.Description}') returning *;`;
    let res = await pool.query(query);
    return res.rows;
  };
}
