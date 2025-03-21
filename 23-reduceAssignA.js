console.log("============ Given Array ============");
const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log(arrayNumbers);
console.log(" ");

console.log("===== 1.a. Some of all numbers from given array using filter() method =======");
const totalArraySum = arrayNumbers.reduce((runningTotal, element) => {
    return runningTotal + element;
}, 0);
console.log(totalArraySum);
console.log(" ");


console.log("===== 1.b. Some of all numbers from given array using traditional way (for-each method) =======");
let sum = 0;
arrayNumbers.forEach((element) => {
     sum = sum + element;
})
console.log(sum);
console.log(" ");

console.log("===== 2. Finding the numbers which are multiple of 5 using filter() method and their sum with reduce() method =======");
console.log(" ");

const multipleFiveArrayNum = arrayNumbers.filter((element) => {
    return element%5 == 0;
});
console.log(`=> Array of numbers which are multiple of 5 : `);
console.log(multipleFiveArrayNum);
console.log(" ");

console.log(`=> Sum of array numbers which are multiple of 5 :`);
const reducedArrayNum = multipleFiveArrayNum.reduce((runningTotal, element) => {
    return runningTotal + element;
}, 0);
console.log(reducedArrayNum);



