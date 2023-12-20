

function calculateTotalSpentByCategory(transactions) {
  let tempObj = {};
  for (const transaction of transactions) {
    let { category, price } = transaction;
    if (tempObj[category]) {
      tempObj[category] += price;
    }
    else {
      tempObj[category] = price;
    }
    console.log(Object.entries(tempObj));
  }
  let Output = Object.entries(tempObj).map(([category, price]) => ({ "category": category, "totalAmountSpent": price }));
  return Output;
}
calculateTotalSpentByCategory([
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  },
  {
    id: 2,
    timestamp: 1656105600000,
    price: 20,
    category: 'shop',
    itemName: 'Burger',
  },
  {
    id: 3,
    timestamp: 1656134400000,
    price: 30,
    category: 'Food',
    itemName: 'Sushi',
  },
]);