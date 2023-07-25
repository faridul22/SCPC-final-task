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
console.log(reverse)



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