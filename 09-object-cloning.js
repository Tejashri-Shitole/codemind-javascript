

let employee = {
    name: "Jenny",
    age: 22,
    city: "Pune"
}

// let student = {};
// student = employee; // Shallow Clone

const clonedObject = Object.assign({}, employee);
console.log(employee);
console.log(clonedObject);



console.log("======= Merge Objects =========");
let std = {
    name: "Jenny",
    age: 22,
    city: "Pune"
}

const address = {
    street: "SB Road",
    pin: "112233"
}
const mergedObject = Object.assign({}, std, address);
console.log(mergedObject);

//shallow clone : spread(...) operator
const obj = {
    name : "Jenny",
    Age : 25,
    college : "JCEM",
    Degrees : {
        Graduation : "BCA",
        PostGraduation : "MCA" 
    },
    Friends : ["Stew", "Carl", "Martha"]
}
const cloneObj = {...obj};
console.log(cloneObj);

//shallow clone : Object.assign()
const objTwo = {
    a : "value",
    b : "keys",
    c : "key_value",
    d : {
        A : "Airplane",
        B : 1234
    },
    e : [1, 2, 3, 4]
}
const objClone = Object.assign({}, objTwo);
console.log(objClone);

//deep clone : JSON.parse(JSON.stringify(obj))
const objDeep = {
    a : 1,
    b : {
        c : 2
    }
};
const cloneObjDeep = JSON.parse(JSON.stringify(objDeep));
console.log(JSON.stringify(cloneObjDeep));
