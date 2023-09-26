import { pool } from "../../../../config/config.js";
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

  public static addToCart = async (
    userid: number,
    productid: number,
    quantity: number
  ): Promise<Client_Interface | Error_message_Interface> => {
    try {
      let query = `
      insert into client_cart_product (cart_id, product_id, quantity)
         select id, ${productid}, ${quantity}
            from client_cart
            where client_id=${userid} returning *;`;
      let result = await pool.query(query);
      return result.rows[0];
    } catch (err) {
      return { success: false, error: Object(err).detail };
    }
  };

  public static deleteFromCart = async (
    userid: number,
    productid: number
  ): Promise<Client_Interface | Error_message_Interface> => {
    try {
      let query = `delete from client_cart_product
      using (select * from client_cart where client_cart.client_id=${userid}) result
      where result.id=client_cart_product.cart_id and client_cart_product.product_id=${productid} returning *;`;
      let result = await pool.query(query);
      return result.rows[0];
    } catch (err) {
      return { success: false, error: Object(err).detail };
    }
  };

  public static updateCartItemQuantity = async (
    userid: number,
    productid: number,
    quantity: number
  ): Promise<Client_Interface | Error_message_Interface> => {
    try {
      let query = `UPDATE client_cart_product
      SET quantity = ${quantity}
      FROM client_cart
      WHERE client_cart.client_id = ${userid} and client_cart_product.cart_id = client_cart.id and client_cart_product.product_id = ${productid} returning *;`;
      let result = await pool.query(query);
      return result.rows[0];
    } catch (err) {
      return { success: false, error: Object(err).detail };
    }
  };

  public static getCartItems = async (userid: number) => {
    try {
      let query: string = `
        SELECT product.id, product.name, product.price, product.quantity, product.discount, product.category, product.description
      FROM (
      (client_cart INNER JOIN client_cart_product ON client_cart.id = client_cart_product.cart_id)
      INNER JOIN product ON client_cart_product.product_id = product.id)
      where client_cart.client_id=${userid};`;
      let result = await pool.query(query);
      return result.rows;
    } catch (err) {
      return { success: false, error: Object(err).detail };
    }
  };
}
