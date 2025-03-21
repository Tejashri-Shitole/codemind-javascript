console.log(`<================== Task 1 ==================>`);

function squareOfWordLength(str) {
    var strLength = str.length;
    console.log(`Given word is ${str} and it's length is : ${strLength}`);
    var result = strLength * strLength;
    return result;
}
var returnValue = squareOfWordLength("Javascript");
console.log(`Length square of word 'JavaScript' is: ${returnValue}`);
console.log(`_____________________________________________________`);

var returnValue = squareOfWordLength("Google Chrome");
console.log(`Length square of word 'Google Chrome' is: ${returnValue}`);
console.log(`_____________________________________________________`);

var returnValue = squareOfWordLength("Web Developer Smart");
console.log(`Length square of word 'Web Developer Smart' is: ${returnValue}`);
console.log(`  `);



console.log(`<================== Task 2 ==================>`);

function statDev(str) { 
   var strLengthDev = str.length;
   console.log(`Length of Given string is : ${strLengthDev}`);
   var splitResult = str.split(" ").length;
   console.log(`Split string result is : ${splitResult}`);
   console.log(`_____________________________________________________`);
   var divResult = strLengthDev/splitResult;
   console.log(`The result of division of string length to total number of words is : ${divResult}`);
   var multiplyResult = strLengthDev*splitResult;
   console.log(`The result of multiplication of string length & total number of words is : ${multiplyResult}`);
}
statDev("I am UI Developer");
