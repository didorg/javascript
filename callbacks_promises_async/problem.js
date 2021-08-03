const stocks = [
  { symbol: "AAPL", name: "Apple" },
  { symbol: "TSLA", name: "Tesla" },
];

const amd = {
    symbol: "AMD", name: "AMD"
}

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
  setTimeout(() => {
    stocks.push(stock);
  }, 2000);
};

// Problem: AMD is never added to stocks before the DOM render the values
getStock();
addStock(amd); 
