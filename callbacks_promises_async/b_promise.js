const stocks = [
  { symbol: "AAPL", name: "Apple" },
  { symbol: "TSLA", name: "Tesla" },
];

const amd = {
  symbol: "AMD",
  name: "AMD",
};

const getStock = () => {
  setTimeout(() => {
    let output = "";
    stocks.forEach((stock, index) => {
      output += `<li> ${stock.symbol} </li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
};

const addStock = (stock) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      stocks.push(stock);
      const err = false;
      if (!err) {
        resolve();
      } else {
        reject("Error: Somethong went wrong");
      }
    }, 2000);
  });
};

// addStock return a Promise
addStock(amd)
  .then(getStock)
  .catch((err) => console.log(err));

/**
 * Promise.all
 */
const promiseA = Promise.resolve(`You added ${amd.name}`);
const promiseB = 100;
const promiseC = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, `${amd.name} symbol is ${amd.symbol} `);
});
Promise.all([promiseA, promiseB, promiseC]).then((values) =>
  console.log(values)
);
