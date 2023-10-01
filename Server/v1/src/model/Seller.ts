import { pool } from "../../../config/config.js";
import { Encryptor } from "../../utilities/Encryptor.js";
import { Seller_Interface } from "../Interface/Seller_Interface.js";
import { Seller_signIn_Interface } from "../Interface/Seller_signIn_Interface.js";
import { Product } from "./Product.js";
import { Product_Interface } from "../Interface/Product_Interface.js";
import { Seller_query } from "./query/Seller_query.js";
import { error } from "console";
import { hash } from "bcrypt";
export class Seller {
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

  public signUp = async (): Promise<string> => {
    let hashedPassword = await Encryptor.hashPassword(this.Password);
    let query = Seller_query.signupQuery(
      this.Name,
      this.Email,
      hashedPassword,
      this.Phone,
      this.Address
    );
    try {
      let result = await pool.query(query);
      console.log(JSON.stringify(Object(result)[3].rows));
      return JSON.stringify(Object(result)[3].rows);
    } catch {
      console.log(error);
      throw error;
    }
  };

  public static signIn = async (
    oldSeller: Seller_signIn_Interface
  ): Promise<string> => {
    let query = Seller_query.signinQuery(oldSeller.Email);
    try {
      console.log(query);
      let arrseller = await pool.query(query);
      let success = await Encryptor.verifyPassword(
        oldSeller.Password,
        await arrseller.rows[0].person_password
      );
      if (success) {
        return JSON.stringify(arrseller.rows);
      } else {
        throw new Error("wrong cridentials");
      }
    } catch (err) {
      console.log(err);
      throw new Error("user not found");
    }
  };

  public static removeProduct = async (sellerid: number, productid: number) => {
    let result = await Product.removeProduct(productid, sellerid);
    return result;
  };
}
