// Task-1
const makeReverseString = text => {
    let reverse = '';
    for (let i = text.length - 1; i >= 0; i--) {
        const element = text[i];
        reverse += element
    }
    return reverse;
}
const myString = "hello world"
const reverse = makeReverseString(myString)
// console.log(reverse)


// Task-2
const positiveNumbersSum = array => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element > 0) {
            sum += element;
        }
    }
    return sum;
}

const array = [2, -5, 10, -3, 7];
const summation = positiveNumbersSum(array)
// console.log(summation)


// Task-3
const findMaxFrequentElement = array => {
    const frequencyElement = {};

    for (const element of array) {
        if (frequencyElement[element]) {
            frequencyElement[element]++;
        } else {
            frequencyElement[element] = 1;
        }
    }

    let mostFrequentElement;
    let maxFrequency = 0;

    for (const element in frequencyElement) {
        if (frequencyElement[element] > maxFrequency) {
            mostFrequentElement = element;
            maxFrequency = frequencyElement[element];
        }
    }

    return mostFrequentElement;
}


const myArray = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const output = findMaxFrequentElement(myArray);
// console.log(output);


// Task-4
function findIndicesNumber(array, target) {
    const arrayLength = array.length;
    for (let i = 1; i < arrayLength; i++) {
        for (let p = 0; p < arrayLength; p++) {
            if (array[i] + array[p] === target) {
                return [i, p];
            }
        }
    }

    return null;
}

const inputArray = [1, 3, 6, 8, 11, 15];
const targetValue = 9;
const result = findIndicesNumber(inputArray, targetValue);
// console.log(result);


// Task-5
function calculateTwoNumber(num1, num2, operator) {

    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return "Please provide valid input number"
    }
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return "Cannot divide by zero";
            }
        default:
            return "Please provide a valid operator";
    }
}

const number1 = 3;
const number2 = 2;
const operator = "*";

const result2 = calculateTwoNumber(number1, number2, operator);
// console.log(result2);


// Task-6
const romanToInteger = (romanStr) => {
    const romanHash = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let integer = 0;
    for (let i = 0; i < romanStr.length; i++) {
        const current = romanHash[romanStr[i]];
        const next = romanHash[romanStr[i + 1]];
        (current < next) ? (integer -= current) : (integer += current);
    }
    return integer;
};

// console.log(romanToInteger('MCMLXXXIX'));