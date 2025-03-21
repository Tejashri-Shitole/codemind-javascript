

var voteEligible = function(age){
    if (age==0 || age<0 || age>=130) {
        console.log(`You have entered an Invalid Data`);
    } else {
        if (age<18) {
            console.log(`You are not eligible for voting`);
        } else {
            console.log(`Congratulations!! You are eligible for vote`);
        }
    }
}
console.log(`** checking ifElse statement for age>=18 **`);
voteEligible(18);

console.log(" ");

console.log(`** checking ifElse statement for negative age **`);
voteEligible(-10);
console.log(" ");

console.log(`** checking ifElse statement for age=90 **`);
voteEligible(90);
console.log(" ");

console.log(`** checking ifElse statement for age<18 **`);
voteEligible(15);
console.log(" ");

console.log(`** checking ifElse statement for age=30 **`);
voteEligible(30);
console.log(" ");
