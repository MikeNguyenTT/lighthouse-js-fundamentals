const getBillName = function(billValue) {
  let billName = "";
  switch (billValue) {
    case 2000:
      billName = "twentyDollars";
      break;
    case 1000:
      billName = "tenDollars";
      break;
    case 500:
      billName = "fiveDollars";
      break;
    case 200:
      billName = "twoDollars";
      break;
    case 100:
      billName = "oneDollars";
      break;
    case 25:
      billName = "quarter";
      break;
    case 10:
      billName = "dime";
      break;
    case 5: 
      billName = "nickel";
      break;
    case 1:
      billName = "penny";
      break;
  }
  return billName;
}

const countAndAddBill = function (change, billValue, finalChange) {
  let count = Math.floor(change / billValue);
  if (count > 0) {
    finalChange[getBillName(billValue)] = count;
    change -= billValue * count;
  }
  return change;
}
const calculateChange = function(total, cash) {
  // Your code here
  let finalChange = {};
  let change = cash - total;
  change = countAndAddBill(change, 2000, finalChange);
  change = countAndAddBill(change, 1000, finalChange);
  change = countAndAddBill(change, 500, finalChange);
  change = countAndAddBill(change, 200, finalChange);
  change = countAndAddBill(change, 100, finalChange);
  change = countAndAddBill(change, 25, finalChange);
  change = countAndAddBill(change, 10, finalChange);
  change = countAndAddBill(change, 5, finalChange);
  change = countAndAddBill(change, 1, finalChange);
  return finalChange;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));


