import React from "react";

const PlayStatus = (props) => {
  return <span className="status">{props.activePlayer}'s turn.</span>;
};

export default PlayStatus;
