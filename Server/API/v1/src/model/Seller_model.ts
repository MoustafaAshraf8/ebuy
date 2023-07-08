import { pool } from "../../../../config/config.js";
import { Encryptor } from "../../utilities/Encryptor.js";
import { Seller_Interface } from "../Interface/Seller_Interface.js";
import { Seller_signIn_Interface } from "../Interface/Seller_signIn_Interface.js";
import { Product } from "./Product.js";
import { Product_Interface } from "../Interface/Product_Interface.js";
export class Seller_model {
  private Name: string;
  private Email: string;
  private Password: string;
  private Phone: string;
  private Address: string;

  constructor(newSeller: Seller_Interface) {
    this.Name = newSeller.Name;
    this.Email = newSeller.Email;
    this.Password = newSeller.Password;
    this.Phone = newSeller.Phone;
    this.Address = newSeller.Address;
  }

  public signUp = async (): Promise<object | boolean> => {
    let hashedPassword = await Encryptor.hashPassword(this.Password);
    let query = `insert into seller (name, email, password, phone, address) values ('${this.Name}','${this.Email}','${hashedPassword}','${this.Phone}','${this.Address}') returning *;`;
    try {
      let result = await pool.query(query);
      return result.rows[0];
    } catch {
      return false;
    }
  };

  public static signIn = async (
    oldSeller: Seller_signIn_Interface
  ): Promise<object | boolean> => {
    let query = `select * from seller where email='${oldSeller.Email}';`;
    let arrSeller = await pool.query(query);
    try {
      let success = await Encryptor.verifyPassword(
        oldSeller.Password,
        await arrSeller.rows[0].password
      );
      if (success) {
        delete arrSeller.rows[0]["password"];
        return arrSeller.rows[0];
      } else {
        return { msg: "wrong email or password" };
      }
    } catch {
      return false;
    }
  };

  public static addProduct = async (
    seller_id: number,
    newProduct: Product_Interface
  ) => {
    let product: Product = new Product(newProduct);
    let default_seller_id: number = 1;
    let result = await product.addProduct(seller_id);
    return result;
  };

  public static removeProduct = async (
    seller_id: number,
    product_id: number
  ) => {
    let result = await Product.removeProduct(seller_id, product_id);
    return result;
  };
}
