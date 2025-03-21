
/*let palindrome = "madam";
let reversedPalindrome = "";
for (let index = palindrome.length-1; index>=0; index--) {
   reversedPalindrome = reversedPalindrome + palindrome[index];
}
console.log(`Original String : ${palindrome}`);
console.log(`Reversed String : ${reversedPalindrome}`);*/


function isPalindrome(str) {
    let leftIndex = 0;
    let rightIndex = str.length-1;
    while (leftIndex < rightIndex) {
        if (str[leftIndex] !== str[rightIndex]) {
        
            return false;
        }
        leftIndex++;
        rightIndex--;
    }
    return true;
}

console.log(`======== 1. madam =========`);
const mamPal = isPalindrome("madam");
console.log(`Given string 'madam' is palindrome : ${mamPal}`);
console.log(" ");

console.log(`======== 2. 141 =========`);
const numPal = isPalindrome("141");
console.log(`Given string '141' is palindrome : ${numPal}`);
console.log(" ");

console.log(`======== 3. Sunday =========`);
const sunPal = isPalindrome("Sunday");
console.log(`Given string 'Sunday' is palindrome : ${sunPal}`);
console.log(" ");

console.log(`======== 4. mom =========`);
const momPal = isPalindrome("mom");
console.log(`Given string 'mom' is palindrome : ${momPal}`);
console.log(" ");

console.log(`======== 5. listen =========`);
const lisPal = isPalindrome("listen");
console.log(`Given string 'listen' is palindrome : ${lisPal}`);
console.log(" ");

console.log(`======== 6. dad =========`);
const dadPal = isPalindrome("dad");
console.log(`Given string 'dad' is palindrome : ${dadPal}`);
console.log(" ");

console.log(`======== 7. No lemon, no melon =========`);
const phrasePal = isPalindrome("No lemon, no melon");
console.log(`Given phrase 'No lemon, no melon' is palindrome : ${phrasePal}`);
console.log(" ");


//Another method to check palindrome
function isItPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    if (str === reversed) {
      console.log(`'${str}' is a palindrome!`);
      return true;
    } else {
      console.log(`'${str}' is NOT a palindrome!`);
      return false;
    }
  }
  console.log(`======== 8. Rotor =========`);
  const phrasePalindrome = isPalindrome("Rotor");
  console.log(`Given string 'Rotor' is palindrome : ${phrasePalindrome}`);
  console.log(" ");