import { Client } from "../model/Client.js";
import { Client_Interface } from "../Interface/Client_Interface.js";
import { Client_signIn_Interface } from "../Interface/Client_signIn_Interface.js";
import { Error_message_Interface } from "../Interface/Error_message_Interface.js";
import { Parser } from "../../utilities/Parser.js";
import { JWT_Class } from "../../utilities/JWT_Class.js";

const clientSignUp_service = async (
  client: Client_Interface
): Promise<any[]> => {
  let newClient: Client = new Client(client);
  let clientData: string = await newClient.signUp();
  const parsedclient: any[] = Parser.clientParser(clientData);
  let accessToken: string = JWT_Class.createAccessToken(
    String(Object(parsedclient).person_id)
  );
  parsedclient[0].accessToken = accessToken;
  console.log(parsedclient);
  return parsedclient;
};

const clientLogIn_service = async (
  oldClient: Client_signIn_Interface
): Promise<any[]> => {
  const clientData = await Client.signIn(oldClient);
  const parsedClient = Parser.clientParser(clientData);
  let accessToken = JWT_Class.createAccessToken(
    String(Object(parsedClient).person_id)
  );
  parsedClient[0].accessToken = accessToken;
  console.log(parsedClient);
  return parsedClient;
};

// const authenticateClient = async (
//   client: Client_signIn_Interface
// ): Promise<Client_Interface | Error_message_Interface> => {
//   //   let newClient = new Client(client);
//   //   let clientData = await newClient.signUp();
//   //   console.log(clientData);
//   //   return clientData;

//   let oldClient = await Client.signIn(client);
//   return oldClient;
// };

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

const updateCartItem_service = async (
  userid: number,
  productid: number,
  quantity: number
) => {
  let result = await Client.updateCartItemQuantity(userid, productid, quantity);
  return result;
};

export {
  clientSignUp_service,
  clientLogIn_service,
  //   authenticateClient,
  addToClientCart,
  getCartItems_service,
  deleteFromClientCart_service,
  updateCartItem_service,
};
