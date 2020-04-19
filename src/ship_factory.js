import React from 'react';

function placeShip (length) {
  // find a random letter a-j
  // find a random number 1-10
  // pick a direction; up or down
  // if the ship fits set the place
  // if it doesn't fit, start over and find a random letter
  const rows = 'abcdefghij';
  const number = Math.floor(Math.random() * Math.floor(9) + 1);
}

// Ships: Carrier (5); Battleship (4); Destroyer (3); Submarine (3); Patrol Boat (2)
const ship = (playerNumber) => {
  const ships = [
      {
        name: 'carrier',
        length: 5,
        position: [['a',1],['a',2],['a',3],['a',4],['a',5]],
        sunk: false
        },
      {
        name: 'Battleship',
        length: 4,
        position: [['b',1],['b',2],['b',3],['b',4]],
        sunk: false
      },
      {
        name: 'Destroyer',
        length: 3,
        position: [['c',1],['c',2],['c',3]],
        sunk: false
      },
      {
        name: 'Submarine',
        length: 3,
        position: [['d',1],['d',2],['d',3]],
        sunk: false
      },
      {
        name: 'Patrol Boat',
        length: 2,
        position: [['e',1],['e',2]],
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
  const isSunk = (ship) => {
    let hits = 0;
    for (let i = 0; i < ship.position.length; i++) {
      if (ship.position[i].includes('hit')) {
        hits += 1;
      }
    }
    if (hits === ship.position.length) {
      ship.sunk = true;
    }
    return ship.sunk;
  }
  return {ships, hit, isSunk}
}

export default ship;
