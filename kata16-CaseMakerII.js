const camelCase = function(input) {
  input = input.trim();
  let myString = input[0];
  for (let i = 0; i < input.length-1; i++) {
    if (input[i] === ' ') {
      myString += input[i + 1].toUpperCase();
    } else {
      myString += input[i + 1]
    }
  }
  return myString.split(/\s+/).join('');
}

const pascalCase = function(input) {
  input = input.trim();
  let myString = input[0].toUpperCase();
  for (let i = 0; i < input.length-1; i++) {
    if (input[i] === ' ') {
      myString += input[i + 1].toUpperCase();
    } else {
      myString += input[i + 1]
    }
  }
  return myString.split(/\s+/).join('');
}

const snakeCase = function(input) {
  return input.trim().replaceAll(' ','_');
}

const kebabCase = function(input) {
  return input.trim().replaceAll(' ','-');
}

const titleCase = function(input) {
  input = input.trim();
  let myString = input[0].toUpperCase();
  for (let i = 0; i < input.length-1; i++) {
    if (input[i] === ' ') {
      myString += input[i + 1].toUpperCase();
    } else {
      myString += input[i + 1]
    }
  }
  return myString;
}

const vowelCase = function(input) {
  input = input.trim();
  let myString = '';
  for (let char of input) {
    if ('aeiou'.includes(char)) {
      char = char.toUpperCase();
    }
    myString += char;
  }
  return myString;
}

const consonantCase = function(input) {
  input = input.trim();
  let myString = '';
  for (let char of input) {
    if (!'aeiou'.includes(char)) {
      char = char.toUpperCase();
    }
    myString += char;
  }
  return myString;
}

const upperCase = function(input) {
  return input.trim().toUpperCase();
}

const lowerCase = function(input) {
  return input.trim().toLowerCase();
}

const sortArray = function(array) {
  // we sort the case option array base on priority and return that
  const step3 = ['camel', 'pascal', 'snake', 'kebab', 'title'];
  const step2 = ['vowel', 'consonant'];
  const step1 = ['upper', 'lower'];
  let priority = {};
  let result = [];
  for (const x of array) {
    if (step3.includes(x)) {
      priority.third = x;
    }
    else if (step2.includes(x) ) {
      priority.second = x;
    }
    else if (step1.includes(x)) {
      priority.first = x;
    }
  }
  if (priority.first) {
    result.push(priority.first);
  }
  if (priority.second) {
    result.push(priority.second);
  }
  if (priority.third) {
    result.push(priority.third);
  }
  return result;
  
}

const makeCase = function(input,model) {
  let myString = input;
  let caseKind = [];
  // model should be sorted array.
  if (typeof model === 'object') {
    caseKind = sortArray(model);
  } else {
    caseKind.push(model); // make an array of single string.
  }
  for (let x of caseKind) {
    switch (x) {
      case 'camel':
        myString = camelCase(myString);
        break;
      case 'pascal':
        myString = pascalCase(myString);
        break;
      case 'snake':
        myString = snakeCase(myString);
        break;
      case 'kebab':
        myString = kebabCase(myString);
        break;
      case 'title':
        myString = titleCase(myString);
        break;
      case 'vowel':
        myString = vowelCase(myString);
        break;
      case 'consonant':
        myString = consonantCase(myString);
        break;
      case 'upper':
        myString = upperCase(myString);
        break;
      case 'lower':
        myString = lowerCase(myString);
        break;
    }
  }
  return myString;
}


console.log(makeCase("this is a string", "camel") === 'thisIsAString');
// thisIsAString
console.log(makeCase("this is a string", "pascal") === 'ThisIsAString');
// ThisIsAString
console.log(makeCase("this is a string", "snake") === 'this_is_a_string');
// this_is_a_string
console.log(makeCase("this is a string", "kebab") === 'this-is-a-string');
// this-is-a-string
console.log(makeCase("this    is   a  string", "title") === 'This    Is   A  String');
// This Is A String
console.log(makeCase(" DONT CHANGE ME our lovly string", "vowel") === 'DONT CHANGE ME OUr lOvly strIng');
// DONT CHANGE ME OUr lOvly strIng
console.log(makeCase(" DONT CHANGE ME our lovly string", "consonant") === 'DONT CHANGE ME ouR LoVLY STRiNG');
// DONT CHANGE ME ouR LoVLY STRiNG
console.log(makeCase("  our lovly string", "upper") === 'OUR LOVLY STRING');
// OUR LOVLY STRING
console.log(makeCase("  MY NAME IS FARZANEH", "lower") === 'my name is farzaneh');
// my name is farzaneh
console.log(makeCase("this is a string", ["upper", "snake"]) === 'THIS_IS_A_STRING');
// THIS_IS_A_STRING
console.log(makeCase("  mY  NAME is fARZaneh sadegH ", ["pascal", "lower","vowel"]) === 'MyNAmEIsFArzAnEhSAdEgh');
// MyNAmEIsFArzAnEhSAdEgh
console.log(makeCase(" DONT CHANGE ME our lovly string", ["vowel","lower"]) === 'dOnt chAngE mE OUr lOvly strIng');
// dOnt chAngE mE OUr lOvly strIng

