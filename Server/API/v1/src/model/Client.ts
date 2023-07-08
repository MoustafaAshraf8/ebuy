import bcrypt from "bcrypt";
import { pool } from "../../../../config/config.js";
import { Client_Interface } from "../Interface/Client_Interface.js";
import { Client_signIn_Interface } from "../Interface/Client_signIn_Interface.js";
import { Encryptor } from "../../utilities/Encryptor.js";
import { QueryResult } from "pg";
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

  public signUp = async (): Promise<object[]> => {
    let hashedPassword = await Encryptor.hashPassword(this.Password);
    let query = `insert into client (name, email, password, phone, address) values ('${this.Name}','${this.Email}','${hashedPassword}','${this.Phone}','${this.Address}') returning *;`;
    let result = await pool.query(query);
    return result.rows;
  };

  public static signIn = async (oldClient: Client_signIn_Interface) => {
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
      return { msg: "user not found" };
    }
  };
}