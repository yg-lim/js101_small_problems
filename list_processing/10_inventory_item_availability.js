function transactionsFor(idNum, transactions) {
  return transactions.filter(obj => obj['id'] === idNum);
}

function isItemAvailable(idNum, transactions) {
  let totalQuantity = transactionsFor(idNum, transactions)
    .reduce((acc, cur) => {
      return cur['movement'] === 'in' ? acc + cur['quantity'] : acc - cur['quantity'];
    }, 0);

  return totalQuantity > 0;
}

/*
-Given the array of objects,
Set 'totalQuantity' to the return value of reducing them to a single number
  -For each obj
    -if ['movement'] is in, then + ['quantity']
    -if ['movement'] is out, then - ['quantity']
*/

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
  { id: 105, movement: 'in',  quantity: 10 },
  { id: 102, movement: 'out', quantity: 17 },
  { id: 101, movement: 'in',  quantity: 12 },
  { id: 103, movement: 'out', quantity: 20 },
  { id: 102, movement: 'out', quantity: 15 },
  { id: 105, movement: 'in',  quantity: 25 },
  { id: 101, movement: 'out', quantity: 18 },
  { id: 102, movement: 'in',  quantity: 22 },
  { id: 103, movement: 'out', quantity: 15 }, ];


console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true