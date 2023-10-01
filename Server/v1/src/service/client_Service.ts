import { Client } from "../model/Client.js";
import { Client_Interface } from "../Interface/Client_Interface.js";
import { Client_signIn_Interface } from "../Interface/Client_signIn_Interface.js";
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
    String(Object(parsedClient[0]).person_id)
  );
  parsedClient[0].accessToken = accessToken;
  console.log(parsedClient);
  return parsedClient;
};

const getCartItems_service = async (clientid: number) => {
  const result = await Client.getCartItems(clientid);
  const parsedCartItems = Parser.cartItemsParser(result);
  return parsedCartItems;
};

const addToCart_service = async (
  clientid: number,
  productid: number,
  quantity: number
) => {
  let result: string = await Client.addToCart(clientid, productid, quantity);
  return;
  //return result;
};
const deleteFromClientCart_service = async (
  clientid: number,
  productid: number
) => {
  let result = await Client.deleteFromCart(clientid, productid);
  return;
};

const updateCartItem_service = async (
  clientid: number,
  productid: number,
  quantity: number
) => {
  let result = await Client.updateCartItemQuantity(
    clientid,
    productid,
    quantity
  );
  return;
};

export {
  clientSignUp_service,
  clientLogIn_service,
  //   authenticateClient,
  addToCart_service,
  getCartItems_service,
  deleteFromClientCart_service,
  updateCartItem_service,
};
