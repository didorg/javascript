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
  
  const addStock = (stock, callback) => {
    setTimeout(() => {
      stocks.push(stock);
      callback();
    }, 2000);
  };
  
  // Now getStock acts as a callback function
  addStock(amd, getStock);

