

console.log("========== Assignment On Array ==========");
console.log(`Array for this assignment is as follows & with solving further question it gets modified step by step regarding to their results`);
console.log(" ");


console.log(`--- Que.1. Log the first element on console ---`);
const fruits_seasonal = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(fruits_seasonal);

const firstFruitElement = fruits_seasonal[0]
console.log(`First element of array is : ${firstFruitElement}`);
console.log("_________________________________________________________");
console.log(" ");


console.log(`--- Que.2. Log the last element on console ---`);
const LastFruitElement = fruits_seasonal[fruits_seasonal.length-1];
console.log(`Last element of array is : ${LastFruitElement}`);
console.log("_________________________________________________________");
console.log(" ");



console.log(`--- Que.3. Add element 'Papaya' before the element 'Banana' ---`);
console.log(`Given Array :`);
console.log(fruits_seasonal);
fruits_seasonal.unshift("Papaya");
console.log(`New array after adding new element 'Papaya' at start :`);
console.log(fruits_seasonal);
console.log("_________________________________________________________");
console.log(" ");



console.log(`--- Que.4. Remove 'Mango' from the array ---`);
console.log(`Given Array :`);
console.log(fruits_seasonal);
const removedElement = fruits_seasonal.splice(4, 1);
console.log(`New array after removing 'Mango' :`);
console.log(fruits_seasonal);
console.log("_________________________________________________________");
console.log(" ");



console.log(`--- Que.5. Add or insert an element 'Pineapple' at the last position ---`);
console.log(`Given Array :`);
console.log(fruits_seasonal);
fruits_seasonal.push("Pineapple");
console.log(`Modified array after inserting an element 'Pineapple' at the last position :`);
console.log(fruits_seasonal);
console.log("_________________________________________________________");
console.log(" ");



console.log(`--- Que.6. Insert an element 'Dragon Fruit' before 'Water Melon' ---`);
console.log(`Given Array :`);
console.log(fruits_seasonal);
fruits_seasonal.splice(4, 0, "Dragon Fruit");
console.log(`New array after inserting 'Dragon Fruit' before 'Water Melon :'`);
console.log(fruits_seasonal);
console.log("_________________________________________________________");
console.log(" ");



console.log(`--- Que.7. Replace an element 'Orange' with 'Kiwi' ---`);
console.log(`Given Array :`);
console.log(fruits_seasonal);
fruits_seasonal.splice(2, 1, "Kiwi");
console.log(`Array after replacing 'Orange' with 'Kiwi' :`);
console.log(fruits_seasonal);
console.log("_________________________________________________________");
console.log(" ");



console.log(`--- Que.8. Log the elements starting from index 1 to 4 ---`);
const removedFruits = fruits_seasonal.splice(1, 4);
console.log(`Result of elements starting from index 1 to 4 :`);
console.log(removedFruits);
console.log("_________________________________________________________");
console.log(" ");



console.log(`--- Que.9. Selecting only last three elements from array with length property ---`);
const fruits_seasonal_new = ['Papaya', 'Banana', 'Kiwi', 'Apple', 'Dragon Fruit', 'Water Melon', 'Pineapple'];
const newFruitsSelected = fruits_seasonal_new.slice(fruits_seasonal_new.length-3);
console.log(newFruitsSelected);
console.log(" ");










