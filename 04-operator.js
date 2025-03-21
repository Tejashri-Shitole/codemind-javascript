

function isEven(num){
    //var result = num%2;
    //console.log(`Reminder is : ${result}`);
    //console.log(`Reminder 0 means : Even, or it is odd : ${result}) `); 
    console.log(`====== Ternary Operator ======`);
    var result = num%2==0 ? "Even" : "Odd";
    console.log(`Given number ${num} is ${result}`);
}
isEven(5);
isEven(10);



console.log(`======Number is positive or negative======`);
function isPositive(num) {
    var result = num > 0 ? "Positive" : "Negative";
    console.log(`Given number ${num} is ${result}`); 
}
isPositive(7);


var greaterNumber = function(n1, n2){
    var result = n1 > n2 ? n1 : n2;
    console.log(result);  
}
greaterNumber(10, -10);
greaterNumber(800, 899);




