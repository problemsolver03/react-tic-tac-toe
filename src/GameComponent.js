import React from "react";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import GameTile from "./GameTile";
import PlayStatus from "./PlayStatus";
import Reset from "./Reset";
import "react-toastify/dist/ReactToastify.css";
const GameComponent = () => {
  const [selected, setSelected] = useState(0);
  const [items, setItems] = useState(new Array(9).fill(""));
  const [activePlayer, setActivPlayer] = useState("O");
  const [win, setWin] = useState("");

  const handleSelection = (i) => {
    if (win === "") {
      let itemsCopy = [...items];
      itemsCopy[i] = activePlayer;
      setItems(itemsCopy);
      setSelected(selected + 1);
    }
  };

  const resetGame = () => {
    setItems(new Array(9).fill(""));
    setWin("");
    setSelected(0);
  };

  const winner = (coin) => {
    const seq = [...items];
    let gridSize = 3;
    const stepSeq = (coin, step, start) => {
      let coinWin = coin.repeat(gridSize);
      let found = "";
      let loopBreak = 0;
      let track = start;
      while (loopBreak < gridSize) {
        found += seq[track];
        track = track + step;
        loopBreak++;
      }
      return found === coinWin;
    };

    let winSequence = [
      [1, 0],
      [1, 3],
      [1, 6],
      [3, 0],
      [3, 1],
      [3, 2],
      [4, 0],
      [2, 2],
    ];
    let draw = true;
    for (let i = 0; i < winSequence.length; i++) {
      if (stepSeq(coin, ...winSequence[i])) {
        setWin(coin);
        draw = false;
        toast.success(`${coin} wins the game..`);
        break;
      }
    }

    if (selected > 8 && draw) {
      setWin("Draw");
      toast.info(`It's a tie.`);
    }
  };

  useEffect(() => {
    if (selected > 4) {
      winner(activePlayer);
    }
    setActivPlayer(activePlayer === "X" ? "O" : "X");
  }, [items]);
  return (
    <div>
      <div className="flex">
        {items.map((item, i) => {
          return (
            <div className="tile" key={i}>
              {item === "" ? (
                <GameTile
                  item={item}
                  handleSelection={handleSelection}
                  key={i}
                  index={i}
                />
              ) : (
                <GameTile
                  item={item}
                  handleSelection={handleSelection}
                  key={i}
                  index={i}
                  status={true}
                />
              )}
            </div>
          );
        })}
      </div>
      <PlayStatus activePlayer={activePlayer} />
      <Reset resetGame={resetGame} />
      <ToastContainer />
    </div>
  );
};

export default GameComponent;
