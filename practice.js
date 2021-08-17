// function mileToKilometer(mile) {
//     var km = mile * 1.609344;
//     return km;
// }
// console.log(mileToKilometer(100));

// ---------------------------------------------celsius To Fahrenheit--------------------------
// function celsiusToFahrenheit(celsius) {
//     var fahrenheit = celsius * 9 / 5 + 32;
//     return fahrenheit;
// }
// console.log(celsiusToFahrenheit(500));



// ---------------------------------------------Fahrenheit To celsius--------------------------
// function fahrenheitToCelsius(fahrenheit) {
//     var celsius = (fahrenheit - 32) * 5 / 9;
//     return celsius;
// }
// console.log(fahrenheitToCelsius(500));


// -------------------------------------------grade-------calculation-----------------------------



// function gradeFunction(number) {
//     if (number >= 90) {
//         return "A+";
//     }
//     else if (number >= 80) {
//         return "A";
//     }
//     else if (number >= 70) {
//         return "A-";
//     }
//     else if (number >= 60) {
//         return "B";
//     }
//     else if (number >= 50) {
//         return "C";
//     }
//     else if (number >= 40) {
//         return "D";
//     }

//     else {
//         return "F"
//     }
// }

// var number = 1000;
// console.log(gradeFunction(number));



// ------------simple----------- Interest----------calculation----------


function simpleInterest(amount, interestRate, year) {
    var total = amount * (1 + interestRate / 100 * year);
    return total;
}


var amount = 5000;
var interestRate = 100;
var year = 2;

console.log(simpleInterest(amount, interestRate, year));

