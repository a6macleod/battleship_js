import React from 'react';
import ship from './ship_factory.js';

const gameboard = (player) => {
  // Gameboards should be able to report whether or not all of their ships have been sunk.
  const board = {
    playerNumber: player,
    fleet: ship(player),
    missedLog: [],
    hitLog: []
  }

  function allSunk() {
    let arrayOfSunkShips = [];

    const shipIsSunk = (value) => value === true;

    for (let ship of board.fleet.ships) {
      arrayOfSunkShips.push(ship.sunk);
    }
    return arrayOfSunkShips.every(shipIsSunk);
  }

  function recieveAttack(row, column) {
    if (board.fleet.hit(row,column)) {
      board.hitLog.push([row,column]);
      allSunk();
      return ('hit');
    } else {
      board.missedLog.push([row,column]);
      return ('miss');
    }
  }
  return { board, recieveAttack, allSunk }
}

export default gameboard;
