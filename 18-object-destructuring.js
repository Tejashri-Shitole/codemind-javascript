

const student = {
    name : "Jenny",
    city : "Pune",
    age : "24",
    pin : 415311,
    country : "India",
    isMarried : true
}
/*let city = student.city;
console.log(city);
let age = student.age;
let isMarried = student.isMarried;*/

let {name, city, age, isMarried, country="USA", marks=90} = student;
console.log(name, city, age, isMarried, country) ;
console.log(marks);
//console.log(student);


//Array destructuring
const array = ["Jenny", "Elon", "Stew"];
const [n1, n2, n3, n4=1]= ["Jenny", "Elon", "Stew"]
console.log(n1, n2, n3, n4);
console.log(array);

