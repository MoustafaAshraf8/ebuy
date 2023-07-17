import React from "react";
import { useReducer } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Product_image_template from "../../reuseable_components/Product_image_template";
import Button_template from "../../reuseable_components/Button_template";
const CartItem = (props) => {
  let itemStyle = {
    border: "0px solid orange",
  };
  let elementClassName = "mx-0 mx-sm-2 mx-md-5";

  let reducer = (Quantity, action) => {
    if (action.type == "increment") return { number: Quantity.number + 1 };
    else if (action.type == "decrement") return { number: Quantity.number - 1 };
    else if (action.type == "delete") return { number: 0 };
  };

  let [Quatity, dispatcher] = useReducer(reducer, { number: 1 });

  let incrementItem = () => {
    dispatcher({ type: "increment" });
  };
  let decrementItem = () => {
    dispatcher({ type: "decrement" });
  };
  let deleteItem = () => {
    dispatcher({ type: "delete" });
  };

  return (
    <div
      className="container-fluid d-flex flex-row justify-content-center align-items-center p-0 mb-3"
      style={itemStyle}
    >
      <div className={elementClassName}>
        <Product_image_template
          href="#"
          anchorStyle={{ height: "100px", width: "100px" }}
          src={props.imgURL}
          imgStyle={{ height: "100px", width: "100px" }}
        />
      </div>
      <div className={elementClassName}>{props.name}</div>
      <div className={elementClassName}>{props.price}</div>
      <div className={elementClassName}>
        <Button_template
          text="-"
          style={{ backgroundColor: "#474646" }}
          onClick={decrementItem}
        />
      </div>
      <div className={elementClassName}>{Quatity.number}</div>
      <div className={elementClassName}>
        <Button_template
          text="+"
          style={{ backgroundColor: "#474646" }}
          onClick={incrementItem}
        />
      </div>
      <div className={elementClassName}>
        <Button_template
          text={<DeleteForeverIcon />}
          style={{ backgroundColor: "red" }}
          onClick={deleteItem}
        />
      </div>
    </div>
  );
};

//{ href, anchorStyle, src, imgStyle }

export default CartItem;
