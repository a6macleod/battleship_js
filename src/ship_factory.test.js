import React from 'react';
import { render } from '@testing-library/react';
import ship from './ship_factory';

test('check link to ship_factory', () => {
  let aPlayer = ship(1);
  expect(aPlayer.fleet.playerNumber).toBe(1);
  expect(aPlayer.fleet.ships[0]).toMatchObject({
      name: 'carrier',
      length: 5,
      position: [['a',1],['a',2],['a',3],['a',4],['a',5]],
      sunk: false
      });
});

test('is a ship hit?', () => {
  let playerOne = ship(1);
  let playerTwo = ship(2);

  // playerOne shoots at playerTwo
  expect(playerTwo.hit('b',6,playerTwo)).toBe(false);

  // playerTwo shoots at playerOne
  expect(playerOne.hit('b',1,playerOne)).toBe(true);
});

test('is the ship sunk?', () => {
  let playerTwo = ship(2);

  // hit twice and sink the patrol boat
  playerTwo.hit('e',1,playerTwo);
  playerTwo.fleet.ships[4].position[0].push('hit');
  playerTwo.hit('e',2,playerTwo)
  playerTwo.fleet.ships[4].position[1].push('hit');
  expect(playerTwo.isSunk(playerTwo.fleet.ships[4])).toBe(true);
});
