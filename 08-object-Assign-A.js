

let professor = {
    name: "Acharya Bodhisattava",
    age: 36,
    designation: "Associate Professor",
    totalExperience: 11,
    degrees: {
        engineering: "CSC",
        masters: "Advance computing",
        PHD: "Core AI & Machine learning",
    },
    courses_teaching: "Machine Learning & NLP",
    certificates: ["Hacker Rank Participation", "Certificate in IFE Courses", "Certificate in Adv Programming", "Certificate in AI & Machine Learning"],
}
console.log("=========== Creating an object as 'professor'==============");
console.log(" ");

console.log("<----- Step 1 : Done adding properties to object 'professor' ----->");
console.log(" ");

console.log("<----- Step 2 : Done including nested object 'degrees' ----->");
console.log(" ");

console.log("<----- Step 3 : Done adding one array 'certificates' ----->");
console.log(" ");

console.log("<----- Step 4 : Following are the steps done after object creation ----->");
console.log(" ");

console.log("<----- Step 5 : Adding new property 'totalExperience' to an existing object 'professor' ----->");
professor.totalExperience = "14 years";
console.log(`New Object after adding 'totalExperience' : ${professor.totalExperience}`);
console.log(JSON.stringify(professor));
console.log(" ");

console.log("<----- Step 6 : Modifying existing property 'designation' ----->");
professor.designation = "Senior Professor";
console.log(JSON.stringify(professor));
console.log(" ");

console.log("<----- Step 7 : Adding new certificate property 'Oracle Certified' at the 2nd index of array 'certificates' ----->");
professor.certificates.splice(2, 0, "Oracle Certified");
console.log(professor.certificates);
console.log(" ");

console.log("<----- Step 8 : Log the last element of array 'certificates' ----->");
let element = professor.certificates[4];
console.log(`Last element of an array 'certificates' is : ${element}`);
console.log(" ");

console.log("<----- Step 9 : Log complete object using for-in loop ----->");
for (const key in professor) {
    if (Object.prototype.hasOwnProperty.call(professor, key)) {
        const element = JSON.stringify(professor[key]);
        console.log(`${key} : ${element}`);
    }
}





