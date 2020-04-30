function newStartingPoint () {
  // find a random letter a-j
  // find a random number 1-10
  const rowList = ['a','b','c','d','e','f','g','h','i','j'];
  const number = Math.floor(Math.random() * Math.floor(rowList.length));
  let row = rowList[Math.floor(Math.random()*rowList.length)];
  return [row,number];
}

function setHorizontalPosition (length) {
  let startingPosition = newStartingPoint();
  // code to fit the ship in horizontal
    let position = [startingPosition];
    for (let i = 1; i < length; i++) {
      let columnNumber = startingPosition[1] + i;
        position.push([startingPosition[0],columnNumber]);
    }
    return position
}

function checkPosition (allPositions) {
  let allColumns = [];
    for (let position of allPositions) {
      allColumns.push(position[position.length - 1]);
    }
    if (Math.max(...allColumns) < 11) {
      return true;
    }
    return false;
}

function placeShip (length) {
  // pick a direction; up or down
  // if the ship fits set the place
  // if it doesn't fit, get a new starting point
  const horizontal = true; //() => ((Math.random() < 0.5) >= 0.5) ? true : false;

  if (horizontal === true) {
    let shipPosition = setHorizontalPosition(length);
    while (checkPosition(shipPosition) === false) {
      shipPosition = setHorizontalPosition(length);
    }
    return shipPosition;
  }
}

export default placeShip;
