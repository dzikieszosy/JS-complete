// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// --== challenge 1 ==--

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

function printForecast(arr) {
  // console.log(`${data1.length}`);
  for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i]} st C in ${i + 1} day's`);
  }
}

printForecast(data2);
