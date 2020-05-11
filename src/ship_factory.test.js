import React from "react";
import { render } from "@testing-library/react";
import ship from "./ship_factory";

test("is a ship hit?", () => {
  let playerTwo = ship();
  let shotHits = playerTwo.ships[0].position[0];

  // playerOne shoots at playerTwo
  expect(playerTwo.hit("b", 15)).toBeFalsy();

  expect(playerTwo.hit(shotHits[0], shotHits[1])).toBeTruthy();
});

test("is the ship sunk?", () => {
  let playerTwo = ship();

  // hit the destroyer 3x to sink it
  playerTwo.hit(
    playerTwo.ships[2].position[0][0],
    playerTwo.ships[2].position[0][1]
  );
  playerTwo.hit(
    playerTwo.ships[2].position[1][0],
    playerTwo.ships[2].position[1][1]
  );
  playerTwo.hit(
    playerTwo.ships[2].position[2][0],
    playerTwo.ships[2].position[2][1]
  );

  // hit the submarine 3x to sink it
  playerTwo.hit(
    playerTwo.ships[3].position[0][0],
    playerTwo.ships[3].position[0][1]
  );
  playerTwo.hit(
    playerTwo.ships[3].position[1][0],
    playerTwo.ships[3].position[1][1]
  );
  playerTwo.hit(
    playerTwo.ships[3].position[2][0],
    playerTwo.ships[3].position[2][1]
  );

  // hit the patrol boat 2x to sink it
  playerTwo.hit(
    playerTwo.ships[4].position[0][0],
    playerTwo.ships[4].position[0][1]
  );
  playerTwo.hit(
    playerTwo.ships[4].position[1][0],
    playerTwo.ships[4].position[1][1]
  );

  expect(playerTwo.isSunk(playerTwo.ships[4])).toBeTruthy();
  expect(playerTwo.isSunk(playerTwo.ships[3])).toBeTruthy();
  expect(playerTwo.isSunk(playerTwo.ships[2])).toBeTruthy()
});

test("place the ships", () => {
  let playerOne = ship(1);
  expect(playerOne.ships[0].position.length).toBe(5);
  expect(playerOne.ships[1].position.length).toBe(4);
  expect(playerOne.ships[2].position.length).toBe(3);
  expect(playerOne.ships[3].position.length).toBe(3);
  expect(playerOne.ships[4].position.length).toBe(2);
});
