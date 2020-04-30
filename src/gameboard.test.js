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
  expect(playerOne.board.fleet.isSunk(playerOne.board.fleet.ships[4])).toBe(true);
});
