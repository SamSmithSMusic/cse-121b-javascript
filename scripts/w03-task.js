/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (num1, num2) {
    return num1 + num2;
}

function addNumbers() {
    let num1 = Number(document.querySelector('#add1').value);
    let num2 = Number(document.querySelector('#add2').value);
    return document.querySelector('#sum').value = add(num1, num2);
}

document.querySelector('#addNumbers').addEventListener("click", addNumbers)

/* Function Expression - Subtract Numbers */
const subtract = function (subtract1 ,subtract2) { return subtract1 - subtract2;}

let subtractNumbers = function() {
    let subtract1 = Number(document.querySelector('#subtract1').value);
    let subtract2 = Number(document.querySelector('#subtract2').value);     
    return document.querySelector('#difference').value = subtract(subtract1, subtract2);}

document.querySelector('#subtractNumbers').addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (factor1 ,factor2) => {return factor1 * factor2;}

let multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(factor1, factor2);}

document.querySelector('#multiplyNumbers').addEventListener("click", multiplyNumbers);
/* Open Function Use - Divide Numbers */
function divide (dividend, divisor) {
    return dividend / divisor;
}

function divideNumbers() {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    return document.querySelector('#quotient').value = divide(dividend, divisor);
}

document.querySelector('#divideNumbers').addEventListener("click", divideNumbers);

/* Decision Structure */
let currentDate = new Date();
let year = currentDate.getFullYear();
document.querySelector('#year').innerHTML = year;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let myArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector('#array').innerHTML = myArray;
/* Output Odds Only Array */
document.querySelector('#odds').innerHTML = myArray.filter(number => number % 2 != 0);
/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = myArray.filter(function jazz (number) {return number % 2 == 0});
/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').innerHTML = myArray.reduce(function jazzer (sum, number) { return sum + number});
/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').innerHTML = myArray.map(num => num * 2);
/* Output Sum of Multiplied by 2 Array */
document.querySelector('#sumOfMultiplied').innerHTML = myArray.map(num => num * 2).reduce((sum, num) => sum + num);
