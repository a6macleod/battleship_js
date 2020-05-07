import React from 'react';
import { render } from '@testing-library/react';
import gameboard from './gameboard';

test('calling gameboard also calls ship_factory', () => {
  let playerOne = gameboard(1);
  expect(playerOne.board.playerNumber).toBe(1);
  expect(playerOne.board.fleet.ships[0].name).toBe('carrier');
});

test('recieveAttack to your board', () => {
  let playerOne = gameboard(1);
  let shotHits = playerOne.board.fleet.ships[0].position;
  expect(playerOne.recieveAttack('a',14)).toBe('miss');
  expect(playerOne.recieveAttack(shotHits[0][0],shotHits[0][1])).toBe('hit');
});

test('ship isSunk', () => {
  let playerOne = gameboard(1);
  let shotHits = playerOne.board.fleet.ships[4].position;
  playerOne.recieveAttack(shotHits[0][0],shotHits[0][1]);
  playerOne.recieveAttack(shotHits[1][0],shotHits[1][1]);
  if (playerOne.board.fleet.isSunk(playerOne.board.fleet.ships[4]) === false) {
    console.log(playerOne.board.fleet.ships[4]);
  }
  expect(playerOne.board.fleet.isSunk(playerOne.board.fleet.ships[4])).toBe(true);
});

test('all ships are sunk', () => {
  let playerTwo = gameboard(1);
  // const carrier = playerTwo.board.fleet.ships[0].position; // 5 positions
  // const battleship = playerTwo.board.fleet.ships[1].position; // 4 positions
  // const destroyer = playerTwo.board.fleet.ships[2].position; // 3 positions
  // const submarine = playerTwo.board.fleet.ships[3].position; // 3 positions
  // const patrolBoat = playerTwo.board.fleet.ships[4].position; // 2positions
  for (let ship of playerTwo.board.fleet.ships) {
    for (let position of ship.position) {
      console.log(position[0], position[1]);
      playerTwo.recieveAttack(position[0], position[1])
    }
  }
  expect(playerTwo.allSunk()).toBe(true);
});
