function roll(min, max, floatFlag) {
  let r = Math.random() * (max - min) + min;
  return floatFlag ? r : Math.floor(r);
}

let userNames = ["James", "Jane", "Ryan", "Rebecca"];

// Ages between 12 and 64

// Heights between 5.1 and 6 meters

let user = {
  name: userNames[roll(0, userNames.length)],
  age: roll(12, 65),
  height: roll(5.1, 6.1, 1).toFixed(1),
};
// console.log(user);
