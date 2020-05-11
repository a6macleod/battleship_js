import React from "react";
import placeShip from "./place_ships.js";

// Ships: Carrier (5); Battleship (4); Destroyer (3); Submarine (3); Patrol Boat (2)
const ship = () => {
  const allShips = placeShip();
  const ships = [
    {
      name: "carrier",
      length: 5,
      position: allShips.carrier,
      sunk: false,
    },
    {
      name: "Battleship",
      length: 4,
      position: allShips.battleship,
      sunk: false,
    },
    {
      name: "Destroyer",
      length: 3,
      position: allShips.destroyer,
      sunk: false,
    },
    {
      name: "Submarine",
      length: 3,
      position: allShips.submarine,
      sunk: false,
    },
    {
      name: "Patrol Boat",
      length: 2,
      position: allShips.patrolBoat,
      sunk: false,
    },
  ];

  // 10x10 grid (a-j x 1-10)
  const hit = (row, column) => {
    for (let i = 0; i < ships.length; i++) {
      for (let j = 0; j < ships[i].position.length; j++) {
        if (
          ships[i].position[j][0] === row &&
          ships[i].position[j][1] === column
        ) {
          markHit(ships[i], ships[i].position[j]);
          return true;
        }
      }
    }
    return false;
  };

  function markHit(ship, hitSpot) {
    hitSpot.push("hit");
    isSunk(ship);
  }
  function isHit(position) {
    return position.includes("hit");
  }

  const isSunk = (ship) => {
    if (ship.position.every(isHit)) {
      ship.sunk = true;
    }
    return ship.sunk;
  };
  return { ships, hit, isSunk };
};

export default ship;
