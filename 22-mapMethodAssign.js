
console.log("======== Given Array ==========");

const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 10];
console.log(arrayNumbers);
console.log(" ");

console.log("======= 1. New array after adding 10 into each element ==========");
const arrayNumberSum = arrayNumbers.map((element) => {
    return element + 10;
}, 0);
console.log(arrayNumberSum);
console.log(" ");

console.log("======= 2. Cube of each array element ==========");
const arrayNumCube = arrayNumbers.map((element) => {
    return element*element*element
})
console.log(arrayNumCube);
console.log(" ");

console.log("======= 3. Adding index value into it's corresponding each array element ==========");
const arrayIndexSum = arrayNumbers.map((element, index) => {
    return element + index;
})
console.log(arrayIndexSum);

