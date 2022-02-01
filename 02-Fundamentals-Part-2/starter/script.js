"use strict";

// // console.log(``);

// let hasDriverLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriverLicense) console.log(`I can drive 🛺`);

// const interface = "audio";
// const private = 1234;

// function logger() {
//   console.log(`My name is Michal`);
// }
// //calling / running / invoking function
// // logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;

//   return juice;
// }

// const appleJuice = fruitProcessor(3, 4);
// console.log(appleJuice);
// console.log(`${fruitProcessor(3, 4)}`);

// ====== function in function =========

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// ---= challenge 1 =---

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// // const avgDolphins = calcAverage(44, 23, 71);
// // const avgKoalas = calcAverage(65, 54, 49);

// const avgDolphins = calcAverage(85, 54, 41);
// const avgKoalas = calcAverage(23, 34, 27);

// console.log(`Average Dolphins: ${avgDolphins}, Average Koalas: ${avgKoalas}`);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins wins with (${avgDolphins} vs ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas wins with (${avgKoalas} vs ${avgDolphins})`);
//   } else {
//     console.log(`No team wins!`);
//   }
// };
// checkWinner(avgDolphins, avgKoalas);

// ---= challenge 2 - objects =---

// const mark = {
//   fullName: "Mark Miller",
//   weight: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.weight / this.height ** 2;
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   weight: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.weight / this.height ** 2;
//     return this.bmi;
//   },
// };

// if (mark.calcBMI() > john.calcBMI()) {
//   console.log(
//     `Mark's BMi (${mark.calcBMI().toFixed(2)}) is higher than John's (${john
//       .calcBMI()
//       .toFixed(2)})`
//   );
// } else {
//   `John's BMI (${john.calcBMI().toFixed(2)}) is higher than Mark's (${mark
//     .calcBMI()
//     .toFixed(2)})`;
// }

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

// ---= challenge 4 - loops =---

const calcTip = function (bill) {
  return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals[i] = tips[i] + bills[i];
}

console.log(`Bills: ${bills}`);
console.log(`Tips: ${tips}`);
console.log(`Totals: ${totals}`);
