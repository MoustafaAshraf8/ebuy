import React, { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ProductImage from "./components/ProductImage";
import ProductData from "./components/ProductData";
import Button_template from "../reuseable_components/Button_template";
import LoadingSpinner_template from "../reuseable_components/LoadingSpinner_template";
import Error_template from "../reuseable_components/Error_template";
import useFetch from "../Shared/useFetch";
import usePost from "../Shared/usePost";
import ProductComment from "./components/ProductComment";
import { useSelector } from "react-redux/es/hooks/useSelector";

const ProductPage = () => {
  let navBar_height = "10vh";
  let productPageStyle = {
    //minHeight: "calc(100vh - 10vh)", //10vh : height of navbar
    border: "0px solid red",
  };
  let productPageContentStyle = {
    //  minHeight: "50vh",
    border: "0px solid green",
  };

  const elementClassName = "mb-2";

  const titleClassName = "me-3";
  let product_id = window.location.href.split("/").at(-1);

  const loadDefaultImage = (e) => {
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%");
    e.target.src = "http://localhost:8080/product/image/0";
  };

  let [Submit, setSubmit] = useState(false);
  let [remove, setRemove] = useState(false);

  let clicked = () => {
    console.log("add to cart");
    setSubmit(true);
  };
  let {
    data: product,
    loading,
    error,
  } = useFetch(`http://localhost:8080/product/${product_id}`);

  let {
    data: data2,
    loading: loading2,
    error: error2,
  } = usePost(
    "http://localhost:8080/client/cart",
    {
      productid: product_id,
      quantity: 1,
    },
    Submit
  );

  const user = useSelector((state) => {
    console.log("-----------------");
    console.log(state.user.value);
    //setX("x");
    console.log("-----------------");
    return state.user.value;
  });

  if (loading) return <LoadingSpinner_template />;

  if (error || product == null) return <Error_template />;

  return (
    <div
      className="container-fluid d-flex flex-column justify-content-start"
      style={{ border: "0px solid yellow" }}
    >
      <div
        className=" d-md-flex flex-row justify-content-between align-items-start p-5 pb-0 pt-4 m-0"
        style={productPageStyle}
      >
        <div
          className="container-fluid d-flex flex-row justify-content-center align-items-start p-2 m-1"
          style={productPageContentStyle}
        >
          <ProductImage
            src={product[0].data.product_image}
            onError={(e) => loadDefaultImage(e)}
          />
        </div>

        <div
          className="container-fluid d-flex flex-column justify-content-start align-items-start p-2 m-1"
          style={productPageContentStyle}
        >
          <ProductData
            {...product[0].data}
            key={product[0].data.product_productid}
          />
          <div className="container-fluid p-0">
            <Button_template
              onClick={clicked}
              text={data2 ? <TaskAltIcon /> : <AddShoppingCartIcon />}
              style={{ backgroundColor: "rgb(0,128,0)", border: "none" }}
            />
          </div>
        </div>
      </div>
      <div className={elementClassName} style={{ textAlign: "left" }}>
        <div>
          <h4 className={titleClassName}>Description: </h4>
        </div>
        <div>
          <h6>{product[0].data.product_description}</h6>
        </div>
      </div>
      <hr />
      <div className={elementClassName} style={{ textAlign: "left" }}>
        <div>
          <h4 className={titleClassName}>Comments: </h4>
        </div>
        {product[0].comment.map((comment) => (
          <ProductComment {...comment} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
