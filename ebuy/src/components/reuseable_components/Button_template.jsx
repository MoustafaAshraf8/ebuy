import React from "react";

const Button_template = (props) => {
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

  return <div className="d-grid gap-2">{element}</div>;
};

export default Button_template;
