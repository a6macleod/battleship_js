import game from "./game";

test('Round of turns for both players', () => {
  const newGame = game();
  // console.log(newGame.humanPlayer);

  expect(newGame.humanPlayer).not.toBeNull();
  expect(newGame.computerPlayer).not.toBeNull();

  newGame.computerTurn();

  function shotTaken(shooteringPlayer) {
    return (
      shooteringPlayer.enemyHitLog.length > 0 ||
      shooteringPlayer.enemyMissLog.length > 0
    );
  }
  // computer shoots
  newGame.computerTurn();
  expect(shotTaken(newGame.computerPlayer)).toBeTruthy();
  // player shoots
  newGame.playerTurn();
  expect(shotTaken(newGame.humanPlayer)).toBeTruthy();
});