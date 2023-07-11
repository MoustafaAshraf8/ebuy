import React from "react";

const Button_template = ({ text, href, Submit }) => {
  let element =
    href == undefined ? (
      <button className="btn btn-primary">{text}</button>
    ) : (
      <a href={href} className="btn btn-primary">
        {text}
      </a>
    );

  return <div className="d-grid gap-2">{element}</div>;
};

export default Button_template;
