

console.log("============ Converting JSON to Object ============== ");

const employeeAleix = `{
    "name": "Aleix Melon",
    "id": "E00245",
    "role": ["Dev", "DBA"],
    "age": 23,
    "doj": "11-12-2019",
    "married": false,
    "address": {
        "street": "32,Laham St.",
        "city": "Innsbruck",
        "country": "Austria"
    },
    "referred-by": "E0012"
}`

//console.log(typeof employeeAleix);
const employeeAleixObj = JSON.parse(employeeAleix);
console.log(employeeAleixObj);
console.log("---------------------------------------------------------------");
console.log(" ");


console.log("******** Specific array 'role' from converted object *********");
const rolePos = employeeAleixObj.role;
console.log(rolePos);
console.log(`Log only first element : `);
console.log(`${rolePos[0]}`);
console.log("---------------------------------------------------------------");
console.log(" ");

console.log("******** Log only last name from converted object ********");
const lastName = employeeAleixObj.name;
//sconsole.log(lastName);
console.log(lastName.substr(6, 5));
console.log("---------------------------------------------------------------");
console.log(" ");

console.log("******** Log only joining year of employee ********");
const joinDoj = employeeAleixObj.doj;
//console.log(joinDoj);
console.log(joinDoj.substr(6, 4));
console.log(" ");















