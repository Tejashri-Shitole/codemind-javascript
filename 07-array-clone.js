

let arrayNumbers = [7, 2, 5, 6, 4];
//using spread operator : deep cloning
let duplicateArray = [...arrayNumbers]
// let duplicateArray = arrayNumbers; this is shallow cloning

 
//merging two arrays using spread operator
const arrayOne = [1,2,3];
const arrayTwo = [4,5];
const mergedArray =[...arrayOne, ...arrayTwo]
console.log(mergedArray);

//merging two arrays using concat method
const arrayNumOne = [1,2,3,4];
const arrayNumTwo = [5,6,7];
const result = arrayNumOne.concat(arrayNumTwo);
console.log(result);
