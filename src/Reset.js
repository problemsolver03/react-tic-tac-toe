import React from "react";
import { GrPowerReset } from "react-icons/gr";
const Reset = (props) => {
  return (
    <div>
      <button className="reset" onClick={props.resetGame}>
        <GrPowerReset /> Reset
      </button>
    </div>
  );
};

export default Reset;
