import React from "react";
import placeShip from "./place_ships.js";
import gameboard from "./gameboard";

test("ships are bound within the board", () => {
  let playerOne = gameboard(1);

  // columns 1-10
  let allColumns = [];
  for (let ship of playerOne.board.fleet.ships) {
    allColumns.push(ship.position[ship.position.length - 1][1]);
  }
  expect(Math.max(...allColumns)).toBeLessThan(11);
  expect(Math.min(...allColumns)).toBeGreaterThan(0);

  // rows a-j
  let allRows = [];
  const rowList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  for (let ship of playerOne.board.fleet.ships) {
    allRows.push(ship.position[ship.position.length - 1][0]);
  }

  function isInRowList(rowPosition) {
    return rowList.includes(rowPosition);
  }

  expect(allRows.every(isInRowList)).toBeTruthy();
});

test("Only 1 ship per space", () => {
  // loop through the ships and make sure there are no duplicates
  let playerTwo = gameboard(2);
  let allPositions = [];

  for (let ship of playerTwo.board.fleet.ships) {
    for (let spot of ship.position) {
      allPositions.push(spot);
    }
  }

  function checkForDuplicates() {
    if (allPositions.length === filteredArray.length) {
      return true;
    }
    return false;
  }

  let allPositionsString = allPositions.map(JSON.stringify);
  let filteredSet = new Set(allPositionsString);
  let filteredArray = Array.from(filteredSet);

  expect(checkForDuplicates()).toBeTruthy();
});
