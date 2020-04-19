import React from 'react';
import { render } from '@testing-library/react';
import gameboard from './gameboard';

test('calling gameboard also calls ship_factory', () => {
  let playerOne = gameboard(1);
  expect(playerOne.board.playerNumber).toBe(1);
  expect(playerOne.board.fleet.ships[0].name).toBe('carrier');
});

test('ships are randomly placed', () => {
  // set the ships up randomly
});

test('recieveAttack to your board', () => {
  let playerOne = gameboard(1);
  expect(playerOne.recieveAttack('a',7)).toBe('miss');
  expect(playerOne.recieveAttack('a',1)).toBe('hit');
  playerOne.recieveAttack('a',2);
  playerOne.recieveAttack('a',3);
  playerOne.recieveAttack('a',4);
  playerOne.recieveAttack('a',5);
  expect(playerOne.board.fleet.isSunk(playerOne.board.fleet.ships[0])).toBe(true);
  console.log(playerOne.board.hitLog);
});

test('ship isSunk', () => {
  let playerOne = gameboard(1);
  playerOne.recieveAttack('e',1);
  playerOne.recieveAttack('e',2);
  expect(playerOne.board.fleet.isSunk(playerOne.board.fleet.ships[4])).toBe(true);
});
