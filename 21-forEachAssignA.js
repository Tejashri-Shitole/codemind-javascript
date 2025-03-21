
const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
console.log(" ");
console.log(`Given Array :`);
console.log(arrayNumbers);

console.log(" ");

console.log("======= 1. Array Element with it's index using for-each loop with Arrow Function =======");
console.log(" ");

arrayNumbers.forEach((elements, index) => {
    console.log(`Array Element : ${elements} ----> index of given element is : ${index}`);
});
console.log(" ");

console.log("======= 2. Only Positive Numbers =======");
arrayNumbers.forEach((element) => {
    if (element>0) {
        console.log(element);
    }
});
console.log(" ");

console.log("======= 3. Only Negative Numbers from Arrow Function =======");
negativeNumbers = [];
console.log(`Only negative numbers from given array :`);
arrayNumbers.forEach((element) => {
    if (element<0) {
        console.log(element);
        negativeNumbers.push(element);
    }
});
console.log(`New array of negative numbers with AF`);
console.log(negativeNumbers);
console.log(" ");


console.log("======== 4. Even Numbers from array using for-each with AF ========");
arrayNumbers.forEach((element) => {
    if (element%2 == 0) {
        console.log(element);
    }
});
console.log(" ");

console.log("======== 5. Sum of all elements from array ========");
let sum = 0;
arrayNumbers.forEach((element) => {
    sum = sum + element;
});
console.log(`Total sum of elements in array : ${sum}`);
console.log(" ");

console.log("======== 6. Only even indexed array values using for-each with AF ========");
console.log(`Even indexed array values are :`);
let evenIndexedArray = [];
arrayNumbers.forEach((element, index) => {
    if (index%2 === 0) {
        console.log(element);
    }
});
console.log(" ");



