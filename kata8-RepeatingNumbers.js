const repeatNumbers = function(data) {

  let result = [];
  for (const [digit,times] of data) {
    result.push(repeatOne(digit,times));
  }
  return result.join(', ');
};

const repeatOne = function(digit,times) {
  result = '';
  while(times > 0) {
    result += digit;
    times --;
  }
  return result;
};

console.log(repeatNumbers([[1, 3]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));