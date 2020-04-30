import React from 'react';
import placeShip from './place_ships.js';
import gameboard from './gameboard';
import setHorizontalPosition from './place_ships.js';

test('ships are bound within the board', () => {
  let playerOne = gameboard(1);

  // columns 1-10
  let allColumns = [];
    for (let ship of playerOne.board.fleet.ships) {
      allColumns.push(ship.position[ship.position.length - 1][1]);
    }

  expect(Math.max(...allColumns)).toBeLessThan(11);

  // rows a-j
});
