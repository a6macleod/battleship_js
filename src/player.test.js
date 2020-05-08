import React from 'react';
import { render } from '@testing-library/react';
import gameboard from './gameboard';
import player from './player';

test('player is the computer', () => {
  const computerPlayer = player(true);
  expect(computerPlayer.computer).toBe(true);
  
  computerPlayer.computerTurn();

  function shotTaken() {
    return (computerPlayer.enemyHitLog.length > 0 || computerPlayer.enemyMissLog.length > 0)
  }
  expect(shotTaken()).toBe(true);
  console.log(computerPlayer)
});
