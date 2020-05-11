import React from "react";
import player from "./player";

const game = () => {
  const humanPlayer = player(false);
  const computerPlayer = player(true);

  function computerTurn() {
    computerPlayer.computerShoots(humanPlayer);
  }

  function playerTurn() {
    humanPlayer.computerShoots(computerPlayer);
  }

  return { humanPlayer, computerPlayer, computerTurn, playerTurn };
};

export default game;
