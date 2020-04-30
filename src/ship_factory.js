import React from 'react';
import placeShip from './place_ships.js';

// Ships: Carrier (5); Battleship (4); Destroyer (3); Submarine (3); Patrol Boat (2)
const ship = (playerNumber) => {
  const ships = [
      {
        name: 'carrier',
        length: 5,
        position: placeShip(5),
        sunk: false
        },
      {
        name: 'Battleship',
        length: 4,
        position: placeShip(4),
        sunk: false
      },
      {
        name: 'Destroyer',
        length: 3,
        position: placeShip(3),
        sunk: false
      },
      {
        name: 'Submarine',
        length: 3,
        position: placeShip(3),
        sunk: false
      },
      {
        name: 'Patrol Boat',
        length: 2,
        position: placeShip(2),
        sunk: false
      }
    ]

    function markHit (ship, hitLocation) {
      hitLocation.push('hit');
      isSunk(ship);
    }

  // 10x10 grid (a-j x 1-10)
  const hit = (row, column) => {
    for (let i = 0; i < ships.length; i++) {
      for (let j = 0; j < ships[i].position.length; j++) {
        if (ships[i].position[j][0] === row && ships[i].position[j][1] === column) {
          markHit(ships[i], ships[i].position[j]);
          return true;
        }
      }
    }
    return false;
  }

  function isHit(position) {
    return position.includes('hit')
  }

  const isSunk = (ship) => {
    if (ship.position.every(isHit)) {
      ship.sunk = true;
    }

    return ship.sunk;
  }
  return {ships, hit, isSunk}
}

export default ship;
