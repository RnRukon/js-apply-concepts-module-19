
//   mile to km---------convert-----19-2 Unit Convert Inch to Feet, miles to kilometer

// function mileToKilometer(mile) {
//       var km = mile * 1.609344;
//       return km;
//   }
//   var marathon = mileToKilometer(100)
//   console.log(marathon);




// -------------------19-3 Check even and odd number using function
// const number = 4;
// const remainder = number % 2;
// console.log(remainder == 0);



// function isEven(number) {
//   if (number % 2 == 0) {
//     return true;
//   }
//   return false;
// }

// const myNumber = 400;
// const isMyNumberEven = isEven(myNumber);
// console.log(isMyNumberEven);



// ----------------------------------------
// 19-4 Check whether a year is a Leap Year or not------------------


// function isLeapYear(year) {
//   if (year % 4 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// var myYear = 2024;
// var isYourYearLeapYear = isLeapYear(myYear);
// console.log(isYourYearLeapYear);

// var yourYear = 2030;
// var isYourYearLeapYear = isLeapYear(yourYear);
// console.log(isYourYearLeapYear);




// program to check leap year
// function checkLeapYear(year) {

//   //three conditions to find out the leap year
//   if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
//     return 'is a leap year ';
//   } else {
//     return 'is not a leap year';
//   }
// }

// // take input
// const year = 2019;

// const isYourYearLeapYear = checkLeapYear(year);
// console.log(isYourYearLeapYear);


// ---------------------------------------------------
// 19-5 Calculate Factorial of a number using for loop

// var factorial = 1;
// for (var i = 1; i <= 7; i++) {
//   factorial = factorial * i;
// }
// console.log(factorial);









// 19-6 Recalculate factorial multiple times using a function-------------

// function getFactorial(number) {
//   var factorial = 1;
//   for (var i = 1; i <= number; i++) {
//     factorial = factorial * i;
//   }
//   return factorial;
// }
// var number = 7;
// var firstFactorial = getFactorial(number)
// console.log(firstFactorial);





// --------------------19-7 Factorial using a while loop or a decrementing loop----------

// function getFactorial(number) {
//   let factorial = 1;
//   let i = 1;
//   while (i <= number) {
//     factorial = factorial * i;
//     i++;
//   }
//   return factorial;
// }
// const myFactorial = 6;
// console.log(getFactorial(myFactorial));




// ......................................while loop.................................

// function getFactorial(number) {
//   let factorial = 1
//   let i = number;

//   while (i >= 1) {
//     factorial = factorial * i;
//     i--;
//   }
//   return factorial

// }
// const myFactorial = 6;
// console.log(getFactorial(myFactorial));

// --------------------------------------for loop---------------------------------------
// function getFactorial(number) {
//   let factorial = 1;
//   for (let i = number; i >= 1; i--) {
//     factorial = factorial * i;
//   }
//   return factorial;
// }
// const myFactorial = 6;
// console.log(getFactorial(myFactorial));




// ------------------------

// function factorial(n) {
//   if (n == 1) {
//     return 1;
//   }

//   return n * factorial(n - 1);

// }

// const myFactorial = factorial(7);
// console.log(myFactorial);