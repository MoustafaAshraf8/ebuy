import { Seller_model } from "../model/Seller_model.js";
import { Seller_Interface } from "../Interface/Seller_Interface.js";

const addSeller = async (seller: Seller_Interface) => {
  let newSeller = new Seller_model(seller);
  let sellerData = await newSeller.signUp();
  return sellerData;
};

export { addSeller };
