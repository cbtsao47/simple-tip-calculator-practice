const bill = [123, 48, 268];

function tipCalculator(bill) {
  let percentage;
  if (bill < 50) {
    percentage = 0.2;
  } else if (bill >= 50 && bill < 200) {
    percentage = 0.15;
  } else {
    percentage = 0.1;
  }
  return percentage * bill;
}
var tips = [
  tipCalculator(bill[0]),
  tipCalculator(bill[1]),
  tipCalculator(bill[2])
];

var finalValue = [bill[0] + tips[0], bill[1] + tips[1], bill[2] + tips[2]];
