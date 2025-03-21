

var show = function(num, num2){
    console.log(`Inside show`);
    return "Hello";
}
var result = show(10, 11);
console.log(result);


var show = function(str){
    var strLength = str.length;
    var result = strLength * strLength;
    return result;
}
var square = show("JavaScript");
console.log(`Given word JavaScript and it's length square is: ${square}`);

var square = show("Google Chrome");
console.log(`Given word Google Chrome and it's length square is: ${square}`);

var wordLengthOpr = function(){
    var str = "I am UI Developer";
    var wordLength = str.length;
    var words = str.split(" ").length;
    var result = wordLength/words;
    console.log(result);
    var result = wordLength * words
    console.log(result);
}
wordLengthOpr();