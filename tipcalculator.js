// const bill = [123, 48, 268];

// function tipCalculator(bill) {
//   let percentage;
//   if (bill < 50) {
//     percentage = 0.2;
//   } else if (bill >= 50 && bill < 200) {
//     percentage = 0.15;
//   } else {
//     percentage = 0.1;
//   }
//   return percentage * bill;
// }
// var tips = [
//   tipCalculator(bill[0]),
//   tipCalculator(bill[1]),
//   tipCalculator(bill[2])
// ];

// var finalValue = [bill[0] + tips[0], bill[1] + tips[1], bill[2] + tips[2]];

const bills = {
  bill: [124, 48, 268, 180, 42],
  tipCalc: function() {
    this.tip = [];
    for (let i = 0; i < this.bill.length; i++) {
      let amount = this.bill[i];
      if (amount < 50) {
        this.tip.push(amount * 0.2);
      } else if (amount <= 50 && amount <= 200) {
        this.tip.push(amount * 0.15);
      } else {
        this.tip.push(amount * 0.1);
      }
    }
  },
  finalAmountCalc: function() {
    this.finalAmount = [];
    for (let i = 0; i < this.bill.length; i++) {
      this.finalAmount.push(this.tip[i] + this.bill[i]);
    }
  }
};

const markBills = [77, 375, 110, 45];
function tipCalculator(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let amount = array[i];
    if (amount < 100) {
      result.push(amount * 0.2);
    } else if (amount >= 100 && amount <= 300) {
      result.push(amount * 0.1);
    } else {
      result.push(amount * 0.25);
    }
  }
  return result;
}
function averageTip(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
