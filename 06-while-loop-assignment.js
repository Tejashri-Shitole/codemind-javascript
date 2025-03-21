console.log(`******** Task done using 'while' loop *********`);
console.log(" ");

console.log("======= Print numbers from 5 to 15 by incrementing 1 ======");
var i = 5;
var output = "";
while (i<=15) {
    output = output+i+" ";
    //console.log(i);
    i=i+1;
}
console.log(output.trim());
console.log(" ");




console.log("======= Print numbers from 50 to 40 by decrementing by 1 ======");
var i = 50;
var output = "";
while (i>=40) {
    output = output + i + " ";
    //console.log(i);
    i=i-1;
}
console.log(output.trim());
console.log(" ");

console.log("======= Print first 15 odd numbers ======");
var i = 1;
var output = "";
while (i<=30) {
    output = output + i + " ";
    //console.log(i);
    i=i+2;
}
console.log(output.trim());
console.log(" ");

console.log("======= Print first 10 even numbers ======");
var i = 0;
var output = "";
while (i<=20) {
    output = output + i + " ";
    //console.log(i);
    i=i+2;
}
console.log(output.trim());
console.log(" ");


console.log("====== Print the table of 5 ======");
var i = 5;
var output = "";
while (i<=50) {
    output = output + i + " ";
    //console.log(i);
    i=i+5;
}
console.log(output.trim());
console.log(" ");


console.log("====== Print the table of 10 ======");
var i = 10;
var output = "";
while (i<=100) {
    output = output + i + " ";
    //console.log(i);
    i=i+10;
}
console.log(output.trim());
console.log(" ");


console.log("====== Print the table of 10 in reverse order ======");
var i = 100;
var output = "";
while (i>=10) {
    output += i + " ";
    //console.log(i);
    i=i-10;
}
console.log(output.trim());


