'use strict';

// //constructor function start with BIG LETTER
// const Person = function (fistName, birthYear) {
//   // console.log(this);

//   // instance properties
//   this.fistName = fistName;
//   this.birthYear = birthYear;

//   // // never create a method inside a contructor function!! - this will create a copy in every single object - DON'T DO THIS
//   // this.calcAge = function () {
//   //   console.log(2037 - this.birthYear);
//   // };
// };

// const jonas = new Person('Jonas', 1991);
// // console.log(jonas);

// // 1. New empty object i created
// // 2. Function is called, this = {} is this new created object
// // 3. {} object is linked to prototype
// // 4. function automatically return empty object {}

// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 2017);
// // console.log(matilda, jack);

// // console.log(jonas instanceof Person);

// //////////////////////////////////
// // prototypes - this don't copy method, this will inheritance method
// //////////////////////////////////

// // console.log(Person.prototype);
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// // jonas.calcAge();

// // console.log(Person.prototype.isPrototypeOf(jonas));
// // console.log(Person.prototype.isPrototypeOf(matilda));
// // console.log(Person.prototype.isPrototypeOf(Person));

// Person.prototype.species = 'Homo Sapiens';
// // console.log(jonas.species, matilda.species);

// ////////////////////////////
// // coding challenge 2
// ////////////////////////////

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const ford = new Car('Ford', 120);

// console.log(ford);
// console.log(ford.speedUS);

// ford.accelerate();
// ford.brake();

// ford.speedUS = 50;
// console.log(ford);
