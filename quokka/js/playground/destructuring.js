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

// ** Unpacking fields from objects passed as a function parameter
const user = {
  id: 42,
  displayName: "jdoe",
  fullName: {
    firstName: "John",
    lastName: "Doe",
  },
};

const userId = ({ id }) => id;
const whois = ({ displayName, fullName: { firstName: name } }) =>
  `${displayName} is ${name}`;

console.log(userId(user)); // 42
console.log(whois(user)); // jdoe is John

// ** Nested object and array destructuring
const metadata = {
  title: "Scratchpad",
  translations: [
    {
      locale: "de",
      localization_tags: [],
      last_edit: "2014-04-14T08:43:37",
      url: "/de/docs/Tools/Scratchpad",
      title: "JavaScript-Umgebung",
    },
  ],
  url: "/en-US/docs/Tools/Scratchpad",
};

let {
  title: englishTitle, // rename
  translations: [
    {
      title: localeTitle, // rename
    },
  ],
} = metadata;

englishTitle; // "Scratchpad"
localeTitle; // "JavaScript-Umgebung"

const people = [
  {
    name: "Mike Smith",
    family: {
      mother: "Jane Smith",
      father: "Harry Smith",
      sister: "Samantha Smith",
    },
    age: 35,
  },
  {
    name: "Tom Jones",
    family: {
      mother: "Norah Jones",
      father: "Richard Jones",
      brother: "Howard Jones",
    },
    age: 25,
  },
];

for (const {
  name: n,
  family: { father: f },
} of people) {
  console.log(`Name: ${n}, Father: ${f}`);
}

// ** Combined Array and Object Destructuring
// Say you want the third element in the array props below, and then you want the name property in the object.
const props = [
  { id: 1, name: "Fizz" },
  { id: 2, name: "Buzz" },
  { id: 3, name: "FizzBuzz" },
];

const [, , { name }] = props;

name; // "FizzBuzz"

// ** Return multiple values
// Although multiple return values aren’t baked into the language proper, 
// they don’t need to be because you can return an array and destructure the result:
function returnMultipleValuesWithArr() {
  return [1, 2];
}
var [fo, bas] = returnMultipleValuesWithArr();
bas; // 2
function returnMultipleValuesWithObj() {
  return {
    fobo: 1,
    bara: 2
  };
}
var { fobo, bara } = returnMultipleValuesWithObj();
fobo; // 1