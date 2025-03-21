
//variable var is used to invoke before declaring a function 
console.log(city);
var city;

 
//but let and const cannot be called or invoked before declaring it
// console.log(age);
let age;
// console.log(PIN);s
const PIN = 411057;

 
//function can be called or invoked before declaring a function
show();
function show(){
    console.log("==== show function =====");
}

 
//but function expression cannot be called or invoked before declaring it
// display();
var display = function(){
    console.log("==== FE function =====");
}