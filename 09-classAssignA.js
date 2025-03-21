
class Vehicle {
    //constructor
    constructor(name, category, type, fuelType, usage){
        this.name = name;
        this.category = category;
        this.type = type;
        this.fuelType = fuelType;
        this.usage = usage;
    }
    details(){
        console.log(`Name of Vehicle : ${this.name}`);
        console.log(`Category of Vehicle : ${this.category}`);
        console.log(`Type of Vehicle : ${this.type}`);
        console.log(`fuel Type of Vehicle : ${this.fuelType}`);
        console.log(`Usage of Vehicle : ${this.usage}`);
    }
}
console.log("========== Defining Object with the help of Class -> Vehicle ===========");
console.log(" ");
const vehCar = new Vehicle("Tesla Model S", "Cars", "Electric", "Electrically charge", "Personal Transport");
vehCar.details();
console.log("----------------------------------------------------------------");
console.log(" ");

const vehMotor = new Vehicle("Yamaha YZF-R1", "Motorcycle", "Sports Bike", "Diesel/Petrol", "Racing");
vehMotor.details();
console.log("----------------------------------------------------------------");
console.log(" ");


const vehSpecial = new Vehicle("Mahindra", "Special Vehicle", "Tractor", "Diesel/Petrol", "Farming");
vehSpecial.details();
console.log("----------------------------------------------------------------");
console.log(" ");


const vehConstruct = new Vehicle("Caterpillar D8", "Construction Vehicle", "Bulldozer", "Diesel/Petro;", "Land Development");
vehConstruct.details();
console.log("----------------------------------------------------------------");
console.log(" ");


const vehAir = new Vehicle("C-130 Hercules", "Airplane", "Cargo Plane", "Fuel Engine", "Cargo transport");
vehAir.details();
console.log("----------------------------------------------------------------");
console.log(" ");


console.log("========== Defining Object with the help of Class -> College ===========");
console.log(" ");

class College {
    //constructor
    constructor(name, location, founded, type, famousAlumni) {
        this.name = name;
        this.location = location;
        this.founded = founded;
        this.type = type;
        this.famousAlumni = famousAlumni;
    }
    details(){
        console.log(`Name of college : ${this.name}`);
        console.log(`College Location : ${this.location}`);
        console.log(`Year of Founding : ${this.founded}`);
        console.log(`Type of college : ${this.type}`);
        console.log(`Famous People's from this college : ${this.famousAlumni}`);
    }
}
const collegeIim = new College("Indian Institutes of Management (IIMs)", "Calcutta", 1961, "Public Business Schools", "Raghuram Rajan (Former RBI Governor), Arvind Subramanian (Economist)")
collegeIim.details();
console.log("----------------------------------------------------------------");
console.log(" ");

const collegeIis = new College("Indian Institute of Science (IISc)", "Bangalore, Karnataka", 1909, "Public Research University", "Many ISRO & DRDO Scientists")
collegeIis.details();
console.log("----------------------------------------------------------------");
console.log(" ");

const collegeJnu = new College("Jawaharlal Nehru University (JNU)", "New Delhi", 1969, " Public University", "Nirmala Sitharaman (Finance Minister), S. Jaishankar (External Affairs Minister)")
collegeJnu.details();
console.log("----------------------------------------------------------------");
console.log(" ");

const collegeMahe = new College("Manipal Academy of Higher Education (MAHE)", "Manipal, Karnataka", 1953, "Private University", "Satya Nadella (Microsoft CEO)")
collegeMahe.details();
console.log(" ");

