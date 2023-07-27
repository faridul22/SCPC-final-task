/*
Task 1 : This function takes a string as input and returns the reversed version of the string without using the built-in reverse() method
*/
const makeReverseString = text => {
    let reverse = '';
    for (let i = text.length - 1; i >= 0; i--) {
        const element = text[i];
        reverse += element
    }
    return reverse;
}

// console.log(makeReverseString("hello world"))


/* 
Task 2 : This function takes an array of numbers as input and returns the sum of all positive numbers in the array.
*/
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

// console.log(positiveNumbersSum([2, -5, 10, -3, -7]))


/* 
Task 3: This JavaScript program finds and returns the most frequent element in an array.
*/
const findMostFrequentElement = array => {
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
    const result = parseFloat(mostFrequentElement)
    return result;
}

// console.log(findMostFrequentElement([3, 5, 2, 5, 3, 3, 1, 4, 5]));


/* 
Task 4: This function takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.
*/
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

// console.log(findIndicesNumber([1, 3, 6, 8, 11, 15], 9));


/* 
Task 5: This is a simple JavaScript calculator function. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.
*/
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

// console.log(calculateTwoNumber(3, 2, "*"))


/* 
Task 6: This is a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.
*/
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


/* 
Task 7: This function is for finding the second smallest element in an array of numbers. The function will return the second smallest number.
*/
const getSecondSmallest = array => {
    array.sort((a, b) => a - b);
    const secondSmallest = array[1];
    return secondSmallest;

}

// console.log(getSecondSmallest([1, 6, 3, 5, 7, 9]));