import React from 'react';
import gameboard from './gameboard';

const player = (isComputer) => {
  const computer = isComputer;
  let otherPlayer = gameboard();
  let playersTurn = false;
  let enemyHitLog = [];
  let enemyMissLog = [];

  const command = gameboard();

  function computerTurn() {
    playersTurn = true;
    let row = generateRow();
    let column = generateColumn();
    sendAttack(otherPlayer, "a", 1);
  }
  // function checkShot(otherPlayer, row, column) {
  //   if ()
  // }

  function sendAttack(otherPlayer, row, column) {
    if (otherPlayer.recieveAttack(row, column) === "hit") {
      enemyHitLog.push([row,column]);
    } else {
      enemyMissLog.push([row,column]);
    }
  }
  return {computer, computerTurn, playersTurn, enemyHitLog, enemyMissLog, command}
}

export default player