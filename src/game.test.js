import game from "./game";

test('Round of turns for both players', () => {
  const newGame = game();

  expect(newGame.humanPlayer).not.toBeNull();
  expect(newGame.computerPlayer).not.toBeNull();

  newGame.computerTurn();
  newGame.playerTurn();

  function shotTaken(shootingPlayer) {
    return (
      shootingPlayer.enemyHitLog.length > 0 ||
      shootingPlayer.enemyMissLog.length > 0
    );
  }
  // computerPlayer & humanPlayer shot
  expect(shotTaken(newGame.computerPlayer)).toBeTruthy();
  expect(shotTaken(newGame.humanPlayer)).toBeTruthy();
});

test("The game ends", () => {
  const newGame = game();
  newGame.startGame();

});