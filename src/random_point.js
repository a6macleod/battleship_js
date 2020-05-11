const rowList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

function randomPoint() {
  // find a random number 1-10 & random letter a-j
  const number = Math.floor(Math.random() * 10);
  let row = rowList[Math.floor(Math.random() * rowList.length)];
  return [row, number];
}

export default randomPoint;
