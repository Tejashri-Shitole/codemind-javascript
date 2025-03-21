console.log(`******** Task done using 'do-while' loop *********`);
console.log(" ");


console.log("=========== Print numbers from 5 to 15 by incrementing 1 ==========");
var index = 5;
var output = "";
do {
    output = output + index + " ";
    //console.log(index);
    index=index+1;
} while (index<=15);
console.log(output.trim());
console.log(" ");


console.log("=========== Print numbers from 50 to 40 by decrementing 1 ==========");
var index = 50;
var output = "";
do {
    output = output + index + " ";
    //console.log(index);
    index=index-1;
} while (index>=40);
console.log(output.trim());
console.log(" ");


console.log("=========== Print numbers to find first 15 ODD numbers ==========");
var index = 1;
var output = "";
do {
    output = output + index + " ";
    //console.log(index);
    index=index+2;
} while (index<=30);
console.log(output.trim());
console.log(" ");


console.log("=========== Print numbers to find first 10 EVEN numbers ==========");
var index = 0;
var output = "";
do {
    output = output + index + " ";
    //console.log(index);
    index=index+2;
} while (index<=20);
console.log(output.trim());
console.log(" ");


console.log("=========== Print table of 5 ==========");
var index = 5;
var output = "";
do {
    output = output + index + " ";
    //console.log(index);
    index=index+5;
} while (index<=50);
console.log(output.trim());
console.log(" ");


console.log("=========== Print table of 10 ==========");
var index = 10;
var output = "";
do {
    output = output + index + " ";
    //console.log(index);
    index=index+10;
} while (index<=100);
console.log(output.trim());
console.log(" ");



console.log("=========== Print table of 10 in reverse order ==========");
var index = 100;
var output = "";
do {
    output = output + index + " ";
    //console.log(index);
    index=index-10;
} while (index>=10);
console.log(output.trim());


