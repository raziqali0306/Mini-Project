const names = [
  'Idly',
  'Parota',
  'Dosa',
  'Poori',
  'Vada',
  'Veg Noodles',
  'Egg Noodles',
  'Chicken Noodles',
  'Meals',
  'Fried rice',
  'Egg Fried rice',
  'Chicken Fried rice',
  'Chicken Biryani',
  'Pastry',
  'Vaneela',
  'Strawberry',
  'Coke(100ml)',
  'Coke(250ml)',
  'Sprit(100ml)',
  'Sprit(250ml)',
];
const costs = [
  20,
  30,
  25,
  30,
  25,
  40,
  50,
  70,
  50,
  50,
  60,
  80,
  120,
  35,
  20,
  30,
  20,
  35,
  20,
  35,
];

var quantity = [];

var amount = [];

function passInfo() {
  for (var i = 0; i < names.length; i++) {
    if (document.getElementById(`${names[i]}`) != null) {
      quantity[i] = document.getElementById(`${names[i]}`).value;
      amount[i] = costs[i] * quantity[i];
    } else {
      quantity[i] = 0;
      amount[i] = 0;
    }
    localStorage.setItem(`${'item-' + i}`, `${names[i]}`);
    localStorage.setItem(`${'quantity-' + i}`, `${quantity[i]}`);
    localStorage.setItem(`${'costs-' + i}`, `${costs[i]}`);
    localStorage.setItem(`${'amount-' + i}`, `${amount[i]}`);
  }
  console.log(localStorage);
}
