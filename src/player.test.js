import React from 'react';
import { render } from '@testing-library/react';
import gameboard from './gameboard';
import player from './player';

test('computers turn', () => {
  const computerPlayer = player(true);
  const humanPlayer = player(false);
  expect(computerPlayer.computer).toBe(true);
  
  computerPlayer.computerTurn(humanPlayer);

  function shotTaken() {
    return (computerPlayer.enemyHitLog.length > 0 || computerPlayer.enemyMissLog.length > 0)
  }
  expect(shotTaken()).toBe(true);
  console.log(computerPlayer)
});
