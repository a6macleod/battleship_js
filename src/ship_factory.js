import React from 'react';

// Ships: Carrier (5); Battleship (4); Destroyer (3); Submarine (3); Patrol Boat (2)
const ship = (playerNumber) => {
  const fleet = {
    playerNumber: playerNumber,
    ships:[
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
  }

  // update hit on ship position
  function addHit (ship, hitPosition, row, column) {
    // code to add the hit
    ship.hitPosition = [row, column, 'hit'];
    isSunk(ship);
  }

  // 10x10 grid (a-j x 1-10)
  const hit = (row, column, targetPlayer) => {
    for (let i = 0; i < targetPlayer.fleet.ships.length; i++) {
      let ship = targetPlayer.fleet.ships[i];
      for (let j = 0; j < ship.position.length; j++) {
        if (ship.position[j][0] === row || ship.position[j][1] === column) {
          return true;
        } else {
          return false; 
        }
      }
    }
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
  return {fleet, hit, isSunk}
}

export default ship;
