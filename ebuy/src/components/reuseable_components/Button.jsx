import React from "react";

const Button_2 = (props) => {
  console.log(props);
  let element =
    props.href == undefined ? (
      <button
        className="btn btn-primary"
        style={props.style}
        onClick={props.onClick}
      >
        {props.text}
      </button>
    ) : (
      <a href={props.href} className="btn btn-primary">
        {props.text}
      </a>
    );

  return <div>{element}</div>;
};

export default Button_2;
