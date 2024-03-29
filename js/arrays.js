//*** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const data = [
  { name: "Anne", age: 20 },
  { name: "Mike", age: 24 },
  { name: "Max", age: 27 },
  { name: "Sara", age: 25 },
  { name: "George", age: 24 },
];

const colors = ["red", "green", "blue"];
const [value1, value2, value3] = colors;
console.log(value1); //R/ red

let fruits = ["Apples", "bananas", "mangoes"];
let citrus = ["oranges", "mandarins", "limes"];
const scores = [10, 6, 7, 8, 4, 9, 10, 8];

const stocks = [
  { symbol: "AAPL", name: "Apple", price: 150, premium: true },
  { symbol: "TSLA", name: "Tesla", price: 780, premium: true },
  { symbol: "NIO", name: "NIO Inc.", price: 48, premium: false },
  { symbol: "AMD", name: "AMD", price: 105, premium: true },
  { symbol: "DIDI", name: "DiDi Global Inc.", price: 15, premium: false },
];

console.log(data.length);
const filteredData = data.filter((element) => element.age > 24);
console.log(filteredData);
const mappedData = filteredData.map((element) => element.name);
console.log(mappedData); // R/ [“Max”, “Sara”]
const average =
  data.reduce((acc, element) => acc + element.age, 0) / data.length;
console.log(average);
//* map(), filter() and reduce() methods are known as higher-order functions

console.log(fruits[1]);
console.log(fruits.length);

// concat
rnew_arr = fruits.concat(citrus);
console.log(rnew_arr);

//push
fruits.push("guava");
console.log(fruits);

// pop
let last = fruits.pop();
console.log(last);
console.log(fruits);

// ForEach
const logCitrus = (c, index) => {
  console.log(`${index} - ${c}`);
};
citrus.forEach(logCitrus);

// Filter
const premiumStocks = stocks.filter((stock) => {
  return !stock.premium;
});
console.log(premiumStocks);

// Map -> returning a copy. Not destructuring
const stockSplit = stocks.map((stock) => {
  return stock.price > 500
    ? {
        symbol: stock.symbol,
        name: stock.name,
        price: stock.price / 2,
        premium: stock.premium,
      }
    : stock;
});
console.log(stockSplit);

// Reduce
const primiumTotal = stocks.reduce((acc, curr) => {
  if (curr.premium) {
    acc += curr.price;
  }
  return acc;
}, 0);
console.log(primiumTotal);
//*********************************!
// The A+ of reduce()!
const arrReduce = [1, 2, 5, 4, 3];
arrReduce.reduce((p, c, i, a) => {
  console.log(p); // previous
  console.log(c); // current
  console.log(i); // indice
  console.log(a); // array itself
  return p + c;
}, 0); // Initial value
//*********************************!

// Find
const firstPremium = stocks.find((pm) => {
  return pm.price >= 100;
});
console.log(firstPremium);

// Sort
const desc = (a, b) => b - a;
const asc = (a, b) => a - b;
const ascStocksPrice = (a, b) => a.price - b.price;

scores.sort(asc);
stocks.sort(ascStocksPrice);
console.log(scores);
console.table(stocks);
