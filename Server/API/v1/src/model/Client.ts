import bcrypt from "bcrypt";
import { pool } from "../../../../config/config.js";
import { Client_Interface } from "../Interface/Client_Interface.js";
import { Client_signIn_Interface } from "../Interface/Client_signIn_Interface.js";
import { Encryptor } from "../../utilities/Encryptor.js";
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

  private createPayment = async (userId: number): Promise<object> => {
    let query: string = `insert into client_payment (cid) values (${userId}) returning *;`;
    let result = await pool.query(query);
    return result.rows[0];
  };
  private createCart = async (userId: number): Promise<object> => {
    let query: string = `insert into client_cart (client_id) values (${userId}) returning *;`;
    let result = await pool.query(query);
    return result.rows[0];
  };

  private createEssentials = async (userId: number): Promise<object | void> => {
    let payment = await this.createPayment(userId);
    let cart = await this.createCart(userId);
  };

  public signUp = async (): Promise<object | boolean> => {
    let hashedPassword = await Encryptor.hashPassword(this.Password);
    let query = `insert into client (name, email, password, phone, address) values ('${this.Name}','${this.Email}','${hashedPassword}','${this.Phone}','${this.Address}') returning *;`;
    try {
      let result = await pool.query(query);
      let userId = result.rows[0].id;
      console.log(`userId: ${userId}`);
      //let payment = await this.createPayment(userId);
      this.createEssentials(userId);
      return result.rows[0];
    } catch {
      return false;
    }
  };

  public static signIn = async (
    oldClient: Client_signIn_Interface
  ): Promise<object | boolean> => {
    let query = `select * from client where email='${oldClient.Email}';`;
    let arrclient = await pool.query(query);
    try {
      let success = await Encryptor.verifyPassword(
        oldClient.Password,
        await arrclient.rows[0].password
      );
      if (success) {
        delete arrclient.rows[0]["password"];
        return arrclient.rows[0];
      } else {
        return { msg: "wrong email or password" };
      }
    } catch {
      return false;
    }
  };
}
