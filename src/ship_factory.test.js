import React from 'react';
import { render } from '@testing-library/react';
import ship from './ship_factory';

test('is a ship hit?', () => {
  let playerTwo = ship(2);
  let shotHits = playerTwo.ships[0].position[0];

  // playerOne shoots at playerTwo
  expect(playerTwo.hit('b',15)).toBe(false);

  expect(playerTwo.hit(shotHits[0],shotHits[1])).toBe(true);
});

test('is the ship sunk?', () => {
  let playerTwo = ship(2);
  let hitOne = playerTwo.ships[4].position[0];
  let hitTwo = playerTwo.ships[4].position[1];

  // hit twice and sink the patrol boat
  playerTwo.hit(hitOne[0],hitOne[1],playerTwo);
  playerTwo.hit(hitTwo[0],hitTwo[1],playerTwo)
  expect(playerTwo.isSunk(playerTwo.ships[4])).toBe(true);
});

test('place the ships', () => {
  let playerOne = ship(1);
  expect(playerOne.ships[0].position.length).toBe(5);
  expect(playerOne.ships[1].position.length).toBe(4);
  expect(playerOne.ships[2].position.length).toBe(3);
  expect(playerOne.ships[3].position.length).toBe(3);
  expect(playerOne.ships[4].position.length).toBe(2);
});
