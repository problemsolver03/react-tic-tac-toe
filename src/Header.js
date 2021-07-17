import React from "react";

const Header = (props) => {
  return (
    <h1 className="text-center header">
      {props.title} <br /> <small>{props.description}</small>
    </h1>
  );
};

export default Header;
