class Student{
    // Data members
    // Constructor
    constructor(name, college, marks, city){
        this.name = name;
        this.college = college;
        this.marks = marks;
        this.city = city;
    }
    // Member Function
    details(){
        console.log(`Name: ${this.name}, college: ${this.college}, marks: ${this.marks}, city: ${this.city}`);
    }
}

const stdJenny = new Student("Jenny", "COEP", "90%", "Pune");
stdJenny.details();

const stdStew = new Student("Stew", "MIT", "67%", "LA");
stdStew.details();

const stdElon = new Student("Elon", "Stanford", "97%", "LA");
stdElon.details();




class Fruits {
    //data member
    //constructor
    constructor(name, color, seed, taste, season){
        this.name = name;
        this.color = color;
        this.seed = seed;
        this.taste = taste;
        this.season = season;
    }
    details(){
        console.log(`Name : ${this.name}, Color : ${this.color}, Seed : ${this.seed}, Taste : ${this.taste}, Season : ${this.season}`);
    }
}

const mangoFruit = new Fruits("Mango", "Yellow", "Mono-seed", "Sweet", "Summer");
mangoFruit.details();