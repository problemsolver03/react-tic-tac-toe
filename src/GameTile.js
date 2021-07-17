import React from "react";
import { GrClose, GrRadial } from "react-icons/gr";
const GameTile = ({ item, handleSelection, index, status }) => {
  return (
    <button
      className={`btn ${
        item !== "" ? `selected ${item === "X" ? "xIcon" : "oIcon"}` : ""
      }`}
      type="button"
      onClick={() => {
        handleSelection(index);
      }}
      disabled={status}
    >
      {item === "X" ? <GrClose /> : null}
      {item === "O" ? <GrRadial /> : null}
    </button>
  );
};

export default GameTile;
