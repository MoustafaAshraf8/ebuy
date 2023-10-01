import React, { useState } from "react";
import { useReducer } from "react";
import useDeleteCartItem from "../../Shared/useDeleteCartItem";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Product_image_template from "../../reuseable_components/Product_image_template";
import Button_template from "../../reuseable_components/Button_template";
import usePatchCartItem from "../../Shared/usePatchCartItem";
const CartItem = (props) => {
  let itemStyle = {
    border: "0px solid orange",
  };
  let elementClassName = "mx-0 mx-sm-2 mx-md-4";

  const [remove, setRemove] = useState(false);
  const [modify, setModify] = useState(false);

  let reducer = (quantity, action) => {
    if (action.type == "increment") return { number: quantity.number + 1 };
    else if (action.type == "decrement")
      return { number: quantity.number >= 2 ? quantity.number - 1 : 1 };
    else if (action.type == "delete") return { number: 0 };
  };

  let [quantity, dispatcher] = useReducer(reducer, {
    number: props.product_quantity,
  });

  let incrementItem = () => {
    dispatcher({ type: "increment" });
    setModify(true);
  };
  let decrementItem = () => {
    dispatcher({ type: "decrement" });
    setModify(true);
  };
  let deleteItem = () => {
    console.log("item delete fn");
    setRemove(true);
  };

  let { data, loding, error } = useDeleteCartItem(
    props.product_productid,
    remove
  );

  let { data2, loading2, error2 } = usePatchCartItem(
    props.product_productid,
    modify,
    quantity
  );
  //setModify(false);

  if (data) return;

  if (data2) setModify(false);

  return (
    <div
      className="container-fluid d-sm-flex justify-content-center align-items-center p-0 mb-3"
      style={itemStyle}
    >
      <div className={elementClassName}>
        <Product_image_template
          href="#"
          anchorStyle={{ height: "100px", width: "100px" }}
          src={props.product_image}
          imgStyle={{ height: "100px", width: "100px" }}
        />
      </div>
      <div className={elementClassName}>{props.product_name}</div>
      <div className={elementClassName}>{props.product_price} $</div>
      <div className={elementClassName}>
        <Button_template
          text="-"
          style={{ backgroundColor: "#474646" }}
          onClick={decrementItem}
        />
      </div>
      <div className={elementClassName}>{quantity.number}</div>
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
