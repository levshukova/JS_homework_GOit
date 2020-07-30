// Task 1
const getItemsString = function (array) {
  // Write code under this line
  let result = "";
  for (let i = 0; i < array.length; i += 1) {
    result += `${i + 1} - ${array[i]}\n`;
  }
  return result;
};

// console.log(getItemsString(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]));
/*
'1 - Mango
2 - Poly
3 - Ajax
4 - Lux
5 - Jay
6 - Kong
'
*/

// console.log(getItemsString([5, 10, 15]));
/*
'1 - 5
2 - 10
3 - 15
'
*/

// Task 2
const calculateEngravingPrice = (message = "", pricePerWord = 0) =>
  message.split(" ").length * pricePerWord; // Write code in this line

// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     10
//   )
// ); // 80

//console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20)); // 160

//console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)); // 240

//console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)); // 120

// Task 3
function findLongestWord(string = "") {
  // Write code under this line
  let stringSplit = string.split(" ");

  let longestWord = stringSplit[0];
  for (const word of stringSplit) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// 'jumped'

// console.log(findLongestWord("Google do a roll"));
// 'Google'

// console.log(findLongestWord("May the force be with you"));
// 'force'

// Task 4
function formatString(string, maxLength = 40) {
  // Write code under this line
  if (string.length <= maxLength) {
    return string;
  } else {
    return `${string.slice(0, maxLength)}...`;
  }
}

// console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// 'Curabitur ligula sapien, tincidunt non.'

// console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// 'Vestibulum facilisis, purus nec pulvinar...'

// console.log(
//   formatString("Vestibulum facilisis, purus nec pulvinar iaculis.", 30)
// );
// 'Vestibulum facilisis, purus ne...'

// Task 5
function checkForSpam(str) {
  // Write code under this line
  const lowerCaseStr = str.toLowerCase();

  if (lowerCaseStr.includes("sale") || lowerCaseStr.includes("spam")) {
    return true;
  } else {
    return false;
  }
}

// console.log(checkForSpam("Latest technology news")); // false

// console.log(checkForSpam("JavaScript weekly newsletter")); // false

// console.log(checkForSpam("Get best sale offers now!")); // true

// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// Task 6

function mapArray(array) {
  const numbers = new Array(array.length);
  for (let i = 0; i < array.length; i += 1) {
    // Write code under this line
    numbers[i] = array[i] * 10;
  }
  return numbers;
}

// console.log(mapArray([-2, 0, 2]));
// [-20, 0, 20]

// console.log(mapArray([-2.5, 0, 2.5]));
// [-25, 0, 25]

// Task 7
function filterArray(array) {
  const numbers = [];
  for (let i = 0; i < array.length; i += 1) {
    // Write code under this line
    if (Number.isFinite(array[i]) === true) {
      numbers.push(array[i]);
    }
  }
  return numbers;
}

// console.log(filterArray([-2, 0, 2]));
// [-2, 0, 2]

// console.log(filterArray([1, NaN, Infinity]));
// [1]

// console.log(filterArray([0, -0, 100, "100"]));
// [0, 0, 100]

// console.log(filterArray([undefined, false, null, [], 1]));
// [1]

// console.log(filterArray([{}, () => {}, 2]));
// [2]

// Task 8

function reduceArray(array) {
  let total = 0;
  // Write code under this line
  for (i = 0; i < array.length; i += 1) {
    total += array[i];
  }
  return total;
}

// console.log(reduceArray([1, 2, 3]));
// 6

// console.log(reduceArray([-2, 0, 2]));
// 0

// console.log(reduceArray([1, 2, 2.5]));
// 5.5

// Task 9

function isLoginValid(login, min = 4, max = 16) {
  // Write code under this line
  if (login.length >= 4 && login.length <= 16) {
    return true;
  } else {
    return false;
  }
}

function isLoginUnique(allLogins, login) {
  // Write code under this line
  return !allLogins.includes(login);
}

function addLogin(allLogins, login) {
  const SUCCESS = "Логин успешно добавлен!";
  const REFUSAL = "Такой логин уже используется!";
  const ERROR = "Ошибка! Логин должен быть размером от 4 до 16 символов";
  let message;
  // Write code under this line

  if (!isLoginValid(login)) {
    return (message = ERROR);
  } else if (!isLoginUnique(allLogins, login)) {
    return (message = REFUSAL);
  } else {
    allLogins.concat(login);
    return (message = SUCCESS);
  }
}

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

// console.log(addLogin(logins, "Ajax"));
// 'Логин успешно добавлен!'

// console.log(addLogin(logins, "robotGoogles"));
// 'Такой логин уже используется!'

// console.log(addLogin(logins, "Zod"));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

// console.log(addLogin(logins, "jqueryisextremelyfast"));
// 'Ошибка! Логин должен быть от 4 до 16 символов'
