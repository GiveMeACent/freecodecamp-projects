function checkCashRegister(price, cash, cid) {
  let values = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.10,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  }
  let changeValue = cash - price;
  let change = [];
  let status;
  let currencyAmount;
  let closed = true;
  let neededCurrency;
  let currencyValue;
  for (let i = cid.length - 1; i >= 0; i--){
    if (change === 0)
      break;
    currencyValue = values[cid[i][0]];
    if(currencyValue > changeValue || cid[i][1] === 0)
      continue;
    
    currencyAmount = cid[i][1] / values[cid[i][0]];
    neededCurrency = parseInt(changeValue / currencyValue);
    if (neededCurrency >= currencyAmount){
      change.push([cid[i][0], cid[i][1]]);
      changeValue -= cid[i][1];
    }
    else{
      change.push([cid[i][0], neededCurrency * values[cid[i][0]]]);
      changeValue -= currencyValue * neededCurrency;
      closed = false;
    }
    changeValue = changeValue.toFixed(2);
  }
  if (changeValue != 0.00){
    status = "INSUFFICIENT_FUNDS";
    change = [];
  }
  else if(changeValue == 0 && closed){
    status = "CLOSED";
    change = cid;
  }
  else if(changeValue == 0 && !closed){
    status = "OPEN";
  }

  return {"status": status, "change": change};
}


checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);