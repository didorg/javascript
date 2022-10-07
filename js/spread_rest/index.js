const fruits = ["Apples", "bananas", "mangoes"];

// object person
const person = { firstName: "Dido", lastName: "Ginebra", age: 30 };

// rest parameter
//(put it into an array)
const sqrt = (...nums) => {
  return nums.map((num) => num * num);
};

const result = sqrt(2, 4, 5, 6, 7, 8, 9); // [4, 16, 25, 36, 49, 64, 81]
console.log(result);

// spread syntax (array)
// spread into individual component
console.log(...fruits); // Apples bananas mangoes
// spread into array
const fruitsTropicals = ["anon", "guava", ...fruits];
console.log(fruitsTropicals);

// spread syntax (objects)
const personClone1 = { ...person }; // full copy
console.log(personClone1);
const personClone2 = { ...person, location: "Princeton" }; // full copy
console.log(personClone2);
