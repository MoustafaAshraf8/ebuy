import React from "react";
import { useState } from "react";

const ProductComment = (props) => {
  //   const ratingMap = new Map([
  //     [
  //       1,
  //       `<div>
  //         <span className="fa fa-star checked" style={{ color: "orange" }}></span>
  //         <span className="fa fa-star checked" style={{ color: "orange" }}></span>
  //         <span className="fa fa-star checked" style={{ color: "orange" }}></span>
  //         <span className="fa fa-star" style={{ color: "orange" }}></span>
  //         <span className="fa fa-star-half-o" style={{ color: "orange" }}></span>
  //       </div>`,
  //     ],
  //     [2, "two"],
  //     [3, "three"],
  //   ]);

  //   function getStars(rating) {
  //     // Round to nearest half
  //     rating = Math.round(rating * 2) / 2;
  //     let output = [];

  //     // Append all the filled whole stars
  //     for (var i = rating; i >= 1; i--)
  //       output.push(
  //         '<i class="fa fa-star" aria-hidden="true" style="color: gold;"></i>&nbsp;'
  //       );

  //     // If there is a half a star, append it
  //     if (i == 0.5)
  //       output.push(
  //         '<i class="fa fa-star-half-o" aria-hidden="true" style="color: gold;"></i>&nbsp;'
  //       );

  //     // Fill the empty stars
  //     for (let i = 5 - rating; i >= 1; i--)
  //       output.push(
  //         '<i class="fa fa-star-o" aria-hidden="true" style="color: gold;"></i>&nbsp;'
  //       );

  //     return output;
  //   }

  //   console.log(
  //     new DOMParser().parseFromString(ratingMap.get(1).slice(1), "text/html")
  //       .firstChild.innerHTML
  //   );

  return (
    <div className="p-2 m-1">
      <div className="d-sm-flex justify-content-between align=items-center">
        <div>
          <h5>{props.productreview_comment_heading}</h5>
        </div>
        <div>
          <h5>{props.productreview_rating}</h5>
        </div>
        {/* <div>{props.productreview_rating}</div> */}
        {/* <div>
          {getStars(props.productreview_rating).map((star) => {
            var doc = new DOMParser().parseFromString(star, "text/xml");
            return doc.firstChild.firstChild.innerHTML;
          })}
        </div> */}
        {/* {
          new DOMParser().parseFromString(ratingMap.get(1), "text/html")
            .firstChild.innerHTML
        } */}
      </div>
      <div>
        <h6>{props.productreview_comment_body}</h6>
      </div>
      <div>{props.client_name}</div>
    </div>
  );
};

export default ProductComment;
