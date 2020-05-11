import React from "react";
import gameboard from "./gameboard";
import randomPoint from "./random_point";

const player = (isComputer) => {
  const computer = isComputer;
  let enemyHitLog = [];
  let enemyMissLog = [];

  const command = gameboard();

  function sendAttack(otherPlayer, row, column) {
    if (otherPlayer.command.recieveAttack(row, column) === "hit") {
      enemyHitLog.push([row, column]);
    } else {
      enemyMissLog.push([row, column]);
    }
  }

  function checkLogs(log, attackPoint) {
    for (let entry of log) {
      if (entry[0] === attackPoint[0] || entry[1] === attackPoint[1]) {
        return true;
      } else {
        return false;
      }
    }
  }

  function attackedSpaceAlready(attackPoint) {
    // search enemyHitLog/enemyMissLog if attackPoint is already used
    return (
      checkLogs(enemyHitLog, attackPoint) ||
      checkLogs(enemyMissLog, attackPoint)
    );
  }

  function computerShoots(otherPlayer) {
    let attackPoint = null;
    do {
      attackPoint = randomPoint();
    } while (attackedSpaceAlready(attackPoint));
      sendAttack(otherPlayer, attackPoint[0], attackPoint[1]);
  }

  return {
    computer,
    computerShoots,
    enemyHitLog,
    enemyMissLog,
    command,
  };
};

export default player;
