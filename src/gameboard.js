import React from 'react';
import ship from './ship_factory.js';

const gameboard = (player) => {
  // should place ships on the board by calling the ship_factory 

  // should have a recieveAttack function that takes a pair of coordinates
    // determines whether or not the attack hit a ship 
    // sends the ‘hit’ function to the correct ship, 
    // or records the coordinates of the missed shot.

  // Gameboards should keep track of missed attacks so they can display them properly.

  // Gameboards should be able to report whether or not all of their ships have been sunk.
  const board = {
    playerNumber: player,
    fleet: ship(player),
    missedLog: [],
    hitLog: []
  }
  function recieveAttack(row, column) {
    if (board.fleet.hit(row,column)) {
      board.hitLog.push([row,column]);
      return ('hit');
    } else {
      board.missedLog.push([row,column]);
      return ('miss');
    }
  }
  return { board, recieveAttack }
}

export default gameboard;
