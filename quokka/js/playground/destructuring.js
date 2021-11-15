//** Destructuring

let { first: f, last: l } = { first: "Jane", last: "Doe" };
f;
l;

let itemsArr = [
  ["foo", 3],
  ["bar", 9],
];
itemsArr.forEach(([word, count]) => console.log(word + " " + count));

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
itemsObj.forEach(({ word, count }) => console.log(word + " " + count));
