import { Client } from "../model/Client.js";
import { Client_Interface } from "../Interface/Client_Interface.js";
const addClient = async (client: Client_Interface) => {
  let newClient = new Client(client);
  let clientData = await newClient.signUp();
  console.log(clientData);
  return clientData;
};

export { addClient };
