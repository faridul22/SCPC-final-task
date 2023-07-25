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
