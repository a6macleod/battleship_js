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

function placeShip (length) {
  // pick a direction; up or down
  // if the ship fits set the place
  // if it doesn't fit, get a new starting point
  const horizontal = true; // Math.random() < 0.5;

  if (horizontal === true) {
    let shipPosition = setHorizontalPosition(length);
    return shipPosition;
  }
}

export default placeShip;
