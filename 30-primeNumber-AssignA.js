console.log(`======= Program to count prime numbers ========`);
const array = [3, 9, 7, 6, 19, 29, 53];
console.log(`Given Array :`);
console.log(array);

function isPrime(num) {
    if (num<=1) return false;
    if (num === 2) return true;
    for (let index = 2; index < num; index++) {
        if (num%index==0) {
            return false;
        }
    }
    return true;   
}

let primeNumber = [];
function countPrimes(array) {
    let count = 0;
    for (const element of array) {
        if (isPrime(element)) {
            count++;
            primeNumber.push(element);
        }
    }
    return count;
}
const primeNumCount = countPrimes(array);
console.log(`----------------------------------------------------------------`);
console.log(" ");

console.log(`Prime numbers from given array : ${primeNumber}`);
console.log(`----------------------------------------------------------------`);
console.log(" ");

console.log(`New array of prime numbers :`);
console.log(primeNumber);
console.log(`----------------------------------------------------------------`);
console.log(" ");

console.log(`The count of prime numbers from given array is : ${primeNumCount}`);
console.log(`-----------------------------------------------------------------`);



