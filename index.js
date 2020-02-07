
// NON RECURSIVE
// function sum(fromN, toN) {
//   // Sum all the values from fromN up to toN
//   let count = fromN;
//   for (let i = fromN; i < toN; i++) {
//     count += i + 1;
//   }
//   return count;
// }
// sum(3, 7);

//RECURSIVE ??????
function sum(fromN, toN) {
  // Sum all the values from fromN up to toN

  if (fromN === toN) {
    return fromN;
  }
  // console.log(fromN);
  return fromN + sum(fromN + 1, toN);
}

// sum(3, 7);

module.exports = sum;
