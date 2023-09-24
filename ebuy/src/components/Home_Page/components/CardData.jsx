import React, { useState } from "react";
import Product_image_template from "../../reuseable_components/Product_image_template";
import Button_template from "../../reuseable_components/Button_template";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import LockIcon from "@mui/icons-material/Lock";
import LoadingSpinner_template from "../../reuseable_components/LoadingSpinner_template";
import Error_template from "../../reuseable_components/Error_template";
import usePost from "../../Shared/usePost";
const CardData = ({ product }) => {
  let imgStyle = {
    width: "100%",
    height: "100%",
  };

  const loadDefaultImage = (e) => {
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%");
    e.target.src = "http://localhost:8080/product/image/0";
  };

  let productPath = `/product/${product.data.product_productid}`;

  let [submit, setSubmit] = useState(false);

  let addToCart = () => {
    setSubmit(true);
    console.log(`added to cart from homepage, submit=${submit}`);
  };

  let { data, loading, error } = usePost(
    "http://localhost:8080/client/cart",
    {
      productid: product.id,
      quantity: 1,
    },
    submit
  );

  //   if (loading) return <LoadingSpinner_template />;

  //   if (error || product == null) return <Error_template />;

  return (
    <div
      className="card border-0 col-10 col-sm-8 col-md-4 col-lg-2 p-3 m-5"
      style={{ height: "50vh" }}
    >
      <Product_image_template
        href={productPath}
        anchorStyle={{ height: "60%", width: "100%" }}
        //src={product.imgURL}
        //src="./Image/product_placeholder.png"
        src={product.data.product_image}
        onError={(e) => loadDefaultImage(e)}
        imgStyle={imgStyle}
      />
      <div className="card-body" style={{ height: "15%" }}>
        <p className="card-text">{product.data.product_name}</p>
      </div>
      <div
        className="d-block d-sm-flex justify-content-between p-2 align-items-center"
        style={{ height: "25%" }}
      >
        <div>
          <div className="align-items-start">
            Price: {product.data.product_price}$
          </div>
        </div>
        <div>
          <span
            className="fa fa-star checked"
            style={{ color: "orange" }}
          ></span>
          <span
            className="fa fa-star checked"
            style={{ color: "orange" }}
          ></span>
          <span
            className="fa fa-star checked"
            style={{ color: "orange" }}
          ></span>
          <span className="fa fa-star" style={{ color: "orange" }}></span>
          <span
            className="fa fa-star-half-o"
            style={{ color: "orange" }}
          ></span>
        </div>
        {/* <button
         className="btn btn-primary"
         type="button"
         style={{ backgroundColor: "rgb(0,128,0)", border: "none" }}
      >
         <span className="d-inline">
         <AddShoppingCartIcon />
         </span>
      </button> */}

        <Button_template
          text={error ? <LockIcon /> : <AddShoppingCartIcon />}
          style={{ backgroundColor: "rgb(0,128,0)", border: "none" }}
          onClick={addToCart}
        />
      </div>
      {/* <div>{Product.description}</div> */}
    </div>
  );
};

export default CardData;
