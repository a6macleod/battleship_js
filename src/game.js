import React from "react";
import player from "./player";

const game = () => {
  const humanPlayer = player(false);
  const computerPlayer = player(true);
  let gameOver = false;

  function isGameOver(enemy) {
    if (enemy.command.allSunk) {
      gameOver = true;
    }
  }

  function computerTurn() {
    computerPlayer.shoots(humanPlayer);
  }

  function getCoordinates() {
    // code to get a player choice
  }

  function playerTurn() {
    let shotCoords = getCoordinates() || ["a", 9]
    humanPlayer.shoots(computerPlayer, shotCoords[0], shotCoords[1]);
  }

  function endGame() {
    // code to announce end of game and prompt a button to restart
  }

  function startGame() {
    while (gameOver === false) {
      playerTurn();
      isGameOver(humanPlayer);
      computerTurn();
      isGameOver(computerPlayer);
      // gameOver = true;
    }
    endGame();
    console.log("the Game ended!")
  }

  return { humanPlayer, computerPlayer, computerTurn, playerTurn, startGame, gameOver };
};

export default game;
