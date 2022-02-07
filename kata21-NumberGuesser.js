let prompt = require("prompt-sync")();
// random number 0 to 1000
let myNumber = Number(Math.floor(Math.random() * 1000));
// console.log(myNumber);
let answer = 0;
let answers = []; // It keeps all valid guesses.
while (myNumber !== answer) {
  answer = prompt("Guess a number: ");
  if (Number(answer) < 1000) {
    answer = Number(answer);
    if (answers.indexOf(answer)) {
      if ((myNumber - answer) > 50) {
        console.log('\nToo Low!\n');
      } else if ((myNumber - answer) < -50) {
        console.log('\nToo High!\n');
      } else if ((myNumber - answer) < 0) {
        console.log('\nclose! But it\'s High!\n');
      } else if ((myNumber - answer) > 0) {
        console.log('\nclose! But it\'s Low!\n');
      }
      answers.push(answer);
    } else {
      console.log('\nAlready Guessed\n');
    }
  } else {
    console.log('\nTry again! Guess number less than 1000\n');
  }
}
console.log(`\nYou got it! You took ${answers.length} attempts!`);
