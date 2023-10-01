import { Client_Interface } from "./Client_Interface.js";

//type client_signIn = Pick<Client_Interface, "Email" | "Password">;
interface Client_signIn_Interface {
  Email: string;
  Password: string;
}
export { Client_signIn_Interface };
