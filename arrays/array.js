let fruits = ["Apples", "bananas", "mangoes"];
let citrus = ['oranges', 'mandarins', 'limes'];
const scores = [10, 6, 7, 8, 4, 9, 10, 8];
const stocks = [
    { symbol: "AAPL", name: "Apple", premium: true },
    { symbol: "TSLA", name: "Tesla", premium: true },
    { symbol: "NIO", name: "NIO Inc.", premium: false },
    { symbol: "AMD", name: "AMD", premium: true },
    { symbol: "DIDI", name: "DiDi Global Inc.", premium: false },
  ];

console.log(fruits[1]);
console.log(fruits.length);

// concat
rnew_arr = fruits.concat(citrus);
console.log(rnew_arr);

//push
fruits.push('guava');
console.log(fruits);

// pop
let last = fruits.pop();
console.log(last);
console.log(fruits);

// ForEach
const logCitrus = (c, index)=>{console.log(`${index} - ${c}`)}
citrus.forEach(logCitrus);

// Filter
const premiumStocks = stocks.filter( stock =>{
    return !stock.premium;
});
console.log(premiumStocks);