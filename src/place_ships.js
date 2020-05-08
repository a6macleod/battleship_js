import randomPoint from './random_point';
// import { rowList } from './row_list';
const rowList = ['a','b','c','d','e','f','g','h','i','j']

function setPosition(length) {
  let startingPosition = randomPoint();
  let position = [startingPosition];
  const horizontal = () => ((Math.random() < 0.5) >= 0.5) ? true : false;

  if (horizontal === true) {
    for (let i = 1; i < length; i++) {
      let columnNumber = startingPosition[1] + i;
        position.push([startingPosition[0],columnNumber]);
    }
  } else {
    for (let i = 1; i < length; i++) {
      // find starting position row
      let rowLetter = rowList[rowList.indexOf(startingPosition[0]) + i];
      position.push([rowLetter,startingPosition[1]]);
    }
  return position
  }
}

function checkColumn (allPositions) {
  // 1 - 10 column identifiers
  let allColumns = [];
    for (let position of allPositions) {
      allColumns.push(position[1]);
    }
    if (Math.max(...allColumns) < 11 && Math.min(...allColumns) > 0) {
      return true;
    }
  return false;
}

function checkRow(allPositions) {
  // a - j row identifiers
  let allRows = [];
  for (let position of allPositions) {
    allRows.push(position[0]);
  }

  function isInRowList(rowPosition) {
    return rowList.includes(rowPosition);
    }
  return allRows.every(isInRowList);
}

function checkDuplicates (allShips) {
  let allPositions = [];
  for (let [key, value] of Object.entries(allShips)) {
    for (let position of value) {
      allPositions.push(position);
    }
  }
  let allPositionsString = allPositions.map(JSON.stringify);
  let filteredSet = new Set(allPositionsString);
  let filteredArray = Array.from(filteredSet);
  
  if (allPositions.length === filteredArray.length) {
    return true;
  } else {
    return false;
  }
}

function checkPosition (allPositions) {
  if (checkColumn(allPositions) && checkRow(allPositions)){
    return true
  }
  return false
}

function getPosition (length) {
  let shipPosition = setPosition(length);
  while (checkPosition(shipPosition) === false) {
    shipPosition = setPosition(length);
  }
  return shipPosition;
}

function placeShip () {
  let allShips = {}
  do { 
    allShips = {  
      carrier: getPosition(5),
      battleship: getPosition(4),
      destroyer: getPosition(3),
      submarine: getPosition(3),
      patrolBoat: getPosition(2)
    }
  } while (checkDuplicates(allShips) === false)  
  return allShips;
}

export default placeShip;
