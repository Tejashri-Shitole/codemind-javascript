
console.log("======= Task 1 : Arrow Function with no argument and no return value ========");
let msg = () => {
    console.log("Good Morning, Today is Wednesday"); 
};
msg();
console.log(" ");


console.log("======= Task 2.a : Arrow Function to perform multiplication of 3 arguments with no return value ========");
let multiply = (n1, n2, n3=1) => {
    console.log(`Multiplication value for ${n1}, ${n2}, ${n3} : ${n1*n2*n3}`);
    
};
multiply(5, 5, 2);
console.log(" ");
console.log("======= Task 2.b : Invoking Same AF to values 10, 4 with default value to 3rd argument ========");
multiply(10, 4);
console.log(" ");

console.log("======= Task 3.b : Arrow Function to perform addition of 5 arguments with return value ========");
let addition = (num1, num2, num3, num4, num5) => {
    let result = num1+num2+num3+num4+num5;
    return result;
};
const addResult = addition(100, 100, 200, 349, 756);
console.log(`Addition for values 100, 100, 200, 349, 756 is : ${addResult}`);
console.log(" ");

console.log("======= Task 3.b : Arrow Function to perform addition of 5 string arguments with return value ========");
let additionStr = (n1, n2, n3, n4, n5) => {
    let result = `${n1} ${n2} ${n3} ${n4} ${n5}`;
    return result;
};
const addResultStateStr = additionStr("I am", "learning", "ES6", "Features", "in depth");
console.log(addResultStateStr);

