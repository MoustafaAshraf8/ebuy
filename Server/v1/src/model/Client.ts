import { pool } from "../../../config/config.js";
import { Client_Interface } from "../Interface/Client_Interface.js";
import { Client_signIn_Interface } from "../Interface/Client_signIn_Interface.js";
import { Client_query } from "./query/Client_query.js";
import { Encryptor } from "../../utilities/Encryptor.js";
import { Error_message_Interface } from "../Interface/Error_message_Interface.js";

export class Client {
  private Name: string;
  private Email: string;
  private Password: string;
  private Phone: string;
  private Address: string;

  constructor(client: Client_Interface) {
    this.Name = client.Name;
    this.Email = client.Email;
    this.Password = client.Password;
    this.Phone = client.Phone;
    this.Address = client.Address;
  }

  public signUp = async (): Promise<string> => {
    let hashedPassword = await Encryptor.hashPassword(this.Password);
    let query = Client_query.signup_query(
      this.Name,
      this.Email,
      hashedPassword,
      this.Phone,
      this.Address
    );
    try {
      let result = await pool.query(query);
      console.log(result);
      return JSON.stringify(Object(result)[5].rows);
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  public static signIn = async (
    oldClient: Client_signIn_Interface
  ): Promise<string> => {
    let query = Client_query.signin_query(oldClient.Email);
    try {
      let arrclient = await pool.query(query);
      let success = await Encryptor.verifyPassword(
        oldClient.Password,
        await arrclient.rows[0].person_password
      );
      if (success) {
        return JSON.stringify(arrclient.rows);
      } else {
        throw new Error("wrong cridentials");
      }
    } catch (err) {
      throw new Error("user not found");
    }
  };

  public static getCartItems = async (clientid: number) => {
    try {
      let query: string = Client_query.getCartItems_query(clientid);
      let result = await pool.query(query);
      return JSON.stringify(result.rows);
    } catch (err) {
      throw err;
    }
  };

  public static addToCart = async (
    clientid: number,
    productid: number,
    quantity: number
  ): Promise<string> => {
    try {
      let query: string = Client_query.addToCart_query(
        clientid,
        productid,
        quantity
      );
      let result = await pool.query(query);
      console.log("a7a");
      return JSON.stringify(result.rows);
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  public static deleteFromCart = async (
    clientid: number,
    productid: number
  ): Promise<string> => {
    try {
      let query = Client_query.deleteFromCart_query(clientid, productid);
      let result = await pool.query(query);
      return JSON.stringify(result.rows);
    } catch (err) {
      throw err;
    }
  };

  public static updateCartItemQuantity = async (
    clientid: number,
    productid: number,
    quantity: number
  ): Promise<string> => {
    try {
      let query = Client_query.updateCartItem_query(
        clientid,
        productid,
        quantity
      );
      let result = await pool.query(query);
      return JSON.stringify(result.rows);
    } catch (err) {
      throw err;
    }
  };
}
