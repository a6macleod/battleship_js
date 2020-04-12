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
  // 10x10 grid (a-j x 1-10)
  const hit = (row, column, targetPlayer) => {
    // code for transfering the hit spot to the ship
    let ships = targetPlayer.fleet.ships
    for (let i = 0; i < ships.length; i++) {
      let ship = ships[i];
      for (let i = 0; i < ship.position.length; i++)
        if (ship.position[i][0] === row || ship.position[i][1] === column) {
          return true;
        } else {
          return false; 
        }
    }
  }
  const isSunk = () => {
    // code to update the ship to being sunk
  }
  return {fleet, hit, isSunk}
}

export default ship;
