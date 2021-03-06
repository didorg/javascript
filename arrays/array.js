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

