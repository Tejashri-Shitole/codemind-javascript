
function isPrime(num){
    for (let index = 2; index < num; index++) {
        if (num%index==0) {
            return false;
        }   
    }
    return true;
}
var result = isPrime(7);
console.log(`Is 7 prime number: ${result}`);

var result = isPrime(15);
console.log(`Is 15 prime number: ${result}`);


const array = [3, 9, 7, 6, 19, 29, 53];
function countPrimes(array) {
    let count = 0;
    for (const element of array) {
        if (isPrime(element)) {
            count++;
        }
    }
    return count;
}
// Call the function
const primeCount = countPrimes(array);
// Output the result
console.log(primeCount);


