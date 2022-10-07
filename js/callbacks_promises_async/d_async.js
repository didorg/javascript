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
      output += `<div><li> ${stock.symbol} </li></div>`;
    });
    document.body.innerHTML = output;
  }, 500);
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
    }, 1000);
  });
};

// Async / Await
const init = async () => {
  await addStock(amd);

  getStock();
};
init();

// Async / Await / Fetch
const getUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  console.log(users);
};
getUsers();
