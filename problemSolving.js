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


const inputArray = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const result = findMaxFrequentElement(inputArray);
// console.log(result);
