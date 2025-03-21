console.log("=========== Given Array ===========");
const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log(arrayNumbers);
console.log(" ");

console.log("=========== 1. Finding all numbers which are greater than 50 ===========");
const arrayNumbersGreater = arrayNumbers.filter((Element) => {
    return Element > 50;
})
console.log(arrayNumbersGreater);
console.log(" ");

console.log("=========== 2. Finding all Even Numbers from given array ===========");
const evenArrayNum = arrayNumbers.filter((Element) => {
    return Element%2 === 0;
})
console.log(evenArrayNum);
console.log(" ");

console.log("=========== 3. Finding all Odd numbers from given array ===========");
const oddArrayNum = arrayNumbers.filter((Element) => {
    return Element%2 !== 0;
})
console.log(oddArrayNum);
console.log(" ");

console.log("=========== 4. Finding numbers which are multiple of 5 from given array ===========");
const multipleFiveArrayNum = arrayNumbers.filter((Element) => {
    return Element%5 === 0;
})
console.log(multipleFiveArrayNum);
console.log(" ");

console.log("=========== 5. Finding numbers between 20 & 50 from given array ===========");
const middleArrayNum = arrayNumbers.filter((Element) => {
    return Element>20 && Element<50;
})
console.log(middleArrayNum);
