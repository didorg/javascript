let fruits = ["Apples", "bananas", "mangoes"];
let citrus = ['oranges', 'mandarins', 'limes'];
let person = [];

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

//
const logCitrus = (c, index)=>{console.log(`${index} - ${c}`)}
citrus.forEach(logCitrus);
