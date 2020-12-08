function spinWords(string = "") {
  //TODO Have fun :)
  let splitString = string.split(" ");
  let array = [];
  let arrayElement;
  for (let i = 0; i < splitString.length; i += 1) {
    if (splitString[i].length >= 5) {
      arrayElement = splitString[i].split("").reverse().join("");
      array.push(arrayElement);
    } else if (splitString[i].length < 5) {
      array.push(splitString[i]);
    }
  }
  return array.join(" ");
}
// console.log(spinWords("Welcome"));
// console.log(spinWords("Hey fellow warriors"));
// console.log(spinWords("This is a test"));
// console.log(spinWords("This is another test"));
// console.log(spinWords("Just kidding there is still one more"));

// ~~~~~~~~
function persistence(num) {
  for (let i = 0; num > 9; i += 1) {
    num = num
      .toString()
      .split("")
      .reduce((t, c) => c * t);
  }
  return i;
}

// console.log(persistence(39));
// console.log(persistence(4));
// console.log(persistence(25));
// console.log(persistence(999));

const sumup = (num) => {
  let a = String(num)
    .split("")
    .map((k) => {
      return Number(k);
    })
    .reduce((p, c) => {
      return p * c;
    }, 1);

  return a > 9 ? sumup(a) : a;
};

// console.log(sumup(39));

function digit_to_one(num) {
  const digitMult = (num) => {
    let digit = 1;
    while (num) {
      digit *= num % 10;
      num = Math.floor(num / 10);
      //   digit = digit * (num - Math.floor(num / 10) * 10);
      //   num = Math.floor(num / 10);
      //   console.log(digit);
    }

    return digit;
  };

  let result = 0;

  while (num >= 10) {
    result += 1;
    num = digitMult(num);
  }

  return result;
}
// console.log(digit_to_one(39));
// console.log(digit_to_one(1));

// ~~~~~~~~~
function getSum(a, b) {
  //Good luck!
  let sum = 0;
  if (a > b) {
    for (let i = b; i <= a; i += 1) {
      sum += i;
    }
    return sum;
  } else if (b > a) {
    for (let i = a; i <= b; i += 1) {
      sum += i;
    }
    return sum;
  } else {
    return a;
  }
}
// console.log(getSum(0, -1));
// console.log(getSum(269, 522)); //100457
// console.log(getSum(313, -349)); //-11934
// console.log(getSum(-191, -557)); //-137258
// console.log(getSum(261, -131)); //25545
// console.log(getSum(529, -335)); //83905

// ~~~~~~~~~~~~~

function toCamelCase(str) {
  let s = /[-_]\w/gi;

  return str.replace(s, function (match) {
    return match.charAt(1).toUpperCase();
  });
}

// console.log(toCamelCase("")); //''
// console.log(toCamelCase("the_stealth_warrior")); //theStealthWarrior
// console.log(toCamelCase("The-Stealth-Warrior")); //TheStealthWarrior
// console.log(toCamelCase("A-B-C")); // ABC

//~~~~~~~~~~~~
var isSquare = function (n) {
  sk = Math.sqrt(n);
  return sk - Math.floor(sk) == 0; // fix me
};
// console.log(isSquare(0)); // true, "0 is a square number (0 * 0)");
// console.log(isSquare(-1)); // false, "-1: Negative numbers cannot be square numbers");
// console.log(isSquare(4)); // true, "4 is a square number (2 * 2)");
// console.log(isSquare(3)); // false, "3 is not a square number");
// console.log(isSquare(25)); // true, "25 is a square number (5 * 5)");
// console.log(isSquare(26)); // false

//~~~~~~~~~~~~

function comp(array1, array2) {
  //your code here

  if (array1 == null || array2 == null) return false;
  array1.sort((a, b) => a - b);
  array2.sort((a, b) => a - b);
  return array1.map((v) => v * v).every((v, i) => v == array2[i]);
}
a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [121, 14641, 20736, 361, 25921, 361, 20736, 361];
a = [121, 144, 19, 161, 19, 144, 19, 11];
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361];
// console.log(comp(a1, a2)); //true
// console.log(comp(a, b));
e = [51, 21, 48, 30, 29, 84, 35, 82];
f = [2601, 441, 2304, 900, 841, 7057, 1225, 6724];
// console.log(comp(e, f));
j = [];
k = [];
// console.log(comp(j, k));

// ~~~~~~~~~~~~~~~~~~
function addBinary(a, b) {
  // let sum = a + b;
  // return (sum >>> 0).toString(2);
  let sum = a + b;
  let binary = "";
  while (sum > 0) {
    if (sum % 2 == 0) {
      binary += "0" + binary;
    } else {
      binary = "1" + binary;
    }
    sum = Math.floor(sum / 2);
  }
  return binary;
}
// console.log(addBinary(1, 2));
// console.log(addBinary(10, 8));

// function addBinary(a, b) {
//   return (a + b).toString(2)
// }

// ~~~~~~~~~~~~~~~``
let number = function (busStops) {
  // Good Luck!
  let total = 0;
  for (let i = 0; i < busStops.length; i += 1) {
    total += busStops[i][0] - busStops[i][1];
  }
  return total;
};
// const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);

// console.log(
//   number([
//     [10, 0],
//     [3, 5],
//     [5, 8],
//   ])
// ); //5
// console.log(
//   number([
//     [3, 0],
//     [9, 1],
//     [4, 10],
//     [12, 2],
//     [6, 1],
//     [7, 10],
//   ])
// ); // 17);
// console.log(
//   number([
//     [3, 0],
//     [9, 1],
//     [4, 8],
//     [12, 2],
//     [6, 1],
//     [7, 8],
//   ])
// ); //21);

// ~~~~~~~~~~~~`
function solution(number) {
  let result = 0;

  for (i = 1; i < number; i += 1) {
    if (i % 3 == 0 || i % 5 == 0) {
      result += i;
    }
  }

  return result;
}

// console.log(solution());

// ~~~~~~~~~~~~~~~
// Rot13
function rot13(message) {
  //your code here
  const input = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const output = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";
  const index = (x) => input.indexOf(x);
  const translate = (x) => (index(x) > -1 ? output[index(x)] : x);
  return message.split("").map(translate).join("");
}

// console.log(rot13("test"));
// console.log(rot13("Test"));
// console.log(rot13("Good"));

//~~~~~~~~~~~~~~~
// Format a string of names like 'Bart, Lisa & Maggie'.
function list(names) {
  //your code here
  if (names.length === 0) return "";
  let string = names.map(({ name }) => name);

  let lastName = string.pop();

  return string.length ? string.join(", ") + " & " + lastName : lastName;
}

// console.log(list([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }]));
// // returns 'Bart, Lisa & Maggie'

// console.log(list([{ name: "Bart" }, { name: "Lisa" }]));
// // returns 'Bart & Lisa'

// console.log(list([{ name: "Bart" }]));
// // returns 'Bart'

// console.log(list([]));
// // returns ''

function high(x) {
  let result = "",
    value = 0,
    counterValue = 0;

  let splittedArray = x.split(" ");

  splittedArray.map((splitItem) => {
    counterValue = 0;

    let splitItemArray = splitItem.split("");

    splitItemArray.map((splitChar) => {
      counterValue += splitChar.charCodeAt() - 96; // if I subtract 96 then it will calculate a as 1, b as 2......
    });

    if (counterValue > value) {
      result = splitItem;
      value = counterValue;
    }
  });
  return result;
}
// console.log(high("man i need a taxi up to ubud")); // 'taxi');

// console.log(high("what time are we climbing up the volcano")); // 'volcano');
// console.log(high("take me to semynak")); // 'semynak');

// ~~~~~~~~~~~~~
// Strip Comments
function solution(input, markers) {
  let markerFound = false;
  let result = [];
  let splitInput = input.split("");
  for (let i = 0; i < splitInput.length; i += 1) {
    if (markers.includes(splitInput[i])) {
      markerFound = true;
    }
    if (markerFound && splitInput[i] === "\n") {
      markerFound = false;
    }
    if (!markerFound) {
      result.push(splitInput[i]);
    }
  }
  return result.join("").replace(/\s\n/, "\n").trim();
}

// console.log(
//   solution("apples, plums % and bananas\npears\noranges !applesauce", [
//     "%",
//     "!",
//   ]) //"apples, plums\npears\noranges"
// );
// console.log(solution("Q @b\nu\ne -e f g", ["@", "-"])); //"Q\nu\ne"

// ~~~~~~~~~~~~~~~~~~~~~~~
// Sudoku Solution Validator

function validSolution(board) {
  //TODO
  const rowcheck = function (board) {
    for (let i = 0; i < board.length; i += 1) {
      for (let j = 0; j < board[i].length; j += 1) {
        if (board[i][j] != 0) {
          if (board[i][j] === board[i][j - 1]) return false;
        }
      }
    }
    return true;
  };
  const colcheck = function (board) {
    for (let i = 0; i < board.length; i++) {
      for (let j = 1; j < board[i].length; j++) {
        if (board[j][i] != 0) {
          if (board[j][i] === board[j - 1][i]) return false;
        }
      }
    }
    return true;
  };
  const diagonalcheck = function (board) {
    let res = [];
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        res.push(board[i][j]);
      }
    }
    res = res.sort();
    for (let k = 1; k < res.length; k++) {
      if (res[k] != 0) {
        if (res[k] === res[k - 1]) return false;
      }
    }
    return true;
  };
  //3 x 3 grid check
  const brslice = function (row, column) {
    let br = [];
    br.push([
      board[row][column],
      board[row][column + 1],
      board[row][column + 2],
    ]);
    br.push([
      board[row + 1][column],
      board[row + 1][column + 1],
      board[row + 1][column + 2],
    ]);
    br.push([
      board[row + 2][column],
      board[row + 2][column + 1],
      board[row + 2][column + 2],
    ]);
    return rowcheck(br) && colcheck(br) && diagonalcheck(br);
  };
  return (
    colcheck(board) &&
    rowcheck(board) &&
    brslice(0, 0) &&
    brslice(0, 3) &&
    brslice(0, 6) &&
    brslice(3, 0) &&
    brslice(3, 3) &&
    brslice(3, 6) &&
    brslice(6, 0) &&
    brslice(6, 3) &&
    brslice(6, 6)
  );
}

// console.log(
//   validSolution([
//     [5, 3, 4, 6, 7, 8, 9, 1, 2],
//     [6, 7, 2, 1, 9, 5, 3, 4, 8],
//     [1, 9, 8, 3, 4, 2, 5, 6, 7],
//     [8, 5, 9, 7, 6, 1, 4, 2, 3],
//     [4, 2, 6, 8, 5, 3, 7, 9, 1],
//     [7, 1, 3, 9, 2, 4, 8, 5, 6],
//     [9, 6, 1, 5, 3, 7, 2, 8, 4],
//     [2, 8, 7, 4, 1, 9, 6, 3, 5],
//     [3, 4, 5, 2, 8, 6, 1, 7, 9],
//   ])
// ); // true

// console.log(
//   validSolution([
//     [5, 3, 4, 6, 7, 8, 9, 1, 2],
//     [6, 7, 2, 1, 9, 0, 3, 4, 8],
//     [1, 0, 0, 3, 4, 2, 5, 6, 0],
//     [8, 5, 9, 7, 6, 1, 0, 2, 0],
//     [4, 2, 6, 8, 5, 3, 7, 9, 1],
//     [7, 1, 3, 9, 2, 4, 8, 5, 6],
//     [9, 0, 1, 5, 3, 7, 2, 1, 4],
//     [2, 8, 7, 4, 1, 9, 6, 3, 5],
//     [3, 0, 0, 4, 8, 1, 1, 7, 9],
//   ])
// );

//~~~~~~~~~~~
//The Hashtag Generator
function generateHashtag(str) {
  let wordArray = str.split(" ").filter((char) => char !== "");
  let result = "#";

  if (wordArray.length === 0) {
    return false;
  }
  result =
    result +
    wordArray
      .map((word) => {
        let capWord = word.charAt(0).toUpperCase() + word.slice(1);
        return capWord;
      })
      .join("");
  if (result.length > 140) {
    return false;
  } else {
    return result;
  }
}
// function generateHashtag(str) {
//   return str.length > 140 || str === '' ? false :
//     '#' + str.split(' ').map(capitalize).join('');
// }

// function capitalize(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }
// console.log(generateHashtag("")); // false,)
// console.log(generateHashtag(" ".repeat(200))); // false,)
// console.log(generateHashtag("Do We have A Hashtag"));
// console.log(generateHashtag("Codewars"));
// console.log(generateHashtag("Codewars Is Nice"));
// console.log(generateHashtag("Codewars is nice"));
// console.log(generateHashtag("code" + " ".repeat(140) + "wars"));
// console.log(
//   generateHashtag(
//     "Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat" //false
//   )
// );

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
// Last digit of a large number
const lastDigit = function (str1, str2) {
  str1 = str1.split("");
  str2 = str2.split("").slice(-2).join("");

  let base = parseInt(str1[str1.length - 1]);
  let power = ((str2 - 2) % 4) + 10;

  if (str2.length === 1 && power === 8) {
    return 1;
  } else if (str1.length === 1 && power - 7 === 1) {
    return 0;
  } else if (str2 === "00") {
    return 0;
  } else {
    let calc = Math.pow(base, power).toString().split("");
    return parseInt(calc[calc.length - 1]);
  }
};

// console.log(lastDigit("4", "1")); //4
// console.log(lastDigit("4", "2")); //6
// console.log(lastDigit("9", "7")); //9
// console.log(
//   lastDigit(
//     "1606938044258990275541962092341162602522202993782792835301376",
//     "2037035976334486086268445688409378161051468393665936250636140449354381299763336706183397376"
//   )
// ); //6
// console.log(
//   lastDigit(
//     "3715290469715693021198967285016729344580685479654510946723",
//     "68819615221552997273737174557165657483427362207517952651"
//   )
// ); //7

//~~~~~~~~~~~~~~~~~~~~~~~
// Sum of Intervals

function sumIntervals(intervals) {
  let finalArray = [];
  intervals.forEach((e) => {
    for (let i = e[0]; i < e[1]; i += 1) {
      finalArray.push(i);
    }
  });
  finalArray = [...new Set(finalArray)];
  return finalArray.length;
}

// console.log(
//   sumIntervals([
//     [1, 2],
//     [6, 10],
//     [11, 15],
//   ])
// ); //9

// console.log(
//   sumIntervals([
//     [1, 4],
//     [7, 10],
//     [3, 5],
//   ])
// ); //7
// console.log(
//   sumIntervals([
//     [1, 5],
//     [10, 20],
//     [1, 6],
//     [16, 19],
//     [5, 11],
//   ])
// ); //19
