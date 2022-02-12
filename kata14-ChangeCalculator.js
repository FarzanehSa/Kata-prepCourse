const calculateChange = function(total, cash) {
  let guideCal = [
  {name: 'twentyDollar', value: 2000},
  {name: 'tenDollar', value: 1000},
  {name: 'fiveDollar', value: 500},
  {name: 'twoDollar', value: 200},
  {name: 'oneDollar', value: 100},
  {name: 'quarter', value: 25},
  {name: 'dime', value: 10},
  {name: 'nickel', value: 5},
  {name: 'penny', value: 1}
  ];
  let change = cash - total;
  let result = { };
  //console.log(change);
  for (let cal of guideCal) {
    if (change >= cal.value) {
      let remain = change % cal.value;
      result[cal.name] = (change - remain) / cal.value;
      change = remain;
    }
  }
  return result;
};


console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
//console.log(calculateChange(101, 10000));
//console.log(calculateChange(3841, 10000));
//console.log(calculateChange(6159, 10000));