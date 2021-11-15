//** Destructuring

const { first: f, last: l } = { first: "Jane", last: "Doe" };
f;
l;

const [firstElement, secondElement] = [1, 2, 3, 4];
firstElement;

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
