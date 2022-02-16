const data = [{ name:'Anne', age: 20 }, 
              { name:'Mike', age: 24 }, 
              { name:'Max', age: 27 }, 
              { name:'Sara', age: 25 }, 
              { name:'George', age: 24 }]

console.log(data.length);
const filteredData = data.filter(element => element.age>24);
console.log(filteredData);
const mappedData = filteredData.map(element => element.name);
console.log(mappedData); // R/ [“Max”, “Sara”]
const average = data.reduce((acc, element) => acc + element.age, 0)/data.length;
console.log(average);
//* map(), filter() and reduce() methods are known as higher-order functions


const colors = ["red", "green", "blue"]
const [value1, value2, value3] = colors
console.log(value1); //R/ red
