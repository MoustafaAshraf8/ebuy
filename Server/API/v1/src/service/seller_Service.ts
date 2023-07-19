import { Seller_model } from "../model/Seller_model.js";
import { Seller_Interface } from "../Interface/Seller_Interface.js";
import { Seller_signIn_Interface } from "../Interface/Seller_signIn_Interface.js";
const addSeller = async (seller: Seller_Interface) => {
  let newSeller = new Seller_model(seller);
  let sellerData = await newSeller.signUp();
  return sellerData;
};

const rememberSeller = async (
  oldSeller: Seller_signIn_Interface
): Promise<object | boolean> => {
  let seller = await Seller_model.signIn(oldSeller);
  return seller;
};

const createJWT = async (id: number): Promise<object | boolean> => {
  //let seller = await Seller_model.signIn(oldSeller);
  return true;
};

export { addSeller, rememberSeller };
