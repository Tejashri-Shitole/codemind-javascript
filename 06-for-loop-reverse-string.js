
console.log(`========= Program to print string in reverse order ===========`);

let str = "Hello my name is Jenny";
let reversedStr = "";
for (let index = str.length-1; index>=0 ; index--) {
    reversedStr = reversedStr + str[index]; 
}

console.log(`original string : ${str}`);
console.log(`Reversed string : ${reversedStr}`);

console.log(`========= Program to print number in reverse order ===========`);
let num = "13425674";
let reversedNum = "";
for (let index = num.length-1; index>=0 ; index--) {
    reversedNum = reversedNum + num[index]; 
}

console.log(`original number : ${+num}`);
console.log(`Reversed number : ${+reversedNum}`);