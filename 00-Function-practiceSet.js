

//Function with no argument and no return value
function ageCriteria() {
    var age = 26;
    console.log(`My age is : ${age}`);
}
ageCriteria();

//Function with argument and return value
function ageCriteria(num) {
    var result = typeof (num);
    console.log(`Type of age is : ${result}`);
}
ageCriteria(26);

//function with argument and return value
function word(str){
    var strLength = str.length;
    var result = strLength*strLength;
    return result;
}
var wordLength = word("India");
console.log(`Square of word length is : ${wordLength}`);


//function with three arguments to log the addition
function addThreeValues(value1, value2, value3){
    var additionResult = value1 + value2 +value3;
    console.log(`Addition result of three values is : ${additionResult}`);
    
}
addThreeValues(10.23, 600, 40);
addThreeValues("Hello", "Good", "Morning");

//function for personal details
function personalDetails(firstName, lastName, collegeName) {
    console.log(`********* Personal Details *********`);
    console.log(`My first name is : ${firstName} and last name is : ${lastName} and college name is : ${collegeName}`);
    console.log(firstName.concat(lastName).concat(collegeName));
}
personalDetails("Tejashri", "Shitole", "JCPM");


//function for bank details
function bankDetails(bankName, accountNum, location, pinCode) {
    console.log(`Bank Name is : ${bankName}`);
    console.log(`Account Number is : ${accountNum}`);
    console.log(`Location is : ${location}`);
    console.log(`Pin code ia : ${pinCode}`);
}
bankDetails("CITY Bank", 3456782345, "Pune", 431202);
bankDetails("Axis Bank", 7856782345, "Mumbai", 441202);
bankDetails("HDFC Bank", 8956782345, "Pune", 631202);


