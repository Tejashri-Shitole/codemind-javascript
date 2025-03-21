
console.log(`******* Task 1 : Finding greatest number amongst two numbers ******`);
var greaterNumber = function(num1, num2){
    var result = num1>num2 ? num1 : num2;
    console.log(`Greater Number is : ${result}`);
}
greaterNumber(10, -10);
greaterNumber(800, 899);
console.log(" ");


console.log(`******* Task 2 : Checking if number is EVEN or ODD ******`);
var isEvenOrOdd = function(num) {
    var result = (num%2==0) ? "EVEN" : "ODD";
    return result;
}
var returnResult = isEvenOrOdd(29);
console.log(`Number 29 is : ${returnResult}`);

var returnResult = isEvenOrOdd(44);
console.log(`Number 44 is : ${returnResult}`);

var returnResult = isEvenOrOdd(0);
console.log(`Number 0 is : ${returnResult}`);

var returnResult = isEvenOrOdd(101);
console.log(`Number 101 is : ${returnResult}`);
console.log(" ");

console.log(`******* Task 3 : Checking Even or Odd lengths of words ******`);
var wordLength = function(word){
    var result = word.length%2==0 ? "EVEN" : "ODD";
    return result;
}
var returnLength = wordLength("JavaScript");
console.log(`Length of word 'JavaScript' is : ${returnLength}`);

var returnLength = wordLength("Developer");
console.log(`Length of word 'Developer' is : ${returnLength}`);

var returnLength = wordLength("Google");
console.log(`Length of word 'Google' is : ${returnLength}`);
