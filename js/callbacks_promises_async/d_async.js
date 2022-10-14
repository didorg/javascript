import fetch from "node-fetch";

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
const usersURL = "https://jsonplaceholder.typicode.com/users";

const getUsers = async () => {
  try {
    const response = await fetch(usersURL, {
      headers: {
        //Authorization: `Bearer ${token}`,
        "Api-Version": "1.0",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "GET",
    });
    const users = await response.json();

    return users;
  } catch (error) {
    throw error;
  }
};

getUsers().then((users) => {
  console.log(users);
  for (let user of users) {
    console.log(user.name);
  }
});

const carURL = "http://localhost:8000/cars";

const getCars = async () => {
  try {
    const response = await fetch(carURL);
    const cars = await response.json();

    return cars;
  } catch (e) {
    throw e;
  }
};

getCars().then((cars) => {
  console.log(cars);
});
