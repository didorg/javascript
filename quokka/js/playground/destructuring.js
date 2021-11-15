//** Destructuring

const { first: f, last: l } = { first: "Jane", last: "Doe" };
f; // Jane
l; // Doe

const [firstElement = 1, secondElement = 1] = [3, 4, 5, 6];
firstElement; // 3

//** Basic variable assignment
const strNums = ["one", "two", "three"];
const [red, yellow, green] = strNums;
red; // one

//** forEach
let itemsArr = [
  ["foo", 3],
  ["bar", 9],
];
itemsArr.forEach(([word, count]) => console.log(`itemsArr ${word} - ${count}`));

let itemsObj = [
  {
    word: "foo",
    count: 3,
    key: {
      w: "foo",
      c: 3,
      arr: [1, 2, 3, 4],
    },
  },
  {
    word: "bar",
    count: 9,
    key: {
      w: "bar",
      c: 9,
      arr: [1, 2, 3, 4],
    },
  },
];
itemsObj.forEach(({ word, count }) =>
  console.log(`itemsObj ${word} - ${count}`)
);

//** Swapping variables
let a = 1;
let b = 3;
[a, b] = [b, a];
a; //3
let arrToSwap = [1, 2, 3];
[arrToSwap[0], arrToSwap[2]] = [arrToSwap[2], arrToSwap[0]];
arrToSwap; // [3, 2, 1]

//** Parsing an array returned from a function
const fnArr = () => [1, 2, 3];
[o, s] = fnArr();
o; // 1
s; // 2
// Ignoring some returned values
[, , t] = fnArr();
t; // 3

const [p, ...others] = [1, 2, 3];
p; // 1
others; // [2, 3]
