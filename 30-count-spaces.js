function spaceCount(string) {
    let spaceCount = 0;
    for (const character of string) {
        if (character === ' ') {
            spaceCount++;
        }
    }
    return spaceCount;
}
console.log(`======= String 1. : 'Revision is the mother of success' ========`);
var result = spaceCount("Revision is the mother of success");
console.log(`Total count of spaces available in given string : ${result}`);
console.log(" ");

console.log(`======= String 2. : 'JavaScript is the language of internet world' ========`);
var resultTwo = spaceCount("JavaScript is the language of internet world")
console.log(`Total count of spaces available in given string : ${resultTwo}`);
console.log(" ");
console.log(`---------------------------------------------------------------------------`);
