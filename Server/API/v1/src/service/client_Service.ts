import { Client } from "../model/Client.js";
import { Client_Interface } from "../Interface/Client_Interface.js";
import { Client_signIn_Interface } from "../Interface/Client_signIn_Interface.js";
import { Error_message_Interface } from "../Interface/Error_message_Interface.js";

const clientSignUp_service = async (
  client: Client_Interface
): Promise<Client_Interface | Error_message_Interface> => {
  let newClient = new Client(client);
  let clientData = await newClient.signUp();
  console.log(clientData);
  return clientData;
};
const clientLogIn_service = async (
  client: Client_signIn_Interface
): Promise<Client_Interface | Error_message_Interface> => {
  let result: Client_Interface | Error_message_Interface = await Client.signIn(
    client
  );
  return result;
};

const authenticateClient = async (
  client: Client_signIn_Interface
): Promise<Client_Interface | Error_message_Interface> => {
  //   let newClient = new Client(client);
  //   let clientData = await newClient.signUp();
  //   console.log(clientData);
  //   return clientData;

  let oldClient = await Client.signIn(client);
  return oldClient;
};

const addToClientCart = async (
  userid: number,
  productid: number,
  quantity: number
) => {
  let result = await Client.addToCart(userid, productid, quantity);
  return result;
};
const deleteFromClientCart_service = async (
  userid: number,
  productid: number
) => {
  let result = await Client.deleteFromCart(userid, productid);
  return result;
};

const getCartItems_service = async (userid: number) => {
  let result = await Client.getCartItems(userid);
  return result;
};

export {
  clientSignUp_service,
  clientLogIn_service,
  authenticateClient,
  addToClientCart,
  getCartItems_service,
  deleteFromClientCart_service,
};
