// let js = "amazing";

// console.log(4 + 5 + 6);

// console.log("Jonas"); // Jonas - value

// let firstName = "Bob"; // firstName - variable (camelCase notation)
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// ---- Assignments! ----

// ---- 1
// let country = "Poland";
// let continent = "Europe";
// let population = 10000;

// console.log(country);
// console.log(continent);
// console.log(population);

// // ---- 2
// let isIsland = false;
// let language;

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// ---- 3

// language = "Polish";
// const country = "Poland";
// const continent = "Europe";
// const isIsland = false;

// ---- Challenge 1 and 2 ----

// const markWeight = 78;
// const johnWeight = 92;

// const markHeight = 1.69;
// const johnHeight = 1.95;

// const bmiMark = markWeight / markHeight ** 2;
// console.log("Marks BMI is: ", bmiMark);

// const bmiJohn = johnWeight / johnHeight ** 2;
// console.log("Johns BMI is: ", bmiJohn);

// const markHigherBMI = bmiMark > bmiJohn;
// console.log("Is Maks BMI higher than Johns bmi? ", markHigherBMI);

// if (bmiMark > bmiJohn) {
//   console.log(
//     `Is Maks BMI (${bmiMark.toFixed(
//       2
//     )}) higher than Johns BMI (${bmiJohn.toFixed(2)})? - ${markHigherBMI} `
//   );
// }

// ---- Challenge 3 ----

// const scoreD_1 = 96;
// const scoreD_2 = 108;
// const scoreD_3 = 89;

// const scoreK_1 = 88;
// const scoreK_2 = 91;
// const scoreK_3 = 110;

// const aveD = (scoreD_1 + scoreD_2 + scoreD_3) / 3;
// const aveK = (scoreK_1 + scoreK_2 + scoreK_3) / 3;

// console.log(`Average score of Dolphins is: ${aveD.toFixed(2)}`);
// console.log(`Average score of Koalas is: ${aveK.toFixed(2)}`);

// if (aveD > aveK) {
//   console.log(`The winer is Dolphins`);
// } else if (aveD < aveK) {
//   console.log(`The winer is Koalas`);
// } else if (aveD === aveK) {
//   console.log("There is a draw");
// }

// ---- Challenge 4 ----

const bill = 275;

const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value is ${
    bill + tip
  }`
);
