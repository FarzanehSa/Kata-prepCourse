const multiplicationTable = function(maxValue) {
  let result = '';
  let myArray = [];
  let j = 1
  // first line
  while (j <= maxValue) {
    myArray.push(j);
    j ++;
  }

  for (let i = 1 ; i <= maxValue ; i++) {
    result += myArray.map(x => x * i).join(' ')+'\n'
  }

  return result;
};
// ***** Solution 2 *****

// const multiplicationTable = function(maxValue) {
//   let result = '';
//   let myArray = [];
//   for (let j = 1 ; j <= maxValue ; j++) {
//     myArray = [];
//     for (let i = 1 ; i <= maxValue ; i++) {
//       myArray.push(i*j);
//     }
//     result += myArray.join(' ')+"\n";
//   }
//   return result;
// };

console.log(multiplicationTable(1));
console.log(multiplicationTable(2));
console.log(multiplicationTable(3));
console.log(multiplicationTable(4));
console.log(multiplicationTable(5));
console.log(multiplicationTable(6));
console.log(multiplicationTable(7));
console.log(multiplicationTable(8));
console.log(multiplicationTable(9));
console.log(multiplicationTable(10));